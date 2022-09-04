<template>
	<view class="message">
		<view class="messages">
			<u-card 
				v-for="item,index in messages" 
				:key="index" 
				:title="item.username"
				:sub-title="item.createtime|date"
				:thumb="item.avatar">
				<view class="content" slot="body">
					<text>{{item.content}}</text>
				</view>
			</u-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				messages: [],
				page: 1,
				noMore: false
			};
		},
		methods: {
			loadMessages(){
				this.$api.message.index({
					page: this.page
				})
				.then(res=>{
					if(res.code == 1 && res.data.data.length > 0){
						this.messages = this.messages.concat(res.data.data)
					}else{
						this.noMore = true
					}
				})
			},
			reload(){
				this.page = 1
				this.noMore = false
				this.messages = []
				this.loadMessages()
			},
			nextPage(){
				if(this.noMore) return
				this.page = this.page + 1
				this.loadMessages()
			}
		},
		mounted() {
			this.loadMessages()
		}
	}
</script>

<style lang="scss">

</style>
