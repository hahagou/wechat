<template>
	<view class="modal-mobile">
		<u-modal v-model="show" 
			@confirm="confirm" 
			@cancel="cancel"
			:content="content" 
			title="绑定手机号" 
			:show-cancel-button="true" 
			:async-close="true"
			>
			<template v-slot:confirm-button>
				<u-loading mode="circle" :show="isLoading"></u-loading>
				<button open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber" >确定</button>
			</template>
		</u-modal>
		<u-toast ref="toast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				content: '是否确定绑定您的手机号?',
				isLoading: false
			};
		},
		methods: {
			confirm(){
				this.isLoading = true
			},
			showModal(){
				this.show = true
			},
			cancel(){
				this.isLoading = false
			},
			onGetPhoneNumber(e){
				console.log(e)
				if(e.detail.errMsg=="getPhoneNumber:fail user deny"){       //用户决绝授权  
					
					//拒绝授权后弹出一些提示   微信官方规定：非个人开发者才可以调用此接口
					
				}else{      //允许授权  
					this.change_mobile(e.detail)
				}  
			},
			change_mobile(detail){
				// encryptedData: detail.encryptedData,
				// iv: detail.iv
				// let user = this.userinfo
				// user.mobile = res.data.phoneNumber
				// this.$store.commit('changeUser',user)
					
				//console.log(detail)	
					
				this.$api.user.mpChangeMobile({
					encryptedData: detail.encryptedData,
					iv: detail.iv
				})
				.then(res=>{
					if(res.code == 1){
						let user = this.userinfo
						user.mobile = res.data.phoneNumber
						this.$store.commit('changeUser',user)
						this.show = false
						this.$refs.toast.show({
							title: '手机号绑定成功',
							type: 'success'
						})
					}
				})
			}
		},
		computed: {
			userinfo(){
				return this.$store.getters.userinfo
			}
		}
	}
</script>

<style lang="scss">
	
</style>
