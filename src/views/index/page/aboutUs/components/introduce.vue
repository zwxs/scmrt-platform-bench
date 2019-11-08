<template>
     <!-- 瑞通简介 -->
    <div class="introduce p-lr-60">
        <h3 class="title pt-4 fs24 fw-500">瑞通简介</h3>
        <!-- 解释 -->
        <div class="explain pt-30 mb-50 ">
            <p class="mb-15 fs16">瑞通供应链金融服务平台始终致力于“让供应链金融更智慧”，并逐渐成长为业内领先金融服务平台，为大企业提供专业化、标准化、流程化、批量化的供应链综合型金融服务，打造专业、高效、安全的供应链金融信息服务平台。</p>
            <p class="mb-15 fs16">瑞通专注于供应链金融细分领域，提供商业保理应收账款融资、票据贴现流转、企业信用贷等金融服务，针对中小企业融资和资金机构合作的需求，基于大数据智能准确分析，打造一套全方位的风控管控体系，将产业链中的中小企业融资成本和风险降到最低。 </p>
            <p class="mb-15 fs16">未来，瑞通供应链金融将继续致力引领智慧供应链金融变革创新，立足于社会和行业的长远发展，持续推进“智慧供应链数字化计划”，积极推动与上下游合作伙伴及友商的合作创新、扩大产业价值，以实际行动建设健康的供应链金融生态圈。</p>
        </div>
        <!-- 图文解说 -->
        <div class="graphic mb-50">
            <div class="graphic-img tac">
                <img src="../images/graphic.png" alt="">
            </div>
            <ul class="graphic-text pt-15">
                <li class="graphic-item fs16" v-for="(item,index) in graphics" :key="index">{{item}}</li>
            </ul>
        </div>
        <!-- 四大优势 -->
        <ul class="advantage">
            <li class="pr border-1px mb-20 advantage-item " v-for="(item,index) in advantage" :key="index">
                <h3 class="title fs20">{{item.title}}</h3>
                <p class="fs16">{{item.explain}}</p>
                <img class="flag pa" src="../images/flag.png" alt="">
            </li>
        </ul>
    </div>
   
</template>

<script>
export default {
    data(){
        return {
            graphics:['打通上下游资金启动','融资速度快、成本低','信息快速响应','整合资源、借助大数据'],
            advantage:[
                {title:'专业洞察',explain:'整合资源，借助大数据、云计算等整合供应链上下游的中小企业和处于供应链核心的大型企业之间的应收账款。'},
                {title:'专业打造',explain:'瑞通凭借强大的信息整合能力和快速响应能力搭建一站式供应链金融服务平台，让供应链融资速度更快，成本更低。'},
                {title:'专业态度',explain:'加强核心企业、供应商、金融机构的互动协作，彻底解决中小企业资金流问题，创建供应链金融生态圈。'},
                {title:'瑞通定位',explain:'通过互联网大数据为中小企业提供最佳金融解决方案，帮助企业建立专业、快速、高效、智慧供应链，为企业创造新的价值。'},
                
            ]
        }
    }
}
</script>

<style lang="scss">
    .introduce{
        .graphic{
            .graphic-text{
                display: flex;
                justify-content: space-around;
            }
        }
        .advantage{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .advantage-item{
                width: 4.2rem;
                height: 2.2rem;
                .title{
                    padding: .4rem .4rem .2rem;
                    &:before{
                        content: '';
                        display: block;
                        position: absolute;
                        width: .03rem;
                        height: .25rem;
                        background-color: #FB5F13;
                        left: 0;
                    }
                }
                .flag{
                   right: .4rem; 
                   bottom: .2rem;
                }
                .fs16{
                    line-height: .25rem;
                    padding: 0 .4rem
                }
            }
        }
    }
</style>
