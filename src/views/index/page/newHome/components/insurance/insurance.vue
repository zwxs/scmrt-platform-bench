<template>
    <!-- 商业保理 -->
    <div class="container insurance">
        <div class="left img-hover">
            <div class="img-hover">
                <img class="img" src="../images/Insurance.png" alt="">
            </div>
            <div class="insurance-list">
                <div class="title flex-bettwen">
                    <h1>{{factoring&&factoring.name}}</h1>
                    <p class="c-main pt-10 fs16 pointer" @click="goMorl(factoring&&factoring.id,factoring&&factoring.name)">查看更多<i class="el-icon-arrow-right"></i></p>
                </div>
                <ul>
                    <li @click="goDetail(item.id,factoring.name,factoring.id)" v-if="factoring" class="list-item flex-bettwen title-hover" v-for="(item,index) in factoring.mediaVOList" :key="index"> 
                        <p class="text fs16 ellipsis">{{item.title}}</p>
                        <p class="date">{{item.updateTime.substr(0,10)}}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg img-hover pr">
            <img class="img" src="../images/block_chain.png" alt="">
            <div class=" pa-center c-ff tac">
                <h1 class="mb-30">{{cFactoring&&cFactoring.name}}</h1>

                <p @click="goDetail(item.id,cFactoring.name,cFactoring.id)" v-if="cFactoring" class="ellipsis mb-20 pointer" v-for="(item,index) in cFactoring.mediaVOList" :key="index">
                    {{item.title}}
                </p>
                <p class="fs16 pointer mt-30" @click="goMorl(cFactoring&&cFactoring.id,cFactoring&&cFactoring.name)">查看更多<i class="el-icon-arrow-right"></i></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    computed: {
        // 区块链
        cFactoring(){
            let queryNewList=this.$store.getters.queryNewList
            if(queryNewList.length>0){
                let {mediaVOList,id,name}=queryNewList[6]
                 mediaVOList=mediaVOList.slice(0,2)
                return {mediaVOList,id,name}
            }else{
                return ''
            }
        },
         // 商业保理
        factoring(){
            let queryNewList=this.$store.getters.queryNewList
            if(queryNewList.length>0){
                let {name,mediaVOList,id}=queryNewList[5]
                mediaVOList=mediaVOList.slice(0,4)
                return {name,mediaVOList,id}
            }else{
                return ''
            }
        }
    },
    methods: {
        // 更多
        goMorl(id,name){
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
    .w-70{
        
    }
    .insurance{
        display: flex;
        height: 3.41rem;
        .left{
            flex: 1;
            display: flex;
            >div{
                width: 50%;
            }
            .insurance-list{
                padding: .45rem .3rem;
                .title{
                    margin-bottom: .4rem;
                    
                }
                .list-item {
                    padding: .1rem 0;
                    .text{
                        width: 2.18rem;
                    }
                }
            }
        }
        .flex-bettwen{
            display: flex;
            justify-content: space-between
        }
        .bg{
            width: 33.3333%;
            position: relative;
            .pa-center{
                width: 2.5rem;
            }
        }
    }
</style>
