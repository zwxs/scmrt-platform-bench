<template>
    <!-- 文章详情 -->
    <div class="moticeDetail">
        <!-- 面包导航 -->
        <div class="breadcrumb container c-66">
            <!-- <img src="./images/home.png" class="pr-10" alt="">
            <span class="pr-10 title-hover pointer" @click="goback('/new')">新闻资讯</span>
             > &nbsp; -->
            <span class="title-hover pointer pr-10" @click="gonoticeList">瑞通公告</span>
             > &nbsp;
            <span class="c-FB5F13 pointer">公告详情</span>
        </div>
        <!-- 文章标题 -->
        <div class="container p40 bg-ff pb-30">
            <h1>{{newDetal.title}}</h1>
            <div class="essay-info">
                <img src="./images/nz.png" alt=""> <span>{{newDetal.createTime}}</span>
                <img src="./images/user.png" alt="" class="ml-30"><span class="">{{newDetal.source}}</span>
            </div>
        </div>
        <!-- 文章内容和推荐列表 -->
        <div class="essay-content container pl-40 bg-ff ">
            <div class="essay-left mr-40 ">
                <!-- 文章内容 -->
                <div class="pt-30 essay-text lh-28 fs16" v-if="newDetal.content"  v-html="newDetal.content">
                    {{newDetal.content}}
                </div>
                 <div class="pt-30 pb-30 essay-text" v-else>
                     暂无内容
                 </div>
             
            </div>
           
        </div>
        <fixed-right />
    </div>
</template>

<script>
    import fixedRight from '@/components/fixedRight.vue'
    export default {
        components: {
            fixedRight
        },
        data() {
            return {
                newDetal: {}, //新闻数据
            }
        },
        created() {
            // 根据文章ID获取文章详情
            if (this.$route.query.id) {
                // 分类名称
                this.getNoticeContent(this.$route.query.id)
            }
        },
        methods: {
             // 进入新闻列表
            gonoticeList(){
                this.$router.push({path:'/us',query:{active:4}})
            },
            async getNoticeContent(id){
                const result=await this.$api.getNoticeContent(id)
                if(result.code===200){
                    let {data}=result
                    this.newDetal=data
                    // this.hotList=data.recommendList.slice(0,6)
                    // this.preNew=data.lastArticle
                    // this.nextNew=data.nextArticle
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .moticeDetail {
        min-height: 100vh;
        background-color: #F8F8F8;
        padding-bottom: .5rem;
        .breadcrumb,
        .essay-info {
            height: .6rem;
            display: flex;
            align-items: center;
        }

        .essay-info {
            color: #666666;
            display: flex;
            align-items: center;
            height: 0.4rem;
            padding-top: .2rem;
            span{
                padding-left: .1rem;
            }
        }

        .essay-content {
            // display: flex;
            .essay-left {
                // width: 8.2rem;

                .essay-text {
                    border-top: .01rem solid #F3F3F3;
                    padding-bottom: .6rem
                    // border-bottom: .01rem solid #F3F3F3;
                }

                // .function {
                //     height: 1.26rem;

                //     .toggle {
                //         width: 3.5rem;
                //     }

                //     .share {
                //         width: 2.6rem;
                //     }
                // }
            }

            // .essay-hot {
            //     height: 5.2rem;
            //     flex: 1;

            //     .ellipsis {
            //         width: 2.5rem;
            //     }
            // }
        }

    }
</style>