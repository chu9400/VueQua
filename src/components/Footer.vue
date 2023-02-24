<template>
  <footer>
    <div class="container footer-Wrap ">
      <div class="row">
        <!-- 좌측 -->
        <div class="col-7">
          <ul class="row f-l-01">
            <li class="col-2">회사소개</li>
            <li class="col-2">이용약관</li>
            <li class="col-2">이용안내</li>
            <li class="col-3">공정거래위원회</li>
            <li class="col-3">개인정보처리방침</li>    
          </ul>

          <ul class="f-l-02">
            <li>VUEQUA</li>
          </ul>

          <ul class="f-l-03">
            <li class="f-l-03-01">(주)뷰쿠아  |  대표: 최OO  |  전화: 070-1234-5678  |  주소:  서울특별시 중랑구 양원역로 37</li>
            <li class="f-l-03-02">통신판매업신고번호: 2016-서울양원-0000  |  사업자등록번호: 000-00-00000 사업자등록확인  |  개인정보보호책임자: 최OO seacloud@gmail.com</li>
            <li class="f-l-03-03">고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 PG사의 구매안전서비스를 이용하실 수 있습니다. 서비스가입사실확인</li>
            <li class="f-l-03-04">COPYRIGHT (주)뷰쿠아. ALL RIGHTS RESERVED. designed by WISA.</li>
          </ul>

        </div>

        <!-- 우측 -->
        <div class="col-5">
          <div class="f-r-01">
            <ul class="row">
              <li class="col">
                <p>무통장입금</p>
                <span>KB 국민 00000-00-000000</span>
                <span>예금주: (주)뷰쿠아</span>
              </li>
              <li class="col">
                <p>고객센터: 070-0000-0000</p>
                <span>업무시간: 평일 10:00~ 18:00</span>
                <span>휴무안내: 토·일 공휴일 휴무</span>
              </li>
            </ul>
          </div>
          <div class="f-r-02">
            <ul class="row">
              <li class="col">
                <p>오프라인 방문</p>
                <span>서울특별시 중랑구 양원역로 37</span>
                <span>평일 14:00~ 19:00 운영</span>
                <span>휴무안내: 토·일 공휴일 휴무</span>
              </li>
              <li class="col">
                <p>FAQ</p>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>


  
</template>

<script>

  export default {
    name: 'Footer',
  
  };
</script>

<style>

footer{
  max-width: 1920px;
  height: 450px;
  background-color: #F2F2F2;
  margin: 0 auto;
}

.footer-Wrap{
    max-width: 1180px;
/*     background-color: green; */
    text-align: left;
  
}


.f-l-01{
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #111111;
  padding: 15px;
}

.f-l-02{
  text-align: left;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: 0.5px;
  color: #111111;
}

.f-l-03{
  text-align: left;
}

.f-l-03-02 {
font-weight: 600;
font-size: 12px;
line-height: 15px;

}
.f-l-03-03 {
font-weight: 400;
font-size: 12px;
line-height: 15px;
}

.f-r-01, .f-r-01 p{
font-weight: 600;
font-size: 16px;
line-height: 20px;
}

.f-r-01, .f-r-01 span{
font-weight: 500;
font-size: 14px;
line-height: 17px;
display: block;
}

.f-r-01{
  margin-top: 100px;
  
}
.f-r-02{
  margin-bottom: 100px;
}
</style>