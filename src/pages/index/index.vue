<template>
	<web-view ref='webview' src='https://www.kongfuka.com/'></web-view>
</template>
<script>
let wv;
export default {
	onNavigationBarButtonTap(e) {
		// const currentWebview = this.$scope.$getAppWebview(); //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
		// const wv = currentWebview.children()[0]
		wv.back();
		// wv.overrideUrlLoading(function() {
		// 	console.log("777");
		// })
	},
	onReady() {
		const currentWebview = this.$scope.$getAppWebview(); //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效

		const titleNView = currentWebview.getStyle().titleNView;
		setTimeout(function() {
			wv = currentWebview.children()[0];
			setInterval(() => {
				wv.canBack(({ canBack }) => {
					titleNView.buttons[0].type = canBack?'back':'none';
					currentWebview.setStyle({ titleNView:titleNView });
				});
			}, 100);
		}, 1000);

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
