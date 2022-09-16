<template>
		
	<view class="fuwu" style="height:windowHeight">	
	
	<!-- <view class="lefbambox"></view> -->	
	 
	  <view class="outBox" :style="'height:'+screenHeight+'px'">
		
		<view class="dasBox">
			 
			 <sdcFuwu/>
		</view>  
		  
		  
		  
	  </view>
	
	
	
	
	 <tabbar />
	</view>
</template>

<script>
	import sdcFuwu from './children/sdc-fuwu.vue'
	import tabbar from '@/components/tabbar.vue' 
	export default {
		data() {
			return {
				screenHeight:getApp().globalData.screenHeight
			}
		},
		methods: {
			
		},
		components:{		
			tabbar,
			sdcFuwu
		},
	}
</script>

<style lang="scss" scoped>
	
	.outBox{
		
		display: flex;
		justify-content: center;
		background-color: #f8f4e9; 
		width: 95%;	   		 						  
		margin-top: 20rpx;		
		
	}
	
	.dasBox{
		
		display: flex;
		justify-content: center;
		width:98%;
		margin-top: 10rpx;
		border: 1rpx dashed #944c2f;		
	}
	
/* 	.lefbam{
		display: flex;	
		
		width:100%;
	    z-index: 99;	
		
		
	} */
	

	
	  
	.lefbambox{
		display: flex;
		justify-content: flex-start;

		width:21px;
		height: 52px;
		background-image:url("../../static/babonleft.png");	
		position: absolute;
		top: 150rpx;
		left: 0rpx;
		z-index: 99;
	}
	
	
    
	.fuwu{
		display: flex;	
		justify-content: center;
		width: 100%;		
		background-image:url("../../static/serv.png");
		padding-bottom: var(--window-bottom);
	}    
 
</style>
