<template>
	<view class="tab-box">
		<u-grid :col="4" :border="false" class="u-grid">
			<u-grid-item class="u-grid-item"  v-for="item,index in tabs" :key="index" @click="clickTabItem(index)">
				<image :src="item.image" mode="widthFix"></image>
				<view class="grid-text">{{item.title}}</view>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	import {mapActions} from 'vuex'
	export default {
		data() {
			return {	
				tabs:[]
			};
		},
		methods:{
			...mapActions(['isInPage']),
			loadTab(){
				this.$api.home.tab()
				.then((res)=>{ 
					if(res.code == 1){
						this.tabs = res.data
					}
				})
			},
			clickTabItem(index){ 
				
				//this.$store.commit('set_userdetail',this.form) // by andy.ma set user Gender
				
		/* 		let right=this.tabs[index].path.split('?')[1]
				
			 				
				let params=right.split('&')
				
				let keys=Object.keys(this.form)
				
				//console.log(keys)
				
				for(let i in params)
				{
				//  console.log(params[i])
					let key=params[i].split('=')[0]  
					let value=params[i].split('=')[1] 
					 
					// console.log(key,value)
					 
					 for(let f in this.form)
					 {
					  	//					 		
						if(key==f)
					 	 {   						     
							 this.form[f]=value
								
							 this.$store.commit('set_userdetail',this.form)
							 // 
							 break;
						 }
					 }
				} */
			   
			   
				//console.log(this.$store.getters.userdetail)
						
				 this.isInPage(this.tabs[index].path)
				.then(()=>{
			
					
				　uni.reLaunch({
					 url: this.tabs[index].path,
					   success: function(e) {
					     var page = getCurrentPages()[0];
					     if(page == undefined || page == null) return;
					             page.onLoad(); //或者其它操作
					      }
					});
					
				})
				.catch(()=>{
					uni.navigateTo({
						url: this.tabs[index].path
					})
				})
				
				
			},
		},
		mounted() {
			this.loadTab()
		}
	}
</script>

<style lang="scss" scoped>
	.tab-box{
		width: 730rpx;
		margin-left: 10rpx;
		padding: $uni-spacing-col-base 0;
		border-radius: $uni-border-radius-lg;
		.u-grid{
			.u-grid-item{
				font-size: $uni-font-size-sm;
				color: $uni-text-color-grey;
				image{
					width: 88rpx;
					height:88rpx;
				}
			}
		}
		.grid-text{
			color:#000;
			margin-top:10rpx;
			font-size: 12px;
			 
		}
	}
</style>
