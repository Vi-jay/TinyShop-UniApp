(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"48cf":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),o=n("7ded");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={data:function(){return{currentStorageSize:0}},onLoad:function(){this.initData()},computed:u({},(0,r.mapState)(["userInfo"])),methods:u({initData:function(){var e=this;t.getStorageInfo({success:function(t){e.currentStorageSize=t.currentSize}})}},(0,r.mapMutations)(["logout"]),{navTo:function(e){var n=this;"清除缓存"===e?t.showModal({content:"确定要清除缓存吗",success:function(t){t.confirm&&(n.currentStorageSize=0)}}):e?t.navigateTo({url:e}):this.$api.msg("我还没写")},toLogout:function(){var e=this;t.showModal({content:"确定要退出登录么",success:function(n){n.confirm&&e.$post("".concat(o.logout)).then((function(n){e.logout(),t.reLaunch({url:"/pages/user/user"})}))}})},switchChange:function(t){var e=t.detail.value?"打开":"关闭";this.$api.msg("".concat(e,"消息推送"))}})};e.default=i}).call(this,n("a821")["default"])},"63d2":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},"80e9":function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");r(n("66fd"));var e=r(n("bc09"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("a821")["createPage"])},bc09:function(t,e,n){"use strict";n.r(e);var r=n("63d2"),o=n("eb44");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("f5d0");var u=n("2877"),a=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},d99f:function(t,e,n){},eb44:function(t,e,n){"use strict";n.r(e);var r=n("48cf"),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e["default"]=o.a},f5d0:function(t,e,n){"use strict";var r=n("d99f"),o=n.n(r);o.a}},[["80e9","common/runtime","common/vendor"]]]);