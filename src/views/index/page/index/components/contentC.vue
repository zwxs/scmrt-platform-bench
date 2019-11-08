<template>
    <!-- 首页中间内容 -->
    <div class="content_c">
        <div class="info container">
            <div class="info_l flex_box">
                <div class="img_box">
                    <img src="../images/supplier_img.png" alt="">
                </div>
                <div class="title">
                    <span>我是供应商</span>
                </div>
                <div class="line">

                </div>
                <div class="text">
                    <span>享受货款现结，延长账期，扩大销售规模，无需再面对资金难题</span>
                </div>
                <div class="bubble_tips">
                    <img src="../images/bubble_tips.png" alt="">
                </div>
                <div class="btn cp"  @click="$store.dispatch('look/getShowLook', true)">
                    <span>申请融资</span>
                </div>
            </div>
            <div class="info_c flex_box">
                <div class="img_box">
                    <img src="../images/company_img.png" alt="">
                </div>
                <div class="title">
                    <span>我是核心企业</span>
                </div>
                <div class="line">

                </div>
                <div class="text">
                    <span>穿透多层供应链中小企业，助力企业开展生产，对上游企业加强质量管控、风险防范等，优化供应链管理。</span>
                </div>
                <div class="btn cp"  @click="$store.dispatch('look/getShowLook', true)">
                    <span>我要现金</span>
                </div>
            </div>
            <div class="info_r flex_box">
                <div class="img_box">
                    <img src="../images/organization_img.png" alt="">
                </div>
                <div class="title">
                    <span>我是金融机构</span>
                </div>
                <div class="line">

                </div>
                <div class="text">
                    <span>为中小微企业提供一站式的线上审批、流动资金贷款服务</span>
                </div>
                <div class="bubble_tips">
                    <img src="../images/bubble_tips.png" alt="">
                </div>
                <div class="btn cp"  @click="$store.dispatch('look/getShowLook', true)">
                    <span>申请融资</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    // 在线签约和申请融资
    .content_c {
      
        .info {
            display: flex;
            justify-content: center;
            text-align: center;
            padding: .94rem 0 .7rem 0;

            .flex_box {
                width: 3.8rem;
                height: 5.2rem;
                justify-content: center;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0 0 .4rem 0 rgba(0, 0, 0, 0.08);
                margin-right: .3rem;
                transition: all 0.5s;

                &:hover {
                    transform: translateY(-20px);

                    .btn {}
                }

                .img_box {
                    padding-top: .38rem;
                }

                .title {
                    padding-top: .27rem;
                    font-size: .28rem;
                    font-weight: 700;
                    color: rgba(51, 51, 51, 1);
                }

                .line {
                    width: .6rem;
                    height: .03rem;
                    margin: .2rem 1.6rem .27rem 1.6rem;
                    background: rgba(251, 95, 19, 1);
                }

                .text {
                    margin: 0 .76rem;
                    font-size: .16rem;
                    color: rgba(51, 51, 51, 1);
                    line-height: .28rem;
                }

                .bubble_tips {
                    text-align: left;
                    padding: .28rem 0 0 .46rem;
                }

                .btn {
                    width: 1.44rem;
                    height: .46rem;
                    line-height: .46rem;
                    margin: .3rem 1.18rem 0 1.18rem;
                    border-radius: .23rem;
                    // opacity: 0.4;
                    border: .01rem solid rgba(251, 95, 19, 0.4);
                    color: #FB5F13;
                    transition: all .4s;
                    transition-property: all;
                    transition-duration: 0.4s;
                    transition-timing-function: ease;
                    transition-delay: 0s;

                    &:hover {
                        background: linear-gradient(315deg, rgba(255, 119, 43, 1) 0%, rgba(251, 95, 19, 1) 100%);
                        color: #fff;
                    }
                }

            }

            .info_l {
                position: relative;

                .img_box img {
                    width: 1.31rem;
                    height: 1.5rem;
                }

                .bubble_tips img {
                    position: absolute;
                    bottom: .8rem;
                    left: .46rem;
                    text-align: left;
                }
            }

            .info_c {
                .img_box {
                    padding-top: .51rem;

                    img {
                        width: 1.38rem;
                        height: 1.37rem;
                    }
                }

                .title {
                    padding-top: .27rem;
                    font-size: .28rem;
                    font-weight: 700;
                    color: rgba(51, 51, 51, 1);
                }

                .text {
                    margin: 0 .5rem;

                }

                .btn {
                    margin: .33rem 1.18rem 0 1.18rem;
                }
            }

            .info_r {
                position: relative;
                margin-right: 0;

                .img_box {
                    padding-top: .46rem;

                    img {
                        width: 1.68rem;
                        height: 1.35rem;
                    }
                }

                .text {
                    margin: 0 .81rem;
                }

                .title {
                    padding-top: .34rem;
                    font-size: .28rem;
                    font-weight: 700;
                    color: rgba(51, 51, 51, 1);
                }

                .bubble_tips img {
                    position: absolute;
                    bottom: .8rem;
                    left: .46rem;
                    text-align: left;
                }

            }

        }
    }
</style>