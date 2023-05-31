<template>
  <div>
    <title-bar :title-stack="titleStack"/>
    <hero-bar :has-right-visible="false">
      {{ this.$store.state.userName }}
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <card-widget class="tile is-child" type="is-primary" icon="account-multiple" :number="this.$store.state.userAccount"  label="Account Number"/>
        <card-widget class="tile is-child" type="is-info" icon="chart-timeline-variant" prefix="$" :number="this.$store.state.userBalence"  label="Available Balance"/>
      </tiles>

    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import CardWidget from '@/components/CardWidget'
import CardComponent from '@/components/CardComponent'

export default {
  name: 'home',
  components: {
    CardComponent,
    CardWidget,
    Tiles,
    HeroBar,
    TitleBar,
  },
  
  data () {
    return {

    }
  },
  computed: {
    
    titleStack () {
      return [
        'User',
        'Dashboard'
      ]
    },
    ...mapState([
      'userId',
      'userAccount'
    ])
  },
 
  mounted () {
    this.$buefy.snackbar.open({
      message: 'Welcome back',
      queue: false
    })
  },
  
  methods: {

  }
}
</script>
