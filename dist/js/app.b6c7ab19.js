(function(e){function n(n){for(var a,u,r=n[0],c=n[1],l=n[2],s=0,p=[];s<r.length;s++)u=r[s],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&p.push(i[u][0]),i[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(n);while(p.length)p.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,r=1;r<t.length;r++){var c=t[r];0!==i[c]&&(a=!1)}a&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},i={app:0},o=[];function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/v-audio-ui-demo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var l=0;l<r.length;l++)n(r[l]);var d=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"0891":function(e,n,t){e.exports=t.p+"img/metal-2.21266f8f.png"},1615:function(e,n,t){},"1c2f":function(e,n,t){"use strict";t("ee7a")},"5f1f":function(e,n,t){e.exports=t.p+"media/lost-in-the-fog.70a9038e.wav"},"66bc":function(e,n,t){},"72e7":function(e,n,t){"use strict";t("1615")},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("7a23"),i=function(e){return Object(a["m"])("data-v-3b30d150"),e=e(),Object(a["l"])(),e},o={id:"app"},u=["src"],r=i((function(){return Object(a["d"])("br",null,null,-1)})),c={class:"console"};function l(e,n,t,i,l,d){var s=Object(a["q"])("ChannelStrip"),p=Object(a["q"])("MasterChannel");return Object(a["k"])(),Object(a["c"])("div",o,[Object(a["d"])("audio",{controls:"",src:e.trackSrc},null,8,u),r,Object(a["d"])("div",c,[Object(a["g"])(s,{input:e.channelInput,output:e.channelOutput},null,8,["input","output"]),Object(a["g"])(p,{input:e.channelOutput,output:e.audioCtx.destination},null,8,["input","output"])])])}var d=null;function s(e){document.addEventListener("mousedown",(function(){"running"!=e.state&&e.resume()}))}var p={setupAudioContext:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(e)return null==d&&(d=new window.AudioContext,s(d)),d;var n=new window.AudioContext;return s(n),n},requestMicrophoneAccess:function(e,n){navigator.mediaDevices.getUserMedia({video:!1,audio:!0}).then((function(t){var a=e.createMediaStreamSource(t);n(a)})).catch((function(e){console.log("error requesting microphone access:"+e)}))}},f=p,b=function(e){return Object(a["m"])("data-v-351d542d"),e=e(),Object(a["l"])(),e},h={class:"channel-strip-container",ref:"container"},m={class:"eq-container"},g={class:"eq-band-container"},v=Object(a["f"])(" high "),O={class:"eq-band-container"},j=Object(a["f"])(" mid "),w={class:"eq-band-container"},q=Object(a["f"])(" low "),G=b((function(){return Object(a["d"])("br",null,null,-1)})),V={class:"volume-container"};function x(e,n,t,i,o,u){var r=Object(a["q"])("v-a-knob"),c=Object(a["q"])("v-a-fader"),l=Object(a["q"])("v-a-digital-meter");return Object(a["k"])(),Object(a["c"])("div",h,[Object(a["d"])("div",m,[Object(a["d"])("div",g,[v,Object(a["g"])(r,{class:"eq-knob",modelValue:e.highEqGain,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.highEqGain=n}),size:50,minValue:-10,maxValue:10},null,8,["modelValue"])]),Object(a["d"])("div",O,[j,Object(a["g"])(r,{class:"eq-knob",modelValue:e.midEqGain,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.midEqGain=n}),size:50,minValue:-20,maxValue:20},null,8,["modelValue"])]),Object(a["d"])("div",w,[q,Object(a["g"])(r,{class:"eq-knob",modelValue:e.lowEqGain,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.lowEqGain=n}),size:50,minValue:-20,maxValue:20},null,8,["modelValue"])])]),G,Object(a["d"])("div",V,[Object(a["g"])(c,{modelValue:e.faderGain,"onUpdate:modelValue":n[3]||(n[3]=function(n){return e.faderGain=n}),minValue:0,maxValue:1},null,8,["modelValue"]),Object(a["g"])(l,{class:"ui-component",type:"peak",input:e.postGain,drawMarkers:!0},null,8,["input"])])],512)}var y=Object(a["h"])({Name:"ChannelStrip",setup:function(e){var n=0,t=0,i=0,o=1,u=new BiquadFilterNode(e.input.context,{type:"lowshelf",gain:i}),r=new BiquadFilterNode(e.input.context,{type:"peaking",gain:t}),c=new BiquadFilterNode(e.input.context,{type:"highshelf",gain:n}),l=new GainNode(e.input.context,{gain:o});return e.input.connect(u),u.connect(r),r.connect(c),c.connect(l),l.connect(e.output),Object(a["n"])({lowshelf:u,midpeaking:r,highshelf:c,highEqGain:n,midEqGain:t,lowEqGain:i,postGain:l,faderGain:o})},props:{input:{required:!0,type:AudioNode},output:{required:!0,type:AudioNode}},computed:{backgroundImg:function(){return t("0891")}},mounted:function(){this.$refs.container.style.backgroundImage="url(".concat(this.backgroundImg,")")},watch:{highEqGain:function(e){this.highshelf.gain.setValueAtTime(e,this.input.context.currentTime)},midEqGain:function(e){this.midpeaking.gain.setValueAtTime(e,this.input.context.currentTime)},lowEqGain:function(e){this.lowshelf.gain.setValueAtTime(e,this.input.context.currentTime)},faderGain:function(e){this.postGain.gain.setValueAtTime(e,this.input.context.currentTime)}}}),k=(t("72e7"),t("6b0d")),C=t.n(k);const N=C()(y,[["render",x],["__scopeId","data-v-351d542d"]]);var S=N,I=function(e){return Object(a["m"])("data-v-23e4f607"),e=e(),Object(a["l"])(),e},A={class:"channel-strip-container",ref:"container"},E={class:"volume-container"},M=I((function(){return Object(a["d"])("br",null,null,-1)}));function T(e,n,t,i,o,u){var r=Object(a["q"])("v-a-spectrum-analyzer"),c=Object(a["q"])("v-a-fader"),l=Object(a["q"])("v-a-digital-meter-stereo"),d=Object(a["q"])("v-a-analog-meter");return Object(a["k"])(),Object(a["c"])("div",A,[Object(a["d"])("div",E,[Object(a["g"])(r,{input:e.faderGainNode,width:500,gridColor:"gray",lineColor:"white",backgroundColor:"black",borderColor:"black"},null,8,["input"]),M,Object(a["g"])(c,{modelValue:e.faderGainValue,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.faderGainValue=n}),minValue:0,maxValue:1},null,8,["modelValue"]),Object(a["g"])(l,{class:"ui-component",type:"rms",leftInput:e.leftChannel,rightInput:e.rightChannel,drawMarkers:!0},null,8,["leftInput","rightInput"]),Object(a["g"])(d,{input:e.faderGainNode,width:300},null,8,["input"])])],512)}var _=Object(a["h"])({Name:"ChannelStrip",setup:function(e){var n=1,t=new GainNode(e.input.context,{gain:n});e.input.connect(t),t.connect(e.output);var i=new ChannelSplitterNode(e.input.context);t.connect(i);var o=new GainNode(e.input.context,{gain:1}),u=new GainNode(e.input.context,{gain:1});return i.connect(o,0),i.connect(u,1),Object(a["n"])({faderGainNode:t,faderGainValue:n,leftChannel:o,rightChannel:u})},props:{input:{required:!0,type:AudioNode},output:{required:!0,type:AudioNode}},computed:{backgroundImg:function(){return t("0891")}},mounted:function(){this.$refs.container.style.backgroundImage="url(".concat(this.backgroundImg,")")},watch:{faderGainValue:function(e){this.faderGainNode.gain.setValueAtTime(e,this.input.context.currentTime)}}});t("1c2f");const P=C()(_,[["render",T],["__scopeId","data-v-23e4f607"]]);var U=P,z=Object(a["h"])({name:"ServeDev",components:{ChannelStrip:S,MasterChannel:U},setup:function(){var e=f.setupAudioContext(),n=e.createOscillator(),t=e.createGain(),i=e.createGain(),o=e.createGain(),u=Object(a["n"])({channelInput:t,channelOutput:i,audioCtx:e,osc:n,dummyGain:o});return u},computed:{trackSrc:function(){return t("5f1f")}},mounted:function(){var e=document.querySelector("audio"),n=this.audioCtx.createMediaElementSource(e);n.connect(this.channelInput)}});t("dd5d");const B=C()(z,[["render",l],["__scopeId","data-v-3b30d150"]]);var F=B,D=t("2ff1"),J=Object(a["a"])(F);J.use(D["a"]),J.mount("#app")},dd5d:function(e,n,t){"use strict";t("66bc")},ee7a:function(e,n,t){}});
//# sourceMappingURL=app.b6c7ab19.js.map