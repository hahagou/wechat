<template>
	<view class="item u-flex u-row-center" @click="toDetail(users)" >
		<!-- <image :src="users.avatar" mode="widthFix"></image> -->
		<image v-if="users.gender" src="http://www.fadmin.com/uploads/pics/manhd.png"  mode="widthFix"/>
		<image v-else  src="http://www.fadmin.com/uploads/pics/girlhd.png"  mode="widthFix"/> 
		 
		<view class="content u-row-left">
			<text class="title">编号:{{users.mcode}}</text>
			<text class="content">| 年龄:{{users.age}} |</text>			
			<text class="content"> 学历:{{users.edu}} |</text>
			<text class="content"> 工作:{{users.work}} |</text>
			<text class="content"> 收入:{{users.salary}} |</text>
			<text class="description">择偶要求:{{users.bio}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		 props: {
		 	users: Object
		 },
		 methods:{
		 	toDetail(item){ //console.log(item)
		 		uni.navigateTo({
		 			url: '/pages/userlst/detail?id=' + item.id
		 		})
		 	}
		 }
		 
	}
</script>

<style lang="scss" scoped>
.item{
		padding-top: $uni-spacing-col-base;
		border-bottom: 1rpx solid $uni-border-color-grey;
		padding: $uni-spacing-col-base 0;
		&:last-child{
			border-bottom: none;
		}
		image{
			width: 300rpx;
			border-radius: $uni-border-radius-sm;
		}
		.content{
			width: 450rpx;
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
			padding-left: $uni-spacing-row-base;
			text{
				margin-bottom: $uni-spacing-col-sm;
			}
			.title{
				font-size: $uni-font-size-paragraph;
				color: $uni-text-color;
				font-weight: bold;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
			.description{
				overflow: hidden;
				-webkit-line-clamp: 2; 
				-webkit-box-orient: vertical;
				display: -webkit-box;
			}
			.date{
				font-size: $uni-font-size-sm;
			}
		}
	}
</style>