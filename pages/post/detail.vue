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
				postId:0,
				scrollTop: 0
			};
		},
		components:{
			sdcDetail,
			backTop
		},
		onLoad(options) {
			this.postId = options.id
		},
		mounted(options) { 
			this.$refs.detail.loadDetail(this.postId)
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style lang="scss">

</style>
