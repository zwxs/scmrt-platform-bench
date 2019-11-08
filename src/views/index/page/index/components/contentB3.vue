<template>
    <div class="lease">
        <tab-top :data="info" :index="2">
            <div class="btn cp" slot="btn" @click="$store.dispatch('look/getShowLook', true)">
                <span>在线申请</span>
            </div>
        </tab-top>
        <div class="bottom">
            <div class="top_box_slogan">
                <div class="slogan ">
                    <span>技术驱动创新 · 让金融更简单</span>
                </div>
                <div class="method ">
                    <span>以融物代替融资，租比买划算</span>
                </div>
            </div>
            <div class="bottom_box_type">
                <!-- 新品融资租赁 -->
                <div class="flex_item cp" v-for="(item,index) in list" :key="index">
                    <div class="img_bg">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="title_plan">
                        <span>{{item.title}}</span>
                    </div>
                    <div class="infos_plan">
                        <span>{{item.text}}</span>
                    </div>
                </div>

            </div>
        </div>
        <div class="btn_into cp"  @click="$store.dispatch('look/getShowLook', true)">
            <span>立即申请</span>
        </div>
    </div>
</template>

<script>
    import tabTop from './tabTop'
    export default {
        components: {
            tabTop
        },
        data() {
            return {
                info: {
                    title: '融资租赁',
                    iconImg: require('../images/money_more_icon.png'),
                    contentText: '融资租赁集借贷、租赁、买卖于一体，是将融资与融物结合在一起的交易方式，专注为合作各方提供专业的市场金融服务。<br/> <br/> 瑞通融资租赁为企业盘活固定资产,缓解企业财务压力，倍增资金效益，规避应收账款风险、灵活运用企业资金由商品或劳务销售的卖方将与其买方订立的买卖合同所产生的应收账款转让给保理商，是企业实现资源配置和拓展市场的最佳战略伙伴。',
                    hintImg: require('../images/rongzi_bg.png')
                },
                list: [{
                        title: '新品融资租赁',
                        img: require('../images/new_goods_icon.png'),
                        text: '以融物代替融资，租比买划算'
                    },
                    {
                        title: '旧品回租',
                        img: require('../images/old_goods_icon.png'),
                        text: '盘活固定资产，倍增资金效益'
                    },
                    {
                        title: '贸易赊销',
                        img: require('../images/trade_icon.png'),
                        text: '多一个可靠伙伴，多一份胜利力量'
                    },
                    {
                        title: '供应商战略合作',
                        img: require('../images/tactic-icon.png'),
                        text: '供应商拓展市场的最佳战略伙伴'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/indexTab.scss';
</style>
<style scoped lang="scss">
    .flex_item {
        img {
            transition: all 0.4s;
        }

        &:hover {
            img {
                transform: rotate(360deg);
            }
        }
    }
</style>