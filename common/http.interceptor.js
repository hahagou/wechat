import httpPath from './http.path.js'
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明  https://www.xcyintel.com   https://www.fadmin.com
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'https://www.xcyintel.com/addons/sdcmarry',
		showLoading: false,
		dataType: 'json'
		// 设置自定义头部content-type
		// header: {
		// 	'content-type': 'xxx'
		// }
		// ......
	});
	Vue.prototype.$u.http.interceptor.request = (config) => {
		
		
		let api = getApi(config.url)
		
		if(api.auth){
			let token = vm.$store.state.token
			if (! token) return false
			config.header.token = token
		}
		
		return config;
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	}
	Vue.prototype.$u.http.interceptor.response = (response) => {
		// 如果服务器返回401 就清除本地登录状态
		if(response.code == 401){
			vm.$store.commit('logout')
		}
		return response
	}
}

let getApi = (url) => {
	let apis = Object.values(httpPath)
	let api = {}
	for(let item of apis){
		let apiSubs = Object.values(item)
		for(let itemSub of apiSubs){
			if(itemSub['url'] == url){
				api = itemSub
			}
		}
	}
	return api
}

export default {
	install
}