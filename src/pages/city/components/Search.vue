<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" v-model="keyword">
    <div class="result" v-show="keyword">
      <ul>
        <li v-for="item in list" :key="item.id" class="result-city" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li v-show="hasData">没有搜索到任何相关内容</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapMutations, mapState} from 'vuex'
export default {
  name: "CitySearch",
  mounted() {
    // this.scroll = new Bscroll(this.$refs.search)
  },
  props: {
    cities: Object
  },
  computed: {
    ...mapState(['hasData'])
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: ''
    }
  },
  methods: {
    ...mapMutations(['changeCity', 'changeStatus', 'changeShow']),
    handleCityClick (city) {
      this.changeCity(city)
      this.changeShow(true)
      this.keyword = ''
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        this.changeShow(true)
        return
      }else {
        this.changeShow('')
      }
      var result = []
      this.timer = setTimeout(() => {
        for(let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          });
          this.list = result
          if (this.list.toString()) {
            this.changeStatus('')
            // this.changeStatus()
            // console.log(result.toString())
          } else{
            this.changeStatus(true)
          }
        }
      }, 200);
    }
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
  .result
    background-color: #ffffff
    ul
      .result-city
        margin-top: 0
        height: 37.6px
        line-height: 37.6px
        font-size: 14px
        color: #333
        margin-left: -10px
        border-bottom: 0.01rem solid #ccc
      li
        list-style: none;
</style>
