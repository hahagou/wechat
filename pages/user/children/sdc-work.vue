<template>   <!-- work 工作  salary 年薪  relation 家庭关系 多选  house 单选 多选   car 是否购车 单选 -->
	<view class="userinfo" >		
	
	  <serch-popup  ref="popup"></serch-popup>	  
	  
	  <u-form :model="form" ref="uForm" label-width="150rpx">
		  
       <!-- work  -->
		<u-select @click="showWk = true" :default-value="defaultValue" :mode="mode" v-model="showWk" :list="job" @confirm="confirm" ></u-select>
	 
		<u-cell-item v-if="!form.work"  title="工作" @click="showWk=true" :arrow="true"> 
		</u-cell-item> 
		
		<u-form-item v-if="form.work" labelAlign="center" label="工作" prop="work">
			<u-input v-if="form.work" disabled=true  v-model="form.work" @click="showWk = true" placeholder="请输入工作" />
		</u-form-item> 	  
		
		
		<!--salary -->
		
		<u-select @click="showXz = true" :default-value="defaultValue" :mode="mode" v-model="showXz" :list="xinzi" @confirm="confirmXz" ></u-select>
			 
		<u-cell-item v-if="!form.salary"  title="年薪" @click="showXz=true" :arrow="true"> 
		</u-cell-item> 
		
		<u-form-item v-if="form.salary" labelAlign="center" label="年薪" prop="salary">
			<u-input v-if="form.salary" disabled=true  v-model="form.salary" @click="showXz = true" placeholder="请输选择年薪" />
		</u-form-item> 	  
		
		
		<!-- relation -->
		
		<u-cell-item  v-if="!form.relation"   title="家庭关系" @click="showPop(relationlst,form)" :arrow="true">
		</u-cell-item> 
						
				   
		<u-form-item v-if="form.relation" labelAlign="center" label="家庭关系" prop="relation">
			 <u-input v-if="form.relation" disabled=true  v-model="form.relation" @click="showPop(relationlst,form)" placeholder="请输入家庭关系" />
		</u-form-item> 
					  
		
		
		<!-- house -->
			  
	    <u-select @click="showHs = true" :default-value="defaultValue" :mode="mode" v-model="showHs" :list="lshouse" @confirm="confirmGf" ></u-select>
	    	 
	    <u-cell-item v-if="!form.house"  title="购房" @click="showHs=true" :arrow="true"> 
	    </u-cell-item> 
	    
	    <u-form-item v-if="form.house" labelAlign="center" label="购房" prop="house">
	    	<u-input v-if="form.house" disabled=true  v-model="form.house" @click="showHs = true" placeholder="请输选择购房情况" />
	    </u-form-item> 	 
	   
	
	    <!-- car -->	
			  
			  
		<u-select @click="showCar = true" :default-value="defaultValue" :mode="mode" v-model="showCar" :list="lscar" @confirm="confirmCar" ></u-select>
			 
		<u-cell-item v-if="!form.car"  title="购车" @click="showCar=true" :arrow="true"> 
		</u-cell-item> 
		
		<u-form-item v-if="form.car" labelAlign="center" label="购车" prop="house">
			<u-input v-if="form.car" disabled=true  v-model="form.car" @click="showCar = true" placeholder="请输选择购车情况" />
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
	
	 import SerchPopup from './user-popup.vue' 
	export default {
		
		props:['uid'],
		
		onReady() {
			
			//this.$refs.uForm.setRules(this.rules);
				
		},
		
		mounted(){
			
		  this.form.id = this.uid
		  
		  this.$api.user.detail(this.form.id)
		  .then(res=>{
		  	if(res.code == 1){
		  		
		  		this.user = res.data
		  	    this.form.id=this.user.id
			    this.form.work=this.user.work
		  		this.form.salary=this.user.salary
				
				this.form.car=this.user.car
				this.form.house=this.user.house
				this.form.relation=this.user.relation
				
		  	
		  	}
		  })
			 
		},				
		data() {
			return {
			
			 
			  defaultValue: [3],
			  mode: 'single-column',	
			
			  showWk:false,	
			  
			  showXz:false,
			  
			  showHs:false,
			  
			  showCar:false,
				
			  user: {},	
			  
			  form:{
				 id:0,
				 work:'',	  
				 salary:'',
				 relation:'',
				 house:'',
			     car:'',
			  },
			  
			  relationlst:{     // 学历选项
			  	  data:  
			  	   [ {
			  		name: '父亲'
			  		}, 
			  		{
			  		name: '母亲'
			  		}, 
			  		{
			  		name: '哥哥',					
			  	    },
			  		{
			  		name: '姐姐',					
			  		},
			  		{
			  		name: '弟弟',					
			  		},				
			  	   {
			  	   name: '妹妹',					
			  	   },
				   {
				   name: '爷爷',					
				   },
				   {
				   name: '奶奶',					
				   },
				   {
				   name: '儿子',					
				   },
				   {
				   name: '女儿',					
				   },
				   {
				   name: '儿子（离异）',					
				   },
				   {
				   name: '女儿（离异）',					
				   },
				   {
				   name: '单身',					
				   },
				   
				   
			  	   ],
			  	   
			  	   title:'家庭关系',
				   
				   field:'relation',
			  	   
			  	   multi:1  //是否多选 1是 0否
			  	   
			  	 },		
			  
			  xinzi:[
				  
				  {
				  	value:'4万以内',
				  	label:'4万以内'
				  },
				  {
				  	value:'4万-6万',
				  	label:'4万-6万'
				  },
				  {
				  	value:'6万-8万',
				  	label:'6万-8万'
				  },
				  {
				  	value:'8万-10万',
				  	label:'8万-10万'
				  },
				  {
				  	value:'10万-20万',
				  	label:'10万-20万'
				  },
				  {
				  	value:'20万-30万',
				  	label:'20万-30万'
				  },
				  {
				  	value:'30万-50万',
				  	label:'30万-50万'
				  },
				  {
				  	value:'50万-80万',
				  	label:'50万-80万'
				  },
				  {
				  	value:'80万-100万',
				  	label:'80万-100万'
				  },
				  
				  {
				  	value:'100万以上',
				  	label:'100万以上'
				  }
			  ],
			  
			  
			  job:[					 
			  		{
			  			value:'销售',
						label:'销售'
			  		},
			  		{
			  			value:'技术',
						label:'技术'
			  		},
			  		{
			  			value:'财务',
					    label:'财务'
			  		},
			  		{
			  			value:'公务员',
					    label:'公务员'
			  		},
			  		{
			  			value:'工程'	,
						label:'工程'	
			  		},
			  		{
			  			value:'银行'	,
						label:'银行'	
			  		},
			  		{
			  			value:'普通职员',
					    label:'普通职员'
			  		},
			  		{
			  		  value:'个体户',
					  label:'个体户'
			  		},
			  		{
			  		  value:'律师',
					  label:'律师'
			  		},
			  		{
			  		   value:'运营',
					   label:'运营'
			  		},
			  		{
			  			value:'发型师',
						label:'发型师'
			  		},
			  					{
			  					  value:'培训',
								  label:'培训'
			  					},
			  					{
			  					  value:'设计',
								  label:'设计'
			  					},
			  					{
			  					  value:'药剂师',
								  label:'药剂师'
			  					},
			  					{
			  					  value:'护士',
								  label:'护士'
			  					},
			  					{
			  					  value:'医生',
								  label:'医生'
			  					},
			  					{
			  					  value:'老师',
								  label:'老师'
			  					},
			  					{
			  					  value:'保险',
								  label:'保险'
			  					},
			  					{
			  					  value:'服务行业',
								  label:'服务行业'
			  					},
						{
							value:'其他'	,
							 label:'其他'
						}
			  					
			  	],
			  				
			   lshouse:[
			   				  
			   			{
			   				  	value:'与父母同住',
			   				  	label:'与父母同住'
			   			},
						{
							  	value:'有婚房无贷款',
							  	label:'有婚房无贷款'
						},
						{
							  	value:'有婚房有贷款',
							  	label:'有婚房有贷款'
						},
						{
							  	value:'住亲朋家',
							  	label:'住亲朋家'
						},
						{
							  	value:'与父母同住',
							  	label:'与父母同住'
						},
						{
							  	value:'住单位房',
							  	label:'住单位房'
						},
						{
							  	value:'婚后购房',
							  	label:'婚后购房'
						},
						{
							  	value:'已购房无贷款',
							  	label:'已购房无贷款'
						},
						{
							  	value:'已购房有贷款',
							  	label:'已购房有贷款'
						},
						{
							  	value:'租房',
							  	label:'租房'
						},
						{
							  	value:'需要时可购置',
							  	label:'需要时可购置'
						},
						{
							  	value:'房子买在老家',
							  	label:'房子买在老家'
						},
						
						{
							  	value:'自建房',
							  	label:'自建房'
						},
							  
					],
					
				lscar:[
					
					{
						  	value:'婚后购车',
						  	label:'婚后购车'
					},
					{
						  	value:'已购车无贷款',
						  	label:'已购车无贷款'
					},
					{
						  	value:'已购车有贷款',
						  	label:'已购车有贷款'
					},
					{
						  	value:'未购车',
						  	label:'未购车'
					},
					{
						  	value:'需要时购车',
						  	label:'需要时购车'
					},
				]
				
			}
		},
		methods: {
			
			loadDetail(id){
				this.$api.user.detail(id)
				.then(res=>{
					if(res.code == 1){
						
						this.user = res.data
						 
					}
				})
			},
			
			actionJobCallback(index) {
				uni.hideKeyboard();
				this.form.work = this.job[index].text;
			},
			
			confirm(e) {
		
				e.map((val, index) => {
					this.form.work=val.value ;
				})
			},
			
			confirmXz(e) {
					
				e.map((val, index) => {
					this.form.salary=val.value ;
				})
			},
			
			confirmGf(e) {
					
				e.map((val, index) => {
					this.form.house=val.value ;
				})
			},
			
			confirmCar(e) {
					
				e.map((val, index) => {
					this.form.car=val.value ;
				})
			},
			
			
			cancel(e) {
				console.log(e);
			},
			
			showPop(e,data){
				 
				
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
			
			
		},//methods
		components:{
				 
				SerchPopup 
				 
		},
		computed:{
			
			c_res(){
			let res={
				
				title:'',
				data:[]				
			}
		 	
			res.title=this.$store.getters.userdetail.title	
					 
			  if(this.$store.getters.userdetail.data)
				 {
					 
					this.$store.getters.userdetail.data.forEach((element,i)=>{
						 
						 if(element.active)
						 {
							res.data.push(element) 
							 
						 }
						 
					 })
					 
				 }
				
			   return res
				
			}
			
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

</style>
