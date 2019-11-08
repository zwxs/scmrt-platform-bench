<template>
    <div class="aboutUs">
        <div class="bg-f8">
            <div class="max-container">
                <div class="banner">
                    <div class="container pr h100">
                        <div class="pa">
                            <h1 class="fs48 mb-20">关于我们</h1>
                            <p class="fs24">提供供应链综合型金融服务</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 头部面包屑 -->
        <div class="about-us-breadcrumb">
            <div class="container breadcrumb c-66">
                <img class="pr-10" src="./images/home.png" alt="">
                <span class="pr-10 new-home" @click="goto('/new')">关于我们</span>
                > &nbsp;
                <span class="c-FB5F13 fw-b">{{titleArr[activeName]}}</span>
            </div>
        </div>
        <!-- 关于我们主体内容 -->
        <div class="container us-tab ">
            <el-tabs tab-position="left" v-model="activeName">
                <el-tab-pane label="瑞通简介">
                    <!-- <div slot="label" class="tab-lable">供应链金融</div> -->
                    <div class="label-content">
                        <!-- 瑞通简介 -->
                        <introduce></introduce>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="文化背景">
                    <!-- <div slot="label" class="tab-lable">供应链金融</div> -->
                    <div class="label-content">
                        <!-- 文化背景 -->
                        <cultural></cultural>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="服务优势">
                    <!-- <div slot="label" class="tab-lable">供应链金融</div> -->
                    <div class="label-content">
                        <!-- 服务优势 -->
                        <advantage></advantage>

                    </div>
                </el-tab-pane>
                <el-tab-pane label="联系我们">
                    <!-- <div slot="label" class="tab-lable">供应链金融</div> -->
                    <div class="label-content">
                        <!-- 联系我们 -->
                        <contactUs></contactUs>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="瑞通公告">
                    <!-- <div slot="label" class="tab-lable">供应链金融</div> -->
                    <div class="label-content">
                        <!-- 瑞通公告 -->
                        <notice></notice>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="隐私声明">
                    <!-- <div slot="label" class="tab-lable">供应链金融</div> -->
                    <div class="label-content">
                        <!-- 隐私声明 -->
                        <secret></secret>

                    </div>
                </el-tab-pane>

            </el-tabs>
        </div>
        <fixed-right />
    </div>
</template>

<script>
    import {
        introduce,
        cultural,
        advantage,
        contactUs,
        notice,
        secret
    } from './components'
    import fixedRight from '../index/components/fixedRight.vue'
    export default {
        components: {
            introduce,
            cultural,
            advantage,
            contactUs,
            notice,
            secret,
            fixedRight
        },
        data() {
            return {
                activeName: "0",
                titleArr: ['瑞通简介', '文化背景', '服务优势', '联系我们', '瑞通公告', '隐私声明']
            }
        },
        created() {

            if (this.$route.query && this.$route.query.active != undefined) {
                console.log(this.$route.query.active);
                this.activeName = this.$route.query.active + "";
                console.log(this.activeName);
            }
        }
    }
</script>

<style lang='scss'>
    .aboutUs {
        .banner {
            background-image: url('./images/banner.png');
            height: 3rem;

            .pa {
                top: 50%;
                transform: translateY(-50%)
            }
        }

        .about-us-breadcrumb {
            background-color: #F8F8F8;

            .breadcrumb {
                height: .6rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;

            }
        }

        .us-tab {
            padding: .4rem 0;

            .el-tabs__active-bar.is-left {
                display: none;
            }

            .el-tabs__nav-scroll {
                border-bottom: 1px solid #f3f3f3;
            }

            .el-tabs__item {
                width: 2.6rem;
                padding-left: .4rem;
                height: 0.8rem;
                line-height: .8rem;
                font-size: .18rem;
                text-align: left;
                box-sizing: border-box;
            }

            .el-tabs__item.is-left {
                border-right: 1px solid #F0F0F0;
                border-top: 1px solid #F0F0F0;

                &:hover,
                &.is-active {
                    color: #FB5F13;
                }
            }

            .el-tabs__nav-wrap::after {
                display: none;
            }

            .label-content {
                padding-left: .2rem;
            }

            .el-pager li.active {
                color: #FB5F13;
                border: 1px solid #FB5F13
            }
        }

        .introduce {
            p {
                line-height: .28rem;
            }
        }
    }
</style>