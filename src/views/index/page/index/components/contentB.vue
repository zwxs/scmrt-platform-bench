<template>
    <div class="index-tab-bottom">


        <div class="max-container">
            <div v-for="(i,k) in navList" :key="k+'aa'">

                <div class="bg-index" v-if="current==k+1" :style="{'background-image':'url('+i.image+')'}">
                </div>
            </div>
        </div>

        <!-- 首页底部tab内容 -->
        <div class="content_b">
            <div class="max-container">
                <div class="nav_box">
                    <div class="nav container">
                        <div @mouseenter="current=index+1" @click="current=index+1" :class="{active:current===index+1}"
                            v-for="(item,index) in navList" :key="index">
                            <span>{{item.title}}</span>
                        </div>
                        <!-- <div @mouseenter="current=2" @click="current=2" :class="{active:current===2}"><span>票据融资</span>
                    </div>
                    <div @mouseenter="current=3" @click="current=3" :class="{active:current===3}"><span>融资租赁</span>
                    </div>
                    <div @mouseenter="current=4" @click="current=4" :class="{active:current===4}"><span>企业信用贷</span>
                    </div> -->
                    </div>
                </div>
                <div class="info container">
                    <!-- 应收账款融资 -->
                    <content-b1 v-if="current===1" ></content-b1>
                    <!-- 票据融资 -->
                    <content-b2 v-if="current===2" ></content-b2>
                    <!-- 融资租赁 -->
                    <content-b3 v-if="current===3" ></content-b3>
                    <!-- 企业信用贷 -->
                    <content-b4 v-if="current===4" ></content-b4>
                </div>

                <img v-for="(i,k) in navList" :key="k" :src="i.image" alt="" v-show="false">
            </div>

        </div>


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
                current: 1,
                navList: []
            }
        },
        created() {
            this.getSlide(1, 2);
            // this.getSlide(1, 3);
        },
        methods: {
            handleClick(data) {
                // console.log(data);
            },
            async getSlide(model, location) {
                let {
                    data
                } = await this.$api.getSlide({
                    model: model,
                    location: location,
                });
                // console.log(data);
                if (model == 1 && location == 2) {
                    this.navList.push(...data);
                }

                this.$store.dispatch('look/getTabData',data)

            }
        }
    }
</script>

<style lang="scss" scoped>
    .content_b {
        transition: all 0.4s;
        background-color: #f3f4f8;
    }

    .bg-index {
        position: absolute;
        width: 100%;
        height: 8.13rem;
        z-index: 0;
        left: 0;
        top: 0;
    }

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

    .index-tab-bottom {
        padding-bottom: .6rem;
        height: 12rem;
        min-width: 12rem;
        position: relative;
        // background-color: #f3f4f8;
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
                transition: all 0.4s;

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