<template>

  <div class="look-box">
    <el-dialog :visible.sync="showDialog" width="30%" center @close="closeDialog">
      <div class="no-data-large">
        <img src="../assets/img/look.png" alt="">
        <p class="fs20 c-33 fw-b pt-30">敬请期待</p>
        <p class="fs16 c-66 pt-10">借款模式任您选，操作简便放款快</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="closeDialog()">取 消</el-button> -->
        <el-button class="btn-sm-primary"  @click="closeDialog()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // showDialog: false
      }
    },
    mounted() {
      // this.showDialog = this.$store.getters.showLook;
    },
    computed: {
      showDialog() {
        return this.$store.getters.showLook;
      }
    },
    methods: {
      closeDialog() {
        this.$store.dispatch('look/getShowLook', false);
        // this.showDialog = this.$store.getters.showLook;
        setTimeout(() => {
          console.log(this.$store.getters.showLook);
        })
      }
    }
  }
</script>
<style lang="scss">
  .look-box{
    .el-dialog{
      width: 6rem !important;
      height: 5.2rem;
      margin-top: 30vh !important;
    }
    .el-dialog__footer{
      padding-bottom: .7rem;
    }
  }
</style>
<style scoped lang="scss">
  .no-data-large {
    width: 100%;
    
    position: relative;
    text-align: center;
    padding-top: 0.2rem;
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
  .btn-sm-primary{
    width: 1.28rem;
    height: .44rem;
    line-height: .44rem;
    border-radius: .22rem;
    font-size: .16rem;
  }
</style>