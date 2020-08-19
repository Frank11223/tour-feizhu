<template>
	<view>
		<scroll-view scroll-x="true" scroll-with-animation="true" class="scroll">
			<view>
				<block v-for="(item,index) in scrollList" :key="index">
					<view class="scrollList" :class="{active:num===index}" @click="changeBg(index)">
						<view class="activeTil">
							<text>{{item.title}}</text>
						</view>
						<view class="activeSub" :class="{activeTil:num===index}">
							<text>{{item.subTil}}</text>
						</view>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		name: "scrollX",
		data(){
			return{
				scrollList:[
					{
						title:"推荐",
						subTil:"猜你喜欢"
					},
					{
						title:"旅行直播",
						subTil:"达人带你玩"
					},{
						title:"上海周边",
						subTil:"惬意过周末"
					},{
						title:"古村古镇",
						subTil:"追忆年华似水"
					},{
						title:"ins网红",
						subTil:"颜值即正义"
					},
					{
						title:"恋人之旅",
						subTil:"浪漫二人游"
					}
				],
				num:0
			}
		},
		methods:{
			changeBg(index){
				this.num = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll{
		width: 100%;
		white-space: nowrap !important; //添加此属性使其横向滚动
		// position: absolute;left: 0;right: 0;
		padding: 20upx 0;
		background: #FFFFFF;
		.scrollList{
			width: 180upx;
			display: inline-block;
			text-align: center;
			.activeTil{
				color: #292c33;
				font-size: 30upx;
				font-weight: bold;
			}
			.activeSub{
				color: #9ea0a5;
				font-size: 23upx;
			}
		}
	}
	.active{
		background-image: linear-gradient(to right, #ccffff 0%, #ffcc00 100%);
		border-top-right-radius: 50upx;
	}
	.activeTil{
		color: #292c33 !important;
	}
</style>
