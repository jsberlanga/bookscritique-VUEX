import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Reviews from "./views/Reviews.vue";
import Login from "./components/User/Login.vue";
import Register from "./components/User/Register.vue";
import firebase from "firebase";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/login"
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
    }
  ],
  mode: "history"
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  // else if (!requiresAuth && currentUser) next("reviews");
  else next();
});

export default router;
