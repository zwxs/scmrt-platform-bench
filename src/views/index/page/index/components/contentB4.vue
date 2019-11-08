<template>
    <!-- 应收账款融资 -->
    <div class="receivable tab">
        <tab-top :data="info" :index="3">
            <div slot="text" class="text">
                <p>业务特色</p>
                <div>
                    <ul>
                        <li>
                            <img src="../../../assets/img/box_icon.png" alt="">
                            <span>无需抵押</span>
                            <i>/</i>
                        </li>
                        <li>
                            <img src="../../../assets/img/min_icon.png" alt="">
                            <span>量身定制的解决方案</span>
                            <i>/</i>
                        </li>
                        <li>
                            <img src="../../../assets/img/love_icon.png" alt="">
                            <span>贴心的还款方式</span>
                        </li>
                    </ul>
                </div>
            </div>
        </tab-top>
        <div class="bottom">
            <div class="left">
                <div class="title">
                    <img src="../../../assets/img/lantern_he_icon.png" alt="">
                    <img src="../../../assets/img/lantern_bao_icon.png" alt="">
                </div>
                <div class="content">
                    <div class="inner">
                        <vue-seamless-scroll :data="xibao1" class="seamless-warp1"
                            :class-option="optionSingleHeightTime1">
                            <ul>
                                <li v-for="(item,index) in xibao2" :key="index">
                                    <div class="left">

                                        <span class="company_name">{{item.title}}

                                        </span>
                                    </div>
                                    <div class="right">
                                        <span class="time">{{item.createTime}}</span>
                                    </div>
                                </li>


                            </ul>
                        </vue-seamless-scroll>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="card-product" v-for="(item,index) in recommend" :key="index">
                    <div class="title">
                        <div class="left">
                            <h4>{{item.productName}}</h4>
                            <div class="tip">
                                <span>{{item.loadType}}</span>
                            </div>
                        </div>
                        <div class="right c-66">
                            <img :src="recommendIcon[index]" alt="">
                        </div>
                    </div>
                    <div class="content">
                        <div class="left">
                            <strong class="red">{{item.rate}}</strong>
                            <p>最低月息</p>
                        </div>
                        <div class="right">
                            <strong class="black">{{item.amount}}</strong>
                            <p>最高额度</p>
                        </div>
                    </div>
                </div>
                <div class="card-product">
                    <div class="buy-box">
                        <p>极速对接·最快当天到账</p>
                        <h4><strong>最高额度</strong> <span>3000</span><sub>万</sub></h4>
                        <el-button class="btn-apply cp" @click="$store.dispatch('look/getShowLook', true)">立即申请
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn_into cp" @click="$store.dispatch('look/getShowLook', true)">
            <span>我要现金</span>
        </div>
    </div>
</template>

<script>
    import tabTop from './tabTop'
    export default {
        data() {
            return {
                info: {
                    top: true,
                    title: '企业信用贷',
                    iconImg: require('../images/qiye_icon.png'),
                    contentText: '企业信用贷款是一种无需抵押、无需担保、手续简便、期限灵活、审批快捷、放款迅速、为企业提供流动资金，配合企业的不同业务需求，帮助企业顺利拓展国内、国际业务的贷款。',
                    hintImg: require('../images/wx_code_bg2.png')

                },
                xibao1: [],
                xibao2: [],
                recommendIcon: [require('@/assets/img/hot_first_icon.png'), require('@/assets/img/hot_second_icon.png'),
                    require('@/assets/img/hot_third_icon.png')
                ],
                recommend: []

            }
        },
        components: {
            tabTop
        },
        created() {
            this.getProductInfo();
            this.getNotice();

        },
        mounted() {},
        computed: {
            optionSingleHeightTime1() {
                return {
                    singleHeight: 85,
                    waitTime: 4000,
                    step: 0.4,
                    hoverStop: false
                }
            },
            getTabData() {

                return this.$store.getters.getTabData;
            }
        },
        methods: {
            async getProductInfo() {
                let {
                    data
                } = await this.$api.getProductInfo();
                // console.log(data);
                this.recommend.push(...data);
            },
            async getNotice() {
                let {
                    data
                } = await this.$api.getNotice();
                // console.log(data);
                this.xibao2 = data;
                setTimeout(() => {
                    this.xibao1 = data;
                }, 4000);
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/indexTab.scss';
</style>

<style lang="scss" scoped>
    // 企业信用贷
    .receivable {
        .text {
            p {
                color: #fff;
                font-size: .16rem;
                // padding:  .2rem 0;
                padding-bottom: .2rem;
            }

            ul {
                display: flex;

                li {
                    color: #fff;

                    img {
                        width: .16rem;
                    }

                    span {
                        padding-left: .1rem;
                        padding-right: .32rem;
                    }

                    i {
                        font-style: normal;
                        padding-right: .29rem;
                    }
                }
            }
        }
    }

    .bottom {
        display: flex;

        >.left {
            width: 4.2rem;
            height: 4.5rem;

            .title {
                padding-top: .4rem;
                display: flex;
                justify-content: center;

                img {
                    margin: 0 15px;
                }
            }

            .content {
                width: 100%;
                height: 100%;
                padding: .34rem .40rem;
                height: 3.23rem;

                .inner {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;

                    ul {
                        height: 100%;

                        // overflow: hidden;
                        li {

                            padding: .2rem 0;

                            &:first-child {
                                // padding-top: 0;
                            }

                            display: flex;
                            border-bottom: 1px solid #f3f3f3;
                            justify-content: space-between;

                            .left {
                                display: flex;
                                color: $mc3;

                                .company_name {
                                    width: 2.2rem;
                                    text-align: left;
                                    line-height: .22rem;
                                    // height: .2rem;
                                    // overflow: hidden;
                                }
                            }

                            .right {
                                width: .96rem;
                                text-align: right;
                                line-height: .22rem;
                                color: $mc6;
                            }
                        }
                    }
                }
            }
        }

        >.right {
            width: 7.8rem;
            height: 4.5rem;

            display: flex;
            flex-wrap: wrap;

            .card-product {
                width: 3.9rem;
                height: 2.25rem;
                padding: .4rem .32rem 0.4rem.4rem;
                border-left: 1px solid #f3f3f3;

                &:nth-of-type(n+2) {
                    border-top: 1px solid #f3f3f3;
                }

                .title {
                    display: flex;
                    justify-content: space-between;

                    h4 {
                        font-size: .2rem;
                        font-weight: 600;
                        line-height: .22rem;
                        color: #333;
                    }

                    .tip {
                        width: .7rem;
                        height: .26rem;
                        background: rgba(78, 106, 147, 0.1);
                        // opacity: 0.1;
                        text-align: center;
                        line-height: .26rem;
                        margin-top: .18rem;

                        span {
                            opacity: 1;
                            color: #6C84A6;
                            font-size: .13rem;
                        }
                    }
                }

                .content {
                    display: flex;
                    padding-top: .1rem;

                    >div {
                        width: 1.3rem;

                        strong {
                            font-weight: 600;
                            font-size: .28rem;
                            display: inline-block;
                            height: .38rem;
                            line-height: .38rem;
                        }

                        .red {
                            color: #FD303B;

                        }

                        .black {
                            color: #333;
                        }

                        p {
                            padding: .08rem 0;
                            color: $mc6;
                        }
                    }
                }

                .buy-box {
                    width: 3.03rem;
                    background-image: url('../../../assets/img/buy-box-bg.png');
                    height: 1.31rem;
                    text-align: center;

                    p {
                        font-size: .14rem;
                        color: #999;
                        line-height: .22rem;
                        text-align: center;
                        padding-top: .12rem;
                    }

                    h4 {


                        text-align: center;
                        line-height: .42rem;
                        font-weight: 500;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding-top: .06rem;
                        padding-bottom: .2rem;

                        strong {
                            font-size: .24rem;
                            color: #333;
                            font-weight: 500;
                        }

                        span {
                            padding-left: .06rem;
                            color: #FD303B;
                            font-size: .3rem;
                            vertical-align: baseline;
                            font-weight: 600;
                        }

                        sub {
                            padding-left: .04rem;
                            color: #FD303B;
                            font-size: .24rem;
                            line-height: .42rem;
                            vertical-align: baseline;
                            font-weight: 600;
                        }
                    }

                    .btn-apply {
                        width: 1.56rem;
                        height: .48rem;
                        background-image: url('../../../assets/img/btn-apply-bg.png');
                        color: #fff;
                        border: none;
                        background-color: rgba(0, 0, 0, 0);
                        font-size: .16rem;
                        line-height: .22rem;

                    }
                }
            }
        }
    }
</style>