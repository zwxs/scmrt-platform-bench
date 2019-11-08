<template>
    <!-- 首页banner轮播图 -->
    <div class="banner">

            <div class="max-container">
                <el-carousel height="440px" arrow="always">

                    <el-carousel-item v-for="(item,index) in slideData1" :key="index">
                        <div class="img-box" :style="{'background-image':'url('+item.image+')'}">
                            <!-- <img src="../images/banner.png" alt=""> -->
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                slideData1: []
            };
        },
        mounted() {            
            this.getSlide();
        },
        methods: {
            async getSlide() {
                let {
                    data
                } = await this.$api.getSlide({
                    model: 2,
                    location: 1
                });
                console.log(data);
                this.slideData1.push(...data);
                console.log(this.slideData1);
            }

        }
    }
</script>
<style lang="scss">
    .banner {
        background-color: #f3f4f8;

        .el-carousel {

            .el-carousel__arrow {
                height: .64rem;

                .el-carousel__container {}

                &.el-carousel__arrow--left {
                    background-image: url('./img/slide-arrow-left-2.png');
                    background-color: transparent;
                    left: 0.9rem;

                    &:hover {
                        background-image: url('./img/slide-arrow-left-1.png');

                    }

                    i {
                        display: none;
                    }
                }

                &.el-carousel__arrow--right {
                    background-image: url('./img/slide-arrow-right-2.png');
                    background-color: transparent;
                    right: 0.9rem;


                    &:hover {
                        background-image: url('./img/slide-arrow-right-1.png');
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
    }

    //轮播图
    .banner .img-box {
        width: 100%;
        min-width: 12rem;
        height: 4.4rem;
        position: relative;
        background-image: url("./img/banner.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    // .banner .img-box img {
    //     position: absolute;
    //     // min-width: 19.2rem;
    //     width: 100%;
    //     height: 5.6rem;
    //     left: 50%;
    //     transform: translateX(-50%);
    // }
</style>