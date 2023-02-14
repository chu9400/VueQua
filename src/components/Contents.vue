<template>
<div class="container">

  <div class="newContentText">
    신상품
  </div>

  <div class="contents" v-for="(a,i) in getData " :key="i">
    <img :src="getData[i].image" alt="">
    <p class="etc-text">기니야생</p>
    <p class="title-text">볼비티스 Wild [1뿌리]</p>
    <p class="price-text">4,000원</p>
    <p class="quantity-text">재고수량 - 1904개</p>
    

  </div>
  
</div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'Contents',
  computed : {
    ...mapState(['getData']),
  },

  methods : {
    ...mapMutations(['모달창상태변경', '신고하기']),
  }, 

}
</script>

<style>

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

</style>