<template>
	<view class="gridBox">
		<view class="gird-cont">
			<block v-for="(item,index) in gridTxt" :key="index">
				<view class="gird">
					<text class="text title">{{item.title}}</text>
					<text class="text sub-title">{{item.subTitle}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Grid",
		data() {
			return {
				gridTxt: [{
						title: "出境游",
						subTitle: "走遍全球"
					},
					{
						title: "旅游度假",
						subTitle: "精选路线"
					}, {
						title: "周末游",
						subTitle: "乐享周末"
					}, {
						title: "出境购",
						subTitle: "免税预购"
					}, {
						title: "签证/上网",
						subTitle: "入境政策查询"
					}, {
						title: "接送/租车",
						subTitle: "一键预约"
					},
					{
						title: "游轮游",
						subTitle: "住海上城堡"
					},
					{
						title: "全部",
						subTitle: "更多推荐"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@mixin font {
		white-space: pre-wrap;
		border: 0upx solid black;
		box-sizing: border-box;
		display: block;
		-webkit-box-orient: vertical;
		flex-direction: column;
		align-content: flex-start;
		flex-shrink: 0;
		text-align: center;
	}

	.gridBox {
		padding: 0 30upx 0 30upx;

		.gird-cont {
			display: flex;
			flex-wrap: wrap;

			border-radius: 15upx;
			background: #fff;
		}

		.gird {
			width: 25%;
			height: 130upx;
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			border-right: 1px solid #eeeeee;
			border-bottom: 1px solid #eeeeee;
		}
	}

	.gridBox view:nth-child(4n) {
		border-right: none;
	}

	.title {
		@include font;
		font-size: 30upx;
		font-weight: 500;
		margin-top: 9.5upx;
		height: 25upx;
		line-height: 25upx;
		color: rgb(51, 51, 51);
	}

	.sub-title {
		@include font;
		color: rgb(102, 102, 102);
		font-size: 25upx;
		height: 18upx;
		line-height: 18upx;
		border-radius: 9upx;
		padding-left: 8upx;
		padding-right: 8upx;
		background-color: transparent;
	}
</style>
