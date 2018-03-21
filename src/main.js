import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
    apiKey: "AIzaSyAOyOzAzXpV__dAgUWgxNzNOXCs-jw2eqU",
    authDomain: "vue-books-blog.firebaseapp.com",
    databaseURL: "https://vue-books-blog.firebaseio.com",
    projectId: "vue-books-blog",
    storageBucket: "vue-books-blog.appspot.com",
    messagingSenderId: "904541823934"
  };

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


