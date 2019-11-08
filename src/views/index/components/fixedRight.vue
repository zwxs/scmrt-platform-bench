<template>
  <div>
    <!-- 右侧固定导航 -->
    <div class="fixed-right" v-show="isShowRight==true">
      <div class="item pointer" v-if="itemType.includes(1)">
        <a class=""
          href="http://p.qiao.baidu.com/cps2/chatIndex?reqParam=%7B%22from%22%3A0%2C%22sid%22%3A%22-100%22%2C%22tid%22%3A%22-1%22%2C%22ttype%22%3A1%2C%22siteId%22%3A%2212208881%22%2C%22userId%22%3A%2225832725%22%2C%22pageId%22%3A0%7D"
          target="blank">

          <img src="../assets/img/service_icon.png" alt="" class="defalut">
          <img src="../assets/img/service_w_icon.png" alt="" class="active">
          <p>在线客服</p>
        </a>

      </div>
      <div class="item pointer" v-if="itemType.includes(2)">
        <img src="../assets/img/ewm_icon.png" alt="" class="defalut">
        <img src="../assets/img/erweima_w_icon.png" alt="" class="active">
        <p>微信订阅</p>
        <div class="qr-code">
          <img src="../assets/img/erweima_big.png" alt="">
        </div>
      </div>
      <div class="item pointer" v-if="itemType.includes(3)" @click="openTools('calc')">
        <img src="../assets/img/calculator_icon_b.png" alt="" class="defalut">
        <img src="../assets/img/calculator_icon_w.png" alt="" class="active">
        <p>贴现计算器</p>

      </div>
      <!-- <div class="item pointer" v-if="itemType.includes(4)" @click="openTools('linenumberquery')">
        <img src="../assets/img/check_icon.png" alt="" class="defalut">
        <img src="../assets/img/check_w_icon.png" alt="" class="active">
        <p>行号查询</p>

      </div> -->
      <div class="item pointer" @click="toTop" v-if="itemType.includes(5)">
        <img src="../assets/img/back_top_icon.png" alt="" class="defalut">
        <img src="../assets/img/back_top_w_icon.png" alt="" class="active">
        <p>返回顶部</p>
      </div>
    </div>
    <!-- 行号查询 -->
    <linenumberquery ref="linenumberquery"></linenumberquery>
    <!-- 贴现计算 -->
    <calc ref="calc"></calc>
  </div>
</template>

<script>
  import linenumberquery from './LineNumberQuery'
  import calc from './calc'
  export default {

    data() {

      return {
        isShowRight: false
      };
    },
    props: {
      itemType: {
        type: Array,
        default () {
          return [1, 2, 5]
        }
      }
    },
    components: {
      linenumberquery,
      calc
    },
    created() {

    },
    mounted() {

      window.addEventListener('scroll', this.getScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.getScroll);
    },
    methods: {
      // 打开小工具
      openTools(ref) {
        this.$refs[ref].toggleShow()
      },
      //监听滚动
      getScroll() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (this.scrollTop >= 500) {
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

    @media(max-width: 1500px) {
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
      a{
        display: block;
      }
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
        left: -1.64rem;
        top: -0.14rem;
        display: none;
        transition: all 0.4s;
        width: 1.64rem;
        height: 1.64rem;
        img {
          width: 100%;
          height: 100%;
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