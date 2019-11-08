<template>
    <div>
        <!-- 顶部消息提示语 -->
        <div class="top-box">
            <div class="container tips-top">

                <img src="../assets/img/tips_top.png" alt="">

                <div class="scroll-top">
                    <vue-seamless-scroll :data="xibao" class="seamless-warp" :class-option="optionSingleHeightTime">
                        <ul>
                            <li v-for="(item,index) in xibao" :key="index" class="cp" @click="goDetail(item.id)">
                                <span>{{item.title}}</span>
                            </li>
                        </ul>
                    </vue-seamless-scroll>
                </div>
            </div>
        </div>
        <!-- 导航栏 -->
        <div class="navbar container">
            <div class="logo pointer" @click="goto('/index',1)">
                <img src="../assets/img/logo_top.png" alt="">
            </div>
            <ul>
                <li class="pointer" @click="goto('/index')" :class="{active:isCurrentPath('/index')}"><span>首页</span></li>
                <li class="pointer" @click="goto('/bill')" :class="{active:isCurrentPath('/bill')}"><span>票据融资</span></li>
                <li class="pointer" @click="goto('/new')" :class="{active:isCurrentPath('/new')}"><span>新闻资讯</span></li>
                <li class="pointer" @click="goto('/help')" :class="{active:isCurrentPath('/help')}"><span>帮助中心</span></li>
                <li class="pointer" @click="goto('/us')" :class="{active:isCurrentPath('/us')}"><span>关于我们</span></li>
            </ul>
            <div class="login-box">
                <img src="../assets/img/header.png" alt="">
                <!-- <span class="login pointer" @click="goto('/login')">登录</span> -->
                <span class="login pointer" @click="$store.dispatch('look/getShowLook', true)">登录</span>
                <span class="line"></span>
                <span class="signIn pointer" @click="$store.dispatch('look/getShowLook', true)">注册</span>
                <!-- <span class="signIn pointer" @click="goto('/register')">注册</span> -->
            </div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import scroll from 'vue-seamless-scroll'
    Vue.use(scroll)

    export default {
        data() {
            return {
                xibao: [],
                showDialog: false
            };
        },
        created() {
            this.getTopNotice();          
        },
        computed: {
         
            optionSingleHeightTime() {
                return {
                    singleHeight: 40,
                    waitTime: 2000,
                    step: 0.4,
                    hoverStop: false
                }
            }
        },
        methods: {
              goDetail(id) {
                console.log(id);
                this.$router.push({
                    path: '/noticdetail',
                    query: {
                        "id": id,
                    }
                });

            },
            async getTopNotice() {
                let {
                    data
                } = await this.$api.getPlatformNotice();

                this.xibao = data.records
            },
            goto(path) {
                this.$router.push(path)
            },
            isCurrentPath(path) {
                return this.$route.path === path
            }

        }
    }
</script>
<style lang="scss" scoped>
    // 顶部消息提示
    .top-box {
        border-bottom: .01rem #F3F3F3 solid;

        .tips-top {
            height: .4rem;
            line-height: .4rem;
            display: flex;
            align-items: center;

            img {
                width: .16rem;
                height: .16rem;
                vertical-align: middle;
            }

            .scroll-top {
                min-width: 5rem;
                height: .4rem;
                overflow: hidden;

                ul {
                    li {
                        height: .4rem;
                        line-height: .4rem;
                        overflow: hidden;
                    }
                }
            }

            span {
                padding-left: .1rem;
                vertical-align: middle;
                color: rgba(51, 51, 51, 1);
            }
        }

    }

    // 导航栏
    .navbar {
        height: 1rem;
        line-height: 1rem;
        display: flex;

        .logo {
            // margin-right: 1.46rem;

            img {
                width: 2.71rem;
                height: .55rem;
                vertical-align: middle;
            }
        }

        ul {
            padding-left: 1.36rem;
            display: flex;

            // width: 5.26rem;
            li {
                width: 1.02rem;
                text-align: center;

                span {
                    display: inline-block;
                    height: 100%;
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: .0rem;
                        height: .02rem;
                        width: .32rem;
                        left: 50%;
                        transform: translateX(-50%);
                        background-color: #FB5F13;
                        display: none;
                    }
                }
            }

            li:hover {
                color: #FB5F13;

                span {
                    // border-bottom: .2rem #FB5F13 solid;

                    &::after {
                        display: block;
                    }

                    font-weight: 600;
                }
            }

            .active {
                color: #FB5F13;

                span {
                    font-weight: 600;
                    // border-bottom: .02rem #FB5F13 solid;

                    &::after {
                        display: block;
                    }
                }
            }
        }

        .login-box {
            margin-left: .96rem;

            img {
                width: .32rem;
                height: .32rem;
            }

            .login {
                padding: 0 .1rem 0 .12rem;
                vertical-align: middle;

                &:hover {
                    color: #FB5F13;
                    // border-bottom: .02rem #FB5F13 solid;
                    font-weight: 600;
                }
            }

            .line {
                display: inline-block;
                width: .02rem;
                height: .14rem;
                background: #E5E5E5;
                vertical-align: middle;
            }

            .signIn {
                padding-left: .1rem;
                vertical-align: middle;

                &:hover {
                    color: #FB5F13;
                    font-weight: 600;
                }
            }
        }
    }
</style>