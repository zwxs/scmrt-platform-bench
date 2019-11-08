<template>
    <div class="means p-lr-60">
        <h3 class="title pt-4 mb-30 fs24 fw-500">完善资料</h3>
        <ul class="">
            <li class=" mb-10" :class="{on:item.isShow}" v-for="(item,index) in list" :key="index" >
                <div class="question mb-10" :class="{'current-bg':item.isShow}">
                    <img class="question-img mr-20" src="../images/q.png" alt="" v-if="item.isShow">
                    <img class="question-img mr-20" src="../images/full_q.png" alt="" v-else>
                    <span class="question-text c-ff ">{{item.question}}</span>
                     <i class="btn  fs18" :class="[item.isShow?'el-icon-close':'el-icon-plus']"  @click="isShow(index)"></i>
                    
                   
                </div>
                <div class="answer">
                    <img class="mr-20" src="../images/full_a.png" alt="">
                    
                    <div class="answer-text">
                        <p class="lh-22">{{item.answer.p1}}</p>
                        <p class="lh-22">{{item.answer.p2}}</p>
                    </div>
                    
                </div>
            </li>
          
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
           
            list:[
                {
                question:'什么是平台注册用户和认证用户？',
                isShow:false,
                answer:{
                    p1:'平台注册用户是指在瑞通供应链平台进行基本信息注册的用户。注册成功后用户将可以获得用于登陆平台开展业务的用户名和密码。',
                    p2:'平台认证用户是指成为平台注册用户后，通过在账户管理中完善企业认证信息，并通过平台核验审核通过的用户。 注册用户仅能使用平台提供的极少功能，而认证用户可以使用平台提供的全部功能。'}
                },
                 {
                question:'如何注册成为平台用户？如何成为认证用户？',
                isShow:false,
                answer:{
                    p1:'平台注册用户是指在瑞通供应链平台进行基本信息注册的用户。注册成功后用户将可以获得用于登陆平台开展业务的用户名和密码。',
                    p2:'平台认证用户是指成为平台注册用户后，通过在账户管理中完善企业认证信息，并通过平台核验审核通过的用户。 注册用户仅能使用平台提供的极少功能，而认证用户可以使用平台提供的全部功能。'}
                },
                 {
                question:'企业用户和机构用户有什么区别？',
                isShow:false,
                answer:{
                    p1:'平台注册用户是指在瑞通供应链平台进行基本信息注册的用户。注册成功后用户将可以获得用于登陆平台开展业务的用户名和密码。',
                    p2:'平台认证用户是指成为平台注册用户后，通过在账户管理中完善企业认证信息，并通过平台核验审核通过的用户。 注册用户仅能使用平台提供的极少功能，而认证用户可以使用平台提供的全部功能。'}
                },
                 {
                question:'企业用户和机构用户有什么区别？',
                isShow:false,
                answer:{
                    p1:'平台注册用户是指在瑞通供应链平台进行基本信息注册的用户。注册成功后用户将可以获得用于登陆平台开展业务的用户名和密码。',
                    p2:'平台认证用户是指成为平台注册用户后，通过在账户管理中完善企业认证信息，并通过平台核验审核通过的用户。 注册用户仅能使用平台提供的极少功能，而认证用户可以使用平台提供的全部功能。'}
                },
                 {
                question:'企业用户和机构用户有什么区别？',
                isShow:false,
                answer:{
                    p1:'平台注册用户是指在瑞通供应链平台进行基本信息注册的用户。注册成功后用户将可以获得用于登陆平台开展业务的用户名和密码。',
                    p2:'平台认证用户是指成为平台注册用户后，通过在账户管理中完善企业认证信息，并通过平台核验审核通过的用户。 注册用户仅能使用平台提供的极少功能，而认证用户可以使用平台提供的全部功能。'}
                },
                 {
                question:'企业用户和机构用户有什么区别？',
                isShow:false,
                answer:{
                    p1:'平台注册用户是指在瑞通供应链平台进行基本信息注册的用户。注册成功后用户将可以获得用于登陆平台开展业务的用户名和密码。',
                    p2:'平台认证用户是指成为平台注册用户后，通过在账户管理中完善企业认证信息，并通过平台核验审核通过的用户。 注册用户仅能使用平台提供的极少功能，而认证用户可以使用平台提供的全部功能。'}
                },
                
            ]
        }
    },
    methods: {
        isShow(index){
            this.list.some((v,i)=>{
                if(i===index){
                    v.isShow=!v.isShow
                }else{
                    v.isShow=false;
                }
            })
        }
    },
}
</script>

<style lang="scss">
    .means{
        ul{
            li{
                &.on{
                     border: 1px solid #FB5F13;
                    .question{
                        .btn,.question-text{
                            color:#fff;
                        }
                    }
                     .answer{
                        height: 1.3rem;
                       
                    }
                }
                .question{
                    height: .6rem;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 .2rem;
                    align-items: center;
                    box-shadow: 0 0 .1rem #eeeeee;
                    .question-img{
                        width: .18rem;
                        height: .18rem;
                    }
                    .btn{
                        width: .25rem;
                        color:#FB5F13;
                    }
                    .question-text{
                        flex: 1;
                        color:#333333;
                    }
                }
                .answer{
                    height: 0;
                    transition: all .4s;
                    overflow: hidden;
                    background-color: #fff;
                    display: flex;
                    padding: 0 .2rem;
                    img{
                        width: .18rem;
                        height: .18rem;
                        
                    }
                    .answer-text{
                        width: 7.54rem;
                    }
                }
                .current-bg{
                     background-color: #FB5F13;
                }
                
               
            }
        }
    }
</style>
