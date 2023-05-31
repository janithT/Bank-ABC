<template>
  <div id="app">
    <nav-bar />
    <aside-menu :menu="menu" />
    <router-view />
    <footer-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";
import AsideMenu from "@/components/AsideMenu";
import FooterBar from "@/components/FooterBar";
import users from './../../resources/js/library/users/users'

export default {
  name: "home",
  components: {
    FooterBar,
    AsideMenu,
    NavBar,
    users
  },
  computed: {
    menu() {
      return [
            "General",
            [
              {
                to: "/",
                icon: "home",
                label: "Home"
              },
              {
                to: "/profile",
                icon: "account",
                label: "My Profile"
              },
            ],
            "Transfers",
            [
              {
                to: "/ownTransfer",
                icon: "account",
                label: "Deposits"
              },
              {
                to: "/otherTransfer",
                icon: "account-multiple",
                label: "Other Transfers"
              },
            ],
          ]   
    }
  },
  created() {

    users.get().then(res=> {
      this.$store.commit("user", res.data.data);
    })
    .catch(err => {
        this.$buefy.toast.open({
          message: `Error: ${err.response.data.message}`,
          type: "is-danger"
        });
    });

  }
};
</script>
