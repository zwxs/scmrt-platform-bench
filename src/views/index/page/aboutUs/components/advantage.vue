<template>
    <!-- 服务优势 -->
    <div class="advantage p-lr-60">
        <h3 class="title pt-4 fs24 fw-500">服务优势</h3>
        <p class="fs16 mb-30 pt-30">中小企业融资平台，供应链闭环金融服务全覆盖</p>
        <ul class="advantage-list mb-30">
            <li class="pr border-1px" v-for="(item,index) in list" :key="index">
                <h4 class="fs16 title ">{{item.title}}</h4>
                <p class="pl-30 c-66">{{item.explain}}</p>
            </li>
        </ul>
        <!-- 图文解说 -->
        <ul class="graphic mb-30">
            <li class="mb-5 bg1">
                <div class="graphic-item h100">
                    <div class="left pr">
                        <div class="pa-center w100">
                            <img src="../images/adv1.png" alt="">
                            <h4 class="fs16 mt-15">核心企业供应链融资</h4>
                        </div>

                    </div>
                    <div class="right pr">
                        <p class="pt-25 pb-10">核心企业资质认证、信用评级、供应链融资等服务</p>
                        <p class="c-66 lh-22">
                            瑞通供应链金融平台快速对接多家金融机构，与核心企业达成战略合作，通过金融大数据，即可帮助全国范围内经销商融资，增加资金融通渠道，降低融资成本，提升企业竞争力。</p>
                    </div>
                </div>
            </li>
            <li class="mb-5 bg2">
                <div class="graphic-item h100">
                    <div class="left pr">
                        <div class="pa-center w100">
                            <img src="../images/adv2.png" alt="">
                            <h4 class="fs16 mt-15">商票贴现流转</h4>
                        </div>

                    </div>
                    <div class="right pr">
                        <p class="pt-25 pb-10">银票、商票等票据即时查询、核心、融资服务</p>
                        <p class="pb-15 pt-4">
                            <span class="pr-10">真 :</span><span class="c-66">一键核验票据真伪</span>
                            <span class="pr-10 pl-20">多 :</span><span class="c-66">大量贴现金融机构可选</span>
                        </p>
                        <p>
                            <span class="pr-10">快 :</span><span class="c-66">商业汇票快速贴现</span>
                            <span class="pr-10 pl-20">优 :</span><span class="c-66">2A企业可做票据池ABS</span>
                        </p>
                    </div>
                </div>
            </li>
            <li class="mb-5 bg3">
                <div class="graphic-item h100">
                    <div class="left pr">
                        <div class="pa-center w100">
                            <img src="../images/adv3.png" alt="">
                            <h4 class="fs16 mt-15">供应商应收账款</h4>
                        </div>

                    </div>
                    <div class="right pr">
                        <p class="pt-25 pb-10">应收账款和融资需求尽调，匹配合适的融资方案和资金方</p>
                        <p class="c-66 lh-22">
                            瑞通供应链金融向中小企业提供应收账款融资服务，平台与核心企业深度合作，帮助中小企业以最低成本、最快速度进行应收账款融资，使企业得到所需资金，加强资金的周转，帮助中小企业稳定供应链关系。
                        </p>
                    </div>
                </div>
            </li>
        </ul>
        <!-- 平台优势 -->
        <h4 class="fs16 mb-20">平台优势</h4>
        <p class="fs16 mb-30">为什么在瑞通能获得低成本的融资服务？<span class="c-66 pl-10">大机构、低风险、优质核企、低成本</span></p>
        <ul class="pla_adv">
            <li class="border-1px  p20" v-for="(item,index) in plaAdvs" :key="index">
                <div class="tac pb-15"><img :src="item.img" alt=""></div>
                <p>{{item.explain}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                        title: '核心企业',
                        explain: '缓解资金流压力，增加资产流动性'
                    },
                    {
                        title: '金融机构',
                        explain: '投资快速安全，更好的投资回报'
                    },
                    {
                        title: '供应商',
                        explain: '高效的资金周转，扩大生产规模'
                    },
                ],
                plaAdvs: [{
                        img: require('../images/pla_adv1.png'),
                        explain: '新型互联网融资平台，颠覆传统融资方式'
                    },
                    {
                        img: require('../images/pla_adv2.png'),
                        explain: '保证更灵活的数据公开机制，提供国家认证线上合同交易签章功能'
                    },
                    {
                        img: require('../images/pla_adv3.png'),
                        explain: '实现全网络化操作，建立多重安全保障'
                    },
                    {
                        img: require('../images/pla_adv4.png'),
                        explain: '资金快速投放，维护信息安全'
                    },
                    {
                        img: require('../images/pla_adv5.png'),
                        explain: '简化融资流程，拓展融资渠道'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .advantage {
        .advantage-list {
            display: flex;
            justify-content: space-between;

            li {
                width: 2.73rem;
                height: 1.1rem;

                .title {
                    padding: .21rem .3rem .21rem;

                    &:before {
                        content: '';
                        display: block;
                        position: absolute;
                        width: .03rem;
                        height: .2rem;
                        background-color: #FB5F13;
                        left: 0;
                    }
                }
            }
        }

        .graphic {
            li {
                height: 1.4rem;
                padding-left: .68rem;

                &.bg1 {
                    background-image: url('../images/adv_bg1.png');
                }

                &.bg2 {
                    background-image: url('../images/adv_bg2.png');
                }

                &.bg3 {
                    background-image: url('../images/adv_bg3.png');
                }

                &.bg1,
                &.bg2,
                &.bg3 {
                    background-size: 100% 100%;
                }

                .graphic-item {
                    display: flex;

                    .left {
                        width: 3.06rem;

                        .pa-center:before {
                            content: '';
                            position: absolute;
                            display: block;
                            width: .01rem;
                            height: 1rem;
                            right: 0;
                            top: 50%;
                            background-color: #f3f3f3;
                            transform: translateY(-50%)
                        }
                    }

                    .right {
                        padding: 0 .22rem;
                        width: 5.8rem;
                    }
                }
            }
        }

        .pla_adv {
            height: 2.2rem;
            display: flex;
            justify-content: space-between;
            padding-bottom: .1rem;
            padding-right: .1rem;
            li {
                width: 1.56rem;
                box-shadow: 0px 0px .24rem 0px rgba(0, 0, 0, 0.08);
            }
        }
    }
</style>