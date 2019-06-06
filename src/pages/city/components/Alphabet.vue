<template>
    <ul  class="wrapper">
      <li class="city-alph" v-for="item in letters" :key="item">{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      var result = []
      for (let item in this.cities) {
        result.push(item)
        console.log(item)
      }
      return result
    } 
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position: absolute
  top: 150px
  right: 0
  width: 20px
  .city-alph
    list-style: none 
    font-size: 14px
    color: #00bcd4
    text-align: center
    line-height: 22px
</style>
