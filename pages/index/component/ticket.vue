<template>
	<view class="ticket">
		<view v-for="(item,index) in ticket" :key="index">
			<image :src="item.url" mode="aspectFill"></image>
			<text>{{item.name}}</text>
		</view>
	</view>
</template>
<script>
	export default {
		name:"Ticket",
		data(){
			return{
				ticket:[
					{
						url:"//gw.alicdn.com/tfs/TB1Nq50tqL7gK0jSZFBXXXZZpXa-210-171.png_110x10000.jpg_.webp",
						name:"机票"
					},
					{
						url:"//gw.alicdn.com/tfs/TB1n256tAL0gK0jSZFxXXXWHVXa-210-171.png_110x10000.jpg_.webp",
						name:"酒店"
					},
					{
						url:"//gw.alicdn.com/tfs/TB1_Ie3tEz1gK0jSZLeXXb9kVXa-210-171.png_110x10000.jpg_.webp",
						name:"火车票"
					},
					{
						url:"//gw.alicdn.com/tfs/TB1v9m8tAT2gK0jSZFkXXcIQFXa-210-171.png_110x10000.jpg_.webp",
						name:"汽车票"
					},{
						url:"//gw.alicdn.com/tfs/TB1OIC3tvb2gK0jSZK9XXaEgFXa-210-171.png_110x10000.jpg_.webp",
						name:"门票"
					}
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.ticket{
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		padding: 0 30upx 15upx 30upx;
		
		image{
			width: 90upx;
			height: 90upx;
		}
		text{
			display: block;
			font-size: 30upx;
		}
	}
</style>