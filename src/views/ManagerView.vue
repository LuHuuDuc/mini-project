!<template>
  <main>
    <div class="heading">
      <div class="list">
        <button @click="isActive = 0" :class="{active : isActive == 0}">Sản phẩm</button>
        <button @click="isActive = 1" :class="{active : isActive == 1}">Bình luận</button>
      </div>
    </div>
    <comment-component v-if="isActive == 1"></comment-component>
    <product-component v-if="isActive == 0"></product-component>
  </main>
</template>

<script>
import { ref } from 'vue'
import CommentComponent from '@/components/CommentComponent.vue'
import ProductComponent from '@/components/ProductComponent.vue'
export default {
  components:{
    CommentComponent,
    ProductComponent
  },
  setup(){
    const isActive = ref(0)


    return {
      isActive
    }
  }
}
</script>

<style scoped>
  main{
    width: 1200px;
    margin: auto;
  }
  .heading{
    width: 100%;
    height: 90px;
    margin: auto;
    box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .heading button{
    width: 150px;
    height: 50px;
    margin: 5px;
    border-radius: 50px;
  }
  .heading button.active{
    background: #000;
    color: #ff60ff;
  }
</style>