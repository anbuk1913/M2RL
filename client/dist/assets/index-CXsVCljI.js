function cx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function dx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mu={exports:{}},Vo={},Ru={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var us=Symbol.for("react.element"),xx=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),mx=Symbol.for("react.strict_mode"),gx=Symbol.for("react.profiler"),yx=Symbol.for("react.provider"),vx=Symbol.for("react.context"),_x=Symbol.for("react.forward_ref"),jx=Symbol.for("react.suspense"),wx=Symbol.for("react.memo"),Sx=Symbol.for("react.lazy"),Ra=Symbol.iterator;function Nx(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var Pu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tu=Object.assign,Iu={};function lr(e,t,n){this.props=e,this.context=t,this.refs=Iu,this.updater=n||Pu}lr.prototype.isReactComponent={};lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ou(){}Ou.prototype=lr.prototype;function wl(e,t,n){this.props=e,this.context=t,this.refs=Iu,this.updater=n||Pu}var Sl=wl.prototype=new Ou;Sl.constructor=wl;Tu(Sl,lr.prototype);Sl.isPureReactComponent=!0;var Pa=Array.isArray,Lu=Object.prototype.hasOwnProperty,Nl={current:null},Au={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,s={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Lu.call(t,r)&&!Au.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var a=Array(l),p=0;p<l;p++)a[p]=arguments[p+2];s.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:us,type:e,key:o,ref:i,props:s,_owner:Nl.current}}function kx(e,t){return{$$typeof:us,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function kl(e){return typeof e=="object"&&e!==null&&e.$$typeof===us}function bx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ta=/\/+/g;function zf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bx(""+e.key):t.toString(36)}function Vs(e,t,n,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case us:case xx:i=!0}}if(i)return i=e,s=s(i),e=r===""?"."+zf(i,0):r,Pa(s)?(n="",e!=null&&(n=e.replace(Ta,"$&/")+"/"),Vs(s,t,n,"",function(p){return p})):s!=null&&(kl(s)&&(s=kx(s,n+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(Ta,"$&/")+"/")+e)),t.push(s)),1;if(i=0,r=r===""?".":r+":",Pa(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+zf(o,l);i+=Vs(o,t,n,a,s)}else if(a=Nx(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+zf(o,l++),i+=Vs(o,t,n,a,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ns(e,t,n){if(e==null)return e;var r=[],s=0;return Vs(e,r,"","",function(o){return t.call(n,o,s++)}),r}function Cx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},qs={transition:null},Ex={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:qs,ReactCurrentOwner:Nl};function Du(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Ns,forEach:function(e,t,n){Ns(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ns(e,function(){t++}),t},toArray:function(e){return Ns(e,function(t){return t})||[]},only:function(e){if(!kl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=lr;D.Fragment=hx;D.Profiler=gx;D.PureComponent=wl;D.StrictMode=mx;D.Suspense=jx;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ex;D.act=Du;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tu({},e.props),s=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Nl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Lu.call(t,a)&&!Au.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var p=0;p<a;p++)l[p]=arguments[p+2];r.children=l}return{$$typeof:us,type:e.type,key:s,ref:o,props:r,_owner:i}};D.createContext=function(e){return e={$$typeof:vx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yx,_context:e},e.Consumer=e};D.createElement=$u;D.createFactory=function(e){var t=$u.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:_x,render:e}};D.isValidElement=kl;D.lazy=function(e){return{$$typeof:Sx,_payload:{_status:-1,_result:e},_init:Cx}};D.memo=function(e,t){return{$$typeof:wx,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=qs.transition;qs.transition={};try{e()}finally{qs.transition=t}};D.unstable_act=Du;D.useCallback=function(e,t){return ze.current.useCallback(e,t)};D.useContext=function(e){return ze.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};D.useEffect=function(e,t){return ze.current.useEffect(e,t)};D.useId=function(){return ze.current.useId()};D.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ze.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};D.useRef=function(e){return ze.current.useRef(e)};D.useState=function(e){return ze.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ze.current.useTransition()};D.version="18.3.1";Ru.exports=D;var b=Ru.exports;const Ce=dx(b),zx=cx({__proto__:null,default:Ce},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx=b,Rx=Symbol.for("react.element"),Px=Symbol.for("react.fragment"),Tx=Object.prototype.hasOwnProperty,Ix=Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ox={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var r,s={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Tx.call(t,r)&&!Ox.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Rx,type:e,key:o,ref:i,props:s,_owner:Ix.current}}Vo.Fragment=Px;Vo.jsx=Fu;Vo.jsxs=Fu;Mu.exports=Vo;var f=Mu.exports,ci={},Bu={exports:{}},We={},Uu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var P=z.length;z.push(R);e:for(;0<P;){var $=P-1>>>1,A=z[$];if(0<s(A,R))z[$]=R,z[P]=A,P=$;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],P=z.pop();if(P!==R){z[0]=P;e:for(var $=0,A=z.length,Z=A>>>1;$<Z;){var q=2*($+1)-1,ee=z[q],$e=q+1,Ve=z[$e];if(0>s(ee,P))$e<A&&0>s(Ve,ee)?(z[$]=Ve,z[$e]=P,$=$e):(z[$]=ee,z[q]=P,$=q);else if($e<A&&0>s(Ve,P))z[$]=Ve,z[$e]=P,$=$e;else break e}}return R}function s(z,R){var P=z.sortIndex-R.sortIndex;return P!==0?P:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var a=[],p=[],u=1,d=null,g=3,w=!1,m=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var R=n(p);R!==null;){if(R.callback===null)r(p);else if(R.startTime<=z)r(p),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(p)}}function _(z){if(y=!1,h(z),!m)if(n(a)!==null)m=!0,J(N);else{var R=n(p);R!==null&&ct(_,R.startTime-z)}}function N(z,R){m=!1,y&&(y=!1,x(k),k=-1),w=!0;var P=g;try{for(h(R),d=n(a);d!==null&&(!(d.expirationTime>R)||z&&!W());){var $=d.callback;if(typeof $=="function"){d.callback=null,g=d.priorityLevel;var A=$(d.expirationTime<=R);R=e.unstable_now(),typeof A=="function"?d.callback=A:d===n(a)&&r(a),h(R)}else r(a);d=n(a)}if(d!==null)var Z=!0;else{var q=n(p);q!==null&&ct(_,q.startTime-R),Z=!1}return Z}finally{d=null,g=P,w=!1}}var E=!1,S=null,k=-1,F=5,I=-1;function W(){return!(e.unstable_now()-I<F)}function ve(){if(S!==null){var z=e.unstable_now();I=z;var R=!0;try{R=S(!0,z)}finally{R?V():(E=!1,S=null)}}else E=!1}var V;if(typeof c=="function")V=function(){c(ve)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ut=pe.port2;pe.port1.onmessage=ve,V=function(){ut.postMessage(null)}}else V=function(){v(ve,0)};function J(z){S=z,E||(E=!0,V())}function ct(z,R){k=v(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){m||w||(m=!0,J(N))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var P=g;g=R;try{return z()}finally{g=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var P=g;g=z;try{return R()}finally{g=P}},e.unstable_scheduleCallback=function(z,R,P){var $=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,z){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=P+A,z={id:u++,callback:R,priorityLevel:z,startTime:P,expirationTime:A,sortIndex:-1},P>$?(z.sortIndex=P,t(p,z),n(a)===null&&z===n(p)&&(y?(x(k),k=-1):y=!0,ct(_,P-$))):(z.sortIndex=A,t(a,z),m||w||(m=!0,J(N))),z},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(z){var R=g;return function(){var P=g;g=R;try{return z.apply(this,arguments)}finally{g=P}}}})(Wu);Uu.exports=Wu;var Lx=Uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax=b,Ue=Lx;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hu=new Set,Wr={};function kn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Wr[e]=t,e=0;e<t.length;e++)Hu.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),di=Object.prototype.hasOwnProperty,$x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ia={},Oa={};function Dx(e){return di.call(Oa,e)?!0:di.call(Ia,e)?!1:$x.test(e)?Oa[e]=!0:(Ia[e]=!0,!1)}function Fx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bx(e,t,n,r){if(t===null||typeof t>"u"||Fx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,s,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var bl=/[\-:]([a-z])/g;function Cl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bl,Cl);ye[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bl,Cl);ye[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bl,Cl);ye[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function El(e,t,n,r){var s=ye.hasOwnProperty(t)?ye[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bx(t,n,s,r)&&(n=null),r||s===null?Dx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=Ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ks=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),Pn=Symbol.for("react.fragment"),zl=Symbol.for("react.strict_mode"),xi=Symbol.for("react.profiler"),Vu=Symbol.for("react.provider"),qu=Symbol.for("react.context"),Ml=Symbol.for("react.forward_ref"),hi=Symbol.for("react.suspense"),mi=Symbol.for("react.suspense_list"),Rl=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Yu=Symbol.for("react.offscreen"),La=Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=La&&e[La]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Mf;function br(e){if(Mf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mf=t&&t[1]||""}return`
`+Mf+e}var Rf=!1;function Pf(e,t){if(!e||Rf)return"";Rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var s=p.stack.split(`
`),o=r.stack.split(`
`),i=s.length-1,l=o.length-1;1<=i&&0<=l&&s[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(s[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||s[i]!==o[l]){var a=`
`+s[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=l);break}}}finally{Rf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?br(e):""}function Ux(e){switch(e.tag){case 5:return br(e.type);case 16:return br("Lazy");case 13:return br("Suspense");case 19:return br("SuspenseList");case 0:case 2:case 15:return e=Pf(e.type,!1),e;case 11:return e=Pf(e.type.render,!1),e;case 1:return e=Pf(e.type,!0),e;default:return""}}function gi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pn:return"Fragment";case Rn:return"Portal";case xi:return"Profiler";case zl:return"StrictMode";case hi:return"Suspense";case mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qu:return(e.displayName||"Context")+".Consumer";case Vu:return(e._context.displayName||"Context")+".Provider";case Ml:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rl:return t=e.displayName||null,t!==null?t:gi(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return gi(e(t))}catch{}}return null}function Wx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gi(t);case 8:return t===zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hx(e){var t=Qu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bs(e){e._valueTracker||(e._valueTracker=Hx(e))}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yi(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gu(e,t){t=t.checked,t!=null&&El(e,"checked",t,!1)}function vi(e,t){Gu(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_i(e,t.type,n):t.hasOwnProperty("defaultValue")&&_i(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $a(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _i(e,t,n){(t!=="number"||uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Cr=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Da(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Cr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Xu(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cs,Zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cs=Cs||document.createElement("div"),Cs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vx=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){Vx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function ec(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function tc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ec(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var qx=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Si(e,t){if(t){if(qx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Ni(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=null;function Pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,Hn=null,Vn=null;function Ba(e){if(e=xs(e)){if(typeof bi!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Go(t),bi(e.stateNode,e.type,t))}}function nc(e){Hn?Vn?Vn.push(e):Vn=[e]:Hn=e}function rc(){if(Hn){var e=Hn,t=Vn;if(Vn=Hn=null,Ba(e),t)for(e=0;e<t.length;e++)Ba(t[e])}}function sc(e,t){return e(t)}function oc(){}var Tf=!1;function fc(e,t,n){if(Tf)return e(t,n);Tf=!0;try{return sc(e,t,n)}finally{Tf=!1,(Hn!==null||Vn!==null)&&(oc(),rc())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ci=!1;if(kt)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Ci=!1}function Yx(e,t,n,r,s,o,i,l,a){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(u){this.onError(u)}}var Tr=!1,co=null,xo=!1,Ei=null,Qx={onError:function(e){Tr=!0,co=e}};function Kx(e,t,n,r,s,o,i,l,a){Tr=!1,co=null,Yx.apply(Qx,arguments)}function Gx(e,t,n,r,s,o,i,l,a){if(Kx.apply(this,arguments),Tr){if(Tr){var p=co;Tr=!1,co=null}else throw Error(C(198));xo||(xo=!0,Ei=p)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ic(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ua(e){if(bn(e)!==e)throw Error(C(188))}function Xx(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Ua(s),e;if(o===r)return Ua(s),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=s,r=o;else{for(var i=!1,l=s.child;l;){if(l===n){i=!0,n=s,r=o;break}if(l===r){i=!0,r=s,n=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===n){i=!0,n=o,r=s;break}if(l===r){i=!0,r=o,n=s;break}l=l.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function lc(e){return e=Xx(e),e!==null?ac(e):null}function ac(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ac(e);if(t!==null)return t;e=e.sibling}return null}var pc=Ue.unstable_scheduleCallback,Wa=Ue.unstable_cancelCallback,Jx=Ue.unstable_shouldYield,Zx=Ue.unstable_requestPaint,ie=Ue.unstable_now,eh=Ue.unstable_getCurrentPriorityLevel,Tl=Ue.unstable_ImmediatePriority,uc=Ue.unstable_UserBlockingPriority,ho=Ue.unstable_NormalPriority,th=Ue.unstable_LowPriority,cc=Ue.unstable_IdlePriority,qo=null,gt=null;function nh(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:oh,rh=Math.log,sh=Math.LN2;function oh(e){return e>>>=0,e===0?32:31-(rh(e)/sh|0)|0}var Es=64,zs=4194304;function Er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~s;l!==0?r=Er(l):(o&=i,o!==0&&(r=Er(o)))}else i=n&~s,i!==0?r=Er(i):o!==0&&(r=Er(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),s=1<<n,r|=e[n],t&=~s;return r}function fh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ih(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-ft(o),l=1<<i,a=s[i];a===-1?(!(l&n)||l&r)&&(s[i]=fh(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dc(){var e=Es;return Es<<=1,!(Es&4194240)&&(Es=64),e}function If(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function lh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-ft(n),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~o}}function Il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var H=0;function xc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hc,Ol,mc,gc,yc,Mi=!1,Ms=[],Bt=null,Ut=null,Wt=null,qr=new Map,Yr=new Map,Ot=[],ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ha(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(t.pointerId)}}function yr(e,t,n,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=xs(t),t!==null&&Ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function ph(e,t,n,r,s){switch(t){case"focusin":return Bt=yr(Bt,e,t,n,r,s),!0;case"dragenter":return Ut=yr(Ut,e,t,n,r,s),!0;case"mouseover":return Wt=yr(Wt,e,t,n,r,s),!0;case"pointerover":var o=s.pointerId;return qr.set(o,yr(qr.get(o)||null,e,t,n,r,s)),!0;case"gotpointercapture":return o=s.pointerId,Yr.set(o,yr(Yr.get(o)||null,e,t,n,r,s)),!0}return!1}function vc(e){var t=on(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=ic(n),t!==null){e.blockedOn=t,yc(e.priority,function(){mc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ri(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ki=r,n.target.dispatchEvent(r),ki=null}else return t=xs(n),t!==null&&Ol(t),e.blockedOn=n,!1;t.shift()}return!0}function Va(e,t,n){Ys(e)&&n.delete(t)}function uh(){Mi=!1,Bt!==null&&Ys(Bt)&&(Bt=null),Ut!==null&&Ys(Ut)&&(Ut=null),Wt!==null&&Ys(Wt)&&(Wt=null),qr.forEach(Va),Yr.forEach(Va)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Mi||(Mi=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,uh)))}function Qr(e){function t(s){return vr(s,e)}if(0<Ms.length){vr(Ms[0],e);for(var n=1;n<Ms.length;n++){var r=Ms[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&vr(Bt,e),Ut!==null&&vr(Ut,e),Wt!==null&&vr(Wt,e),qr.forEach(t),Yr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)vc(n),n.blockedOn===null&&Ot.shift()}var qn=zt.ReactCurrentBatchConfig,go=!0;function ch(e,t,n,r){var s=H,o=qn.transition;qn.transition=null;try{H=1,Ll(e,t,n,r)}finally{H=s,qn.transition=o}}function dh(e,t,n,r){var s=H,o=qn.transition;qn.transition=null;try{H=4,Ll(e,t,n,r)}finally{H=s,qn.transition=o}}function Ll(e,t,n,r){if(go){var s=Ri(e,t,n,r);if(s===null)Hf(e,t,r,yo,n),Ha(e,r);else if(ph(s,e,t,n,r))r.stopPropagation();else if(Ha(e,r),t&4&&-1<ah.indexOf(e)){for(;s!==null;){var o=xs(s);if(o!==null&&hc(o),o=Ri(e,t,n,r),o===null&&Hf(e,t,r,yo,n),o===s)break;s=o}s!==null&&r.stopPropagation()}else Hf(e,t,r,null,n)}}var yo=null;function Ri(e,t,n,r){if(yo=null,e=Pl(r),e=on(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ic(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yo=e,null}function _c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eh()){case Tl:return 1;case uc:return 4;case ho:case th:return 16;case cc:return 536870912;default:return 16}default:return 16}}var At=null,Al=null,Qs=null;function jc(){if(Qs)return Qs;var e,t=Al,n=t.length,r,s="value"in At?At.value:At.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===s[o-r];r++);return Qs=s.slice(e,1<r?1-r:void 0)}function Ks(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rs(){return!0}function qa(){return!1}function He(e){function t(n,r,s,o,i){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Rs:qa,this.isPropagationStopped=qa,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=He(ar),ds=re({},ar,{view:0,detail:0}),xh=He(ds),Of,Lf,_r,Yo=re({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(Of=e.screenX-_r.screenX,Lf=e.screenY-_r.screenY):Lf=Of=0,_r=e),Of)},movementY:function(e){return"movementY"in e?e.movementY:Lf}}),Ya=He(Yo),hh=re({},Yo,{dataTransfer:0}),mh=He(hh),gh=re({},ds,{relatedTarget:0}),Af=He(gh),yh=re({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),vh=He(yh),_h=re({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jh=He(_h),wh=re({},ar,{data:0}),Qa=He(wh),Sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kh[e])?!!t[e]:!1}function Dl(){return bh}var Ch=re({},ds,{key:function(e){if(e.key){var t=Sh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dl,charCode:function(e){return e.type==="keypress"?Ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eh=He(Ch),zh=re({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ka=He(zh),Mh=re({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dl}),Rh=He(Mh),Ph=re({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Th=He(Ph),Ih=re({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Oh=He(Ih),Lh=[9,13,27,32],Fl=kt&&"CompositionEvent"in window,Ir=null;kt&&"documentMode"in document&&(Ir=document.documentMode);var Ah=kt&&"TextEvent"in window&&!Ir,wc=kt&&(!Fl||Ir&&8<Ir&&11>=Ir),Ga=" ",Xa=!1;function Sc(e,t){switch(e){case"keyup":return Lh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function $h(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Xa=!0,Ga);case"textInput":return e=t.data,e===Ga&&Xa?null:e;default:return null}}function Dh(e,t){if(Tn)return e==="compositionend"||!Fl&&Sc(e,t)?(e=jc(),Qs=Al=At=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wc&&t.locale!=="ko"?null:t.data;default:return null}}var Fh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fh[e.type]:t==="textarea"}function kc(e,t,n,r){nc(r),t=vo(t,"onChange"),0<t.length&&(n=new $l("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,Kr=null;function Bh(e){Lc(e,0)}function Qo(e){var t=Ln(e);if(Ku(t))return e}function Uh(e,t){if(e==="change")return t}var bc=!1;if(kt){var $f;if(kt){var Df="oninput"in document;if(!Df){var Za=document.createElement("div");Za.setAttribute("oninput","return;"),Df=typeof Za.oninput=="function"}$f=Df}else $f=!1;bc=$f&&(!document.documentMode||9<document.documentMode)}function ep(){Or&&(Or.detachEvent("onpropertychange",Cc),Kr=Or=null)}function Cc(e){if(e.propertyName==="value"&&Qo(Kr)){var t=[];kc(t,Kr,e,Pl(e)),fc(Bh,t)}}function Wh(e,t,n){e==="focusin"?(ep(),Or=t,Kr=n,Or.attachEvent("onpropertychange",Cc)):e==="focusout"&&ep()}function Hh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Kr)}function Vh(e,t){if(e==="click")return Qo(t)}function qh(e,t){if(e==="input"||e==="change")return Qo(t)}function Yh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:Yh;function Gr(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!di.call(t,s)||!at(e[s],t[s]))return!1}return!0}function tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function np(e,t){var n=tp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tp(n)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zc(){for(var e=window,t=uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=uo(e.document)}return t}function Bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qh(e){var t=zc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ec(n.ownerDocument.documentElement,n)){if(r!==null&&Bl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=np(n,o);var i=np(n,r);s&&i&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kh=kt&&"documentMode"in document&&11>=document.documentMode,In=null,Pi=null,Lr=null,Ti=!1;function rp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ti||In==null||In!==uo(r)||(r=In,"selectionStart"in r&&Bl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Gr(Lr,r)||(Lr=r,r=vo(Pi,"onSelect"),0<r.length&&(t=new $l("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function Ps(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionend:Ps("Transition","TransitionEnd")},Ff={},Mc={};kt&&(Mc=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Ko(e){if(Ff[e])return Ff[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mc)return Ff[e]=t[n];return e}var Rc=Ko("animationend"),Pc=Ko("animationiteration"),Tc=Ko("animationstart"),Ic=Ko("transitionend"),Oc=new Map,sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){Oc.set(e,t),kn(t,[e])}for(var Bf=0;Bf<sp.length;Bf++){var Uf=sp[Bf],Gh=Uf.toLowerCase(),Xh=Uf[0].toUpperCase()+Uf.slice(1);Jt(Gh,"on"+Xh)}Jt(Rc,"onAnimationEnd");Jt(Pc,"onAnimationIteration");Jt(Tc,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(Ic,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jh=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function op(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gx(r,t,void 0,e),e.currentTarget=null}function Lc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],a=l.instance,p=l.currentTarget;if(l=l.listener,a!==o&&s.isPropagationStopped())break e;op(s,l,p),o=a}else for(i=0;i<r.length;i++){if(l=r[i],a=l.instance,p=l.currentTarget,l=l.listener,a!==o&&s.isPropagationStopped())break e;op(s,l,p),o=a}}}if(xo)throw e=Ei,xo=!1,Ei=null,e}function Q(e,t){var n=t[$i];n===void 0&&(n=t[$i]=new Set);var r=e+"__bubble";n.has(r)||(Ac(t,e,2,!1),n.add(r))}function Wf(e,t,n){var r=0;t&&(r|=4),Ac(n,e,r,t)}var Ts="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[Ts]){e[Ts]=!0,Hu.forEach(function(n){n!=="selectionchange"&&(Jh.has(n)||Wf(n,!1,e),Wf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ts]||(t[Ts]=!0,Wf("selectionchange",!1,t))}}function Ac(e,t,n,r){switch(_c(t)){case 1:var s=ch;break;case 4:s=dh;break;default:s=Ll}n=s.bind(null,t,n,e),s=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Hf(e,t,n,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;i=i.return}for(;l!==null;){if(i=on(l),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}l=l.parentNode}}r=r.return}fc(function(){var p=o,u=Pl(n),d=[];e:{var g=Oc.get(e);if(g!==void 0){var w=$l,m=e;switch(e){case"keypress":if(Ks(n)===0)break e;case"keydown":case"keyup":w=Eh;break;case"focusin":m="focus",w=Af;break;case"focusout":m="blur",w=Af;break;case"beforeblur":case"afterblur":w=Af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=mh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Rh;break;case Rc:case Pc:case Tc:w=vh;break;case Ic:w=Th;break;case"scroll":w=xh;break;case"wheel":w=Oh;break;case"copy":case"cut":case"paste":w=jh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ka}var y=(t&4)!==0,v=!y&&e==="scroll",x=y?g!==null?g+"Capture":null:g;y=[];for(var c=p,h;c!==null;){h=c;var _=h.stateNode;if(h.tag===5&&_!==null&&(h=_,x!==null&&(_=Vr(c,x),_!=null&&y.push(Jr(c,_,h)))),v)break;c=c.return}0<y.length&&(g=new w(g,m,null,n,u),d.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==ki&&(m=n.relatedTarget||n.fromElement)&&(on(m)||m[bt]))break e;if((w||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,w?(m=n.relatedTarget||n.toElement,w=p,m=m?on(m):null,m!==null&&(v=bn(m),m!==v||m.tag!==5&&m.tag!==6)&&(m=null)):(w=null,m=p),w!==m)){if(y=Ya,_="onMouseLeave",x="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ka,_="onPointerLeave",x="onPointerEnter",c="pointer"),v=w==null?g:Ln(w),h=m==null?g:Ln(m),g=new y(_,c+"leave",w,n,u),g.target=v,g.relatedTarget=h,_=null,on(u)===p&&(y=new y(x,c+"enter",m,n,u),y.target=h,y.relatedTarget=v,_=y),v=_,w&&m)t:{for(y=w,x=m,c=0,h=y;h;h=zn(h))c++;for(h=0,_=x;_;_=zn(_))h++;for(;0<c-h;)y=zn(y),c--;for(;0<h-c;)x=zn(x),h--;for(;c--;){if(y===x||x!==null&&y===x.alternate)break t;y=zn(y),x=zn(x)}y=null}else y=null;w!==null&&fp(d,g,w,y,!1),m!==null&&v!==null&&fp(d,v,m,y,!0)}}e:{if(g=p?Ln(p):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var N=Uh;else if(Ja(g))if(bc)N=qh;else{N=Hh;var E=Wh}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=Vh);if(N&&(N=N(e,p))){kc(d,N,n,u);break e}E&&E(e,g,p),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&_i(g,"number",g.value)}switch(E=p?Ln(p):window,e){case"focusin":(Ja(E)||E.contentEditable==="true")&&(In=E,Pi=p,Lr=null);break;case"focusout":Lr=Pi=In=null;break;case"mousedown":Ti=!0;break;case"contextmenu":case"mouseup":case"dragend":Ti=!1,rp(d,n,u);break;case"selectionchange":if(Kh)break;case"keydown":case"keyup":rp(d,n,u)}var S;if(Fl)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Tn?Sc(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(wc&&n.locale!=="ko"&&(Tn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Tn&&(S=jc()):(At=u,Al="value"in At?At.value:At.textContent,Tn=!0)),E=vo(p,k),0<E.length&&(k=new Qa(k,e,null,n,u),d.push({event:k,listeners:E}),S?k.data=S:(S=Nc(n),S!==null&&(k.data=S)))),(S=Ah?$h(e,n):Dh(e,n))&&(p=vo(p,"onBeforeInput"),0<p.length&&(u=new Qa("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:p}),u.data=S))}Lc(d,t)})}function Jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Vr(e,n),o!=null&&r.unshift(Jr(e,o,s)),o=Vr(e,t),o!=null&&r.push(Jr(e,o,s))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fp(e,t,n,r,s){for(var o=t._reactName,i=[];n!==null&&n!==r;){var l=n,a=l.alternate,p=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&p!==null&&(l=p,s?(a=Vr(n,o),a!=null&&i.unshift(Jr(n,a,l))):s||(a=Vr(n,o),a!=null&&i.push(Jr(n,a,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Zh=/\r\n?/g,e2=/\u0000|\uFFFD/g;function ip(e){return(typeof e=="string"?e:""+e).replace(Zh,`
`).replace(e2,"")}function Is(e,t,n){if(t=ip(t),ip(e)!==t&&n)throw Error(C(425))}function _o(){}var Ii=null,Oi=null;function Li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ai=typeof setTimeout=="function"?setTimeout:void 0,t2=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,n2=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(e){return lp.resolve(null).then(e).catch(r2)}:Ai;function r2(e){setTimeout(function(){throw e})}function Vf(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Qr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ap(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),ht="__reactFiber$"+pr,Zr="__reactProps$"+pr,bt="__reactContainer$"+pr,$i="__reactEvents$"+pr,s2="__reactListeners$"+pr,o2="__reactHandles$"+pr;function on(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ap(e);e!==null;){if(n=e[ht])return n;e=ap(e)}return t}e=n,n=e.parentNode}return null}function xs(e){return e=e[ht]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Go(e){return e[Zr]||null}var Di=[],An=-1;function Zt(e){return{current:e}}function G(e){0>An||(e.current=Di[An],Di[An]=null,An--)}function Y(e,t){An++,Di[An]=e.current,e.current=t}var Xt={},Ne=Zt(Xt),Te=Zt(!1),hn=Xt;function Xn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ie(e){return e=e.childContextTypes,e!=null}function jo(){G(Te),G(Ne)}function pp(e,t,n){if(Ne.current!==Xt)throw Error(C(168));Y(Ne,t),Y(Te,n)}function $c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(C(108,Wx(e)||"Unknown",s));return re({},n,r)}function wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,hn=Ne.current,Y(Ne,e),Y(Te,Te.current),!0}function up(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=$c(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,G(Te),G(Ne),Y(Ne,e)):G(Te),Y(Te,n)}var jt=null,Xo=!1,qf=!1;function Dc(e){jt===null?jt=[e]:jt.push(e)}function f2(e){Xo=!0,Dc(e)}function en(){if(!qf&&jt!==null){qf=!0;var e=0,t=H;try{var n=jt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,Xo=!1}catch(s){throw jt!==null&&(jt=jt.slice(e+1)),pc(Tl,en),s}finally{H=t,qf=!1}}return null}var $n=[],Dn=0,So=null,No=0,Qe=[],Ke=0,mn=null,wt=1,St="";function nn(e,t){$n[Dn++]=No,$n[Dn++]=So,So=e,No=t}function Fc(e,t,n){Qe[Ke++]=wt,Qe[Ke++]=St,Qe[Ke++]=mn,mn=e;var r=wt;e=St;var s=32-ft(r)-1;r&=~(1<<s),n+=1;var o=32-ft(t)+s;if(30<o){var i=s-s%5;o=(r&(1<<i)-1).toString(32),r>>=i,s-=i,wt=1<<32-ft(t)+s|n<<s|r,St=o+e}else wt=1<<o|n<<s|r,St=e}function Ul(e){e.return!==null&&(nn(e,1),Fc(e,1,0))}function Wl(e){for(;e===So;)So=$n[--Dn],$n[Dn]=null,No=$n[--Dn],$n[Dn]=null;for(;e===mn;)mn=Qe[--Ke],Qe[Ke]=null,St=Qe[--Ke],Qe[Ke]=null,wt=Qe[--Ke],Qe[Ke]=null}var Be=null,Fe=null,X=!1,ot=null;function Bc(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Fe=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:wt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Fe=null,!0):!1;default:return!1}}function Fi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(X){var t=Fe;if(t){var n=t;if(!cp(e,t)){if(Fi(e))throw Error(C(418));t=Ht(n.nextSibling);var r=Be;t&&cp(e,t)?Bc(r,n):(e.flags=e.flags&-4097|2,X=!1,Be=e)}}else{if(Fi(e))throw Error(C(418));e.flags=e.flags&-4097|2,X=!1,Be=e}}}function dp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Os(e){if(e!==Be)return!1;if(!X)return dp(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Li(e.type,e.memoizedProps)),t&&(t=Fe)){if(Fi(e))throw Uc(),Error(C(418));for(;t;)Bc(e,t),t=Ht(t.nextSibling)}if(dp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Be?Ht(e.stateNode.nextSibling):null;return!0}function Uc(){for(var e=Fe;e;)e=Ht(e.nextSibling)}function Jn(){Fe=Be=null,X=!1}function Hl(e){ot===null?ot=[e]:ot.push(e)}var i2=zt.ReactCurrentBatchConfig;function jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=s.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Ls(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xp(e){var t=e._init;return t(e._payload)}function Wc(e){function t(x,c){if(e){var h=x.deletions;h===null?(x.deletions=[c],x.flags|=16):h.push(c)}}function n(x,c){if(!e)return null;for(;c!==null;)t(x,c),c=c.sibling;return null}function r(x,c){for(x=new Map;c!==null;)c.key!==null?x.set(c.key,c):x.set(c.index,c),c=c.sibling;return x}function s(x,c){return x=Qt(x,c),x.index=0,x.sibling=null,x}function o(x,c,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<c?(x.flags|=2,c):h):(x.flags|=2,c)):(x.flags|=1048576,c)}function i(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,c,h,_){return c===null||c.tag!==6?(c=Zf(h,x.mode,_),c.return=x,c):(c=s(c,h),c.return=x,c)}function a(x,c,h,_){var N=h.type;return N===Pn?u(x,c,h.props.children,_,h.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Tt&&xp(N)===c.type)?(_=s(c,h.props),_.ref=jr(x,c,h),_.return=x,_):(_=no(h.type,h.key,h.props,null,x.mode,_),_.ref=jr(x,c,h),_.return=x,_)}function p(x,c,h,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=ei(h,x.mode,_),c.return=x,c):(c=s(c,h.children||[]),c.return=x,c)}function u(x,c,h,_,N){return c===null||c.tag!==7?(c=un(h,x.mode,_,N),c.return=x,c):(c=s(c,h),c.return=x,c)}function d(x,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Zf(""+c,x.mode,h),c.return=x,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ks:return h=no(c.type,c.key,c.props,null,x.mode,h),h.ref=jr(x,null,c),h.return=x,h;case Rn:return c=ei(c,x.mode,h),c.return=x,c;case Tt:var _=c._init;return d(x,_(c._payload),h)}if(Cr(c)||mr(c))return c=un(c,x.mode,h,null),c.return=x,c;Ls(x,c)}return null}function g(x,c,h,_){var N=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return N!==null?null:l(x,c,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ks:return h.key===N?a(x,c,h,_):null;case Rn:return h.key===N?p(x,c,h,_):null;case Tt:return N=h._init,g(x,c,N(h._payload),_)}if(Cr(h)||mr(h))return N!==null?null:u(x,c,h,_,null);Ls(x,h)}return null}function w(x,c,h,_,N){if(typeof _=="string"&&_!==""||typeof _=="number")return x=x.get(h)||null,l(c,x,""+_,N);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ks:return x=x.get(_.key===null?h:_.key)||null,a(c,x,_,N);case Rn:return x=x.get(_.key===null?h:_.key)||null,p(c,x,_,N);case Tt:var E=_._init;return w(x,c,h,E(_._payload),N)}if(Cr(_)||mr(_))return x=x.get(h)||null,u(c,x,_,N,null);Ls(c,_)}return null}function m(x,c,h,_){for(var N=null,E=null,S=c,k=c=0,F=null;S!==null&&k<h.length;k++){S.index>k?(F=S,S=null):F=S.sibling;var I=g(x,S,h[k],_);if(I===null){S===null&&(S=F);break}e&&S&&I.alternate===null&&t(x,S),c=o(I,c,k),E===null?N=I:E.sibling=I,E=I,S=F}if(k===h.length)return n(x,S),X&&nn(x,k),N;if(S===null){for(;k<h.length;k++)S=d(x,h[k],_),S!==null&&(c=o(S,c,k),E===null?N=S:E.sibling=S,E=S);return X&&nn(x,k),N}for(S=r(x,S);k<h.length;k++)F=w(S,x,k,h[k],_),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?k:F.key),c=o(F,c,k),E===null?N=F:E.sibling=F,E=F);return e&&S.forEach(function(W){return t(x,W)}),X&&nn(x,k),N}function y(x,c,h,_){var N=mr(h);if(typeof N!="function")throw Error(C(150));if(h=N.call(h),h==null)throw Error(C(151));for(var E=N=null,S=c,k=c=0,F=null,I=h.next();S!==null&&!I.done;k++,I=h.next()){S.index>k?(F=S,S=null):F=S.sibling;var W=g(x,S,I.value,_);if(W===null){S===null&&(S=F);break}e&&S&&W.alternate===null&&t(x,S),c=o(W,c,k),E===null?N=W:E.sibling=W,E=W,S=F}if(I.done)return n(x,S),X&&nn(x,k),N;if(S===null){for(;!I.done;k++,I=h.next())I=d(x,I.value,_),I!==null&&(c=o(I,c,k),E===null?N=I:E.sibling=I,E=I);return X&&nn(x,k),N}for(S=r(x,S);!I.done;k++,I=h.next())I=w(S,x,k,I.value,_),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?k:I.key),c=o(I,c,k),E===null?N=I:E.sibling=I,E=I);return e&&S.forEach(function(ve){return t(x,ve)}),X&&nn(x,k),N}function v(x,c,h,_){if(typeof h=="object"&&h!==null&&h.type===Pn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ks:e:{for(var N=h.key,E=c;E!==null;){if(E.key===N){if(N=h.type,N===Pn){if(E.tag===7){n(x,E.sibling),c=s(E,h.props.children),c.return=x,x=c;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Tt&&xp(N)===E.type){n(x,E.sibling),c=s(E,h.props),c.ref=jr(x,E,h),c.return=x,x=c;break e}n(x,E);break}else t(x,E);E=E.sibling}h.type===Pn?(c=un(h.props.children,x.mode,_,h.key),c.return=x,x=c):(_=no(h.type,h.key,h.props,null,x.mode,_),_.ref=jr(x,c,h),_.return=x,x=_)}return i(x);case Rn:e:{for(E=h.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(x,c.sibling),c=s(c,h.children||[]),c.return=x,x=c;break e}else{n(x,c);break}else t(x,c);c=c.sibling}c=ei(h,x.mode,_),c.return=x,x=c}return i(x);case Tt:return E=h._init,v(x,c,E(h._payload),_)}if(Cr(h))return m(x,c,h,_);if(mr(h))return y(x,c,h,_);Ls(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(x,c.sibling),c=s(c,h),c.return=x,x=c):(n(x,c),c=Zf(h,x.mode,_),c.return=x,x=c),i(x)):n(x,c)}return v}var Zn=Wc(!0),Hc=Wc(!1),ko=Zt(null),bo=null,Fn=null,Vl=null;function ql(){Vl=Fn=bo=null}function Yl(e){var t=ko.current;G(ko),e._currentValue=t}function Ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){bo=e,Vl=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(Vl!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(bo===null)throw Error(C(308));Fn=e,bo.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var fn=null;function Ql(e){fn===null?fn=[e]:fn.push(e)}function Vc(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Ql(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function Kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Ct(e,n)}return s=r.interleaved,s===null?(t.next=t,Ql(r)):(t.next=s.next,s.next=t),r.interleaved=t,Ct(e,n)}function Gs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Il(e,n)}}function hp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Co(e,t,n,r){var s=e.updateQueue;It=!1;var o=s.firstBaseUpdate,i=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var a=l,p=a.next;a.next=null,i===null?o=p:i.next=p,i=a;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==i&&(l===null?u.firstBaseUpdate=p:l.next=p,u.lastBaseUpdate=a))}if(o!==null){var d=s.baseState;i=0,u=p=a=null,l=o;do{var g=l.lane,w=l.eventTime;if((r&g)===g){u!==null&&(u=u.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,y=l;switch(g=t,w=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(w,d,g);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,g=typeof m=="function"?m.call(w,d,g):m,g==null)break e;d=re({},d,g);break e;case 2:It=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(p=u=w,a=d):u=u.next=w,i|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(u===null&&(a=d),s.baseState=a,s.firstBaseUpdate=p,s.lastBaseUpdate=u,t=s.shared.interleaved,t!==null){s=t;do i|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);yn|=i,e.lanes=i,e.memoizedState=d}}function mp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(C(191,s));s.call(r)}}}var hs={},yt=Zt(hs),es=Zt(hs),ts=Zt(hs);function ln(e){if(e===hs)throw Error(C(174));return e}function Gl(e,t){switch(Y(ts,t),Y(es,e),Y(yt,hs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wi(t,e)}G(yt),Y(yt,t)}function er(){G(yt),G(es),G(ts)}function Yc(e){ln(ts.current);var t=ln(yt.current),n=wi(t,e.type);t!==n&&(Y(es,e),Y(yt,n))}function Xl(e){es.current===e&&(G(yt),G(es))}var te=Zt(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yf=[];function Jl(){for(var e=0;e<Yf.length;e++)Yf[e]._workInProgressVersionPrimary=null;Yf.length=0}var Xs=zt.ReactCurrentDispatcher,Qf=zt.ReactCurrentBatchConfig,gn=0,ne=null,ue=null,xe=null,zo=!1,Ar=!1,ns=0,l2=0;function _e(){throw Error(C(321))}function Zl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function ea(e,t,n,r,s,o){if(gn=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xs.current=e===null||e.memoizedState===null?c2:d2,e=n(r,s),Ar){o=0;do{if(Ar=!1,ns=0,25<=o)throw Error(C(301));o+=1,xe=ue=null,t.updateQueue=null,Xs.current=x2,e=n(r,s)}while(Ar)}if(Xs.current=Mo,t=ue!==null&&ue.next!==null,gn=0,xe=ue=ne=null,zo=!1,t)throw Error(C(300));return e}function ta(){var e=ns!==0;return ns=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ne.memoizedState=xe=e:xe=xe.next=e,xe}function Ze(){if(ue===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=xe===null?ne.memoizedState:xe.next;if(t!==null)xe=t,ue=e;else{if(e===null)throw Error(C(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},xe===null?ne.memoizedState=xe=e:xe=xe.next=e}return xe}function rs(e,t){return typeof t=="function"?t(e):t}function Kf(e){var t=Ze(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ue,s=r.baseQueue,o=n.pending;if(o!==null){if(s!==null){var i=s.next;s.next=o.next,o.next=i}r.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,r=r.baseState;var l=i=null,a=null,p=o;do{var u=p.lane;if((gn&u)===u)a!==null&&(a=a.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var d={lane:u,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};a===null?(l=a=d,i=r):a=a.next=d,ne.lanes|=u,yn|=u}p=p.next}while(p!==null&&p!==o);a===null?i=r:a.next=l,at(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do o=s.lane,ne.lanes|=o,yn|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gf(e){var t=Ze(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var i=s=s.next;do o=e(o,i.action),i=i.next;while(i!==s);at(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qc(){}function Kc(e,t){var n=ne,r=Ze(),s=t(),o=!at(r.memoizedState,s);if(o&&(r.memoizedState=s,Pe=!0),r=r.queue,na(Jc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,ss(9,Xc.bind(null,n,r,s,t),void 0,null),he===null)throw Error(C(349));gn&30||Gc(n,t,s)}return s}function Gc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xc(e,t,n,r){t.value=n,t.getSnapshot=r,Zc(t)&&e1(e)}function Jc(e,t,n){return n(function(){Zc(t)&&e1(e)})}function Zc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function e1(e){var t=Ct(e,1);t!==null&&it(t,e,1,-1)}function gp(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},t.queue=e,e=e.dispatch=u2.bind(null,ne,e),[t.memoizedState,e]}function ss(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function t1(){return Ze().memoizedState}function Js(e,t,n,r){var s=xt();ne.flags|=e,s.memoizedState=ss(1|t,n,void 0,r===void 0?null:r)}function Jo(e,t,n,r){var s=Ze();r=r===void 0?null:r;var o=void 0;if(ue!==null){var i=ue.memoizedState;if(o=i.destroy,r!==null&&Zl(r,i.deps)){s.memoizedState=ss(t,n,o,r);return}}ne.flags|=e,s.memoizedState=ss(1|t,n,o,r)}function yp(e,t){return Js(8390656,8,e,t)}function na(e,t){return Jo(2048,8,e,t)}function n1(e,t){return Jo(4,2,e,t)}function r1(e,t){return Jo(4,4,e,t)}function s1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function o1(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4,4,s1.bind(null,t,e),n)}function ra(){}function f1(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function i1(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function l1(e,t,n){return gn&21?(at(n,t)||(n=dc(),ne.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function a2(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Qf.transition;Qf.transition={};try{e(!1),t()}finally{H=n,Qf.transition=r}}function a1(){return Ze().memoizedState}function p2(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},p1(e))u1(t,n);else if(n=Vc(e,t,n,r),n!==null){var s=Ee();it(n,e,r,s),c1(n,t,r)}}function u2(e,t,n){var r=Yt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(p1(e))u1(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,n);if(s.hasEagerState=!0,s.eagerState=l,at(l,i)){var a=t.interleaved;a===null?(s.next=s,Ql(t)):(s.next=a.next,a.next=s),t.interleaved=s;return}}catch{}finally{}n=Vc(e,t,s,r),n!==null&&(s=Ee(),it(n,e,r,s),c1(n,t,r))}}function p1(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function u1(e,t){Ar=zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function c1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Il(e,n)}}var Mo={readContext:Je,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},c2={readContext:Je,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:yp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Js(4194308,4,s1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Js(4194308,4,e,t)},useInsertionEffect:function(e,t){return Js(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=p2.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:gp,useDebugValue:ra,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=gp(!1),t=e[0];return e=a2.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,s=xt();if(X){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),he===null)throw Error(C(349));gn&30||Gc(r,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,yp(Jc.bind(null,r,o,e),[e]),r.flags|=2048,ss(9,Xc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=he.identifierPrefix;if(X){var n=St,r=wt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ns++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=l2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d2={readContext:Je,useCallback:f1,useContext:Je,useEffect:na,useImperativeHandle:o1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:i1,useReducer:Kf,useRef:t1,useState:function(){return Kf(rs)},useDebugValue:ra,useDeferredValue:function(e){var t=Ze();return l1(t,ue.memoizedState,e)},useTransition:function(){var e=Kf(rs)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Kc,useId:a1,unstable_isNewReconciler:!1},x2={readContext:Je,useCallback:f1,useContext:Je,useEffect:na,useImperativeHandle:o1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:i1,useReducer:Gf,useRef:t1,useState:function(){return Gf(rs)},useDebugValue:ra,useDeferredValue:function(e){var t=Ze();return ue===null?t.memoizedState=e:l1(t,ue.memoizedState,e)},useTransition:function(){var e=Gf(rs)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Kc,useId:a1,unstable_isNewReconciler:!1};function nt(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zo={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),s=Yt(e),o=Nt(r,s);o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,s),t!==null&&(it(t,e,s,r),Gs(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),s=Yt(e),o=Nt(r,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,s),t!==null&&(it(t,e,s,r),Gs(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Yt(e),s=Nt(n,r);s.tag=2,t!=null&&(s.callback=t),t=Vt(e,s,r),t!==null&&(it(t,e,r,n),Gs(t,e,r))}};function vp(e,t,n,r,s,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(s,o):!0}function d1(e,t,n){var r=!1,s=Xt,o=t.contextType;return typeof o=="object"&&o!==null?o=Je(o):(s=Ie(t)?hn:Ne.current,r=t.contextTypes,o=(r=r!=null)?Xn(e,s):Xt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function _p(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zo.enqueueReplaceState(t,t.state,null)}function Hi(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Kl(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Je(o):(o=Ie(t)?hn:Ne.current,s.context=Xn(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Wi(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Zo.enqueueReplaceState(s,s.state,null),Co(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var n="",r=t;do n+=Ux(r),r=r.return;while(r);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Xf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var h2=typeof WeakMap=="function"?WeakMap:Map;function x1(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Po||(Po=!0,tl=r),Vi(e,t)},n}function h1(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Vi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vi(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function jp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new h2;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=z2.bind(null,e,t,n),t.then(e,e))}function wp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sp(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var m2=zt.ReactCurrentOwner,Pe=!1;function ke(e,t,n,r){t.child=e===null?Hc(t,null,n,r):Zn(t,e.child,n,r)}function Np(e,t,n,r,s){n=n.render;var o=t.ref;return Yn(t,s),r=ea(e,t,n,r,o,s),n=ta(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Et(e,t,s)):(X&&n&&Ul(t),t.flags|=1,ke(e,t,r,s),t.child)}function kp(e,t,n,r,s){if(e===null){var o=n.type;return typeof o=="function"&&!ua(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,m1(e,t,o,r,s)):(e=no(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(i,r)&&e.ref===t.ref)return Et(e,t,s)}return t.flags|=1,e=Qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function m1(e,t,n,r,s){if(e!==null){var o=e.memoizedProps;if(Gr(o,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,Et(e,t,s)}return qi(e,t,n,r,s)}function g1(e,t,n){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Un,De),De|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Un,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(Un,De),De|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(Un,De),De|=r;return ke(e,t,s,n),t.child}function y1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qi(e,t,n,r,s){var o=Ie(n)?hn:Ne.current;return o=Xn(t,o),Yn(t,s),n=ea(e,t,n,r,o,s),r=ta(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Et(e,t,s)):(X&&r&&Ul(t),t.flags|=1,ke(e,t,n,s),t.child)}function bp(e,t,n,r,s){if(Ie(n)){var o=!0;wo(t)}else o=!1;if(Yn(t,s),t.stateNode===null)Zs(e,t),d1(t,n,r),Hi(t,n,r,s),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var a=i.context,p=n.contextType;typeof p=="object"&&p!==null?p=Je(p):(p=Ie(n)?hn:Ne.current,p=Xn(t,p));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||a!==p)&&_p(t,i,r,p),It=!1;var g=t.memoizedState;i.state=g,Co(t,r,i,s),a=t.memoizedState,l!==r||g!==a||Te.current||It?(typeof u=="function"&&(Wi(t,n,u,r),a=t.memoizedState),(l=It||vp(t,n,l,r,g,a,p))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=p,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,qc(e,t),l=t.memoizedProps,p=t.type===t.elementType?l:nt(t.type,l),i.props=p,d=t.pendingProps,g=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Je(a):(a=Ie(n)?hn:Ne.current,a=Xn(t,a));var w=n.getDerivedStateFromProps;(u=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||g!==a)&&_p(t,i,r,a),It=!1,g=t.memoizedState,i.state=g,Co(t,r,i,s);var m=t.memoizedState;l!==d||g!==m||Te.current||It?(typeof w=="function"&&(Wi(t,n,w,r),m=t.memoizedState),(p=It||vp(t,n,p,r,g,m,a)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,m,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,m,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),i.props=r,i.state=m,i.context=a,r=p):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Yi(e,t,n,r,o,s)}function Yi(e,t,n,r,s,o){y1(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return s&&up(t,n,!1),Et(e,t,o);r=t.stateNode,m2.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Zn(t,e.child,null,o),t.child=Zn(t,null,l,o)):ke(e,t,l,o),t.memoizedState=r.state,s&&up(t,n,!0),t.child}function v1(e){var t=e.stateNode;t.pendingContext?pp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pp(e,t.context,!1),Gl(e,t.containerInfo)}function Cp(e,t,n,r,s){return Jn(),Hl(s),t.flags|=256,ke(e,t,n,r),t.child}var Qi={dehydrated:null,treeContext:null,retryLane:0};function Ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function _1(e,t,n){var r=t.pendingProps,s=te.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Y(te,s&1),e===null)return Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=nf(i,r,0,null),e=un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ki(n),t.memoizedState=Qi,e):sa(t,i));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return g2(e,t,i,r,l,s,n);if(o){o=r.fallback,i=t.mode,s=e.child,l=s.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Qt(s,a),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?o=Qt(l,o):(o=un(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Ki(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Qi,r}return o=e.child,e=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sa(e,t){return t=nf({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function As(e,t,n,r){return r!==null&&Hl(r),Zn(t,e.child,null,n),e=sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function g2(e,t,n,r,s,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Xf(Error(C(422))),As(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=nf({mode:"visible",children:r.children},s,0,null),o=un(o,s,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Zn(t,e.child,null,i),t.child.memoizedState=Ki(i),t.memoizedState=Qi,o);if(!(t.mode&1))return As(e,t,i,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(C(419)),r=Xf(o,r,void 0),As(e,t,i,r)}if(l=(i&e.childLanes)!==0,Pe||l){if(r=he,r!==null){switch(i&-i){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|i)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Ct(e,s),it(r,e,s,-1))}return pa(),r=Xf(Error(C(421))),As(e,t,i,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=M2.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,Fe=Ht(s.nextSibling),Be=t,X=!0,ot=null,e!==null&&(Qe[Ke++]=wt,Qe[Ke++]=St,Qe[Ke++]=mn,wt=e.id,St=e.overflow,mn=t),t=sa(t,r.children),t.flags|=4096,t)}function Ep(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ui(e.return,t,n)}function Jf(e,t,n,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=s)}function j1(e,t,n){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(ke(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ep(e,n,t);else if(e.tag===19)Ep(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(te,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Jf(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Eo(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Jf(t,!0,n,null,o);break;case"together":Jf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function y2(e,t,n){switch(t.tag){case 3:v1(t),Jn();break;case 5:Yc(t);break;case 1:Ie(t.type)&&wo(t);break;case 4:Gl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Y(ko,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?_1(e,t,n):(Y(te,te.current&1),e=Et(e,t,n),e!==null?e.sibling:null);Y(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return j1(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Y(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,g1(e,t,n)}return Et(e,t,n)}var w1,Gi,S1,N1;w1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gi=function(){};S1=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,ln(yt.current);var o=null;switch(n){case"input":s=yi(e,s),r=yi(e,r),o=[];break;case"select":s=re({},s,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":s=ji(e,s),r=ji(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_o)}Si(n,r);var i;n=null;for(p in s)if(!r.hasOwnProperty(p)&&s.hasOwnProperty(p)&&s[p]!=null)if(p==="style"){var l=s[p];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Wr.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var a=r[p];if(l=s!=null?s[p]:void 0,r.hasOwnProperty(p)&&a!==l&&(a!=null||l!=null))if(p==="style")if(l){for(i in l)!l.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&l[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(p,n)),n=a;else p==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(p,a)):p==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(p,""+a):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(p)?(a!=null&&p==="onScroll"&&Q("scroll",e),o||l===a||(o=[])):(o=o||[]).push(p,a))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}};N1=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function v2(e,t,n){var r=t.pendingProps;switch(Wl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Ie(t.type)&&jo(),je(t),null;case 3:return r=t.stateNode,er(),G(Te),G(Ne),Jl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(sl(ot),ot=null))),Gi(e,t),je(t),null;case 5:Xl(t);var s=ln(ts.current);if(n=t.type,e!==null&&t.stateNode!=null)S1(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return je(t),null}if(e=ln(yt.current),Os(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ht]=t,r[Zr]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(s=0;s<zr.length;s++)Q(zr[s],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Aa(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":Da(r,o),Q("invalid",r)}Si(n,o),s=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Is(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Is(r.textContent,l,e),s=["children",""+l]):Wr.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Q("scroll",r)}switch(n){case"input":bs(r),$a(r,o,!0);break;case"textarea":bs(r),Fa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_o)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ju(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[ht]=t,e[Zr]=r,w1(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ni(n,r),n){case"dialog":Q("cancel",e),Q("close",e),s=r;break;case"iframe":case"object":case"embed":Q("load",e),s=r;break;case"video":case"audio":for(s=0;s<zr.length;s++)Q(zr[s],e);s=r;break;case"source":Q("error",e),s=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),s=r;break;case"details":Q("toggle",e),s=r;break;case"input":Aa(e,r),s=yi(e,r),Q("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=re({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Da(e,r),s=ji(e,r),Q("invalid",e);break;default:s=r}Si(n,s),l=s;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?tc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Zu(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hr(e,a):typeof a=="number"&&Hr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Q("scroll",e):a!=null&&El(e,o,a,i))}switch(n){case"input":bs(e),$a(e,r,!1);break;case"textarea":bs(e),Fa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Wn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=_o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)N1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=ln(ts.current),ln(yt.current),Os(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(o=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Is(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Is(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return je(t),null;case 13:if(G(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Fe!==null&&t.mode&1&&!(t.flags&128))Uc(),Jn(),t.flags|=98560,o=!1;else if(o=Os(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[ht]=t}else Jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else ot!==null&&(sl(ot),ot=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?de===0&&(de=3):pa())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return er(),Gi(e,t),e===null&&Xr(t.stateNode.containerInfo),je(t),null;case 10:return Yl(t.type._context),je(t),null;case 17:return Ie(t.type)&&jo(),je(t),null;case 19:if(G(te),o=t.memoizedState,o===null)return je(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)wr(o,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Eo(e),i!==null){for(t.flags|=128,wr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>nr&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!X)return je(t),null}else 2*ie()-o.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,n=te.current,Y(te,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return aa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function _2(e,t){switch(Wl(t),t.tag){case 1:return Ie(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),G(Te),G(Ne),Jl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xl(t),null;case 13:if(G(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(te),null;case 4:return er(),null;case 10:return Yl(t.type._context),null;case 22:case 23:return aa(),null;case 24:return null;default:return null}}var $s=!1,we=!1,j2=typeof WeakSet=="function"?WeakSet:Set,M=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Xi(e,t,n){try{n()}catch(r){se(e,t,r)}}var zp=!1;function w2(e,t){if(Ii=go,e=zc(),Bl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,l=-1,a=-1,p=0,u=0,d=e,g=null;t:for(;;){for(var w;d!==n||s!==0&&d.nodeType!==3||(l=i+s),d!==o||r!==0&&d.nodeType!==3||(a=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(w=d.firstChild)!==null;)g=d,d=w;for(;;){if(d===e)break t;if(g===n&&++p===s&&(l=i),g===o&&++u===r&&(a=i),(w=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=w}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oi={focusedElem:e,selectionRange:n},go=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,v=m.memoizedState,x=t.stateNode,c=x.getSnapshotBeforeUpdate(t.elementType===t.type?y:nt(t.type,y),v);x.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(_){se(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return m=zp,zp=!1,m}function $r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Xi(t,n,o)}s=s.next}while(s!==r)}}function ef(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function k1(e){var t=e.alternate;t!==null&&(e.alternate=null,k1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[Zr],delete t[$i],delete t[s2],delete t[o2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function b1(e){return e.tag===5||e.tag===3||e.tag===4}function Mp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||b1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_o));else if(r!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}var me=null,rt=!1;function Rt(e,t,n){for(n=n.child;n!==null;)C1(e,t,n),n=n.sibling}function C1(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:we||Bn(n,t);case 6:var r=me,s=rt;me=null,Rt(e,t,n),me=r,rt=s,me!==null&&(rt?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(rt?(e=me,n=n.stateNode,e.nodeType===8?Vf(e.parentNode,n):e.nodeType===1&&Vf(e,n),Qr(e)):Vf(me,n.stateNode));break;case 4:r=me,s=rt,me=n.stateNode.containerInfo,rt=!0,Rt(e,t,n),me=r,rt=s;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Xi(n,t,i),s=s.next}while(s!==r)}Rt(e,t,n);break;case 1:if(!we&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){se(n,t,l)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Rt(e,t,n),we=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function Rp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new j2),t.forEach(function(r){var s=R2.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,rt=!1;break e;case 3:me=l.stateNode.containerInfo,rt=!0;break e;case 4:me=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(me===null)throw Error(C(160));C1(o,i,s),me=null,rt=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(p){se(s,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)E1(t,e),t=t.sibling}function E1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),dt(e),r&4){try{$r(3,e,e.return),ef(3,e)}catch(y){se(e,e.return,y)}try{$r(5,e,e.return)}catch(y){se(e,e.return,y)}}break;case 1:tt(t,e),dt(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(tt(t,e),dt(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var s=e.stateNode;try{Hr(s,"")}catch(y){se(e,e.return,y)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Gu(s,o),Ni(l,i);var p=Ni(l,o);for(i=0;i<a.length;i+=2){var u=a[i],d=a[i+1];u==="style"?tc(s,d):u==="dangerouslySetInnerHTML"?Zu(s,d):u==="children"?Hr(s,d):El(s,u,d,p)}switch(l){case"input":vi(s,o);break;case"textarea":Xu(s,o);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Wn(s,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?Wn(s,!!o.multiple,o.defaultValue,!0):Wn(s,!!o.multiple,o.multiple?[]:"",!1))}s[Zr]=o}catch(y){se(e,e.return,y)}}break;case 6:if(tt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(C(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(y){se(e,e.return,y)}}break;case 3:if(tt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(y){se(e,e.return,y)}break;case 4:tt(t,e),dt(e);break;case 13:tt(t,e),dt(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(ia=ie())),r&4&&Rp(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(we=(p=we)||u,tt(t,e),we=p):tt(t,e),dt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!u&&e.mode&1)for(M=e,u=e.child;u!==null;){for(d=M=u;M!==null;){switch(g=M,w=g.child,g.tag){case 0:case 11:case 14:case 15:$r(4,g,g.return);break;case 1:Bn(g,g.return);var m=g.stateNode;if(typeof m.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){se(r,n,y)}}break;case 5:Bn(g,g.return);break;case 22:if(g.memoizedState!==null){Tp(d);continue}}w!==null?(w.return=g,M=w):Tp(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{s=d.stateNode,p?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,a=d.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=ec("display",i))}catch(y){se(e,e.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=p?"":d.memoizedProps}catch(y){se(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tt(t,e),dt(e),r&4&&Rp(e);break;case 21:break;default:tt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(b1(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Hr(s,""),r.flags&=-33);var o=Mp(e);el(e,o,s);break;case 3:case 4:var i=r.stateNode.containerInfo,l=Mp(e);Zi(e,l,i);break;default:throw Error(C(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S2(e,t,n){M=e,z1(e)}function z1(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var s=M,o=s.child;if(s.tag===22&&r){var i=s.memoizedState!==null||$s;if(!i){var l=s.alternate,a=l!==null&&l.memoizedState!==null||we;l=$s;var p=we;if($s=i,(we=a)&&!p)for(M=s;M!==null;)i=M,a=i.child,i.tag===22&&i.memoizedState!==null?Ip(s):a!==null?(a.return=i,M=a):Ip(s);for(;o!==null;)M=o,z1(o),o=o.sibling;M=s,$s=l,we=p}Pp(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,M=o):Pp(e)}}function Pp(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||ef(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&mp(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mp(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var u=p.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Qr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}we||t.flags&512&&Ji(t)}catch(g){se(t,t.return,g)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Tp(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Ip(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ef(4,t)}catch(a){se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(a){se(t,s,a)}}var o=t.return;try{Ji(t)}catch(a){se(t,o,a)}break;case 5:var i=t.return;try{Ji(t)}catch(a){se(t,i,a)}}}catch(a){se(t,t.return,a)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var N2=Math.ceil,Ro=zt.ReactCurrentDispatcher,oa=zt.ReactCurrentOwner,Xe=zt.ReactCurrentBatchConfig,B=0,he=null,ae=null,ge=0,De=0,Un=Zt(0),de=0,os=null,yn=0,tf=0,fa=0,Dr=null,Re=null,ia=0,nr=1/0,vt=null,Po=!1,tl=null,qt=null,Ds=!1,$t=null,To=0,Fr=0,nl=null,eo=-1,to=0;function Ee(){return B&6?ie():eo!==-1?eo:eo=ie()}function Yt(e){return e.mode&1?B&2&&ge!==0?ge&-ge:i2.transition!==null?(to===0&&(to=dc()),to):(e=H,e!==0||(e=window.event,e=e===void 0?16:_c(e.type)),e):1}function it(e,t,n,r){if(50<Fr)throw Fr=0,nl=null,Error(C(185));cs(e,n,r),(!(B&2)||e!==he)&&(e===he&&(!(B&2)&&(tf|=n),de===4&&Lt(e,ge)),Oe(e,r),n===1&&B===0&&!(t.mode&1)&&(nr=ie()+500,Xo&&en()))}function Oe(e,t){var n=e.callbackNode;ih(e,t);var r=mo(e,e===he?ge:0);if(r===0)n!==null&&Wa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wa(n),t===1)e.tag===0?f2(Op.bind(null,e)):Dc(Op.bind(null,e)),n2(function(){!(B&6)&&en()}),n=null;else{switch(xc(r)){case 1:n=Tl;break;case 4:n=uc;break;case 16:n=ho;break;case 536870912:n=cc;break;default:n=ho}n=A1(n,M1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function M1(e,t){if(eo=-1,to=0,B&6)throw Error(C(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=mo(e,e===he?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var s=B;B|=2;var o=P1();(he!==e||ge!==t)&&(vt=null,nr=ie()+500,pn(e,t));do try{C2();break}catch(l){R1(e,l)}while(!0);ql(),Ro.current=o,B=s,ae!==null?t=0:(he=null,ge=0,t=de)}if(t!==0){if(t===2&&(s=zi(e),s!==0&&(r=s,t=rl(e,s))),t===1)throw n=os,pn(e,0),Lt(e,r),Oe(e,ie()),n;if(t===6)Lt(e,r);else{if(s=e.current.alternate,!(r&30)&&!k2(s)&&(t=Io(e,r),t===2&&(o=zi(e),o!==0&&(r=o,t=rl(e,o))),t===1))throw n=os,pn(e,0),Lt(e,r),Oe(e,ie()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:rn(e,Re,vt);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=ia+500-ie(),10<t)){if(mo(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ai(rn.bind(null,e,Re,vt),t);break}rn(e,Re,vt);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var i=31-ft(r);o=1<<i,i=t[i],i>s&&(s=i),r&=~o}if(r=s,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N2(r/1960))-r,10<r){e.timeoutHandle=Ai(rn.bind(null,e,Re,vt),r);break}rn(e,Re,vt);break;case 5:rn(e,Re,vt);break;default:throw Error(C(329))}}}return Oe(e,ie()),e.callbackNode===n?M1.bind(null,e):null}function rl(e,t){var n=Dr;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=Io(e,t),e!==2&&(t=Re,Re=n,t!==null&&sl(t)),e}function sl(e){Re===null?Re=e:Re.push.apply(Re,e)}function k2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],o=s.getSnapshot;s=s.value;try{if(!at(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~fa,t&=~tf,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function Op(e){if(B&6)throw Error(C(327));Qn();var t=mo(e,0);if(!(t&1))return Oe(e,ie()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=zi(e);r!==0&&(t=r,n=rl(e,r))}if(n===1)throw n=os,pn(e,0),Lt(e,t),Oe(e,ie()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Re,vt),Oe(e,ie()),null}function la(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(nr=ie()+500,Xo&&en())}}function vn(e){$t!==null&&$t.tag===0&&!(B&6)&&Qn();var t=B;B|=1;var n=Xe.transition,r=H;try{if(Xe.transition=null,H=1,e)return e()}finally{H=r,Xe.transition=n,B=t,!(B&6)&&en()}}function aa(){De=Un.current,G(Un)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,t2(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Wl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:er(),G(Te),G(Ne),Jl();break;case 5:Xl(r);break;case 4:er();break;case 13:G(te);break;case 19:G(te);break;case 10:Yl(r.type._context);break;case 22:case 23:aa()}n=n.return}if(he=e,ae=e=Qt(e.current,null),ge=De=t,de=0,os=null,fa=tf=yn=0,Re=Dr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=s,r.next=i}n.pending=r}fn=null}return e}function R1(e,t){do{var n=ae;try{if(ql(),Xs.current=Mo,zo){for(var r=ne.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}zo=!1}if(gn=0,xe=ue=ne=null,Ar=!1,ns=0,oa.current=null,n===null||n.return===null){de=1,os=t,ae=null;break}e:{var o=e,i=n.return,l=n,a=t;if(t=ge,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var p=a,u=l,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var w=wp(i);if(w!==null){w.flags&=-257,Sp(w,i,l,o,t),w.mode&1&&jp(o,p,t),t=w,a=p;var m=t.updateQueue;if(m===null){var y=new Set;y.add(a),t.updateQueue=y}else m.add(a);break e}else{if(!(t&1)){jp(o,p,t),pa();break e}a=Error(C(426))}}else if(X&&l.mode&1){var v=wp(i);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Sp(v,i,l,o,t),Hl(tr(a,l));break e}}o=a=tr(a,l),de!==4&&(de=2),Dr===null?Dr=[o]:Dr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=x1(o,a,t);hp(o,x);break e;case 1:l=a;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(qt===null||!qt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=h1(o,l,t);hp(o,_);break e}}o=o.return}while(o!==null)}I1(n)}catch(N){t=N,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function P1(){var e=Ro.current;return Ro.current=Mo,e===null?Mo:e}function pa(){(de===0||de===3||de===2)&&(de=4),he===null||!(yn&268435455)&&!(tf&268435455)||Lt(he,ge)}function Io(e,t){var n=B;B|=2;var r=P1();(he!==e||ge!==t)&&(vt=null,pn(e,t));do try{b2();break}catch(s){R1(e,s)}while(!0);if(ql(),B=n,Ro.current=r,ae!==null)throw Error(C(261));return he=null,ge=0,de}function b2(){for(;ae!==null;)T1(ae)}function C2(){for(;ae!==null&&!Jx();)T1(ae)}function T1(e){var t=L1(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?I1(e):ae=t,oa.current=null}function I1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_2(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ae=null;return}}else if(n=v2(n,t,De),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);de===0&&(de=5)}function rn(e,t,n){var r=H,s=Xe.transition;try{Xe.transition=null,H=1,E2(e,t,n,r)}finally{Xe.transition=s,H=r}return null}function E2(e,t,n,r){do Qn();while($t!==null);if(B&6)throw Error(C(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(lh(e,o),e===he&&(ae=he=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ds||(Ds=!0,A1(ho,function(){return Qn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Xe.transition,Xe.transition=null;var i=H;H=1;var l=B;B|=4,oa.current=null,w2(e,n),E1(n,e),Qh(Oi),go=!!Ii,Oi=Ii=null,e.current=n,S2(n),Zx(),B=l,H=i,Xe.transition=o}else e.current=n;if(Ds&&(Ds=!1,$t=e,To=s),o=e.pendingLanes,o===0&&(qt=null),nh(n.stateNode),Oe(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Po)throw Po=!1,e=tl,tl=null,e;return To&1&&e.tag!==0&&Qn(),o=e.pendingLanes,o&1?e===nl?Fr++:(Fr=0,nl=e):Fr=0,en(),null}function Qn(){if($t!==null){var e=xc(To),t=Xe.transition,n=H;try{if(Xe.transition=null,H=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,To=0,B&6)throw Error(C(331));var s=B;for(B|=4,M=e.current;M!==null;){var o=M,i=o.child;if(M.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var p=l[a];for(M=p;M!==null;){var u=M;switch(u.tag){case 0:case 11:case 15:$r(8,u,o)}var d=u.child;if(d!==null)d.return=u,M=d;else for(;M!==null;){u=M;var g=u.sibling,w=u.return;if(k1(u),u===p){M=null;break}if(g!==null){g.return=w,M=g;break}M=w}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}M=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,M=i;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$r(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,M=x;break e}M=o.return}}var c=e.current;for(M=c;M!==null;){i=M;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,M=h;else e:for(i=c;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ef(9,l)}}catch(N){se(l,l.return,N)}if(l===i){M=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,M=_;break e}M=l.return}}if(B=s,en(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(qo,e)}catch{}r=!0}return r}finally{H=n,Xe.transition=t}}return!1}function Lp(e,t,n){t=tr(n,t),t=x1(e,t,1),e=Vt(e,t,1),t=Ee(),e!==null&&(cs(e,1,t),Oe(e,t))}function se(e,t,n){if(e.tag===3)Lp(e,e,n);else for(;t!==null;){if(t.tag===3){Lp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=tr(n,e),e=h1(t,e,1),t=Vt(t,e,1),e=Ee(),t!==null&&(cs(t,1,e),Oe(t,e));break}}t=t.return}}function z2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ge&n)===n&&(de===4||de===3&&(ge&130023424)===ge&&500>ie()-ia?pn(e,0):fa|=n),Oe(e,t)}function O1(e,t){t===0&&(e.mode&1?(t=zs,zs<<=1,!(zs&130023424)&&(zs=4194304)):t=1);var n=Ee();e=Ct(e,t),e!==null&&(cs(e,t,n),Oe(e,n))}function M2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),O1(e,n)}function R2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),O1(e,n)}var L1;L1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,y2(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,X&&t.flags&1048576&&Fc(t,No,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zs(e,t),e=t.pendingProps;var s=Xn(t,Ne.current);Yn(t,n),s=ea(null,t,r,e,s,n);var o=ta();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(o=!0,wo(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Kl(t),s.updater=Zo,t.stateNode=s,s._reactInternals=t,Hi(t,r,e,n),t=Yi(null,t,r,!0,o,n)):(t.tag=0,X&&o&&Ul(t),ke(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zs(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=T2(r),e=nt(r,e),s){case 0:t=qi(null,t,r,e,n);break e;case 1:t=bp(null,t,r,e,n);break e;case 11:t=Np(null,t,r,e,n);break e;case 14:t=kp(null,t,r,nt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:nt(r,s),qi(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:nt(r,s),bp(e,t,r,s,n);case 3:e:{if(v1(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,s=o.element,qc(e,t),Co(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=tr(Error(C(423)),t),t=Cp(e,t,r,n,s);break e}else if(r!==s){s=tr(Error(C(424)),t),t=Cp(e,t,r,n,s);break e}else for(Fe=Ht(t.stateNode.containerInfo.firstChild),Be=t,X=!0,ot=null,n=Hc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),r===s){t=Et(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Yc(t),e===null&&Bi(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,i=s.children,Li(r,s)?i=null:o!==null&&Li(r,o)&&(t.flags|=32),y1(e,t),ke(e,t,i,n),t.child;case 6:return e===null&&Bi(t),null;case 13:return _1(e,t,n);case 4:return Gl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zn(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:nt(r,s),Np(e,t,r,s,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,i=s.value,Y(ko,r._currentValue),r._currentValue=i,o!==null)if(at(o.value,i)){if(o.children===s.children&&!Te.current){t=Et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Nt(-1,n&-n),a.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var u=p.pending;u===null?a.next=a:(a.next=u.next,u.next=a),p.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ui(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(C(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ui(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ke(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Yn(t,n),s=Je(s),r=r(s),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,s=nt(r,t.pendingProps),s=nt(r.type,s),kp(e,t,r,s,n);case 15:return m1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:nt(r,s),Zs(e,t),t.tag=1,Ie(r)?(e=!0,wo(t)):e=!1,Yn(t,n),d1(t,r,s),Hi(t,r,s,n),Yi(null,t,r,!0,e,n);case 19:return j1(e,t,n);case 22:return g1(e,t,n)}throw Error(C(156,t.tag))};function A1(e,t){return pc(e,t)}function P2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new P2(e,t,n,r)}function ua(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T2(e){if(typeof e=="function")return ua(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ml)return 11;if(e===Rl)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function no(e,t,n,r,s,o){var i=2;if(r=e,typeof e=="function")ua(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Pn:return un(n.children,s,o,t);case zl:i=8,s|=8;break;case xi:return e=Ge(12,n,t,s|2),e.elementType=xi,e.lanes=o,e;case hi:return e=Ge(13,n,t,s),e.elementType=hi,e.lanes=o,e;case mi:return e=Ge(19,n,t,s),e.elementType=mi,e.lanes=o,e;case Yu:return nf(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vu:i=10;break e;case qu:i=9;break e;case Ml:i=11;break e;case Rl:i=14;break e;case Tt:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ge(i,n,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function un(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function nf(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=Yu,e.lanes=n,e.stateNode={isHidden:!1},e}function Zf(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function ei(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function I2(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=If(0),this.expirationTimes=If(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=If(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ca(e,t,n,r,s,o,i,l,a){return e=new I2(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ge(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kl(o),e}function O2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $1(e){if(!e)return Xt;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ie(n))return $c(e,n,t)}return t}function D1(e,t,n,r,s,o,i,l,a){return e=ca(n,r,!0,e,s,o,i,l,a),e.context=$1(null),n=e.current,r=Ee(),s=Yt(n),o=Nt(r,s),o.callback=t??null,Vt(n,o,s),e.current.lanes=s,cs(e,s,r),Oe(e,r),e}function rf(e,t,n,r){var s=t.current,o=Ee(),i=Yt(s);return n=$1(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(s,t,i),e!==null&&(it(e,s,i,o),Gs(e,s,i)),i}function Oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function da(e,t){Ap(e,t),(e=e.alternate)&&Ap(e,t)}function L2(){return null}var F1=typeof reportError=="function"?reportError:function(e){console.error(e)};function xa(e){this._internalRoot=e}sf.prototype.render=xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));rf(e,t,null,null)};sf.prototype.unmount=xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){rf(null,e,null,null)}),t[bt]=null}};function sf(e){this._internalRoot=e}sf.prototype.unstable_scheduleHydration=function(e){if(e){var t=gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&vc(e)}};function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function of(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $p(){}function A2(e,t,n,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var p=Oo(i);o.call(p)}}var i=D1(t,r,e,0,null,!1,!1,"",$p);return e._reactRootContainer=i,e[bt]=i.current,Xr(e.nodeType===8?e.parentNode:e),vn(),i}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var p=Oo(a);l.call(p)}}var a=ca(e,0,!1,null,null,!1,!1,"",$p);return e._reactRootContainer=a,e[bt]=a.current,Xr(e.nodeType===8?e.parentNode:e),vn(function(){rf(t,a,n,r)}),a}function ff(e,t,n,r,s){var o=n._reactRootContainer;if(o){var i=o;if(typeof s=="function"){var l=s;s=function(){var a=Oo(i);l.call(a)}}rf(t,i,e,s)}else i=A2(n,t,e,s,r);return Oo(i)}hc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Er(t.pendingLanes);n!==0&&(Il(t,n|1),Oe(t,ie()),!(B&6)&&(nr=ie()+500,en()))}break;case 13:vn(function(){var r=Ct(e,1);if(r!==null){var s=Ee();it(r,e,1,s)}}),da(e,1)}};Ol=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Ee();it(t,e,134217728,n)}da(e,134217728)}};mc=function(e){if(e.tag===13){var t=Yt(e),n=Ct(e,t);if(n!==null){var r=Ee();it(n,e,t,r)}da(e,t)}};gc=function(){return H};yc=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};bi=function(e,t,n){switch(t){case"input":if(vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Go(r);if(!s)throw Error(C(90));Ku(r),vi(r,s)}}}break;case"textarea":Xu(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};sc=la;oc=vn;var $2={usingClientEntryPoint:!1,Events:[xs,Ln,Go,nc,rc,la]},Sr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D2={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lc(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||L2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fs.isDisabled&&Fs.supportsFiber)try{qo=Fs.inject(D2),gt=Fs}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$2;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ha(t))throw Error(C(200));return O2(e,t,null,n)};We.createRoot=function(e,t){if(!ha(e))throw Error(C(299));var n=!1,r="",s=F1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ca(e,1,!1,null,null,n,!1,r,s),e[bt]=t.current,Xr(e.nodeType===8?e.parentNode:e),new xa(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=lc(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return vn(e)};We.hydrate=function(e,t,n){if(!of(t))throw Error(C(200));return ff(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!ha(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,s=!1,o="",i=F1;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=D1(t,null,e,1,n??null,s,!1,o,i),e[bt]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new sf(t)};We.render=function(e,t,n){if(!of(t))throw Error(C(200));return ff(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!of(e))throw Error(C(40));return e._reactRootContainer?(vn(function(){ff(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};We.unstable_batchedUpdates=la;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!of(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ff(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function B1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B1)}catch(e){console.error(e)}}B1(),Bu.exports=We;var F2=Bu.exports,Dp=F2;ci.createRoot=Dp.createRoot,ci.hydrateRoot=Dp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fs.apply(this,arguments)}var Dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dt||(Dt={}));const Fp="popstate";function B2(e){e===void 0&&(e={});function t(r,s){let{pathname:o,search:i,hash:l}=r.location;return ol("",{pathname:o,search:i,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Lo(s)}return W2(t,n,null,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ma(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function U2(){return Math.random().toString(36).substr(2,8)}function Bp(e,t){return{usr:e.state,key:e.key,idx:t}}function ol(e,t,n,r){return n===void 0&&(n=null),fs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ur(t):t,{state:n,key:t&&t.key||r||U2()})}function Lo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function W2(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:o=!1}=r,i=s.history,l=Dt.Pop,a=null,p=u();p==null&&(p=0,i.replaceState(fs({},i.state,{idx:p}),""));function u(){return(i.state||{idx:null}).idx}function d(){l=Dt.Pop;let v=u(),x=v==null?null:v-p;p=v,a&&a({action:l,location:y.location,delta:x})}function g(v,x){l=Dt.Push;let c=ol(y.location,v,x);p=u()+1;let h=Bp(c,p),_=y.createHref(c);try{i.pushState(h,"",_)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;s.location.assign(_)}o&&a&&a({action:l,location:y.location,delta:1})}function w(v,x){l=Dt.Replace;let c=ol(y.location,v,x);p=u();let h=Bp(c,p),_=y.createHref(c);i.replaceState(h,"",_),o&&a&&a({action:l,location:y.location,delta:0})}function m(v){let x=s.location.origin!=="null"?s.location.origin:s.location.href,c=typeof v=="string"?v:Lo(v);return c=c.replace(/ $/,"%20"),oe(x,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,x)}let y={get action(){return l},get location(){return e(s,i)},listen(v){if(a)throw new Error("A history only accepts one active listener");return s.addEventListener(Fp,d),a=v,()=>{s.removeEventListener(Fp,d),a=null}},createHref(v){return t(s,v)},createURL:m,encodeLocation(v){let x=m(v);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:w,go(v){return i.go(v)}};return y}var Up;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Up||(Up={}));function H2(e,t,n){return n===void 0&&(n="/"),V2(e,t,n)}function V2(e,t,n,r){let s=typeof t=="string"?ur(t):t,o=rr(s.pathname||"/",n);if(o==null)return null;let i=U1(e);q2(i);let l=null;for(let a=0;l==null&&a<i.length;++a){let p=r0(o);l=t0(i[a],p)}return l}function U1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(o,i,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(oe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let p=Kt([r,a.relativePath]),u=n.concat(a);o.children&&o.children.length>0&&(oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),U1(o.children,t,u,p)),!(o.path==null&&!o.index)&&t.push({path:p,score:Z2(p,o.index),routesMeta:u})};return e.forEach((o,i)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,i);else for(let a of W1(o.path))s(o,i,a)}),t}function W1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let i=W1(r.join("/")),l=[];return l.push(...i.map(a=>a===""?o:[o,a].join("/"))),s&&l.push(...i),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function q2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:e0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Y2=/^:[\w-]+$/,Q2=3,K2=2,G2=1,X2=10,J2=-2,Wp=e=>e==="*";function Z2(e,t){let n=e.split("/"),r=n.length;return n.some(Wp)&&(r+=J2),t&&(r+=K2),n.filter(s=>!Wp(s)).reduce((s,o)=>s+(Y2.test(o)?Q2:o===""?G2:X2),r)}function e0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function t0(e,t,n){let{routesMeta:r}=e,s={},o="/",i=[];for(let l=0;l<r.length;++l){let a=r[l],p=l===r.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=fl({path:a.relativePath,caseSensitive:a.caseSensitive,end:p},u),g=a.route;if(!d)return null;Object.assign(s,d.params),i.push({params:s,pathname:Kt([o,d.pathname]),pathnameBase:l0(Kt([o,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(o=Kt([o,d.pathnameBase]))}return i}function fl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=n0(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let o=s[0],i=o.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((p,u,d)=>{let{paramName:g,isOptional:w}=u;if(g==="*"){let y=l[d]||"";i=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const m=l[d];return w&&!m?p[g]=void 0:p[g]=(m||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:i,pattern:e}}function n0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ma(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function r0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ma(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function rr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const s0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,o0=e=>s0.test(e);function f0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?ur(e):e,o;if(n)if(o0(n))o=n;else{if(n.includes("//")){let i=n;n=n.replace(/\/\/+/g,"/"),ma(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+n))}n.startsWith("/")?o=Hp(n.substring(1),"/"):o=Hp(n,t)}else o=t;return{pathname:o,search:a0(r),hash:p0(s)}}function Hp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function ti(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function H1(e,t){let n=i0(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function V1(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=ur(e):(s=fs({},e),oe(!s.pathname||!s.pathname.includes("?"),ti("?","pathname","search",s)),oe(!s.pathname||!s.pathname.includes("#"),ti("#","pathname","hash",s)),oe(!s.search||!s.search.includes("#"),ti("#","search","hash",s)));let o=e===""||s.pathname==="",i=o?"/":s.pathname,l;if(i==null)l=n;else{let d=t.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),d-=1;s.pathname=g.join("/")}l=d>=0?t[d]:"/"}let a=f0(s,l),p=i&&i!=="/"&&i.endsWith("/"),u=(o||i===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(p||u)&&(a.pathname+="/"),a}const Kt=e=>e.join("/").replace(/\/\/+/g,"/"),l0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),a0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,p0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function u0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const q1=["post","put","patch","delete"];new Set(q1);const c0=["get",...q1];new Set(c0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}const lf=b.createContext(null),Y1=b.createContext(null),tn=b.createContext(null),af=b.createContext(null),Cn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Q1=b.createContext(null);function d0(e,t){let{relative:n}=t===void 0?{}:t;ms()||oe(!1);let{basename:r,navigator:s}=b.useContext(tn),{hash:o,pathname:i,search:l}=pf(e,{relative:n}),a=i;return r!=="/"&&(a=i==="/"?r:Kt([r,i])),s.createHref({pathname:a,search:l,hash:o})}function ms(){return b.useContext(af)!=null}function En(){return ms()||oe(!1),b.useContext(af).location}function K1(e){b.useContext(tn).static||b.useLayoutEffect(e)}function x0(){let{isDataRoute:e}=b.useContext(Cn);return e?C0():h0()}function h0(){ms()||oe(!1);let e=b.useContext(lf),{basename:t,future:n,navigator:r}=b.useContext(tn),{matches:s}=b.useContext(Cn),{pathname:o}=En(),i=JSON.stringify(H1(s,n.v7_relativeSplatPath)),l=b.useRef(!1);return K1(()=>{l.current=!0}),b.useCallback(function(p,u){if(u===void 0&&(u={}),!l.current)return;if(typeof p=="number"){r.go(p);return}let d=V1(p,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Kt([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,i,o,e])}function pf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(tn),{matches:s}=b.useContext(Cn),{pathname:o}=En(),i=JSON.stringify(H1(s,r.v7_relativeSplatPath));return b.useMemo(()=>V1(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function m0(e,t){return g0(e,t)}function g0(e,t,n,r){ms()||oe(!1);let{navigator:s}=b.useContext(tn),{matches:o}=b.useContext(Cn),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let p=En(),u;if(t){var d;let v=typeof t=="string"?ur(t):t;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||oe(!1),u=v}else u=p;let g=u.pathname||"/",w=g;if(a!=="/"){let v=a.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(v.length).join("/")}let m=H2(e,{pathname:w}),y=w0(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:Kt([a,s.encodeLocation?s.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Kt([a,s.encodeLocation?s.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,n,r);return t&&y?b.createElement(af.Provider,{value:{location:is({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Dt.Pop}},y):y}function y0(){let e=b0(),t=u0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:s},n):null,null)}const v0=b.createElement(y0,null);class _0 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Cn.Provider,{value:this.props.routeContext},b.createElement(Q1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function j0(e){let{routeContext:t,match:n,children:r}=e,s=b.useContext(lf);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Cn.Provider,{value:t},r)}function w0(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let u=i.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);u>=0||oe(!1),i=i.slice(0,Math.min(i.length,u+1))}let a=!1,p=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<i.length;u++){let d=i[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(p=u),d.route.id){let{loaderData:g,errors:w}=n,m=d.route.loader&&g[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||m){a=!0,p>=0?i=i.slice(0,p+1):i=[i[0]];break}}}return i.reduceRight((u,d,g)=>{let w,m=!1,y=null,v=null;n&&(w=l&&d.route.id?l[d.route.id]:void 0,y=d.route.errorElement||v0,a&&(p<0&&g===0?(E0("route-fallback"),m=!0,v=null):p===g&&(m=!0,v=d.route.hydrateFallbackElement||null)));let x=t.concat(i.slice(0,g+1)),c=()=>{let h;return w?h=y:m?h=v:d.route.Component?h=b.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=u,b.createElement(j0,{match:d,routeContext:{outlet:u,matches:x,isDataRoute:n!=null},children:h})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?b.createElement(_0,{location:n.location,revalidation:n.revalidation,component:y,error:w,children:c(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):c()},null)}var G1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(G1||{}),X1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(X1||{});function S0(e){let t=b.useContext(lf);return t||oe(!1),t}function N0(e){let t=b.useContext(Y1);return t||oe(!1),t}function k0(e){let t=b.useContext(Cn);return t||oe(!1),t}function J1(e){let t=k0(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function b0(){var e;let t=b.useContext(Q1),n=N0(),r=J1();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function C0(){let{router:e}=S0(G1.UseNavigateStable),t=J1(X1.UseNavigateStable),n=b.useRef(!1);return K1(()=>{n.current=!0}),b.useCallback(function(s,o){o===void 0&&(o={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,is({fromRouteId:t},o)))},[e,t])}const Vp={};function E0(e,t,n){Vp[e]||(Vp[e]=!0)}function z0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ye(e){oe(!1)}function M0(e){let{basename:t="/",children:n=null,location:r,navigationType:s=Dt.Pop,navigator:o,static:i=!1,future:l}=e;ms()&&oe(!1);let a=t.replace(/^\/*/,"/"),p=b.useMemo(()=>({basename:a,navigator:o,static:i,future:is({v7_relativeSplatPath:!1},l)}),[a,l,o,i]);typeof r=="string"&&(r=ur(r));let{pathname:u="/",search:d="",hash:g="",state:w=null,key:m="default"}=r,y=b.useMemo(()=>{let v=rr(u,a);return v==null?null:{location:{pathname:v,search:d,hash:g,state:w,key:m},navigationType:s}},[a,u,d,g,w,m,s]);return y==null?null:b.createElement(tn.Provider,{value:p},b.createElement(af.Provider,{children:n,value:y}))}function R0(e){let{children:t,location:n}=e;return m0(il(t),n)}new Promise(()=>{});function il(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,s)=>{if(!b.isValidElement(r))return;let o=[...t,s];if(r.type===b.Fragment){n.push.apply(n,il(r.props.children,o));return}r.type!==Ye&&oe(!1),!r.props.index||!r.props.children||oe(!1);let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=il(r.props.children,o)),n.push(i)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}function Z1(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,o;for(o=0;o<r.length;o++)s=r[o],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function P0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function T0(e,t){return e.button===0&&(!t||t==="_self")&&!P0(e)}const I0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],O0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],L0="6";try{window.__reactRouterVersion=L0}catch{}const A0=b.createContext({isTransitioning:!1}),$0="startTransition",qp=zx[$0];function D0(e){let{basename:t,children:n,future:r,window:s}=e,o=b.useRef();o.current==null&&(o.current=B2({window:s,v5Compat:!0}));let i=o.current,[l,a]=b.useState({action:i.action,location:i.location}),{v7_startTransition:p}=r||{},u=b.useCallback(d=>{p&&qp?qp(()=>a(d)):a(d)},[a,p]);return b.useLayoutEffect(()=>i.listen(u),[i,u]),b.useEffect(()=>z0(r),[r]),b.createElement(M0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,future:r})}const F0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,be=b.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:o,replace:i,state:l,target:a,to:p,preventScrollReset:u,viewTransition:d}=t,g=Z1(t,I0),{basename:w}=b.useContext(tn),m,y=!1;if(typeof p=="string"&&B0.test(p)&&(m=p,F0))try{let h=new URL(window.location.href),_=p.startsWith("//")?new URL(h.protocol+p):new URL(p),N=rr(_.pathname,w);_.origin===h.origin&&N!=null?p=N+_.search+_.hash:y=!0}catch{}let v=d0(p,{relative:s}),x=W0(p,{replace:i,state:l,target:a,preventScrollReset:u,relative:s,viewTransition:d});function c(h){r&&r(h),h.defaultPrevented||x(h)}return b.createElement("a",Ao({},g,{href:m||v,onClick:y||o?r:c,ref:n,target:a}))}),ni=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:s=!1,className:o="",end:i=!1,style:l,to:a,viewTransition:p,children:u}=t,d=Z1(t,O0),g=pf(a,{relative:d.relative}),w=En(),m=b.useContext(Y1),{navigator:y,basename:v}=b.useContext(tn),x=m!=null&&H0(g)&&p===!0,c=y.encodeLocation?y.encodeLocation(g).pathname:g.pathname,h=w.pathname,_=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;s||(h=h.toLowerCase(),_=_?_.toLowerCase():null,c=c.toLowerCase()),_&&v&&(_=rr(_,v)||_);const N=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let E=h===c||!i&&h.startsWith(c)&&h.charAt(N)==="/",S=_!=null&&(_===c||!i&&_.startsWith(c)&&_.charAt(c.length)==="/"),k={isActive:E,isPending:S,isTransitioning:x},F=E?r:void 0,I;typeof o=="function"?I=o(k):I=[o,E?"active":null,S?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let W=typeof l=="function"?l(k):l;return b.createElement(be,Ao({},d,{"aria-current":F,className:I,ref:n,style:W,to:a,viewTransition:p}),typeof u=="function"?u(k):u)});var ll;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ll||(ll={}));var Yp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yp||(Yp={}));function U0(e){let t=b.useContext(lf);return t||oe(!1),t}function W0(e,t){let{target:n,replace:r,state:s,preventScrollReset:o,relative:i,viewTransition:l}=t===void 0?{}:t,a=x0(),p=En(),u=pf(e,{relative:i});return b.useCallback(d=>{if(T0(d,n)){d.preventDefault();let g=r!==void 0?r:Lo(p)===Lo(u);a(e,{replace:g,state:s,preventScrollReset:o,relative:i,viewTransition:l})}},[p,a,u,r,s,n,e,o,i,l])}function H0(e,t){t===void 0&&(t={});let n=b.useContext(A0);n==null&&oe(!1);let{basename:r}=U0(ll.useViewTransitionState),s=pf(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=rr(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=rr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return fl(s.pathname,i)!=null||fl(s.pathname,o)!=null}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=e=>{const t=q0(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Y0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:o,iconNode:i,...l},a)=>b.createElement("svg",{ref:a,...Y0,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ed("lucide",s),...!o&&!Q0(l)&&{"aria-hidden":"true"},...l},[...i.map(([p,u])=>b.createElement(p,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=(e,t)=>{const n=b.forwardRef(({className:r,...s},o)=>b.createElement(K0,{ref:o,iconNode:t,className:ed(`lucide-${V0(Qp(e))}`,`lucide-${e}`,r),...s}));return n.displayName=Qp(e),n};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$o=T("arrow-right",G0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["path",{d:"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",key:"lre1cr"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",key:"13q5k0"}]],J0=T("battery-charging",X0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]],em=T("beaker",Z0);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],ga=T("bot",tm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],_n=T("building-2",nm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],uf=T("chevron-right",rm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mt=T("circle-check",sm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],fm=T("circle-x",om);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],td=T("clock",im);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],am=T("cloud",lm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Do=T("cpu",pm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],nd=T("droplets",um);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],dm=T("external-link",cm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],rd=T("facebook",xm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],gs=T("factory",hm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Kp=T("file-text",mm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],jn=T("flask-conical",gm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ya=T("globe",ym);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],_m=T("handshake",vm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]],wm=T("hard-hat",jm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]],cf=T("indian-rupee",Sm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],sd=T("instagram",Nm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],bm=T("leaf",km);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],od=T("linkedin",Cm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],fd=T("loader-circle",Em);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],va=T("mail",zm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],cr=T("map-pin",Mm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],Pm=T("megaphone",Rm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Im=T("message-square",Tm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Lm=T("microscope",Om);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],$m=T("palette",Am);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],al=T("phone-call",Dm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]],_a=T("plane-takeoff",Fm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],id=T("radio",Bm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],dr=T("rocket",Um);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],df=T("send",Wm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],pl=T("settings-2",Hm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],wn=T("shield-check",Vm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Ym=T("smartphone",qm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["path",{d:"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",key:"139s4v"}],["path",{d:"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",key:"1dlkgp"}],["path",{d:"M5 21h14",key:"11awu3"}]],ld=T("sprout",Qm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],ls=T("target",Km);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],Xm=T("telescope",Gm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Zm=T("thermometer",Jm);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],ja=T("trending-up",eg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],ad=T("twitter",tg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],rg=T("user",ng);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],og=T("users",sg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]],pd=T("wheat",fg);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],lg=T("wrench",ig);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],ud=T("youtube",ag);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],cd=T("zap",pg);var K="-ms-",Br="-moz-",U="-webkit-",dd="comm",xf="rule",wa="decl",ug="@import",cg="@namespace",xd="@keyframes",dg="@layer",hd=Math.abs,Sa=String.fromCharCode,ul=Object.assign;function xg(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function md(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function ro(e,t,n){return e.indexOf(t,n)}function ce(e,t){return e.charCodeAt(t)|0}function Sn(e,t,n){return e.slice(t,n)}function st(e){return e.length}function gd(e){return e.length}function Mr(e,t){return t.push(e),e}function hg(e,t){return e.map(t).join("")}function Gp(e,t){return e.filter(function(n){return!_t(n,t)})}var hf=1,sr=1,yd=0,et=0,le=0,xr="";function mf(e,t,n,r,s,o,i,l){return{value:e,root:t,parent:n,type:r,props:s,children:o,line:hf,column:sr,length:i,return:"",siblings:l}}function Pt(e,t){return ul(mf("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mn(e){for(;e.root;)e=Pt(e.root,{children:[e]});Mr(e,e.siblings)}function mg(){return le}function gg(){return le=et>0?ce(xr,--et):0,sr--,le===10&&(sr=1,hf--),le}function lt(){return le=et<yd?ce(xr,et++):0,sr++,le===10&&(sr=1,hf++),le}function Ft(){return ce(xr,et)}function so(){return et}function gf(e,t){return Sn(xr,e,t)}function as(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yg(e){return hf=sr=1,yd=st(xr=e),et=0,[]}function vg(e){return xr="",e}function ri(e){return md(gf(et-1,cl(e===91?e+2:e===40?e+1:e)))}function _g(e){for(;(le=Ft())&&le<33;)lt();return as(e)>2||as(le)>3?"":" "}function jg(e,t){for(;--t&&lt()&&!(le<48||le>102||le>57&&le<65||le>70&&le<97););return gf(e,so()+(t<6&&Ft()==32&&lt()==32))}function cl(e){for(;lt();)switch(le){case e:return et;case 34:case 39:e!==34&&e!==39&&cl(le);break;case 40:e===41&&cl(e);break;case 92:lt();break}return et}function wg(e,t){for(;lt()&&e+le!==57;)if(e+le===84&&Ft()===47)break;return"/*"+gf(t,et-1)+"*"+Sa(e===47?e:lt())}function Sg(e){for(;!as(Ft());)lt();return gf(e,et)}function Ng(e){return vg(oo("",null,null,null,[""],e=yg(e),0,[0],e))}function oo(e,t,n,r,s,o,i,l,a){for(var p=0,u=0,d=i,g=0,w=0,m=0,y=1,v=1,x=1,c=0,h="",_=s,N=o,E=r,S=h;v;)switch(m=c,c=lt()){case 40:if(m!=108&&ce(S,d-1)==58){ro(S+=L(ri(c),"&","&\f"),"&\f",hd(p?l[p-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:S+=ri(c);break;case 9:case 10:case 13:case 32:S+=_g(m);break;case 92:S+=jg(so()-1,7);continue;case 47:switch(Ft()){case 42:case 47:Mr(kg(wg(lt(),so()),t,n,a),a),(as(m||1)==5||as(Ft()||1)==5)&&st(S)&&Sn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*y:l[p++]=st(S)*x;case 125*y:case 59:case 0:switch(c){case 0:case 125:v=0;case 59+u:x==-1&&(S=L(S,/\f/g,"")),w>0&&(st(S)-d||y===0&&m===47)&&Mr(w>32?Jp(S+";",r,n,d-1,a):Jp(L(S," ","")+";",r,n,d-2,a),a);break;case 59:S+=";";default:if(Mr(E=Xp(S,t,n,p,u,s,l,h,_=[],N=[],d,o),o),c===123)if(u===0)oo(S,t,E,E,_,o,d,l,N);else{switch(g){case 99:if(ce(S,3)===110)break;case 108:if(ce(S,2)===97)break;default:u=0;case 100:case 109:case 115:}u?oo(e,E,E,r&&Mr(Xp(e,E,E,0,0,s,l,h,s,_=[],d,N),N),s,N,d,l,r?_:N):oo(S,E,E,E,[""],N,0,l,N)}}p=u=w=0,y=x=1,h=S="",d=i;break;case 58:d=1+st(S),w=m;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&gg()==125)continue}switch(S+=Sa(c),c*y){case 38:x=u>0?1:(S+="\f",-1);break;case 44:l[p++]=(st(S)-1)*x,x=1;break;case 64:Ft()===45&&(S+=ri(lt())),g=Ft(),u=d=st(h=S+=Sg(so())),c++;break;case 45:m===45&&st(S)==2&&(y=0)}}return o}function Xp(e,t,n,r,s,o,i,l,a,p,u,d){for(var g=s-1,w=s===0?o:[""],m=gd(w),y=0,v=0,x=0;y<r;++y)for(var c=0,h=Sn(e,g+1,g=hd(v=i[y])),_=e;c<m;++c)(_=md(v>0?w[c]+" "+h:L(h,/&\f/g,w[c])))&&(a[x++]=_);return mf(e,t,n,s===0?xf:l,a,p,u,d)}function kg(e,t,n,r){return mf(e,t,n,dd,Sa(mg()),Sn(e,2,-2),0,r)}function Jp(e,t,n,r,s){return mf(e,t,n,wa,Sn(e,0,r),Sn(e,r+1,-1),r,s)}function vd(e,t,n){switch(xg(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return U+e+e;case 4855:return U+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Br+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Br+e+K+e+e;case 5936:switch(ce(e,t+11)){case 114:return U+e+K+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+K+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+K+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+K+e+e;case 6165:return U+e+K+"flex-"+e+e;case 5187:return U+e+L(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return U+e+K+"flex-item-"+L(e,/flex-|-self/g,"")+(_t(e,/flex-|baseline/)?"":K+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return U+e+K+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+K+L(e,"shrink","negative")+e;case 5292:return U+e+K+L(e,"basis","preferred-size")+e;case 6060:return U+"box-"+L(e,"-grow","")+U+e+K+L(e,"grow","positive")+e;case 4554:return U+L(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+K+"flex-pack:$3"),/space-between/,"justify")+U+e+e;case 4200:if(!_t(e,/flex-|baseline/))return K+"grid-column-align"+Sn(e,t)+e;break;case 2592:case 3360:return K+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,s){return t=s,_t(r.props,/grid-\w+-end/)})?~ro(e+(n=n[t].value),"span",0)?e:K+L(e,"-start","")+e+K+"grid-row-span:"+(~ro(n,"span",0)?_t(n,/\d+/):+_t(n,/\d+/)-+_t(e,/\d+/))+";":K+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return _t(r.props,/grid-\w+-start/)})?e:K+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Br+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ro(e,"stretch",0)?vd(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,s,o,i,l,a,p){return K+s+":"+o+p+(i?K+s+"-span:"+(l?a:+a-+o)+p:"")+e});case 4949:if(ce(e,t+6)===121)return L(e,":",":"+U)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ce(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+K+"$2box$3")+e;case 100:return L(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Fo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function bg(e,t,n,r){switch(e.type){case dg:if(e.children.length)break;case ug:case cg:case wa:return e.return=e.return||e.value;case dd:return"";case xd:return e.return=e.value+"{"+Fo(e.children,r)+"}";case xf:if(!st(e.value=e.props.join(",")))return""}return st(n=Fo(e.children,r))?e.return=e.value+"{"+n+"}":""}function Cg(e){var t=gd(e);return function(n,r,s,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,s,o)||"";return i}}function Eg(e){return function(t){t.root||(t=t.return)&&e(t)}}function zg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case wa:e.return=vd(e.value,e.length,n);return;case xd:return Fo([Pt(e,{value:L(e.value,"@","@"+U)})],r);case xf:if(e.length)return hg(n=e.props,function(s){switch(_t(s,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mn(Pt(e,{props:[L(s,/:(read-\w+)/,":"+Br+"$1")]})),Mn(Pt(e,{props:[s]})),ul(e,{props:Gp(n,r)});break;case"::placeholder":Mn(Pt(e,{props:[L(s,/:(plac\w+)/,":"+U+"input-$1")]})),Mn(Pt(e,{props:[L(s,/:(plac\w+)/,":"+Br+"$1")]})),Mn(Pt(e,{props:[L(s,/:(plac\w+)/,K+"input-$1")]})),Mn(Pt(e,{props:[s]})),ul(e,{props:Gp(n,r)});break}return""})}}var Kn={},si,oi;const or=typeof process<"u"&&Kn!==void 0&&(Kn.REACT_APP_SC_ATTR||Kn.SC_ATTR)||"data-styled",_d="active",jd="data-styled-version",yf="6.4.4",Na=`/*!sc*/
`,Ur=typeof window<"u"&&typeof document<"u";function Zp(e){if(typeof process<"u"&&Kn!==void 0){const t=Kn[e];if(t!==void 0&&t!=="")return t!=="false"}}const Mg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(oi=(si=Zp("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&si!==void 0?si:Zp("SC_DISABLE_SPEEDY"))!==null&&oi!==void 0?oi:typeof process<"u"&&Kn!==void 0&&!1),Rg="sc-keyframes-";function vf(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let fo=new Map,Bo=new Map,io=1;const Bs=e=>{if(fo.has(e))return fo.get(e);for(;Bo.has(io);)io++;const t=io++;return fo.set(e,t),Bo.set(t,e),t},Pg=e=>Bo.get(e),Tg=(e,t)=>{io=t+1,fo.set(e,t),Bo.set(t,e)},ka=Object.freeze([]),fr=Object.freeze({});function Ig(e,t,n=fr){return e.theme!==n.theme&&e.theme||t||n.theme}const Og=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lg=/(^-|-$)/g;function wd(e){return e.replace(Og,"-").replace(Lg,"")}const Ag=/(a)(d)/gi,eu=e=>String.fromCharCode(e+(e>25?39:97));function Sd(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=eu(t%52)+n;return(eu(t%52)+n).replace(Ag,"$1-$2")}const dl=5381,cn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Nd=e=>cn(dl,e);function $g(e){return Sd(Nd(e)>>>0)}function Dg(e){return e.displayName||e.name||"Component"}function xl(e){return typeof e=="string"&&!0}function Fg(e){return xl(e)?`styled.${e}`:`Styled(${Dg(e)})`}const kd=Symbol.for("react.memo"),Bg=Symbol.for("react.forward_ref"),Ug={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Wg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hg={[Bg]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[kd]:bd};function tu(e){return("type"in(t=e)&&t.type.$$typeof)===kd?bd:"$$typeof"in e?Hg[e.$$typeof]:Ug;var t}const Vg=Object.defineProperty,qg=Object.getOwnPropertyNames,Yg=Object.getOwnPropertySymbols,Qg=Object.getOwnPropertyDescriptor,Kg=Object.getPrototypeOf,Gg=Object.prototype;function Cd(e,t,n){if(typeof t!="string"){const r=Kg(t);r&&r!==Gg&&Cd(e,r,n);const s=qg(t).concat(Yg(t)),o=tu(e),i=tu(t);for(let l=0;l<s.length;++l){const a=s[l];if(!(a in Wg||n&&n[a]||i&&a in i||o&&a in o)){const p=Qg(t,a);try{Vg(e,a,p)}catch{}}}}return e}function _f(e){return typeof e=="function"}const Xg=Symbol.for("react.forward_ref");function Ed(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Xg&&"styledComponentId"in e}function Rr(e,t){return e&&t?e+" "+t:e||t||""}function nu(e,t){return e.join("")}function ps(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function hl(e,t,n=!1){if(!n&&!ps(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=hl(e[r],t[r]);else if(ps(t))for(const r in t)e[r]=hl(e[r],t[r]);return e}function zd(e,t){Object.defineProperty(e,"toString",{value:t})}const Jg=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const s=this.groupSizes,o=s.length;let i=o;for(;e>=i;)if(i<<=1,i<0)throw vf(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(s),this.length=i;for(let l=o;l<i;l++)this.groupSizes[l]=0}let n=this.indexOfGroup(e+1),r=0;for(let s=0,o=t.length;s<o;s++)this.tag.insertRule(n,t[s])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let s=n;s<r;s++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),s=r+n;for(let o=r;o<s;o++)t+=this.tag.getRule(o)+Na;return t}},Zg=`style[${or}][${jd}="${yf}"]`,e5=new RegExp(`^${or}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ru=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,ml=e=>{if(!e)return document;if(ru(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(ru(t))return t}return document},t5=(e,t,n)=>{const r=n.split(",");let s;for(let o=0,i=r.length;o<i;o++)(s=r[o])&&e.registerName(t,s)},n5=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Na),s=[];for(let o=0,i=r.length;o<i;o++){const l=r[o].trim();if(!l)continue;const a=l.match(e5);if(a){const p=0|parseInt(a[1],10),u=a[2];p!==0&&(Tg(u,p),t5(e,u,a[3]),e.getTag().insertRules(p,s)),s.length=0}else s.push(l)}},fi=e=>{const t=ml(e.options.target).querySelectorAll(Zg);for(let n=0,r=t.length;n<r;n++){const s=t[n];s&&s.getAttribute(or)!==_d&&(n5(e,s),s.parentNode&&s.parentNode.removeChild(s))}};let Nr=!1;function r5(){if(Nr!==!1)return Nr;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Nr=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Nr=t.getAttribute("content")||void 0}return Nr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Md=(e,t)=>{const n=document.head,r=e||n,s=document.createElement("style"),o=(a=>{const p=Array.from(a.querySelectorAll(`style[${or}]`));return p[p.length-1]})(r),i=o!==void 0?o.nextSibling:null;s.setAttribute(or,_d),s.setAttribute(jd,yf);const l=t||r5();return l&&s.setAttribute("nonce",l),r.insertBefore(s,i),s},s5=class{constructor(e,t){this.element=Md(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const s=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let o=0,i=s.length;o<i;o++){const l=s[o];if(l.ownerNode===n)return l}throw vf(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},o5=class{constructor(e,t){this.element=Md(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let su=Ur;const f5={isServer:!Ur,useCSSOMInjection:!Mg};class jf{static registerId(t){return Bs(t)}constructor(t=fr,n={},r){this.options=Object.assign(Object.assign({},f5),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ur&&su&&(su=!1,fi(this)),zd(this,()=>(s=>{const o=s.getTag(),{length:i}=o;let l="";for(let a=0;a<i;a++){const p=Pg(a);if(p===void 0)continue;const u=s.names.get(p);if(u===void 0||!u.size)continue;const d=o.getGroup(a);if(d.length===0)continue;const g=or+".g"+a+'[id="'+p+'"]';let w="";for(const m of u)m.length>0&&(w+=m+",");l+=d+g+'{content:"'+w+'"}'+Na}return l})(this))}rehydrate(){!this.server&&Ur&&fi(this)}reconstructWithOptions(t,n=!0){const r=new jf(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Ur&&t.target!==this.options.target&&ml(this.options.target)!==ml(t.target)&&fi(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:s})=>n?new s5(r,s):new o5(r,s))(this.options),new Jg(t)));var t}hasNameForId(t,n){var r,s;return(s=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&s!==void 0&&s}registerName(t,n){Bs(t),t.startsWith(Rg)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Bs(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Bs(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Rd=new WeakSet,i5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function l5(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in i5||e.startsWith("--")?String(t).trim():t+"px"}const sn=47;function ou(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const a5=Symbol.for("sc-keyframes");function p5(e){return typeof e=="object"&&e!==null&&a5 in e}function Pd(e){return _f(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Td=e=>e==null||e===!1||e==="",u5=Symbol.for("react.client.reference");function fu(e){return e.$$typeof===u5}function Id(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Td(r)&&(Array.isArray(r)&&Rd.has(r)||_f(r)?t.push(ou(n)+":",r,";"):ps(r)?(t.push(n+" {"),Id(r,t),t.push("}")):t.push(ou(n)+": "+l5(n,r)+";"))}}function dn(e,t,n,r,s=[]){if(Td(e))return s;const o=typeof e;if(o==="string")return s.push(e),s;if(o==="function"){if(fu(e))return s;if(Pd(e)&&t){const i=e(t);return dn(i,t,n,r,s)}return s.push(e),s}if(Array.isArray(e)){for(let i=0;i<e.length;i++)dn(e[i],t,n,r,s);return s}return Ed(e)?(s.push(`.${e.styledComponentId}`),s):p5(e)?(n?(e.inject(n,r),s.push(e.getName(r))):s.push(e),s):fu(e)?s:ps(e)?e.toString!==Object.prototype.toString?(s.push(e.toString()),s):(Id(e,s),s):(s.push(e.toString()),s)}const c5=Nd(yf);class d5{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=cn(c5,n),this.baseStyle=r,jf.registerId(n)}generateAndInjectStyles(t,n,r){let s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let o="";for(let i=0;i<this.rules.length;i++){const l=this.rules[i];if(typeof l=="string")o+=l;else if(l)if(Pd(l)){const a=l(t);typeof a=="string"?o+=a:a!=null&&a!==!1&&(o+=nu(dn(a,t,n,r)))}else o+=nu(dn(l,t,n,r))}if(o){this.dynamicNameCache||(this.dynamicNameCache=new Map);const i=r.hash?r.hash+o:o;let l=this.dynamicNameCache.get(i);if(!l){if(l=Sd(cn(cn(this.baseHash,r.hash),o)>>>0),this.dynamicNameCache.size>=200){const a=this.dynamicNameCache.keys().next().value;a!==void 0&&this.dynamicNameCache.delete(a)}this.dynamicNameCache.set(i,l)}if(!n.hasNameForId(this.componentId,l)){const a=r(o,"."+l,void 0,this.componentId);n.insertRules(this.componentId,l,a)}s=Rr(s,l)}}return s}}const x5=/&/g;function Od(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function ii(e){const t=e.length;let n="",r=0,s=0,o=0,i=!1,l=!1;for(let a=0;a<t;a++){const p=e.charCodeAt(a);if(o!==0||i||p!==sn||e.charCodeAt(a+1)!==42)if(i)p===42&&e.charCodeAt(a+1)===sn&&(i=!1,a++);else if(p!==34&&p!==39||Od(e,a)){if(o===0)if(p===123)s++;else if(p===125){if(s--,s<0){l=!0;let u=a+1;for(;u<t;){const d=e.charCodeAt(u);if(d===59||d===10)break;u++}u<t&&e.charCodeAt(u)===59&&u++,s=0,a=u-1,r=u;continue}s===0&&(n+=e.substring(r,a+1),r=a+1)}else p===59&&s===0&&(n+=e.substring(r,a+1),r=a+1)}else o===0?o=p:o===p&&(o=0);else i=!0,a++}return l||s!==0||o!==0?(r<t&&s===0&&o===0&&(n+=e.substring(r)),n):e}function Ld(e,t){const n=t+" ",r=","+n;for(let s=0;s<e.length;s++){const o=e[s];if(o.type==="rule"){o.value=(n+o.value).replaceAll(",",r);const i=o.props,l=[];for(let a=0;a<i.length;a++)l[a]=n+i[a];o.props=l}Array.isArray(o.children)&&o.type!=="@keyframes"&&Ld(o.children,t)}return e}function h5({options:e=fr,plugins:t=ka}=fr){let n,r,s;const o=(g,w,m)=>m.startsWith(r)&&m.endsWith(r)&&m.replaceAll(r,"").length>0?`.${n}`:g,i=t.slice();i.push(g=>{g.type===xf&&g.value.includes("&")&&(s||(s=new RegExp(`\\${r}\\b`,"g")),g.props[0]=g.props[0].replace(x5,r).replace(s,o))}),e.prefix&&i.push(zg),i.push(bg);let l=[];const a=Cg(i.concat(Eg(g=>l.push(g)))),p=(g,w="",m="",y="&")=>{n=y,r=w,s=void 0;const v=function(c){const h=c.indexOf("//")!==-1,_=c.indexOf("}")!==-1;if(!h&&!_)return c;if(!h)return ii(c);const N=c.length;let E="",S=0,k=0,F=0,I=0,W=0,ve=!1;for(;k<N;){const V=c.charCodeAt(k);if(V!==34&&V!==39||Od(c,k))if(F===0)if(V===sn&&k+1<N&&c.charCodeAt(k+1)===42){for(k+=2;k+1<N&&(c.charCodeAt(k)!==42||c.charCodeAt(k+1)!==sn);)k++;k+=2}else if(V!==40)if(V!==41)if(I>0)k++;else if(V===42&&k+1<N&&c.charCodeAt(k+1)===sn)E+=c.substring(S,k),k+=2,S=k,ve=!0;else if(V===sn&&k+1<N&&c.charCodeAt(k+1)===sn){for(E+=c.substring(S,k);k<N&&c.charCodeAt(k)!==10;)k++;S=k,ve=!0}else V===123?W++:V===125&&W--,k++;else I>0&&I--,k++;else I++,k++;else k++;else F===0?F=V:F===V&&(F=0),k++}return ve?(S<N&&(E+=c.substring(S)),W===0?E:ii(E)):W===0?c:ii(c)}(g);let x=Ng(m||w?m+" "+w+" { "+v+" }":v);return e.namespace&&(x=Ld(x,e.namespace)),l=[],Fo(x,a),l},u=e;let d=dl;for(let g=0;g<t.length;g++)t[g].name||vf(15),d=cn(d,t[g].name);return u!=null&&u.namespace&&(d=cn(d,u.namespace)),u!=null&&u.prefix&&(d=cn(d,"p")),p.hash=d!==dl?d.toString():"",p}const m5=new jf,g5=h5(),Ad=Ce.createContext({shouldForwardProp:void 0,styleSheet:m5,stylis:g5,stylisPlugins:void 0});Ad.Consumer;function y5(){return Ce.useContext(Ad)}const $d=Ce.createContext(void 0);$d.Consumer;const iu=Object.prototype.hasOwnProperty,li={};function v5(e,t){const n=typeof e!="string"?"sc":wd(e);li[n]=(li[n]||0)+1;const r=n+"-"+$g(yf+n+li[n]);return t?t+"-"+r:r}function _5(e,t,n){const r=Ed(e),s=e,o=!xl(e),{attrs:i=ka,componentId:l=v5(t.displayName,t.parentComponentId),displayName:a=Fg(e)}=t,p=t.displayName&&t.componentId?wd(t.displayName)+"-"+t.componentId:t.componentId||l,u=r&&s.attrs?s.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:d}=t;if(r&&s.shouldForwardProp){const y=s.shouldForwardProp;if(t.shouldForwardProp){const v=t.shouldForwardProp;d=(x,c)=>y(x,c)&&v(x,c)}else d=y}const g=new d5(n,p,r?s.componentStyle:void 0);function w(y,v){return function(x,c,h){const{attrs:_,componentStyle:N,defaultProps:E,foldedComponentIds:S,styledComponentId:k,target:F}=x,I=Ce.useContext($d),W=y5(),ve=x.shouldForwardProp||W.shouldForwardProp,V=Ig(c,I,E)||fr;let pe,ut;{const R=Ce.useRef(null),P=R.current;if(P!==null&&P[1]===V&&P[2]===W.styleSheet&&P[3]===W.stylis&&P[7]===N&&function($,A,Z){const q=$,ee=A;let $e=0;for(const Ve in ee)if(iu.call(ee,Ve)&&($e++,q[Ve]!==ee[Ve]))return!1;return $e===Z}(P[0],c,P[4]))pe=P[5],ut=P[6];else{pe=function(A,Z,q){const ee=Object.assign(Object.assign({},Z),{className:void 0,theme:q}),$e=A.length>1;for(let Ve=0;Ve<A.length;Ve++){const Ef=A[Ve],Ss=_f(Ef)?Ef($e?Object.assign({},ee):ee):Ef;for(const Mt in Ss)Mt==="className"?ee.className=Rr(ee.className,Ss[Mt]):Mt==="style"?ee.style=Object.assign(Object.assign({},ee.style),Ss[Mt]):Mt in Z&&Z[Mt]===void 0||(ee[Mt]=Ss[Mt])}return"className"in Z&&typeof Z.className=="string"&&(ee.className=Rr(ee.className,Z.className)),ee}(_,c,V),ut=function(A,Z,q,ee){return A.generateAndInjectStyles(Z,q,ee)}(N,pe,W.styleSheet,W.stylis);let $=0;for(const A in c)iu.call(c,A)&&$++;R.current=[c,V,W.styleSheet,W.stylis,$,pe,ut,N]}}const J=pe.as||F,ct=function(R,P,$,A){const Z={};for(const q in R)R[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&R.theme===$||(q==="forwardedAs"?Z.as=R.forwardedAs:A&&!A(q,P)||(Z[q]=R[q]));return Z}(pe,J,V,ve);let z=Rr(S,k);return ut&&(z+=" "+ut),pe.className&&(z+=" "+pe.className),ct[xl(J)&&J.includes("-")?"class":"className"]=z,h&&(ct.ref=h),b.createElement(J,ct)}(m,y,v)}w.displayName=a;let m=Ce.forwardRef(w);return m.attrs=u,m.componentStyle=g,m.displayName=a,m.shouldForwardProp=d,m.foldedComponentIds=r?Rr(s.foldedComponentIds,s.styledComponentId):"",m.styledComponentId=p,m.target=r?s.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(y){this._foldedDefaultProps=r?function(v,...x){for(const c of x)hl(v,c,!0);return v}({},s.defaultProps,y):y}}),zd(m,()=>`.${m.styledComponentId}`),o&&Cd(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var j5=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function lu(e,t){const n=[e[0]];for(let r=0,s=t.length;r<s;r+=1)n.push(t[r],e[r+1]);return n}const au=e=>(Rd.add(e),e);function w5(e,...t){if(_f(e)||ps(e))return au(dn(lu(ka,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?dn(n):au(dn(lu(n,t)))}function gl(e,t,n=fr){if(!t)throw vf(1,t);const r=(s,...o)=>e(t,n,w5(s,...o));return r.attrs=s=>gl(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)})),r.withConfig=s=>gl(e,t,Object.assign(Object.assign({},n),s)),r}const Dd=e=>gl(_5,e),wf=Dd;j5.forEach(e=>{wf[e]=Dd(e)});const Fd=()=>f.jsx(S5,{children:f.jsxs("div",{className:"container",children:[f.jsx("div",{id:"stars"}),f.jsx("div",{id:"stars2"}),f.jsx("div",{id:"stars3"}),f.jsx("div",{})]})}),S5=wf.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none; /* so clicks pass through to nav links */

  .container {
    height: 100%;
    min-width: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
  }

  #stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow:
      501px 811px #fff,
      1450px 1324px #fff,
      1093px 1780px #fff,
      1469px 678px #fff,
      904px 741px #fff,
      1160px 781px #fff,
      1841px 1962px #fff,
      1630px 1667px #fff,
      1788px 676px #fff,
      367px 1734px #fff,
      1343px 156px #fff,
      1283px 1142px #fff,
      1062px 378px #fff,
      1395px 467px #fff,
      1017px 1891px #fff,
      137px 1114px #fff,
      1767px 1403px #fff,
      1543px 11px #fff,
      1078px 181px #fff,
      1189px 1574px #fff,
      1697px 1551px #fff,
      439px 472px #fff,
      1491px 677px #fff,
      1364px 599px #fff,
      34px 382px #fff,
      1221px 1584px #fff,
      1266px 1499px #fff,
      169px 1907px #fff,
      1219px 1125px #fff,
      659px 18px #fff,
      1731px 1959px #fff,
      332px 1216px #fff,
      1913px 788px #fff,
      80px 712px #fff,
      326px 1605px #fff,
      574px 1502px #fff,
      473px 1653px #fff,
      404px 975px #fff,
      322px 1797px #fff,
      425px 1321px #fff,
      1121px 1797px #fff,
      731px 647px #fff,
      891px 1584px #fff,
      1523px 109px #fff,
      1379px 244px #fff,
      865px 1064px #fff,
      493px 956px #fff,
      624px 1380px #fff,
      440px 619px #fff,
      1630px 767px #fff,
      955px 1196px #fff,
      62px 729px #fff,
      126px 946px #fff,
      1256px 896px #fff,
      1444px 256px #fff,
      661px 1628px #fff,
      1078px 1716px #fff,
      300px 737px #fff,
      1734px 413px #fff,
      1296px 129px #fff,
      1771px 1678px #fff,
      977px 1764px #fff,
      1879px 549px #fff,
      665px 1531px #fff,
      89px 701px #fff,
      1084px 1183px #fff,
      1597px 1576px #fff,
      1354px 1774px #fff,
      554px 1471px #fff,
      1469px 287px #fff,
      887px 106px #fff,
      1962px 766px #fff,
      638px 805px #fff,
      1651px 741px #fff,
      1517px 1826px #fff,
      24px 1152px #fff,
      507px 558px #fff,
      1262px 652px #fff,
      246px 1048px #fff,
      1077px 421px #fff,
      1866px 1847px #fff,
      1986px 1561px #fff,
      704px 632px #fff,
      1991px 1875px #fff,
      1227px 395px #fff,
      45px 1116px #fff,
      247px 786px #fff,
      890px 607px #fff,
      787px 1235px #fff,
      557px 524px #fff,
      1582px 1285px #fff,
      1725px 1366px #fff,
      952px 747px #fff,
      251px 458px #fff,
      1500px 1250px #fff,
      1999px 1734px #fff,
      1336px 1955px #fff,
      1705px 1464px #fff,
      728px 697px #fff,
      594px 510px #fff,
      1345px 1990px #fff,
      1919px 1803px #fff,
      1117px 966px #fff,
      1629px 97px #fff,
      1046px 1196px #fff,
      810px 1092px #fff,
      722px 976px #fff,
      406px 18px #fff,
      1665px 1860px #fff,
      1758px 1628px #fff,
      1183px 463px #fff,
      564px 239px #fff,
      13px 1767px #fff,
      1482px 1472px #fff,
      1700px 347px #fff,
      1362px 244px #fff,
      1141px 1708px #fff,
      22px 885px #fff,
      374px 1309px #fff,
      1034px 1037px #fff,
      1725px 1086px #fff,
      1343px 1921px #fff,
      596px 903px #fff,
      1061px 478px #fff,
      18px 1409px #fff,
      729px 1364px #fff,
      264px 911px #fff,
      677px 1442px #fff,
      123px 33px #fff,
      1303px 646px #fff,
      1945px 792px #fff,
      1305px 938px #fff,
      918px 1536px #fff,
      620px 948px #fff,
      183px 646px #fff,
      695px 687px #fff,
      881px 272px #fff,
      1521px 1212px #fff,
      1423px 1022px #fff,
      1545px 1271px #fff,
      1393px 348px #fff,
      685px 1910px #fff,
      1446px 856px #fff,
      73px 1201px #fff,
      736px 999px #fff,
      673px 796px #fff,
      469px 850px #fff,
      1912px 142px #fff,
      1278px 664px #fff,
      184px 1990px #fff,
      1173px 1312px #fff,
      782px 1879px #fff,
      323px 1035px #fff,
      611px 908px #fff,
      565px 1449px #fff,
      748px 1713px #fff,
      1047px 490px #fff,
      1040px 1872px #fff,
      1818px 1659px #fff,
      1806px 1327px #fff,
      386px 575px #fff,
      1550px 463px #fff,
      148px 687px #fff,
      651px 1683px #fff,
      1588px 1194px #fff,
      1831px 2px #fff,
      581px 876px #fff,
      1396px 1743px #fff,
      1212px 1810px #fff,
      421px 1920px #fff,
      658px 1461px #fff,
      1859px 1809px #fff,
      1456px 388px #fff,
      186px 1627px #fff,
      1528px 1145px #fff,
      171px 97px #fff,
      674px 1072px #fff,
      676px 1052px #fff,
      1165px 1131px #fff,
      1088px 781px #fff,
      1231px 948px #fff,
      330px 257px #fff,
      426px 1046px #fff,
      549px 652px #fff,
      1338px 74px #fff,
      1749px 364px #fff,
      931px 369px #fff,
      383px 1428px #fff,
      1558px 389px #fff,
      927px 133px #fff,
      234px 1888px #fff,
      1785px 1617px #fff,
      556px 643px #fff,
      401px 275px #fff,
      406px 1644px #fff,
      1253px 1852px #fff,
      1599px 883px #fff,
      744px 1721px #fff,
      524px 1297px #fff,
      1226px 1177px #fff,
      1679px 55px #fff,
      874px 1811px #fff,
      838px 790px #fff,
      1241px 430px #fff,
      1676px 652px #fff,
      1191px 568px #fff,
      53px 1990px #fff,
      1163px 237px #fff,
      61px 223px #fff,
      592px 456px #fff,
      1844px 271px #fff,
      1324px 1488px #fff,
      1373px 717px #fff,
      1822px 709px #fff,
      1464px 941px #fff,
      1445px 1118px #fff,
      991px 1414px #fff,
      1964px 1076px #fff,
      108px 172px #fff,
      641px 1722px #fff,
      1539px 427px #fff,
      1697px 45px #fff,
      1301px 1353px #fff,
      1060px 329px #fff,
      967px 1396px #fff,
      493px 301px #fff,
      1228px 1406px #fff,
      1211px 1653px #fff,
      444px 1822px #fff,
      1746px 353px #fff,
      1449px 381px #fff,
      671px 887px #fff,
      650px 138px #fff,
      30px 1839px #fff,
      1094px 1405px #fff,
      273px 796px #fff,
      1618px 1964px #fff,
      1045px 1849px #fff,
      1472px 1155px #fff,
      1529px 1312px #fff,
      728px 448px #fff,
      44px 1908px #fff,
      691px 818px #fff,
      254px 293px #fff,
      1981px 1133px #fff,
      1307px 375px #fff,
      196px 316px #fff,
      1241px 1975px #fff,
      1138px 1706px #fff,
      1769px 463px #fff,
      1768px 1428px #fff,
      1730px 590px #fff,
      1780px 523px #fff,
      1862px 1526px #fff,
      1613px 909px #fff,
      1266px 1781px #fff,
      470px 352px #fff,
      699px 1682px #fff,
      1002px 614px #fff,
      1209px 133px #fff,
      1842px 518px #fff,
      1422px 1836px #fff,
      1720px 1901px #fff,
      470px 1788px #fff,
      1355px 1387px #fff,
      146px 1162px #fff,
      933px 80px #fff,
      681px 1063px #fff,
      313px 1341px #fff,
      740px 1498px #fff,
      168px 1014px #fff,
      345px 1355px #fff,
      1498px 1562px #fff,
      1626px 1358px #fff,
      890px 403px #fff,
      663px 562px #fff,
      1481px 168px #fff,
      22px 719px #fff,
      774px 1041px #fff,
      1899px 829px #fff,
      430px 158px #fff,
      430px 361px #fff,
      1592px 1334px #fff,
      224px 323px #fff,
      1639px 1131px #fff,
      7px 271px #fff,
      1646px 1514px #fff,
      1605px 1444px #fff,
      1820px 1665px #fff,
      1549px 1641px #fff,
      1609px 1377px #fff,
      486px 1098px #fff,
      229px 613px #fff,
      542px 1694px #fff,
      318px 256px #fff,
      1861px 918px #fff,
      889px 892px #fff,
      442px 1524px #fff,
      19px 422px #fff,
      1935px 1908px #fff,
      828px 109px #fff,
      862px 1248px #fff,
      1275px 560px #fff,
      906px 63px #fff,
      337px 1605px #fff,
      1691px 918px #fff,
      1414px 679px #fff,
      1726px 749px #fff,
      1540px 1149px #fff,
      1337px 1466px #fff,
      446px 430px #fff,
      676px 1616px #fff,
      840px 326px #fff,
      976px 977px #fff,
      1840px 642px #fff,
      1273px 804px #fff,
      1071px 928px #fff,
      1292px 1675px #fff,
      29px 1148px #fff,
      1585px 135px #fff,
      1007px 563px #fff,
      1035px 78px #fff,
      1174px 574px #fff,
      120px 1304px #fff,
      845px 1292px #fff,
      861px 540px #fff,
      234px 232px #fff,
      1940px 1367px #fff,
      759px 639px #fff,
      1775px 1381px #fff,
      906px 372px #fff,
      1104px 1165px #fff,
      1524px 911px #fff,
      1882px 330px #fff,
      1389px 700px #fff,
      300px 1629px #fff,
      220px 1614px #fff,
      563px 140px #fff,
      1611px 1586px #fff,
      793px 1316px #fff,
      325px 1070px #fff,
      1722px 1462px #fff,
      1406px 1120px #fff,
      1169px 1768px #fff,
      1956px 1053px #fff,
      959px 1587px #fff,
      585px 1566px #fff,
      370px 204px #fff,
      1606px 1416px #fff,
      443px 1606px #fff,
      1499px 1102px #fff,
      1943px 105px #fff,
      1121px 1594px #fff,
      1512px 32px #fff,
      871px 1425px #fff,
      433px 100px #fff,
      294px 1471px #fff,
      1688px 1755px #fff,
      1666px 591px #fff,
      1034px 300px #fff,
      734px 1178px #fff,
      1342px 313px #fff,
      1616px 1590px #fff,
      1763px 1472px #fff,
      632px 1935px #fff,
      1708px 872px #fff,
      1871px 915px #fff,
      1829px 1020px #fff,
      1599px 578px #fff,
      42px 585px #fff,
      1163px 1382px #fff,
      1744px 1272px #fff,
      984px 1426px #fff,
      1786px 1584px #fff,
      1813px 379px #fff,
      1867px 1127px #fff,
      97px 567px #fff,
      626px 988px #fff,
      1178px 79px #fff,
      1703px 211px #fff,
      961px 1785px #fff,
      110px 975px #fff,
      953px 1941px #fff,
      1027px 1790px #fff,
      1665px 107px #fff,
      11px 964px #fff,
      1718px 1147px #fff,
      21px 1728px #fff,
      1358px 1922px #fff,
      872px 65px #fff,
      1191px 1635px #fff,
      762px 681px #fff,
      1519px 1033px #fff,
      906px 566px #fff,
      1074px 657px #fff,
      1093px 415px #fff,
      51px 198px #fff,
      1075px 1418px #fff,
      1547px 1070px #fff,
      225px 920px #fff,
      850px 1974px #fff,
      981px 595px #fff,
      1425px 131px #fff,
      460px 917px #fff,
      56px 495px #fff,
      714px 428px #fff,
      920px 493px #fff,
      470px 1521px #fff,
      532px 821px #fff,
      1905px 71px #fff,
      883px 1501px #fff,
      294px 196px #fff,
      381px 1999px #fff,
      332px 793px #fff,
      1246px 408px #fff,
      233px 149px #fff,
      315px 231px #fff,
      1594px 1302px #fff,
      696px 1585px #fff,
      791px 136px #fff,
      479px 199px #fff,
      1627px 1413px #fff,
      1824px 924px #fff,
      1631px 342px #fff,
      1251px 1151px #fff,
      284px 1781px #fff,
      497px 1052px #fff,
      204px 1161px #fff,
      646px 1499px #fff,
      1762px 558px #fff,
      854px 1833px #fff,
      883px 945px #fff,
      44px 982px #fff,
      1101px 834px #fff,
      515px 1748px #fff,
      1578px 1435px #fff,
      819px 1258px #fff,
      776px 670px #fff,
      115px 385px #fff,
      1478px 434px #fff,
      885px 20px #fff,
      192px 1513px #fff,
      78px 1129px #fff,
      1774px 1105px #fff,
      955px 1149px #fff,
      1817px 1929px #fff,
      1106px 1832px #fff,
      1107px 1997px #fff,
      94px 23px #fff,
      243px 982px #fff,
      43px 1972px #fff,
      1798px 673px #fff,
      1131px 1589px #fff,
      841px 14px #fff,
      826px 345px #fff,
      687px 56px #fff,
      1084px 32px #fff,
      1887px 1878px #fff,
      153px 526px #fff,
      1828px 253px #fff,
      1947px 1105px #fff,
      886px 700px #fff,
      1307px 1723px #fff,
      1274px 651px #fff,
      1530px 837px #fff,
      1699px 1637px #fff,
      1703px 1331px #fff,
      1929px 1557px #fff,
      1763px 737px #fff,
      1118px 1680px #fff,
      1545px 692px #fff,
      1462px 1092px #fff,
      208px 1667px #fff,
      1393px 859px #fff,
      186px 1794px #fff,
      351px 1199px #fff,
      642px 1995px #fff,
      1061px 1726px #fff,
      1708px 115px #fff,
      1233px 1305px #fff,
      637px 1786px #fff,
      1730px 603px #fff,
      75px 1240px #fff,
      1704px 1326px #fff,
      584px 346px #fff,
      438px 1554px #fff,
      561px 513px #fff,
      1382px 225px #fff,
      467px 1674px #fff,
      1403px 815px #fff,
      1546px 1835px #fff,
      127px 1119px #fff,
      276px 591px #fff,
      688px 1458px #fff,
      765px 646px #fff,
      474px 984px #fff,
      171px 361px #fff,
      94px 1480px #fff,
      1962px 1666px #fff,
      909px 1037px #fff,
      1725px 222px #fff,
      253px 1355px #fff,
      1892px 1901px #fff,
      275px 1847px #fff,
      28px 1184px #fff,
      1725px 1382px #fff,
      882px 647px #fff,
      1935px 1046px #fff,
      10px 344px #fff,
      292px 1328px #fff,
      127px 1352px #fff,
      752px 929px #fff,
      1589px 384px #fff,
      284px 1829px #fff,
      381px 820px #fff,
      1229px 1125px #fff,
      777px 429px #fff,
      1811px 1499px #fff,
      1573px 287px #fff,
      295px 756px #fff,
      389px 616px #fff,
      781px 41px #fff,
      1092px 333px #fff,
      794px 1588px #fff,
      386px 1847px #fff,
      1802px 710px #fff,
      662px 60px #fff,
      640px 264px #fff,
      463px 746px #fff,
      1859px 799px #fff,
      763px 37px #fff,
      639px 396px #fff,
      357px 1071px #fff,
      1190px 1430px #fff,
      1814px 257px #fff,
      1382px 235px #fff,
      606px 1304px #fff,
      1939px 1470px #fff,
      1124px 349px #fff,
      307px 1567px #fff,
      310px 1323px #fff,
      1145px 922px #fff,
      1196px 1922px #fff,
      1647px 544px #fff,
      788px 1337px #fff,
      257px 632px #fff,
      1413px 414px #fff,
      590px 620px #fff,
      582px 794px #fff,
      1702px 1481px #fff,
      1055px 53px #fff,
      157px 346px #fff,
      50px 1901px #fff,
      1038px 1369px #fff,
      796px 1941px #fff,
      215px 194px #fff,
      1567px 1538px #fff,
      367px 800px #fff,
      1044px 489px #fff,
      1109px 1712px #fff,
      524px 327px #fff,
      525px 1252px #fff,
      1475px 1240px #fff,
      529px 436px #fff,
      795px 834px #fff,
      122px 1371px #fff,
      79px 482px #fff,
      520px 1249px #fff,
      336px 1878px #fff,
      188px 944px #fff,
      325px 1259px #fff,
      1491px 1942px #fff,
      620px 1054px #fff,
      1606px 1153px #fff,
      1448px 502px #fff,
      53px 1381px #fff,
      107px 1670px #fff,
      1380px 618px #fff,
      967px 1557px #fff,
      1116px 1722px #fff,
      1174px 1044px #fff,
      1805px 717px #fff,
      663px 394px #fff,
      1848px 1007px #fff,
      389px 802px #fff,
      49px 392px #fff,
      1650px 852px #fff,
      1678px 1012px #fff,
      335px 1009px #fff,
      1818px 1631px #fff,
      1568px 742px #fff,
      1162px 1991px #fff,
      52px 1190px #fff,
      1401px 928px #fff,
      119px 1549px #fff,
      537px 1529px #fff,
      2px 1709px #fff,
      122px 387px #fff,
      543px 2px #fff,
      27px 1971px #fff,
      507px 1377px #fff,
      1362px 1080px #fff,
      1031px 1544px #fff,
      1631px 1174px #fff,
      1603px 312px #fff,
      1626px 1422px #fff,
      1430px 615px #fff,
      1958px 1431px #fff,
      1946px 1412px #fff,
      1848px 247px #fff,
      984px 1808px #fff,
      1396px 225px #fff,
      319px 717px #fff,
      1252px 875px #fff,
      1619px 156px #fff,
      951px 1971px #fff,
      386px 355px #fff,
      1406px 1151px #fff,
      273px 1538px #fff,
      844px 1570px #fff,
      947px 151px #fff,
      1363px 525px #fff,
      209px 307px #fff,
      1923px 1718px #fff,
      993px 1741px #fff,
      1513px 353px #fff,
      1353px 61px #fff,
      664px 352px #fff,
      1382px 359px #fff,
      1487px 1707px #fff,
      657px 1045px #fff,
      1107px 490px #fff,
      1834px 1176px #fff,
      837px 1438px #fff,
      1947px 448px #fff,
      1196px 333px #fff,
      151px 555px #fff,
      18px 992px #fff,
      458px 748px #fff,
      1801px 890px #fff,
      1093px 1012px #fff,
      315px 1101px #fff,
      194px 323px #fff,
      754px 292px #fff,
      1737px 7px #fff,
      40px 840px #fff,
      1170px 805px #fff,
      176px 1753px #fff,
      805px 1148px #fff,
      1578px 1271px #fff,
      367px 1494px #fff,
      363px 1111px #fff,
      1955px 243px #fff,
      1451px 1093px #fff,
      375px 617px #fff,
      1223px 720px #fff,
      1178px 13px #fff,
      1456px 865px #fff,
      1440px 49px #fff,
      186px 1569px #fff,
      320px 1853px #fff,
      300px 539px #fff,
      1559px 509px #fff,
      1985px 1108px #fff,
      1588px 828px #fff,
      525px 1432px #fff,
      831px 363px #fff,
      141px 281px #fff,
      1319px 402px #fff,
      40px 456px #fff,
      1955px 478px #fff,
      1758px 818px #fff,
      1924px 688px #fff,
      1030px 953px #fff,
      1982px 210px #fff,
      917px 1401px #fff,
      1051px 1837px #fff,
      1045px 463px #fff,
      1744px 573px #fff,
      529px 1530px #fff,
      542px 469px #fff,
      1982px 324px #fff,
      1902px 1422px #fff,
      1968px 782px #fff,
      1666px 1561px #fff,
      955px 304px #fff,
      323px 778px #fff,
      272px 443px #fff,
      485px 581px #fff,
      1353px 1058px #fff,
      1257px 131px #fff,
      434px 98px #fff,
      1587px 1953px #fff,
      1749px 68px #fff,
      1984px 839px #fff,
      1518px 183px #fff,
      1071px 855px #fff,
      1662px 1994px #fff,
      1111px 106px #fff,
      1954px 838px #fff;
    animation: animStar 50s linear infinite;
  }
  #stars:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow:
      501px 811px #fff,
      1450px 1324px #fff,
      1093px 1780px #fff,
      1469px 678px #fff,
      904px 741px #fff,
      1160px 781px #fff,
      1841px 1962px #fff,
      1630px 1667px #fff,
      1788px 676px #fff,
      367px 1734px #fff,
      1343px 156px #fff,
      1283px 1142px #fff,
      1062px 378px #fff,
      1395px 467px #fff,
      1017px 1891px #fff,
      137px 1114px #fff,
      1767px 1403px #fff,
      1543px 11px #fff,
      1078px 181px #fff,
      1189px 1574px #fff,
      1697px 1551px #fff,
      439px 472px #fff,
      1491px 677px #fff,
      1364px 599px #fff,
      34px 382px #fff,
      1221px 1584px #fff,
      1266px 1499px #fff,
      169px 1907px #fff,
      1219px 1125px #fff,
      659px 18px #fff,
      1731px 1959px #fff,
      332px 1216px #fff,
      1913px 788px #fff,
      80px 712px #fff,
      326px 1605px #fff,
      574px 1502px #fff,
      473px 1653px #fff,
      404px 975px #fff,
      322px 1797px #fff,
      425px 1321px #fff,
      1121px 1797px #fff,
      731px 647px #fff,
      891px 1584px #fff,
      1523px 109px #fff,
      1379px 244px #fff,
      865px 1064px #fff,
      493px 956px #fff,
      624px 1380px #fff,
      440px 619px #fff,
      1630px 767px #fff,
      955px 1196px #fff,
      62px 729px #fff,
      126px 946px #fff,
      1256px 896px #fff,
      1444px 256px #fff,
      661px 1628px #fff,
      1078px 1716px #fff,
      300px 737px #fff,
      1734px 413px #fff,
      1296px 129px #fff,
      1771px 1678px #fff,
      977px 1764px #fff,
      1879px 549px #fff,
      665px 1531px #fff,
      89px 701px #fff,
      1084px 1183px #fff,
      1597px 1576px #fff,
      1354px 1774px #fff,
      554px 1471px #fff,
      1469px 287px #fff,
      887px 106px #fff,
      1962px 766px #fff,
      638px 805px #fff,
      1651px 741px #fff,
      1517px 1826px #fff,
      24px 1152px #fff,
      507px 558px #fff,
      1262px 652px #fff,
      246px 1048px #fff,
      1077px 421px #fff,
      1866px 1847px #fff,
      1986px 1561px #fff,
      704px 632px #fff,
      1991px 1875px #fff,
      1227px 395px #fff,
      45px 1116px #fff,
      247px 786px #fff,
      890px 607px #fff,
      787px 1235px #fff,
      557px 524px #fff,
      1582px 1285px #fff,
      1725px 1366px #fff,
      952px 747px #fff,
      251px 458px #fff,
      1500px 1250px #fff,
      1999px 1734px #fff,
      1336px 1955px #fff,
      1705px 1464px #fff,
      728px 697px #fff,
      594px 510px #fff,
      1345px 1990px #fff,
      1919px 1803px #fff,
      1117px 966px #fff,
      1629px 97px #fff,
      1046px 1196px #fff,
      810px 1092px #fff,
      722px 976px #fff,
      406px 18px #fff,
      1665px 1860px #fff,
      1758px 1628px #fff,
      1183px 463px #fff,
      564px 239px #fff,
      13px 1767px #fff,
      1482px 1472px #fff,
      1700px 347px #fff,
      1362px 244px #fff,
      1141px 1708px #fff,
      22px 885px #fff,
      374px 1309px #fff,
      1034px 1037px #fff,
      1725px 1086px #fff,
      1343px 1921px #fff,
      596px 903px #fff,
      1061px 478px #fff,
      18px 1409px #fff,
      729px 1364px #fff,
      264px 911px #fff,
      677px 1442px #fff,
      123px 33px #fff,
      1303px 646px #fff,
      1945px 792px #fff,
      1305px 938px #fff,
      918px 1536px #fff,
      620px 948px #fff,
      183px 646px #fff,
      695px 687px #fff,
      881px 272px #fff,
      1521px 1212px #fff,
      1423px 1022px #fff,
      1545px 1271px #fff,
      1393px 348px #fff,
      685px 1910px #fff,
      1446px 856px #fff,
      73px 1201px #fff,
      736px 999px #fff,
      673px 796px #fff,
      469px 850px #fff,
      1912px 142px #fff,
      1278px 664px #fff,
      184px 1990px #fff,
      1173px 1312px #fff,
      782px 1879px #fff,
      323px 1035px #fff,
      611px 908px #fff,
      565px 1449px #fff,
      748px 1713px #fff,
      1047px 490px #fff,
      1040px 1872px #fff,
      1818px 1659px #fff,
      1806px 1327px #fff,
      386px 575px #fff,
      1550px 463px #fff,
      148px 687px #fff,
      651px 1683px #fff,
      1588px 1194px #fff,
      1831px 2px #fff,
      581px 876px #fff,
      1396px 1743px #fff,
      1212px 1810px #fff,
      421px 1920px #fff,
      658px 1461px #fff,
      1859px 1809px #fff,
      1456px 388px #fff,
      186px 1627px #fff,
      1528px 1145px #fff,
      171px 97px #fff,
      674px 1072px #fff,
      676px 1052px #fff,
      1165px 1131px #fff,
      1088px 781px #fff,
      1231px 948px #fff,
      330px 257px #fff,
      426px 1046px #fff,
      549px 652px #fff,
      1338px 74px #fff,
      1749px 364px #fff,
      931px 369px #fff,
      383px 1428px #fff,
      1558px 389px #fff,
      927px 133px #fff,
      234px 1888px #fff,
      1785px 1617px #fff,
      556px 643px #fff,
      401px 275px #fff,
      406px 1644px #fff,
      1253px 1852px #fff,
      1599px 883px #fff,
      744px 1721px #fff,
      524px 1297px #fff,
      1226px 1177px #fff,
      1679px 55px #fff,
      874px 1811px #fff,
      838px 790px #fff,
      1241px 430px #fff,
      1676px 652px #fff,
      1191px 568px #fff,
      53px 1990px #fff,
      1163px 237px #fff,
      61px 223px #fff,
      592px 456px #fff,
      1844px 271px #fff,
      1324px 1488px #fff,
      1373px 717px #fff,
      1822px 709px #fff,
      1464px 941px #fff,
      1445px 1118px #fff,
      991px 1414px #fff,
      1964px 1076px #fff,
      108px 172px #fff,
      641px 1722px #fff,
      1539px 427px #fff,
      1697px 45px #fff,
      1301px 1353px #fff,
      1060px 329px #fff,
      967px 1396px #fff,
      493px 301px #fff,
      1228px 1406px #fff,
      1211px 1653px #fff,
      444px 1822px #fff,
      1746px 353px #fff,
      1449px 381px #fff,
      671px 887px #fff,
      650px 138px #fff,
      30px 1839px #fff,
      1094px 1405px #fff,
      273px 796px #fff,
      1618px 1964px #fff,
      1045px 1849px #fff,
      1472px 1155px #fff,
      1529px 1312px #fff,
      728px 448px #fff,
      44px 1908px #fff,
      691px 818px #fff,
      254px 293px #fff,
      1981px 1133px #fff,
      1307px 375px #fff,
      196px 316px #fff,
      1241px 1975px #fff,
      1138px 1706px #fff,
      1769px 463px #fff,
      1768px 1428px #fff,
      1730px 590px #fff,
      1780px 523px #fff,
      1862px 1526px #fff,
      1613px 909px #fff,
      1266px 1781px #fff,
      470px 352px #fff,
      699px 1682px #fff,
      1002px 614px #fff,
      1209px 133px #fff,
      1842px 518px #fff,
      1422px 1836px #fff,
      1720px 1901px #fff,
      470px 1788px #fff,
      1355px 1387px #fff,
      146px 1162px #fff,
      933px 80px #fff,
      681px 1063px #fff,
      313px 1341px #fff,
      740px 1498px #fff,
      168px 1014px #fff,
      345px 1355px #fff,
      1498px 1562px #fff,
      1626px 1358px #fff,
      890px 403px #fff,
      663px 562px #fff,
      1481px 168px #fff,
      22px 719px #fff,
      774px 1041px #fff,
      1899px 829px #fff,
      430px 158px #fff,
      430px 361px #fff,
      1592px 1334px #fff,
      224px 323px #fff,
      1639px 1131px #fff,
      7px 271px #fff,
      1646px 1514px #fff,
      1605px 1444px #fff,
      1820px 1665px #fff,
      1549px 1641px #fff,
      1609px 1377px #fff,
      486px 1098px #fff,
      229px 613px #fff,
      542px 1694px #fff,
      318px 256px #fff,
      1861px 918px #fff,
      889px 892px #fff,
      442px 1524px #fff,
      19px 422px #fff,
      1935px 1908px #fff,
      828px 109px #fff,
      862px 1248px #fff,
      1275px 560px #fff,
      906px 63px #fff,
      337px 1605px #fff,
      1691px 918px #fff,
      1414px 679px #fff,
      1726px 749px #fff,
      1540px 1149px #fff,
      1337px 1466px #fff,
      446px 430px #fff,
      676px 1616px #fff,
      840px 326px #fff,
      976px 977px #fff,
      1840px 642px #fff,
      1273px 804px #fff,
      1071px 928px #fff,
      1292px 1675px #fff,
      29px 1148px #fff,
      1585px 135px #fff,
      1007px 563px #fff,
      1035px 78px #fff,
      1174px 574px #fff,
      120px 1304px #fff,
      845px 1292px #fff,
      861px 540px #fff,
      234px 232px #fff,
      1940px 1367px #fff,
      759px 639px #fff,
      1775px 1381px #fff,
      906px 372px #fff,
      1104px 1165px #fff,
      1524px 911px #fff,
      1882px 330px #fff,
      1389px 700px #fff,
      300px 1629px #fff,
      220px 1614px #fff,
      563px 140px #fff,
      1611px 1586px #fff,
      793px 1316px #fff,
      325px 1070px #fff,
      1722px 1462px #fff,
      1406px 1120px #fff,
      1169px 1768px #fff,
      1956px 1053px #fff,
      959px 1587px #fff,
      585px 1566px #fff,
      370px 204px #fff,
      1606px 1416px #fff,
      443px 1606px #fff,
      1499px 1102px #fff,
      1943px 105px #fff,
      1121px 1594px #fff,
      1512px 32px #fff,
      871px 1425px #fff,
      433px 100px #fff,
      294px 1471px #fff,
      1688px 1755px #fff,
      1666px 591px #fff,
      1034px 300px #fff,
      734px 1178px #fff,
      1342px 313px #fff,
      1616px 1590px #fff,
      1763px 1472px #fff,
      632px 1935px #fff,
      1708px 872px #fff,
      1871px 915px #fff,
      1829px 1020px #fff,
      1599px 578px #fff,
      42px 585px #fff,
      1163px 1382px #fff,
      1744px 1272px #fff,
      984px 1426px #fff,
      1786px 1584px #fff,
      1813px 379px #fff,
      1867px 1127px #fff,
      97px 567px #fff,
      626px 988px #fff,
      1178px 79px #fff,
      1703px 211px #fff,
      961px 1785px #fff,
      110px 975px #fff,
      953px 1941px #fff,
      1027px 1790px #fff,
      1665px 107px #fff,
      11px 964px #fff,
      1718px 1147px #fff,
      21px 1728px #fff,
      1358px 1922px #fff,
      872px 65px #fff,
      1191px 1635px #fff,
      762px 681px #fff,
      1519px 1033px #fff,
      906px 566px #fff,
      1074px 657px #fff,
      1093px 415px #fff,
      51px 198px #fff,
      1075px 1418px #fff,
      1547px 1070px #fff,
      225px 920px #fff,
      850px 1974px #fff,
      981px 595px #fff,
      1425px 131px #fff,
      460px 917px #fff,
      56px 495px #fff,
      714px 428px #fff,
      920px 493px #fff,
      470px 1521px #fff,
      532px 821px #fff,
      1905px 71px #fff,
      883px 1501px #fff,
      294px 196px #fff,
      381px 1999px #fff,
      332px 793px #fff,
      1246px 408px #fff,
      233px 149px #fff,
      315px 231px #fff,
      1594px 1302px #fff,
      696px 1585px #fff,
      791px 136px #fff,
      479px 199px #fff,
      1627px 1413px #fff,
      1824px 924px #fff,
      1631px 342px #fff,
      1251px 1151px #fff,
      284px 1781px #fff,
      497px 1052px #fff,
      204px 1161px #fff,
      646px 1499px #fff,
      1762px 558px #fff,
      854px 1833px #fff,
      883px 945px #fff,
      44px 982px #fff,
      1101px 834px #fff,
      515px 1748px #fff,
      1578px 1435px #fff,
      819px 1258px #fff,
      776px 670px #fff,
      115px 385px #fff,
      1478px 434px #fff,
      885px 20px #fff,
      192px 1513px #fff,
      78px 1129px #fff,
      1774px 1105px #fff,
      955px 1149px #fff,
      1817px 1929px #fff,
      1106px 1832px #fff,
      1107px 1997px #fff,
      94px 23px #fff,
      243px 982px #fff,
      43px 1972px #fff,
      1798px 673px #fff,
      1131px 1589px #fff,
      841px 14px #fff,
      826px 345px #fff,
      687px 56px #fff,
      1084px 32px #fff,
      1887px 1878px #fff,
      153px 526px #fff,
      1828px 253px #fff,
      1947px 1105px #fff,
      886px 700px #fff,
      1307px 1723px #fff,
      1274px 651px #fff,
      1530px 837px #fff,
      1699px 1637px #fff,
      1703px 1331px #fff,
      1929px 1557px #fff,
      1763px 737px #fff,
      1118px 1680px #fff,
      1545px 692px #fff,
      1462px 1092px #fff,
      208px 1667px #fff,
      1393px 859px #fff,
      186px 1794px #fff,
      351px 1199px #fff,
      642px 1995px #fff,
      1061px 1726px #fff,
      1708px 115px #fff,
      1233px 1305px #fff,
      637px 1786px #fff,
      1730px 603px #fff,
      75px 1240px #fff,
      1704px 1326px #fff,
      584px 346px #fff,
      438px 1554px #fff,
      561px 513px #fff,
      1382px 225px #fff,
      467px 1674px #fff,
      1403px 815px #fff,
      1546px 1835px #fff,
      127px 1119px #fff,
      276px 591px #fff,
      688px 1458px #fff,
      765px 646px #fff,
      474px 984px #fff,
      171px 361px #fff,
      94px 1480px #fff,
      1962px 1666px #fff,
      909px 1037px #fff,
      1725px 222px #fff,
      253px 1355px #fff,
      1892px 1901px #fff,
      275px 1847px #fff,
      28px 1184px #fff,
      1725px 1382px #fff,
      882px 647px #fff,
      1935px 1046px #fff,
      10px 344px #fff,
      292px 1328px #fff,
      127px 1352px #fff,
      752px 929px #fff,
      1589px 384px #fff,
      284px 1829px #fff,
      381px 820px #fff,
      1229px 1125px #fff,
      777px 429px #fff,
      1811px 1499px #fff,
      1573px 287px #fff,
      295px 756px #fff,
      389px 616px #fff,
      781px 41px #fff,
      1092px 333px #fff,
      794px 1588px #fff,
      386px 1847px #fff,
      1802px 710px #fff,
      662px 60px #fff,
      640px 264px #fff,
      463px 746px #fff,
      1859px 799px #fff,
      763px 37px #fff,
      639px 396px #fff,
      357px 1071px #fff,
      1190px 1430px #fff,
      1814px 257px #fff,
      1382px 235px #fff,
      606px 1304px #fff,
      1939px 1470px #fff,
      1124px 349px #fff,
      307px 1567px #fff,
      310px 1323px #fff,
      1145px 922px #fff,
      1196px 1922px #fff,
      1647px 544px #fff,
      788px 1337px #fff,
      257px 632px #fff,
      1413px 414px #fff,
      590px 620px #fff,
      582px 794px #fff,
      1702px 1481px #fff,
      1055px 53px #fff,
      157px 346px #fff,
      50px 1901px #fff,
      1038px 1369px #fff,
      796px 1941px #fff,
      215px 194px #fff,
      1567px 1538px #fff,
      367px 800px #fff,
      1044px 489px #fff,
      1109px 1712px #fff,
      524px 327px #fff,
      525px 1252px #fff,
      1475px 1240px #fff,
      529px 436px #fff,
      795px 834px #fff,
      122px 1371px #fff,
      79px 482px #fff,
      520px 1249px #fff,
      336px 1878px #fff,
      188px 944px #fff,
      325px 1259px #fff,
      1491px 1942px #fff,
      620px 1054px #fff,
      1606px 1153px #fff,
      1448px 502px #fff,
      53px 1381px #fff,
      107px 1670px #fff,
      1380px 618px #fff,
      967px 1557px #fff,
      1116px 1722px #fff,
      1174px 1044px #fff,
      1805px 717px #fff,
      663px 394px #fff,
      1848px 1007px #fff,
      389px 802px #fff,
      49px 392px #fff,
      1650px 852px #fff,
      1678px 1012px #fff,
      335px 1009px #fff,
      1818px 1631px #fff,
      1568px 742px #fff,
      1162px 1991px #fff,
      52px 1190px #fff,
      1401px 928px #fff,
      119px 1549px #fff,
      537px 1529px #fff,
      2px 1709px #fff,
      122px 387px #fff,
      543px 2px #fff,
      27px 1971px #fff,
      507px 1377px #fff,
      1362px 1080px #fff,
      1031px 1544px #fff,
      1631px 1174px #fff,
      1603px 312px #fff,
      1626px 1422px #fff,
      1430px 615px #fff,
      1958px 1431px #fff,
      1946px 1412px #fff,
      1848px 247px #fff,
      984px 1808px #fff,
      1396px 225px #fff,
      319px 717px #fff,
      1252px 875px #fff,
      1619px 156px #fff,
      951px 1971px #fff,
      386px 355px #fff,
      1406px 1151px #fff,
      273px 1538px #fff,
      844px 1570px #fff,
      947px 151px #fff,
      1363px 525px #fff,
      209px 307px #fff,
      1923px 1718px #fff,
      993px 1741px #fff,
      1513px 353px #fff,
      1353px 61px #fff,
      664px 352px #fff,
      1382px 359px #fff,
      1487px 1707px #fff,
      657px 1045px #fff,
      1107px 490px #fff,
      1834px 1176px #fff,
      837px 1438px #fff,
      1947px 448px #fff,
      1196px 333px #fff,
      151px 555px #fff,
      18px 992px #fff,
      458px 748px #fff,
      1801px 890px #fff,
      1093px 1012px #fff,
      315px 1101px #fff,
      194px 323px #fff,
      754px 292px #fff,
      1737px 7px #fff,
      40px 840px #fff,
      1170px 805px #fff,
      176px 1753px #fff,
      805px 1148px #fff,
      1578px 1271px #fff,
      367px 1494px #fff,
      363px 1111px #fff,
      1955px 243px #fff,
      1451px 1093px #fff,
      375px 617px #fff,
      1223px 720px #fff,
      1178px 13px #fff,
      1456px 865px #fff,
      1440px 49px #fff,
      186px 1569px #fff,
      320px 1853px #fff,
      300px 539px #fff,
      1559px 509px #fff,
      1985px 1108px #fff,
      1588px 828px #fff,
      525px 1432px #fff,
      831px 363px #fff,
      141px 281px #fff,
      1319px 402px #fff,
      40px 456px #fff,
      1955px 478px #fff,
      1758px 818px #fff,
      1924px 688px #fff,
      1030px 953px #fff,
      1982px 210px #fff,
      917px 1401px #fff,
      1051px 1837px #fff,
      1045px 463px #fff,
      1744px 573px #fff,
      529px 1530px #fff,
      542px 469px #fff,
      1982px 324px #fff,
      1902px 1422px #fff,
      1968px 782px #fff,
      1666px 1561px #fff,
      955px 304px #fff,
      323px 778px #fff,
      272px 443px #fff,
      485px 581px #fff,
      1353px 1058px #fff,
      1257px 131px #fff,
      434px 98px #fff,
      1587px 1953px #fff,
      1749px 68px #fff,
      1984px 839px #fff,
      1518px 183px #fff,
      1071px 855px #fff,
      1662px 1994px #fff,
      1111px 106px #fff,
      1954px 838px #fff;
  }

  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow:
      1925px 1320px #fff,
      693px 1778px #fff,
      1016px 711px #fff,
      1171px 563px #fff,
      661px 1919px #fff,
      1610px 44px #fff,
      1275px 140px #fff,
      1208px 1802px #fff,
      1473px 1587px #fff,
      11px 1117px #fff,
      853px 1757px #fff,
      1149px 937px #fff,
      1353px 428px #fff,
      270px 279px #fff,
      258px 1404px #fff,
      417px 1188px #fff,
      286px 561px #fff,
      393px 1765px #fff,
      147px 881px #fff,
      666px 1097px #fff,
      1425px 1278px #fff,
      806px 156px #fff,
      1252px 561px #fff,
      218px 52px #fff,
      1371px 1980px #fff,
      171px 745px #fff,
      1424px 89px #fff,
      137px 244px #fff,
      939px 1922px #fff,
      137px 1080px #fff,
      1757px 50px #fff,
      904px 536px #fff,
      1938px 1001px #fff,
      1172px 440px #fff,
      72px 1475px #fff,
      102px 121px #fff,
      804px 1671px #fff,
      1314px 270px #fff,
      440px 1341px #fff,
      1216px 511px #fff,
      1061px 1523px #fff,
      97px 274px #fff,
      704px 1318px #fff,
      52px 1872px #fff,
      1962px 296px #fff,
      111px 289px #fff,
      1157px 1236px #fff,
      1347px 1451px #fff,
      820px 286px #fff,
      1389px 1169px #fff,
      644px 841px #fff,
      1286px 522px #fff,
      955px 659px #fff,
      428px 1805px #fff,
      237px 557px #fff,
      1689px 1058px #fff,
      636px 1882px #fff,
      1349px 1664px #fff,
      1548px 432px #fff,
      1841px 504px #fff,
      302px 252px #fff,
      827px 1765px #fff,
      620px 123px #fff,
      207px 748px #fff,
      1454px 1234px #fff,
      1967px 1790px #fff,
      542px 33px #fff,
      742px 1214px #fff,
      255px 1402px #fff,
      74px 1772px #fff,
      699px 475px #fff,
      980px 1253px #fff,
      534px 1676px #fff,
      909px 202px #fff,
      1498px 1251px #fff,
      1796px 120px #fff,
      1409px 1263px #fff,
      1627px 995px #fff,
      969px 710px #fff,
      1674px 676px #fff,
      1832px 759px #fff,
      1623px 563px #fff,
      251px 1790px #fff,
      96px 1688px #fff,
      886px 239px #fff,
      778px 150px #fff,
      1767px 430px #fff,
      765px 1259px #fff,
      1189px 877px #fff,
      444px 1629px #fff,
      1560px 324px #fff,
      1952px 1097px #fff,
      712px 1173px #fff,
      541px 911px #fff,
      827px 1420px #fff,
      1233px 285px #fff,
      784px 546px #fff,
      645px 285px #fff,
      1273px 1255px #fff,
      1821px 174px #fff,
      221px 1795px #fff,
      1004px 456px #fff,
      1298px 941px #fff,
      274px 387px #fff,
      174px 376px #fff,
      1491px 258px #fff,
      1489px 1946px #fff,
      1134px 1382px #fff,
      1289px 1145px #fff,
      464px 358px #fff,
      1249px 1842px #fff,
      1665px 831px #fff,
      1982px 84px #fff,
      541px 774px #fff,
      1994px 523px #fff,
      762px 1644px #fff,
      1730px 867px #fff,
      1951px 1287px #fff,
      911px 1691px #fff,
      1454px 725px #fff,
      1287px 1940px #fff,
      70px 564px #fff,
      1980px 638px #fff,
      1674px 1774px #fff,
      1720px 116px #fff,
      1747px 182px #fff,
      1040px 450px #fff,
      1795px 375px #fff,
      857px 1471px #fff,
      1326px 1730px #fff,
      915px 274px #fff,
      1224px 358px #fff,
      1808px 60px #fff,
      43px 1870px #fff,
      1810px 1536px #fff,
      1564px 1719px #fff,
      731px 1388px #fff,
      1953px 1967px #fff,
      1744px 1119px #fff,
      794px 1384px #fff,
      959px 714px #fff,
      18px 1932px #fff,
      1358px 1437px #fff,
      355px 939px #fff,
      1355px 1648px #fff,
      608px 719px #fff,
      383px 758px #fff,
      1164px 1681px #fff,
      1045px 253px #fff,
      424px 1279px #fff,
      1899px 359px #fff,
      379px 488px #fff,
      214px 465px #fff,
      179px 905px #fff,
      830px 1993px #fff,
      448px 1077px #fff,
      1880px 1354px #fff,
      1973px 347px #fff,
      745px 1025px #fff,
      788px 1007px #fff,
      1377px 883px #fff,
      6px 290px #fff,
      1312px 407px #fff,
      1398px 622px #fff,
      1405px 339px #fff,
      1198px 1709px #fff,
      988px 1226px #fff,
      87px 1459px #fff,
      1113px 1698px #fff,
      997px 732px #fff,
      708px 331px #fff,
      1876px 1112px #fff,
      1729px 1797px #fff,
      719px 703px #fff,
      1295px 522px #fff,
      758px 1061px #fff,
      1309px 1014px #fff,
      1327px 1365px #fff,
      854px 1317px #fff,
      531px 1001px #fff,
      1751px 1040px #fff,
      1354px 190px #fff,
      800px 1538px #fff,
      88px 1455px #fff,
      668px 39px #fff,
      1379px 41px #fff,
      892px 524px #fff,
      54px 649px #fff,
      1289px 730px #fff,
      727px 488px #fff,
      181px 842px #fff,
      1230px 64px #fff,
      3px 857px #fff,
      292px 1201px #fff,
      1343px 673px #fff,
      1096px 1412px #fff,
      1520px 292px #fff,
      104px 1683px #fff,
      934px 1387px #fff,
      314px 739px #fff;
    animation: animStar 100s linear infinite;
  }
  #stars2:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow:
      1925px 1320px #fff,
      693px 1778px #fff,
      1016px 711px #fff,
      1171px 563px #fff,
      661px 1919px #fff,
      1610px 44px #fff,
      1275px 140px #fff,
      1208px 1802px #fff,
      1473px 1587px #fff,
      11px 1117px #fff,
      853px 1757px #fff,
      1149px 937px #fff,
      1353px 428px #fff,
      270px 279px #fff,
      258px 1404px #fff,
      417px 1188px #fff,
      286px 561px #fff,
      393px 1765px #fff,
      147px 881px #fff,
      666px 1097px #fff,
      1425px 1278px #fff,
      806px 156px #fff,
      1252px 561px #fff,
      218px 52px #fff,
      1371px 1980px #fff,
      171px 745px #fff,
      1424px 89px #fff,
      137px 244px #fff,
      939px 1922px #fff,
      137px 1080px #fff,
      1757px 50px #fff,
      904px 536px #fff,
      1938px 1001px #fff,
      1172px 440px #fff,
      72px 1475px #fff,
      102px 121px #fff,
      804px 1671px #fff,
      1314px 270px #fff,
      440px 1341px #fff,
      1216px 511px #fff,
      1061px 1523px #fff,
      97px 274px #fff,
      704px 1318px #fff,
      52px 1872px #fff,
      1962px 296px #fff,
      111px 289px #fff,
      1157px 1236px #fff,
      1347px 1451px #fff,
      820px 286px #fff,
      1389px 1169px #fff,
      644px 841px #fff,
      1286px 522px #fff,
      955px 659px #fff,
      428px 1805px #fff,
      237px 557px #fff,
      1689px 1058px #fff,
      636px 1882px #fff,
      1349px 1664px #fff,
      1548px 432px #fff,
      1841px 504px #fff,
      302px 252px #fff,
      827px 1765px #fff,
      620px 123px #fff,
      207px 748px #fff,
      1454px 1234px #fff,
      1967px 1790px #fff,
      542px 33px #fff,
      742px 1214px #fff,
      255px 1402px #fff,
      74px 1772px #fff,
      699px 475px #fff,
      980px 1253px #fff,
      534px 1676px #fff,
      909px 202px #fff,
      1498px 1251px #fff,
      1796px 120px #fff,
      1409px 1263px #fff,
      1627px 995px #fff,
      969px 710px #fff,
      1674px 676px #fff,
      1832px 759px #fff,
      1623px 563px #fff,
      251px 1790px #fff,
      96px 1688px #fff,
      886px 239px #fff,
      778px 150px #fff,
      1767px 430px #fff,
      765px 1259px #fff,
      1189px 877px #fff,
      444px 1629px #fff,
      1560px 324px #fff,
      1952px 1097px #fff,
      712px 1173px #fff,
      541px 911px #fff,
      827px 1420px #fff,
      1233px 285px #fff,
      784px 546px #fff,
      645px 285px #fff,
      1273px 1255px #fff,
      1821px 174px #fff,
      221px 1795px #fff,
      1004px 456px #fff,
      1298px 941px #fff,
      274px 387px #fff,
      174px 376px #fff,
      1491px 258px #fff,
      1489px 1946px #fff,
      1134px 1382px #fff,
      1289px 1145px #fff,
      464px 358px #fff,
      1249px 1842px #fff,
      1665px 831px #fff,
      1982px 84px #fff,
      541px 774px #fff,
      1994px 523px #fff,
      762px 1644px #fff,
      1730px 867px #fff,
      1951px 1287px #fff,
      911px 1691px #fff,
      1454px 725px #fff,
      1287px 1940px #fff,
      70px 564px #fff,
      1980px 638px #fff,
      1674px 1774px #fff,
      1720px 116px #fff,
      1747px 182px #fff,
      1040px 450px #fff,
      1795px 375px #fff,
      857px 1471px #fff,
      1326px 1730px #fff,
      915px 274px #fff,
      1224px 358px #fff,
      1808px 60px #fff,
      43px 1870px #fff,
      1810px 1536px #fff,
      1564px 1719px #fff,
      731px 1388px #fff,
      1953px 1967px #fff,
      1744px 1119px #fff,
      794px 1384px #fff,
      959px 714px #fff,
      18px 1932px #fff,
      1358px 1437px #fff,
      355px 939px #fff,
      1355px 1648px #fff,
      608px 719px #fff,
      383px 758px #fff,
      1164px 1681px #fff,
      1045px 253px #fff,
      424px 1279px #fff,
      1899px 359px #fff,
      379px 488px #fff,
      214px 465px #fff,
      179px 905px #fff,
      830px 1993px #fff,
      448px 1077px #fff,
      1880px 1354px #fff,
      1973px 347px #fff,
      745px 1025px #fff,
      788px 1007px #fff,
      1377px 883px #fff,
      6px 290px #fff,
      1312px 407px #fff,
      1398px 622px #fff,
      1405px 339px #fff,
      1198px 1709px #fff,
      988px 1226px #fff,
      87px 1459px #fff,
      1113px 1698px #fff,
      997px 732px #fff,
      708px 331px #fff,
      1876px 1112px #fff,
      1729px 1797px #fff,
      719px 703px #fff,
      1295px 522px #fff,
      758px 1061px #fff,
      1309px 1014px #fff,
      1327px 1365px #fff,
      854px 1317px #fff,
      531px 1001px #fff,
      1751px 1040px #fff,
      1354px 190px #fff,
      800px 1538px #fff,
      88px 1455px #fff,
      668px 39px #fff,
      1379px 41px #fff,
      892px 524px #fff,
      54px 649px #fff,
      1289px 730px #fff,
      727px 488px #fff,
      181px 842px #fff,
      1230px 64px #fff,
      3px 857px #fff,
      292px 1201px #fff,
      1343px 673px #fff,
      1096px 1412px #fff,
      1520px 292px #fff,
      104px 1683px #fff,
      934px 1387px #fff,
      314px 739px #fff;
  }

  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow:
      200px 981px #fff,
      1731px 521px #fff,
      132px 1039px #fff,
      1888px 1547px #fff,
      899px 1226px #fff,
      1887px 580px #fff,
      1548px 1092px #fff,
      1626px 689px #fff,
      254px 1072px #fff,
      1684px 1211px #fff,
      672px 1267px #fff,
      939px 668px #fff,
      1969px 645px #fff,
      1126px 983px #fff,
      457px 568px #fff,
      476px 876px #fff,
      829px 1896px #fff,
      1364px 1846px #fff,
      1507px 1120px #fff,
      936px 1948px #fff,
      1833px 832px #fff,
      1424px 285px #fff,
      1377px 1596px #fff,
      432px 153px #fff,
      1348px 1410px #fff,
      1529px 954px #fff,
      1102px 387px #fff,
      264px 297px #fff,
      811px 977px #fff,
      1931px 673px #fff,
      1734px 978px #fff,
      1772px 1567px #fff,
      1197px 1400px #fff,
      764px 282px #fff,
      1103px 822px #fff,
      872px 1803px #fff,
      1057px 1763px #fff,
      52px 1299px #fff,
      1312px 1236px #fff,
      235px 1082px #fff,
      299px 1086px #fff,
      1017px 1602px #fff,
      1950px 626px #fff,
      1306px 132px #fff,
      1358px 1618px #fff,
      1873px 1718px #fff,
      1447px 940px #fff,
      1888px 1195px #fff,
      1704px 1765px #fff,
      872px 1357px #fff,
      1555px 1120px #fff,
      250px 1415px #fff,
      450px 415px #fff,
      492px 901px #fff,
      170px 1641px #fff,
      56px 1129px #fff,
      627px 1514px #fff,
      1221px 500px #fff,
      324px 1895px #fff,
      1397px 1775px #fff,
      1966px 598px #fff,
      1550px 763px #fff,
      326px 1605px #fff,
      261px 969px #fff,
      890px 281px #fff,
      736px 544px #fff,
      589px 1262px #fff,
      1581px 368px #fff,
      1900px 1132px #fff,
      1914px 585px #fff,
      1864px 1517px #fff,
      241px 217px #fff,
      859px 787px #fff,
      996px 1729px #fff,
      741px 121px #fff,
      418px 414px #fff,
      142px 967px #fff,
      387px 896px #fff,
      703px 562px #fff,
      968px 1136px #fff,
      1682px 332px #fff,
      1287px 846px #fff,
      256px 1427px #fff,
      1885px 432px #fff,
      1739px 1458px #fff,
      345px 1769px #fff,
      1140px 1612px #fff,
      192px 1921px #fff,
      920px 471px #fff,
      834px 881px #fff,
      917px 1803px #fff,
      466px 1266px #fff,
      483px 1108px #fff,
      689px 986px #fff,
      1279px 786px #fff,
      458px 910px #fff,
      1250px 870px #fff,
      785px 1654px #fff,
      1543px 1757px #fff,
      287px 1272px #fff;
    animation: animStar 150s linear infinite;
  }
  #stars3:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow:
      200px 981px #fff,
      1731px 521px #fff,
      132px 1039px #fff,
      1888px 1547px #fff,
      899px 1226px #fff,
      1887px 580px #fff,
      1548px 1092px #fff,
      1626px 689px #fff,
      254px 1072px #fff,
      1684px 1211px #fff,
      672px 1267px #fff,
      939px 668px #fff,
      1969px 645px #fff,
      1126px 983px #fff,
      457px 568px #fff,
      476px 876px #fff,
      829px 1896px #fff,
      1364px 1846px #fff,
      1507px 1120px #fff,
      936px 1948px #fff,
      1833px 832px #fff,
      1424px 285px #fff,
      1377px 1596px #fff,
      432px 153px #fff,
      1348px 1410px #fff,
      1529px 954px #fff,
      1102px 387px #fff,
      264px 297px #fff,
      811px 977px #fff,
      1931px 673px #fff,
      1734px 978px #fff,
      1772px 1567px #fff,
      1197px 1400px #fff,
      764px 282px #fff,
      1103px 822px #fff,
      872px 1803px #fff,
      1057px 1763px #fff,
      52px 1299px #fff,
      1312px 1236px #fff,
      235px 1082px #fff,
      299px 1086px #fff,
      1017px 1602px #fff,
      1950px 626px #fff,
      1306px 132px #fff,
      1358px 1618px #fff,
      1873px 1718px #fff,
      1447px 940px #fff,
      1888px 1195px #fff,
      1704px 1765px #fff,
      872px 1357px #fff,
      1555px 1120px #fff,
      250px 1415px #fff,
      450px 415px #fff,
      492px 901px #fff,
      170px 1641px #fff,
      56px 1129px #fff,
      627px 1514px #fff,
      1221px 500px #fff,
      324px 1895px #fff,
      1397px 1775px #fff,
      1966px 598px #fff,
      1550px 763px #fff,
      326px 1605px #fff,
      261px 969px #fff,
      890px 281px #fff,
      736px 544px #fff,
      589px 1262px #fff,
      1581px 368px #fff,
      1900px 1132px #fff,
      1914px 585px #fff,
      1864px 1517px #fff,
      241px 217px #fff,
      859px 787px #fff,
      996px 1729px #fff,
      741px 121px #fff,
      418px 414px #fff,
      142px 967px #fff,
      387px 896px #fff,
      703px 562px #fff,
      968px 1136px #fff,
      1682px 332px #fff,
      1287px 846px #fff,
      256px 1427px #fff,
      1885px 432px #fff,
      1739px 1458px #fff,
      345px 1769px #fff,
      1140px 1612px #fff,
      192px 1921px #fff,
      920px 471px #fff,
      834px 881px #fff,
      917px 1803px #fff,
      466px 1266px #fff,
      483px 1108px #fff,
      689px 986px #fff,
      1279px 786px #fff,
      458px 910px #fff,
      1250px 870px #fff,
      785px 1654px #fff,
      1543px 1757px #fff,
      287px 1272px #fff;
  }

  #title {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;
    font-family: "lato", sans-serif;
    font-weight: 300;
    font-size: 50px;
    letter-spacing: 10px;
    margin-top: -60px;
    padding-left: 10px;
    opacity: 0;
    transform: translateY(30px);
    animation: introFadeUp 1.2s ease-out forwards;
  }
  #title span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }

  @keyframes introFadeUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }`,pu=[{label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Achievements",path:"/achievements"},{label:"Projects",path:"/projects"},{label:"Products",path:"/products"},{label:"Contact",path:"/contact"}],uu=[{label:"R&D Division",path:"/rnd"},{label:"Investor Info",path:"/investor"},{label:"Careers",path:"/careers"},{label:"Privacy Policy",path:"/privacy"},{label:"Terms & Conditions",path:"/terms"}];function N5(){const[e,t]=b.useState(!1),[n,r]=b.useState(!1),[s,o]=b.useState(!1),i=En();return b.useEffect(()=>{const l=()=>t(window.scrollY>20);return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),b.useEffect(()=>{r(!1),o(!1)},[i]),f.jsxs("nav",{className:`navbar ${e?"navbar--scrolled":""}`,style:{position:"relative",overflow:"hidden"},children:[f.jsx(Fd,{}),f.jsxs("div",{className:"container navbar__inner",style:{position:"relative",zIndex:1},children:[f.jsxs(be,{to:"/",className:"navbar__brand",children:[f.jsx("img",{src:"/logo.jpeg",alt:"M²RL TechnologieS Logo",className:"navbar__logo"}),f.jsxs("div",{className:"navbar__brand-text",children:[f.jsx("span",{className:"navbar__brand-name",children:"M²RL TechnologieS"}),f.jsx("span",{className:"navbar__brand-tagline",children:"Smart Sensor Innovation"})]})]}),f.jsxs("ul",{className:"navbar__links",children:[pu.map(({label:l,path:a})=>f.jsx("li",{children:f.jsx(ni,{to:a,end:a==="/",className:({isActive:p})=>`navbar__link ${p?"navbar__link--active":""}`,children:l})},a)),f.jsxs("li",{className:"navbar__dropdown-wrap",children:[f.jsx("button",{className:"navbar__link navbar__dropdown-btn",onClick:()=>o(!s),onBlur:()=>setTimeout(()=>o(!1),150),children:"More ▾"}),s&&f.jsx("ul",{className:"navbar__dropdown",children:uu.map(({label:l,path:a})=>f.jsx("li",{children:f.jsx(ni,{to:a,className:"navbar__dropdown-link",children:l})},a))})]})]}),f.jsxs("button",{className:`navbar__hamburger ${n?"navbar__hamburger--open":""}`,onClick:()=>r(!n),"aria-label":"Toggle menu",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]}),n&&f.jsxs("div",{className:"navbar__mobile",style:{position:"relative",zIndex:1},children:[f.jsx("ul",{children:[...pu,...uu].map(({label:l,path:a})=>f.jsx("li",{children:f.jsx(ni,{to:a,end:a==="/",className:({isActive:p})=>`navbar__mobile-link ${p?"navbar__mobile-link--active":""}`,children:l})},a))}),f.jsx(be,{to:"/contact",className:"btn btn-primary",style:{marginTop:"16px",display:"inline-flex",width:"100%",justifyContent:"center"},children:"Get in Touch"})]})]})}var Bd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cu=Ce.createContext&&Ce.createContext(Bd),k5=["attr","size","title"];function b5(e,t){if(e==null)return{};var n,r,s=C5(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function C5(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uo.apply(null,arguments)}function du(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Wo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?du(Object(n),!0).forEach(function(r){E5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):du(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function E5(e,t,n){return(t=z5(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z5(e){var t=M5(e,"string");return typeof t=="symbol"?t:t+""}function M5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ud(e){return e&&e.map((t,n)=>Ce.createElement(t.tag,Wo({key:n},t.attr),Ud(t.child)))}function R5(e){return t=>Ce.createElement(P5,Uo({attr:Wo({},e.attr)},t),Ud(e.child))}function P5(e){var t=n=>{var{attr:r,size:s,title:o}=e,i=b5(e,k5),l=s||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Ce.createElement("svg",Uo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:a,style:Wo(Wo({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&Ce.createElement("title",null,o),e.children)};return cu!==void 0?Ce.createElement(cu.Consumer,null,n=>t(n)):t(Bd)}function Wd(e){return R5({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}const T5=[{label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Products",path:"/products"},{label:"R&D Division",path:"/rnd"},{label:"Achievements",path:"/achievements"},{label:"Investor Info",path:"/investor"},{label:"Careers",path:"/careers"},{label:"Contact",path:"/contact"}],I5=[{label:"Privacy Policy",path:"/privacy"},{label:"Terms & Conditions",path:"/terms"}],O5=[{Icon:ud,label:"YouTube",href:"https://www.youtube.com/@M2RLTechnologieS",color:"#ff0000",bg:"rgba(255,0,0,0.1)"},{Icon:rd,label:"Facebook",href:"https://www.facebook.com/profile.php?id=61584367014521",color:"#1877f2",bg:"rgba(24,119,242,0.1)"},{Icon:sd,label:"Instagram",href:"https://www.instagram.com/m2rl_technologies_",color:"#e1306c",bg:"rgba(225,48,108,0.1)"},{Icon:od,label:"LinkedIn",href:"https://www.linkedin.com/in/m²rl-t-bbb405290",color:"#0a66c2",bg:"rgba(10,102,194,0.1)"},{Icon:ad,label:"X",href:"https://x.com/MRLTechnologieS",color:"#000000",bg:"rgba(221, 221, 221, 0.1)  "},{Icon:Wd,label:"Whatsapp",href:"https://wa.me/917530018514",color:"green",bg:"rgba(0,255,0,0.1)"}];function L5(){return f.jsxs("footer",{style:{background:"linear-gradient(180deg,#040e20 0%,#020b18 100%)",color:"#fff",position:"relative",overflow:"hidden"},children:[f.jsx("div",{style:{height:1,background:"linear-gradient(90deg,transparent,rgba(26,111,255,0.4),rgba(249,115,22,0.3),transparent)"}}),f.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse at 20% 0%, rgba(26,111,255,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(249,115,22,0.05) 0%, transparent 50%)"}}),f.jsxs("div",{className:"container",style:{position:"relative",zIndex:1,paddingTop:64,paddingBottom:32},children:[f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"48px 40px",marginBottom:56},children:[f.jsxs("div",{style:{gridColumn:"span 1"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:18},children:[f.jsx("img",{src:"/logo.jpeg",alt:"M²RL",style:{width:44,height:44,borderRadius:10,border:"1.5px solid rgba(26,111,255,0.4)",boxShadow:"0 0 16px rgba(26,111,255,0.25)"}}),f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:"Poppins",fontWeight:700,fontSize:"15px",lineHeight:1.2},children:"M²RL TechnologieS"}),f.jsx("div",{style:{fontSize:"10.5px",color:"rgba(255,255,255,0.38)",letterSpacing:"0.3px"},children:"Smart Sensor Innovation"})]})]}),f.jsx("p",{style:{fontSize:"13.5px",color:"rgba(255,255,255,0.48)",lineHeight:1.8,marginBottom:20},children:"An emerging sensor manufacturing & R&D startup from Tamil Nadu, building affordable and reliable sensor solutions for India's future."}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[f.jsxs("span",{className:"badge badge-saffron",style:{alignSelf:"flex-start",fontSize:"11px"},children:[f.jsx(_n,{size:11})," MSME Registered"]}),f.jsxs("span",{className:"badge badge-green",style:{alignSelf:"flex-start",fontSize:"11px"},children:[f.jsx(dr,{size:11})," Startup India"]}),f.jsxs("span",{className:"badge badge-blue",style:{alignSelf:"flex-start",fontSize:"11px"},children:[f.jsx(wn,{size:11})," Made in India"]})]})]}),f.jsxs("div",{children:[f.jsx("h4",{style:{fontFamily:"Poppins",fontWeight:700,fontSize:"12px",textTransform:"uppercase",letterSpacing:"2px",color:"rgba(255,255,255,0.35)",marginBottom:18},children:"Quick Links"}),f.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:10},children:T5.map(({label:e,path:t})=>f.jsx("li",{children:f.jsx(be,{to:t,style:{fontSize:"14px",color:"rgba(255,255,255,0.62)",display:"flex",alignItems:"center",gap:6,transition:"color 0.2s",paddingBottom:1},onMouseEnter:n=>n.target.style.color="#fff",onMouseLeave:n=>n.target.style.color="rgba(255,255,255,0.62)",children:e})},t))})]}),f.jsxs("div",{children:[f.jsx("h4",{style:{fontFamily:"Poppins",fontWeight:700,fontSize:"12px",textTransform:"uppercase",letterSpacing:"2px",color:"rgba(255,255,255,0.35)",marginBottom:18},children:"Contact"}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[{Icon:va,label:"Email",value:"mrltechnologies408@gmail.com",href:"mailto:mrltechnologies408@gmail.com",color:"#1a6fff"},{Icon:cr,label:"Office",value:"Perattukkottai, Sivaganga, Tamil Nadu – 630702",color:"#f97316"}].map(({Icon:e,label:t,value:n,href:r,color:s})=>f.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start"},children:[f.jsx("div",{style:{width:34,height:34,borderRadius:9,background:`${s}14`,border:`1px solid ${s}25`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(e,{size:15,color:s})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"10px",color:"rgba(255,255,255,0.33)",textTransform:"uppercase",letterSpacing:"1px",fontWeight:600,marginBottom:2},children:t}),r?f.jsx("a",{href:r,style:{fontSize:"13px",color:"rgba(255,255,255,0.68)",lineHeight:1.45},children:n}):f.jsx("p",{style:{fontSize:"13px",color:"rgba(255,255,255,0.55)",lineHeight:1.45},children:n})]})]},t))})]}),f.jsxs("div",{children:[f.jsx("h4",{style:{fontFamily:"Poppins",fontWeight:700,fontSize:"12px",textTransform:"uppercase",letterSpacing:"2px",color:"rgba(255,255,255,0.35)",marginBottom:18},children:"Follow Us"}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:O5.map(({Icon:e,label:t,href:n,color:r,bg:s})=>f.jsxs("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",borderRadius:10,background:s,border:`1px solid ${r}25`,transition:"all 0.2s"},onMouseEnter:o=>{o.currentTarget.style.transform="translateX(4px)",o.currentTarget.style.borderColor=`${r}60`},onMouseLeave:o=>{o.currentTarget.style.transform="translateX(0)",o.currentTarget.style.borderColor=`${r}25`},children:[f.jsx(e,{size:16,color:r}),f.jsx("span",{style:{fontSize:"13.5px",color:"rgba(255,255,255,0.7)",fontWeight:500},children:t}),f.jsx(dm,{size:11,color:"rgba(255,255,255,0.25)",style:{marginLeft:"auto"}})]},t))})]})]}),f.jsx("div",{style:{height:1,background:"rgba(255,255,255,0.06)",marginBottom:24}}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12},children:[f.jsxs("p",{style:{fontSize:"12.5px",color:"rgba(255,255,255,0.28)"},children:["© ",new Date().getFullYear()," M²RL TechnologieS. All rights reserved."]}),f.jsx("div",{style:{display:"flex",gap:20},children:I5.map(({label:e,path:t})=>f.jsx(be,{to:t,style:{fontSize:"12px",color:"rgba(255,255,255,0.3)",transition:"color 0.2s"},onMouseEnter:n=>n.target.style.color="rgba(255,255,255,0.7)",onMouseLeave:n=>n.target.style.color="rgba(255,255,255,0.3)",children:e},t))})]})]})]})}function A5(){const{pathname:e}=En();return b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]),null}function Hd(e,t){return function(){return e.apply(t,arguments)}}const{toString:$5}=Object.prototype,{getPrototypeOf:ba}=Object,{iterator:Sf,toStringTag:Vd}=Symbol,Nf=(e=>t=>{const n=$5.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pt=e=>(e=e.toLowerCase(),t=>Nf(t)===e),kf=e=>t=>typeof t===e,{isArray:hr}=Array,ir=kf("undefined");function ys(e){return e!==null&&!ir(e)&&e.constructor!==null&&!ir(e.constructor)&&Le(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const qd=pt("ArrayBuffer");function D5(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&qd(e.buffer),t}const F5=kf("string"),Le=kf("function"),Yd=kf("number"),vs=e=>e!==null&&typeof e=="object",B5=e=>e===!0||e===!1,lo=e=>{if(Nf(e)!=="object")return!1;const t=ba(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Vd in e)&&!(Sf in e)},U5=e=>{if(!vs(e)||ys(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},W5=pt("Date"),H5=pt("File"),V5=pt("Blob"),q5=pt("FileList"),Y5=e=>vs(e)&&Le(e.pipe),Q5=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Le(e.append)&&((t=Nf(e))==="formdata"||t==="object"&&Le(e.toString)&&e.toString()==="[object FormData]"))},K5=pt("URLSearchParams"),[G5,X5,J5,Z5]=["ReadableStream","Request","Response","Headers"].map(pt),e3=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _s(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),hr(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(ys(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Qd(e,t){if(ys(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const an=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Kd=e=>!ir(e)&&e!==an;function yl(){const{caseless:e,skipUndefined:t}=Kd(this)&&this||{},n={},r=(s,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const i=e&&Qd(n,o)||o;lo(n[i])&&lo(s)?n[i]=yl(n[i],s):lo(s)?n[i]=yl({},s):hr(s)?n[i]=s.slice():(!t||!ir(s))&&(n[i]=s)};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&_s(arguments[s],r);return n}const t3=(e,t,n,{allOwnKeys:r}={})=>(_s(t,(s,o)=>{n&&Le(s)?Object.defineProperty(e,o,{value:Hd(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),n3=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),r3=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},s3=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ba(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},o3=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},f3=e=>{if(!e)return null;if(hr(e))return e;let t=e.length;if(!Yd(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},i3=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ba(Uint8Array)),l3=(e,t)=>{const r=(e&&e[Sf]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},a3=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},p3=pt("HTMLFormElement"),u3=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),xu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),c3=pt("RegExp"),Gd=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_s(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},d3=e=>{Gd(e,(t,n)=>{if(Le(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Le(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},x3=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return hr(e)?r(e):r(String(e).split(t)),n},h3=()=>{},m3=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function g3(e){return!!(e&&Le(e.append)&&e[Vd]==="FormData"&&e[Sf])}const y3=e=>{const t=new Array(10),n=(r,s)=>{if(vs(r)){if(t.indexOf(r)>=0)return;if(ys(r))return r;if(!("toJSON"in r)){t[s]=r;const o=hr(r)?[]:{};return _s(r,(i,l)=>{const a=n(i,s+1);!ir(a)&&(o[l]=a)}),t[s]=void 0,o}}return r};return n(e,0)},v3=pt("AsyncFunction"),_3=e=>e&&(vs(e)||Le(e))&&Le(e.then)&&Le(e.catch),Xd=((e,t)=>e?setImmediate:t?((n,r)=>(an.addEventListener("message",({source:s,data:o})=>{s===an&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),an.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Le(an.postMessage)),j3=typeof queueMicrotask<"u"?queueMicrotask.bind(an):typeof process<"u"&&process.nextTick||Xd,w3=e=>e!=null&&Le(e[Sf]),j={isArray:hr,isArrayBuffer:qd,isBuffer:ys,isFormData:Q5,isArrayBufferView:D5,isString:F5,isNumber:Yd,isBoolean:B5,isObject:vs,isPlainObject:lo,isEmptyObject:U5,isReadableStream:G5,isRequest:X5,isResponse:J5,isHeaders:Z5,isUndefined:ir,isDate:W5,isFile:H5,isBlob:V5,isRegExp:c3,isFunction:Le,isStream:Y5,isURLSearchParams:K5,isTypedArray:i3,isFileList:q5,forEach:_s,merge:yl,extend:t3,trim:e3,stripBOM:n3,inherits:r3,toFlatObject:s3,kindOf:Nf,kindOfTest:pt,endsWith:o3,toArray:f3,forEachEntry:l3,matchAll:a3,isHTMLForm:p3,hasOwnProperty:xu,hasOwnProp:xu,reduceDescriptors:Gd,freezeMethods:d3,toObjectSet:x3,toCamelCase:u3,noop:h3,toFiniteNumber:m3,findKey:Qd,global:an,isContextDefined:Kd,isSpecCompliantForm:g3,toJSONObject:y3,isAsyncFn:v3,isThenable:_3,setImmediate:Xd,asap:j3,isIterable:w3};let O=class Jd extends Error{static from(t,n,r,s,o,i){const l=new Jd(t.message,n||t.code,r,s,o);return l.cause=t,l.name=t.name,i&&Object.assign(l,i),l}constructor(t,n,r,s,o){super(t),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),s&&(this.request=s),o&&(this.response=o,this.status=o.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.status}}};O.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";O.ERR_BAD_OPTION="ERR_BAD_OPTION";O.ECONNABORTED="ECONNABORTED";O.ETIMEDOUT="ETIMEDOUT";O.ERR_NETWORK="ERR_NETWORK";O.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";O.ERR_DEPRECATED="ERR_DEPRECATED";O.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";O.ERR_BAD_REQUEST="ERR_BAD_REQUEST";O.ERR_CANCELED="ERR_CANCELED";O.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";O.ERR_INVALID_URL="ERR_INVALID_URL";const S3=null;function vl(e){return j.isPlainObject(e)||j.isArray(e)}function Zd(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function hu(e,t,n){return e?e.concat(t).map(function(s,o){return s=Zd(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function N3(e){return j.isArray(e)&&!e.some(vl)}const k3=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function bf(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,v){return!j.isUndefined(v[y])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(s))throw new TypeError("visitor must be a function");function p(m){if(m===null)return"";if(j.isDate(m))return m.toISOString();if(j.isBoolean(m))return m.toString();if(!a&&j.isBlob(m))throw new O("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(m)||j.isTypedArray(m)?a&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,y,v){let x=m;if(m&&!v&&typeof m=="object"){if(j.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(j.isArray(m)&&N3(m)||(j.isFileList(m)||j.endsWith(y,"[]"))&&(x=j.toArray(m)))return y=Zd(y),x.forEach(function(h,_){!(j.isUndefined(h)||h===null)&&t.append(i===!0?hu([y],_,o):i===null?y:y+"[]",p(h))}),!1}return vl(m)?!0:(t.append(hu(v,y,o),p(m)),!1)}const d=[],g=Object.assign(k3,{defaultVisitor:u,convertValue:p,isVisitable:vl});function w(m,y){if(!j.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(m),j.forEach(m,function(x,c){(!(j.isUndefined(x)||x===null)&&s.call(t,x,j.isString(c)?c.trim():c,y,g))===!0&&w(x,y?y.concat(c):[c])}),d.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return w(e),t}function mu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ca(e,t){this._pairs=[],e&&bf(e,this,t)}const ex=Ca.prototype;ex.append=function(t,n){this._pairs.push([t,n])};ex.toString=function(t){const n=t?function(r){return t.call(this,r,mu)}:mu;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function b3(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function tx(e,t,n){if(!t)return e;const r=n&&n.encode||b3,s=j.isFunction(n)?{serialize:n}:n,o=s&&s.serialize;let i;if(o?i=o(t,s):i=j.isURLSearchParams(t)?t.toString():new Ca(t,s).toString(r),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class gu{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ea={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},C3=typeof URLSearchParams<"u"?URLSearchParams:Ca,E3=typeof FormData<"u"?FormData:null,z3=typeof Blob<"u"?Blob:null,M3={isBrowser:!0,classes:{URLSearchParams:C3,FormData:E3,Blob:z3},protocols:["http","https","file","blob","url","data"]},za=typeof window<"u"&&typeof document<"u",_l=typeof navigator=="object"&&navigator||void 0,R3=za&&(!_l||["ReactNative","NativeScript","NS"].indexOf(_l.product)<0),P3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",T3=za&&window.location.href||"http://localhost",I3=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:za,hasStandardBrowserEnv:R3,hasStandardBrowserWebWorkerEnv:P3,navigator:_l,origin:T3},Symbol.toStringTag,{value:"Module"})),Se={...I3,...M3};function O3(e,t){return bf(e,new Se.classes.URLSearchParams,{visitor:function(n,r,s,o){return Se.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function L3(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function A3(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function nx(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const l=Number.isFinite(+i),a=o>=n.length;return i=!i&&j.isArray(s)?s.length:i,a?(j.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!j.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&j.isArray(s[i])&&(s[i]=A3(s[i])),!l)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,s)=>{t(L3(r),s,n,0)}),n}return null}function $3(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const js={transitional:Ea,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=j.isObject(t);if(o&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return s?JSON.stringify(nx(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t)||j.isReadableStream(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return O3(t,this.formSerializer).toString();if((l=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return bf(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),$3(t)):t}],transformResponse:[function(t){const n=this.transitional||js.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(j.isResponse(t)||j.isReadableStream(t))return t;if(t&&j.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t,this.parseReviver)}catch(l){if(i)throw l.name==="SyntaxError"?O.from(l,O.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Se.classes.FormData,Blob:Se.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],e=>{js.headers[e]={}});const D3=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),F3=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&D3[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},yu=Symbol("internals");function kr(e){return e&&String(e).trim().toLowerCase()}function ao(e){return e===!1||e==null?e:j.isArray(e)?e.map(ao):String(e)}function B3(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const U3=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ai(e,t,n,r,s){if(j.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function W3(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function H3(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let Ae=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,a,p){const u=kr(a);if(!u)throw new Error("header name must be a non-empty string");const d=j.findKey(s,u);(!d||s[d]===void 0||p===!0||p===void 0&&s[d]!==!1)&&(s[d||a]=ao(l))}const i=(l,a)=>j.forEach(l,(p,u)=>o(p,u,a));if(j.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(j.isString(t)&&(t=t.trim())&&!U3(t))i(F3(t),n);else if(j.isObject(t)&&j.isIterable(t)){let l={},a,p;for(const u of t){if(!j.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[p=u[0]]=(a=l[p])?j.isArray(a)?[...a,u[1]]:[a,u[1]]:u[1]}i(l,n)}else t!=null&&o(n,t,r);return this}get(t,n){if(t=kr(t),t){const r=j.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return B3(s);if(j.isFunction(n))return n.call(this,s,r);if(j.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=kr(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ai(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=kr(i),i){const l=j.findKey(r,i);l&&(!n||ai(r,r[l],l,n))&&(delete r[l],s=!0)}}return j.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ai(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return j.forEach(this,(s,o)=>{const i=j.findKey(r,o);if(i){n[i]=ao(s),delete n[o];return}const l=t?W3(o):String(o).trim();l!==o&&delete n[o],n[l]=ao(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[yu]=this[yu]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=kr(i);r[l]||(H3(s,i),r[l]=!0)}return j.isArray(t)?t.forEach(o):o(t),this}};Ae.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(Ae.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});j.freezeMethods(Ae);function pi(e,t){const n=this||js,r=t||n,s=Ae.from(r.headers);let o=r.data;return j.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function rx(e){return!!(e&&e.__CANCEL__)}let ws=class extends O{constructor(t,n,r){super(t??"canceled",O.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function sx(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new O("Request failed with status code "+n.status,[O.ERR_BAD_REQUEST,O.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function V3(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function q3(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(a){const p=Date.now(),u=r[o];i||(i=p),n[s]=a,r[s]=p;let d=o,g=0;for(;d!==s;)g+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),p-i<t)return;const w=u&&p-u;return w?Math.round(g*1e3/w):void 0}}function Y3(e,t){let n=0,r=1e3/t,s,o;const i=(p,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e(...p)};return[(...p)=>{const u=Date.now(),d=u-n;d>=r?i(p,u):(s=p,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const Ho=(e,t,n=3)=>{let r=0;const s=q3(50,250);return Y3(o=>{const i=o.loaded,l=o.lengthComputable?o.total:void 0,a=i-r,p=s(a),u=i<=l;r=i;const d={loaded:i,total:l,progress:l?i/l:void 0,bytes:a,rate:p||void 0,estimated:p&&l&&u?(l-i)/p:void 0,event:o,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(d)},n)},vu=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},_u=e=>(...t)=>j.asap(()=>e(...t)),Q3=Se.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Se.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Se.origin),Se.navigator&&/(msie|trident)/i.test(Se.navigator.userAgent)):()=>!0,K3=Se.hasStandardBrowserEnv?{write(e,t,n,r,s,o,i){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];j.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),j.isString(r)&&l.push(`path=${r}`),j.isString(s)&&l.push(`domain=${s}`),o===!0&&l.push("secure"),j.isString(i)&&l.push(`SameSite=${i}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function G3(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function X3(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ox(e,t,n){let r=!G3(t);return e&&(r||n==!1)?X3(e,t):t}const ju=e=>e instanceof Ae?{...e}:e;function Nn(e,t){t=t||{};const n={};function r(p,u,d,g){return j.isPlainObject(p)&&j.isPlainObject(u)?j.merge.call({caseless:g},p,u):j.isPlainObject(u)?j.merge({},u):j.isArray(u)?u.slice():u}function s(p,u,d,g){if(j.isUndefined(u)){if(!j.isUndefined(p))return r(void 0,p,d,g)}else return r(p,u,d,g)}function o(p,u){if(!j.isUndefined(u))return r(void 0,u)}function i(p,u){if(j.isUndefined(u)){if(!j.isUndefined(p))return r(void 0,p)}else return r(void 0,u)}function l(p,u,d){if(d in t)return r(p,u);if(d in e)return r(void 0,p)}const a={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(p,u,d)=>s(ju(p),ju(u),d,!0)};return j.forEach(Object.keys({...e,...t}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=j.hasOwnProp(a,u)?a[u]:s,g=d(e[u],t[u],u);j.isUndefined(g)&&d!==l||(n[u]=g)}),n}const fx=e=>{const t=Nn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:l}=t;if(t.headers=i=Ae.from(i),t.url=tx(ox(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&i.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),j.isFormData(n)){if(Se.hasStandardBrowserEnv||Se.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(j.isFunction(n.getHeaders)){const a=n.getHeaders(),p=["content-type","content-length"];Object.entries(a).forEach(([u,d])=>{p.includes(u.toLowerCase())&&i.set(u,d)})}}if(Se.hasStandardBrowserEnv&&(r&&j.isFunction(r)&&(r=r(t)),r||r!==!1&&Q3(t.url))){const a=s&&o&&K3.read(o);a&&i.set(s,a)}return t},J3=typeof XMLHttpRequest<"u",Z3=J3&&function(e){return new Promise(function(n,r){const s=fx(e);let o=s.data;const i=Ae.from(s.headers).normalize();let{responseType:l,onUploadProgress:a,onDownloadProgress:p}=s,u,d,g,w,m;function y(){w&&w(),m&&m(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let v=new XMLHttpRequest;v.open(s.method.toUpperCase(),s.url,!0),v.timeout=s.timeout;function x(){if(!v)return;const h=Ae.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),N={data:!l||l==="text"||l==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:h,config:e,request:v};sx(function(S){n(S),y()},function(S){r(S),y()},N),v=null}"onloadend"in v?v.onloadend=x:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(x)},v.onabort=function(){v&&(r(new O("Request aborted",O.ECONNABORTED,e,v)),v=null)},v.onerror=function(_){const N=_&&_.message?_.message:"Network Error",E=new O(N,O.ERR_NETWORK,e,v);E.event=_||null,r(E),v=null},v.ontimeout=function(){let _=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const N=s.transitional||Ea;s.timeoutErrorMessage&&(_=s.timeoutErrorMessage),r(new O(_,N.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,e,v)),v=null},o===void 0&&i.setContentType(null),"setRequestHeader"in v&&j.forEach(i.toJSON(),function(_,N){v.setRequestHeader(N,_)}),j.isUndefined(s.withCredentials)||(v.withCredentials=!!s.withCredentials),l&&l!=="json"&&(v.responseType=s.responseType),p&&([g,m]=Ho(p,!0),v.addEventListener("progress",g)),a&&v.upload&&([d,w]=Ho(a),v.upload.addEventListener("progress",d),v.upload.addEventListener("loadend",w)),(s.cancelToken||s.signal)&&(u=h=>{v&&(r(!h||h.type?new ws(null,e,v):h),v.abort(),v=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const c=V3(s.url);if(c&&Se.protocols.indexOf(c)===-1){r(new O("Unsupported protocol "+c+":",O.ERR_BAD_REQUEST,e));return}v.send(o||null)})},e4=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(p){if(!s){s=!0,l();const u=p instanceof Error?p:this.reason;r.abort(u instanceof O?u:new ws(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new O(`timeout of ${t}ms exceeded`,O.ETIMEDOUT))},t);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(p=>{p.unsubscribe?p.unsubscribe(o):p.removeEventListener("abort",o)}),e=null)};e.forEach(p=>p.addEventListener("abort",o));const{signal:a}=r;return a.unsubscribe=()=>j.asap(l),a}},t4=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},n4=async function*(e,t){for await(const n of r4(e))yield*t4(n,t)},r4=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},wu=(e,t,n,r)=>{const s=n4(e,t);let o=0,i,l=a=>{i||(i=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:p,value:u}=await s.next();if(p){l(),a.close();return}let d=u.byteLength;if(n){let g=o+=d;n(g)}a.enqueue(new Uint8Array(u))}catch(p){throw l(p),p}},cancel(a){return l(a),s.return()}},{highWaterMark:2})},Su=64*1024,{isFunction:Us}=j,s4=(({Request:e,Response:t})=>({Request:e,Response:t}))(j.global),{ReadableStream:Nu,TextEncoder:ku}=j.global,bu=(e,...t)=>{try{return!!e(...t)}catch{return!1}},o4=e=>{e=j.merge.call({skipUndefined:!0},s4,e);const{fetch:t,Request:n,Response:r}=e,s=t?Us(t):typeof fetch=="function",o=Us(n),i=Us(r);if(!s)return!1;const l=s&&Us(Nu),a=s&&(typeof ku=="function"?(m=>y=>m.encode(y))(new ku):async m=>new Uint8Array(await new n(m).arrayBuffer())),p=o&&l&&bu(()=>{let m=!1;const y=new n(Se.origin,{body:new Nu,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return m&&!y}),u=i&&l&&bu(()=>j.isReadableStream(new r("").body)),d={stream:u&&(m=>m.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!d[m]&&(d[m]=(y,v)=>{let x=y&&y[m];if(x)return x.call(y);throw new O(`Response type '${m}' is not supported`,O.ERR_NOT_SUPPORT,v)})});const g=async m=>{if(m==null)return 0;if(j.isBlob(m))return m.size;if(j.isSpecCompliantForm(m))return(await new n(Se.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(j.isArrayBufferView(m)||j.isArrayBuffer(m))return m.byteLength;if(j.isURLSearchParams(m)&&(m=m+""),j.isString(m))return(await a(m)).byteLength},w=async(m,y)=>{const v=j.toFiniteNumber(m.getContentLength());return v??g(y)};return async m=>{let{url:y,method:v,data:x,signal:c,cancelToken:h,timeout:_,onDownloadProgress:N,onUploadProgress:E,responseType:S,headers:k,withCredentials:F="same-origin",fetchOptions:I}=fx(m),W=t||fetch;S=S?(S+"").toLowerCase():"text";let ve=e4([c,h&&h.toAbortSignal()],_),V=null;const pe=ve&&ve.unsubscribe&&(()=>{ve.unsubscribe()});let ut;try{if(E&&p&&v!=="get"&&v!=="head"&&(ut=await w(k,x))!==0){let $=new n(y,{method:"POST",body:x,duplex:"half"}),A;if(j.isFormData(x)&&(A=$.headers.get("content-type"))&&k.setContentType(A),$.body){const[Z,q]=vu(ut,Ho(_u(E)));x=wu($.body,Su,Z,q)}}j.isString(F)||(F=F?"include":"omit");const J=o&&"credentials"in n.prototype,ct={...I,signal:ve,method:v.toUpperCase(),headers:k.normalize().toJSON(),body:x,duplex:"half",credentials:J?F:void 0};V=o&&new n(y,ct);let z=await(o?W(V,I):W(y,ct));const R=u&&(S==="stream"||S==="response");if(u&&(N||R&&pe)){const $={};["status","statusText","headers"].forEach(ee=>{$[ee]=z[ee]});const A=j.toFiniteNumber(z.headers.get("content-length")),[Z,q]=N&&vu(A,Ho(_u(N),!0))||[];z=new r(wu(z.body,Su,Z,()=>{q&&q(),pe&&pe()}),$)}S=S||"text";let P=await d[j.findKey(d,S)||"text"](z,m);return!R&&pe&&pe(),await new Promise(($,A)=>{sx($,A,{data:P,headers:Ae.from(z.headers),status:z.status,statusText:z.statusText,config:m,request:V})})}catch(J){throw pe&&pe(),J&&J.name==="TypeError"&&/Load failed|fetch/i.test(J.message)?Object.assign(new O("Network Error",O.ERR_NETWORK,m,V,J&&J.response),{cause:J.cause||J}):O.from(J,J&&J.code,m,V,J&&J.response)}}},f4=new Map,ix=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:s}=t,o=[r,s,n];let i=o.length,l=i,a,p,u=f4;for(;l--;)a=o[l],p=u.get(a),p===void 0&&u.set(a,p=l?new Map:o4(t)),u=p;return p};ix();const Ma={http:S3,xhr:Z3,fetch:{get:ix}};j.forEach(Ma,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Cu=e=>`- ${e}`,i4=e=>j.isFunction(e)||e===null||e===!1;function l4(e,t){e=j.isArray(e)?e:[e];const{length:n}=e;let r,s;const o={};for(let i=0;i<n;i++){r=e[i];let l;if(s=r,!i4(r)&&(s=Ma[(l=String(r)).toLowerCase()],s===void 0))throw new O(`Unknown adapter '${l}'`);if(s&&(j.isFunction(s)||(s=s.get(t))))break;o[l||"#"+i]=s}if(!s){const i=Object.entries(o).map(([a,p])=>`adapter ${a} `+(p===!1?"is not supported by the environment":"is not available in the build"));let l=n?i.length>1?`since :
`+i.map(Cu).join(`
`):" "+Cu(i[0]):"as no adapter specified";throw new O("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return s}const lx={getAdapter:l4,adapters:Ma};function ui(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ws(null,e)}function Eu(e){return ui(e),e.headers=Ae.from(e.headers),e.data=pi.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),lx.getAdapter(e.adapter||js.adapter,e)(e).then(function(r){return ui(e),r.data=pi.call(e,e.transformResponse,r),r.headers=Ae.from(r.headers),r},function(r){return rx(r)||(ui(e),r&&r.response&&(r.response.data=pi.call(e,e.transformResponse,r.response),r.response.headers=Ae.from(r.response.headers))),Promise.reject(r)})}const ax="1.13.5",Cf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Cf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const zu={};Cf.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ax+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new O(s(i," has been removed"+(n?" in "+n:"")),O.ERR_DEPRECATED);return n&&!zu[i]&&(zu[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};Cf.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function a4(e,t,n){if(typeof e!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],a=l===void 0||i(l,o,e);if(a!==!0)throw new O("option "+o+" must be "+a,O.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new O("Unknown option "+o,O.ERR_BAD_OPTION)}}const po={assertOptions:a4,validators:Cf},qe=po.validators;let xn=class{constructor(t){this.defaults=t||{},this.interceptors={request:new gu,response:new gu}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Nn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&po.assertOptions(r,{silentJSONParsing:qe.transitional(qe.boolean),forcedJSONParsing:qe.transitional(qe.boolean),clarifyTimeoutError:qe.transitional(qe.boolean),legacyInterceptorReqResOrdering:qe.transitional(qe.boolean)},!1),s!=null&&(j.isFunction(s)?n.paramsSerializer={serialize:s}:po.assertOptions(s,{encode:qe.function,serialize:qe.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),po.assertOptions(n,{baseUrl:qe.spelling("baseURL"),withXsrfToken:qe.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&j.merge(o.common,o[n.method]);o&&j.forEach(["delete","get","head","post","put","patch","common"],m=>{delete o[m]}),n.headers=Ae.concat(i,o);const l=[];let a=!0;this.interceptors.request.forEach(function(y){if(typeof y.runWhen=="function"&&y.runWhen(n)===!1)return;a=a&&y.synchronous;const v=n.transitional||Ea;v&&v.legacyInterceptorReqResOrdering?l.unshift(y.fulfilled,y.rejected):l.push(y.fulfilled,y.rejected)});const p=[];this.interceptors.response.forEach(function(y){p.push(y.fulfilled,y.rejected)});let u,d=0,g;if(!a){const m=[Eu.bind(this),void 0];for(m.unshift(...l),m.push(...p),g=m.length,u=Promise.resolve(n);d<g;)u=u.then(m[d++],m[d++]);return u}g=l.length;let w=n;for(;d<g;){const m=l[d++],y=l[d++];try{w=m(w)}catch(v){y.call(this,v);break}}try{u=Eu.call(this,w)}catch(m){return Promise.reject(m)}for(d=0,g=p.length;d<g;)u=u.then(p[d++],p[d++]);return u}getUri(t){t=Nn(this.defaults,t);const n=ox(t.baseURL,t.url,t.allowAbsoluteUrls);return tx(n,t.params,t.paramsSerializer)}};j.forEach(["delete","get","head","options"],function(t){xn.prototype[t]=function(n,r){return this.request(Nn(r||{},{method:t,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(Nn(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}xn.prototype[t]=n(),xn.prototype[t+"Form"]=n(!0)});let p4=class px{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new ws(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new px(function(s){t=s}),cancel:t}}};function u4(e){return function(n){return e.apply(null,n)}}function c4(e){return j.isObject(e)&&e.isAxiosError===!0}const jl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(jl).forEach(([e,t])=>{jl[t]=e});function ux(e){const t=new xn(e),n=Hd(xn.prototype.request,t);return j.extend(n,xn.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ux(Nn(e,s))},n}const fe=ux(js);fe.Axios=xn;fe.CanceledError=ws;fe.CancelToken=p4;fe.isCancel=rx;fe.VERSION=ax;fe.toFormData=bf;fe.AxiosError=O;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=u4;fe.isAxiosError=c4;fe.mergeConfig=Nn;fe.AxiosHeaders=Ae;fe.formToJSON=e=>nx(j.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=lx.getAdapter;fe.HttpStatusCode=jl;fe.default=fe;const{Axios:e8,AxiosError:t8,CanceledError:n8,isCancel:r8,CancelToken:s8,VERSION:o8,all:f8,Cancel:i8,isAxiosError:l8,spread:a8,toFormData:p8,AxiosHeaders:u8,HttpStatusCode:c8,formToJSON:d8,getAdapter:x8,mergeConfig:h8}=fe;function Ws({label:e,percent:t,status:n}){const[r,s]=b.useState(0),o=b.useRef(null);return b.useEffect(()=>{const i=new IntersectionObserver(([l])=>{l.isIntersecting&&setTimeout(()=>s(t||0),200)},{threshold:.2});return o.current&&i.observe(o.current),()=>i.disconnect()},[t]),f.jsxs("div",{className:"progress-container",ref:o,children:[f.jsxs("div",{className:"progress-header",children:[f.jsx("span",{children:e}),f.jsx("span",{style:{color:n?"#f97316":"#4d8fff"},children:n||`${t}%`})]}),f.jsx("div",{className:"progress-bar",children:f.jsx("div",{className:"progress-fill",style:{width:`${r}%`}})})]})}const d4=[{Icon:pd,title:"Agricultural Sensors",desc:"Smart soil, crop health & irrigation sensors for precision farming.",variant:"agri"},{Icon:gs,title:"Industrial Automation",desc:"Temperature, gas detection & machine health monitoring sensors.",variant:""},{Icon:ga,title:"Robotics & Embedded",desc:"Custom embedded system designs for robotics and automation.",variant:""},{Icon:id,title:"IoT Monitoring",desc:"Cloud-connected real-time monitoring for smart infrastructure.",variant:"iot"},{Icon:_a,title:"Drone Data Integration",desc:"Sensor systems integrated with drone platforms for aerial data.",variant:"drone"}],x4=[{Icon:wn,title:"Made in India",desc:"Supporting the Make in India initiative with homegrown innovation."},{Icon:jn,title:"Research Driven",desc:"R&D-first approach ensuring cutting-edge and reliable products."},{Icon:cf,title:"Affordable Tech",desc:"High-quality sensors at cost-effective prices for all sectors."},{Icon:dr,title:"Future Ready",desc:"Smart systems built for tomorrow's industrial and agricultural needs."}],h4=[{Icon:ud,label:"YouTube",href:"https://www.youtube.com/@M2RLTechnologieS",bg:"#ff0000"},{Icon:rd,label:"Facebook",href:"https://www.facebook.com/profile.php?id=61584367014521",bg:"#1877f2"},{Icon:sd,label:"Instagram",href:"https://www.instagram.com/m2rl_technologies_",bg:"linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},{Icon:od,label:"LinkedIn",href:"https://www.linkedin.com/in/m²rl-t-bbb405290",bg:"#0a66c2"},{Icon:ad,label:"X",href:"https://x.com/MRLTechnologieS",bg:"#000000"},{Icon:Wd,label:"Whatsapp",href:"https://wa.me/917530018514",bg:"green"}],m4=[{num:"2024",label:"Founded"},{num:"5+",label:"Sensor Systems"},{num:"TN",label:"Tamil Nadu Based"},{num:"₹28L",label:"Investment Ready"}];function g4(){const[e,t]=b.useState({name:"",email:"",message:""}),[n,r]=b.useState(!1),[s,o]=b.useState(""),i=async l=>{l.preventDefault(),r(!0);try{const a=await fe.post("/api/contact",e);o(a.data.message),t({name:"",email:"",message:""})}catch{o("Something went wrong. Please email us directly.")}finally{r(!1)}};return f.jsxs("div",{className:"homepage",children:[f.jsxs("section",{className:"hero",children:[f.jsx("div",{className:"hero__bg-orb hero__bg-orb--1"}),f.jsx("div",{className:"hero__bg-orb hero__bg-orb--2"}),f.jsx("div",{className:"hero__bg-orb hero__bg-orb--3"}),f.jsx("div",{className:"hero__scan-line"}),f.jsxs("div",{className:"hero__content",children:[f.jsxs("div",{className:"hero__badges",children:[f.jsxs("span",{className:"badge badge-saffron",children:[f.jsx(_n,{size:11}),"MSME Registered"]}),f.jsxs("span",{className:"badge badge-green",children:[f.jsx(dr,{size:11}),"Startup India"]}),f.jsxs("span",{className:"badge badge-dark",children:[f.jsx(wn,{size:11}),"Made in India"]})]}),f.jsx("div",{className:"hero__logo-wrap",children:f.jsx("img",{src:"/logo.jpeg",alt:"M²RL Logo",className:"hero__logo animate-float"})}),f.jsxs("h1",{className:"hero__title",children:["M²RL ",f.jsx("span",{className:"hero__title-accent",children:"TechnologieS"})]}),f.jsx("p",{className:"hero__tagline",children:"Smart & Affordable Sensor Innovation — Made in India"}),f.jsx("p",{className:"hero__desc",children:"An emerging sensor manufacturing & R&D startup from Tamil Nadu, building high-quality, affordable sensors for agriculture, industrial automation, and smart IoT applications."}),f.jsxs("div",{className:"hero__actions",children:[f.jsxs(be,{to:"/products",className:"btn btn-primary",children:[f.jsx(Do,{size:16}),"Explore Products"]}),f.jsxs(be,{to:"/contact",className:"btn btn-secondary",children:[f.jsx(al,{size:16}),"Contact Us"]})]})]}),f.jsx("div",{className:"tricolor-stripe",style:{marginTop:0,position:"absolute",bottom:0,left:0,right:0}})]}),f.jsx("div",{className:"stats-strip",children:f.jsx("div",{className:"container",children:f.jsx("div",{className:"stats-strip__inner",children:m4.map(({num:l,label:a},p)=>f.jsxs("div",{className:"stats-strip__item",style:{animationDelay:`${p*.1}s`},children:[f.jsx("div",{className:"stats-strip__num",children:l}),f.jsx("div",{className:"stats-strip__label",children:a})]},a))})})}),f.jsx("section",{className:"section section-light",id:"about",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"about-snap",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"section-label",children:[f.jsx(_n,{size:13}),"Who We Are"]}),f.jsxs("h2",{className:"section-title",style:{textAlign:"left",marginTop:14},children:["Building India's Smart",f.jsx("br",{}),"Sensor Future"]}),f.jsx("p",{style:{fontSize:"15.5px",color:"var(--text-secondary)",lineHeight:1.85,marginBottom:"18px"},children:"M²RL TechnologieS is an emerging sensor manufacturing and R&D startup based in Tamil Nadu, India. We focus on developing smart, affordable sensors for agricultural, industrial, and IoT applications."}),f.jsxs("p",{style:{fontSize:"15.5px",color:"var(--text-secondary)",lineHeight:1.85,marginBottom:"28px"},children:["Registered under ",f.jsx("strong",{children:"Udyam (MSME)"})," and ",f.jsx("strong",{children:"Startup India"}),", we are committed to driving innovation through research and delivering reliable, cost-effective solutions that support the Make in India initiative."]}),f.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap",marginBottom:28},children:[f.jsx("span",{className:"badge badge-saffron",children:"✔ Udyam MSME"}),f.jsx("span",{className:"badge badge-green",children:"✔ Startup India"}),f.jsx("span",{className:"badge badge-blue",children:"✔ NSWS Registered"})]}),f.jsxs(be,{to:"/about",className:"btn btn-outline",children:["Read More ",f.jsx($o,{size:15})]})]}),f.jsx("div",{children:f.jsx("div",{className:"card-glass",style:{background:"#0a1f3fff",border:"1px solid rgba(26,111,255,0.15)"},children:f.jsxs("div",{style:{textAlign:"center",padding:"16px 8px 8px"},children:[f.jsx("img",{src:"/logo.jpeg",alt:"M²RL",style:{width:"110px",borderRadius:"18px",marginBottom:"20px",boxShadow:"0 10px 36px rgba(26,111,255,0.25)",border:"2px solid rgba(26,111,255,0.2)"}}),f.jsx("h3",{style:{fontFamily:"Poppins",fontWeight:700,marginBottom:"6px",color:"#fff"},children:"M²RL TechnologieS"}),f.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"13px",marginBottom:"24px"},children:"Perattukkottai, Sivaganga, Tamil Nadu"}),[{label:"Founded",value:"2024"},{label:"Sector",value:"Sensor Manufacturing & R&D"},{label:"Status",value:"Pre-Revenue / Funding Stage"},{label:"Investment",value:"₹28 Lakhs"}].map(({label:l,value:a})=>f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid rgba(255,255,255,0.07)",fontSize:"13.5px"},children:[f.jsx("span",{style:{color:"rgba(255,255,255,0.45)"},children:l}),f.jsx("span",{style:{fontWeight:600,color:"#fff"},children:a})]},l))]})})})]})})}),f.jsx("section",{className:"section section-dark",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(Do,{size:13}),"What We Build"]}),f.jsx("h2",{className:"section-title",children:"Our Core Solutions"}),f.jsx("p",{className:"section-subtitle",children:"Precision sensor technology for the industries that power India's growth"})]}),f.jsx("div",{className:"grid-auto",children:d4.map(({Icon:l,title:a,desc:p,variant:u})=>f.jsxs("div",{className:`card-glass solutions-card${u?` solutions-card--${u}`:""}`,children:[f.jsx("div",{className:"solutions-card__icon-wrap",children:f.jsx(l,{size:26})}),f.jsx("h3",{className:"solutions-card__title",children:a}),f.jsx("p",{className:"solutions-card__desc",children:p})]},a))})]})}),f.jsx("section",{className:"section section-light",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(wn,{size:13}),"Why M²RL"]}),f.jsx("h2",{className:"section-title",children:"Why Choose Us?"}),f.jsx("p",{className:"section-subtitle",children:"We bring research-driven quality at prices that make sense for India"})]}),f.jsx("div",{className:"grid-4",children:x4.map(({Icon:l,title:a,desc:p})=>f.jsxs("div",{className:"card why-card",children:[f.jsx("div",{className:"why-card__icon-wrap",children:f.jsx(l,{size:24})}),f.jsx("h3",{className:"why-card__title",children:a}),f.jsx("p",{className:"why-card__desc",children:p})]},a))})]})}),f.jsx("section",{className:"section section-dark",children:f.jsx("div",{className:"container",children:f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"56px",alignItems:"center"},children:[f.jsxs("div",{children:[f.jsxs("div",{className:"section-label",children:[f.jsx(ja,{size:13}),"Company Status"]}),f.jsx("h2",{className:"section-title",style:{marginTop:14,marginBottom:16},children:"Our Progress"}),f.jsx("p",{style:{color:"rgba(255,255,255,0.55)",lineHeight:1.8,marginBottom:28,fontSize:"15px"},children:"We are steadily building our foundation — from legal registrations to infrastructure setup — working towards our manufacturing launch."}),f.jsxs(be,{to:"/investor",className:"btn btn-saffron",children:[f.jsx(cf,{size:16}),"Investor Info"]})]}),f.jsxs("div",{children:[f.jsx(Ws,{label:"Registration & Compliance",percent:100}),f.jsx(Ws,{label:"Infrastructure Setup",percent:70}),f.jsx(Ws,{label:"Machinery Planning",percent:90}),f.jsx(Ws,{label:"Manufacturing Setup",status:"Funding Stage"})]})]})})}),f.jsx("section",{className:"section section-light",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(Pm,{size:13}),"Follow Us"]}),f.jsx("h2",{className:"section-title",children:"Connect With Us"}),f.jsx("p",{className:"section-subtitle",children:"Stay updated on our journey, products, and milestones"})]}),f.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"32px",flexWrap:"wrap"},children:h4.map(({Icon:l,label:a,href:p,bg:u})=>f.jsxs("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"social-card",children:[f.jsx("div",{className:"social-card__icon",style:{background:u},children:f.jsx(l,{size:24})}),f.jsx("span",{className:"social-card__label",children:a})]},a))})]})}),f.jsx("section",{className:"section section-dark",children:f.jsx("div",{className:"container",children:f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"56px"},children:[f.jsxs("div",{children:[f.jsxs("div",{className:"section-label",children:[f.jsx(al,{size:13}),"Reach Out"]}),f.jsx("h2",{className:"section-title",style:{marginTop:14,marginBottom:28},children:"Quick Contact"}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"22px"},children:[{Icon:va,label:"Email",value:"mrltechnologies408@gmail.com",href:"mailto:mrltechnologies408@gmail.com"},{Icon:cr,label:"Address",value:"Perattukkottai, Sivaganga, Tamil Nadu, India"}].map(({Icon:l,label:a,value:p,href:u})=>f.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-start"},children:[f.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"rgba(26,111,255,0.12)",border:"1px solid rgba(26,111,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(l,{size:20,color:"#4d8fff"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"11px",color:"rgba(255,255,255,0.4)",fontWeight:600,textTransform:"uppercase",letterSpacing:"1px",marginBottom:4},children:a}),u?f.jsx("a",{href:u,style:{color:"#fff",fontSize:"14.5px",fontWeight:500},children:p}):f.jsx("p",{style:{color:"rgba(255,255,255,0.75)",fontSize:"14.5px"},children:p})]})]},a))})]}),f.jsxs("form",{onSubmit:i,className:"quick-form",children:[f.jsx("h3",{style:{fontFamily:"Poppins",marginBottom:"22px",color:"#fff",fontSize:"1.15rem",fontWeight:700},children:"Send a Message"}),s&&f.jsxs("div",{style:{padding:"14px 16px",borderRadius:"10px",background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.25)",color:"#34d399",marginBottom:"16px",display:"flex",alignItems:"center",gap:8,fontSize:"14px"},children:[f.jsx(mt,{size:16})," ",s]}),f.jsx("div",{className:"form-group",children:f.jsx("input",{className:"form-input",style:{background:"rgba(255,255,255,0.05)",borderColor:"rgba(255,255,255,0.1)",color:"#fff"},type:"text",placeholder:"Your Name",value:e.name,onChange:l=>t({...e,name:l.target.value}),required:!0})}),f.jsx("div",{className:"form-group",children:f.jsx("input",{className:"form-input",style:{background:"rgba(255,255,255,0.05)",borderColor:"rgba(255,255,255,0.1)",color:"#fff"},type:"email",placeholder:"Your Email",value:e.email,onChange:l=>t({...e,email:l.target.value}),required:!0})}),f.jsx("div",{className:"form-group",children:f.jsx("textarea",{className:"form-textarea",style:{background:"rgba(255,255,255,0.05)",borderColor:"rgba(255,255,255,0.1)",color:"#fff",minHeight:"100px"},placeholder:"Your Message",value:e.message,onChange:l=>t({...e,message:l.target.value}),required:!0})}),f.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:n,children:n?f.jsxs(f.Fragment,{children:[f.jsx(fd,{size:15,className:"spin"})," Sending..."]}):f.jsxs(f.Fragment,{children:[f.jsx(df,{size:15})," Send Message"]})})]})]})})})]})}const Hs=[{image:"collab\\Anbu.png",name:"Anbukumar Careers"},{image:"collab\\D&R.jpeg",name:"D&R Technologies"},{image:"collab\\Nano.png",name:"Nano Tech"},{image:"collab\\Oscar.png",name:"Oscar Academy"},{image:"collab\\Stj.png",name:"STJ Academy"}],y4=()=>f.jsxs("div",{className:"content-wrap bottom-animated middle-animated animated top-animated",children:[f.jsx("p",{className:"cm-eyebrow",children:"Trusted by teams at"}),f.jsx("div",{className:"logo-slider",children:f.jsx("div",{className:"logo-track",children:[...Hs,...Hs,...Hs,...Hs].map((e,t)=>f.jsxs("div",{className:"logo-item",children:[f.jsx("img",{src:e.image,alt:e.name}),f.jsx("div",{className:"logo-name",children:e.name})]},t))})})]}),v4=[{name:"Manickam",role:"Family Member",desc:"Supporting the vision and mission of M²RL.",img:"/employees/Manickam.png"},{name:"Megala",role:"Family Member",desc:"Supporting the vision and mission of M²RL.",img:"/employees/Megala.png"},{name:"Radha",role:"Family Member",desc:"Supporting the vision and mission of M²RL.",img:"/employees/Radha.png"},{name:"Logesh",role:"Founder",desc:"Visionary leading M²RL's sensor innovation journey.",img:"/employees/lokesh.png"},{name:"Anbukumar",role:"Website Developer",desc:"Building the digital presence of M²RL.",img:"/employees/Anbu.png"},{name:"Jayaseelan",role:"CEO",desc:"Steering business strategy and growth initiatives.",img:"/employees/Jayaseelan.png"},{name:"Mis. Logesh",role:"Managing Director",desc:"Overseeing operations and R&D management."},{name:"Kaviya",role:"Design Support",desc:"Leading product and communication design.",img:"/employees/Kaviya.png"},{name:"Priyadharshini",role:"Human Resources",desc:"Managing recruitment, employee relations, and organizational development to build a strong and positive workplace culture.",img:"/employees/priyadharshini.png"},{name:"Janani",role:"Personal Advisor",desc:"Providing personalized guidance and support to the leadership team.",img:"/employees/Janani.png"},{name:"Prabhakar",role:"Supporting",desc:"Supporting core operations and project execution, ensuring smooth coordination and contributing to overall team efficiency.",img:"/employees/Prabhakar.png"},{name:"Venuvignesh",role:"CA",desc:"Childhood friend & early supporter of M²RL TechnologieS, contributed ideas and planning support, CA license to be applied after 3 years.",img:"/employees/Venuvignesh.png"}],_4=[{Icon:cr,label:"Land Available",desc:"Ready plot for manufacturing facility in Perattukkottai, Sivaganga.",color:"#f97316"},{Icon:cd,label:"Three-Phase Power",desc:"Full three-phase electrical connection established.",color:"#eab308"},{Icon:nd,label:"Water Facility",desc:"Water supply infrastructure is in place and ready.",color:"#3b82f6"},{Icon:gs,label:"Manufacturing Planned",desc:"Machinery finalized; manufacturing setup pending final funding.",color:"#8b5cf6"}],j4=["Develop cost-effective smart sensors","Support the Make in India initiative","Promote research-driven innovation","Create employment through technology manufacturing"];function w4(){return f.jsxs("div",{children:[f.jsx("div",{className:"page-banner",children:f.jsxs("div",{className:"container",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:40,flexWrap:"wrap"},children:[f.jsxs("div",{style:{flex:1,minWidth:280},children:[f.jsxs("div",{className:"section-label",children:[f.jsx(_n,{size:13}),"About Us"]}),f.jsx("h1",{className:"page-banner-title",style:{marginTop:14},children:"M²RL TechnologieS"}),f.jsx("p",{className:"page-banner-subtitle",children:"Emerging sensor manufacturing & R&D startup from Tamil Nadu, India, driving affordable innovation for agriculture, industry, and IoT."})]}),f.jsx("div",{style:{flexShrink:0},children:f.jsx("h1",{children:f.jsx("a",{target:"_blank",href:"https://anbukumar.com",children:"Developed By Anbu"})})})]})}),f.jsx("div",{className:"tricolor-stripe"}),f.jsx("section",{className:"section section-light",children:f.jsx("div",{className:"container",children:f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:48,alignItems:"center"},children:[f.jsxs("div",{children:[f.jsxs("div",{className:"section-label",children:[f.jsx(_n,{size:13}),"Company Overview"]}),f.jsx("h2",{className:"section-title",style:{textAlign:"left",marginTop:14,marginBottom:20},children:"Who We Are"}),f.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.85,marginBottom:16,fontSize:"15.5px"},children:"M²RL TechnologieS is an emerging sensor manufacturing and Research & Development startup headquartered in Perattukkottai, Sivaganga, Tamil Nadu, India. Our company was founded with a clear purpose: to build smart, affordable, and reliable sensor solutions that power India's agriculture, industrial, and IoT sectors."}),f.jsxs("p",{style:{color:"var(--text-secondary)",lineHeight:1.85,marginBottom:28,fontSize:"15.5px"},children:["We are registered under ",f.jsx("strong",{children:"Udyam (MSME)"}),", ",f.jsx("strong",{children:"Startup India"}),", and ",f.jsx("strong",{children:"NSWS"}),", with an active bank account, ready land and infrastructure, three-phase power supply, and fully planned R&D operations."]}),f.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[f.jsx("span",{className:"badge badge-saffron",children:"✔ Udyam MSME"}),f.jsx("span",{className:"badge badge-green",children:"✔ Startup India"}),f.jsx("span",{className:"badge badge-blue",children:"✔ NSWS Registered"}),f.jsx("span",{className:"badge badge-blue",children:"✔ Bank Account Active"})]})]}),f.jsx("div",{style:{textAlign:"center"},children:f.jsx("div",{style:{display:"inline-block",padding:6,borderRadius:28,background:"linear-gradient(135deg,rgba(26,111,255,0.2),rgba(249,115,22,0.15))",boxShadow:"0 20px 60px rgba(26,111,255,0.18)"},children:f.jsx("img",{src:"/logo.jpeg",alt:"M²RL TechnologieS",style:{width:200,borderRadius:22,display:"block",objectFit:"cover"}})})})]})})}),f.jsx("section",{className:"section section-dark",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(ls,{size:13}),"Our Direction"]}),f.jsx("h2",{className:"section-title",children:"Vision & Mission"})]}),f.jsxs("div",{className:"grid-2",style:{gap:28},children:[f.jsxs("div",{className:"card-glass",style:{borderLeft:"3px solid #1a6fff",padding:"40px 36px"},children:[f.jsx("div",{style:{marginBottom:20,width:56,height:56,borderRadius:16,background:"rgba(26,111,255,0.12)",border:"1px solid rgba(26,111,255,0.22)",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(ya,{size:26,color:"#4d8fff"})}),f.jsx("h3",{style:{fontFamily:"Poppins",fontSize:"1.3rem",color:"#fff",marginBottom:16,fontWeight:700},children:"Our Vision"}),f.jsx("p",{style:{color:"rgba(255,255,255,0.65)",lineHeight:1.85,fontSize:"15px"},children:"To become a trusted Indian sensor manufacturing company delivering innovative and reliable technology solutions globally — a brand that represents quality, affordability, and the spirit of Indian engineering."})]}),f.jsxs("div",{className:"card-glass",style:{borderLeft:"3px solid #f97316",padding:"40px 36px"},children:[f.jsx("div",{style:{marginBottom:20,width:56,height:56,borderRadius:16,background:"rgba(249,115,22,0.12)",border:"1px solid rgba(249,115,22,0.22)",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(ls,{size:26,color:"#f97316"})}),f.jsx("h3",{style:{fontFamily:"Poppins",fontSize:"1.3rem",color:"#fff",marginBottom:16,fontWeight:700},children:"Our Mission"}),f.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:12},children:j4.map(e=>f.jsxs("li",{style:{display:"flex",gap:10,color:"rgba(255,255,255,0.7)",fontSize:"15px",alignItems:"flex-start"},children:[f.jsx(uf,{size:16,color:"#f97316",style:{marginTop:2,flexShrink:0}}),e]},e))})]})]})]})}),f.jsx(y4,{topRow:["/logos/acme.svg","/logos/globex.svg",{src:"/logos/umbrella.png",alt:"Umbrella Corp"}],middleRow:["/logos/stark.svg","/logos/wayne.svg"],bottomRow:["/logos/hooli.svg","/logos/soylent.svg"]}),f.jsx("section",{className:"section section-light",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(og,{size:13}),"Leadership"]}),f.jsx("h2",{className:"section-title",children:"Our Team"}),f.jsx("p",{className:"section-subtitle",children:"The passionate people behind M²RL TechnologieS"})]}),f.jsx("div",{className:"grid-auto",children:v4.map(({name:e,role:t,desc:n,img:r})=>f.jsxs("div",{className:"card",style:{textAlign:"center",padding:"36px 28px"},children:[f.jsx("div",{style:{width:76,height:76,borderRadius:"50%",background:"linear-gradient(135deg,#1a6fff,#0052e6)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",boxShadow:"0 8px 28px rgba(26,111,255,0.3)",border:"2px solid rgba(26,111,255,0.3)"},children:r?f.jsx("img",{src:r,alt:e,style:{width:"100%",height:"100%",borderRadius:"50%",objectFit:"cover"}}):f.jsx(rg,{size:30,color:"#fff"})}),f.jsx("h3",{style:{fontFamily:"Poppins",fontSize:"1.05rem",fontWeight:700,marginBottom:6,color:"var(--text-primary)"},children:e}),f.jsx("span",{className:"badge badge-blue",style:{marginBottom:14,display:"inline-block"},children:t}),f.jsx("p",{style:{fontSize:"13.5px",color:"var(--text-muted)",lineHeight:1.65},children:n})]},e))})]})}),f.jsx("section",{className:"section section-dark",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(wm,{size:13}),"Infrastructure"]}),f.jsx("h2",{className:"section-title",children:"Our Facilities"}),f.jsx("p",{className:"section-subtitle",children:"Ready infrastructure to support large-scale sensor manufacturing"})]}),f.jsx("div",{className:"grid-4",style:{gap:22},children:_4.map(({Icon:e,label:t,desc:n,color:r})=>f.jsxs("div",{className:"card-glass",style:{padding:"32px 24px",textAlign:"center"},children:[f.jsx("div",{style:{width:58,height:58,borderRadius:16,background:`${r}18`,border:`1px solid ${r}35`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",transition:"all 0.3s"},children:f.jsx(e,{size:26,color:r})}),f.jsx("h3",{style:{color:"#fff",fontFamily:"Poppins",fontSize:"1rem",fontWeight:700,marginBottom:10},children:t}),f.jsx("p",{style:{fontSize:"13px",color:"rgba(255,255,255,0.55)",lineHeight:1.65},children:n})]},t))}),f.jsx("div",{style:{marginTop:48,textAlign:"center"},children:f.jsxs(be,{to:"/investor",className:"btn btn-saffron",style:{gap:8},children:[f.jsx(cf,{size:16})," View Investor Information"]})})]})})]})}const S4=[{Icon:ld,name:"Soil Monitoring Sensor",desc:"Real-time soil moisture, pH, and nutrient level monitoring for precision agriculture."},{Icon:bm,name:"Crop Health Sensor",desc:"Monitors crop growth indicators, leaf health, and environmental stress factors."},{Icon:nd,name:"Irrigation Control System",desc:"Smart irrigation sensors and automated valve controllers for water efficiency."},{Icon:Zm,name:"Weather Station Module",desc:"On-field micro-weather stations for real-time climate monitoring."},{Icon:jn,name:"Fertilizer Dosing Sensor",desc:"Automated nutrient dosing sensors for smart fertilizer management."},{Icon:pl,name:"Drone Agri-Sensor Pack",desc:"Lightweight sensor kits for drone-based agricultural surveillance."}],N4=[{Icon:am,name:"Industrial IoT Gateway",desc:"Edge computing gateway for industrial sensor data aggregation."},{Icon:cr,name:"Asset Tracking Module",desc:"GPS + sensor-integrated tracking for logistics and field assets."},{Icon:Ym,name:"Smart Factory Monitor",desc:"Machine health and production KPI monitoring via mobile dashboard."},{Icon:_a,name:"Drone Data Hub",desc:"Central hub for aggregating multi-drone sensor telemetry."},{Icon:gs,name:"Gas & Hazard Detector",desc:"Industrial-grade gas leak and environmental hazard detection sensors."},{Icon:lg,name:"Predictive Maintenance Kit",desc:"Vibration and thermal sensors for machinery predictive maintenance."}];function k4({Icon:e,name:t,desc:n,color:r="#1a6fff"}){return f.jsxs("div",{className:"card",style:{padding:"28px 24px",transition:"all 0.3s"},children:[f.jsx("div",{style:{width:50,height:50,borderRadius:14,background:`${r}14`,border:`1px solid ${r}28`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16},children:f.jsx(e,{size:24,color:r})}),f.jsx("h3",{style:{fontFamily:"Poppins",fontWeight:700,fontSize:"0.95rem",marginBottom:8,color:"var(--text-primary)"},children:t}),f.jsx("p",{style:{fontSize:"13.5px",color:"var(--text-muted)",lineHeight:1.65},children:n})]})}function b4(){return f.jsxs("div",{children:[f.jsx("div",{className:"page-banner",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(Do,{size:13}),"Our Products"]}),f.jsx("h1",{className:"page-banner-title",style:{marginTop:14},children:"Sensor Product Lineup"}),f.jsx("p",{className:"page-banner-subtitle",children:"Smart, affordable sensors engineered for Indian agriculture, industry, and IoT applications."})]})}),f.jsx("div",{className:"tricolor-stripe"}),f.jsx("section",{className:"section section-light",style:{paddingBottom:0},children:f.jsx("div",{className:"container",children:f.jsxs("div",{style:{textAlign:"center",padding:"40px 32px",background:"linear-gradient(135deg,rgba(26,111,255,0.05),rgba(249,115,22,0.03))",borderRadius:20,border:"1px solid rgba(26,111,255,0.12)",marginBottom:56},children:[f.jsx("div",{style:{width:60,height:60,borderRadius:18,background:"rgba(26,111,255,0.1)",border:"1px solid rgba(26,111,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"},children:f.jsx(td,{size:26,color:"#1a6fff"})}),f.jsx("h2",{style:{fontFamily:"Poppins",fontSize:"1.7rem",fontWeight:700,marginBottom:12},children:"Products Under Development"}),f.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.8,maxWidth:620,margin:"0 auto 22px",fontSize:"15px"},children:"M²RL TechnologieS is in the R&D and pre-manufacturing phase. The products listed below represent our planned lineup and are currently being engineered. Full availability follows funding-stage completion."}),f.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[f.jsxs("span",{className:"badge badge-saffron",style:{padding:"6px 16px",fontSize:12},children:[f.jsx(dr,{size:12})," Manufacturing Pending Funding"]}),f.jsxs("span",{className:"badge badge-blue",style:{padding:"6px 16px",fontSize:12},children:[f.jsx(jn,{size:12})," R&D In Progress"]})]})]})})}),f.jsx("section",{className:"section section-light",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(ld,{size:13}),"Category 01"]}),f.jsx("h2",{className:"section-title",children:"Agricultural Sensor Systems"}),f.jsx("p",{className:"section-subtitle",children:"Precision sensors for smart farming, irrigation, and crop health monitoring"})]}),f.jsx("div",{className:"grid-3",children:S4.map(e=>f.jsx(k4,{...e,color:"#10b981"},e.name))})]})}),f.jsx("section",{className:"section section-dark",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(gs,{size:13}),"Category 02"]}),f.jsx("h2",{className:"section-title",children:"Industrial & IoT Sensors"}),f.jsx("p",{className:"section-subtitle",children:"Reliable sensors for industrial automation, monitoring, and smart infrastructure"})]}),f.jsx("div",{className:"grid-3",children:N4.map(({Icon:e,name:t,desc:n})=>f.jsxs("div",{className:"card-glass",style:{padding:"28px 24px"},children:[f.jsx("div",{style:{width:50,height:50,borderRadius:14,background:"rgba(26,111,255,0.12)",border:"1px solid rgba(26,111,255,0.22)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16},children:f.jsx(e,{size:24,color:"#4d8fff"})}),f.jsx("h3",{style:{fontFamily:"Poppins",fontWeight:700,fontSize:"0.95rem",marginBottom:8,color:"#fff"},children:t}),f.jsx("p",{style:{fontSize:"13.5px",color:"rgba(255,255,255,0.55)",lineHeight:1.65},children:n})]},t))})]})}),f.jsx("section",{className:"section section-light",children:f.jsxs("div",{className:"container",style:{textAlign:"center"},children:[f.jsxs("div",{className:"section-label",style:{marginBottom:18},children:[f.jsx(_n,{size:13}),"Partner With Us"]}),f.jsx("h2",{className:"section-title",style:{marginBottom:16},children:"Interested in Our Sensors?"}),f.jsx("p",{style:{color:"var(--text-muted)",marginBottom:32,maxWidth:500,margin:"0 auto 32px",fontSize:"15px",lineHeight:1.7},children:"We welcome early partnerships, pilot projects, and investment discussions. Reach out to explore collaboration."}),f.jsxs("div",{style:{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"},children:[f.jsxs("a",{href:"/contact",className:"btn btn-primary",children:[f.jsx(uf,{size:16}),"Get in Touch"]}),f.jsxs("a",{href:"/rnd",className:"btn btn-outline",children:[f.jsx(jn,{size:16}),"View R&D Work"]})]})]})})]})}const C4=[{Icon:va,label:"Email Address",value:"mrltechnologies408@gmail.com",href:"mailto:mrltechnologies408@gmail.com",color:"#1a6fff"},{Icon:cr,label:"Registered Office",value:"Perattukkottai, Sivaganga, Tamil Nadu, India — 630702",color:"#f97316"},{Icon:td,label:"Response Time",value:"We respond within 24–48 business hours",color:"#10b981"},{Icon:ya,label:"Business Type",value:"Sensor Manufacturing & R&D Startup — MSME Registered",color:"#8b5cf6"}];function E4(){const[e,t]=b.useState({name:"",email:"",subject:"",message:""}),[n,r]=b.useState(!1),[s,o]=b.useState(""),[i,l]=b.useState(!1),a=async p=>{p.preventDefault(),r(!0),o(""),l(!1);try{const u=await fe.post("/api/contact",e);o(u.data.message||"Message sent successfully!"),t({name:"",email:"",subject:"",message:""})}catch{l(!0),o("Something went wrong. Please email us directly.")}finally{r(!1)}};return f.jsxs("div",{children:[f.jsx("div",{className:"page-banner",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(al,{size:13}),"Get In Touch"]}),f.jsx("h1",{className:"page-banner-title",style:{marginTop:14},children:"Contact Us"}),f.jsx("p",{className:"page-banner-subtitle",children:"Whether you're an investor, partner, researcher, or customer — we'd love to hear from you."})]})}),f.jsx("div",{className:"tricolor-stripe"}),f.jsx("section",{className:"section section-light",children:f.jsx("div",{className:"container",children:f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:40,alignItems:"start"},children:[f.jsxs("div",{children:[f.jsxs("div",{className:"section-label",style:{marginBottom:18},children:[f.jsx(Im,{size:13}),"Our Details"]}),f.jsx("h2",{style:{fontFamily:"Poppins",fontSize:"1.8rem",fontWeight:700,marginBottom:10,color:"var(--text-primary)"},children:"Reach Out"}),f.jsx("p",{style:{color:"var(--text-muted)",lineHeight:1.8,marginBottom:32,fontSize:"15px"},children:"Our team is ready to discuss partnerships, investments, research collaborations, or product inquiries."}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:C4.map(({Icon:p,label:u,value:d,href:g,color:w})=>f.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start",padding:"18px 20px",borderRadius:14,background:"#fff",border:"1px solid var(--border)",boxShadow:"var(--shadow-card)"},children:[f.jsx("div",{style:{width:46,height:46,borderRadius:12,background:`${w}12`,border:`1px solid ${w}22`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(p,{size:20,color:w})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",color:"#94a3b8",marginBottom:4},children:u}),g?f.jsx("a",{href:g,style:{color:"var(--text-primary)",fontSize:"14px",fontWeight:500,lineHeight:1.5},children:d}):f.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px",lineHeight:1.5},children:d})]})]},u))})]}),f.jsxs("div",{className:"card",style:{padding:"40px 36px"},children:[f.jsx("h3",{style:{fontFamily:"Poppins",fontWeight:700,fontSize:"1.25rem",marginBottom:24,color:"var(--text-primary)"},children:"Send a Message"}),s&&f.jsxs("div",{style:{padding:"14px 16px",borderRadius:12,marginBottom:20,display:"flex",alignItems:"center",gap:10,fontSize:"14px",background:i?"rgba(239,68,68,0.06)":"rgba(16,185,129,0.07)",border:`1px solid ${i?"rgba(239,68,68,0.2)":"rgba(16,185,129,0.2)"}`,color:i?"#ef4444":"#10b981"},children:[i?f.jsx(fm,{size:16}):f.jsx(mt,{size:16})," ",s]}),f.jsxs("form",{onSubmit:a,children:[f.jsxs("div",{className:"grid-2",style:{gap:16},children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{className:"form-label",children:"Full Name"}),f.jsx("input",{className:"form-input",type:"text",placeholder:"Your name",value:e.name,onChange:p=>t({...e,name:p.target.value}),required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{className:"form-label",children:"Email Address"}),f.jsx("input",{className:"form-input",type:"email",placeholder:"you@example.com",value:e.email,onChange:p=>t({...e,email:p.target.value}),required:!0})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{className:"form-label",children:"Subject"}),f.jsx("input",{className:"form-input",type:"text",placeholder:"What's this about?",value:e.subject,onChange:p=>t({...e,subject:p.target.value})})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{className:"form-label",children:"Message"}),f.jsx("textarea",{className:"form-textarea",placeholder:"Tell us how we can help you...",value:e.message,onChange:p=>t({...e,message:p.target.value}),required:!0})]}),f.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:n,children:n?f.jsxs(f.Fragment,{children:[f.jsx(fd,{size:15,className:"spin"})," Sending..."]}):f.jsxs(f.Fragment,{children:[f.jsx(df,{size:15})," Send Message"]})})]})]})]})})})]})}function z4(){const e=[{title:"1. Information We Collect",content:"We collect information you voluntarily provide through our contact forms, including your name, email address, and message content. We do not collect sensitive personal information or payment data."},{title:"2. How We Use Your Information",content:"The information you provide is used solely to respond to your inquiries, facilitate business communications, and improve our services. We do not use your data for automated decision-making or profiling."},{title:"3. Data Sharing & Disclosure",content:"M²RL TechnologieS does not sell, trade, or rent your personal information to third parties. We may share data with service providers who assist us in our operations, subject to confidentiality agreements."},{title:"4. Data Security",content:"We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."},{title:"5. Cookies & Tracking",content:"Our website may use basic cookies for functionality purposes. We do not use third-party tracking cookies or behavioral advertising systems. You can disable cookies in your browser settings."},{title:"6. Your Rights",content:"You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at mrltechnologies408@gmail.com."},{title:"7. Data Retention",content:"We retain your contact information only for as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law."},{title:"8. Changes to This Policy",content:"We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes your acceptance."},{title:"9. Contact Us",content:"If you have questions or concerns about this Privacy Policy, please contact us at: mrltechnologies408@gmail.com — M²RL TechnologieS, Perattukkottai, Sivaganga, Tamil Nadu, India."}];return f.jsxs("div",{children:[f.jsx("div",{className:"page-banner",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(wn,{size:13}),"Legal"]}),f.jsx("h1",{className:"page-banner-title",style:{marginTop:14},children:"Privacy Policy"}),f.jsx("p",{className:"page-banner-subtitle",children:"How M²RL TechnologieS collects, uses, and protects your personal information."})]})}),f.jsx("div",{className:"tricolor-stripe"}),f.jsx("section",{className:"section section-light",children:f.jsxs("div",{className:"container",style:{maxWidth:800},children:[f.jsxs("div",{style:{padding:"12px 20px",borderRadius:12,background:"rgba(26,111,255,0.05)",border:"1px solid rgba(26,111,255,0.14)",marginBottom:48,display:"flex",gap:10,alignItems:"center"},children:[f.jsx(wn,{size:18,color:"#1a6fff",style:{flexShrink:0}}),f.jsxs("p",{style:{fontSize:"13.5px",color:"var(--text-secondary)"},children:[f.jsx("strong",{children:"Effective Date:"})," February 2025  |  ",f.jsx("strong",{children:"M²RL TechnologieS"})," is committed to protecting your privacy."]})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:28},children:e.map(({title:t,content:n})=>f.jsxs("div",{style:{padding:"28px 32px",borderRadius:16,background:"#fff",border:"1px solid var(--border)",boxShadow:"var(--shadow-card)"},children:[f.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",marginBottom:12},children:[f.jsx(uf,{size:16,color:"#1a6fff",style:{marginTop:4,flexShrink:0}}),f.jsx("h3",{style:{fontFamily:"Poppins",fontSize:"1.02rem",fontWeight:700,color:"var(--text-primary)"},children:t})]}),f.jsx("p",{style:{fontSize:"14.5px",color:"var(--text-secondary)",lineHeight:1.8,paddingLeft:28},children:n})]},t))})]})})]})}function M4(){const e=[{title:"1. Acceptance of Terms",content:"By accessing or using the M²RL TechnologieS website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of the website."},{title:"2. Use of Website",content:"This website is provided for informational purposes about M²RL TechnologieS and its products, services, and investment opportunities. Unauthorized use, reproduction, or redistribution of any content is strictly prohibited."},{title:"3. Intellectual Property",content:"All content on this website — including text, images, logos, and designs — is the intellectual property of M²RL TechnologieS and is protected by applicable Indian and international copyright laws."},{title:"4. Investment Disclaimer",content:"Information provided on this website regarding investment opportunities is for general informational purposes only and does not constitute a formal offer or solicitation. All investment decisions should be made after independent due diligence."},{title:"5. Product Information",content:"Product descriptions and specifications listed on this website represent planned and in-development products. M²RL TechnologieS reserves the right to modify product specifications, availability, and pricing without prior notice."},{title:"6. Limitation of Liability",content:"M²RL TechnologieS shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use this website or the information it contains."},{title:"7. External Links",content:"Our website may contain links to third-party websites. M²RL TechnologieS has no control over and assumes no responsibility for the content or practices of any third-party websites."},{title:"8. Modifications",content:"M²RL TechnologieS reserves the right to modify these Terms and Conditions at any time. Your continued use of the website following changes constitutes your acceptance of the revised terms."},{title:"9. Governing Law",content:"These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Tamil Nadu, India."},{title:"10. Contact",content:"For any questions regarding these Terms and Conditions, please reach out at: mrltechnologies408@gmail.com — M²RL TechnologieS, Perattukkottai, Sivaganga, Tamil Nadu, India."}];return f.jsxs("div",{children:[f.jsx("div",{className:"page-banner",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(Kp,{size:13}),"Legal"]}),f.jsx("h1",{className:"page-banner-title",style:{marginTop:14},children:"Terms & Conditions"}),f.jsx("p",{className:"page-banner-subtitle",children:"Please read these terms carefully before using the M²RL TechnologieS website or services."})]})}),f.jsx("div",{className:"tricolor-stripe"}),f.jsx("section",{className:"section section-light",children:f.jsxs("div",{className:"container",style:{maxWidth:800},children:[f.jsxs("div",{style:{padding:"12px 20px",borderRadius:12,background:"rgba(249,115,22,0.05)",border:"1px solid rgba(249,115,22,0.16)",marginBottom:48,display:"flex",gap:10,alignItems:"center"},children:[f.jsx(Kp,{size:18,color:"#f97316",style:{flexShrink:0}}),f.jsxs("p",{style:{fontSize:"13.5px",color:"var(--text-secondary)"},children:[f.jsx("strong",{children:"Last Updated:"})," February 2025  |  By using this website you agree to the following terms."]})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:28},children:e.map(({title:t,content:n})=>f.jsxs("div",{style:{padding:"28px 32px",borderRadius:16,background:"#fff",border:"1px solid var(--border)",boxShadow:"var(--shadow-card)"},children:[f.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",marginBottom:12},children:[f.jsx(uf,{size:16,color:"#f97316",style:{marginTop:4,flexShrink:0}}),f.jsx("h3",{style:{fontFamily:"Poppins",fontSize:"1.02rem",fontWeight:700,color:"var(--text-primary)"},children:t})]}),f.jsx("p",{style:{fontSize:"14.5px",color:"var(--text-secondary)",lineHeight:1.8,paddingLeft:28},children:n})]},t))})]})})]})}const R4=[],P4=[{label:"Machinery & Equipment",pct:50,color:"#1a6fff"},{label:"Infrastructure Completion",pct:20,color:"#10b981"},{label:"R&D & Prototyping",pct:18,color:"#f97316"},{label:"Working Capital",pct:12,color:"#8b5cf6"}],T4=[{Icon:dr,text:"Early-stage entry into India's growing sensor manufacturing market"},{Icon:wn,text:"Fully registered: MSME Udyam, Startup India, NSWS"},{Icon:jn,text:"Research-driven with active R&D across 6 technology verticals"},{Icon:cr,text:"Ready land, three-phase power & water supply in Sivaganga, Tamil Nadu"},{Icon:cd,text:"Machinery fully planned; manufacturing starts immediately post-funding"},{Icon:ja,text:"High-growth market — Indian IoT & sensor industry expanding rapidly"}];function I4(){return f.jsxs("div",{children:[f.jsx("div",{className:"page-banner",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(cf,{size:13}),"Investor Relations"]}),f.jsx("h1",{className:"page-banner-title",style:{marginTop:14},children:"Investment Opportunity"}),f.jsx("p",{className:"page-banner-subtitle",children:"Be part of India's next sensor manufacturing success story. M²RL TechnologieS is seeking strategic investment to launch full-scale production."})]})}),f.jsx("div",{className:"tricolor-stripe"}),f.jsx("section",{className:"section section-dark",style:{paddingBottom:0},children:f.jsx("div",{className:"container",children:f.jsx("div",{className:"grid-4",style:{gap:20,paddingBottom:56},children:R4.map(({num:e,label:t,color:n,bg:r})=>f.jsxs("div",{className:"card-glass",style:{textAlign:"center",padding:"36px 20px",borderTop:`2px solid ${n}55`},children:[f.jsx("div",{style:{fontFamily:"Poppins",fontSize:"2.2rem",fontWeight:800,color:n,marginBottom:8,lineHeight:1},children:e}),f.jsx("div",{style:{fontSize:"13px",color:"rgba(255,255,255,0.55)",fontWeight:500},children:t})]},t))})})}),f.jsx("section",{className:"section section-dark",children:f.jsx("div",{className:"container",children:f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:56,alignItems:"start"},children:[f.jsxs("div",{children:[f.jsxs("div",{className:"section-label",children:[f.jsx(ls,{size:13}),"The Opportunity"]}),f.jsx("h2",{className:"section-title",style:{marginTop:14,marginBottom:18},children:"Investment Overview"}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[{label:"Company",value:"M²RL TechnologieS"},{label:"Type",value:"Sensor Manufacturing & R&D Startup"},{label:"Location",value:"Perattukkottai, Sivaganga, Tamil Nadu"},{label:"Stage",value:"Pre-Revenue / Seed Funding"},{label:"Ask",value:"₹28 Lakhs (INR)"},{label:"Use",value:"Machinery, Infrastructure & R&D"}].map(({label:e,value:t})=>f.jsxs("div",{style:{display:"flex",gap:16,padding:"14px 0",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[f.jsx("span",{style:{minWidth:110,fontSize:"13px",color:"rgba(255,255,255,0.4)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:e}),f.jsx("span",{style:{fontSize:"14.5px",color:"#fff",fontWeight:500},children:t})]},e))})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"section-label",style:{marginBottom:14},children:[f.jsx(ja,{size:13}),"Use of Funds"]}),f.jsx("h3",{style:{fontFamily:"Poppins",color:"#fff",fontSize:"1.3rem",fontWeight:700,marginBottom:24,marginTop:8},children:"Fund Allocation"}),P4.map(({label:e,pct:t,color:n})=>f.jsxs("div",{style:{marginBottom:20},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:"13.5px",fontWeight:600,color:"rgba(255,255,255,0.8)"},children:[f.jsx("span",{children:e}),f.jsxs("span",{style:{color:n},children:[t,"%"]})]}),f.jsx("div",{style:{background:"rgba(255,255,255,0.06)",borderRadius:100,height:8,overflow:"hidden"},children:f.jsx("div",{style:{width:`${t}%`,height:"100%",background:n,borderRadius:100,transition:"width 1s ease",boxShadow:`0 0 8px ${n}80`}})})]},e))]})]})})}),f.jsx("section",{className:"section section-light",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(mt,{size:13}),"Value Proposition"]}),f.jsx("h2",{className:"section-title",children:"Why Invest in M²RL?"}),f.jsx("p",{className:"section-subtitle",children:"Strong fundamentals, ready infrastructure, and a clear path to manufacturing"})]}),f.jsx("div",{className:"grid-2",style:{gap:16},children:T4.map(({Icon:e,text:t})=>f.jsxs("div",{style:{display:"flex",gap:14,alignItems:"flex-start",padding:"18px 20px",borderRadius:14,background:"#fff",border:"1px solid var(--border)",boxShadow:"var(--shadow-card)",transition:"all 0.25s"},children:[f.jsx("div",{style:{width:38,height:38,borderRadius:10,background:"rgba(26,111,255,0.08)",border:"1px solid rgba(26,111,255,0.16)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(e,{size:18,color:"#1a6fff"})}),f.jsx("span",{style:{fontSize:"14.5px",color:"var(--text-secondary)",lineHeight:1.6,paddingTop:2},children:t})]},t))})]})}),f.jsx("section",{className:"section section-dark",children:f.jsx("div",{className:"container",style:{textAlign:"center"},children:f.jsxs("div",{style:{maxWidth:600,margin:"0 auto"},children:[f.jsx(_n,{size:48,color:"#f97316",style:{marginBottom:20,opacity:.9}}),f.jsx("h2",{className:"section-title",style:{marginBottom:18},children:"Ready to Partner With Us?"}),f.jsx("p",{className:"section-subtitle",style:{marginBottom:36},children:"We invite investors, mentors, and strategic partners to connect with us and explore this opportunity together."}),f.jsxs(be,{to:"/contact",className:"btn btn-saffron",style:{fontSize:"15.5px",padding:"16px 36px"},children:[f.jsx(df,{size:16})," Express Your Interest"]})]})})})]})}const O4=[{Icon:ga,title:"Embedded Systems Engineer",type:"Full-time",skills:["C/C++","Arduino","Raspberry Pi","RTOS"],color:"#1a6fff"},{Icon:jn,title:"R&D Sensor Specialist",type:"Full-time",skills:["Analog Sensors","Signal Processing","PCB Design"],color:"#10b981"},{Icon:Do,title:"IoT Systems Developer",type:"Full-time",skills:["MQTT","LoRa","Node.js","Cloud APIs"],color:"#8b5cf6"},{Icon:$m,title:"UI/UX Product Designer",type:"Part-time",skills:["Figma","Prototyping","Design Systems"],color:"#f97316"},{Icon:ya,title:"Web Developer",type:"Freelance",skills:["React","Vite","Node.js","CSS"],color:"#06b6d4"}],L4=["Work on cutting-edge Indian sensor technology","Direct involvement in product R&D from day one","Flexible and growth-oriented work environment","Be part of a Make in India manufacturing startup","Shape the culture and engineering practices early on"];function A4(){return f.jsxs("div",{children:[f.jsx("div",{className:"page-banner",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(dr,{size:13}),"Join Our Team"]}),f.jsx("h1",{className:"page-banner-title",style:{marginTop:14},children:"Build the Future With Us"}),f.jsx("p",{className:"page-banner-subtitle",children:"M²RL TechnologieS is growing its core team. We are looking for talented engineers, designers, and innovators passionate about sensor technology and the Make in India movement."})]})}),f.jsx("div",{className:"tricolor-stripe"}),f.jsx("section",{className:"section section-light",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(ls,{size:13}),"Opportunities"]}),f.jsx("h2",{className:"section-title",children:"Open Roles"}),f.jsx("p",{className:"section-subtitle",children:"We are in the hiring planning stage — positions open upon funding milestone completion"})]}),f.jsx("div",{className:"grid-auto",children:O4.map(({Icon:e,title:t,type:n,skills:r,color:s})=>f.jsxs("div",{className:"card",style:{padding:"32px 26px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:14,marginBottom:18},children:[f.jsx("div",{style:{width:50,height:50,borderRadius:14,background:`${s}14`,border:`1px solid ${s}28`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(e,{size:24,color:s})}),f.jsxs("div",{children:[f.jsx("h3",{style:{fontFamily:"Poppins",fontWeight:700,fontSize:"0.97rem",color:"var(--text-primary)",marginBottom:6},children:t}),f.jsx("span",{style:{fontSize:"11px",fontWeight:700,padding:"3px 10px",borderRadius:100,background:`${s}12`,color:s,border:`1px solid ${s}28`,textTransform:"uppercase",letterSpacing:"0.5px"},children:n})]})]}),f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:r.map(o=>f.jsx("span",{style:{fontSize:"11.5px",padding:"3px 10px",borderRadius:100,background:"var(--light-bg)",border:"1px solid var(--border)",color:"var(--text-secondary)",fontWeight:500},children:o},o))})]},t))})]})}),f.jsx("section",{className:"section section-dark",children:f.jsx("div",{className:"container",children:f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:56,alignItems:"center"},children:[f.jsxs("div",{children:[f.jsxs("div",{className:"section-label",style:{marginBottom:14},children:[f.jsx(mt,{size:13}),"Why M²RL"]}),f.jsx("h2",{className:"section-title",style:{marginTop:0,marginBottom:18},children:"Why Join Us?"}),f.jsx("p",{style:{color:"rgba(255,255,255,0.6)",lineHeight:1.85,marginBottom:28,fontSize:"15px"},children:"Joining M²RL means being a founding-stage team member in a mission-driven startup with a clear product roadmap and real manufacturing infrastructure already in place."}),f.jsxs(be,{to:"/contact",className:"btn btn-primary",children:[f.jsx(df,{size:16})," Express Your Interest"]})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:L4.map((e,t)=>f.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",padding:"14px 18px",borderRadius:12,background:"rgba(26,111,255,0.07)",border:"1px solid rgba(26,111,255,0.14)",animationDelay:`${t*.08}s`},children:[f.jsx(mt,{size:16,color:"#10b981",style:{flexShrink:0}}),f.jsx("span",{style:{color:"rgba(255,255,255,0.75)",fontSize:"14px",lineHeight:1.5},children:e})]},e))})]})})}),f.jsx("section",{className:"section section-light",children:f.jsxs("div",{className:"container",style:{textAlign:"center"},children:[f.jsx("div",{style:{width:80,height:80,borderRadius:"50%",background:"linear-gradient(135deg,rgba(26,111,255,0.1),rgba(249,115,22,0.08))",border:"1px solid rgba(26,111,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px"},children:f.jsx(ls,{size:36,color:"#1a6fff"})}),f.jsx("h2",{className:"section-title",style:{marginBottom:16},children:"Don't See Your Role?"}),f.jsx("p",{style:{color:"var(--text-muted)",maxWidth:500,margin:"0 auto 32px",lineHeight:1.75,fontSize:"15px"},children:"We welcome initiative. If you're passionate about sensor technology and believe you can contribute, reach out with your profile."}),f.jsxs(be,{to:"/contact",className:"btn btn-primary",style:{fontSize:"15.5px",padding:"14px 36px",display:"inline-flex",alignItems:"center",gap:8},children:[f.jsx($o,{size:16})," Express Your Interest"]})]})})]})}const $4=[{Icon:pd,title:"Agricultural Sensor R&D",desc:"Research into precision agriculture — soil sensing, crop health monitoring, micro-weather stations, and drone-integrated sensor packs for the Indian farming sector.",color:"#10b981",status:"Active Research"},{Icon:gs,title:"Industrial IoT Sensors",desc:"Development of gas detection, temperature-pressure, and vibration sensors for manufacturing environments and predictive maintenance systems.",color:"#1a6fff",status:"In Design Phase"},{Icon:id,title:"Wireless Sensor Networks",desc:"Low-power LoRa, Zigbee, and NB-IoT communication modules for large-scale remote sensor deployments in agriculture and infrastructure.",color:"#8b5cf6",status:"Prototyping"},{Icon:ga,title:"Embedded Systems & Robotics",desc:"Custom PCB design, embedded firmware, and robotic automation systems for sensor-driven machines and autonomous field vehicles.",color:"#f97316",status:"Active Research"},{Icon:_a,title:"Drone Sensor Integration",desc:"Lightweight multi-spectral and environmental sensor payloads for agricultural and industrial drone platforms.",color:"#06b6d4",status:"Conceptual Stage"},{Icon:J0,title:"Energy Harvesting R&D",desc:"Solar and ambient energy harvesting circuits for self-powered remote sensor nodes used in field deployments.",color:"#eab308",status:"Early Research"}],D4=[{Icon:mt,text:"Company registered & MSME certified (Udyam)"},{Icon:mt,text:"Startup India recognition received"},{Icon:mt,text:"NSWS portal registration completed"},{Icon:mt,text:"Land and three-phase power infrastructure secured"},{Icon:mt,text:"Core R&D team formed and research initiated"},{Icon:pl,text:"Sensor prototype development — In Progress"},{Icon:pl,text:"PCB design & testing lab setup — Planned"},{Icon:em,text:"Manufacturing launch — Pending Funding"}];function F4(){return f.jsxs("div",{children:[f.jsx("div",{className:"page-banner",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(jn,{size:13}),"Research & Development"]}),f.jsx("h1",{className:"page-banner-title",style:{marginTop:14},children:"R&D Division"}),f.jsx("p",{className:"page-banner-subtitle",children:"Our research-first philosophy drives the innovation behind every M²RL sensor product — from concept to prototype to production."})]})}),f.jsx("div",{className:"tricolor-stripe"}),f.jsx("section",{className:"section section-dark",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header",children:[f.jsxs("div",{className:"section-label",children:[f.jsx(Lm,{size:13}),"Research Areas"]}),f.jsx("h2",{className:"section-title",children:"Our R&D Focus Areas"}),f.jsx("p",{className:"section-subtitle",children:"Six core research verticals driving the next generation of Indian sensor technology"})]}),f.jsx("div",{className:"grid-3",style:{gap:24},children:$4.map(({Icon:e,title:t,desc:n,color:r,status:s})=>f.jsxs("div",{className:"card-glass",style:{padding:"32px 28px",borderTop:`2px solid ${r}50`},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18},children:[f.jsx("div",{style:{width:52,height:52,borderRadius:14,background:`${r}15`,border:`1px solid ${r}30`,display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(e,{size:24,color:r})}),f.jsx("span",{style:{fontSize:11,fontWeight:600,padding:"4px 10px",borderRadius:100,background:`${r}15`,color:r,border:`1px solid ${r}30`,whiteSpace:"nowrap"},children:s})]}),f.jsx("h3",{style:{fontFamily:"Poppins",fontSize:"1.02rem",fontWeight:700,color:"#fff",marginBottom:10},children:t}),f.jsx("p",{style:{fontSize:"13.5px",color:"rgba(255,255,255,0.55)",lineHeight:1.7},children:n})]},t))})]})}),f.jsx("section",{className:"section section-light",children:f.jsx("div",{className:"container",children:f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:56,alignItems:"center"},children:[f.jsxs("div",{children:[f.jsxs("div",{className:"section-label",children:[f.jsx(Xm,{size:13}),"Progress"]}),f.jsx("h2",{className:"section-title",style:{textAlign:"left",marginTop:14,marginBottom:18},children:"R&D Milestones"}),f.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.85,marginBottom:28,fontSize:"15.5px"},children:"Our R&D journey has been methodical — starting with legal establishment and infrastructure, and moving towards full-scale prototype development and manufacturing readiness."}),f.jsxs(be,{to:"/investor",className:"btn btn-primary",children:[f.jsx($o,{size:16})," View Investment Details"]})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:D4.map(({Icon:e,text:t},n)=>{const r=n<5;return f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:14,padding:"14px 18px",borderRadius:12,background:r?"rgba(16,185,129,0.06)":"rgba(26,111,255,0.04)",border:`1px solid ${r?"rgba(16,185,129,0.18)":"rgba(26,111,255,0.12)"}`},children:[f.jsx(e,{size:18,color:r?"#10b981":"#1a6fff",style:{flexShrink:0,marginTop:1}}),f.jsx("span",{style:{fontSize:"14px",color:"var(--text-secondary)",lineHeight:1.5},children:t})]},t)})})]})})}),f.jsx("section",{className:"section section-dark",children:f.jsxs("div",{className:"container",style:{textAlign:"center"},children:[f.jsxs("div",{className:"section-label",style:{marginBottom:18},children:[f.jsx(_m,{size:13}),"Collaborate"]}),f.jsx("h2",{className:"section-title",style:{marginBottom:16},children:"Partner in Research"}),f.jsx("p",{className:"section-subtitle",style:{marginBottom:36},children:"We welcome academic institutions, tech companies, and individual researchers to collaborate on sensor R&D projects."}),f.jsxs(be,{to:"/contact",className:"btn btn-saffron",children:[f.jsx($o,{size:16})," Reach Out for Collaboration"]})]})})]})}const B4=[{id:1,img:"/Achievements/Anbu.png",title:"Supporting MSME Registration for ANBUKUMAR.CAREERS",category:"CERTIFICATION",date:"FEB 2026",description:"Successfully assisted ANBUKUMAR.CAREERS in obtaining MSME (Udyam) Registration, enabling the organization to access government recognition and business development opportunities."},{id:2,img:"/Achievements/Oscar.png",title:"Supporting MSME Registration for OSCAR ACADEMY",category:"CERTIFICATION",date:"MAR 2026",description:"Successfully guided OSCAR ACADEMY through the MSME (Udyam) Registration process, This achievement reflects our dedication to helping educational institutions gain government recognition and unlock opportunities for sustainable growth."},{id:3,img:"/Achievements/STJ.png",title:"Supporting MSME Registration for STJ ACADEMY",category:"CERTIFICATION",date:"JUN 2021",description:"Successfully assisted STJ ACADEMY in obtaining MSME (Udyam) Registration, enabling the organization to access government recognition and business development opportunities."},{id:4,img:"/Achievements/Oscar-Tab.png",title:"M²RL TechnologieS & OSCAR ACADEMY – Student Digital Empowerment Program",category:"STUDENT DIGITAL BRANDING",date:"APR 2026",description:"As part of our collaboration with OSCAR ACADEMY, M²RL TechnologieS provided social media setup and digital branding support for student Janani. Showcase her achievements, and encourage digital learning and personal growth."},{id:5,img:"/Achievements/OscarMoU.png",title:"MoU Signed with OSCAR ACADEMY for Student Digital Development",category:"CERTIFICATION",date:"OCT 2026",description:"M²RL TechnologieS signed a Memorandum of Understanding (MoU) with OSCAR ACADEMY to support student Janani through social media management and digital branding initiatives. This collaboration aims to enhance students professional online presence."}];function U4({title:e,category:t,date:n,description:r,img:s}){return f.jsxs("div",{className:"card",children:[f.jsx("img",{src:s,alt:e,className:"img"}),f.jsxs("div",{className:"textBox",children:[f.jsx("span",{className:"category",children:t}),f.jsx("p",{className:"text head",children:e}),f.jsx("p",{className:"description ",children:r}),f.jsx("p",{className:"text price",children:n})]})]})}function W4(){return f.jsxs("div",{className:"page",children:[f.jsx("style",{children:`
       @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Cinzel:wght@600;700&display=swap');

        .about-page { font-family: 'DM Sans', sans-serif; }

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-cinzel  { font-family: 'Cinzel', serif; }
        .page {
          min-height: 100vh;
          background: #1c1c1c00;
          padding: 60px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 350px; 
        }
        .heading {
          color: white;
          font-size: 50px;
          font-weight: bold;
          margin-bottom: 8px;
          text-align: center;
          font-family: 'Cormorant Garamond', serif;
        }
        .subheading {
          color: #9a9a9a;
          font-size: 14px;
          margin-bottom: 48px;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
          max-width: 1080px;
          width: 100%;
        }
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .page {
            margin-bottom: 500px;
          }
          .grid {
            grid-template-columns: 1fr;
          }
        }
        .card {
          position: relative;
          width: 100%;
          height: 340px;
          background: #313131;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          transition: 0.2s ease-in-out;
          overflow: hidden;
        }
        .img {
          width: 100%;
          height: 100%;
          position: absolute;
          color: #c6a15b;
          transition: 0.2s ease-in-out;
          z-index: 1;
        }
        .textBox {
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0px;
          transition: 0.2s ease-in-out;
          z-index: 2;
          text-align: center;
        }
        .textBox > .text {
          font-weight: bold;
        }
        .textBox > .head {
          font-size: 20px;
        }
        .textBox > .price {
          font-size: 15px;
          color: #c6a15b;
          margin-top: 4px;
        }
        .textBox > .category {
          font-size: 11px;
          letter-spacing: 0.1em;
          color: lightgrey;
        }
        .textBox > .description {
          font-size: 13px;
          line-height: 1.5;
          color: #000000;
        }
        .card:hover > .textBox {
          opacity: 1;
        }
        .card:hover > .img {
          transform: scale(2.1);
          filter: blur(7px);
          animation: anim 3s infinite;
        }
        @keyframes anim {
          0% { transform: scale(2.1) translateY(0); }
          50% { transform: scale(2.1) translateY(-20px); }
          100% { transform: scale(2.1) translateY(0); }
        }
        .card:hover {
          transform: scale(1.03) rotate(-1deg);
        }
      `}),f.jsx("h1",{className:"heading",children:"Achievements"}),f.jsx("p",{className:"subheading",children:"Hover a card to reveal the details"}),f.jsx("div",{className:"grid",children:B4.map(e=>f.jsx(U4,{title:e.title,category:e.category,date:e.date,description:e.description,img:e.img},e.id))})]})}const H4=["event/img1.avif","event/img2.avif","event/img3.avif","event/img4.avif","event/img5.avif"],V4=({images:e=H4})=>{const t=e.length;return f.jsx(q4,{children:f.jsxs("div",{className:"bg-wrapper bg-transparent",children:[f.jsx(Fd,{}),f.jsx("div",{className:"inner",style:{"--quantity":t},children:e.map((n,r)=>f.jsx("div",{className:"card",style:{"--index":r},children:f.jsx("div",{className:"img",style:{backgroundImage:`url(${n})`}})},r))}),f.jsx("div",{className:"overlay"})]})})},q4=wf.div`

  .bg-wrapper {
    position: fixed;
    inset: 0;
    width: 100vw;
    top: -200px;
    height: 130vh;
    z-index: -1;
    background: transparent;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none; /* let clicks pass through to page content */
  }

  /* darkens the carousel so foreground text/cards stay readable */
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(8, 8, 8, 0.24);
    z-index: 2;
  }

  .inner {
    --w: 185px;
    --h: 240px;   /* 135:240 = 9:16 */
    --translateZ: calc((var(--w) + var(--h)) + 60px);
    --rotateX: -10deg;
    --perspective: 1200px;
    position: relative;
    width: var(--w);
    height: var(--h);
    z-index: 1;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 28s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 2px solid rgba(var(--color-card), 0.5);
    border-radius: 12px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
  }

  .img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: brightness(0.8) ;
  }

  @media (max-width: 600px) {
    .inner {
        --w: 100px;
        --h: 160px;
    }
  }
`;function Y4(){return f.jsxs("div",{children:[f.jsx(W4,{}),f.jsx(V4,{})]})}const Q4=()=>f.jsx(K4,{children:f.jsx("div",{className:"not_found_body",children:f.jsx("div",{className:"not_found_container",children:f.jsx("div",{className:"not_found_main",children:f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 355",className:"not_found_svg",children:[f.jsxs("g",{id:"not_found_ocean",children:[f.jsx("path",{id:"not_found_sky",className:"not_found_st0",d:"M0 0h1000v203.1H0z"}),f.jsxs("linearGradient",{id:"not_found_water_1_",gradientUnits:"userSpaceOnUse",x1:500,y1:354,x2:500,y2:"200.667",children:[f.jsx("stop",{offset:0,stopColor:"#fff"}),f.jsx("stop",{offset:1,stopColor:"#b3dcdf"})]}),f.jsx("path",{id:"not_found_water",fill:"url(#not_found_water_1_)",d:"M0 200.7h1000V354H0z"}),f.jsx("path",{id:"not_found_land",className:"not_found_st0",d:"M0 273.4h1000V354H0z"}),f.jsxs("g",{id:"not_found_bumps",children:[f.jsx("path",{className:"not_found_st0",d:"M0 275.2s83.8-28 180-28 197 28 197 28H0z"}),f.jsx("path",{className:"not_found_st0",d:"M377 275.2s54.7-28 117.5-28 128.6 28 128.6 28H377z"}),f.jsx("path",{className:"not_found_st0",d:"M623.2 275.2s83.7-28 179.9-28 196.9 28 196.9 28H623.2z"}),f.jsx("path",{className:"not_found_st0",d:"M-998 275.2s83.8-28 180-28 197 28 197 28h-377z"}),f.jsx("path",{className:"not_found_st0",d:"M-621 275.2s54.7-28 117.5-28 128.6 28 128.6 28H-621z"}),f.jsx("path",{className:"not_found_st0",d:"M-374.8 275.2s83.7-28 179.9-28S2 275.2 2 275.2h-376.8z"})]})]}),f.jsxs("g",{id:"not_found_tracks",children:[f.jsx("path",{className:"not_found_st2",d:"M9.8 282.4h-3L0 307.6h3z"}),f.jsx("path",{className:"not_found_st2",d:"M19.8 282.4h-3L10 307.6h3z"}),f.jsx("path",{className:"not_found_st2",d:"M29.8 282.4h-3L20 307.6h3z"}),f.jsx("path",{className:"not_found_st2",d:"M39.8 282.4h-3L30 307.6h3z"}),f.jsx("path",{className:"not_found_st2",d:"M49.8 282.4h-3L40 307.6h3z"}),f.jsx("path",{className:"not_found_st2",d:"M59.8 282.4h-3L50 307.6h3z"}),f.jsx("path",{className:"not_found_st2",d:"M69.8 282.4h-3L60 307.6h3z"}),f.jsx("path",{className:"not_found_st2",d:"M79.8 282.4h-3L70 307.6h3z"}),f.jsx("path",{className:"not_found_st2",d:"M89.8 282.4h-3L80 307.6h3z"}),f.jsx("path",{className:"not_found_st2",d:"M99.8 282.4h-3L90 307.6h3z"}),f.jsx("path",{className:"not_found_st2",d:"M109.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M119.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M129.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M139.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M149.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M159.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M169.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M179.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M189.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M199.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M209.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M219.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M229.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M239.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M249.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M259.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M269.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M279.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M289.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M299.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M309.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M319.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M329.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M339.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M349.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M359.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M369.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M379.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M389.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M399.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M409.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M419.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M429.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M439.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M449.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M459.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M469.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M479.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M489.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M499.8 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M1000 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M990 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M980 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M970 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M960 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M950 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M940 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M930 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M920 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M910 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M900 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M890 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M880 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M870 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M860 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M850 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M840 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M830 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M820 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M810 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M800 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M790 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M780 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M770 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M760 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M750 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M740 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M730 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M720 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M710 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M700 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M690 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M680 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M670 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M660 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M650 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M640 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M630 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M620 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M610 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M600 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M590 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M580 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M570 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M560 282.4h-3l-6.8 25.2h3z"}),f.jsxs("g",{children:[f.jsx("path",{className:"not_found_st2",d:"M-490.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-480.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-470.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-460.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-450.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-440.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-430.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-420.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-410.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-400.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-390.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-380.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-370.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-360.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-350.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-340.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-330.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-320.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-310.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-300.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-290.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-280.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-270.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-260.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-250.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-240.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-230.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-220.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-210.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-200.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-190.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-180.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-170.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-160.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-150.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-140.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-130.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-120.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-110.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-100.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-90.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-80.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-70.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-60.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-50.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-40.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-30.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-20.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-10.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M-.2 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M500 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M490 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M480 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M470 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M460 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M450 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M440 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M430 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M420 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M410 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M400 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M390 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M380 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M370 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M360 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M350 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M340 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M330 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M320 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M310 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M300 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M290 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M280 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M270 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M260 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M250 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M240 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M230 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M220 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M210 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M200 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M190 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M180 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M170 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M160 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M150 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M140 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M130 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M120 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M110 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M100 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M90 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M80 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M70 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M60 282.4h-3l-6.8 25.2h3z"})]}),f.jsx("path",{className:"not_found_st2",d:"M550 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M540 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M530 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M520 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M510 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M550 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M540 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M530 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M520 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st2",d:"M510 282.4h-3l-6.8 25.2h3z"}),f.jsx("path",{className:"not_found_st3",d:"M-499.5 300.2H1000v5.1H-499.5z"}),f.jsx("path",{className:"not_found_st3",d:"M-499.5 283.8H1000v2.8H-499.5z"})]}),f.jsxs("g",{id:"not_found_cloudsAll",children:[f.jsx("path",{id:"not_found_cloud1",className:"not_found_st4",d:"M19.5 69.7s-21.3.5-25-12.2c0 0-4.3-21.3 16-21.8 0 0-2.1-12.2 12.2-14.9 0 0 15-3.2 21.3 6.9 0 0 3.6-20.7 17.8-22.3 0 0 24-3 26.6 13.1 0 0 .1 9.5-2.8 13.5 0 0 9.5-15 26.5-4.8 0 0 12.1 7.9 7 20.2 0 0 16 4.8 10.1 18.1 0 0-10.2 8.5-17.1-1.1 0 0-5.5 16-32.5 16 0 0-19.1 2.1-27-13.3 0 0 .5 10.1-13.3 10.6-.1 0-20.3 3.2-19.8-8z"}),f.jsx("path",{id:"not_found_cloud3",className:"not_found_st4",d:"M836 132s-18.3 2.1-22.2-4.9c0 0-4.9-11.8 12.5-13.8 0 0-2.5-6.8 9.7-9.6 0 0 12.7-3.1 18.7 2.1 0 0 2-12.2 14-14.3 0 0 16.6-3.3 23.7 2.1 0 0 4.8 3.9 2.4 6.5 0 0 3.1-4.8 18.4-.4 0 0 10.9 3.5 7.2 11 0 0 13.8-1.5 9.7 9.5 0 0-4.1 10.8-15.5 4.8 0 0-3.1 5.6-26.4 7.9 0 0-16.3 2.8-24-5.3 0 0 1 5.7-10.8 7.2-.1.1-17.2 3.6-17.4-2.8z"}),f.jsx("path",{id:"not_found_cloud2",className:"not_found_st4",d:"M19.3 159.5s-15.9.6-18.8-5.1c0 0-3.4-9.5 11.7-10.1 0 0-1.7-5.5 9-6.9 0 0 11.2-1.7 16 2.8 0 0 2.5-9.4 13.1-10.3 0 0 17.9-1.8 20 5.4 0 0 .2 4.3-2 6.1 0 0 6.9-6.9 19.8-2.6 0 0 9.1 3.4 5.5 9 0 0 6.5 0 4.5 6.7 0 0-2.6 5.6-9.6 1 0 0-4 7.3-24.2 7.7 0 0-14.2 1.3-20.4-5.5 0 0 .5 4.5-9.8 5 0 .1-15 1.8-14.8-3.2z"}),f.jsx("path",{id:"not_found_cloud4",className:"not_found_st4",d:"M370.3 109.5s15.9.6 18.8-5.1c0 0 3.4-9.5-11.7-10.1 0 0 1.7-5.5-9-6.9 0 0-11.2-1.7-16 2.8 0 0-2.5-9.4-13.1-10.3 0 0-17.9-1.8-20 5.4 0 0-.2 4.3 2 6.1 0 0-6.9-6.9-19.8-2.6 0 0-9.1 3.4-5.5 9 0 0-12 1.9-7.7 8 0 0 7.5 4 12.8-.2 0 0 4 7.3 24.2 7.7 0 0 14.2 1.3 20.4-5.5 0 0-.5 4.5 9.8 5 0 0 15.1 1.7 14.8-3.3z"}),f.jsx("path",{id:"not_found_cloud5",className:"not_found_st4",d:"M511.7 12.4s-21.3-.3-25 7c0 0-4.3 12.2 16 12.5 0 0-2.1 7 12.2 8.6 0 0 15 1.8 21.3-4 0 0 3.6 11.9 17.8 12.8 0 0 19.5 1.6 27-4.4 0 0 5-4.4 2.1-6.7 0 0 4.1 4.4 21.2-1.5 0 0 12.1-4.6 7-11.6 0 0 16-2.8 10.1-10.4 0 0-10.2-4.9-17.1.6 0 0-5.5-9.2-32.5-9.2 0 0-19.1-1.2-27 7.6 0 0 .5-5.8-13.3-6.1-.1.2-20.3-1.6-19.8 4.8z"})]}),f.jsxs("g",{id:"not_found_train",children:[f.jsx("path",{fill:"#b3dcdf",d:"M344.5 248.5h507.2v37.8H344.5z"}),f.jsxs("g",{id:"not_found_wheels",children:[f.jsx("circle",{className:"not_found_st6",cx:"384.1",cy:"285.6",r:"15.1"}),f.jsx("path",{className:"not_found_st2",d:"M384.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"}),f.jsx("circle",{className:"not_found_st6",cx:"416.1",cy:"285.6",r:"15.1"}),f.jsx("path",{className:"not_found_st2",d:"M416.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"}),f.jsx("circle",{className:"not_found_st6",cx:"469.1",cy:"285.6",r:"15.1"}),f.jsx("path",{className:"not_found_st2",d:"M469.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"}),f.jsx("circle",{className:"not_found_st6",cx:"734.1",cy:"285.6",r:"15.1"}),f.jsx("path",{className:"not_found_st2",d:"M734.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"}),f.jsx("circle",{className:"not_found_st6",cx:"766.1",cy:"285.6",r:"15.1"}),f.jsx("path",{className:"not_found_st2",d:"M766.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"}),f.jsx("circle",{className:"not_found_st6",cx:"821.1",cy:"285.6",r:"15.1"}),f.jsx("path",{className:"not_found_st2",d:"M821.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"})]}),f.jsx("path",{id:"not_found_bracefront",className:"not_found_st7",d:"M383.2 285.6h88.1"}),f.jsx("path",{id:"not_found_braceback",className:"not_found_st7",d:"M733.2 285.6h88.1"}),f.jsxs("g",{id:"not_found_car-layers",children:[f.jsx("path",{id:"not_found_car",className:"not_found_st8",d:"M321.8 300.7v-32.4s1.2.7-1.5-2.4v-29.1s3.1-11.6 10.7-21.1c0 0 7.6-12 15.5-17.5h1.3s10.2-4.9 30.9-28h.6s-.9-1.4 0-2.7c0 0 10.1-10.5 21-12.3 0 0 9.4-1.8 20.2-1.8h47.7V151H492v-1.1h10.1v1.1h19v2.2s8.2.9 19.2-4.2c0 0 1.4-1.1 28.8-1.1h291.5v6.8h7.5v2.2s12.2-.6 12.2 9.8V177l-10-.1v57.9s14.9-.5 14.9 10.2c0 0 1 9-14.9 8.9v3.8H719.5s-2.4.1-4.3 3l-15 29s-2.9 5.1-10.8 5.1H504.3s-2.9.1-6.1-5l-13.1-25s-4.5-7.1-11.8-7.1H369v2.4s-3.2 1.3-7.1 8.7L351.4 289s-2.9 6.3-6.9 6.4h-17.8l-4.9 5.3z"}),f.jsx("path",{id:"not_found_streamline-outine",className:"not_found_st8",d:"M320.3 236.6s1.4-6.8 4.4-11.3c0 0 .1-2.3 23.2-6.3l78-16.6s103.3-21.1 134.9-26.1c0 0 93.3-16 120.5-17.9 0 0 57.6-4.3 100-4.1h88.9v63.4s-10.3 5.4-17.1 5.3c0 0-305.6 4.9-366.3 8.1 0 0-100.3 4.8-119.1 6.8 0-.1-46.6 1.2-47.4-1.3z"}),f.jsxs("g",{id:"not_found_window-grate",children:[f.jsx("path",{className:"not_found_st9",d:"M739.5 182.6H854"}),f.jsx("path",{className:"not_found_st9",d:"M739.5 177.6H854"}),f.jsx("path",{className:"not_found_st9",d:"M739.5 172.6H854"}),f.jsx("path",{className:"not_found_st9",d:"M739.5 167.6H854"}),f.jsx("path",{className:"not_found_st9",d:"M739.5 161.4H854v26.1H739.5z"})]}),f.jsx("path",{className:"not_found_st9",d:"M320.3 257.8h549.9"}),f.jsxs("g",{id:"not_found_Text",children:[f.jsx("text",{transform:"translate(377.037 230.025)",className:"not_found_st8 not_found_st10",fontSize:21,children:"404"}),f.jsx("text",{transform:"translate(659.5 213.994)",className:"not_found_st8 not_found_st10",fontSize:"24.025",children:"Page not found."})]}),f.jsxs("g",{id:"not_found_ladders",children:[f.jsxs("g",{id:"not_found_ladder-f",children:[f.jsx("path",{id:"not_found_front-ladder",className:"not_found_st8",d:"M433.8 258.4h17.8v34.8h-17.8z"}),f.jsx("path",{id:"not_found_fb-rung",className:"not_found_st9",d:"M433.8 281.1h17.7"}),f.jsx("path",{id:"not_found_ft-rung",className:"not_found_st9",d:"M433.8 268.6h17.7"})]}),f.jsxs("g",{id:"not_found_ladder-b",children:[f.jsx("path",{id:"not_found_ladder-back",className:"not_found_st8",d:"M851.8 257.8h17.8v34.8h-17.8z"}),f.jsx("path",{id:"not_found_bt-rung",className:"not_found_st9",d:"M851.8 268.6h17.7"}),f.jsx("path",{id:"not_found_bb-rung",className:"not_found_st9",d:"M851.8 281.1h17.7"})]})]}),f.jsx("path",{id:"not_found_window-front",className:"not_found_st8",d:"M350.5 196.4s-.4 3.9 15.2 4.3l32.3-30.3s-18.2 1.1-19-.8l-28.5 26.8z"})]})]})]})})})})}),K4=wf.div`
  .not_found_body {
    min-height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -100px;
  }

  .not_found_container {
    width: 100%;
  }

  .not_found_main {
    margin: 0 auto;
  }

  .not_found_svg {
    width: 100%;
    height: auto;
    display: block;
  }

  @keyframes not_found_pulse {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }

  /* SVG animations - with not_found prefix */
  .not_found_st0 {
    fill: #fff;
  }
  .not_found_st2 {
    fill: #5d89af;
  }
  .not_found_st3 {
    fill: #709abf;
  }
  .not_found_st4,
  .not_found_st6 {
    fill: #fff;
    stroke: #b3dcdf;
    stroke-miterlimit: 10;
  }
  .not_found_st6 {
    stroke: #5d89af;
    stroke-width: 2;
  }
  .not_found_st7,
  .not_found_st8,
  .not_found_st9 {
    stroke: #709abf;
    stroke-miterlimit: 10;
  }
  .not_found_st7 {
    stroke-width: 5;
    stroke-linecap: round;
    fill: none;
  }
  .not_found_st8,
  .not_found_st9 {
    fill: #fff;
  }
  .not_found_st9 {
    fill: none;
  }

  #not_found_cloud1 {
    animation: not_found_cloud003 15s linear infinite;
  }

  #not_found_cloud2 {
    animation: not_found_cloud002 25s linear infinite;
  }

  #not_found_cloud3 {
    animation: not_found_cloud003 20s linear infinite;
  }

  #not_found_cloud4 {
    animation: not_found_float 4s linear infinite;
  }

  #not_found_cloud5 {
    animation: not_found_float 8s linear infinite;
  }

  #not_found_tracks {
    animation: not_found_slide 650ms linear infinite;
  }

  #not_found_bumps {
    animation: not_found_land 10000ms linear infinite;
  }

  @keyframes not_found_jig {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(1px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  #not_found_car-layers {
    animation: not_found_jig 0.35s linear infinite;
  }

  @keyframes not_found_land {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(1000px);
    }
  }

  @keyframes not_found_slide {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(100px);
    }
  }

  @keyframes not_found_cloud002 {
    0% {
      transform: translateX(-1000px) translateY(3px);
    }
    100% {
      transform: translateX(1000px) translateY(0);
    }
  }

  @keyframes not_found_cloud003 {
    0% {
      transform: translateX(-1000px) translateY(3px);
    }
    100% {
      transform: translateX(1000px) translateY(0);
    }
  }

  @keyframes not_found_float {
    0% {
      transform: translateY(0px) translateX(0);
    }
    50% {
      transform: translateY(8px) translateX(5px);
    }
    100% {
      transform: translateY(0px) translateX(0);
    }
  }

  #not_found_bracefront,
  #not_found_braceback {
    animation: not_found_braces 1s linear infinite;
  }

  @keyframes not_found_braces {
    0% {
      transform: translateX(-2px);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-2px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(-2px);
    }
  }

  @media (max-width: 600px) {
    .not_found_title {
      font-size: 2em;
    }
    .not_found_text {
      font-size: 1em;
    }
    .not_found_btn {
      padding: 12px 25px;
    }
    .not_found_container {
      padding: 20px 10px;
    }
  }`;function G4(){return f.jsxs(D0,{children:[f.jsx(A5,{}),f.jsx(N5,{}),f.jsx("main",{style:{minHeight:"100vh"},children:f.jsxs(R0,{children:[f.jsx(Ye,{path:"/",element:f.jsx(g4,{})}),f.jsx(Ye,{path:"/about",element:f.jsx(w4,{})}),f.jsx(Ye,{path:"/products",element:f.jsx(b4,{})}),f.jsx(Ye,{path:"/contact",element:f.jsx(E4,{})}),f.jsx(Ye,{path:"/privacy",element:f.jsx(z4,{})}),f.jsx(Ye,{path:"/terms",element:f.jsx(M4,{})}),f.jsx(Ye,{path:"/investor",element:f.jsx(I4,{})}),f.jsx(Ye,{path:"/careers",element:f.jsx(A4,{})}),f.jsx(Ye,{path:"/rnd",element:f.jsx(F4,{})}),f.jsx(Ye,{path:"/achievements",element:f.jsx(Y4,{})}),f.jsx(Ye,{path:"*",element:f.jsx(Q4,{})})]})}),f.jsx(L5,{})]})}ci.createRoot(document.getElementById("root")).render(f.jsx(Ce.StrictMode,{children:f.jsx(G4,{})}));
