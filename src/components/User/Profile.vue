<template>
  <div id="profile">
    <h2>Hello {{user.displayName}}! This is your Profile Page</h2>    
    <h3>Your email is {{userEmail}}!</h3>
    <h3>Please enter some details so we can know you better</h3>
    <form @submit.prevent="setUserProfile">
      <div class="item">
      <p>Enter your Name</p><input 
      id="displayName"     
      type="text" 
      name="displayName" 
      required 
      placeholder="Name"
      v-model="user.displayName" />
      </div>

      <br><br>

      <div class="item">
      <p>Enter your Picture </p><input 
      id="photoURL"     
      type="text"
      name="photoURL" 
      required 
      v-model="user.photoURL" />
      </div>
      
      <div class="btn">
      <button id="btn" @click="setUserProfile">Submit</button>
      </div>
    </form>
    

  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        displayName: '',
        photoURL: ''
      },
      userEmail: this.$store.state.user.email
    }
  },
  methods: {
    setUserProfile () {
      this.$store.dispatch('setUserProfile', {
        displayName: this.user.displayName,
        photoURL: this.user.photoURL
      })
    }
  }
}
</script>

<style scoped>
  #profile > * {
    margin: 20px;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  form {
    border-radius: 3pt;
    box-shadow: 2px 2px 2px silver;
    padding: 40px;
  }

  #btn {
    margin-top: 40px;
  }

</style>

