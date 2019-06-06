<template>
  <div class="list" ref="wrapper" v-show="show">
    <div>
      <div class="before">当前城市</div>
      <div class="before-city">{{city}}</div>
      <div class="hot">热门城市</div>
      <div class="hot-city" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">
        <div class="city">{{item.name}}</div>
      </div>
      <p class="middle"></p>
      <div class="cities" v-for="(item, index) of cities" :key="index">
        <div class="math">{{index}}</div>
        <div class="math-city" v-for="Inner in item" :key="Inner.id" @click="handleCityClick(Inner.name)">
          <div class="city">{{Inner.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: "CityList",
  computed: {
    ...mapState(['city','show']) 
  },
  props: {
    list: Array,
    cities: Object
  },
  methods: {
    handleCityClick (city) {
      console.log(city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    // this.scroll =new Bscroll(this.$refs.wrapper)
    console.log(this.$refs.wrapper)
    console.log(scroll)
  }
}
</script>

<style lang="stylus" scoped>
.before
  height: 26.4px
  width: 100%
  padding-left: 10px
  background-color: #eeeeee
  font-size: 13px
  color: #666
  line-height: 26.4px
.before-city
  height: 25.6px
  line-height: 25.6px
  width: 30%
  margin: 9px
  text-align: center
  border: 1px solid #ccc
  border-radius: 3px
  color: #333
  font-size: 14px
.hot
  height: 26.4px
  width: 100%
  padding-left: 10px
  background-color: #eeeeee
  font-size: 13px
  color: #666
  line-height: 26.4px
.hot-city
  float: left 
  height: 25.6px
  line-height: 25.6px
  width: 25%
  margin: 9px
  text-align: center
  border: 1px solid #ccc
  border-radius: 3px
  color: #333
  font-size: 14px
.middle
  margin-top: 98px
.cities
  .math
    height: 26.4px
    width: 100%
    padding-left: 10px
    background-color: #eeeeee
    font-size: 13px
    color: #666
    line-height: 26.4px
  .math-city
    margin-top: 0
    height: 37.6px
    line-height: 37.6px
    padding-left: 10px
    font-size: 14px
    color: #333
    border-bottom: 0.01rem solid #ccc
</style>
