<template>
  <Nav />
  <Menu />
  <Modal />
  <Recommend />
  <Contents />
</template>

<script>

import Nav from "./components/Nav.vue";
import Modal from "./components/Modal.vue";
import Menu from "./components/Menu.vue";
import Recommend from "./components/Recommend.vue";
import Contents from "./components/Contents.vue";

export default {
  name: "App",
  components: {
    Nav,
    Menu,
    Modal,
    Recommend,
    Contents,
  },

};
</script>

<style>
#app {
    font-family: Arial, sans-serif, 'SUIT';
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 5000px;
  }
</style>
