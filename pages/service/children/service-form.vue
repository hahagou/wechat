<template>
	<view class="controls">
		<u-form :model="form" ref="uForm" label-width="150rpx">
			<u-form-item label="姓名" prop="username">
				<u-input v-model="form.username" placeholder="请输入姓名" />
			</u-form-item>
			<u-form-item label="手机号" prop="mobile">
				<u-input v-model="form.mobile" placeholder="请输入手机号" />
			</u-form-item>
			<u-form-item label="预约时间" prop="date">
				<u-input v-model="form.date" 
					@click="dateShow = true"
					placeholder="请选择预约时间"
					:disabled="true"
					></u-input>
				<u-picker mode="time" v-model="dateShow" :params="dateParams" @confirm="changeDate"></u-picker>
			</u-form-item>
			<u-form-item label="备注" prop="remark">
				<u-input v-model="form.remark" placeholder="请输入备注" />
			</u-form-item>
		</u-form>
		<view class="buttons">
			<button class="submit" @click="submit" :disabled="false">提交</button>
		</view>
		<u-toast ref="toast" />
	</view>
</template>

<script>
	export default {
		props:{
			item:Object
		},
		methods:{
			changeDate(e){
				this.form.date = `${e.year}-${e.month}-${e.day}`
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.submitForm()
					}
				});
			},
			submitForm(){
				this.$api.order.add({
					...this.form,
					ordertime: this.form.date,
					title: this.item.title,
					service_id: this.item.id
				})
				.then(res=>{
					if(res.code == 1){
						// 待优化 
						this.form.username = ''
						this.form.mobile = ''
						this.form.date = ''
						this.form.remark = ''
						
						// this.$refs.uForm.resetFields()
						// 更新个人中心订单列表
						uni.$emit('update_orders')
						this.$refs.toast.show({
							title: '预约成功',
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
			}
		},
		data() {
			return {
				form:{
					username: '',
					mobile: '',
					date: '',
					remark:''
				},
				dateShow:false,
				isValidate:false,
				dateParams:{
					year:true,
					month:true,
					day:true
				},
				rules: {
					username: [
						{ 
							required: true, 
							message: '请输入姓名', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change','blur'],
						},
						{
							min: 2,
							message: '姓名不能少于2个字',
							trigger: 'change'
						},
						{
							max: 10,
							message: '姓名不能大于10个字',
							trigger: 'change'
						},
					],
					mobile: [
						{ 
							required: true, 
							message: '请输入手机号', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change','blur'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// this.$u.test.mobile()就是返回true或者false的
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: ['change','blur'],
						}
					],
					date: [
						{ 
							required: true, 
							message: '请选择预约时间', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change','blur'],
						},
					]
				}
			};
		},
		mounted() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style lang="scss" scoped>
.controls{
	padding: $uni-spacing-row-base;
	.buttons{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		.submit{
			background-color: $uni-color-primary;
			font-size: $uni-font-size-subtitle;
			color: $uni-text-color-inverse;
			border-radius: 0rpx;
		}
	}
}
</style>
