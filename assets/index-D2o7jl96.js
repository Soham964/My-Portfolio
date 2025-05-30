function mp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function hp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uc={exports:{}},ti={},cc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir=Symbol.for("react.element"),yp=Symbol.for("react.portal"),gp=Symbol.for("react.fragment"),vp=Symbol.for("react.strict_mode"),xp=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),Ep=Symbol.for("react.suspense"),Cp=Symbol.for("react.memo"),Np=Symbol.for("react.lazy"),zs=Symbol.iterator;function Pp(e){return e===null||typeof e!="object"?null:(e=zs&&e[zs]||e["@@iterator"],typeof e=="function"?e:null)}var fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dc=Object.assign,pc={};function zn(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||fc}zn.prototype.isReactComponent={};zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mc(){}mc.prototype=zn.prototype;function Ea(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||fc}var Ca=Ea.prototype=new mc;Ca.constructor=Ea;dc(Ca,zn.prototype);Ca.isPureReactComponent=!0;var Ms=Array.isArray,hc=Object.prototype.hasOwnProperty,Na={current:null},yc={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)hc.call(t,r)&&!yc.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Ir,type:e,key:i,ref:o,props:l,_owner:Na.current}}function Rp(e,t){return{$$typeof:Ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ir}function jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fs=/\/+/g;function Yi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jp(""+e.key):t.toString(36)}function dl(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ir:case yp:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Yi(o,0):r,Ms(l)?(n="",e!=null&&(n=e.replace(Fs,"$&/")+"/"),dl(l,t,n,"",function(u){return u})):l!=null&&(Pa(l)&&(l=Rp(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Fs,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ms(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Yi(i,a);o+=dl(i,t,n,s,l)}else if(s=Pp(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Yi(i,a++),o+=dl(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Hr(e,t,n){if(e==null)return e;var r=[],l=0;return dl(e,r,"","",function(i){return t.call(n,i,l++)}),r}function _p(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},pl={transition:null},Tp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Na};function vc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Hr,forEach:function(e,t,n){Hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hr(e,function(){t++}),t},toArray:function(e){return Hr(e,function(t){return t})||[]},only:function(e){if(!Pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=zn;O.Fragment=gp;O.Profiler=xp;O.PureComponent=Ea;O.StrictMode=vp;O.Suspense=Ep;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;O.act=vc;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dc({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Na.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)hc.call(t,s)&&!yc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ir,type:e.type,key:l,ref:i,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:Sp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wp,_context:e},e.Consumer=e};O.createElement=gc;O.createFactory=function(e){var t=gc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:kp,render:e}};O.isValidElement=Pa;O.lazy=function(e){return{$$typeof:Np,_payload:{_status:-1,_result:e},_init:_p}};O.memo=function(e,t){return{$$typeof:Cp,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=pl.transition;pl.transition={};try{e()}finally{pl.transition=t}};O.unstable_act=vc;O.useCallback=function(e,t){return Se.current.useCallback(e,t)};O.useContext=function(e){return Se.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};O.useEffect=function(e,t){return Se.current.useEffect(e,t)};O.useId=function(){return Se.current.useId()};O.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Se.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};O.useRef=function(e){return Se.current.useRef(e)};O.useState=function(e){return Se.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Se.current.useTransition()};O.version="18.3.1";cc.exports=O;var x=cc.exports;const xc=hp(x),Ds=mp({__proto__:null,default:xc},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=x,$p=Symbol.for("react.element"),Ip=Symbol.for("react.fragment"),Op=Object.prototype.hasOwnProperty,zp=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mp={key:!0,ref:!0,__self:!0,__source:!0};function wc(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Op.call(t,r)&&!Mp.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:$p,type:e,key:i,ref:o,props:l,_owner:zp.current}}ti.Fragment=Ip;ti.jsx=wc;ti.jsxs=wc;uc.exports=ti;var y=uc.exports,Co={},Sc={exports:{}},ze={},kc={exports:{}},Ec={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,$){var I=_.length;_.push($);e:for(;0<I;){var J=I-1>>>1,ie=_[J];if(0<l(ie,$))_[J]=$,_[I]=ie,I=J;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var $=_[0],I=_.pop();if(I!==$){_[0]=I;e:for(var J=0,ie=_.length,Vr=ie>>>1;J<Vr;){var Bt=2*(J+1)-1,Qi=_[Bt],Vt=Bt+1,Wr=_[Vt];if(0>l(Qi,I))Vt<ie&&0>l(Wr,Qi)?(_[J]=Wr,_[Vt]=I,J=Vt):(_[J]=Qi,_[Bt]=I,J=Bt);else if(Vt<ie&&0>l(Wr,I))_[J]=Wr,_[Vt]=I,J=Vt;else break e}}return $}function l(_,$){var I=_.sortIndex-$.sortIndex;return I!==0?I:_.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],u=[],d=1,m=null,h=3,w=!1,v=!1,g=!1,P=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=_)r(u),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(u)}}function S(_){if(g=!1,p(_),!v)if(n(s)!==null)v=!0,Wi(C);else{var $=n(u);$!==null&&Hi(S,$.startTime-_)}}function C(_,$){v=!1,g&&(g=!1,c(T),T=-1),w=!0;var I=h;try{for(p($),m=n(s);m!==null&&(!(m.expirationTime>$)||_&&!Ee());){var J=m.callback;if(typeof J=="function"){m.callback=null,h=m.priorityLevel;var ie=J(m.expirationTime<=$);$=e.unstable_now(),typeof ie=="function"?m.callback=ie:m===n(s)&&r(s),p($)}else r(s);m=n(s)}if(m!==null)var Vr=!0;else{var Bt=n(u);Bt!==null&&Hi(S,Bt.startTime-$),Vr=!1}return Vr}finally{m=null,h=I,w=!1}}var R=!1,E=null,T=-1,M=5,L=-1;function Ee(){return!(e.unstable_now()-L<M)}function bn(){if(E!==null){var _=e.unstable_now();L=_;var $=!0;try{$=E(!0,_)}finally{$?Un():(R=!1,E=null)}}else R=!1}var Un;if(typeof f=="function")Un=function(){f(bn)};else if(typeof MessageChannel<"u"){var Os=new MessageChannel,pp=Os.port2;Os.port1.onmessage=bn,Un=function(){pp.postMessage(null)}}else Un=function(){P(bn,0)};function Wi(_){E=_,R||(R=!0,Un())}function Hi(_,$){T=P(function(){_(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,Wi(C))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var I=h;h=$;try{return _()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,$){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=h;h=_;try{return $()}finally{h=I}},e.unstable_scheduleCallback=function(_,$,I){var J=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?J+I:J):I=J,_){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=I+ie,_={id:d++,callback:$,priorityLevel:_,startTime:I,expirationTime:ie,sortIndex:-1},I>J?(_.sortIndex=I,t(u,_),n(s)===null&&_===n(u)&&(g?(c(T),T=-1):g=!0,Hi(S,I-J))):(_.sortIndex=ie,t(s,_),v||w||(v=!0,Wi(C))),_},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(_){var $=h;return function(){var I=h;h=$;try{return _.apply(this,arguments)}finally{h=I}}}})(Ec);kc.exports=Ec;var Fp=kc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=x,Oe=Fp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cc=new Set,fr={};function nn(e,t){Rn(e,t),Rn(e+"Capture",t)}function Rn(e,t){for(fr[e]=t,e=0;e<t.length;e++)Cc.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),No=Object.prototype.hasOwnProperty,Ap=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,As={},bs={};function bp(e){return No.call(bs,e)?!0:No.call(As,e)?!1:Ap.test(e)?bs[e]=!0:(As[e]=!0,!1)}function Up(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bp(e,t,n,r){if(t===null||typeof t>"u"||Up(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ra=/[\-:]([a-z])/g;function ja(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ra,ja);pe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ra,ja);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ra,ja);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function _a(e,t,n,r){var l=pe.hasOwnProperty(t)?pe[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bp(t,n,l,r)&&(n=null),r||l===null?bp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xt=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),sn=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),Ta=Symbol.for("react.strict_mode"),Po=Symbol.for("react.profiler"),Nc=Symbol.for("react.provider"),Pc=Symbol.for("react.context"),La=Symbol.for("react.forward_ref"),Ro=Symbol.for("react.suspense"),jo=Symbol.for("react.suspense_list"),$a=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Rc=Symbol.for("react.offscreen"),Us=Symbol.iterator;function Bn(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Ki;function Zn(e){if(Ki===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ki=t&&t[1]||""}return`
`+Ki+e}var Xi=!1;function Gi(e,t){if(!e||Xi)return"";Xi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Xi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function Vp(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function _o(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case sn:return"Portal";case Po:return"Profiler";case Ta:return"StrictMode";case Ro:return"Suspense";case jo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pc:return(e.displayName||"Context")+".Consumer";case Nc:return(e._context.displayName||"Context")+".Provider";case La:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $a:return t=e.displayName||null,t!==null?t:_o(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return _o(e(t))}catch{}}return null}function Wp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _o(t);case 8:return t===Ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hp(e){var t=jc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Hp(e))}function _c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=jc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function To(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tc(e,t){t=t.checked,t!=null&&_a(e,"checked",t,!1)}function Lo(e,t){Tc(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$o(e,t.type,n):t.hasOwnProperty("defaultValue")&&$o(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $o(e,t,n){(t!=="number"||_l(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qn=Array.isArray;function wn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ws(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(qn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function Lc(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $c(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$c(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,Ic=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qp=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){Qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function Oc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}function zc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Oc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Yp=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zo(e,t){if(t){if(Yp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Mo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fo=null;function Ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Do=null,Sn=null,kn=null;function Qs(e){if(e=Mr(e)){if(typeof Do!="function")throw Error(k(280));var t=e.stateNode;t&&(t=oi(t),Do(e.stateNode,e.type,t))}}function Mc(e){Sn?kn?kn.push(e):kn=[e]:Sn=e}function Fc(){if(Sn){var e=Sn,t=kn;if(kn=Sn=null,Qs(e),t)for(e=0;e<t.length;e++)Qs(t[e])}}function Dc(e,t){return e(t)}function Ac(){}var Ji=!1;function bc(e,t,n){if(Ji)return e(t,n);Ji=!0;try{return Dc(e,t,n)}finally{Ji=!1,(Sn!==null||kn!==null)&&(Ac(),Fc())}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ao=!1;if(mt)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Ao=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Ao=!1}function Kp(e,t,n,r,l,i,o,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var rr=!1,Tl=null,Ll=!1,bo=null,Xp={onError:function(e){rr=!0,Tl=e}};function Gp(e,t,n,r,l,i,o,a,s){rr=!1,Tl=null,Kp.apply(Xp,arguments)}function Jp(e,t,n,r,l,i,o,a,s){if(Gp.apply(this,arguments),rr){if(rr){var u=Tl;rr=!1,Tl=null}else throw Error(k(198));Ll||(Ll=!0,bo=u)}}function rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ys(e){if(rn(e)!==e)throw Error(k(188))}function Zp(e){var t=e.alternate;if(!t){if(t=rn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Ys(l),e;if(i===r)return Ys(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Bc(e){return e=Zp(e),e!==null?Vc(e):null}function Vc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vc(e);if(t!==null)return t;e=e.sibling}return null}var Wc=Oe.unstable_scheduleCallback,Ks=Oe.unstable_cancelCallback,qp=Oe.unstable_shouldYield,em=Oe.unstable_requestPaint,Z=Oe.unstable_now,tm=Oe.unstable_getCurrentPriorityLevel,Oa=Oe.unstable_ImmediatePriority,Hc=Oe.unstable_UserBlockingPriority,$l=Oe.unstable_NormalPriority,nm=Oe.unstable_LowPriority,Qc=Oe.unstable_IdlePriority,ni=null,rt=null;function rm(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:om,lm=Math.log,im=Math.LN2;function om(e){return e>>>=0,e===0?32:31-(lm(e)/im|0)|0}var Xr=64,Gr=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=er(a):(i&=o,i!==0&&(r=er(i)))}else o=n&~l,o!==0?r=er(o):i!==0&&(r=er(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),l=1<<n,r|=e[n],t&=~l;return r}function am(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Xe(i),a=1<<o,s=l[o];s===-1?(!(a&n)||a&r)&&(l[o]=am(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yc(){var e=Xr;return Xr<<=1,!(Xr&4194240)&&(Xr=64),e}function Zi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function um(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Xe(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function za(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var b=0;function Kc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xc,Ma,Gc,Jc,Zc,Bo=!1,Jr=[],_t=null,Tt=null,Lt=null,mr=new Map,hr=new Map,Nt=[],cm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xs(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function Wn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Mr(t),t!==null&&Ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function fm(e,t,n,r,l){switch(t){case"focusin":return _t=Wn(_t,e,t,n,r,l),!0;case"dragenter":return Tt=Wn(Tt,e,t,n,r,l),!0;case"mouseover":return Lt=Wn(Lt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return mr.set(i,Wn(mr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,hr.set(i,Wn(hr.get(i)||null,e,t,n,r,l)),!0}return!1}function qc(e){var t=Qt(e.target);if(t!==null){var n=rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Uc(n),t!==null){e.blockedOn=t,Zc(e.priority,function(){Gc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ml(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fo=r,n.target.dispatchEvent(r),Fo=null}else return t=Mr(n),t!==null&&Ma(t),e.blockedOn=n,!1;t.shift()}return!0}function Gs(e,t,n){ml(e)&&n.delete(t)}function dm(){Bo=!1,_t!==null&&ml(_t)&&(_t=null),Tt!==null&&ml(Tt)&&(Tt=null),Lt!==null&&ml(Lt)&&(Lt=null),mr.forEach(Gs),hr.forEach(Gs)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Bo||(Bo=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,dm)))}function yr(e){function t(l){return Hn(l,e)}if(0<Jr.length){Hn(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Hn(_t,e),Tt!==null&&Hn(Tt,e),Lt!==null&&Hn(Lt,e),mr.forEach(t),hr.forEach(t),n=0;n<Nt.length;n++)r=Nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)qc(n),n.blockedOn===null&&Nt.shift()}var En=xt.ReactCurrentBatchConfig,Ol=!0;function pm(e,t,n,r){var l=b,i=En.transition;En.transition=null;try{b=1,Fa(e,t,n,r)}finally{b=l,En.transition=i}}function mm(e,t,n,r){var l=b,i=En.transition;En.transition=null;try{b=4,Fa(e,t,n,r)}finally{b=l,En.transition=i}}function Fa(e,t,n,r){if(Ol){var l=Vo(e,t,n,r);if(l===null)so(e,t,r,zl,n),Xs(e,r);else if(fm(l,e,t,n,r))r.stopPropagation();else if(Xs(e,r),t&4&&-1<cm.indexOf(e)){for(;l!==null;){var i=Mr(l);if(i!==null&&Xc(i),i=Vo(e,t,n,r),i===null&&so(e,t,r,zl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else so(e,t,r,null,n)}}var zl=null;function Vo(e,t,n,r){if(zl=null,e=Ia(r),e=Qt(e),e!==null)if(t=rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zl=e,null}function ef(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tm()){case Oa:return 1;case Hc:return 4;case $l:case nm:return 16;case Qc:return 536870912;default:return 16}default:return 16}}var Rt=null,Da=null,hl=null;function tf(){if(hl)return hl;var e,t=Da,n=t.length,r,l="value"in Rt?Rt.value:Rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return hl=l.slice(e,1<r?1-r:void 0)}function yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Js(){return!1}function Me(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zr:Js,this.isPropagationStopped=Js,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Aa=Me(Mn),zr=X({},Mn,{view:0,detail:0}),hm=Me(zr),qi,eo,Qn,ri=X({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(qi=e.screenX-Qn.screenX,eo=e.screenY-Qn.screenY):eo=qi=0,Qn=e),qi)},movementY:function(e){return"movementY"in e?e.movementY:eo}}),Zs=Me(ri),ym=X({},ri,{dataTransfer:0}),gm=Me(ym),vm=X({},zr,{relatedTarget:0}),to=Me(vm),xm=X({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),wm=Me(xm),Sm=X({},Mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),km=Me(Sm),Em=X({},Mn,{data:0}),qs=Me(Em),Cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pm[e])?!!t[e]:!1}function ba(){return Rm}var jm=X({},zr,{key:function(e){if(e.key){var t=Cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_m=Me(jm),Tm=X({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=Me(Tm),Lm=X({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),$m=Me(Lm),Im=X({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Om=Me(Im),zm=X({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mm=Me(zm),Fm=[9,13,27,32],Ua=mt&&"CompositionEvent"in window,lr=null;mt&&"documentMode"in document&&(lr=document.documentMode);var Dm=mt&&"TextEvent"in window&&!lr,nf=mt&&(!Ua||lr&&8<lr&&11>=lr),tu=" ",nu=!1;function rf(e,t){switch(e){case"keyup":return Fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function Am(e,t){switch(e){case"compositionend":return lf(t);case"keypress":return t.which!==32?null:(nu=!0,tu);case"textInput":return e=t.data,e===tu&&nu?null:e;default:return null}}function bm(e,t){if(cn)return e==="compositionend"||!Ua&&rf(e,t)?(e=tf(),hl=Da=Rt=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nf&&t.locale!=="ko"?null:t.data;default:return null}}var Um={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Um[e.type]:t==="textarea"}function of(e,t,n,r){Mc(r),t=Ml(t,"onChange"),0<t.length&&(n=new Aa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ir=null,gr=null;function Bm(e){gf(e,0)}function li(e){var t=pn(e);if(_c(t))return e}function Vm(e,t){if(e==="change")return t}var af=!1;if(mt){var no;if(mt){var ro="oninput"in document;if(!ro){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),ro=typeof lu.oninput=="function"}no=ro}else no=!1;af=no&&(!document.documentMode||9<document.documentMode)}function iu(){ir&&(ir.detachEvent("onpropertychange",sf),gr=ir=null)}function sf(e){if(e.propertyName==="value"&&li(gr)){var t=[];of(t,gr,e,Ia(e)),bc(Bm,t)}}function Wm(e,t,n){e==="focusin"?(iu(),ir=t,gr=n,ir.attachEvent("onpropertychange",sf)):e==="focusout"&&iu()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(gr)}function Qm(e,t){if(e==="click")return li(t)}function Ym(e,t){if(e==="input"||e==="change")return li(t)}function Km(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:Km;function vr(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!No.call(t,l)||!Je(e[l],t[l]))return!1}return!0}function ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,t){var n=ou(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ou(n)}}function uf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cf(){for(var e=window,t=_l();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_l(e.document)}return t}function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xm(e){var t=cf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uf(n.ownerDocument.documentElement,n)){if(r!==null&&Ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=au(n,i);var o=au(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gm=mt&&"documentMode"in document&&11>=document.documentMode,fn=null,Wo=null,or=null,Ho=!1;function su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ho||fn==null||fn!==_l(r)||(r=fn,"selectionStart"in r&&Ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),or&&vr(or,r)||(or=r,r=Ml(Wo,"onSelect"),0<r.length&&(t=new Aa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},lo={},ff={};mt&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function ii(e){if(lo[e])return lo[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ff)return lo[e]=t[n];return e}var df=ii("animationend"),pf=ii("animationiteration"),mf=ii("animationstart"),hf=ii("transitionend"),yf=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){yf.set(e,t),nn(t,[e])}for(var io=0;io<uu.length;io++){var oo=uu[io],Jm=oo.toLowerCase(),Zm=oo[0].toUpperCase()+oo.slice(1);At(Jm,"on"+Zm)}At(df,"onAnimationEnd");At(pf,"onAnimationIteration");At(mf,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(hf,"onTransitionEnd");Rn("onMouseEnter",["mouseout","mouseover"]);Rn("onMouseLeave",["mouseout","mouseover"]);Rn("onPointerEnter",["pointerout","pointerover"]);Rn("onPointerLeave",["pointerout","pointerover"]);nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qm=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jp(r,t,void 0,e),e.currentTarget=null}function gf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;cu(l,a,u),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;cu(l,a,u),i=s}}}if(Ll)throw e=bo,Ll=!1,bo=null,e}function W(e,t){var n=t[Go];n===void 0&&(n=t[Go]=new Set);var r=e+"__bubble";n.has(r)||(vf(t,e,2,!1),n.add(r))}function ao(e,t,n){var r=0;t&&(r|=4),vf(n,e,r,t)}var el="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[el]){e[el]=!0,Cc.forEach(function(n){n!=="selectionchange"&&(qm.has(n)||ao(n,!1,e),ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[el]||(t[el]=!0,ao("selectionchange",!1,t))}}function vf(e,t,n,r){switch(ef(t)){case 1:var l=pm;break;case 4:l=mm;break;default:l=Fa}n=l.bind(null,t,n,e),l=void 0,!Ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function so(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Qt(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}bc(function(){var u=i,d=Ia(n),m=[];e:{var h=yf.get(e);if(h!==void 0){var w=Aa,v=e;switch(e){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":w=_m;break;case"focusin":v="focus",w=to;break;case"focusout":v="blur",w=to;break;case"beforeblur":case"afterblur":w=to;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=$m;break;case df:case pf:case mf:w=wm;break;case hf:w=Om;break;case"scroll":w=hm;break;case"wheel":w=Mm;break;case"copy":case"cut":case"paste":w=km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=eu}var g=(t&4)!==0,P=!g&&e==="scroll",c=g?h!==null?h+"Capture":null:h;g=[];for(var f=u,p;f!==null;){p=f;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,c!==null&&(S=pr(f,c),S!=null&&g.push(wr(f,S,p)))),P)break;f=f.return}0<g.length&&(h=new w(h,v,null,n,d),m.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Fo&&(v=n.relatedTarget||n.fromElement)&&(Qt(v)||v[ht]))break e;if((w||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=u,v=v?Qt(v):null,v!==null&&(P=rn(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(g=Zs,S="onMouseLeave",c="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(g=eu,S="onPointerLeave",c="onPointerEnter",f="pointer"),P=w==null?h:pn(w),p=v==null?h:pn(v),h=new g(S,f+"leave",w,n,d),h.target=P,h.relatedTarget=p,S=null,Qt(d)===u&&(g=new g(c,f+"enter",v,n,d),g.target=p,g.relatedTarget=P,S=g),P=S,w&&v)t:{for(g=w,c=v,f=0,p=g;p;p=on(p))f++;for(p=0,S=c;S;S=on(S))p++;for(;0<f-p;)g=on(g),f--;for(;0<p-f;)c=on(c),p--;for(;f--;){if(g===c||c!==null&&g===c.alternate)break t;g=on(g),c=on(c)}g=null}else g=null;w!==null&&fu(m,h,w,g,!1),v!==null&&P!==null&&fu(m,P,v,g,!0)}}e:{if(h=u?pn(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=Vm;else if(ru(h))if(af)C=Ym;else{C=Hm;var R=Wm}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Qm);if(C&&(C=C(e,u))){of(m,C,n,d);break e}R&&R(e,h,u),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&$o(h,"number",h.value)}switch(R=u?pn(u):window,e){case"focusin":(ru(R)||R.contentEditable==="true")&&(fn=R,Wo=u,or=null);break;case"focusout":or=Wo=fn=null;break;case"mousedown":Ho=!0;break;case"contextmenu":case"mouseup":case"dragend":Ho=!1,su(m,n,d);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":su(m,n,d)}var E;if(Ua)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else cn?rf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(nf&&n.locale!=="ko"&&(cn||T!=="onCompositionStart"?T==="onCompositionEnd"&&cn&&(E=tf()):(Rt=d,Da="value"in Rt?Rt.value:Rt.textContent,cn=!0)),R=Ml(u,T),0<R.length&&(T=new qs(T,e,null,n,d),m.push({event:T,listeners:R}),E?T.data=E:(E=lf(n),E!==null&&(T.data=E)))),(E=Dm?Am(e,n):bm(e,n))&&(u=Ml(u,"onBeforeInput"),0<u.length&&(d=new qs("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=E))}gf(m,t)})}function wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ml(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=pr(e,n),i!=null&&r.unshift(wr(e,i,l)),i=pr(e,t),i!=null&&r.push(wr(e,i,l))),e=e.return}return r}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,l?(s=pr(n,i),s!=null&&o.unshift(wr(n,s,a))):l||(s=pr(n,i),s!=null&&o.push(wr(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var e0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(e0,`
`).replace(t0,"")}function tl(e,t,n){if(t=du(t),du(e)!==t&&n)throw Error(k(425))}function Fl(){}var Qo=null,Yo=null;function Ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xo=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,r0=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(l0)}:Xo;function l0(e){setTimeout(function(){throw e})}function uo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);yr(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Fn,Sr="__reactProps$"+Fn,ht="__reactContainer$"+Fn,Go="__reactEvents$"+Fn,i0="__reactListeners$"+Fn,o0="__reactHandles$"+Fn;function Qt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mu(e);e!==null;){if(n=e[nt])return n;e=mu(e)}return t}e=n,n=e.parentNode}return null}function Mr(e){return e=e[nt]||e[ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function oi(e){return e[Sr]||null}var Jo=[],mn=-1;function bt(e){return{current:e}}function H(e){0>mn||(e.current=Jo[mn],Jo[mn]=null,mn--)}function V(e,t){mn++,Jo[mn]=e.current,e.current=t}var Dt={},ve=bt(Dt),Pe=bt(!1),Jt=Dt;function jn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Re(e){return e=e.childContextTypes,e!=null}function Dl(){H(Pe),H(ve)}function hu(e,t,n){if(ve.current!==Dt)throw Error(k(168));V(ve,t),V(Pe,n)}function xf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Wp(e)||"Unknown",l));return X({},n,r)}function Al(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,Jt=ve.current,V(ve,e),V(Pe,Pe.current),!0}function yu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=xf(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,H(Pe),H(ve),V(ve,e)):H(Pe),V(Pe,n)}var ut=null,ai=!1,co=!1;function wf(e){ut===null?ut=[e]:ut.push(e)}function a0(e){ai=!0,wf(e)}function Ut(){if(!co&&ut!==null){co=!0;var e=0,t=b;try{var n=ut;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,ai=!1}catch(l){throw ut!==null&&(ut=ut.slice(e+1)),Wc(Oa,Ut),l}finally{b=t,co=!1}}return null}var hn=[],yn=0,bl=null,Ul=0,De=[],Ae=0,Zt=null,ct=1,ft="";function Wt(e,t){hn[yn++]=Ul,hn[yn++]=bl,bl=e,Ul=t}function Sf(e,t,n){De[Ae++]=ct,De[Ae++]=ft,De[Ae++]=Zt,Zt=e;var r=ct;e=ft;var l=32-Xe(r)-1;r&=~(1<<l),n+=1;var i=32-Xe(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,ct=1<<32-Xe(t)+l|n<<l|r,ft=i+e}else ct=1<<i|n<<l|r,ft=e}function Va(e){e.return!==null&&(Wt(e,1),Sf(e,1,0))}function Wa(e){for(;e===bl;)bl=hn[--yn],hn[yn]=null,Ul=hn[--yn],hn[yn]=null;for(;e===Zt;)Zt=De[--Ae],De[Ae]=null,ft=De[--Ae],De[Ae]=null,ct=De[--Ae],De[Ae]=null}var $e=null,Le=null,Q=!1,Ke=null;function kf(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Le=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:ct,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Le=null,!0):!1;default:return!1}}function Zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qo(e){if(Q){var t=Le;if(t){var n=t;if(!gu(e,t)){if(Zo(e))throw Error(k(418));t=$t(n.nextSibling);var r=$e;t&&gu(e,t)?kf(r,n):(e.flags=e.flags&-4097|2,Q=!1,$e=e)}}else{if(Zo(e))throw Error(k(418));e.flags=e.flags&-4097|2,Q=!1,$e=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function nl(e){if(e!==$e)return!1;if(!Q)return vu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ko(e.type,e.memoizedProps)),t&&(t=Le)){if(Zo(e))throw Ef(),Error(k(418));for(;t;)kf(e,t),t=$t(t.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=$e?$t(e.stateNode.nextSibling):null;return!0}function Ef(){for(var e=Le;e;)e=$t(e.nextSibling)}function _n(){Le=$e=null,Q=!1}function Ha(e){Ke===null?Ke=[e]:Ke.push(e)}var s0=xt.ReactCurrentBatchConfig;function Yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function rl(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xu(e){var t=e._init;return t(e._payload)}function Cf(e){function t(c,f){if(e){var p=c.deletions;p===null?(c.deletions=[f],c.flags|=16):p.push(f)}}function n(c,f){if(!e)return null;for(;f!==null;)t(c,f),f=f.sibling;return null}function r(c,f){for(c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function l(c,f){return c=Mt(c,f),c.index=0,c.sibling=null,c}function i(c,f,p){return c.index=p,e?(p=c.alternate,p!==null?(p=p.index,p<f?(c.flags|=2,f):p):(c.flags|=2,f)):(c.flags|=1048576,f)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,f,p,S){return f===null||f.tag!==6?(f=vo(p,c.mode,S),f.return=c,f):(f=l(f,p),f.return=c,f)}function s(c,f,p,S){var C=p.type;return C===un?d(c,f,p.props.children,S,p.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Et&&xu(C)===f.type)?(S=l(f,p.props),S.ref=Yn(c,f,p),S.return=c,S):(S=El(p.type,p.key,p.props,null,c.mode,S),S.ref=Yn(c,f,p),S.return=c,S)}function u(c,f,p,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=xo(p,c.mode,S),f.return=c,f):(f=l(f,p.children||[]),f.return=c,f)}function d(c,f,p,S,C){return f===null||f.tag!==7?(f=Gt(p,c.mode,S,C),f.return=c,f):(f=l(f,p),f.return=c,f)}function m(c,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=vo(""+f,c.mode,p),f.return=c,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qr:return p=El(f.type,f.key,f.props,null,c.mode,p),p.ref=Yn(c,null,f),p.return=c,p;case sn:return f=xo(f,c.mode,p),f.return=c,f;case Et:var S=f._init;return m(c,S(f._payload),p)}if(qn(f)||Bn(f))return f=Gt(f,c.mode,p,null),f.return=c,f;rl(c,f)}return null}function h(c,f,p,S){var C=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(c,f,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return p.key===C?s(c,f,p,S):null;case sn:return p.key===C?u(c,f,p,S):null;case Et:return C=p._init,h(c,f,C(p._payload),S)}if(qn(p)||Bn(p))return C!==null?null:d(c,f,p,S,null);rl(c,p)}return null}function w(c,f,p,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(p)||null,a(f,c,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qr:return c=c.get(S.key===null?p:S.key)||null,s(f,c,S,C);case sn:return c=c.get(S.key===null?p:S.key)||null,u(f,c,S,C);case Et:var R=S._init;return w(c,f,p,R(S._payload),C)}if(qn(S)||Bn(S))return c=c.get(p)||null,d(f,c,S,C,null);rl(f,S)}return null}function v(c,f,p,S){for(var C=null,R=null,E=f,T=f=0,M=null;E!==null&&T<p.length;T++){E.index>T?(M=E,E=null):M=E.sibling;var L=h(c,E,p[T],S);if(L===null){E===null&&(E=M);break}e&&E&&L.alternate===null&&t(c,E),f=i(L,f,T),R===null?C=L:R.sibling=L,R=L,E=M}if(T===p.length)return n(c,E),Q&&Wt(c,T),C;if(E===null){for(;T<p.length;T++)E=m(c,p[T],S),E!==null&&(f=i(E,f,T),R===null?C=E:R.sibling=E,R=E);return Q&&Wt(c,T),C}for(E=r(c,E);T<p.length;T++)M=w(E,c,T,p[T],S),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?T:M.key),f=i(M,f,T),R===null?C=M:R.sibling=M,R=M);return e&&E.forEach(function(Ee){return t(c,Ee)}),Q&&Wt(c,T),C}function g(c,f,p,S){var C=Bn(p);if(typeof C!="function")throw Error(k(150));if(p=C.call(p),p==null)throw Error(k(151));for(var R=C=null,E=f,T=f=0,M=null,L=p.next();E!==null&&!L.done;T++,L=p.next()){E.index>T?(M=E,E=null):M=E.sibling;var Ee=h(c,E,L.value,S);if(Ee===null){E===null&&(E=M);break}e&&E&&Ee.alternate===null&&t(c,E),f=i(Ee,f,T),R===null?C=Ee:R.sibling=Ee,R=Ee,E=M}if(L.done)return n(c,E),Q&&Wt(c,T),C;if(E===null){for(;!L.done;T++,L=p.next())L=m(c,L.value,S),L!==null&&(f=i(L,f,T),R===null?C=L:R.sibling=L,R=L);return Q&&Wt(c,T),C}for(E=r(c,E);!L.done;T++,L=p.next())L=w(E,c,T,L.value,S),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?T:L.key),f=i(L,f,T),R===null?C=L:R.sibling=L,R=L);return e&&E.forEach(function(bn){return t(c,bn)}),Q&&Wt(c,T),C}function P(c,f,p,S){if(typeof p=="object"&&p!==null&&p.type===un&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:e:{for(var C=p.key,R=f;R!==null;){if(R.key===C){if(C=p.type,C===un){if(R.tag===7){n(c,R.sibling),f=l(R,p.props.children),f.return=c,c=f;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Et&&xu(C)===R.type){n(c,R.sibling),f=l(R,p.props),f.ref=Yn(c,R,p),f.return=c,c=f;break e}n(c,R);break}else t(c,R);R=R.sibling}p.type===un?(f=Gt(p.props.children,c.mode,S,p.key),f.return=c,c=f):(S=El(p.type,p.key,p.props,null,c.mode,S),S.ref=Yn(c,f,p),S.return=c,c=S)}return o(c);case sn:e:{for(R=p.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(c,f.sibling),f=l(f,p.children||[]),f.return=c,c=f;break e}else{n(c,f);break}else t(c,f);f=f.sibling}f=xo(p,c.mode,S),f.return=c,c=f}return o(c);case Et:return R=p._init,P(c,f,R(p._payload),S)}if(qn(p))return v(c,f,p,S);if(Bn(p))return g(c,f,p,S);rl(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(c,f.sibling),f=l(f,p),f.return=c,c=f):(n(c,f),f=vo(p,c.mode,S),f.return=c,c=f),o(c)):n(c,f)}return P}var Tn=Cf(!0),Nf=Cf(!1),Bl=bt(null),Vl=null,gn=null,Qa=null;function Ya(){Qa=gn=Vl=null}function Ka(e){var t=Bl.current;H(Bl),e._currentValue=t}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){Vl=e,Qa=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Qa!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(Vl===null)throw Error(k(308));gn=e,Vl.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Yt=null;function Xa(e){Yt===null?Yt=[e]:Yt.push(e)}function Pf(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Xa(t)):(n.next=l.next,l.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,yt(e,n)}return l=r.interleaved,l===null?(t.next=t,Xa(r)):(t.next=l.next,l.next=t),r.interleaved=t,yt(e,n)}function gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,za(e,n)}}function wu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wl(e,t,n,r){var l=e.updateQueue;Ct=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(i!==null){var m=l.baseState;o=0,d=u=s=null,a=i;do{var h=a.lane,w=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,g=a;switch(h=t,w=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){m=v.call(w,m,h);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,h=typeof v=="function"?v.call(w,m,h):v,h==null)break e;m=X({},m,h);break e;case 2:Ct=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=w,s=m):d=d.next=w,o|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(d===null&&(s=m),l.baseState=s,l.firstBaseUpdate=u,l.lastBaseUpdate=d,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);en|=o,e.lanes=o,e.memoizedState=m}}function Su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var Fr={},lt=bt(Fr),kr=bt(Fr),Er=bt(Fr);function Kt(e){if(e===Fr)throw Error(k(174));return e}function Ja(e,t){switch(V(Er,t),V(kr,e),V(lt,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oo(t,e)}H(lt),V(lt,t)}function Ln(){H(lt),H(kr),H(Er)}function jf(e){Kt(Er.current);var t=Kt(lt.current),n=Oo(t,e.type);t!==n&&(V(kr,e),V(lt,n))}function Za(e){kr.current===e&&(H(lt),H(kr))}var Y=bt(0);function Hl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fo=[];function qa(){for(var e=0;e<fo.length;e++)fo[e]._workInProgressVersionPrimary=null;fo.length=0}var vl=xt.ReactCurrentDispatcher,po=xt.ReactCurrentBatchConfig,qt=0,K=null,ne=null,ae=null,Ql=!1,ar=!1,Cr=0,u0=0;function me(){throw Error(k(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function ts(e,t,n,r,l,i){if(qt=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vl.current=e===null||e.memoizedState===null?p0:m0,e=n(r,l),ar){i=0;do{if(ar=!1,Cr=0,25<=i)throw Error(k(301));i+=1,ae=ne=null,t.updateQueue=null,vl.current=h0,e=n(r,l)}while(ar)}if(vl.current=Yl,t=ne!==null&&ne.next!==null,qt=0,ae=ne=K=null,Ql=!1,t)throw Error(k(300));return e}function ns(){var e=Cr!==0;return Cr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?K.memoizedState=ae=e:ae=ae.next=e,ae}function Ve(){if(ne===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ae===null?K.memoizedState:ae.next;if(t!==null)ae=t,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ae===null?K.memoizedState=ae=e:ae=ae.next=e}return ae}function Nr(e,t){return typeof t=="function"?t(e):t}function mo(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ne,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,u=i;do{var d=u.lane;if((qt&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,o=r):s=s.next=m,K.lanes|=d,en|=d}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=a,Je(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,K.lanes|=i,en|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ho(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Je(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _f(){}function Tf(e,t){var n=K,r=Ve(),l=t(),i=!Je(r.memoizedState,l);if(i&&(r.memoizedState=l,Ne=!0),r=r.queue,rs(If.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Pr(9,$f.bind(null,n,r,l,t),void 0,null),se===null)throw Error(k(349));qt&30||Lf(n,t,l)}return l}function Lf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $f(e,t,n,r){t.value=n,t.getSnapshot=r,Of(t)&&zf(e)}function If(e,t,n){return n(function(){Of(t)&&zf(e)})}function Of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function zf(e){var t=yt(e,1);t!==null&&Ge(t,e,1,-1)}function ku(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},t.queue=e,e=e.dispatch=d0.bind(null,K,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mf(){return Ve().memoizedState}function xl(e,t,n,r){var l=qe();K.flags|=e,l.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function si(e,t,n,r){var l=Ve();r=r===void 0?null:r;var i=void 0;if(ne!==null){var o=ne.memoizedState;if(i=o.destroy,r!==null&&es(r,o.deps)){l.memoizedState=Pr(t,n,i,r);return}}K.flags|=e,l.memoizedState=Pr(1|t,n,i,r)}function Eu(e,t){return xl(8390656,8,e,t)}function rs(e,t){return si(2048,8,e,t)}function Ff(e,t){return si(4,2,e,t)}function Df(e,t){return si(4,4,e,t)}function Af(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bf(e,t,n){return n=n!=null?n.concat([e]):null,si(4,4,Af.bind(null,t,e),n)}function ls(){}function Uf(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&es(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bf(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&es(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vf(e,t,n){return qt&21?(Je(n,t)||(n=Yc(),K.lanes|=n,en|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function c0(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=po.transition;po.transition={};try{e(!1),t()}finally{b=n,po.transition=r}}function Wf(){return Ve().memoizedState}function f0(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hf(e))Qf(t,n);else if(n=Pf(e,t,n,r),n!==null){var l=we();Ge(n,e,r,l),Yf(n,t,r)}}function d0(e,t,n){var r=zt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hf(e))Qf(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Je(a,o)){var s=t.interleaved;s===null?(l.next=l,Xa(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Pf(e,t,l,r),n!==null&&(l=we(),Ge(n,e,r,l),Yf(n,t,r))}}function Hf(e){var t=e.alternate;return e===K||t!==null&&t===K}function Qf(e,t){ar=Ql=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,za(e,n)}}var Yl={readContext:Be,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},p0={readContext:Be,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:Eu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xl(4194308,4,Af.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xl(4194308,4,e,t)},useInsertionEffect:function(e,t){return xl(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=f0.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:ku,useDebugValue:ls,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=ku(!1),t=e[0];return e=c0.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,l=qe();if(Q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),se===null)throw Error(k(349));qt&30||Lf(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Eu(If.bind(null,r,i,e),[e]),r.flags|=2048,Pr(9,$f.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=qe(),t=se.identifierPrefix;if(Q){var n=ft,r=ct;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=u0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},m0={readContext:Be,useCallback:Uf,useContext:Be,useEffect:rs,useImperativeHandle:bf,useInsertionEffect:Ff,useLayoutEffect:Df,useMemo:Bf,useReducer:mo,useRef:Mf,useState:function(){return mo(Nr)},useDebugValue:ls,useDeferredValue:function(e){var t=Ve();return Vf(t,ne.memoizedState,e)},useTransition:function(){var e=mo(Nr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:_f,useSyncExternalStore:Tf,useId:Wf,unstable_isNewReconciler:!1},h0={readContext:Be,useCallback:Uf,useContext:Be,useEffect:rs,useImperativeHandle:bf,useInsertionEffect:Ff,useLayoutEffect:Df,useMemo:Bf,useReducer:ho,useRef:Mf,useState:function(){return ho(Nr)},useDebugValue:ls,useDeferredValue:function(e){var t=Ve();return ne===null?t.memoizedState=e:Vf(t,ne.memoizedState,e)},useTransition:function(){var e=ho(Nr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:_f,useSyncExternalStore:Tf,useId:Wf,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ta(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),l=zt(e),i=dt(r,l);i.payload=t,n!=null&&(i.callback=n),t=It(e,i,l),t!==null&&(Ge(t,e,l,r),gl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),l=zt(e),i=dt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=It(e,i,l),t!==null&&(Ge(t,e,l,r),gl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=zt(e),l=dt(n,r);l.tag=2,t!=null&&(l.callback=t),t=It(e,l,r),t!==null&&(Ge(t,e,r,n),gl(t,e,r))}};function Cu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!vr(n,r)||!vr(l,i):!0}function Kf(e,t,n){var r=!1,l=Dt,i=t.contextType;return typeof i=="object"&&i!==null?i=Be(i):(l=Re(t)?Jt:ve.current,r=t.contextTypes,i=(r=r!=null)?jn(e,l):Dt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Nu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function na(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ga(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Be(i):(i=Re(t)?Jt:ve.current,l.context=jn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ta(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ui.enqueueReplaceState(l,l.state,null),Wl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var n="",r=t;do n+=Vp(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function yo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ra(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var y0=typeof WeakMap=="function"?WeakMap:Map;function Xf(e,t,n){n=dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xl||(Xl=!0,pa=r),ra(e,t)},n}function Gf(e,t,n){n=dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ra(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ra(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Pu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new y0;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=T0.bind(null,e,t,n),t.then(e,e))}function Ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ju(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dt(-1,1),t.tag=2,It(n,t,1))),n.lanes|=1),e)}var g0=xt.ReactCurrentOwner,Ne=!1;function xe(e,t,n,r){t.child=e===null?Nf(t,null,n,r):Tn(t,e.child,n,r)}function _u(e,t,n,r,l){n=n.render;var i=t.ref;return Cn(t,l),r=ts(e,t,n,r,i,l),n=ns(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,gt(e,t,l)):(Q&&n&&Va(t),t.flags|=1,xe(e,t,r,l),t.child)}function Tu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!ds(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Jf(e,t,i,r,l)):(e=El(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:vr,n(o,r)&&e.ref===t.ref)return gt(e,t,l)}return t.flags|=1,e=Mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Jf(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(vr(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,gt(e,t,l)}return la(e,t,n,r,l)}function Zf(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(xn,Te),Te|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(xn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(xn,Te),Te|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(xn,Te),Te|=r;return xe(e,t,l,n),t.child}function qf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function la(e,t,n,r,l){var i=Re(n)?Jt:ve.current;return i=jn(t,i),Cn(t,l),n=ts(e,t,n,r,i,l),r=ns(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,gt(e,t,l)):(Q&&r&&Va(t),t.flags|=1,xe(e,t,n,l),t.child)}function Lu(e,t,n,r,l){if(Re(n)){var i=!0;Al(t)}else i=!1;if(Cn(t,l),t.stateNode===null)wl(e,t),Kf(t,n,r),na(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Re(n)?Jt:ve.current,u=jn(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Nu(t,o,r,u),Ct=!1;var h=t.memoizedState;o.state=h,Wl(t,r,o,l),s=t.memoizedState,a!==r||h!==s||Pe.current||Ct?(typeof d=="function"&&(ta(t,n,d,r),s=t.memoizedState),(a=Ct||Cu(t,n,a,r,h,s,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Rf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),o.props=u,m=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Be(s):(s=Re(n)?Jt:ve.current,s=jn(t,s));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||h!==s)&&Nu(t,o,r,s),Ct=!1,h=t.memoizedState,o.state=h,Wl(t,r,o,l);var v=t.memoizedState;a!==m||h!==v||Pe.current||Ct?(typeof w=="function"&&(ta(t,n,w,r),v=t.memoizedState),(u=Ct||Cu(t,n,u,r,h,v,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ia(e,t,n,r,i,l)}function ia(e,t,n,r,l,i){qf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&yu(t,n,!1),gt(e,t,i);r=t.stateNode,g0.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Tn(t,e.child,null,i),t.child=Tn(t,null,a,i)):xe(e,t,a,i),t.memoizedState=r.state,l&&yu(t,n,!0),t.child}function ed(e){var t=e.stateNode;t.pendingContext?hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hu(e,t.context,!1),Ja(e,t.containerInfo)}function $u(e,t,n,r,l){return _n(),Ha(l),t.flags|=256,xe(e,t,n,r),t.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function td(e,t,n){var r=t.pendingProps,l=Y.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),V(Y,l&1),e===null)return qo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=di(o,r,0,null),e=Gt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=aa(n),t.memoizedState=oa,e):is(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return v0(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Mt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=Mt(a,i):(i=Gt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?aa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=oa,r}return i=e.child,e=i.sibling,r=Mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function is(e,t){return t=di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ll(e,t,n,r){return r!==null&&Ha(r),Tn(t,e.child,null,n),e=is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function v0(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=yo(Error(k(422))),ll(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=di({mode:"visible",children:r.children},l,0,null),i=Gt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Tn(t,e.child,null,o),t.child.memoizedState=aa(o),t.memoizedState=oa,i);if(!(t.mode&1))return ll(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=yo(i,r,void 0),ll(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ne||a){if(r=se,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,yt(e,l),Ge(r,e,l,-1))}return fs(),r=yo(Error(k(421))),ll(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=L0.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Le=$t(l.nextSibling),$e=t,Q=!0,Ke=null,e!==null&&(De[Ae++]=ct,De[Ae++]=ft,De[Ae++]=Zt,ct=e.id,ft=e.overflow,Zt=t),t=is(t,r.children),t.flags|=4096,t)}function Iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function go(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function nd(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(xe(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,n,t);else if(e.tag===19)Iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Y,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Hl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),go(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Hl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}go(t,!0,n,null,i);break;case"together":go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),en|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function x0(e,t,n){switch(t.tag){case 3:ed(t),_n();break;case 5:jf(t);break;case 1:Re(t.type)&&Al(t);break;case 4:Ja(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;V(Bl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?td(e,t,n):(V(Y,Y.current&1),e=gt(e,t,n),e!==null?e.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Zf(e,t,n)}return gt(e,t,n)}var rd,sa,ld,id;rd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sa=function(){};ld=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Kt(lt.current);var i=null;switch(n){case"input":l=To(e,l),r=To(e,r),i=[];break;case"select":l=X({},l,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":l=Io(e,l),r=Io(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fl)}zo(n,r);var o;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var a=l[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&W("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};id=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function w0(e,t,n){var r=t.pendingProps;switch(Wa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Re(t.type)&&Dl(),he(t),null;case 3:return r=t.stateNode,Ln(),H(Pe),H(ve),qa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(nl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(ya(Ke),Ke=null))),sa(e,t),he(t),null;case 5:Za(t);var l=Kt(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)ld(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return he(t),null}if(e=Kt(lt.current),nl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[Sr]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(l=0;l<tr.length;l++)W(tr[l],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Bs(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":Ws(r,i),W("invalid",r)}zo(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&tl(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&tl(r.textContent,a,e),l=["children",""+a]):fr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":Yr(r),Vs(r,i,!0);break;case"textarea":Yr(r),Hs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Fl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$c(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[nt]=t,e[Sr]=r,rd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Mo(n,r),n){case"dialog":W("cancel",e),W("close",e),l=r;break;case"iframe":case"object":case"embed":W("load",e),l=r;break;case"video":case"audio":for(l=0;l<tr.length;l++)W(tr[l],e);l=r;break;case"source":W("error",e),l=r;break;case"img":case"image":case"link":W("error",e),W("load",e),l=r;break;case"details":W("toggle",e),l=r;break;case"input":Bs(e,r),l=To(e,r),W("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=X({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ws(e,r),l=Io(e,r),W("invalid",e);break;default:l=r}zo(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?zc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ic(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&dr(e,s):typeof s=="number"&&dr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(fr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&W("scroll",e):s!=null&&_a(e,i,s,o))}switch(n){case"input":Yr(e),Vs(e,r,!1);break;case"textarea":Yr(e),Hs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?wn(e,!!r.multiple,i,!1):r.defaultValue!=null&&wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)id(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Kt(Er.current),Kt(lt.current),nl(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:tl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&tl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return he(t),null;case 13:if(H(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Le!==null&&t.mode&1&&!(t.flags&128))Ef(),_n(),t.flags|=98560,i=!1;else if(i=nl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[nt]=t}else _n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else Ke!==null&&(ya(Ke),Ke=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?re===0&&(re=3):fs())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Ln(),sa(e,t),e===null&&xr(t.stateNode.containerInfo),he(t),null;case 10:return Ka(t.type._context),he(t),null;case 17:return Re(t.type)&&Dl(),he(t),null;case 19:if(H(Y),i=t.memoizedState,i===null)return he(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Kn(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Hl(e),o!==null){for(t.flags|=128,Kn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&Z()>In&&(t.flags|=128,r=!0,Kn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Hl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Q)return he(t),null}else 2*Z()-i.renderingStartTime>In&&n!==1073741824&&(t.flags|=128,r=!0,Kn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Z(),t.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return cs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function S0(e,t){switch(Wa(t),t.tag){case 1:return Re(t.type)&&Dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),H(Pe),H(ve),qa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Za(t),null;case 13:if(H(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Y),null;case 4:return Ln(),null;case 10:return Ka(t.type._context),null;case 22:case 23:return cs(),null;case 24:return null;default:return null}}var il=!1,ge=!1,k0=typeof WeakSet=="function"?WeakSet:Set,j=null;function vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function ua(e,t,n){try{n()}catch(r){G(e,t,r)}}var Ou=!1;function E0(e,t){if(Qo=Ol,e=cf(),Ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,u=0,d=0,m=e,h=null;t:for(;;){for(var w;m!==n||l!==0&&m.nodeType!==3||(a=o+l),m!==i||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++u===l&&(a=o),h===i&&++d===r&&(s=o),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yo={focusedElem:e,selectionRange:n},Ol=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,P=v.memoizedState,c=t.stateNode,f=c.getSnapshotBeforeUpdate(t.elementType===t.type?g:Qe(t.type,g),P);c.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(S){G(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return v=Ou,Ou=!1,v}function sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ua(t,n,i)}l=l.next}while(l!==r)}}function ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function od(e){var t=e.alternate;t!==null&&(e.alternate=null,od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Sr],delete t[Go],delete t[i0],delete t[o0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ad(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fl));else if(r!==4&&(e=e.child,e!==null))for(fa(e,t,n),e=e.sibling;e!==null;)fa(e,t,n),e=e.sibling}function da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(da(e,t,n),e=e.sibling;e!==null;)da(e,t,n),e=e.sibling}var ce=null,Ye=!1;function St(e,t,n){for(n=n.child;n!==null;)sd(e,t,n),n=n.sibling}function sd(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:ge||vn(n,t);case 6:var r=ce,l=Ye;ce=null,St(e,t,n),ce=r,Ye=l,ce!==null&&(Ye?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ye?(e=ce,n=n.stateNode,e.nodeType===8?uo(e.parentNode,n):e.nodeType===1&&uo(e,n),yr(e)):uo(ce,n.stateNode));break;case 4:r=ce,l=Ye,ce=n.stateNode.containerInfo,Ye=!0,St(e,t,n),ce=r,Ye=l;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ua(n,t,o),l=l.next}while(l!==r)}St(e,t,n);break;case 1:if(!ge&&(vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,St(e,t,n),ge=r):St(e,t,n);break;default:St(e,t,n)}}function Mu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new k0),t.forEach(function(r){var l=$0.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Ye=!1;break e;case 3:ce=a.stateNode.containerInfo,Ye=!0;break e;case 4:ce=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(ce===null)throw Error(k(160));sd(i,o,l),ce=null,Ye=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(u){G(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ud(t,e),t=t.sibling}function ud(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Ze(e),r&4){try{sr(3,e,e.return),ci(3,e)}catch(g){G(e,e.return,g)}try{sr(5,e,e.return)}catch(g){G(e,e.return,g)}}break;case 1:He(t,e),Ze(e),r&512&&n!==null&&vn(n,n.return);break;case 5:if(He(t,e),Ze(e),r&512&&n!==null&&vn(n,n.return),e.flags&32){var l=e.stateNode;try{dr(l,"")}catch(g){G(e,e.return,g)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Tc(l,i),Mo(a,o);var u=Mo(a,i);for(o=0;o<s.length;o+=2){var d=s[o],m=s[o+1];d==="style"?zc(l,m):d==="dangerouslySetInnerHTML"?Ic(l,m):d==="children"?dr(l,m):_a(l,d,m,u)}switch(a){case"input":Lo(l,i);break;case"textarea":Lc(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?wn(l,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?wn(l,!!i.multiple,i.defaultValue,!0):wn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Sr]=i}catch(g){G(e,e.return,g)}}break;case 6:if(He(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(g){G(e,e.return,g)}}break;case 3:if(He(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yr(t.containerInfo)}catch(g){G(e,e.return,g)}break;case 4:He(t,e),Ze(e);break;case 13:He(t,e),Ze(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ss=Z())),r&4&&Mu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||d,He(t,e),ge=u):He(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(j=e,d=e.child;d!==null;){for(m=j=d;j!==null;){switch(h=j,w=h.child,h.tag){case 0:case 11:case 14:case 15:sr(4,h,h.return);break;case 1:vn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(g){G(r,n,g)}}break;case 5:vn(h,h.return);break;case 22:if(h.memoizedState!==null){Du(m);continue}}w!==null?(w.return=h,j=w):Du(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{l=m.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Oc("display",o))}catch(g){G(e,e.return,g)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(g){G(e,e.return,g)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:He(t,e),Ze(e),r&4&&Mu(e);break;case 21:break;default:He(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ad(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(dr(l,""),r.flags&=-33);var i=zu(e);da(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zu(e);fa(e,a,o);break;default:throw Error(k(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function C0(e,t,n){j=e,cd(e)}function cd(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||il;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ge;a=il;var u=ge;if(il=o,(ge=s)&&!u)for(j=l;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?Au(l):s!==null?(s.return=o,j=s):Au(l);for(;i!==null;)j=i,cd(i),i=i.sibling;j=l,il=a,ge=u}Fu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,j=i):Fu(e)}}function Fu(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Su(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Su(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&yr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ge||t.flags&512&&ca(t)}catch(h){G(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Du(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Au(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ci(4,t)}catch(s){G(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){G(t,l,s)}}var i=t.return;try{ca(t)}catch(s){G(t,i,s)}break;case 5:var o=t.return;try{ca(t)}catch(s){G(t,o,s)}}}catch(s){G(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var N0=Math.ceil,Kl=xt.ReactCurrentDispatcher,os=xt.ReactCurrentOwner,Ue=xt.ReactCurrentBatchConfig,F=0,se=null,ee=null,de=0,Te=0,xn=bt(0),re=0,Rr=null,en=0,fi=0,as=0,ur=null,Ce=null,ss=0,In=1/0,st=null,Xl=!1,pa=null,Ot=null,ol=!1,jt=null,Gl=0,cr=0,ma=null,Sl=-1,kl=0;function we(){return F&6?Z():Sl!==-1?Sl:Sl=Z()}function zt(e){return e.mode&1?F&2&&de!==0?de&-de:s0.transition!==null?(kl===0&&(kl=Yc()),kl):(e=b,e!==0||(e=window.event,e=e===void 0?16:ef(e.type)),e):1}function Ge(e,t,n,r){if(50<cr)throw cr=0,ma=null,Error(k(185));Or(e,n,r),(!(F&2)||e!==se)&&(e===se&&(!(F&2)&&(fi|=n),re===4&&Pt(e,de)),je(e,r),n===1&&F===0&&!(t.mode&1)&&(In=Z()+500,ai&&Ut()))}function je(e,t){var n=e.callbackNode;sm(e,t);var r=Il(e,e===se?de:0);if(r===0)n!==null&&Ks(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ks(n),t===1)e.tag===0?a0(bu.bind(null,e)):wf(bu.bind(null,e)),r0(function(){!(F&6)&&Ut()}),n=null;else{switch(Kc(r)){case 1:n=Oa;break;case 4:n=Hc;break;case 16:n=$l;break;case 536870912:n=Qc;break;default:n=$l}n=vd(n,fd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fd(e,t){if(Sl=-1,kl=0,F&6)throw Error(k(327));var n=e.callbackNode;if(Nn()&&e.callbackNode!==n)return null;var r=Il(e,e===se?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jl(e,r);else{t=r;var l=F;F|=2;var i=pd();(se!==e||de!==t)&&(st=null,In=Z()+500,Xt(e,t));do try{j0();break}catch(a){dd(e,a)}while(!0);Ya(),Kl.current=i,F=l,ee!==null?t=0:(se=null,de=0,t=re)}if(t!==0){if(t===2&&(l=Uo(e),l!==0&&(r=l,t=ha(e,l))),t===1)throw n=Rr,Xt(e,0),Pt(e,r),je(e,Z()),n;if(t===6)Pt(e,r);else{if(l=e.current.alternate,!(r&30)&&!P0(l)&&(t=Jl(e,r),t===2&&(i=Uo(e),i!==0&&(r=i,t=ha(e,i))),t===1))throw n=Rr,Xt(e,0),Pt(e,r),je(e,Z()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Ht(e,Ce,st);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=ss+500-Z(),10<t)){if(Il(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Xo(Ht.bind(null,e,Ce,st),t);break}Ht(e,Ce,st);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Xe(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N0(r/1960))-r,10<r){e.timeoutHandle=Xo(Ht.bind(null,e,Ce,st),r);break}Ht(e,Ce,st);break;case 5:Ht(e,Ce,st);break;default:throw Error(k(329))}}}return je(e,Z()),e.callbackNode===n?fd.bind(null,e):null}function ha(e,t){var n=ur;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=Jl(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&ya(t)),e}function ya(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function P0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Je(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~as,t&=~fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function bu(e){if(F&6)throw Error(k(327));Nn();var t=Il(e,0);if(!(t&1))return je(e,Z()),null;var n=Jl(e,t);if(e.tag!==0&&n===2){var r=Uo(e);r!==0&&(t=r,n=ha(e,r))}if(n===1)throw n=Rr,Xt(e,0),Pt(e,t),je(e,Z()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,Ce,st),je(e,Z()),null}function us(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(In=Z()+500,ai&&Ut())}}function tn(e){jt!==null&&jt.tag===0&&!(F&6)&&Nn();var t=F;F|=1;var n=Ue.transition,r=b;try{if(Ue.transition=null,b=1,e)return e()}finally{b=r,Ue.transition=n,F=t,!(F&6)&&Ut()}}function cs(){Te=xn.current,H(xn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,n0(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dl();break;case 3:Ln(),H(Pe),H(ve),qa();break;case 5:Za(r);break;case 4:Ln();break;case 13:H(Y);break;case 19:H(Y);break;case 10:Ka(r.type._context);break;case 22:case 23:cs()}n=n.return}if(se=e,ee=e=Mt(e.current,null),de=Te=t,re=0,Rr=null,as=fi=en=0,Ce=ur=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Yt=null}return e}function dd(e,t){do{var n=ee;try{if(Ya(),vl.current=Yl,Ql){for(var r=K.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ql=!1}if(qt=0,ae=ne=K=null,ar=!1,Cr=0,os.current=null,n===null||n.return===null){re=1,Rr=t,ee=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=de,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Ru(o);if(w!==null){w.flags&=-257,ju(w,o,a,i,t),w.mode&1&&Pu(i,u,t),t=w,s=u;var v=t.updateQueue;if(v===null){var g=new Set;g.add(s),t.updateQueue=g}else v.add(s);break e}else{if(!(t&1)){Pu(i,u,t),fs();break e}s=Error(k(426))}}else if(Q&&a.mode&1){var P=Ru(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ju(P,o,a,i,t),Ha($n(s,a));break e}}i=s=$n(s,a),re!==4&&(re=2),ur===null?ur=[i]:ur.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=Xf(i,s,t);wu(i,c);break e;case 1:a=s;var f=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ot===null||!Ot.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Gf(i,a,t);wu(i,S);break e}}i=i.return}while(i!==null)}hd(n)}catch(C){t=C,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function pd(){var e=Kl.current;return Kl.current=Yl,e===null?Yl:e}function fs(){(re===0||re===3||re===2)&&(re=4),se===null||!(en&268435455)&&!(fi&268435455)||Pt(se,de)}function Jl(e,t){var n=F;F|=2;var r=pd();(se!==e||de!==t)&&(st=null,Xt(e,t));do try{R0();break}catch(l){dd(e,l)}while(!0);if(Ya(),F=n,Kl.current=r,ee!==null)throw Error(k(261));return se=null,de=0,re}function R0(){for(;ee!==null;)md(ee)}function j0(){for(;ee!==null&&!qp();)md(ee)}function md(e){var t=gd(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?hd(e):ee=t,os.current=null}function hd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=S0(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=w0(n,t,Te),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Ht(e,t,n){var r=b,l=Ue.transition;try{Ue.transition=null,b=1,_0(e,t,n,r)}finally{Ue.transition=l,b=r}return null}function _0(e,t,n,r){do Nn();while(jt!==null);if(F&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(um(e,i),e===se&&(ee=se=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,vd($l,function(){return Nn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ue.transition,Ue.transition=null;var o=b;b=1;var a=F;F|=4,os.current=null,E0(e,n),ud(n,e),Xm(Yo),Ol=!!Qo,Yo=Qo=null,e.current=n,C0(n),em(),F=a,b=o,Ue.transition=i}else e.current=n;if(ol&&(ol=!1,jt=e,Gl=l),i=e.pendingLanes,i===0&&(Ot=null),rm(n.stateNode),je(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Xl)throw Xl=!1,e=pa,pa=null,e;return Gl&1&&e.tag!==0&&Nn(),i=e.pendingLanes,i&1?e===ma?cr++:(cr=0,ma=e):cr=0,Ut(),null}function Nn(){if(jt!==null){var e=Kc(Gl),t=Ue.transition,n=b;try{if(Ue.transition=null,b=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,Gl=0,F&6)throw Error(k(331));var l=F;for(F|=4,j=e.current;j!==null;){var i=j,o=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(j=u;j!==null;){var d=j;switch(d.tag){case 0:case 11:case 15:sr(8,d,i)}var m=d.child;if(m!==null)m.return=d,j=m;else for(;j!==null;){d=j;var h=d.sibling,w=d.return;if(od(d),d===u){j=null;break}if(h!==null){h.return=w,j=h;break}j=w}}}var v=i.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var P=g.sibling;g.sibling=null,g=P}while(g!==null)}}j=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:sr(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,j=c;break e}j=i.return}}var f=e.current;for(j=f;j!==null;){o=j;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,j=p;else e:for(o=f;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ci(9,a)}}catch(C){G(a,a.return,C)}if(a===o){j=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,j=S;break e}j=a.return}}if(F=l,Ut(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{b=n,Ue.transition=t}}return!1}function Uu(e,t,n){t=$n(n,t),t=Xf(e,t,1),e=It(e,t,1),t=we(),e!==null&&(Or(e,1,t),je(e,t))}function G(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=$n(n,e),e=Gf(t,e,1),t=It(t,e,1),e=we(),t!==null&&(Or(t,1,e),je(t,e));break}}t=t.return}}function T0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(de&n)===n&&(re===4||re===3&&(de&130023424)===de&&500>Z()-ss?Xt(e,0):as|=n),je(e,t)}function yd(e,t){t===0&&(e.mode&1?(t=Gr,Gr<<=1,!(Gr&130023424)&&(Gr=4194304)):t=1);var n=we();e=yt(e,t),e!==null&&(Or(e,t,n),je(e,n))}function L0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yd(e,n)}function $0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),yd(e,n)}var gd;gd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,x0(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,Q&&t.flags&1048576&&Sf(t,Ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wl(e,t),e=t.pendingProps;var l=jn(t,ve.current);Cn(t,n),l=ts(null,t,r,e,l,n);var i=ns();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(i=!0,Al(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ga(t),l.updater=ui,t.stateNode=l,l._reactInternals=t,na(t,r,e,n),t=ia(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&Va(t),xe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=O0(r),e=Qe(r,e),l){case 0:t=la(null,t,r,e,n);break e;case 1:t=Lu(null,t,r,e,n);break e;case 11:t=_u(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,Qe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Qe(r,l),la(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Qe(r,l),Lu(e,t,r,l,n);case 3:e:{if(ed(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Rf(e,t),Wl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=$n(Error(k(423)),t),t=$u(e,t,r,n,l);break e}else if(r!==l){l=$n(Error(k(424)),t),t=$u(e,t,r,n,l);break e}else for(Le=$t(t.stateNode.containerInfo.firstChild),$e=t,Q=!0,Ke=null,n=Nf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===l){t=gt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return jf(t),e===null&&qo(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ko(r,l)?o=null:i!==null&&Ko(r,i)&&(t.flags|=32),qf(e,t),xe(e,t,o,n),t.child;case 6:return e===null&&qo(t),null;case 13:return td(e,t,n);case 4:return Ja(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Qe(r,l),_u(e,t,r,l,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,V(Bl,r._currentValue),r._currentValue=o,i!==null)if(Je(i.value,o)){if(i.children===l.children&&!Pe.current){t=gt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=dt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ea(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ea(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}xe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Cn(t,n),l=Be(l),r=r(l),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,l=Qe(r,t.pendingProps),l=Qe(r.type,l),Tu(e,t,r,l,n);case 15:return Jf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Qe(r,l),wl(e,t),t.tag=1,Re(r)?(e=!0,Al(t)):e=!1,Cn(t,n),Kf(t,r,l),na(t,r,l,n),ia(null,t,r,!0,e,n);case 19:return nd(e,t,n);case 22:return Zf(e,t,n)}throw Error(k(156,t.tag))};function vd(e,t){return Wc(e,t)}function I0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new I0(e,t,n,r)}function ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function O0(e){if(typeof e=="function")return ds(e)?1:0;if(e!=null){if(e=e.$$typeof,e===La)return 11;if(e===$a)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function El(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")ds(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case un:return Gt(n.children,l,i,t);case Ta:o=8,l|=8;break;case Po:return e=be(12,n,t,l|2),e.elementType=Po,e.lanes=i,e;case Ro:return e=be(13,n,t,l),e.elementType=Ro,e.lanes=i,e;case jo:return e=be(19,n,t,l),e.elementType=jo,e.lanes=i,e;case Rc:return di(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nc:o=10;break e;case Pc:o=9;break e;case La:o=11;break e;case $a:o=14;break e;case Et:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=be(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Gt(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function di(e,t,n,r){return e=be(22,e,r,t),e.elementType=Rc,e.lanes=n,e.stateNode={isHidden:!1},e}function vo(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function xo(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function z0(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zi(0),this.expirationTimes=Zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ps(e,t,n,r,l,i,o,a,s){return e=new z0(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ga(i),e}function M0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xd(e){if(!e)return Dt;e=e._reactInternals;e:{if(rn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Re(n))return xf(e,n,t)}return t}function wd(e,t,n,r,l,i,o,a,s){return e=ps(n,r,!0,e,l,i,o,a,s),e.context=xd(null),n=e.current,r=we(),l=zt(n),i=dt(r,l),i.callback=t??null,It(n,i,l),e.current.lanes=l,Or(e,l,r),je(e,r),e}function pi(e,t,n,r){var l=t.current,i=we(),o=zt(l);return n=xd(n),t.context===null?t.context=n:t.pendingContext=n,t=dt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=It(l,t,o),e!==null&&(Ge(e,l,o,i),gl(e,l,o)),o}function Zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ms(e,t){Bu(e,t),(e=e.alternate)&&Bu(e,t)}function F0(){return null}var Sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function hs(e){this._internalRoot=e}mi.prototype.render=hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));pi(e,t,null,null)};mi.prototype.unmount=hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tn(function(){pi(null,e,null,null)}),t[ht]=null}};function mi(e){this._internalRoot=e}mi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&qc(e)}};function ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function D0(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=Zl(o);i.call(u)}}var o=wd(t,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=o,e[ht]=o.current,xr(e.nodeType===8?e.parentNode:e),tn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var u=Zl(s);a.call(u)}}var s=ps(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=s,e[ht]=s.current,xr(e.nodeType===8?e.parentNode:e),tn(function(){pi(t,s,n,r)}),s}function yi(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=Zl(o);a.call(s)}}pi(t,o,e,l)}else o=D0(n,t,e,l,r);return Zl(o)}Xc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(za(t,n|1),je(t,Z()),!(F&6)&&(In=Z()+500,Ut()))}break;case 13:tn(function(){var r=yt(e,1);if(r!==null){var l=we();Ge(r,e,1,l)}}),ms(e,1)}};Ma=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=we();Ge(t,e,134217728,n)}ms(e,134217728)}};Gc=function(e){if(e.tag===13){var t=zt(e),n=yt(e,t);if(n!==null){var r=we();Ge(n,e,t,r)}ms(e,t)}};Jc=function(){return b};Zc=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};Do=function(e,t,n){switch(t){case"input":if(Lo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=oi(r);if(!l)throw Error(k(90));_c(r),Lo(r,l)}}}break;case"textarea":Lc(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}};Dc=us;Ac=tn;var A0={usingClientEntryPoint:!1,Events:[Mr,pn,oi,Mc,Fc,us]},Xn={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b0={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bc(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||F0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{ni=al.inject(b0),rt=al}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ys(t))throw Error(k(200));return M0(e,t,null,n)};ze.createRoot=function(e,t){if(!ys(e))throw Error(k(299));var n=!1,r="",l=Sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ps(e,1,!1,null,null,n,!1,r,l),e[ht]=t.current,xr(e.nodeType===8?e.parentNode:e),new hs(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Bc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return tn(e)};ze.hydrate=function(e,t,n){if(!hi(t))throw Error(k(200));return yi(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!ys(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Sd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=wd(t,null,e,1,n??null,l,!1,i,o),e[ht]=t.current,xr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new mi(t)};ze.render=function(e,t,n){if(!hi(t))throw Error(k(200));return yi(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!hi(e))throw Error(k(40));return e._reactRootContainer?(tn(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[ht]=null})}),!0):!1};ze.unstable_batchedUpdates=us;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return yi(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function kd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kd)}catch(e){console.error(e)}}kd(),Sc.exports=ze;var U0=Sc.exports,Wu=U0;Co.createRoot=Wu.createRoot,Co.hydrateRoot=Wu.hydrateRoot;var gs={};Object.defineProperty(gs,"__esModule",{value:!0});gs.parse=K0;gs.serialize=X0;const B0=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,V0=/^[\u0021-\u003A\u003C-\u007E]*$/,W0=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,H0=/^[\u0020-\u003A\u003D-\u007E]*$/,Q0=Object.prototype.toString,Y0=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function K0(e,t){const n=new Y0,r=e.length;if(r<2)return n;const l=(t==null?void 0:t.decode)||G0;let i=0;do{const o=e.indexOf("=",i);if(o===-1)break;const a=e.indexOf(";",i),s=a===-1?r:a;if(o>s){i=e.lastIndexOf(";",o-1)+1;continue}const u=Hu(e,i,o),d=Qu(e,o,u),m=e.slice(u,d);if(n[m]===void 0){let h=Hu(e,o+1,s),w=Qu(e,s,h);const v=l(e.slice(h,w));n[m]=v}i=s+1}while(i<r);return n}function Hu(e,t,n){do{const r=e.charCodeAt(t);if(r!==32&&r!==9)return t}while(++t<n);return n}function Qu(e,t,n){for(;t>n;){const r=e.charCodeAt(--t);if(r!==32&&r!==9)return t+1}return n}function X0(e,t,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!B0.test(e))throw new TypeError(`argument name is invalid: ${e}`);const l=r(t);if(!V0.test(l))throw new TypeError(`argument val is invalid: ${t}`);let i=e+"="+l;if(!n)return i;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);i+="; Max-Age="+n.maxAge}if(n.domain){if(!W0.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);i+="; Domain="+n.domain}if(n.path){if(!H0.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);i+="; Path="+n.path}if(n.expires){if(!J0(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);i+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.partitioned&&(i+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"none":i+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return i}function G0(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function J0(e){return Q0.call(e)==="[object Date]"}var Yu="popstate";function Z0(e={}){function t(r,l){let{pathname:i,search:o,hash:a}=r.location;return ga("",{pathname:i,search:o,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:jr(l)}return eh(t,n,null,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ot(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function q0(){return Math.random().toString(36).substring(2,10)}function Ku(e,t){return{usr:e.state,key:e.key,idx:t}}function ga(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Dr(t):t,state:n,key:t&&t.key||r||q0()}}function jr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Dr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function eh(e,t,n,r={}){let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,a="POP",s=null,u=d();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function d(){return(o.state||{idx:null}).idx}function m(){a="POP";let P=d(),c=P==null?null:P-u;u=P,s&&s({action:a,location:g.location,delta:c})}function h(P,c){a="PUSH";let f=ga(g.location,P,c);u=d()+1;let p=Ku(f,u),S=g.createHref(f);try{o.pushState(p,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;l.location.assign(S)}i&&s&&s({action:a,location:g.location,delta:1})}function w(P,c){a="REPLACE";let f=ga(g.location,P,c);u=d();let p=Ku(f,u),S=g.createHref(f);o.replaceState(p,"",S),i&&s&&s({action:a,location:g.location,delta:0})}function v(P){return th(P)}let g={get action(){return a},get location(){return e(l,o)},listen(P){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Yu,m),s=P,()=>{l.removeEventListener(Yu,m),s=null}},createHref(P){return t(l,P)},createURL:v,encodeLocation(P){let c=v(P);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:w,go(P){return o.go(P)}};return g}function th(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),le(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:jr(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Ed(e,t,n="/"){return nh(e,t,n,!1)}function nh(e,t,n,r){let l=typeof t=="string"?Dr(t):t,i=vt(l.pathname||"/",n);if(i==null)return null;let o=Cd(e);rh(o);let a=null;for(let s=0;a==null&&s<o.length;++s){let u=mh(i);a=dh(o[s],u,r)}return a}function Cd(e,t=[],n=[],r=""){let l=(i,o,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(le(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length));let u=pt([r,s.relativePath]),d=n.concat(s);i.children&&i.children.length>0&&(le(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Cd(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:ch(u,i.index),routesMeta:d})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,o);else for(let s of Nd(i.path))l(i,o,s)}),t}function Nd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Nd(r.join("/")),a=[];return a.push(...o.map(s=>s===""?i:[i,s].join("/"))),l&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function rh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:fh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var lh=/^:[\w-]+$/,ih=3,oh=2,ah=1,sh=10,uh=-2,Xu=e=>e==="*";function ch(e,t){let n=e.split("/"),r=n.length;return n.some(Xu)&&(r+=uh),t&&(r+=oh),n.filter(l=>!Xu(l)).reduce((l,i)=>l+(lh.test(i)?ih:i===""?ah:sh),r)}function fh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function dh(e,t,n=!1){let{routesMeta:r}=e,l={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",m=ql({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),h=s.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=ql({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!m)return null;Object.assign(l,m.params),o.push({params:l,pathname:pt([i,m.pathname]),pathnameBase:vh(pt([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=pt([i,m.pathnameBase]))}return o}function ql(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ph(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((u,{paramName:d,isOptional:m},h)=>{if(d==="*"){let v=a[h]||"";o=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const w=a[h];return m&&!w?u[d]=void 0:u[d]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function ph(e,t=!1,n=!0){ot(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function mh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ot(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function vt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function hh(e,t="/"){let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Dr(e):e;return{pathname:n?n.startsWith("/")?n:yh(n,t):t,search:xh(r),hash:wh(l)}}function yh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function wo(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pd(e){let t=gh(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Rd(e,t,n,r=!1){let l;typeof e=="string"?l=Dr(e):(l={...e},le(!l.pathname||!l.pathname.includes("?"),wo("?","pathname","search",l)),le(!l.pathname||!l.pathname.includes("#"),wo("#","pathname","hash",l)),le(!l.search||!l.search.includes("#"),wo("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,a;if(o==null)a=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;l.pathname=h.join("/")}a=m>=0?t[m]:"/"}let s=hh(l,a),u=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}var pt=e=>e.join("/").replace(/\/\/+/g,"/"),vh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var jd=["POST","PUT","PATCH","DELETE"];new Set(jd);var kh=["GET",...jd];new Set(kh);var Dn=x.createContext(null);Dn.displayName="DataRouter";var gi=x.createContext(null);gi.displayName="DataRouterState";var _d=x.createContext({isTransitioning:!1});_d.displayName="ViewTransition";var Eh=x.createContext(new Map);Eh.displayName="Fetchers";var Ch=x.createContext(null);Ch.displayName="Await";var at=x.createContext(null);at.displayName="Navigation";var vi=x.createContext(null);vi.displayName="Location";var wt=x.createContext({outlet:null,matches:[],isDataRoute:!1});wt.displayName="Route";var vs=x.createContext(null);vs.displayName="RouteError";function Nh(e,{relative:t}={}){le(Ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=x.useContext(at),{hash:l,pathname:i,search:o}=br(e,{relative:t}),a=i;return n!=="/"&&(a=i==="/"?n:pt([n,i])),r.createHref({pathname:a,search:o,hash:l})}function Ar(){return x.useContext(vi)!=null}function ln(){return le(Ar(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(vi).location}var Td="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ld(e){x.useContext(at).static||x.useLayoutEffect(e)}function Ph(){let{isDataRoute:e}=x.useContext(wt);return e?Ah():Rh()}function Rh(){le(Ar(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(Dn),{basename:t,navigator:n}=x.useContext(at),{matches:r}=x.useContext(wt),{pathname:l}=ln(),i=JSON.stringify(Pd(r)),o=x.useRef(!1);return Ld(()=>{o.current=!0}),x.useCallback((s,u={})=>{if(ot(o.current,Td),!o.current)return;if(typeof s=="number"){n.go(s);return}let d=Rd(s,JSON.parse(i),l,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pt([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,i,l,e])}x.createContext(null);function br(e,{relative:t}={}){let{matches:n}=x.useContext(wt),{pathname:r}=ln(),l=JSON.stringify(Pd(n));return x.useMemo(()=>Rd(e,JSON.parse(l),r,t==="path"),[e,l,r,t])}function jh(e,t,n,r){le(Ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=x.useContext(at),{matches:i}=x.useContext(wt),o=i[i.length-1],a=o?o.params:{},s=o?o.pathname:"/",u=o?o.pathnameBase:"/",d=o&&o.route;{let c=d&&d.path||"";$d(s,!d||c.endsWith("*")||c.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${c}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${c}"> to <Route path="${c==="/"?"*":`${c}/*`}">.`)}let m=ln(),h;h=m;let w=h.pathname||"/",v=w;if(u!=="/"){let c=u.replace(/^\//,"").split("/");v="/"+w.replace(/^\//,"").split("/").slice(c.length).join("/")}let g=Ed(e,{pathname:v});return ot(d||g!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),ot(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Ih(g&&g.map(c=>Object.assign({},c,{params:Object.assign({},a,c.params),pathname:pt([u,l.encodeLocation?l.encodeLocation(c.pathname).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?u:pt([u,l.encodeLocation?l.encodeLocation(c.pathnameBase).pathname:c.pathnameBase])})),i,n,r)}function _h(){let e=Dh(),t=Sh(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:i},"ErrorBoundary")," or"," ",x.createElement("code",{style:i},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:l},n):null,o)}var Th=x.createElement(_h,null),Lh=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?x.createElement(wt.Provider,{value:this.props.routeContext},x.createElement(vs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $h({routeContext:e,match:t,children:n}){let r=x.useContext(Dn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(wt.Provider,{value:e},n)}function Ih(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,i=n==null?void 0:n.errors;if(i!=null){let s=l.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);le(s>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),l=l.slice(0,Math.min(l.length,s+1))}let o=!1,a=-1;if(n)for(let s=0;s<l.length;s++){let u=l[s];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(a=s),u.route.id){let{loaderData:d,errors:m}=n,h=u.route.loader&&!d.hasOwnProperty(u.route.id)&&(!m||m[u.route.id]===void 0);if(u.route.lazy||h){o=!0,a>=0?l=l.slice(0,a+1):l=[l[0]];break}}}return l.reduceRight((s,u,d)=>{let m,h=!1,w=null,v=null;n&&(m=i&&u.route.id?i[u.route.id]:void 0,w=u.route.errorElement||Th,o&&(a<0&&d===0?($d("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,v=null):a===d&&(h=!0,v=u.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,d+1)),P=()=>{let c;return m?c=w:h?c=v:u.route.Component?c=x.createElement(u.route.Component,null):u.route.element?c=u.route.element:c=s,x.createElement($h,{match:u,routeContext:{outlet:s,matches:g,isDataRoute:n!=null},children:c})};return n&&(u.route.ErrorBoundary||u.route.errorElement||d===0)?x.createElement(Lh,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:P(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):P()},null)}function xs(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Oh(e){let t=x.useContext(Dn);return le(t,xs(e)),t}function zh(e){let t=x.useContext(gi);return le(t,xs(e)),t}function Mh(e){let t=x.useContext(wt);return le(t,xs(e)),t}function ws(e){let t=Mh(e),n=t.matches[t.matches.length-1];return le(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Fh(){return ws("useRouteId")}function Dh(){var r;let e=x.useContext(vs),t=zh("useRouteError"),n=ws("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Ah(){let{router:e}=Oh("useNavigate"),t=ws("useNavigate"),n=x.useRef(!1);return Ld(()=>{n.current=!0}),x.useCallback(async(l,i={})=>{ot(n.current,Td),n.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:t,...i}))},[e,t])}var Gu={};function $d(e,t,n){!t&&!Gu[e]&&(Gu[e]=!0,ot(!1,n))}x.memo(bh);function bh({routes:e,future:t,state:n}){return jh(e,void 0,n,t)}function Uh({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:l,static:i=!1}){le(!Ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),a=x.useMemo(()=>({basename:o,navigator:l,static:i,future:{}}),[o,l,i]);typeof n=="string"&&(n=Dr(n));let{pathname:s="/",search:u="",hash:d="",state:m=null,key:h="default"}=n,w=x.useMemo(()=>{let v=vt(s,o);return v==null?null:{location:{pathname:v,search:u,hash:d,state:m,key:h},navigationType:r}},[o,s,u,d,m,h,r]);return ot(w!=null,`<Router basename="${o}"> is not able to match the URL "${s}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:x.createElement(at.Provider,{value:a},x.createElement(vi.Provider,{children:t,value:w}))}var Cl="get",Nl="application/x-www-form-urlencoded";function xi(e){return e!=null&&typeof e.tagName=="string"}function Bh(e){return xi(e)&&e.tagName.toLowerCase()==="button"}function Vh(e){return xi(e)&&e.tagName.toLowerCase()==="form"}function Wh(e){return xi(e)&&e.tagName.toLowerCase()==="input"}function Hh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qh(e,t){return e.button===0&&(!t||t==="_self")&&!Hh(e)}var sl=null;function Yh(){if(sl===null)try{new FormData(document.createElement("form"),0),sl=!1}catch{sl=!0}return sl}var Kh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function So(e){return e!=null&&!Kh.has(e)?(ot(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nl}"`),null):e}function Xh(e,t){let n,r,l,i,o;if(Vh(e)){let a=e.getAttribute("action");r=a?vt(a,t):null,n=e.getAttribute("method")||Cl,l=So(e.getAttribute("enctype"))||Nl,i=new FormData(e)}else if(Bh(e)||Wh(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?vt(s,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Cl,l=So(e.getAttribute("formenctype"))||So(a.getAttribute("enctype"))||Nl,i=new FormData(a,e),!Yh()){let{name:u,type:d,value:m}=e;if(d==="image"){let h=u?`${u}.`:"";i.append(`${h}x`,"0"),i.append(`${h}y`,"0")}else u&&i.append(u,m)}}else{if(xi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Cl,r=null,l=Nl,o=e}return i&&l==="text/plain"&&(o=i,i=void 0),{action:r,method:n.toLowerCase(),encType:l,formData:i,body:o}}function Ss(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Gh(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Zh(e,t,n){let r=await Promise.all(e.map(async l=>{let i=t.routes[l.route.id];if(i){let o=await Gh(i,n);return o.links?o.links():[]}return[]}));return ny(r.flat(1).filter(Jh).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Ju(e,t,n,r,l,i){let o=(s,u)=>n[u]?s.route.id!==n[u].route.id:!0,a=(s,u)=>{var d;return n[u].pathname!==s.pathname||((d=n[u].route.path)==null?void 0:d.endsWith("*"))&&n[u].params["*"]!==s.params["*"]};return i==="assets"?t.filter((s,u)=>o(s,u)||a(s,u)):i==="data"?t.filter((s,u)=>{var m;let d=r.routes[s.route.id];if(!d||!d.hasLoader)return!1;if(o(s,u)||a(s,u))return!0;if(s.route.shouldRevalidate){let h=s.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function qh(e,t,{includeHydrateFallback:n}={}){return ey(e.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let i=[l.module];return l.clientActionModule&&(i=i.concat(l.clientActionModule)),l.clientLoaderModule&&(i=i.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(i=i.concat(l.hydrateFallbackModule)),l.imports&&(i=i.concat(l.imports)),i}).flat(1))}function ey(e){return[...new Set(e)]}function ty(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function ny(e,t){let n=new Set;return new Set(t),e.reduce((r,l)=>{let i=JSON.stringify(ty(l));return n.has(i)||(n.add(i),r.push({key:i,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ry=new Set([100,101,204,205]);function ly(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&vt(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Id(){let e=x.useContext(Dn);return Ss(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function iy(){let e=x.useContext(gi);return Ss(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ks=x.createContext(void 0);ks.displayName="FrameworkContext";function Od(){let e=x.useContext(ks);return Ss(e,"You must render this element inside a <HydratedRouter> element"),e}function oy(e,t){let n=x.useContext(ks),[r,l]=x.useState(!1),[i,o]=x.useState(!1),{onFocus:a,onBlur:s,onMouseEnter:u,onMouseLeave:d,onTouchStart:m}=t,h=x.useRef(null);x.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let g=c=>{c.forEach(f=>{o(f.isIntersecting)})},P=new IntersectionObserver(g,{threshold:.5});return h.current&&P.observe(h.current),()=>{P.disconnect()}}},[e]),x.useEffect(()=>{if(r){let g=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(g)}}},[r]);let w=()=>{l(!0)},v=()=>{l(!1),o(!1)};return n?e!=="intent"?[i,h,{}]:[i,h,{onFocus:Gn(a,w),onBlur:Gn(s,v),onMouseEnter:Gn(u,w),onMouseLeave:Gn(d,v),onTouchStart:Gn(m,w)}]:[!1,h,{}]}function Gn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ay({page:e,...t}){let{router:n}=Id(),r=x.useMemo(()=>Ed(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?x.createElement(uy,{page:e,matches:r,...t}):null}function sy(e){let{manifest:t,routeModules:n}=Od(),[r,l]=x.useState([]);return x.useEffect(()=>{let i=!1;return Zh(e,t,n).then(o=>{i||l(o)}),()=>{i=!0}},[e,t,n]),r}function uy({page:e,matches:t,...n}){let r=ln(),{manifest:l,routeModules:i}=Od(),{basename:o}=Id(),{loaderData:a,matches:s}=iy(),u=x.useMemo(()=>Ju(e,t,s,l,r,"data"),[e,t,s,l,r]),d=x.useMemo(()=>Ju(e,t,s,l,r,"assets"),[e,t,s,l,r]),m=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,g=!1;if(t.forEach(c=>{var p;let f=l.routes[c.route.id];!f||!f.hasLoader||(!u.some(S=>S.route.id===c.route.id)&&c.route.id in a&&((p=i[c.route.id])!=null&&p.shouldRevalidate)||f.hasClientLoader?g=!0:v.add(c.route.id))}),v.size===0)return[];let P=ly(e,o);return g&&v.size>0&&P.searchParams.set("_routes",t.filter(c=>v.has(c.route.id)).map(c=>c.route.id).join(",")),[P.pathname+P.search]},[o,a,r,l,u,t,e,i]),h=x.useMemo(()=>qh(d,l),[d,l]),w=sy(d);return x.createElement(x.Fragment,null,m.map(v=>x.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),h.map(v=>x.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),w.map(({key:v,link:g})=>x.createElement("link",{key:v,...g})))}function cy(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var zd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zd&&(window.__reactRouterVersion="7.6.1")}catch{}function fy({basename:e,children:t,window:n}){let r=x.useRef();r.current==null&&(r.current=Z0({window:n,v5Compat:!0}));let l=r.current,[i,o]=x.useState({action:l.action,location:l.location}),a=x.useCallback(s=>{x.startTransition(()=>o(s))},[o]);return x.useLayoutEffect(()=>l.listen(a),[l,a]),x.createElement(Uh,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:l})}var Md=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fd=x.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:l,reloadDocument:i,replace:o,state:a,target:s,to:u,preventScrollReset:d,viewTransition:m,...h},w){let{basename:v}=x.useContext(at),g=typeof u=="string"&&Md.test(u),P,c=!1;if(typeof u=="string"&&g&&(P=u,zd))try{let M=new URL(window.location.href),L=u.startsWith("//")?new URL(M.protocol+u):new URL(u),Ee=vt(L.pathname,v);L.origin===M.origin&&Ee!=null?u=Ee+L.search+L.hash:c=!0}catch{ot(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let f=Nh(u,{relative:l}),[p,S,C]=oy(r,h),R=hy(u,{replace:o,state:a,target:s,preventScrollReset:d,relative:l,viewTransition:m});function E(M){t&&t(M),M.defaultPrevented||R(M)}let T=x.createElement("a",{...h,...C,href:P||f,onClick:c||i?t:E,ref:cy(w,S),target:s,"data-discover":!g&&n==="render"?"true":void 0});return p&&!g?x.createElement(x.Fragment,null,T,x.createElement(ay,{page:f})):T});Fd.displayName="Link";var dy=x.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:l=!1,style:i,to:o,viewTransition:a,children:s,...u},d){let m=br(o,{relative:u.relative}),h=ln(),w=x.useContext(gi),{navigator:v,basename:g}=x.useContext(at),P=w!=null&&wy(m)&&a===!0,c=v.encodeLocation?v.encodeLocation(m).pathname:m.pathname,f=h.pathname,p=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(f=f.toLowerCase(),p=p?p.toLowerCase():null,c=c.toLowerCase()),p&&g&&(p=vt(p,g)||p);const S=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let C=f===c||!l&&f.startsWith(c)&&f.charAt(S)==="/",R=p!=null&&(p===c||!l&&p.startsWith(c)&&p.charAt(c.length)==="/"),E={isActive:C,isPending:R,isTransitioning:P},T=C?t:void 0,M;typeof r=="function"?M=r(E):M=[r,C?"active":null,R?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let L=typeof i=="function"?i(E):i;return x.createElement(Fd,{...u,"aria-current":T,className:M,ref:d,style:L,to:o,viewTransition:a},typeof s=="function"?s(E):s)});dy.displayName="NavLink";var py=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:l,state:i,method:o=Cl,action:a,onSubmit:s,relative:u,preventScrollReset:d,viewTransition:m,...h},w)=>{let v=vy(),g=xy(a,{relative:u}),P=o.toLowerCase()==="get"?"get":"post",c=typeof a=="string"&&Md.test(a),f=p=>{if(s&&s(p),p.defaultPrevented)return;p.preventDefault();let S=p.nativeEvent.submitter,C=(S==null?void 0:S.getAttribute("formmethod"))||o;v(S||p.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:l,state:i,relative:u,preventScrollReset:d,viewTransition:m})};return x.createElement("form",{ref:w,method:P,action:g,onSubmit:r?s:f,...h,"data-discover":!c&&e==="render"?"true":void 0})});py.displayName="Form";function my(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dd(e){let t=x.useContext(Dn);return le(t,my(e)),t}function hy(e,{target:t,replace:n,state:r,preventScrollReset:l,relative:i,viewTransition:o}={}){let a=Ph(),s=ln(),u=br(e,{relative:i});return x.useCallback(d=>{if(Qh(d,t)){d.preventDefault();let m=n!==void 0?n:jr(s)===jr(u);a(e,{replace:m,state:r,preventScrollReset:l,relative:i,viewTransition:o})}},[s,a,u,n,r,t,e,l,i,o])}var yy=0,gy=()=>`__${String(++yy)}__`;function vy(){let{router:e}=Dd("useSubmit"),{basename:t}=x.useContext(at),n=Fh();return x.useCallback(async(r,l={})=>{let{action:i,method:o,encType:a,formData:s,body:u}=Xh(r,t);if(l.navigate===!1){let d=l.fetcherKey||gy();await e.fetch(d,n,l.action||i,{preventScrollReset:l.preventScrollReset,formData:s,body:u,formMethod:l.method||o,formEncType:l.encType||a,flushSync:l.flushSync})}else await e.navigate(l.action||i,{preventScrollReset:l.preventScrollReset,formData:s,body:u,formMethod:l.method||o,formEncType:l.encType||a,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,t,n])}function xy(e,{relative:t}={}){let{basename:n}=x.useContext(at),r=x.useContext(wt);le(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),i={...br(e||".",{relative:t})},o=ln();if(e==null){i.search=o.search;let a=new URLSearchParams(i.search),s=a.getAll("index");if(s.some(d=>d==="")){a.delete("index"),s.filter(m=>m).forEach(m=>a.append("index",m));let d=a.toString();i.search=d?`?${d}`:""}}return(!e||e===".")&&l.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:pt([n,i.pathname])),jr(i)}function wy(e,t={}){let n=x.useContext(_d);le(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Dd("useViewTransitionState"),l=br(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=vt(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=vt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ql(l.pathname,o)!=null||ql(l.pathname,i)!=null}[...ry];const Zu=["Full-Stack Developer","Tech Enthusiast","Code Craftsman","Problem Solver"],Sy=(e=100,t=50,n=2e3)=>{const[r,l]=x.useState(""),[i,o]=x.useState(!1),[a,s]=x.useState(0);return x.useEffect(()=>{const u=Zu[a],m=setTimeout(()=>{if(!i&&r===u){setTimeout(()=>o(!0),n);return}if(i&&r===""){o(!1),s(h=>(h+1)%Zu.length);return}l(h=>i?h.slice(0,-1):u.slice(0,h.length+1))},i?t:e);return()=>clearTimeout(m)},[r,i,a,e,t,n]),r};function ky(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ey(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Cy=function(){function e(n){var r=this;this._insertTag=function(l){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(l,i),r.tags.push(l)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ey(this));var l=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ky(l);try{i.insertRule(r,i.cssRules.length)}catch{}}else l.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var l;return(l=r.parentNode)==null?void 0:l.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",ei="-moz-",D="-webkit-",Ad="comm",Es="rule",Cs="decl",Ny="@import",bd="@keyframes",Py="@layer",Ry=Math.abs,wi=String.fromCharCode,jy=Object.assign;function _y(e,t){return fe(e,0)^45?(((t<<2^fe(e,0))<<2^fe(e,1))<<2^fe(e,2))<<2^fe(e,3):0}function Ud(e){return e.trim()}function Ty(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function va(e,t){return e.indexOf(t)}function fe(e,t){return e.charCodeAt(t)|0}function _r(e,t,n){return e.slice(t,n)}function et(e){return e.length}function Ns(e){return e.length}function ul(e,t){return t.push(e),e}function Ly(e,t){return e.map(t).join("")}var Si=1,On=1,Bd=0,_e=0,q=0,An="";function ki(e,t,n,r,l,i,o){return{value:e,root:t,parent:n,type:r,props:l,children:i,line:Si,column:On,length:o,return:""}}function Jn(e,t){return jy(ki("",null,null,"",null,null,0),e,{length:-e.length},t)}function $y(){return q}function Iy(){return q=_e>0?fe(An,--_e):0,On--,q===10&&(On=1,Si--),q}function Ie(){return q=_e<Bd?fe(An,_e++):0,On++,q===10&&(On=1,Si++),q}function it(){return fe(An,_e)}function Pl(){return _e}function Ur(e,t){return _r(An,e,t)}function Tr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vd(e){return Si=On=1,Bd=et(An=e),_e=0,[]}function Wd(e){return An="",e}function Rl(e){return Ud(Ur(_e-1,xa(e===91?e+2:e===40?e+1:e)))}function Oy(e){for(;(q=it())&&q<33;)Ie();return Tr(e)>2||Tr(q)>3?"":" "}function zy(e,t){for(;--t&&Ie()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Ur(e,Pl()+(t<6&&it()==32&&Ie()==32))}function xa(e){for(;Ie();)switch(q){case e:return _e;case 34:case 39:e!==34&&e!==39&&xa(q);break;case 40:e===41&&xa(e);break;case 92:Ie();break}return _e}function My(e,t){for(;Ie()&&e+q!==57;)if(e+q===84&&it()===47)break;return"/*"+Ur(t,_e-1)+"*"+wi(e===47?e:Ie())}function Fy(e){for(;!Tr(it());)Ie();return Ur(e,_e)}function Dy(e){return Wd(jl("",null,null,null,[""],e=Vd(e),0,[0],e))}function jl(e,t,n,r,l,i,o,a,s){for(var u=0,d=0,m=o,h=0,w=0,v=0,g=1,P=1,c=1,f=0,p="",S=l,C=i,R=r,E=p;P;)switch(v=f,f=Ie()){case 40:if(v!=108&&fe(E,m-1)==58){va(E+=A(Rl(f),"&","&\f"),"&\f")!=-1&&(c=-1);break}case 34:case 39:case 91:E+=Rl(f);break;case 9:case 10:case 13:case 32:E+=Oy(v);break;case 92:E+=zy(Pl()-1,7);continue;case 47:switch(it()){case 42:case 47:ul(Ay(My(Ie(),Pl()),t,n),s);break;default:E+="/"}break;case 123*g:a[u++]=et(E)*c;case 125*g:case 59:case 0:switch(f){case 0:case 125:P=0;case 59+d:c==-1&&(E=A(E,/\f/g,"")),w>0&&et(E)-m&&ul(w>32?ec(E+";",r,n,m-1):ec(A(E," ","")+";",r,n,m-2),s);break;case 59:E+=";";default:if(ul(R=qu(E,t,n,u,d,l,a,p,S=[],C=[],m),i),f===123)if(d===0)jl(E,t,R,R,S,i,m,a,C);else switch(h===99&&fe(E,3)===110?100:h){case 100:case 108:case 109:case 115:jl(e,R,R,r&&ul(qu(e,R,R,0,0,l,a,p,l,S=[],m),C),l,C,m,a,r?S:C);break;default:jl(E,R,R,R,[""],C,0,a,C)}}u=d=w=0,g=c=1,p=E="",m=o;break;case 58:m=1+et(E),w=v;default:if(g<1){if(f==123)--g;else if(f==125&&g++==0&&Iy()==125)continue}switch(E+=wi(f),f*g){case 38:c=d>0?1:(E+="\f",-1);break;case 44:a[u++]=(et(E)-1)*c,c=1;break;case 64:it()===45&&(E+=Rl(Ie())),h=it(),d=m=et(p=E+=Fy(Pl())),f++;break;case 45:v===45&&et(E)==2&&(g=0)}}return i}function qu(e,t,n,r,l,i,o,a,s,u,d){for(var m=l-1,h=l===0?i:[""],w=Ns(h),v=0,g=0,P=0;v<r;++v)for(var c=0,f=_r(e,m+1,m=Ry(g=o[v])),p=e;c<w;++c)(p=Ud(g>0?h[c]+" "+f:A(f,/&\f/g,h[c])))&&(s[P++]=p);return ki(e,t,n,l===0?Es:a,s,u,d)}function Ay(e,t,n){return ki(e,t,n,Ad,wi($y()),_r(e,2,-2),0)}function ec(e,t,n,r){return ki(e,t,n,Cs,_r(e,0,r),_r(e,r+1,-1),r)}function Pn(e,t){for(var n="",r=Ns(e),l=0;l<r;l++)n+=t(e[l],l,e,t)||"";return n}function by(e,t,n,r){switch(e.type){case Py:if(e.children.length)break;case Ny:case Cs:return e.return=e.return||e.value;case Ad:return"";case bd:return e.return=e.value+"{"+Pn(e.children,r)+"}";case Es:e.value=e.props.join(",")}return et(n=Pn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Uy(e){var t=Ns(e);return function(n,r,l,i){for(var o="",a=0;a<t;a++)o+=e[a](n,r,l,i)||"";return o}}function By(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Wy=function(t,n,r){for(var l=0,i=0;l=i,i=it(),l===38&&i===12&&(n[r]=1),!Tr(i);)Ie();return Ur(t,_e)},Hy=function(t,n){var r=-1,l=44;do switch(Tr(l)){case 0:l===38&&it()===12&&(n[r]=1),t[r]+=Wy(_e-1,n,r);break;case 2:t[r]+=Rl(l);break;case 4:if(l===44){t[++r]=it()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=wi(l)}while(l=Ie());return t},Qy=function(t,n){return Wd(Hy(Vd(t),n))},tc=new WeakMap,Yy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,l=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!tc.get(r))&&!l){tc.set(t,!0);for(var i=[],o=Qy(n,i),a=r.props,s=0,u=0;s<o.length;s++)for(var d=0;d<a.length;d++,u++)t.props[u]=i[s]?o[s].replace(/&\f/g,a[d]):a[d]+" "+o[s]}}},Ky=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Hd(e,t){switch(_y(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+ei+e+ye+e+e;case 6828:case 4268:return D+e+ye+e+e;case 6165:return D+e+ye+"flex-"+e+e;case 5187:return D+e+A(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return D+e+ye+"flex-item-"+A(e,/flex-|-self/,"")+e;case 4675:return D+e+ye+"flex-line-pack"+A(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+ye+A(e,"shrink","negative")+e;case 5292:return D+e+ye+A(e,"basis","preferred-size")+e;case 6060:return D+"box-"+A(e,"-grow","")+D+e+ye+A(e,"grow","positive")+e;case 4554:return D+A(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(et(e)-1-t>6)switch(fe(e,t+1)){case 109:if(fe(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+ei+(fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~va(e,"stretch")?Hd(A(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(fe(e,t+1)!==115)break;case 6444:switch(fe(e,et(e)-3-(~va(e,"!important")&&10))){case 107:return A(e,":",":"+D)+e;case 101:return A(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(fe(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(fe(e,t+11)){case 114:return D+e+ye+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+ye+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+ye+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+ye+e+e}return e}var Xy=function(t,n,r,l){if(t.length>-1&&!t.return)switch(t.type){case Cs:t.return=Hd(t.value,t.length);break;case bd:return Pn([Jn(t,{value:A(t.value,"@","@"+D)})],l);case Es:if(t.length)return Ly(t.props,function(i){switch(Ty(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Pn([Jn(t,{props:[A(i,/:(read-\w+)/,":"+ei+"$1")]})],l);case"::placeholder":return Pn([Jn(t,{props:[A(i,/:(plac\w+)/,":"+D+"input-$1")]}),Jn(t,{props:[A(i,/:(plac\w+)/,":"+ei+"$1")]}),Jn(t,{props:[A(i,/:(plac\w+)/,ye+"input-$1")]})],l)}return""})}},Gy=[Xy],Jy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var P=g.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var l=t.stylisPlugins||Gy,i={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var P=g.getAttribute("data-emotion").split(" "),c=1;c<P.length;c++)i[P[c]]=!0;a.push(g)});var s,u=[Yy,Ky];{var d,m=[by,By(function(g){d.insert(g)})],h=Uy(u.concat(l,m)),w=function(P){return Pn(Dy(P),h)};s=function(P,c,f,p){d=f,w(P?P+"{"+c.styles+"}":c.styles),p&&(v.inserted[c.name]=!0)}}var v={key:n,sheet:new Cy({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return v.sheet.hydrate(a),v},Qd={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue=typeof Symbol=="function"&&Symbol.for,Ps=ue?Symbol.for("react.element"):60103,Rs=ue?Symbol.for("react.portal"):60106,Ei=ue?Symbol.for("react.fragment"):60107,Ci=ue?Symbol.for("react.strict_mode"):60108,Ni=ue?Symbol.for("react.profiler"):60114,Pi=ue?Symbol.for("react.provider"):60109,Ri=ue?Symbol.for("react.context"):60110,js=ue?Symbol.for("react.async_mode"):60111,ji=ue?Symbol.for("react.concurrent_mode"):60111,_i=ue?Symbol.for("react.forward_ref"):60112,Ti=ue?Symbol.for("react.suspense"):60113,Zy=ue?Symbol.for("react.suspense_list"):60120,Li=ue?Symbol.for("react.memo"):60115,$i=ue?Symbol.for("react.lazy"):60116,qy=ue?Symbol.for("react.block"):60121,eg=ue?Symbol.for("react.fundamental"):60117,tg=ue?Symbol.for("react.responder"):60118,ng=ue?Symbol.for("react.scope"):60119;function Fe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ps:switch(e=e.type,e){case js:case ji:case Ei:case Ni:case Ci:case Ti:return e;default:switch(e=e&&e.$$typeof,e){case Ri:case _i:case $i:case Li:case Pi:return e;default:return t}}case Rs:return t}}}function Yd(e){return Fe(e)===ji}U.AsyncMode=js;U.ConcurrentMode=ji;U.ContextConsumer=Ri;U.ContextProvider=Pi;U.Element=Ps;U.ForwardRef=_i;U.Fragment=Ei;U.Lazy=$i;U.Memo=Li;U.Portal=Rs;U.Profiler=Ni;U.StrictMode=Ci;U.Suspense=Ti;U.isAsyncMode=function(e){return Yd(e)||Fe(e)===js};U.isConcurrentMode=Yd;U.isContextConsumer=function(e){return Fe(e)===Ri};U.isContextProvider=function(e){return Fe(e)===Pi};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ps};U.isForwardRef=function(e){return Fe(e)===_i};U.isFragment=function(e){return Fe(e)===Ei};U.isLazy=function(e){return Fe(e)===$i};U.isMemo=function(e){return Fe(e)===Li};U.isPortal=function(e){return Fe(e)===Rs};U.isProfiler=function(e){return Fe(e)===Ni};U.isStrictMode=function(e){return Fe(e)===Ci};U.isSuspense=function(e){return Fe(e)===Ti};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ei||e===ji||e===Ni||e===Ci||e===Ti||e===Zy||typeof e=="object"&&e!==null&&(e.$$typeof===$i||e.$$typeof===Li||e.$$typeof===Pi||e.$$typeof===Ri||e.$$typeof===_i||e.$$typeof===eg||e.$$typeof===tg||e.$$typeof===ng||e.$$typeof===qy)};U.typeOf=Fe;Qd.exports=U;var rg=Qd.exports,Kd=rg,lg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ig={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xd={};Xd[Kd.ForwardRef]=lg;Xd[Kd.Memo]=ig;var og=!0;function Gd(e,t,n){var r="";return n.split(" ").forEach(function(l){e[l]!==void 0?t.push(e[l]+";"):l&&(r+=l+" ")}),r}var _s=function(t,n,r){var l=t.key+"-"+n.name;(r===!1||og===!1)&&t.registered[l]===void 0&&(t.registered[l]=n.styles)},Jd=function(t,n,r){_s(t,n,r);var l=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+l:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function ag(e){for(var t=0,n,r=0,l=e.length;l>=4;++r,l-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(l){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var sg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ug=/[A-Z]|^ms/g,cg=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Zd=function(t){return t.charCodeAt(1)===45},nc=function(t){return t!=null&&typeof t!="boolean"},ko=Vy(function(e){return Zd(e)?e:e.replace(ug,"-$&").toLowerCase()}),rc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(cg,function(r,l,i){return tt={name:l,styles:i,next:tt},l})}return sg[t]!==1&&!Zd(t)&&typeof n=="number"&&n!==0?n+"px":n};function Lr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var l=n;if(l.anim===1)return tt={name:l.name,styles:l.styles,next:tt},l.name;var i=n;if(i.styles!==void 0){var o=i.next;if(o!==void 0)for(;o!==void 0;)tt={name:o.name,styles:o.styles,next:tt},o=o.next;var a=i.styles+";";return a}return fg(e,t,n)}case"function":{if(e!==void 0){var s=tt,u=n(e);return tt=s,Lr(e,t,u)}break}}var d=n;if(t==null)return d;var m=t[d];return m!==void 0?m:d}function fg(e,t,n){var r="";if(Array.isArray(n))for(var l=0;l<n.length;l++)r+=Lr(e,t,n[l])+";";else for(var i in n){var o=n[i];if(typeof o!="object"){var a=o;t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":nc(a)&&(r+=ko(i)+":"+rc(i,a)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)nc(o[s])&&(r+=ko(i)+":"+rc(i,o[s])+";");else{var u=Lr(e,t,o);switch(i){case"animation":case"animationName":{r+=ko(i)+":"+u+";";break}default:r+=i+"{"+u+"}"}}}return r}var lc=/label:\s*([^\s;{]+)\s*(;|$)/g,tt;function Ts(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,l="";tt=void 0;var i=e[0];if(i==null||i.raw===void 0)r=!1,l+=Lr(n,t,i);else{var o=i;l+=o[0]}for(var a=1;a<e.length;a++)if(l+=Lr(n,t,e[a]),r){var s=i;l+=s[a]}lc.lastIndex=0;for(var u="",d;(d=lc.exec(l))!==null;)u+="-"+d[1];var m=ag(l)+u;return{name:m,styles:l,next:tt}}var dg=function(t){return t()},pg=Ds.useInsertionEffect?Ds.useInsertionEffect:!1,qd=pg||dg,ep=x.createContext(typeof HTMLElement<"u"?Jy({key:"css"}):null);ep.Provider;var tp=function(t){return x.forwardRef(function(n,r){var l=x.useContext(ep);return t(n,l,r)})},np=x.createContext({}),Ii={}.hasOwnProperty,wa="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",rp=function(t,n){var r={};for(var l in n)Ii.call(n,l)&&(r[l]=n[l]);return r[wa]=t,r},mg=function(t){var n=t.cache,r=t.serialized,l=t.isStringTag;return _s(n,r,l),qd(function(){return Jd(n,r,l)}),null},hg=tp(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var l=e[wa],i=[r],o="";typeof e.className=="string"?o=Gd(t.registered,i,e.className):e.className!=null&&(o=e.className+" ");var a=Ts(i,void 0,x.useContext(np));o+=t.key+"-"+a.name;var s={};for(var u in e)Ii.call(e,u)&&u!=="css"&&u!==wa&&(s[u]=e[u]);return s.className=o,n&&(s.ref=n),x.createElement(x.Fragment,null,x.createElement(mg,{cache:t,serialized:a,isStringTag:typeof l=="string"}),x.createElement(l,s))}),lp=hg,yg=y.Fragment,oe=function(t,n,r){return Ii.call(n,"css")?y.jsx(lp,rp(t,n),r):y.jsx(t,n,r)},ic=function(t,n){var r=arguments;if(n==null||!Ii.call(n,"css"))return x.createElement.apply(void 0,r);var l=r.length,i=new Array(l);i[0]=lp,i[1]=rp(t,n);for(var o=2;o<l;o++)i[o]=r[o];return x.createElement.apply(null,i)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(ic||(ic={}));function ip(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ts(t)}function N(){var e=ip.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var gg=function e(t){for(var n=t.length,r=0,l="";r<n;r++){var i=t[r];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var a in i)i[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=i}o&&(l&&(l+=" "),l+=o)}}return l};function vg(e,t,n){var r=[],l=Gd(e,r,n);return r.length<2?n:l+t(r)}var xg=function(t){var n=t.cache,r=t.serializedArr;return qd(function(){for(var l=0;l<r.length;l++)Jd(n,r[l],!1)}),null},Eo=tp(function(e,t){var n=[],r=function(){for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];var m=Ts(u,t.registered);return n.push(m),_s(t,m,!1),t.key+"-"+m.name},l=function(){for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return vg(t.registered,r,gg(u))},i={css:r,cx:l,theme:x.useContext(np)},o=e.children(i);return x.createElement(x.Fragment,null,x.createElement(xg,{cache:t,serializedArr:n}),o)}),wg=Object.defineProperty,Sg=(e,t,n)=>t in e?wg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cl=(e,t,n)=>Sg(e,typeof t!="symbol"?t+"":t,n),Sa=new Map,fl=new WeakMap,oc=0,kg=void 0;function Eg(e){return e?(fl.has(e)||(oc+=1,fl.set(e,oc.toString())),fl.get(e)):"0"}function Cg(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Eg(e.root):e[t]}`).toString()}function Ng(e){const t=Cg(e);let n=Sa.get(t);if(!n){const r=new Map;let l;const i=new IntersectionObserver(o=>{o.forEach(a=>{var s;const u=a.isIntersecting&&l.some(d=>a.intersectionRatio>=d);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(d=>{d(u,a)})})},e);l=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Sa.set(t,n)}return n}function op(e,t,n={},r=kg){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:l,observer:i,elements:o}=Ng(n),a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),Sa.delete(l))}}function Pg(e){return typeof e.children!="function"}var ac=class extends x.Component{constructor(e){super(e),cl(this,"node",null),cl(this,"_unobserveCb",null),cl(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),cl(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Pg(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:l,fallbackInView:i}=this.props;this._unobserveCb=op(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:l},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:v}=this.state;return e({inView:w,entry:v,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:l,rootMargin:i,onChange:o,skip:a,trackVisibility:s,delay:u,initialInView:d,fallbackInView:m,...h}=this.props;return x.createElement(t||"div",{ref:this.handleNode,...h},e)}};function ap({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:l,triggerOnce:i,skip:o,initialInView:a,fallbackInView:s,onChange:u}={}){var d;const[m,h]=x.useState(null),w=x.useRef(u),[v,g]=x.useState({inView:!!a,entry:void 0});w.current=u,x.useEffect(()=>{if(o||!m)return;let p;return p=op(m,(S,C)=>{g({inView:S,entry:C}),w.current&&w.current(S,C),C.isIntersecting&&i&&p&&(p(),p=void 0)},{root:l,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,m,l,r,i,o,n,s,t]);const P=(d=v.entry)==null?void 0:d.target,c=x.useRef(void 0);!m&&P&&!i&&!o&&c.current!==P&&(c.current=P,g({inView:!!a,entry:void 0}));const f=[h,v.inView,v.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var sp={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=Symbol.for("react.element"),$s=Symbol.for("react.portal"),Oi=Symbol.for("react.fragment"),zi=Symbol.for("react.strict_mode"),Mi=Symbol.for("react.profiler"),Fi=Symbol.for("react.provider"),Di=Symbol.for("react.context"),Rg=Symbol.for("react.server_context"),Ai=Symbol.for("react.forward_ref"),bi=Symbol.for("react.suspense"),Ui=Symbol.for("react.suspense_list"),Bi=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),jg=Symbol.for("react.offscreen"),up;up=Symbol.for("react.module.reference");function We(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ls:switch(e=e.type,e){case Oi:case Mi:case zi:case bi:case Ui:return e;default:switch(e=e&&e.$$typeof,e){case Rg:case Di:case Ai:case Vi:case Bi:case Fi:return e;default:return t}}case $s:return t}}}B.ContextConsumer=Di;B.ContextProvider=Fi;B.Element=Ls;B.ForwardRef=Ai;B.Fragment=Oi;B.Lazy=Vi;B.Memo=Bi;B.Portal=$s;B.Profiler=Mi;B.StrictMode=zi;B.Suspense=bi;B.SuspenseList=Ui;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return We(e)===Di};B.isContextProvider=function(e){return We(e)===Fi};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ls};B.isForwardRef=function(e){return We(e)===Ai};B.isFragment=function(e){return We(e)===Oi};B.isLazy=function(e){return We(e)===Vi};B.isMemo=function(e){return We(e)===Bi};B.isPortal=function(e){return We(e)===$s};B.isProfiler=function(e){return We(e)===Mi};B.isStrictMode=function(e){return We(e)===zi};B.isSuspense=function(e){return We(e)===bi};B.isSuspenseList=function(e){return We(e)===Ui};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Oi||e===Mi||e===zi||e===bi||e===Ui||e===jg||typeof e=="object"&&e!==null&&(e.$$typeof===Vi||e.$$typeof===Bi||e.$$typeof===Fi||e.$$typeof===Di||e.$$typeof===Ai||e.$$typeof===up||e.getModuleId!==void 0)};B.typeOf=We;sp.exports=B;var _g=sp.exports;N`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;N`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;N`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;N`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;N`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;N`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;N`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;N`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;N`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;N`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;N`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;N`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;N`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Tg=N`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Lg=N`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$g=N`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ig=N`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Og=N`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Is=N`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zg=N`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Mg=N`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fg=N`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dg=N`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ag=N`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bg=N`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ug=N`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Bg({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Is,iterationCount:l=1}){return ip`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${l};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Vg(e){return e==null}function Wg(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function cp(e,t){return n=>n?e():t()}function $r(e){return cp(e,()=>null)}function ka(e){return $r(()=>({opacity:0}))(e)}const fp=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:l=1e3,fraction:i=0,keyframes:o=Is,triggerOnce:a=!1,className:s,style:u,childClassName:d,childStyle:m,children:h,onVisibilityChange:w}=e,v=x.useMemo(()=>Bg({keyframes:o,duration:l}),[l,o]);return Vg(h)?null:Wg(h)?oe(Qg,{...e,animationStyles:v,children:String(h)}):_g.isFragment(h)?oe(dp,{...e,animationStyles:v}):oe(yg,{children:x.Children.map(h,(g,P)=>{if(!x.isValidElement(g))return null;const c=r+(t?P*l*n:0);switch(g.type){case"ol":case"ul":return oe(Eo,{children:({cx:f})=>oe(g.type,{...g.props,className:f(s,g.props.className),style:Object.assign({},u,g.props.style),children:oe(fp,{...e,children:g.props.children})})});case"li":return oe(ac,{threshold:i,triggerOnce:a,onChange:w,children:({inView:f,ref:p})=>oe(Eo,{children:({cx:S})=>oe(g.type,{...g.props,ref:p,className:S(d,g.props.className),css:$r(()=>v)(f),style:Object.assign({},m,g.props.style,ka(!f),{animationDelay:c+"ms"})})})});default:return oe(ac,{threshold:i,triggerOnce:a,onChange:w,children:({inView:f,ref:p})=>oe("div",{ref:p,className:s,css:$r(()=>v)(f),style:Object.assign({},u,ka(!f),{animationDelay:c+"ms"}),children:oe(Eo,{children:({cx:S})=>oe(g.type,{...g.props,className:S(d,g.props.className),style:Object.assign({},m,g.props.style)})})})})}})})},Hg={display:"inline-block",whiteSpace:"pre"},Qg=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:l=0,duration:i=1e3,fraction:o=0,triggerOnce:a=!1,className:s,style:u,children:d,onVisibilityChange:m}=e,{ref:h,inView:w}=ap({triggerOnce:a,threshold:o,onChange:m});return cp(()=>oe("div",{ref:h,className:s,style:Object.assign({},u,Hg),children:d.split("").map((v,g)=>oe("span",{css:$r(()=>t)(w),style:{animationDelay:l+g*i*r+"ms"},children:v},g))}),()=>oe(dp,{...e,children:d}))(n)},dp=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:l,style:i,children:o,onVisibilityChange:a}=e,{ref:s,inView:u}=ap({triggerOnce:r,threshold:n,onChange:a});return oe("div",{ref:s,className:l,css:$r(()=>t)(u),style:Object.assign({},i,ka(!u)),children:o})};N`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;N`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;N`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;N`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;N`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;N`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Yg=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Kg=N`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Xg=N`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Gg=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Jg=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Zg=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,qg=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ev=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,tv=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,nv=N`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,rv=N`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,lv=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,iv=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function ov(e,t,n){switch(n){case"bottom-left":return t?Kg:Lg;case"bottom-right":return t?Xg:$g;case"down":return e?t?Jg:Og:t?Gg:Ig;case"left":return e?t?qg:zg:t?Zg:Is;case"right":return e?t?tv:Fg:t?ev:Mg;case"top-left":return t?nv:Dg;case"top-right":return t?rv:Ag;case"up":return e?t?iv:Ug:t?lv:bg;default:return t?Yg:Tg}}const Br=e=>{const{big:t=!1,direction:n,reverse:r=!1,...l}=e,i=x.useMemo(()=>ov(t,r,n),[t,n,r]);return oe(fp,{keyframes:i,...l})};N`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;N`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;N`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;N`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;N`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;N`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;N`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;N`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;N`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;N`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;N`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;N`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;N`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;N`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;N`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;N`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;N`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;N`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;N`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;N`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;N`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;N`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;N`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;N`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;N`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;N`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;N`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const kt={fontFamily:"Inter, Roboto, Segoe UI, Arial, sans-serif",fontWeight:"bold"},av=()=>{const e=Sy();return y.jsx(Br,{triggerOnce:!0,children:y.jsxs("div",{className:"w-full max-w-7xl border-2 border-white bg-[#0d1321] px-16 py-16 my-24 mx-auto relative flex flex-col items-center justify-center",style:{borderRadius:0,minHeight:"70vh",boxShadow:"0 0 0 2px #fff"},children:[y.jsxs("div",{className:"absolute right-8 top-8 flex gap-1",children:[y.jsx("div",{className:"w-3 h-3 bg-red-500",style:{borderRadius:2}}),y.jsx("div",{className:"w-3 h-3 bg-yellow-400",style:{borderRadius:2}}),y.jsx("div",{className:"w-3 h-3 bg-green-400",style:{borderRadius:2}})]}),y.jsxs("div",{className:"text-green-400 font-mono text-lg mb-3 w-full text-left font-bold tracking-tight",style:{fontFamily:"Press Start 2P, monospace"},children:[">_ ",y.jsx("span",{className:"text-white",style:kt,children:"~/portfolio/soham-datta"})]}),y.jsx("hr",{className:"border-white my-4 w-full"}),y.jsxs("div",{className:"flex items-center gap-12 mb-8 w-full",children:[y.jsx("div",{className:"bg-[#00ff90] w-28 h-28 flex items-center justify-center overflow-hidden",style:{borderRadius:0},children:y.jsx("img",{src:"/myoic.png",alt:"Your Profile",className:"w-full h-full object-cover"})}),y.jsxs("div",{className:"flex flex-col items-start justify-center",children:[y.jsx("h1",{className:"text-4xl text-white mb-2 font-bold tracking-widest",style:{fontFamily:"Press Start 2P, monospace",letterSpacing:2},children:"SOHAM DATTA"}),y.jsxs("div",{className:"text-green-400 text-2xl",style:kt,children:["> ",y.jsxs("span",{className:"text-[#7afcff] font-normal",children:[e,y.jsx("span",{className:"animate-pulse",children:"|"})]})]})]})]}),y.jsxs("div",{className:"grid grid-cols-3 gap-8 mb-8 w-full",children:[y.jsxs("div",{className:"border-2 border-white p-6 flex flex-col items-start bg-[#181f2a] w-full",style:{borderRadius:0},children:[y.jsx("div",{className:"text-green-400 text-lg mb-2",style:kt,children:"EXPERIENCE"}),y.jsx("div",{className:"text-white text-2xl",style:kt,children:"<1 YEAR"})]}),y.jsxs("div",{className:"border-2 border-white p-6 flex flex-col items-start bg-[#181f2a] w-full",style:{borderRadius:0},children:[y.jsx("div",{className:"text-cyan-400 text-lg mb-2",style:kt,children:"PROJECTS"}),y.jsx("div",{className:"text-white text-2xl",style:kt,children:"MULTIPLE"})]}),y.jsxs("div",{className:"border-2 border-white p-6 flex flex-col items-start bg-[#181f2a] w-full",style:{borderRadius:0},children:[y.jsxs("div",{className:"text-yellow-400 text-lg mb-2 flex items-center gap-1",style:kt,children:[y.jsx("span",{className:"mr-1",style:{color:"#ffb800"},children:"☕"})," COFFEE"]}),y.jsx("div",{className:"text-white text-2xl",style:kt,children:"∞ CUPS"})]})]}),y.jsxs("div",{className:"border-2 border-white p-6 font-mono text-white bg-[#181f2a] w-full whitespace-pre-line",style:{borderRadius:0,fontSize:"1.15rem",marginTop:12},children:[y.jsx("div",{className:"text-green-400 mb-3 font-bold text-lg",style:{fontFamily:"Press Start 2P, monospace"},children:"$ cat about.txt"}),y.jsx("div",{style:{fontFamily:"Inter, Roboto, Segoe UI, Arial, sans-serif",fontWeight:"normal",color:"#b5c2d1"},children:"Software engineer passionate about building elegant solutions to complex problems. Specializing in full-stack development with a love for clean code, pixel-perfect UIs, and efficient algorithms. When not coding, you can find me exploring new technologies or contributing to open-source projects."})]})]})})},sc=[{icon:"🌐",iconBg:"bg-[#232b39]",color:"text-cyan-400",title:"FRONTEND",skills:["React","TypeScript","Tailwind CSS","Next.js"]},{icon:"🗄️",iconBg:"bg-[#232b39]",color:"text-green-400",title:"BACKEND",skills:["Python","Java","Django"]},{icon:"🛢️",iconBg:"bg-[#232b39]",color:"text-pink-500",title:"DATABASE",skills:["MongoDB","PostgreSQL","LiveSQL"]},{icon:"🔗",iconBg:"bg-[#232b39]",color:"text-red-500",title:"DEVOPS",skills:["Docker","AWS","Git","Linux"]},{icon:"</>",iconBg:"bg-[#232b39]",color:"text-white",title:"LANGUAGES",skills:["JavaScript","TypeScript","Python","Java","C++","C#"]}],an={fontFamily:"Inter, Roboto, Segoe UI, Arial, sans-serif",fontWeight:"bold"},sv=()=>y.jsx(Br,{triggerOnce:!0,children:y.jsxs("div",{className:"relative flex w-full max-w-7xl flex-col items-center justify-center px-32 py-24 my-24 mx-auto",children:[y.jsx("h2",{className:"mb-2 text-3xl font-bold tracking-widest text-green-400",style:{fontFamily:"Press Start 2P, monospace",letterSpacing:2,textShadow:"2px 2px 0 #000, 0 0 2px #000"},children:"<SKILLS />"}),y.jsx("div",{className:"mb-12 h-1 w-32 rounded bg-green-400"}),y.jsx("div",{className:"grid w-full max-w-6xl grid-cols-1 gap-24 mb-10 md:grid-cols-3",children:sc.slice(0,3).map(e=>y.jsxs("div",{className:"border-2 border-white bg-[#0a0f1c] flex flex-col p-8 min-w-[280px]",style:{borderRadius:0},children:[y.jsxs("div",{className:"mb-5 flex items-center",children:[y.jsx("div",{className:`mr-5 flex h-14 w-14 items-center justify-center border-2 border-white ${e.iconBg}`,style:{borderRadius:0},children:y.jsx("span",{className:"text-2xl",style:an,children:e.icon})}),y.jsx("span",{className:`text-2xl ${e.color}`,style:an,children:e.title})]}),y.jsx("ul",{className:"flex flex-col gap-3 w-full",children:e.skills.map(t=>y.jsxs("li",{className:"flex items-center bg-[#111827] px-4 py-2 text-base text-white",style:{...an,borderRadius:0},children:[y.jsx("span",{className:"mr-3 inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:"rgb(22 163 74)"}}),t]},t))})]},e.title))}),y.jsx("div",{className:"grid w-full max-w-4xl grid-cols-1 gap-10 md:grid-cols-2",children:sc.slice(3).map(e=>y.jsxs("div",{className:"border-2 border-white bg-[#0a0f1c] flex flex-col p-8 min-w-[280px]",style:{borderRadius:0},children:[y.jsxs("div",{className:"mb-5 flex items-center",children:[y.jsx("div",{className:`mr-5 flex h-14 w-14 items-center justify-center border-2 border-white ${e.iconBg}`,style:{borderRadius:0},children:y.jsx("span",{className:"text-2xl",style:an,children:e.icon})}),y.jsx("span",{className:`text-2xl ${e.color}`,style:an,children:e.title})]}),y.jsx("ul",{className:"flex flex-col gap-3 w-full",children:e.skills.map(t=>y.jsxs("li",{className:"flex items-center bg-[#111827] px-4 py-2 text-base text-white",style:{...an,borderRadius:0},children:[y.jsx("span",{className:"mr-3 inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:"rgb(22 163 74)"}}),t]},t))})]},e.title))})]})}),uv=[{icon:"🏅",color:"text-yellow-400",text:"IBM DevOPS and Software Engineering Professional Certificate"},{icon:"🏅",color:"text-yellow-400",text:"Building LLM Applications with Prompt Engineering (NVIDIA)"}],cv=()=>y.jsx(Br,{triggerOnce:!0,children:y.jsxs("div",{className:"w-full max-w-7xl border-2 border-white bg-[#0d1321] px-32 py-24 my-24 mx-auto relative flex flex-col items-start justify-start",style:{borderRadius:0,minHeight:"auto",boxShadow:"0 0 0 2px #fff"},children:[y.jsx("h2",{className:"text-yellow-400 text-2xl mb-6 tracking-widest",style:{fontFamily:"Press Start 2P, monospace",fontWeight:"bold"},children:"CERTIFICATIONS"}),y.jsx("div",{className:"w-24 h-1 bg-yellow-400 mb-8 rounded"}),y.jsx("ul",{className:"w-full space-y-2",children:uv.map((e,t)=>y.jsxs("li",{className:"flex items-center bg-[#111827] px-3 py-2 text-white text-sm",style:{fontFamily:"Press Start 2P, monospace",fontWeight:"bold",borderRadius:0},children:[y.jsx("span",{className:"w-2.5 h-2.5 bg-yellow-400 mr-2 inline-block",style:{borderRadius:2}}),e.text]},t))})]})}),z={fontFamily:"Inter, Roboto, Segoe UI, Arial, sans-serif",fontWeight:"bold"},fv=()=>y.jsx(Br,{triggerOnce:!0,children:y.jsxs("div",{className:"w-full max-w-screen-2xl bg-[#0d1321] px-32 py-16 my-24 mx-auto relative flex flex-col items-center justify-center",style:{borderRadius:0,minHeight:"70vh"},children:[y.jsx("h2",{className:"text-green-400 text-3xl font-bold mb-12 tracking-widest",style:{fontFamily:"Press Start 2P, monospace",letterSpacing:2},children:"{PROJECTS}"}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl",children:[y.jsxs("div",{className:"border-2 border-white p-6 bg-[#080c14] text-white flex flex-col",style:{borderRadius:0},children:[y.jsxs("div",{className:"flex items-start justify-between mb-4",children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx("span",{className:"text-green-400 text-2xl mr-4 flex items-center justify-center w-12 h-12 border-2 border-white bg-[#232b39]",style:{fontFamily:"Press Start 2P, monospace",borderRadius:0},children:"☮"}),y.jsx("span",{className:"text-green-400 text-2xl font-bold",style:z,children:"AI-POWERED TALENT ACQUISITION ASSISTANT"})]}),y.jsx("span",{className:"bg-green-400 text-black px-4 py-1.5 text-base font-bold",style:{...z,borderRadius:0},children:"COMPLETED"})]}),y.jsx("div",{className:"mb-4 flex-grow",style:{fontFamily:"Inter, Roboto, Segoe UI, Arial, sans-serif",fontWeight:"normal",color:"#b5c2d1",fontSize:"1.125rem"},children:"Developed an AI-powered Intelligent Talent Acquisition platform leveraging Python, Streamlit, and OpenAI GPT-3.5, automating resume parsing and candidate screening, improving recruitment efficiency by over 50%. Engineered a robust resume parsing backend using NLP techniques (spaCy, NLTK) and GPT-3.5 integration to extract and categorize skills, education, experience, and certifications from diverse resume formats with 95% accuracy."}),y.jsx("div",{className:"text-green-400 font-bold mb-2 text-base",style:z,children:"TECH_STACK:"}),y.jsxs("div",{className:"flex flex-wrap gap-3 mb-4",children:[y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"Python"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"Streamlit"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"OpenAI GPT-3.5"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"spaCy"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"NLTK"})]}),y.jsxs("a",{href:"https://github.com/Soham964/Intelligent-Talent-Acquisition-Assistant",target:"_blank",rel:"noopener noreferrer",className:"bg-green-400 text-black px-6 py-3 rounded-none mt-4 flex items-center gap-2 justify-center transition ease-in-out hover:bg-green-500 text-lg",style:{...z,borderRadius:0},children:[y.jsx("span",{className:"text-2xl",children:"��"})," GitHub"]})]}),y.jsxs("div",{className:"border-2 border-white p-6 bg-[#080c14] text-white flex flex-col",style:{borderRadius:0},children:[y.jsxs("div",{className:"flex items-start justify-between mb-4",children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx("span",{className:"text-cyan-400 text-2xl mr-4 flex items-center justify-center w-12 h-12 border-2 border-white bg-[#232b39]",style:{fontFamily:"Press Start 2P, monospace",borderRadius:0},children:"<>"}),y.jsx("span",{className:"text-cyan-400 text-2xl font-bold",style:z,children:"EMOTION BASED MUSIC RECOMMENDATION SYSTEM"})]}),y.jsx("span",{className:"bg-green-400 text-black px-4 py-1.5 text-base font-bold",style:{...z,borderRadius:0},children:"COMPLETED"})]}),y.jsx("div",{className:"mb-4 flex-grow",style:{fontFamily:"Inter, Roboto, Segoe UI, Arial, sans-serif",fontWeight:"normal",color:"#b5c2d1",fontSize:"1.125rem"},children:"Developed a Django-based music recommendation system supporting 6 distinct emotion categories (neutral, happy, fear, sad, angry, surprise) with 12+ web and REST API endpoints for playlist and emotion detection. Achieved real-time emotion detection on webcam video streams and uploaded images using MediaPipe and DeepFace, processing 30+ frames per second for dynamic music personalization."}),y.jsx("div",{className:"text-green-400 font-bold mb-2 text-base",style:z,children:"TECH_STACK:"}),y.jsxs("div",{className:"flex flex-wrap gap-3 mb-4",children:[y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"Django"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"MediaPipe"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"DeepFace"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"REST API"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"Python"})]}),y.jsxs("a",{href:"https://github.com/yourusername/emotion-based-music-recommendation-system",target:"_blank",rel:"noopener noreferrer",className:"bg-green-400 text-black px-6 py-3 rounded-none mt-4 flex items-center gap-2 justify-center transition ease-in-out hover:bg-green-500 text-lg",style:{...z,borderRadius:0},children:[y.jsx("span",{className:"text-2xl",children:"🐙"})," GitHub"]})]}),y.jsxs("div",{className:"border-2 border-white p-6 bg-[#080c14] text-white flex flex-col",style:{borderRadius:0},children:[y.jsxs("div",{className:"flex items-start justify-between mb-4",children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx("span",{className:"text-pink-500 text-2xl mr-4 flex items-center justify-center w-12 h-12 border-2 border-white bg-[#232b39]",style:{fontFamily:"Press Start 2P, monospace",borderRadius:0},children:"💸"})," ",y.jsx("span",{className:"text-pink-500 text-2xl font-bold",style:z,children:"SAAS CRYPTO PAYMENT APPLICATION"})]}),y.jsx("span",{className:"bg-green-400 text-black px-4 py-1.5 text-base font-bold",style:{...z,borderRadius:0},children:"COMPLETED"})]}),y.jsx("div",{className:"mb-4 flex-grow",style:{fontFamily:"Inter, Roboto, Segoe UI, Arial, sans-serif",fontWeight:"normal",color:"#b5c2d1",fontSize:"1.125rem"},children:"Developed a secure SaaS-based crypto payment platform enabling real-time Ethereum transactions for businesses. Built with Next.js, Tailwind CSS, Python, Django, and REST APIs, supporting seamless Ethereum billing and fiat-to-crypto conversion. Designed a merchant dashboard for invoice management, transaction tracking, and automated exchange rate updates."}),y.jsx("div",{className:"text-green-400 font-bold mb-2 text-base",style:z,children:"TECH_STACK:"}),y.jsxs("div",{className:"flex flex-wrap gap-3 mb-4",children:[y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"Next.js"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"Tailwind CSS"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"Python"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"Django"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"Ethereum"})]}),y.jsxs("a",{href:"https://github.com/yourusername/saas-crypto-payment-application",target:"_blank",rel:"noopener noreferrer",className:"bg-green-400 text-black px-6 py-3 rounded-none mt-4 flex items-center gap-2 justify-center transition ease-in-out hover:bg-green-500 text-lg",style:{...z,borderRadius:0},children:[y.jsx("span",{className:"text-2xl",children:"🐙"})," GitHub"]})]}),y.jsxs("div",{className:"border-2 border-white p-6 bg-[#080c14] text-white flex flex-col",style:{borderRadius:0},children:[y.jsxs("div",{className:"flex items-start justify-between mb-4",children:[y.jsxs("div",{className:"flex items-center",children:[y.jsx("span",{className:"text-yellow-400 text-2xl mr-4 flex items-center justify-center w-12 h-12 border-2 border-white bg-[#232b39]",style:{fontFamily:"Press Start 2P, monospace",borderRadius:0},children:"🌐"})," ",y.jsx("span",{className:"text-yellow-400 text-2xl font-bold",style:z,children:"E-COMMERCE PLATFORM"})]}),y.jsx("span",{className:"bg-green-400 text-black px-4 py-1.5 text-base font-bold",style:{...z,borderRadius:0},children:"COMPLETED"})]}),y.jsx("div",{className:"mb-4 flex-grow",style:{fontFamily:"Inter, Roboto, Segoe UI, Arial, sans-serif",fontWeight:"normal",color:"#b5c2d1",fontSize:"1.125rem"},children:"Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard."}),y.jsx("div",{className:"text-green-400 font-bold mb-2 text-base",style:z,children:"TECH_STACK:"}),y.jsxs("div",{className:"flex flex-wrap gap-3 mb-4",children:[y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"React"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"Node.js"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"PostgreSQL"}),y.jsx("span",{className:"border border-white/40 px-3 py-1.5 text-white text-sm",style:z,children:"Stripe"})]}),y.jsxs("a",{href:"https://github.com/yourusername/e-commerce-platform",target:"_blank",rel:"noopener noreferrer",className:"bg-green-400 text-black px-6 py-3 rounded-none mt-4 flex items-center gap-2 justify-center transition ease-in-out hover:bg-green-500 text-lg",style:{...z,borderRadius:0},children:[y.jsx("span",{className:"text-2xl",children:"🐙"})," GitHub"]})]})]})]})}),te={fontFamily:"Inter, Roboto, Segoe UI, Arial, sans-serif",fontWeight:"bold"},dv=()=>y.jsx(Br,{triggerOnce:!0,children:y.jsxs("div",{className:"w-full max-w-7xl px-32 py-24 my-24 mx-auto relative flex flex-col items-center justify-center bg-[#0d1321]",style:{borderRadius:0},children:[y.jsx("h2",{className:"text-green-400 text-3xl font-bold mb-12 tracking-widest",style:{fontFamily:"Press Start 2P, monospace",letterSpacing:2},children:"</CONTACT>"}),y.jsxs("div",{className:"w-full grid grid-cols-1 lg:grid-cols-2 gap-8",children:[y.jsxs("div",{className:"flex flex-col gap-8",children:[y.jsxs("div",{className:"border-2 border-white p-6 bg-[#0a0f1c] text-white",style:{borderRadius:0},children:[y.jsx("div",{className:"text-green-400 mb-4 text-lg",style:te,children:"GET IN TOUCH"}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"flex items-center gap-4",style:te,children:[y.jsx("span",{className:"text-cyan-400 text-xl",children:"✉️"}),y.jsx("span",{children:"sd.sohamdatta@gmail.com"})]}),y.jsxs("div",{className:"flex items-center gap-4",style:te,children:[y.jsx("span",{className:"text-cyan-400 text-xl",children:"📞"}),y.jsx("span",{children:"+91 7439170577"})]}),y.jsxs("div",{className:"flex items-center gap-4",style:te,children:[y.jsx("span",{className:"text-pink-400 text-xl",children:"📍"}),y.jsx("span",{children:"Kolkata, India"})]})]})]}),y.jsxs("div",{className:"border-2 border-white p-6 bg-[#0a0f1c] text-white",style:{borderRadius:0},children:[y.jsx("div",{className:"text-cyan-400 mb-4 text-lg",style:te,children:"SOCIAL LINKS"}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("a",{href:"#",className:"border border-white/40 px-4 py-3 text-white flex items-center justify-center gap-2 bg-[#111827]",style:{...te,borderRadius:0},children:[y.jsx("span",{className:"text-xl",children:"🐙"})," GitHub"]}),y.jsxs("a",{href:"#",className:"border border-white/40 px-4 py-3 text-white flex items-center justify-center gap-2 bg-[#111827]",style:{...te,borderRadius:0},children:[y.jsx("span",{className:"text-xl",children:"🔗"})," LinkedIn"]}),y.jsxs("a",{href:"#",className:"border border-white/40 px-4 py-3 text-white flex items-center justify-center gap-2 bg-[#111827]",style:{...te,borderRadius:0},children:[y.jsx("span",{className:"text-xl",children:"🐦"})," Twitter"]}),y.jsxs("a",{href:"#",className:"border border-white/40 px-4 py-3 text-white flex items-center justify-center gap-2 bg-[#111827]",style:{...te,borderRadius:0},children:[y.jsx("span",{className:"text-xl",children:"✉️"})," Email"]})]})]})]}),y.jsxs("div",{className:"border-2 border-white p-6 bg-[#0a0f1c] text-white flex flex-col",style:{borderRadius:0},children:[y.jsx("div",{className:"text-green-400 mb-4 text-lg",style:te,children:"SEND MESSAGE"}),y.jsxs("form",{className:"flex flex-col gap-4 w-full",children:[y.jsx("label",{className:"text-white",style:te,children:"NAME:"}),y.jsx("input",{className:"bg-[#111827] border border-white/30 p-3 text-white text-sm",style:{...te,borderRadius:0},placeholder:"Enter your name..."}),y.jsx("label",{className:"text-white",style:te,children:"EMAIL:"}),y.jsx("input",{className:"bg-[#111827] border border-white/30 p-3 text-white text-sm",style:{...te,borderRadius:0},placeholder:"Enter your email..."}),y.jsx("label",{className:"text-pink-400",style:te,children:"MESSAGE:"}),y.jsx("textarea",{className:"bg-[#111827] border border-white/30 p-3 text-white text-sm",style:{...te,borderRadius:0},rows:6,placeholder:"Your message here..."}),y.jsxs("button",{className:"bg-green-400 text-black px-8 py-4 mt-4 flex items-center gap-2 justify-center transition ease-in-out hover:bg-green-500 text-lg",style:{...te,borderRadius:0},children:[y.jsx("span",{children:"✈️"})," SEND MESSAGE"]})]})]})]}),y.jsxs("div",{className:"w-full border-2 border-white bg-[#0a0f1c] mt-8 p-4 text-center text-white text-sm",style:{borderRadius:0},children:[y.jsx("div",{className:"mb-2",style:te,children:'$ echo "Thanks for visiting!"'}),y.jsx("div",{style:te,children:"© 2024 Soham Datta. Built with ❤️ and lots of 👾"})]})]})}),pv=()=>y.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-[#0a0f1c] via-[#111827] to-[#0a0f1c] scroll-smooth",children:[y.jsx("nav",{className:"bg-[#0a0f1c] bg-opacity-90 z-50 p-4 shadow-md",style:{fontFamily:"Press Start 2P, monospace"},children:y.jsxs("div",{className:"container mx-auto flex justify-center space-x-8 text-white",children:[y.jsx("a",{href:"#about",className:"hover:text-green-400 transition ease-in-out",children:"ABOUT"}),y.jsx("a",{href:"#skills",className:"hover:text-green-400 transition ease-in-out",children:"SKILLS"}),y.jsx("a",{href:"#certifications",className:"hover:text-green-400 transition ease-in-out",children:"CERTS"}),y.jsx("a",{href:"#projects",className:"hover:text-green-400 transition ease-in-out",children:"PROJECTS"}),y.jsx("a",{href:"#contact",className:"hover:text-green-400 transition ease-in-out",children:"CONTACT"})]})}),y.jsxs("div",{className:"container mx-auto px-4 py-8 pt-20",children:[y.jsx("div",{id:"about",children:y.jsx(av,{})}),y.jsx("hr",{className:"border-white my-12 w-full"}),y.jsx("div",{id:"skills",children:y.jsx(sv,{})}),y.jsx("div",{id:"certifications",children:y.jsx(cv,{})}),y.jsx("div",{id:"projects",children:y.jsx(fv,{})}),y.jsx("hr",{className:"border-white my-12 w-full"}),y.jsx("div",{id:"contact",children:y.jsx(dv,{})})]})]});Co.createRoot(document.getElementById("root")).render(y.jsx(xc.StrictMode,{children:y.jsx(fy,{basename:"/My-Portfolio",children:y.jsx(pv,{})})}));
