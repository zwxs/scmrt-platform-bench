<template>
    <div class="top">
        <div class="title">
            <img :src="data.iconImg" alt="">
            <span>{{data.title}}</span>
        </div>
        <div class="main_info">
            <span v-html="data.contentText"></span>
        </div>
        <slot name="text"></slot>
        <slot name="btn"></slot>
        <div class="steps" :class="{'top-50':data.top}">
            <img :src="data.hintImg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data', 'index'],
        data() {
            return {
                info: {
                    top: true,
                    title: '企业信用贷',
                    iconImg: require('../images/qiye_icon.png'),
                    contentText: '企业信用贷款是一种无需抵押、无需担保、手续简便、期限灵活、审批快捷、放款迅速、为企业提供流动资金，配合企业的不同业务需求，帮助企业顺利拓展国内、国际业务的贷款。',
                    hintImg: require('../images/wx_code_bg2.png')
                }
            }
        },
        mounted() {

        },
        computed: {
            getTabData() {
                if (this.getTabData.length > 0) {
                    this.info.title = this.$store.getters.getTabData[this.index].title;
                    this.info.contentText = this.$store.getters.getTabData[this.index].remark;
                    this.info.iconImg = this.$store.getters.getTabData[this.index].titleImageUrl;
                    this.info.hintImg = this.$store.getters.getTabData[this.index].subUrl;
                }
                return this.$store.getters.getTabData;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .top {
        height: 3.83rem;
        position: relative;

        .title {
            padding-top: .86rem;

            img {
                width: .36rem;
                height: .36rem;
            }

            span {
                padding-left: .2rem;
                font-size: .28rem;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
                vertical-align: middle;
            }
        }

        .main_info {
            width: 5.6rem;
            padding: .34rem 0 .4rem 0;
            font-size: .16rem;
            color: rgba(255, 255, 255, 1);
            line-height: .28rem;
        }

        .btn {
            width: 1.58rem;
            height: .46rem;
            line-height: .44rem;
            text-align: center;
            border-radius: .23rem;
            // opacity: 0.4;
            border: 1px solid rgba(255, 255, 255, 0.4);
            transition: all 0.4s;

            &:hover {
                background: linear-gradient(315deg, rgba(255, 119, 43, 1) 0%, rgba(251, 95, 19, 1) 100%);
                // opacity: 1;
                border-color: rgba(0, 0, 0, 0);

                span {
                    color: #fff;
                }
            }

            span {
                font-size: .16rem;
                font-weight: 500;
                color: rgba(255, 255, 255, 0.7);
            }
        }

        .steps {
            position: absolute;
            top: 0.9rem;
            right: .55rem;

            &.top-50 {
                top: .5rem;
            }

            img {
                width: 4.88rem;
                height: 3.53rem;
            }
        }
    }
</style>