if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise((async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()}))),c.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},c=(c,s)=>{Promise.all(c.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(c)};self.define=(c,o,a)=>{s[c]||(s[c]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(o.map((c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}}))).then((e=>{const c=a(...e);return s.default||(s.default=c),s}))})))}}define("./sw.js",["./workbox-77ee246d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_snowpack/pkg/@material-ui/core.js",revision:"3a0c9bdc8967a48b3e1e4e94750c2e71"},{url:"_snowpack/pkg/@material-ui/core/Box.js",revision:"776ef582bcaff2f1a742d550b9f5d4fd"},{url:"_snowpack/pkg/@material-ui/core/Button.js",revision:"eddbe6351409c1601f2da1bcbb3c147d"},{url:"_snowpack/pkg/@material-ui/core/CircularProgress.js",revision:"25db4ff48fbb434987877e9b171a14e5"},{url:"_snowpack/pkg/@material-ui/core/colors.js",revision:"5dadff320b457c2d30a3029573cc66d5"},{url:"_snowpack/pkg/@material-ui/core/CssBaseline.js",revision:"39e6f6523cd62d3de036c8b559d5a288"},{url:"_snowpack/pkg/@material-ui/core/FormControlLabel.js",revision:"3c5f35404939c55c33635f2680c929da"},{url:"_snowpack/pkg/@material-ui/core/styles.js",revision:"87534f67b07a382be812d5db9b6eaadd"},{url:"_snowpack/pkg/@material-ui/core/styles/withStyles.js",revision:"b37c087b27eae67b31c628301b54a888"},{url:"_snowpack/pkg/@material-ui/core/Switch.js",revision:"f6e5fbbd79023e4d17de17ff2719a6b8"},{url:"_snowpack/pkg/@material-ui/icons.js",revision:"775ae97d771eef6f455efc6fc1c724ae"},{url:"_snowpack/pkg/@material-ui/icons/Menu.js",revision:"f098959fe17b3a83cf2a404d79fd5fc3"},{url:"_snowpack/pkg/common/_commonjsHelpers-8c19dec8.js",revision:"be0b4e6c2ceebd0a86b4c74155f67de7"},{url:"_snowpack/pkg/common/ButtonBase-bf56cc1e.js",revision:"2f99625b4396b7255bef1586506e1874"},{url:"_snowpack/pkg/common/capitalize-49698f90.js",revision:"9b2fdbb033c7f2e446b145ce8bac04e6"},{url:"_snowpack/pkg/common/capitalize-687873c6.js",revision:"65b839ef5d9f2e383727b05daf6add76"},{url:"_snowpack/pkg/common/createSvgIcon-4b3ac7f6.js",revision:"2fa41a47a12be2a6b6ac59856f6c8788"},{url:"_snowpack/pkg/common/defaultTheme-19d95200.js",revision:"12597f7bea448d03a5880c0cdebbb666"},{url:"_snowpack/pkg/common/green-c86e4e47.js",revision:"4272c73b73026580677d44eefec1df18"},{url:"_snowpack/pkg/common/IconButton-e3cf6c4a.js",revision:"8fa7868d2f3d9997efb0296ab0407006"},{url:"_snowpack/pkg/common/index-04edb6a1.js",revision:"8196d2360936c8eb6acf6b48846a8b62"},{url:"_snowpack/pkg/common/index-3eae4d6e.js",revision:"5450b057e8d98803a259896272405c99"},{url:"_snowpack/pkg/common/index-ce016b4a.js",revision:"4f9bc92bba95202e70f41fe387c30e03"},{url:"_snowpack/pkg/common/interopRequireDefault-3cc583d4.js",revision:"141807b7e7e66c789477ed803ea79266"},{url:"_snowpack/pkg/common/interopRequireWildcard-93557af1.js",revision:"b257cd2b2aa772e9a61d9c9bc0905106"},{url:"_snowpack/pkg/common/isMuiElement-8cbbe173.js",revision:"d4bf96934e94c4b9f50c2f1b2d103b1d"},{url:"_snowpack/pkg/common/ownerWindow-14b71efa.js",revision:"4a4f90d5cd6400422a148410fec693ac"},{url:"_snowpack/pkg/common/styled-b9edf3bf.js",revision:"e90469da0b89633c333b29da9a419942"},{url:"_snowpack/pkg/common/styled-cf6f44d6.js",revision:"f57c2231670f07e99e0ac27318cf54e3"},{url:"_snowpack/pkg/common/Typography-cb44222b.js",revision:"0fe1734504c4541a71d083d7fa81ba07"},{url:"_snowpack/pkg/common/useIsFocusVisible-8be5e09b.js",revision:"47aebc0fc2dc00d3cd695522a66fab11"},{url:"_snowpack/pkg/common/withStyles-0319c339.js",revision:"c424ac4ba843c03ae0cdf8d8104a4aaf"},{url:"_snowpack/pkg/common/withStyles-8d7ad317.js",revision:"236d19234e5e54da2a54cf818ad7d4ac"},{url:"_snowpack/pkg/common/withStyles-f1607a1c.js",revision:"72e547868c97aec20ecdb1c76556392b"},{url:"_snowpack/pkg/import-map.json",revision:"baa31f42fd55bed40531b28ef55514c5"},{url:"_snowpack/pkg/leaflet.control.opacity.js",revision:"5566d2253cf48ed60fab11d32115a803"},{url:"_snowpack/pkg/leaflet.control.opacity/dist/L.Control.Opacity.css",revision:"1b68415b01e390170dac687840268d73"},{url:"_snowpack/pkg/leaflet.control.opacity/dist/L.Control.Opacity.css.proxy.js",revision:"41bfc1172f24c9071076a83842066245"},{url:"_snowpack/pkg/leaflet.js",revision:"02fd4f46c454cdab511fc28754ff42a3"},{url:"_snowpack/pkg/leaflet.sync.js",revision:"b0af0ba04a373d51325158d448d05eb6"},{url:"_snowpack/pkg/leaflet/dist/leaflet.css",revision:"5c761a156eea82263d8bacf1718fe04d"},{url:"_snowpack/pkg/leaflet/dist/leaflet.css.proxy.js",revision:"2a0290f26c7cb9566f69ab67f37decbd"},{url:"_snowpack/pkg/opencv-react.js",revision:"e5929465a366b1dcadee967a48a356cb"},{url:"_snowpack/pkg/prop-types.js",revision:"35d2a89ce589ace0dd229b6c01925349"},{url:"_snowpack/pkg/react-dom.js",revision:"7a3ffb70d2c5832aeed22d4174e2dd5f"},{url:"_snowpack/pkg/react-file-input-previews-base64.js",revision:"4c6c889904dbac12e98b03a268db00e2"},{url:"_snowpack/pkg/react.js",revision:"8e1e9f573b7310df76b85bde0f104eb9"},{url:"favicon.ico",revision:"6e6702188260ecadc1dbfb15623c13ad"},{url:"icon.png",revision:"95874b45ee6961857d89c611a94cab04"},{url:"index.html",revision:"731fde3d59648a629ec1f1f5b0519fe4"},{url:"static/App.js",revision:"268f1a06c34be5493563850c354d919a"},{url:"static/components/atoms/ButtonWithIcon.js",revision:"9b1fd1fea5ee5816c222b24b2244347d"},{url:"static/components/atoms/ScrollDialog.js",revision:"20301f7e9d454d6fac9130e9a084d4e0"},{url:"static/components/block/LicenseInfo.js",revision:"68598400a1629db1b8581faca35258f9"},{url:"static/components/block/MenuBar.js",revision:"aaa8c2956eb1fed3e3865c206dcd7b1b"},{url:"static/components/block/MyDrawer.js",revision:"fbd55924cb0a97467510959067e0a977"},{url:"static/components/block/PreviewImage.js",revision:"1fae1e0bc52b2380ebe7b215e21b4340"},{url:"static/components/modules/ImageCompare.js",revision:"283dab6b30e37b7f2346ac178c254bb8"},{url:"static/components/modules/ImageLoader.js",revision:"15b443bc34dd72594db89a03da448d0c"},{url:"static/components/modules/ImageTransform.js",revision:"600617ccf0bbd2966c85dfd6d9a26468"},{url:"static/components/modules/Workflow.js",revision:"23916755feeeddf48f3716cc81f70eaf"},{url:"static/index.js",revision:"4113972b50093dfd71a4605e5082050a"},{url:"static/licenses.json",revision:"263ae0845770dcc492a91b5beb9e5fce"},{url:"static/licenses.json.proxy.js",revision:"67fc9373d7f4c0af84469b79eb2edfc4"},{url:"static/style.css",revision:"7480aad0afe46c7e52ebc0dee5383fba"},{url:"static/style.css.proxy.js",revision:"d4999d31fb460c6d47cdc7d3b02fb771"},{url:"webmanifest.json",revision:"4dec3d604c2c4f8f71c94d2b35aa229c"}],{}),e.registerRoute(/^https:\/\/docs\.opencv\.org\/*\/opencv\.js$/,new e.CacheFirst({cacheName:"caching-opencv-js",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,maxEntries:30,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
