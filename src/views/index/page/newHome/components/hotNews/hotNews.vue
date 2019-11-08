<template>
    <!-- 热点新闻 -->
    <div class="container hoteNew">
        <div class="hot-item border" >
            <h2 class="title" >{{scf.name}}</h2>
            <h4 class="doing title-hover ellipsis" @click="goDetail(scf.mediaVOList&&scf.mediaVOList[0].id,scf&&scf.name,scf.id)">{{scf&&scf.mediaVOList[0].title}}</h4>
            <p class="text fs14 ">
                {{scf&&scf.mediaVOList[0].intro}}
            </p>
            <p class="pa bottom-40 c-main pointer" @click="goMorl(scf&&scf.id,scf&&scf.name)">查看更多<i class="el-icon-arrow-right"></i></p>
        </div>
        <div class="hot-item">
            <ul>
                <transition name="fade">
                     <li class="hot-img" v-for="(item,index) in list" :key="index" v-if="newCurrent===index">
                        <img :src="item.img" alt="">
                    </li>
                </transition>
            </ul>
        </div>
        <div class="hot-item border">
            <ul class="newConsistency" >
                <li v-if="ruiTongNews" :class="{on:newCurrent===index}" @mouseenter="enter(index)" v-for="(item,index) in ruiTongNews.mediaVOList"
                    :key="index">
                    <p class="p1" :class="{fs18:newCurrent===index,'fw-b':newCurrent===index}">
                        <a class="ellipsis" @click="goDetail(item.id,ruiTongNews.name,ruiTongNews.id)">{{item.title}}</a>
                    </p>
                    <div class="explain">
                        <p class="p2">{{item.intro}}</p>
                    </div>
                </li>
            </ul>
            <p class="c-main bottom-40 pa pointer" @click="goMorl(ruiTongNews&&ruiTongNews.id,ruiTongNews&&ruiTongNews.name)">查看更多<i class="el-icon-arrow-right"></i></p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                newCurrent: 0,
                list: [{
                        img: require('../images/hot_news.png'),
                    },
                    {
                        img: require('../images/block_chain2.png'),
                    },
                    {
                        img: require('../images/Insurance.png'),
                    }
                 
                ],
        
            }
        },
        computed: {
            // 供应链金融
            scf(){
                let queryNewList= this.$store.getters.queryNewList
                if(queryNewList.length>0){
                    let {name,id,mediaVOList}=queryNewList[0]
                    return {name,id,mediaVOList}
                }else{
                    return ''
                }
                
            },
            // 瑞通新闻
            ruiTongNews(){
                let queryNewList=this.$store.getters.queryNewList
                if(queryNewList.length>0){
                     let {mediaVOList,id,name}=queryNewList[1]
                     console.log(queryNewList,'撒大声地多所');
                    mediaVOList=mediaVOList.slice(0,3)
                    return {mediaVOList,id,name}
                }else{
                    return ''
                }
            }
        },
        created() {
        },
        methods: {
            // 新闻的鼠标移入触发的事件
            enter(index) {
                this.newCurrent = index
            },
            // 进入新闻列表
            goMorl(id,name) {
                this.$router.push({path:'/newlist',query:{"id":id,"name":name}})
            },
            // 进入新闻详情
            goDetail(id,name,classId){
                this.$router.push({path:'/newdetail',query:{"id":id,"name":name,"classId":classId}})
            }
        },
    }
</script>

<style lang="scss" scoped>
 
    .hoteNew {
        display: flex;
        height: 3.41rem;

        .hot-item {
            width: 33.333%;
            .hot-img{
                &.fade-enter-active,&.fade-leave-active{
                    transition: all .3s ease;
                }
                &.fade-enter,&.fade-leave-to{
                    opacity: .5;
                }
            }
            &.border {
                border: 1px solid #F3F3F3;
                padding: .4rem;
                position: relative;
            }

            .swerp-text {
                position: absolute;
                bottom: .2rem;
                color: #ffffff;
                width: 100%;
                text-align: center;
            }

            .border-b {
                height: .01rem;
                background: #E5E5E5;
                margin: .2rem 0;
            }

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
        .bottom-40{
            bottom: .58rem;
        }
    }
</style>