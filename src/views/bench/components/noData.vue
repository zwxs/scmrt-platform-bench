<template>
  <div class="no-data-large">
    <img src="../assets/img/no-data-large.png" alt="">
    <p>暂无数据～</p>
  </div>
</template>
<script>

</script>

<style scoped lang="scss">
  .no-data-large {
    width: 100%;
    height: 5rem;
    position: relative;
    text-align: center;
    padding-top: 1.6rem;

    img {
      // position: absolute;
      // left: 50%;
      // transform: translateX(-50%);
      
    }

    p {
      text-align: center;
      font-size: .16rem;
      color: $mc6;
      padding-top: .1rem;
    }
  }
</style>