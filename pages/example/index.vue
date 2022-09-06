<template>
	<view class="example">
		<list-tab  @switchTab="changeTab" />
		<list-example ref="listExample" />
		<tabbar />
	</view>
</template>

<script>
	import listTab from './children/list-tab.vue'
	import listExample from './children/list-example.vue'
	import tabbar from '@/components/tabbar.vue'
	export default {
		
		onLoad(options){
			
			
			
		},		
		data() {
			return {
				 
				category:''
			};
		},
		components:{
			listTab,
			listExample,
			tabbar
		},
		methods:{
			changeTab(e){								
				this.category = e.tab.options				 		
				this.$refs.listExample.reload(this.category)
			}
		},
		onPullDownRefresh() {
			this.$refs.listExample.reload(this.category)
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},1000)
		},
		onReachBottom() {
			this.$refs.listExample.nextPage()
		}
	}
</script>

<style lang="scss" scoped>

</style>
