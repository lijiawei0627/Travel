let defaultData = '上海'
if (localStorage.city) {
  defaultData = localStorage.city
}
export default {
  city: defaultData,
  hasData: true,
  show: true
}