(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-faceCrop-faceCrop"],{"1b09":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,'/* pages/uni-cropper/index.wxss */.uni-content-info[data-v-d7620c70]{\r\n\t\t/* position: fixed;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tright: 0;\r\n\t\tbottom: 0;\r\n\t\tdisplay: block;\r\n\t\talign-items: center;\r\n\t\tflex-direction: column; */}.cropper-config[data-v-d7620c70]{padding:%?20?% %?40?%}.cropper-content[data-v-d7620c70]{min-height:%?750?%;width:100%}.uni-corpper[data-v-d7620c70]{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-corpper-content[data-v-d7620c70]{position:relative}.uni-corpper-content uni-image[data-v-d7620c70]{display:block;width:100%;min-width:0!important;max-width:none!important;height:100%;min-height:0!important;max-height:none!important;image-orientation:0deg!important;margin:0 auto}\r\n\r\n\t/* 移动图片效果 */.uni-cropper-drag-box[data-v-d7620c70]{position:absolute;top:0;right:0;bottom:0;left:0;cursor:move;background:rgba(0,0,0,.6);z-index:1}\r\n\r\n\t/* 内部的信息 */.uni-corpper-crop-box[data-v-d7620c70]{position:absolute;background:hsla(0,0%,100%,.3);z-index:2}.uni-corpper-crop-box .uni-cropper-view-box[data-v-d7620c70]{position:relative;display:block;width:100%;height:100%;overflow:visible;outline:%?1?% solid #69f;outline-color:rgba(102,153,255,.75)}\r\n\r\n\t/* 横向虚线 */.uni-cropper-dashed-h[data-v-d7620c70]{position:absolute;top:33.33333333%;left:0;width:100%;height:33.33333333%;border-top:%?1?% dashed hsla(0,0%,100%,.5);border-bottom:%?1?% dashed hsla(0,0%,100%,.5)}\r\n\r\n\t/* 纵向虚线 */.uni-cropper-dashed-v[data-v-d7620c70]{position:absolute;left:33.33333333%;top:0;width:33.33333333%;height:100%;border-left:%?1?% dashed hsla(0,0%,100%,.5);border-right:%?1?% dashed hsla(0,0%,100%,.5)}\r\n\r\n\t/* 四个方向的线  为了之后的拖动事件*/.uni-cropper-line-t[data-v-d7620c70]{position:absolute;display:block;width:100%;background-color:#69f;top:0;left:0;height:%?1?%;opacity:.1;cursor:n-resize}.uni-cropper-line-t[data-v-d7620c70]:before{content:"";position:absolute;top:50%;right:%?0?%;width:100%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);bottom:0;height:%?41?%;background:rgba(0,0,0,0);z-index:11}.uni-cropper-line-r[data-v-d7620c70]{position:absolute;display:block;background-color:#69f;top:0;right:%?0?%;width:%?1?%;opacity:.1;height:100%;cursor:e-resize}.uni-cropper-line-r[data-v-d7620c70]:before{content:"";position:absolute;top:0;left:50%;width:%?41?%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);bottom:0;height:100%;background:rgba(0,0,0,0);z-index:11}.uni-cropper-line-b[data-v-d7620c70]{position:absolute;display:block;width:100%;background-color:#69f;bottom:0;left:0;height:%?1?%;opacity:.1;cursor:s-resize}.uni-cropper-line-b[data-v-d7620c70]:before{content:"";position:absolute;top:50%;right:%?0?%;width:100%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);bottom:0;height:%?41?%;background:rgba(0,0,0,0);z-index:11}.uni-cropper-line-l[data-v-d7620c70]{position:absolute;display:block;background-color:#69f;top:0;left:0;width:%?1?%;opacity:.1;height:100%;cursor:w-resize}.uni-cropper-line-l[data-v-d7620c70]:before{content:"";position:absolute;top:0;left:50%;width:%?41?%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);bottom:0;height:100%;background:rgba(0,0,0,0);z-index:11}.uni-cropper-point[data-v-d7620c70]{width:%?5?%;height:%?5?%;background-color:#69f;opacity:.75;position:absolute;z-index:3}.point-t[data-v-d7620c70]{top:%?-3?%;left:50%;margin-left:%?-3?%;cursor:n-resize}.point-tr[data-v-d7620c70]{top:%?-3?%;left:100%;margin-left:%?-3?%;cursor:n-resize}.point-r[data-v-d7620c70]{top:50%;left:100%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-rb[data-v-d7620c70]{left:100%;top:100%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);cursor:n-resize;width:%?36?%;height:%?36?%;background-color:#69f;position:absolute;z-index:1112;opacity:1}.point-b[data-v-d7620c70]{left:50%;top:100%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-bl[data-v-d7620c70]{left:0;top:100%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-l[data-v-d7620c70]{left:0;top:50%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-lt[data-v-d7620c70]{left:0;top:0;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}\r\n\r\n\t/* 裁剪框预览内容 */.uni-cropper-viewer[data-v-d7620c70]{position:relative;width:100%;height:100%;overflow:hidden}.uni-cropper-viewer uni-image[data-v-d7620c70]{position:absolute;z-index:2}\r\n\r\n\t/* 以下是我的补充css */\r\n\r\n\t/* 页面铺满屏幕 */.page-fill[data-v-d7620c70]{width:100%;height:100%;position:absolute;background:#000}.myDistance[data-v-d7620c70]{\r\n\t\t/* padding-top: 100upx */}\r\n\r\n\t/* 底部操作 start */.footer-opertor[data-v-d7620c70]{position:fixed;bottom:0;border-top:#515050 solid 1px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?30?%}.opertor-words[data-v-d7620c70]{color:#e8e5e5;font-size:16px;width:%?200?%}\r\n\r\n\t/* 底部操作 end */',""])},"1fef":function(t,e,o){var a=o("1b09");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=o("4f06").default;i("5199c1cb",a,!0,{sourceMap:!1,shadowMode:!1})},"2ad2":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"page page-fill"},[o("v-uni-view",{staticClass:"page-body uni-content-info"},[o("v-uni-view",{staticClass:"cropper-content"},[t.isShowImg?o("v-uni-view",{staticClass:"uni-corpper myDistance",style:"width:"+t.cropperInitW+"px;height:"+t.cropperInitH+"px;background:#000"},[o("v-uni-view",{staticClass:"uni-corpper-content",style:"width:"+t.cropperW+"px;height:"+t.cropperH+"px;left:"+t.cropperL+"px;top:"+t.cropperT+"px"},[o("v-uni-image",{staticClass:"myImage",style:"width:"+t.cropperW+"px;height:"+t.cropperH+"px",attrs:{src:t.imageSrc}}),o("v-uni-view",{staticClass:"uni-corpper-crop-box",style:"left:"+t.cutL+"px;top:"+t.cutT+"px;right:"+t.cutR+"px;bottom:"+t.cutB+"px",on:{touchstart:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.contentStartMove(e)},touchmove:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.contentMoveing(e)},touchend:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.contentTouchEnd(e)}}},[o("v-uni-view",{staticClass:"uni-cropper-view-box"},[o("v-uni-view",{staticClass:"uni-cropper-dashed-h"}),o("v-uni-view",{staticClass:"uni-cropper-dashed-v"}),o("v-uni-view",{staticClass:"uni-cropper-line-t",attrs:{"data-drag":"top"},on:{touchstart:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragStart(e)},touchmove:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragMove(e)}}}),o("v-uni-view",{staticClass:"uni-cropper-line-r",attrs:{"data-drag":"right"},on:{touchstart:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragStart(e)},touchmove:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragMove(e)}}}),o("v-uni-view",{staticClass:"uni-cropper-line-b",attrs:{"data-drag":"bottom"},on:{touchstart:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragStart(e)},touchmove:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragMove(e)}}}),o("v-uni-view",{staticClass:"uni-cropper-line-l",attrs:{"data-drag":"left"},on:{touchstart:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragStart(e)},touchmove:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragMove(e)}}}),o("v-uni-view",{staticClass:"uni-cropper-point point-t",attrs:{"data-drag":"top"},on:{touchstart:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragStart(e)},touchmove:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragMove(e)}}}),o("v-uni-view",{staticClass:"uni-cropper-point point-tr",attrs:{"data-drag":"topTight"}}),o("v-uni-view",{staticClass:"uni-cropper-point point-r",attrs:{"data-drag":"right"},on:{touchstart:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragStart(e)},touchmove:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragMove(e)}}}),o("v-uni-view",{staticClass:"uni-cropper-point point-rb",attrs:{"data-drag":"rightBottom"},on:{touchstart:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragStart(e)},touchmove:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragMove(e)}}}),o("v-uni-view",{staticClass:"uni-cropper-point point-b",attrs:{"data-drag":"bottom"},on:{touchstart:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragStart(e)},touchmove:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragMove(e)},touchend:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragEnd(e)}}}),o("v-uni-view",{staticClass:"uni-cropper-point point-bl",attrs:{"data-drag":"bottomLeft"}}),o("v-uni-view",{staticClass:"uni-cropper-point point-l",attrs:{"data-drag":"left"},on:{touchstart:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragStart(e)},touchmove:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.dragMove(e)}}}),o("v-uni-view",{staticClass:"uni-cropper-point point-lt",attrs:{"data-drag":"leftTop"}})],1)],1)],1)],1):t._e()],1),o("v-uni-view",{staticClass:"footer-opertor"},[o("v-uni-view",{staticClass:"opertor-words",on:{click:function(e){e=t.$handleEvent(e),t.getImage(e)}}},[t._v("重新选择")]),o("v-uni-view",{staticClass:"opertor-words",on:{click:function(e){e=t.$handleEvent(e),t.getImageInfo(e)}}},[t._v("确认上传")])],1),o("v-uni-canvas",{style:"position:absolute;border: 1px solid red; width:"+t.imageW+"px;height:"+t.imageH+"px;top:-9999px;left:-9999px;",attrs:{"canvas-id":"myCanvas"}})],1)],1)},i=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return i})},"645b":function(t,e,o){"use strict";o.r(e);var a=o("2ad2"),i=o("779b");for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);o("7663");var r=o("2877"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"d7620c70",null);e["default"]=c.exports},7663:function(t,e,o){"use strict";var a=o("1fef"),i=o.n(a);i.a},"779b":function(t,e,o){"use strict";o.r(e);var a=o("bbf7"),i=o.n(a);for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);e["default"]=i.a},bbf7:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,i,n,r,c,s,p,d,u,l,h,g=uni.getSystemInfoSync(),v=g.screenWidth,f=(g.pixelRatio,1),b=100,m=g.screenWidth,w={data:function(){return{imageSrc:"",isShowImg:!1,cropperInitW:v,cropperInitH:v,cropperW:v,cropperH:v,cropperL:0,cropperT:0,transL:0,transT:0,scaleP:0,imageW:0,imageH:0,cutL:0,cutT:0,cutB:v,cutR:"100%",qualityWidth:m,innerAspectRadio:f}},onLoad:function(t){var e=t.tempFilePath;this.imageSrc=e;var o=this.getGlobalUser("globalUser");this.globalUser=o},mounted:function(){this.loadImage()},methods:{setData:function(t){var e=this;Object.keys(t).forEach(function(o){e.$set(e.$data,o,t[o])})},getImage:function(){var t=this;uni.chooseImage({success:function(e){t.setData({imageSrc:e.tempFilePaths[0]}),t.loadImage()}})},loadImage:function(){var t=this;uni.showLoading({title:"图片加载中..."}),uni.getImageInfo({src:t.imageSrc,success:function(e){u=e.width/e.height,u>=1?(l=v,h=v/u):(l=v*u,h=v);var o=l>h?l:h;if(b=o>b?b:o,u>=1){var a=Math.ceil((v/u-(v/u-b))/2),i=a,n=Math.ceil((v-v+b)/2),r=n;t.setData({cropperW:v,cropperH:v/u,cropperL:Math.ceil((v-v)/2),cropperT:Math.ceil((v-v/u)/2),cutL:n,cutT:a,cutR:r,cutB:i,imageW:l,imageH:h,scaleP:l/v,qualityWidth:m,innerAspectRadio:u})}else{var c=Math.ceil((v*u-v*u)/2),s=c,p=Math.ceil((v-b)/2),d=p;t.setData({cropperW:v*u,cropperH:v,cropperL:Math.ceil((v-v*u)/2),cropperT:Math.ceil((v-v)/2),cutL:c,cutT:p,cutR:s,cutB:d,imageW:l,imageH:h,scaleP:l/v,qualityWidth:m,innerAspectRadio:u})}t.setData({isShowImg:!0}),uni.hideLoading()}})},contentStartMove:function(t){a=t.touches[0].pageX,i=t.touches[0].pageY},contentMoveing:function(t){var e=(a-t.touches[0].pageX)*f,o=(i-t.touches[0].pageY)*f;e>0?this.cutL-e<0&&(e=this.cutL):this.cutR+e<0&&(e=-this.cutR),o>0?this.cutT-o<0&&(o=this.cutT):this.cutB+o<0&&(o=-this.cutB),this.setData({cutL:this.cutL-e,cutT:this.cutT-o,cutR:this.cutR+e,cutB:this.cutB+o}),a=t.touches[0].pageX,i=t.touches[0].pageY},contentTouchEnd:function(){},getImageInfo:function(){var t=this;uni.showLoading({title:"图片生成中..."});var e=uni.createCanvasContext("myCanvas");e.drawImage(t.imageSrc,0,0,l,h),e.draw(!0,function(){var e=(t.cropperW-t.cutL-t.cutR)/t.cropperW*l,o=(t.cropperH-t.cutT-t.cutB)/t.cropperH*h,a=t.cutL/t.cropperW*l,i=t.cutT/t.cropperH*h;uni.canvasToTempFilePath({x:a,y:i,width:e,height:o,destWidth:e,destHeight:o,quality:.5,canvasId:"myCanvas",success:function(e){uni.hideLoading();var o=e.tempFilePath;uni.showLoading({mask:!0}),uni.uploadFile({url:t.serverUrl+"/user/uploadFace?userId="+t.globalUser.id+"&qq=565580328",filePath:o,header:{headerUserId:t.globalUser.id,headerUserToken:t.globalUser.userUniqueToken},name:"file",success:function(t){var e=t.data,o=JSON.parse(e);if(200==o.status){uni.hideLoading();var a=o.data;uni.setStorageSync("globalUser",a),uni.navigateBack({delta:1})}else 500!=o.status&&502!=o.status||uni.showToast({title:t.data.msg,image:"../../static/icos/error.png",duration:2e3})},complete:function(){uni.hideLoading()}})}})})},dragStart:function(t){n=t.touches[0].pageX,r=t.touches[0].pageY,c=this.cutL,p=this.cutR,d=this.cutB,s=this.cutT},dragMove:function(t){var e=t.target.dataset.drag;switch(e){case"right":var o=(n-t.touches[0].pageX)*f;p+o<0&&(o=-p),this.setData({cutR:p+o});break;case"left":o=(n-t.touches[0].pageX)*f;c-o<0&&(o=c),c-o>this.cropperW-this.cutR&&(o=c-(this.cropperW-this.cutR)),this.setData({cutL:c-o});break;case"top":o=(r-t.touches[0].pageY)*f;s-o<0&&(o=s),s-o>this.cropperH-this.cutB&&(o=s-(this.cropperH-this.cutB)),this.setData({cutT:s-o});break;case"bottom":o=(r-t.touches[0].pageY)*f;d+o<0&&(o=-d),this.setData({cutB:d+o});break;case"rightBottom":var a=(n-t.touches[0].pageX)*f,i=(r-t.touches[0].pageY)*f;d+i<0&&(i=-d),p+a<0&&(a=-p);var u=d+i,l=p+a;this.setData({cutB:u,cutR:l});break;default:break}}}};e.default=w}}]);