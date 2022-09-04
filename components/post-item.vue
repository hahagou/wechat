<template>
	<view class="item u-flex u-row-center" @click="toDetail(post)">
		<image :src="post.main_image_cdn" mode="widthFix"></image>
		<view class="content u-flex-col">
			<text class="title">{{post.title}}</text>
			<text class="description">{{post.description}}</text>
			<text class="date">{{post.createtime|timeFrom}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			post: Object
		},
		methods:{
			toDetail(item){
				uni.navigateTo({
					url: '/pages/post/detail?id=' + item.id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item{
		padding-top: $uni-spacing-col-base;
		border-bottom: 1rpx solid $uni-border-color-grey;
		padding: $uni-spacing-col-base 0;
		&:last-child{
			border-bottom: none;
		}
		image{
			width: 300rpx;
			border-radius: $uni-border-radius-sm;
		}
		.content{
			width: 450rpx;
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
			padding-left: $uni-spacing-row-base;
			text{
				margin-bottom: $uni-spacing-col-sm;
			}
			.title{
				font-size: $uni-font-size-paragraph;
				color: $uni-text-color;
				font-weight: bold;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
			.description{
				overflow: hidden;
				-webkit-line-clamp: 2; 
				-webkit-box-orient: vertical;
				display: -webkit-box;
			}
			.date{
				font-size: $uni-font-size-sm;
			}
		}
	}
</style>
