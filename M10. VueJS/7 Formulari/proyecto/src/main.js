import Vue from 'vue'
import App from './App.vue'
import 'jquery'
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.directive('tooltip', function(el, binding){
  $(el).tooltip({
           title: binding.value,
           placement: binding.arg,
           trigger: 'focus'             
       })
})

new Vue({
  render: h => h(App),
}).$mount('#app')
