<template>
<view class="userinfo" >		
 <u-form :model="form" ref="uForm" label-width="150rpx" labelAlign="center"  label-position="top">
	
		<u-form-item label="*内心独白" prop="bio">
			<!-- <u-input v-model="form.bio" /> -->
			
			<u-input class="u-input" v-model="form.bio" :type="type" :border="border" :height="height" :auto-height="autoHeight" placeholder="请填写内心独白" />
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
	
	
	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},	
	onLoad(options) {		
		//console.log(options)
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
			
			type: 'textarea',
			border: true,
			height: 500,
			width: 400,
			autoHeight: true,
			user: {},			
			form:{
				user_id:0,
				bio:''							
			},
			rules: {
			
				bio: [
					{
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					}
				]
			}
		};
	},
	methods:{
		
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
		
		
	}
	
	
	
};
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
