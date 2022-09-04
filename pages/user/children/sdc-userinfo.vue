<template>
	<view class="userinfo">
		<u-cell-group>
			<u-cell-item title="头像" @click="" :arrow="false">
				<template v-slot:right-icon>
					<u-avatar :src="userinfo.avatar" size="70"></u-avatar>
				</template>
			</u-cell-item>
			<u-cell-item title="昵称" :arrow="false">
				<text>{{userinfo.nickname}}</text>
			</u-cell-item>
			<u-cell-item title="用户名" :arrow="false">
				<text>{{userinfo.username}}</text>
			</u-cell-item>
				
			<u-cell-item title="手机号" :arrow="false" v-show="userinfo.mobile.length > 0">
				<text>{{userinfo.mobile}}</text>
			</u-cell-item>
			
			
			<u-cell-item title="基本资料" :arrow="false" @click="toUserInfoEdt(userinfo)">
				<text>点击完善资料</text>
			</u-cell-item>
			
				
			<u-cell-item title="内心独白" :arrow="false" @click="toHeartEdt(userinfo)">
				<text>点击完善资料</text>
			</u-cell-item>
			
			
			
			<u-cell-item title="工作经济家庭" :arrow="false" @click="toWorkEdt(userinfo)">
				<text>点击完善资料</text>
			</u-cell-item>
			
			
			<u-cell-item title="手机号" :arrow="false" v-show="userinfo.mobile.length == 0" @click="showModal">
				<text>点击绑定手机号</text>
			</u-cell-item>
			
			
			
		</u-cell-group>
		<userinfo-modal-mobile ref="userinfoModalMobile" />
		<view class="buttons u-flex u-row-center">
			<view class="btn-logout">
				<button @click="clickLogout">退出登录</button>
			</view>
		</view>
		
		<u-toast ref="toast"></u-toast>
	</view>
</template>

<script>
	import userinfoModalMobile from './userinfo-modal-mobile.vue'
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			showModal(){
				this.$refs.userinfoModalMobile.showModal()
			},
			clickLogout(){
				
				this.$refs.toast.show({
					title: '退出成功',
					type: 'success',
					callback: () =>{
						uni.switchTab({
							url: '/pages/user/index'
						})
						this.$store.commit('logout')
					}
				})
				
				
			},
			
			
			toUserInfoEdt(item){
				uni.navigateTo({
					url: '/pages/user/userinfoedt?id='+item.id
				})
			},
			
			toHeartEdt(item){
				uni.navigateTo({
					url: '/pages/user/heartedt?id='+item.id
				})				
			},
			
			toWorkEdt(item){
				
				uni.navigateTo({
					url: '/pages/user/workedt?id='+item.id
				})
			}
			
			
			
		},
		computed: {
			userinfo(){
				return this.$store.getters.userinfo
			}
		},
		components: {
			userinfoModalMobile
		}
	}
</script>

<style lang="scss" scoped>
	.buttons{
		position: fixed;
		bottom: $uni-spacing-col-base;
		left: 0;
		right: 0;
		.btn-logout{
			width: 700rpx;
			button{
				background-color: $uni-color-primary;
				color: $uni-text-color-inverse;
				font-size: $uni-font-size-base;
			}
		}
	}
</style>
