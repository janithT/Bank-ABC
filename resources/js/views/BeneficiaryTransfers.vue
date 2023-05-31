<template>
  <section class="section is-main-section">
    <beneficiary-deposit-form  @transaction-completed="getBeneficiaryTransactions" class="tile is-child"/>
 
    <card-component title="Debit History" icon="account" class="tile is-child">
      <b-table 
        :data="transactions" 
        :per-page="perPage" 
        :loading="isLoading" 
        :columns="columns"
        :striped="true"
        :hoverable="true"
        :paginated="paginated">

        <section class="section" slot="empty">
            <div class="content has-text-grey has-text-centered">
              <template v-if="isLoading">
                <p>
                  <b-icon icon="dots-horizontal" size="is-large"/>
                </p>
                <p>Fetching data...</p>
              </template>
              <template v-else>
                <p>
                  <b-icon icon="emoticon-sad" size="is-large"/>
                </p>
                <p>Nothing's here&hellip;</p>
              </template>
            </div>
          </section>
      </b-table>
    </card-component>
</section>

</template>

<script>
import { mapState } from 'vuex'
import transactions from './../../js/library/transactions/transactions'
import CardComponent from '@/components/CardComponent'
import BeneficiaryDepositForm from '@/views/forms/BeneficiaryDepositForm'

export default {
  name: 'Othertransfers',
  components: {
    transactions,
    CardComponent,
    BeneficiaryDepositForm
  },
  data () {
    return {
      isLoading: false,
      paginated: false,
      perPage: 10,
      transactions:[],
      columns: [
                  {
                    field: 'to_account',
                    label: 'Beneficiary Account Number',
                    searchable: 'searchable'
                  },
                  {
                    field: 'amount',
                    label: 'Deopsit Amount',
                    searchable: 'searchable'
                  },
                  {
                    field: 'debtor_comment',
                    label: 'Debtor Comment',
                    searchable: 'searchable'
                  },
                  {
                    field: 'type',
                    label: 'Type',
                    searchable: 'searchable'
                  },
                  {
                    field: 'created',
                    label: 'Debited Date',
                    searchable: 'searchable'
                  },

              ]
    }
  },
  computed: {
    ...mapState([
      'userId',
      'userAccount'
    ])
  },
  created () {
    this.getBeneficiaryTransactions()
  },
  mounted () {

  },
  methods: {
    getBeneficiaryTransactions() {
      this.isLoading = true
      transactions.getBeneficiaryTransactionLogs().then(res=> {
        this.isLoading = false
        
        if (res.data && res.data.data) {
            if (res.data.data.length > this.perPage) {
              this.paginated = true
            }
            this.transactions = res.data.data
          }

      })
      .catch(err => {
        this.isLoading = false
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger"
          });
      });
    }

  },
  watch: {
    userAccount (newValue) {
      if (newValue) {
        this.getBeneficiaryTransactions()
      }
    },
  }
}
</script>
