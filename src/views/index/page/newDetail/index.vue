<template>
    <!-- 文章详情 -->
    <div class="detail">
        <!-- 面包导航 -->
        <div class="breadcrumb container c-66">
            <img src="./images/home.png" class="pr-10" alt="">
            <span class="pr-10 title-hover pointer" @click="goback('/new')">新闻资讯</span>
             > &nbsp;
            <span class="title-hover pointer pr-10" @click="goMorl(categoryId,categoryName)">{{categoryName}}</span>
             > &nbsp;
            <span class="c-FB5F13 pointer">文章详情</span>
        </div>
        <!-- 文章标题 -->
        <div class="container p40 bg-ff pb-30">
            <h1>{{newDetal.title}}</h1>
            <div class="essay-info">
                <img src="./images/nz.png" alt=""> <span>{{newDetal.dateTime}}</span>
                <img src="./images/user.png" alt="" class="ml-30"><span class="">{{newDetal.source}}</span>
            </div>
        </div>
        <!-- 文章内容和推荐列表 -->
        <div class="essay-content container pl-40 bg-ff ">
            <div class="essay-left mr-40 ">
                <!-- 文章内容 -->
                <div class="pt-30 essay-text lh-28 fs16" v-if="newDetal.content"  v-html="newDetal.content">
                    {{newDetal.content}}
                    <!-- <p class="mb-15 fs16">据《经济参考报》，央行正在酝酿应收账款融资管理办法，已开始紧锣密鼓地进行调研，寻求动产融资盘活企业应收账款资产，破解中小企业融资难题。</p>
                    <p class="mb-15 fs16">社科院金融研究所银行研究室主任曾刚表示，一些中小企业本身的信用评级较低，但是与其形成应收账款关系的核心企业的信用资质是较高的。</p>
                    <p class="mb-15 fs16">该中小企业以应收账款质押向银行贷款，能够促使银行提升对该企业的评估，从而改变其融资难的困境。</p>
                    <p class="mb-15 fs16">对于上述消息，《经济参考报》援引业内人士的预测称，供应链金融、应收账款融资将在政策的扶持下迎来重大发展机遇，而与应收账款高度相关的平台或企业也将呈井喷之势。
                    </p>
                    <p class="mb-15 fs16">所谓应收账款融资，是指企业将赊销而形成的应收账款有条件地转让给专门的融资机构，使企业得到所需资金，加强资金的周转。</p>
                    <p class="mb-15 fs16">
                        早在今年初，国务院常务会议就鼓励拓宽融资渠道，提出大力发展应收账款融资。央行、发改委等八部门在2月发布的《关于金融支持工业稳增长调结构增效益的若干意见》中就提及，“推动更多供应链加入应收账款质押融资服务平台”，推动大企业和政府采购主体积极确认应收账款，帮助中小企业供应商融资等。
                    </p>
                    <p class="mb-15 fs16">
                        上述报道称，我国应收账款融资的主要方式有两种，一是银行从事的应收账款质押融资业务，主要是用贷款的模式去做；另一种是保理公司从事的应收账款转让融资。近年来，不少企业也逐渐用尝试应收账款资产证券化(ABS)的方式来进行融资。
                    </p>
                    <p class="mb-15 fs16">
                        我国应收账款规模已大幅增加。比如工业企业部门，按照国家统计局的相关数据，截止7月末，规模以上工业企业应收账款同比增长7.6%，至108136.1亿元，商务部研究院信用评级与认证中心主任韩家平表示，这应该是历史最高水平。
                    </p>
                    <p class="mb-15 fs16">2011年末，这一数据为7.03万亿元，目前的规模较当年上升了63%。这意味着，过去四年时间，应收账款年均增长1.1万亿元。</p> -->
                </div>
                 <div class="pt-30 pb-30 essay-text" v-else>
                     暂无内容
                 </div>
                <!-- 功能操作 -->
                <div class="function pt-30 pb-30 ">
                    <!-- 切换上下条 -->
                    <div class="toggle fl">
                        <p class="pre ellipsis title-hover" v-if="preNew">上一篇：<span class="pointer"
                                @click="getNewsDetail(preNew.id)">{{preNew.title}}</span></p>
                        <p class="next pt-15 ellipsis title-hover" v-if="nextNew">下一篇：<span class="pointer"
                                @click="getNewsDetail(nextNew.id)">{{nextNew.title}}</span></p>
                    </div>
                    <!-- 分享 -->
                    <!-- <div class="share fr">
                        <span class="c6 pr-15">分享至</span>
                        <img class="pr-15" src="./images/select_wx.png" alt="">
                        <img class="pr-15" src="./images/wb.png" alt="">
                        <img class="pr-15" src="./images/qq.png" alt="">
                        <img class="pr-15" src="./images/dou.png" alt="">
                    </div> -->
                </div>
            </div>
            <!-- 热文推荐 -->
            <div class="essay-hot border-left-1px">
                <h3 class="border-top-1px border-bottom-1px  pl-15 height-70">热文推荐</h3>
                <ul class="mb-30">
                    <li class="pl-15  fs16  border-bottom-1px height-70 pointer title-hover"
                        v-for="(item,index) in hotList" :key="index" @click="getNewsDetail(item.id)">
                        <div class="fl mr-10">
                            <i class="el-icon-document c-FB5F13"></i>
                        </div>

                        <p class="ellipsis fl">{{item.title}}</p>
                    </li>
                </ul>
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
                hotList: [], //热文推荐列表
                preNew: {}, //上一篇
                nextNew: {}, //下一篇
                newDetal: {}, //新闻数据
                categoryId:'',  //分类ID
                categoryName:'', //分类名称

            }
        },
        created() {
            const {id,name,classId}=this.$route.query
            // 根据文章ID获取文章详情
            if (id) {
                // 分类ID
                this.categoryId=classId
                // 分类名称
                this.categoryName=name
                this.getNewsDetail(id)
            }
        },
        methods: {
             // 进入新闻列表
            goMorl(id,name) {
              
                this.$router.push({path:'/newlist',query:{id:id,name:name}})
                
            },
            goback(path) {
                this.$router.replace(path)
            },
            async getNewsDetail(id){
                const result=await this.$api.getNewsDetail(id)
                if(result.code===200){
                    let {data}=result
                    this.newDetal=data
                    this.hotList=data.recommendList.slice(0,6)
                    this.preNew=data.lastArticle
                    this.nextNew=data.nextArticle
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .detail {
        min-height: 80vh;
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
            display: flex;
            .essay-left {
                width: 8.2rem;

                .essay-text {
                    border-top: .01rem solid #F3F3F3;
                    padding-bottom: .6rem
                    // border-bottom: .01rem solid #F3F3F3;
                }

                .function {
                    height: 1.26rem;

                    .toggle {
                        width: 3.5rem;
                    }

                    .share {
                        width: 2.6rem;
                    }
                }
            }

            .essay-hot {
                height: 5.2rem;
                flex: 1;

                .ellipsis {
                    width: 2.5rem;
                }
            }
        }

    }
</style>