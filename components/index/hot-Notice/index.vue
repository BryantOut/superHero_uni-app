<template name="hotNotice"> 
	<view class="hot-part block">
		<view class="title">
			<image src="/static/icos/interest.png" mode=""></image>
			<span>热门预告</span>
		</view>
		<div class="videosBox">
			<video :src="item.trailer"
					:id="item.id"
					:data-playingindex="item.id"
					v-for="item in superheroTrailerList" 
					:key="item.id" 
					:poster="item.poster" 
					class="hot-movie-single"
					@play="onlyYPlay"
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
