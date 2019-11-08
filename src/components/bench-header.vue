<template>
  <div>
    <div class="header">

    </div>
    <div class="bench-bg">
      <div class="bench-container container">
        <div class="bench-left">

        </div>
        <div class="bench-right">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

    data() {
      return {

      }
    },
    created() {
      console.log('工作台');
    }
  }

</script>
<style lang="scss">
  /* 工作台头部 */
  .header {
    height: 1.4rem;
    width: 100%;
    background-color: #fff;
    border: 1px solid $mc;
  }

  .bench-container {
    padding-top: .6rem;
    padding-bottom: .5rem;
    min-height: 15rem;
    display: flex;
    align-items: stretch;

    .bench-left {
      width: 2.5rem;
      border: 1px solid #0f0;
    }

    .bench-right {
      width: 9.5rem;
      border: 1px solid #00f;
    }
  }

</style>
