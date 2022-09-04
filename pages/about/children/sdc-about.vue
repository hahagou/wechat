<template>
	<view class="about u-flex-col">
		<view class="image">
			<image :src="global_config.about_image" mode="widthFix"></image>
		</view>
		<view class="content u-flex-col">
			<view class="item u-flex u-row-between u-col-center">
				<view class="icon u-flex-1">
					<u-icon name="phone" :size="iconSize"></u-icon>
				</view>
				<view class="text u-flex-10">
					<text>{{global_config.tel}}</text>
				</view>
			</view>
			<view class="item u-flex u-row-between u-col-center">
				<view class="icon u-flex-1">
					<u-icon name="map" :size="iconSize"></u-icon>
				</view>
				<view class="text u-flex-10">
					<text>{{global_config.address}}</text>
				</view>
			</view>
			<view class="item u-flex u-row-between u-col-center">
				<view class="icon u-flex-1">
					<u-icon name="weixin-fill" :size="iconSize"></u-icon>
				</view>
				<view class="text u-flex-10">
					<text>{{global_config.wechat}}</text>
				</view>
			</view>
			<view class="item u-flex u-row-between u-col-center">
				<view class="icon u-flex-1">
					<u-icon name="email" :size="iconSize"></u-icon>
				</view>
				<view class="text u-flex-10">
					<text>{{global_config.email}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				iconSize: "40rpx"
			};
		},
		computed: {
			...mapState(['global_config'])
		}
	}
</script>

<style lang="scss" scoped>
	.about{
		background-color: $uni-bg-color;
		.image{
			image{
				width: 100%;
			}
		}
		.content{
			padding: 0 $uni-spacing-row-base;
			.item{
				height: 90rpx;
				border-bottom: 1rpx solid $uni-border-color-grey;
				&:last-child{
					border-bottom: none;
				}
				.icon{
					color: $uni-color-primary;
				}
				.text{
					font-size: $uni-font-size-base;
					color: $uni-text-color-grey;
				}
			}
		}
	}
</style>
