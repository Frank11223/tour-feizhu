<template>
	<view>
		<view class="searchBox">
			<view class="search">
				<input type="text" value="" placeholder="请输入文字" @input="change" />
			</view>
			<text class="cancelBtn" @click="goHome">取消</text>
		</view>
		<view class="seaHistory" v-show="!ipting">
			<text class="keyWords">搜索ㆍ发现</text>
			<view class="qy">
				<block v-for="item in 5">
					<view class="rax-view">
						<text class="rax-text">乐不思蜀</text>
					</view>
				</block>
			</view>
		</view>
		<view class="showSearch" v-show="ipting">
			<view class="ulist">
				<block v-for="item in 50">
					<view class="itemBox">
						<view class="itemText">
							<text>乐不思蜀</text>
						</view>
						<text class="itemIcon">></text>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data(){
			return{
				ipting:false
			}
		},
		methods:{
			change(e){
				this.ipting = true;
				if((e.detail.value).trim()==""){
					this.ipting = false;
				}
			},
			goHome(){
				uni.switchTab({
					url:"../index/index",
					success: (err) => {
						// console.log("页面跳转成功",err)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@mixin rax-text {
		box-sizing: border-box;
		display: block;
		font-size: 3.4667vw;
		white-space: pre-wrap;
		font-family: PingFangSC;
		color: rgb(51, 51, 51);
		text-overflow: ellipsis;
		height: 4.8vw;
		line-height: 4.8vw;
	}
	.searchBox {
		width: 100%;
		height: 70upx;
		display: flex;
		align-items: center;
		line-height: 70upx;
		padding: 15upx;

		.search {
			width: 85%;
			margin-right: 15upx;
			border-radius: 50upx 0 50upx 50upx;
			background-color: rgb(247, 248, 250);

			input {
				width: 100%;
				height: 70upx;
				line-height: 70upx;
				font-size: 30upx;
				color: #666666;
				padding-left: 30upx;
			}
		}

		.cancelBtn {
			color: #606266;
			font-size: 30upx;
		}
	}

	.keyWords {
		font-size: 26upx;
		font-weight: bold;
		margin-left: 15upx;
	}

	.qy {
		display: flex;
		flex-wrap: wrap;
		padding: 15upx;

		.rax-view {
			box-sizing: border-box;
			display: flex;
			position: relative;
			flex-direction: row;
			flex-shrink: 0;
			place-content: flex-start;
			border-width: 0vw;
			border-style: solid;
			border-color: black;
			margin: 0vw 2.4vw 2.4vw 0vw;
			padding: 1.8667vw 3.2vw;
			min-width: 0vw;
			align-items: center;
			background-color: rgb(247, 248, 250);
			border-radius: 0.8vw;
		}
		.rax-text{
			@include rax-text;
		}

	}
	
	.showSearch{
		.ulist{
			display: flex;
			flex-direction: column;
			.itemBox{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 15upx;
				border-bottom: 1px solid #ddd;
				.itemText{
					@include  rax-text;
				}
				.itemIcon{
					@include  rax-text;
				}
			}
		}
	}
	
</style>
