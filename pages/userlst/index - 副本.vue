<template>
	<view class="index">		
		<list-users :gender="gender" ref="listUsers"/>
		<tabbar />
	</view>
</template>

<script> 
	import listUsers from './children/list-users.vue'
	import tabbar from '@/components/tabbar.vue'
	export default {
		
		onLoad(options) {
			
			 console.log(options)
			
			/* let detail=this.$store.getters.userdetail
			 
			 for(let d in detail) 
			 {
				if( d=='gender' && detail[d]!=="")
				{
					//console.log(detail[d])
					this.gender=detail[d]
				}
				 
			 } */
			 
			// console.log("in userlst index:",this.gender)
			
		},		
		data() {
			return {
				gender:''
			}
		},		
		components:{		
			listUsers,
			tabbar
		},
		 onPullDownRefresh() {
			this.$refs.listUsers.reload(this.gender)
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},1000)
		},
		onReachBottom() {
			this.$refs.listUsers.nextPage()
		} 
	}
</script>

<style lang="scss">

</style>
