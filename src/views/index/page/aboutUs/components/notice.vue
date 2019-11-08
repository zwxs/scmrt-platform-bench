<template>
    <div class="notice p-lr-60">
         <h3 class="title pt-4 fs24 fw-500">瑞通公告</h3>
           <ul class="new-list pt-30">
                <li v-for="(v,i) in noticeData.records" :key="i" @click="goDetail(v.id)">
                    <div class="name fs16"><i class="el-icon-document c-FB5F13"></i><span
                            class="pl-10 ">{{v.title}}</span></div>
                    <div class="date c-99">{{v.createTime&&v.createTime.substr(0,10)}}</div>
                </li>
            </ul>
            <div class="page-container" v-if="noticeData.total>noticeData.size">
                <el-pagination 
                layout="prev, pager, next" 
                :page-size="noticeData.size"
                :current-page="current" 
                :total="noticeData.total"
                :pager-count="pageCount"
                 @current-change="handleCurrentChange"
                >
                </el-pagination>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            noticeData:{}, //公告信息对象
            current:1,//页码
            pageCount:5,
            size:6,//页容量
        }
    },
    created() {
        this.getNewsNotice()
    },
    methods: {
        goto(path){
            this.$router.replace(path)
        },
        // 进入公告详情
        goDetail(id,name){
            this.$router.push({path:'/noticdetail',query:{id}})
        },
        async getNewsNotice(){
            const {current,size}=this
            let result=await this.$api.getPlatformNotice({current,size});
            if(result.code===200){
                this.noticeData=result.data
            }
        },
        handleCurrentChange(val){
            this.current = val;
            this.getNewsNotice()
            
        }
    },
}
</script>

<style lang="scss">
    .notice{
        .title {
        }
        .new-list {
            height: 4.5rem;
            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: .25rem 0;
                &:nth-of-type(1) {
                    border-top: 1px solid #F0F0F0;
                    border-bottom: 1px solid #F0F0F0;
                }
                &~li {
                    border-bottom: 1px solid #F0F0F0;
                }
                .name:hover {
                    color: #FB5F13;
                    cursor: pointer;
                }
            }
        }
        .page {
            float: right;
            margin-top: .15rem;
            padding-top: .3rem;
        }
    }
 
</style>
