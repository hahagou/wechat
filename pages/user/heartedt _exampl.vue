<template>
<view class="userinfo" >		
 <u-form :model="form" ref="uForm" label-width="150rpx" labelAlign="center"  label-position="top">
	
		<u-form-item label="*内心独白" prop="intro">
			<u-input v-model="form.intro" />
		</u-form-item>
	</u-form>
	
</view>	
</template>

<script>
export default {
	
	
	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},	
	data() {
		return {
			form: {
				name: '',
				intro: ''
			},
			rules: {
				name: [
					{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur,change'
					}
				],
				intro: [
					{
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					}
				]
			}
		};
	}
};
</script>