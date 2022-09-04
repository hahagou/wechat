<template>
	
	
	<u-card :title="item.title" :sub-title="item.category_text" class="card">
		
		<view class="" slot="body">
			<image :src="item.main_image_cdn" mode="widthFix" class="main_image"></image>
			<view class="info">
				<text>服务内容</text>
				<text>{{item.description}}</text>
			</view>
		</view>
		
		<view class="footer" slot="foot">
			<view class="prices">
				<view class="new_price">
					现价: <text>{{item.new_price}}</text>
				</view>
				<view class="old_price">
					原价: <text>{{item.old_price}}</text>
				</view>
			</view>
			<view class="buttons">
				<button @click="clickOrder(item)">立即预约</button>
			</view>
		</view>
		
	</u-card>
	
	
</template>

<script>
	export default {
		props:{
			item:Object
		},
		methods:{
			clickOrder(item){
				this.$emit('clickOrder',{item})
			}
		}
	}
</script>

<style lang="scss">
	.card{
		image{
			width: 100%;
			border-radius: $uni-border-radius-base;
		}
		.info{
			display: flex;
			flex-direction: column;
			text:first-child{
				font-size: $uni-font-size-base;
				color: $uni-text-color;
			}
			text:last-child{
				font-size: $uni-font-size-sm;
			}
		}
		.footer{
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			.prices{
				text{
					padding-left: $uni-spacing-col-sm;
				}
				.old_price{
					font-size: $uni-font-size-sm;
					color: $uni-text-color-grey;
					text{
						text-decoration: line-through;
					}
				}
				.new_price{
					font-size: $uni-font-size-base;
					color: $uni-color-primary;
				}
				
			}
			.buttons{
				button{
					width: 180rpx;
					height: 60rpx;
					line-height: 60rpx;
					font-weight: bold;
					border-radius: 40rpx;
					font-size: $uni-font-size-base;
					color: $uni-text-color-inverse;
					border: none;
					background-color: $uni-color-primary;
				}
			}
		}
	}
</style>
