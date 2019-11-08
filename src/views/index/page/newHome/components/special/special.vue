<template>
    <!-- 综合专题 -->
    <div class="container special">
        <div class="left img-hover">
            <div class="top height-half pr img-hover">
                <img class="img" src="../images/news_special.png" alt="">
                <div class="pa-center c-ff">
                    <h1 class="mb-20">{{cTopic&&cTopic.name}}</h1>
                    <p class="pointer" @click="goMorl(cTopic&&cTopic.id,cTopic&&cTopic.name)">查看更多<i
                            class="el-icon-arrow-right"></i></p>
                </div>
            </div>
            <div class="bottom height-half border-1px p40">
                <ul class="newConsistency">
                    <li v-if="cTopic" :class="{on:newCurrent1===index}" @mouseenter="enter(index)"
                        v-for="(item,index) in cTopic.mediaVOList" :key="index">
                        <p class="p1 " :class="{fs18:newCurrent1===index,'fw-b':newCurrent1===index}">
                            <a class="ellipsis" @click="goDetail(item.id,cTopic.name,cTopic.id)">{{item.title}}</a>
                        </p>
                        <div class="explain">
                            <p class="p2">{{item.intro}}</p>
                        </div>
                    </li>
                </ul>
                <!-- <p class="c-main pa bottom-40" @click="goMorl(cTopic&&cTopic.id,cTopic&&cTopic.name)">查看更多<i class="el-icon-arrow-right"></i></p> -->
            </div>
        </div>
        <!-- 票据融资 -->
        <div class="right">
            <div class="top height-half">
                <div class="title pl-48 pt-15">
                    <div class="mb-40">
                        <img src="../images/icon-img.png" alt="">
                    </div>
                    <h1 class="mb-40">{{billFinancing&&billFinancing.name}}</h1>
                    <p class="c-main fs16 pointer"
                        @click="goMorl(billFinancing&&billFinancing.id,billFinancing&&billFinancing.name)">查看更多<i
                            class="el-icon-arrow-right"></i></p>
                </div>
                <ul class="list">
                    <li class="list-item  mb-30" v-for="(item,index) in billFinancing&&billFinancing.mediaVOList" :key="index">
                        <p class="date fw-b mb-10 fs18">{{item.updateTime.substr(5,5)}}<sub class="fw-n">/{{item.updateTime.substr(0,4)}}</sub></p>
                        <p class="text ellipsis pointer title-hover" @click="goDetail(item.id,billFinancing.name,billFinancing.id)">{{item.title}}</p>
                    </li>
                </ul>
            </div>
            <!-- 金融政策 -->
            <div class="bottom height-half img-hover border-right-1px">
                <div class="img-hover">
                    <img class="img" src="../images/new_policy.png" alt="">
                </div>
                <div class="p40">
                    <h2 class="title" >{{financialPolicy&&financialPolicy.name}}</h2>
                    <h4 class="doing title-hover ellipsis" @click="goDetail(financialPolicy&&financialPolicy.mediaVOList[0].id,financialPolicy.name,financialPolicy.id)" >{{financialPolicy&&financialPolicy.mediaVOList[0].title}}</h4>
                    <p class="text fs14">
                        {{financialPolicy&&financialPolicy.mediaVOList[0].intro}}
                    </p>
                    <p class="pa bottom-40 c-main pointer"
                        @click="goMorl(financialPolicy&&financialPolicy.id,financialPolicy&&financialPolicy.name)">
                        查看更多<i class="el-icon-arrow-right"></i></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newCurrent1: 0, //控制标题的类
            }
        },
        computed: {
            // 票据融资
            billFinancing() {
                let queryNewList = this.$store.getters.queryNewList
                if (queryNewList.length > 0) {
                    let {
                        name,
                        mediaVOList,
                        id
                    } = queryNewList[2]
                    mediaVOList = mediaVOList.slice(0, 6)
                    return {
                        name,
                        mediaVOList,
                        id
                    }
                } else {
                    return ''
                }
            },
            // 综合专题
            cTopic() {
                let queryNewList = this.$store.getters.queryNewList
                if (queryNewList.length > 0) {
                    let {
                        name,
                        mediaVOList,
                        id
                    } = queryNewList[4]
                    mediaVOList = mediaVOList.slice(0, 4)
                    return {
                        name,
                        mediaVOList,
                        id
                    }
                } else {
                    return ''
                }
            },
            // 金融政策
            financialPolicy() {
                let queryNewList = this.$store.getters.queryNewList
                if (queryNewList.length > 0) {
                    let {
                        name,
                        mediaVOList,
                        id
                    } = queryNewList[3]
                    return {
                        name,
                        mediaVOList,
                        id
                    }
                } else {
                    return ''
                }
            },
        },
        methods: {
            // 进入新闻列表
            goMorl(id, name) {
               this.$router.push({path:'/newlist',query:{"id":id,"name":name}})
            },
             // 进入新闻详情
            goDetail(id,name,classId){
               this.$router.push({path:'/newdetail',query:{"id":id,"name":name,"classId":classId}})
            },
            // 鼠标移入新闻标题
            enter(index) {
                this.newCurrent1 = index
            },

        },
    }
</script>

<style lang="scss" scoped>
    .special {
        display: flex;
        height: 6.82rem;

        .left {
            width: 33.3333%;
            display: flex;
            flex-direction: column;
        }

        .right {
            flex: 1;
            display: flex;
            flex-direction: column;

            .top {
                background-color: #f8f8f8;
                display: flex;
                padding-top: .5rem;

                .title {
                    width: 2.4rem;
                }

                .list {
                    flex: 1;

                    .list-item {
                        width: 50%;
                        float: left;

                        .text {
                            width: 70%;
                            font-size: .16rem;
                        }
                    }
                }
            }

            .bottom {
                display: flex;

                >div {
                    width: 50%;

                    &.p40 {
                        .doing {
                            line-height: .36rem;
                        }

                        .title {
                            margin-bottom: .2rem;
                            margin-top: .2rem;
                        }

                        .text {
                            color: #666666;
                            line-height: .26rem;
                        }
                    }
                }
            }
        }
    }

    .bottom-40 {
        bottom: .58rem;
    }
</style>