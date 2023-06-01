<template>
  <card-component title="Edit Profile" icon="account-circle">

    <!-- Start user profile update form -->
    <form @submit.prevent="submit">
      <hr>
      <b-field horizontal label="Name" :message="formNameMessage" :type="formNameType">
        <b-input v-model="form.name" name="name" required/>
      </b-field>
      <b-field horizontal label="E-mail" :message="formEmailMessage" :type="formEmailType">
        <b-input v-model="form.email" name="email" type="email" required/>
      </b-field>

      <hr>
      <b-field horizontal>
        <div class="control">
          <button type="submit" class="button is-success" :class="{'is-loading':isLoading}">
            Submit
          </button>
        </div>
      </b-field>
    </form>
    <!-- End user profile update form -->
  </card-component>
</template>

<script>
import each from 'lodash/each'
import { mapState } from 'vuex'
import FilePicker from '@/components/FilePicker'
import CardComponent from '@/components/CardComponent'

export default {
  name: 'ProfileUpdateForm',
  components: {
    CardComponent,
    FilePicker
  },
  data () {
    return {
      isFileUploaded: false,
      isLoading: false,
      errors: {},
      form: {
        name: null,
        email: null
      }
    }
  },
  computed: {
    formNameType() {
      return this.errors.name?'is-danger':null
    },
    formNameMessage() {
      return this.errors.name?this.errors.name[0]:'Required. Your name'
    },
    formEmailType() {
      return this.errors.email?'is-danger':null
    },
    formEmailMessage() {
      return this.errors.email?this.errors.email[0]:'Required. Your e-mail'
    },
    formPhoneType() {
      return this.errors.phone?'is-danger':null
    },
    formPhoneMessage() {
      return this.errors.phone?this.errors.phone[0]:'Required. Your Phone'
    },
    ...mapState([
      'userName',
      'userEmail',
      'phone'
    ])
  },
  mounted () {
    this.form.name = this.userName
    this.form.email = this.userEmail
    this.form.phone = this.phone
  },
  methods: {
    fileStored(file) {
      this.isFileUploaded = true
      this.form.file_id = file.id

      if (this.form.name && this.form.email) {
        this.submit()
      }
    },
    emitIsForbidden() {
      this.$emit('is-forbidden')
    },
    submit() {
      this.isFileUploaded = false
      this.isLoading = true
      this.errors = {}
      axios
        .patch('/user', this.form)
        .then(r => {
          this.isLoading = false
          this.$store.commit('user', r.data.data)
          this.$buefy.snackbar.open({
            message: 'Profile updated',
            duration: 1000,
            queue: false
          })
        })
        .catch(err => {
          this.isLoading = false
          if (err.response.data.errors) {
            this.errors = err.response.data.errors
          } else if (err.response.status === 403) {
            this.$emit('is-forbidden')
            this.errors = {
              _all: ['Forbidden with demo account']
            }
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
              duration: 3000
            })
          })
        })
    }
  },
  watch: {
    userName (newValue) {
      this.form.name = newValue
    },
    userEmail (newValue) {
      this.form.email = newValue
    },
    phone (newValue) {
      this.form.phone = newValue
    }
  }
}
</script>
