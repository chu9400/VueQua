<template>
  <div>
    <p>여기에 firestore doc 출력</p>
    <div v-for="(a, i) in documentData" :key="i">
      <p>{{ a.id }}</p>
      <p>{{ a.name }}</p>
      <p>{{ a.title }}</p>
    </div>
    <Nav />
    <Menu />
    <Modal />
    <Recommend />
    <Contents />
    <Review />
    <Footer />
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
import Modal from "./components/Modal.vue";
import Menu from "./components/Menu.vue";
import Recommend from "./components/Recommend.vue";
import Contents from "./components/Contents.vue";
import Review from "./components/Review.vue";
import Footer from "./components/Footer.vue";

import { db } from "./main.js";
import "firebase/firestore";

export default {
  name: "App",
  data() {
    return {
      documentData: [],
    };
  },
  components: {
    Nav,
    Menu,
    Modal,
    Recommend,
    Contents,
    Review,
    Footer,
  },
  mounted() {
    this.fbData();
  },
  methods: {
    fbData() {
      
      db.collection("product").get().then((result) => {
        result.forEach((doc) => {
          this.documentData.push(doc.data());
        });
      })

    },
  },
};
</script>
<style>
#app {
  font-family: "SUIT" !important;
  font-style: normal !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 5000px;
}
</style>