<template>
  <div class="bill">
    <!-- 轮播图 -->
    <div class="banner">
      <swiper />
    </div>
    <div class="bg-box">
      <!-- 交易动态 -->
      <div class="dynamic">
        <div class="container">
          <div class="left">
            <div class="title">
              <h3>开市中</h3>
              <p>多元资方 快速成交</p>
              <p class="time">
                <span> {{nowTime}}</span>
              </p>
              <el-button class="btn-md-primary go-hall" @click="$router.push('/billHall')">进入票据大厅</el-button>
            </div>
            <div class="content">
              <ul>
                <li>
                  <div class="list-left">
                    <img src="./img/icon1.png" alt="">
                    <span>交易中金额</span>
                  </div>
                  <div class="list-right">
                    <strong id="numScroll1">2000.10</strong><sub>{{num1Type}}</sub>
                  </div>
                </li>
                <li>
                  <div class="list-left">
                    <img src="./img/icon2.png" alt="">
                    <span>待接单金额</span>
                  </div>
                  <div class="list-right">
                    <strong id="numScroll2">560.20</strong><sub>{{num2Type}}</sub>
                  </div>
                </li>
                <li>
                  <div class="list-left">
                    <img src="./img/icon3.png" alt="">
                    <span>累计成交金额</span>
                  </div>
                  <div class="list-right black">
                    <strong id="numScroll3">35264.38</strong><sub>{{num3Type}}</sub>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="title">
              <h4>实时掌握 <span>交易动态</span></h4>
              <p>智能化系统，全方位风控</p>
              <!-- <div class=""> -->
              <!-- <el-button class="btn-md-primary">一键发布票据</el-button> -->
              <!-- </div> -->
              <div class="qrcode">
                <img src="./img/qrcode1.png" alt="">
                <p>云票小程序</p>
              </div>
            </div>
            <div class="right-bg">

            </div>
          </div>
        </div>
      </div>
      <!-- 实时成交行情 -->
      <div class="market">
        <div class="container">
          <div class="title">
            <h4>实时成交行情</h4>
          </div>
          <div class="content">
            <div class="table">
              <div class="table-title">
                <ul>
                  <li>
                    <div class="col1">承兑人</div>
                    <div class="col2">票据类型</div>
                    <div class="col3">票据金额</div>
                    <div class="col4">成交时间</div>
                  </li>
                </ul>
              </div>
              <div class="table-list">

                <vue-seamless-scroll :data="tableData" class="seamless-warp" :class-option="optionSingleHeightTime">
                  <ul>
                    <li class="list" v-for="(item,index) in tableData" :key="index">
                      <div class="col1 ellipsis-2">{{item.acceptName}}</div>
                      <div class="col2">{{hallType[item.type-1]}}</div>
                      <div class="col3">{{item.expMoney}}万元</div>
                      <div class="col4">{{item.ppayDate.split(' ')[0]}}</div>
                    </li>
                  </ul>
                </vue-seamless-scroll>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- 推荐交易大厅 -->
      <div class="recommend-lobby">
        <div class="container">
          <div class="title">
            <div class="left">
              <h4>交易大厅</h4>

            </div>
            <div class="right">
              <div class="c-ff cp" @click="$router.push('/billHall')" target="_blank">发布票据 <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </div>
          <div class="content">
            <el-row :gutter="30">
              <el-col :span="8" v-for="(item,index) in hallData" :key="index">
                <div class="card-item">
                  <div class="card-tip yin" v-if="item.type==1">
                    银票
                  </div>
                  <div class="card-tip shang" v-if="item.type==2">
                    商票
                  </div>
                  <div class="card-title">
                    <h4>{{item.acceptName}}</h4>
                    <div class="price">
                      {{item.money}}万元
                    </div>
                    <p>交易金额</p>
                  </div>
                  <div class="card-content">
                    <p>
                      <span>{{item.sellType==1?'一口价':'竞价'}}：</span>
                      <span v-if="item.sellType==1">每十万扣款{{Number(item.dedAmount).toFixed(2)}}</span>
                      <span v-if="item.sellType==2">{{Number(item.dedAmount).toFixed(2)}}</span>
                    </p>
                    <p>
                      <span>有无回头：</span>
                      <span>{{item.rptType == 1 ? '有回头':'无回头'}}</span>
                    </p>
                    <p>
                      <span>到期日：</span>
                      <span>{{item.dueTime.split(' ')[0]}}</span>
                    </p>
                    <el-button class="btn-md-primary" v-if="item.status==1">立即报价</el-button>
                    <el-button class="btn-md-primary brown" v-if="item.status==2">交易中</el-button>
                    <el-button class="btn-md-primary gray" v-if="item.status==3">交易完成</el-button>
                  </div>
                </div>
              </el-col>

            </el-row>

          </div>
        </div>
      </div>
    </div>
    <!-- 价格指数 -->
    <div class="price-index">
      <div class="container">
        <div class="title">
          <h4>平台价格指数</h4>
          <div class="right">
            <i class="el-icon-refresh-right"></i>
            <span>{{nowTime.split(' ')[0].replace('年','-').replace('月','-').replace('日','')}}</span>
          </div>
        </div>
        <div class="content">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :name="'tab'+(index+1)" v-for="(item,index) in priceType" :key="index">
              <span slot="label" class="tab-tag">{{item.name}}</span>
              <div class="tab-content">
                <div class="left">
                  <div class="img-box">

                    <img src="./img/ban-year.png" alt="">
                    <p>半年期</p>
                  </div>
                  <ul>
                    <li v-for="(item1,index1) in priceData" :key="index1" v-show="item1.year==1">
                      <div>
                        <span class="one">最高</span>
                        <span class="two">{{Number(item1.topPrice).toFixed(4)}}%</span>
                        <span class="three" :class="{green:!item1.topPd.indexOf('-'),gray:item1.topPd.indexOf('+')==-1&&item1.topPd.indexOf('-')==-1}">{{item1.topPd}}</span>
                        <img src="./img/arrow-up.png" alt="" v-if="item1.topPd.indexOf('+') != -1">
                        <img src="./img/arrow-down.png" alt="" v-if="item1.topPd.indexOf('-') != -1">
                      </div>
                      <div>
                        <span class="one">平均</span>
                        <span class="two">{{Number(item1.avgPrice).toFixed(4)}}%</span>
                        <span class="three" :class="{green:!item1.avgPd.indexOf('-'),gray:item1.avgPd.indexOf('+')==-1&&item1.avgPd.indexOf('-')==-1}">{{item1.avgPd}}</span>
                        <img src="./img/arrow-up.png" alt="" v-if="item1.avgPd.indexOf('+') != -1">
                        <img src="./img/arrow-down.png" alt="" v-if="item1.avgPd.indexOf('-') != -1">
                      </div>
                      <div>
                        <span class="one">最低</span>
                        <span class="two">{{Number(item1.floorPrice).toFixed(4)}}%</span>
                        <span class="three" :class="{green:!item1.floorPd.indexOf('-'),gray:item1.floorPd.indexOf('+')==-1&&item1.floorPd.indexOf('-')==-1}">{{item1.floorPd}}</span>
                        <img src="./img/arrow-up.png" alt="" v-if="item1.floorPd.indexOf('+') != -1">
                        <img src="./img/arrow-down.png" alt="" v-if="item1.floorPd.indexOf('-') != -1">
                      </div>
                    </li>

                  </ul>
                </div>
                <div class="right">
                  <div class="img-box">
                    <img src="./img/one-year.png" alt="">
                    <p>一年期</p>
                  </div>

                  <ul>
                    <li v-for="(item1,index1) in priceData" :key="index1" v-show="item1.year==2">
                      <div>
                        <span class="one">最高</span>
                        <span class="two">{{Number(item1.topPrice).toFixed(4)}}%</span>
                        <span class="three" :class="{green:!item1.topPd.indexOf('-'),gray:item1.topPd.indexOf('+')==-1&&item1.topPd.indexOf('-')==-1}">{{item1.topPd}}</span>
                        <img src="./img/arrow-up.png" alt="" v-if="item1.topPd.indexOf('+') != -1">
                        <img src="./img/arrow-down.png" alt="" v-if="item1.topPd.indexOf('-') != -1">
                      </div>
                      <div>
                        <span class="one">平均</span>
                        <span class="two">{{Number(item1.avgPrice).toFixed(4)}}%</span>
                        <span class="three" :class="{green:!item1.avgPd.indexOf('-'),gray:item1.avgPd.indexOf('+')==-1&&item1.avgPd.indexOf('-')==-1}">{{item1.avgPd}}</span>
                        <img src="./img/arrow-up.png" alt="" v-if="item1.avgPd.indexOf('+') != -1">
                        <img src="./img/arrow-down.png" alt="" v-if="item1.avgPd.indexOf('-') != -1">
                      </div>
                      <div>
                        <span class="one">最低</span>
                        <span class="two">{{Number(item1.floorPrice).toFixed(4)}}%</span>
                        <span class="three" :class="{green:!item1.floorPd.indexOf('-'),gray:item1.floorPd.indexOf('+')==-1&&item1.floorPd.indexOf('-')==-1}">{{item1.floorPd}}</span>
                        <img src="./img/arrow-up.png" alt="" v-if="item1.floorPd.indexOf('+') != -1">
                        <img src="./img/arrow-down.png" alt="" v-if="item1.floorPd.indexOf('-') != -1">
                      </div>

                    </li>

                  </ul>
                </div>
              </div>
            </el-tab-pane>

          </el-tabs>


        </div>
        <div class="arrow-left" @click="prev()">
          <img src="./img/arrow-left-1.png" alt="" class="default">
          <img src="./img/arrow-left-2.png" alt="" class="active">
        </div>
        <div class="arrow-right" @click="next()">
          <img src="./img/arrow-right-1.png" alt="" class="default">
          <img src="./img/arrow-right-2.png" alt="" class="active">
        </div>
      </div>
    </div>
    <!-- 右侧固定导航 -->
    <fixed-right :item-type="[1,2,3,4,5]" />
  </div>
</template>

<script>
  import CountUp from "countup"
  import swiper from './swiper.vue'
  import fixedRight from '@/components/fixedRight'
  import Vue from 'vue';
  import scroll from 'vue-seamless-scroll'
  Vue.use(scroll)
  export default {
    components: {
      swiper,
      fixedRight,
    },
    data() {
      return {
        tableData: [],
        activeName: 'tab1',
        hallData: [],
        tabLength: 6,
        hallType: ['银票', '商票'],
        priceType: [{
          name: '国股',
          id: 1
        }, {
          name: '城商',
          id: 2
        }, {
          name: '三农',
          id: 3
        }, {
          name: '村镇',
          id: 4
        }, {
          name: '财务公司',
          id: 5
        }, {
          name: '外资',
          id: 6
        }],
        typeId: 1,
        priceData: [],
        num1Type: '万',
        num2Type: '万',
        num3Type: '万',
        nowTime: '',
      }
    },
    mounted() {
      this.getTicketFirstDeal();
      this.getTicketHall();
      this.getTicketPush();
      this.getTicketTransAmt();
      this.getPlatformPrice();
    },
    computed: {
      optionSingleHeightTime() {
        return {
          singleHeight: 60,
          waitTime: 2000,
          step: 0.4,
          hoverStop: false
        }
      }
    },
    methods: {
      // 滚动金额
      async getTicketTransAmt() {
        let {
          data
        } = await this.$api.getTicketTransAmt();
        if (data.tranIngAmount > 10000) {
          data.tranIngAmount = Number((data.tranIngAmount / 10000).toFixed(5));
          this.num1Type = '亿';
        }
        if (data.readyAmount > 10000) {
          data.readyAmount = Number((data.readyAmount / 10000).toFixed(5));
          this.num2Type = '亿';
        }
        if (data.historyAmount > 10000) {
          data.historyAmount = Number((data.historyAmount / 10000).toFixed(5));
          this.num3Type = '亿';
        }
        this.numberScroll('numScroll1', 0, data.tranIngAmount);
        this.numberScroll('numScroll2', 0, data.readyAmount);
        this.numberScroll('numScroll3', 0, data.historyAmount);
        this.currentDate = data.currentDate;
        this.getBeijinTime();
      },
      async getTicketFirstDeal() {
        let {
          data
        } = await this.$api.getTicketFirstDeal();
        this.tableData = data;
      },
      // 查询交易大厅列表数据
      async getTicketHall() {
        let {
          data
        } = await this.$api.getTicketHall({
          "current": 1,
          "size": 6,
        });
        this.hallData.push(...data.records);
      },
      // 实时成交行情
      async getTicketPush() {
        let {
          data
        } = await this.$api.getTicketPush();
        
      },

      // 底部平台价格指数
      async getPlatformPrice() {
        let {
          data
        } = await this.$api.getPlatformPrice({
          type: this.typeId
        });
        this.priceData.splice(0);
        this.priceData.push(...data);
      },
      handleClick(tab, event) {
        // console.log(tab, event);
        this.typeId = Number(tab.index) + 1;
        this.getPlatformPrice();
      },
      prev() {
        // console.log(this.activeName);
        var index = Number(this.activeName.substr(3));
        if (index <= 1) {
          this.activeName = 'tab' + this.tabLength;
        } else {
          this.activeName = 'tab' + (index - 1);
        }

        this.typeId = Number(this.activeName.substr(3));
        this.getPlatformPrice();
        // document.querySelectorAll('');
      },
      next() {
        // console.log(this.activeName);
        var index = Number(this.activeName.substr(3));
        if (index >= this.tabLength) {
          this.activeName = 'tab' + 1;
        } else {
          this.activeName = 'tab' + (index + 1);
        }
        this.typeId = Number(this.activeName.substr(3));
        this.getPlatformPrice();
      },
      // 获取服务器时间做时钟
      async getBeijinTime() {
        // Vue.axios.get('/beijin/rest/api3.do?api=mtop.common.getTimestamp').then((response) => {
        //   console.log(response.data)
        // });
        // let {
        //   data
        // } = await this.$http.get('/api/rest/api3.do?api=mtop.common.getTimestamp');
        // this.getTime(new Date(this.currentDate).getTime())
        //  http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp
        this.nowTime = this.currentDate.split('.')[0];
        this.getTime(new Date(this.nowTime).getTime())
      },
      getTime(hm) {
        this.calcTime(hm);
        var haomiao = hm;
        setInterval(() => {
          haomiao += 1000;
          // console.log(haomiao);
          this.calcTime(haomiao);
        }, 1000)
      },
      calcTime(hm) {
        var time = new Date(Number(hm));
        // console.log(time);
        var year = time.getFullYear();
        var month = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
        var date1 = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
        var day = time.getDay();
        var hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        var minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        var miao = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
        this.nowTime = year + '年' + month + '月' + date1 + '日 ' + hour + ":" + minute + ":" + miao;
        if (day >= 1 && day <= 5) {
          if (hour >= 9 && hour <= 18) {
            this.bishi = false;
            // console.log(this.bishi);
          } else {
            this.bishi = false;
          }
          // console.log(hour);
        } else {
          this.bishi = false;
        }
        // console.log(this.nowTime);
      },
      numberScroll(id, start, end) {
        let count = new CountUp(id, start, end, 2, 2, {
          duration: 2,
          useEasing: false
        })
        if (!count.error) {
          count.start()
        } else {
          console.log(count.error)
        }
      }
    }
  }
</script>
<style lang="scss">
  .bill {
    .market {
      .content {
        .el-table th {
          background-color: #f8f8f8;
        }

        thead {
          tr {
            &:first-child {
              th {
                &:first-child {
                  padding-left: .5rem;
                  text-align: left;
                }

                text-align: center;
                font-size: .16rem;
                color:#666;
                font-weight: 500;
                line-height: .22rem;
                padding: .15rem 0;
              }
            }
          }
        }

        .el-table__row {
          td {
            &:first-child {
              padding-left: .5rem;
              text-align: left;
            }

            text-align: center;
            font-size: .16rem;
            font-weight: 400;
            line-height: .22rem;
            padding:0.19rem 0;

            &:nth-child(3) {
              color: #FD2323;
            }

            border-bottom: 1px dashed #E5E5E5;
          }
        }
      }
    }

    .price-index {
      .content {
        .el-tabs {
          .el-tabs__nav {
            width: 100%;
            display: flex;
            justify-content: center;
            padding-bottom: .72rem;
          }

          .el-tabs__item {
            padding: 0 .1rem;
          }

          .is-active {
            color: #fff;
          }

          .el-tabs__active-bar {
            display: none;
          }
        }

        .el-tabs__nav-wrap::after {
          display: none;
        }

        .el-tab-pane {
          transition: all 2s;
        }

        .tab-content {
          transition: all 2s;
        }
      }
    }
  }
</style>
<style lang="scss" scoped>
  @import './bill.scss';
</style>