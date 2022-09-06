<template>
	<view class="post-box">
	
	    <!-- <sdc-popup ref="popup"></sdc-popup> -->
		
		<sdcpopup ref="popup" ></sdcpopup>
		
		<view class="bar u-flex u-row-around">
			<!-- <text class="title">会员列表</text> -->
			<!-- <u-icon name="more-dot-fill" class="more" @click="toMore"></u-icon> -->
			
			
	<text class="title" @click="xin" >最新</text>	<u-icon name="arrow-down-fill"  ></u-icon>
		 
	
	 
	<text v-if="!model.address"   @click="showA= true" >居住地</text>	
	
	<text v-if="model.address"   @click="showA= true" >{{model.address}}</text>	<u-icon name="arrow-down-fill"  ></u-icon>
	
		
	<text @click="showPop">更多情况</text>	<u-icon name="arrow-down-fill"  ></u-icon>
			
		</view>
		
	 <u-form ref="uForm" label-width="150rpx">	
		
	 
		 
		<u-picker
				:mode="mode"			
				v-model="showA"
				:defaultRegion="defaultRegion"
				:params="params"		 
				@confirm="confirm"
				:defaultSelector="defaultSelector"			
			></u-picker>	
				  
		
		 
	 </u-form>	
	
	 
		
		
	</view>
</template>

<script>
	import userItem from '@/components/user-item.vue'
	import sdcpopup from '@/components/sdc-popup.vue'
	export default {
		data() {
			return {
				
				page:1,
				status: 'loadmore',
				
				showSx:false,
				
				showA: false,
				
				mode:'region',				
				defaultRegion: ['广东省', '深圳市', '宝安区'],
				params: {					
					province: true,
					city: true,
					area: true					
				},
				defaultSelector: [0],
				
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
				
				},	  // 由 sdc-popup 触发 search 来设置 
				
				isearch:false,
				
				form:{
					gender:'',
					sex:'',
					edu:'',   //学历		
					address:'', //现居住地
				},
				
				actionSexList: [
									{
										text: '男'
									},
									{
										text: '女'
									},
									{
										text: '保密'
									}
								],				
			 	 
			};
		},
		methods:{
			loadUsers(){
			        
				this.$bus.$emit('hello',this.model)
			
			},
		
			xin(){
				
				
			},
			
			/* actionSexCallback(index) {
			 	uni.hideKeyboard();
				
			  this.form.sex = this.actionSexList[index].text;
				
			 if(this.form.sex.indexOf('男')>=0)
			 	  this.form.gender=1
			 	else
			 	  this.form.gender=0 				  
				 
				  this.loadUsers()
				  
			 }, */
			 
			 /* nextPage(){
			 	this.page = this.page + 1
			 	this.loadUsers()
			 },
			 		 
			 reload(gender=null){ 
			 	this.page = 1
			 	this.status = 'loadmore'
			 	this.users = []
			 	this.loadUsers()
			 },	 */	 
			 
			 
			 confirm(e) {
				 
			
			 	/* this.isearch=true
			 	this.form.address = e.province.label + '-' + e.city.label + '-' + e.area.label								
			 	 */
				
				this.model.address=e.province.label + '-' + e.city.label + '-' + e.area.label
				
				//console.log(this.model)
			    this.loadUsers()
			 
			 },
			 
			showPop(){
			 
			 	this.$refs.popup.showPopup()
				
			}
			
			
		},
		mounted() {
		  console.log("mounted触发一次")
		  // 安装全局事件总线
		 this.$bus.$on('search',(e)=>{
			 
		     this.model=e			 
			 this.isearch=true;				  
			 this.loadUsers()
		 }) 
			
            this.loadUsers()
		},
		components:{
			userItem,
			sdcpopup
		}
	}
</script>

<style lang="scss" scoped>
	.post-box{
		width: 750rpx;
		 
		background-color: $uni-bg-color;
		padding: $uni-spacing-row-sm;
		margin-top: $uni-spacing-col-base;
		border-radius: $uni-border-radius-base;
		.bar{
			height: 80rpx;
			border-bottom: 1rpx solid $uni-border-color-grey;
			.title{
				 
				color:#ff0000 ;
				font-size: $uni-font-size-subtitle;
				line-height: 76rpx;
				border-bottom: 4rpx solid $uni-color-primary;
			}
			.more{
				color:$uni-text-color;
				font-size: 10rpx;
			}
		}
	}
</style>
