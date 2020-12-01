(this.webpackJsonpimageCompare=this.webpackJsonpimageCompare||[]).push([[0],{77:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),c=a.n(i),s=a(13),r=a.n(s),o=(a(77),a(9)),l=a(10),h=a(12),p=a(11),j=a(61),u=a(125),d=a(126),m=a(60),b=a.n(m),g=a(118),v=a(119),O=a(120),f=a(121),x=a(64),C=a(57),S=a.n(C),w=a(112),y=a(128),k=a(117),I=a(115),N=a(116),R=a(114),B=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.state={open:!1},n.descriptionElement=c.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(w.a,{onClick:this.handleClickOpen,children:this.props.label}),Object(n.jsxs)(y.a,{open:this.state.open,onClose:this.handleClose,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[Object(n.jsx)(R.a,{id:"scroll-dialog-title",children:this.props.title}),Object(n.jsx)(I.a,{dividers:!0,children:Object(n.jsx)(N.a,{id:"scroll-dialog-description",ref:this.descriptionElement,tabIndex:-1,children:this.props.content})}),Object(n.jsx)(k.a,{children:Object(n.jsx)(w.a,{onClick:this.handleClose,color:"primary",children:"OK"})})]})]})}}]),a}(c.a.Component),E=Object(g.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),A="\nimageCompare 0.9\nhttps://github.com/YUUKIToriyama/imageCompare\n(C)Copyright 2020 YUUKIToriyama All Rights Reserved.\n".split("\n").map((function(e){return Object(n.jsxs)("span",{children:[e,Object(n.jsx)("br",{})]})})),L=function(){var e=E();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(v.a,{position:"static",children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(f.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(n.jsx)(S.a,{})}),Object(n.jsx)(x.a,{variant:"h6",className:e.title,children:"imageCompare"}),Object(n.jsx)(B,{label:"Help",title:"About this app",content:A})]})})})},z=a(5),T=a(127),D=a(130),F=a(122),M=a(129),P=a(131),U=a(85),_=a(133),V=a(58),K=a.n(V),Y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).fileInputCallback=function(e){var t=e,a=new Image;a.src=t.base64,a.onload=function(){t.width=a.width,t.height=a.height,n.setState({file:t}),n.props.onInputImageChange(t)}},n.state={file:{}},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(T.a,{children:Object(n.jsx)(K.a,{labelText:this.props.loaderId+1+"\u679a\u76ee",imagePreview:!0,multiple:!1,callbackFunction:function(t){console.log(t.name),e.fileInputCallback(t,1)},buttonComponent:Object(n.jsx)(f.a,{color:"primary","aria-label":"upload picture",component:"span",children:Object(n.jsx)(_.a,{})}),textFieldComponent:Object(n.jsx)("input",{type:"text"}),accept:"image/*"})})}}]),a}(c.a.Component),q=(a(53),a(20)),G=a.n(q),J=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).mapRef=c.a.createRef(),n.state={width:0,height:0},n.map=null,n.layer=null,n.imageBounds,n.markers=[],n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.image;this.imageBounds=new G.a.latLngBounds([[-t.height/2,-t.width/2],[t.height/2,t.width/2]]),this.map=G.a.map(this.mapRef.current,{center:[0,0],maxBounds:this.imageBounds.pad(.3),crs:G.a.CRS.Simple}),this.layer=G.a.imageOverlay(t.base64,this.imageBounds),this.layer.addTo(this.map),this.map.fitBounds(this.imageBounds);for(var a=0;a<10;a++){var n=G.a.divIcon({html:'<div class="bg-round"><span>'.concat(10-a,"</span></div>"),className:"divicon"}),i=this.map.getCenter(),c=new G.a.marker(i,{draggable:!0,icon:n});this.markers.push(c)}this.markers.forEach((function(t){t.on("moveend",(function(e){var t=e.target.getLatLng();console.log(t)})),t.addTo(e.map)}))}},{key:"render",value:function(){return Object(n.jsx)("div",{ref:this.mapRef,style:{width:"100%",height:"300px"}})}}]),a}(c.a.Component),H=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).drawRectifyArea=function(e){var t=new cv.Scalar(255,255,0,.5),a=new cv.Scalar(255,0,255,.5),i=n.state.vertices.length;if(i<4){var c=e.target.getBoundingClientRect(),s=(e.clientX-c.left)/n.scale,r=(e.clientY-c.top)/n.scale,o=new cv.Point(parseInt(s),parseInt(r));cv.circle(n.working,o,10/n.scale,t,cv.FILLED),cv.imshow(n.canvasElement.current,n.working),n.state.vertices.push(o),0!=i&&(cv.line(n.working,n.state.vertices[i-1],n.state.vertices[i],a,2/n.scale,cv.LINE_AA,0),cv.imshow(n.canvasElement.current,n.working))}3==i&&(cv.line(n.working,n.state.vertices[3],n.state.vertices[0],a,2/n.scale,cv.LINE_AA,0),cv.imshow(n.canvasElement.current,n.working)),4==n.state.vertices.length&&n.rectifyImage(n.src,n.state.vertices)},n.rectifyImage=function(e,t){var a=[];t.forEach((function(e){a.push(e.x),a.push(e.y)}));var i=function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},c=i(t[0],t[1]),s=i(t[1],t[2]),r=i(t[2],t[3]),o=i(t[3],t[0]),l=Math.max(c,r),h=Math.max(s,o),p=[0,0,l,0,l,h,0,h],j=cv.matFromArray(4,1,cv.CV_32FC2,a),u=cv.matFromArray(4,1,cv.CV_32FC2,p),d=cv.getPerspectiveTransform(j,u),m=new cv.Mat,b=new cv.Size(l,h);cv.warpPerspective(e,m,d,b,cv.INTER_LINEAR,cv.BORDER_CONSTANT,new cv.Scalar),cv.imshow(n.canvasElement.current,m);var g={url:n.canvasElement.current.toDataURL("image/png",1,l,h),width:l,height:h};n.props.onImageProcessingDone(g),[e,m].forEach((function(e){return e.delete()}))},n.canvasElement=c.a.createRef(),n.images=n.props.images,n.src,n.working,n.imageSize,n.scale,n.state={vertices:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsxs)(T.a,{children:[Object(n.jsx)(J,{image:this.images[0]}),Object(n.jsx)(J,{image:this.images[1]})]})}}]),a}(c.a.Component),X=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={lat:0,lng:0,zoom:0,crs:G.a.CRS.Simple},n}return Object(l.a)(a,[{key:"render",value:function(){this.props.image;return Object(n.jsx)("div",{})}}]),a}(c.a.Component),Q=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).steps=["\u753b\u50cf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9","\u5bfe\u5fdc\u70b9\u3092\u9078\u629e","\u5909\u63db"],i.renderImageLoader=function(e){return Object(n.jsx)(Y,{loaderId:e,onInputImageChange:function(t){var a=i.state.inputImages;a[e]=t,i.setState({inputImages:a})}})},i.handleImageProcessingDone=function(e){i.setState({processedImage:e})},i.handleNext=function(){i.setState({activeStep:i.state.activeStep+1})},i.handleBack=function(){i.setState({activeStep:i.state.activeStep-1})},i.handleReset=function(){i.setState({activeStep:0})},i.allowNextStep=function(){i.setState({goNextStep:!0})},i.getStepContent=function(e){switch(e){case 0:return Object(n.jsxs)(T.a,{children:[Object(n.jsx)(x.a,{children:"\u51e6\u7406\u3092\u884c\u306a\u3046\u753b\u50cf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"}),i.renderImageLoader(0),i.renderImageLoader(1)]});case 1:return Object(n.jsxs)(T.a,{children:[Object(n.jsx)(x.a,{children:"\u30de\u30fc\u30ab\u30fc\u3092\u52d5\u304b\u3057\u3066\u5bfe\u5fdc\u3059\u308b\u70b9\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044"}),Object(n.jsx)(H,{images:i.state.inputImages,onImageProcessingDone:i.handleImageProcessingDone})]});case 2:return Object(n.jsxs)(T.a,{children:[Object(n.jsx)(x.a,{children:"\u51e6\u7406\u4e2d\u2026\u2026"}),Object(n.jsx)(X,{image:i.state.processedImage})]});default:return Object(n.jsx)(x.a,{children:"Unknown step"})}},i.state={activeStep:0,goNextStep:!0,inputImages:[null,null],processedImage:{url:"",width:0,height:0}},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(T.a,{className:this.props.classes.root,children:[Object(n.jsx)(D.a,{activeStep:this.state.activeStep,orientation:"vertical",children:this.steps.map((function(t,a){return Object(n.jsxs)(F.a,{children:[Object(n.jsx)(M.a,{children:t}),Object(n.jsxs)(P.a,{children:[e.getStepContent(a),Object(n.jsx)(T.a,{className:e.props.classes.actionsContainer,children:Object(n.jsxs)(T.a,{children:[Object(n.jsx)(w.a,{disabled:0===e.state.activeStep,onClick:e.handleBack,className:e.props.classes.button,children:"Back"}),Object(n.jsx)(w.a,{disabled:!e.state.goNextStep,variant:"contained",color:"primary",onClick:e.handleNext,className:e.props.classes.button,children:e.state.activeStep===e.steps.length-1?"Finish":"Next"})]})})]})]},t)}))}),this.state.activeStep===this.steps.length&&Object(n.jsxs)(U.a,{square:!0,elevation:0,className:this.props.classes.resetContainer,children:[Object(n.jsx)(x.a,{children:"\u51e6\u7406\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\uff01"}),Object(n.jsx)(w.a,{onClick:this.handleReset,className:this.props.classes.button,children:"\u3084\u308a\u76f4\u3059"})]})]})}}]),a}(c.a.Component),W=Object(z.a)({root:{width:"100%"},button:{marginTop:"15px",marginRight:"15px"},actionsContainer:{marginBottom:"15px"},resetContainer:{padding:"15px"}})(Q),Z=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={image:""},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(W,{})}}]),a}(c.a.Component),$=a(123),ee=a(124),te=a(59),ae=a.n(te),ne=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(T.a,{children:[this.props.loading?Object(n.jsx)($.a,{}):Object(n.jsx)(ee.a,{color:"primary",fontSize:"large",children:Object(n.jsx)(ae.a,{})}),Object(n.jsx)(x.a,{children:this.props.loading?"Now Loading OpenCV.js...":"OpenCV.js has been loaded on your browser!"}),this.props.loading?"":Object(n.jsx)(B,{label:"About OpenCV.js",title:"Build information",content:cv.getBuildInformation().split("\n").map((function(e){return Object(n.jsxs)("span",{children:[e,Object(n.jsx)("br",{})]})}))})]})}}]),a}(c.a.Component),ie=Object(j.a)({palette:{primary:b.a},typography:{fontFamily:["Roboto","Noto Sans"].join(","),fontSize:13,h1:{fontSize:"1.75rem"},h2:{fontSize:"1.5rem"},h3:{fontSize:"1.25rem"},h4:{fontSize:"1.125rem"},h5:{fontSize:"1rem"},h6:{fontSize:"1rem"}}}),ce=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:!0},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(u.a,{theme:ie,children:[Object(n.jsx)(d.a,{}),Object(n.jsx)(L,{}),Object(n.jsx)(ne,{loading:this.state.loading}),Object(n.jsx)(Z,{})]})}}]),a}(c.a.Component);r.a.render(Object(n.jsx)(ce,{}),document.getElementById("app"))}},[[83,1,2]]]);
//# sourceMappingURL=main.1330c925.chunk.js.map