<script>
	import {mapActions} from 'vuex'
	export default {
		
		methods: {
			...mapActions(['appInit'])
		},
		onLaunch: async function() {
			await this.appInit(this)
			console.log('App Launch')
			
			uni.getSystemInfo({
				success: (res) => {
					console.log("applaunch:",res)
					this.globalData.screenHeight=res.screenHeight -50
				}
			})
			
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'uview-ui/index.scss';
	@import 'static/scss/common.scss';
	page{
		background-color: $uni-bg-color-grey;
		
	}
</style>
