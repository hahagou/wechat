<template>
	<u-tabbar 
		v-model="current" 
		height="110rpx"
		icon-size="50"
		active-color="#E04356"
		:list="tabbar"></u-tabbar>
</template>

<script>
	export default {
		data() {
			return {
				tabbar: [],
				current: 0
			};
		},
		mounted() {
			this.tabbar = this.$store.state.vuex_tabbar
		}
	}
</script>

<style lang="scss">
</style>
