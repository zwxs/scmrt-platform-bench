<template>
    <div class="news">
        <div class="bg-f8">
            <div class="max-container">
                <!-- 头部背景图 -->
                <banner></banner>
            </div>
        </div>
        <!-- 主体新闻内容 -->
        <div class="content container">
            <!-- 热点新闻 -->
            <hotNews></hotNews>
            <!-- 综合专题 + 票据金融+供应链金融 -->
            <special></special>
            <!-- 金融政策 -->
            <!-- <policy></policy> -->
            <!-- 商业保理 -->
            <insurance></insurance>
            <!-- 融资租赁+ 企业信用贷 -->
            <flpecl></flpecl>
        </div>
        <fixed-right />
    </div>
</template>

<script>
    import {
        banner,
        hotNews,
        special,
        insurance,
        flpecl
    } from './components'
    import fixedRight from '../index/components/fixedRight.vue'
    export default {
        components: {
            banner,
            hotNews,
            special,
            insurance,
            flpecl,
            fixedRight
        },
        data() {
            return {

            }
        },
        created() {
            this.$store.dispatch('news/getQueryNews')
        },
        methods: {

        },
    }
</script>

<style lang="scss">
    .news {
        .content {
            padding: .8rem 0;
        }

        .date {
            color: $mc6;
        }
    }
</style>