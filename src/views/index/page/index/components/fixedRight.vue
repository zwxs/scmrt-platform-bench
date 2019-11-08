<template>
  <div>
    <!-- 右侧固定导航 -->
    <div class="fixed-right" v-show="isShowRight==true">
      <div class="item">
        <img src="../../../assets/img/service_icon.png" alt="" class="defalut">
        <img src="../../../assets/img/service_w_icon.png" alt="" class="active">
        <p>在线客服</p>
      </div>
      <div class="item">
        <img src="../../../assets/img/ewm_icon.png" alt="" class="defalut">
        <img src="../../../assets/img/erweima_w_icon.png" alt="" class="active">
        <p>微信订阅</p>
        <div class="qr-code">
          <img src="../../../assets/img/erweima_big.png" alt="">
        </div>
      </div>
      <div class="item" @click="toTop">
        <img src="../../../assets/img/back_top_icon.png" alt="" class="defalut">
        <img src="../../../assets/img/back_top_w_icon.png" alt="" class="active">
        <p>返回顶部</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        isShowRight: false
      };
    },
    mounted() {
      window.addEventListener('scroll', this.getScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.getScroll);
    },
    methods: {
      //监听滚动
      getScroll() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (this.scrollTop >= 600) {
          this.isShowRight = true;
        } else {
          this.isShowRight = false;
        }
      },
      toTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        window.pageYOffset = 0;
      }

    }
  }
</script>
<style lang="scss" scoped>
  .fixed-right {
    position: fixed;
    right: 1rem;

    @media(max-width: 1366px) {
      right: 0.2rem;
    }

    top: 50%;
    transform: translateY(-50%);
    width: .7rem;
    z-index: 999;

    .item {
      width: .7rem;
      height: .7rem;
      background-color: #fff;
      border: 1px solid #E5E5E5;
      transition: all 0.4s;

      position: relative;
      text-align: center;

      img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: .13rem;
      }

      p {
        position: absolute;
        bottom: .09rem;
        width: 100%;
        text-align: center;
        font-size: .12rem;
        color: #666;
      }

      .active {
        display: none;
      }

      .qr-code {
        position: absolute;
        left: -1.74rem;
        top: -0.14rem;
        display: none;
        transition: all 0.4s;

        img {
          position: relative;

        }
      }

      &:hover {
        background-color: #FB5F13;

        p {
          color: #fff;
        }

        .default {
          display: none;
        }

        .active {
          display: block;
        }

        .qr-code {
          display: block;
        }
      }

      &+.item {
        border-top: none;
      }
    }
  }
</style>