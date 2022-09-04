<template>
	<view class="post-box">
		
		<view class="bar u-flex u-row-between u-col-center">
			<text class="title">会员列表</text>
			<u-icon name="more-dot-fill" class="more" @click="toMore"></u-icon>
		</view>
		
		
		
		<view class="items">
			<user-item v-for="item,index in users" :users="item" :key="index" />
		</view>
		
		
	</view>
</template>

<script>
	import userItem from '@/components/user-item.vue'
	export default {
		data() {
			return {
				users:[]
			};
		},
		methods:{
			loadusers(){ //console.log('wtf:',this.$api.user.index())
				this.$api.user.index()
				.then(res=>{
					if(res.code == 1){
						this.users = res.data.data
						
					}
				})
			},
			toMore(){  console.log("toMore")
				uni.switchTab({
					url: '/pages/userlst/index',	
					success(res){
						console.log('success',res)
					},
					fail(err) {
						console.log('failure',err)
					}
									
				})
				
				
				
			}
		},
		mounted() {
			this.loadusers()
		},
		components:{
			userItem
		}
	}
</script>

<style lang="scss" scoped>
	.post-box{
		width: 750rpx;
		min-height: 300rpx;
		background-color: $uni-bg-color;
		padding: $uni-spacing-row-sm;
		margin-top: $uni-spacing-col-base;
		border-radius: $uni-border-radius-base;
		.bar{
			height: 80rpx;
			border-bottom: 1rpx solid $uni-border-color-grey;
			.title{
				 
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
	}
</style>
