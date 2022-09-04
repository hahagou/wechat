<template>
	<view class="service-box">
		<view class="bar">
			<text>服务</text>
			<u-icon name="more-dot-fill" class="more" @click="toMore"></u-icon>
		</view>
		<view class="items">
			<view class="item" v-for="item,index in services" :key="index" @click="toMore">
				<image :src="item.main_image_cdn" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				services:[]
			};
		},
		methods:{
			loadServices(){
				this.$api.service.index()
				.then(res=>{
					if(res.code == 1){
						this.services = res.data.data.slice(0,2)
					}
				})
			},
			toItem(id){
				
			},
			toMore(){
				uni.switchTab({
					url: '/pages/service/index'
				})
			}
		},
		mounted() {
			this.loadServices()
		}
	}
</script>

<style lang="scss" scoped>
	.service-box{
		width: 750rpx;
		min-height: 300rpx;
		background-color: $uni-bg-color;
		padding: $uni-spacing-row-sm;
		border-radius: $uni-border-radius-base;
		.bar{
			display: flex;
			height: 80rpx;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1rpx solid $uni-border-color-grey;
			text{
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
		.items{
			display: flex;
			flex-direction: column;
			.item{
				padding-top: $uni-spacing-col-base;
				image{
					width: 100%;
					border-radius: $uni-border-radius-base;
				}
			}
		}
	}
</style>
