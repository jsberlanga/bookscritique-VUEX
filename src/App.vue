<template>
  <div id="app">
    <appHeader></appHeader>

    <div id="showcase">
      <transition name="zoom" mode="out-in">
        <router-view/>
      </transition>
    </div>

  </div>
</template>

<script>

import Header from './components/Shared/Header'

export default {
  components: {
    appHeader: Header
  },
  computed: {
  }
}
</script>


<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  letter-spacing: 1.5px;
}
body {
  background: ghostwhite
}

#app {
  text-align: center;
  color: #2c3e50;
  font-family: 'Playfair Display', serif;
  display: flex;
  flex-direction: column
}

#showcase {
  max-width: 80vw;
  margin: 0 auto;
}

#showcase > * {
  padding: 50px;
}

h1 {
  font-family: 'Merriweather', serif;
}

.zoom-enter-active {
  animation: zoomIn 0.5s
}
.zoom-leave-active {
  animation: zoomOut 0.5s
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
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
    transform: scale(0.9);    
  }
}

</style>
