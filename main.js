import Vue from 'vue'
import App from './App'
import uView from './uview-ui'
import httpInterceptor from '@/common/http.interceptor.js'
import Api from '@/common/http.api.js'
import ApiPath from '@/common/http.path.js'
import Cache from '@/common/cache.js'
// 此处为演示vuex使用，非uView的功能部分
import store from '@/store'

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js')

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(uView)

Vue.prototype.$apiPath = ApiPath 

// 缓存管理
Vue.prototype.$httpCache = Cache

const app = new Vue({
    ...App,
	store
})

// http拦截器
Vue.use(httpInterceptor,app)

// Api 集中管理
Vue.use(Api,app)



Vue.mixin(vuexStore)

app.$mount()
