import Axios from "axios"

export default {

    /**
     * Own transactions
     * 
     * @param {Object} data
     * @returns {Object}
     */
    addOwnTransaction(data) {
        return Axios.post('transactions/credit', 
            data
        );
    },

    /**
     * Own transactions logs
     * 
     * @returns {Object}
     */
    getOwnTransactionLogs() {
        return Axios.get('transactions/credit/logs');
    },

    /**
     * Beneficiary transactions
     * 
     * @param {Object} data
     * @returns {Object}
     */
    addBeneficiaryTransaction(data) {
        return Axios.post('transactions/beneficiary', 
            data
        );
    },

    /**
     * Own transactions logs
     * 
     * @returns {Object}
     */
    getBeneficiaryTransactionLogs() {
        return Axios.get('transactions/debit/logs');
    },

}