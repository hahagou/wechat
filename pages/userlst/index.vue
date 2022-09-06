<template>
 
	
	<view class="index">
		<sdcUserch/>
		
		<list-users :form="form" ref="listItem"/>
		<tabbar />
	</view>
</template>

<script> 
	import listUsers from './children/list-users.vue'
	import sdcUserch from './children/sdc-userch.vue'
	import tabbar from '@/components/tabbar.vue'
	export default {
		
		onLoad(options) {
			
			 
			 this.form.gender=options.gender?options.gender:''
			 this.form.mcode=options.mcode?options.mcode:''
			 this.form.nickname=options.nickname?options.nickname:''
			 
			 
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
			this.$refs.listItem.nextPage()
		} 
	}
</script>

<style lang="scss">

</style>
