<template>
  <div class="city">
    <span class="iconfont">&#xe624;</span>
    <div class="title">城市选择</div>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
}
</script>

<style lang="stylus" scoped>
.city
  width: 100%
  height: 43px
  background: #00bcd4
  span
    margin-left: 5px
    height: 43px
    float: left
    line-height: 43px
    color: #ffffff
    font-size: 20px
  .title
    width: 100px
    height: 43px
    line-height: 43px
    margin: 0 auto
    color: #ffffff
</style>
