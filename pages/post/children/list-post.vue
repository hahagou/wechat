<template>
	<view class="list-post">
		<view class="items">
			<post-item v-for="item,index in list" :key="index"  :post="item"/>
			
			<u-loadmore :status="status" />
		</view>
	</view>
</template>

<script>
	import postItem from '@/components/post-item.vue'
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
			loadPosts(){
				if(this.status == 'nomore')
					return
				this.status = 'loading'
				this.$api.post.index({
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
				this.loadPosts()
			},
			reload(category = null){
				this.category = category
				this.page = 1
				this.status = 'loadmore'
				this.list = []
				this.loadPosts()
			}
		},
		mounted() {
			this.loadPosts()
		},
		components:{
			postItem
		}
	}
</script>

<style lang="scss">
	.items{
		padding: 0 $uni-spacing-row-base;
		background-color: $uni-bg-color;
		margin-top: $uni-spacing-col-base;
	}
</style>
