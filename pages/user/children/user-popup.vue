<template>
<u-popup v-model="show" border-radius="8"  mode="top" >
	
	<view class="upbox">
		 
	<view class="u_title">{{item.title}}</view>
	
	 <view class="u_content">
		 
		 
	<!-- <u-button 
	 v-for="obj,index in item.data" 
	 :key="index"
	 :custom-style="style" 
	 size="mini"  
	 shape="circle"
	 @cilck="myClick(index)"
	 >{{obj.name}}</u-button> -->
	 
	 <u-button shape="circle"  :custom-style="obj.active?show_active:show_normal"       size="medium" v-for="obj,index in item.data" :key="index"  @click="myClick(index)">{{obj.name}}</u-button>
	
	
 
    </view>
 
 
	<view class="u_bottom">
		
	 <view>
	   <u-button size="medium"  shape="circle" @click="this.show=false">取消</u-button>
	  </view>	
	   
	 <view>  
	   <u-button  size="medium" :custom-style="confirm" @click="btn_confirm"  shape="circle" >确认</u-button>
	 </view>	  
	   
	</view>
 
 
	
	</view>
	
</u-popup>
  
  
</template>

<script>
	export default {
	    mounted() {
	    	 // this.$store.commit('set_userdetail',this.item)
			//  console.log(this.clicked)
			//  console.log(this.idx)
			//console.log(this.item)
	    },
		
		
		
		data() {
			return {
				str:'',
				data:{}, 
				show: false,
				item: {},
				idx:[],  //记录 多选 id 
				clicked:[], //记录 多选 id 以及是否点击过
				values:'', // 多选时 的总结果 用 , 分割
				
				
				show_normal: {
					backgroundColor: '#fff',
					color: '#000',
					fontSize:'35rpx' 
				},
				
				show_active: {
					backgroundColor: '#ff5500',
					color: '#FFFFFF',
					fontSize:'35rpx' 
				},
				confirm: {
					backgroundColor: '#ff0000',
					color: '#FFFFFF'
				 
				}	
				
				
			}
		},
		methods: {
			showPopup(item,form){
				this.item = item
				this.show = true			
			    this.data=form
			},
			success(){
				this.show = false
			},
			myClick(index){
				
				 
				let result=[]
				let clc={}			
		    
				this.idx.push(index)
				
				//console.log(this.clicked[index])
			
			if(this.clicked[index]==undefined || this.clicked[index]==null)		
			{
				//console.log("添加active")
				this.clicked[index]={active:true}	
			}				 
		    else{
				
				// console.log("修改active",this.clicked[index].active)
				this.clicked[index].active=!this.clicked[index].active
			}
			    
			    	
				 
				  
		 
			if(this.item.multi)	
			{ // 多选
			
				this.item.data.forEach((element,i)=>{ // 遍历一次 修改按钮状态
					
					if(this.idx.indexOf(i)>=0 )    //  ，凡是 idx 数组里有的都变红色
					{
						 
						   element.active=true
						 
					}
					else{
						
						element.active=false      // 其他的都是非激活
						
					}					
					
					result.push(element) //设置  button 颜色
					
					
				})				
				
				//然后修正  result				
				this.clicked.forEach((element,i)=>{
				
				   //  console.log(i,element.active)
					// console.log(result[i].active)
					result[i].active=element.active
					
				})
				
			}
		    else{ // 单选
				
				this.item.data.forEach((element,i)=>{
					
					if(index==i)    // index==i
					{
						//console.log(element.name,i)
						element.active=true
					}
					else{
						element.active=false
					}
					
					
					result.push(element)
				})
				
			}
			
			 // console.log(result)
			
			
			  this.item.data=result
			  
			  
		      
			 
			},// end of click
			btn_confirm(){
			  this.$store.commit('set_userdetail',this.item)
			// console.log(this.$store.getters.userdetail)
			 
			 
			 	this.$store.getters.userdetail.data.forEach((element,i)=>{
					 
					 if(element.active)
					 {
						  if(this.item.multi)
						  {	 
							 this.str+=element.name+','
						  }
						  else{						  
							  this.str=element.name						  
						  }					 
					 }					 
				 })
				 
			 
			 
			 for(let i in this.data) 
			 {
				
				if(i==this.item.field) 
				{
					// console.log(i)
					//console.log(this.data[i])
					this.data[i]=this.str
				}
			 }
			 
			  this.show=false
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
	
	.upbox{
			 display: flex;
			 flex-direction: column;			 		 
	}
	
	

	.u_title{
			 display: flex;
			 justify-content: center;
			 height: 50rpx;
			 margin-bottom: 30rpx;
			 color:$uni-color-error;
			 font-size: 18px;
			 padding: 10rpx;
			 font-family: uicon-iconfont;
			 font-weight: bolder;
	}

	.u_content{
			 
			 display: flex;		 
			 justify-content: space-around;	
	    margin-top: 50rpx;
			 flex-wrap: wrap;
			 
	}
		
	.u_bottom{
			 
			 display: flex;
			 flex-direction: row;
			 justify-content: center;			
			 align-items: stretch;
			 margin-top: 30rpx;
			 margin-bottom: 10rpx;			 
			 
	}
	
	.u_bottom view{
			 
			 margin-left: 30rpx;
			 
			 
	}
	
	.active{
		
		backgroundColor: '#ff5500';
		color: '#FFFFFF';
		fontSize:'35rpx'; 
		
	}
	

</style>
