<template>
	<view class="swiper-box">
		
		<view class="searchInput">
		     <u-toast ref="uToast" />
			
	<u-search  v-model="value" @change="change" @custom="custom" @search="search" :shape="shape" :clearabled="clearabled"
	:show-action="showAction" :action-style="actionStyle" :input-align="inputAlign" :input-style="searchInput" @clear="clear"/>		
	
	 
		</view>
	</view>
	
	
</template>

<script>
 
	export default {
		
		data() {
			return {
				
			
				value: '',
				shape: 'round',
				clearabled: true,
				showAction: true,
				inputAlign: 'left',
				
				searchInput:{
					width:"610rpx",					 			
				},
				actionStyle:{
						
					display:"flex",
					position:"absolute",
					marginTop:"0rpx",
					marginLeft:"570rpx", 
					alignItems:"center",
					zIndex:"999"
									
				},
				
				
				
				
			}
		},
		watch: {
			// 这里的演示为证明通过v-model绑定值，它是双向绑定的，意味着您无需监听change事件
			// 也能知道value值当前的内容
			value(val) {
				// console.log(val);
			}
		},
		methods: {
			
			change(value) {
				// 搜索框内容变化时，会触发此事件，value值为输入框的内容
				console.log(value);
			},
			custom(value) {
				/* console.log(value);
				this.$u.toast('输入值为：' + value)
				 */
				
				this.gores(value)
				
				
			},
			search(value) {
				// 搜索代码
				/* this.$refs.uToast.show({
					title: '搜索内容为：' + value,
					type: 'success'
				}) */
				
				this.gores(value)
				
				
				
			},
			gores(value){
				
				uni.reLaunch({
					 url:  '/pages/userlst/index?mcode='+value+"&nickname="+value,
					   success: function(e) {
					     var page = getCurrentPages()[0];
					     if(page == undefined || page == null) return;
					             page.onLoad(); //或者其它操作
					      }
					});
				
			},
			
			clear() {
				  console.log(this.value);
			},
			 
		}
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
	
   .searchInput button::after{
	   border: none;
   }
	
	.searchInput button.btn {
		display: flex;
		position: absolute;
		margin-top: 0rpx;
		margin-left: 550rpx;
		align-items: center;
		 
		font-size: 10pt;
	    
	    width: 150rpx;
	    height: 65rpx;
	 
        border-bottom-right-radius:18px;
        	
        border-top-right-radius: 18px; 
	   
	}
	
	
	
	
	
/* 	.search-text{
	
	    font-size: 14px;
	
	    background-color: #FFFFFF;
	
	    height: 60upx;
	
	    width: 580upx;
		
		margin-left: 20rpx;
		
		z-index: 1;
	
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
	 */
	
	
	
</style>
