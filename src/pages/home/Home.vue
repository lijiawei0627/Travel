<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style lang="stylus" scoped>
body
  margin: 0
  padding: 0
</style>
