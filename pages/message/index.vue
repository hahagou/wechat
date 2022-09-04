<template>
	<view class="message">
		<sdc-header />
		<sdc-message ref="message"/>
	</view>
</template>

<script>
	import sdcHeader from './children/sdc-header.vue'
	import sdcMessage from './children/sdc-message.vue'
	export default {
		data() {
			return {
				
			};
		},
		components: {
			sdcHeader,
			sdcMessage
		},
		onReachBottom() {
			this.$refs.message.nextPage()
		}
	}
</script>

<style lang="scss">

</style>
