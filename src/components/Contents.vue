<template>
  <div class="container">
    <div class="newContentText">
      신상품
    </div>

    <div class="contents" v-for="(a,i) in sliceDataNew" :key="i">
      <img :src="a.image" alt="">
      <p class="etc-text mt-2">{{a.etc}}</p>
      <p class="title-text mt-2">{{a.title}}</p>
      <p class="price-text mt-2">{{a.price.toLocaleString()}}</p>
      <p class="quantity-text">재고 수량 - {{a.quantity}}</p>
    </div>

    <div class="more" v-if="moreBtnState == true">
      <button type="button" class="more-btn" @click="showMore(), moreBtnStateFalse()"> 더보기 </button>
    </div>

    <div class="newContentText">
      뷰쿠아 용품
    </div>

    <div class="contents" v-for="(a,i) in sliceDataProduct" :key="i">
      <img :src="a.image" alt="">
      <p class="etc-text mt-2">{{a.etc}}</p>
      <p class="title-text mt-2">{{a.title}}</p>
      <p class="price-text mt-2">{{a.price.toLocaleString()}}</p>
      <p class="quantity-text">재고 수량 - {{a.quantity}}</p>
    </div>

    <div class="more" v-if="moreBtnState2 == true">
      <button type="button" class="more-btn" @click="showMore2(), moreBtnStateFalse2()"> 더보기 </button>
    </div>


  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'Contents',

    data() {
      return {
        moreBtnState : true,
        moreBtnState2 : true,
      }
    },

    computed: {
      ...mapState(['getData', 'displayCount', 'increaseAmount','getData2', 'displayCount2', 'increaseAmount2',]),


    // 상품 갯수 몇 개를 출력할지 정하는 함수
      sliceDataNew() {
        return this.getData.slice(0, this.displayCount);
      },

      sliceDataProduct() {
        return this.getData2.slice(0, this.displayCount2);
      },


    },

    methods: {
      ...mapMutations(['모달창상태변경', '신고하기', 'showMore', 'showMore2',]),

      // 더보기 버튼 함수
      moreBtnStateFalse() {
        if(this.displayCount >= this.getData.length ) {
          this.moreBtnState = false;
        } 
      },

      moreBtnStateFalse2() {
        if(this.displayCount2 >= this.getData2.length ) {
          this.moreBtnState2 = false;
        } 
      },

    },
  
  };
</script>

<style>
body p {
  margin-bottom : 0;
}

 .newContentText{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  
  letter-spacing: -1px;
  
  color: #171717;
  margin: 100px 0px;
}

.contents {
  display: inline-block;
  width: 25%;
  text-align: left;
  margin-bottom: 20px;
  padding: 15px;
  font-family: 'SUIT';
  font-style: normal;
}
.contents img {
  width: 100%;
}

.etc-text{
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}
.title-text{
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;

}
.price-text{
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #111111;
}

.quantity-text{
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.01em;
  color: #0047FF;
}


.more {

}

.more .more-btn{

font-family: 'SUIT';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #767676;

box-sizing: border-box;
width: 150px;
height: 50px;
left: 885px;
top: 2860px;
background: #FFFFFF;
border: 1px solid #767676;
border-radius: 30px;
}

.more .more-btn:hover{
    background:#767676;
    color: #FFFFFF;
}
</style>