<template>
	<view class="detail">
		<view class="title">
			<text>{{post.title}}</text>
		</view>
		<view class="info">
			<text>{{post.category_text}}</text>
			<text>{{post.createtime|date}}</text>
		</view>
		<view class="description u-flex u-row-center">
			<text>{{post.description}}</text>
		</view>
		<view class="content">
			<u-parse :html="post.content|richTextFormat" :lazy-load="true"></u-parse>
			<!-- <rich-text :nodes="post.content|richTextFormat"></rich-text> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				post: {}
			};
		},
		methods:{
			loadDetail(id){
				this.$api.post.detail(id)
				.then(res=>{
					if(res.code == 1){
						this.post = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.detail{
		padding: 0 $uni-spacing-row-base;
		background-color: $uni-bg-color;
		min-height: 400rpx;
		.title{
			font-size: $uni-font-size-title;
			font-weight: 400;
			padding: $uni-spacing-col-base 0;
		}
		.info{
			font-size: $uni-font-size-sm;
			color: $uni-text-color-grey;
			padding: $uni-spacing-col-sm 0;
			border-bottom: 1rpx solid $uni-border-color-grey;
			text{
				padding-right:$uni-spacing-row-sm;
			}
		}
		.description{
			padding: $uni-spacing-col-base $uni-spacing-row-base;
			text{
				font-size: $uni-font-size-base;
				color: $uni-text-color-grey;
				border: 3px dashed $uni-border-color;
				padding: $uni-spacing-col-sm $uni-spacing-row-sm;
				width: 650rpx;
			}
		}
	}
</style>
