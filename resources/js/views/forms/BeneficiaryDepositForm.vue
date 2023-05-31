<template>
  <card-component title="Beneficiary Deposits" icon="account-circle">
    <form @submit.prevent="submit">
      <b-field grouped>
        <b-field expanded label="Your Account *" :message="formAccountNumberMessage" :type="formAccountNumberType">
          <b-input v-model="form.account_number" max="10" name="account_number" required :readonly="readonly"/>
        </b-field>
        <b-field expanded label="Transfer Amount *" :message="formAmountMessage" :type="formAmountType">
          <b-input v-model="form.beneficiary_amount" min="1" :max=this.balence name="beneficiary_amount" type="number" required/>
        </b-field>
        <b-field expanded label="Debtor Comment *" :message="formCommentMessage" :type="formCommentType">
          <b-input v-model="form.debtor_comment" max="15" name="debtor_comment" required/>
        </b-field>
      </b-field>

      <b-field grouped>  
        <b-field expanded label="Beneficiary Account *" :message="formBeneficiaryAccountNumberMessage" :type="formBeneficiaryAccountNumberType">
          <b-input v-model="form.beneficiary_account_number" max="10" name="beneficiary_account_number" required />
        </b-field>
        <b-field expanded label="Beneficiary Name *" :message="formBeneficiaryNameMessage" :type="formBeneficiaryNameType">
          <b-input v-model="form.beneficiary_name" max="15" name="beneficiary_name" required/>
        </b-field>
        <b-field expanded label="Beneficiary Comment *" :message="formBeneficiaryCommentMessage" :type="formBeneficiaryCommentType">
          <b-input v-model="form.beneficiary_comment" max="15" name="beneficiary_comment" required/>
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
  </card-component>
</template>

<script>
import each from 'lodash/each'
import { mapState } from 'vuex'
import transactions from './../../library/transactions/transactions'
import CardComponent from '@/components/CardComponent'

export default {
  name: 'OtherDepositForm',
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
      readonly:true,
      balence: null
    }
  },
  computed: {
    formAccountNumberType() {
      return this.errors.account_number?'is-danger':null
    },
    formAccountNumberMessage() {
      return this.errors.account_number?this.errors.account_number[0]:'Required. Your account number'
    },

    formBeneficiaryAccountNumberType() {
      return this.errors.beneficiary_account_number?'is-danger':null
    },
    formBeneficiaryAccountNumberMessage() {
      return this.errors.beneficiary_account_number?this.errors.beneficiary_account_number[0]:'Required. Beneficiary account number'
    },

    formBeneficiaryNameType() {
      return this.errors.beneficiary_name?'is-danger':null
    },
    formBeneficiaryNameMessage() {
      return this.errors.beneficiary_name?this.errors.beneficiary_name[0]:'Required. Beneficiary account number'
    },

    formAmountType() {
      return this.errors.beneficiary_amount?'is-danger':null
    },
    formAmountMessage() {
      return this.errors.beneficiary_amount?this.errors.beneficiary_amount[0]:'Required. Transfer amount'
    },

    formCommentType() {
      return this.errors.debtor_comment?'is-danger':null
    },
    formCommentMessage() {
      return this.errors.debtor_comment?this.errors.debtor_comment[0]:'Required. Your debtor comment'
    },

    formBeneficiaryCommentType() {
      return this.errors.beneficiary_comment?'is-danger':null
    },
    formBeneficiaryCommentMessage() {
      return this.errors.beneficiary_comment?this.errors.beneficiary_comment[0]:'Required. Your debtor comment'
    },

    ...mapState([
      'userId',
      'userAccount',
      'userBalence'
    ])
  },
  mounted () {
    // map state value to the varibale
    this.form.account_number = this.userAccount;
    this.form.user_id = this.userId;
    this.balence = this.userBalence;
  },
  methods: {
    // default form data.
    getClearFormObject() {
      return {
        user_id : this.userId,
        account_number: this.userAccount,
        beneficiary_account_number: null,
        beneficiary_amount: null,
        debtor_comment: null
      };
    },

    // form submit for beneficiary transfer
    submit() {
      this.isLoading = true;
      this.errors = {};

      // Check if same account number
      if(this.form.account_number == this.form.beneficiary_account_number){
        this.isLoading = false
          this.$buefy.toast.open({
            message: `Account number and beneficiary ammount should be diffrent`,
            type: "is-warning"
          }); 

        return
      }

      transactions.addBeneficiaryTransaction(this.form).then(res=> {
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
    userId (newValue) {
      this.form.user_id = newValue
    },
    userAccount (newValue) {
      this.form.account_number = newValue
    },
    userBalence (newValue) {
      this.balence = newValue
    }

  }
}
</script>
