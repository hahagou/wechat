<template>
	<view class="list">
		<sdc-services ref="services" />
		<tabbar />
	</view>
</template>

<script>
	import sdcServices from './children/sdc-services.vue'
	import tabbar from '@/components/tabbar.vue'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			sdcServices,
			tabbar
		},
		onReachBottom() {
			this.$refs.services.nextPage()
		},
		onPullDownRefresh() {
			this.$refs.services.reload()
		}
	}
</script>

<style lang="scss">

</style>
