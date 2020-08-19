<template>
	<view class="container">
		<Search></Search>
		<Ticket></Ticket>
		<Grid></Grid>
		<ScollX id="scrollx" :class="{isFixed:isFixed}"></ScollX>
		<!-- <view style="height: 2000upx;">{{namepage}}</view> -->
		<CardList>{{namepage}}</CardList>
	</view>
</template>

<script>
	import Search from "./component/search"
	import Ticket from "./component/ticket"
	import Grid from "./component/grid"
	import ScollX from "./component/scrollX"
	import CardList from "./component/cardList"
	export default {
		data() {
			return {
				isFixed: false,
				dynamicY: "",
				staticY: ""
			}
		},
		onReady() {
			this.getScrollPosition();
		},
		onPageScroll(e) {
			// console.log(e);
			this.dynamicY = e.scrollTop;
		},
		computed: {
			namepage() {
				console.log("执行了")
				if (this.dynamicY > this.staticY) {
					this.isFixed = true
				} else {
					this.isFixed = false;
				}
			}
		},
		components: {
			Search,
			Ticket,
			Grid,
			ScollX,
			CardList
		},
		methods: {
			getScrollPosition() {
				let query = uni.createSelectorQuery();
				query.select("#scrollx").boundingClientRect();
				query.exec(res => {
					// console.log("当前组件位置", res);
					this.staticY = res[0].top;
				})
			}
		}
	}
</script>

<style>
	.container {
		background: rgb(247, 247, 247, 1);
	}

	.isFixed {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 1000;
	}
</style>
