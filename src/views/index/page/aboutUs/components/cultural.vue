<template>
    <!-- 文化背景 -->
    <div class="cultural p-lr-60">
         <h3 class="title pt-4 fs24 fw-500">文化背景</h3>
          <!-- 解释 -->
        <div class="explain pt-30">
            <p class="mb-15 fs16 lh-28">瑞通集团倡导“携手共进，共创未来”的企业文化，拥有一批专业化团队，为员工提供具有市场竞争力的薪酬水平，丰富完善的福利待遇和贴心入微的企业关怀。</p>
        </div>
        <!-- 品牌意义 -->
        <div class="brand-moral mb-40">
            <h2 class="fs16 fw-b mb-20">品牌寓意</h2>
             <!-- 图文解说 -->
            <div class="graphic mb-30">
                <img class="mr-30" src="../images/rui.png" alt="">
                <span class="fs16 fw-b pr-60">"瑞"，以玉为信也</span>
                <img class="mr-30" src="../images/tong.png" alt="">
                <span class="fs16 fw-b">"通"，融通资金</span>
            </div>
            <div>
                <img class="mr-20" src="../images/logo.png" alt="">
                <span class="fs16">寓意通过核心企业的信用为中小企业融通资金，解决中小企业融资难的问题</span>
            </div>
        </div>
        <!-- 企业价值观 -->
        <div class="opinion">
            <h3 class="mb-20">企业价值观</h3>
            <ul>
                <li class="tac">
                    <img src="../images/op1.png" alt="">
                    <span class="pl-10">诚信</span>
                </li>
                 <li class="tac">
                    <img src="../images/op2.png" alt="">
                    <span class="pl-10">专业</span>
                </li>
                 <li class="tac">
                    <img src="../images/op3.png" alt="">
                    <span class="pl-10">创新</span>
                </li>
                 <li class="tac">
                    <img src="../images/op4.png" alt="">
                    <span class="pl-10">共赢</span>
                </li>
            </ul>
        </div>
        <!-- 企业愿景 -->
        <div class="vision mb-30">
            <h3 class="mb-20">企业愿景</h3>
            <div class="bg pr">
                <h2 class="pa-center fs24 fw-n c-ff">打造开放的互联网供应链金融生态圈</h2>
            </div>
        </div>
        <!-- 团队文化 -->
        <div class="team-cultural">
            <h3 class="mb-20 c-33">团队文化</h3>
            <h4 class="title fs16 fw-n c-33">瑞通成就梦想，共创美好未来    敬业、创新、务实、高效</h4>
            <p>精心创造完美，合作实现超越，</p>
            <p>相互成就，包容成长，</p>
            <p>开拓进取、创新服务、放眼未来</p>
            <p>只要每个人有一点进步，就可以让整个公司焕发全新的面貌，与瑞通共创未来。</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .cultural{
        .opinion{
            height: 1.5rem;
            ul{
                display: flex;
                justify-content: space-between;
                li{
                    width: 2rem;
                    height: .68rem;
                    line-height: .68rem;
                    background-color: #FFFFFF;
                    box-shadow: 0 0 .2rem  #eeeeee;
                    &:before{
                        content: '';
                        display: block;
                        width: .03rem;
                        height: .68rem;
                        background: #FB5F13;
                        float: left;
                    }
                }
            }
        }
        .vision{
            .bg{
                height: 1.3rem;
                background-image: url('../images/vision.png');
                .pa-center{
                    width: 100%;
                    
                }
            }
        }
        .team-cultural{
            .title{
                line-height: .4rem;
            }
            p{
                line-height: .25rem;
                color:$mc6;
            }
        }
    }
</style>
