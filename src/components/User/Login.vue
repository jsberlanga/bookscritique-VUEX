<template>
  <div id="login">
  <h1> Sign In </h1>
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
      @click="login"
      >Login</button>

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
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            console.log(user)
            this.$router.replace("/reviews");
          },
          err => {
            console.log("Oops. " + err.message);
          }
        );
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

