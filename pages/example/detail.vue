<template>
	<view class="detail">
		<only-back bottom="300" size="37" right="43"  />
		<sdc-detail ref="detail" />
		<back-top :scrollTop="scrollTop" />
	</view>
</template>

<script>
	import sdcDetail from './children/sdc-detail.vue'
	import backTop from '@/components/back-top.vue'
	import onlyBack from '@/components/only-back.vue'
	export default {
		data() {
			return {
				exampleId:0,
				scrollTop:0
			};
		},
		components:{
			sdcDetail,
			backTop,
			onlyBack
		},
		onLoad(options) {
			this.exampleId = options.id
		},
		mounted(options) { 
			this.$refs.detail.loadDetail(this.exampleId)
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style lang="scss">

</style>
