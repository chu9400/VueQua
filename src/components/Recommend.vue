<template>
  <div class="container">

    <div class="recom-text">
      추천상품
    </div>



    <div class="recom-img">
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="../../public/image/banner02.png" class="d-block w-100" alt="#">
            <div class="carousel-caption d-none d-md-block">
              <h5>1숏바디 플로리다 가아</h5>
              <p>1퀄리티로 선별된 종어로 번식하여 입이 매우 길고 발색과 스팟이 뛰어납니다.</p>
            </div>
          </div>


          <div class="carousel-item" data-bs-interval="2000">
            <img src="../../public/image/banner02.png" class="d-block w-100" alt="#">
            <div class="carousel-caption d-none d-md-block">
              <h5>2숏바디 플로리다 가아</h5>
              <p>2퀄리티로 선별된 종어로 번식하여 입이 매우 길고 발색과 스팟이 뛰어납니다.</p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <img src="../../public/image/banner02.png" class="d-block w-100" alt="#">
            <div class="carousel-caption d-none d-md-block">
              <h5>3숏바디 플로리다 가아</h5>
              <p>3퀄리티로 선별된 종어로 번식하여 입이 매우 길고 발색과 스팟이 뛰어납니다.</p>
            </div>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  </div>
</template>



<script>
/* import {mapMutations, mapState} from 'vuex' */



export default {
  name: 'Recommend',
/*   computed : {
    ...mapState(['category02_State']),
  },

  methods : {
    ...mapMutations(['category02_StateChange']),
  }, 
 */
}
</script>

<style>
</style>