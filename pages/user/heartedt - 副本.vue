<template>
	<view class="userinfo" >		
		<u-form :model="form" ref="uForm" label-width="150rpx">
			
		<u-form-item labelAlign="center"  label-position="top"  label="*内心独白" prop="bio">	
			<!-- <u-input class="u-input" v-model="form.bio" :type="type" :border="border" :height="height" :auto-height="autoHeight" placeholder="请填写内心独白" /> -->
		<u-input  v-model="form.bio" placeholder="请输入内心独白" />
		</u-form-item>
			
		
		</u-form>
		
		<u-toast ref="toast" />		
		
		<view class="buttons u-flex u-row-center">
			<view class="btn-logout">				 
				
				<button form-type="submit" @click="submit">保存</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		
		
		
		onReady() {
			  this.$refs.uForm.setRules(this.rules);
		},	
		onLoad(options) {
			
			console.log(options)
			this.form.user_id=options.id
		},	
			
		mounted(){
		
		 this.$api.user.detail(this.form.user_id)
			.then(res=>{
				if(res.code == 1){
					 
					this.user = res.data
					this.form.bio=this.user.bio   
					this.form.user_id=this.user.id
					
				}
			}) 
			
 		},		
		data() {
					return {
						value: '',
						type: 'textarea',
						border: true,
						height: 500,
						width: 400,
						autoHeight: true,
						user: {},			
						form:{
							user_id:0,
							bio:''							
						}
					
					
					
					}
		},
		methods: {
			
			
			submit() {			
				
				this.$refs.uForm.validate(valid => {
					if (valid) {
						
						this.submitForm()			
											
					}
				});			
				
			},
			submitForm(){
				
			 this.$api.user.edit({
					...this.form,				
					id: this.user.id
				}).then(res=>{
						if(res.code == 1){
							
						 	this.$refs.toast.show({
						 		title: '修改成功',
						 		type: 'success',
						 		callback: ()=>{
						 			this.$emit('success')
						 		}
						 	})
							
						}else{
							this.$refs.toast.show({
								title: res.msg,
								type: 'error'
							})
						}
						
						
					}) 
				
			
			},		
		
		},
		rules: {
			
			 bio:[
			 	{ 
			 		required: true, 
			 		message: '请输入内心独白内容', 
			 		// 可以单个或者同时写两个触发验证方式 
			 		trigger: ['change','blur'],
			 	},
			 	{
			 		min: 10,
			 		message: '内容不能少于10个字',
			 		trigger: 'change'
			 	},
			 	{
			 		max: 50,
			 		message: '昵称不能大于50个字',
			 		trigger: 'change'
			 	}
				
			]
			 
			 
		 }
		
	}
</script>

<style lang="scss" scoped>
	
	.buttons{
		position: fixed;
		bottom: $uni-spacing-col-base;
		left: 0;
		right: 0;
		.btn-logout{
			width: 700rpx;
			button{
				background-color: $uni-color-primary;
				color: $uni-text-color-inverse;
				font-size: $uni-font-size-base;
			}
		}
	}
	
	.value{
		
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		
	}
	
	.u-input{
		
		background-color:#ff0000;
	}
	
	
	
</style>
