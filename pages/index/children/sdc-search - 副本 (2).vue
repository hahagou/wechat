<template>
	<view class="swiper-box">
		
		<view class="searchInput">
		    
			
			<view class="search-ico-wapper">
			
			    <image src="../../../static/icon-7.png" class="search-ico" mode=""></image>
			
			</view>
			
			 <input type="text" value="" placeholder="搜索会员编号" class="search-text" maxlength="50" />
			
			<view class="search-ico-wapper1">
			     <image src="../../../static/ic_search.png" class="search-ico" mode=""></image>
			</view>
			
		</view>
		
	
	</view>
</template>

<script>
 
	export default {
		
		methods:{
		
	    },
	}
</script>

<style lang="scss" scoped>
	
	.searchInput{
		display: flex;
		flex-direction: row;
		align-items: center; 		
		position: absolute;	
		margin-top: 10rpx;
	    margin-left: 20rpx;
		
		width:700rpx;
		height: 90rpx;
		padding: 10rpx; /*注意，这里用的是 rpx*/
		 
		z-index:1;
	}
	
	.search-text{
	
	    font-size: 14px;
	
	    background-color: #FFFFFF;
	
	    height: 60upx;
	
	    width: 580upx;
	
	}
 
	
	
	.search-ico, .search-ico-1{
	
	    width: 60upx;
	
	    height: 60upx;
	
	}
	
	
	.search-ico-wapper{
	
	    background-color: #FFFFFF; 
	
	    display: flex;
	
	    flex-direction:column;
	
	    justify-content: center;
	
	    padding: 0upx 0upx 0upx 20upx;
	
	    border-bottom-left-radius:18px;
	
	    border-top-left-radius: 18px;
	
	}
	
	
	.search-ico-wapper1{
	
	    background-color: #FFFFFF;
	
	    display: flex;
	
	    flex-direction:column;
	
	    justify-content: center;
	
	    padding: 0upx 40upx 0upx 0upx;
	
	    border-bottom-right-radius:18px;
	
	    border-top-right-radius: 18px;
	
	}
	
	
	
	
</style>
