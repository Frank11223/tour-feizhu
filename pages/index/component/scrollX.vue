<template>
	<view>
		<scroll-view scroll-x="true" scroll-with-animation="true" class="scroll">
			<view>
				<block v-for="(item,index) in scrollList" :key="item._id">
					<view class="scrollList" :class="{active:num===index}" @click="changeBg(index,item)">
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
		props:{
			tab:Array
		},
		created(){
			// console.log("父组件给的值",this.tab);
		},
		data(){
			return{
				scrollList:[],
				num:0
			}
		},
		watch:{
			tab(newVal){
				// console.log(newVal);
				return this.scrollList = newVal;
			}
		},
		methods:{
			changeBg(index,item){
				console.log("被调用了");
				this.num = index;
				this.bus.$emit('tabType',item);
				// console.log("==========",this.bus);
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
