export default {
  changeCity (state, city) {
    state.city = city
  },
  changeStatus (state, status) {
    state.hasData = status
  },
  changeShow (state, shows) {
    state.show = shows
  }
}