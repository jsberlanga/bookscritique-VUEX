<template>
<div id="register">
  <h1>Create Your Account</h1>
  <form action="">
    <input 
      id="email"     
      type="text" 
      name="email" 
      required 
      placeholder="Enter your Email"
      v-model="email" />
    
    <input 
      type="password" 
      name="password"
      required       
      placeholder="Password" 
      v-model="password"/>

      <input 
      type="password" 
      name="confirmPassword"
      required       
      placeholder="Confirm Password" 
      v-model="confirmPassword"/>
      

    <button
      class="btn"
      @click.stop.prevent="register"
    >Register</button>

    <p>Do you have an account already? In that case go back to <router-link to="/login">Login</router-link></p>
  </form>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  // computed: {
  //   comparePasswords () {
  //     this.password !== this.confirmPassword ? 'Passwords do not match' : ''
  //   }
  // },
  methods: {
    register () {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match')
        return
      }
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(function (user) {
          console.log(user)
        })
        .catch(err => console.log(err))
         
      this.$router.replace('login')
    }
  }
}
</script>


<style scoped>

form {
  display: flex;
  flex-direction: column;
}

h1 {
  margin-bottom: 20px;  
}

input {
  min-height: 40px;
  padding: 10px;
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  outline-color: darkslategray;
  background: ghostwhite;
  border: none;
  box-shadow: 1px 0px 1px silver;
}

.btn {
  padding: 10px;
  background: darkseagreen;
  border: none;
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  color: white;
  font-weight: bold;
  letter-spacing: 1.5px;
  cursor: pointer;
  box-shadow: 1px 0px 1px seagreen;
}

.btn:active {
  background: seagreen
}

p {
   margin-top: 20px;
}

</style>
