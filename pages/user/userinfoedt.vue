<template>
	<view class="userinfo">
	   <!-- {{userId}} -->
		<sdc-user-info-edt :uid="userId" ref="detail" /> 
		<back-top :scrollTop="scrollTop" />
		
	    
		
	</view>
</template>

<script>
	
 	import sdcUserInfoEdt from './children/sdc-userinfoedt.vue' 
	import backTop from '@/components/back-top.vue'
	
	export default {
		
		
		data() {
			return {
				userId:0,
				scrollTop: 0
			};
		},
		components:{
		   sdcUserInfoEdt, 
			backTop
			
		},
		
		
		beforeCreate() {
			
		//	console.log("beforeCreate")
			//console.log(this)
			//debugger
		},
		
		created(){
		//	console.log("created")
			//console.log(this)
			//debugger
		},
		
		beforeMount() {
		// console.log("beforeMount")
		//	 console.log(this)
		//	 debugger
		},
		
		mounted(){
			
			/* console.log("mounted")
			console.log(this)
			 debugger */
			
		},		
		
		
		onLoad(options) {
			this.userId = options.id
			 console.log(this.userId)
		},
		mounted(options) { 
			this.$refs.detail.loadDetail(this.userId)
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
		
	}
</script>

<style>

</style>
