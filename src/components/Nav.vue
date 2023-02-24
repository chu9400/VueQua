<template>

  <nav class="nav">
    <div class="nav-Wrap container row">
        <div class="row icon col-md-4 ">
          <p class="col-md-3" @click="모달창상태변경()"><img src="../../public/image/user.png" alt="user"></p>
          <p class="col-md-3"><img src="../../public/image/heart.png" alt="heart"></p>
          <p class="col-md-3"><img src="../../public/image/cart.png" alt="cart"></p>
        </div>

        <div class="logo col-md-4">
          <p>VUEQUA</p>
        </div>

        <div class="search col-md-4">
          <form action="#">
            <input type="text" />
          </form>
        </div>
   

    </div>
  </nav>
</template>



<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'Nav',
  components: {
    
  }, 
  computed : {
    ...mapState(['모달창상태', '원룸들','누른거']),
  },

  methods : {
    ...mapMutations(['모달창상태변경']),
  }, 

}
</script>


<style>


.nav {
  display: flex;
  justify-content: center;
  width: 100%;
  line-height: 80px;
  margin: 0 auto;  
}

.nav-Wrap {
  width: 1180px;
  height: 80px;
  background: #ffffff;
}


.icon p{
  width: 20px;
  height: 18px;
  margin-right: 30px;
  cursor: pointer;

}

.logo p {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: #000000;
  text-align: center;
}

.search form {
  width: 350px;
}

.search input {
  height: 40px;
  text-align: right;
  width: 80%;
  border-radius: 15px;
}
</style>
