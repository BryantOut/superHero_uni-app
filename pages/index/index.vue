<template>
	<view class="page">
		<!-- 轮播图部分start -->
		<swiper :indicator-dots="true" indicator-color="rgba(255,255,255,.1)" :autoplay="true" :interval="3000" :duration="1000"
		 class="carousel">
			<swiper-item v-for="(item,index) in carouselList" :key="item.id">
				<image :src="item.image" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图部分end -->

		<!-- 热门超英部分开始 -->
		<hotPart :superheroHotList="superheroHotList"/>
		<!-- 热门超英部分结束 -->
		
		<!-- 热门预告部分开始 -->
		<NoticePart :superheroTrailerList="superheroTrailerList"/>
		<!-- 热门预告部分结束 -->
		
		<!-- 猜你喜欢部分开始 -->
		<GuessYouLike :guessULikeList="guessULikeList"/>
		<!-- 猜你喜欢部分结束 -->
	</view>
</template>

<script>
	import common from "../../common/common.js"
	import hotPart from "@/components/index/hot-part/index.vue"
	import NoticePart from "../../components/index/hot-Notice/index.vue"
	import GuessYouLike from "../../components/index/guessYouLike/index.vue"
	export default {
		data() {
			return {
				carouselList: [],
				superheroHotList: [],
				superheroTrailerList: [],
				guessULikeList: []
			}
		},
		components:{
			hotPart,
			NoticePart,
			GuessYouLike
		},
		onLoad() {
			// 请求轮播图数据
			common.urlRequest('/index/carousel/list',null,'POST',(res)=>{
				// console.log(res.data)
				this.carouselList = res.data
			})
		
			// 热门英雄数据
			common.urlRequest('/index/movie/hot',{type:'superhero'},'POST',(res)=>{
				// console.log(res)
				this.superheroHotList = res.data
			})
			
			// 热门预告数据
			common.urlRequest('/index/movie/hot',{type:'trailer'},'POST',(res)=>{
				// console.log(res)
				this.superheroTrailerList = res.data
			})

			this.refreshGuestULike()
		},
		onPullDownRefresh() {
			this.refreshGuestULike()
		},
		methods: {
			refreshGuestULike() {
				// 猜你喜欢数据
				common.urlRequest('/index/guessULike',null,'POST',(res)=>{
					console.log(res)
					this.guessULikeList = res.data
				})
			} 
		}	
	}
</script>

<style lang="scss">
	@import url("index.scss");
</style>
