(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cover/cover"],{"6b5b":function(t,n,e){"use strict";e.r(n);var o=e("d4f1"),c=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=c.a},"7be7":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return c})},"90ce":function(t,n,e){"use strict";e.r(n);var o=e("7be7"),c=e("6b5b");for(var u in c)"default"!==u&&function(t){e.d(n,t,function(){return c[t]})}(u);e("d3e9");var r=e("2877"),a=Object(r["a"])(c["default"],o["a"],o["b"],!1,null,null,null);n["default"]=a.exports},acc6:function(t,n,e){},d3e9:function(t,n,e){"use strict";var o=e("acc6"),c=e.n(o);c.a},d4f1:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{currentPic:null}},methods:{operate:function(){var n=this;t.showActionSheet({itemList:["保存图片到本地"],success:function(e){0==e.tapIndex&&(t.showLoading({title:"保存图片中…"}),t.downloadFile({url:n.currentPic,success:function(n){var e=n.tempFilePath;t.saveImageToPhotosAlbum({filePath:e,success:function(){t.showToast({title:"保存成功",duration:2e3})},complete:function(){t.hideLoading()}})}}))}})}},onLoad:function(n){t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"}),this.currentPic=n.cover}};n.default=e}).call(this,e("6e42")["default"])}},[["709a","common/runtime","common/vendor"]]]);