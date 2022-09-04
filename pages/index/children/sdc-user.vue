<template>
	<view class="post-box">
	
	    <!-- <sdc-popup ref="popup"></sdc-popup> -->
		
		<sdcpopup ref="popup" ></sdcpopup>
		
		<view class="bar u-flex u-row-around">
			<!-- <text class="title">会员列表</text> -->
			<!-- <u-icon name="more-dot-fill" class="more" @click="toMore"></u-icon> -->
			
			
	<text class="title" @click="xin" >最新</text>	<u-icon name="arrow-down-fill"  ></u-icon>
		 
		 
	<text v-if="!form.sex"  @click="showSx = true" >性别</text>	
	<text v-if="form.sex"  @click="showSx = true" >{{form.sex}}</text>	
	<u-icon name="arrow-down-fill"  ></u-icon>
	 
	<text @click="showA= true" >居住地</text>	<u-icon name="arrow-down-fill"  ></u-icon>		
	<text @click="showPop">更多情况</text>	<u-icon name="arrow-down-fill"  ></u-icon>
			
		</view>
		
	 <u-form :model="form" ref="uForm" label-width="150rpx">	
		
 <u-action-sheet :list="actionSexList" v-model="showSx" @click="actionSexCallback"></u-action-sheet>
	 
		 
		<u-picker
				:mode="mode"			
				v-model="showA"
				:defaultRegion="defaultRegion"
				:params="params"		 
				@confirm="confirm"
				:defaultSelector="defaultSelector"			
			></u-picker>	
				  
		
		 
	 </u-form>	
		
		<view class="items">
			<user-item v-for="item,index in users" :users="item" :key="index" />
		</view>
		
		
	</view>
</template>

<script>
	import userItem from '@/components/user-item.vue'
	import sdcpopup from './sdc-popup.vue'
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
			loadusers(){ //console.log('wtf:',this.$api.user.index())
				this.$api.user.index({
					gender: this.form.gender,		
					address:this.form.address,
					page: this.page
				})
				.then(res=>{
					if(res.code == 1){
						this.users = res.data.data
						
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
				
				
			},
			
			 actionSexCallback(index) {
			 	uni.hideKeyboard();
				
			  this.form.sex = this.actionSexList[index].text;
				
			 if(this.form.sex.indexOf('男')>=0)
			 	  this.form.gender=1
			 	else
			 	  this.form.gender=0 				  
				  //this.users=[];
				  this.loadusers()
				  
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
			 	this.loadusers()
			 },
			 
			showPop(){
			 
			 	this.$refs.popup.showPopup()
				
			}
			
			
		},
		mounted() {
			this.loadusers()
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
