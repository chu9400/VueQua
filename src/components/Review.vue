<template>
  <div class="container">
    <div class="newContentText">
      구매후기
    </div>
  </div>


  <div class="view-Area container">
    <div class="view-Wrap">
      <ul class="d-flex">
        <li v-for="(a,i) in 10" :key="i">
          <img src="../../public/image/goods/img_0001.png" alt="">
          <p class="r-text-01">파르불루스 잘 받았습니다</p>
          <p class="r-text-02">전화로 15마리 예약하여 화요일날 받았는..</p>
          <ul class="d-flex r-text-03">
            <li class="">백민기</li>
            <li class="">2023-02-09</li>
          </ul>
          <ul class="d-flex r-text-04">
            <li>이미지</li>
            <li>파르불루스 리코리스 구라미 Wild</li>
          </ul>
        </li>
      </ul>
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

.view-Area {
  max-width: 1980px;
  margin-bottom: 150px;
}
.view-Wrap {
  width: 1180px;
  margin: 0 auto;
  overflow-x: auto; /* 가로 스크롤을 허용합니다 */
  white-space: nowrap; /* 가로 스크롤을 위해 내용들을 가로 한 줄에 나열합니다 */
  text-align: left;
}

.view-Wrap ul{
  
}

.view-Wrap>ul>li{
  margin-right: 15px;
}

.view-Wrap img{
  width: 280px;
  height: 312px;
}

.scrollable-content {
  display: inline-block; /* 내용물들이 세로로 쌓이지 않도록 inline-block으로 설정합니다 */
}

.r-text-01{
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;
  padding-left: 5px;
  padding-right: 5px;
}
.r-text-02{
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #111111;
  padding-left: 5px;
  padding-right: 5px;
}
.r-text-03{
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
  
  padding-left: 5px;
  padding-right: 5px;
}
.r-text-04{
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  padding-left: 5px;
  padding-right: 5px;
}
</style>