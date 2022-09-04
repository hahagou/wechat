<template>
	<view class="userinfo">
	 
		<sdc-work :uid="userId" ref="work" /> 
	
		
	</view>
</template>
<script>
	import sdcWork from './children/sdc-work.vue' 
	export default {
		
		onLoad(options) {
			this.userId = options.id			 
		},
		mounted(options) { 
			this.$refs.work.loadDetail(this.userId)
		},
		data() {
			return {
				userId:0			
			};
		},
		components: {
			 sdcWork
		}
	}
</script>