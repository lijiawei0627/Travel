<template>
  <div class="wrap">
    <span class="iconfont back-icon">&#xe624;</span>
    <div class="conent">
      <span class="iconfont search">&#xe632;</span>
      <input type="text" placeholder="输入城市/游玩景点/主题">
    </div>
    <div class="city">
      <span class="name">{{this.city}}</span>
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  .wrap
    height: 43px
    display: flex
    background-color: #00bcd4
    .back-icon
      color: #fff
      width: 32px
      text-align: center
      height: 43px
      line-height: 43px
    .conent
      font-color: #ccc
      flex: 1
      height: 35px
      background-color: #fff
      margin: 4px 0 4px 0
      border-radius: 6px
      padding-left: 3px
      .search
        line-height: 35px
      input 
        height: 20px
        border: 0px
        outline: none
    .city
      color: #fff
      font-size: 14px
      text-align: center
      width: 54px
      height: 31px
      margin: 6px 0 6px 0
      line-height: 31px
</style>
