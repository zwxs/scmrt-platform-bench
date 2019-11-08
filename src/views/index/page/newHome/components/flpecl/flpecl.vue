<template>
  <!-- 融资租赁+企业信用贷 -->
  <div class="flpecl">
     <div class="left p40 pr border-left-1px border-bottom-1px">
        <h2 class="title" >{{lease&&lease.name}}</h2>
        <h4 class="doing title-hover ellipsis" @click="goDetail(lease.mediaVOList&&lease.mediaVOList.id,lease.name,lease.id)">{{lease&&lease.mediaVOList.title}}</h4>
        <p class="text fs14">
            {{lease&&lease.mediaVOList.intro}}
        </p>
       <p class="pa bottom-40 c-main pointer" @click="goMorl(lease&&lease.id,lease&&lease.name)">查看更多<i class="el-icon-arrow-right"></i></p>
    </div>
    <div class="right img-hover border-right-1px border-bottom-1px">
      <div class="img-hover">
        <img class="img" src="./images/credit.png" alt="">
      </div>
      <div class="insurance-list">
        <div class="title flex-bettwen">
          <h1>{{creditLoan&&creditLoan.name}}</h1>
          <p class="c-main pt-10 fs16 pointer" @click="goMorl(creditLoan&&creditLoan.id,creditLoan&&creditLoan.name)">查看更多<i
              class="el-icon-arrow-right"></i></p>
        </div>
        <ul>
          <li @click="goDetail(item.id,creditLoan.name,creditLoan.id)" v-if="creditLoan" class="list-item flex-bettwen title-hover"
            v-for="(item,index) in creditLoan.mediaVOList" :key="index">
            <p class="text fs16 ellipsis">{{item.title}}</p>
            <p class="date">{{item.updateTime.substr(0,10)}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
    computed: {
      // 融资租赁
      lease() {
        let queryNewList = this.$store.getters.queryNewList
        if (queryNewList.length > 0) {
          let {
            name,
            mediaVOList,
            id
          } = queryNewList[7]
          mediaVOList = mediaVOList[0]
          return {
            name,
            mediaVOList,
            id
          }
        } else {
          return ''
        }
      },
      // 企业信用贷
      creditLoan() {
        let queryNewList = this.$store.getters.queryNewList
        if (queryNewList.length > 0) {
          let {
            name,
            mediaVOList,
            id
          } = queryNewList[8]
          mediaVOList = mediaVOList.slice(0, 4)
          return {
            name,
            mediaVOList,
            id
          }
        } else {
          return ''
        }
      }
    },
    methods: {
      // 更多
      goMorl(id, name) {
       this.$router.push({path:'/newlist',query:{"id":id,"name":name}})
      },
      // 进入新闻详情
      goDetail(id,name,classId) {
      this.$router.push({path:'/newdetail',query:{"id":id,"name":name,"classId":classId}})
      }
    },
  }
</script>

<style lang="scss">
  .flpecl {
    display: flex;
    height: 3.41rem;

    .left {
      width: 4.01rem;

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

    .right {
      flex: 1;
      display: flex;

      >div {
        width: 50%;
      }

      .insurance-list {
        padding: .6rem .3rem 0;

        .title {
          margin-bottom: .4rem;

        }

        .list-item {
          padding: .1rem 0;

          .text {
            width: 2rem;
          }
        }

        .flex-bettwen {
          display: flex;
          justify-content: space-between
        }
      }
    }
  }

  .flpecl .bottom-40 {
    bottom: .58rem;
  }
</style>