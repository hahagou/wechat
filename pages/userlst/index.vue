<template>	
	<view class="index">		
	<sdcUserch/>	
	<listUsers :form="form" ref="listItem"/>
	
	<tabbar />
	</view>
</template>

<script> 
	import listUsers from './children/list-users.vue'
	import sdcUserch from './children/sdc-userch.vue'
	import tabbar from '@/components/tabbar.vue'
	export default {
		
		onLoad(options) {
			
			console.log(this.$api)
			  
			 this.form.gender=options.gender?options.gender:''
			 
			 this.form.mcode=options.mcode?options.mcode:''
			 this.form.nickname=options.nickname?options.nickname:''
			 
		   //console.log("usrlst index:",this.form.gender)
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
			tabbar,
			sdcUserch
		},
		 onPullDownRefresh() {
			this.$refs.listItem.reload()
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},1000)
		},
		onReachBottom() {
			console.log("onReachBottom")
			this.$refs.listItem.nextPage()
		} 
	}
</script>

<style lang="scss">

</style>
