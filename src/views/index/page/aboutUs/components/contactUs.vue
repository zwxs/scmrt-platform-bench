<template>
    <!-- 联系我们 -->
    <div class="contactUs p-lr-60">
        <h3 class="title pt-4 fs24 fw-500">联系我们</h3>
        <ul class="contact-list mb-30 pt-30">
            <li class="pr border-1px" >
                <h4 class="fs16 title ">咨询电话</h4>
                <p class="pl-30 fs20 c-main mb-10">4008-191-555</p>
                <p class="pl-30 c-66">工作日9:00-18:00</p>
            </li>
            <li class="pr border-1px" >
                <h4 class="fs16 title ">邮件反馈</h4>
                <p class="pl-30 ">Service@rtscf.com</p>
            </li>
            <li class="pr border-1px" >
                <h4 class="fs16 title ">市场合作</h4>
                <p class="pl-30 c-66 mb-10">如果您需要市场方面的合作事宜， 请发送邮件：</p>
                <p class="pl-30">cooperation@rtscf.com</p>
            </li>
        </ul>
        <!-- 公司名称 -->
        <h3 class="company-name mb-20"> <img src="../images/company.png" alt=""> <span class="pl-15 pt-4 fs20">瑞通（深圳）网络科技有限公司</span></h3>
        <div class="addr mb-20">
            <img src="../images/addr.png" alt="">
        </div>
        <p class="mb-20">地址：广东省深圳市福田区水松大厦9楼CD</p>
        <p>邮编：518000</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
     
        }
    }
}
</script>

<style lang="scss">
    .contactUs{
        .contact-list{
            display: flex;
            justify-content: space-between;
            li{
                width: 2.73rem;
                height: 1.5rem;
                  .title{
                    padding: .21rem .3rem .21rem;
                    &:before{
                        content: '';
                        display: block;
                        position: absolute;
                        width: .03rem;
                        height: .2rem;
                        background-color: #FB5F13;
                        left: 0;
                    }
                }
            }
        }
        .company-name{
            span{
                vertical-align: middle;
            }
        }
        .addr{
            img{
                width: 100%;
            }
        }
    }
</style>
