<template>
	<web-view src='https://www.kongfuka.com/'></web-view>
</template>
<script>
export default {}
</script>
<style lang='scss'>
page {
	background-color: $page-color-base;
}
.rf-index {
	background-color: $color-white;
	/*爆款拼团*/
	.wrapper {
		border-radius: 10 upx;
		.h-list {
			background-color: $page-color-base;
			white-space: nowrap;
			padding: 0 $spacing-sm;
			.h-item {
				margin: $spacing-sm $spacing-sm $spacing-sm 0;
				display: inline-block;
				background-color: $color-white;
				font-size: $font-sm;
				width: 280 upx;
				border-radius: 6 upx;
				.h-item-img {
					display: inline-block;
					width: 280 upx;
					height: 300 upx;
					border-top-left-radius: 12 upx;
					border-top-right-radius: 12 upx;
					border-bottom: 1 upx solid rgba(0, 0, 0, 0.01);
				}
				.title {
					width: 280 upx;
					white-space: normal;
					height: 60 upx;
					line-height: 30 upx;
					font-size: $font-sm;
					padding: 0 $spacing-sm;
					margin: $spacing-sm 0;
				}
				.last-line {
					padding: 0 $spacing-sm $spacing-base;
					margin-bottom: 5 upx;
					display: flex;
					justify-content: space-between;
					align-items: center; /* 垂直居中 */
					.red {
						font-size: $font-sm;
						margin-right: 4 upx;
					}
				}
				.price {
					font-size: $font-base - 2upx;
					line-height: 1;
					.m-price {
						margin-left: 8 upx;
						color: $font-color-light;
						font-size: $font-sm;
						text-decoration: line-through;
					}
				}
			}
		}
	}
	/*轮播图*/
	.swiper {
		width: 100%;
		margin-bottom: 20 upx;
		display: flex;
		justify-content: center;
		.swiper-box {
			width: 92%;
			height: 40vw;
			overflow: hidden;
			border-radius: 15 upx;
			box-shadow: 0 upx 8 upx 25 upx rgba(0, 0, 0, 0.2);
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;
			swiper {
				width: 100%;
				height: 40vw;
				swiper-item {
					image {
						width: 100%;
						height: 40vw;
					}
				}
			}
		}
	}
	/* 爆款推荐 */
	.hot-recommend {
		background-color: $color-white;
		display: flex;
		padding: $spacing-base $spacing-lg 0;
		.hot-recommend-image {
			width: 100%;
			height: 100%;
		}
		.left {
			flex: 3;
			height: 350 upx;
			margin-right: 15 upx;
		}
		.right {
			flex: 4;
			.hot-recommend-image {
				height: 170 upx;
			}
		}
	}
	/*轮播图2*/
	.swiper-item-text {
		position: absolute;
		bottom: 16 upx;
		left: 30 upx;
		height: 48 upx;
		line-height: 48 upx;
		background: rgba(0, 0, 0, 0.2);
		width: 90%;
		color: $color-white;
		border-bottom-left-radius: 12 upx;
		padding-left: 20 upx;
	}
	/*新闻通知*/
	.swiper-slide-header {
		.iconfont {
			font-size: $font-lg + 8upx;
			font-weight: 600;
		}
	}
	/*分类列表*/
	.category-list-wrapper {
		.category-list {
			width: 100%;
			padding: $spacing-base;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.category {
				margin-top: 10 upx;
				width: calc(20% - 20upx);
				height: 132 upx;
				display: flex;
				text-align: center;
				flex-wrap: wrap;
				.img {
					width: 100%;
					display: flex;
					justify-content: center;
					image {
						width: 12vw;
						height: 12vw;
						border-radius: 50%;
					}
				}
				.text {
					margin-top: 16 upx;
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 24 upx;
					color: #3c3c3c;
				}
			}
		}
	}
	/*版权显示*/
	.copyright {
		margin: 10 upx 0;
		width: 100%;
		text-align: center;
		color: #666;
		a {
			display: block;
			color: #666;
			text-decoration: none;
		}
	}
	/*限时抢购*/
	.order-item {
		display: flex;
		flex-direction: column;
		background: #fff;
		padding: 0 30 upx;
		margin-bottom: 20 upx;
		.goods-box-single {
			display: flex;
			padding: 40 upx 10 upx 10 upx;
			height: 330 upx;
			border-radius: 12 upx;
			margin-top: 20 upx;
			box-shadow: 2px 2px 10px rgba(66, 135, 193, 0.2); // 阴影
			border-bottom: 1px solid rgba(0, 0, 0, 0.05); // 边框
			position: relative;
			.goods-img {
				display: block;
				border-radius: 12 upx;
				width: 190 upx;
				height: 200 upx;
			}
			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 30 upx 0 24 upx;
				overflow: hidden;
				.title {
					font-weight: bold;
					line-height: 1.2;
					margin: 10 upx 0;
				}
				.attr-box {
					line-height: 1.2;
					margin-bottom: 8 upx;
					margin-left: 10 upx;
				}
				.last-line {
					margin-top: 3 upx;
					display: flex;
					justify-content: space-between;
					align-items: center; /* 垂直居中 */
					.red {
						margin-right: 4 upx;
					}
				}
				.price {
					font-size: $font-lg;
					line-height: 1;
					.m-price {
						margin-left: 8 upx;
						color: $font-color-light;
						font-size: $font-sm;
						text-decoration: line-through;
					}
				}
				.triangle-wrapper {
					position: absolute;
					overflow: hidden;
					top: 0;
					right: 0;
					border-radius: 12 upx;
					.triangle {
						color: #5eba8f;
						width: 0;
						height: 0;
						border-top: 120 upx solid;
						opacity: 0.8;
						border-left: 120 upx solid transparent;
					}
					.triangle-content {
						position: absolute;
						top: 28 upx;
						right: 0;
						transform: rotate(45deg);
						font-size: $font-sm - 2upx;
						color: #fff;
					}
				}
			}
		}
		.action-box {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 90 upx;
			position: relative;
			.discount-time {
				font-size: $font-sm;
				color: $uni-color-success;
				margin-right: 20 upx;
			}
		}
	}
	.index-cate-product-list {
		padding-top: $spacing-sm;
		background-color: $page-color-base;
		.no-data {
			margin: 48 upx 0;
			color: $font-color-light;
			display: flex;
			justify-content: center;
			align-items: center;
			.iconfont {
				margin-right: 20 upx;
				font-size: $font-lg + 16upx;
			}
		}
	}
}
</style>
