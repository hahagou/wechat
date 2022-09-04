<template>
	<view class="detail">
		<detail-swiper :swipers="example.swiper_images_cdn" />
		<detail-title :example="example" />
		<detail-content :example="example" />
	</view>
</template>

<script>
	import detailSwiper from './detail-swiper.vue'
	import detailTitle from './detail-title.vue'
	import detailContent from './detail-content.vue'
	export default {
		data() {
			return {
				example: {}
			};
		},
		methods:{
			loadDetail(id){
				this.$api.example.detail(id)
				.then(res=>{
					if(res.code == 1){
						this.example = res.data
					}
				})
			}
		},
		components: {
			detailSwiper,
			detailTitle,
			detailContent
		}
	}
</script>

<style lang="scss">
	.detail{
		
	}
</style>
