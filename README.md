# a-player 

demo: https://edwardsharp.github.io/a-player/  
https://www.webcomponents.org/element/@edwardsharp/a-player  

Web Component for rendering videos with accessible captions (&amp; other nifty things) via JWPlayer

based on the JWPlayer interactive-transcripts demo: https://github.com/jwplayer/jwdeveloper-demos/tree/developer-showcase/demos/innovation/interactive-transcripts

## usage

`npm install --save @edwardsharp/a-player` (or use UNPKG!)

include these:

```html
<script src="https://content.jwplatform.com/libraries/IDzF9Zmk.js"></script>
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
<script type="text/javascript" src="https://unpkg.com/@edwardsharp/a-player@0.0.25/dist/main.bundle.js"></script>
```

override some styles, if you want. make sure to include these after `<script type="text/javascript" src="main.bundle.js"></script>`.

```html
<style>
  .transcript span.current {
    background: #0095D6;
    color: white;
  }
  .transcript span:not(.current):hover {
    color: #0095D6;
  }
  .searchbox input {
    border: thin solid gray;
  }
  /* search results */
  .transcript span em.current {
    background: red;
    color: white;
  }
</style>
```

### Options:

| Option                     | Required | Default     |
| ---------------------------|:--------:| -----------:|
|file                        | *        |             | 
|captions-file               |          | ''          | 
|captions-file-label         |          | 'Default'   | 
|chapters-file               |          | ''          | 
|thumbnails-file             |          | ''          | 
|audio-description-file      |          | ''          | 
|audio-description-file-type |          | 'audio/mp3' |
|image                       |          | ''          | 
|display-title               |          | false       | 
|width                       |          | 320         | 
|height                      |          | 180         | 
|captions-color              |          | #ffffff     | 
|captions-bg                 |          | #000000     | 
|captions-bg-opacity         |          | 75          | 
|captions-font-size          |          | 15          | 
|mute                        |          | false       | 
|volume                      |          | 100         | 
|autostart                   |          | false       | 
|show-transcripts            |          | false       |
|show-search                 |          | false       |

## Demo:

<!---
```
<custom-element-demo>
  <template>
    <script src="https://content.jwplatform.com/libraries/IDzF9Zmk.js"></script>
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
    <script type="text/javascript" src="https://unpkg.com/@edwardsharp/a-player@0.0.25/dist/main.bundle.js"></script>
    <style>
    .transcript span.current {
      background: #0095D6;
      color: white;
    }
    .transcript span:not(.current):hover {
      color: #0095D6;
    }
    .searchbox input {
      border: thin solid gray;
    }
    /* search results */
    .transcript span em.current {
      background: red;
      color: white;
    }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<a-player 
  autoplay="false"
  height="225"
  width="400"
  file="//content.jwplatform.com/manifests/3p683El7.m3u8"
  image="//content.jwplatform.com/thumbs/3p683El7-640.jpg"
  chapters-file="//raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/chapters.vtt"
  captions-file="//raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/captions.vtt"
  thumbnails-file="//content.jwplatform.com/strips/3p683El7-120.vtt"
  captions-color="#000"
  captions-bg="#ff0404"
  captions-bg-opacity="100"
  captions-font-size="25"
></a-player>
```

### IE 😔

https://edwardsharp.github.io/a-player/ie.html

```html
<!-- ie polyfillz -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js" integrity="sha256-qyG2LBYZavhW0RXdL7CQGGv2dX4WP30uIFPguGoOLjE=" crossorigin="anonymous"></script>	
<script>
/* DOM Keyboard Event Level 3 polyfill | @version 0.4.4 | MIT License | https://github.com/termi/DOM-Keyboard-Event-Level-3-polyfill */
void function(){"use strict";
var f=void 0,h=!0,j=null,k=!1,l;try{l="a"==(new this.KeyboardEvent("keyup",{key:"a"})).key}catch(aa){l=k}
if(!l){var x=function(a,b){var c;try{c=document.createEvent("KeyboardEvent")}catch(d){c=document.createEvent("Event")}b=b||{};var e={},n,g;for(n in m)p(m,n)&&(e[n]=n in b&&(g=b[n])!==f?g:m[n]);g=e.ctrlKey||k;var q=e.shiftKey||k,r=e.altKey||k,L=e.metaKey||k,S=e.altGraphKey||k,T=3<s?((g?"Control":"")+(q?" Shift":"")+(r?" Alt":"")+(L?" Meta":"")+(S?" AltGraph":"")).trim():j,B=(e.key||"")+"",M=(e["char"]||"")+"",H=e.location,v=B&&B.charCodeAt(0)||0,C=e.bubbles,D=e.cancelable,U=e.repeat,V=e.locale,W=k,
v=e.keyCode=e.keyCode||v;e.which=e.which||v;t||(c.__keyCode=v,c.__charCode=v,c.__which=v);if("initKeyEvent"in c)c.initKeyEvent(a,C,D,u,g,r,q,L,v,v),W=h;else if("initKeyboardEvent"in c&&ba)try{1==s?(c.initKeyboardEvent(a,C,D,u,B,H,g,q,r,L,S),c.__char=M):2==s?c.initKeyboardEvent(a,C,D,u,g,r,q,L,v,v):3==s?(c.initKeyboardEvent(a,C,D,u,B,H,g,r,q,L,S),c.__char=M):4==s?(c.initKeyboardEvent(a,C,D,u,B,H,T,U,V),c.__char=M):5==s?c.initKeyboardEvent(a,C,D,u,M,B,H,T,U,V):c.initKeyboardEvent(a,C,D,u,B,H,T,U,V),
W=h}catch(ta){ba=k}W||(c.initEvent(a,C,D,u),c.__char=M,c.__key=B,c.__location=H);for(n in m)p(m,n)&&c[n]!=e[n]&&(delete c[n],w(c,n,{writable:h,value:e[n]}));"isTrusted"in c||(c.i=k);return c},y=function(a){return a&&!(a in ca)&&"U+"!==a.substring(0,2)},da=function(a){var b=a.which||a.keyCode,c=this.g,d;a.ctrlKey||a.altKey||a.metaKey||(d=z[b])&&0!==d.a||a.__key||a.i===k?(b=this.f,"object"===typeof b&&"handleEvent"in b&&(c=b,b=b.handleEvent),b&&b.apply&&b.apply(c,arguments)):(c=c._||(c._={}),c._h_9e2__keyCode=
b,"keyLocation"in a&&(c._keyLocation=a.e))},ga=function(a){var b,c=a.which||a.keyCode,d=this._,e;if(!a.__stopNow){if(d&&"_h_9e2__keyCode"in d){b=d._h_9e2__keyCode;delete d._h_9e2__keyCode;a.__keyCode=b;if((e=A[b])&&E&&e.d)b=e.d;"keyLocation"in a&&"_keyLocation"in d&&(delete a.e,a.e=d._keyLocation);91>b&&(64<b&&c!=b&&!A[b])&&(e=e||(A[b]={}),e.d=b);d=e&&e.a||String.fromCharCode(b).toLowerCase();a.__key=d;a.__char=String.fromCharCode(c);d=new u.KeyboardEvent("keydown",a);delete d.keyLocation;delete d.__location;
ea?(delete d.which,w(d,"which",{value:b})):d.__which=b;t&&(delete d.keyCode,w(d,"keyCode",{value:b}));d.__location=F.call(d);G||(e=e||(e=A[c]=A[b]={}),e.b=d["char"]);b=!(a.target||this).dispatchEvent(d)}else b=!a.ctrlKey&&(d=A[c])&&1<("object"==typeof d?d.a||"":d).length?2:0;b&&(b===h&&a.preventDefault(),fa?a.stopImmediatePropagation():(a.__stopNow=h,a.stopPropagation()))}},u=this,ha=1,ia=2,I=3,ja=4,ka=5,la=u.Event.prototype,J=u.KeyboardEvent&&u.KeyboardEvent.prototype||la,G,K,ma,N,w=Object.defineProperty||
function(a,b,c){"value"in c?a[b]=c.value:("get"in c&&a.__defineGetter__(b,c.get),"set"in c&&a.__defineSetter__(b,c.set))},O=Object.getOwnPropertyDescriptor,P=function(a,b){return"__lookupGetter__"in a?a.__lookupGetter__(b):O?(O(a,b)||{}).get:f},na={keydown:j,keyup:j,keypress:j},oa=1,m={"char":"",key:"",location:0,ctrlKey:k,shiftKey:k,altKey:k,metaKey:k,repeat:k,locale:"",detail:0,bubbles:k,cancelable:k},fa="stopImmediatePropagation"in document.createEvent("Event"),pa=Array.prototype.slice,qa=Function.prototype.bind||
function(a,b){var c=this,d=pa.call(arguments,1);return function(){return c.apply(a,d.concat(pa.call(arguments)))}},p=qa.call(Function.prototype.call,Object.prototype.hasOwnProperty),ba=h,F,s;try{var Q=document.createEvent.call(document,"KeyboardEvent");Q.initKeyboardEvent("keyup",k,k,u,"+",3,h,k,h,k,k);s="+"==(Q.keyIdentifier||Q.key)&&3==(Q.keyLocation||Q.location)&&(Q.ctrlKey?Q.altKey?1:3:Q.shiftKey?2:4)||"+"==Q["char"]&&5||9}catch(ra){s=0}var t,ea,R=function(){try{return this&&new this("keyup",
{key:"a","char":"b"})||{}}catch(a){return{}}}.call(u.KeyboardEvent),sa,X={enumerable:k,configurable:h,writable:h};O&&(G=P(J,"key")||P(R,"key"),K=P(J,"char")||P(R,"char"),ma=P(J,"location")||P(R,"location"),N=P(J,"keyCode"));var z={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",21:"KanaMode",22:"HangulMode",23:"JunjaMode",24:"FinalMode",25:"HanjaMode",27:"Esc",28:"Convert",29:"Nonconvert",30:"Accept",31:"ModeChange",32:"Spacebar",
33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",41:"Select",43:"Execute",44:"PrintScreen",45:"Insert",46:"Del",47:"Help",91:{a:"OS",b:k,c:ha},92:{a:"OS",b:k,c:ia},93:"Menu",106:{a:"Multiply",b:"*",c:I},107:{a:"Add",b:"+",c:I},108:{a:"Separator",b:k,c:I},109:{a:"Subtract",b:"-",c:I},110:{a:"Decimal",b:".",c:I},111:{a:"Divide",b:"/",c:I},144:{a:"NumLock",b:k,c:I},145:"ScrollLock",180:"LaunchMail",181:"SelectMedia",182:"LaunchApplication1",183:"LaunchApplication2",
224:"Meta",229:"Process",246:"Attn",247:"Crsel",248:"Exsel",249:"EraseEof",251:"Zoom",254:"Clear"},A={186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",226:"\\"},ua=u.navigator.userAgent.toLowerCase(),Y={},Z,E,$;for(Z=105;95<Z;--Z)$=Z-96,A[$+48]=G?$+"":{a:$+""},A[Z]={a:$+"",c:I};if(!G)for(Z in A)p(A,Z)&&"object"!=typeof A[Z]&&(A[Z]={a:A[Z]});for(Z=135;111<Z;--Z)z[Z]="F"+(Z-111);if(u.opera)K||(E=h,z[57351]=z[93],A[187]=A[61]={a:0,d:187},A[189]=A[109]={a:0,d:189,
c:3});else{Y.names=ua.match(/(mozilla|compatible|chrome|webkit|safari)/gi);for(Z=Y.names&&Y.names.length||0;0<Z--;)Y[Y.names[Z]]=h;Y.mozilla&&(!Y.compatible&&!Y.webkit)&&(E=h,Y.h=+(ua.match(/firefox\/([0-9]+)/)||[])[1],$=A[61]=A[187],$.d=187,$=A[173]=A[189],$.d=189,$=A[59]=A[186],$.d=186,15>Y.h&&(z[107]=z[61],A[109]=A[173]))}var ca={Escape:j,Win:j,Scroll:j,Apps:j,Delete:j,Window:j,ContextMenu:j,Mul:j};x.DOM_KEY_LOCATION_STANDARD=0;x.DOM_KEY_LOCATION_LEFT=ha;x.DOM_KEY_LOCATION_RIGHT=ia;x.DOM_KEY_LOCATION_NUMPAD=
I;x.DOM_KEY_LOCATION_MOBILE=ja;x.DOM_KEY_LOCATION_JOYSTICK=ka;x.prototype=J;$=new x("keyup");try{delete $.keyCode,w($,"keyCode",{writable:h,value:9}),delete $.which,w($,"which",{writable:h,value:9})}catch(va){}ea=9===$.which;!(t=9==$.keyCode)&&N?(w(J,"keyCode",{enumerable:h,configurable:h,get:function(){return"__keyCode"in this?this.__keyCode:N.call(this)},set:function(a){return this.__keyCode=isNaN(a)?0:a}}),w(J,"charCode",{enumerable:h,configurable:h,get:function(){return"__charCode"in this?this.__charCode:
N.call(this)},set:function(a){return this.__charCode=isNaN(a)?0:a}})):N=f;sa=function(a){a=a||"";if(1<a.length)return a;var b=this.which||this.keyCode;"keypress"==this.type&&(b+=999);var c=A[b],d=c&&"object"==typeof c?c.a:c;if(d)return d;b=c&&c.d||64<b&&91>b&&b;return(b&&String.fromCharCode(b)||a).toLowerCase()};w(J,"key",{enumerable:h,configurable:h,get:function(){var a;if(G&&((a=G.call(this))&&2>a.length||y(a)))return sa.call(this,a);if("__key"in this)return this.__key;if(this.type in na){var b=
this.which||this.keyCode,c="keypress"!=this.type;a=c?"keyIdentifier"in this&&y(this.keyIdentifier)?this.keyIdentifier:!c||(a=z[b])?((a=a||A[b])&&"object"==typeof a?a.a:a)||this["char"]:sa.call(this,a):this["char"];X.value=a;w(this,"__key",X);return a}}});w(J,"char",{enumerable:h,configurable:h,get:function(){if(this.type in na){if(this.ctrlKey||this.altKey||this.metaKey)return"";if("__char"in this)return this.__char;var a,b="keypress"!=this.type,c=!b&&this.__keyCode||this.which||this.keyCode,d;if(b&&
(a=z[c])&&"object"!=typeof a)return"";if(!(K&&(a=K.call(this))!==j))d=(a=A[c]||z[c])&&"object"==typeof a,!d||a.b===k?a="":d&&a.b!==f?a=a.b||"":"keyIdentifier"in this&&y(this.keyIdentifier)?a="":(a=String.fromCharCode(c),b&&!this.shiftKey&&(a=a.toLowerCase()));X.value=a;w(this,"__char",X);return a}}});F=function(){if(ma)return ma.call(this);if("__location"in this)return this.__location;if(this.type in na){var a=this.which||this.keyCode,b="keypress"!=this.type;"keyLocation"in this?a=this.keyLocation:
(a=b&&(z[a]||A[a]),a="object"==typeof a&&a.c||0);X.value=a;w(this,"__location",X);return a}};w(J,"location",{enumerable:h,configurable:h,get:F});K?document.addEventListener("keydown",function(a){var b=K?K.call(a):a["char"],b=b&&b.charCodeAt(0),c,d;if(b&&!A[b+=999])c=A[b]={},a=a.keyCode,b=(d=A[a])?"object"==typeof d&&d.a||d:String.fromCharCode(a),64<a&&(91>a&&a)&&(b=b.toLowerCase()),c.a=b},h):[($=u.Document)&&$.prototype||u.document,($=u.HTMLDocument)&&$.prototype,($=u.Window)&&$.prototype||u,($=u.Node)&&
$.prototype,($=u.Element)&&$.prototype].forEach(function(a){if(a&&p(a,"addEventListener")){var b=a.addEventListener,c=a.removeEventListener;b&&(a.addEventListener=function(a,c,n){var g,q,r;if("keydown"===(a+"").toLowerCase()){g="_e_8vj"+(n?"-":"")+a;q=g+(c._h_9e2||(c._h_9e2=++oa));r=g+"__count";if(!(g=this._))g=this._={};if(q in g)return;g[r]===f&&b.call(this,"keypress",ga,h);g[r]=(g[r]||0)+1;arguments[1]=g[q]=qa.call(da,{f:c,g:this})}return b.apply(this,arguments)},c&&(a.removeEventListener=function(a,
b,n){var g,q,r;"keydown"===(a+"").toLowerCase()&&(g="_e_8vj"+(n?"-":"")+a,q=g+b._h_9e2,r=g+"__count",g=this._,q&&(g&&g[r])&&(--g[r],(arguments[1]=g[q])&&delete g[q]));return c.apply(this,arguments)}))}});u.KeyboardEvent=x;ha=ia=I=ja=ka=O=P=$=R=x=J=Z=la=ua=Y=j;f};
}.call(this);
/* global define, KeyboardEvent, module */
</script>
```

