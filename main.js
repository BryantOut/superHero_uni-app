import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.serverUrl = "https://www.imovietrailer.com/superhero"; // 生产环境
// Vue.prototype.serverUrl = "https://www.imovietrailer-dev.com/superhero"; // 开发环境

Vue.prototype.getGlobalUser = function(key) {
	let globalUser = uni.getStorageSync('globalUser')
	if (globalUser !== null && globalUser !== '' && globalUser !== undefined) {
		return globalUser
	} else {
		return null
	}
}

<<<<<<< HEAD
// import VueLazyload  from "vue-lazyload"
// Vue.use(VueLazyload, {
//   src: 'https://webimg.yangk6668.com/webimg/m/img/image/defunt_pic.gif',
//   error: require('./static/icos/defunt_pic.gif'),
//   loading: require('./static/icos/defunt_pic.gif')
// })
// Vue.use(VueLazyload
// )
=======
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8

App.mpType = 'app'

const app = new Vue({

	...App
})
app.$mount()
