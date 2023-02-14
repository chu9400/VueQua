<template>
  <div class="menu container">

    <div class="category-01 row container" >
      <ul class="col-md-1 row">
        <li class="col-md-12">
          <svg @click="category02_StateChange()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </li>
      </ul>
      
      <ul class="col-md-11 d-flex justify-content-around" @mouseover="category02_StateTrue()" @mouseleave="category02_StateFalse()">
        <li class="col-md-1"><a href="#">신상품</a></li>
        <li class="col-md-1"><a href="#">생물</a></li>
        <li class="col-md-1"><a href="#">세계담수어</a></li>
        <li class="col-md-1"><a href="#">여과기/여과재</a></li>
        <li class="col-md-1"><a href="#">바닥재</a></li>
        <li class="col-md-1"><a href="#">사료</a></li>
        <li class="col-md-1"><a href="#">히터/냉각</a></li>
        <li class="col-md-1"><a href="#">조명</a></li>
        <li class="col-md-1"><a href="#">약품</a></li>
        <li class="col-md-1"><a href="#">번식/뜰채/청소</a></li>
        <li class="col-md-1"><a href="#">수조</a></li>
      </ul>
    </div>

    <div class="category-02 row container" v-if="category02_State == true">
      <ul class="col">
        <li>신상품</li>
        <li>용품</li>
        <li>생물</li>
      </ul>
      <ul class="col">
        <li>생물</li>
        <li>대형어/고대어</li>
        <li>가아피쉬</li>
        <li>가아피쉬</li>
        <li>가아피쉬</li>
        <li>가아피쉬</li>
        <li>가아피쉬</li>
        <li>가아피쉬</li>
        <li>가아피쉬</li>
        <li>가아피쉬</li>
        <li>가아피쉬</li>
        <li>가아피쉬</li>
        <li>가아피쉬</li>
        <li>가아피쉬</li>
      </ul>
      <ul class="col">
        <li>세계담수어</li>
        <li>아프리카</li>
        <li>남미</li>
        <li>아시아</li>
        <li>아메리카</li>
        <li>호주</li>
      </ul>
      <ul class="col">
        <li>세계담수어</li>
        <li>아프리카</li>
        <li>남미</li>
        <li>아시아</li>
        <li>아메리카</li>
        <li>호주</li>
      </ul>
      <ul class="col">
        <li>세계담수어</li>
        <li>아프리카</li>
        <li>남미</li>
        <li>아시아</li>
        <li>아메리카</li>
        <li>호주</li>
      </ul>
      <ul class="col">
        <li>세계담수어</li>
        <li>아프리카</li>
        <li>남미</li>
        <li>아시아</li>
        <li>아메리카</li>
        <li>호주</li>
      </ul>
      <ul class="col">
        <li>세계담수어</li>
        <li>아프리카</li>
        <li>남미</li>
        <li>아시아</li>
        <li>아메리카</li>
        <li>호주</li>
      </ul>

    </div>

  </div>

      <div class="banner">
      
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            
            <div class="carousel-item active" data-bs-interval="5000">
              <img src="../../public/image/banner01.png" class="d-block w-100" alt="">
            </div>

            <div class="carousel-item active" data-bs-interval="5000">
              <img src="../../public/image/banner02.png" class="d-block w-100" alt="">
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

</template>



<script>
import {mapMutations, mapState} from 'vuex'



export default {
  name: 'Menu',
  computed : {
    ...mapState(['category02_State']),
  },

  methods : {
    ...mapMutations(['category02_StateTrue','category02_StateFalse','category02_StateChange']),
  }, 

}
</script>

<style>
</style>