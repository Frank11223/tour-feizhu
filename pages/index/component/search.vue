<template>
	<view>
		<!-- 搜索 -->
		<view class="search-cont">
			<view class="search-code">
				<image src="../../../static/imgs/shaoma.svg" mode="widthFix"></image>
			</view>
			<view class="search">
				<image src="../../../static/imgs/sousuo.svg" mode="widthFix" class="search-img"></image>
				<input type="text" @click="toSearch()" value="" placeholder="请输入文字" disabled />
			</view>
			<view class="search-code">
				<image src="../../../static/imgs/xiaoxi.svg" mode="widthFix"></image>
			</view>
		</view>

		<!-- 轮播 -->
		<view>
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :circular="true" interval="5000" duration="500"
			 indicator-active-color="#ffd300">
				<block v-for="(item,index) in banner" :key="item.id">
					<swiper-item>
						<image :src="item.url" mode="aspectFill" class="imageUrl"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: "search",
		props: {
			banner: {
				type: Array
			}
		},
		data() {
			return {
				// banner:[]
			}
		},
		methods:{
			toSearch(){
				console.log(111)
				uni.redirectTo({
					url:"../search/searchPage",
					success: (err) => {
						// console.log("页面跳转成功",err)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@mixin Frank {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.search-cont {
		width: 100%;
		height: 70upx;
		padding: 30upx 0;
		@include Frank;
		background: linear-gradient(to top, #ffe566 10%, #ffd300 100%);

		.search-code {
			width: 50upx;
			height: 50upx;
			padding: 0 15upx;

			image {
				width: 50upx;
				height: 50upx;
			}
		}

		.search {
			width: 100%;
			height: 70upx;
			display: flex;
			line-height: 70upx;
			border-radius: 50upx 0 50upx 50upx;
			background: #fff7d4;

			.search-img {
				width: 40upx;
				height: 40upx;
				margin: auto 0 auto 20upx;
			}

			input {
				width: 100%;
				height: 70upx;
				line-height: 70upx;
				font-size: 30upx;
				color: #666666;
			}
		}
	}

	swiper {
		width: 100%;
		height: 300upx !important;

		.imageUrl {
			width: 100%;
			height: 300upx !important;
		}
	}
</style>
