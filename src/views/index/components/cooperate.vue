<template>
    <!-- 合作机构、公司新闻 -->
    <div class="cooperate_container ">
        <div class="cooperate_main_info container">
            <div class="cooperate_l">

                <div class="cooperate_names">

                    <el-carousel width="480px" height="400px" arrow="never">
                        <div class="title">
                            <span>
                                合作机构
                            </span>
                        </div>
                        <el-carousel-item v-for="(item,index) in partner" :key="index">
                            <div class="flex_items">
                                <div class="bank_of_box" v-for="(i,k) in item.list" :key="k">
                                    <img :src="i.image" alt="" class="jh_icon">
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>


                </div>
            </div>
            <div class="cooperate_r">
                <div class="title">
                    <span>瑞通新闻</span>
                    <span class="check_more_news" @click="$router.push('/new')">查看更多 ></span>
                </div>
                <div class="content">
                    <div class="content_l">
                        <img src="../assets/img/company_news_icon.png" alt="">
                    </div>
                    <div class="content_r">
                        <ul class="newConsistency">
                            <li :class="{on:newCurrent===index}" @mouseenter="enter(index)"
                                v-for="(item,index) in listnew" :key="index" @click="goDetail(item.id)">
                                <p class="p1 news-title" :class="{fs18:newCurrent===index,'fw-b':newCurrent===index}">
                                    <a class="ellipsis">{{item.title}}</a>
                                    <span class="date c-66"
                                        v-show="newCurrent!==index">{{item.updateTime && item.updateTime.split('T')[0]}}</span>
                                </p>
                                <div class="explain">
                                    <p class="p2">{{item.title}}</p>
                                    <p class="p3 c-66">{{item.updateTime && item.updateTime.split('T')[0]}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newCurrent: 0,
                listnew: [],
                partner: []
            }
        },
        mounted() {
            this.getCooperateEnterpri();
            this.getNewsHome();
            this.getNewsByClass();
            this.getNewsClass();
        },
        methods: {
            goDetail(id) {

                // this.$store.dispatch('look/setCurrent', 3)
                // console.log(this.$store.getters.current);
                this.$router.push({
                    path: '/newdetail',
                    query: {
                        id: id,
                        name: '瑞通新闻',
                        classId: 2
                    }
                });

            },
            async getCooperateEnterpri() {
                let {
                    data
                } = await this.$api.getCooperateEnterpri();
                let arr = [];
                let i = 1;
                data.map((item, index) => {
                    arr.push(item)
                    let index1 = index + 1;
                    if (index1 % 6 == 0) {

                        this.partner.push({
                            index: i,
                            list: arr
                        });
                        i++;
                        arr = [];
                    }
                });
                if (arr.length > 0) {
                    this.partner.push({
                        index: i,
                        list: arr
                    });
                }
            },
            async getNewsHome() {
                let {
                    data
                } = await this.$api.getNewsHome();
                // console.log(data);
                this.listnew.push(...data);
                this.listnew.splice(5);
            },
            async getNewsByClass() {
                let {
                    data
                } = await this.$api.getNewsByClass({
                    size: 5,
                    current: 1,
                    id: 1
                });
                // console.log(data);
            },
            async getNewsClass() {
                let {
                    data
                } = await this.$api.getNewsClass();
                // console.log(data);
            },
            // 新闻的鼠标移入触发的事件
            enter(index) {
                this.newCurrent = index
            },
        }
    }
</script>
<style lang="scss">
    .cooperate_container {
        .cooperate_names {
            .el-carousel {

                padding-top: 1.3rem;

                .title {
                    position: absolute;
                    top: -1.3rem;

                }

                .el-carousel__indicators {
                    bottom: .2rem;
                    height: .1rem;
                    line-height: .1rem;
                    top: .70rem;
                    left: auto;
                    transform: translateX(0);
                    right: 0;
                    // background-color: red;
                    z-index: 999;

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
    }
</style>
<style lang="scss" scoped>
    //合作机构、公司新闻
    .first_page .cooperate_container {
        // margin-top: 3.9rem;
        height: 5.2rem;
        background: rgba(247, 248, 249, 1);

        .cooperate_main_info {
            display: flex;

            .cooperate_l {
                .title {
                    padding: .54rem 0 .4rem 0;

                    span {
                        font-size: .28rem;
                        font-weight: 500;
                    }
                }

                .cooperate_names {
                    width: 4.8rem;

                    .flex_items {
                        // display: flex;

                        .bank_of_box {
                            display: inline-block;
                            position: relative;
                            width: 2.2rem;
                            height: .84rem;
                            margin-bottom: .3rem;
                            background: #ffffff;
                            text-align: center;
                            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.04);

                            &:nth-of-type(2n) {
                                margin-left: .4rem;
                            }

                            img {
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                            }

                            .jh_icon {
                                width: 2.2rem;
                                height: .84rem;
                            }



                        }

                        .even {
                            margin-left: .4rem;

                        }
                    }
                }
            }

            .cooperate_r {
                width: 100%;
                margin-left: .6rem;

                .title {
                    padding: .54rem 0 .4rem 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    span {
                        font-size: .28rem;
                        font-weight: 500;
                    }

                    .check_more_news {
                        float: right;
                        font-size: .16rem;
                        color: rgba(251, 95, 19, 1);
                        cursor: pointer;
                    }

                }

                .content {
                    display: flex;
                    padding-top: 0rem;

                    .content_l img {
                        width: 2.6rem;
                        height: 3.2rem;
                    }

                    .content_r {
                        width: 100%;
                        margin-left: .3rem;

                        .newConsistency {
                            li {
                                .news-title {
                                    .ellipsis {
                                        width: 2.4rem;
                                    }
                                }

                                p {
                                    line-height: .24rem;
                                }

                                .p1 {
                                    display: flex;
                                    justify-content: space-between;
                                }

                                .p3 {
                                    padding-top: .08rem;
                                }

                                .explain {
                                    height: 0;
                                    overflow: hidden;
                                    transition: all .4s;
                                }

                                &.on {
                                    .explain {
                                        height: 1rem;
                                        border-bottom: .01rem dashed #E5E5E5;
                                        padding-bottom: .2rem;
                                    }
                                }
                            }
                        }
                    }

                }

            }

        }
    }
</style>