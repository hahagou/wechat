<template>
	<view class="icons" :style="[{
		right: right + 'rpx',
		bottom: bottom + 'rpx'
	}]" @click="back">
		<u-icon name="arrow-left"  :color="color" :size="size + 'rpx'" ></u-icon>
	</view>
</template>

<script>
	export default {
		props:{
			right: {
				type: Number,
				default: 0
			},
			bottom: {
				type: Number,
				default: 0
			},
			size: {
				type: Number,
				default: 30
			},
			color: {
				type: String,
				default: '#FFFFFF'
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.icons{
		position: fixed;
		background-color: $uni-color-primary;
		border-radius: 50%;
		padding: 20rpx;
		z-index: 100;
	}
</style>
