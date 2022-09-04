<template>
	<view class="detail">
		<sdc-detail ref="detail" />
		<back-top :scrollTop="scrollTop" />
	</view>
</template>

<script>
	import sdcDetail from './children/sdc-detail.vue'
	import backTop from '@/components/back-top.vue'
	export default {
		data() {
			return {
				userId:0,
				scrollTop: 0
			};
		},
		components:{
			sdcDetail,
			backTop
		},
		onLoad(options) {
			this.userId = options.id
		},
		mounted(options) { 
			this.$refs.detail.loadDetail(this.userId)
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style lang="scss" scoped>
	

	
	
	
	

</style>
