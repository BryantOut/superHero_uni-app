(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/modifyNickname/modifyNickname"],{"1e09":function(e,t,a){"use strict";a.r(t);var n=a("b3dd"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=r.a},"6e40":function(e,t,a){"use strict";var n=a("ca08"),r=a.n(n);r.a},aabd:function(e,t,a){"use strict";a.r(t);var n=a("be51"),r=a("1e09");for(var o in r)"default"!==o&&function(e){a.d(t,e,function(){return r[e]})}(o);a("6e40");var u=a("2877"),s=Object(u["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},b3dd:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(a("eb4a"));function n(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{globalUser:""}},methods:{formSubmitNickname:function(t){var a=this,n=t.detail.value.nickname;e.request({url:a.serverUrl+"/user/modifyUserinfo?qq=565580328",data:{userId:a.globalUser.id,nickname:n},header:{headerUserId:a.globalUser.id,headerUserToken:a.globalUser.userUniqueToken},method:"POST",success:function(t){var a=t.data;if(200==a.status){var n=a.data;e.setStorageSync("globalUser",n),e.navigateBack({delta:1})}else 502!=a.status&&500!=a.status||e.showToast({title:t.data.msg,image:"../../static/icos/error.png",duration:2e3})}})}},onLoad:function(){var e=this,t=e.getGlobalUser("globalUser");this.globalUser=t}};t.default=r}).call(this,a("6e42")["default"])},be51:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},ca08:function(e,t,a){}},[["9c55","common/runtime","common/vendor"]]]);