(function(e){function t(t){for(var a,o,c=t[0],r=t[1],l=t[2],s=0,p=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(a=!1)}a&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},u=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/v-audio-ui-demo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=r;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0891":function(e,t,n){e.exports=n.p+"img/metal-2.21266f8f.png"},1615:function(e,t,n){},"1c2f":function(e,t,n){"use strict";n("ee7a")},3121:function(e,t,n){},"5f1f":function(e,t,n){e.exports=n.p+"media/lost-in-the-fog.70a9038e.wav"},"72e7":function(e,t,n){"use strict";n("1615")},"8e65":function(e,t,n){"use strict";n("fa2b")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i=function(e){return Object(a["m"])("data-v-2e1aa972"),e=e(),Object(a["l"])(),e},u={id:"app"},o=["src"],c=i((function(){return Object(a["d"])("br",null,null,-1)})),r={class:"console"};function l(e,t,n,i,l,d){var s=Object(a["q"])("AudioContextSetup"),p=Object(a["q"])("ChannelStrip"),f=Object(a["q"])("MasterChannel");return Object(a["k"])(),Object(a["c"])("div",u,[Object(a["g"])(s),Object(a["d"])("audio",{controls:"",src:e.trackSrc},null,8,o),c,Object(a["d"])("div",r,[Object(a["g"])(p,{input:e.channelInput,output:e.channelOutput},null,8,["input","output"]),Object(a["g"])(f,{input:e.channelOutput,output:e.audioCtx.destination},null,8,["input","output"])])])}var d=null;function s(e){document.addEventListener("mousedown",(function(){"running"!=e.state&&e.resume()}))}var p={setupAudioContext:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(e)return null==d&&(d=new window.AudioContext,s(d)),d;var t=new window.AudioContext;return s(t),t},requestMicrophoneAccess:function(e,t){navigator.mediaDevices.getUserMedia({video:!1,audio:!0}).then((function(n){var a=e.createMediaStreamSource(n);t(a)})).catch((function(e){console.log("error requesting microphone access:"+e)}))}},f=p,b=function(e){return Object(a["m"])("data-v-351d542d"),e=e(),Object(a["l"])(),e},h={class:"channel-strip-container",ref:"container"},m={class:"eq-container"},g={class:"eq-band-container"},O=Object(a["f"])(" high "),v={class:"eq-band-container"},j=Object(a["f"])(" mid "),w={class:"eq-band-container"},q=Object(a["f"])(" low "),x=b((function(){return Object(a["d"])("br",null,null,-1)})),G={class:"volume-container"};function k(e,t,n,i,u,o){var c=Object(a["q"])("v-a-knob"),r=Object(a["q"])("v-a-fader"),l=Object(a["q"])("v-a-digital-meter");return Object(a["k"])(),Object(a["c"])("div",h,[Object(a["d"])("div",m,[Object(a["d"])("div",g,[O,Object(a["g"])(c,{class:"eq-knob",modelValue:e.highEqGain,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.highEqGain=t}),size:50,minValue:-10,maxValue:10},null,8,["modelValue"])]),Object(a["d"])("div",v,[j,Object(a["g"])(c,{class:"eq-knob",modelValue:e.midEqGain,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.midEqGain=t}),size:50,minValue:-20,maxValue:20},null,8,["modelValue"])]),Object(a["d"])("div",w,[q,Object(a["g"])(c,{class:"eq-knob",modelValue:e.lowEqGain,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.lowEqGain=t}),size:50,minValue:-20,maxValue:20},null,8,["modelValue"])])]),x,Object(a["d"])("div",G,[Object(a["g"])(r,{modelValue:e.faderGain,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.faderGain=t}),minValue:0,maxValue:1},null,8,["modelValue"]),Object(a["g"])(l,{class:"ui-component",type:"peak",input:e.postGain,drawMarkers:!0},null,8,["input"])])],512)}var y=Object(a["h"])({Name:"ChannelStrip",setup:function(e){var t=0,n=0,i=0,u=1,o=new BiquadFilterNode(e.input.context,{type:"lowshelf",gain:i}),c=new BiquadFilterNode(e.input.context,{type:"peaking",gain:n}),r=new BiquadFilterNode(e.input.context,{type:"highshelf",gain:t}),l=new GainNode(e.input.context,{gain:u});return e.input.connect(o),o.connect(c),c.connect(r),r.connect(l),l.connect(e.output),Object(a["n"])({lowshelf:o,midpeaking:c,highshelf:r,highEqGain:t,midEqGain:n,lowEqGain:i,postGain:l,faderGain:u})},props:{input:{required:!0,type:AudioNode},output:{required:!0,type:AudioNode}},computed:{backgroundImg:function(){return n("0891")}},mounted:function(){this.$refs.container.style.backgroundImage="url(".concat(this.backgroundImg,")")},watch:{highEqGain:function(e){this.highshelf.gain.setValueAtTime(e,this.input.context.currentTime)},midEqGain:function(e){this.midpeaking.gain.setValueAtTime(e,this.input.context.currentTime)},lowEqGain:function(e){this.lowshelf.gain.setValueAtTime(e,this.input.context.currentTime)},faderGain:function(e){this.postGain.gain.setValueAtTime(e,this.input.context.currentTime)}}}),V=(n("72e7"),n("6b0d")),C=n.n(V);const S=C()(y,[["render",k],["__scopeId","data-v-351d542d"]]);var N=S,A=function(e){return Object(a["m"])("data-v-23e4f607"),e=e(),Object(a["l"])(),e},I={class:"channel-strip-container",ref:"container"},E={class:"volume-container"},_=A((function(){return Object(a["d"])("br",null,null,-1)}));function M(e,t,n,i,u,o){var c=Object(a["q"])("v-a-spectrum-analyzer"),r=Object(a["q"])("v-a-fader"),l=Object(a["q"])("v-a-digital-meter-stereo"),d=Object(a["q"])("v-a-analog-meter");return Object(a["k"])(),Object(a["c"])("div",I,[Object(a["d"])("div",E,[Object(a["g"])(c,{input:e.faderGainNode,width:500,gridColor:"gray",lineColor:"white",backgroundColor:"black",borderColor:"black"},null,8,["input"]),_,Object(a["g"])(r,{modelValue:e.faderGainValue,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.faderGainValue=t}),minValue:0,maxValue:1},null,8,["modelValue"]),Object(a["g"])(l,{class:"ui-component",type:"rms",leftInput:e.leftChannel,rightInput:e.rightChannel,drawMarkers:!0},null,8,["leftInput","rightInput"]),Object(a["g"])(d,{input:e.faderGainNode,width:300},null,8,["input"])])],512)}var T=Object(a["h"])({Name:"ChannelStrip",setup:function(e){var t=1,n=new GainNode(e.input.context,{gain:t});e.input.connect(n),n.connect(e.output);var i=new ChannelSplitterNode(e.input.context);n.connect(i);var u=new GainNode(e.input.context,{gain:1}),o=new GainNode(e.input.context,{gain:1});return i.connect(u,0),i.connect(o,1),Object(a["n"])({faderGainNode:n,faderGainValue:t,leftChannel:u,rightChannel:o})},props:{input:{required:!0,type:AudioNode},output:{required:!0,type:AudioNode}},computed:{backgroundImg:function(){return n("0891")}},mounted:function(){this.$refs.container.style.backgroundImage="url(".concat(this.backgroundImg,")")},watch:{faderGainValue:function(e){this.faderGainNode.gain.setValueAtTime(e,this.input.context.currentTime)}}});n("1c2f");const P=C()(T,[["render",M],["__scopeId","data-v-23e4f607"]]);var U=P,z=function(e){return Object(a["m"])("data-v-130d031b"),e=e(),Object(a["l"])(),e},B=z((function(){return Object(a["d"])("h1",null,"click to enable audio",-1)})),F=[B];function D(e,t,n,i,u,o){return e.started?Object(a["b"])("",!0):(Object(a["k"])(),Object(a["c"])("div",{key:0,class:"setup",onClick:t[0]||(t[0]=function(){return e.onSetupClick&&e.onSetupClick.apply(e,arguments)})},F))}var J=Object(a["h"])({Name:"AudioContextSetup",data:function(){return{started:!1}},methods:{onSetupClick:function(){this.started=!0}}});n("f50f");const $=C()(J,[["render",D],["__scopeId","data-v-130d031b"]]);var L=$,H=Object(a["h"])({name:"ServeDev",components:{ChannelStrip:N,MasterChannel:U,AudioContextSetup:L},setup:function(){var e=f.setupAudioContext(),t=e.createOscillator(),n=e.createGain(),i=e.createGain(),u=e.createGain(),o=Object(a["n"])({channelInput:n,channelOutput:i,audioCtx:e,osc:t,dummyGain:u});return o},computed:{trackSrc:function(){return n("5f1f")}},mounted:function(){var e=document.querySelector("audio"),t=this.audioCtx.createMediaElementSource(e);t.connect(this.channelInput)}});n("8e65");const K=C()(H,[["render",l],["__scopeId","data-v-2e1aa972"]]);var Q=K,R=n("2ff1"),W=Object(a["a"])(Q);W.use(R["a"]),W.mount("#app")},ee7a:function(e,t,n){},f50f:function(e,t,n){"use strict";n("3121")},fa2b:function(e,t,n){}});
//# sourceMappingURL=app.813ac632.js.map