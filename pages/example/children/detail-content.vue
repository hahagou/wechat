<template>
	<view class="content-box">
		<view class="bar u-flex u-row-between u-col-center">
			<text class="title">案例详情</text>
		</view>
		<view class="content">
			<u-parse :html="example.content | richTextFormat" :show-with-animation="true" :lazy-load="true"></u-parse>
			<!-- <rich-text :nodes="example.content | richTextFormat"></rich-text> -->
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			example: Object
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.content-box{
		margin-top: $uni-spacing-col-base;
		background-color: $uni-bg-color;
		min-height: 400rpx;
		padding: 0 $uni-spacing-row-base;
		.bar{
			height: 80rpx;
			border-bottom: 1rpx solid $uni-border-color-grey;
			.title{
				color: $uni-text-color;
				font-size: $uni-font-size-subtitle;
				line-height: 76rpx;
				border-bottom: 4rpx solid $uni-color-primary;
			}
		}
		.content{
			padding-top: $uni-spacing-col-base;
		}
	}
</style>
