<template>
    <div class="bill index-bill">
        <tab-top :data="info" :index="1">
            <div class="btn cp" slot="btn"  @click="$store.dispatch('look/getShowLook', true)">
                <span>我要买票/卖票</span>
            </div>
        </tab-top>
        <div class="bottom">
            <div class="bii_l">
                <div class="bill-market">
                    <div class="title">
                        <img src="../../../assets/img/bolang.png" alt="">
                        <p>实时成交行情</p>
                        <img src="../../../assets/img/bolang.png" alt="">
                    </div>
                    <div class="content">
                        <div class="inner">
                            <vue-seamless-scroll :data="xibao2" class="seamless-warp1"
                                :class-option="optionSingleHeightTime1">
                                <ul>
                                    <li v-for="(item,index) in xibao3" :key="index">
                                        <div class="left c-33">

                                            <span class="company_name">
                                                {{item.caName}}票据融资成功,金额
                                                {{item.expMoney}}万元
                                            </span>
                                        </div>
                                        <div class="right">
                                            <span class="time c-66">{{item.ppayDate.split(' ')[0]}}</span>
                                        </div>
                                    </li>


                                </ul>
                            </vue-seamless-scroll>
                        </div>
                    </div>


                </div>

            </div>
            <div class="bii_r">
                <el-carousel width="740px" height="400px" arrow="never">
                    <el-carousel-item v-for="(item,index) in slideData" :key="index">
                        <div class="slide-box ">
                            <template v-for="(i,k) in item">
                                <div class="paper_bg bill_paper_shangpiao" v-if="i.type==1" :key="k +'2'">
                                    <div class="bill_info">
                                        <div class="info_t">
                                            <span class="ellipsis-2">{{i.acceptName}}</span>
                                            <img src="../images/new_icon.png" alt="" v-if="i.isNew == 1">
                                        </div>
                                        <div class="info_b">
                                            <div class="money_l">
                                                <div class="amount"><span>{{i.money}}</span></div>
                                                <div class="unit"><span>金额(万元)</span></div>
                                            </div>
                                            <div class="date_r">
                                                <div class="date"><span>{{i.date.split(' ')[0]}}</span></div>
                                                <div class="text"><span>发布日</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="paper_bg bill_paper_yinpiao" v-if="i.type==2" :key="k+'1'">
                                    <div class="bill_info">
                                        <div class="info_t">
                                            <span class="ellipsis-2">{{i.acceptName}}</span>
                                            <img src="../images/new_icon.png" alt="" v-if="i.isNew == 1">
                                        </div>
                                        <div class="info_b">
                                            <div class="money_l">
                                                <div class="amount"><span>{{i.money}}</span></div>
                                                <div class="unit"><span>金额(万元)</span></div>
                                            </div>
                                            <div class="date_r">
                                                <div class="date"><span>{{i.date.split(' ')[0]}}</span></div>
                                                <div class="text"><span>发布日</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>


                        </div>
                    </el-carousel-item>
                </el-carousel>

            </div>
        </div>
        <div class="btn_into cp"  @click="$router.push('/billHall')">
            <span>进入票据大厅</span>
        </div>
    </div>
</template>

<script>
    import tabTop from './tabTop'
    import Vue from 'vue';
    import CountUp from "countup"
    import scroll from 'vue-seamless-scroll'
    Vue.use(scroll)
    export default {
        components: {
            tabTop
        },
        data() {
            return {
                xibao2: [],
                xibao3: [],
                info: {
                    top: true,
                    title: '票据融资',
                    iconImg: require('../images/bill_icon.png'),
                    contentText: '电子商业承兑汇票是一种低成本、灵活度高、流动性好的重要融资方式，解决企业融资难，融资贵问题，实现企业融资成本接近“零”。<br/><br/> 瑞通票据在合规、安全的基础上通过产品创新不断提升票据服务水平，携手合作银行推出的线上承兑汇票贴现服务，支持电子商业承兑汇票的快速流转，利率优惠、资金秒到账、纯线上操作方便快捷，为票据行业发展保驾护航。',
                    hintImg: require('../images/wx_code_bg1.png')
                },
                ticketList: [],
                slideData: [],
                // waitTime:10000
            }
        },
        created() {
            this.getTicketFirstDeal();
            this.getTicketPush();
            // this.xibaoHeight1 = 66;
           
        },
        computed: {

            optionSingleHeightTime1() {
                return {
                    singleHeight: 71,
                    waitTime: 4000,
                    step: 0.4,
                    hoverStop: false
                }
            }
        },
        methods: {
            async getTicketFirstDeal() {
                let {
                    data
                } = await this.$api.getTicketFirstDeal();
                // console.log(data);
                this.xibao3 = data;
                setTimeout(()=>{
                    this.xibao2 = data;
                },4000);
            },
            async getTicketPush() {
                let {
                    data
                } = await this.$api.getTicketPush();
                // console.log(data);
                this.ticketList.push(...data);
                var arr = [
                    []
                ];
                // console.log(this.ticketList.length);
                for (var i = 0; i < Math.ceil(this.ticketList.length / 4); i++) {
                    arr[i] = [];
                    for (var j = i * 4; j < i * 4 + 4; j++) {
                        if (this.ticketList[j]) {
                            arr[i].push(this.ticketList[j])
                        }

                    }
                }

                this.slideData.push(...arr);

            },
        }
    }
</script>
<style lang="scss">
    .index-bill {
        .bii_r {
            .slide-box {
                width: 7.4rem;
                height: 4.1rem;


            }

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
    }
</style>
<style lang="scss" scoped>
    @import '../../../style/indexTab.scss';

    //融资票据--tab栏具体内容
    .bill .bottom {
        display: flex;

        .bii_l {
            width: 4.2rem;
            text-align: center;
            border-right: .01rem #F3F3F3 solid;

            .bill-market {
                padding-top: .53rem;

                .title {
                    display: flex;
                    justify-content: center;

                    p {
                        font-size: .24rem;
                        font-weight: 500;
                        line-height: .33rem;
                        color: #333;
                        padding: 0 .08rem;
                    }
                }

                .content {
                    // padding-top: .15rem;
                    padding: .4rem .4rem .43rem;
                    height: 3.75rem;
                    // 450-86
                    overflow: hidden;
                    // width: 340px;



                    .inner {
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                    }

                    ul {
                        height: 100%;

                        // overflow: hidden;
                        li {
                            height: .71rem;
                            padding: .12rem 0;

                            &:first-child {
                                // padding-top: 0;
                            }

                            display: flex;
                            border-bottom: 1px dashed #f3f3f3;

                            .left {
                                display: flex;

                                .company_name {
                                    width: 2.46rem;
                                    text-align: left;
                                    line-height: .24rem;
                                    height: .48rem;
                                    overflow: hidden;
                                }
                            }

                            .right {
                                width: .96rem;
                                line-height: .24rem;
                            }
                        }
                    }
                }
            }

            .into_xcx {
                padding: .2rem 0 .5rem 0;

                span {
                    font-size: .16rem;
                    color: rgba(102, 102, 102, 1);
                }
            }

            .img_xcx img {
                width: 1.62rem;
                height: 1.62rem;
            }
        }

        .bii_r {

            width: 7.8rem;
            padding: .4rem .4rem 0.75rem .4rem;
            // padding-left: 0;
            
            .slide-box {
                display: flex;
                flex-wrap: wrap;
                height: 3.66rem;
            }

            .paper_bg {
                width: 3.34rem;
                height: 1.52rem;
                box-sizing: border-box;
                // margin-bottom: .3rem;

                &:nth-of-type(2n) {
                    margin-left: .3rem;
                }

                .bill_info {
                    width: 3.34rem;
                    padding: .3rem .2rem .24rem .92rem;

                    .info_t {
                        padding-bottom: .24rem;

                        span {
                            font-size: .16rem;
                            font-weight: 500;
                            color: rgba(51, 51, 51, 1);
                            vertical-align: middle;
                        }

                        img {
                            width: .35rem;
                            height: .2rem;
                            padding-left: .06rem;
                            vertical-align: middle;
                        }

                    }

                    .info_b {
                        display: flex;

                        .money_l {
                            // width: .9rem;
                            padding-right: .5rem;

                            .amount span {
                                font-size: .16rem;
                                font-weight: 500;
                                color: rgba(253, 48, 59, 1);
                            }

                            .unit span {
                                font-size: .12rem;
                                color: rgba(102, 102, 102, 1);
                            }

                        }

                        .date_r {

                            // width: .9rem;
                            .date span {
                                font-size: .16rem;
                                color: rgba(51, 51, 51, 1);
                            }

                            .text span {
                                font-size: .12rem;
                                color: rgba(102, 102, 102, 1);
                            }
                        }
                    }
                }
            }

            .odd {
                margin-right: .3rem;
            }

            .bill_paper_shangpiao {
                background: url(../images/shangpiao_bg.png)no-repeat center center;
                background-size: 100% 100%;
            }

            .bill_paper_yinpiao {
                background: url(../images/yinpiao_bg.png)no-repeat center center;
                background-size: 100% 100%;
            }
        }
    }
</style>