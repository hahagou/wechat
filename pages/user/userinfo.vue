<template>
	<view class="userinfo">
		<sdc-userinfo />
	</view>
</template>

<script>
	import sdcUserinfo from './children/sdc-userinfo.vue' 
	export default {
		data() {
			return {
				
			};
		},
		components: {
			 sdcUserinfo
		}
	}
</script>

<style lang="scss" scoped>

</style>
