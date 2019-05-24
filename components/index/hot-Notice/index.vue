<template name="hotNotice"> 
	<view class="hot-part block">
		<view class="title">
			<image src="/static/icos/interest.png" mode=""></image>
			<span>热门预告</span>
		</view>
		<div class="videosBox">
			<video :src="item.trailer"
					:id="item.id"
<<<<<<< HEAD
					:data-playingindex="item.id"
=======
					:show-progress="false"
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
					v-for="item in superheroTrailerList" 
					:key="item.id" 
					:poster="item.poster" 
					class="hot-movie-single"
<<<<<<< HEAD
					@play="onlyYPlay"
=======
					@play="onlyYPlay(item.id)"
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
					controls>
			</video>
		</div>
	</view>
</template>

<script>
	import common from "../../../common/common.js"
	import star from "../../star/index.vue"
	export default {
		name: "hotNotice",
		props: ['superheroTrailerList'],
		data() {
			return {
<<<<<<< HEAD
				currVideoContext: '',
				videoContextList: []
			}
		},
		methods:{
			
			// 播放一个视频的时候，需要暂停其他正在播放的视频
			onlyYPlay(e) {
				var me = this;
				var currentVideoId = e.currentTarget.dataset.playingindex
				if (e) {
					currentVideoId = e.currentTarget.dataset.playingindex
					me.currVideoContext = uni.createVideoContext(currentVideoId)
				}				
				
				var superheroTrailerList = me.superheroTrailerList
				for (var i=0;i<superheroTrailerList.length;i++) {
					var tempId = superheroTrailerList[i].id
					if (currentVideoId != tempId) {
						console.log(tempId)
=======
				currVideoContext: ''
			}
		},
		methods:{
			// 播放一个视频的时候，需要暂停其他正在播放的视频
			onlyYPlay(currentVideoId) {	
				this.currVideoContext = uni.createVideoContext(currentVideoId)
				let superheroTrailerList = this.superheroTrailerList
				for (let i=0;i<superheroTrailerList.length;i++) {
					var tempId = superheroTrailerList[i].id
					if (currentVideoId != superheroTrailerList[i].id) {				
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
						uni.createVideoContext(tempId).pause()
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	@import url('index.scss');
	.videosBox {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 10upx;
		.hot-movie-single {
			width: 350upx;
			height: 220upx;
			margin-top: 10upx;
		}
	}
</style>
