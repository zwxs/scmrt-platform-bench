<template>

    <!-- 首页 -->
    <div class="first_page">
        <!--  首页轮播图 -->
        <!-- <swerp :slide-data="slideData" /> -->
        <div class="banner">
            <div class="max-container">
                <el-carousel height="560px" arrow="always">

                    <el-carousel-item v-for="(item,index) in slideData" :key="index">
                        <div class="img-box" :style="{'background-image':'url('+item.image+')'}">
                            <!-- <img src="../images/banner.png" alt=""> -->
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>

        </div>
        
        <!-- 首页内容 -->
        <!-- <div class="content"> -->
        <!-- 首页头部内容（资金提供方、核心企业、融资成交额） -->
        <div class="container">
            <contentT />
        </div>


        <div class="gongying">
            <div class="container">
                <!-- 首页中间内容 -->
                <contentC />
            </div>
        </div>

        <!-- 首页底部tab内容 -->
        <contentB />

        <div class="news">
            <div class="container">
                <!-- 合作机构、公司新闻 -->
                <cooperate />
            </div>
        </div>
        <!-- </div> -->
        <!-- 右侧固定导航 -->
        <fixed-right />
    </div>

</template>

<script>
    import {
        contentT,
        contentC,
        contentB,

    } from './components'
    import fixedRight from '@/components/fixedRight'
    import cooperate from '@/components/cooperate'
    export default {
        components: {
            contentT,
            contentC,
            contentB,
            cooperate,
            fixedRight
        },
        data() {
            return {
                slideData: []
            };
        },
        created() {
            console.log(contentB);
            this.getSlide();
        },
        methods: {
            async getSlide() {
                let {
                    data
                } = await this.$api.getSlide({
                    model: 1,
                    location: 1
                });
                this.slideData.push(...data);
            }

        }
    }
</script>
<style lang="scss">
    .banner {
        .el-carousel {

            .el-carousel__arrow {
                height: .64rem;

                .el-carousel__container {}

                &.el-carousel__arrow--left {
                    background-image: url('./images/slide-arrow-left-2.png');
                    background-color: transparent;
                    left: 0.9rem;

                    &:hover {
                        background-image: url('./images/slide-arrow-left-1.png');

                    }

                    i {
                        display: none;
                    }
                }

                &.el-carousel__arrow--right {
                    background-image: url('./images/slide-arrow-right-2.png');
                    background-color: transparent;
                    right: 0.9rem;


                    &:hover {
                        background-image: url('./images/slide-arrow-right-1.png');
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
</style>
<style lang="scss" scoped>
    .banner {
        min-width: 12rem;
        background-color: #f3f4f8;
    }

    //轮播图
    .banner .img-box {
        width: 100%;
        min-width: 12rem;
        height: 5.6rem;
        position: relative;
        // background-size: 100% ;
        background-size: cover;
        // background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

    .gongying {
        height: 6.85rem;
        background: url(./images/content_c_bg.png);
        background-size: 1920px 685px;
    }

    .news {
        background-color: #F7F8F9;
    }
</style>