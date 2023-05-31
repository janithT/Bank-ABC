import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /* User */
    userId: null,
    userName: null,
    userEmail: null,
    userAccount: null,
    userBalence: null,
    bankAccount:null,
    
    /* NavBar */
    isNavBarVisible: true,

    /* FooterBar */
    isFooterBarVisible: true,

    /* Aside */
    isAsideVisible: true,
    isAsideMobileExpanded: false
  },
  mutations: {
    /* A fit-them-all commit */
    basic(state, payload) {
      state[payload.key] = payload.value;
    },

    /* User */
    user(state, payload) {
      if (payload.id) {
        state.userId = payload.id
      }
      if (payload.name) {
        state.userName = payload.name;
      }
      if (payload.email) {
        state.userEmail = payload.email;
      }
      if (payload.user_accounts) {
        state.bankAccount = payload.user_accounts;
        state.userAccount = payload.user_accounts.account_number;
        state.userBalence = payload.user_accounts.amount;
      }


    },

    /* Aside Mobile */
    asideMobileStateToggle(state, payload = null) {
      const htmlClassName = "has-aside-mobile-expanded";

      let isShow;

      if (payload !== null) {
        isShow = payload;
      } else {
        isShow = !state.isAsideMobileExpanded;
      }

      if (isShow) {
        document.documentElement.classList.add(htmlClassName);
      } else {
        document.documentElement.classList.remove(htmlClassName);
      }

      state.isAsideMobileExpanded = isShow;
    }
  },
  actions: {}
});
