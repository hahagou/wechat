<template>
	<view class="bigbox">
	 
		<view class="content">
				<view class="title">
					<image   mode="widthFix" src="../../../static/title.jpg"></image>
				</view> 
			</view>	
				
				<view class="featu" style="margin-top: 20rpx;">
					<text>1.实体经营，实名认证，所有资料真实</text>
					<text>2.所有会员资料保密，确保每个会员隐私受到保护。</text>
					<text>3.一对一精准匹配，提高成功率</text>
					<text>4.更多的选择范围和自由选择的空间</text>
					<text>5.恋爱指导，专业助你快速脱单</text>			
				</view>
				
				<view class="featu">
					<text 
					   style="display: flex; 
					          justify-content: center;
							  color:#ba7f43;
							  margin-top: 50rpx;
							  "
					>
						服务套餐
					</text>
				</view>
		 
 
 
		<view class="featu">
		  	<u-button @click="btnClick" size="default" :custom-style="customStyle" shape="circle" >联系红娘</u-button>
		  </view>
 
		<view class="juti">
			<text> 具体方案服务请联系您的红娘</text>			
		</view> 
 
		 <view class="imgbox" > <!--688 :style="'margin-top:'+(screenHeight-screenHeight/3)+'px'"-->
		 	<image src="../../../static/bg2.jpg" mode="widthFix"></image>
		 	
		 </view>
	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight:getApp().globalData.screenHeight,				
				customStyle:{
					width:"450rpx",
					backgroundImage:"linear-gradient(90deg,#e64128,#e8622d)",
					color:"#ffffff",
					fontSize:"12pt",
				}
				
			}
		},
		methods: {
			
			btnClick(){
				
				uni.navigateTo({
					url:"/pages/about/index"
				})
			}
			
		},
		
	}
</script>
<style lang="scss" scoped>
	
	
	 .bigbox{
	 	display: flex;			 
	 	flex-direction: column;		
	 	width: 100%;
	 	
	 }   
	
	.content{
			 display: flex;
			  
			 justify-content: center;
			 width:100%;
			 
	}
	
		
	.title{
			display: flex; 		        
			width:250px;
			height:52px;
				margin-top: 50rpx;
			/* background-image:url("../../../static/title.jpg") 	 */
		 
			
			
		}
		
		
		.featu{
				 display: flex;		 
				 flex-direction: column;
				 
				 text{
					 width:95%;
					 color: #3a2d24;
					 font-weight: bold;
					 padding-left: 20rpx;
					 margin: 20rpx 15rpx;
					 font-size: 11pt;
					 
				 }	 				 
		}
		
		
		.juti{
				 display: flex;
				 justify-content: center;
				 margin-top: 50rpx;
				 text{
					 color: #8f8f8f;
					 font-size: 10pt;
					 font-weight: bold;
				 }				 
				 
		}
		
		
		.imgbox{
				 display: flex;				  
				 justify-content: center; 		  
			     width:100%; 		
				/* background-color: #3a2d24;	 */  
				/* margin-top: 50rpx;		 */
				 image{			        
					width:95%;			
					height: auto; 
					 
				 }
				 
		}
		
		
		 
	 
/* 	 
	 
	
	 
	
	 
	 
	
	 
	 
	 
	

	.fwtop{
		display: flex;
		 align-items:flex-start;
		width: 95%;
	    height: 23px; 
		
		background-image:url("../../../static/top.png");	
		background-position: center;
	} */
    
	
	
	
	 
</style>
