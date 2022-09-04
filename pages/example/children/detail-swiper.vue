<template>
	<view class="swiper-box">
		<swiper 
			:indicator-dots="false" 
			:autoplay="false" 
			:interval="3000" 
			:duration="1000"
			@change="changeSwiper"
			:current="currentIndex"
			class="swiper"
			>
			<swiper-item v-for="item,index in swipers" :key="index">
				<image :src="item" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<view class="scroll-box">
			<scroll-view :scroll-x="true">
				<view class="items u-flex u-flex-nowrap u-col-bottom">
					<view class="item" v-for="item,index in swipers" :key="index" >
						<image :src="item" mode="widthFix" 
							:class="{'active':currentIndex == index}"
							@click="currentIndex = index"
						></image>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			swipers: Array,
			
		},
		data() {
			return {
				currentIndex: 0
			};
		},
		methods:{
			changeSwiper(e){
				let {current} = e.detail
				this.currentIndex = current
			}
		}
	}
</script>

<style lang="scss">
	.swiper-box{
		background-color: $uni-bg-color;
		border-bottom-left-radius: $uni-border-radius-sm;
		border-bottom-right-radius: $uni-border-radius-sm;
		.swiper{
			height: 750rpx;
			image{
				width: 100%;
			}
		}
	}
	.scroll-box{
		padding: $uni-spacing-col-base $uni-spacing-row-base;
		image{
			width: 180rpx;
			border-radius: $uni-border-radius-base;
		}
		.items{
			.item{
				padding-right: $uni-spacing-row-base;
			}
			.active{
				border: 4rpx solid $uni-color-primary;
				box-sizing: border-box;
			}
		}
	}
</style>
