(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{59:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(8),c=n.n(i),o=n(12),l=n.n(o),u=n(13),s=n.n(u),f=n(6),p=n.n(f),m=n(60),v=n(0),h=n.n(v),g=n(7),d=n(77),w=n(19),y=n(61),k=n.n(y);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var b=function(e){l()(n,e);var t=E(n);function n(e){var r;return a()(this,n),(r=t.call(this,e)).ocr_api_endpoint="https://ocr-ypkwsijlva-de.a.run.app/ocr",r.handleImagePreview=function(e){var t=URL.createObjectURL(e.target.files[0]),n=e.target.files[0];r.setState({imagePreview:t,imageFile:n})},r.handleSubmitFile=function(){if(null!==r.state.imageFile){var e=new FormData;e.append("file",r.state.imageFile),k.a.post(r.ocr_api_endpoint,e,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){r.setState({result:e.data})})).catch((function(e){console.log(e)}))}},r.state={imageFile:null,imagePreview:"",result:""},r}return c()(n,[{key:"render",value:function(){return h.a.createElement(w.a,{style:F.container},h.a.createElement(d.a,null,"OCR Demo Application"),h.a.createElement(m.StatusBar,{style:"auto"}),h.a.createElement("img",{src:this.state.imagePreview,alt:"image preview"}),h.a.createElement("div",null,h.a.createElement("input",{type:"file",onChange:this.handleImagePreview})),h.a.createElement("div",null,h.a.createElement("input",{type:"submit",onClick:this.handleSubmitFile,value:"Submit"})),h.a.createElement("div",null,this.state.result))}}]),n}(v.Component);t.a=b;var F=g.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},86:function(e,t,n){n(87),e.exports=n(128)},87:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/hokminglee0803/ocrProject/expo-service-worker.js",{scope:"/hokminglee0803/ocrProject/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[86,1,2]]]);
//# sourceMappingURL=app.fdbb4ef7.chunk.js.map