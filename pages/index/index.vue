<template>
	<view class="content">
		
		<button type="default" @click="scan('back')">身份证国徽</button>
		<button type="default" @click="scan">银行卡</button>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

	</view>
</template>

<script>
	import {
		getToken,
		getIdCard,
		getbankcard

	} from '@/commom/api.js'
	export default {
		data() {
			return {
				title: 'Hello',
				access_token: '',
				image: ''
			}
		},
		onLoad() {
			this.gettoken()
		},
		methods: {
			gettoken() {
				getToken().then(res => {
					console.log("-=getToken==dd==", res);
					this.access_token = res.access_token
					
				});
			},


			//-front：身份证含照片的一面 -back：身份证带国徽的一面
			getidCard(image) {
				let params = {
					
					access_token: this.access_token,
					data:{
						id_card_side: 'back',
						image: image,
					}
				}
				getIdCard(params).then(res => {
					console.log("-=身份证====", res);
					this.title=res
				})
			},
			getbankcard(image){
				let params = {
					access_token: this.access_token,
					data:{
						detect_direction: false,
						image: image,
					}
				}
				getbankcard(params).then(res => {
					console.log("-=银行卡====", res);
					this.title=res
					
				})
			},
			scan(type) {
				const that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						var tempFilePath = res.tempFilePaths[0];
						that.tempFile = tempFilePath;
						plus.io.resolveLocalFileSystemURL(that.tempFile, function(entry) {
							entry.file(function(file) {
								var fileReader = new plus.io.FileReader();
								fileReader.readAsDataURL(file);
								fileReader.onloadend = function(evt) {
									console.log("==" + evt.target.result);
									// that. = evt.target.result.split(",")[1]; // that.src=evt.target.result;
									uni.showToast({
										title: evt.target.result.split(",")[1]
									});
									
									if(type=='back'){
										that.getidCard(evt.target.result.split(",")[1]);
									}else{
										that.getbankcard(evt.target.result.split(",")[1])
									}
								};
							});
						});
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
