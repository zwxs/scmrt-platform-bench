<template>
  <div id="app">
    <!-- 头部 -->
    <Header />
    <!--内容-->
    <router-view :key="$route.fullPath"></router-view>
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
<style>
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
    font-size: 5.20833333vw;
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