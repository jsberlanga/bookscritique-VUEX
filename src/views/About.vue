<template>
  <div class="about">
    <appWelcome msg="Welcome to the ABOUT Page" />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem officiis quam hic doloribus quis totam, consequuntur fugiat natus voluptates consectetur obcaecati non debitis mollitia tenetur, quaerat asperiores laboriosam minus, nesciunt modi culpa illum ipsam corporis distinctio? Eos, molestiae voluptate! Quisquam iusto quibusdam est rerum debitis amet voluptatibus voluptates quos reprehenderit?</p>
  </div>
</template>

<script>
import Welcome from '../components/Welcome'

export default {
  components: {
    appWelcome: Welcome
  }
}
</script>

<style scoped>
.about{
  background-color: rgb(255, 224, 229);
  box-shadow: 2px 2px 2px rgb(255, 207, 215); 
  
}
</style>
