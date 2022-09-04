<template>
<view>
	
	<u-popup v-model="show" border-radius="8"  mode="top" >
	
	<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
						@scrolltolower="lower" @scroll="scroll">	
	
		<u-form :model="form" :rules="rules" ref="uForm" :errorType="errorType">
		
		
   <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="年龄:" >
	
	 <view class="ubox">
		 
		 <view class="range"><u-input v-model="minage" input-align="center" :border="border" placeholder="0"  :custom-style="uinp" type="text"></u-input></view> 
		 <view class="nor" >--</view>
		 <view class="range"><u-input v-model="maxage" input-align="center" :border="border" placeholder="100"  :custom-style="uinp" type="text"></u-input></view> 
	       <view class="nor">岁</view>
	 </view>	 
  </u-form-item> 
  
  
  <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="身高:" >
  	
  	 <view class="ubox">  		 
  		 <view class="range"><u-input v-model="mintall" input-align="center" :border="border" placeholder="100"  :custom-style="uinp" type="text"></u-input></view> 
  		 <view class="nor" >--</view>
  		 <view class="range"><u-input v-model="maxtall" input-align="center" :border="border" placeholder="250"  :custom-style="uinp" type="text"></u-input></view> 
  	       <view class="nor">cm</view>
  	 </view>	 
  </u-form-item> 
  
  
  <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="体重:" >
  	
  	 <view class="ubox">  		 
  		 <view class="range"><u-input v-model="minWeight" input-align="center" :border="border" placeholder="0"  :custom-style="uinp" type="text"></u-input></view> 
  		 <view class="nor" >--</view>
  		 <view class="range"><u-input v-model="maxWeight" input-align="center" :border="border" placeholder="200"  :custom-style="uinp" type="text"></u-input></view> 
  	       <view class="nor">kg</view>
  	 </view>	 
  </u-form-item> 
  
  
  <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="婚史:" >
	  
	  <u-radio-group v-model="radio" @change="radioGroupChange" :width="radioCheckWidth" :wrap="radioCheckWrap">
	  	<u-radio shape="circle" v-for="(item, index) in mgList" :key="index" :name="item.name">{{ item.name }}</u-radio>
	  </u-radio-group>
	  
    </u-form-item> 
  
  
  		
	</u-form>
		
	
		
	</scroll-view>
		
	</u-popup>
	
</view>	
</template>

<script>
	
export default {
   
   data() {
	   
	return {
	        
			lb:{
				marginLeft:"10rpx",
				fontSize:"10pt",
				color:"#343434",
				fontWeight:"Bold",
			},
				
	        uinp:{
				color:"#000",
			},
	 
			show: false,
			border:true,
			
			minage:'',
			maxage:'',
			
			mintall:'',
			maxtall:'',
			
			minWeight:'',
			maxWeight:'',
			
			marrig:'',
			
			car:'',
			
			house:'',
			
			address:'',
			
			edu:'',
			
			work:'',
			
			salary:'',  // 工资 最少
						
			mgList: [
				{
					name: '未婚',
					checked: true,
					disabled: false
				},
				{
					name: '短育未婚',
					checked: false,
					disabled: false
				},
				{
					name: '离异',
					checked: false,
					disabled: false
				},
				{
					name: '丧偶',
					checked: false,
					disabled: false
				}
			],
			
			
			
			
			
		}
	
	},	
	methods: {
		
		showPopup(){
			
			//this.item = item
			this.show = true			
		  //  this.data=form
			
		},
		success(){
			this.show = false
		},
		
	}
	
	}
</script>

<style lang="less" scoped>
	
	.ubox{
		display: flex;
		justify-content: flex-start;
		flex:1;
		
		.range{
			width:120rpx;
			margin-left: 10rpx; 			 
		}
		
		
	}
	
	 
	 .nor{
	   margin-left:10rpx;
	   color:'#ff5500';	
	  font-size: 10pt;
	  font-weight:"Bold";
	}
	
		.scroll-Y {
			height: 1300rpx;
		}
	
	
	
</style>