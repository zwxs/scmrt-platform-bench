<template>
  <!-- 首页banner轮播图 -->
  <div class="banner">

    <el-carousel height="560px" arrow="always">

      <el-carousel-item v-for="(item,index) in slideData" :key="index">
        <div class="img-box">
          <!-- <img src="../images/banner.png" alt=""> -->
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr: []
      }
    },
    created() {
      console.log(1111);
      // this.getSlide();

    },
    props: {
      slideData: {
        type: Array,
        default () {
          return []
        }
      }
    },
    watch() {

    },
    mounted() {
      console.log(1111);
    },
    methods: {
      // async getSlide() {
      //     console.log(1111);
      //     let data = await this.$api.getSlide();

      //     console.log(data);
      // }
    }
  }
</script>

<style lang="scss">
  .banner {
    .el-carousel {

      .el-carousel__arrow {
        height: .64rem;

        .el-carousel__container {}

        &.el-carousel__arrow--left {
          background-image: url('../images/slide-arrow-left-2.png');
          background-color: transparent;
          left: 0.9rem;

          &:hover {
            background-image: url('../images/slide-arrow-left-1.png');

          }

          i {
            display: none;
          }
        }

        &.el-carousel__arrow--right {
          background-image: url('../images/slide-arrow-right-2.png');
          background-color: transparent;
          right: 0.9rem;


          &:hover {
            background-image: url('../images/slide-arrow-right-1.png');
          }

          i {
            display: none;
          }
        }
      }

      .el-carousel__indicators {
        bottom: .2rem;
        height: .1rem;
        line-height: .1rem;

        .el-carousel__indicator--horizontal {
          // li {
          width: .1rem;
          height: .1rem;
          border-radius: .05rem;
          margin: 0 .05rem;
          padding: 0;
          background-color: #000;
          opacity: 0.2;

          &.is-active {
            background-color: #FB5F13;
            opacity: 1;
          }

          button {
            display: none;

          }

          // }
        }
      }
    }


  }
</style>
<style lang="scss" scoped>
  .banner {
    min-width: 12rem;
  }

  //轮播图
  .banner .img-box {
    width: 100%;
    min-width: 12rem;
    height: 5.6rem;
    position: relative;
    background-image: url("../images/banner.png");
    background-size: 19.2rem 5.6rem;
    background-position: center center;
    background-repeat: no-repeat;
  }

  // .banner .img-box img {
  //     position: absolute;
  //     // min-width: 19.2rem;
  //     width: 100%;
  //     height: 5.6rem;
  //     left: 50%;
  //     transform: translateX(-50%);
  // }
</style>

<script>
</script>