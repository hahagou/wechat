<template>
	<view class="index">
		<sdc-search />
		<sdc-swiper />
		<sdc-tab />		
		<sdc-user /> 
			 
		<tabbar />
	</view>
</template>

<script>
	import sdcSwiper from './children/sdc-swiper.vue'
	import sdcTab from './children/sdc-tab.vue'	
	import tabbar from '@/components/tabbar.vue'
	import sdcUser from './children/sdc-user.vue'
    import SdcSearch from './children/sdc-search.vue'
    
	
	import {mapActions} from 'vuex'
	export default {
		
		methods: {
			...mapActions(['appInit'])
		},
		onPullDownRefresh() {
			Promise.all([this.appInit(this)])
			.then(()=>{
				uni.stopPullDownRefresh()
			})
		},
		components:{
			sdcSwiper,
			sdcTab, 		
			sdcUser,
			SdcSearch,
			tabbar
		},
		onShareAppMessage(){
			
			
		} 
	}
</script>

<style lang="scss" scoped>
	
	
	
</style>
