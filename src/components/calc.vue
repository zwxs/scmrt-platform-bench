<template>
  <!-- 贴现计算 -->
  <div class="calc" v-if="isShow">
    <div class="box">
      <div class="header">
        <div class="left fl">
          <img class="mr-15" src="../assets/img/calc.png" alt="">
          <span class="fs20 fw-b" style="vertical-align: middle;">贴现计算</span>
        </div>
        <i class="el-icon-close fr c-66 fs20" @click="toggleShow"></i>
      </div>
      <div class="calc-header-title tac pt-40">
        <a class=" fs16 mr-40 fw-b" href="javascript:;" :class="{on: calcWay}" @click="calcWay=true">利率计算</a>
        <a class=" fs16 fw-b" href="javascript:;" :class="{on: !calcWay}" @click="calcWay=false">每十万计算</a>
      </div>
      <div class="calc-content  pt-30">
        <div :class="{on:calcWay}" class="p-lr-60">
          <el-form label-position="left" :model="form1"  ref="form1" label-width="120px" class="form">
            <el-form-item  prop="pMoney"
               :rules="[
                  { required: true, message: '金额不能为空'},
                  { type: 'number', message: '金额必须为数字值'}
                ]"
            >
              <span class="fs16 fw-b" slot="label">票面金额</span>
              <el-input  v-model.number="form1.pMoney" placeholder="请输入票面金额"></el-input>
              <span class="unit fs16">万</span>
            </el-form-item>
            <el-form-item  prop="yRate"
              :rules="[
                  { required: true, message: '年利率不能为空'},
                  { type: 'number', message: '年利率必须为数字值'}
                ]"
            >
              <span class="fs16 fw-b" slot="label">年利率</span>
              <el-input v-model.number="form1.yRate" placeholder="请输入年利率" @blur="yRateBlur"></el-input>
              <span class="unit fs16">%</span>
            </el-form-item>
            <el-form-item prop="mRate"
               :rules="[
                  { required: true, message: '月利率不能为空'},
                ]"
            >
              <span class="fs16 fw-b" slot="label">月利率</span>
              <el-input v-model="form1.mRate" placeholder="请输入月利率"></el-input>
              <span class="unit fs16">%</span>
            </el-form-item>
            <el-form-item  prop="countDay"
               :rules="[
                  { required: true, message: '贴现日期不能为空'},
                ]"
            >
              <span class="fs16 fw-b" slot="label">贴现日期</span>
              <el-date-picker 
                @focus="selectPic(1)"
                @blur="blurPic"
                :clearable="false"
                v-model="form1.countDay"
                type="date" 
                :picker-options="starttime" 
                placeholder="请选择贴现日期" 
                style="width: 100%;"
              >
              </el-date-picker>
              <img class="unit arrow-img" :class="{focus:arrow==1}"  src="../assets/img/jiantouxia.png" alt="">
            </el-form-item>
             <el-form-item  prop="dateTime"
               :rules="[
                  { required: true, message: '到期日不能为空'},
                ]"
             >
              <span class="fs16 fw-b" slot="label">到期日</span>
              <el-date-picker
                @focus="selectPic(2)"
                @blur="blurPic" 
                :clearable="false"
                v-model="form1.dateTime" 
                type="date" 
                :picker-options="endTime" 
                value-format="yyyy-MM-dd"
                placeholder="请选择到期日" 
                style="width: 100%;"
              >
              </el-date-picker>
              <img class="unit arrow-img" :class="{focus:arrow==2}"  src="../assets/img/jiantouxia.png" alt="">
              <!-- <i class="el-icon-arrow-down unit fs16 lh-40 c-66"></i> -->
            </el-form-item>
            <el-form-item  prop="adjustDay"
               :rules="[
                  { required: true, message: '调整天数不能为空'},
                  { type: 'number', message: '调整天数必须为数字值'}
                ]"
            >
              <span class="fs16 fw-b" slot="label">调整天数</span>
              <el-input v-model.number="form1.adjustDay" placeholder="请输入调整天数"></el-input>
              <span class="unit fs16">天</span>
            </el-form-item>
            <el-form-item>
              <el-button round  @click="resetForm1('form1')">重置</el-button>
              <el-button round  @click="submitForm1('form1')">查询</el-button>
            </el-form-item>
          </el-form>
          <div class="result" v-if="resultSHow1">
              <h3 class="tac mb-20">计算结果</h3>
              <ul class="result-list mb-30">
                <li>
                  <p class="fs18 c-red mb-5">{{form1.price}}元</p>
                  <p class="fs16 c-66">每十万贴息</p>
                </li>
                  <li>
                  <p class="fs18 c-red mb-5">{{form1.discountInterst}}元</p>
                  <p class="fs16 c-66">贴息金额</p>
                </li>
                  <li>
                  <p class="fs18 c-red mb-5">{{form1.discountMoney}}元</p>
                  <p class="fs16 c-66">贴现金额</p>
                </li>
              </ul>
              <div class="">
                <span class="c-66">计息天数：</span><span class="mr-20">{{form1.discounDataTime}}天</span>
                <span class="c-66">调整天数：</span><span>{{form1.adjustDay}}天</span>
              </div>
            </div>
          </div>
          <div :class="{on:!calcWay}" class="p-lr-60">
            <el-form label-position="left" :model="form2"  ref="form2" label-width="120px" class="form">
              <el-form-item  prop="pMoney"
                 :rules="[
                  { required: true, message: '票面金额不能为空'},
                  { type: 'number', message: '票面金额必须为数字值'}
                ]"
              >
                <span class="fs16 fw-b" slot="label">票面金额</span>
                <el-input v-model.number="form2.pMoney" placeholder="请输入票面金额"></el-input>
                <span class="unit fs16">万</span>
              </el-form-item>
              <el-form-item  prop="tiexin"
                 :rules="[
                  { required: true, message: '贴息金额不能为空'},
                  { type: 'number', message: '贴息金额必须为数字值'}
                ]"
              >
                <span class="fs16 fw-b" slot="label">每十万贴息</span>
                <el-input v-model.number="form2.tiexin" placeholder="请输入贴息金额"></el-input>
                <span class="unit fs16">元</span>
              </el-form-item>
              <el-form-item  prop="countDay"
                :rules="[
                  { required: true, message: '贴现日期不能为空'},
                ]"
              >
                <span class="fs16 fw-b" slot="label">贴现日期</span>
                <el-date-picker
                  @focus="selectPic(3)"
                  @blur="blurPic"
                 :clearable="false" 
                 :picker-options="pickerOptions0" 
                 type="date" 
                 placeholder="请选择贴现日期" 
                 v-model="form2.countDay" 
                 style="width: 100%;"
                 >
                </el-date-picker>
                <img class="unit arrow-img" :class="{focus:arrow==3}"  src="../assets/img/jiantouxia.png" alt="">
                <!-- <i class="el-icon-arrow-down unit fs16 lh-40 c-66"></i> -->
                
              </el-form-item>
              <el-form-item  prop="dateTime"
                :rules="[
                  { required: true, message: '到期日不能为空'},
                ]"
              >
                  <span class="fs16 fw-b" slot="label">到期日</span>
                <el-date-picker 
                 @focus="selectPic(4)"
                 @blur="blurPic"
                :clearable="false" 
                :picker-options="pickerOptions0" 
                type="date" 
                placeholder="请选择到期日" 
                v-model="form2.dateTime" 
                style="width: 100%;">
                </el-date-picker>
                <img class="unit arrow-img" :class="{focus:arrow==4}"  src="../assets/img/jiantouxia.png" alt="">
                <!-- <i class="el-icon-arrow-down unit fs16 lh-40 c-66"></i> -->
              </el-form-item>
              <el-form-item>
                <el-button round  @click="resetForm2('form2')">重置</el-button>
                <el-button round  @click="submitForm2('form2')">查询</el-button>
              </el-form-item>
            </el-form>
              <div class="result" v-if="resultSHow2">
                <h3 class="tac mb-20">计算结果</h3>
                <ul class="result-ten-list mb-30">
                  <li>
                    <p class="fs18 c-red mb-5">{{form2.tMoney}}</p>
                    <p class="fs16 c-66">贴现金额(元)</p>
                  </li>
                  <li>
                    <p class="fs18 c-red mb-5">{{form2.jixDay}}</p>
                    <p class="fs16 c-66">计息天数(天)</p>
                  </li>
                  <li>
                    <p class="fs18 c-red mb-5">{{form2.txprice}}</p>
                    <p class="fs16 c-66">贴现贴息(元)</p>
                  </li>
                  <li>
                    <p class="fs18 c-red mb-5">{{form2.mRate}}</p>
                    <p class="fs16 c-66">月利率(%)</p>
                  </li>
                  <li>
                    <p class="fs18 c-red mb-5">{{form2.yRate}}</p>
                    <p class="fs16 c-66">年利率(%)</p>
                  </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<script>
import {dateformatting,currentDate} from '@/utils/tools'
  export default {
    data() {
      return {
        arrow:'',
        isShow: false,
        resultSHow1:false,
        resultSHow2:false,
        calcWay: true,
        form1:{
          pMoney: '',
          mRate: '',
          yRate: '',
          countDay:'',
          dateTime: '',
          adjustDay: 0,
          discounDataTime: 0,
          price: 0,
          discountInterst: 0,
          discountMoney: 0
        },
        form2:{
          pMoney: '',
          tiexin: '',
          countDay: '',
          dateTime: '',
          jixDay: 0,
          mRate: 0,
          yRate: 0,
          txprice: 0,
          tMoney: 0
        },
         pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        }, 
        starttime: {
           disabledDate: (time) => {
                if(this.form1.dateTime){
                return time.getTime() >new Date(this.form1.dateTime).getTime() || time.getTime() < Date.now()- 8.64e7;
              }else{
                    return time.getTime() <Date.now()- 8.64e7;
              }
            }
      },
      // 结束时间
      endTime: {
         disabledDate: (time) => {
               return time.getTime() < Date.now()- 8.64e7;
            }
      },
      
      }
    },
    created() {
      this.form1.countDay=currentDate()
      this.form2.countDay=currentDate()
    },
    methods: {
       // 日期获取焦点事件
      selectPic(index){
        console.log(index);
        this.arrow=index
      },
      blurPic(){
         this.arrow=''
      },
      // 年利率失去焦点
      yRateBlur(event){
         /*月利率*/
        this.form1.mRate = (this.form1.yRate / 12).toFixed(2);
      },
      // 计算器的显示隐藏
      toggleShow() {
        this.isShow = !this.isShow
        this.resetForm1('form1')
        this.resetForm2('form2')
        console.log('on');
        this.resultSHow1=false;
        this.resultSHow2=false;
      },
      submitForm1(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              /*把到期日转换成时间戳- 贴现日期转换成时间戳*/
                let calculateDate = new Date(this.form1.dateTime).getTime() - new Date(this.form1.countDay).getTime();
                /*把时间戳转换成多少天数*/
                let timeDay = Math.floor(calculateDate / 86400000);
                // 计息天数
                this.form1.discounDataTime = parseInt(timeDay) + parseInt(this.form1.adjustDay ? this.form1.adjustDay : 0);
                /*每十万扣款数*/
                this.form1.price = (this.form1.yRate / 100) / (360 / this.form1.discounDataTime) * (this.form1.pMoney * 10000) / (this.form1.pMoney / 10);
                /*贴息金额*/
                this.form1.discountInterst = (this.form1.price * (this.form1.pMoney / 10)).toFixed(2);
                /*贴现金额*/
                this.form1.discountMoney = (this.form1.pMoney * 10000 - (this.form1.price * (this.form1.pMoney / 10))).toFixed(2);
                this.form1.price = (this.form1.price).toFixed(2)
                this.resultSHow1=true
                this.resultSHow2=false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm1(formName) {
        this.$refs[formName].resetFields();
        this.form1.countDay=''
        this.form1.discounDataTime=0
        this.form1.price =0
        this.form1.discountInterst=0
        this.form1.discountMoney=0
       
      },
      submitForm2(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                /*把到期日转换成时间戳- 贴现日期转换成时间戳*/
                let calculateDate = new Date(this.form2.dateTime).getTime() - new Date(this.form2.countDay).getTime();
                /*把时间戳转换成多少天数 计息天数*/
                this.form2.jixDay = Math.floor(calculateDate / 86400000);
                /*年利率*/
                this.form2.yRate = ((this.form2.tiexin * (this.form2.pMoney / 10)) / (this.form2.pMoney * 10000) * (360 / this.form2.jixDay) * 100).toFixed(2);
                /*月利率*/
                this.form2.mRate = (this.form2.yRate / 12).toFixed(2);
                /*贴息金额*/
                this.form2.txprice = (this.form2.tiexin * (this.form2.pMoney / 10)).toFixed(2);
                /*贴现金额*/
                this.form2.tMoney = (this.form2.pMoney * 10000 - (this.form2.tiexin * (this.form2.pMoney / 10))).toFixed(2);
                this.resultSHow2=true
                this.resultSHow1=false
          } else {
            console.log('error submit!!');
            
            return false;
          }
        });
      },
      resetForm2(formName) {
        this.$refs[formName].resetFields();
        this.form2.countDay=''
        this.form2.jixDay =0
        this.form2.yRate=0
        this.form2.mRate = 0
        this.form2.txprice =0
        this.form2.tMoney =0
      },
    },
   
  }
</script>

<style lang="scss">
  .calc {
    .box {
      padding: .3rem;
      width: 6rem;
      background-color: #fff;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      .header {
        height: .3rem;
        .el-icon-close {
          line-height: .3rem;
        }
      }
      .calc-header-title {
        a {
          padding-bottom: .04rem;
          &.on {
            color: #FB5F13;
            border-bottom: .02rem solid #FB5F13;
          }
        }
      }
      .calc-content{
          >div{
            display: none;
            &.on{
              display: block
            }
            .el-form-item{
              margin-bottom: .1rem;
              padding-bottom: .1rem;
              border-bottom: 1px dashed #F0F0F0;
              .el-input__inner{
                border: none;
                text-align: right;
                color: #333333;
                
              }
              .el-input__prefix{
                display: none
              }
              .el-input--suffix .el-input__inner{
                padding-right: .15rem;
              }
            }
            .unit{
              position: absolute;
              &.arrow-img{
                top: 50%;
                transform: translateY(-50%);
                &.focus{
                  transform: rotate(-180deg)
                }
              }
            }
            .el-form-item:last-of-type{
              border: none;
              margin-top: .3rem;
              .el-form-item__content{
                margin-left: .7rem !important;
              }
            }
            .el-button:hover{
              background-color: #FB5F13;
              color: #fff;
            }
            .el-button{
              background-color: #fff;
              width: 1.2rem;
              height: .46rem;
              color: #FB5F13;
              border-color: #FB5F13;
              & + .el-button{
                margin-left: .3rem
              }
              // &.active{
              //   background-color: #FB5F13;
              //   color: #fff;
              // }
            }
            .el-form-item__error{
              top: 30%;
            }
            .el-form-item__label{
              color: #333333;

            }
          }
          .result{
            .result-list{
              display: flex;
              justify-content: space-between;
            }
            .result-ten-list{
            
              li{
                float: left;
                width: 30%;
                margin-bottom: .2rem;
              }
            }
        }
      }
   
    }
    .shadow {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .4);
      z-index: 999
    }
  }
</style>