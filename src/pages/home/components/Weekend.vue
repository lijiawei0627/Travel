<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div class="wrap" v-for="item in list" :key="item.id">
      <img :src=item.imgUrl>
      <div class="travel">
        <div class="item-title">{{item.title}}</div>
        <div class="item-desc">{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size: 14px
  padding-left: 9px
  background-color: #eeeeee
  color: #333
  height: 40px
  line-height: 40px
.wrap
  width: 100%
  img
    width: 100%
    background-size: cover
  .travel
    width: 100%
    height: 56.4px
    .item-title
      height: 26.4px
      margin-left: 5px
      color: #333
    .item-desc
      height: 20px
      margin-left: 5px
      color: #cccccc
      font-size: 14px
</style>
