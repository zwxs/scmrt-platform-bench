<template>

  <div class="look-box">
    <el-dialog :visible.sync="showDialog" width="30%" center @close="closeDialog">
      <div class="no-data-large">
        <img src="../assets/img/look.png" alt="">
        <p class="fs20 c-33 fw-b pt-30">敬请期待</p>
        <p class="fs16 c-66 pt-10" v-html="tipArr[index]"></p>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="closeDialog()">取 消</el-button> -->
        <el-button class="btn-sm-primary" @click="closeDialog()">确 定</el-button>
        <p class="fs14 c-99 pt-20">联系客服：400-8191-555</p>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // showDialog: false
        tipArr: ["众多资方任君选择， 简单审核，极速放款",
          "轻松放款  一站式金融解决方案",
          "精确您的融资需求 <br/> 流程简 审批快",
          "急需资金周转  找瑞通",
          "普惠大众， 赢领未来 <br/> 全国领先中小微企业金融服务商",

        ],
        index: 0
      }
    },
    mounted() {
      // this.showDialog = this.$store.getters.showLook;
      // this.index = parseInt(Math.abs(Math.random() * 10 - 6));
    },
    computed: {
      showDialog: {
        get: function () {
          if (this.$store.getters.showLook == true) {
            this.index = parseInt(Math.random() * 5);
            console.log(this.index);
          }
          return this.$store.getters.showLook;
        },
        set: function () {
          if (this.$store.getters.showLook == true) {
            this.index = parseInt(Math.random() * 5);
            console.log(this.index);
          }
        }
      }
    },
    methods: {
      closeDialog() {
        this.$store.dispatch('look/getShowLook', false);
        // this.showDialog = this.$store.getters.showLook;

      }
    }
  }
</script>
<style lang="scss">
  .look-box {
    .el-dialog {
      width: 6rem !important;
      height: 5.2rem;
      margin-top: 0 !important;
      top: 50%;
      transform: translateY(-50%);
    }

    .el-dialog__footer {
      padding-bottom: .7rem;
    }
  }
</style>
<style scoped lang="scss">
  .no-data-large {
    width: 100%;

    position: relative;
    text-align: center;
    padding-top: 0.1rem;
    padding-bottom: .0rem;

    img {
      // position: absolute;
      // left: 50%;
      // transform: translateX(-50%);

    }

    p {
      text-align: center;


      // padding-top: .1rem;
    }
  }

  .btn-sm-primary {
    width: 1.28rem;
    height: .44rem;
    line-height: .44rem;
    border-radius: .22rem;
    font-size: .16rem;
  }
</style>