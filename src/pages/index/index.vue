<template>

</template>
<script>
let wv;
export default {
	onNavigationBarButtonTap(e) {
		wv.back();
	},
	onReady() {

		var pages = getCurrentPages();

		var page = pages[pages.length - 1];

		// #ifdef APP-PLUS

		var currentWebview = page.$getAppWebview();
		const url = "https://www.xiao-haijing.com/?app_channel=ios_mjb&channId=ios_mjb"
const isLiuhai = plus.navigator.hasNotchInScreen();
		var wb = plus.webview.create(url, '', {

		top: isLiuhai?'40px':'20px',
bottom: '0'

		});

		currentWebview.append(wb);
setTimeout(function() {
			wv = currentWebview.children()[0];
		}, 700);

		// #endif
	}
};
</script>
<style lang='scss'>
page {
	background-color: $page-color-base;
}
.rf-index {
	background-color: $color-white;

}
</style>
