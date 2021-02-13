/* workbox.config.js */

module.exports = {
	// キャッシュ保持の対象となるディレクトリ
	"globDirectory": "build/",
	// キャッシュするファイル
	"globPatterns": [
		"**/*.{js,json,css,jpg,png,html,txt,ico}"
	],
	// serviceWorkerの場所
	"swDest": "build/sw.js",
	// ラインタイムキャッシュ
	"runtimeCaching": [
		{
			urlPattern: /^https:\/\/docs\.opencv\.org\/*\/opencv\.js$/,
			handler: "CacheFirst",
			options: {
				cacheName: "caching-opencv-js"
			}
		},
		{
			urlPattern: /^https:\/\/fonts\.googleapis\.com/,
			handler: 'StaleWhileRevalidate',
			options: {
				cacheName: 'google-fonts-stylesheets'
			}
		},
		{
			urlPattern: /^https:\/\/fonts\.gstatic\.com/,
			handler: 'CacheFirst',
			options: {
				cacheName: 'google-fonts-webfonts',
				expiration: {
					// GoogleFontsは7日間キャッシュする
					maxAgeSeconds: 60 * 60 * 24 * 7,
					maxEntries: 30
				}
			}
		}
	]
};