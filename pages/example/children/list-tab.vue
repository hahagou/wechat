<template>
	<view class="list-tab">
		<u-tabs 
			name="title" 
			active-color="#FFBCB3"
			:list="list" :is-scroll="false" 
			:current="current" 
			@change="change"			 
			>
			
		</u-tabs>
	</view>
</template>

<script>
	export default {
		
 
		
		data() {
			return {
				list: [
					{
						title: '最新案例',
						options: ''
					}
				],
				current:0
			};
		},
		methods:{
		
			
			change(index){ 			 
				this.current =index				
				this.$emit('switchTab',{
					tab: this.list[index]
				})
			},
			loadTabs(){  
				this.$api.example.tab()
				.then(res=>{
					if(res.code == 1){
			 
						this.list = this.list.concat(res.data)
					}
				})
			}
		},
		mounted() {
		 
			this.loadTabs()						
		    
		}
	}
</script>

<style lang="scss">

</style>
