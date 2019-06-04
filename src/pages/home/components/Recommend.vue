<template>
  <div>
    <div class="hot">热销推荐</div>
    <div class="wrap" v-for="item in list" :key="item.id">
      <img :src=item.imgUrl class="img">
      <div class="travel">
        <span class="title">{{item.title}}</span>
        <span class="desc">{{item.desc}}</span>
        <button>查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.hot
  background-color: #eeeeee
  color: #333
  height: 40px
  line-height: 45px
  padding-left: 5px
  padding-bottom: 4px
  font-size: 14px
.wrap
  height: 100px
  width: 100%
  border-bottom: 1px solid #cccccc
  img
    float: left 
    width: 95px
    height: 95px
    background-size: cover
    margin: 0 0 3px 3px
  .travel
    margin-left: 100px
    margin-top: 5px
    .title
      padding-top: 5px
      display: block
      margin-left: 3px
    .desc
      display: block
      margin-left: 3px
      font-size: 14px
      color: #ccc
      margin-top: 2px
      padding-top: 5px
    button
      outline: none
      margin-top: 13px
      background: #ff9300
      padding: 0 8px
      border-radius: 5px
      color: #fff
      border-style: none
      margin-left: 3px
      height: 21.6px
      line-height: 21.6px
</style>
