<template>
  <nav class="nav container">
    <div class="row nav-Wrap">
      <div class="row icon col-4">
        <p class="col-md-3">아이콘1</p>
        <p class="col-md-3">아이콘2</p>
        <p class="col-md-3">아이콘3</p>
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
.nav {
  width: 1920px;
  line-height: 80px;
}

.nav-Wrap {
  width: 1180px;
  height: 80px;
  left: calc(50% - 1180px / 2);
  background: #ffffff;
  margin: 0 auto;
}

.icon {
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