<template>
	<view class="detail">
	
	  <view class="imgbox">
		  <image   :src="baseUrl"  mode="widthFix"/>
		  
	  </view>
		
		
			  
		
		<view class="text_box">
		 
			<text class="mcode">编号:{{users.mcode}}
		</text>
	   
	  
	  
		 <view class="nbox">
			<text class="title">年龄:{{users.age}} | </text>			
			<text class="title">学历:{{users.edu}} | </text>
			<text class="title">职业:{{users.work}} | </text>
			<text v-if="users.gender" class="title">收入:{{users.salary}}</text>
			<text v-else class="title">身高:{{users.tall}}</text>
			
		 </view>	 
		   		   
		</view>
		
		<view class="userinfo">
			<u-cell-group>
				
				<u-cell-item title="性别" :arrow="false">
					<text v-if="users.gender">男</text>
					<text v-else>女</text>
				</u-cell-item>
				
				<u-cell-item title="年龄" :arrow="false">
					<text > {{users.age}}</text>				
				</u-cell-item>
				
				<u-cell-item title="身高" :arrow="false">
					<text > {{users.tall}}</text>				
				</u-cell-item>
				
				
				<u-cell-item title="体重" :arrow="false">
					<text > {{users.weight}}</text>				
				</u-cell-item>
				
				
				<u-cell-item title="现居住地" :arrow="false">
					<text > {{users.address}}</text>				
				</u-cell-item>
				
				
				<u-cell-item title="学历" :arrow="false">
					<text > {{users.edu}}</text>				
				</u-cell-item>
				
				<u-cell-item title="职业" :arrow="false">
					<text > {{users.work}}</text>				
				</u-cell-item>
				
				
				
				<u-cell-item title="婚姻状况" :arrow="false">
					<text > {{users.marrige}}</text>				
				</u-cell-item>
				
				
				<u-cell-item v-if="user.gender" title="月收入" :arrow="false">
					<text > {{users.salary}}</text>				
				</u-cell-item>
				
				
				<u-cell-item title="家庭成员" :arrow="false">
					<text > {{users.relation}}</text>				
				</u-cell-item>
				
				
				
				<u-cell-item v-if="users.gender"  title="是否购房" :arrow="false">
					<text > {{users.house}}</text>				
				</u-cell-item>
				
				
				<u-cell-item v-if="users.gender"    title="是否购车" :arrow="false">
					<text > {{users.car}}</text>				
				</u-cell-item>
				
				
				
				 
			</u-cell-group>
			
		</view>
		
		
		
		
		<view class="bottom_bar">
	
			<u-button @click="toCon" size="default" :custom-style="customStyle" shape="circle" >联系红娘</u-button>
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		
		mounted(){
			
		
	
			
			//console.log("sdc-user 为毛",this.baseUrl)
			
		},
		data() {
			return {
				users: {},
				customStyle:{
					width:"450rpx",
					backgroundImage:"linear-gradient(90deg,#e64128,#e8622d)",
					color:"#ffffff",
					fontSize:"12pt",
				},
			    baseUrl:''	
				
			};
		},
		methods:{
			loadDetail(id){
				this.$api.user.detail(id)
				.then(res=>{
					if(res.code == 1){
						this.users = res.data
						
						this.baseUrl=this.$u.http.config.baseUrl
									
									let arr=this.baseUrl.split('//')
									
									this.baseUrl=arr[0]+'//'+arr[1].split('/')[0]+'/' 
									
									
									if(this.users.gender)
									{
										this.baseUrl+='/uploads/pics/man.png'
									}
									else
									{
										this.baseUrl+='/uploads/pics/girl.png'
									}
									
										console.log("users is:",this.users)
						
					}
				})
			},
			toCon(){
				uni.navigateTo({
					url:"/pages/about/index"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	body {
		
		width: 750rpx;
		min-height: 400rpx;
		
	    margin: 0 auto;
	    font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei", STXihei, hei;
	    
	    overflow-x: hidden;
	    -webkit-tap-highlight-color: transparent;
	}
	
	.imgbox{
		display: flex;
		justify-content: center;
		width:100%;
	}
	
	
	.detail{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* background-color: bisque; */
		
	}
	
	.detail .text_box  {
		
		width:100%;
		height:60px;
		background-color: #ffffff;
		margin:10rpx auto 0 auto;
		padding-top: 20rpx;
		padding-left: 10rpx;
		padding-bottom: 20rpx;
		
	}
	
	
	 .detail .text_box text{
		 
		 font-size: 14px;
		 margin-left: 5rpx;		 
		 
	 }
	
	
	 .detail .text_box .mcode{
		 
		 font-weight: bold;		 
	 }
	 
	  .detail .text_box image{
		  
		  width:50rpx;
		  height: 50rpx;
		  margin-left: 10rpx;
		  
	  }
	  
	  
	  .detail .text_box .nbox{
		  display: flex;
		  flex-direction: row;
		  justify-content: space-around;		
		  margin-top: 10rpx;		  		  
	  }
	 
	 .detail .text_box .nbox .title{
		 
		 color: #a0a0a0;
		 font-size: 12px;
	 }
	 
	 
	 
	 
	 .detail .bottom_bar {
		 display: flex;
		 flex-direction: row;
		 justify-content: center;
		 width:750rpx;
		 height: 120rpx;
		 margin-top: 20rpx;
		 
		 background-color: #ffffff;
		 
		 
	 }
	 
	.detail .bottom_bar .contact {
		 
		 background: url(@/static/contact.png) no-repeat 0px 0px; 
		 background-size: 320px auto;
		 margin-top: 10rpx;
		 width:180px;
		 height:40px;
		 
		 
	 }
	 
	 
	 
	
</style>
