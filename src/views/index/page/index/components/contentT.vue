<template>
    <!-- 首页头部内容（资金提供方、核心企业、融资成交额） -->
    <div class="content_t">
        <div class="info container">
            <!-- <div class="info_l">
                <div>
                    <img src="../images/cost_header.png" alt="">
                    <span class="title">资金提供方</span>
                    <span class="number cost"><span id="numScroll1"></span><b>家</b></span>
                </div>
                <div>
                    <img src="../images/company_header.png" alt="">
                    <span class="title">核心企业</span>
                    <span class="number company"><span id="numScroll2"></span><b>家</b></span>
                </div>
                <div>
                    <img src="../images/total_amount_header.png" alt="">
                    <span class="title">融资成交额</span>
                    <span class="number total"><span id="numScroll3"></span><b>{{num3Type}}</b></span>
                </div>
            </div> -->
            <div class="left-tip">
                <div>
                    <img src="../images/total_amount_header.png" alt="">
                    <span class="title">融资成交额</span>
                    <p>突破资金瓶颈 提升品牌竞争力</p>
                    <span class="number total"><span id="numScroll3"></span><b>{{num3Type}}</b></span>
                </div>
                <div>
                    <img src="../images/company_header.png" alt="">
                    <span class="title">核心企业</span>
                    <p>一站式对接全国优质核心企业</p>
                    <span class="number company"><span id="numScroll2"></span><b>家</b></span>
                </div>

            </div>
            <div class="info_c">
                <vue-seamless-scroll :data="xibao" class="seamless-warp" :class-option="optionSingleHeightTime">
                    <ul>
                        <li v-for="(item,index) in xibao" :key="index">
                            <div class="left">
                                <img src="../images/company_new_icon.png" alt="" class="company_icon one" v-if="item.type==1">
                                <img src="../images/company_icon.png" alt="" class="company_icon two" v-if="item.type==1">
                                <img src="../images/jigou-2.png" alt="" class="company_icon one" v-if="item.type==2">
                                <img src="../images/jigou-1.png" alt="" class="company_icon two" v-if="item.type==2">
                                <span class="company_name ellipsis">{{item.name}}
                                    <img src="../images/new_icon.png" alt="" class="new_icon" v-if="item.isNew==true">
                                </span>
                            </div>
                            <div class="right">
                                <span class="time c-66">{{item.updateTime}}</span>
                            </div>
                        </li>


                    </ul>
                </vue-seamless-scroll>

            </div>
            <div class="info_r">
                <div class="top">
                    <img src="../images/company_new_into.png" alt="">
                </div>
                <div class="bottom">
                    <img src="../images/content_t_house.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import CountUp from "countup"
    import scroll from 'vue-seamless-scroll'
    Vue.use(scroll)
    export default {
        name: "numberScroll.vue",
        data() {
            return {
                xibao: [],
                num3Type: '元',
            }
        },
        mounted() {
            this.getHomeData();
            setInterval(() => {
                this.getHomeData();
            }, 1800000);
            this.getCompany();

        },
        computed: {
            optionSingleHeightTime() {
                return {
                    singleHeight: 50,
                    waitTime: 2000,
                    step: 0.4,
                    hoverStop: false
                }
            }
        },
        methods: {
            async getHomeData() {
                let {
                    data
                } = await this.$api.getHomeData();
                if (data.amount > 10000) {
                    data.amount = Number((data.amount / 10000).toFixed(4));
                    this.num3Type = '万';
                }
                console.log(data.amount);
                // this.numberScroll('numScroll1', 0, data.fundProvider, 0);
                this.numberScroll('numScroll2', 0, data.company, 0);
                this.numberScroll('numScroll3', 0, data.amount, 2);
            },
            async getCompany() {
                let {
                    data
                } = await this.$api.getCompany();
                this.xibao = data;
            },

            numberScroll(id, start, end, count1) {
                let count = new CountUp(id, start, end, count1, 2, {
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

<style lang="scss" scoped>
    // 融资金融和企业数量
    .content_t {
        height: 4.4rem;
        background: #ffffff;
        position: relative;


        .info {
            display: flex;
            padding-top: .7rem;
            padding-bottom: .7rem;

            .left-tip {
                width: 5.3rem;
                height: 3rem;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0 0 .2rem 0 rgba(0, 0, 0, 0.06);
                display: flex;

                >div {
                    width: 50%;
                    padding: .52rem 0;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        right: 0;
                        height: 1.8rem;
                        top: 50%;
                        transform: translateY(-50%);
                        width: .01rem;
                        background: #f3f3f3;
                    }

                    .title {
                        padding-top: .24rem;
                        padding-bottom: .1rem;
                        font-size: .16rem;
                        font-weight: 600;
                    }

                    p {
                        padding-bottom: .20rem;
                        font-size: .14rem;
                        color: $mc6;
                    }

                    .number {
                        font-size: .36rem;
                        font-weight: 600;
                        color: rgba(253, 35, 35, 1);
                        line-height: .5rem;
                        position: relative;

                        b {
                            font-size: .16rem;
                            padding-left: .04rem;
                            position: relative;
                            top: -0.02rem;
                            transform: translateY(-0.09rem);
                        }
                    }

                    .total {
                        color: #333333;
                    }
                }
            }

            .info_l {
                width: 5.3rem;
                height: 3rem;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0 0 .2rem 0 rgba(0, 0, 0, 0.06);

                div {
                    display: flex;
                    height: .5rem;
                    line-height: .5rem;
                    margin-top: .36rem;

                    img {
                        width: .46rem;
                        height: .46rem;
                        margin: 0 .14rem 0 .4rem;
                    }

                    span {
                        vertical-align: middle;
                    }

                    .title {
                        text-align: left;
                    }

                    .number {
                        font-size: .36rem;
                        font-weight: 600;
                        color: rgba(253, 35, 35, 1);

                        b {
                            font-size: .16rem;
                            padding-left: .04rem;
                        }
                    }

                    .cost {
                        padding-left: .58rem;
                    }

                    .company {
                        padding-left: .74rem;
                    }

                    .total {
                        padding-left: .56rem;
                        color: #333333;
                    }


                }
            }

            .info_c {
                padding-left: 0.58rem;
                overflow: hidden;
                height: 3rem;

                ul {
                    width: 3.3rem;
                    // height: 3rem;
                    padding: .1rem 0;
                    overflow: hidden;

                    li {
                        padding-bottom: .3rem;
                        display: flex;
                        line-height: .2rem;
                        justify-content: space-between;

                        .one {
                            display: none;
                        }

                        .two {
                            display: block;
                        }

                        &:hover {
                            .one {
                                display: block;
                            }

                            .two {
                                display: none;
                            }

                            color:$mc;
                            .time {
                                color:$mc;
                            }
                        }

                        .left {
                            display: flex;

                            .company_icon {
                                width: .16rem;
                                height: .16rem;
                                vertical-align: middle;
                                margin-top: .02rem;
                            }

                            .company_name {
                                padding: 0 0 0 .16rem;
                                width: 1.8rem;
                                vertical-align: middle;
                            }

                            .new_icon {
                                width: .35rem;
                                height: .2rem;
                                padding-left: .06rem;
                                vertical-align: middle;
                            }

                        }

                        .right {
                            .time {
                                text-align: right;
                            }
                        }


                    }

                }




            }

            .info_r {

                .top {
                    position: absolute;
                    top: .7rem;
                    right: 0.56rem;

                    img {
                        width: 1.68rem;
                        height: 1.16rem;
                    }
                }

                .bottom {
                    position: absolute;
                    bottom: 0;
                    right: -0.9rem;

                    img {
                        width: 3.29rem;
                        height: 1.93rem;
                    }
                }

            }

        }
    }
</style>