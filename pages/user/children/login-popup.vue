<template>
	<view>
		<u-popup v-model="show" mode="bottom" border-radius="8" height="400">
			<view class="content u-flex-col">
				<view class="title u-flex u-row-center">
					<text>微信授权登录</text>
				</view>
				<view class="info u-flex-col">
					<text>申请获取以下权限</text>
					<text>获得你的公开信息(昵称、头像等)</text>
				</view>
				<view class="buttons u-flex">
					<u-button 
						class="submit"
						:loading="loading"
						open-type="getUserInfo" 
						withCredentials="true" 
						lang="zh_CN" 
						@getuserinfo="wxGetUserInfo"
						>确认授权</u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				nickName: null,
				avatarUrl: null,
				isCanUse: uni.getStorageSync('isCanUse') || true, //默认为true
				loading: false
			};
		},
		methods: {
			showModal(){
				this.show = true
			},
			wxGetUserInfo() {  console.log('wxGetUserInfo')
				this.getUserInfo().then((res)=>{
					this.nickName = res.userInfo.nickName
					this.avatarUrl = res.userInfo.avatarUrl
					try{
						uni.setStorageSync('isCanUse',false)
						this.isCanUse = false
						this.login()
					}catch(e){
						//TODO handle the exception
						
					}
				})
			},
			// 请求服务器
			third(res){
				this.$api.user.third({
					code: res.code,
					avatarUrl: this.avatarUrl,
					nickName: this.nickName
				})
				.then(res=>{
					if(res.code == 1){
						this.$store.commit('login',res.data)
						this.loading = false
						this.show = false
						// 重新加载订单
						uni.$emit('update_orders')
					}else{
						this.$u.toast(res.msg)
					}
				})
			},
			//登录
			login() {
				if(this.isCanUse) return
				this.loading = true
				this.uniLogin().then(res=>{
					this.third(res)
				})
			},
			getUserInfo(){
				return new Promise((resolve,reject)=>{
					uni.getUserInfo({
						success(res) {
							resolve(res)
						},
						fail(err) {
							reject(err)
						}
					})
				})
			},
			uniLogin(){
				return new Promise((resolve,reject)=>{
					uni.login({
						success(res) {
							resolve(res)
						},
						fail(err) {
							reject(err)
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.title{
			font-size: $uni-font-size-subtitle;
			width: 100%;
			border-bottom: 1rpx solid $uni-border-color-grey;
			height: 100rpx;
			font-weight: 600;
		}
		.info{
			padding: $uni-spacing-col-base $uni-spacing-row-base;
			text:first-child{
				font-size: $uni-font-size-paragraph;
				font-weight: 600;
				color: $uni-text-color;
			}
			text:last-child{
				font-size: $uni-font-size-sm;
				color: $uni-text-color-grey;
				padding-top: $uni-spacing-col-sm;
			}
		}
		.buttons{
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			.submit{
				width: 100%;
				
			}
		}
	}
</style>
