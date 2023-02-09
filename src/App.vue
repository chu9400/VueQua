<template>

  <Menu />

  <Modal />

  <Contents />

</template>

<script>

import Menu from './components/Menu.vue';
import Modal from './components/Modal.vue';
import Contents from './components/Contents.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Modal,
    Contents,
  }, 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
  }

  .menu a {
    color: white;
    padding: 10px;
  }

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 

.room-img{
  width: 80%;
  margin-top: 40px;
}

.white-bg img{
   width: 100%;
}
</style>
