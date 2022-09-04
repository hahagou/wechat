<template>
	<view class="example"  @click="toDetail(example)">
		<view class="image">
			<image :src="example.main_image_cdn" mode="widthFix"></image>
		</view>
		<view class="content">
			<text class="title">{{example.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			example: Object
		},
		methods:{
			toDetail(item){
				uni.navigateTo({
					url: '/pages/example/detail?id=' + item.id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.example{
		width: 340rpx;
		position: relative;
		padding-right: $uni-spacing-row-sm;
		padding-top: $uni-spacing-col-base;
		image{
			width: 340rpx;
			border-radius: $uni-border-radius-sm;
		}
		.content{
			position: absolute;
			top: calc(340rpx / 2 - 60rpx/2);
			height: 60rpx;
			background-color: rgba($color: $uni-bg-color, $alpha: 0.4);
			width: 100%;
			text-align: center;
			line-height: 60rpx;
			color: $uni-text-color;
			font-size: $uni-font-size-paragraph;
			font-weight: 600;
			text{
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}
	}
</style>
