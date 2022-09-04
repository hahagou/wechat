<template>
	<view class="example-box">
		<view class="bar u-flex u-row-between u-col-center">
			<text class="title">最新案例</text>
			<u-icon name="more-dot-fill" class="more" @click="toMore"></u-icon>
		</view>
		<view class="items u-flex u-flex-wrap u-row-between">
			<example-item v-for="item,index in examples" :example="item" :key="index"/>
		</view>
	</view>
</template>

<script>
	import	exampleItem from '@/components/example-item.vue'
	export default {
		data() {
			return {
				examples:[]
			};
		},
		methods:{
			loadPosts(){
				this.$api.example.index()
				.then(res=>{
					if(res.code == 1){
						this.examples = res.data.data.slice(0,4)
					}
				})
			},
			toMore(){
				uni.switchTab({
					url: '/pages/example/index'
				})
			}
		},
		mounted() {
			this.loadPosts()
		},
		components:{
			exampleItem
		}
	}
</script>

<style lang="scss">
	.example-box{
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
