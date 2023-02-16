<template>
  <nav class="nav container">
    <div class="row nav-Wrap">

     
      
      <div class="row icon col-4">
        <p class="col-md-3"><img src="../../public/image/user.png" alt="user"></p>
        <p class="col-md-3"><img src="../../public/image/heart.png" alt="heart"></p>
        <p class="col-md-3"><img src="../../public/image/cart.png" alt="cart"></p>
      </div>

      <div class="logo col-4">
        <p>VUEQUA</p>
      </div>

      <div class="search col-4">
        <form action="#">
          <input type="text" />
        </form>
      </div>
    

    </div>
  </nav>
</template>



<script>
export default {};
</script>

<style>

.container{
  width: 1180px;
}

.nav {
  width: 1920px;
  line-height: 80px;
  
}

.nav-Wrap {
  width: 1180px;
  height: 80px;
  
  background: #ffffff;
  margin: 0 auto;
}

.icon p{
  width: 20px;
  height: 18px;
  margin-right: 30px;

}

.log p {
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