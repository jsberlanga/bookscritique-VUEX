<template>
  <div id="header">

    <nav class="navbar">

      <ul>
        <h1 class="main">
          <router-link to="/">{{appTitle}}</router-link>
        </h1>

        <li v-for="(item,index) in menuItems" :key="index">
          <router-link :to="item.path"><i :class="item.icon"></i> {{item.title}}</router-link>
        </li>

          <li
            @click="userSignOut"
            v-if="isAuthenticated"><a><i class="fas fa-sign-out-alt"></i> Logout</a></li>

      </ul>

    </nav>

  </div>
</template>

<script>
export default {
  computed: {
    appTitle () {
      return this.$store.state.appTitle
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    menuItems () {
      if (this.isAuthenticated) {
        return [
          {title: 'Reviews', path: '/reviews', icon: 'fas fa-book'},
          {title: 'New', path: '/review/new', icon: 'fas fa-edit'},
          {title: 'Profile', path: '/profile', icon: 'fas fa-user-circle'},
        ]
      } else {
        return [       
          {title: 'Register', path: '/register', icon: 'fas fa-user-plus'},
          {title: 'Login', path: '/login', icon: 'fas fa-sign-in-alt'},
        ]
      }
    }
  },
  methods: {
    userSignOut () {
      this.$store.dispatch('userSignOut')
    }
  }
};
</script>


<style scoped>
.navbar {
  background: darkseagreen;
  padding: 15px;
}

.navbar h1 {
  margin: 0;
  padding: 0;
  font-size: 30px;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
}

@media (max-width: 1060px) {
.navbar ul {
  flex-direction: column;
  align-items: center;
  }
}

.navbar li {
  list-style-type: none;
  display: flex;
  font-size: 19px;
  margin-top: 5px;
}

.navbar a {
  text-decoration: none;
  color: darkslateblue;
  font-weight: bold;
  cursor: pointer;
}

.navbar a.router-link-exact-active {
  color: ghostwhite;
}

.navbar .elements-left,
.navbar .elements-right {
  display: flex;
  justify-content: space-between;
}

.navbar .elements-left li,
.navbar .elements-right li {
  padding: 0px 70px;
}
</style>
