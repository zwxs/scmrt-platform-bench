<template>
    <div class="index-tab-bottom">
        
        <el-tabs type="border-card">
            <el-tab-pane>
                <div class="tab-title" slot="label">
                    <div class="tab-title1">
                        <span>应收账款融资</span>
                    </div>

                </div>
                <div class="img-box ">
                    <div class="img-box1">
                        <img src="../images/content_b_bg.png" alt="">
                    </div>
                    <!-- 应收账款融资 -->
                    <div class="info container">
                        <content-b1></content-b1>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="">
                <div class="tab-title " slot="label">

                    <div class="tab-title2">
                        <span>票据融资</span>
                    </div>
                </div>
                <div class="img-box">
                    <div class="img-box2">
                        <img src="../images/piaojurongzi_bg.png" alt="">
                    </div>
                    <div class="info container">
                        <content-b2></content-b2>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="">
                <div class="tab-title" slot="label">
                    <div class="tab-title3">
                        <span>融资租赁</span>
                    </div>
                </div>
                <div class="img-box">
                    <div class="img-box3">
                        <img src="../images/rongzizulin_bg.png" alt="">
                    </div>
                    <div class="info container">
                        <content-b3></content-b3>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="">
                <div class="tab-title" slot="label">
                    <div class="tab-title4">
                        <span>企业信用贷</span>
                    </div>

                </div>
                <div class="img-box ">
                    <div class="img-box4">
                        <img src="../images/qiyexinyongdai_bg.png" alt="">
                    </div>
                    <div class="info container">
                        <content-b4></content-b4>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import contentB1 from './contentB1.vue'
    import contentB2 from './contentB2.vue'
    import contentB3 from './contentB3.vue'
    import contentB4 from './contentB4.vue'
    export default {
        components: {
            contentB1,
            contentB2,
            contentB3,
            contentB4
        },
        data() {
            return {
                activeName: '',
                current: 1
            }
        },
        methods: {
            handleClick(data) {
                console.log(data);
            }
        }
    }
</script>
<style lang="scss">
    .index-tab-bottom {

        .el-tabs--border-card {
            border: 0;
            box-shadow: none;
            position: relative;
        }

        .el-tabs--border-card>.el-tabs__header {
            background-color: #fff;
            border: 0;
        }

        .el-tabs--border-card>.el-tabs__content {
            padding: 0;
        }


        .el-tabs__header {
            position: absolute;
            transform: translateY(90px);
            z-index: 999;
            height: 200px;
            width: 100%;
            background-color: rgba(0, 0, 0, 0) !important;
            top: -90px;

            .el-tabs__nav-wrap {
                height: 2rem;

                .el-tabs__nav-scroll {
                    height: 100%;
                    position: absolute;
                    // top:100px;
                    z-index: 99999;

                    .el-tabs__item {
                        position: absolute;
                        left: 0;
                        top: 0;
                        background-color: rgba(0, 0, 0, 0) !important;
                        width: 300px;

                        &:nth-child(1) {
                            left: 0;
                        }

                        &:nth-child(2) {
                            left: 3rem;
                        }

                        &:nth-child(3) {
                            left: 6rem;
                        }

                        &:nth-child(4) {
                            left: 9rem;
                        }
                    }
                }
            }
        }

        .el-tabs__nav-scroll {
            width: 100%;
            position: relative;

            .el-tabs__nav {
                width: 100%;
                position: relative;

                // top: .7rem;
                .el-tabs__item {
                    width: 100%;
                    position: relative;
                    height: 1rem;

                }
            }
        }



        .tab-title {
            width: 12rem;
            // background-color: red;
            position: absolute;
            height: .7rem;
            // top: 0.7rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9;

            span {
                // position: absolute;
                display: block;
                width: 3rem;
                height: .7rem;
                line-height: .7rem;
                text-align: center;
                // background-color: #FB5F13;
                color: #fff;
            }

            .tab-title1 {
                position: absolute;

                left: 0;
                top: 0;

            }

            .tab-title2 {
                position: absolute;

                left: 3rem;
                top: 0;
            }

            .tab-title3 {
                position: absolute;

                left: 6rem;
                top: 0;
            }

            .tab-title4 {
                position: absolute;

                right: 0;
                top: 0;
            }

        }


    }
</style>
<style lang="scss" scoped>
    // 应收账款、票据融资、融资租赁、企业信用贷 tab栏
    .bg1 {
        background: url(../images/content_b_bg.png);
    }

    .bg2 {
        background: url(../images/piaojurongzi_bg.png);
    }

    .bg3 {
        background: url(../images/rongzizulin_bg.png);
    }

    .bg4 {
        background: url(../images/qiyexinyongdai_bg.png);
    }

    // .img-box1 {
    //     background: url(../images/content_b_bg.png);
    //     background-repeat: no-repeat;
    // }

    // .img-box2 {
    //     background: url(../images/piaojurongzi_bg.png);
    //     background-repeat: no-repeat;
    // }

    // .img-box3 {
    //     background: url(../images/rongzizulin_bg.png);
    //     background-repeat: no-repeat;
    // }

    // .img-box4 {
    //     background: url(../images/qiyexinyongdai_bg.png);
    //     background-repeat: no-repeat;
    // }

    .index-tab-bottom {
        padding-bottom: .6rem;
    }

    .content_b {
        height: 8.13rem;
        background-size: 100%;

        .nav_box {
            border-bottom: .01rem rgba(255, 255, 255, 0.2) solid;
        }

        .nav {
            display: flex;
            height: .8rem;
            line-height: .8rem;

            div {
                flex: .25;
                text-align: center;
                cursor: pointer;

                &.active {
                    background: #FB5F13;
                }

                span {
                    display: inline-block;
                    width: 100%;
                    font-size: .2rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                }
            }
        }

        //应收账款融资
        .info {
            position: relative;
        }
    }
</style>