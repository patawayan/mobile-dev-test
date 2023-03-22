(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Yu(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Xu(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=We(s)?oT(s):Xu(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(We(t))return t;if(Oe(t))return t}}const sT=/;(?![^(]*\))/g,iT=/:([^]+)/,rT=/\/\*.*?\*\//gs;function oT(t){const e={};return t.replace(rT,"").split(sT).forEach(n=>{if(n){const s=n.split(iT);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ju(t){let e="";if(We(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Ju(t[n]);s&&(e+=s+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const aT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cT=Yu(aT);function am(t){return!!t||t===""}const Ml=t=>We(t)?t:t==null?"":G(t)||Oe(t)&&(t.toString===hm||!se(t.toString))?JSON.stringify(t,cm,2):String(t),cm=(t,e)=>e&&e.__v_isRef?cm(t,e.value):li(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:lm(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!G(e)&&!dm(e)?String(e):e,ke={},ci=[],Jt=()=>{},lT=()=>!1,uT=/^on[^a-z]/,Ya=t=>uT.test(t),Zu=t=>t.startsWith("onUpdate:"),rt=Object.assign,eh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hT=Object.prototype.hasOwnProperty,ge=(t,e)=>hT.call(t,e),G=Array.isArray,li=t=>Xa(t)==="[object Map]",lm=t=>Xa(t)==="[object Set]",se=t=>typeof t=="function",We=t=>typeof t=="string",th=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",um=t=>Oe(t)&&se(t.then)&&se(t.catch),hm=Object.prototype.toString,Xa=t=>hm.call(t),dT=t=>Xa(t).slice(8,-1),dm=t=>Xa(t)==="[object Object]",nh=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qo=Yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ja=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fT=/-(\w)/g,_i=Ja(t=>t.replace(fT,(e,n)=>n?n.toUpperCase():"")),pT=/\B([A-Z])/g,Li=Ja(t=>t.replace(pT,"-$1").toLowerCase()),fm=Ja(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xc=Ja(t=>t?`on${fm(t)}`:""),Ar=(t,e)=>!Object.is(t,e),Yo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ca=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ll=t=>{const e=parseFloat(t);return isNaN(e)?t:e},gT=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let ef;const mT=()=>ef||(ef=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let At;class pm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function sh(t){return new pm(t)}function _T(t,e=At){e&&e.active&&e.effects.push(t)}function gm(){return At}function yT(t){At&&At.cleanups.push(t)}const ih=t=>{const e=new Set(t);return e.w=0,e.n=0,e},mm=t=>(t.w&rs)>0,_m=t=>(t.n&rs)>0,vT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=rs},wT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];mm(i)&&!_m(i)?i.delete(t):e[n++]=i,i.w&=~rs,i.n&=~rs}e.length=n}},la=new WeakMap;let cr=0,rs=1;const Fl=30;let Wt;const ks=Symbol(""),Ul=Symbol("");class rh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_T(this,s)}run(){if(!this.active)return this.fn();let e=Wt,n=Yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Wt,Wt=this,Yn=!0,rs=1<<++cr,cr<=Fl?vT(this):tf(this),this.fn()}finally{cr<=Fl&&wT(this),rs=1<<--cr,Wt=this.parent,Yn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Wt===this?this.deferStop=!0:this.active&&(tf(this),this.onStop&&this.onStop(),this.active=!1)}}function tf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Yn=!0;const ym=[];function Fi(){ym.push(Yn),Yn=!1}function Ui(){const t=ym.pop();Yn=t===void 0?!0:t}function St(t,e,n){if(Yn&&Wt){let s=la.get(t);s||la.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ih()),vm(i)}}function vm(t,e){let n=!1;cr<=Fl?_m(t)||(t.n|=rs,n=!mm(t)):n=!t.has(Wt),n&&(t.add(Wt),Wt.deps.push(t))}function Nn(t,e,n,s,i,r){const o=la.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?nh(n)&&a.push(o.get("length")):(a.push(o.get(ks)),li(t)&&a.push(o.get(Ul)));break;case"delete":G(t)||(a.push(o.get(ks)),li(t)&&a.push(o.get(Ul)));break;case"set":li(t)&&a.push(o.get(ks));break}if(a.length===1)a[0]&&Vl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Vl(ih(c))}}function Vl(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&nf(s);for(const s of n)s.computed||nf(s)}function nf(t,e){(t!==Wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function ET(t,e){var n;return(n=la.get(t))===null||n===void 0?void 0:n.get(e)}const TT=Yu("__proto__,__v_isRef,__isVue"),wm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(th)),IT=oh(),bT=oh(!1,!0),CT=oh(!0),sf=ST();function ST(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=fe(this);for(let r=0,o=this.length;r<o;r++)St(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(fe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fi();const s=fe(this)[e].apply(this,n);return Ui(),s}}),t}function RT(t){const e=fe(this);return St(e,"has",t),e.hasOwnProperty(t)}function oh(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?HT:Cm:e?bm:Im).get(s))return s;const o=G(s);if(!t){if(o&&ge(sf,i))return Reflect.get(sf,i,r);if(i==="hasOwnProperty")return RT}const a=Reflect.get(s,i,r);return(th(i)?wm.has(i):TT(i))||(t||St(s,"get",i),e)?a:$e(a)?o&&nh(i)?a:a.value:Oe(a)?t?Sm(a):Vi(a):a}}const AT=Em(),kT=Em(!0);function Em(t=!1){return function(n,s,i,r){let o=n[s];if(yi(o)&&$e(o)&&!$e(i))return!1;if(!t&&(!ua(i)&&!yi(i)&&(o=fe(o),i=fe(i)),!G(n)&&$e(o)&&!$e(i)))return o.value=i,!0;const a=G(n)&&nh(s)?Number(s)<n.length:ge(n,s),c=Reflect.set(n,s,i,r);return n===fe(r)&&(a?Ar(i,o)&&Nn(n,"set",s,i):Nn(n,"add",s,i)),c}}function NT(t,e){const n=ge(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Nn(t,"delete",e,void 0),s}function DT(t,e){const n=Reflect.has(t,e);return(!th(e)||!wm.has(e))&&St(t,"has",e),n}function OT(t){return St(t,"iterate",G(t)?"length":ks),Reflect.ownKeys(t)}const Tm={get:IT,set:AT,deleteProperty:NT,has:DT,ownKeys:OT},PT={get:CT,set(t,e){return!0},deleteProperty(t,e){return!0}},xT=rt({},Tm,{get:bT,set:kT}),ah=t=>t,Za=t=>Reflect.getPrototypeOf(t);function Ao(t,e,n=!1,s=!1){t=t.__v_raw;const i=fe(t),r=fe(e);n||(e!==r&&St(i,"get",e),St(i,"get",r));const{has:o}=Za(i),a=s?ah:n?uh:kr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function ko(t,e=!1){const n=this.__v_raw,s=fe(n),i=fe(t);return e||(t!==i&&St(s,"has",t),St(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function No(t,e=!1){return t=t.__v_raw,!e&&St(fe(t),"iterate",ks),Reflect.get(t,"size",t)}function rf(t){t=fe(t);const e=fe(this);return Za(e).has.call(e,t)||(e.add(t),Nn(e,"add",t,t)),this}function of(t,e){e=fe(e);const n=fe(this),{has:s,get:i}=Za(n);let r=s.call(n,t);r||(t=fe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ar(e,o)&&Nn(n,"set",t,e):Nn(n,"add",t,e),this}function af(t){const e=fe(this),{has:n,get:s}=Za(e);let i=n.call(e,t);i||(t=fe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Nn(e,"delete",t,void 0),r}function cf(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&Nn(t,"clear",void 0,void 0),n}function Do(t,e){return function(s,i){const r=this,o=r.__v_raw,a=fe(o),c=e?ah:t?uh:kr;return!t&&St(a,"iterate",ks),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Oo(t,e,n){return function(...s){const i=this.__v_raw,r=fe(i),o=li(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?ah:e?uh:kr;return!e&&St(r,"iterate",c?Ul:ks),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Un(t){return function(...e){return t==="delete"?!1:this}}function MT(){const t={get(r){return Ao(this,r)},get size(){return No(this)},has:ko,add:rf,set:of,delete:af,clear:cf,forEach:Do(!1,!1)},e={get(r){return Ao(this,r,!1,!0)},get size(){return No(this)},has:ko,add:rf,set:of,delete:af,clear:cf,forEach:Do(!1,!0)},n={get(r){return Ao(this,r,!0)},get size(){return No(this,!0)},has(r){return ko.call(this,r,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:Do(!0,!1)},s={get(r){return Ao(this,r,!0,!0)},get size(){return No(this,!0)},has(r){return ko.call(this,r,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:Do(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Oo(r,!1,!1),n[r]=Oo(r,!0,!1),e[r]=Oo(r,!1,!0),s[r]=Oo(r,!0,!0)}),[t,n,e,s]}const[LT,FT,UT,VT]=MT();function ch(t,e){const n=e?t?VT:UT:t?FT:LT;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ge(n,i)&&i in s?n:s,i,r)}const $T={get:ch(!1,!1)},BT={get:ch(!1,!0)},jT={get:ch(!0,!1)},Im=new WeakMap,bm=new WeakMap,Cm=new WeakMap,HT=new WeakMap;function qT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function KT(t){return t.__v_skip||!Object.isExtensible(t)?0:qT(dT(t))}function Vi(t){return yi(t)?t:lh(t,!1,Tm,$T,Im)}function WT(t){return lh(t,!1,xT,BT,bm)}function Sm(t){return lh(t,!0,PT,jT,Cm)}function lh(t,e,n,s,i){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=KT(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Xn(t){return yi(t)?Xn(t.__v_raw):!!(t&&t.__v_isReactive)}function yi(t){return!!(t&&t.__v_isReadonly)}function ua(t){return!!(t&&t.__v_isShallow)}function Rm(t){return Xn(t)||yi(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function vi(t){return ca(t,"__v_skip",!0),t}const kr=t=>Oe(t)?Vi(t):t,uh=t=>Oe(t)?Sm(t):t;function Am(t){Yn&&Wt&&(t=fe(t),vm(t.dep||(t.dep=ih())))}function km(t,e){t=fe(t);const n=t.dep;n&&Vl(n)}function $e(t){return!!(t&&t.__v_isRef===!0)}function cn(t){return Nm(t,!1)}function zT(t){return Nm(t,!0)}function Nm(t,e){return $e(t)?t:new GT(t,e)}class GT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:kr(e)}get value(){return Am(this),this._value}set value(e){const n=this.__v_isShallow||ua(e)||yi(e);e=n?e:fe(e),Ar(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:kr(e),km(this))}}function pt(t){return $e(t)?t.value:t}const QT={get:(t,e,n)=>pt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return $e(i)&&!$e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Dm(t){return Xn(t)?t:new Proxy(t,QT)}function YT(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=JT(t,n);return e}class XT{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ET(fe(this._object),this._key)}}function JT(t,e,n){const s=t[e];return $e(s)?s:new XT(t,e,n)}var Om;class ZT{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Om]=!1,this._dirty=!0,this.effect=new rh(e,()=>{this._dirty||(this._dirty=!0,km(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=fe(this);return Am(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Om="__v_isReadonly";function eI(t,e,n=!1){let s,i;const r=se(t);return r?(s=t,i=Jt):(s=t.get,i=t.set),new ZT(s,i,r||!i,n)}function Jn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ec(r,e,n)}return i}function Vt(t,e,n,s){if(se(t)){const r=Jn(t,e,n,s);return r&&um(r)&&r.catch(o=>{ec(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Vt(t[r],e,n,s));return i}function ec(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Jn(c,null,10,[t,o,a]);return}}tI(t,n,i,s)}function tI(t,e,n,s=!0){console.error(t)}let Nr=!1,$l=!1;const dt=[];let ln=0;const ui=[];let In=null,Es=0;const Pm=Promise.resolve();let hh=null;function dh(t){const e=hh||Pm;return t?e.then(this?t.bind(this):t):e}function nI(t){let e=ln+1,n=dt.length;for(;e<n;){const s=e+n>>>1;Dr(dt[s])<t?e=s+1:n=s}return e}function fh(t){(!dt.length||!dt.includes(t,Nr&&t.allowRecurse?ln+1:ln))&&(t.id==null?dt.push(t):dt.splice(nI(t.id),0,t),xm())}function xm(){!Nr&&!$l&&($l=!0,hh=Pm.then(Lm))}function sI(t){const e=dt.indexOf(t);e>ln&&dt.splice(e,1)}function iI(t){G(t)?ui.push(...t):(!In||!In.includes(t,t.allowRecurse?Es+1:Es))&&ui.push(t),xm()}function lf(t,e=Nr?ln+1:0){for(;e<dt.length;e++){const n=dt[e];n&&n.pre&&(dt.splice(e,1),e--,n())}}function Mm(t){if(ui.length){const e=[...new Set(ui)];if(ui.length=0,In){In.push(...e);return}for(In=e,In.sort((n,s)=>Dr(n)-Dr(s)),Es=0;Es<In.length;Es++)In[Es]();In=null,Es=0}}const Dr=t=>t.id==null?1/0:t.id,rI=(t,e)=>{const n=Dr(t)-Dr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lm(t){$l=!1,Nr=!0,dt.sort(rI);const e=Jt;try{for(ln=0;ln<dt.length;ln++){const n=dt[ln];n&&n.active!==!1&&Jn(n,null,14)}}finally{ln=0,dt.length=0,Mm(),Nr=!1,hh=null,(dt.length||ui.length)&&Lm()}}function oI(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ke;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ke;d&&(i=n.map(p=>We(p)?p.trim():p)),h&&(i=n.map(Ll))}let a,c=s[a=Xc(e)]||s[a=Xc(_i(e))];!c&&r&&(c=s[a=Xc(Li(e))]),c&&Vt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vt(l,t,6,i)}}function Fm(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!se(t)){const c=l=>{const u=Fm(l,e,!0);u&&(a=!0,rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Oe(t)&&s.set(t,null),null):(G(r)?r.forEach(c=>o[c]=null):rt(o,r),Oe(t)&&s.set(t,o),o)}function tc(t,e){return!t||!Ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,Li(e))||ge(t,e))}let Lt=null,nc=null;function ha(t){const e=Lt;return Lt=t,nc=t&&t.type.__scopeId||null,e}function Um(t){nc=t}function Vm(){nc=null}function $m(t,e=Lt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&yf(-1);const r=ha(e);let o;try{o=t(...i)}finally{ha(r),s._d&&yf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Jc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:_}=t;let w,b;const P=ha(t);try{if(n.shapeFlag&4){const F=i||s;w=an(u.call(F,F,h,r,p,d,m)),b=c}else{const F=e;w=an(F.length>1?F(r,{attrs:c,slots:a,emit:l}):F(r,null)),b=e.props?c:aI(c)}}catch(F){gr.length=0,ec(F,t,1),w=st(Zt)}let R=w;if(b&&_!==!1){const F=Object.keys(b),{shapeFlag:z}=R;F.length&&z&7&&(o&&F.some(Zu)&&(b=cI(b,o)),R=os(R,b))}return n.dirs&&(R=os(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),w=R,ha(P),w}const aI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ya(n))&&((e||(e={}))[n]=t[n]);return e},cI=(t,e)=>{const n={};for(const s in t)(!Zu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function lI(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?uf(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!tc(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?uf(s,o,l):!0:!!o;return!1}function uf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!tc(n,r))return!0}return!1}function uI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const hI=t=>t.__isSuspense;function dI(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):iI(t)}function Xo(t,e){if(qe){let n=qe.provides;const s=qe.parent&&qe.parent.provides;s===n&&(n=qe.provides=Object.create(s)),n[t]=e}}function $t(t,e,n=!1){const s=qe||Lt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(s.proxy):e}}const Po={};function fr(t,e,n){return Bm(t,e,n)}function Bm(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ke){const a=gm()===(qe==null?void 0:qe.scope)?qe:null;let c,l=!1,u=!1;if($e(t)?(c=()=>t.value,l=ua(t)):Xn(t)?(c=()=>t,s=!0):G(t)?(u=!0,l=t.some(R=>Xn(R)||ua(R)),c=()=>t.map(R=>{if($e(R))return R.value;if(Xn(R))return bs(R);if(se(R))return Jn(R,a,2)})):se(t)?e?c=()=>Jn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Vt(t,a,3,[d])}:c=Jt,e&&s){const R=c;c=()=>bs(R())}let h,d=R=>{h=b.onStop=()=>{Jn(R,a,4)}},p;if(Pr)if(d=Jt,e?n&&Vt(e,a,3,[c(),u?[]:void 0,d]):c(),i==="sync"){const R=i0();p=R.__watcherHandles||(R.__watcherHandles=[])}else return Jt;let m=u?new Array(t.length).fill(Po):Po;const _=()=>{if(b.active)if(e){const R=b.run();(s||l||(u?R.some((F,z)=>Ar(F,m[z])):Ar(R,m)))&&(h&&h(),Vt(e,a,3,[R,m===Po?void 0:u&&m[0]===Po?[]:m,d]),m=R)}else b.run()};_.allowRecurse=!!e;let w;i==="sync"?w=_:i==="post"?w=()=>bt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),w=()=>fh(_));const b=new rh(c,w);e?n?_():m=b.run():i==="post"?bt(b.run.bind(b),a&&a.suspense):b.run();const P=()=>{b.stop(),a&&a.scope&&eh(a.scope.effects,b)};return p&&p.push(P),P}function fI(t,e,n){const s=this.proxy,i=We(t)?t.includes(".")?jm(s,t):()=>s[t]:t.bind(s,s);let r;se(e)?r=e:(r=e.handler,n=e);const o=qe;Ei(this);const a=Bm(i,r.bind(s),n);return o?Ei(o):Ns(),a}function jm(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function bs(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),$e(t))bs(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)bs(t[n],e);else if(lm(t)||li(t))t.forEach(n=>{bs(n,e)});else if(dm(t))for(const n in t)bs(t[n],e);return t}function pI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zm(()=>{t.isMounted=!0}),Gm(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],gI={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},setup(t,{slots:e}){const n=_h(),s=pI();let i;return()=>{const r=e.default&&Km(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==Zt){o=_;break}}const a=fe(t),{mode:c}=a;if(s.isLeaving)return Zc(o);const l=hf(o);if(!l)return Zc(o);const u=Bl(l,a,s,n);jl(l,u);const h=n.subTree,d=h&&hf(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const _=m();i===void 0?i=_:_!==i&&(i=_,p=!0)}if(d&&d.type!==Zt&&(!Ts(l,d)||p)){const _=Bl(d,a,s,n);if(jl(d,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Zc(o);c==="in-out"&&l.type!==Zt&&(_.delayLeave=(w,b,P)=>{const R=qm(s,d);R[String(d.key)]=d,w._leaveCb=()=>{b(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},Hm=gI;function qm(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Bl(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:w,onAfterAppear:b,onAppearCancelled:P}=e,R=String(t.key),F=qm(n,t),z=(D,ne)=>{D&&Vt(D,s,9,ne)},ce=(D,ne)=>{const ie=ne[1];z(D,ne),G(D)?D.every(Re=>Re.length<=1)&&ie():D.length<=1&&ie()},Q={mode:r,persisted:o,beforeEnter(D){let ne=a;if(!n.isMounted)if(i)ne=_||a;else return;D._leaveCb&&D._leaveCb(!0);const ie=F[R];ie&&Ts(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),z(ne,[D])},enter(D){let ne=c,ie=l,Re=u;if(!n.isMounted)if(i)ne=w||c,ie=b||l,Re=P||u;else return;let U=!1;const Ie=D._enterCb=Me=>{U||(U=!0,Me?z(Re,[D]):z(ie,[D]),Q.delayedLeave&&Q.delayedLeave(),D._enterCb=void 0)};ne?ce(ne,[D,Ie]):Ie()},leave(D,ne){const ie=String(t.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return ne();z(h,[D]);let Re=!1;const U=D._leaveCb=Ie=>{Re||(Re=!0,ne(),Ie?z(m,[D]):z(p,[D]),D._leaveCb=void 0,F[ie]===t&&delete F[ie])};F[ie]=t,d?ce(d,[D,U]):U()},clone(D){return Bl(D,e,n,s)}};return Q}function Zc(t){if(sc(t))return t=os(t),t.children=null,t}function hf(t){return sc(t)?t.children?t.children[0]:void 0:t}function jl(t,e){t.shapeFlag&6&&t.component?jl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Km(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===kt?(o.patchFlag&128&&i++,s=s.concat(Km(o.children,e,a))):(e||o.type!==Zt)&&s.push(a!=null?os(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function $i(t){return se(t)?{setup:t,name:t.name}:t}const Jo=t=>!!t.type.__asyncLoader,sc=t=>t.type.__isKeepAlive;function mI(t,e){Wm(t,"a",e)}function _I(t,e){Wm(t,"da",e)}function Wm(t,e,n=qe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ic(e,s,n),n){let i=n.parent;for(;i&&i.parent;)sc(i.parent.vnode)&&yI(s,e,n,i),i=i.parent}}function yI(t,e,n,s){const i=ic(e,t,s,!0);Qm(()=>{eh(s[e],i)},n)}function ic(t,e,n=qe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fi(),Ei(n);const a=Vt(e,n,t,o);return Ns(),Ui(),a});return s?i.unshift(r):i.push(r),r}}const Ln=t=>(e,n=qe)=>(!Pr||t==="sp")&&ic(t,(...s)=>e(...s),n),vI=Ln("bm"),zm=Ln("m"),wI=Ln("bu"),EI=Ln("u"),Gm=Ln("bum"),Qm=Ln("um"),TI=Ln("sp"),II=Ln("rtg"),bI=Ln("rtc");function CI(t,e=qe){ic("ec",t,e)}function OM(t,e){const n=Lt;if(n===null)return t;const s=ac(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=ke]=e[r];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&bs(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ps(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Fi(),Vt(c,n,8,[t.el,a,t,e]),Ui())}}const SI=Symbol();function RI(t,e,n,s){let i;const r=n&&n[s];if(G(t)||We(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Oe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Hl=t=>t?c_(t)?ac(t)||t.proxy:Hl(t.parent):null,pr=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hl(t.parent),$root:t=>Hl(t.root),$emit:t=>t.emit,$options:t=>ph(t),$forceUpdate:t=>t.f||(t.f=()=>fh(t.update)),$nextTick:t=>t.n||(t.n=dh.bind(t.proxy)),$watch:t=>fI.bind(t)}),el=(t,e)=>t!==ke&&!t.__isScriptSetup&&ge(t,e),AI={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(el(s,e))return o[e]=1,s[e];if(i!==ke&&ge(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ge(l,e))return o[e]=3,r[e];if(n!==ke&&ge(n,e))return o[e]=4,n[e];ql&&(o[e]=0)}}const u=pr[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&ge(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return el(i,e)?(i[e]=n,!0):s!==ke&&ge(s,e)?(s[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ke&&ge(t,o)||el(e,o)||(a=r[0])&&ge(a,o)||ge(s,o)||ge(pr,o)||ge(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ql=!0;function kI(t){const e=ph(t),n=t.proxy,s=t.ctx;ql=!1,e.beforeCreate&&df(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:_,deactivated:w,beforeDestroy:b,beforeUnmount:P,destroyed:R,unmounted:F,render:z,renderTracked:ce,renderTriggered:Q,errorCaptured:D,serverPrefetch:ne,expose:ie,inheritAttrs:Re,components:U,directives:Ie,filters:Me}=e;if(l&&NI(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const we=o[be];se(we)&&(s[be]=we.bind(n))}if(i){const be=i.call(n,n);Oe(be)&&(t.data=Vi(be))}if(ql=!0,r)for(const be in r){const we=r[be],Ht=se(we)?we.bind(n,n):se(we.get)?we.get.bind(n,n):Jt,fs=!se(we)&&se(we.set)?we.set.bind(n):Jt,qt=Et({get:Ht,set:fs});Object.defineProperty(s,be,{enumerable:!0,configurable:!0,get:()=>qt.value,set:It=>qt.value=It})}if(a)for(const be in a)Ym(a[be],s,n,be);if(c){const be=se(c)?c.call(n):c;Reflect.ownKeys(be).forEach(we=>{Xo(we,be[we])})}u&&df(u,t,"c");function Le(be,we){G(we)?we.forEach(Ht=>be(Ht.bind(n))):we&&be(we.bind(n))}if(Le(vI,h),Le(zm,d),Le(wI,p),Le(EI,m),Le(mI,_),Le(_I,w),Le(CI,D),Le(bI,ce),Le(II,Q),Le(Gm,P),Le(Qm,F),Le(TI,ne),G(ie))if(ie.length){const be=t.exposed||(t.exposed={});ie.forEach(we=>{Object.defineProperty(be,we,{get:()=>n[we],set:Ht=>n[we]=Ht})})}else t.exposed||(t.exposed={});z&&t.render===Jt&&(t.render=z),Re!=null&&(t.inheritAttrs=Re),U&&(t.components=U),Ie&&(t.directives=Ie)}function NI(t,e,n=Jt,s=!1){G(t)&&(t=Kl(t));for(const i in t){const r=t[i];let o;Oe(r)?"default"in r?o=$t(r.from||i,r.default,!0):o=$t(r.from||i):o=$t(r),$e(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function df(t,e,n){Vt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ym(t,e,n,s){const i=s.includes(".")?jm(n,s):()=>n[s];if(We(t)){const r=e[t];se(r)&&fr(i,r)}else if(se(t))fr(i,t.bind(n));else if(Oe(t))if(G(t))t.forEach(r=>Ym(r,e,n,s));else{const r=se(t.handler)?t.handler.bind(n):e[t.handler];se(r)&&fr(i,r,t)}}function ph(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>da(c,l,o,!0)),da(c,e,o)),Oe(e)&&r.set(e,c),c}function da(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&da(t,r,n,!0),i&&i.forEach(o=>da(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=DI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const DI={data:ff,props:ys,emits:ys,methods:ys,computed:ys,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:ys,directives:ys,watch:PI,provide:ff,inject:OI};function ff(t,e){return e?t?function(){return rt(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function OI(t,e){return ys(Kl(t),Kl(e))}function Kl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function ys(t,e){return t?rt(rt(Object.create(null),t),e):e}function PI(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const s in e)n[s]=wt(t[s],e[s]);return n}function xI(t,e,n,s=!1){const i={},r={};ca(r,oc,1),t.propsDefaults=Object.create(null),Xm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:WT(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function MI(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=fe(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(tc(t.emitsOptions,d))continue;const p=e[d];if(c)if(ge(r,d))p!==r[d]&&(r[d]=p,l=!0);else{const m=_i(d);i[m]=Wl(c,a,m,p,t,!1)}else p!==r[d]&&(r[d]=p,l=!0)}}}else{Xm(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!ge(e,h)&&((u=Li(h))===h||!ge(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Wl(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ge(e,h))&&(delete r[h],l=!0)}l&&Nn(t,"set","$attrs")}function Xm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Qo(c))continue;const l=e[c];let u;i&&ge(i,u=_i(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:tc(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=fe(n),l=a||ke;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Wl(i,c,h,l[h],t,!ge(l,h))}}return o}function Wl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&se(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(Ei(i),s=l[n]=c.call(null,e),Ns())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Li(n))&&(s=!0))}return s}function Jm(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!se(t)){const u=h=>{c=!0;const[d,p]=Jm(h,e,!0);rt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Oe(t)&&s.set(t,ci),ci;if(G(r))for(let u=0;u<r.length;u++){const h=_i(r[u]);pf(h)&&(o[h]=ke)}else if(r)for(const u in r){const h=_i(u);if(pf(h)){const d=r[u],p=o[h]=G(d)||se(d)?{type:d}:Object.assign({},d);if(p){const m=_f(Boolean,p.type),_=_f(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||ge(p,"default"))&&a.push(h)}}}const l=[o,a];return Oe(t)&&s.set(t,l),l}function pf(t){return t[0]!=="$"}function gf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function mf(t,e){return gf(t)===gf(e)}function _f(t,e){return G(e)?e.findIndex(n=>mf(n,t)):se(e)&&mf(e,t)?0:-1}const Zm=t=>t[0]==="_"||t==="$stable",gh=t=>G(t)?t.map(an):[an(t)],LI=(t,e,n)=>{if(e._n)return e;const s=$m((...i)=>gh(e(...i)),n);return s._c=!1,s},e_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Zm(i))continue;const r=t[i];if(se(r))e[i]=LI(i,r,s);else if(r!=null){const o=gh(r);e[i]=()=>o}}},t_=(t,e)=>{const n=gh(e);t.slots.default=()=>n},FI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),ca(e,"_",n)):e_(e,t.slots={})}else t.slots={},e&&t_(t,e);ca(t.slots,oc,1)},UI=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ke;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(rt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,e_(e,i)),o=e}else e&&(t_(t,e),o={default:1});if(r)for(const a in i)!Zm(a)&&!(a in o)&&delete i[a]};function n_(){return{app:null,config:{isNativeTag:lT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VI=0;function $I(t,e){return function(s,i=null){se(s)||(s=Object.assign({},s)),i!=null&&!Oe(i)&&(i=null);const r=n_(),o=new Set;let a=!1;const c=r.app={_uid:VI++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:r0,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&se(l.install)?(o.add(l),l.install(c,...u)):se(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=st(s,i);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ac(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function zl(t,e,n,s,i=!1){if(G(t)){t.forEach((d,p)=>zl(d,e&&(G(e)?e[p]:e),n,s,i));return}if(Jo(s)&&!i)return;const r=s.shapeFlag&4?ac(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(We(l)?(u[l]=null,ge(h,l)&&(h[l]=null)):$e(l)&&(l.value=null)),se(c))Jn(c,a,12,[o,u]);else{const d=We(c),p=$e(c);if(d||p){const m=()=>{if(t.f){const _=d?ge(h,c)?h[c]:u[c]:c.value;i?G(_)&&eh(_,r):G(_)?_.includes(r)||_.push(r):d?(u[c]=[r],ge(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ge(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,bt(m,n)):m()}}}const bt=dI;function BI(t){return jI(t)}function jI(t,e){const n=mT();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Jt,insertStaticContent:m}=t,_=(f,g,y,v=null,I=null,k=null,M=!1,A=null,N=!!g.dynamicChildren)=>{if(f===g)return;f&&!Ts(f,g)&&(v=x(f),It(f,I,k,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:C,ref:K,shapeFlag:$}=g;switch(C){case rc:w(f,g,y,v);break;case Zt:b(f,g,y,v);break;case tl:f==null&&P(g,y,v,M);break;case kt:U(f,g,y,v,I,k,M,A,N);break;default:$&1?z(f,g,y,v,I,k,M,A,N):$&6?Ie(f,g,y,v,I,k,M,A,N):($&64||$&128)&&C.process(f,g,y,v,I,k,M,A,N,pe)}K!=null&&I&&zl(K,f&&f.ref,k,g||f,!g)},w=(f,g,y,v)=>{if(f==null)s(g.el=a(g.children),y,v);else{const I=g.el=f.el;g.children!==f.children&&l(I,g.children)}},b=(f,g,y,v)=>{f==null?s(g.el=c(g.children||""),y,v):g.el=f.el},P=(f,g,y,v)=>{[f.el,f.anchor]=m(f.children,g,y,v,f.el,f.anchor)},R=({el:f,anchor:g},y,v)=>{let I;for(;f&&f!==g;)I=d(f),s(f,y,v),f=I;s(g,y,v)},F=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),i(f),f=y;i(g)},z=(f,g,y,v,I,k,M,A,N)=>{M=M||g.type==="svg",f==null?ce(g,y,v,I,k,M,A,N):ne(f,g,I,k,M,A,N)},ce=(f,g,y,v,I,k,M,A)=>{let N,C;const{type:K,props:$,shapeFlag:W,transition:Z,dirs:oe}=f;if(N=f.el=o(f.type,k,$&&$.is,$),W&8?u(N,f.children):W&16&&D(f.children,N,null,v,I,k&&K!=="foreignObject",M,A),oe&&ps(f,null,v,"created"),Q(N,f,f.scopeId,M,v),$){for(const Ee in $)Ee!=="value"&&!Qo(Ee)&&r(N,Ee,null,$[Ee],k,f.children,v,I,L);"value"in $&&r(N,"value",null,$.value),(C=$.onVnodeBeforeMount)&&on(C,v,f)}oe&&ps(f,null,v,"beforeMount");const Ce=(!I||I&&!I.pendingBranch)&&Z&&!Z.persisted;Ce&&Z.beforeEnter(N),s(N,g,y),((C=$&&$.onVnodeMounted)||Ce||oe)&&bt(()=>{C&&on(C,v,f),Ce&&Z.enter(N),oe&&ps(f,null,v,"mounted")},I)},Q=(f,g,y,v,I)=>{if(y&&p(f,y),v)for(let k=0;k<v.length;k++)p(f,v[k]);if(I){let k=I.subTree;if(g===k){const M=I.vnode;Q(f,M,M.scopeId,M.slotScopeIds,I.parent)}}},D=(f,g,y,v,I,k,M,A,N=0)=>{for(let C=N;C<f.length;C++){const K=f[C]=A?qn(f[C]):an(f[C]);_(null,K,g,y,v,I,k,M,A)}},ne=(f,g,y,v,I,k,M)=>{const A=g.el=f.el;let{patchFlag:N,dynamicChildren:C,dirs:K}=g;N|=f.patchFlag&16;const $=f.props||ke,W=g.props||ke;let Z;y&&gs(y,!1),(Z=W.onVnodeBeforeUpdate)&&on(Z,y,g,f),K&&ps(g,f,y,"beforeUpdate"),y&&gs(y,!0);const oe=I&&g.type!=="foreignObject";if(C?ie(f.dynamicChildren,C,A,y,v,oe,k):M||we(f,g,A,null,y,v,oe,k,!1),N>0){if(N&16)Re(A,g,$,W,y,v,I);else if(N&2&&$.class!==W.class&&r(A,"class",null,W.class,I),N&4&&r(A,"style",$.style,W.style,I),N&8){const Ce=g.dynamicProps;for(let Ee=0;Ee<Ce.length;Ee++){const Be=Ce[Ee],Kt=$[Be],Ys=W[Be];(Ys!==Kt||Be==="value")&&r(A,Be,Kt,Ys,I,f.children,y,v,L)}}N&1&&f.children!==g.children&&u(A,g.children)}else!M&&C==null&&Re(A,g,$,W,y,v,I);((Z=W.onVnodeUpdated)||K)&&bt(()=>{Z&&on(Z,y,g,f),K&&ps(g,f,y,"updated")},v)},ie=(f,g,y,v,I,k,M)=>{for(let A=0;A<g.length;A++){const N=f[A],C=g[A],K=N.el&&(N.type===kt||!Ts(N,C)||N.shapeFlag&70)?h(N.el):y;_(N,C,K,null,v,I,k,M,!0)}},Re=(f,g,y,v,I,k,M)=>{if(y!==v){if(y!==ke)for(const A in y)!Qo(A)&&!(A in v)&&r(f,A,y[A],null,M,g.children,I,k,L);for(const A in v){if(Qo(A))continue;const N=v[A],C=y[A];N!==C&&A!=="value"&&r(f,A,C,N,M,g.children,I,k,L)}"value"in v&&r(f,"value",y.value,v.value)}},U=(f,g,y,v,I,k,M,A,N)=>{const C=g.el=f?f.el:a(""),K=g.anchor=f?f.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:Z}=g;Z&&(A=A?A.concat(Z):Z),f==null?(s(C,y,v),s(K,y,v),D(g.children,y,K,I,k,M,A,N)):$>0&&$&64&&W&&f.dynamicChildren?(ie(f.dynamicChildren,W,y,I,k,M,A),(g.key!=null||I&&g===I.subTree)&&s_(f,g,!0)):we(f,g,y,K,I,k,M,A,N)},Ie=(f,g,y,v,I,k,M,A,N)=>{g.slotScopeIds=A,f==null?g.shapeFlag&512?I.ctx.activate(g,y,v,M,N):Me(g,y,v,I,k,M,N):Ve(f,g,N)},Me=(f,g,y,v,I,k,M)=>{const A=f.component=XI(f,v,I);if(sc(f)&&(A.ctx.renderer=pe),JI(A),A.asyncDep){if(I&&I.registerDep(A,Le),!f.el){const N=A.subTree=st(Zt);b(null,N,g,y)}return}Le(A,f,g,y,I,k,M)},Ve=(f,g,y)=>{const v=g.component=f.component;if(lI(f,g,y))if(v.asyncDep&&!v.asyncResolved){be(v,g,y);return}else v.next=g,sI(v.update),v.update();else g.el=f.el,v.vnode=g},Le=(f,g,y,v,I,k,M)=>{const A=()=>{if(f.isMounted){let{next:K,bu:$,u:W,parent:Z,vnode:oe}=f,Ce=K,Ee;gs(f,!1),K?(K.el=oe.el,be(f,K,M)):K=oe,$&&Yo($),(Ee=K.props&&K.props.onVnodeBeforeUpdate)&&on(Ee,Z,K,oe),gs(f,!0);const Be=Jc(f),Kt=f.subTree;f.subTree=Be,_(Kt,Be,h(Kt.el),x(Kt),f,I,k),K.el=Be.el,Ce===null&&uI(f,Be.el),W&&bt(W,I),(Ee=K.props&&K.props.onVnodeUpdated)&&bt(()=>on(Ee,Z,K,oe),I)}else{let K;const{el:$,props:W}=g,{bm:Z,m:oe,parent:Ce}=f,Ee=Jo(g);if(gs(f,!1),Z&&Yo(Z),!Ee&&(K=W&&W.onVnodeBeforeMount)&&on(K,Ce,g),gs(f,!0),$&&re){const Be=()=>{f.subTree=Jc(f),re($,f.subTree,f,I,null)};Ee?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Be()):Be()}else{const Be=f.subTree=Jc(f);_(null,Be,y,v,f,I,k),g.el=Be.el}if(oe&&bt(oe,I),!Ee&&(K=W&&W.onVnodeMounted)){const Be=g;bt(()=>on(K,Ce,Be),I)}(g.shapeFlag&256||Ce&&Jo(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&f.a&&bt(f.a,I),f.isMounted=!0,g=y=v=null}},N=f.effect=new rh(A,()=>fh(C),f.scope),C=f.update=()=>N.run();C.id=f.uid,gs(f,!0),C()},be=(f,g,y)=>{g.component=f;const v=f.vnode.props;f.vnode=g,f.next=null,MI(f,g.props,v,y),UI(f,g.children,y),Fi(),lf(),Ui()},we=(f,g,y,v,I,k,M,A,N=!1)=>{const C=f&&f.children,K=f?f.shapeFlag:0,$=g.children,{patchFlag:W,shapeFlag:Z}=g;if(W>0){if(W&128){fs(C,$,y,v,I,k,M,A,N);return}else if(W&256){Ht(C,$,y,v,I,k,M,A,N);return}}Z&8?(K&16&&L(C,I,k),$!==C&&u(y,$)):K&16?Z&16?fs(C,$,y,v,I,k,M,A,N):L(C,I,k,!0):(K&8&&u(y,""),Z&16&&D($,y,v,I,k,M,A,N))},Ht=(f,g,y,v,I,k,M,A,N)=>{f=f||ci,g=g||ci;const C=f.length,K=g.length,$=Math.min(C,K);let W;for(W=0;W<$;W++){const Z=g[W]=N?qn(g[W]):an(g[W]);_(f[W],Z,y,null,I,k,M,A,N)}C>K?L(f,I,k,!0,!1,$):D(g,y,v,I,k,M,A,N,$)},fs=(f,g,y,v,I,k,M,A,N)=>{let C=0;const K=g.length;let $=f.length-1,W=K-1;for(;C<=$&&C<=W;){const Z=f[C],oe=g[C]=N?qn(g[C]):an(g[C]);if(Ts(Z,oe))_(Z,oe,y,null,I,k,M,A,N);else break;C++}for(;C<=$&&C<=W;){const Z=f[$],oe=g[W]=N?qn(g[W]):an(g[W]);if(Ts(Z,oe))_(Z,oe,y,null,I,k,M,A,N);else break;$--,W--}if(C>$){if(C<=W){const Z=W+1,oe=Z<K?g[Z].el:v;for(;C<=W;)_(null,g[C]=N?qn(g[C]):an(g[C]),y,oe,I,k,M,A,N),C++}}else if(C>W)for(;C<=$;)It(f[C],I,k,!0),C++;else{const Z=C,oe=C,Ce=new Map;for(C=oe;C<=W;C++){const Rt=g[C]=N?qn(g[C]):an(g[C]);Rt.key!=null&&Ce.set(Rt.key,C)}let Ee,Be=0;const Kt=W-oe+1;let Ys=!1,Xd=0;const er=new Array(Kt);for(C=0;C<Kt;C++)er[C]=0;for(C=Z;C<=$;C++){const Rt=f[C];if(Be>=Kt){It(Rt,I,k,!0);continue}let rn;if(Rt.key!=null)rn=Ce.get(Rt.key);else for(Ee=oe;Ee<=W;Ee++)if(er[Ee-oe]===0&&Ts(Rt,g[Ee])){rn=Ee;break}rn===void 0?It(Rt,I,k,!0):(er[rn-oe]=C+1,rn>=Xd?Xd=rn:Ys=!0,_(Rt,g[rn],y,null,I,k,M,A,N),Be++)}const Jd=Ys?HI(er):ci;for(Ee=Jd.length-1,C=Kt-1;C>=0;C--){const Rt=oe+C,rn=g[Rt],Zd=Rt+1<K?g[Rt+1].el:v;er[C]===0?_(null,rn,y,Zd,I,k,M,A,N):Ys&&(Ee<0||C!==Jd[Ee]?qt(rn,y,Zd,2):Ee--)}}},qt=(f,g,y,v,I=null)=>{const{el:k,type:M,transition:A,children:N,shapeFlag:C}=f;if(C&6){qt(f.component.subTree,g,y,v);return}if(C&128){f.suspense.move(g,y,v);return}if(C&64){M.move(f,g,y,pe);return}if(M===kt){s(k,g,y);for(let $=0;$<N.length;$++)qt(N[$],g,y,v);s(f.anchor,g,y);return}if(M===tl){R(f,g,y);return}if(v!==2&&C&1&&A)if(v===0)A.beforeEnter(k),s(k,g,y),bt(()=>A.enter(k),I);else{const{leave:$,delayLeave:W,afterLeave:Z}=A,oe=()=>s(k,g,y),Ce=()=>{$(k,()=>{oe(),Z&&Z()})};W?W(k,oe,Ce):Ce()}else s(k,g,y)},It=(f,g,y,v=!1,I=!1)=>{const{type:k,props:M,ref:A,children:N,dynamicChildren:C,shapeFlag:K,patchFlag:$,dirs:W}=f;if(A!=null&&zl(A,null,y,f,!0),K&256){g.ctx.deactivate(f);return}const Z=K&1&&W,oe=!Jo(f);let Ce;if(oe&&(Ce=M&&M.onVnodeBeforeUnmount)&&on(Ce,g,f),K&6)E(f.component,y,v);else{if(K&128){f.suspense.unmount(y,v);return}Z&&ps(f,null,g,"beforeUnmount"),K&64?f.type.remove(f,g,y,I,pe,v):C&&(k!==kt||$>0&&$&64)?L(C,g,y,!1,!0):(k===kt&&$&384||!I&&K&16)&&L(N,g,y),v&&Qs(f)}(oe&&(Ce=M&&M.onVnodeUnmounted)||Z)&&bt(()=>{Ce&&on(Ce,g,f),Z&&ps(f,null,g,"unmounted")},y)},Qs=f=>{const{type:g,el:y,anchor:v,transition:I}=f;if(g===kt){Ro(y,v);return}if(g===tl){F(f);return}const k=()=>{i(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:A}=I,N=()=>M(y,k);A?A(f.el,k,N):N()}else k()},Ro=(f,g)=>{let y;for(;f!==g;)y=d(f),i(f),f=y;i(g)},E=(f,g,y)=>{const{bum:v,scope:I,update:k,subTree:M,um:A}=f;v&&Yo(v),I.stop(),k&&(k.active=!1,It(M,f,g,y)),A&&bt(A,g),bt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},L=(f,g,y,v=!1,I=!1,k=0)=>{for(let M=k;M<f.length;M++)It(f[M],g,y,v,I)},x=f=>f.shapeFlag&6?x(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),H=(f,g,y)=>{f==null?g._vnode&&It(g._vnode,null,null,!0):_(g._vnode||null,f,g,null,null,null,y),lf(),Mm(),g._vnode=f},pe={p:_,um:It,m:qt,r:Qs,mt:Me,mc:D,pc:we,pbc:ie,n:x,o:t};let Fe,re;return e&&([Fe,re]=e(pe)),{render:H,hydrate:Fe,createApp:$I(H,Fe)}}function gs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function s_(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=qn(i[r]),a.el=o.el),n||s_(o,a)),a.type===rc&&(a.el=o.el)}}function HI(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const qI=t=>t.__isTeleport,kt=Symbol(void 0),rc=Symbol(void 0),Zt=Symbol(void 0),tl=Symbol(void 0),gr=[];let Gt=null;function Zn(t=!1){gr.push(Gt=t?null:[])}function KI(){gr.pop(),Gt=gr[gr.length-1]||null}let Or=1;function yf(t){Or+=t}function i_(t){return t.dynamicChildren=Or>0?Gt||ci:null,KI(),Or>0&&Gt&&Gt.push(t),t}function wi(t,e,n,s,i,r){return i_(Ft(t,e,n,s,i,r,!0))}function r_(t,e,n,s,i){return i_(st(t,e,n,s,i,!0))}function Gl(t){return t?t.__v_isVNode===!0:!1}function Ts(t,e){return t.type===e.type&&t.key===e.key}const oc="__vInternal",o_=({key:t})=>t??null,Zo=({ref:t,ref_key:e,ref_for:n})=>t!=null?We(t)||$e(t)||se(t)?{i:Lt,r:t,k:e,f:!!n}:t:null;function Ft(t,e=null,n=null,s=0,i=null,r=t===kt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&o_(e),ref:e&&Zo(e),scopeId:nc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Lt};return a?(mh(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),Or>0&&!o&&Gt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Gt.push(c),c}const st=WI;function WI(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===SI)&&(t=Zt),Gl(t)){const a=os(t,e,!0);return n&&mh(a,n),Or>0&&!r&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag|=-2,a}if(n0(t)&&(t=t.__vccOpts),e){e=zI(e);let{class:a,style:c}=e;a&&!We(a)&&(e.class=Ju(a)),Oe(c)&&(Rm(c)&&!G(c)&&(c=rt({},c)),e.style=Xu(c))}const o=We(t)?1:hI(t)?128:qI(t)?64:Oe(t)?4:se(t)?2:0;return Ft(t,e,n,s,i,o,r,!0)}function zI(t){return t?Rm(t)||oc in t?rt({},t):t:null}function os(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?GI(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&o_(a),ref:e&&e.ref?n&&i?G(i)?i.concat(Zo(e)):[i,Zo(e)]:Zo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&os(t.ssContent),ssFallback:t.ssFallback&&os(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function a_(t=" ",e=0){return st(rc,null,t,e)}function vf(t="",e=!1){return e?(Zn(),r_(Zt,null,t)):st(Zt,null,t)}function an(t){return t==null||typeof t=="boolean"?st(Zt):G(t)?st(kt,null,t.slice()):typeof t=="object"?qn(t):st(rc,null,String(t))}function qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:os(t)}function mh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),mh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(oc in e)?e._ctx=Lt:i===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),s&64?(n=16,e=[a_(e)]):n=8);t.children=e,t.shapeFlag|=n}function GI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ju([e.class,s.class]));else if(i==="style")e.style=Xu([e.style,s.style]);else if(Ya(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function on(t,e,n,s=null){Vt(t,e,7,[n,s])}const QI=n_();let YI=0;function XI(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||QI,r={uid:YI++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new pm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jm(s,i),emitsOptions:Fm(s,i),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=oI.bind(null,r),t.ce&&t.ce(r),r}let qe=null;const _h=()=>qe||Lt,Ei=t=>{qe=t,t.scope.on()},Ns=()=>{qe&&qe.scope.off(),qe=null};function c_(t){return t.vnode.shapeFlag&4}let Pr=!1;function JI(t,e=!1){Pr=e;const{props:n,children:s}=t.vnode,i=c_(t);xI(t,n,i,e),FI(t,s);const r=i?ZI(t,e):void 0;return Pr=!1,r}function ZI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vi(new Proxy(t.ctx,AI));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?t0(t):null;Ei(t),Fi();const r=Jn(s,t,0,[t.props,i]);if(Ui(),Ns(),um(r)){if(r.then(Ns,Ns),e)return r.then(o=>{wf(t,o,e)}).catch(o=>{ec(o,t,0)});t.asyncDep=r}else wf(t,r,e)}else l_(t,e)}function wf(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Dm(e)),l_(t,n)}let Ef;function l_(t,e,n){const s=t.type;if(!t.render){if(!e&&Ef&&!s.render){const i=s.template||ph(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=rt(rt({isCustomElement:r,delimiters:a},o),c);s.render=Ef(i,l)}}t.render=s.render||Jt}Ei(t),Fi(),kI(t),Ui(),Ns()}function e0(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function t0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=e0(t))},slots:t.slots,emit:t.emit,expose:e}}function ac(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Dm(vi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pr)return pr[n](t)},has(e,n){return n in e||n in pr}}))}function n0(t){return se(t)&&"__vccOpts"in t}const Et=(t,e)=>eI(t,e,Pr);function yh(t,e,n){const s=arguments.length;return s===2?Oe(e)&&!G(e)?Gl(e)?st(t,null,[e]):st(t,e):st(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Gl(n)&&(n=[n]),st(t,e,n))}const s0=Symbol(""),i0=()=>$t(s0),r0="3.2.47",o0="http://www.w3.org/2000/svg",Is=typeof document<"u"?document:null,Tf=Is&&Is.createElement("template"),a0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Is.createElementNS(o0,t):Is.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Is.createTextNode(t),createComment:t=>Is.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Is.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Tf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Tf.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function c0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l0(t,e,n){const s=t.style,i=We(n);if(n&&!i){if(e&&!We(e))for(const r in e)n[r]==null&&Ql(s,r,"");for(const r in n)Ql(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const If=/\s*!important$/;function Ql(t,e,n){if(G(n))n.forEach(s=>Ql(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=u0(t,e);If.test(n)?t.setProperty(Li(s),n.replace(If,""),"important"):t[s]=n}}const bf=["Webkit","Moz","ms"],nl={};function u0(t,e){const n=nl[e];if(n)return n;let s=_i(e);if(s!=="filter"&&s in t)return nl[e]=s;s=fm(s);for(let i=0;i<bf.length;i++){const r=bf[i]+s;if(r in t)return nl[e]=r}return e}const Cf="http://www.w3.org/1999/xlink";function h0(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Cf,e.slice(6,e.length)):t.setAttributeNS(Cf,e,n);else{const r=cT(e);n==null||r&&!am(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function d0(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=am(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ei(t,e,n,s){t.addEventListener(e,n,s)}function f0(t,e,n,s){t.removeEventListener(e,n,s)}function p0(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=g0(e);if(s){const l=r[e]=y0(s,i);ei(t,a,l,c)}else o&&(f0(t,a,o,c),r[e]=void 0)}}const Sf=/(?:Once|Passive|Capture)$/;function g0(t){let e;if(Sf.test(t)){e={};let s;for(;s=t.match(Sf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Li(t.slice(2)),e]}let sl=0;const m0=Promise.resolve(),_0=()=>sl||(m0.then(()=>sl=0),sl=Date.now());function y0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Vt(v0(s,n.value),e,5,[s])};return n.value=t,n.attached=_0(),n}function v0(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Rf=/^on[a-z]/,w0=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?c0(t,s,i):e==="style"?l0(t,n,s):Ya(e)?Zu(e)||p0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):E0(t,e,s,i))?d0(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),h0(t,e,s,i))};function E0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Rf.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Rf.test(e)&&We(n)?!1:e in t}const Vn="transition",tr="animation",vh=(t,{slots:e})=>yh(Hm,T0(t),e);vh.displayName="Transition";const u_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};vh.props=rt({},Hm.props,u_);const ms=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},Af=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function T0(t){const e={};for(const U in t)U in u_||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=I0(i),_=m&&m[0],w=m&&m[1],{onBeforeEnter:b,onEnter:P,onEnterCancelled:R,onLeave:F,onLeaveCancelled:z,onBeforeAppear:ce=b,onAppear:Q=P,onAppearCancelled:D=R}=e,ne=(U,Ie,Me)=>{_s(U,Ie?u:a),_s(U,Ie?l:o),Me&&Me()},ie=(U,Ie)=>{U._isLeaving=!1,_s(U,h),_s(U,p),_s(U,d),Ie&&Ie()},Re=U=>(Ie,Me)=>{const Ve=U?Q:P,Le=()=>ne(Ie,U,Me);ms(Ve,[Ie,Le]),kf(()=>{_s(Ie,U?c:r),$n(Ie,U?u:a),Af(Ve)||Nf(Ie,s,_,Le)})};return rt(e,{onBeforeEnter(U){ms(b,[U]),$n(U,r),$n(U,o)},onBeforeAppear(U){ms(ce,[U]),$n(U,c),$n(U,l)},onEnter:Re(!1),onAppear:Re(!0),onLeave(U,Ie){U._isLeaving=!0;const Me=()=>ie(U,Ie);$n(U,h),S0(),$n(U,d),kf(()=>{U._isLeaving&&(_s(U,h),$n(U,p),Af(F)||Nf(U,s,w,Me))}),ms(F,[U,Me])},onEnterCancelled(U){ne(U,!1),ms(R,[U])},onAppearCancelled(U){ne(U,!0),ms(D,[U])},onLeaveCancelled(U){ie(U),ms(z,[U])}})}function I0(t){if(t==null)return null;if(Oe(t))return[il(t.enter),il(t.leave)];{const e=il(t);return[e,e]}}function il(t){return gT(t)}function $n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function _s(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function kf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let b0=0;function Nf(t,e,n,s){const i=t._endId=++b0,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=C0(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),r()},d=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function C0(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${Vn}Delay`),r=s(`${Vn}Duration`),o=Df(i,r),a=s(`${tr}Delay`),c=s(`${tr}Duration`),l=Df(a,c);let u=null,h=0,d=0;e===Vn?o>0&&(u=Vn,h=o,d=r.length):e===tr?l>0&&(u=tr,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Vn:tr:null,d=u?u===Vn?r.length:c.length:0);const p=u===Vn&&/\b(transform|all)(,|$)/.test(s(`${Vn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:p}}function Df(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Of(n)+Of(t[s])))}function Of(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function S0(){return document.body.offsetHeight}const Pf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Yo(e,n):e};function R0(t){t.target.composing=!0}function xf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const PM={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Pf(i);const r=s||i.props&&i.props.type==="number";ei(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ll(a)),t._assign(a)}),n&&ei(t,"change",()=>{t.value=t.value.trim()}),e||(ei(t,"compositionstart",R0),ei(t,"compositionend",xf),ei(t,"change",xf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Pf(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ll(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},A0=["ctrl","shift","alt","meta"],k0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>A0.some(n=>t[`${n}Key`]&&!e.includes(n))},xM=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=k0[e[i]];if(r&&r(n,e))return}return t(n,...s)},N0=rt({patchProp:w0},a0);let Mf;function D0(){return Mf||(Mf=BI(N0))}const O0=(...t)=>{const e=D0().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=P0(s);if(!i)return;const r=e._component;!se(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function P0(t){return We(t)?document.querySelector(t):t}var x0=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let h_;const cc=t=>h_=t,d_=Symbol();function Yl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var mr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(mr||(mr={}));function M0(){const t=sh(!0),e=t.run(()=>cn({}));let n=[],s=[];const i=vi({install(r){cc(i),i._a=r,r.provide(d_,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!x0?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const f_=()=>{};function Lf(t,e,n,s=f_){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&gm()&&yT(i),i}function Xs(t,...e){t.slice().forEach(n=>{n(...e)})}function Xl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Yl(i)&&Yl(s)&&t.hasOwnProperty(n)&&!$e(s)&&!Xn(s)?t[n]=Xl(i,s):t[n]=s}return t}const L0=Symbol();function F0(t){return!Yl(t)||!t.hasOwnProperty(L0)}const{assign:Hn}=Object;function U0(t){return!!($e(t)&&t.effect)}function V0(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=i?i():{});const u=YT(n.state.value[t]);return Hn(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=vi(Et(()=>{cc(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=p_(t,l,e,n,s,!0),c}function p_(t,e,n={},s,i,r){let o;const a=Hn({actions:{}},n),c={deep:!0};let l,u,h=vi([]),d=vi([]),p;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),cn({});let _;function w(Q){let D;l=u=!1,typeof Q=="function"?(Q(s.state.value[t]),D={type:mr.patchFunction,storeId:t,events:p}):(Xl(s.state.value[t],Q),D={type:mr.patchObject,payload:Q,storeId:t,events:p});const ne=_=Symbol();dh().then(()=>{_===ne&&(l=!0)}),u=!0,Xs(h,D,s.state.value[t])}const b=r?function(){const{state:D}=n,ne=D?D():{};this.$patch(ie=>{Hn(ie,ne)})}:f_;function P(){o.stop(),h=[],d=[],s._s.delete(t)}function R(Q,D){return function(){cc(s);const ne=Array.from(arguments),ie=[],Re=[];function U(Ve){ie.push(Ve)}function Ie(Ve){Re.push(Ve)}Xs(d,{args:ne,name:Q,store:z,after:U,onError:Ie});let Me;try{Me=D.apply(this&&this.$id===t?this:z,ne)}catch(Ve){throw Xs(Re,Ve),Ve}return Me instanceof Promise?Me.then(Ve=>(Xs(ie,Ve),Ve)).catch(Ve=>(Xs(Re,Ve),Promise.reject(Ve))):(Xs(ie,Me),Me)}}const F={_p:s,$id:t,$onAction:Lf.bind(null,d),$patch:w,$reset:b,$subscribe(Q,D={}){const ne=Lf(h,Q,D.detached,()=>ie()),ie=o.run(()=>fr(()=>s.state.value[t],Re=>{(D.flush==="sync"?u:l)&&Q({storeId:t,type:mr.direct,events:p},Re)},Hn({},c,D)));return ne},$dispose:P},z=Vi(F);s._s.set(t,z);const ce=s._e.run(()=>(o=sh(),o.run(()=>e())));for(const Q in ce){const D=ce[Q];if($e(D)&&!U0(D)||Xn(D))r||(m&&F0(D)&&($e(D)?D.value=m[Q]:Xl(D,m[Q])),s.state.value[t][Q]=D);else if(typeof D=="function"){const ne=R(Q,D);ce[Q]=ne,a.actions[Q]=D}}return Hn(z,ce),Hn(fe(z),ce),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:Q=>{w(D=>{Hn(D,Q)})}}),s._p.forEach(Q=>{Hn(z,o.run(()=>Q({store:z,app:s._a,pinia:s,options:a})))}),m&&r&&n.hydrate&&n.hydrate(z.$state,m),l=!0,u=!0,z}function $0(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,c){const l=_h();return a=a||l&&$t(d_,null),a&&cc(a),a=h_,a._s.has(s)||(r?p_(s,e,i,a):V0(s,i,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw Bi(e)},Bi=function(t){return new Error("Firebase Database ("+g_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},B0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(m_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):B0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new j0;const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class j0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const __=function(t){const e=m_(t);return lc.encodeByteArray(e,!0)},fa=function(t){return __(t).replace(/\./g,"")},pa=function(t){try{return lc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){return y_(void 0,t)}function y_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!q0(n)||(t[n]=y_(t[n],e[n]));return t}function q0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=()=>K0().__FIREBASE_DEFAULTS__,z0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},G0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pa(t[1]);return e&&JSON.parse(e)},wh=()=>{try{return W0()||z0()||G0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},v_=t=>{var e,n;return(n=(e=wh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Q0=t=>{const e=v_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Y0=()=>{var t;return(t=wh())===null||t===void 0?void 0:t.config},w_=t=>{var e;return(e=wh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[fa(JSON.stringify(n)),fa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function J0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function E_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Z0(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function T_(){return g_.NODE_ADMIN===!0}function I_(){try{return typeof indexedDB=="object"}catch{return!1}}function eb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="FirebaseError";class wn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=tb,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?nb(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wn(i,a,s)}}function nb(t,e){return t.replace(sb,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const sb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Mr(pa(r[0])||""),n=Mr(pa(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ib=function(t){const e=b_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},rb=function(t){const e=b_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ti(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Jl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ga(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ma(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ff(r)&&Ff(o)){if(!ma(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ff(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ab(t,e){const n=new cb(t,e);return n.subscribe.bind(n)}class cb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");lb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=rl),i.error===void 0&&(i.error=rl),i.complete===void 0&&(i.complete=rl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rl(){}function ub(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pb(e))try{this.getOrInitializeService({instanceIdentifier:vs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vs){return this.instances.has(e)}getOptions(e=vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vs){return this.component?this.component.multipleInstances?e:vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fb(t){return t===vs?void 0:t}function pb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new db(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const mb={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},_b=me.INFO,yb={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},vb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=yb[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zr{constructor(e){this.name=e,this._logLevel=_b,this._logHandler=vb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const wb=(t,e)=>e.some(n=>t instanceof n);let Uf,Vf;function Eb(){return Uf||(Uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tb(){return Vf||(Vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C_=new WeakMap,Zl=new WeakMap,S_=new WeakMap,ol=new WeakMap,Th=new WeakMap;function Ib(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(es(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&C_.set(n,t)}).catch(()=>{}),Th.set(e,t),e}function bb(t){if(Zl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Zl.set(t,e)}let eu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||S_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return es(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cb(t){eu=t(eu)}function Sb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(al(this),e,...n);return S_.set(s,e.sort?e.sort():[e]),es(s)}:Tb().includes(t)?function(...e){return t.apply(al(this),e),es(C_.get(this))}:function(...e){return es(t.apply(al(this),e))}}function Rb(t){return typeof t=="function"?Sb(t):(t instanceof IDBTransaction&&bb(t),wb(t,Eb())?new Proxy(t,eu):t)}function es(t){if(t instanceof IDBRequest)return Ib(t);if(ol.has(t))return ol.get(t);const e=Rb(t);return e!==t&&(ol.set(t,e),Th.set(e,t)),e}const al=t=>Th.get(t);function Ab(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=es(o);return s&&o.addEventListener("upgradeneeded",c=>{s(es(o.result),c.oldVersion,c.newVersion,es(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const kb=["get","getKey","getAll","getAllKeys","count"],Nb=["put","add","delete","clear"],cl=new Map;function $f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cl.get(e))return cl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Nb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||kb.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return cl.set(e,r),r}Cb(t=>({...t,get:(e,n,s)=>$f(e,n)||t.get(e,n,s),has:(e,n)=>!!$f(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ob(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ob(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tu="@firebase/app",Bf="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new Zr("@firebase/app"),Pb="@firebase/app-compat",xb="@firebase/analytics-compat",Mb="@firebase/analytics",Lb="@firebase/app-check-compat",Fb="@firebase/app-check",Ub="@firebase/auth",Vb="@firebase/auth-compat",$b="@firebase/database",Bb="@firebase/database-compat",jb="@firebase/functions",Hb="@firebase/functions-compat",qb="@firebase/installations",Kb="@firebase/installations-compat",Wb="@firebase/messaging",zb="@firebase/messaging-compat",Gb="@firebase/performance",Qb="@firebase/performance-compat",Yb="@firebase/remote-config",Xb="@firebase/remote-config-compat",Jb="@firebase/storage",Zb="@firebase/storage-compat",eC="@firebase/firestore",tC="@firebase/firestore-compat",nC="firebase",sC="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="[DEFAULT]",iC={[tu]:"fire-core",[Pb]:"fire-core-compat",[Mb]:"fire-analytics",[xb]:"fire-analytics-compat",[Fb]:"fire-app-check",[Lb]:"fire-app-check-compat",[Ub]:"fire-auth",[Vb]:"fire-auth-compat",[$b]:"fire-rtdb",[Bb]:"fire-rtdb-compat",[jb]:"fire-fn",[Hb]:"fire-fn-compat",[qb]:"fire-iid",[Kb]:"fire-iid-compat",[Wb]:"fire-fcm",[zb]:"fire-fcm-compat",[Gb]:"fire-perf",[Qb]:"fire-perf-compat",[Yb]:"fire-rc",[Xb]:"fire-rc-compat",[Jb]:"fire-gcs",[Zb]:"fire-gcs-compat",[eC]:"fire-fst",[tC]:"fire-fst-compat","fire-js":"fire-js",[nC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new Map,su=new Map;function rC(t,e){try{t.container.addComponent(e)}catch(n){Ms.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gn(t){const e=t.name;if(su.has(e))return Ms.debug(`There were multiple attempts to register component ${e}.`),!1;su.set(e,t);for(const n of _a.values())rC(n,t);return!0}function Ih(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ts=new ji("app","Firebase",oC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=sC;function R_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:nu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ts.create("bad-app-name",{appName:String(i)});if(n||(n=Y0()),!n)throw ts.create("no-options");const r=_a.get(i);if(r){if(ma(n,r.options)&&ma(s,r.config))return r;throw ts.create("duplicate-app",{appName:i})}const o=new gb(i);for(const c of su.values())o.addComponent(c);const a=new aC(n,s,o);return _a.set(i,a),a}function bh(t=nu){const e=_a.get(t);if(!e&&t===nu)return R_();if(!e)throw ts.create("no-app",{appName:t});return e}function Nt(t,e,n){var s;let i=(s=iC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ms.warn(a.join(" "));return}gn(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="firebase-heartbeat-database",lC=1,Lr="firebase-heartbeat-store";let ll=null;function A_(){return ll||(ll=Ab(cC,lC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lr)}}}).catch(t=>{throw ts.create("idb-open",{originalErrorMessage:t.message})})),ll}async function uC(t){try{return(await A_()).transaction(Lr).objectStore(Lr).get(k_(t))}catch(e){if(e instanceof wn)Ms.warn(e.message);else{const n=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ms.warn(n.message)}}}async function jf(t,e){try{const s=(await A_()).transaction(Lr,"readwrite");return await s.objectStore(Lr).put(e,k_(t)),s.done}catch(n){if(n instanceof wn)Ms.warn(n.message);else{const s=ts.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ms.warn(s.message)}}}function k_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=1024,dC=30*24*60*60*1e3;class fC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=dC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hf(),{heartbeatsToSend:n,unsentEntries:s}=pC(this._heartbeatsCache.heartbeats),i=fa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hf(){return new Date().toISOString().substring(0,10)}function pC(t,e=hC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class gC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return I_()?eb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qf(t){return fa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){gn(new tn("platform-logger",e=>new Db(e),"PRIVATE")),gn(new tn("heartbeat",e=>new fC(e),"PRIVATE")),Nt(tu,Bf,t),Nt(tu,Bf,"esm2017"),Nt("fire-js","")}mC("");function Ch(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function N_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _C=N_,D_=new ji("auth","Firebase",N_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=new Zr("@firebase/auth");function ea(t,...e){Kf.logLevel<=me.ERROR&&Kf.error(`Auth (${Hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw Sh(t,...e)}function dn(t,...e){return Sh(t,...e)}function O_(t,e,n){const s=Object.assign(Object.assign({},_C()),{[e]:n});return new ji("auth","Firebase",s).create(e,{appName:t.name})}function yC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&mn(t,"argument-error"),O_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return D_.create(t,...e)}function X(t,e,...n){if(!t)throw Sh(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function Dn(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new Map;function Cn(t){Dn(t instanceof Function,"Expected a class definition");let e=Wf.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t,e){const n=Ih(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ma(r,e??{}))return i;mn(i,"already-initialized")}return n.initialize({options:e})}function wC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function EC(){return zf()==="http:"||zf()==="https:"}function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EC()||J0()||"connection"in navigator)?navigator.onLine:!0}function IC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Eh()||E_()}get(){return TC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=new eo(3e4,6e4);function SC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hc(t,e,n,s,i={}){return x_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Hi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),P_.fetch()(M_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function x_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},bC),e);try{const i=new AC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw xo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw xo(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw O_(t,u,l);mn(t,u)}}catch(i){if(i instanceof wn)throw i;mn(t,"internal-error",{message:String(i)})}}async function RC(t,e,n,s,i={}){const r=await hc(t,e,n,s,i);return"mfaPendingCredential"in r&&mn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function M_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Rh(t.config,i):`${t.config.apiScheme}://${i}`}class AC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(dn(this.auth,"network-request-failed")),CC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=dn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){return hc(t,"POST","/v1/accounts:delete",e)}async function NC(t,e){return hc(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DC(t,e=!1){const n=Ot(t),s=await n.getIdToken(e),i=Ah(s);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:_r(ul(i.auth_time)),issuedAtTime:_r(ul(i.iat)),expirationTime:_r(ul(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ul(t){return Number(t)*1e3}function Ah(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=pa(n);return i?JSON.parse(i):(ea("Failed to decode base64 JWT payload"),null)}catch(i){return ea("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function OC(t){const e=Ah(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof wn&&PC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function PC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_r(this.lastLoginAt),this.creationTime=_r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Fr(t,NC(n,{idToken:s}));X(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?FC(r.providerUserInfo):[],a=LC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new L_(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function MC(t){const e=Ot(t);await ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function FC(t){return t.map(e=>{var{providerId:n}=e,s=Ch(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(t,e){const n=await x_(t,{},async()=>{const s=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=M_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):OC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await UC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ur;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(X(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ur,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ds{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ch(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new L_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Fr(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DC(this,e)}reload(){return MC(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ds(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ya(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fr(this,kC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:F,isAnonymous:z,providerData:ce,stsTokenManager:Q}=n;X(R&&Q,e,"internal-error");const D=Ur.fromJSON(this.name,Q);X(typeof R=="string",e,"internal-error"),Bn(h,e.name),Bn(d,e.name),X(typeof F=="boolean",e,"internal-error"),X(typeof z=="boolean",e,"internal-error"),Bn(p,e.name),Bn(m,e.name),Bn(_,e.name),Bn(w,e.name),Bn(b,e.name),Bn(P,e.name);const ne=new Ds({uid:R,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:z,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:D,createdAt:b,lastLoginAt:P});return ce&&Array.isArray(ce)&&(ne.providerData=ce.map(ie=>Object.assign({},ie))),w&&(ne._redirectEventId=w),ne}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ur;i.updateFromServerResponse(n);const r=new Ds({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ya(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}F_.type="NONE";const Gf=F_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class hi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ta(this.userKey,i.apiKey,r),this.fullPersistenceKey=ta("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ds._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hi(Cn(Gf),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Cn(Gf);const o=ta(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ds._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new hi(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new hi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(j_(e))return"Blackberry";if(H_(e))return"Webos";if(kh(e))return"Safari";if((e.includes("chrome/")||V_(e))&&!e.includes("edge/"))return"Chrome";if(B_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function U_(t=yt()){return/firefox\//i.test(t)}function kh(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function V_(t=yt()){return/crios\//i.test(t)}function $_(t=yt()){return/iemobile/i.test(t)}function B_(t=yt()){return/android/i.test(t)}function j_(t=yt()){return/blackberry/i.test(t)}function H_(t=yt()){return/webos/i.test(t)}function dc(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VC(t=yt()){var e;return dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $C(){return Z0()&&document.documentMode===10}function q_(t=yt()){return dc(t)||B_(t)||H_(t)||j_(t)||/windows phone/i.test(t)||$_(t)}function BC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t,e=[]){let n;switch(t){case"Browser":n=Qf(yt());break;case"Worker":n=`${Qf(yt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yf(this),this.idTokenSubscription=new Yf(this),this.beforeStateQueue=new jC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=D_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await hi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ya(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ot(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=K_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function to(t){return Ot(t)}class Yf{constructor(e){this.auth=e,this.observer=null,this.addObserver=ab(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function qC(t,e,n){const s=to(t);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=W_(e),{host:o,port:a}=KC(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WC()}function W_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KC(t){const e=W_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Xf(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Xf(o)}}}function Xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e){return RC(t,"POST","/v1/accounts:signInWithIdp",SC(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="http://localhost";class Ls extends z_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ch(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ls(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:zC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Nh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends no{constructor(){super("facebook.com")}static credential(e){return Ls._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ls._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return zn.credential(n,s)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends no{constructor(){super("github.com")}static credential(e){return Ls._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends no{constructor(){super("twitter.com")}static credential(e,n){return Ls._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ds._fromIdTokenResponse(e,s,i),o=Jf(s);return new Ii({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Jf(s);return new Ii({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Jf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends wn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,va.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new va(e,n,s,i)}}function G_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?va._fromErrorAndOperation(t,r,e,s):r})}async function GC(t,e,n=!1){const s=await Fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ii._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Fr(t,G_(s,i,e,t),n);X(r.idToken,s,"internal-error");const o=Ah(r.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(t.uid===a,s,"user-mismatch"),Ii._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&mn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e,n=!1){const s="signIn",i=await G_(t,s,e),r=await Ii._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Q_(t,e,n,s){return Ot(t).onIdTokenChanged(e,n,s)}function XC(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}const wa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wa,"1"),this.storage.removeItem(wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(){const t=yt();return kh(t)||dc(t)}const ZC=1e3,eS=10;class X_ extends Y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JC()&&BC(),this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);$C()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ZC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}X_.type="LOCAL";const tS=X_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_ extends Y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}J_.type="SESSION";const Z_=J_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new fc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await nS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Dh("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function iS(t){fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function rS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aS(){return ey()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="firebaseLocalStorageDb",cS=1,Ea="firebaseLocalStorage",ny="fbase_key";class so{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pc(t,e){return t.transaction([Ea],e?"readwrite":"readonly").objectStore(Ea)}function lS(){const t=indexedDB.deleteDatabase(ty);return new so(t).toPromise()}function ru(){const t=indexedDB.open(ty,cS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ea,{keyPath:ny})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ea)?e(s):(s.close(),await lS(),e(await ru()))})})}async function Zf(t,e,n){const s=pc(t,!0).put({[ny]:e,value:n});return new so(s).toPromise()}async function uS(t,e){const n=pc(t,!1).get(e),s=await new so(n).toPromise();return s===void 0?null:s.value}function ep(t,e){const n=pc(t,!0).delete(e);return new so(n).toPromise()}const hS=800,dS=3;class sy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ru(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>dS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fc._getInstance(aS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rS(),!this.activeServiceWorker)return;this.sender=new sS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ru();return await Zf(e,wa,"1"),await ep(e,wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>uS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ep(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=pc(i,!1).getAll();return new so(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sy.type="LOCAL";const fS=sy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=dn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",pS().appendChild(s)})}function mS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new eo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t,e){return e?Cn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends z_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _S(t){return YC(t.auth,new Oh(t),t.bypassAuthState)}function yS(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),QC(n,new Oh(t),t.bypassAuthState)}async function vS(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),GC(n,new Oh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _S;case"linkViaPopup":case"linkViaRedirect":return vS;case"reauthViaPopup":case"reauthViaRedirect":return yS;default:mn(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new eo(2e3,1e4);class ii extends ry{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ii.currentPopupAction&&ii.currentPopupAction.cancel(),ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,wS.get())};e()}}ii.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="pendingRedirect",na=new Map;class TS extends ry{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const s=await IS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IS(t,e){const n=ay(e),s=oy(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}async function bS(t,e){return oy(t)._set(ay(e),"true")}function CS(t,e){na.set(t._key(),e)}function oy(t){return Cn(t._redirectPersistence)}function ay(t){return ta(ES,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(t,e,n){return SS(t,e,n)}async function SS(t,e,n){const s=to(t);yC(t,e,Nh),await s._initializationPromise;const i=iy(s,n);return await bS(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function LM(t,e){return await to(t)._initializationPromise,cy(t,e,!1)}async function cy(t,e,n=!1){const s=to(t),i=iy(s,e),o=await new TS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=10*60*1e3;class AS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ly(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RS&&this.cachedEventUids.clear(),this.cachedEventUids.has(tp(e))}saveEventToCache(e){this.cachedEventUids.add(tp(e)),this.lastProcessedEventTime=Date.now()}}function tp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ly({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ly(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t,e={}){return hc(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OS=/^https?/;async function PS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NS(t);for(const n of e)try{if(xS(n))return}catch{}mn(t,"unauthorized-domain")}function xS(t){const e=iu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!OS.test(n))return!1;if(DS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=new eo(3e4,6e4);function np(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LS(t){return new Promise((e,n)=>{var s,i,r;function o(){np(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{np(),n(dn(t,"network-request-failed"))},timeout:MS.get()})}if(!((i=(s=fn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=fn().gapi)===null||r===void 0)&&r.load)o();else{const a=mS("iframefcb");return fn()[a]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},gS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw sa=null,e})}let sa=null;function FS(t){return sa=sa||LS(t),sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new eo(5e3,15e3),VS="__/auth/iframe",$S="emulator/auth/iframe",BS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HS(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rh(e,$S):`https://${t.config.authDomain}/${VS}`,s={apiKey:e.apiKey,appName:t.name,v:Hs},i=jS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Hi(s).slice(1)}`}async function qS(t){const e=await FS(t),n=fn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:HS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),a=fn().setTimeout(()=>{r(o)},US.get());function c(){fn().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WS=500,zS=600,GS="_blank",QS="http://localhost";class sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YS(t,e,n,s=WS,i=zS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},KS),{width:s.toString(),height:i.toString(),top:r,left:o}),l=yt().toLowerCase();n&&(a=V_(l)?GS:n),U_(l)&&(e=e||QS,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(VC(l)&&a!=="_self")return XS(e||"",a),new sp(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new sp(h)}function XS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="__/auth/handler",ZS="emulator/auth/handler";function ip(t,e,n,s,i,r){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Hs,eventId:i};if(e instanceof Nh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof no){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${eR(t)}?${Hi(a).slice(1)}`}function eR({config:t}){return t.emulator?Rh(t,ZS):`https://${t.authDomain}/${JS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="webStorageSupport";class tR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z_,this._completeRedirectFn=cy,this._overrideRedirectResult=CS}async _openPopup(e,n,s,i){var r;Dn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=ip(e,n,s,iu(),i);return YS(e,o,Dh())}async _openRedirect(e,n,s,i){return await this._originValidation(e),iS(ip(e,n,s,iu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await qS(e),s=new AS(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hl,{type:hl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[hl];o!==void 0&&n(!!o),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q_()||kh()||dc()}}const nR=tR;var rp="@firebase/auth",op="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rR(t){gn(new tn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{X(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),X(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:K_(t)},u=new HC(a,c,l);return wC(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gn(new tn("auth-internal",e=>{const n=to(e.getProvider("auth").getImmediate());return(s=>new sR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(rp,op,iR(t)),Nt(rp,op,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=5*60,aR=w_("authIdTokenMaxAge")||oR;let ap=null;const cR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>aR)return;const i=n==null?void 0:n.token;ap!==i&&(ap=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lR(t=bh()){const e=Ih(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vC(t,{popupRedirectResolver:nR,persistence:[fS,tS,Z_]}),s=w_("authTokenSyncURL");if(s){const r=cR(s);XC(n,r,()=>r(n.currentUser)),Q_(n,o=>r(o))}const i=v_("auth");return i&&qC(n,`http://${i}`),n}rR("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=new Map,hR={activated:!1,tokenObservers:[]};function _n(t){return uR.get(t)||Object.assign({},hR)}const cp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new xr,await fR(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new xr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function fR(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ta=new ji("appCheck","AppCheck",pR);function gR(t){if(!_n(t).activated)throw Ta.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="firebase-app-check-database",_R=1,ou="firebase-app-check-store";let Mo=null;function yR(){return Mo||(Mo=new Promise((t,e)=>{try{const n=indexedDB.open(mR,_R);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Ta.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(ou,{keyPath:"compositeKey"})}}}catch(n){e(Ta.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Mo)}function vR(t,e){return wR(ER(t),e)}async function wR(t,e){const s=(await yR()).transaction(ou,"readwrite"),r=s.objectStore(ou).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var l;a(Ta.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function ER(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new Zr("@firebase/app-check");function lp(t,e){return I_()?vR(t,e).catch(n=>{au.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR={error:"UNKNOWN_ERROR"};function IR(t){return lc.encodeString(JSON.stringify(t),!1)}async function cu(t,e=!1){const n=t.app;gR(n);const s=_n(n);let i=s.token,r;if(i&&!lr(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(lr(c)?i=c:await lp(n,void 0))}if(!e&&i&&lr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await _n(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?au.warn(c.message):au.error(c),r=c}let a;return i?r?lr(i)?a={token:i.token,internalError:r}:a=hp(r):(a={token:i.token},s.token=i,await lp(n,i)):a=hp(r),o&&SR(n,a),a}function bR(t,e,n,s){const{app:i}=t,r=_n(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&lr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),up(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>up(t))}function uy(t,e){const n=_n(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function up(t){const{app:e}=t,n=_n(e);let s=n.tokenRefresher;s||(s=CR(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function CR(t){const{app:e}=t;return new dR(async()=>{const n=_n(e);let s;if(n.token?s=await cu(t,!0):s=await cu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=_n(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},cp.RETRIAL_MIN_WAIT,cp.RETRIAL_MAX_WAIT)}function SR(t,e){const n=_n(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function lr(t){return t.expireTimeMillis-Date.now()>0}function hp(t){return{token:IR(TR),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=_n(this.app);for(const n of e)uy(this.app,n.next);return Promise.resolve()}}function AR(t,e){return new RR(t,e)}function kR(t){return{getToken:e=>cu(t,e),addTokenListener:e=>bR(t,"INTERNAL",e),removeTokenListener:e=>uy(t.app,e)}}const NR="@firebase/app-check",DR="0.6.4",OR="app-check",dp="app-check-internal";function PR(){gn(new tn(OR,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return AR(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(dp).initialize()})),gn(new tn(dp,t=>{const e=t.getProvider("app-check").getImmediate();return kR(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Nt(NR,DR)}PR();var xR="firebase",MR="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(xR,MR,"app");const hy=Symbol("firebaseApp");function Ph(t){return _h()&&$t(hy,null)||bh(t)}const Lo=new WeakMap;function LR(t,e){if(!Lo.has(t)){const n=sh(!0);Lo.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Lo.delete(t)}}return Lo.get(t)}const dy=new WeakMap;function FR(t){return dy.get(Ph(t))}const Fo=new WeakMap;function UR(t){const e=Ph(t);if(!Fo.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{Fo.set(e,r),n(r.value)}];Fo.set(e,i)}return Fo.get(e)}function VR(t,e){const n=lR(e);Q_(n,s=>{const i=UR();t.value=s,Array.isArray(i)&&i[1](t)})}const fp="@firebase/database",pp="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fy="";function $R(t){fy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Mr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Fn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new BR(e)}}catch{}return new jR},Cs=py("localStorage"),lu=py("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Zr("@firebase/database"),HR=function(){let t=1;return function(){return t++}}(),gy=function(t){const e=hb(t),n=new ob;n.update(e);const s=n.digest();return lc.encodeByteArray(s)},io=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=io.apply(null,s):typeof s=="object"?e+=nt(s):e+=s,e+=" "}return e};let Os=null,gp=!0;const qR=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(fi.logLevel=me.VERBOSE,Os=fi.log.bind(fi),e&&lu.set("logging_enabled",!0)):typeof t=="function"?Os=t:(Os=null,lu.remove("logging_enabled"))},lt=function(...t){if(gp===!0&&(gp=!1,Os===null&&lu.get("logging_enabled")===!0&&qR(!0)),Os){const e=io.apply(null,t);Os(e)}},ro=function(t){return function(...e){lt(t,...e)}},uu=function(...t){const e="FIREBASE INTERNAL ERROR: "+io(...t);fi.error(e)},Fs=function(...t){const e=`FIREBASE FATAL ERROR: ${io(...t)}`;throw fi.error(e),new Error(e)},Dt=function(...t){const e="FIREBASE WARNING: "+io(...t);fi.warn(e)},KR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},my=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},WR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bi="[MIN_NAME]",Us="[MAX_NAME]",qi=function(t,e){if(t===e)return 0;if(t===bi||e===Us)return-1;if(e===bi||t===Us)return 1;{const n=mp(t),s=mp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},zR=function(t,e){return t===e?0:t<e?-1:1},nr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},xh=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=nt(e[s]),n+=":",n+=xh(t[e[s]]);return n+="}",n},_y=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yy=function(t){O(!my(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},GR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},QR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},YR=new RegExp("^-?(0*)\\d{1,10}$"),XR=-2147483648,JR=2147483647,mp=function(t){if(YR.test(t)){const e=Number(t);if(e>=XR&&e<=JR)return e}return null},oo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}class hu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="5",vy="v",wy="s",Ey="r",Ty="f",Iy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,by="ls",Cy="p",du="ac",Sy="websocket",Ry="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ay(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Sy)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ry)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sA(t)&&(n.ns=t.namespace);const i=[];return jt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.counters_={}}incrementCounter(e,n=1){Fn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return H0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl={},fl={};function Lh(t){const e=t.toString();return dl[e]||(dl[e]=new iA),dl[e]}function rA(t,e){const n=t.toString();return fl[n]||(fl[n]=e()),fl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&oo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="start",aA="close",cA="pLPCommand",lA="pRTLPCB",ky="id",Ny="pw",Dy="ser",uA="cb",hA="seg",dA="ts",fA="d",pA="dframe",Oy=1870,Py=30,gA=Oy-Py,mA=25e3,_A=3e4;class ri{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ro(e),this.stats_=Lh(n),this.urlFn=c=>(this.appCheckToken&&(c[du]=this.appCheckToken),Ay(n,Ry,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new oA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_A)),WR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fh((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_p)this.id=a,this.password=c;else if(o===aA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[_p]="t",s[Dy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[uA]=this.scriptTagHolder.uniqueCallbackIdentifier),s[vy]=Mh,this.transportSessionId&&(s[wy]=this.transportSessionId),this.lastSessionId&&(s[by]=this.lastSessionId),this.applicationId&&(s[Cy]=this.applicationId),this.appCheckToken&&(s[du]=this.appCheckToken),typeof location<"u"&&location.hostname&&Iy.test(location.hostname)&&(s[Ey]=Ty);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ri.forceAllow_=!0}static forceDisallow(){ri.forceDisallow_=!0}static isAvailable(){return ri.forceAllow_?!0:!ri.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!GR()&&!QR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=__(n),i=_y(s,gA);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[pA]="t",s[ky]=e,s[Ny]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fh{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=HR(),window[cA+this.uniqueCallbackIdentifier]=e,window[lA+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lt("frame writing exception"),a.stack&&lt(a.stack),lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ky]=this.myID,e[Ny]=this.myPW,e[Dy]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Py+s.length<=Oy;){const o=this.pendingSegs.shift();s=s+"&"+hA+i+"="+o.seg+"&"+dA+i+"="+o.ts+"&"+fA+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(mA)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=16384,vA=45e3;let Ia=null;typeof MozWebSocket<"u"?Ia=MozWebSocket:typeof WebSocket<"u"&&(Ia=WebSocket);class zt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ro(this.connId),this.stats_=Lh(n),this.connURL=zt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[vy]=Mh,typeof location<"u"&&location.hostname&&Iy.test(location.hostname)&&(o[Ey]=Ty),n&&(o[wy]=n),s&&(o[by]=s),i&&(o[du]=i),r&&(o[Cy]=r),Ay(e,Sy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cs.set("previous_websocket_failure",!0);try{let s;T_(),this.mySock=new Ia(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ia!==null&&!zt.forceDisallow_}static previouslyFailed(){return Cs.isInMemoryStorage||Cs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Mr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_y(n,yA);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zt.responsesRequiredToBeHealthy=2;zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ri,zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=zt&&zt.isAvailable();let s=n&&!zt.previouslyFailed();if(e.webSocketOnly&&(n||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[zt];else{const i=this.transports_=[];for(const r of Vr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Vr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=6e4,EA=5e3,TA=10*1024,IA=100*1024,pl="t",yp="d",bA="s",vp="r",CA="e",wp="o",Ep="a",Tp="n",Ip="p",SA="h";class RA{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ro("c:"+this.id+":"),this.transportManager_=new Vr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=yr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pl in e){const n=e[pl];n===Ep?this.upgradeIfSecondaryHealthy_():n===vp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===wp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=nr("t",e),s=nr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ip,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ep,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=nr("t",e),s=nr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=nr(pl,e);if(yp in e){const s=e[yp];if(n===SA){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Tp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bA?this.onConnectionShutdown_(s):n===vp?this.onReset_(s):n===CA?uu("Server Error: "+s):n===wp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mh!==s&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),yr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(EA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ip,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends My{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Eh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ba}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=32,Cp=768;class Pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Te(){return new Pe("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function as(t){return t.pieces_.length-t.pieceNum_}function Ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Pe(t.pieces_,e)}function Ly(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function AA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Fy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Uy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Pe(e,0)}function Ze(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Pe(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function Ut(t,e){const n=he(t),s=he(e);if(n===null)return e;if(n===s)return Ut(Ne(t),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Vy(t,e){if(as(t)!==as(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Qt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(as(t)>as(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class kA{constructor(e,n){this.errorPrefix_=n,this.parts_=Fy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=uc(this.parts_[s]);$y(this)}}function NA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=uc(e),$y(t)}function DA(t){const e=t.parts_.pop();t.byteLength_-=uc(e),t.parts_.length>0&&(t.byteLength_-=1)}function $y(t){if(t.byteLength_>Cp)throw new Error(t.errorPrefix_+"has a key path longer than "+Cp+" bytes ("+t.byteLength_+").");if(t.parts_.length>bp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bp+") or object contains a cycle "+ws(t))}function ws(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh extends My{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Uh}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=1e3,OA=60*5*1e3,Sp=30*1e3,PA=1.3,xA=3e4,MA="server_kill",Rp=3;class An extends xy{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=An.nextPersistentConnectionId_++,this.log_=ro("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=sr,this.maxReconnectDelay_=OA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!T_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ba.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(nt(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new xr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;An.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Fn(e,"w")){const s=Ti(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ib(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):uu("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xA&&(this.reconnectDelay_=sr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*PA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+An.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new RA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Dt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(MA)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Dt(h),c())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jl(this.interruptReasons_)&&(this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>xh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Pe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rp&&(this.reconnectDelay_=Sp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fy.replace(/\./g,"-")]=1,Eh()?e["framework.cordova"]=1:E_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ba.getInstance().currentlyOnline();return Jl(this.interruptReasons_)&&e}}An.nextPersistentConnectionId_=0;An.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new de(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new de(bi,e),i=new de(bi,n);return this.compare(s,i)!==0}minPost(){return de.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo;class By extends gc{static get __EMPTY_NODE(){return Uo}static set __EMPTY_NODE(e){Uo=e}compare(e,n){return qi(e.name,n.name)}isDefinedOn(e){throw Bi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return de.MIN}maxPost(){return new de(Us,Uo)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,Uo)}toString(){return".key"}}const pi=new By;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Je{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Je.RED,this.left=i??Ct.EMPTY_NODE,this.right=r??Ct.EMPTY_NODE}copy(e,n,s,i,r){return new Je(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class LA{copy(e,n,s,i,r){return this}insert(e,n,s){return new Je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vo(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new LA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t,e){return qi(t.name,e.name)}function Vh(t,e){return qi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu;function UA(t){fu=t}const jy=function(t){return typeof t=="number"?"number:"+yy(t):"string:"+t},Hy=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Fn(e,".sv"),"Priority must be a string or number.")}else O(t===fu||t.isEmpty(),"priority of unexpected type.");O(t===fu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ap;class Ye{constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hy(this.priorityNode_)}static set __childrenNodeConstructor(e){Ap=e}static get __childrenNodeConstructor(){return Ap}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:he(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=he(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||as(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yy(this.value_):e+=this.value_,this.lazyHash_=gy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ye.VALUE_TYPE_ORDER.indexOf(n),r=Ye.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+n),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qy,Ky;function VA(t){qy=t}function $A(t){Ky=t}class BA extends gc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?qi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return de.MIN}maxPost(){return new de(Us,new Ye("[PRIORITY-POST]",Ky))}makePost(e,n){const s=qy(e);return new de(n,new Ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const gt=new BA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=Math.log(2);class HA{constructor(e){const n=r=>parseInt(Math.log(r)/jA,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ca=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new Je(d,h.node,Je.BLACK,null,null);{const p=parseInt(u/2,10)+c,m=i(c,p),_=i(p+1,l);return h=t[p],d=n?n(h):h,new Je(d,h.node,Je.BLACK,m,_)}},r=function(c){let l=null,u=null,h=t.length;const d=function(m,_){const w=h-m,b=h;h-=m;const P=i(w+1,b),R=t[w],F=n?n(R):R;p(new Je(F,R.node,_,null,P))},p=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const _=c.nextBitIsOne(),w=Math.pow(2,c.count-(m+1));_?d(w,Je.BLACK):(d(w,Je.BLACK),d(w,Je.RED))}return u},o=new HA(t.length),a=r(o);return new Ct(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;const Js={};class Sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(Js&&gt,"ChildrenNode.ts has not been loaded"),gl=gl||new Sn({".priority":Js},{".priority":gt}),gl}get(e){const n=Ti(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return Fn(this.indexSet_,e.toString())}addIndex(e,n){O(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(de.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ca(s,e.getCompare()):a=Js;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Sn(u,l)}addToIndexes(e,n){const s=ga(this.indexes_,(i,r)=>{const o=Ti(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),i===Js)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(de.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ca(a,o.getCompare())}else return Js;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new de(e.name,a))),c.insert(e,e.node)}});return new Sn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ga(this.indexes_,i=>{if(i===Js)return i;{const r=n.get(e.name);return r?i.remove(new de(e.name,r)):i}});return new Sn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir;class ye{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Hy(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ir||(ir=new ye(new Ct(Vh),null,Sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ir}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ir:n}}getChild(e){const n=he(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new de(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ir:this.priorityNode_;return new ye(i,o,r)}}updateChild(e,n){const s=he(e);if(s===null)return n;{O(he(e)!==".priority"||as(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ne(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(gt,(o,a)=>{n[o]=a.val(e),s++,r&&ye.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+jy(this.getPriority().val())+":"),this.forEachChild(gt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gy(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new de(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new de(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new de(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,de.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ao?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(gt),i=n.getIterator(gt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qA extends ye{constructor(){super(new Ct(Vh),ye.EMPTY_NODE,Sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const ao=new qA;Object.defineProperties(de,{MIN:{value:new de(bi,ye.EMPTY_NODE)},MAX:{value:new de(Us,ao)}});By.__EMPTY_NODE=ye.EMPTY_NODE;Ye.__childrenNodeConstructor=ye;UA(ao);$A(ao);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=!0;function ut(t,e=null){if(t===null)return ye.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ye(n,ut(e))}if(!(t instanceof Array)&&KA){const n=[];let s=!1;if(jt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=ut(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new de(o,c)))}}),n.length===0)return ye.EMPTY_NODE;const r=Ca(n,FA,o=>o.name,Vh);if(s){const o=Ca(n,gt.getCompare());return new ye(r,ut(e),new Sn({".priority":o},{".priority":gt}))}else return new ye(r,ut(e),Sn.Default)}else{let n=ye.EMPTY_NODE;return jt(t,(s,i)=>{if(Fn(t,s)&&s.substring(0,1)!=="."){const r=ut(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ut(e))}}VA(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA extends gc{constructor(e){super(),this.indexPath_=e,O(!le(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?qi(e.name,n.name):r}makePost(e,n){const s=ut(e),i=ye.EMPTY_NODE.updateChild(this.indexPath_,s);return new de(n,i)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,ao);return new de(Us,e)}toString(){return Fy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA extends gc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?qi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,n){const s=ut(e);return new de(n,s)}toString(){return".value"}}const GA=new zA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){return{type:"value",snapshotNode:t}}function YA(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function XA(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function kp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function JA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=gt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bi}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Us}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===gt}copy(){const e=new $h;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Np(t){const e={};if(t.isDefault())return e;let n;if(t.index_===gt?n="$priority":t.index_===GA?n="$value":t.index_===pi?n="$key":(O(t.index_ instanceof WA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=nt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+nt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=nt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Dp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==gt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends xy{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ro("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Sa.getListenId_(e,s),a={};this.listens_[o]=a;const c=Np(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),Ti(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const s=Sa.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Np(e._queryParams),s=e._path.toString(),i=new xr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Mr(a.responseText)}catch{Dt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Dt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(){return{value:null,children:new Map}}function Wy(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=he(e);t.children.has(s)||t.children.set(s,Ra());const i=t.children.get(s);e=Ne(e),Wy(i,e,n)}}function pu(t,e,n){t.value!==null?n(e,t.value):ek(t,(s,i)=>{const r=new Pe(e.toString()+"/"+s);pu(i,r,n)})}function ek(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&jt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=10*1e3,nk=30*1e3,sk=5*60*1e3;class ik{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tk(e);const s=Op+(nk-Op)*Math.random();yr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;jt(e,(i,r)=>{r>0&&Fn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),yr(this.reportStats_.bind(this),Math.floor(Math.random()*2*sk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hn||(hn={}));function zy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=hn.ACK_USER_WRITE,this.source=zy()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Pe(e));return new Aa(Te(),n,this.revert)}}else return O(he(this.path)===e,"operationForChild called for unrelated child."),new Aa(Ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=hn.OVERWRITE}operationForChild(e){return le(this.path)?new Vs(this.source,Te(),this.snap.getImmediateChild(e)):new Vs(this.source,Ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=hn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Pe(e));return n.isEmpty()?null:n.value?new Vs(this.source,Te(),n.value):new $r(this.source,Te(),n)}else return O(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $r(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=he(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function rk(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(JA(o.childName,o.snapshotNode))}),rr(t,i,"child_removed",e,s,n),rr(t,i,"child_added",e,s,n),rr(t,i,"child_moved",r,s,n),rr(t,i,"child_changed",e,s,n),rr(t,i,"value",e,s,n),i}function rr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>ak(t,a,c)),o.forEach(a=>{const c=ok(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function ok(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ak(t,e,n){if(e.childName==null||n.childName==null)throw Bi("Should only compare child_ events.");const s=new de(e.childName,e.snapshotNode),i=new de(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e){return{eventCache:t,serverCache:e}}function vr(t,e,n,s){return Yy(new Bh(e,n,s),t.serverCache)}function Xy(t,e,n,s){return Yy(t.eventCache,new Bh(e,n,s))}function gu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $s(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml;const ck=()=>(ml||(ml=new Ct(zR)),ml);class Ae{constructor(e,n=ck()){this.value=e,this.children=n}static fromObject(e){let n=new Ae(null);return jt(e,(s,i)=>{n=n.set(new Pe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Te(),value:this.value};if(le(e))return null;{const s=he(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ne(e),n);return r!=null?{path:Ze(new Pe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=he(e),s=this.children.get(n);return s!==null?s.subtree(Ne(e)):new Ae(null)}}set(e,n){if(le(e))return new Ae(n,this.children);{const s=he(e),r=(this.children.get(s)||new Ae(null)).set(Ne(e),n),o=this.children.insert(s,r);return new Ae(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=he(e),s=this.children.get(n);if(s){const i=s.remove(Ne(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ae(null):new Ae(this.value,r)}else return this}}get(e){if(le(e))return this.value;{const n=he(e),s=this.children.get(n);return s?s.get(Ne(e)):null}}setTree(e,n){if(le(e))return n;{const s=he(e),r=(this.children.get(s)||new Ae(null)).setTree(Ne(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ae(this.value,o)}}fold(e){return this.fold_(Te(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ze(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Te(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(le(e))return null;{const r=he(e),o=this.children.get(r);return o?o.findOnPath_(Ne(e),Ze(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Te(),n)}foreachOnPath_(e,n,s){if(le(e))return this;{this.value&&s(n,this.value);const i=he(e),r=this.children.get(i);return r?r.foreachOnPath_(Ne(e),Ze(n,i),s):new Ae(null)}}foreach(e){this.foreach_(Te(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ze(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.writeTree_=e}static empty(){return new en(new Ae(null))}}function wr(t,e,n){if(le(e))return new en(new Ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ut(i,e);return r=r.updateChild(o,n),new en(t.writeTree_.set(i,r))}else{const i=new Ae(n),r=t.writeTree_.setTree(e,i);return new en(r)}}}function Pp(t,e,n){let s=t;return jt(n,(i,r)=>{s=wr(s,Ze(e,i),r)}),s}function xp(t,e){if(le(e))return en.empty();{const n=t.writeTree_.setTree(e,new Ae(null));return new en(n)}}function mu(t,e){return qs(t,e)!=null}function qs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ut(n.path,e)):null}function Mp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(gt,(s,i)=>{e.push(new de(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new de(s,i.value))}),e}function ns(t,e){if(le(e))return t;{const n=qs(t,e);return n!=null?new en(new Ae(n)):new en(t.writeTree_.subtree(e))}}function _u(t){return t.writeTree_.isEmpty()}function Ci(t,e){return Jy(Te(),t.writeTree_,e)}function Jy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Jy(Ze(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ze(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t,e){return iv(e,t)}function lk(t,e,n,s,i){O(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=wr(t.visibleWrites,e,n)),t.lastWriteId=s}function uk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function hk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&dk(a,s.path)?i=!1:Qt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return fk(t),!0;if(s.snap)t.visibleWrites=xp(t.visibleWrites,s.path);else{const a=s.children;jt(a,c=>{t.visibleWrites=xp(t.visibleWrites,Ze(s.path,c))})}return!0}else return!1}function dk(t,e){if(t.snap)return Qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qt(Ze(t.path,n),e))return!0;return!1}function fk(t){t.visibleWrites=ev(t.allWrites,pk,Te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pk(t){return t.visible}function ev(t,e,n){let s=en.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Qt(n,o)?(a=Ut(n,o),s=wr(s,a,r.snap)):Qt(o,n)&&(a=Ut(o,n),s=wr(s,Te(),r.snap.getChild(a)));else if(r.children){if(Qt(n,o))a=Ut(n,o),s=Pp(s,a,r.children);else if(Qt(o,n))if(a=Ut(o,n),le(a))s=Pp(s,Te(),r.children);else{const c=Ti(r.children,he(a));if(c){const l=c.getChild(Ne(a));s=wr(s,Te(),l)}}}else throw Bi("WriteRecord should have .snap or .children")}}return s}function tv(t,e,n,s,i){if(!s&&!i){const r=qs(t.visibleWrites,e);if(r!=null)return r;{const o=ns(t.visibleWrites,e);if(_u(o))return n;if(n==null&&!mu(o,Te()))return null;{const a=n||ye.EMPTY_NODE;return Ci(o,a)}}}else{const r=ns(t.visibleWrites,e);if(!i&&_u(r))return n;if(!i&&n==null&&!mu(r,Te()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(Qt(l.path,e)||Qt(e,l.path))},a=ev(t.allWrites,o,e),c=n||ye.EMPTY_NODE;return Ci(a,c)}}}function gk(t,e,n){let s=ye.EMPTY_NODE;const i=qs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(gt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ns(t.visibleWrites,e);return n.forEachChild(gt,(o,a)=>{const c=Ci(ns(r,new Pe(o)),a);s=s.updateImmediateChild(o,c)}),Mp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ns(t.visibleWrites,e);return Mp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function mk(t,e,n,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ze(e,n);if(mu(t.visibleWrites,r))return null;{const o=ns(t.visibleWrites,r);return _u(o)?i.getChild(n):Ci(o,i.getChild(n))}}function _k(t,e,n,s){const i=Ze(e,n),r=qs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ns(t.visibleWrites,i);return Ci(o,s.getNode().getImmediateChild(n))}else return null}function yk(t,e){return qs(t.visibleWrites,e)}function vk(t,e,n,s,i,r,o){let a;const c=ns(t.visibleWrites,e),l=qs(c,Te());if(l!=null)a=l;else if(n!=null)a=Ci(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function wk(){return{visibleWrites:en.empty(),allWrites:[],lastWriteId:-1}}function yu(t,e,n,s){return tv(t.writeTree,t.treePath,e,n,s)}function nv(t,e){return gk(t.writeTree,t.treePath,e)}function Lp(t,e,n,s){return mk(t.writeTree,t.treePath,e,n,s)}function ka(t,e){return yk(t.writeTree,Ze(t.treePath,e))}function Ek(t,e,n,s,i,r){return vk(t.writeTree,t.treePath,e,n,s,i,r)}function jh(t,e,n){return _k(t.writeTree,t.treePath,e,n)}function sv(t,e){return iv(Ze(t.treePath,e),t.writeTree)}function iv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,kp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,XA(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,YA(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,kp(s,e.snapshotNode,i.oldSnap));else throw Bi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const rv=new Ik;class Hh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Bh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jh(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$s(this.viewCache_),r=Ek(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function bk(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ck(t,e,n,s,i){const r=new Tk;let o,a;if(n.type===hn.OVERWRITE){const l=n;l.source.fromUser?o=vu(t,e,l.path,l.snap,s,i,r):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!le(l.path),o=Na(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===hn.MERGE){const l=n;l.source.fromUser?o=Rk(t,e,l.path,l.children,s,i,r):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=wu(t,e,l.path,l.children,s,i,a,r))}else if(n.type===hn.ACK_USER_WRITE){const l=n;l.revert?o=Nk(t,e,l.path,s,i,r):o=Ak(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===hn.LISTEN_COMPLETE)o=kk(t,e,n.path,s,r);else throw Bi("Unknown operation type: "+n.type);const c=r.getChanges();return Sk(e,o,c),{viewCache:o,changes:c}}function Sk(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=gu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(QA(gu(e)))}}function ov(t,e,n,s,i,r){const o=e.eventCache;if(ka(s,n)!=null)return e;{let a,c;if(le(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=$s(e),u=l instanceof ye?l:ye.EMPTY_NODE,h=nv(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=yu(s,$s(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=he(n);if(l===".priority"){O(as(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Lp(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ne(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Lp(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=jh(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return vr(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function Na(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(le(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),p,null)}else{const p=he(n);if(!c.isCompleteForPath(n)&&as(n)>1)return e;const m=Ne(n),w=c.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?l=u.updatePriority(c.getNode(),w):l=u.updateChild(c.getNode(),p,w,m,rv,null)}const h=Xy(e,l,c.isFullyInitialized()||le(n),u.filtersNodes()),d=new Hh(i,h,r);return ov(t,h,n,i,d,a)}function vu(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new Hh(i,e,r);if(le(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=vr(e,l,!0,t.filter.filtersNodes());else{const h=he(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=vr(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=Ne(n),p=a.getNode().getImmediateChild(h);let m;if(le(d))m=s;else{const _=u.getCompleteChild(h);_!=null?Ly(d)===".priority"&&_.getChild(Uy(d)).isEmpty()?m=_:m=_.updateChild(d,s):m=ye.EMPTY_NODE}if(p.equals(m))c=e;else{const _=t.filter.updateChild(a.getNode(),h,m,d,u,o);c=vr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Fp(t,e){return t.eventCache.isCompleteForChild(e)}function Rk(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=Ze(n,c);Fp(e,he(u))&&(a=vu(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=Ze(n,c);Fp(e,he(u))||(a=vu(t,a,u,l,i,r,o))}),a}function Up(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function wu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;le(n)?l=s:l=new Ae(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Up(t,p,d);c=Na(t,c,new Pe(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),_=Up(t,m,d);c=Na(t,c,new Pe(h),_,i,r,o,a)}}),c}function Ak(t,e,n,s,i,r,o){if(ka(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(le(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Na(t,e,n,c.getNode().getChild(n),i,r,a,o);if(le(n)){let l=new Ae(null);return c.getNode().forEachChild(pi,(u,h)=>{l=l.set(new Pe(u),h)}),wu(t,e,n,l,i,r,a,o)}else return e}else{let l=new Ae(null);return s.foreach((u,h)=>{const d=Ze(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),wu(t,e,n,l,i,r,a,o)}}function kk(t,e,n,s,i){const r=e.serverCache,o=Xy(e,r.getNode(),r.isFullyInitialized()||le(n),r.isFiltered());return ov(t,o,n,s,rv,i)}function Nk(t,e,n,s,i,r){let o;if(ka(s,n)!=null)return e;{const a=new Hh(s,e,i),c=e.eventCache.getNode();let l;if(le(n)||he(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=yu(s,$s(e));else{const h=e.serverCache.getNode();O(h instanceof ye,"serverChildren would be complete if leaf node"),u=nv(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=he(n);let h=jh(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Ne(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,ye.EMPTY_NODE,Ne(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yu(s,$s(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||ka(s,Te())!=null,vr(e,l,o,t.filter.filtersNodes())}}function Dk(t,e){const n=$s(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function Vp(t,e,n,s){e.type===hn.MERGE&&e.source.queryId!==null&&(O($s(t.viewCache_),"We should always have a full cache before handling merges"),O(gu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Ck(t.processor_,i,e,n,s);return bk(t.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ok(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Ok(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return rk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $p;function Pk(t){O(!$p,"__referenceConstructor has already been defined"),$p=t}function qh(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),Vp(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Vp(o,e,n,s));return r}}function Kh(t,e){let n=null;for(const s of t.views.values())n=n||Dk(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bp;function xk(t){O(!Bp,"__referenceConstructor has already been defined"),Bp=t}class jp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=wk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mk(t,e,n,s,i){return lk(t.pendingWriteTree_,e,n,s,i),i?_c(t,new Vs(zy(),e,n)):[]}function oi(t,e,n=!1){const s=uk(t.pendingWriteTree_,e);if(hk(t.pendingWriteTree_,e)){let r=new Ae(null);return s.snap!=null?r=r.set(Te(),!0):jt(s.children,o=>{r=r.set(new Pe(o),!0)}),_c(t,new Aa(s.path,r,n))}else return[]}function mc(t,e,n){return _c(t,new Vs(Gy(),e,n))}function Lk(t,e,n){const s=Ae.fromObject(n);return _c(t,new $r(Gy(),e,s))}function Fk(t,e,n,s){const i=uv(t,s);if(i!=null){const r=hv(i),o=r.path,a=r.queryId,c=Ut(o,e),l=new Vs(Qy(a),c,n);return dv(t,o,l)}else return[]}function Uk(t,e,n,s){const i=uv(t,s);if(i){const r=hv(i),o=r.path,a=r.queryId,c=Ut(o,e),l=Ae.fromObject(n),u=new $r(Qy(a),c,l);return dv(t,o,u)}else return[]}function av(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ut(o,e),l=Kh(a,c);if(l)return l});return tv(i,e,r,n,!0)}function _c(t,e){return cv(e,t.syncPointTree_,null,Zy(t.pendingWriteTree_,Te()))}function cv(t,e,n,s){if(le(t.path))return lv(t,e,n,s);{const i=e.get(Te());n==null&&i!=null&&(n=Kh(i,Te()));let r=[];const o=he(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=sv(s,o);r=r.concat(cv(a,c,l,u))}return i&&(r=r.concat(qh(i,t,s,n))),r}}function lv(t,e,n,s){const i=e.get(Te());n==null&&i!=null&&(n=Kh(i,Te()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=sv(s,o),u=t.operationForChild(o);u&&(r=r.concat(lv(u,a,c,l)))}),i&&(r=r.concat(qh(i,t,s,n))),r}function uv(t,e){return t.tagToQueryMap.get(e)}function hv(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Pe(t.substr(0,e))}}function dv(t,e,n){const s=t.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=Zy(t.pendingWriteTree_,e);return qh(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wh(n)}node(){return this.node_}}class zh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ze(this.path_,e);return new zh(this.syncTree_,n)}node(){return av(this.syncTree_,this.path_)}}const Vk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Hp=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return $k(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Bk(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},$k=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},Bk=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},jk=function(t,e,n,s){return Gh(e,new zh(n,t),s)},Hk=function(t,e,n){return Gh(t,new Wh(e),n)};function Gh(t,e,n){const s=t.getPriority().val(),i=Hp(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Hp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ye(a,ut(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ye(i))),o.forEachChild(gt,(a,c)=>{const l=Gh(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yh(t,e){let n=e instanceof Pe?e:new Pe(e),s=t,i=he(n);for(;i!==null;){const r=Ti(s.node.children,i)||{children:{},childCount:0};s=new Qh(i,s,r),n=Ne(n),i=he(n)}return s}function Ki(t){return t.node.value}function fv(t,e){t.node.value=e,Eu(t)}function pv(t){return t.node.childCount>0}function qk(t){return Ki(t)===void 0&&!pv(t)}function yc(t,e){jt(t.node.children,(n,s)=>{e(new Qh(n,t,s))})}function gv(t,e,n,s){n&&!s&&e(t),yc(t,i=>{gv(i,e,!0,s)}),n&&s&&e(t)}function Kk(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function co(t){return new Pe(t.parent===null?t.name:co(t.parent)+"/"+t.name)}function Eu(t){t.parent!==null&&Wk(t.parent,t.name,t)}function Wk(t,e,n){const s=qk(n),i=Fn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Eu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Eu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=/[\[\].#$\/\u0000-\u001F\u007F]/,Gk=/[\[\].#$\u0000-\u001F\u007F]/,_l=10*1024*1024,mv=function(t){return typeof t=="string"&&t.length!==0&&!zk.test(t)},Qk=function(t){return typeof t=="string"&&t.length!==0&&!Gk.test(t)},Yk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qk(t)},_v=function(t,e,n){const s=n instanceof Pe?new kA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ws(s));if(typeof e=="function")throw new Error(t+"contains a function "+ws(s)+" with contents = "+e.toString());if(my(e))throw new Error(t+"contains "+e.toString()+" "+ws(s));if(typeof e=="string"&&e.length>_l/3&&uc(e)>_l)throw new Error(t+"contains a string greater than "+_l+" utf8 bytes "+ws(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(jt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!mv(o)))throw new Error(t+" contains an invalid key ("+o+") "+ws(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);NA(s,o),_v(t,a,s),DA(s)}),i&&r)throw new Error(t+' contains ".value" child '+ws(s)+" in addition to actual children.")}},Xk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!mv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Yk(n))throw new Error(ub(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zk(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Vy(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ks(t,e,n){Zk(t,n),eN(t,s=>Qt(s,e)||Qt(e,s))}function eN(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(tN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Os&&lt("event: "+n.toString()),oo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN="repo_interrupt",sN=25;class iN{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ra(),this.transactionQueueTree_=new Qh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rN(t,e,n){if(t.stats_=Lh(t.repoInfo_),t.forceRestClient_||ZR())t.server_=new Sa(t.repoInfo_,(s,i,r,o)=>{qp(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Kp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new An(t.repoInfo_,e,(s,i,r,o)=>{qp(t,s,i,r,o)},s=>{Kp(t,s)},s=>{aN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=rA(t.repoInfo_,()=>new ik(t.stats_,t.server_)),t.infoData_=new ZA,t.infoSyncTree_=new jp({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=mc(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xh(t,"connected",!1),t.serverSyncTree_=new jp({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Ks(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function oN(t){const n=t.infoData_.getNode(new Pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yv(t){return Vk({timestamp:oN(t)})}function qp(t,e,n,s,i){t.dataUpdateCount++;const r=new Pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=ga(n,l=>ut(l));o=Uk(t.serverSyncTree_,r,c,i)}else{const c=ut(n);o=Fk(t.serverSyncTree_,r,c,i)}else if(s){const c=ga(n,l=>ut(l));o=Lk(t.serverSyncTree_,r,c)}else{const c=ut(n);o=mc(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Zh(t,r)),Ks(t.eventQueue_,a,o)}function Kp(t,e){Xh(t,"connected",e),e===!1&&lN(t)}function aN(t,e){jt(e,(n,s)=>{Xh(t,n,s)})}function Xh(t,e,n){const s=new Pe("/.info/"+e),i=ut(n);t.infoData_.updateSnapshot(s,i);const r=mc(t.infoSyncTree_,s,i);Ks(t.eventQueue_,s,r)}function cN(t){return t.nextWriteId_++}function lN(t){vv(t,"onDisconnectEvents");const e=yv(t),n=Ra();pu(t.onDisconnect_,Te(),(i,r)=>{const o=jk(i,r,t.serverSyncTree_,e);Wy(n,i,o)});let s=[];pu(n,Te(),(i,r)=>{s=s.concat(mc(t.serverSyncTree_,i,r));const o=fN(t,i);Zh(t,o)}),t.onDisconnect_=Ra(),Ks(t.eventQueue_,Te(),s)}function uN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nN)}function vv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function wv(t,e,n){return av(t.serverSyncTree_,e,n)||ye.EMPTY_NODE}function Jh(t,e=t.transactionQueueTree_){if(e||vc(t,e),Ki(e)){const n=Tv(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&hN(t,co(e),n)}else pv(e)&&yc(e,n=>{Jh(t,n)})}function hN(t,e,n){const s=n.map(l=>l.currentWriteId),i=wv(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ut(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{vv(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(oi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();vc(t,Yh(t.transactionQueueTree_,e)),Jh(t,t.transactionQueueTree_),Ks(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)oo(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Dt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}Zh(t,e)}},o)}function Zh(t,e){const n=Ev(t,e),s=co(n),i=Tv(t,n);return dN(t,i,s),s}function dN(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ut(n,c.path);let u=!1,h;if(O(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(oi(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=sN)u=!0,h="maxretry",i=i.concat(oi(t.serverSyncTree_,c.currentWriteId,!0));else{const d=wv(t,c.path,o);c.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){_v("transaction failed: Data returned ",p,c.path);let m=ut(p);typeof p=="object"&&p!=null&&Fn(p,".priority")||(m=m.updatePriority(d.getPriority()));const w=c.currentWriteId,b=yv(t),P=Hk(m,d,b);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=P,c.currentWriteId=cN(t),o.splice(o.indexOf(w),1),i=i.concat(Mk(t.serverSyncTree_,c.path,P,c.currentWriteId,c.applyLocally)),i=i.concat(oi(t.serverSyncTree_,w,!0))}else u=!0,h="nodata",i=i.concat(oi(t.serverSyncTree_,c.currentWriteId,!0))}Ks(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}vc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)oo(s[a]);Jh(t,t.transactionQueueTree_)}function Ev(t,e){let n,s=t.transactionQueueTree_;for(n=he(e);n!==null&&Ki(s)===void 0;)s=Yh(s,n),e=Ne(e),n=he(e);return s}function Tv(t,e){const n=[];return Iv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Iv(t,e,n){const s=Ki(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);yc(e,i=>{Iv(t,i,n)})}function vc(t,e){const n=Ki(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,fv(e,n.length>0?n:void 0)}yc(e,s=>{vc(t,s)})}function fN(t,e){const n=co(Ev(t,e)),s=Yh(t.transactionQueueTree_,e);return Kk(s,i=>{yl(t,i)}),yl(t,s),gv(s,i=>{yl(t,i)}),n}function yl(t,e){const n=Ki(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(oi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?fv(e,void 0):n.length=r+1,Ks(t.eventQueue_,co(e),i);for(let o=0;o<s.length;o++)oo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function gN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Wp=function(t,e){const n=mN(t),s=n.namespace;n.domain==="firebase.com"&&Fs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Fs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||KR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new nA(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Pe(n.pathString)}},mN=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=pN(t.substring(u,h)));const d=gN(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return le(this._path)?null:Ly(this._path)}get ref(){return new Wi(this._repo,this._path)}get _queryIdentifier(){const e=Dp(this._queryParams),n=xh(e);return n==="{}"?"default":n}get _queryObject(){return Dp(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof ed))return!1;const n=this._repo===e._repo,s=Vy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+AA(this._path)}}class Wi extends ed{constructor(e,n){super(e,n,new $h,!1)}get parent(){const e=Uy(this._path);return e===null?null:new Wi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Pk(Wi);xk(Wi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N="FIREBASE_DATABASE_EMULATOR_HOST",Tu={};let yN=!1;function vN(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Fs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Wp(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[_N]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Wp(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new hu(hu.OWNER):new tA(t.name,t.options,e);Xk("Invalid Firebase Database URL",o),le(o.path)||Fs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=EN(a,t,u,new eA(t.name,n));return new TN(h,t)}function wN(t,e){const n=Tu[e];(!n||n[t.key]!==t)&&Fs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),uN(t),delete n[t.key]}function EN(t,e,n,s){let i=Tu[e.name];i||(i={},Tu[e.name]=i);let r=i[t.toURLString()];return r&&Fs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new iN(t,yN,n,s),i[t.toURLString()]=r,r}class TN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wi(this._repo,Te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fs("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t){$R(Hs),gn(new tn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return vN(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Nt(fp,pp,t),Nt(fp,pp,"esm2017")}An.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};An.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};IN();var bN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,td=td||{},J=bN||self;function Da(){}function wc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function CN(t){return Object.prototype.hasOwnProperty.call(t,vl)&&t[vl]||(t[vl]=++SN)}var vl="closure_uid_"+(1e9*Math.random()>>>0),SN=0;function RN(t,e,n){return t.call.apply(t.bind,arguments)}function AN(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=RN:mt=AN,mt.apply(null,arguments)}function $o(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function hs(){this.s=this.s,this.o=this.o}var kN=0;hs.prototype.s=!1;hs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),kN!=0)&&CN(this)};hs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function nd(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function zp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(wc(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function _t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var NN=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",Da,e),J.removeEventListener("test",Da,e)}catch{}return t}();function Oa(t){return/^[\s\xa0]*$/.test(t)}var Gp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wl(t,e){return t<e?-1:t>e?1:0}function Ec(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function un(t){return Ec().indexOf(t)!=-1}function sd(t){return sd[" "](t),t}sd[" "]=Da;function DN(t){var e=xN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ON=un("Opera"),Si=un("Trident")||un("MSIE"),Cv=un("Edge"),Iu=Cv||Si,Sv=un("Gecko")&&!(Ec().toLowerCase().indexOf("webkit")!=-1&&!un("Edge"))&&!(un("Trident")||un("MSIE"))&&!un("Edge"),PN=Ec().toLowerCase().indexOf("webkit")!=-1&&!un("Edge");function Rv(){var t=J.document;return t?t.documentMode:void 0}var Pa;e:{var El="",Tl=function(){var t=Ec();if(Sv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cv)return/Edge\/([\d\.]+)/.exec(t);if(Si)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(PN)return/WebKit\/(\S+)/.exec(t);if(ON)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Tl&&(El=Tl?Tl[1]:""),Si){var Il=Rv();if(Il!=null&&Il>parseFloat(El)){Pa=String(Il);break e}}Pa=El}var xN={};function MN(){return DN(function(){let t=0;const e=Gp(String(Pa)).split("."),n=Gp("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=wl(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||wl(i[2].length==0,r[2].length==0)||wl(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var bu;if(J.document&&Si){var Qp=Rv();bu=Qp||parseInt(Pa,10)||void 0}else bu=void 0;var LN=bu;function Br(t,e){if(_t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sv){e:{try{sd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Br.X.h.call(this)}}ot(Br,_t);var FN={2:"touch",3:"pen",4:"mouse"};Br.prototype.h=function(){Br.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var uo="closure_listenable_"+(1e6*Math.random()|0),UN=0;function VN(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++UN,this.ba=this.ea=!1}function Tc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function id(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Av(t){const e={};for(const n in t)e[n]=t[n];return e}const Yp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kv(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Yp.length;r++)n=Yp[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ic(t){this.src=t,this.g={},this.h=0}Ic.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Su(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new VN(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Cu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=bv(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Tc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Su(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var rd="closure_lm_"+(1e6*Math.random()|0),bl={};function Nv(t,e,n,s,i){if(s&&s.once)return Ov(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Nv(t,e[r],n,s,i);return null}return n=cd(n),t&&t[uo]?t.N(e,n,lo(s)?!!s.capture:!!s,i):Dv(t,e,n,!1,s,i)}function Dv(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=lo(i)?!!i.capture:!!i,a=ad(t);if(a||(t[rd]=a=new Ic(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=$N(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)NN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(xv(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $N(){function t(n){return e.call(t.src,t.listener,n)}const e=BN;return t}function Ov(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ov(t,e[r],n,s,i);return null}return n=cd(n),t&&t[uo]?t.O(e,n,lo(s)?!!s.capture:!!s,i):Dv(t,e,n,!0,s,i)}function Pv(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Pv(t,e[r],n,s,i);else s=lo(s)?!!s.capture:!!s,n=cd(n),t&&t[uo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Su(r,n,s,i),-1<n&&(Tc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ad(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Su(e,n,s,i)),(n=-1<t?e[t]:null)&&od(n))}function od(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[uo])Cu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(xv(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ad(e))?(Cu(n,t),n.h==0&&(n.src=null,e[rd]=null)):Tc(t)}}}function xv(t){return t in bl?bl[t]:bl[t]="on"+t}function BN(t,e){if(t.ba)t=!0;else{e=new Br(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&od(t),t=n.call(s,e)}return t}function ad(t){return t=t[rd],t instanceof Ic?t:null}var Cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function cd(t){return typeof t=="function"?t:(t[Cl]||(t[Cl]=function(e){return t.handleEvent(e)}),t[Cl])}function et(){hs.call(this),this.i=new Ic(this),this.P=this,this.I=null}ot(et,hs);et.prototype[uo]=!0;et.prototype.removeEventListener=function(t,e,n,s){Pv(this,t,e,n,s)};function it(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new _t(e,t);else if(e instanceof _t)e.target=e.target||t;else{var i=e;e=new _t(s,t),kv(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Bo(o,s,!0,e)&&i}if(o=e.g=t,i=Bo(o,s,!0,e)&&i,i=Bo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Bo(o,s,!1,e)&&i}et.prototype.M=function(){if(et.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Tc(n[s]);delete t.g[e],t.h--}}this.I=null};et.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};et.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Bo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Cu(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var ld=J.JSON.stringify;function jN(){var t=Fv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HN{constructor(){this.h=this.g=null}add(e,n){const s=Mv.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Mv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new qN,t=>t.reset());class qN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KN(t){J.setTimeout(()=>{throw t},0)}function Lv(t,e){Ru||WN(),Au||(Ru(),Au=!0),Fv.add(t,e)}var Ru;function WN(){var t=J.Promise.resolve(void 0);Ru=function(){t.then(zN)}}var Au=!1,Fv=new HN;function zN(){for(var t;t=jN();){try{t.h.call(t.g)}catch(n){KN(n)}var e=Mv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Au=!1}function bc(t,e){et.call(this),this.h=t||1,this.g=e||J,this.j=mt(this.lb,this),this.l=Date.now()}ot(bc,et);B=bc.prototype;B.ca=!1;B.R=null;B.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),it(this,"tick"),this.ca&&(ud(this),this.start()))}};B.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ud(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}B.M=function(){bc.X.M.call(this),ud(this),delete this.g};function hd(t,e,n){if(typeof t=="function")n&&(t=mt(t,n));else if(t&&typeof t.handleEvent=="function")t=mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Uv(t){t.g=hd(()=>{t.g=null,t.i&&(t.i=!1,Uv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GN extends hs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Uv(this)}M(){super.M(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(t){hs.call(this),this.h=t,this.g={}}ot(jr,hs);var Xp=[];function Vv(t,e,n,s){Array.isArray(n)||(n&&(Xp[0]=n.toString()),n=Xp);for(var i=0;i<n.length;i++){var r=Nv(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function $v(t){id(t.g,function(e,n){this.g.hasOwnProperty(n)&&od(e)},t),t.g={}}jr.prototype.M=function(){jr.X.M.call(this),$v(this)};jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cc(){this.g=!0}Cc.prototype.Aa=function(){this.g=!1};function QN(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function YN(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ai(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+JN(t,n)+(s?" "+s:"")})}function XN(t,e){t.info(function(){return"TIMEOUT: "+e})}Cc.prototype.info=function(){};function JN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ld(n)}catch{return e}}var Ws={},Jp=null;function Sc(){return Jp=Jp||new et}Ws.Pa="serverreachability";function Bv(t){_t.call(this,Ws.Pa,t)}ot(Bv,_t);function Hr(t){const e=Sc();it(e,new Bv(e))}Ws.STAT_EVENT="statevent";function jv(t,e){_t.call(this,Ws.STAT_EVENT,t),this.stat=e}ot(jv,_t);function Tt(t){const e=Sc();it(e,new jv(e,t))}Ws.Qa="timingevent";function Hv(t,e){_t.call(this,Ws.Qa,t),this.size=e}ot(Hv,_t);function ho(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Rc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},qv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dd(){}dd.prototype.h=null;function Zp(t){return t.h||(t.h=t.i())}function Kv(){}var fo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function fd(){_t.call(this,"d")}ot(fd,_t);function pd(){_t.call(this,"c")}ot(pd,_t);var ku;function Ac(){}ot(Ac,dd);Ac.prototype.g=function(){return new XMLHttpRequest};Ac.prototype.i=function(){return{}};ku=new Ac;function po(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new jr(this),this.O=ZN,t=Iu?125:void 0,this.T=new bc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Wv}function Wv(){this.i=null,this.g="",this.h=!1}var ZN=45e3,Nu={},xa={};B=po.prototype;B.setTimeout=function(t){this.O=t};function Du(t,e,n){t.K=1,t.v=Nc(On(e)),t.s=n,t.P=!0,zv(t,null)}function zv(t,e){t.F=Date.now(),go(t),t.A=On(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),tw(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Wv,t.g=Tw(t.l,n?e:null,!t.s),0<t.N&&(t.L=new GN(mt(t.La,t,t.g),t.N)),Vv(t.S,t.g,"readystatechange",t.ib),e=t.H?Av(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Hr(),QN(t.j,t.u,t.A,t.m,t.U,t.s)}B.ib=function(t){t=t.target;const e=this.L;e&&Rn(t)==3?e.l():this.La(t)};B.La=function(t){try{if(t==this.g)e:{const u=Rn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Iu||this.g&&(this.h.h||this.g.fa()||sg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Hr(3):Hr(2)),kc(this);var n=this.g.aa();this.Y=n;t:if(Gv(this)){var s=sg(this.g);t="";var i=s.length,r=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ss(this),Er(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,YN(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oa(a)){var l=a;break t}}l=null}if(n=l)ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ou(this,n);else{this.i=!1,this.o=3,Tt(12),Ss(this),Er(this);break e}}this.P?(Qv(this,u,o),Iu&&this.i&&u==3&&(Vv(this.S,this.T,"tick",this.hb),this.T.start())):(ai(this.j,this.m,o,null),Ou(this,o)),u==4&&Ss(this),this.i&&!this.I&&(u==4?yw(this.l,this):(this.i=!1,go(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Tt(12)):(this.o=0,Tt(13)),Ss(this),Er(this)}}}catch{}finally{}};function Gv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Qv(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=eD(t,n),i==xa){e==4&&(t.o=4,Tt(14),s=!1),ai(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Nu){t.o=4,Tt(15),ai(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ai(t.j,t.m,i,null),Ou(t,i);Gv(t)&&i!=xa&&i!=Nu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ed(e),e.K=!0,Tt(11))):(ai(t.j,t.m,n,"[Invalid Chunked Response]"),Ss(t),Er(t))}B.hb=function(){if(this.g){var t=Rn(this.g),e=this.g.fa();this.C<e.length&&(kc(this),Qv(this,t,e),this.i&&t!=4&&go(this))}};function eD(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?xa:(n=Number(e.substring(n,s)),isNaN(n)?Nu:(s+=1,s+n>e.length?xa:(e=e.substr(s,n),t.C=s+n,e)))}B.cancel=function(){this.I=!0,Ss(this)};function go(t){t.V=Date.now()+t.O,Yv(t,t.O)}function Yv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ho(mt(t.gb,t),e)}function kc(t){t.B&&(J.clearTimeout(t.B),t.B=null)}B.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(XN(this.j,this.A),this.K!=2&&(Hr(),Tt(17)),Ss(this),this.o=2,Er(this)):Yv(this,this.V-t)};function Er(t){t.l.G==0||t.I||yw(t.l,t)}function Ss(t){kc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ud(t.T),$v(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ou(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Pu(n.h,t))){if(!t.J&&Pu(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fa(n),Pc(n);else break e;wd(n),Tt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ho(mt(n.cb,n),6e3));if(1>=iw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Rs(n,11)}else if((t.J||n.g==t)&&Fa(n),!Oa(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(gd(r,r.h),r.h=null))}if(s.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,xe(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Ew(s,s.H?s.ka:null,s.V),o.J){rw(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(kc(a),go(a)),s.g=o}else mw(s);0<n.i.length&&xc(n)}else l[0]!="stop"&&l[0]!="close"||Rs(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Rs(n,7):vd(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Hr(4)}catch{}}function tD(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(wc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function nD(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(wc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Xv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nD(t),s=tD(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Jv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ps(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ps){this.h=e!==void 0?e:t.h,Ma(this,t.j),this.s=t.s,this.g=t.g,La(this,t.m),this.l=t.l,e=t.i;var n=new qr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),eg(this,n),this.o=t.o}else t&&(n=String(t).match(Jv))?(this.h=!!e,Ma(this,n[1]||"",!0),this.s=ur(n[2]||""),this.g=ur(n[3]||"",!0),La(this,n[4]),this.l=ur(n[5]||"",!0),eg(this,n[6]||"",!0),this.o=ur(n[7]||"")):(this.h=!!e,this.i=new qr(null,this.h))}Ps.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hr(e,tg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(hr(e,tg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(hr(n,n.charAt(0)=="/"?oD:rD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hr(n,cD)),t.join("")};function On(t){return new Ps(t)}function Ma(t,e,n){t.j=n?ur(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function La(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function eg(t,e,n){e instanceof qr?(t.i=e,lD(t.i,t.h)):(n||(e=hr(e,aD)),t.i=new qr(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function Nc(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ur(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,iD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var tg=/[#\/\?@]/g,rD=/[#\?:]/g,oD=/[#\?]/g,aD=/[#\?@]/g,cD=/#/g;function qr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ds(t){t.g||(t.g=new Map,t.h=0,t.i&&sD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=qr.prototype;B.add=function(t,e){ds(this),this.i=null,t=zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zv(t,e){ds(t),e=zi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ew(t,e){return ds(t),e=zi(t,e),t.g.has(e)}B.forEach=function(t,e){ds(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};B.oa=function(){ds(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};B.W=function(t){ds(this);let e=[];if(typeof t=="string")ew(this,t)&&(e=e.concat(this.g.get(zi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return ds(this),this.i=null,t=zi(this,t),ew(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function tw(t,e,n){Zv(t,e),0<n.length&&(t.i=null,t.g.set(zi(t,e),nd(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lD(t,e){e&&!t.j&&(ds(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Zv(this,s),tw(this,i,n))},t)),t.j=e}var uD=class{constructor(e,n){this.h=e,this.g=n}};function nw(t){this.l=t||hD,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ga&&J.g.Ga()&&J.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hD=10;function sw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function iw(t){return t.h?1:t.g?t.g.size:0}function Pu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function gd(t,e){t.g?t.g.add(e):t.h=e}function rw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}nw.prototype.cancel=function(){if(this.i=ow(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ow(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return nd(t.i)}function md(){}md.prototype.stringify=function(t){return J.JSON.stringify(t,void 0)};md.prototype.parse=function(t){return J.JSON.parse(t,void 0)};function dD(){this.g=new md}function fD(t,e,n){const s=n||"";try{Xv(t,function(i,r){let o=i;lo(i)&&(o=ld(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function pD(t,e){const n=new Cc;if(J.Image){const s=new Image;s.onload=$o(jo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=$o(jo,n,s,"TestLoadImage: error",!1,e),s.onabort=$o(jo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=$o(jo,n,s,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function jo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function mo(t){this.l=t.ac||null,this.j=t.jb||!1}ot(mo,dd);mo.prototype.g=function(){return new Dc(this.l,this.j)};mo.prototype.i=function(t){return function(){return t}}({});function Dc(t,e){et.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_d,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(Dc,et);var _d=0;B=Dc.prototype;B.open=function(t,e){if(this.readyState!=_d)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Kr(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||J).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_o(this)),this.readyState=_d};B.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Kr(this)),this.g&&(this.readyState=3,Kr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;aw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function aw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}B.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_o(this):Kr(this),this.readyState==3&&aw(this)}};B.Va=function(t){this.g&&(this.response=this.responseText=t,_o(this))};B.Ua=function(t){this.g&&(this.response=t,_o(this))};B.ga=function(){this.g&&_o(this)};function _o(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Kr(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Kr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gD=J.JSON.parse;function Ue(t){et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cw,this.K=this.L=!1}ot(Ue,et);var cw="",mD=/^https?$/i,_D=["POST","PUT"];B=Ue.prototype;B.Ka=function(t){this.L=t};B.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ku.g(),this.C=this.u?Zp(this.u):Zp(ku),this.g.onreadystatechange=mt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){ng(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=J.FormData&&t instanceof J.FormData,!(0<=bv(_D,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hw(this),0<this.B&&((this.K=yD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.qa,this)):this.A=hd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ng(this,r)}};function yD(t){return Si&&MN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.qa=function(){typeof td<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function ng(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lw(t),Oc(t)}function lw(t){t.D||(t.D=!0,it(t,"complete"),it(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),Oc(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oc(this,!0)),Ue.X.M.call(this)};B.Ha=function(){this.s||(this.F||this.v||this.l?uw(this):this.fb())};B.fb=function(){uw(this)};function uw(t){if(t.h&&typeof td<"u"&&(!t.C[1]||Rn(t)!=4||t.aa()!=2)){if(t.v&&Rn(t)==4)hd(t.Ha,0,t);else if(it(t,"readystatechange"),Rn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Jv)[1]||null;if(!i&&J.self&&J.self.location){var r=J.self.location.protocol;i=r.substr(0,r.length-1)}s=!mD.test(i?i.toLowerCase():"")}n=s}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var o=2<Rn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",lw(t)}}finally{Oc(t)}}}}function Oc(t,e){if(t.g){hw(t);const n=t.g,s=t.C[0]?Da:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=s}catch{}}}function hw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}function Rn(t){return t.g?t.g.readyState:0}B.aa=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}};B.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gD(e)}};function sg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case cw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Ea=function(){return this.m};B.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dw(t){let e="";return id(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function yd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=dw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function or(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fw(t){this.Ca=0,this.i=[],this.j=new Cc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=or("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=or("baseRetryDelayMs",5e3,t),this.bb=or("retryDelaySeedMs",1e4,t),this.$a=or("forwardChannelMaxRetries",2,t),this.ta=or("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new nw(t&&t.concurrentRequestLimit),this.Fa=new dD,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}B=fw.prototype;B.ma=8;B.G=1;function vd(t){if(pw(t),t.G==3){var e=t.U++,n=On(t.F);xe(n,"SID",t.I),xe(n,"RID",e),xe(n,"TYPE","terminate"),yo(t,n),e=new po(t,t.j,e,void 0),e.K=2,e.v=Nc(On(n)),n=!1,J.navigator&&J.navigator.sendBeacon&&(n=J.navigator.sendBeacon(e.v.toString(),"")),!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=Tw(e.l,null),e.g.da(e.v)),e.F=Date.now(),go(e)}ww(t)}function Pc(t){t.g&&(Ed(t),t.g.cancel(),t.g=null)}function pw(t){Pc(t),t.u&&(J.clearTimeout(t.u),t.u=null),Fa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function xc(t){sw(t.h)||t.m||(t.m=!0,Lv(t.Ja,t),t.C=0)}function vD(t,e){return iw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ho(mt(t.Ja,t,e),vw(t,t.C)),t.C++,!0)}B.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new po(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Av(r),kv(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gw(this,i,e),n=On(this.F),xe(n,"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),yo(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(dw(r)))+"&"+e:this.o&&yd(n,this.o,r)),gd(this.h,i),this.Ya&&xe(n,"TYPE","init"),this.O?(xe(n,"$req",e),xe(n,"SID","null"),i.Z=!0,Du(i,n,null)):Du(i,n,e),this.G=2}}else this.G==3&&(t?ig(this,t):this.i.length==0||sw(this.h)||ig(this))};function ig(t,e){var n;e?n=e.m:n=t.U++;const s=On(t.F);xe(s,"SID",t.I),xe(s,"RID",n),xe(s,"AID",t.T),yo(t,s),t.o&&t.s&&yd(s,t.o,t.s),n=new po(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=gw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),gd(t.h,n),Du(n,s,e)}function yo(t,e){t.ia&&id(t.ia,function(n,s){xe(e,s,n)}),t.l&&Xv({},function(n,s){xe(e,s,n)})}function gw(t,e,n){n=Math.min(t.i.length,n);var s=t.l?mt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{fD(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function mw(t){t.g||t.u||(t.Z=1,Lv(t.Ia,t),t.A=0)}function wd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ho(mt(t.Ia,t),vw(t,t.A)),t.A++,!0)}B.Ia=function(){if(this.u=null,_w(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ho(mt(this.eb,this),t)}};B.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Tt(10),Pc(this),_w(this))};function Ed(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function _w(t){t.g=new po(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=On(t.sa);xe(e,"RID","rpc"),xe(e,"SID",t.I),xe(e,"CI",t.L?"0":"1"),xe(e,"AID",t.T),xe(e,"TYPE","xmlhttp"),yo(t,e),t.o&&t.s&&yd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Nc(On(e)),n.s=null,n.P=!0,zv(n,t)}B.cb=function(){this.v!=null&&(this.v=null,Pc(this),wd(this),Tt(19))};function Fa(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function yw(t,e){var n=null;if(t.g==e){Fa(t),Ed(t),t.g=null;var s=2}else if(Pu(t.h,e))n=e.D,rw(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Sc(),it(s,new Hv(s,n)),xc(t)}else mw(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&vD(t,e)||s==2&&wd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Rs(t,5);break;case 4:Rs(t,10);break;case 3:Rs(t,6);break;default:Rs(t,2)}}}function vw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Rs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=mt(t.kb,t);n||(n=new Ps("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Ma(n,"https"),Nc(n)),pD(n.toString(),s)}else Tt(2);t.G=0,t.l&&t.l.va(e),ww(t),pw(t)}B.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function ww(t){if(t.G=0,t.la=[],t.l){const e=ow(t.h);(e.length!=0||t.i.length!=0)&&(zp(t.la,e),zp(t.la,t.i),t.h.i.length=0,nd(t.i),t.i.length=0),t.l.ua()}}function Ew(t,e,n){var s=n instanceof Ps?On(n):new Ps(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),La(s,s.m);else{var i=J.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ps(null,void 0);s&&Ma(r,s),e&&(r.g=e),i&&La(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&xe(s,n,e),xe(s,"VER",t.ma),yo(t,s),s}function Tw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ue(new mo({jb:!0})):new Ue(t.ra),e.Ka(t.H),e}function Iw(){}B=Iw.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Ra=function(){};function Ua(){if(Si&&!(10<=Number(LN)))throw Error("Environmental error: no available transport.")}Ua.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){et.call(this),this.g=new fw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Oa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gi(this)}ot(Pt,et);Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Tt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ew(t,null,t.V),xc(t)};Pt.prototype.close=function(){vd(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ld(t),t=n);e.i.push(new uD(e.ab++,t)),e.G==3&&xc(e)};Pt.prototype.M=function(){this.g.l=null,delete this.j,vd(this.g),delete this.g,Pt.X.M.call(this)};function bw(t){fd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(bw,fd);function Cw(){pd.call(this),this.status=1}ot(Cw,pd);function Gi(t){this.g=t}ot(Gi,Iw);Gi.prototype.xa=function(){it(this.g,"a")};Gi.prototype.wa=function(t){it(this.g,new bw(t))};Gi.prototype.va=function(t){it(this.g,new Cw)};Gi.prototype.ua=function(){it(this.g,"b")};Ua.prototype.createWebChannel=Ua.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;Rc.NO_ERROR=0;Rc.TIMEOUT=8;Rc.HTTP_ERROR=6;qv.COMPLETE="complete";Kv.EventType=fo;fo.OPEN="a";fo.CLOSE="b";fo.ERROR="c";fo.MESSAGE="d";et.prototype.listen=et.prototype.N;Ue.prototype.listenOnce=Ue.prototype.O;Ue.prototype.getLastError=Ue.prototype.Oa;Ue.prototype.getLastErrorCode=Ue.prototype.Ea;Ue.prototype.getStatus=Ue.prototype.aa;Ue.prototype.getResponseJson=Ue.prototype.Sa;Ue.prototype.getResponseText=Ue.prototype.fa;Ue.prototype.send=Ue.prototype.da;Ue.prototype.setWithCredentials=Ue.prototype.Ka;var wD=function(){return new Ua},ED=function(){return Sc()},Sl=Rc,TD=qv,ID=Ws,rg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},bD=mo,Ho=Kv,CD=Ue;const og="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Zr("@firebase/firestore");function ag(){return Bs.logLevel}function j(t,...e){if(Bs.logLevel<=me.DEBUG){const n=e.map(Td);Bs.debug(`Firestore (${Qi}): ${t}`,...n)}}function Pn(t,...e){if(Bs.logLevel<=me.ERROR){const n=e.map(Td);Bs.error(`Firestore (${Qi}): ${t}`,...n)}}function xu(t,...e){if(Bs.logLevel<=me.WARN){const n=e.map(Td);Bs.warn(`Firestore (${Qi}): ${t}`,...n)}}function Td(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function Se(t,e){t||Y()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class RD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AD{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new ss;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ss,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ss)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Se(typeof s.accessToken=="string"),new Sw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new ct(e)}}class kD{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ND{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new kD(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OD{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.A=n.token,new DD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=PD(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function _e(t,e){return t<e?-1:t>e?1:0}function Ri(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ze(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new ze(0,0))}static max(){return new ee(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Wr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends Wr{construct(e,n,s){return new De(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const xD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Wr{construct(e,n,s){return new ft(e,n,s)}static isValidIdentifier(e){return xD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new V(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new V(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(De.fromString(e))}static fromName(e){return new q(De.fromString(e).popFirst(5))}static empty(){return new q(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new De(e.slice()))}}function MD(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(s===1e9?new ze(n+1,0):new ze(n,s));return new cs(i,q.empty(),e)}function LD(t){return new cs(t.readTime,t.key,-1)}class cs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new cs(ee.min(),q.empty(),-1)}static max(){return new cs(ee.max(),q.empty(),-1)}}function FD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==UD)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(i=>i?S.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new S((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new S((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function wo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Id.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class zr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Aw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return t==null}function Va(t){return t===0&&1/t==-1/0}function BD(t){return typeof t=="number"&&Number.isInteger(t)&&!Va(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new jD("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const HD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(t){if(Se(!!t),typeof t=="string"){let e=0;const n=HD.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ai(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nw(t){const e=t.mapValue.fields.__previous_value__;return kw(e)?Nw(e):e}function Gr(t){const e=ls(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function js(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kw(t)?4:qD(t)?9007199254740991:10:Y()}function yn(t,e){if(t===e)return!0;const n=js(t);if(n!==js(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gr(t).isEqual(Gr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ls(s.timestampValue),o=ls(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ai(s.bytesValue).isEqual(Ai(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=He(s.doubleValue),o=He(i.doubleValue);return r===o?Va(r)===Va(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ri(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(cg(r)!==cg(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!yn(r[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Qr(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=js(t),s=js(e);if(n!==s)return _e(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=He(i.integerValue||i.doubleValue),a=He(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return lg(t.timestampValue,e.timestampValue);case 4:return lg(Gr(t),Gr(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Ai(i),a=Ai(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=_e(o[c],a[c]);if(l!==0)return l}return _e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=_e(He(i.latitude),He(r.latitude));return o!==0?o:_e(He(i.longitude),He(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ki(o[c],a[c]);if(l)return l}return _e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===qo.mapValue&&r===qo.mapValue)return 0;if(i===qo.mapValue)return 1;if(r===qo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=_e(a[u],l[u]);if(h!==0)return h;const d=ki(o[a[u]],c[l[u]]);if(d!==0)return d}return _e(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Y()}}function lg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=ls(t),s=ls(e),i=_e(n.seconds,s.seconds);return i!==0?i:_e(n.nanos,s.nanos)}function Ni(t){return Mu(t)}function Mu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=ls(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ai(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Mu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Mu(s.fields[a])}`;return r+"}"}(t.mapValue):Y();var e,n}function ug(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Lu(t){return!!t&&"integerValue"in t}function bd(t){return!!t&&"arrayValue"in t}function hg(t){return!!t&&"nullValue"in t}function dg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ia(t){return!!t&&"mapValue"in t}function Tr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Tr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n){this.position=e,this.inclusive=n}}function fg(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=ki(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function pg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{}class Ke extends Dw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new WD(e,n,s):n==="array-contains"?new QD(e,s):n==="in"?new YD(e,s):n==="not-in"?new XD(e,s):n==="array-contains-any"?new JD(e,s):new Ke(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new zD(e,s):new GD(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ki(n,this.value)):n!==null&&js(this.value)===js(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class nn extends Dw{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new nn(e,n)}matches(e){return Ow(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ow(t){return t.op==="and"}function Pw(t){return KD(t)&&Ow(t)}function KD(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Fu(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Ni(t.value);if(Pw(t))return t.filters.map(e=>Fu(e)).join(",");{const e=t.filters.map(n=>Fu(n)).join(",");return`${t.op}(${e})`}}function xw(t,e){return t instanceof Ke?function(n,s){return s instanceof Ke&&n.op===s.op&&n.field.isEqual(s.field)&&yn(n.value,s.value)}(t,e):t instanceof nn?function(n,s){return s instanceof nn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&xw(r,s.filters[o]),!0):!1}(t,e):void Y()}function Mw(t){return t instanceof Ke?function(e){return`${e.field.canonicalString()} ${e.op} ${Ni(e.value)}`}(t):t instanceof nn?function(e){return e.op.toString()+" {"+e.getFilters().map(Mw).join(" ,")+"}"}(t):"Filter"}class WD extends Ke{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class zD extends Ke{constructor(e,n){super(e,"in",n),this.keys=Lw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GD extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=Lw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Lw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class QD extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bd(n)&&Qr(n.arrayValue,this.value)}}class YD extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qr(this.value.arrayValue,n)}}class XD extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qr(this.value.arrayValue,n)}}class JD extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Qr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ko(this.root,e,this.comparator,!0)}}class Ko{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??tt.RED,this.left=i??tt.EMPTY,this.right=r??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new tt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,i){return this}insert(t,e,n){return new tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gg(this.data.getIterator())}getIteratorFrom(e){return new gg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class gg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new Ge(ft.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ri(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ia(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tr(n)}setAll(e){let n=ft.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Tr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ia(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ia(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Yi(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Mt(Tr(this.value))}}function Fw(t){const e=[];return Yi(t.fields,(n,s)=>{const i=new ft([n]);if(ia(s)){const r=Fw(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ht(e,0,ee.min(),ee.min(),ee.min(),Mt.empty(),0)}static newFoundDocument(e,n,s,i){return new ht(e,1,n,ee.min(),s,i,0)}static newNoDocument(e,n){return new ht(e,2,n,ee.min(),ee.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ee.min(),ee.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function mg(t,e=null,n=[],s=[],i=null,r=null,o=null){return new eO(t,e,n,s,i,r,o)}function Cd(t){const e=te(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Fu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ni(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ni(s)).join(",")),e._t=n}return e._t}function Sd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pg(t.startAt,e.startAt)&&pg(t.endAt,e.endAt)}function Uu(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function tO(t,e,n,s,i,r,o,a){return new Eo(t,e,n,s,i,r,o,a)}function Uw(t){return new Eo(t)}function _g(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Rd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function $w(t){return t.collectionGroup!==null}function gi(t){const e=te(t);if(e.wt===null){e.wt=[];const n=Rd(e),s=Vw(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Ir(n)),e.wt.push(new Ir(ft.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ir(ft.keyField(),r))}}}return e.wt}function xn(t){const e=te(t);if(!e.gt)if(e.limitType==="F")e.gt=mg(e.path,e.collectionGroup,gi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of gi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ir(r.field,o))}const s=e.endAt?new $a(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new $a(e.startAt.position,e.startAt.inclusive):null;e.gt=mg(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function Vu(t,e){e.getFirstInequalityField(),Rd(t);const n=t.filters.concat([e]);return new Eo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $u(t,e,n){return new Eo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lc(t,e){return Sd(xn(t),xn(e))&&t.limitType===e.limitType}function Bw(t){return`${Cd(xn(t))}|lt:${t.limitType}`}function Bu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Mw(s)).join(", ")}]`),Mc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ni(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ni(s)).join(",")),`Target(${n})`}(xn(t))}; limitType=${t.limitType})`}function Fc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of gi(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=fg(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,gi(n),s)||n.endAt&&!function(i,r,o){const a=fg(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,gi(n),s))}(t,e)}function nO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jw(t){return(e,n)=>{let s=!1;for(const i of gi(t)){const r=sO(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function sO(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?ki(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Va(e)?"-0":e}}function qw(t){return{integerValue:""+t}}function iO(t,e){return BD(e)?qw(e):Hw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this._=void 0}}function rO(t,e,n){return t instanceof Ba?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Yr?Ww(t,e):t instanceof Xr?zw(t,e):function(s,i){const r=Kw(s,i),o=yg(r)+yg(s.It);return Lu(r)&&Lu(s.It)?qw(o):Hw(s.Tt,o)}(t,e)}function oO(t,e,n){return t instanceof Yr?Ww(t,e):t instanceof Xr?zw(t,e):n}function Kw(t,e){return t instanceof ja?Lu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ba extends Uc{}class Yr extends Uc{constructor(e){super(),this.elements=e}}function Ww(t,e){const n=Gw(e);for(const s of t.elements)n.some(i=>yn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Xr extends Uc{constructor(e){super(),this.elements=e}}function zw(t,e){let n=Gw(e);for(const s of t.elements)n=n.filter(i=>!yn(i,s));return{arrayValue:{values:n}}}class ja extends Uc{constructor(e,n){super(),this.Tt=e,this.It=n}}function yg(t){return He(t.integerValue||t.doubleValue)}function Gw(t){return bd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aO(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Yr&&s instanceof Yr||n instanceof Xr&&s instanceof Xr?Ri(n.elements,s.elements,yn):n instanceof ja&&s instanceof ja?yn(n.It,s.It):n instanceof Ba&&s instanceof Ba}(t.transform,e.transform)}class cO{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ra(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vc{}function Qw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xw(t.key,kn.none()):new To(t.key,t.data,kn.none());{const n=t.data,s=Mt.empty();let i=new Ge(ft.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new zs(t.key,s,new Yt(i.toArray()),kn.none())}}function lO(t,e,n){t instanceof To?function(s,i,r){const o=s.value.clone(),a=wg(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof zs?function(s,i,r){if(!ra(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=wg(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Yw(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function br(t,e,n,s){return t instanceof To?function(i,r,o,a){if(!ra(i.precondition,r))return o;const c=i.value.clone(),l=Eg(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof zs?function(i,r,o,a){if(!ra(i.precondition,r))return o;const c=Eg(i.fieldTransforms,a,r),l=r.data;return l.setAll(Yw(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ra(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function uO(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Kw(s.transform,i||null);r!=null&&(n===null&&(n=Mt.empty()),n.set(s.field,r))}return n||null}function vg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ri(n,s,(i,r)=>aO(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class To extends Vc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zs extends Vc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Yw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function wg(t,e,n){const s=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,oO(o,a,n[i]))}return s}function Eg(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,rO(r,o,e))}return s}class Xw extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hO extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,ue;function fO(t){switch(t){default:return Y();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Jw(t){if(t===void 0)return Pn("GRPC error has no .code"),T.UNKNOWN;switch(t){case je.OK:return T.OK;case je.CANCELLED:return T.CANCELLED;case je.UNKNOWN:return T.UNKNOWN;case je.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case je.INTERNAL:return T.INTERNAL;case je.UNAVAILABLE:return T.UNAVAILABLE;case je.UNAUTHENTICATED:return T.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case je.NOT_FOUND:return T.NOT_FOUND;case je.ALREADY_EXISTS:return T.ALREADY_EXISTS;case je.PERMISSION_DENIED:return T.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case je.ABORTED:return T.ABORTED;case je.OUT_OF_RANGE:return T.OUT_OF_RANGE;case je.UNIMPLEMENTED:return T.UNIMPLEMENTED;case je.DATA_LOSS:return T.DATA_LOSS;default:return Y()}}(ue=je||(je={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Aw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=new Qe(q.comparator);function Mn(){return pO}const Zw=new Qe(q.comparator);function dr(...t){let e=Zw;for(const n of t)e=e.insert(n.key,n);return e}function eE(t){let e=Zw;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function As(){return Cr()}function tE(){return Cr()}function Cr(){return new Xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const gO=new Qe(q.comparator),mO=new Ge(q.comparator);function ae(...t){let e=mO;for(const n of t)e=e.add(n);return e}const _O=new Ge(_e);function nE(){return _O}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Io.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new $c(ee.min(),i,nE(),Mn(),ae())}}class Io{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Io(s,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class sE{constructor(e,n){this.targetId=e,this.Rt=n}}class iE{constructor(e,n,s=vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Tg{constructor(){this.Pt=0,this.vt=bg(),this.bt=vt.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=ae(),n=ae(),s=ae();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Y()}}),new Io(this.bt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=bg()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class yO{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Mn(),this.Kt=Ig(),this.Gt=new Ge(_e)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(Uu(r))if(s===0){const o=new q(r.path);this.zt(n,o,ht.newNoDocument(o,ee.min()))}else Se(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Uu(a.target)){const c=new q(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,ht.newNoDocument(c,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=ae();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new $c(e,n,this.Gt,this.Ut,s);return this.Ut=Mn(),this.Kt=Ig(),this.Gt=new Ge(_e),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.$t(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new Tg,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Ge(_e),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Tg),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Ig(){return new Qe(q.comparator)}function bg(){return new Qe(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),EO=(()=>({and:"AND",or:"OR"}))();class TO{constructor(e,n){this.databaseId=e,this.yt=n}}function Ha(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rE(t,e){return t.yt?e.toBase64():e.toUint8Array()}function IO(t,e){return Ha(t,e.toTimestamp())}function pn(t){return Se(!!t),ee.fromTimestamp(function(e){const n=ls(e);return new ze(n.seconds,n.nanos)}(t))}function Ad(t,e){return function(n){return new De(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function oE(t){const e=De.fromString(t);return Se(uE(e)),e}function ju(t,e){return Ad(t.databaseId,e.path)}function Rl(t,e){const n=oE(e);if(n.get(1)!==t.databaseId.projectId)throw new V(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(aE(n))}function Hu(t,e){return Ad(t.databaseId,e)}function bO(t){const e=oE(t);return e.length===4?De.emptyPath():aE(e)}function qu(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aE(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cg(t,e,n){return{name:ju(t,e),fields:n.value.mapValue.fields}}function CO(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(Se(l===void 0||typeof l=="string"),vt.fromBase64String(l||"")):(Se(l===void 0||l instanceof Uint8Array),vt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:Jw(c.code);return new V(l,c.message||"")}(o);n=new iE(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Rl(t,s.document.name),r=pn(s.document.updateTime),o=s.document.createTime?pn(s.document.createTime):ee.min(),a=new Mt({mapValue:{fields:s.document.fields}}),c=ht.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new oa(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Rl(t,s.document),r=s.readTime?pn(s.readTime):ee.min(),o=ht.newNoDocument(i,r),a=s.removedTargetIds||[];n=new oa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Rl(t,s.document),r=s.removedTargetIds||[];n=new oa([],r,i,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new dO(i),o=s.targetId;n=new sE(o,r)}}return n}function SO(t,e){let n;if(e instanceof To)n={update:Cg(t,e.key,e.value)};else if(e instanceof Xw)n={delete:ju(t,e.key)};else if(e instanceof zs)n={update:Cg(t,e.key,e.data),updateMask:MO(e.fieldMask)};else{if(!(e instanceof hO))return Y();n={verify:ju(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ba)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Yr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ja)return{fieldPath:r.field.canonicalString(),increment:o.It};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:IO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function RO(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?pn(s.updateTime):pn(i);return r.isEqual(ee.min())&&(r=pn(i)),new cO(r,s.transformResults||[])}(n,e))):[]}function AO(t,e){return{documents:[Hu(t,e.path)]}}function kO(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Hu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return lE(nn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ti(u.field),direction:OO(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.yt||Mc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function NO(t){let e=bO(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Se(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=cE(u);return h instanceof nn&&Pw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ir(ni(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Mc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new $a(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new $a(d,h)}(n.endAt)),tO(e,i,o,r,a,"F",c,l)}function DO(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function cE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ni(e.unaryFilter.field);return Ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ni(e.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ni(e.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ni(e.unaryFilter.field);return Ke.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return Ke.create(ni(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return nn.create(e.compositeFilter.filters.map(n=>cE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function OO(t){return vO[t]}function PO(t){return wO[t]}function xO(t){return EO[t]}function ti(t){return{fieldPath:t.canonicalString()}}function ni(t){return ft.fromServerFormat(t.fieldPath)}function lE(t){return t instanceof Ke?function(e){if(e.op==="=="){if(dg(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NAN"}};if(hg(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(dg(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NOT_NAN"}};if(hg(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(e.field),op:PO(e.op),value:e.value}}}(t):t instanceof nn?function(e){const n=e.getFilters().map(s=>lE(s));return n.length===1?n[0]:{compositeFilter:{op:xO(e.op),filters:n}}}(t):Y()}function MO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&lO(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=br(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=br(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=tE();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Qw(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Ri(this.mutations,e.mutations,(n,s)=>vg(n,s))&&Ri(this.baseMutations,e.baseMutations,(n,s)=>vg(n,s))}}class kd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Se(e.mutations.length===s.length);let i=gO;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new kd(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,s,i,r=ee.min(),o=ee.min(),a=vt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new xs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new xs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new xs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this.oe=e}}function VO(t){const e=NO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$u(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(){this.Ze=new BO}addToCollectionParentIndex(e,n){return this.Ze.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(cs.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(cs.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class BO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Ge(De.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Ge(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new Di(0)}static Sn(){return new Di(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(){this.changes=new Xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&br(s.mutation,i,Yt.empty(),ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const i=As();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=dr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=As();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Mn();const o=Cr(),a=Cr();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof zs)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),br(u.mutation,l,u.mutation.getFieldMask(),ze.now())):o.set(l.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new HO(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Cr();let i=new Qe((o,a)=>o-a),r=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Yt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||ae()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=tE();u.forEach(d=>{if(!r.has(d)){const p=Qw(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$w(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):S.resolve(As());let a=-1,c=r;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,ae())).next(u=>({batchId:a,changes:eE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let i=dr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=dr();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const c=function(l,u){return new Eo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,ht.newInvalidDocument(l)))});let o=dr();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&br(l.mutation,c,Yt.empty(),ze.now()),Fc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return S.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:pn(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:VO(s.bundledQuery),readTime:pn(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(){this.overlays=new Qe(q.comparator),this.ss=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=As();return S.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const i=As(),r=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=As(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=As(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return S.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new FO(n,s));let r=this.ss.get(n);r===void 0&&(r=ae(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.rs=new Ge(Xe.os),this.us=new Ge(Xe.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Xe(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Xe(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new q(new De([])),s=new Xe(n,e),i=new Xe(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new q(new De([])),s=new Xe(n,e),i=new Xe(n,e+1);let r=ae();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Xe(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Xe{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return q.comparator(e.key,n.key)||_e(e.gs,n.gs)}static cs(e,n){return _e(e.gs,n.gs)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Ge(Xe.os)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LO(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Xe(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return S.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),S.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ge(_e);return n.forEach(i=>{const r=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),S.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;q.isDocumentKey(r)||(r=r.child(""));const o=new Xe(new q(r),0);let a=new Ge(_e);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),S.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return S.forEach(n.mutations,i=>{const r=new Xe(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}Pn(e){}containsKey(e,n){const s=new Xe(n,0),i=this.ps.firstAfterOrEqual(s);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.Rs=e,this.docs=new Qe(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let s=Mn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ht.newInvalidDocument(i))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Mn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||FD(LD(u),s)<=0||(i.has(u.key)||Fc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return S.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Y()}Ps(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new QO(this)}getSize(e){return S.resolve(this.size)}}class QO extends jO{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e){this.persistence=e,this.vs=new Xi(n=>Cd(n),Sd),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.bs=0,this.Vs=new Nd,this.targetCount=0,this.Ss=Di.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),S.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Di(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.xn(n),S.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(r).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Id(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new YO(this),this.indexManager=new $O,this.remoteDocumentCache=function(s){return new GO(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new UO(n),this.$s=new KO(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new zO(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const i=new JO(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Fs(e,n){return S.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class JO extends VD{constructor(e){super(),this.currentSequenceNumber=e}}class Dd{constructor(e){this.persistence=e,this.Bs=new Nd,this.Ls=null}static qs(e){return new Dd(e)}get Us(){if(this.Ls)return this.Ls;throw Y()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),S.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Us,s=>{const i=q.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,ee.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return S.or([()=>S.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=ae(),i=ae();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Od(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Fi(e,n))}Mi(e,n){if(_g(n))return S.resolve(null);let s=xn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$u(n,null,"F"),s=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ae(...r);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,$u(n,null,"F")):this.qi(e,l,n,c)}))})))}Oi(e,n,s,i){return _g(n)||i.isEqual(ee.min())?this.Fi(e,n):this.$i.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.Fi(e,n):(ag()<=me.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bu(n)),this.qi(e,o,n,MD(i,-1)))})}Bi(e,n){let s=new Ge(jw(e));return n.forEach((i,r)=>{Fc(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fi(e,n){return ag()<=me.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Bu(n)),this.$i.getDocumentsMatchingQuery(e,n,cs.min())}qi(e,n,s,i){return this.$i.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Qe(_e),this.Gi=new Xi(r=>Cd(r),Sd),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qO(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function tP(t,e,n,s){return new eP(t,e,n,s)}async function hE(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=ae();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function nP(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const _=c.docVersions.get(p);Se(_!==null),m.version.compareTo(_)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ae();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function dE(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function sP(t,e){const n=te(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(vt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,_,w){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let c=Mn(),l=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(iP(r,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(ee.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Ki=i,r))}function iP(t,e,n){let s=ae(),i=ae();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Mn();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function rP(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function oP(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,S.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new xs(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Ku(t,e,n){const s=te(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wo(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Sg(t,e,n){const s=te(t);let i=ee.min(),r=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=te(a),h=u.Gi.get(l);return h!==void 0?S.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?r:ae())).next(a=>(aP(s,nO(e),a),{documents:a,Yi:r})))}function aP(t,e,n){let s=t.Qi.get(e)||ee.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Rg{constructor(){this.activeTargetIds=nE()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cP{constructor(){this.Ur=new Rg,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Rg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo=null;function Al(){return Wo===null?Wo=268435456+Math.round(2147483648*Math.random()):Wo++,"0x"+Wo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class dP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=Al(),a=this.fo(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this._o(c,i,r),this.wo(e,a,c,s).then(l=>(j("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw xu("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Qi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=uP[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){const r=Al();return new Promise((o,a)=>{const c=new CD;c.setWithCredentials(!0),c.listenOnce(TD.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Sl.NO_ERROR:const u=c.getResponseJson();j(at,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Sl.TIMEOUT:j(at,`RPC '${e}' ${r} timed out`),a(new V(T.DEADLINE_EXCEEDED,"Request time out"));break;case Sl.HTTP_ERROR:const h=c.getStatus();if(j(at,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(_){const w=_.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(w)>=0?w:T.UNKNOWN}(p.status);a(new V(m,p.message))}else a(new V(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new V(T.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{j(at,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(i);j(at,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",l,s,15)})}yo(e,n,s){const i=Al(),r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wD(),a=ED(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new bD({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=r.join("");j(at,`Creating RPC '${e}' stream ${i}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new hP({Yr:_=>{d?j(at,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||(j(at,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),j(at,`RPC '${e}' stream ${i} sending:`,_),u.send(_))},Zr:()=>u.close()}),m=(_,w,b)=>{_.listen(w,P=>{try{b(P)}catch(R){setTimeout(()=>{throw R},0)}})};return m(u,Ho.EventType.OPEN,()=>{d||j(at,`RPC '${e}' stream ${i} transport opened.`)}),m(u,Ho.EventType.CLOSE,()=>{d||(d=!0,j(at,`RPC '${e}' stream ${i} transport closed`),p.oo())}),m(u,Ho.EventType.ERROR,_=>{d||(d=!0,xu(at,`RPC '${e}' stream ${i} transport errored:`,_),p.oo(new V(T.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ho.EventType.MESSAGE,_=>{var w;if(!d){const b=_.data[0];Se(!!b);const P=b,R=P.error||((w=P[0])===null||w===void 0?void 0:w.error);if(R){j(at,`RPC '${e}' stream ${i} received error:`,R);const F=R.status;let z=function(Q){const D=je[Q];if(D!==void 0)return Jw(D)}(F),ce=R.message;z===void 0&&(z=T.INTERNAL,ce="Unknown error status: "+F+" with message "+R.message),d=!0,p.oo(new V(z,ce)),u.close()}else j(at,`RPC '${e}' stream ${i} received:`,b),p.uo(b)}}),m(a,ID.STAT_EVENT,_=>{_.stat===rg.PROXY?j(at,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===rg.NOPROXY&&j(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.ro()},0),p}}function kl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t){return new TO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n,s,i,r,o,a,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new fE(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new V(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fP extends pE{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=CO(this.Tt,e),s=function(i){if(!("targetChange"in i))return ee.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?ee.min():r.readTime?pn(r.readTime):ee.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=qu(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=Uu(a)?{documents:AO(i,a)}:{query:kO(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=rE(i,r.resumeToken):r.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=Ha(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=DO(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=qu(this.Tt),n.removeTarget=e,this.qo(n)}}class pP extends pE{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=RO(e.writeResults,e.commitTime),s=pn(e.commitTime);return this.listener.eu(s,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=qu(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>SO(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new V(T.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(T.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(T.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class mP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Pn(n),this.cu=!1):j("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Gs(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=te(a);c.mu.add(4),await bo(c),c.pu.set("Unknown"),c.mu.delete(4),await jc(c)}(this))})}),this.pu=new mP(s,i)}}async function jc(t){if(Gs(t))for(const e of t.gu)await e(!0)}async function bo(t){for(const e of t.gu)await e(!1)}function gE(t,e){const n=te(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Md(n)?xd(n):Ji(n).Mo()&&Pd(n,e))}function mE(t,e){const n=te(t),s=Ji(n);n.wu.delete(e),s.Mo()&&_E(n,e),n.wu.size===0&&(s.Mo()?s.Bo():Gs(n)&&n.pu.set("Unknown"))}function Pd(t,e){t.Iu.Ot(e.targetId),Ji(t).Jo(e)}function _E(t,e){t.Iu.Ot(e),Ji(t).Yo(e)}function xd(t){t.Iu=new yO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Ji(t).start(),t.pu.au()}function Md(t){return Gs(t)&&!Ji(t).$o()&&t.wu.size>0}function Gs(t){return te(t).mu.size===0}function yE(t){t.Iu=void 0}async function yP(t){t.wu.forEach((e,n)=>{Pd(t,e)})}async function vP(t,e){yE(t),Md(t)?(t.pu.fu(e),xd(t)):t.pu.set("Unknown")}async function wP(t,e,n){if(t.pu.set("Online"),e instanceof iE&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await qa(t,s)}else if(e instanceof oa?t.Iu.Qt(e):e instanceof sE?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(ee.min()))try{const s=await dE(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(vt.EMPTY_BYTE_STRING,c.snapshotVersion)),_E(i,a);const l=new xs(c.target,a,1,c.sequenceNumber);Pd(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await qa(t,s)}}async function qa(t,e,n){if(!wo(e))throw e;t.mu.add(1),await bo(t),t.pu.set("Offline"),n||(n=()=>dE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await jc(t)})}function vE(t,e){return e().catch(n=>qa(t,n,e))}async function Hc(t){const e=te(t),n=us(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;EP(e);)try{const i=await rP(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,TP(e,i)}catch(i){await qa(e,i)}wE(e)&&EE(e)}function EP(t){return Gs(t)&&t._u.length<10}function TP(t,e){t._u.push(e);const n=us(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function wE(t){return Gs(t)&&!us(t).$o()&&t._u.length>0}function EE(t){us(t).start()}async function IP(t){us(t).su()}async function bP(t){const e=us(t);for(const n of t._u)e.tu(n.mutations)}async function CP(t,e,n){const s=t._u.shift(),i=kd.from(s,e,n);await vE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Hc(t)}async function SP(t,e){e&&us(t).Xo&&await async function(n,s){if(i=s.code,fO(i)&&i!==T.ABORTED){const r=n._u.shift();us(n).Fo(),await vE(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Hc(n)}var i}(t,e),wE(t)&&EE(t)}async function kg(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=Gs(n);n.mu.add(3),await bo(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await jc(n)}async function RP(t,e){const n=te(t);e?(n.mu.delete(2),await jc(n)):e||(n.mu.add(2),await bo(n),n.pu.set("Unknown"))}function Ji(t){return t.Tu||(t.Tu=function(e,n,s){const i=te(e);return i.ru(),new fP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:yP.bind(null,t),no:vP.bind(null,t),Ho:wP.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Md(t)?xd(t):t.pu.set("Unknown")):(await t.Tu.stop(),yE(t))})),t.Tu}function us(t){return t.Eu||(t.Eu=function(e,n,s){const i=te(e);return i.ru(),new pP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:IP.bind(null,t),no:SP.bind(null,t),nu:bP.bind(null,t),eu:CP.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await Hc(t)):(await t.Eu.stop(),t._u.length>0&&(j("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Ld(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fd(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),wo(t))return new V(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=dr(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new mi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new mi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.Au=new Qe(q.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):Y():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Oi{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Oi(e,n,mi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(){this.Pu=void 0,this.listeners=[]}}class kP{constructor(){this.queries=new Xi(e=>Bw(e),Lc),this.onlineState="Unknown",this.vu=new Set}}async function NP(t,e){const n=te(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new AP),i)try{r.Pu=await n.onListen(s)}catch(o){const a=Fd(o,`Initialization of query '${Bu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Pu&&e.Vu(r.Pu)&&Ud(n)}async function DP(t,e){const n=te(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function OP(t,e){const n=te(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.Pu=i}}s&&Ud(n)}function PP(t,e,n){const s=te(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ud(t){t.vu.forEach(e=>{e.next()})}class xP{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Oi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.key=e}}class IE{constructor(e){this.key=e}}class MP{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=ae(),this.mutatedKeys=ae(),this.ju=jw(e),this.zu=new mi(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Ng,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=Fc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?m!==_&&(s.track({type:3,doc:p}),w=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),w=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),w=!0):d&&!p&&(s.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new Oi(this.query,e.zu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Ng,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=ae(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new IE(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new TE(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=ae();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Oi.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class LP{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class FP{constructor(e){this.key=e,this.ic=!1}}class UP{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Xi(a=>Bw(a),Lc),this.uc=new Map,this.cc=new Set,this.ac=new Qe(q.comparator),this.hc=new Map,this.lc=new Nd,this.fc={},this.dc=new Map,this._c=Di.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function VP(t,e){const n=QP(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await oP(n.localStore,xn(e));n.isPrimaryClient&&gE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await $P(n,e,s,a==="current",o.resumeToken)}return i}async function $P(t,e,n,s,i){t.mc=(h,d,p)=>async function(m,_,w,b){let P=_.view.Hu(w);P.Li&&(P=await Sg(m.localStore,_.query,!1).then(({documents:z})=>_.view.Hu(z,P)));const R=b&&b.targetChanges.get(_.targetId),F=_.view.applyChanges(P,m.isPrimaryClient,R);return Og(m,_.targetId,F.tc),F.snapshot}(t,h,d,p);const r=await Sg(t.localStore,e,!0),o=new MP(e,r.Yi),a=o.Hu(r.documents),c=Io.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Og(t,n,l.tc);const u=new LP(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function BP(t,e){const n=te(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!Lc(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ku(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),mE(n.remoteStore,s.targetId),Wu(n,s.targetId)}).catch(vo)):(Wu(n,s.targetId),await Ku(n.localStore,s.targetId,!0))}async function jP(t,e,n){const s=YP(t);try{const i=await function(r,o){const a=te(r),c=ze.now(),l=o.reduce((d,p)=>d.add(p.key),ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Mn(),m=ae();return a.ji.getEntries(d,l).next(_=>{p=_,p.forEach((w,b)=>{b.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(_=>{u=_;const w=[];for(const b of o){const P=uO(b,u.get(b.key).overlayedDocument);P!=null&&w.push(new zs(b.key,P,Fw(P.value.mapValue),kn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(_=>{h=_;const w=_.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,_.batchId,w)})}).then(()=>({batchId:h.batchId,changes:eE(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new Qe(_e)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Co(s,i.changes),await Hc(s.remoteStore)}catch(i){const r=Fd(i,"Failed to persist write");n.reject(r)}}async function bE(t,e){const n=te(t);try{const s=await sP(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?Se(o.ic):i.removedDocuments.size>0&&(Se(o.ic),o.ic=!1))}),await Co(n,s,e)}catch(s){await vo(s)}}function Dg(t,e,n){const s=te(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=te(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Ud(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function HP(t,e,n){const s=te(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new Qe(q.comparator);o=o.insert(r,ht.newNoDocument(r,ee.min()));const a=ae().add(r),c=new $c(ee.min(),new Map,new Ge(_e),o,a);await bE(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),Vd(s)}else await Ku(s.localStore,e,!1).then(()=>Wu(s,e,n)).catch(vo)}async function qP(t,e){const n=te(t),s=e.batch.batchId;try{const i=await nP(n.localStore,e);SE(n,s,null),CE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Co(n,i)}catch(i){await vo(i)}}async function KP(t,e,n){const s=te(t);try{const i=await function(r,o){const a=te(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Se(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);SE(s,e,n),CE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Co(s,i)}catch(i){await vo(i)}}function CE(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function SE(t,e,n){const s=te(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function Wu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||RE(t,s)})}function RE(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(mE(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Vd(t))}function Og(t,e,n){for(const s of n)s instanceof TE?(t.lc.addReference(s.key,e),WP(t,s)):s instanceof IE?(j("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||RE(t,s.key)):Y()}function WP(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(j("SyncEngine","New document in limbo: "+n),t.cc.add(s),Vd(t))}function Vd(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new q(De.fromString(e)),s=t._c.next();t.hc.set(s,new FP(n)),t.ac=t.ac.insert(n,s),gE(t.remoteStore,new xs(xn(Uw(n.path)),s,2,Id.at))}}async function Co(t,e,n){const s=te(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Od.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=te(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!wo(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,r))}async function zP(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await hE(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new V(T.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Co(n,s.Wi)}}function GP(t,e){const n=te(t),s=n.hc.get(e);if(s&&s.ic)return ae().add(s.key);{let i=ae();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function QP(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HP.bind(null,e),e.rc.Ho=OP.bind(null,e.eventManager),e.rc.gc=PP.bind(null,e.eventManager),e}function YP(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KP.bind(null,e),e}class XP{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return tP(this.persistence,new ZO,e.initialUser,this.Tt)}Tc(e){return new XO(Dd.qs,this.Tt)}Ic(e){return new cP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Dg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zP.bind(null,this.syncEngine),await RP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kP}createDatastore(e){const n=Bc(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new dP(i));var i;return function(r,o,a,c){return new gP(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Dg(this.syncEngine,a,0),o=Ag.C()?new Ag:new lP,new _P(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new UP(s,i,r,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);j("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await bo(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=Rw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{j("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(j("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Fd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function tx(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await hE(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function nx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sx(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>kg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>kg(e.remoteStore,r)),t.onlineComponents=e}async function sx(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await tx(t,new XP)),t.offlineComponents}async function AE(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await nx(t,new JP)),t.onlineComponents}function ix(t){return AE(t).then(e=>e.syncEngine)}async function rx(t){const e=await AE(t),n=e.eventManager;return n.onListen=VP.bind(null,e.syncEngine),n.onUnlisten=BP.bind(null,e.syncEngine),n}function ox(t,e,n={}){const s=new ss;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new ZP({next:h=>{r.enqueueAndForget(()=>DP(i,u)),h.fromCache&&a.source==="server"?c.reject(new V(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new xP(o,l,{includeMetadataChanges:!0,$u:!0});return NP(i,u)}(await rx(t),t.asyncQueue,e,n,s)),s.promise}const Pg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t,e,n){if(!n)throw new V(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ax(t,e,n,s){if(e===!0&&s===!0)throw new V(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xg(t){if(!q.isDocumentKey(t))throw new V(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mg(t){if(q.isDocumentKey(t))throw new V(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ka(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qc(t);throw new V(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ax("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new SD;switch(n.type){case"gapi":const s=n.client;return new ND(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Pg.get(e);n&&(j("ComponentProvider","Removing Datastore"),Pg.delete(e),n.terminate())}(this),Promise.resolve()}}function cx(t,e,n,s={}){var i;const r=(t=Ka(t,Kc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&xu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ct.MOCK_USER;else{o=X0(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new V(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ct(c)}t._authCredentials=new RD(new Sw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Zi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Zi(this.firestore,e,this._query)}}class is extends Zi{constructor(e,n,s){super(e,n,Uw(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new q(e))}withConverter(e){return new is(this.firestore,e,this._path)}}function UM(t,e,...n){if(t=Ot(t),kE("collection","path",e),t instanceof Kc){const s=De.fromString(e,...n);return Mg(s),new is(t,null,s)}{if(!(t instanceof Bt||t instanceof is))throw new V(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return Mg(s),new is(t.firestore,null,s)}}function lx(t,e,...n){if(t=Ot(t),arguments.length===1&&(e=Rw.R()),kE("doc","path",e),t instanceof Kc){const s=De.fromString(e,...n);return xg(s),new Bt(t,null,new q(s))}{if(!(t instanceof Bt||t instanceof is))throw new V(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return xg(s),new Bt(t.firestore,t instanceof is?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new fE(this,"async_queue_retry"),this.Hc=()=>{const n=kl();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=kl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=kl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new ss;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!wo(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Pn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Ld.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&Y()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class $d extends Kc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new ux,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||DE(this),this._firestoreClient.terminate()}}function hx(t,e){const n=typeof t=="object"?t:bh(),s=typeof t=="string"?t:e||"(default)",i=Ih(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Q0("firestore");r&&cx(i,...r)}return i}function NE(t){return t._firestoreClient||DE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function DE(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new $D(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ex(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pi(vt.fromBase64String(e))}catch(n){throw new V(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pi(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=/^__.*__$/;class fx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new zs(e,this.data,this.fieldMask,n,this.fieldTransforms):new To(e,this.data,n,this.fieldTransforms)}}function PE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Hd{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Hd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Wa(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(PE(this.ra)&&dx.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class px{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Bc(e)}wa(e,n,s,i=!1){return new Hd({ra:e,methodName:n,_a:s,path:ft.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function xE(t){const e=t._freezeSettings(),n=Bc(t._databaseId);return new px(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gx(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);FE("Data must be an object, but it was:",o,s);const a=ME(s,o);let c,l;if(r.merge)c=new Yt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=_x(e,h,n);if(!o.contains(d))throw new V(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vx(u,d)||u.push(d)}c=new Yt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new fx(new Mt(a),c,l)}function mx(t,e,n,s=!1){return qd(n,t.wa(s?4:3,e))}function qd(t,e){if(LE(t=Ot(t)))return FE("Unsupported field value:",e,t),ME(t,e);if(t instanceof OE)return function(n,s){if(!PE(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=qd(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return iO(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ze.fromDate(n);return{timestampValue:Ha(s.Tt,i)}}if(n instanceof ze){const i=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ha(s.Tt,i)}}if(n instanceof jd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pi)return{bytesValue:rE(s.Tt,n._byteString)};if(n instanceof Bt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ad(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${qc(n)}`)}(t,e)}function ME(t,e){const n={};return Aw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(t,(s,i)=>{const r=qd(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function LE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof jd||t instanceof Pi||t instanceof Bt||t instanceof OE)}function FE(t,e,n){if(!LE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=qc(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function _x(t,e,n){if((e=Ot(e))instanceof Bd)return e._internalPath;if(typeof e=="string")return UE(t,e);throw Wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const yx=new RegExp("[~\\*/\\[\\]]");function UE(t,e,n){if(e.search(yx)>=0)throw Wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bd(...e.split("."))._internalPath}catch{throw Wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wa(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new V(T.INVALID_ARGUMENT,a+t+c)}function vx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wx extends VE{data(){return super.data()}}function Kd(t,e){return typeof e=="string"?UE(t,e):e instanceof Bd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wd{}class Tx extends Wd{}function VM(t,e,...n){let s=[];e instanceof Wd&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof zd).length,o=i.filter(a=>a instanceof Wc).length;if(r>1||r>0&&o>0)throw new V(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class Wc extends Tx{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Wc(e,n,s)}_apply(e){const n=this._parse(e);return $E(e._query,n),new Zi(e.firestore,e.converter,Vu(e._query,n))}_parse(e){const n=xE(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new V(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ug(u,l);const d=[];for(const p of u)d.push(Fg(a,i,p));h={arrayValue:{values:d}}}else h=Fg(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ug(u,l),h=mx(o,r,u,l==="in"||l==="not-in");return Ke.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $M(t,e,n){const s=e,i=Kd("where",t);return Wc._create(i,s,n)}class zd extends Wd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zd(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)$E(r,a),r=Vu(r,a)}(e._query,n),new Zi(e.firestore,e.converter,Vu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Fg(t,e,n){if(typeof(n=Ot(n))=="string"){if(n==="")throw new V(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$w(e)&&n.indexOf("/")!==-1)throw new V(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(De.fromString(n));if(!q.isDocumentKey(s))throw new V(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ug(t,new q(s))}if(n instanceof Bt)return ug(t,n._key);throw new V(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qc(n)}.`)}function Ug(t,e){if(!Array.isArray(t)||t.length===0)throw new V(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $E(t,e){if(e.isInequality()){const s=Rd(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new V(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Vw(t);r!==null&&Ix(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Ix(t,e,n){if(!n.isEqual(e))throw new V(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class bx{convertValue(e,n="none"){switch(js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const s={};return Yi(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new jd(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Nw(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Gr(e));default:return null}}convertTimestamp(e){const n=ls(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=De.fromString(e);Se(uE(s));const i=new zr(s.get(1),s.get(3)),r=new q(s.popFirst(5));return i.isEqual(n)||Pn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sx extends VE{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Kd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class aa extends Sx{data(e={}){return super.data(e)}}class Rx{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zo(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new aa(this._firestore,this._userDataWriter,s.key,s,new zo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new aa(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new aa(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:Ax(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ax(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class kx extends bx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function BM(t){t=Ka(t,Zi);const e=Ka(t.firestore,$d),n=NE(e),s=new kx(e);return Ex(t._query),ox(n,t._query).then(i=>new Rx(e,s,t,i))}function jM(t,e){const n=Ka(t.firestore,$d),s=lx(t),i=Cx(t.converter,e);return Nx(n,[gx(xE(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,kn.exists(!1))]).then(()=>s)}function Nx(t,e){return function(n,s){const i=new ss;return n.asyncQueue.enqueueAndForget(async()=>jP(await ix(n),s,i)),i.promise}(NE(t),e)}(function(t,e=!0){(function(n){Qi=n})(Hs),gn(new tn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new $d(new AD(n.getProvider("auth-internal")),new OD(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new V(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zr(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Nt(og,"3.9.0",t),Nt(og,"3.9.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="firebasestorage.googleapis.com",Dx="storageBucket",Ox=2*60*1e3,Px=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends wn{constructor(e,n,s=0){super(Nl(e),`Firebase Storage: ${n} (${Nl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,En.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vn||(vn={}));function Nl(t){return"storage/"+t}function xx(){const t="An unknown error occurred, please check the error payload for server response.";return new En(vn.UNKNOWN,t)}function Mx(){return new En(vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Lx(){return new En(vn.CANCELED,"User canceled the upload/download.")}function Fx(t){return new En(vn.INVALID_URL,"Invalid URL '"+t+"'.")}function Ux(t){return new En(vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Vg(t){return new En(vn.INVALID_ARGUMENT,t)}function jE(){return new En(vn.APP_DELETED,"The Firebase app was deleted.")}function Vx(t){return new En(vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(s.path==="")return s;throw Ux(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(F){F.path_=decodeURIComponent(F.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},_=n===BE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",b=new RegExp(`^https?://${_}/${i}/${w}`,"i"),R=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let F=0;F<R.length;F++){const z=R[F],ce=z.regex.exec(e);if(ce){const Q=ce[z.indices.bucket];let D=ce[z.indices.path];D||(D=""),s=new Xt(Q,D),z.postModify(s);break}}if(s==null)throw Fx(e);return s}}class $x{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,c())},w)}function d(){r&&clearTimeout(r)}function p(w,...b){if(l){d();return}if(w){d(),u.call(null,w,...b);return}if(c()||o){d(),u.call(null,w,...b);return}s<64&&(s*=2);let R;a===1?(a=2,R=0):R=(s+Math.random())*1e3,h(R)}let m=!1;function _(w){m||(m=!0,d(),!l&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function jx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t){return t!==void 0}function $g(t,e,n,s){if(s<e)throw Vg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Vg(`Invalid value for '${t}'. Expected ${n} or less.`)}function qx(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var za;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(za||(za={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Go(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===za.NO_ERROR,c=r.getStatus();if(!a||Kx(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===za.ABORT;s(!1,new Go(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Go(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Hx(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=xx();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?jE():Lx();o(c)}else{const c=Mx();o(c)}};this.canceled_?n(!1,new Go(!1,null,!0)):this.backoffId_=Bx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Go{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function zx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Gx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Qx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Yx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Xx(t,e,n,s,i,r,o=!0){const a=qx(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Qx(l,e),zx(l,n),Gx(l,r),Yx(l,s),new Wx(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Zx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ga(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zx(this._location.path)}get storage(){return this._service}get parent(){const e=Jx(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new Ga(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Vx(e)}}function Bg(t,e){const n=e==null?void 0:e[Dx];return n==null?null:Xt.makeFromBucketSpec(n,t)}class e1{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=BE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ox,this._maxUploadRetryTime=Px,this._requests=new Set,i!=null?this._bucket=Xt.makeFromBucketSpec(i,this._host):this._bucket=Bg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=Bg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$g("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$g("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ga(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new $x(jE());{const o=Xx(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const jg="@firebase/storage",Hg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="storage";function n1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new e1(n,s,i,e,Hs)}function s1(){gn(new tn(t1,n1,"PUBLIC").setMultipleInstances(!0)),Nt(jg,Hg,""),Nt(jg,Hg,"esm2017")}s1();function HM(t){return hx(Ph(t))}function i1(t){return(e,n)=>{const s=LR(e,n).run(()=>cn(t));dy.set(e,s),VR(s,e)}}function r1(t,{firebaseApp:e,modules:n=[]}){t.provide(hy,e);for(const s of n)t.use(s.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const si=typeof window<"u";function o1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Dl(t,e){const n={};for(const s in e){const i=e[s];n[s]=sn(i)?i.map(t):t(i)}return n}const Sr=()=>{},sn=Array.isArray,a1=/\/$/,c1=t=>t.replace(a1,"");function Ol(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=d1(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function l1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function u1(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&xi(e.matched[s],n.matched[i])&&HE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function HE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!h1(t[n],e[n]))return!1;return!0}function h1(t,e){return sn(t)?Kg(t,e):sn(e)?Kg(e,t):t===e}function Kg(t,e){return sn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function d1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Jr;(function(t){t.pop="pop",t.push="push"})(Jr||(Jr={}));var Rr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Rr||(Rr={}));function f1(t){if(!t)if(si){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),c1(t)}const p1=/^[^#]+#/;function g1(t,e){return t.replace(p1,"#")+e}function m1(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const zc=()=>({left:window.pageXOffset,top:window.pageYOffset});function _1(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=m1(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wg(t,e){return(history.state?history.state.position-e:-1)+t}const zu=new Map;function y1(t,e){zu.set(t,e)}function v1(t){const e=zu.get(t);return zu.delete(t),e}let w1=()=>location.protocol+"//"+location.host;function qE(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),qg(c,"")}return qg(n,t)+s+i}function E1(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=qE(t,location),m=n.value,_=e.value;let w=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}w=_?d.position-_.position:0}else s(p);i.forEach(b=>{b(n.value,m,{delta:w,type:Jr.pop,direction:w?w>0?Rr.forward:Rr.back:Rr.unknown})})};function c(){o=n.value}function l(d){i.push(d);const p=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ve({},d.state,{scroll:zc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function zg(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?zc():null}}function T1(t){const{history:e,location:n}=window,s={value:qE(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:w1()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=ve({},e.state,zg(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=ve({},i.value,e.state,{forward:c,scroll:zc()});r(u.current,u,!0);const h=ve({},zg(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function I1(t){t=f1(t);const e=T1(t),n=E1(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ve({location:"",base:t,go:s,createHref:g1.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function b1(t){return typeof t=="string"||t&&typeof t=="object"}function KE(t){return typeof t=="string"||typeof t=="symbol"}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},WE=Symbol("");var Gg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gg||(Gg={}));function Mi(t,e){return ve(new Error,{type:t,[WE]:!0},e)}function Tn(t,e){return t instanceof Error&&WE in t&&(e==null||!!(t.type&e))}const Qg="[^/]+?",C1={sensitive:!1,strict:!1,start:!0,end:!0},S1=/[.+*?^${}()[\]/\\]/g;function R1(t,e){const n=ve({},C1,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(S1,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:_,optional:w,regexp:b}=d;r.push({name:m,repeatable:_,optional:w});const P=b||Qg;if(P!==Qg){p+=10;try{new RegExp(`(${P})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+F.message)}}let R=_?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(R=w&&l.length<2?`(?:/${R})`:"/"+R),w&&(R+="?"),i+=R,p+=20,w&&(p+=-8),_&&(p+=-20),P===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=r[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:w}=p,b=m in l?l[m]:"";if(sn(b)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=sn(b)?b.join("/"):b;if(!P)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function A1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function k1(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=A1(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Yg(s))return 1;if(Yg(i))return-1}return i.length-s.length}function Yg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const N1={type:0,value:""},D1=/[a-zA-Z0-9_]/;function O1(t){if(!t)return[[]];if(t==="/")return[[N1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:D1.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function P1(t,e,n){const s=R1(O1(t.path),n),i=ve(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function x1(t,e){const n=[],s=new Map;e=Zg({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,m=M1(u);m.aliasOf=d&&d.record;const _=Zg(e,u),w=[m];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of R)w.push(ve({},m,{components:d?d.record.components:m.components,path:F,aliasOf:d?d.record:m}))}let b,P;for(const R of w){const{path:F}=R;if(h&&F[0]!=="/"){const z=h.record.path,ce=z[z.length-1]==="/"?"":"/";R.path=h.record.path+(F&&ce+F)}if(b=P1(R,h,_),d?d.alias.push(b):(P=P||b,P!==b&&P.alias.push(b),p&&u.name&&!Jg(b)&&o(u.name)),m.children){const z=m.children;for(let ce=0;ce<z.length;ce++)r(z[ce],b,d&&d.children[ce])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return P?()=>{o(P)}:Sr}function o(u){if(KE(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&k1(u,n[h])>=0&&(u.record.path!==n[h].record.path||!zE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Jg(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},m,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Mi(1,{location:u});_=d.record.name,p=ve(Xg(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Xg(u.params,d.keys.map(P=>P.name))),m=d.stringify(p)}else if("path"in u)m=u.path,d=n.find(P=>P.re.test(m)),d&&(p=d.parse(m),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw Mi(1,{location:u,currentLocation:h});_=d.record.name,p=ve({},h.params,u.params),m=d.stringify(p)}const w=[];let b=d;for(;b;)w.unshift(b.record),b=b.parent;return{name:_,path:m,params:p,matched:w,meta:F1(w)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Xg(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function M1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:L1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function L1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Jg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function F1(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Zg(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function zE(t,e){return e.children.some(n=>n===t||zE(t,n))}const GE=/#/g,U1=/&/g,V1=/\//g,$1=/=/g,B1=/\?/g,QE=/\+/g,j1=/%5B/g,H1=/%5D/g,YE=/%5E/g,q1=/%60/g,XE=/%7B/g,K1=/%7C/g,JE=/%7D/g,W1=/%20/g;function Gd(t){return encodeURI(""+t).replace(K1,"|").replace(j1,"[").replace(H1,"]")}function z1(t){return Gd(t).replace(XE,"{").replace(JE,"}").replace(YE,"^")}function Gu(t){return Gd(t).replace(QE,"%2B").replace(W1,"+").replace(GE,"%23").replace(U1,"%26").replace(q1,"`").replace(XE,"{").replace(JE,"}").replace(YE,"^")}function G1(t){return Gu(t).replace($1,"%3D")}function Q1(t){return Gd(t).replace(GE,"%23").replace(B1,"%3F")}function Y1(t){return t==null?"":Q1(t).replace(V1,"%2F")}function Qa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function X1(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(QE," "),o=r.indexOf("="),a=Qa(o<0?r:r.slice(0,o)),c=o<0?null:Qa(r.slice(o+1));if(a in e){let l=e[a];sn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function em(t){let e="";for(let n in t){const s=t[n];if(n=G1(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(sn(s)?s.map(r=>r&&Gu(r)):[s&&Gu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function J1(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=sn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Z1=Symbol(""),tm=Symbol(""),Gc=Symbol(""),ZE=Symbol(""),Qu=Symbol("");function ar(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Kn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Mi(4,{from:n,to:e})):h instanceof Error?a(h):b1(h)?a(Mi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Pl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(eM(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Kn(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=o1(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Kn(d,n,s,r,o)()}))}}return i}function eM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function nm(t){const e=$t(Gc),n=$t(ZE),s=Et(()=>e.resolve(pt(t.to))),i=Et(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(xi.bind(null,u));if(d>-1)return d;const p=sm(c[l-2]);return l>1&&sm(u)===p&&h[h.length-1].path!==p?h.findIndex(xi.bind(null,c[l-2])):d}),r=Et(()=>i.value>-1&&iM(n.params,s.value.params)),o=Et(()=>i.value>-1&&i.value===n.matched.length-1&&HE(n.params,s.value.params));function a(c={}){return sM(c)?e[pt(t.replace)?"replace":"push"](pt(t.to)).catch(Sr):Promise.resolve()}return{route:s,href:Et(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const tM=$i({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nm,setup(t,{slots:e}){const n=Vi(nm(t)),{options:s}=$t(Gc),i=Et(()=>({[im(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[im(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:yh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),nM=tM;function sM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function iM(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!sn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function sm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const im=(t,e,n)=>t??e??n,rM=$i({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=$t(Qu),i=Et(()=>t.route||s.value),r=$t(tm,0),o=Et(()=>{let l=pt(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Et(()=>i.value.matched[o.value]);Xo(tm,Et(()=>o.value+1)),Xo(Z1,a),Xo(Qu,i);const c=cn();return fr(()=>[c.value,a.value,t.name],([l,u,h],[d,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!xi(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return rm(n.default,{Component:d,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,w=yh(d,ve({},m,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return rm(n.default,{Component:w,route:l})||w}}});function rm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const eT=rM;function oM(t){const e=x1(t.routes,t),n=t.parseQuery||X1,s=t.stringifyQuery||em,i=t.history,r=ar(),o=ar(),a=ar(),c=zT(jn);let l=jn;si&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Dl.bind(null,E=>""+E),h=Dl.bind(null,Y1),d=Dl.bind(null,Qa);function p(E,L){let x,H;return KE(E)?(x=e.getRecordMatcher(E),H=L):H=E,e.addRoute(H,x)}function m(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function _(){return e.getRoutes().map(E=>E.record)}function w(E){return!!e.getRecordMatcher(E)}function b(E,L){if(L=ve({},L||c.value),typeof E=="string"){const f=Ol(n,E,L.path),g=e.resolve({path:f.path},L),y=i.createHref(f.fullPath);return ve(f,g,{params:d(g.params),hash:Qa(f.hash),redirectedFrom:void 0,href:y})}let x;if("path"in E)x=ve({},E,{path:Ol(n,E.path,L.path).path});else{const f=ve({},E.params);for(const g in f)f[g]==null&&delete f[g];x=ve({},E,{params:h(E.params)}),L.params=h(L.params)}const H=e.resolve(x,L),pe=E.hash||"";H.params=u(d(H.params));const Fe=l1(s,ve({},E,{hash:z1(pe),path:H.path})),re=i.createHref(Fe);return ve({fullPath:Fe,hash:pe,query:s===em?J1(E.query):E.query||{}},H,{redirectedFrom:void 0,href:re})}function P(E){return typeof E=="string"?Ol(n,E,c.value.path):ve({},E)}function R(E,L){if(l!==E)return Mi(8,{from:L,to:E})}function F(E){return Q(E)}function z(E){return F(ve(P(E),{replace:!0}))}function ce(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let H=typeof x=="function"?x(E):x;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=P(H):{path:H},H.params={}),ve({query:E.query,hash:E.hash,params:"path"in H?{}:E.params},H)}}function Q(E,L){const x=l=b(E),H=c.value,pe=E.state,Fe=E.force,re=E.replace===!0,f=ce(x);if(f)return Q(ve(P(f),{state:typeof f=="object"?ve({},pe,f.state):pe,force:Fe,replace:re}),L||x);const g=x;g.redirectedFrom=L;let y;return!Fe&&u1(s,H,x)&&(y=Mi(16,{to:g,from:H}),fs(H,H,!0,!1)),(y?Promise.resolve(y):ne(g,H)).catch(v=>Tn(v)?Tn(v,2)?v:Ht(v):be(v,g,H)).then(v=>{if(v){if(Tn(v,2))return Q(ve({replace:re},P(v.to),{state:typeof v.to=="object"?ve({},pe,v.to.state):pe,force:Fe}),L||g)}else v=Re(g,H,!0,re,pe);return ie(g,H,v),v})}function D(E,L){const x=R(E,L);return x?Promise.reject(x):Promise.resolve()}function ne(E,L){let x;const[H,pe,Fe]=aM(E,L);x=Pl(H.reverse(),"beforeRouteLeave",E,L);for(const f of H)f.leaveGuards.forEach(g=>{x.push(Kn(g,E,L))});const re=D.bind(null,E,L);return x.push(re),Zs(x).then(()=>{x=[];for(const f of r.list())x.push(Kn(f,E,L));return x.push(re),Zs(x)}).then(()=>{x=Pl(pe,"beforeRouteUpdate",E,L);for(const f of pe)f.updateGuards.forEach(g=>{x.push(Kn(g,E,L))});return x.push(re),Zs(x)}).then(()=>{x=[];for(const f of E.matched)if(f.beforeEnter&&!L.matched.includes(f))if(sn(f.beforeEnter))for(const g of f.beforeEnter)x.push(Kn(g,E,L));else x.push(Kn(f.beforeEnter,E,L));return x.push(re),Zs(x)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),x=Pl(Fe,"beforeRouteEnter",E,L),x.push(re),Zs(x))).then(()=>{x=[];for(const f of o.list())x.push(Kn(f,E,L));return x.push(re),Zs(x)}).catch(f=>Tn(f,8)?f:Promise.reject(f))}function ie(E,L,x){for(const H of a.list())H(E,L,x)}function Re(E,L,x,H,pe){const Fe=R(E,L);if(Fe)return Fe;const re=L===jn,f=si?history.state:{};x&&(H||re?i.replace(E.fullPath,ve({scroll:re&&f&&f.scroll},pe)):i.push(E.fullPath,pe)),c.value=E,fs(E,L,x,re),Ht()}let U;function Ie(){U||(U=i.listen((E,L,x)=>{if(!Ro.listening)return;const H=b(E),pe=ce(H);if(pe){Q(ve(pe,{replace:!0}),H).catch(Sr);return}l=H;const Fe=c.value;si&&y1(Wg(Fe.fullPath,x.delta),zc()),ne(H,Fe).catch(re=>Tn(re,12)?re:Tn(re,2)?(Q(re.to,H).then(f=>{Tn(f,20)&&!x.delta&&x.type===Jr.pop&&i.go(-1,!1)}).catch(Sr),Promise.reject()):(x.delta&&i.go(-x.delta,!1),be(re,H,Fe))).then(re=>{re=re||Re(H,Fe,!1),re&&(x.delta&&!Tn(re,8)?i.go(-x.delta,!1):x.type===Jr.pop&&Tn(re,20)&&i.go(-1,!1)),ie(H,Fe,re)}).catch(Sr)}))}let Me=ar(),Ve=ar(),Le;function be(E,L,x){Ht(E);const H=Ve.list();return H.length?H.forEach(pe=>pe(E,L,x)):console.error(E),Promise.reject(E)}function we(){return Le&&c.value!==jn?Promise.resolve():new Promise((E,L)=>{Me.add([E,L])})}function Ht(E){return Le||(Le=!E,Ie(),Me.list().forEach(([L,x])=>E?x(E):L()),Me.reset()),E}function fs(E,L,x,H){const{scrollBehavior:pe}=t;if(!si||!pe)return Promise.resolve();const Fe=!x&&v1(Wg(E.fullPath,0))||(H||!x)&&history.state&&history.state.scroll||null;return dh().then(()=>pe(E,L,Fe)).then(re=>re&&_1(re)).catch(re=>be(re,E,L))}const qt=E=>i.go(E);let It;const Qs=new Set,Ro={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:w,getRoutes:_,resolve:b,options:t,push:F,replace:z,go:qt,back:()=>qt(-1),forward:()=>qt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ve.add,isReady:we,install(E){const L=this;E.component("RouterLink",nM),E.component("RouterView",eT),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>pt(c)}),si&&!It&&c.value===jn&&(It=!0,F(i.location).catch(pe=>{}));const x={};for(const pe in jn)x[pe]=Et(()=>c.value[pe]);E.provide(Gc,L),E.provide(ZE,Vi(x)),E.provide(Qu,c);const H=E.unmount;Qs.add(E),E.unmount=function(){Qs.delete(E),Qs.size<1&&(l=jn,U&&U(),U=null,c.value=jn,It=!1,Le=!1),H()}}};return Ro}function Zs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function aM(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>xi(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>xi(l,c))||i.push(c))}return[n,s,i]}function Qd(){return $t(Gc)}const cM="modulepreload",lM=function(t){return"/"+t},om={},xl=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=lM(r),r in om)return;om[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":cM,o||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},So=$0("user",()=>{const t=cn(!1),e=cn(""),n=cn(""),s=cn(),i=cn(!1);function r(){i.value=!i.value}function o(l){e.value=l,t.value=!0,n.value||(n.value=l)}function a(l){o(l.email||l.displayName||"username"),n.value=l.displayName||"",s.value=l.photoURL,console.log("picz",l),console.log("picz",s)}function c(){e.value="",t.value=!1,n.value=""}return{loggedIn:t,username:e,photo:s,sidebarActive:i,displayName:n,setLoginUser:o,setLoginUserFirebase:a,doLogout:c,toggleSidebar:r}}),tT=["/login"],nT=oM({history:I1("/"),routes:[{path:"/",name:"data",meta:{title:"Data Management"},component:()=>xl(()=>import("./DataView-ad35921c.js"),["assets/DataView-ad35921c.js","assets/DataView-8be36593.css"])},{path:"/factorial",name:"factorial",meta:{title:"Factorial"},component:()=>xl(()=>import("./FactorialView-0d63f521.js"),["assets/FactorialView-0d63f521.js","assets/FactorialView-d648f4d7.css"])},{path:"/login",name:"login",component:()=>xl(()=>import("./LoginView-a6b67975.js"),["assets/LoginView-a6b67975.js","assets/LoginView-4356d6da.css"])}]});nT.beforeEach(async t=>{console.log("test",t);const e=!tT.includes(t.path),n=FR(),{loggedIn:s,setLoginUserFirebase:i}=So();if(console.log("hughser",n.value,s),n.value&&!s&&(i(n.value),console.log("loggedIn",s)),e&&!s)return"/login";if(!e&&s)return"/"});const Yd=t=>(Um("data-v-1c137515"),t=t(),Vm(),t),uM={class:"container align-center"},hM=Yd(()=>Ft("span",null,null,-1)),dM=Yd(()=>Ft("span",null,null,-1)),fM=Yd(()=>Ft("span",null,null,-1)),pM=[hM,dM,fM],gM={id:"headerTitle"},mM=$i({__name:"LoggedInHeader",setup(t){const{toggleSidebar:e}=So(),{currentRoute:n}=Qd();return(s,i)=>(Zn(),wi("header",uM,[Ft("div",{id:"hamburger",class:"container-col",onClick:i[0]||(i[0]=r=>pt(e)())},pM),Ft("h1",gM,Ml(pt(n).meta.title),1)]))}});const Qc=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},_M=Qc(mM,[["__scopeId","data-v-1c137515"]]),yM=["src"],vM=$i({__name:"UserAvatar",setup(t){const e=cn(!1),n="/profile.png",s=So(),i=Et(()=>s.photo??n);return(r,o)=>(Zn(),wi("img",{src:e.value?n:pt(i),width:"128",height:"128",onError:o[0]||(o[0]=a=>e.value=!0)},null,40,yM))}});const wM=Qc(vM,[["__scopeId","data-v-2eda649c"]]),EM=t=>(Um("data-v-230755bc"),t=t(),Vm(),t),TM={id:"sidebar-menu",class:"container-col align-center"},IM={id:"menu",class:"container-col"},bM=["onClick"],CM=EM(()=>Ft("div",{id:"exit-sidebar"},null,-1)),SM=$i({__name:"SidebarMenu",setup(t){const{toggleSidebar:e,displayName:n,doLogout:s}=So(),{currentRoute:i,push:r}=Qd(),o=[{label:"Data management",onclick:()=>r("/")},{label:"Factorial",onclick:()=>r("/factorial")},{label:"Logout",onclick:()=>{s(),r("/login")}}];return(a,c)=>(Zn(),wi("div",{id:"sidebar-menu-container",class:"container",onClick:c[0]||(c[0]=(...l)=>pt(e)&&pt(e)(...l))},[Ft("div",TM,[st(wM,{id:"avatar"}),Ft("h1",null,Ml(pt(n)),1),Ft("div",IM,[a_(" Menu "),(Zn(),wi(kt,null,RI(o,l=>Ft("span",{class:"sidebar-link",key:l.label,onClick:l.onclick}," - "+Ml(l.label),9,bM)),64))])]),CM]))}});const RM=Qc(SM,[["__scopeId","data-v-230755bc"]]),AM=$i({__name:"App",setup(t){const e=So(),n=Et(()=>e.sidebarActive),{currentRoute:s}=Qd();return(i,r)=>(Zn(),wi(kt,null,[pt(tT).includes(pt(s).path)?vf("",!0):(Zn(),wi(kt,{key:0},[st(vh,{name:"slide"},{default:$m(()=>[pt(n)?(Zn(),r_(RM,{key:0})):vf("",!0)]),_:1}),st(_M)],64)),st(pt(eT))],64))}});const kM=Qc(AM,[["__scopeId","data-v-a39c3195"]]),NM={apiKey:"AIzaSyCCf54EpHBu0zo9sMw3LgIcztwxCKqtjbQ",authDomain:"mobile-dev-test-a9a29.firebaseapp.com",projectId:"mobile-dev-test-a9a29",storageBucket:"mobile-dev-test-a9a29.appspot.com",messagingSenderId:"177510053627",appId:"1:177510053627:web:5b480d2ae6b8c6bae5a25e",measurementId:"G-EB9BEB51Q2"},DM=R_(NM);const Yc=O0(kM);Yc.use(M0());Yc.use(nT);Yc.use(r1,{firebaseApp:DM,modules:[i1()]});Yc.mount("#app");export{xM as A,pt as B,kt as F,zn as G,BM as J,wM as U,UM as X,Qc as _,Ft as a,Ju as b,wi as c,$i as d,Vm as e,RI as f,r_ as g,st as h,Wn as i,So as j,lR as k,LM as l,VM as m,Xu as n,Zn as o,Um as p,$M as q,cn as r,MM as s,Ml as t,HM as u,PM as v,OM as w,jM as x,Qd as y,vf as z};
