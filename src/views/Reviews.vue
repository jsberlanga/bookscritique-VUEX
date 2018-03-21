<template>
  <div id="reviews">
    <h1>Reviews Page</h1>
    <button @click="logout">Logout from firebase</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.replace('login')
        })
    }
  }
}
</script>
