<template>
	<view class="navbar" :style="{height:allheight}">
		<view class="navbarContain" :style="{backgroundColor:navBgColor}">
			<view class="status-bar" :style="{height:statusBarHeight}"></view>
			<view class="navbarWrap" :style="{color:navColor}">
				<view class="action" v-if="isBack">
					<dn-icon :type="navIconType" size="20" :color="navColor"></dn-icon>
					<slot name="backText">返回</slot>
				</view>
				<view class="contain" :class="{contianActive:isBack}">
					<slot name="content">
						<view class="tabTitle">
							撒旦画讲师都还
						</view>
					</slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	import dnIcon from '@/components/dn-icon/dn-icon.vue'
	export default {
		components: {
			dnIcon
		},
		props:{
			isBack:{  //是否展示返回按钮
				type:Boolean,
				default:true,
			},
			navColor:{ //字体颜色包括图标
				type:String,
				default:'#fff',
			},
			navIconType:{ //左侧返回按钮的图标默认是左箭头
				type:String,
				default:'wangzuo',
			},
			navBgColor:{
				type:String,
				default:'#000000'
			}
			
		},
		data() {
			return {
				statusBarHeight: 0,
				allheight: 0,

			}
		},
		created() {
			this.statusBarHeight = statusBarHeight + 'px';
			this.allheight = (statusBarHeight + 44) + "px";
		}
	}
</script>
<style scoped lang="scss">
	.navbar {
		width: 100%;
		height: 64px;
	}
	.navbarContain {
		position:fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 99;
		.status-bar {
			width:100%;
		}
		.navbarWrap{
			position:relative;
			width: 100%;
			height: 44px;
			padding: 10upx 20upx;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow:hidden;
			color:#FFFFFF;
			.action{
				position:absolute;
				left:0;
				top:50%;
				transform:translateY(-50%);
				display:flex;
				align-items:center;
				justify-content:flex-start;
				font-size:30rpx;
				color:#fff;
			}
			.contain{
				width:100%;
				display:flex;
				align-items:center;
				&.contianActive{
					justify-content:center;
				}
				.tabTitle{
					width:250upx;
					font-size:32rpx;
					overflow:hidden;
					text-align:center;
					white-space:nowrap;
					text-overflow: ellipsis;
					font-weight:600;
				}
			}
		}
	}
</style>
