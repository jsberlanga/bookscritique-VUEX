<template>
  <div id="header">

    <nav class="navbar">

      <ul>
        <h1 class="main">
          <router-link to="/">BookCritique</router-link>
        </h1>
        
        <div class="elements-left">
          <li>
            <router-link to="/about">About</router-link>
          </li>

          <li>
            <router-link to="/reviews">Reviews</router-link>
          </li>
        </div>
        
        <div class="elements-right">
          <li>
            <router-link to="/register">Register</router-link>
          </li>

          <li>
            <router-link to="/login">Login</router-link>
          </li>
        </div>

      </ul>

    </nav>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
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
  justify-content: space-between;
  /* flex-wrap: wrap */
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
}

.navbar a.router-link-exact-active {
  color: ghostwhite;
}

.navbar .elements-left,
.elements-right {
  display: flex;
  justify-content: space-between;
}

.navbar .elements-left li,
.navbar .elements-right li {
  padding: 0px 50px;
}
</style>
