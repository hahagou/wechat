<template>
	<view class="title-box u-flex-col u-row-center">
		<view class="title">
			<text>{{example.title}}</text>
		</view>
		<view class="info u-flex u-row-right">
			<text class="date">{{example.createtime | date}}</text>
			<text class="category">{{example.category_text}}</text>
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

<style lang="scss">
	.title-box{
		background-color: $uni-bg-color;
		height: 150rpx;
		padding: 0 $uni-spacing-row-base;
		.title{
			font-size: $uni-font-size-title;
			color: $uni-text-color;
			font-weight: 600;
		}
		.info{
			margin-top: $uni-spacing-col-base;
			font-size: $uni-font-size-sm;
			color: $uni-text-color-grey;
			text:last-child{
				padding-left: $uni-spacing-row-sm;
			}
		}
	}
</style>
