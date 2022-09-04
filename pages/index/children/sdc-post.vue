<template>
	<view class="post-box">
		<view class="bar u-flex u-row-between u-col-center">
			<text class="title">最新新闻</text>
			<u-icon name="more-dot-fill" class="more" @click="toMore"></u-icon>
		</view>
		<view class="items">
			<post-item v-for="item,index in posts" :post="item" :key="index" />
		</view>
	</view>
</template>

<script>
	import postItem from '@/components/post-item.vue'
	export default {
		data() {
			return {
				posts:[]
			};
		},
		methods:{
			loadPosts(){
				this.$api.post.index()
				.then(res=>{
					if(res.code == 1){
						this.posts = res.data.data.slice(0,3)
					}
				})
			},
			toMore(){
				uni.switchTab({
					url: '/pages/post/index'
				})
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
	.post-box{
		width: 750rpx;
		min-height: 300rpx;
		background-color: $uni-bg-color;
		padding: $uni-spacing-row-sm;
		margin-top: $uni-spacing-col-base;
		border-radius: $uni-border-radius-base;
		.bar{
			height: 80rpx;
			border-bottom: 1rpx solid $uni-border-color-grey;
			.title{
				color: $uni-text-color;
				font-size: $uni-font-size-subtitle;
				line-height: 76rpx;
				border-bottom: 4rpx solid $uni-color-primary;
			}
			.more{
				color: $uni-color-primary;
				font-size: 50rpx;
			}
		}
	}
</style>
