<template>
  <div id="app">
    <div class="bench-header">

    </div>
    <div class="bench-bg">
      <div class="bench-container container">
        <div class="bench-left">
          <ul>
            <li @click="$router.push('/yinshou')">跳到到应收账款的主页</li>
            <li @click="$router.push('/detail')">跳到到应收账款详情页面</li>
          </ul>
        </div>
        <div class="bench-right">
          <!--内容-->
          <router-view :key="$route.fullPath"></router-view>
        </div>
      </div>
    </div>

    <Footer />
    <look></look>
  </div>
</template>

<script>
  import {
    Header,
    Footer
  } from '@/components'
  import look from '@/components/look'
  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      look
    }
  }

</script>
<style lang="scss">
  html,
  body {
    /* height: 100%; */
    font-size: .14rem;
    color: #333333;
    font-family: PingFangSC-Regular, PingFangSC;
    /* background-color: #f8f8f8; */
  }

  #app {
    /* max-width: 19.2rem; */
    /* margin: 0 auto; */
  }

  #app .max-container {
    max-width: 19.2rem;
    margin: 0 auto;
    position: relative;
  }

  body #newBridge .icon-right-center {
    right: auto;
    left: 0;
  }

  body #newBridge .nb-icon-skin-4 .nb-icon-inner-wrap {
    background-image: url('./assets/img/company_header.png');
  }

  html {
    // font-size: 5.20833333vw;
    font-size: 100px;
  }

  .el-message {
    top: 28% !important
  }

  * {
    margin: 0;
    padding: 0;
  }

  /* #app {
    font-family: 'PingFangSC', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
  } */

</style>
<style lang="scss">
  /* 工作台头部 */
  .bench-header {
    height: 1.4rem;
    width: 100%;
    background-color: #fff;
    border: 1px solid $mc;
  }

  .bench-container {
    padding-top: .6rem;
    padding-bottom: .5rem;
    min-height: 15rem;
    display: flex;
    align-items: stretch;

    .bench-left {
      width: 2.5rem;
      border: 1px solid #0f0;
    }

    .bench-right {
      width: 9.5rem;
      border: 1px solid #00f;
    }
  }

</style>
