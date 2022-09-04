<template>
	<view class="header-form">
		<view class="buttons">
			<u-button :custom-style="style" @click="openModal">点击留言</u-button>
		</view>
		<u-popup v-model="show" mode="top" border-radius="8" :closeable="true" width="80%" class="popup">
			<view class="content-slot">
				<u-form :model="form" ref="uForm" label-width="140rpx">
					<u-form-item label="姓名" prop="username">
						<u-input v-model="form.username" placeholder="请输入姓名" />
					</u-form-item>
					<u-form-item label="联系电话" prop="mobile">
						<u-input v-model="form.mobile" placeholder="请输入联系电话" />
					</u-form-item>
					<u-form-item label="留言内容" prop="content">
						<u-input v-model="form.content" type="textarea" placeholder="请输入留言内容" />
					</u-form-item>
				</u-form>
				<view class="buttons">
					<button class="submit" @click="submit">提交</button>
				</view>
			</view>
		</u-popup>
		
		<u-toast ref='toast' />
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.submitForm()
					}else{
						this.$refs.uModal.clearLoading()
					}
				});
			},
			submitForm(){
				this.$api.message.add(this.form)
				.then(res=>{
					if(res.code == 1){
						this.form.username = ''
						this.form.mobile = ''
						this.form.content = ''
						this.$refs.toast.show({
							title: '留言成功',
							type: 'success',
							callback: ()=>{
								this.show = false
							}
						})
					}else{
						this.$refs.toast.show({
							title: res.msg,
							type: 'warning'
						})
					}
				})
			},
			openModal(){
				if(this.hasLogin){
					this.show = true
				}else{
					this.$refs.toast.show({
						title: '请先登录',
						type: 'warning',
						callback: ()=>{
							uni.switchTab({
								url: '/pages/user/index'
							})
						}
					})
				}
			}
		},
		data() {
			return {
				style: {
					backgroundColor: '#FFBCB3',
					color: '#FFFFFF'
				},
				form: {
					username: '',
					mobile: '',
					content: ''
				},
				show: false,
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
					content: [
						{
							required: true, 
							message: '请输入留言内容', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change','blur'],
						},
						{
							min: 10,
							message: '留言内容不能小于10个字',
							trigger: 'change'
						},
					]
				}
			};
		},
		mounted() {
			this.$refs.uForm.setRules(this.rules);
		},
		computed: {
			...mapGetters(['hasLogin'])
		}
	}
</script>

<style lang="scss" scoped>
	.header-form{
		padding: $uni-spacing-col-base $uni-spacing-row-base;
		.buttons{
			button{
				height: 70rpx;
				font-size: $uni-font-size-base;
				background-color: $uni-color-primary;
				color: $uni-text-color-inverse;
				line-height: 70rpx;
			}
		}
	}
	.content-slot{
		padding: $uni-spacing-col-sm $uni-spacing-row-sm;
	}
</style>
