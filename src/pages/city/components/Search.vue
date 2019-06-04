<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "CitySearch",
  mounted() {
    // this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
.search
  margin: 0
  background-color: #00bcd4
  height: 37px
  input
    font-size: 14px
    height: 31px
    line-height: 31px
    width: 95.5%
    display: block
    margin: 0px auto
    padding: 0 5px
    border-style: none 
    outline: none 
    border-radius: 3px
    text-align: center
</style>
