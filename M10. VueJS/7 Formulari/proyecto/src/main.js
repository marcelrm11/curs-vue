import Vue from 'vue'
import App from './App.vue'
import 'jquery'
import $ from 'jquery'

Vue.config.productionTip = false

Vue.directive('tooltip', function(el, binding){
  $(el).tooltip({
           title: binding.value,
           placement: binding.arg,
           trigger: 'hover'             
       })
})

new Vue({
  render: h => h(App),
}).$mount('#app')
