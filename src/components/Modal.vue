<template>
    <div class="black-bg" v-if="모달창상태 == true">
    <div class="white-bg stiky">
      <img src="" alt="">  
      <h4>로그인</h4>

      <ul class="login-text">
        <li>
          <p>아이디</p>
          <input type="text" placeholder="아이디를 입력해주세요">
        </li>
        <li>
          <p>비밀번호</p>
          <input type="text" placeholder="비밀번호를 입력해주세요">
        </li>
      </ul>

      <div class="login-btn">
        <button class="login-btn-text">로그인</button>
      </div>


      <div class="login-etc-text">
        <div class="row">
          <ul class="col-6 row">
            <li class="col-2">
              <input type="checkbox">
            </li>
            <li  class="col-10">
              로그인 유지하기
            </li>
          </ul>

          <ul class="col-6">
            <li>
              아이디/비밀번호 찾기  >
            </li>
          </ul>
        </div>

        <div class="etc-2">
          <p>SNS로 간편 로그인하기</p>
          <ul class="row">
            <li class="col-3">카카오</li>
            <li class="col-3">카카오</li>
            <li class="col-3">카카오</li>
            <li class="col-3">카카오</li>
            
          </ul>
          <p>뷰쿠아 회원이 아니신가요? 회원가입하기</p>
        </div>
      </div>

      



    <button class="close-btn" @click="모달창상태변경()">X</button>



      
      
      
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'Modal',
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

.black-bg{
    width: 100%;
    height: 8000px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top:0px; 
    z-index: 10;
}

.white-bg{
  max-width: 420px;
  height: 770px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin: 0 auto;
  position: sticky;
  top: 50px;
}

.white-bg h4{
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #000000;
}

.login-text{
  width: 380px;
  text-align: left;
  padding: 0;
  margin-top: 20px;
}

.login-text input{
  width: 380px;
  height: 60px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding: 0 10px;
}

.login-text li {
  margin: 15px 0;
}
.login-text p {
  padding: 10px 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #333333;
}

.login-btn{
  width:380px;
  height: 60px;
  background: #000000;
  
}
.login-btn-text {
  color: white;
  font-weight: 600;
  font-size: 18px;
  line-height: 300%;
  background : #000000;
}

.login-etc-text{
  margin-top: 20px;
}

.etc-2{
  margin-top: 40px;
}  
.etc-2 ul{
  padding: 0;
  margin-bottom: 60px;
}  

.etc-2 p{
  margin : 20px 0;
}


.close-btn{
  width: 60px;
  height: 60px;
  position: relative;
  top: 100px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 2px 2px 20px rgba(123, 113, 88, 0.15);
  border-radius: 30px;
  outline: 0;
  border: 0;
  color: white;
    
}

</style>