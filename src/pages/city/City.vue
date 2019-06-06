<template>
  <div ref="wrapper">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :list="hotCities" :cities="cities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch  from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted() {
    this.getCityInfo()
  },
  data() {
    return {
      hotCities: [],
      cities: null
    }
  },
  methods: {
    getCityInfo () {
      axios.get('./static/mock/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res =res.data
      if(res.ret && res) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
        console.log(this.hotCities)
        console.log(this.cities)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
