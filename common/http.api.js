import httpPath from './http.path'

const install = (Vue,vm) => {
	
	let api = {}
	api.home = {
		swiper: () => vm.$u.get(httpPath.home.swiper.url,{category:'home'}), // 首页轮播图
		tab: () => vm.$u.get(httpPath.home.tab.url,{category:'home'}) // 首页tab
	}
	api.service = {
		index: (options = {}) => vm.$u.get(httpPath.service.index.url,options) // 服务列表
	}
	api.post = {
		index: (options = {}) => vm.$u.get(httpPath.post.index.url,options), // 文章列表
		tab: () => vm.$u.get(httpPath.home.tab.url,{category:'post'}), // 文章tab
		detail: (id) => vm.$u.get(httpPath.post.detail.url,{id}), // 文章详情
	}
	api.example = {
		index: (options = {}) => vm.$u.get(httpPath.example.index.url,options), // 案例列表
		tab: () => vm.$u.get(httpPath.home.tab.url,{category:'example'}), // 案例tab
		detail: (id) => vm.$u.get(httpPath.example.detail.url,{id}), // 案例详情
	}
	api.user = {
		third: (options) => vm.$u.get(httpPath.user.third.url,options), // 第三方登录
		mpChangeMobile: (options) => vm.$u.post(httpPath.user.mpChangeMobile.url,options), // 自动绑定手机号
		orders: (options) => vm.$u.get(httpPath.user.orders.url,options),// 获取用户订单
				
		index: (options = {}) => vm.$u.get(httpPath.user.index.url,options), //获取用户列表 by andy.ma
		detail: (id) => vm.$u.get(httpPath.user.detail.url,{id}), // 获取会员详情  by andy.ma
		
		edit: (options) => vm.$u.post(httpPath.user.edit.url,options), //修改会员基本资料  by andy.ma
		nickname: (options = {}) => vm.$u.post(httpPath.user.nickname.url,options)
	}
	api.order = {
		add: (options) => vm.$u.post(httpPath.order.add.url,options), // 下单
	}
	api.message = {
		add: (options) => vm.$u.post(httpPath.message.add.url,options), // 添加留言
		index: (options) => vm.$u.get(httpPath.message.index.url,options), // 留言列表
	}
	api.global = {
		config: () => vm.$u.get(httpPath.global.config.url), // 获取配置
	}
	Vue.prototype.$api = api
}
export default {install}