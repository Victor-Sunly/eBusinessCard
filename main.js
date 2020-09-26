import Vue from 'vue'
import App from './App'

require('./utils/plugins.js')

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
