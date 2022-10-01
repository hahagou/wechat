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
		
		mounted() {
			
			this.$bus.$on('hello',(data)=>{				
				console.log("this.model",data)
			 	 				
				this.model=data
				this.reload()
			})
			
			this.loadUsers()
			 console.log("mounted in lstuser",this.form.gender)
		} ,
		
		data() {
			return {
				users:[],
				model:{},
				page:1,
				status: 'loadmore',
				
			};
		},
		
		methods:{
		loadUsers(){  
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
				
				
				gender: this.form.gender?this.form.gender:this.model.gender?this.model.gender:'',		
				
				address:this.model.address?this.model.address:'',
								
								
				mcode:this.form.mcode?this.form.mcode:'',
				nickname:this.form.nickname?this.form.nickname:'',
				
				
				page: this.page
			})
			.then(res=>{
					if(res.code == 1 && res.data.data.length > 0){
						//this.users =[]
						this.users = this.users.concat(res.data.data)
						this.status = 'loadmore'
					}else{
						this.status = 'nomore'
					}
				})
		},
			
			nextPage(){
				this.page = this.page + 1
				this.loadUsers()
			},
					 
			reload(){  console.log("reload")
			    this.page = 1
				this.status = 'loadmore'
				this.users = []
				this.loadUsers()
			} 
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
