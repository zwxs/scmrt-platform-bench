<template>
    <div class="newList">
        <!-- 背景图片 -->
        <banner></banner>
        <!-- 头部面包屑 -->
        <div class="new-list-title">
            <div class="container breadcrumb">
                <img class="pr-10" src="./images/home.png" alt="">
                <span class="pr-10 c-66 new-home" @click="goto('/new')">新闻资讯</span>
                > &nbsp;
                <span class="c-FB5F13 fw-b">{{currentTitle}}</span>
            </div>
        </div>
        <!-- 新闻列表tab切换 -->
        <div class="container list-tab">
            <el-tabs tab-position="left" v-model="activeName">
                <el-tab-pane :name="item.id.toString()" v-for="(item,index) in classList" :key="index">
                    <div slot="label" class="tab-lable" @click="getNewsByClass(item.id,item.name)">{{item.name}}</div>
                    <div class="label-content">
                        <h3 class="title pt-4 fs24 fw-500 pb-20">{{item.name}}</h3>
                        <ul class="new-list">
                            <li v-for="(v,i) in titleList.records" :key="i" @click="goDetail(v.id,item.name,item.id)">
                                <div class="new-img">
                                    <img :src="imgList[i].newImg" alt="">
                                </div>
                                <div class="new-title">
                                    <p class="mb-10 title-hover fs16">{{v.title}}</p>
                                    <p class="c-66 mb-20 fs14">{{v.intro}}</p>
                                    <p class="c-99">{{v.updateTime.split(' ')[0]}}</p>
                                </div>
                            </li>
                            <li class="tac" v-if="titleList.total==0">暂无数据</li>
                        </ul>
                        <div class="page-container" v-if="titleList.total>titleList.size">
                            <el-pagination layout="prev, pager, next" :page-size="titleList.size" :pager-count="5"
                                :page-count="current" :total="titleList.total" @current-change="handleCurrentChange">
                            </el-pagination>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <fixed-right />
    </div>
</template>

<script>
    import banner from '../newHome/components/banner/banner.vue'
    import fixedRight from '@/components/fixedRight.vue'
    export default {
        components: {
            banner,
            fixedRight
        },
        data() {
            return {
                classList: [],
                titleList: {},
                size: 5,
                current: 1,
                activeName: '',
                currentTitle: '',
                imgList:[
                    {newImg:require('./images/new_list1.png')},
                    {newImg:require('./images/new_list2.png')},
                    {newImg:require('./images/new_list3.png')},
                    {newImg:require('./images/new_list4.png')},
                    {newImg:require('./images/new_list5.png')},
                ]
                
            }
        },
        created() {
            this.getNewsClass()
            // 新闻资讯跳转到新闻列表时请求对应分类的新闻列表
            if (this.$route.query.id && this.$route.query.name) {
                this.getNewsByClass(this.$route.query.id, this.$route.query.name)
            }
        },
        methods: {
            async getNewsClass() {
                let {
                    data
                } = await this.$api.getNewsClass()
                this.classList = data
                // 非新闻资讯跳转时默认请求第一个分类的新闻列表
                if (!this.$route.query.id) {
                    this.activeName = data[0].id.toString()
                    this.getNewsByClass(this.classList[0].id, this.classList[0].name)
                }

            },
            async getNewsByClass(classId, name) {
                console.log(classId, name);
                if (classId && name) {
                    this.currentTitle = name
                    this.id = classId
                    this.current = 1
                    this.activeName = classId.toString()
                }
                const {size,current,id} = this
                let {data} = await this.$api.getNewsByClass({ size,current,id})
                this.titleList = data
            },
            handleCurrentChange(val) {
                this.current = val
                this.getNewsByClass()
            },
            // 进入新闻详情
            goDetail(id, name, classId) {
                this.$router.push({path:'/newdetail',query:{"id":id,"name":name,"classId":classId}})
            },
            goto(path) {
                this.$router.push(path)
            }
        },
    }
</script>

<style lang="scss">
    .newList {
         min-height: 100vh;
        .new-list-title {
            background-color: #F8F8F8;

            .breadcrumb {
                height: .6rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;

                .new-home {
                    cursor: pointer;
                }

                .new-home:hover {
                    color: #FB5F13;
                }
            }
        }

        .list-tab {
            padding: .4rem 0;
            // height: 6.29rem;

            .el-tabs__active-bar.is-left {
                display: none;
            }

            .el-tabs--left .el-tabs__item.is-left {
                text-align: left
            }

            .el-tabs__nav-scroll {
                border-bottom: 1px solid #f3f3f3;
            }

            .el-tabs__item {
                width: 2.6rem;
                padding-left: .4rem;
                height: 0.8rem;
                line-height: .8rem;
                font-size: .18rem;
                text-align: left;
                box-sizing: border-box;
            }

            .el-tabs__item.is-left {
                border-right: 1px solid #F0F0F0;
                border-top: 1px solid #F0F0F0;

                &:hover,
                &.is-active {
                    color: #FB5F13;
                }
            }

            .el-tabs__nav-wrap::after {
                display: none;
            }

            .label-content {
                padding-left: .6rem;

                .title {
                    padding-bottom: .30rem;
                }

                .new-list {
                    height: 8.32rem;
                    border-top: 1px solid #F0F0F0;
                    border-bottom: 1px solid #F0F0F0;

                    li {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 1.1rem;
                        margin-bottom: .5rem;

                        &:first-of-type {
                            margin-top: .4rem
                        }

                        .new-img {
                            width: 1.54rem;
                        }

                        .new-title {
                            width: 6.8rem;
                            height: 1.1rem;
                        }

                    }
                }

                .page {
                    float: right;
                    margin-top: .15rem;
                }
            }

            .el-pager li.active {
                color: #FB5F13;
                border: 1px solid #FB5F13
            }
        }
    }
</style>