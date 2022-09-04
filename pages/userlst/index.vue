<template>
	<view class="index">		
		<list-users :form="form" ref="listUsers"/>
		<tabbar />
	</view>
</template>

<script> 
	import listUsers from './children/list-users.vue'
	import tabbar from '@/components/tabbar.vue'
	export default {
		
		onLoad(options) {
			
			 console.log(options)
			 
			 this.form.gender=options.gender?options.gender:''
			 this.form.mcode=options.mcode?options.mcode:''
			 this.form.nickname=options.nickname?options.nickname:''
			 
			console.log(this.form.gender)
		},		
		data() {
			return {
			 form:{
				gender:'',
				mcode:'',
				nickname:''					
			  }
				
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
