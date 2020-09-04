import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

var bus = new Vue(); //兄弟组件通信是使用

Vue.prototype.bus = bus;

App.mpType = 'app'

const app = new Vue({
	...App,
})
app.$mount()
