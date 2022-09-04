<template>
	<view class="order-box" v-show="hasLogin">
		<view class="bar u-flex u-row-between u-col-center">
			<text class="title">我的预约</text>
		</view>
		<view class="content">
			<u-card class="item" v-for="item,index in orders" :key="index" title="订单号" :sub-title="item.orderno" margin="0 0 10rpx 0">
				<view class="body u-flex u-row-between" slot="body">
					<view class="u-flex-6 u-flex-col">
						<text>预约项目: {{item.title}}</text>
						<text>预约时间:  {{item.ordertime | timeFormat('yyyy-mm-dd')}}</text>
						<text>备注: {{item.remark}}</text>
					</view>
					<view class="u-flex-5 u-flex-col">
						<text>联系人: {{item.username}}</text>
						<text>联系电话: {{item.mobile}}</text>
						<text>下单时间: {{item.createtime|date}}</text>
					</view>
				</view>
				<view class="foot u-flex u-row-right" slot="foot">
					<view class="price">
						<text>￥{{item.price}}</text>
					</view>
				</view>
			</u-card>
		</view>
		<view class="empty" v-show="ordersEmpty">
			<u-empty text="暂时没有任何订单信息" mode="list"></u-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orders: [],
				page: 1,
				noMore: false
			}
		},
		methods: {
			loadOrders(){
				this.$api.user.orders({
					page: this.page
				})
				.then(res=>{
					if(res.code ==1 && res.data.data.length > 0){
						this.orders = this.orders.concat(res.data.data)
					}else{
						this.noMore = true
					}
				})
			},
			reload(){
				this.noMore = false
				this.page = 1
				this.orders = []
				this.loadOrders()
			},
			nextPage(){
				if(this.noMore)
					return
				this.page = this.page + 1
				this.loadOrders()
			}
		},
		computed: {
			hasLogin(){
				return this.$store.getters.hasLogin
			},
			ordersEmpty(){
				return this.orders.length == 0 ? true : false
			}
		},
		mounted() {
			this.loadOrders()
			// 用于登陆后 触发
			uni.$on('update_orders',() => {
				this.reload()
			})
		},
		destroyed() {
			uni.$off('update_orders')
		}
	}
</script>

<style lang="scss" scoped>
	.order-box{
		background-color: $uni-bg-color;
		margin-top: $uni-spacing-col-base;
		padding:0 $uni-spacing-row-base;
		.bar{
			height: 80rpx;
			border-bottom: 1rpx solid $uni-border-color-grey;
			.title{
				color: $uni-text-color;
				font-size: $uni-font-size-subtitle;
				line-height: 76rpx;
				border-bottom: 4rpx solid $uni-color-primary;
			}
		}
		.content{
			padding-top: $uni-spacing-col-base;
			.item{
				.body{
					font-size: $uni-font-size-sm;
					color: $uni-text-color-grey;
				}
				.foot{
					.price{
						font-size: $uni-font-size-lg;
						color: $uni-color-primary;
						font-weight: 600;
					}
				}
			}
		}
	}
</style>
