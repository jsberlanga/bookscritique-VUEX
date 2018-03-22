<template>
  <div id="login">
  <h1> Sign In </h1>
  <form  @submit.prevent="userLogin" >
    <input
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
        v-model="password" />
    
    <button
      id="btn"
      @click="userLogin"
      >Login</button>
    </form>
  <p>You don't have an account yet? In that case please go back to <router-link to="/register">Register</router-link></p>

  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'login',
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    userLogin() {
      return this.$store.dispatch('userLogin', {
        email: this.email,
        password: this.password
      })
      }
    }
  };
</script>


<style scoped>
p {
  margin-top: 20px;
}

input {
  min-height: 40px;
  padding: 10px;
  font-family: "Playfair Display", serif;
  font-size: 18px;
  outline-color: darkslategray;
  background: ghostwhite;
  border: none;
  box-shadow: 1px 0px 1px silver;
  margin-top: 20px;
}

#btn {
  padding: 10px;
  background: darkseagreen;
  box-shadow: 1px 0px 1px seagreen;
  border: none;
  font-family: "Playfair Display", serif;
  font-size: 18px;
  color: white;
  font-weight: bold;
  letter-spacing: 1.5px;
  cursor: pointer;
}

#btn:active {
  background: seagreen;
}
</style>

