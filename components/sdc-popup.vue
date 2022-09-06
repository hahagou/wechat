<template>
<view>
	
	
	
	
	<u-popup v-model="show" border-radius="8"  mode="top" >
		<!-- @refresherpulling="onPulling"  @refresherrefresh="onRefresh"    @refresherrestore="onRestore" @refresherabort="onAbort" -->
<scroll-view style="height: 300px;" scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered"
	            :refresher-threshold="100" refresher-background="#ff0000" >
	
		<u-form   ref="uForm" :errorType="errorType">
		
		
   <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="年龄:" >
	
	 <view class="ubox">
		 
		 <view class="range"><u-input v-model="model.minage" input-align="center" :border="border" placeholder="0"  :custom-style="uinp" type="text"></u-input></view> 
		 <view class="nor" >--</view>
		 <view class="range"><u-input v-model="model.maxage" input-align="center" :border="border" placeholder="100"  :custom-style="uinp" type="text"></u-input></view> 
	       <view class="nor">岁</view>
	 </view>	 
  </u-form-item> 
  
  
  <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="身高:" >
  	
  	 <view class="ubox">  		 
  		 <view class="range"><u-input v-model="model.mintall" input-align="center" :border="border" placeholder="100"  :custom-style="uinp" type="text"></u-input></view> 
  		 <view class="nor" >--</view>
  		 <view class="range"><u-input v-model="model.maxtall" input-align="center" :border="border" placeholder="250"  :custom-style="uinp" type="text"></u-input></view> 
  	       <view class="nor">cm</view>
  	 </view>	 
  </u-form-item> 
  
  
  <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="体重:" >
  	
  	 <view class="ubox">  		 
  		 <view class="range"><u-input v-model="model.minWeight" input-align="center" :border="border" placeholder="0"  :custom-style="uinp" type="text"></u-input></view> 
  		 <view class="nor" >--</view>
  		 <view class="range"><u-input v-model="model.maxWeight" input-align="center" :border="border" placeholder="200"  :custom-style="uinp" type="text"></u-input></view> 
  	       <view class="nor">kg</view>
  	 </view>	 
  </u-form-item> 
  
  <!-- 单选开始 -->
  
  <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="学历" >
  	
  	<u-radio-group  @change="eduGroupChange" :width="mgRadioWidth" >
  		<u-radio shape="circle" v-for="(item, index) in lsedu" :key="index" :name="item.name">{{ item.name }}</u-radio>
  	</u-radio-group>
  </u-form-item> 
    
  
  <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="工作:" >
  	
  	<u-radio-group  @change="wkGroupChange" :width="mgRadioWidth" >
  		<u-radio shape="circle" v-for="(item, index) in lsjob" :key="index" :name="item.name">{{ item.name }}</u-radio>
  	</u-radio-group>
  	
  </u-form-item> 
  
	<u-form-item  :label-style="lb"  label-width="120" label-position="top" label="年薪" >
	   	
	   	<u-radio-group  @change="saGroupChange" :width="mgRadioWidth" >
	   		<u-radio shape="circle" v-for="(item, index) in xinzi" :key="index" :name="item.name">{{ item.name }}</u-radio>
	   	</u-radio-group>
	</u-form-item> 
	  
  
  
 <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="婚史:" >
	  
	  <u-radio-group  @change="mgGroupChange" :width="mgRadioWidth" >
	  	<u-radio shape="circle" v-for="(item, index) in mgList" :key="index" :name="item.name">{{ item.name }}</u-radio>
	  </u-radio-group>
	  
 </u-form-item> 
	
	
  	
     <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="购车:" >
  	
  	<u-radio-group  @change="carGroupChange" :width="mgRadioWidth" >
  		<u-radio shape="circle" v-for="(item, index) in lscar" :key="index" :name="item.name">{{ item.name }}</u-radio>
  	</u-radio-group>
  	
  	
  	</u-form-item> 
  
  
   <u-form-item  :label-style="lb"  label-width="120" label-position="top" label="购房" >
      	
      	<u-radio-group  @change="hsGroupChange" :width="mgRadioWidth" >
      		<u-radio shape="circle" v-for="(item, index) in lshouse" :key="index" :name="item.name">{{ item.name }}</u-radio>
      	</u-radio-group>
   </u-form-item> 
    
    
	

	
	
	
	
  
  		
	</u-form>
		
	<view class="u_bottom">
		
	 <view>
	   <u-button size="medium"  shape="circle" @click="this.show=false">重置条件</u-button>
	  </view>	
	   
	 <view>  
	   <u-button  size="medium" :custom-style="confirm" @click="btn_confirm"  shape="circle" >确认</u-button>
	 </view>	  
	   
	</view>
	
	
		
	</scroll-view>
		
	</u-popup>
	
</view>	
</template>

<script>
	
export default {
   
   data() {
	   
	return {
		
		    mgRadioWidth: "auto",
	        
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
			
			confirm: {
				backgroundColor: '#ff0000',
				color: '#FFFFFF'
			 
			},		
			
			
			model:{
			
				minage:'',
				maxage:'',
				
				mintall:'',
				maxtall:'',
				
				minWeight:'',
				maxWeight:'',
				
				marrige:'',  //婚史
				
				car:'',     // 购车
				
				house:'',   // 购房
								
				edu:'',     // 学历		
			   				
				work:'',     //  工作
				
				salary:'',  // 工资
				
				gender:'',
				
				address:'',
			
			},			
			
			
			lsedu:
			 [ 
				{
					name: '无',
					checked: false,
					disabled: false	
				}, 
				{
					name: '小学',
					checked: false,
					disabled: false
				}, 
				{
					name: '初中',
					checked: false,
					disabled: false					
			   },
				{
					name: '中专',
					checked: false,
					disabled: false					
				},
				{
					name: '高中',
					checked: false,
					disabled: false					
				},
				{
					name: '大专',
					checked: false,
					disabled: false					
				},
				{
					name: '本科',
					checked: true,
					disabled: false					
				},
				{
					name: '硕士',
					checked: false,
					disabled: false					
				},
				{
					name: '博士',
					checked: false,
					disabled: false					
				},
				{
					name: '博士后',
					checked: false,
					disabled: false					
				}					
			 
			 ],			
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
			
			lsjob:[					 
					{
						name:'销售',
						checked: false,
						disabled: false
					},
					{
						name:'技术',
						checked: true,
						disabled: false
					},
					{
						name:'财务',
						checked: false,
						disabled: false
					},
					{
						name:'公务员',
						checked: false,
						disabled: false
					},
					{
						name:'工程'	,
						checked: false,
						disabled: false	
					},
					{
						name:'银行'	,
						checked: false,
						disabled: false
					},
					{
						name:'普通职员',
						checked: false,
						disabled: false
					},
					{
						name:'个体户',
						checked: false,
						disabled: false
					},
					{
						name:'律师',
						checked: false,
						disabled: false
					},
					{
						name:'运营',
						checked: false,
						disabled: false
					},
					{
						name:'发型师',
						checked: false,
						disabled: false
					},
					{
						name:'培训',
						checked: false,
						disabled: false
					},
					{
						name:'设计',
						checked: false,
						disabled: false
					},
					{
						name:'药剂师',
						checked: false,
						disabled: false
					},
					{
						name:'护士',
						checked: false,
						disabled: false
					},
					{
						name:'医生',
						checked: false,
						disabled: false
					},
					{
						name:'老师',
						checked: false,
						disabled: false
					},
					{
						name:'保险',
						checked: false,
						disabled: false
					},
					{
						name:'服务行业',
						checked: false,
						disabled: false
					},
					{
						name:'其他'	,
						checked: false,
						disabled: false
					}
						  					
			],
			
			
			xinzi:[							  
			{
				name:'4万以内',
				checked: true,
				disabled: false
			},
			{
				name:'4万-6万',
				checked: true,
				disabled: false
			},
			{
				name:'6万-8万',
				checked: true,
				disabled: false
			},
			{
				name:'8万-10万',
				checked: true,
				disabled: false
			},
			{
				name:'10万-20万',
				checked: true,
				disabled: false
			},
			{
				name:'20万-30万',
				checked: true,
				disabled: false
			},
			{
				name:'30万-50万',
				checked: true,
				disabled: false
			},
			{
				name:'50万-80万',
				checked: true,
				disabled: false
			},
			{
				name:'80万-100万',
				checked: true,
				disabled: false
			},
			
			{
				name:'100万以上',
				checked: true,
				disabled: false
			}
			
			],
			
			
			
			lshouse:[
			{
			    name:'与父母同住',
			    checked: false,
			    disabled: false
			},
			{
			    name:'有婚房无贷款',
			    checked: true,
			    disabled: false
			  },
			  {
				  name:'有婚房有贷款',
				  checked: false,
				  disabled: false
			  },
			  {
				  name:'住亲朋家',
				  checked: false,
				  disabled: false
			  },
			  {
				  name:'与父母同住',
				  checked: false,
				  disabled: false
			  },
			  {
				  name:'住单位房',
				  checked: false,
				  disabled: false
			  },
			  {
				  name:'婚后购房',
				  checked: false,
				  disabled: false
			  },
			  {
				  name:'已购房无贷款',
				  checked: false,
				  disabled: false
			  },
			  {
				  name:'已购房有贷款',
				  checked: false,
				  disabled: false
			  },
			  {
				  name:'租房',
				  checked: false,
				  disabled: false
			  },
			  {
				  name:'需要时可购置',
				  checked: false,
				  disabled: false
		      },
			  {
					name:'房子买在老家',
					checked: false,
					disabled: false
				},									
				{
				   name:'自建房',
				   checked: false,
				    disabled: false
				},
										  
			],
			
			
			lscar:[
				
				{
					  	name:'婚后购车',
						checked: false,
					  	disabled: false
				},
				{
					  	name:'已购车无贷款',
					  	checked: true,
					  	disabled: false
				},
				{
					  	name:'已购车有贷款',
					  	checked: false,
					  	disabled: false
				},
				{
					  	name:'未购车',
					  	checked: false,
					  	disabled: false
				},
				{
					  	name:'需要时购车',
					  	checked: false,
					  	disabled: false
				},
			]
			
			
			
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
		
				
		mgGroupChange(e) {
			this.model.marrige = e
		    console.log("婚史:",e)
		},
		
		carGroupChange(e) {
			this.model.car = e
			console.log("购车:",e)
		},
		
		
		hsGroupChange(e) {
			this.model.house = e;
			console.log("购房:",e)
		},
		
		wkGroupChange(e) {
			this.model.work = e;
			console.log("工作:",e)
		},
		
		
		eduGroupChange(e) {
			this.model.edu = e
			console.log("学历:",e)
		},
		
		saGroupChange(e) {
			this.model.salary = e
			console.log("薪水:",e)
		},
		
		
		btn_confirm(){
			
			//this.$store.commit('set_userdetail',this.model)
			
			  //触发全局总线方法
			 this.$bus.$emit('search',this.model)   //调用  sdc-user 里的 loaduser
			
			//console.log(this.model)
			this.show=false
		}
		
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
	
	.u_bottom{
			 
			 display: flex;
			 flex-direction: row;
			 justify-content: center;			
			 align-items: stretch;
			 margin-top: 30rpx;
			 margin-bottom: 10rpx;	
			 height:100rpx;		  
			 
	}
	
	.u_bottom view{
			 
		margin-left: 30rpx;
			 
	}
	
	.active{
		
		backgroundColor: '#ff5500';
		color: '#FFFFFF';
		fontSize:'35rpx'; 
		
	}
	
	
</style>