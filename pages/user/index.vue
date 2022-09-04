<template>
	<view class="index">
		<sdc-header />
		<!-- <sdc-order ref="order" /> -->
		<tabbar />
	</view>
</template>

<script>
	import sdcHeader from './children/sdc-header.vue'
	/* import sdcOrder from './children/sdc-order.vue' */
	import tabbar from '@/components/tabbar.vue'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			sdcHeader,
			tabbar,
			/* sdcOrder */
		},
		
		/* ,
		onReachBottom() {
			this.$refs.order.nextPage() 
		} */
	}
</script>

<style lang="scss">

</style>
