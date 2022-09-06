<template>
	<view class="post-box">
	
	    <!-- <sdc-popup ref="popup"></sdc-popup> -->
		
		<sdcpopup ref="popup" ></sdcpopup>
		
		<view class="bar u-flex u-row-around">
			<!-- <text class="title">会员列表</text> -->
			<!-- <u-icon name="more-dot-fill" class="more" @click="toMore"></u-icon> -->
			
			
	<text class="title" @click="xin" >最新</text>	<u-icon name="arrow-down-fill"  ></u-icon>
		 
	
	 
	<text @click="showA= true" >居住地</text>	<u-icon name="arrow-down-fill"  ></u-icon>	
		
	<text @click="showPop">更多情况</text>	<u-icon name="arrow-down-fill"  ></u-icon>
			
		</view>
		
	 <u-form :model="form" ref="uForm" label-width="150rpx">	
		
	 
		 
		<u-picker
				:mode="mode"			
				v-model="showA"
				:defaultRegion="defaultRegion"
				:params="params"		 
				@confirm="confirm"
				:defaultSelector="defaultSelector"			
			></u-picker>	
				  
		
		 
	 </u-form>	
	
	
	  <!-- 用户列表 -->	
		<view class="items">
			<user-item v-for="item,index in users" :users="item" :key="index" />
			 
		</view>
		
		
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
				
				model:{},
				
				
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
				
				
				
				users:[]
			};
		},
		methods:{
			loadUsers(){ //console.log('wtf:',this.$api.user.index())
				this.$api.user.index({
					
					minage:this.model.minage?this.model.minage:'',   // 年龄范围
					maxage:this.model.maxage?this.model.maxage:'',
					
					mintall:this.model.mintall?this.model.mintall:'',  // 身高范围
					maxtall:this.model.maxtall?this.model.maxtall:'',
					
					minWeight:this.model.minWeight?this.model.minWeight:'',  //体重范围
					maxWeight:this.model.maxWeight?this.model.maxWeight:'',
					
					marrige:this.model.marrige?this.model.marrige:'',  //婚史
					
					car:this.model.car?this.model.car:'',     // 购车
					
					house:this.model.house?this.model.house:'',   // 购房
									
					edu:this.model.edu?this.model.edu:'',     // 学历		
								
					work:this.model.work?this.model.work:'',     //  工作
					
					salary:this.model.salary?this.model.salary:'',  // 工资
					
					
					gender: this.form.gender,		
					address:this.form.address,
					page: this.page
				})
				.then(res=>{
					
					
					if(res.code == 1 ){
						this.users = res.data.data	
											
						if(res.data.data.length){
							this.status = 'loadmore'							
						}else
						{
						  this.status = 'nomore'
						}
					}
				})
			},
			/* toMore(){  console.log("toMore")
				uni.switchTab({
					url: '/pages/userlst/index',	
					success(res){
						console.log('success',res)
					},
					fail(err) {
						console.log('failure',err)
					}									
				})
			}, */
			xin(){
			 /* this.model.gender=this.form.gender
			  this.model.address=this.form.address	  
			  console.log(this.model) */
			  	
			},
			
			 actionSexCallback(index) {
			 	uni.hideKeyboard();
				
			  this.form.sex = this.actionSexList[index].text;
				
			 if(this.form.sex.indexOf('男')>=0)
			 	  this.form.gender=1
			 	else
			 	  this.form.gender=0 				  
				  //this.users=[];
				  this.loadUsers()
				  
			 },
			 
			 nextPage(){
			 	this.page = this.page + 1
			 	this.loadUsers()
			 },
			 		 
			 reload(gender=null){ 
			 	this.page = 1
			 	this.status = 'loadmore'
			 	this.list = []
			 	this.loadUsers()
			 },		 
			 
			 
			 confirm(e) {			 	
			 	
			 	this.form.address = e.province.label + '-' + e.city.label + '-' + e.area.label		
			 	this.loadUsers()
			 },
			 
			showPop(){
			 
			 	this.$refs.popup.showPopup()
				
			}
			
			
		},
		mounted() {
		  
		  // 安装全局事件总线
		 this.$bus.$on('search',(e)=>{
		     this.model=e		
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
		min-height: 300rpx;
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
