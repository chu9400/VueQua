import { createStore } from 'vuex'
import axios from 'axios'

import oneroom from './assets/oneroom';

const store = createStore({
  state(){
    return {
      more : {},
      모달창상태 : false,
      원룸들 : oneroom,
      누른거 : 0,
    }
  },

  mutations : {
    이름변경(state) {
        state.name = 'choi';
    },
    신고하기(state, payload){
      state.원룸들[payload].신고상태 = !state.원룸들[payload].신고상태;
      state.원룸들[payload].신고수 += state.원룸들[payload].신고수 ? -1 : 1;
      
    },
    모달창상태변경(state, payload){
      state.모달창상태 = !state.모달창상태;
      state.누른거 = payload;
    }

  },

  actions : {
    getData() {
        axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((result) => {
            this.commit('setMore', result.data )
        }).catch((err) => {
            console.log(err)
        });
    }
  },

})

export default store;