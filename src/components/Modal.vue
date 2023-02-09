<template>
    <div class="black-bg" v-if="모달창상태 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" alt="">  
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <button class="btn btn-danger" @click="모달창상태변경()">닫기</button>
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

</style>