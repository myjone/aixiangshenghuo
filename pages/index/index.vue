<template>
	<view class="wrap">
		<NavBar :isBack='false'>
			<block slot='content'>
				<view class="navSearch">
					<dn-icon type="lunkuodasan-3" size="18" color="#111"></dn-icon>
					享生活、享自由、
				</view>
			</block>
		</NavBar>
		<NavTab @changeTab='changeTab'></NavTab>
	</view>
</template>
<script>
	import NavTab from "@/components/basic/navTab.vue"
	import NavBar from "@/components/basic/navbar/navbar.vue"
	import dnIcon from '@/components/dn-icon/dn-icon.vue'
	export default {
		components: {
			NavTab,
			NavBar,
			dnIcon
		},
		data() {
			return {
				title:'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			changeTab(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
	}
	.navSearch {
		width: 500rpx;
		background: #fff;
		height: 30px;
		padding:0 15rpx;
		border-radius: 15px;
		display:flex;
		align-items:center;
		justify-content:flex-start;
		font-size:28upx;
		color:$uni-text-color;
	}
</style>
