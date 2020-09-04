<template>
	<view class="publish">
		<view style="background-color: #ffffff;">
			<view>
				<textarea @blur="bindTextAreaBlur" placeholder="分享有趣或糟糕的经历,帮助更多热爱旅行的人" style="width: 100%;" />
				</view>
			<view class="instarction">
				<text style="color:#929294;">超过50个字+1个视屏</text>
				<text style="color:#bc7058;">有机会被加上精华首页</text>
			</view>
			<l-file
			    ref="lFile" 
			    @up-success="upSuccess"
			></l-file>
			<view class="pub-upLoad" >	
				<view class="pictrue" @tap="onUpload">
					<cover-image src="../../static/imgs/xiangji.svg"></cover-image>
					<text>上传图片</text>
				</view>
				<view class="video" @tap="onUpload">
					<cover-image src="../../static/imgs/shipin.svg"></cover-image>
					<text>上传视屏</text>
				</view>
			</view>
		</view>
		<view class="location">所在位置</view>
		<view class="publicBtn">发布</view>
	</view>
</template>
<script>
	import lFile from '../../components/l-file/l-file.vue';
	export default{
		data(){
			return{
				
			}
		},
		components:{
			lFile
		},
		methods:{
						onOpenDoc() {
							let url = 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg';
							/* 下载返回临时路径（退出应用失效） */
							this.$refs.lFile.download(url)
							.then(path=>{
								/* 预览 */
								this.$refs.lFile.open(path);
							});
						},
						
						/* 保存 */
						onDown() {
							let url = 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg';
							this.$refs.lFile.download(url,'local')
							.then(path=>{
								this.localPath = path;
							}); 
						},
						
						/* 上传 */
						onUpload() { 
							console.log("333")
							this.$refs.lFile.upload({
								// #ifdef APP-PLUS
								// nvue页面使用时请查阅nvue获取当前webview的api，当前示例为vue窗口
								currentWebview: this.$mp.page.$getAppWebview(),
								// #endif
								//非真实地址，记得更换,调试时ios有跨域，需要后端开启跨域并且接口地址不要使用http://localhost/
								url: 'https://www.example.com/upload',
								//默认file,上传文件的key
								name: 'myFile',
								// header: {'Authorization':'token'},
								//...其他参数
							});
						},
						onSuccess(res) {
							console.log('上传成功回调',JSON.stringify(res));
							uni.showToast({
								title: JSON.stringify(res),
								icon: 'none'
							})
						}
		}
	}
</script>
<style lang="scss">
	.publish{
		width: 100vw;
		height: 100vh;
		background-color: #f1f1f1;
		.instarction{
			display: flex;
			flex-direction: column;
			font-size: 30upx;
		}
		.location{
			width: 100vw;
			height: 85upx;
			line-height: 85upx;
			text-indent: 15upx;
			font-size: 30upx;
			margin-top: 30upx;
			background-color: #ffffff;
		}
		.publicBtn{
			width: 100vw;
			height: 150upx;
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			bottom: 0;
			background-color: #f8dc4a;
		}
		.pub-upLoad{
			display: flex;
			padding: 30upx;
			.pictrue,.video{
				width: 200upx;
				height: 150upx;
				// padding: 30upx;
				font-size: 20upx;
				margin-left: 15upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background-color: #f2f3f5;
			}
		}
	}
</style>
