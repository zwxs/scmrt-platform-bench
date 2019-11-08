<template>
    <!-- 底部 footer -->
    <div class="footer">
        <div class="content ">
            <div class="content_t container">
                <div class="info_l">
                    <div class="footer_logo">
                        <img src="../assets/img/logo_bottom.png" alt="">
                    </div>
                    <div class="phone">
                        <img src="../assets/img/phone_icon.png" alt="">
                        <span class="phone_text">400-8191-555</span>
                    </div>
                    <div class="time">
                        <span>工作日 9:00-18:00</span>
                    </div>
                </div>
                <div class="info_r">
                    <ul>
                        <li class="title_text">
                            关于瑞通
                        </li>
                        <template v-for="(item,index) in navLink">
                            <li :key="index" v-if="item.type==1" @click="goLink(item.reqUrl,5)">
                                {{item.name}}
                            </li>
                        </template>


                    </ul>
                    <ul>
                        <li class="title_text">
                            产品解决方案
                        </li>
                        <template v-for="(item,index) in navLink">
                            <li :key="index" v-if="item.type==2" @click="goLink(item.reqUrl)">
                                {{item.name}}
                            </li>
                        </template>
                    </ul>
                    <ul>
                        <li class="title_text">
                            帮助中心
                        </li>
                        <template v-for="(item,index) in navLink">
                            <li :key="index" v-if="item.type==3" @click="goLink(item.reqUrl,4,item.name)">
                                {{item.name}}
                            </li>
                        </template>
                    </ul>
                    <ul class="last_ul">
                        <!-- <li :class="{title_text:index==0,active:activeIndex==index}" v-for="(item,index) in navLink"
                            :key="index">{{item.name}}

                        </li> -->
                        <li class="title_text">
                            关注我们
                        </li>
                        <template v-for="(item,index) in navLink">
                            <li :key="index" v-if="item.type==4" :class="{active:activeIndex==item.sort}"
                                @mouseover="changeCode(item.sort)">
                                {{item.name}}
                                <div class="wx_code">
                                    <img :src="item.logoUrl" alt="">
                                </div>
                            </li>
                        </template>

                    </ul>

                </div>
            </div>
            <div class="content_b">
                <div class="business_info container">
                    <span>Copyright © 2015-2019 瑞通（深圳）网络科技有限公司 rtscf.com 版权所有 | 粤ICP备15089597号 |
                        增值电信业务经营许可证：粤B2-20190402</span>
                    <p class="lh-22">公司地址：广东省深圳市福田区水松大厦9楼</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: 1,
                navLink: []
            };
        },
        created() {

        },
        mounted() {
            this.getBottomNav();
        },
        methods: {
            async getBottomNav() {
                let {
                    data
                } = await this.$api.getBottomNav();
                // console.log(data);
                this.navLink.push(...data);
            },
            changeCode(index) {
                this.activeIndex = index;
            },
            goLink(url, current, name) {
                if (url) {
                    this.$router.push(url);
                }else{
                    this.$store.dispatch('look/getShowLook', true);
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    // footer--底部
    .footer {
        height: 3.2rem;
        border-top: .1rem #FB5F13 solid;

        .content {
            padding: .0rem 0 0;
        }

        .content .content_t {
            display: flex;
            height: 2.55rem;

            //左侧logo、电话和工作时间
            .info_l {
                width: 5.92rem;

                .footer_logo {
                    padding-top: .45rem;

                    img {
                        width: 1.6rem;
                        height: .55rem;
                    }
                }

                .phone {
                    padding-top: .44rem;

                    img {
                        width: .26rem;
                        height: .26rem;
                    }

                    .phone_text {
                        padding-left: .12rem;
                        font-size: .3rem;
                        font-weight: bold;
                        color: rgba(86, 86, 86, 1);
                        vertical-align: middle;
                    }
                }

                .time {
                    span {
                        padding-left: .38rem;
                        font-size: .14rem;
                        color: rgba(102, 102, 102, 1);
                        line-height: .32rem;
                    }
                }
            }

            .info_r {
                display: flex;

                ul {
                    padding: .41rem .5rem 0 0;
                    position: relative;

                    li {
                        // width: .9rem;
                        font-size: .14rem;
                        color: rgba(102, 102, 102, 1);
                        line-height: .32rem;
                        cursor: pointer;
                        &:first-child{
                            color:$mc3 !important;
                        }
                        &:hover {
                            color: #FB5F13;
                        }

                        .wx_code {
                            position: absolute;
                            top: .9rem;
                            left: .76rem;
                            display: none;
                            width: 1.36rem;
                            height: 1.36rem;
                            border: 1px solid #e5e5e5;
                            padding: .02rem;

                            img {
                                width: 100%;
                                height: 100%;

                            }
                        }

                        &:hover {
                            .wx_code {
                                display: block;
                            }
                        }

                        &.active {
                            color: #FB5F13;

                            .wx_code {
                                display: block;
                            }
                        }
                    }

                    .title_text {
                        padding-bottom: .12rem;
                        color: rgba(51, 51, 51, 1);
                    }
                }

                .last_ul {
                    padding-right: .2rem;
                }


            }
        }

        .content_b {
            border-top: .01rem #F2F2F2 solid;
            // height: .64rem;
            line-height: .32rem;
            padding: .14rem 0;
            span,p {
                font-size: .14rem;
                color: rgba(102, 102, 102, 1);
            }
           

        }
    }
</style>>