import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import HttpCache from '@/common/cache.js'
let lifeData = {};

try{
	// 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
	lifeData = uni.getStorageSync('lifeData');
}catch(e){
	
}

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['vuex_user', 'vuex_token'];

// 保存变量到本地存储中
const saveLifeData = function(key, value){
	// 判断变量名是否在需要存储的数组中
	if(saveStateKeys.indexOf(key) != -1) {
		// 获取本地存储的lifeData对象，将变量添加到对象中
		let tmp = uni.getStorageSync('lifeData');
		// 第一次打开APP，不存在lifeData变量，故放一个{}空对象
		tmp = tmp ? tmp : {};
		tmp[key] = value;
		// 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
		uni.setStorageSync('lifeData', tmp);
	}
}

const user_account = HttpCache.get('user_account')
const global_config = HttpCache.get('global_config')
const store = new Vuex.Store({
	state: {
		userdetail:{},// by andy.ma  用于用户资料修改中的传值
		userinfo: user_account ? user_account : {},
		token: user_account['token'] ? user_account['token'] : null,
		hasLogin: user_account ? true : false,
		global_config: global_config ? global_config : {},
		vuex_tabbar: [
			{
				iconPath: "/static/tabbar/home.png",
				selectedIconPath: "/static/tabbar/home_selected.png",
				text: '首页',
				pagePath: '/pages/index/index'
			},
			{
				iconPath: "/static/tabbar/service.png",
				selectedIconPath: "/static/tabbar/service_selected.png",
				text: '会员',
				// midButton: true,
				pagePath: '/pages/userlst/index'
			},
			
			{
				iconPath: "/static/tabbar/example.png",
				selectedIconPath: "/static/tabbar/example_selected.png",
				text: '私人定制',
				pagePath: '/pages/example/index'
			},
			{
				iconPath: "/static/tabbar/me.png",
				selectedIconPath: "/static/tabbar/me_selected.png",
				text: '我的',
				pagePath: '/pages/user/index'
			}
		],		
		sum:0
	},
	mutations: {
		
		set_userdetail(state,userdetail){ //by andy.ma
			state.userdetail=userdetail
		},
		
		login(state,user){
			state.hasLogin = true
			state.token = user.userinfo.token
			state.userinfo = user.userinfo
			HttpCache.put('user_account',user.userinfo)
		},
		logout(state){
			state.hasLogin = false
			state.token = null
			state.userinfo = {}
			HttpCache.remove('user_account')
		},
		changeUser(state,user){
			state.user = user
			HttpCache.put('user_account',user)
		},
		saveConfig(state,config){
			state.global_config = config
		},
		$uStore(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			let nameArr = payload.name.split('.');
			let saveKey = '';
			let len = nameArr.length;
			if(len >= 2) {
				let obj = state[nameArr[0]];
				for(let i = 1; i < len - 1; i ++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[len - 1]] = payload.value;
				saveKey = nameArr[0];
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value;
				saveKey = payload.name;
			}
			// 保存变量到本地，见顶部函数定义
			saveLifeData(saveKey, state[saveKey])
		},
		
		JIA(state,n){  // for understanding VUEX
		  console.log("mutation 里的 JIA 被调用了")	
          state.sum+=n
		  console.log("state.sum is:",state.sum)
		}
	},
	getters:{
		userinfo(state){
			return state.userinfo
		},
		userdetail(state){ // by andy.ma  保存搜索条件
			return state.userdetail
		}
		,
		hasLogin(state){
			return state.hasLogin
		}
	},
	actions: {
		// 初始化配置
		appInit({
			commit
		},that){
			return new Promise((resolve,reject)=>{
				that.$api.global.config()
				.then(res=>{
					if(res.code == 1){
						commit('saveConfig',res.data)
						HttpCache.put('global_config',res.data)
						resolve(res)
					}else{
						reject(res)
					}
				})
				.catch(err=>{
					reject(err)
				})
			})
		},
		// 判断是否内页
		isInPage({
			state
		},path){
			return new Promise((resolve,reject)=>{
				let has = false
				state.vuex_tabbar.forEach((item)=>{ //console.log(item.pagePath)
					if(item.pagePath == path.split('?')[0])
						has = true
				})
				//console.log("has:",has)
				has ? resolve() : reject()
			})
		},
		
		jia(contex,value){ // for understanding VUEX
			
		//	console.log("from serch-popup.jia",contex)
			contex.commit('JIA',value)
		}
		
			
	}
})

export default store
