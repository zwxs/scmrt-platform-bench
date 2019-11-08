<template>
  <div class="LineNumberQuery" v-if="isShow">
     <div class="box">
       <div class="header">
         <div class="left fl">
           <img class="mr-15" src="../assets/img/line_query.png" alt="">
           <span class="fs20 fw-b" style="vertical-align: middle;">行号查询</span>
         </div>
          <i class="el-icon-close fr c-66 fs20" @click="toggleShow"></i>
       </div>
       <div class="body ">
         <div class="query mb-20">
           <input class="input" type="text" v-model="name" placeholder="请输入银行行号或银行名称关键字">
           <i class="el-icon-search tac c-99 fs16"></i>
         </div>
          <el-table
            :data="tableData"
            style="width: 100%"
            height="270">
            <el-table-column
              label="行号"
              width="210">
               <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.line }}</span>
                <span class="c-main ml-15 pointer">复制</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="银行名称"
              width="240">
            </el-table-column>
             <div slot="empty">
                <p>
                    <img src="../assets/img/nodata.png"/>
                </p>
                <span class="fs16">暂无数据~</span>
            </div>
          </el-table>
       </div>
     </div>
     <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow:false,
      name:'',
      tableData:[
        {line:'1082381084028',name:'中国银行深圳福田口岸支行'},
        {line:'1082381084028',name:'中国银行股份有限公司前海分行'},
        {line:'1082381084028',name:'中国银行股份有限公司深圳蛇口…'},
        {line:'1082381084028',name:'中国银行股份有限公司深圳蛇口…'},
        {line:'1082381084028',name:'中国银行股份有限公司深圳蛇口…'},
        {line:'1082381084028',name:'中国银行股份有限公司深圳蛇口…'},
        {line:'1082381084028',name:'中国银行股份有限公司深圳蛇口…'},
        {line:'1082381084028',name:'中国银行股份有限公司深圳蛇口…'},

      ]
    }
  },
  methods: {
    toggleShow(){
      this.isShow=!this.isShow;
    }
  },
}
</script>

<style lang="scss">
  .LineNumberQuery{
    .box{
      padding: .3rem;
      width: 6rem;
      height: 5.2rem;
      background-color: #fff;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 1000;
      .header{
        height: .3rem;
        .el-icon-close{
          line-height: .3rem;
        }
      }
      .body{
        padding: .3rem;
        .query{
          display: flex;
          border: .01rem solid #F3F3F3;
          .input{
            flex:1;
            border: none;
            padding-left: .15rem;
          }
          .el-icon-search{
            width: .4rem;
            height: .4rem;
            line-height: .4rem;
            border-left: .01rem solid #F3F3F3;
          }
        }
        .el-table{
          thead{
            th{
                background-color: #F8F8F8;
                color: #666666;
              }
            }
          } 
        .el-table--scrollable-y .el-table__body-wrapper{

        }
      }
    }
    .shadow{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.4);
      z-index: 999
    }
  }
</style>
