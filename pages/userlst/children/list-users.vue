<template>
	<view class="list-post">
		<view class="items">
			<user-item v-for="item,index in list" :key="index"  :users="item"/>
			
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
				list:[],
				page:1,
				status: 'loadmore',
				
			};
		},
		
		methods:{
			loadUsers(){
				
				console.log("in loadUsers:",this.form)
				
				if(this.status == 'nomore')
					return
				this.status = 'loading'
				
				this.$api.user.index({
					gender: this.form.gender,
					mcode: this.form.mcode,
					nickname:this.form.nickname,
					page: this.page
				})
				.then(res=>{
					if(res.code == 1 && res.data.data.length > 0){						
						//console.log("res wtf:",res)						
						this.list = this.list.concat(res.data.data)
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
					 
			reload(gender=null){ 
				this.page = 1
				this.status = 'loadmore'
				this.list = []
				this.loadUsers()
			} 
		},
		mounted() {
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
