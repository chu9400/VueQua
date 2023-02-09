<template>
  <div v-for="(a,i) in 원룸들 " :key="i">
    <img :src="원룸들[i].image" alt="">
    <h4 @click="모달창상태변경(i)">{{원룸들[i].title}}</h4>
    <p>{{원룸들[i].price}}</p>

    <button @click="신고하기(i)">허위매물신고</button>
    <span>신고수 : {{원룸들[i].신고수}}</span>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'Contents',
  computed : {
    ...mapState(['원룸들']),
  },

  methods : {
    ...mapMutations(['모달창상태변경', '신고하기']),
  }, 

}
</script>

<style>

</style>