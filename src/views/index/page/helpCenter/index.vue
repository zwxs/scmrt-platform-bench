<template>
    <div class="helpCenter">
        <div class="bg-f8">
            <div class="max-container">
                <!-- 背景图 -->
                <div class="banner">
                    <div class="container pr h100">
                        <div class="pa">
                            <h1 class="fs48 mb-10">帮助中心</h1>
                            <div class="fs24 help-btn">
                                <span class="left">要有以客户满意为导向的价值观</span>
                                <div class="fs16 tac cp">
                                    <a class=""
                                        href="http://p.qiao.baidu.com/cps2/chatIndex?reqParam=%7B%22from%22%3A0%2C%22sid%22%3A%22-100%22%2C%22tid%22%3A%22-1%22%2C%22ttype%22%3A1%2C%22siteId%22%3A%2212208881%22%2C%22userId%22%3A%2225832725%22%2C%22pageId%22%3A0%7D"
                                        target="blank"><img class="mr-10" src="./images/earphone.png" alt=""><span
                                            class="c-ff">在线客服</span>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 头部面包屑 -->
        <div class="help-center-breadcrumb">
            <div class="container breadcrumb c-66">
                <img class="pr-10" src="./images/home.png" alt="">
                <span class="pr-10 new-home" @click="goto('/new')">帮助中心</span>
                <i class="el-icon-arrow-right pr-10" v-if="fatherNav"></i>
                <span class="" v-if="fatherNav">{{fatherNav}}</span>
                > &nbsp;
                <span class="c-FB5F13 fw-b">{{childNav}}</span>
            </div>
        </div>
        <!-- 帮助中心tab切换 -->
        <div class="container pt-40">
            <el-row class="tabs mb-40">
                <el-col :span="6">
                    <el-menu ref="menu" :default-active="active" class="el-menu-vertical-demo" @open="handleOpen"
                        @select="handleSelect" @close="handleClose" active-text-color="#FB5F13" :unique-opened='true'>
                        <template v-for="(item,index) in helpCategorys">
                            <el-submenu :index="item.name" :key="index" v-if="item.nodes.length>0">

                                <template slot="title">
                                    <span>{{item.name}}</span>
                                </template>
                                <el-menu-item v-for="(v,i) in item.nodes" :key="i" :index="v.id.toString()+'-'+v.name">
                                    {{v.name}}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="item.id.toString()+'-'+item.name" :key="index">
                                <span slot="title">{{item.name}}</span>
                            </el-menu-item>
                        </template>
                    </el-menu>
                </el-col>
                <el-col :span="18">
                    <div class="loginProcess  pl-20">
                        <h3 class="title pt-4 mb-30 fs24 fw-500">{{childNav}}</h3>
                        <ul class="">
                            <li class=" mb-10" :class="{on:item.isShow}" v-for="(item,index) in list" :key="index">
                                <div class="question cp" :class="{'current-bg':item.isShow}" @click="isShow(index)">
                                    <img class="question-img mr-20" src="./images/q.png" alt="" v-if="item.isShow">
                                    <img class="question-img mr-20" src="./images/full_q.png" alt="" v-else>
                                    <span class="question-text c-ff ">{{item.title}}</span>
                                    <i class="btn  fs18" :class="[item.isShow?'el-icon-close':'el-icon-plus']"></i>
                                </div>
                                <div class="answer">
                                    <img class="mr-20" src="./images/full_a.png" alt="">

                                    <div class="answer-text mb-10" v-html="item.content">
                                        {{item.content}}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
        <fixed-right />
    </div>
</template>

<script>
    import {
        loginProcess,
        means1,
        means2,
        means3,
        enterprise,
        mechanism,
        bull1,
        bull2,
        bull3,
    } from './component'
    import fixedRight from '@/components/fixedRight.vue'
    export default {
        data() {
            return {
                childNav: '注册登录',
                fatherNav: '',
                helpCategorys: [],
                list: [],
                activeNames: ['1'],
                active: '2-注册登录'
            };
        },
        components: {
            loginProcess,
            means1,
            means2,
            means3,
            enterprise,
            mechanism,
            bull1,
            bull2,
            bull3,
            fixedRight
        },
        created() {
            this.getHelpClassfiy()
            if (this.$route.query && this.$route.query.active == 35) {
                console.log(this.$route.query.active);
                this.active = "35-常见问题";
            }
        },
        methods: {
            isShow(index) {
                console.log(index);
                this.list.some((v, i) => {
                    if (i === index) {
                        v.isShow = !v.isShow
                    } else {
                        v.isShow = false;
                    }
                })
            },
            // 获取帮助分类
            async getHelpClassfiy() {
                let rusult = await this.$api.getHelpClassfiy()
                if (rusult.code === 200) {
                    this.helpCategorys = rusult.data
                    this.getHelpContent(rusult.data[0].id)
                }

                if (this.$route.query && this.$route.query.active == 35) {
                    this.handleOpen("35-常见问题", ["票据帮助", "35-常见问题"])
                    this.handleSelect("35-常见问题", ["票据帮助", "35-常见问题"])
                }

            },
            // 获取某一分类内容
            async getHelpContent(id) {
                let rusult = await this.$api.getHelpContent({
                    classfiyId: id
                })
                if (rusult.code === 200) {
                    console.log(rusult);
                    rusult.data.map(v => v.isShow = false)
                    this.list = rusult.data
                }
            },

            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                let KeyArry = key.split('-')
                this.getHelpContent(KeyArry[0])
                this.childNav = KeyArry[1];
                if (keyPath[0] == '账户管理') {
                    this.fatherNav = '账号管理'
                } else if (keyPath[0] == '票据帮助') {
                    this.fatherNav = '票据帮助'
                } else if (keyPath[0] != '账户管理' && keyPath[0] != '票据帮助') {
                    this.fatherNav = ''
                    this.$refs.menu.close('票据帮助')
                    this.$refs.menu.close('账户管理')
                }
            }
        }
    }
</script>

<style lang="scss">
    .helpCenter {
        .banner {
            background-image: url('./images/banner.png');
            background-size: 19.2rem 3rem;
            height: 3rem;

            .pa {
                top: 50%;
                transform: translateY(-50%);

                .help-btn {
                    display: flex;
                    align-items: center;

                    .left {
                        margin-right: .7rem;
                    }

                    div {
                        width: 1.44rem;
                        height: .46rem;
                        border-radius: .23rem;
                        background: linear-gradient(315deg, rgba(255, 119, 43, 1) 0%, rgba(251, 95, 19, 1) 100%);
                        transition: all 0.4s;
                        &:hover{
                            background: linear-gradient(315deg, rgba(251, 95, 19, 1)  0%,rgba(255, 119, 43, 1)  100%);
                        }
                        line-height: .46rem;
                    }
                }
            }
        }

        .help-center-breadcrumb {
            background-color: #F8F8F8;

            .breadcrumb {
                height: .6rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
        }

        .container {
            .tabs {
                .el-menu {
                    border-color: #f3f3f3;
                    width: 2.60rem;

                    // transform: translateX(.2rem);
                    box-sizing: border-box;
                    border-right: 1px solid #f3f3f3;
                }

                .el-menu-item,
                .el-submenu__title {
                    font-size: .18rem;
                    width: 2.60rem;
                    height: .8rem;
                    line-height: .8rem;
                    position: relative;
                    box-sizing: border-box;
                    white-space: nowrap;
                    list-style: none;
                    padding-left: .4rem !important;
                    border-top: 1px solid #F3F3F3;
                    border-right: 1px solid #f3f3f3;
                }

                .el-menu-item:last-of-type {
                    border-bottom: 1px solid #F3F3F3;
                }

                .el-menu-item:hover {
                    background-color: #fff !important;
                    color: $mc;
                }

                .el-submenu__title:hover {
                    background-color: #fff !important;
                    color: $mc;
                }

                .el-menu-item.is-active {
                    background-color: #fff;
                }

                .el-submenu {
                    .el-menu {
                        background-color: #faf7f6;

                        .el-menu-item {
                            padding-left: .6rem !important;
                            border: none;
                        }


                        .el-menu-item {
                            position: relative;

                            &::before {
                                content: '';
                                position: absolute;
                                width: .06rem;
                                height: .06rem;
                                border-radius: .03rem;
                                background-color: #DDC4B9;
                                left: .4rem;
                                top: .37rem;
                            }

                            &:hover {
                                background-color: #f6eeea !important;

                                &::before {
                                    background-color: #FB5F13;
                                }
                            }

                            &.is-active {
                                background-color: #F6EEEA !important;
                                color: $mc;

                                &::before {
                                    background-color: #FB5F13;
                                }
                            }
                        }


                    }
                }
            }

            .loginProcess {
                ul {
                    li {
                        &.on {


                            .question {

                                .btn,
                                .question-text {
                                    color: #fff;
                                }
                            }

                            .answer {
                                padding-top: .2rem;
                                padding-bottom: .2rem;

                                max-height: 5.6rem;
                                border: 1px solid $mc;
                            }
                        }

                        .question {
                            height: .6rem;
                            display: flex;
                            justify-content: space-between;
                            padding: 0 .2rem;
                            align-items: center;
                            box-shadow: 0 0 .1rem #eeeeee;

                            .question-img {
                                width: .18rem;
                                height: .18rem;
                            }

                            .btn {
                                width: .25rem;
                                color: #FB5F13;
                            }

                            .question-text {
                                flex: 1;
                                color: #333333;
                                font-size: .16rem;
                            }

                        }

                        .answer {
                            max-height: 0;
                            transition: all .8s;
                            overflow: hidden;
                            background-color: #fff;
                            display: flex;
                            padding: 0 .2rem;
                            // padding-bottom: .20rem;
                            border: 1px solid #fff;

                            img {
                                width: .18rem;
                                height: .18rem;
                                margin-top: .05rem;
                            }

                            .answer-text {
                                width: 7.54rem;
                            }

                            p {
                                line-height: .26rem;
                            }
                        }

                        .current-bg {
                            background-color: #FB5F13;
                        }
                    }
                }
            }
        }
    }
</style>