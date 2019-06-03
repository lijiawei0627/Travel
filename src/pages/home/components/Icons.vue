<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <p v-text="item.desc"></p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  margin-top: 8px
  width: 100%
  height: 0
  .icon
    float: left
    width: 25%
    overflow: hidden
  img 
    display: block
    width: 70%
    margin: 0 auto
  p
    font-size: 14px
    text-align: center
    margin-top: 4px
</style>
