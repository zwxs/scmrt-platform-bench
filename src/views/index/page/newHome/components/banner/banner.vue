<template>
    <!-- 新闻资讯头部背景图 -->
    <div class="banner">
        <div class="container">
            <div class=" text">
                <h1 class="title fs48 mb-10">新闻资讯</h1>
                <p class="fs24">热点资讯，聚焦金融视点</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .banner {
        position: relative;
        height: 3rem;
        min-width: 12rem;
        background-image: url('../images/news_bg.png');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        .container{
            height: 100%;
        }
        .text {
            line-height: .5rem;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%)
        }
    }
</style>