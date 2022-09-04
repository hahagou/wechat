<template>
	<view class="header">
		<view class="content u-flex u-row-center">
			<!-- 未登录 -->
			<view class="avatar-nologin u-flex-col u-col-center" @click="clickLogin" v-show="!hasLogin">
				<u-avatar size="160" class="avatar"></u-avatar>
				<text>点击登录</text>
			</view>
			<!-- 已登录 -->
			<view class="avatar-nologin u-flex-col u-col-center" @click="toUserInfo" v-show="hasLogin">
				<u-avatar size="160" class="avatar" :src="userinfo.avatar"></u-avatar>
				<text>{{userinfo.nickname}}</text>
			</view>
		</view>
		<login-popup ref="popup"/>
	</view>
</template>

<script>
	import loginPopup from './login-popup.vue'
	export default {
		data() {
			return {
				loginShow: false
			};
		},
		methods:{
			clickLogin(){
				this.$refs.popup.showModal()
				
			},
			toUserInfo(){
				uni.navigateTo({
					url: '/pages/user/userinfo'
				})
			}
		},
		computed: {
			hasLogin(){
				return this.$store.getters.hasLogin
			},
			userinfo(){
				console.log(this.$store.getters.userinfo)
				return this.$store.getters.userinfo
			}
		},
		components:{
			loginPopup
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 300rpx;
		background-color: $uni-color-primary;
		&>view{
			font-size: $uni-font-size-base;
			color: $uni-text-color-inverse;
			font-weight: 600;
		}
	}
</style>
