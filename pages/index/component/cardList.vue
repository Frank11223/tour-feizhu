<template>
	<view class="contentBox">
		<view class="content">
			<block v-for="(item,index) in cardList" :key="index">
				<view class="card">
					<view class="cont-img">
						<image :src="item.url" mode="aspectFill"></image>
					</view>
					<view class="cont-txt">
						<view class="title" v-if="item.title">{{item.title}}</view>
						<view class="des" v-if="item.des">{{item.des}}</view>
						<view class="cont-price">
							<view class="price">
								￥{{item.price}}
							</view>
							<view class="buyed">
								{{item.buyed}}
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>
<script>
	export default {
		name: "cardList",
		data() {
			return {
				cardList: []
			}
		},
		mounted() {
			this.bus.$on("tabType", type => {
				// console.log("收到兄弟组件的值", type);
				this.queryCardList(type.nav)
			})
			//初始化页面填充数据
			this.queryCardList("recomment");
		},
		methods: {
			//根据类型查询cardlists数据
			queryCardList(type) {
				uni.request({
					url: "http://192.168.80.43:3000/getDetalis",
					method: "GET",
					data: {
						type:type
					},
					success: res => {
						// console.log("分类数据", res.data);
						this.cardList = res.data;
					}
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.contentBox {
		margin: 0 20upx;

		.content {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			-webkit-flex-wrap: wrap;
			overflow: hidden;

			.card {
				width: 48%;
				display: flex;
				margin-bottom: 15upx;
				flex-direction: column;
				box-sizing: border-box;

				.cont-img {
					max-width: 100%;
					height: 400upx;
					object-fit: over;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
						object-fit: over;
						border-radius: 10upx;
					}
				}

				.cont-txt {
					.title {
						display: -webkit-box;
						font-size: 32upx;
						color: #d0b083;
						margin: 10upx 0;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
					}

					.des {
						width: 100%;
						height: 100upx !important;
						line-height: 50upx;
						box-sizing: border-box;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						font-size: 32upx;
						font-weight: 600;
						color: rgb(51, 51, 51);
						overflow: hidden;
						-webkit-line-clamp: 2
					}
				}

				.cont-price {
					display: flex;
					justify-content: space-between;

					.price {
						font-size: 35upx;
						color: #ff6b28;
					}

					.buyed {
						font-size: 30upx;
						color: #cacaca;
					}
				}
			}
		}

	}
</style>
