<template>
  <div id="nav">

    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  mounted () {}
}

</script>
<style lang="scss">
  @import './src/assets/style/reset.scss';
  @import './src/assets/style/common.scss';

  #nav {
    background: cadetblue;
    text-align: center
  }

  #nav>a {
    display: inline;
    padding: 5px 10px;
  }

</style>
