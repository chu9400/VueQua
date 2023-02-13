<template>
  <Nav />
  <Menu />
  <Modal />
  <Contents />
</template>

<script>

import Nav from "./components/Nav.vue";
import Modal from "./components/Modal.vue";
import Contents from "./components/Contents.vue";
import Menu from './components/Menu.vue';

export default {
  name: "App",
  components: {
    Nav,
    Modal,
    Contents,
    Menu,
  },

};
</script>

<style>

</style>
