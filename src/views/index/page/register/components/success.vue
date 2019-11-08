<template>
  <div class="register-success" v-if="isShow">
    <div class="box tac">
      <i class="el-icon-close fr" @click="toggleShow"></i>
      <div class="mt-30">
        <img src="../images/success_img.png" alt="">
      </div>
      <h3 class="mb-30 mt-30">注册成功</h3>
      <p class="c-66 mb-30">注册成功，立即登录吧～</p>
      <router-link class="to-login" to="/login">立即登录</router-link>
    </div>
    <div class="boxShow"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow:false
    }
  },
  methods: {
    toggleShow(){
      this.isShow=!this.isShow
    }
  },
}
</script>

<style lang="scss">
  .register-success{
    .box{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: #fff;
      z-index: 1000;
      padding: .2rem .38rem;
      width: 6rem;
      height: 5.1rem;
      .to-login{
        display: inline-block;
        width: 1.7rem;
        height: .46rem;
        line-height: .46rem;
        border-radius: .46rem;
        background-color: #FB5F13;
        color:#fff;
      }
    }
    .boxShow{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.4);
      z-index: 999
    }
  }
</style>
