<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <transition name="zoom" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
}

#app {
  text-align: center;
  color: #2c3e50;
  font-family: 'Playfair Display', serif;
}

h1 {
  font-family: 'Merriweather', serif;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.home, .about {
  width: 80%;
  min-height: 50vh;
  margin-left: 10vw;

  border-radius: 10pt;
  padding: 20px;
}

.zoom-enter-active {
  animation: zoomIn 1s
}
.zoom-leave-active {
  animation: zoomOut 1s
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
    transform: scale(1);    
  }
  to {
    opacity: 0;
    transform: scale(0.7);    
  }
}

</style>
