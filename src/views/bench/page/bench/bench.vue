<template>
  <!-- 首页 -->
  <div class="first_page">
    工作台主页
    <fixed-right />
  </div>

</template>
<script>
  import fixedRight from '@/components/fixedRight'
  export default {
    components: {
      fixedRight
    },
    data() {
      return {

      }
    },
    created() {
      console.log('工作台');
    }
  }

</script>