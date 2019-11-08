<template>
  <div class="bill-hall">

    <div v-show="bishi==false" class="kaishi">
      <div class="bg-f8">
        <div class="max-container">
          <div class="banner">
            <div class="container">
              <div class="title">
                <div class="left">
                  <img src="./img/hall-bg-icon1.png" alt="">
                  <h4>开市中</h4>
                </div>
                <div class="right">
                  <span> {{nowTime}}</span>
                </div>
              </div>
            </div>
            <!-- 动态 -->
            <div class="dynamic">
              <div class="container">
                <div class="left">
                  <ul>
                    <li>
                      <div class="list-top">
                        <strong id="numScroll1" class="red">2000.10</strong>
                      </div>
                      <div class="list-center">
                        <span>待接单金额({{num1Type}}元)</span>
                      </div>
                      <div class="list-bottom">
                        <img src="./img/refresh.png" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="list-top">
                        <strong id="numScroll2" class="red">2000.10</strong>
                      </div>
                      <div class="list-center">
                        <span>交易中金额({{num2Type}}元)</span>
                      </div>
                      <div class="list-bottom">
                        <img src="./img/refresh.png" alt="">
                      </div>
                    </li>
                    <li>
                      <div class="list-top">
                        <strong id="numScroll3">2000.10</strong>
                      </div>
                      <div class="list-center">
                        <span>累计成交金额({{num3Type}}元)</span>
                      </div>
                      <div class="list-bottom">
                        <img src="./img/refresh.png" alt="">
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="right">
                  <div class="title">
                    <h4>实时掌握 <span>交易动态</span></h4>
                    <p>智能化系统，全方位风控</p>
                    <div class="">
                      <el-button class="btn-md-primary" @click="$store.dispatch('look/getShowLook', true)">一键发布票据
                      </el-button>
                    </div>
                    <div class="qrcode">
                      <img src="./img/qrcode1.png" alt="">
                      <p>云票小程序</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- 筛选 -->
      <div class="filter">
        <div class="container">
          <div class="top">
            <ul>
              <li>
                <div class="title">
                  票据状态
                </div>
                <ul>
                  <li v-for="(item,index) in pState" :key="index" :class="{active:actives.listActive1==index}"
                    @click="changeActive('listActive1',index)">
                    {{item}}
                  </li>

                </ul>
              </li>
              <li>
                <div class="title">
                  票据类型：
                </div>
                <ul>
                  <li v-for="(item,index) in pType" :key="index" :class="{active:actives.listActive2==index}"
                    @click="changeActive('listActive2',index)">
                    {{item}}
                  </li>

                </ul>
              </li>
              <li>
                <div class="title">
                  承兑人类型：
                </div>
                <ul>
                  <li v-for="(item,index) in cdType" :key="index" :class="{active:actives.listActive3==index}"
                    @click="changeActive('listActive3',index)">
                    {{item}}
                  </li>

                </ul>
              </li>


            </ul>
          </div>
          <div class="bottom" :class="{'is-show-more':isShowMore==true}">
            <ul>
              <li>
                <div class="title">
                  票面金额：
                </div>
                <ul>
                  <li v-for="(item,index) in pmPrice" :key="index" :class="{active:actives.listActive4==index}"
                    @click="changeActive('listActive4',index)">
                    {{item}}
                  </li>
                </ul>
                <div class="input-box">
                  <div class="min">
                    <el-input v-model="minpmPrice" placeholder="最少" type="number" class="btn-min" maxlength="4"
                      @focus="showActive4Btn=true"></el-input>
                    <span>万</span>
                  </div>
                  <span class="gang">
                    -
                  </span>
                  <div class="max">
                    <el-input v-model="maxpmPrice" placeholder="最多" type="number" class="btn-max" maxlength="4"
                      @focus="showActive4Btn=true"></el-input>
                    <span>万</span>
                  </div>
                  <div class="confirm" v-show="showActive4Btn==true">
                    <el-button plain class="btn-confirm" :class="{active:actives.listActive4 == 9}"
                      @click="confirmpmPrice()">确定</el-button>
                  </div>
                </div>
              </li>
              <li>
                <div class="title">
                  到期天数：
                </div>
                <ul>
                  <li v-for="(item,index) in dqDate" :key="index" :class="{active:actives.listActive5==index}"
                    @click="changeActive('listActive5',index)">
                    {{item}}
                  </li>

                </ul>
                <div class="input-box">
                  <div class="min">
                    <el-input v-model="mindqDate" placeholder="最少" type="number" class="btn-min" maxlength="4"
                      @focus="showActive5Btn=true"></el-input>
                    <span>天</span>
                  </div>
                  <span class="gang">
                    -
                  </span>
                  <div class="max">
                    <el-input v-model="maxdqDate" placeholder="最多" type="number" class="btn-max" maxlength="4"
                      @focus="showActive5Btn=true"></el-input>
                    <span>天</span>
                  </div>
                  <div class="confirm" v-show="showActive5Btn==true">
                    <el-button plain class="btn-confirm" :class="{active:actives.listActive5 == 9}"
                      @click="confirmdqDate()">确定</el-button>
                  </div>
                </div>
              </li>
              <li>
                <div class="title">
                  有无回头：
                </div>
                <ul>
                  <li v-for="(item,index) in ywHuiTou" :key="index" :class="{active:actives.listActive6==index}"
                    @click="changeActive('listActive6',index)">
                    {{item}}
                  </li>

                </ul>
              </li>
              <li>
                <div class="title">
                  模式：
                </div>
                <ul>
                  <li v-for="(item,index) in moshi" :key="index" :class="{active:actives.listActive7==index}"
                    @click="changeActive('listActive7',index)">
                    {{item}}
                  </li>

                </ul>
              </li>

            </ul>
          </div>
          <!-- 显示更多按钮 -->
          <div class="show-more" @click="showMore()">
            <img src="./img/filter-arrow-down.png" alt="" v-if="isShowMore==false">
            <img src="./img/filter-arrow-up.png" alt="" v-if="isShowMore==true">
          </div>
          <div class="top" v-if="filters.length>0">
            <ul>
              <li>
                <div class="title">
                  筛选结果：
                </div>
                <ul class="result">
                  <li v-for="(item,index) in filters" :key="index">
                    <div class="select-item">
                      <span class="delete" @click="removeFilters(index,item.key)">
                        <img src="./img/select-delete-icon.png" alt="">
                      </span>
                      {{item.value}}

                    </div>
                  </li>
                  <li v-if="filters.length>0">
                    <div @click="resetFilters()" class="reset">
                      重置
                    </div>
                  </li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 票据搜索列表 -->
      <div class="bill-search">
        <div class="container">
          <div class="title">
            <div class="left">
              <span>票据搜索</span>
              <el-input placeholder="请输入关键字" v-model="search">

                <img slot="suffix" class="search-icon" src="./img/search-icon.png" alt="" @click="billSearch()">

              </el-input>
            </div>
            <!-- <div class="right">
              <img src="./img/add-icon.png" alt="">
              发布票据
            </div> -->
          </div>
          <div class="content">
            <div class="table">
              <div class="table-title">
                <ul>
                  <li>
                    <div class="col1">承兑人</div>
                    <div class="col2">金额(万元)</div>
                    <div class="col3">一口价/竞价</div>
                    <div class="col4">有无回头</div>
                    <div class="col5">到期日</div>
                    <div class="col6">操作</div>
                  </li>
                </ul>
              </div>
              <div class="table-list">

                <noData v-if="isNodata==true"></noData>
                <ul>
                  <li class="list" v-for="(item,index) in tableData" :key="index">
                    <div class="col1">{{item.acceptName}}
                      <span class="bill-type-tip"
                        :class="{yin:item.type==1,shang:item.type==2}">{{pType[item.type].replace('票','')}}</span>
                    </div>
                    <div class="col2">{{item.money}}</div>
                    <div class="col3">{{item.sellType==1 ? '每十万扣款'+(Number(item.dedAmount).toFixed(2)) : '竞价'}}</div>
                    <div class="col4">{{ywHuiTou[item.rptType]}}</div>
                    <div class="col5">{{item.dueTime.split(' ')[0]}}</div>
                    <div class="col6">
                      <div v-if="item.status==3">
                        交易完成
                      </div>
                      <div v-if="item.status==1">
                        <el-button plain class="btn-sm-primary" @click="$router.push('/billDetail')">立即报价</el-button>
                      </div>
                      <div v-if="item.status==2">
                        <el-button plain class="btn-sm-primary gray">交易中</el-button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="page-container" v-if="isNodata==false">

              <el-pagination layout="prev, pager, next" :total="total" :page-size="pageSize" :pager-count="pageCount"
                @current-change="currentChange">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="bishi==true" class="bishi">
      <div class="banner">
        <div class="container">
          <div class="title">
            <div class="left">
              <img src="./img/hall-bg-icon2.png" alt="">
              <h4>闭市中</h4>
            </div>
            <div class="right">
              <span> {{nowTime}}</span>
            </div>
          </div>
        </div>
        <!-- 动态 -->
        <div class="dynamic">
          <div class="container">
            <div class="left">
              <ul>
                <li>
                  <div class="list-top">
                    <strong id="numScroll4" class="red"></strong>
                  </div>
                  <div class="list-center">
                    <span>待接单金额({{num4Type}}元)</span>
                  </div>
                  <div class="list-bottom">
                    <img src="./img/refresh.png" alt="">
                  </div>
                </li>
                <li>
                  <div class="list-top">
                    <strong id="numScroll5" class="red"></strong>
                  </div>
                  <div class="list-center">
                    <span>交易中金额({{num5Type}}元)</span>
                  </div>
                  <div class="list-bottom">
                    <img src="./img/refresh.png" alt="">
                  </div>
                </li>
                <li>
                  <div class="list-top">
                    <strong id="numScroll6"></strong>
                  </div>
                  <div class="list-center">
                    <span>累计成交金额({{num6Type}}元)</span>
                  </div>
                  <div class="list-bottom">
                    <img src="./img/refresh.png" alt="">
                  </div>
                </li>
              </ul>
            </div>
            <div class="right">
              <div class="title">
                <h4>实时掌握 <span>交易动态</span></h4>
                <p>智能化系统，全方位风控</p>
                <div class="">
                  <el-button class="btn-md-primary" @click="$store.dispatch('look/getShowLook', true)">一键发布票据
                  </el-button>
                </div>
                <div class="qrcode">
                  <img src="./img/qrcode1.png" alt="">
                  <p>云票小程序</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="container">
        <div class="title">
          <img src="./img/bishi-icon.png" alt="">

        </div>
        <div class="content">
          <h4>还未到交易时间哦～</h4>
          <p> 交易时间：周一至周五 9:00-18:00</p>
        </div>

      </div>
    </div>
    <!-- 右侧固定导航 -->
    <fixed-right :item-type="[1,2,3,4,5]" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios)

  import CountUp from "countup"
  import fixedRight from '@/components/fixedRight'
  import noData from '@/components/noData'
  export default {
    data() {
      return {
        pState: ['不限', '待接单', '交易中', '交易完成'],
        pType: ['不限', '银票', '商票'],
        cdType: ['不限', '国股', '城商', '三农', '村镇', '外资', '财务公司'],
        pmPrice: ['不限', '10万以下', '10万～50万', '50万～100万', '100万～200万', '200万～500万', '1000万以上'],
        dqDate: ['不限', '60天以内', '60天～90天', '90天～180天', '180天以上'],
        ywHuiTou: ['不限', '有回头', '无回头'],
        moshi: ['不限', '一口价', '竞价'],
        filters: [],
        tableData: [],
        actives: {
          listActive1: 0,
          listActive2: 0,
          listActive3: 0,
          listActive4: 0,
          listActive5: 0,
          listActive6: 0,
          listActive7: 0,
          listActive8: 0,
        },
        minpmPrice: '',
        maxpmPrice: '',
        mindqDate: '',
        maxdqDate: '',
        isShowMore: false,
        search: '',
        showActive4Btn: false,
        showActive5Btn: false,
        bishi: false,
        nowTime: '',
        currentDate: '',
        searchParams: {
          current: 1,
          size: 10
        },
        total: 100,
        pageSize: 10,
        pageCount: 5,
        isNodata: false,
        num1Type: '万',
        num2Type: '万',
        num3Type: '万',
        num4Type: '万',
        num5Type: '万',
        num6Type: '万',
        data: {
          tranIngAmount: '',
          readyAmount: '',
          historyAmount: '',
        }
      }
    },
    components: {
      fixedRight,
      noData
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
    created() {

      this.getTicketTransAmt();
    },
    mounted() {
      this.getTicketHall();
    },
    methods: {
      // 滚动金额
      async getTicketTransAmt() {
        let {
          data
        } = await this.$api.getTicketTransAmt();
        if (data.tranIngAmount > 10000) {
          data.tranIngAmount = Number((data.tranIngAmount / 10000).toFixed(5));
          this.num2Type = '亿';
          this.num5Type = '亿';
        }
        if (data.readyAmount > 10000) {
          data.readyAmount = Number((data.readyAmount / 10000).toFixed(5));
          this.num1Type = '亿';
          this.num4Type = '亿';
        }
        if (data.historyAmount > 10000) {
          data.historyAmount = Number((data.historyAmount / 10000).toFixed(5));
          this.num3Type = '亿';
          this.num6Type = '亿';
        }
        this.data.readyAmount = data.readyAmount;
        this.data.tranIngAmount = data.tranIngAmount;
        this.data.historyAmount = data.historyAmount;

        this.currentDate = data.currentDate;
        this.getBeijinTime();


      },
      // 查询交易大厅列表数据
      async getTicketHall() {
        let {
          data
        } = await this.$api.getTicketHall(this.searchParams);
        this.tableData.splice(0);
        this.tableData.push(...data.records);
        this.total = data.total;
        if (data.total <= 0) {
          this.isNodata = true;
        } else {
          this.isNodata = false;
        }
      },
      searchHall(current) {
        console.log(this.filters);

        for (var key in this.searchParams) {
          delete this.searchParams[key];
        }
        this.searchParams.size = 10;
        this.searchParams.current = current || 1;
        this.searchParams.acceptName = this.search;
        // params.ticketType = this.filters;
        // params.acceptType = this.filters;
        // params.minAmount = this.filters;
        // params.maxAmount = this.filters;
        // params.haveBack = this.filters;
        // params.pattern = this.filters;
        this.filters.map((item, index) => {
          if (item.key == 'listActive1') {
            this.searchParams.status = this.pState.indexOf(item.value);
          } else if (item.key == 'listActive2') {
            this.searchParams.ticketType = this.pType.indexOf(item.value);
          } else if (item.key == 'listActive3') {
            this.searchParams.acceptType = this.cdType.indexOf(item.value);
          } else if (item.key == 'listActive4') {
            var price = this.pmPrice[this.pmPrice.indexOf(item.value)];
            var min = 0;
            var max = 0;
            if (this.pmPrice.indexOf(item.value) == 1) {
              min = 0;
              max = price.replace('万', '').replace('以下', '');
            } else if (this.pmPrice.indexOf(item.value) == this.pmPrice.length - 1) {
              min = price.replace('万', '').replace('以上', '');;
              max = 99999;
            } else if (this.pmPrice.indexOf(item.value) == -1) {
              min = item.value.split('~')[0].replace('万', '');
              max = item.value.split('~')[1].replace('万', '');
            } else {
              min = price.split('～')[0].replace('万', '');
              max = price.split('～')[1].replace('万', '');
            }
            this.searchParams.minAmount = Number(min);
            this.searchParams.maxAmount = Number(max);

          } else if (item.key == 'listActive5') {
            var price = this.dqDate[this.dqDate.indexOf(item.value)];
            var min = 0;
            var max = 0;
            if (this.dqDate.indexOf(item.value) == 1) {
              min = 0;
              max = price.replace('天', '').replace('以内', '');
            } else if (this.dqDate.indexOf(item.value) == this.dqDate.length - 1) {
              min = price.replace('天', '').replace('以上', '');;
              max = 99999;
            } else if (this.dqDate.indexOf(item.value) == -1) {
              min = item.value.split('~')[0].replace('天', '');
              max = item.value.split('~')[1].replace('天', '');
            } else {
              min = price.split('～')[0].replace('天', '');
              max = price.split('～')[1].replace('天', '');
            }
            this.searchParams.minDay = Number(min);
            this.searchParams.maxDay = Number(max);
          } else if (item.key == 'listActive6') {
            this.searchParams.haveBack = this.ywHuiTou.indexOf(item.value);
          } else if (item.key == 'listActive7') {
            this.searchParams.pattern = this.moshi.indexOf(item.value);
          }
        });

        this.getTicketHall();

      },

      changeActive(active, index) {
        this.actives[active] = index;
        this.filters.splice(0, this.filters.length);
        this.filters.push({
          value: this.pState[this.actives.listActive1],
          key: 'listActive1'
        });
        this.filters.push({
          value: this.pType[this.actives.listActive2],
          key: 'listActive2'
        });
        this.filters.push({
          value: this.cdType[this.actives.listActive3],
          key: 'listActive3'
        });
        if (this.actives.listActive4 == 9) {
          this.filters.push({
            value: this.minpmPrice + '万~' + this.maxpmPrice + '万',
            key: 'listActive4'
          });
        } else {
          this.filters.push({
            value: this.pmPrice[this.actives.listActive4],
            key: 'listActive4'
          });
        }
        if (this.actives.listActive5 == 9) {
          this.filters.push({
            value: this.mindqDate + '天~' + this.maxdqDate + '天',
            key: 'listActive5'
          });
        } else {
          this.filters.push({
            value: this.dqDate[this.actives.listActive5],
            key: 'listActive5'
          });
        }

        this.filters.push({
          value: this.ywHuiTou[this.actives.listActive6],
          key: 'listActive6'
        });
        this.filters.push({
          value: this.moshi[this.actives.listActive7],
          key: 'listActive7'
        });
        for (let i = 0; i < this.filters.length; i++) {
          if (this.filters[i].value == '不限') {
            this.filters.splice(i, 1);
            i--
          }
        }
        this.searchHall();
      },
      showMore() {
        this.isShowMore = !this.isShowMore;
      },
      removeFilters(index, key) {
        this.filters.splice(index, 1);
        this.actives[key] = 0;
        if (key == 'listActive4') {
          this.minpmPrice = '';
          this.maxpmPrice = '';
          this.showActive4Btn = false;
        }
        if (key == 'listActive5') {
          this.mindqDate = '';
          this.maxdqDate = '';
          this.showActive5Btn = false;
        }
        this.searchHall();
      },
      resetFilters() {
        this.filters.splice(0, this.filters.length);
        this.actives.listActive1 = 0;
        this.actives.listActive2 = 0;
        this.actives.listActive3 = 0;
        this.actives.listActive4 = 0;
        this.actives.listActive5 = 0;
        this.actives.listActive6 = 0;
        this.actives.listActive7 = 0;
        this.actives.listActive8 = 0;
        this.minpmPrice = '';
        this.maxpmPrice = '';
        this.mindqDate = '';
        this.maxdqDate = '';
        this.showActive5Btn = false;
        this.showActive5Btn = false;
        this.searchHall();
      },
      confirmpmPrice() {
        if (this.minpmPrice < 0 || this.minpmPrice == '') {
          return;
        }
        if (this.maxpmPrice <= 0 || this.maxpmPrice >= 9999) {
          return
        }
        if (this.maxpmPrice <= this.minpmPrice) {
          return;
        }
        this.actives.listActive4 = 9;
        let isActive4 = false;
        this.filters.map((item, index) => {
          if (item.key == 'listActive4') {
            // this.filters.splice(index, 1);
            this.filters[index].value = this.minpmPrice + '万~' + this.maxpmPrice + '万';
            isActive4 = true;
          }
        });
        if (isActive4 == false) {
          this.filters.push({
            value: this.minpmPrice + '万~' + this.maxpmPrice + '万',
            key: 'listActive4'
          });
        }
        this.searchHall();
      },
      confirmdqDate() {
        if (this.mindqDate < 0 || this.mindqDate == '') {
          return;
        }
        if (this.maxdqDate <= 0 || this.maxdqDate >= 9999) {
          return
        }
        if (this.maxdqDate <= this.mindqDate) {
          return;
        }
        this.actives.listActive5 = 9;
        let isActive5 = false;
        this.filters.map((item, index) => {
          if (item.key == 'listActive5') {
            // this.filters.splice(index, 1);
            this.filters[index].value = this.mindqDate + '天~' + this.maxdqDate + '天';
            isActive5 = true;
          }
        });
        if (isActive5 == false) {
          this.filters.push({
            value: this.mindqDate + '天~' + this.maxdqDate + '天',
            key: 'listActive5'
          });
        }
        this.searchHall();
      },
      currentChange(page) {
        this.searchParams.current = page;
        this.searchHall(this.searchParams.current);
      },
      billSearch() {
        this.searchHall();
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
        }, 1000);
        if (this.bishi == true) {

          this.numberScroll('numScroll4', 0, this.data.readyAmount);
          this.numberScroll('numScroll5', 0, this.data.tranIngAmount);
          this.numberScroll('numScroll6', 0, this.data.historyAmount);
        } else {
          this.numberScroll('numScroll1', 0, this.data.readyAmount);
          this.numberScroll('numScroll2', 0, this.data.tranIngAmount);
          this.numberScroll('numScroll3', 0, this.data.historyAmount);
        }
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
            this.bishi = true;
          }
          // console.log(hour);
        } else {
          this.bishi = true;
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
      },
    }
  }
</script>
<style lang="scss">
  .bill-hall {
    .banner {
      background-color: #fff;
    }

    .filter {
      .input-box {
        display: flex;

        .min,
        .max {
          width: .8rem;
          height: .32rem;
          line-height: .32rem;
          border: 1px solid $mbf3;
          display: flex;
          align-items: center;
          margin-top: .1rem;
          padding-right: .15rem;
          padding-left: .15rem;
        }

        .gang {
          padding: .12rem .06rem;
          line-height: .32rem;
        }

        .el-input {

          .el-input__inner {
            height: .18rem;
            line-height: .18rem;
            // width: .24rem;
            border: none;
            padding: 0;
          }
        }



        .confirm {
          width: .5rem;
          height: .32rem;
          margin-top: .1rem;
          margin-left: .12rem;

          button {
            width: 100%;
            height: 100%;
            border: 1px solid $mbf3;
            font-size: .12rem;
            color: $mc6;

            &:hover {
              color: $mc;
            }

            &:active {
              color: $mc;
            }

            &.active {
              color: $mc;
            }
          }
        }
      }
    }

    .bill-search {
      .title {
        .left {
          .el-input {
            width: 2.5rem;

            input {
              border-radius: 0;
              border: 1px solid #e5e5e5;
              padding-right: .4rem;
            }

            .el-input__suffix {
              right: 0;
              width: .4rem;
              display: flex;
              justify-content: center;
              cursor: pointer;
            }

            .search-icon {
              // margin-right: .07rem;
            }
          }
        }
      }

      .content {
        .page-container {
          display: flex;
          justify-content: flex-end;
          padding-top: .4rem;

          .el-pagination {
            width: 3.6rem;

            button {
              width: .34rem;
              height: .34rem;
              line-height: .34rem;
              padding: 0;
              text-align: center;
              border: 1px solid #e5e5e5;
              margin-right: .06rem;
            }

            ul {
              li {
                width: .34rem;
                height: .34rem;
                line-height: .34rem;
                padding: 0;
                text-align: center;
                border: 1px solid #e5e5e5;
                margin-right: .06rem;
                font-weight: normal;
                color: $mc3;

                &.active {
                  color: $mc;
                  border: 1px solid $mc;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
<style lang="scss" scoped>
  @import './billHall.scss';
</style>