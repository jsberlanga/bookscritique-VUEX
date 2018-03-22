import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from './views/NotFound.vue';

import Login from "./components/User/Login.vue";
import Register from "./components/User/Register.vue";

import Reviews from "./components/Reviews/Reviews.vue";
import Profile from "./components/User/Profile.vue";

import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      name: 'notfound',
      component: NotFound
    },
    {
      path: "/",
      name: 'home',
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/reviews",
      name: "reviews",
      component: Reviews,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }
  ],
  mode: "history"
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router