<template>
	<view class="userinfo" >
		
	
	 <!-- <user-popup ref="popup"></user-popup> -->
	  <user-pop-up ref="popup"></user-pop-up>
	
	  
	  
	  <u-form :model="form" ref="uForm" label-width="150rpx">
	  	
	  <u-form-item labelAlign="center" label="昵称" prop="nickname">
	  	<u-input v-model="form.nickname" placeholder="请输入昵称" />
	  </u-form-item>
	  
       	  
      <u-form-item labelAlign="center" label="年龄" prop="age">
       	  	<u-input type="integer" v-model="form.age" placeholder="请输入年龄" />
      </u-form-item>
	
	
	    <u-form-item labelAlign="center" label="身高" prop="tall">
	  	  	<u-input type="integer" v-model="form.tall" placeholder="请输入身高" />
	  	  </u-form-item>
	  
	  
	    <u-form-item labelAlign="center" label="体重" prop="weight">
	  	  	<u-input type="number" v-model="form.weight" placeholder="请输入体重" />
	  	  </u-form-item>
	  
	
	  <u-form-item labelAlign="center" label="性别" prop="sex">
	  		<u-input :border="border" type="select" :select-open="showSx" v-model="form.sex" placeholder="请选择性别" @click="showSx = true"></u-input>
	  	</u-form-item>
		
		
		
	  <u-cell-item  v-if="!form.edu"    title="学历" @click="showPop(item,form)" :arrow="true">  
				 
			 	</u-cell-item> 
				
		   
			<u-form-item v-if="form.edu" labelAlign="center" label="学历" prop="xueli">
				<u-input v-if="form.edu" disabled=true  v-model="form.edu" @click="showPop(item,form)" placeholder="请输入学历" />
			</u-form-item> 
			  
 	
			
			
			
			
			
			  
		<u-form-item labelAlign="center" label="婚姻状态" prop="marrige">
				<u-input :border="border" type="select" :select-open="showMg" v-model="form.marrige" placeholder="请选择婚姻状态" @click="showMg = true"></u-input>
			</u-form-item>	  
			
			
		
		
		<u-picker
			:mode="mode"			
			v-model="showA"
			:defaultRegion="defaultRegion"
			:params="params"		 
			@confirm="confirm"
			:defaultSelector="defaultSelector"			
		></u-picker>	
			  
	    <u-cell-item  v-if="!form.address"    title="现居住地" @click="showA= true" :arrow="true"> 
	    </u-cell-item> 
	
	<u-form-item v-if="form.address" labelAlign="center" label="现居住地" prop="address">
		<u-input v-if="form.address" disabled=true  v-model="form.address" @click="showA= true" placeholder="选择现居住地" />
	</u-form-item> 
	
	  
	  </u-form>  
	  
	  <u-action-sheet :list="actionSexList" v-model="showSx" @click="actionSexCallback"></u-action-sheet>
	  
	  
	  <u-action-sheet :list="actionMgList" v-model="showMg" @click="actionMgCallback"></u-action-sheet>
	  
	  <u-toast ref="toast" />
	  
	  <view class="buttons u-flex u-row-center">
	  	<view class="btn-logout">				 
	  		
	  			<button form-type="submit" @click="submit">保存</button>
	  	</view>
	  </view>
	  
	  
	  
		
		  
	</view>
	
</template>

<script> 

    import UserPopUp from './user-popup.vue' 

	export default {
	
	props:['uid'],
	
	onReady() {
		
		this.$refs.uForm.setRules(this.rules);
			
	},	
	mounted(){
		
	     this.form.user_id = this.uid
		
		 console.log("接收id:",this.form.user_id)
		
		this.$api.user.detail(this.form.user_id)
		.then(res=>{
			if(res.code == 1){
				
				this.user = res.data
				console.log("mounted 周期里:",this.user)
				console.log(this.user.nickname)
				
				this.form.nickname=this.user.nickname   //昵称
				this.form.age=this.user.age  //年龄
					this.form.tall=this.user.tall  // 身高
					this.form.sex=this.user.gender?'男':'女'
					this.form.weight=this.user.weight // 体重					
					this.form.marrige=this.user.marrige //婚姻状态 
				    this.form.edu=this.user.edu // 学历 
				    this.form.address=this.user.address //现居住地
			}
		})
		
		 
		
	},	
	 data() {
	 	return {
			
			showSx:false,
			
			showMg:false,
			
			showA: false,
			
			mode:'region',
			
			defaultRegion: ['广东省', '深圳市', '宝安区'],
			
			params: {
				
				province: true,
				city: true,
				area: true
				
			},
			
			defaultSelector: [0],
			
			user: {},
			
			form:{
				user_id:0,
				nickname:'',
				age:0,  //年龄
				tall:0,  // 身高
				gender:0, //性别
				weight:0, // 体重		
				edu:'',   //学历
				sex:'',// 性别文字
				marrige:'' ,// 婚姻状态,
				address:'', //现居住地
			},
			
			
			actionSexList: [
								{
									text: '男'
								},
								{
									text: '女'
								},
								{
									text: '保密'
								}
							],
							
			actionMgList: [
								{
									text: '未婚'
								},
								{
									text: '短育未婚'
								},
								{
									text: '离异'
								},
								{
									text: '丧偶'
								}
			],				
						
			
			
			item:{     // 学历选项
				  data:  
				   [ {
					name: '无'
					}, 
					{
					name: '小学'
					}, 
					{
					name: '初中',					
				    },
					{
					name: '中专',					
					},
					{
					name: '高中',					
					},
					{
					name: '大专',					
					},
					{
					name: '本科',					
					},
					{
					name: '硕士',					
					},
					{
					name: '博士',					
					},
					{
					name: '博士后',					
					}					
				   
				   ],
				   
				   title:'学历',
				   
				    field:'edu',
					
				   multi:0  //是否多选 1是 0否
				   
				 },				 
			
			 
			 
			 rules: {
			 	nickname: [
			 		{ 
			 			required: true, 
			 			message: '请输入昵称', 
			 			// 可以单个或者同时写两个触发验证方式 
			 			trigger: ['change','blur'],
			 		},
			 		{
			 			min: 2,
			 			message: '昵称不能少于2个字',
			 			trigger: 'change'
			 		},
			 		{
			 			max: 10,
			 			message: '昵称不能大于10个字',
			 			trigger: 'change'
			 		},
					{
				  	trigger: ['blur'],
						
						 asyncValidator: (rule, value, callback) => { 
							
						this.$u.post('api.user/nickname', {userid:this.form.user_id,nickname: value}).then(res => {
									
							// 如果验证不通过，需要在callback()抛出new Error('错误提示信息')
							 if(res.code) {
								 console.log("昵称可用",res.code)
								 callback()
							
							} else {
								// 如果校验通过，也要执行callback()回调								
								console.log(res.code)
								callback(new Error('昵称重复'));
							 } 
							 
						})						
							
						},  
								// 如果是异步校验，无需写message属性，错误的信息通过Error抛出即可
								// message: 'xxx'
					}
					
					
			 	],
				
				age:[
					
					{
						required: true,
						message: '请输入年龄',
						trigger: ['blur', 'change']
					},{
						// 自定义验证函数，见上说明
						validator: (rule, value, callback) => {
						
							// this.$u.test.mobile()就是返回true或者false的
							return this.$u.test.number(value);
						},
						message: '输入不正确',
						// 触发器可以同时用blur和change
						trigger: ['change','blur'],
					}					
				],
				tall:[					
					{
						required: true,
						message: '请输入身高',
						trigger: ['blur', 'change']
					},{						
						validator: (rule, value, callback) => {						
							return this.$u.test.number(value);
						},
						message: '输入不正确',				
						trigger: ['change','blur'],
					}
					
				],
				weight:[					
					{
						required: true,
						message: '请输入体重',
						trigger: ['blur', 'change']
					},{						
						validator: (rule, value, callback) => {						
							return this.$u.test.number(value);
						},
						message: '输入不正确',				
						trigger: ['change','blur'],
					}
					
				]
				
			}
				 
			
	 	}
	 },	
	 methods:{
		 
		actionSexCallback(index) {
			uni.hideKeyboard();
			this.form.sex = this.actionSexList[index].text;
			if(this.form.sex=='男')
			  this.form.gender=1
			else
			  this.form.gender=0
			
		},
		
		actionMgCallback(index) {
			uni.hideKeyboard();
			this.form.marrige = this.actionMgList[index].text;
		},
		 
		loadDetail(id){
			this.$api.user.detail(id)
			.then(res=>{
				if(res.code == 1){
					
					//this.user = res.data
					console.log("loadDetail 方法里:",this.user)
				}
			})
		},
		
		showPop(e,data){
			//console.log(e)
			
			if(this.hasLogin){				
				
				this.$refs.popup.showPopup(e,data)
				
			}else{
				this.islogin();
			}	
			
		},	
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
		
		islogin(){
			
			this.$refs.toast.show({
				title: '请先登录',
				type: 'warning',
				callback: ()=>{
					uni.switchTab({
						url: '/pages/user/index'
					})
				}
			})
			
			
		},		
	 
		confirm(e) {			
			
			this.form.address = e.province.label + '-' + e.city.label + '-' + e.area.label;			
			
		},
		 
		
			
				  
	 },
	 
	 components:{
		 
		UserPopUp 
		 
	 },
	 computed: {
			hasLogin(){
				return this.$store.getters.hasLogin
			},
			/* c_xueli(){							
				
				// return this.$store.getters.userdetail.title;
				
				this.a_xueli=this.$store.getters.userdetail.data 
				
				if(this.a_xueli!==undefined && this.a_xueli!=null )
				  { //console.log("数组出来:",this.a_xueli.length) 
				  
				     this.a_xueli.forEach((element,i)=>{
						 
						 if(element.active)
						 {
							 this.form.edu=element.name
							// console.log(this.form.edu)
						 }
						 
					 })
				  
					
				    return this.a_xueli.length
				  }
				
				return 0
			} */
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
	 
	 
	 .dpdn{
		display: flex; 
		flex-direction: row;
		align-items: flex-start; 
		width: 100%;
		height: 70rpx;
		background-color: aqua;
		
		 
	 }
	 
	 
	 
	
	
</style>
