<template>
	<view class="swiper-box">
		
		<swiper 
			:indicator-dots="true" 
			:autoplay="true" 
			indicator-active-color="#E04356"
			indicator-color="rgba(255,188,179,0.3)"
			:interval="3000" 
			:duration="1000"
			:circular="true">
			<swiper-item v-for="item,index in swipers" :key="index">
				<view class="swiper-item">
					<image :src="item.image" mode="scaleToFill"  @click="clickSwiperItem(index)"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {mapActions} from 'vuex'
	export default {
		data() {
			return {
				swipers:[],	
			};
		},
		methods:{
			...mapActions(['isInPage']),
			loadSwiper(){
				this.$api.home.swiper()
				.then((res)=>{
					if(res.code == 1){
						this.swipers = res.data
					}
				})
			},
			clickSwiperItem(index){
				this.isInPage(this.swipers[index].url)
				.then(res=>{
					uni.switchTab({
						url: this.swipers[index].url
					})
				})
				.catch(()=>{
					uni.navigateTo({
						url: this.swipers[index].url
					})
				})
			}
		},
		mounted() {
			this.loadSwiper()
		}
	}
</script>

<style lang="scss" scoped>
	
	
	.swiper-box{		
		
		height: 480rpx;
		width: 750rpx;
		background-color: $uni-color-primary;
		border-radius: $uni-border-radius-base;
		swiper{
			width: 750rpx;
			height: 480rpx;
			image{
				width: 750rpx;
				height: 480rpx;
			}
		}
	}
</style>
