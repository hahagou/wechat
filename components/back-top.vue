<template>
	<u-back-top :scroll-top="scrollTop" icon="arrow-upward" :customStyle="styles" :iconStyle="iconStyle"></u-back-top>
</template>

<script>
	export default {
		props:{
			scrollTop:0
		},
		data() {
			return {
				styles:{
					"backgroundColor": "#FFBCB3"
				},
				iconStyle: {
					"color": "#FFFFFF"
				}
			};
		}
	}
</script>

<style lang="scss">

</style>
