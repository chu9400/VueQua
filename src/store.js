import { createStore } from 'vuex'
import axios from 'axios'

import data from './assets/data.js';

const store = createStore({
  state(){
    return {
      more : {},
      모달창상태 : false,
      getData : data,
      누른거 : 0,
      category02_State : false,
      displayCount: 8, // 처음에는 8개만 렌더링합니다.
      increaseAmount: 4, // 버튼 클릭 시 렌더링할 데이터의 수를 증가시킵니다.
  
    }
  },

  mutations : {
    이름변경(state) {
        state.name = 'choi';
    },
    신고하기(state, payload){
      state.getData[payload].신고상태 = !state.getData[payload].신고상태;
      state.getData[payload].신고수 += state.getData[payload].신고수 ? -1 : 1;
      
    },
    모달창상태변경(state, payload){
      state.모달창상태 = !state.모달창상태;
      state.누른거 = payload;
    },

    // ------ 카테고리 상태 변경하는 함수 ------- 

    category02_StateTrue(state){
      state.category02_State = true;
    },
    category02_StateFalse(state){
      state.category02_State = false;
    },
    category02_StateChange(state){
      state.category02_State = !state.category02_State;
    },
    
    // ------ end 카테고리 상태 변경하는 함수 ------- 

    // ------ 더보기 버튼 함수 ------- 

    showMore(state) {
      // displayCount 값을 increaseAmount 만큼 증가시킵니다.
      state.displayCount += state.increaseAmount;
    },


    // ------ end 더보기 버튼 함수 ------- 

  },

  actions : {
    getData() {
        axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((result) => {
            this.commit('setMore', result.getData )
        }).catch((err) => {
            console.log(err)
        });
    }
  },

})

export default store;