<script>
	/* eslint-disable */
	import Vue from 'vue';
	import {
		mapMutations
	} from 'vuex';
	export default {
		async onLaunch() {
			// #ifdef APP-PLUS
			uni.showLoading({
				mask: true
			});
			await new Promise(function(resolve) {
				plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
					console.log(widgetInfo.version);
					uni.request({
						url: 'https://h5.fulugame.cn/testApi/api/download',
						data: {
							version: widgetInfo.version,
							name: widgetInfo.name
						},
						success: (result) => {
							var data = result.data;
							if(!data.update)return resolve();
							if (data.update && data.wgtUrl) {
								uni.downloadFile({
									url: data.wgtUrl,
									success: (downloadResult) => {
										if (downloadResult.statusCode ===
											200) {
											plus.runtime.install(downloadResult
												.tempFilePath, {
													force: true
												},
												function() {
													console.log(
														'install success...'
														);
													plus.runtime.restart();
												},
												function(e) {
													console.error(
														'install fail...'
														);
														plus.runtime.restart();
												});
										}
									}
								});
							}
						}
					});
				});
			});
			uni.hideLoading();
			// #endif
		},
	};
</script>
<style lang="scss">
	// 导入colorUI
	@import '/static/css/colorui/main.css';
	@import '/static/css/colorui/icon.css';
	@import '/static/css/colorui/animation.css';
	// 导入阿里巴巴矢量图标库
	/*#ifdef MP*/
	@import './static/css/iconfont/iconfont.css';
	/*#endif*/
	/*#ifndef MP*/
	@import url('https://at.alicdn.com/t/font_1681579_dwilkcq6mvg.css');
	/*#endif*/
	@import './static/css/reset.scss';
	@import './static/css/uni.scss';
</style>
