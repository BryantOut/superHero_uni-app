<template>
	<view class="page">
		<!-- 搜索框部分开始 -->
		<div class="searchBox">
			<view class="isearchIco">
				<image src="/static/icos/search.png" mode=""></image>
			</view>
			<input type="text" confirm-type="search" value="" placeholder="搜索预告" maxlength="10" @confirm="searchKeywords"/>
		</div>
		<!-- 搜索框部分结束 -->
		
		<!-- 搜索列表 start -->
		<div class="searchList">
			<view class="" v-for="item in searchList" :key="item.id">
				<image :src="item.cover" class="item" @click="toDetail(item.id)"></image>
			</view>			
		</div>
		<!-- 搜索列表 end -->
	</view>
</template>

<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {
				keywords: '',
				page: 1,
				pageSize: 15,
				total: 1,
				searchList: []
			}
		},
		onReachBottom() {
			// 判断是否是最后一页
			if (this.page == this.total) {
				return
			}
			
			this.page++
			this.getData()
		},
		methods: {
			getData() {
				uni.showLoading({
					mask: true,
					title: "请稍后..."
				});
				common.urlRequest('/search/list', {
					keywords: this.keywords,
					page: this.page,
					pageSize: this.pageSize
				}, 'POST', (res) => {
					console.log(res.data)
					this.searchList.push(...res.data.rows)
					this.total = res.data.total
				})
			},
			searchKeywords(e) {
				this.keywords = e.detail.value
				this.searchList = []
				this.getData()
			},
			toDetail(id) {
				// console.log(id)
				uni.navigateTo({
					url: `../detail/detail?moviceId=${id}`,
				});
			}
		},
		onLoad() {
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		padding-top: 80upx;
		.searchBox {
			position: fixed;
			top: 0;
			display: flex;
			padding: 10upx 20upx 0;
			background-color: #fff;
			widows: 100%;
			height: 80upx;
			flex-wrap: nowrap;
			z-index: 2000;
			.isearchIco {
				display: flex;
				flex-direction: row;
				justify-content: center;
				background-color: #eaeaea;
				height: 60upx;
				image {
					width: 40upx;
					height: 40upx;
					align-self: center;
					padding: 0 20upx;
				}
			}
		
			input {
				display: inline-block;
				font-size: 14px;
				background-color: #eaeaea;
				height: 60upx;
				width: 620upx;
				line-height: 60upx;
				padding-left: 10upx;
			}
		}
		.searchList {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-top: 30upx;
			padding: 0 30upx;
			.item {
				width: 200upx;
				height: 270upx;
				margin-bottom: 20upx;
			}
		}
	}	
</style>