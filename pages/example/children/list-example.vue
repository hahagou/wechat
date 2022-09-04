<template>
	<view class="list-example">
		<view class="items u-flex u-row-between u-flex-wrap">
			<example-item v-for="item,index in list" :key="index"  :example="item"/>
		</view>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	import exampleItem from '@/components/example-item.vue'
	export default {
		data() {
			return {
				list:[],
				page:1,
				status: 'loadmore',
				category:''
			};
		},
		methods:{
			loadExamples(){
				if(this.status == 'nomore')
					return
				this.status = 'loading'
				this.$api.example.index({
					category: this.category,
					page: this.page
				})
				.then(res=>{
					if(res.code == 1 && res.data.data.length > 0){
						this.list = this.list.concat(res.data.data)
						this.status = 'loadmore'
					}else{
						this.status = 'nomore'
					}
				})
			},
			nextPage(){
				this.page = this.page + 1
				this.loadExamples()
			},
			reload(category = null){
				this.category = category
				this.page = 1
				this.status = 'loadmore'
				this.list = []
				this.loadExamples()
			}
		},
		mounted() {
			this.loadExamples()
		},
		components:{
			exampleItem
		}
	}
</script>

<style lang="scss">
	.items{
		padding: 0 $uni-spacing-row-base;
		background-color: $uni-bg-color;
		margin-top: $uni-spacing-col-base;
		.item:last-child{
			// justify-self: flex-start;
		}
	}
</style>
