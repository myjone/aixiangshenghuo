<template>
	<view class="navTabBox">
		<!-- 少于五个 -->
		<view class="shortTab" v-if="tabArray.length<=5">
			<view class="tabTitle" v-for="(x,y) in tabArray" :class="y===currentIndex?'tabActive':''" @click="changeTab(y)">
				{{x.name}}
			</view>
			<view class="uderlineBox" :style='"transform:translateX("+moveLeft+"px);width:"+tabWidth+"px"'>
				<view class="underline"></view>
			</view>
		</view>
		<!-- 大于5个的时候-->
		<view class="langTab" v-if="tabArray.length>5">
			<scroll-view scroll-x="true" class="scrollX" scroll-with-animation :scroll-into-view='toView'>
				<view class="langTabTitle" v-for="(x,y) in tabArray" :data-index='y' :key="y" :id="'id'+y" @click="langChangeTab(y)"
				 :class="y===currentIndex?'tabActive':''">{{x.name}}</view>
				<view class="uderlineBox" :style='"transform:translateX("+moveLeft+"px);width:"+langTabWidth+"px"' style="z-index: -1;">
					<view class="underline"></view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	import {
		getSystemInfo
	} from "@/utils/uniWrap.js"
	export default {
		name: "navTab",
		data() {
			return {
				tabWidth: 0, //每个导航栏的宽度
				langTabWidth: 0,
				currentIndex: 0,
				moveLeft: 0,
				toView: 'id0',
				tabArray: [{
					name: '百货'
				}, {
					name: "衣服"
				}, {
					name: '男装'
				}, {
					name: '鬼子'
				}, {
					name: "手链"
				}, {
					name: '手机'
				}, {
					name: '百货'
				}, {
					name: "衣服"
				}, {
					name: '男装'
				}, {
					name: '鬼子'
				}, {
					name: "手链"
				}, {
					name: '手机'
				}],
			}
		},
		methods: {
			//获取屏幕宽度
			calculationWidth() {
				let _this = this;
				getSystemInfo((e) => {
					_this.tabWidth = e.windowWidth / _this.tabArray.length;
					_this.langTabWidth = e.windowWidth / 5
				})
			},
			changeTab(y) {
				this.$emit('changeTab', y);
				this.currentIndex = y;
				this.moveLeft = y * this.tabWidth;
			},
			langChangeTab(y) {
				let nowIndex = y - 2;
				nowIndex = nowIndex <= 0 ? 0 : nowIndex
				this.toView = `id${nowIndex}`
				this.currentIndex = y;
				this.moveLeft = y * this.langTabWidth;
				this.$emit('changeTab', y);
			}

		},
		created() {
			this.calculationWidth();
		}
	}
</script>

<style lang="scss" scoped>
	.navTabBox {
		width: 100%;
		height: 88upx;
		.shortTab {
			position: relative;
			width: 100%;
			height: 88upx;
			display: flex;
			justify-content: center;
			font-size: 30upx;
			color: $uni-color-tabarColor;
			.tabTitle {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				z-index: 1;
				&.tabActive {
					font-size: 40upx;
					color: $uni-color-tabarColor-active;
					font-weight: 600;
				}
			}

			.uderlineBox {
				position: absolute;
				left: 0;
				bottom: 15upx;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: .35s;
				.underline {
					width: 100upx;
					height: 20upx;
					border-radius: 20upx;
					box-shadow: 1upx 3upx 5upx rgba(255, 255, 0, 0.6);
					background: $uni-color-tabarUnderLine;
				}
			}
		}

		.langTab {
			width: 100%;
			height: 88upx;
			.scrollX {
				width: 100%;
				display: flex;
				white-space: nowrap;
				height: 88upx;
				position: relative;
				font-size: 30upx;
				color: $uni-color-tabarColor;
				.langTabTitle {
					display: inline-block;
					width: 20vw;
					line-height: 88upx;
					text-align: center;
					height: 88upx;
					z-index: 1;
					&.tabActive {
						font-size: 40upx;
						color: $uni-color-tabarColor-active;
						font-weight: 600;
					}
				}
				.uderlineBox {
					position: absolute;
					left: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: .35s;
					top: 60upx;
					.underline {
						width: 80%;
						height: 20upx;
						border-radius: 20upx;
						box-shadow: 1upx 3upx 5upx rgba(255, 255, 0, 0.6);
						background: $uni-color-tabarUnderLine;
					}
				}
			}
		}



	}
</style>
