<template>
  <div class="container">
    <div class="newContentText">
      신상품
    </div>
  </div>


    <div class="container">
    <div class="image-list">
      <img src='../../public/image/goods/img_0001.png' alt="image1" />
      <img src="image2.jpg" alt="image2" />
      <img src="image3.jpg" alt="image3" />
      <img src="image4.jpg" alt="image4" />
      <img src="image5.jpg" alt="image5" />
      <img src="image6.jpg" alt="image6" />
      <img src="image7.jpg" alt="image7" />
      <img src="image8.jpg" alt="image8" />
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'Review',

    data() {
      return {

      }
    },

    computed: {
      ...mapState(['getData3',]),

    },

    methods: {
      ...mapMutations(['',]),


    },
  
  };
</script>

<style>
body p {
  margin-bottom : 0;
}

 .newContentText{
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: -1px;
  color: #171717;
  margin: 100px 0px;
}

.container {
  max-width: 1920px;
  margin: 0 auto;
  overflow-x: auto;
}

.image-list {
  display: flex;
  justify-content: center;
  width: 1180px; /* 추가된 코드 */
}

.image-list img {
  width: 250px;
  height: 250px;
  margin: 0 20px;
  opacity: 0.5;
}

.image-list img:hover {
  opacity: 1;
}
</style>