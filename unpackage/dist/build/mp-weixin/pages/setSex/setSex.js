(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setSex/setSex"],{"1e45":function(e,t,a){"use strict";var n=a("9d5f"),r=a.n(n);r.a},"529d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},"8ca1":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{globalUser:"",sex:""}},methods:{sexChange:function(e){this.sex=e.detail.value},formSubmitSex:function(){var t=this,a=t.sex;e.request({url:t.serverUrl+"/user/modifyUserinfo?qq=565580328",data:{userId:t.globalUser.id,sex:a},header:{headerUserId:t.globalUser.id,headerUserToken:t.globalUser.userUniqueToken},method:"POST",success:function(t){var a=t.data;if(200==a.status){var n=a.data;e.setStorageSync("globalUser",n),e.navigateBack({delta:1})}else 502!=a.status&&500!=a.status||e.showToast({title:t.data.msg,image:"../../static/icos/error.png",duration:2e3})}})}},onLoad:function(){var e=this,t=e.getGlobalUser("globalUser");e.globalUser=t,e.sex=t.sex}};t.default=a}).call(this,a("543d")["default"])},"9d5f":function(e,t,a){},badf:function(e,t,a){"use strict";a.r(t);var n=a("8ca1"),r=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=r.a},f8d0:function(e,t,a){"use strict";a.r(t);var n=a("529d"),r=a("badf");for(var s in r)"default"!==s&&function(e){a.d(t,e,function(){return r[e]})}(s);a("1e45");var o=a("2877"),u=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports}},[["11c6","common/runtime","common/vendor"]]]);