<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button type="default"@click="scan">扫</button>
	</view>
</template>

<script>
	import {
		getToken,
		getIdCard

	} from '@/commom/api.js'
	export default {
		data() {
			return {
				title: 'Hello',
				access_token: '',
				image:''
			}
		},
		onLoad() {
			// this.gettoken()
		},
		methods: {
			gettoken() {
				getToken().then(res => {
					console.log("-=getToken====", res);
					this.access_token = res.access_token
					this.getidCard()
				});
			},
		
		
			//-front：身份证含照片的一面 -back：身份证带国徽的一面
			getidCard() {
				let params = {
					image:this.image, 
					access_token: this.access_token,
					id_card_side: 'back'
				}
				getIdCard(params).then(res => {
					console.log("-=身份证====", res);
					uni.showToast({
						title:res
					})
				})
			},
			scan() {
				const that = this
				uni.scanCode({
					success: function(result) {
						that.image = result.result
						console.log('成功', result.result)
						uni.showToast({
							title:that.image,
							
						})
						that.gettoken()
					},
					fail: function(res) {
						that.res = res
						console.log(res)
					}
				})
			},

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
