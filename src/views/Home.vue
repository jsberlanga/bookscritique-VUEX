<template>
  <div class="home">
    <img class="home-img" src="../../public/img/book-2.jpeg" alt="" srcset="">
    <appWelcome msg="Welcome to the Book Critique"/>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi fugiat reiciendis itaque quaerat illum vero quis error tempore repudiandae. Dolor nihil ipsam consequatur quo cupiditate nesciunt perferendis dolorem perspiciatis quibusdam, expedita natus libero soluta ea commodi.</p>
    <br>
    <router-link to="/reviews">
    <button class="btn"><i class="fas fa-arrow-alt-circle-right"></i> Visit Our Reviews</button>
    </router-link>
    
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
  /* background-color: rgb(200, 255, 224); */
  /* box-shadow: 2px 2px 2px rgb(177, 216, 194);   */
}

.home-img {
  background-size: cover;
  width: 80vw;
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
</style>
