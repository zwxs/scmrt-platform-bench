<template>
  <div class="bill-detail">
    <div class="banner">
      <div class="container">
        <!-- 头部面包屑 -->
        <div class="new-list-title">
          <div class="breadcrumb">
            <img class="pr-10" src="./img/home.png" alt="">
            <span class="pr-10 new-home" @click="goto('/new')">票据融资</span>
            <i class="el-icon-arrow-right pr-10 "></i>
            <span class="pr-10"> 票据大厅 </span>
            <i class="el-icon-arrow-right pr-10 "></i>
            <span>票据详情</span>
          </div>
        </div>
        <!-- 票据信息 -->
        <div class="bill-info">
          <div class="container">
            <div class="left">
              <div class="top">
                <h4>票据信息 <span>NO.37109273810417904</span></h4>
                <div class="tip">
                  <span class="tip1">无回头</span>
                  <span class="tip2">一口价</span>
                </div>
              </div>
              <div class="center">
                <ul>
                  <li>
                    <div class="title red">
                      <div class="da ">100</div>
                      <div class="xiao">万元</div>
                    </div>
                    <div class="content">
                      <p>票面金额</p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <div class="da">0</div>
                      <div class="xiao">天</div>
                    </div>
                    <div class="content">
                      <p>调整天数</p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <div class="da">2020-08-20</div>
                    </div>
                    <div class="content">
                      <p>到期日</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bottom">
                <p>承兑人： <span>广发银行</span></p>
              </div>
            </div>
            <div class="right">
              <img src="./img/piaoju-detail.png" alt="">
              <img src="./img/piaoju-detail.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="quote">
      <div class="container">
        <div class="title">
          <h4>我要报价</h4>
        </div>
        <div class="content">
          <div class="from-group">
            <div class="input-box">
              <div class="left">
                <span>年化利率</span>
              </div>
              <div class="center">
                <el-input v-model="form.rate" placeholder="请输入年化利率"></el-input>
              </div>
              <div class="right">
                %
              </div>
            </div>
            <div class="input-box">
              <div class="left">
                <span>每十万扣款</span>
              </div>
              <div class="center">
                <el-input v-model="form.koukuan" placeholder="请输入金额"></el-input>
              </div>
              <div class="right">
                元
              </div>
            </div>
            <div class="input-box">
              <div class="left">
                <span>报价金额</span>
              </div>
              <div class="center">
                <el-input v-model="form.baojia" placeholder="请输入金额"></el-input>
              </div>
              <div class="right">
                万元
              </div>
            </div>
            <div class="input-box">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  中国工商银行<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="agreement">
            <el-checkbox v-model="checked"></el-checkbox>
            我已同意 <span @click="dialogContrct=true">《用户协议》《免责声明》</span>
          </div>
          <div class="to-quote">
            <el-button class="btn-md-primary" @click="dialogVisible = true">立即报价</el-button>
          </div>
        </div>
      </div>
    </div>

    <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose"
      class="confirm-baojia">
      <span>是否确认对该票据进行报价？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-sm-primary" @click="dialogVisible = false">取消</el-button>
        <el-button class="btn-sm-primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="温馨提示" :visible.sync="dialogContrct" width="30%" :before-close="handleClose"
      class="confirm-contract">
      <div class="dialog-title" slot="title">

        <img src="./img/fill.png" alt=""> <span>票据应收款转让服务合同</span>

      </div>
      <div class="content">
        <div>
          <p>甲 方（转让方）：西安嘉行影视传媒股份有限公司</p>
          <p>法定代表人或负责人：曾嘉</p>
        </div>
        <div>
          <p>乙 方（受让方）： 深圳市搞个文化传媒有限公司 </p>
          <p>法定代表人或负责人：杨诚 </p>
        </div>
        <div>
          <p>丙 方（信息平台）： 瑞通（深圳）金融信息服务有限公司</p>
        </div>
        根据《中华人民共和国合同法》、《中华人民共和国票据法》及相关法律法规的规定，甲乙丙三方在平等、自愿的基础上，就票据应收款转让及服务等有关事宜达成协议如下：
        第一条 名词释义
        <p>一、 甲方：指拟在丙方提供的信息平台上转让票据应收款的一方，根据本合同表述的需要，甲方在本合同中也可称之为转让方。 </p>
        <p>二、乙方：指拟在丙方提供的信息平台上受让票据应收款的一方，根据本合同表述的需要，乙方在本合同中也可称之为受让方。 </p>
        <p>三、信息平台：指丙方开发的，为交易双方提供交易服务的互联网网站及交易系统，根据本合同表述的需要，丙方在本合同中也可称之为信息平台。 </p>
        <p>四、 标的票据:指转让方在信息平台上发布的转让方拟转让其票据应收款于受让方的商业汇票。 </p>
        <p>五、发布日：就一笔标的票据而言，指其发布时间所在日期。 </p>
        <p>
          六、兴业数字金融服务（上海）股份有限公司票据流转资金代管专户：指甲方、乙方、丙方同意，由丙方合作机构兴业数字金融服务（上海）股份有限公司（简称“兴业数金”）为方便转让方与受让方资金流转和安全而在兴业银行开立的票据流转资金代管专户（简称“票据流转资金代管专户”）。
        </p>
        <p>七、转让服务费：指信息平台及合作机构兴业数金基于其为交易双方提供的票据应收款转让相关服务而向受让方单方收取的服务费。 八、票据应收款：指标的票据的承兑人承担的在票据到期日无条件支付的票据款项。</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-sm-primary" @click="dialogContrct = false">取消</el-button>
        <el-button class="btn-sm-primary" @click="dialogContrct = false">确定</el-button>
      </span>
    </el-dialog>
    <!-- 右侧固定导航 -->
    <fixed-right :item-type="[1,2,3,4,5]" />
  </div>
</template>

<script>
  import fixedRight from '@/components/fixedRight'
  export default {
    data() {
      return {
        form: {
          rate: '',
          baojia: '',
          koukuan: ''
        },
        checked: false,
        dialogVisible: false,
        dialogContrct: false
      }
    },
    components: {
      fixedRight,
    },

    created() {},
    mounted() {},
    methods: {
      handleClose() {
        this.dialogVisible = false;
        this.dialogContrct = false;
      }
    }
  }
</script>
<style lang="scss">
  .quote {
    .input-box {
      .el-input {
        width: 100%;

        input {
          height: 100%;
          border: 0;

          &::placeholder {
            font-size: .16rem;
          }
        }
      }

      .el-dropdown {
        width: 100%;
        position: relative;

        .el-dropdown-link {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding-left: .2rem;

          i {
            line-height: .6rem;
            padding: 0 .2rem;
          }
        }
      }
    }
  }

  .el-popper[x-placement^=bottom] {
    width: 3.9rem;
    margin-top: 0;
    line-height: .6rem;
    text-align: center;


  }

  ul {
    .el-dropdown-menu__item {
      height: .4rem;
      line-height: .4rem;
      text-align: center;
    }
  }


  .el-popper .popper__arrow,
  .el-popper .popper__arrow::after {
    display: none;
  }

  .confirm-baojia {
    .el-dialog {
      width: 4.4rem !important;
      height: 2.6rem !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .el-dialog__header {
        padding-top: 0rem;
      }

      .el-dialog__body {
        padding-top: .16rem;
        padding-bottom: .4rem;
      }

      .el-dialog__footer {
        padding: 0;
        width: 2.7rem;

        .dialog-footer {
          display: flex;
          justify-content: space-between;

          .btn-sm-primary {
            width: 1.2rem;
            height: .46rem;
            line-height: .46rem;
            border-radius: .23rem;

            &:first-child {
              background-color: #fff;
              border: 1px solid $mc;
              color: $mc;
            }

            &:last-child {
              background: linear-gradient(54deg, rgba(251, 95, 19, 1) 0%, rgba(255, 131, 41, 1) 100%);

              &:hover {
                background: linear-gradient(54deg, rgba(255, 131, 41, 1) 0%, rgba(251, 95, 19, 1) 100%);
              }
            }
          }
        }


      }
    }
  }

  .confirm-contract {
    .el-dialog {
      width: 8rem !important;

      .el-dialog__header {

        .dialog-title {
          display: flex;
          align-items: center;

          span {
            font-size: .2rem;
            color: $mc3;
            font-weight: 600;
            line-height: .28rem;
            padding-left: .12rem;
          }
        }
      }

      .el-dialog__body {
        padding: .3rem .6rem;
        font-size: .16rem;

        .content {
          >div {
            padding-bottom: .2rem;
          }

          p {
            line-height: .24rem;
          }
        }
      }

      .el-dialog__footer {
        padding-top: 0;
      }

      .dialog-footer {
        margin: 0 auto;
        width: 2.7rem;
        display: flex;
        justify-content: space-between;
        padding-bottom: .2rem;
        padding-top: 0;

        .btn-sm-primary {
          width: 1.2rem;
          height: .46rem;
          line-height: .46rem;
          border-radius: .23rem;

          &:first-child {
            background-color: #fff;
            border: 1px solid $mc;
            color: $mc;
          }

          &:last-child {
            background: linear-gradient(54deg, rgba(251, 95, 19, 1) 0%, rgba(255, 131, 41, 1) 100%);

            &:hover {
              background: linear-gradient(54deg, rgba(255, 131, 41, 1) 0%, rgba(251, 95, 19, 1) 100%);
            }
          }
        }
      }

    }

  }
</style>
<style lang="scss" scoped>
  @import './billDetail';
</style>