import Axios from "axios"

export default {

    /**
     * Get current user
     * 
     * @returns {Object}
     */
    get() {
        return Axios.get('user');
    },

    /**
     * Own transactions
     * 
     * @param {Object} data
     * @returns {Object}
     */
    addOwnTransaction(data) {
        return Axios.post('transaction/own', {
            data
        });
    }
}