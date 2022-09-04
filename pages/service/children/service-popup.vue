<template>
	<u-popup v-model="show" mode="bottom" border-radius="8" :closeable="true" height="65%" class="popup">
		<view class="service">
			<image :src="item.main_image_cdn" mode="widthFix"></image>
			<view class="content">
				<text class="price">￥{{item.new_price}}</text>
				<text class="title">{{item.title}}</text>
			</view>
		</view>
		<service-form :item="item" v-on:success="success" />
	</u-popup>
</template>

<script>
	import serviceForm from './service-form.vue'
	export default {
		data() {
			return {
				show: false,
				item: {},
				
			}
		},
		methods:{
			showPopup(item){
				this.item = item
				this.show = true
			},
			success(){
				this.show = false
			}
		},
		components:{serviceForm}
	}
</script>
<style lang="scss" scoped>
	.popup{
		display: flex;
		flex-direction: column;
		.service{
			display: flex;
			padding: $uni-spacing-col-base;
			border-bottom: 1px solid $uni-border-color-grey;
			image{
				width: 300rpx;
				border-radius: $uni-border-radius-lg;
				border: 2rpx solid $uni-color-primary;
			}
			.content{
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				padding-left: $uni-spacing-row-base;
				.price{
					font-size: $uni-font-size-subtitle;
					color: $uni-color-primary;
				}
				.title{
					font-size: $uni-font-size-sm;
					color: $uni-text-color-grey;
				}
			}	
		}
	}
</style>