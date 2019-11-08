<template>
    <!-- 应收账款融资 -->
    <div class="receivable tab">
        <tab-top :data="info" :index="0">
            <div class="btn" slot="btn">
                <span>立即发布需求</span>
            </div>
        </tab-top>
        <div class="bottom">
            <div class="top_box_slogan">
                <div class="slogan ">
                    <span>技术驱动创新 · 让金融更简单</span>
                </div>
                <div class="method ">
                    <span>解决核心企业应付账款问题，帮助上下游供应商加速回款，加快企业资金流动</span>
                </div>
            </div>
            <div class="bottom_box_type ">
                <!-- 资金方案服务 -->
                <div class="flex_item cp" @mouseover="ishover1=true" @mouseleave="ishover1=false">
                    <div class="img_bg" :class="{'height-min':ishover1}">
                        <img src="../images/plan_icon.png" alt="">
                    </div>
                    <div class="content" :class="{'height-max':ishover1}">
                        <div class="title_plan">
                            <span>资金方案服务</span>
                        </div>
                        <div class="infos_plan">
                            <span>依据核心企业的需求、设计产业链接融资方案；根据大数据分析，为供应链匹配的资金合作渠道；持续优化应收账款融资流程，提高效率，降低融资成本。</span>
                        </div>
                    </div>
                </div>
                <!-- 数据分析 -->
                <div class="flex_item cp" @mouseover="ishover2=true" @mouseleave="ishover2=false">
                    <div class="img_bg" :class="{'height-min':ishover2}">
                        <img src="../images/instrction_icon.png" alt="">
                    </div>
                    <div class="content" :class="{'height-max':ishover2}">
                        <div class="title_plan">
                            <span>数据分析</span>
                        </div>
                        <div class="infos_plan">
                            <span>接入多方征信数据源(内外部)，创建反欺诈与评级授信模型，根据真实业务场景优化风控体系。</span>
                        </div>
                    </div>

                </div>
                <!-- 链属企业 -->
                <div class="flex_item cp" @mouseover="ishover3=true" @mouseleave="ishover3=false">
                    <div class="img_bg" :class="{'height-min':ishover3}">
                        <img src="../images/company_all-icon.png" alt="">
                    </div>
                    <div class="content" :class="{'height-max':ishover3}">
                        <div class="title_plan">
                            <span>链属企业</span>
                        </div>
                        <div class="infos_plan">
                            <span>整合供应链上的核心企业、上下游企业、増信企业、资金机构等多方资源。</span>
                        </div>
                    </div>
                </div>
                <!-- 线上平台 -->
                <div class="flex_item onlineProcess cp" @mouseover="ishover4=true" @mouseleave="ishover4=false">
                    <div class="img_bg" :class="{'height-min':ishover4}">
                        <img src="../images/online_icon.png" alt="">
                    </div>
                    <div class="content" :class="{'height-max':ishover4}">
                        <div class="title_plan">
                            <span>线上平台</span>
                        </div>
                        <div class="infos_plan">
                            <span>平台线上提供全程电子化(包括认证、签约 、融资申请、融资发放
                                、还款核销、资金监管等)，帮助企业省财务费用，拓宽融资渠道，保障企业的资金正常运转。</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn_into cp"  @click="$store.dispatch('look/getShowLook', true)">
            <span>我要融资</span>
        </div>
    </div>
</template>

<script>
    import tabTop from './tabTop'
    export default {
        data() {
            return {
                info: {
                    title: '应收账款融资',
                    iconImg: require('../images/money_icon.png'),
                    contentText: '上游供应商转让其与核心企业产生的应收账款，核心企业给予应收账款转让确权，应收账款转让确权保理企业实际控制人及配偶提供连带保证。<br/><br/> 供应商将与核心企业之间的基于真实贸易产生的应收账款在瑞通供应链金融平台线上进行转让给银行。结合大数据风控手段，整合信息流、资金流、物流等信息，对产业链上游企业提供保理服务。',
                    hintImg: require('../images/apply_process_bg.png'),

                },
                ishover1: false,
                ishover2: false,
                ishover3: false,
                ishover4: false,
            }
        },
        components: {
            tabTop
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/indexTab.scss';
</style>

<style lang="scss" scoped>
    .flex_item {

        img,
        .infos_plan,
        .img_bg {
            transition: all 0.4s;
        }
    }

    .height-min {

        padding-bottom: 0 !important;

        img {
            height: 0 !important;
        }

        // height: 0;
        // overflow: hidden;
    }

    .height-max {
        .title_plan {
            span {
                color: $mc !important;
            }
        }

        .infos_plan {
            height: 2rem !important;
        }
    }
</style>