<template>
	<view class="list-post">
		<view class="items">
			<user-item v-for="item,index in users" :key="index"  :users="item"/>			
			<u-loadmore :status="status" />
		</view>
	</view>
</template>

<script>
	import userItem from '@/components/user-item.vue'
	export default {
		
		props:['form'],
		
		data() {
			return {
				users:[],
				model:{},
				page:1,
				status: 'loadmore',
				
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
			
			nextPage(){
				this.page = this.page + 1
				this.loadUsers()
			},
					 
			reload(){ 
				this.page = 1
				this.status = 'loadmore'
				this.users = []
				this.loadUsers()
			} 
		},
		mounted() {
			
			this.$bus.$on('search',(e)=>{
			    this.model=e				
				 this.loadUsers()
			}) 
			
			this.loadUsers()
		},
		onLoad() {
			console.log("onload")
		},
		components:{
			userItem
		}
	}
</script>

<style lang="scss">
	.items{
		padding: 0 $uni-spacing-row-base;
		background-color: $uni-bg-color;
		margin-top: $uni-spacing-col-base;
	}
</style>
