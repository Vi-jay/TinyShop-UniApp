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
		const url = "http://m2.aitangka.cn/?app_channel=iOS_mjb&channId=iOS_mjb"

		var wb = plus.webview.create(url, '', {

		top: '38px',
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
