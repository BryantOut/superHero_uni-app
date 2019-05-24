<template name="staff">
	<div class="staff">
		<div class="title">剧组成员</div>
		<scroll-view scroll-x="true" class="scroll-view_H itemBox">
			<div class="item" v-for="(item,index) in staffList" :key="item.staffId">
<<<<<<< HEAD
				<image :src="item.photo" mode="" @click="showBigPic(index)" lazy-load></image>
=======
				<image :src="item.photo" mode="" @click="showBigPic(index)"></image>
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
				<div class="name">{{item.name}}</div>
				<div class="actName">{{item.actName}}</div>
				<div class="role">{{item.role==2?'演员':'导演'}}</div>
			</div>
		</scroll-view>
	</div>
</template>

<script>
	export default {
		name: "staff",
		props: ["staffList"],
		data() {
			return {
				urls: []
			}
		},
		methods:{
			showBigPic(index) {
				uni.previewImage({
					urls: this.urls,
					currrent: this.urls[index]					
				})
			}
		},
		created() {
			for (let x=0;x<this.staffList.length;x++) {
				this.urls.push(this.staffList[x].photo)
			}
		},
	}
</script>

<style lang="scss">
	.staff {
		padding: 20upx;
		.title {
			margin-bottom: 10upx;
		}
		.itemBox {
			width: 100%;
			white-space: nowrap;
			.item {
				display: inline-block;
				font-size: 15px;
				image {
					width: 170upx;
					height: 240upx;
					margin-right: 10upx;
				}				
				.name,.role,.actName {
					width: 170upx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					text-align: center;
				}
				.role,.actName {
					font-size: 13px;
					 color: #a9a9a9;
				}
			}
		}
	}
</style>
