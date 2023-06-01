<template>
  <card-component title="Deposits" icon="account-circle">

    <!-- Start deposits user form -->
    <form @submit.prevent="submit">
      <b-field grouped>
        <b-field expanded label="Your Account *" :message="formAccountNumberMessage" :type="formAccountNumberType">
          <b-input v-model="form.account_number" max="10" name="account_number" required :readonly="readonly"/>
        </b-field>
        <b-field expanded label="Deposit Amount *" :message="formAmountMessage" :type="formAmountType">
          <b-input v-model="form.amount" min="1" name="amount" type="number" required/>
        </b-field>
        <b-field expanded label="Comment *" :message="formCommentMessage" :type="formCommentType">
          <b-input v-model="form.debtor_comment" max="15" name="comment" required/>
        </b-field>
      </b-field>

      <hr>
      <b-field expanded>
        <div class="control">
          <button type="submit" class="button is-success" :class="{'is-loading':isLoading}">
            Submit
          </button>
        </div>
      </b-field>
    </form>
    <!-- End deposits user form -->

  </card-component>
</template>

<script>
import each from 'lodash/each'
import { mapState } from 'vuex'
import transactions from './../../library/transactions/transactions'
import CardComponent from '@/components/CardComponent'

export default {
  name: 'OwnDepositForm',
  components: {
    transactions,
    CardComponent
  },
  data () {
    return {
      isFileUploaded: false,
      isLoading: false,
      errors: {},
      form: this.getClearFormObject(),
      readonly:true
    }
  },
  computed: {
    formAccountNumberType() {
      return this.errors.account_number?'is-danger':null
    },
    formAccountNumberMessage() {
      return this.errors.account_number?this.errors.account_number[0]:'Required. Your account number'
    },
    formAmountType() {
      return this.errors.amount?'is-danger':null
    },
    formAmountMessage() {
      return this.errors.email?this.errors.amount[0]:'Required. Deposit amount'
    },
    formCommentType() {
      return this.errors.debtor_comment?'is-danger':null
    },
    formCommentMessage() {
      return this.errors.debtor_comment?this.errors.debtor_comment[0]:'Required. Your comment'
    },
    ...mapState([
      'userId',
      'userAccount'
    ])
  },
  mounted () {
    // map state value to the varibale
    this.form.account_number = this.userAccount;
    this.form.user_id = this.userId;
  },
  methods: {
    // default form data.
    getClearFormObject() {
      return {
        user_id : this.userId,
        account_number: this.userAccount,
        amount: null,
        debtor_comment:null
      };
    },

    /**
     * Submit for own transfer.
     * 
     */ 
    submit() {
      this.isLoading = true;
      this.errors = {};

      transactions.addOwnTransaction(this.form).then(res=> {
        const {status, message} = res.data;
        this.isLoading = false
          this.$store.commit('user', res.data.data)
          this.$emit('transaction-completed');
          this.form = this.getClearFormObject();

          this.$buefy.snackbar.open({
            message: message,
            queue: false
          })

      }).catch(err => {
          this.isLoading = false
          if (err.response.data.errors) {
            this.errors = err.response.data.errors
          } else {
            console.error(err.response)
            this.errors = {
              _all: ['An error occurred']
            }
          }
          each(this.errors, err => {
            this.$buefy.toast.open({
              message: err[0],
              type: 'is-danger',
              queue: false,
            })
          })
        })
        // .finally(()=>{
        //   this.form = this.getClearFormObject();
        // })
    }
  },
  watch: {
    userAccount (newValue) {
      this.form.account_number = newValue
    },
    userId (newValue) {
      this.form.user_id = newValue
    },

  }
}
</script>
