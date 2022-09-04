module.exports = {
	home: {
		swiper: {
			url: 'api.carousel/index',
			auth: false
		},
		tab: {
			url: 'api.tab/index',
			auth: false
		} 
	},
	service: {
		index: {
			url: 'api.service/index',
			auth: false
		}
	},
	post: {
		index: {
			url: 'api.post/index',
			auth: false
		},
		detail: {
			url: 'api.post/show',
			auth: false
		}
	},
	example: {
		index: {
			url: 'api.example/index',
			auth: false
		},
		detail: {
			url: 'api.example/show',
			auth: false
		}
	},
	user: {
		third: {
			url: 'api.user/third',
			auth: false
		},
		mpChangeMobile: {
			url: 'api.user/mpchangemobile',
			auth: true
		},
		orders: {
			url: 'api.user/orders',
			auth: true
		},
		detail: {
			url: 'api.user/show',
			auth: false
		},
		nickname:{ //校验昵称  by andy.ma
			
			url: 'api.user/nickname',
			auth: false
			
		},		
		edit:{ //修改用户资料  by andy.ma
		   	
			url: 'api.user/edit',
			auth: true
		},
		index:{ //用户列表
			url: 'api.user/index',
			auth: false			
		}
		
	},
	order: {
		add: {
			url: 'api.order/add',
			auth: true
		}
	},
	message: {
		add: {
			url: 'api.message/add',
			auth: true
		},
		index: {
			url: 'api.message/index',
			auth: false
		}
	},
	global: {
		config: {
			url: 'api.index/config',
			auth: false
		}
	}
}