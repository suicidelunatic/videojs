(this.webpackJsonpvideojs=this.webpackJsonpvideojs||[]).push([[0],{13:function(t,e,n){t.exports={wrapper:"Video_wrapper__3Z0Pe","vjs-resolution-button":"Video_vjs-resolution-button__10Glm","vjs-icon-placeholder":"Video_vjs-icon-placeholder__2RWlV","vjs-resolution-button-label":"Video_vjs-resolution-button-label__35Chm","vjs-menu":"Video_vjs-menu__2CBw8","vjs-menu-content":"Video_vjs-menu-content__3vyy2","vjs-menu-item":"Video_vjs-menu-item__3DE4_",auto:"Video_auto__5kQIj","vjs-menu-item-text":"Video_vjs-menu-item-text__39xvR","video-js":"Video_video-js__1ODmu","vjs-big-play-button":"Video_vjs-big-play-button__1b-4X","theme-high-contrast":"Video_theme-high-contrast__3K75L","vjs-poster":"Video_vjs-poster__Li1Eb","vjs-error-display":"Video_vjs-error-display__1ol74","vjs-track-setting":"Video_vjs-track-setting__30-ZF","vjs-fluid":"Video_vjs-fluid__wjVr5","vjs-16-9":"Video_vjs-16-9__YcJ0s","vjs-4-3":"Video_vjs-4-3__3J_NU","vjs-tech":"Video_vjs-tech__1TcJ2","vjs-control-bar":"Video_vjs-control-bar__1nwSX",hasChapters:"Video_hasChapters__2AERC",transcript:"Video_transcript__1IwwF",hidden:"Video_hidden__3Q9Ko",transcriptHeader:"Video_transcriptHeader__dzv2P",transcriptContainer:"Video_transcriptContainer__2YfRE"}},49:function(t,e,n){},51:function(t,e){},74:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var i=n(6),r=n.n(i),s=n(35),o=n.n(s),a=(n(49),n(16)),c=n(24),u=n.n(c),l=n(36),d=n(37),p=n(44),v=n(25),h=n.n(v),_=n(5),f=(n(63),n(64),n(65),n(29)),j=n(9),m=n(10),b=n(19),g=n(12),O=n(11),y=n(43),V=_.a.getComponent("MenuButton"),x=_.a.getComponent("Menu"),B=_.a.getComponent("MenuItem"),T=_.a.dom,C=function(t){Object(g.a)(n,t);var e=Object(O.a)(n);function n(t){var i;return Object(j.a)(this,n),(i=e.call(this,t,{title:"Transcription"})).items=void 0,i.hideThreshold=void 0,i}return Object(m.a)(n,[{key:"createItems",value:function(){return[]}},{key:"createMenu",value:function(){var t,e=new x(this.player_,{menuButton:this});if(this.hideThreshold=0,null===(t=this.options_)||void 0===t?void 0:t.title){var n=T.createEl("li",{className:"vjs-menu-title",innerHTML:this.options_.title,tabIndex:-1}),i=new B(this.player_,{el:n});this.hideThreshold+=1,e.addItem(i)}if(this.items=this.createItems.call(this),this.items)for(var r=0;r<this.items.length;r++)e.addItem(this.items[r]);return e.menuButton_.el_.setAttribute("title","Transcription"),e}}]),n}(V),w=function(t){Object(g.a)(n,t);var e=Object(O.a)(n);function n(t,i,r,s){var o;return Object(j.a)(this,n),(o=e.call(this,t,{label:i.label,selectable:!0,selected:i.selected||!1})).item=void 0,o.transcriptButton=void 0,o.plugin=void 0,o.isSelected_=void 0,o.item=i,o.transcriptButton=r,o.plugin=s,o.item.selected&&o.plugin.setTranscription(o.item.value),o}return Object(m.a)(n,[{key:"handleClick",value:function(){for(var t=this.isSelected_,e=0;e<Number(null===(n=this.transcriptButton.items)||void 0===n?void 0:n.length);e+=1){var n,i;null===(i=this.transcriptButton.items)||void 0===i||i[e].selected(!1)}this.plugin.setTranscription(t?null:this.item.value),this.selected(!t)}}]),n}(_.a.getComponent("MenuItem")),I=_.a.getPlugin("plugin"),k=_.a.registerPlugin||_.a.plugin,E=function(t){Object(g.a)(n,t);var e=Object(O.a)(n);function n(t,i){var r;return Object(j.a)(this,n),(r=e.call(this,t,i)).player=void 0,r.config=void 0,r.items=void 0,r.transcriptionButton=void 0,r.player=t,r.config=i,r.on("addTranscription",(function(t,e){var n=e.data;r.addTranscription.call(Object(b.a)(r),n)})),r}return Object(m.a)(n,[{key:"createTranscriptionButton",value:function(){this.transcriptionButton=new C(this.player);var t=this.player.controlBar.children().length-2,e=this.player.controlBar.addChild(this.transcriptionButton,{componentClass:"subtitles"},this.config.placementIndex||t);e.addClass("vjs-subtitles-button"),this.setButtonInnerText("Transcription"),e.removeClass("vjs-hidden")}},{key:"getTranscriptionMenuItem",value:function(t){var e=Object.assign({},t),n=this.player,i=this.transcriptionButton||new C(n);return e.id===this.config.defaultTranscriptId&&(e.selected=!0),new w(n,e,i,this)}},{key:"addTranscription",value:function(t){this.items=[].concat(Object(f.a)(this.items||[]),Object(f.a)(t)).filter((function(t,e,n){return n.findIndex((function(e){return e.value===t.value}))===e})),this.items&&this.createTranscriptionButton();var e=this.items.map(this.getTranscriptionMenuItem.bind(this));this.transcriptionButton&&(this.transcriptionButton.createItems=function(){return e},this.transcriptionButton.update.call(this.transcriptionButton))}},{key:"setTranscription",value:function(t){var e=this.config,n=e.onOpen,i=e.onClose;if(t){n&&n();var r=Object(y.parse)(t).entries;this.config.container.innerHTML=r.map((function(t){return"<p>".concat(t.text,"</p>")})).join("\n")}else i&&i(),this.config.container.innerHTML=""}},{key:"setButtonInnerText",value:function(t){this.transcriptionButton&&(this.transcriptionButton.menuButton_.$(".vjs-control-text").innerHTML=t)}}]),n}(I);k("transcriptionSelector",E);var M=n(13),L=n.n(M),N=n(7),R=function(t){var e=t.src,n=t.options,r=t.className,s=t.transcriptons,o=t.onError,c=void 0===o?function(){}:o,v=i.useRef(null),f=i.useRef(null),j=i.useRef(),m=i.useRef(!1),b=i.useState(!0),g=Object(p.a)(b,2),O=g[0],y=g[1];i.useEffect((function(){if(j.current&&j.current.dispose&&j.current.dispose(),v.current)return j.current=Object(_.a)(v.current,Object(d.a)({controls:!0,fluid:!0,plugins:{hlsQualitySelector:{displayCurrentQuality:!0},transcriptionSelector:{container:f.current,onOpen:function(){return y(!1)},onClose:function(){return y(!0)}}}},n),(function(){var t;null===(t=j.current)||void 0===t||t.src([{src:e,type:"application/x-mpegURL"}])})),function(){var t;null===(t=j.current)||void 0===t||t.dispose()}}),[]),i.useEffect((function(){var t;null===(t=j.current)||void 0===t||t.width(null===n||void 0===n?void 0:n.width)}),[null===n||void 0===n?void 0:n.width]),i.useEffect((function(){var t;null===(t=j.current)||void 0===t||t.height(null===n||void 0===n?void 0:n.height)}),[null===n||void 0===n?void 0:n.height]),i.useEffect((function(){var t;null===(t=j.current)||void 0===t||t.src([{src:e,type:"application/x-mpegURL"}])}),[e]);var V=function(){var t=Object(l.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map((function(t){return fetch(t.src)})));case 2:return n=t.sent,t.next=5,Promise.all(n.map((function(t){return t.text()})));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return i.useEffect((function(){V(s).then((function(t){var e,n=s.map((function(e,n){return{id:e.id,label:e.label,value:t[n]}}));null===(e=j.current)||void 0===e||e.transcriptionSelector().trigger("addTranscription",{data:n})})).catch((function(){}))}),[s]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:h()(r,L.a.wrapper),children:Object(N.jsx)("video",{ref:v,className:"video-js",onError:function(t){m.current&&c(t)}})}),Object(N.jsxs)("div",{className:h()(L.a.transcript,Object(a.a)({},L.a.hidden,O)),children:[Object(N.jsx)("div",{className:L.a.transcriptHeader,children:"Video transcript"}),Object(N.jsx)("div",{ref:f,className:L.a.transcriptContainer})]})]})},S=(n(74),"".concat("https://tranquil-ocean-64031.herokuapp.com","/2.P_13.4_ForceandMotionQC_1.m3u8")),P=[{id:"english",src:"".concat("https://tranquil-ocean-64031.herokuapp.com","/force_and_motion_en.vtt"),label:"english"},{id:"spanish",src:"".concat("https://tranquil-ocean-64031.herokuapp.com","/force_and_motion_spa.vtt"),label:"spanish"}],F=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(R,{src:S,transcriptons:P})})},H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),i(t),r(t),s(t),o(t)}))};o.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(F,{})}),document.getElementById("root")),H()}},[[75,1,2]]]);
//# sourceMappingURL=main.bd7e4ceb.chunk.js.map