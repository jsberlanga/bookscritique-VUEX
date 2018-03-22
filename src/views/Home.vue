<template>
  <div class="home">
    <img class="home-img" src="../../public/img/book-2.jpeg" alt="" srcset="">

    <div class="container">
      <appWelcome msg="Welcome to La Booktique"/>
      <br>
      <p>La Booktique is an independent bookshop founded in 2012 by a freelance writer for aspiring writers.</p>
      <p>It now opens its doors to the critique world. You are more than welcome to 
      <strong><router-link to="/login">
      join us
      </router-link></strong></p>
      <br>
      <router-link to="/reviews">
        <button class="btn"><i class="fas fa-arrow-alt-circle-right"></i> Visit Our Reviews</button>
      </router-link>
    </div>

  </div>
</template>

<script>
import Welcome from '../components/Shared/Welcome'

export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: {
    appWelcome: Welcome
  }
}
</script>

<style scoped>
.home {
  max-width: 100vw;
  margin: 0 auto;
}

.home-img {
  background-size: cover;
  height: 50vh;
  opacity: 0.7;
  border-radius: 10pt;
  margin-bottom: 20px;
  overflow: hidden;
}

@media (max-width: 900px) {
  .home-img {
  max-width: 70vw;
  }
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
  border-radius: 2pt
}

.container {
  max-width: 70vw;
  margin: 0 auto;  
}
p {
  margin-bottom: 10px;
}

</style>
