if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise((async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()}))),c.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},c=(c,s)=>{Promise.all(c.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(c)};self.define=(c,o,a)=>{s[c]||(s[c]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(o.map((c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}}))).then((e=>{const c=a(...e);return s.default||(s.default=c),s}))})))}}define("./sw.js",["./workbox-77ee246d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_snowpack/pkg/@material-ui/core.js",revision:"fd5a477d8b5210033224366146ad941b"},{url:"_snowpack/pkg/@material-ui/core/Box.js",revision:"91fc00ef2f3a86d8f1958290a59caab2"},{url:"_snowpack/pkg/@material-ui/core/Button.js",revision:"965ec2adb97f02c45ca59213f8a4312b"},{url:"_snowpack/pkg/@material-ui/core/CircularProgress.js",revision:"c15ed09f1cf328e51a30063e690cbf25"},{url:"_snowpack/pkg/@material-ui/core/colors.js",revision:"5dadff320b457c2d30a3029573cc66d5"},{url:"_snowpack/pkg/@material-ui/core/CssBaseline.js",revision:"db68f8ce16525d9dfd396e3950b7896e"},{url:"_snowpack/pkg/@material-ui/core/FormControlLabel.js",revision:"09083ad0540fd4649bc19fd357175d1c"},{url:"_snowpack/pkg/@material-ui/core/styles.js",revision:"6afc05d8afad6267bdf7d1ccc30a83df"},{url:"_snowpack/pkg/@material-ui/core/styles/withStyles.js",revision:"e269a995afde0176626eaa3b22d1b4d2"},{url:"_snowpack/pkg/@material-ui/core/Switch.js",revision:"3062c46a6e79cd84dc33cdbd6f206f99"},{url:"_snowpack/pkg/@material-ui/icons.js",revision:"616a49bdda403c4de2674bcbaea9eca2"},{url:"_snowpack/pkg/@material-ui/icons/Menu.js",revision:"e4635bea1d239a3c9812a43db55a2de9"},{url:"_snowpack/pkg/common/_commonjsHelpers-8c19dec8.js",revision:"be0b4e6c2ceebd0a86b4c74155f67de7"},{url:"_snowpack/pkg/common/ButtonBase-ce416d50.js",revision:"8fdf5d1c5cd29308e5e5679306f979ec"},{url:"_snowpack/pkg/common/capitalize-66967a61.js",revision:"8f40d7ce45fec5827b2b89651898b0e6"},{url:"_snowpack/pkg/common/capitalize-8ac17c40.js",revision:"ae148f0d1e717d8d46d9c6dbe01c63b1"},{url:"_snowpack/pkg/common/createSvgIcon-ac4c92ee.js",revision:"36f20701bd260a38f96b62de42195353"},{url:"_snowpack/pkg/common/defaultTheme-8fd7b8d6.js",revision:"ead11e19f425bc406d732ddf97b0b75c"},{url:"_snowpack/pkg/common/green-c86e4e47.js",revision:"4272c73b73026580677d44eefec1df18"},{url:"_snowpack/pkg/common/IconButton-400ded96.js",revision:"f073d75e52365888ce619200528e38d3"},{url:"_snowpack/pkg/common/index-04edb6a1.js",revision:"8196d2360936c8eb6acf6b48846a8b62"},{url:"_snowpack/pkg/common/index-3eae4d6e.js",revision:"5450b057e8d98803a259896272405c99"},{url:"_snowpack/pkg/common/index-ce016b4a.js",revision:"4f9bc92bba95202e70f41fe387c30e03"},{url:"_snowpack/pkg/common/interopRequireDefault-3cc583d4.js",revision:"141807b7e7e66c789477ed803ea79266"},{url:"_snowpack/pkg/common/interopRequireWildcard-464aa611.js",revision:"cb8b2a97913fdeb4a19a9b0dd5732269"},{url:"_snowpack/pkg/common/isMuiElement-8cbbe173.js",revision:"d4bf96934e94c4b9f50c2f1b2d103b1d"},{url:"_snowpack/pkg/common/styled-a507c1c8.js",revision:"42eb40588ef3cba8d06c4be3ceb14632"},{url:"_snowpack/pkg/common/styled-ce899887.js",revision:"aadf5e7211da34656f4feb2143fe85d3"},{url:"_snowpack/pkg/common/Typography-aebe91f5.js",revision:"d84cdc3e3517a7ef53509047194637e7"},{url:"_snowpack/pkg/common/unstable_useId-d743e691.js",revision:"03e542c7d72e7964257e8d6ef5940bbc"},{url:"_snowpack/pkg/common/useIsFocusVisible-8be5e09b.js",revision:"47aebc0fc2dc00d3cd695522a66fab11"},{url:"_snowpack/pkg/common/withStyles-26bb02d1.js",revision:"7cfff73f99eafd68c06e2cba03f25cf9"},{url:"_snowpack/pkg/common/withStyles-9a4a9ef4.js",revision:"6375cc403b86a9463539ea4f757d2c32"},{url:"_snowpack/pkg/common/withStyles-9f44c3cd.js",revision:"962518d5d4acea3bd5fa48d9284f2fb8"},{url:"_snowpack/pkg/import-map.json",revision:"2e2df486faed8cf883eba4b55015ae7c"},{url:"_snowpack/pkg/leaflet.control.opacity.js",revision:"5566d2253cf48ed60fab11d32115a803"},{url:"_snowpack/pkg/leaflet.control.opacity/dist/L.Control.Opacity.css",revision:"1b68415b01e390170dac687840268d73"},{url:"_snowpack/pkg/leaflet.control.opacity/dist/L.Control.Opacity.css.proxy.js",revision:"41bfc1172f24c9071076a83842066245"},{url:"_snowpack/pkg/leaflet.js",revision:"02fd4f46c454cdab511fc28754ff42a3"},{url:"_snowpack/pkg/leaflet.sync.js",revision:"b0af0ba04a373d51325158d448d05eb6"},{url:"_snowpack/pkg/leaflet/dist/leaflet.css",revision:"5c761a156eea82263d8bacf1718fe04d"},{url:"_snowpack/pkg/leaflet/dist/leaflet.css.proxy.js",revision:"2a0290f26c7cb9566f69ab67f37decbd"},{url:"_snowpack/pkg/opencv-react.js",revision:"e5929465a366b1dcadee967a48a356cb"},{url:"_snowpack/pkg/prop-types.js",revision:"35d2a89ce589ace0dd229b6c01925349"},{url:"_snowpack/pkg/react-dom.js",revision:"7a3ffb70d2c5832aeed22d4174e2dd5f"},{url:"_snowpack/pkg/react-image-base64.js",revision:"186e4234268cacd245808dfbb63a8f33"},{url:"_snowpack/pkg/react.js",revision:"8e1e9f573b7310df76b85bde0f104eb9"},{url:"favicon.ico",revision:"6e6702188260ecadc1dbfb15623c13ad"},{url:"icon.png",revision:"95874b45ee6961857d89c611a94cab04"},{url:"index.html",revision:"731fde3d59648a629ec1f1f5b0519fe4"},{url:"static/App.js",revision:"56cafa67c0a920f1f5582134540ebe8e"},{url:"static/components/atoms/ButtonWithIcon.js",revision:"fcf79a842f561e080c334a2ae7016f25"},{url:"static/components/atoms/ScrollDialog.js",revision:"6ad934d2971147031b58c3385df2d6e6"},{url:"static/components/block/LicenseInfo.js",revision:"55b10eaed30955cf927d955191e2d8e3"},{url:"static/components/block/MenuBar.js",revision:"1ecbc3c1f7eb8d195bbb596ce69d864f"},{url:"static/components/block/MyDrawer.js",revision:"f6d15e3dd37e4039d838581e3b74ca98"},{url:"static/components/block/PreviewImage.js",revision:"13838cfe665005d5c80ebd67732828d7"},{url:"static/components/modules/ImageCompare.js",revision:"c2dd20e529fdf7b86b979a18edeb0132"},{url:"static/components/modules/ImageLoader.js",revision:"ba793bc2336a0ee35be694f48eec13ac"},{url:"static/components/modules/ImageTransform.js",revision:"56d7ab056362b1e59deab718a98ebc6d"},{url:"static/components/modules/Workflow.js",revision:"9fe12118af7b2b4bc98045a3cb66ccf5"},{url:"static/index.js",revision:"2af78c5e88cfdac01ef47445f8b8a23f"},{url:"static/licenses.json",revision:"1c67cc096d9e08e6aefb34383f2cca3c"},{url:"static/licenses.json.proxy.js",revision:"0a61c9fc9afbc1dd0d53ed189faaaa45"},{url:"static/style.css",revision:"7480aad0afe46c7e52ebc0dee5383fba"},{url:"static/style.css.proxy.js",revision:"d4999d31fb460c6d47cdc7d3b02fb771"},{url:"static/utils/Messages.js",revision:"02552f5b2a3f35eb785da74c73accc07"},{url:"static/utils/Settings.js",revision:"2c3482ed0f4dc3db5930d1dad3b444d0"},{url:"webmanifest.json",revision:"4dec3d604c2c4f8f71c94d2b35aa229c"}],{}),e.registerRoute(/^https:\/\/docs\.opencv\.org\/*\/opencv\.js$/,new e.CacheFirst({cacheName:"caching-opencv-js",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,maxEntries:30,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
