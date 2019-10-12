<template>
	<view class="content">
		<NavTab @changeTab='changeTab'></NavTab>
	</view>
</template>

<script>
	import NavTab from "@/components/basic/navTab.vue"
	export default {
		components:{
			NavTab
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			changeTab(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		
	}
</style>
