<template>
	<view class="about u-flex-col">
	
	 <view class="box">
	    <view class="box1">
			<text class="biaoti">私人专属红娘:私人订制小红娘--燕姐</text> 
			<text class="neiron">添加专属红娘为好友，获取红线，帮您牵线搭桥</text>
			<text class="neiron">线下红娘服务，私人订制服务，全方位助您脱单</text>
		</view>		
		 
		 <view class="box3">
			 
			 
			 
		 </view>
		 
	 </view> 
		  
		  
	  
		
		
		
		
	
		
		
		<!-- <view class="image">
			<image :src="global_config.about_image" mode="widthFix"></image>
		</view> -->
		
		
		
		 
		
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
	.box{
	   display: flex;
	   justify-content: center;
	   width:100%;
	   height:250rpx;
	   background-color: #E04356;	
			   
		.box1{
			display: flex;
			flex-direction: column;
			position:absolute;
			margin-top: 95rpx;
			border-radius: $uni-border-radius-lg; 
			width:95%;
			height:250rpx;			 
			background-color:$uni-bg-color;
			padding: 50rpx;
		
			
			.biaoti{
				margin: 2rpx auto;
				text-align: left;
				padding:2rpx;
				font-size: 10pt;
				font-weight: bold;
			    color:#000;
				flex-wrap: nowrap;
				 
			}
			
			.neiron{
				margin: 2rpx auto;
				padding:2rpx;
				font-size:9pt;
				color:$uni-text-color-grey;
				flex-wrap: nowrap;
			}
			
		}	   
		
	}
	
	.box3{
		width:100%;
		height:500rpx;
		margin-top: 300rpx;
		margin-bottom: 20rpx;
		 
		
	}
	
	.about{
		display: flex;
		background-color: $uni-bg-color;
		
		.image{
			display: flex;
			justify-content: center;
			image{
				width: 90%;
			}
		}
		.content{
			margin-top: 120rpx;
			margin-bottom: 20rpx;
			padding: 0 $uni-spacing-row-base;
			background-color: aqua;
			/* .item{
				border-radius: $uni-border-radius-lg; 
				padding: 10rpx;
				background-color:#a80000;
				height: 120rpx;
				border-bottom: 1rpx solid $uni-border-color-grey;
				
				.icon{
					color: $uni-color-primary;
				}
				.text{
					font-size: $uni-font-size-base;
					color:#ffffff;					
				}
			} */
		}
	}
</style>
