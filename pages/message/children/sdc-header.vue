<template>
	<view class="header">
		<view class="info u-flex">
			<view class="item u-flx-6 u-flex">
				<view class="icons">
					<u-icon name="phone" :size="iconSize"></u-icon>
				</view>
				<view class="content u-flex-col">
					<text>{{global_config.tel}}</text>
					<text>{{global_config.business_hours}}</text>
				</view>
			</view>
			<view class="item u-flex-6  u-flex">
				<view class="icons">
					<u-icon name="map" :size="iconSize"></u-icon>
				</view>
				<view class="content u-flex-col">
					<text>{{global_config.address}}</text>
				</view>
			</view>
		</view>
		<header-form />
	</view>
</template>

<script>
	import headerForm from './header-form.vue'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				iconSize: '60rpx'
			};
		},
		computed: {
			...mapState(['global_config'])
		},
		components: {
			headerForm
		}
	}
</script>

<style lang="scss" scoped>
	.header{
		background-color: $uni-bg-color;
	}
	.info{
		padding: $uni-spacing-col-base $uni-spacing-row-base;
		.item{
			padding: 0 $uni-spacing-row-sm;
			.icons{
				color: $uni-color-primary;
			}
			.content{
				font-size: $uni-font-size-sm;
				color: $uni-text-color-grey;
			}
		}
	}
</style>
