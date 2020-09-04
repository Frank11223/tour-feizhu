<template>
	<view class="publish">
		攻略
		<view class="">
		</view>
	
		<view class="publicBtn" @click="toUpload">
			+
		</view>
	</view>
</template>

<script>
	import lFile from '@/components/l-file/l-file.vue';
	export default {
		data() {
			return {
				
			}
		},
		components:{
			lFile
		},
		methods: {
			toUpload(){
				console.log(111);
				uni.navigateTo({
					url:"./publish",
					complete: (err) => {
						console.log(err);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.publish{
		
	}
	.publicBtn{
		width: 100upx;
		height: 75upx;
		line-height: 75upx;
		position: fixed;
		left: 50%;
		bottom: 130upx;
		margin-left: -50upx;
		text-align: center;
		font-size: 50upx;
		border-radius: 30upx;
		background-color: yellow;
	}
</style>
