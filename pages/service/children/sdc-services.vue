<template>
	<view class="services">
		<view class="items">
			<view class="item" v-for="item,index in services" :key="index">
				<service-card :item="item" @clickOrder="clickOrder" />
			</view>
		</view>
		<service-popup ref="popup"/>
		<u-toast ref="toast"/>
	</view>
</template>

<script>
	import serviceCard from './service-card.vue'
	import servicePopup from './service-popup.vue'
	export default {
		data() {
			return {
				page: 1,
				services:[],
				noMore: false
			};
		},
		methods:{
			loadServices(){
				this.$api.service.index({page:this.page})
				.then(res=>{
					let result = res.data.data
					if(res.code == 1 && result.length >0){
						this.services = this.services.concat(result)
					}else{
						this.noMore = true
					}
				})
			},
			clickOrder(e){
				if(this.hasLogin){
					this.$refs.popup.showPopup(e.item)	
				}else{
					this.$refs.toast.show({
						title: '请先登录',
						type: 'warning',
						callback: ()=>{
							uni.switchTab({
								url: '/pages/user/index'
							})
						}
					})
				}	
			},
			nextPage(){
				if(this.noMore)  return 
				this.page = this.page + 1
				this.loadServices()
			},
			reload(){
				this.page = 1;
				this.services = [];
				this.noMore = false;
				this.loadServices()
				uni.stopPullDownRefresh()
			}
		},
		mounted() {
			this.loadServices()
		},
		components:{
			serviceCard,
			servicePopup
		},
		computed: {
			hasLogin(){
				return this.$store.getters.hasLogin
			}
		}
	}
</script>

<style lang="scss">
	.services{
		
	}
	.items{
		display: flex;
		flex-direction: column;
	}
</style>
