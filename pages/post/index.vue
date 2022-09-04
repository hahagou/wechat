<template>
	<view class="index">
		<list-tab @switchTab="changeTab" /> 
		<list-post ref="listPost"/>
		<tabbar />
	</view>
</template>

<script>
	import listTab from './children/list-tab.vue'
	import listPost from './children/list-post.vue'
	import tabbar from '@/components/tabbar.vue'
	export default {
		data() {
			return {
				category:''
			}
		},
		methods: {
			changeTab(e){
				this.category = e.tab.options
				this.$refs.listPost.reload(this.category)
			}
		},
		components:{
			listTab,
			listPost,
			tabbar
		},
		onPullDownRefresh() {
			this.$refs.listPost.reload(this.category)
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},1000)
		},
		onReachBottom() {
			this.$refs.listPost.nextPage()
		}
	}
</script>

<style lang="scss">

</style>
