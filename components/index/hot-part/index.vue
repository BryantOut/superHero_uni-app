<template name="hotPart"> 
	<view class="hot-part block">
		<view class="title">
			<image src="/static/icos/hot.png" mode=""></image>
			<span>热门超英</span>
		</view>
		<scroll-view class="scroll-view_H itemBox" scroll-x="true">
			<view class="item" v-for="(item,index) in superheroHotList" :key="item.id">
				<image :src="item.cover" mode="" lazy-load></image>
				<view class="title">{{item.name}}</view>
				<!-- 星星组件 start -->
				<star :score="item.score" :showNum="1"/>
				<!-- 星星组件 end -->
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import common from "../../../common/common.js"
	import star from "../../star/index.vue"
	export default {
		name: "hotPart",
		props: ['superheroHotList'],
		components: {
			star
		}
	}
</script>

<style lang="scss">
	@import url('index.scss')
</style>
