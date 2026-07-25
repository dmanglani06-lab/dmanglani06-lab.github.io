var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function T(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+T(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+T(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+T(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function E(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:E}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&T(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&T(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){_(ne,0)};function T(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,T(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),T=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=T&&e[T]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var E=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kd(t),e=qd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=qd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),ep._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var A=!1;function Te(e,t){if(!e||A)return``;A=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{A=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return we(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,j=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:Ke,M=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(M(e)/Ge|0)|0}var qe=256,N=262144,Je=4194304;function Ye(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ye(n))):i=Ye(o):i=Ye(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ye(n))):i=Ye(o)):i=Ye(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function P(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ze(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qe(){var e=Je;return Je<<=1,!(Je&62914560)&&(Je=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function et(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&nt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function nt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function it(e,t){var n=t&-t;return n=n&42?1:at(n),(n&(e.suspendedLanes|t))===0?n:0}function at(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ot(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function st(){var e=O.p;return e===0?(e=window.event,e===void 0?32:gp(e.type)):e}function ct(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var F=Math.random().toString(36).slice(2),lt=`__reactFiber$`+F,ut=`__reactProps$`+F,dt=`__reactContainer$`+F,ft=`__reactEvents$`+F,pt=`__reactListeners$`+F,mt=`__reactHandles$`+F,ht=`__reactResources$`+F,gt=`__reactMarker$`+F;function _t(e){delete e[lt],delete e[ut],delete e[ft],delete e[pt],delete e[mt]}function vt(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gf(e);e!==null;){if(n=e[lt])return n;e=gf(e)}return t}e=n,n=e.parentNode}return null}function yt(e){if(e=e[lt]||e[dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function xt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function St(e){e[gt]=!0}var Ct=new Set,wt={};function I(e,t){Tt(e,t),Tt(e+`Capture`,t)}function Tt(e,t){for(wt[e]=t,e=0;e<t.length;e++)Ct.add(t[e])}var Et=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},Ot={};function kt(e){return Oe.call(Ot,e)?!0:Oe.call(Dt,e)?!1:Et.test(e)?Ot[e]=!0:(Dt[e]=!0,!1)}function At(e,t,n){if(kt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Mt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Nt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Pt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ft(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function It(e){if(!e._valueTracker){var t=Pt(e)?`checked`:`value`;e._valueTracker=Ft(e,t,``+e[t])}}function Lt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Pt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Rt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var zt=/[\n"\\]/g;function Bt(e){return e.replace(zt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Vt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Nt(t)):e.value!==``+Nt(t)&&(e.value=``+Nt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ut(e,o,Nt(n)):Ut(e,o,Nt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Nt(s):e.removeAttribute(`name`)}function Ht(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){It(e);return}n=n==null?``:``+Nt(n),t=t==null?n:``+Nt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),It(e)}function Ut(e,t,n){t===`number`&&Rt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Wt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gt(e,t,n){if(t!=null&&(t=``+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Nt(n)}function L(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(E(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Nt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),It(e)}function Kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Jt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Yt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Jt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Jt(e,o,t[o])}function Xt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Zt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Qt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function en(){}var tn=null;function nn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rn=null,an=null;function on(e){var t=yt(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Bt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ut]||null;if(!a)throw Error(i(90));Vt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Lt(r)}break a;case`textarea`:Gt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Wt(e,!!n.multiple,t,!1)}}}var sn=!1;function cn(e,t,n){if(sn)return e(t,n);sn=!0;try{return e(t)}finally{if(sn=!1,(rn!==null||an!==null)&&(Du(),rn&&(t=rn,e=an,an=rn=null,on(t),e)))for(t=0;t<e.length;t++)on(e[t])}}function ln(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ut]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var un=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),dn=!1;if(un)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){dn=!0}}),window.addEventListener(`test`,fn,fn),window.removeEventListener(`test`,fn,fn)}catch{dn=!1}var pn=null,mn=null,hn=null;function gn(){if(hn)return hn;var e,t=mn,n=t.length,r,i=`value`in pn?pn.value:pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return hn=i.slice(e,1<r?1-r:void 0)}function _n(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vn(){return!0}function yn(){return!1}function bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?vn:yn,this.isPropagationStopped=yn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=bn(xn),Cn=f({},xn,{view:0,detail:0}),wn=bn(Cn),Tn,En,Dn,On=f({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Dn&&(Dn&&e.type===`mousemove`?(Tn=e.screenX-Dn.screenX,En=e.screenY-Dn.screenY):En=Tn=0,Dn=e),Tn)},movementY:function(e){return`movementY`in e?e.movementY:En}}),kn=bn(On),An=bn(f({},On,{dataTransfer:0})),jn=bn(f({},Cn,{relatedTarget:0})),R=bn(f({},xn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=bn(f({},xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Nn=bn(f({},xn,{data:0})),Pn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=bn(f({},Cn,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=_n(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?_n(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?_n(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=bn(f({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=bn(f({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=bn(f({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=bn(f({},On,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=bn(f({},xn,{newState:0,oldState:0})),Gn=[9,13,27,32],Kn=un&&`CompositionEvent`in window,qn=null;un&&`documentMode`in document&&(qn=document.documentMode);var Jn=un&&`TextEvent`in window&&!qn,Yn=un&&(!Kn||qn&&8<qn&&11>=qn),Xn=` `,Zn=!1;function Qn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function $n(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var er=!1;function tr(e,t){switch(e){case`compositionend`:return $n(t);case`keypress`:return t.which===32?(Zn=!0,Xn):null;case`textInput`:return e=t.data,e===Xn&&Zn?null:e;default:return null}}function nr(e,t){if(er)return e===`compositionend`||!Kn&&Qn(e,t)?(e=gn(),hn=mn=pn=null,er=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Yn&&t.locale!==`ko`?null:t.data;default:return null}}var rr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!rr[e.type]:t===`textarea`}function ar(e,t,n,r){rn?an?an.push(r):an=[r]:rn=r,t=Ad(t,`onChange`),0<t.length&&(n=new Sn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function cr(e){Td(e,0)}function lr(e){if(Lt(bt(e)))return e}function ur(e,t){if(e===`change`)return t}var dr=!1;if(un){var fr;if(un){var pr=`oninput`in document;if(!pr){var mr=document.createElement(`div`);mr.setAttribute(`oninput`,`return;`),pr=typeof mr.oninput==`function`}fr=pr}else fr=!1;dr=fr&&(!document.documentMode||9<document.documentMode)}function hr(){or&&(or.detachEvent(`onpropertychange`,gr),sr=or=null)}function gr(e){if(e.propertyName===`value`&&lr(sr)){var t=[];ar(t,sr,e,nn(e)),cn(cr,t)}}function _r(e,t,n){e===`focusin`?(hr(),or=t,sr=n,or.attachEvent(`onpropertychange`,gr)):e===`focusout`&&hr()}function vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return lr(sr)}function yr(e,t){if(e===`click`)return lr(t)}function br(e,t){if(e===`input`||e===`change`)return lr(t)}function xr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Sr=typeof Object.is==`function`?Object.is:xr;function Cr(e,t){if(Sr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Sr(e[i],t[i]))return!1}return!0}function wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tr(e,t){var n=wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=wr(n)}}function Er(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Er(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rt(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var kr=un&&`documentMode`in document&&11>=document.documentMode,Ar=null,jr=null,Mr=null,Nr=!1;function Pr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nr||Ar==null||Ar!==Rt(r)||(r=Ar,`selectionStart`in r&&Or(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Cr(Mr,r)||(Mr=r,r=Ad(jr,`onSelect`),0<r.length&&(t=new Sn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ir={animationend:Fr(`Animation`,`AnimationEnd`),animationiteration:Fr(`Animation`,`AnimationIteration`),animationstart:Fr(`Animation`,`AnimationStart`),transitionrun:Fr(`Transition`,`TransitionRun`),transitionstart:Fr(`Transition`,`TransitionStart`),transitioncancel:Fr(`Transition`,`TransitionCancel`),transitionend:Fr(`Transition`,`TransitionEnd`)},Lr={},Rr={};un&&(Rr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),`TransitionEvent`in window||delete Ir.transitionend.transition);function zr(e){if(Lr[e])return Lr[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rr)return Lr[e]=t[n];return e}var Br=zr(`animationend`),Vr=zr(`animationiteration`),Hr=zr(`animationstart`),Ur=zr(`transitionrun`),Wr=zr(`transitionstart`),Gr=zr(`transitioncancel`),Kr=zr(`transitionend`),qr=new Map,Jr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Jr.push(`scrollEnd`);function Yr(e,t){qr.set(e,t),I(t,[e])}var Xr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Zr=[],Qr=0,$r=0;function ei(){for(var e=Qr,t=$r=Qr=0;t<e;){var n=Zr[t];Zr[t++]=null;var r=Zr[t];Zr[t++]=null;var i=Zr[t];Zr[t++]=null;var a=Zr[t];if(Zr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ii(n,i,a)}}function ti(e,t,n,r){Zr[Qr++]=e,Zr[Qr++]=t,Zr[Qr++]=n,Zr[Qr++]=r,$r|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ni(e,t,n,r){return ti(e,t,n,r),ai(e)}function ri(e,t){return ti(e,null,null,t),ai(e)}function ii(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ai(e){if(50<vu)throw vu=0,yu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oi={};function si(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,t,n,r){return new si(e,t,n,r)}function li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ui(e,t){var n=e.alternate;return n===null?(n=ci(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function di(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)li(e)&&(s=1);else if(typeof e==`string`)s=Y(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=ci(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return pi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ci(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=ci(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=ci(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ci(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function pi(e,t,n,r){return e=ci(7,e,r,t),e.lanes=n,e}function mi(e,t,n){return e=ci(6,e,null,t),e.lanes=n,e}function hi(e){var t=ci(18,null,null,0);return t.stateNode=e,t}function gi(e,t,n){return t=ci(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _i=new WeakMap;function vi(e,t){if(typeof e==`object`&&e){var n=_i.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},_i.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var yi=[],bi=0,xi=null,Si=0,Ci=[],wi=0,Ti=null,Ei=1,Di=``;function Oi(e,t){yi[bi++]=Si,yi[bi++]=xi,xi=e,Si=t}function ki(e,t,n){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ti=e;var r=Ei;e=Di;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ei=1<<32-We(t)+i|n<<i|r,Di=a+e}else Ei=1<<a|n<<i|r,Di=e}function Ai(e){e.return!==null&&(Oi(e,1),ki(e,1,0))}function ji(e){for(;e===xi;)xi=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null;for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Di=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null}function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ei=t.id,Di=t.overflow,Ti=e}var Ni=null,Pi=null,z=!1,Fi=null,Ii=!1,Li=Error(i(519));function Ri(e){throw Wi(vi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Li}function zi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[lt]=e,t[ut]=r,n){case`dialog`:K(`cancel`,t),K(`close`,t);break;case`iframe`:case`object`:case`embed`:K(`load`,t);break;case`video`:case`audio`:for(n=0;n<Cd.length;n++)K(Cd[n],t);break;case`source`:K(`error`,t);break;case`img`:case`image`:case`link`:K(`error`,t),K(`load`,t);break;case`details`:K(`toggle`,t);break;case`input`:K(`invalid`,t),Ht(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:K(`invalid`,t);break;case`textarea`:K(`invalid`,t),L(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Id(t.textContent,n)?(r.popover!=null&&(K(`beforetoggle`,t),K(`toggle`,t)),r.onScroll!=null&&K(`scroll`,t),r.onScrollEnd!=null&&K(`scrollend`,t),r.onClick!=null&&(t.onclick=en),t=!0):t=!1,t||Ri(e,!0)}function Bi(e){for(Ni=e.return;Ni;)switch(Ni.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Ni=Ni.return}}function Vi(e){if(e!==Ni)return!1;if(!z)return Bi(e),z=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Jd(e.type,e.memoizedProps)),n=!n),n&&Pi&&Ri(e),Bi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Pi=hf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Pi=hf(e)}else t===27?(t=Pi,nf(e.type)?(e=mf,mf=null,Pi=e):Pi=t):Pi=Ni?pf(e.stateNode.nextSibling):null;return!0}function Hi(){Pi=Ni=null,z=!1}function Ui(){var e=Fi;return e!==null&&(iu===null?iu=e:iu.push.apply(iu,e),Fi=null),e}function Wi(e){Fi===null?Fi=[e]:Fi.push(e)}var Gi=fe(null),Ki=null,qi=null;function Ji(e,t,n){k(Gi,t._currentValue),t._currentValue=n}function Yi(e){e._currentValue=Gi.current,pe(Gi)}function Xi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Zi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Xi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Xi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Qi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Sr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[ep]:e.push(ep))}a=a.return}e!==null&&Zi(t,e,n,r),t.flags|=262144}function $i(e){for(e=e.firstContext;e!==null;){if(!Sr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ea(e){Ki=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ta(e){return ra(Ki,e)}function na(e,t){return Ki===null&&ea(e),ra(e,t)}function ra(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qi===null){if(e===null)throw Error(i(308));qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qi=qi.next=t;return n}var ia=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},aa=t.unstable_scheduleCallback,oa=t.unstable_NormalPriority,sa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ca(){return{controller:new ia,data:new Map,refCount:0}}function la(e){e.refCount--,e.refCount===0&&aa(oa,function(){e.controller.abort()})}var ua=null,da=0,fa=0,pa=null;function ma(e,t){if(ua===null){var n=ua=[];da=0,fa=_d(),pa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return da++,t.then(ha,ha),t}function ha(){if(--da===0&&ua!==null){pa!==null&&(pa.status=`fulfilled`);var e=ua;ua=null,fa=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var _a=D.S;D.S=function(e,t){su=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ma(e,t),_a!==null&&_a(e,t)};var va=fe(null);function ya(){var e=va.current;return e===null?Wl.pooledCache:e}function ba(e,t){t===null?k(va,va.current):k(va,t.pool)}function xa(){var e=ya();return e===null?null:{parent:sa._currentValue,pool:e}}var Sa=Error(i(460)),Ca=Error(i(474)),wa=Error(i(542)),Ta={then:function(){}};function Ea(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Da(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(en,en),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e;default:if(typeof t.status==`string`)t.then(en,en);else{if(e=Wl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e}throw ka=t,Sa}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ka=e,Sa):e}}var ka=null;function Aa(){if(ka===null)throw Error(i(459));var e=ka;return ka=null,e}function ja(e){if(e===Sa||e===wa)throw Error(i(483))}var Ma=null,Na=0;function Pa(e){var t=Na;return Na+=1,Ma===null&&(Ma=[]),Da(Ma,e,t)}function Fa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ia(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function La(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ui(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Oa(i)===t.type)?(t=a(t,n.props),Fa(t,n),t.return=e,t):(t=fi(n.type,n.key,n.props,null,e.mode,r),Fa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=pi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=mi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=fi(t.type,t.key,t.props,null,e.mode,n),Fa(n,t),n.return=e,n;case v:return t=gi(t,e.mode,n),t.return=e,t;case re:return t=Oa(t),f(e,t,n)}if(E(t)||oe(t))return t=pi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Pa(t),n);if(t.$$typeof===C)return f(e,na(e,t),n);Ia(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=Oa(n),p(e,t,n,r)}if(E(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Pa(n),r);if(n.$$typeof===C)return p(e,t,na(e,n),r);Ia(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Oa(r),m(e,t,n,r,i)}if(E(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Pa(r),i);if(r.$$typeof===C)return m(e,t,n,na(t,r),i);Ia(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),z&&Oi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&Oi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),z&&Oi(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&Oi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&Oi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&Oi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Oa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Fa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=pi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=fi(o.type,o.key,o.props,null,e.mode,c),Fa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=gi(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=Oa(o),b(e,r,o,c)}if(E(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Pa(o),c);if(o.$$typeof===C)return b(e,r,na(e,o),c);Ia(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=mi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Na=0;var i=b(e,t,n,r);return Ma=null,i}catch(t){if(t===Sa||t===wa)throw t;var a=ci(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ra=La(!0),za=La(!1),Ba=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ha(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ul&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ai(e),ii(e,null,n),t}return ti(e,r,t,n),ai(e)}function Ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qa=!1;function Ja(){if(qa){var e=pa;if(e!==null)throw e}}function Ya(e,t,n,r){qa=!1;var i=e.updateQueue;Ba=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(U&p)===p:(r&p)===p){p!==0&&p===fa&&(qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ba=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ql|=o,e.lanes=o,e.memoizedState=d}}function Xa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Za(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xa(n[e],t)}var Qa=fe(null),$a=fe(0);function eo(e,t){e=Xl,k($a,e),k(Qa,t),Xl=e|t.baseLanes}function to(){k($a,Xl),k(Qa,Qa.current)}function no(){Xl=$a.current,pe(Qa),pe($a)}var ro=fe(null),io=null;function ao(e){var t=e.alternate;k(uo,uo.current&1),k(ro,e),io===null&&(t===null||Qa.current!==null||t.memoizedState!==null)&&(io=e)}function oo(e){k(uo,uo.current),k(ro,e),io===null&&(io=e)}function so(e){e.tag===22?(k(uo,uo.current),k(ro,e),io===null&&(io=e)):co(e)}function co(){k(uo,uo.current),k(ro,ro.current)}function lo(e){pe(ro),io===e&&(io=null),pe(uo)}var uo=fe(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||uf(n)||df(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,mo=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function Co(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Sr(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Hs:Us,vo=!1,a=n(r,i),vo=!1,_o&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){D.H=Vs;var t=mo!==null&&mo.next!==null;if(po=0,ho=mo=B=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||oc||(e=e.dependencies,e!==null&&$i(e)&&(oc=!0))}function Do(e,t,n,r){B=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=mo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Ws,o=t(n,r)}while(_o);return o}function Oo(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(mo===null?null:mo.memoizedState)!==e&&(B.flags|=1024),t}function ko(){var e=yo!==0;return yo=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jo(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}po=0,ho=mo=B=null,_o=!1,bo=yo=0,xo=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?B.memoizedState=ho=e:ho=ho.next=e,ho}function No(){if(mo===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=mo.next;var t=ho===null?B.memoizedState:ho.next;if(t!==null)ho=t,mo=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));mo=e,e={memoizedState:mo.memoizedState,baseState:mo.baseState,baseQueue:mo.baseQueue,queue:mo.queue,next:null},ho===null?B.memoizedState=ho=e:ho=ho.next=e}return ho}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=Da(xo,e,t),t=B,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===C)return ta(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(No(),mo,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(U&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===fa&&(d=!0);else if((po&p)===p){u=u.next,p===fa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Ql|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Ql|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Sr(o,e.memoizedState)&&(oc=!0,d&&(n=pa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=No(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Sr(o,t.memoizedState)||(oc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=B,a=No(),o=z;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Sr((mo||a).memoizedState,n);if(s&&(a.memoizedState=n,oc=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),Wl===null)throw Error(i(349));o||po&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Po(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sr(e,n)}catch{return!0}}function qo(e){var t=ri(e,2);t!==null&&Su(t,e,2)}function Jo(e){var t=Mo();if(typeof e==`function`){var n=e;if(e=n(),vo){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,mo,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(z){var n=Wl.formState;if(n!==null){a:{var r=B;if(z){if(Pi){b:{for(var i=Pi,a=Ii;i.nodeType!==8;){if(!a){i=null;break b}if(i=pf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Pi=pf(i.nextSibling),r=i.data===`F!`;break a}}Ri(r)}r=!1}r&&(t=n[0])}}return n=Mo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,B,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,B,!1,r.queue),r=Mo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(No(),mo,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Sa?wa:e}else r=t;t=No();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=No(),n=mo;if(n!==null)return as(t,n,e);No(),t=t.memoizedState,n=No();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Po(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return No().memoizedState}function us(e,t,n,r){var i=Mo();B.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=No();r=r===void 0?null:r;var a=i.memoizedState.inst;mo!==null&&r!==null&&wo(r,mo.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(B.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Po(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=No().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(Ul&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),vo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||po&1073741824&&!(U&261930)?e.memoizedState=t:(e.memoizedState=n,e=xu(),B.lanes|=e,Ql|=e,n)}function ws(e,t,n,r){return Sr(n,t)?n:Qa.current===null?!(po&42)||po&1073741824&&!(U&261930)?(oc=!0,e.memoizedState=n):(e=xu(),B.lanes|=e,Ql|=e,t):(e=Cs(e,n,r),Sr(e,t)||(oc=!0),e)}function Ts(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Ls(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,ga(c,r),bu(e)):Is(e,t,r,bu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},bu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,le,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},bu())}function As(){return ta(ep)}function js(){return No().memoizedState}function Ms(){return No().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=bu();e=Ua(n);var r=Wa(t,e,n);r!==null&&(Su(r,t,n),Ga(r,t,n)),t={cache:ca()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=bu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=ni(e,t,n,r),n!==null&&(Su(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,bu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Sr(s,o))return ti(e,t,i,0),Wl===null&&ei(),!1}catch{}if(n=ni(e,t,i,r),n!==null)return Su(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:_d(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=ni(e,n,r,2),t!==null&&Su(t,e,2)}function Rs(e){var t=e.alternate;return e===B||t!==null&&t===B}function zs(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}var Vs={readContext:ta,use:Io,useCallback:Co,useContext:Co,useEffect:Co,useImperativeHandle:Co,useLayoutEffect:Co,useInsertionEffect:Co,useMemo:Co,useReducer:Co,useRef:Co,useState:Co,useDebugValue:Co,useDeferredValue:Co,useTransition:Co,useSyncExternalStore:Co,useId:Co,useHostTransitionStatus:Co,useFormState:Co,useActionState:Co,useOptimistic:Co,useMemoCache:Co,useCacheRefresh:Co};Vs.useEffectEvent=Co;var Hs={readContext:ta,use:Io,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:ta,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=t===void 0?null:t;var r=e();if(vo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(n!==void 0){var i=n(t);if(vo){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(Mo(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,B,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Mo();if(z){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Wl===null)throw Error(i(349));U&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=Wl.identifierPrefix;if(z){var n=Di,r=Ei;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return Mo().memoizedState=Ns.bind(null,B)},useEffectEvent:function(e){var t=Mo(),n={impl:e};return t.memoizedState=n,function(){if(Ul&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:ta,use:Io,useCallback:xs,useContext:ta,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(No(),mo.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(No(),mo,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:ta,use:Io,useCallback:xs,useContext:ta,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=No();return mo===null?Cs(n,e,t):ws(n,mo.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=No();return mo===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,mo,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=bu(),i=Ua(r);i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(Su(t,e,r),Ga(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=bu(),i=Ua(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(Su(t,e,r),Ga(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=bu(),r=Ua(n);r.tag=2,t!=null&&(r.callback=t),t=Wa(e,r,n),t!==null&&(Su(t,e,n),Ga(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){Xr(e)}function Zs(e){console.error(e)}function Qs(e){Xr(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ua(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ua(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(uu===null?uu=new Set([this]):uu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Qi(t,n,a,!0),n=ro.current,n!==null){switch(n.tag){case 31:case 13:return io===null?Pu():n.alternate===null&&Zl===0&&(Zl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),$u(e,r,a)),!1;case 22:return n.flags|=65536,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),$u(e,r,a)),!1}throw Error(i(435,n.tag))}return $u(e,r,a),Pu(),!1}if(z)return t=ro.current,t===null?(r!==Li&&(t=Error(i(423),{cause:r}),Wi(vi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=vi(r,n),a=tc(e.stateNode,r,a),Ka(e,a),Zl!==4&&(Zl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Li&&(e=Error(i(422),{cause:r}),Wi(vi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=vi(o,n),ru===null?ru=[o]:ru.push(o),Zl!==4&&(Zl=2),t===null)return!0;r=vi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Ka(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(uu===null||!uu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Ka(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),oc=!1;function sc(e,t,n,r){t.child=e===null?za(t,null,n,r):Ra(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ea(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!oc?(Ao(e,t,i),Mc(e,t,i)):(z&&s&&Ai(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!li(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Cr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=ui(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Cr(a,r)&&e.ref===t.ref)if(oc=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(oc=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ba(t,a===null?null:a.cachePool),a===null?to():eo(t,a),so(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ba(t,null),to(),co(t)):(ba(t,a.cachePool),eo(t,a),co(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=ya();return a=a===null?null:{parent:sa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ba(t,null),to(),so(t),e!==null&&Qi(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Ra(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,lo(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(z){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(oo(t),(e=Pi)?(e=lf(e,Ii),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,Pi=null)):e=null,e===null)throw Ri(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(oo(t),a)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(oc||Qi(e,t,n,!1),a=(n&e.childLanes)!==0,oc||a){if(r=Wl,r!==null&&(s=it(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ri(e,s),Su(r,e,s),ac;Pu(),t=hc(e,t,n)}else e=o.treeContext,Pi=pf(s.nextSibling),Ni=t,z=!0,Fi=null,Ii=!1,e!==null&&Mi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=ui(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return ea(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!oc?(Ao(e,t,i),Mc(e,t,i)):(z&&r&&Ai(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return ea(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!oc?(Ao(e,t,a),Mc(e,t,a)):(z&&r&&Ai(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(ea(t),t.stateNode===null){var a=oi,o=n.contextType;typeof o==`object`&&o&&(a=ta(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Va(t),o=n.contextType,a.context=typeof o==`object`&&o?ta(o):oi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),Ya(t,r,a,i),Ja(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=oi,typeof u==`object`&&u&&(o=ta(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ba=!1;var f=t.memoizedState;a.state=f,Ya(t,r,a,i),Ja(),l=t.memoizedState,s||f!==l||Ba?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ba||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ha(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=oi,typeof l==`object`&&l&&(c=ta(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ba=!1,f=t.memoizedState,a.state=f,Ya(t,r,a,i),Ja();var p=t.memoizedState;o!==d||f!==p||Ba||e!==null&&e.dependencies!==null&&$i(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ba||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&$i(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ra(t,e.child,null,i),t.child=Ra(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Hi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:xa()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=tu),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(uo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(z){if(a?ao(t):co(t),(e=Pi)?(e=lf(e,Ii),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,Pi=null)):e=null,e===null)throw Ri(t);return df(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(co(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=pi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(ao(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ao(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(co(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=pi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ra(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(co(t),t.child=e.child,t.flags|=128,t=null);else if(ao(t),df(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Wi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(oc||Qi(e,t,n,!1),s=(n&e.childLanes)!==0,oc||s){if(s=Wl,s!==null&&(r=it(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ri(e,r),Su(s,e,r),ac;uf(c)||Pu(),t=Oc(e,t,n)}else uf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Pi=pf(c.nextSibling),Ni=t,z=!0,Fi=null,Ii=!1,e!==null&&Mi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(co(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ui(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=pi(c,a,n,null),c.flags|=2):c=ui(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=xa():(l=sa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(ao(t),n=e.child,e=n.sibling,n=ui(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=ci(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Ra(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xi(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=uo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(uo,o),sc(e,t,r,n),r=z?Si:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ql|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ui(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ui(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&$i(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Ji(t,sa,e.memoizedState.cache),Hi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Ji(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ao(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(ao(t),t.flags|=128,null);ao(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Qi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(uo,uo.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:Ji(t,sa,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)oc=!0;else{if(!Nc(e,n)&&!(t.flags&128))return oc=!1,Pc(e,t,n);oc=!!(e.flags&131072)}else oc=!1,z&&t.flags&1048576&&ki(t,Si,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e==`function`)li(e)?(r=Ys(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=cc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ha(e,t),Ya(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ji(t,sa,r),r!==o.cache&&Zi(t,[sa],n,!0),Ja(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==a){a=vi(Error(i(424)),t),Wi(a),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Pi=pf(e.firstChild),Ni=t,z=!0,Fi=null,Ii=!0,n=za(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Hi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=Pf(t.type,null,t.pendingProps,null))?t.memoizedState=n:z||(n=t.type,e=t.pendingProps,r=Gd(ge.current).createElement(n),r[lt]=t,r[ut]=e,zd(r,n,e),St(r),t.stateNode=r):t.memoizedState=Pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&z&&(r=t.stateNode=_f(t.type,t.pendingProps,ge.current),Ni=t,Ii=!0,a=Pi,nf(t.type)?(mf=a,Pi=pf(r.firstChild)):Pi=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&z&&((a=r=Pi)&&(r=sf(r,t.type,t.pendingProps,Ii),r===null?a=!1:(t.stateNode=r,Ni=t,Pi=pf(r.firstChild),Ii=!1,a=!0)),a||Ri(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Jd(a,o)?r=null:s!==null&&Jd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),ep._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&z&&((e=n=Pi)&&(n=cf(n,t.pendingProps,Ii),n===null?e=!1:(t.stateNode=n,Ni=t,Pi=null,e=!0)),e||Ri(t)),null;case 13:return Tc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ra(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ji(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ea(t),a=ta(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return ea(t),r=ta(sa),e===null?(a=ya(),a===null&&(a=Wl,o=ca(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Va(t),Ji(t,sa,a)):((e.lanes&n)!==0&&(Ha(e,t),Ya(t,null,null,n),Ja()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ji(t,sa,r),r!==a.cache&&Zi(t,[sa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ji(t,sa,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(ju())e.flags|=8192;else throw ka=Ta,Ca}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Jf(t))if(ju())e.flags|=8192;else throw ka=Ta,Ca}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Qe(),e.lanes|=t,nu|=t)}function Bc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Vc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(ji(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vc(t),null;case 1:return Vc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Yi(sa),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ui())),Vc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(Vc(t),Lc(t,a,null,r,n)):(Vc(t),Rc(t,o))):o?o===e.memoizedState?(Vc(t),t.flags&=-16777217):(Ic(t),Vc(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),Vc(t),Lc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Vc(t),null}e=me.current,Vi(t)?zi(t,e):(e=_f(a,r,n),t.stateNode=e,Ic(t))}return Vc(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Vc(t),null}if(o=me.current,Vi(t))zi(t,o);else{var s=Gd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[lt]=t,o[ut]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(zd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return Vc(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Vi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ni,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Id(e.nodeValue,n)),e||Ri(t,!0)}else e=Gd(e).createTextNode(r),e[lt]=t,t.stateNode=e}return Vc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Vi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[lt]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Vc(t),e=!1}else n=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lo(t),t):(lo(t),null);if(t.flags&128)throw Error(i(558))}return Vc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[lt]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Vc(t),a=!1}else a=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(lo(t),t):(lo(t),null)}return lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),Vc(t),null);case 4:return ye(),e===null&&Dd(t.stateNode.containerInfo),Vc(t),null;case 10:return Yi(t.type),Vc(t),null;case 19:if(pe(uo),r=t.memoizedState,r===null)return Vc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Bc(r,!1);else{if(Zl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)di(n,e),n=n.sibling;return k(uo,uo.current&1|2),z&&Oi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>cu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}else{if(!a)if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!z)return Vc(t),null}else 2*Ne()-r.renderingStartTime>cu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Vc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=uo.current,k(uo,a?n&1|2:n&1),z&&Oi(t,r.treeForkCount),e);case 22:case 23:return lo(t),no(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Vc(t),t.subtreeFlags&6&&(t.flags|=8192)):Vc(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yi(sa),Vc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Uc(e,t){switch(ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(sa),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(lo(t),t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(uo),null;case 4:return ye(),null;case 10:return Yi(t.type),null;case 22:case 23:return lo(t),no(),e!==null&&pe(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yi(sa),null;case 25:return null;default:return null}}function Wc(e,t){switch(ji(t),t.tag){case 3:Yi(sa),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&lo(t);break;case 13:lo(t);break;case 19:pe(uo);break;case 10:Yi(t.type);break;case 22:case 23:lo(t),no(),e!==null&&pe(va);break;case 24:Yi(sa)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Qu(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Qu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Qu(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Za(t,n)}catch(t){Qu(e,e.return,t)}}}function Jc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Qu(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Qu(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Qu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Qu(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Qu(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Bd(r,e.type,n,t),r[ut]=t}catch(t){Qu(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&nf(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&nf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=en));else if(r!==4&&(r===27&&nf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&nf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);zd(t,r,n),t[lt]=e,t[ut]=n}catch(t){Qu(e,e.return,t)}}var il=!1,al=!1,ol=!1,sl=typeof WeakSet==`function`?WeakSet:Set,cl=null;function ll(e,t){if(e=e.containerInfo,Ud=lp,e=Dr(e),Or(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Wd={focusedElem:e,selectionRange:n},lp=!1,cl=t;cl!==null;)if(t=cl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,cl=e;else for(;cl!==null;){switch(t=cl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Qu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)of(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:of(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,cl=e;break}cl=t.return}}function ul(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:wl(e,n),r&4&&Gc(5,n);break;case 1:if(wl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Qu(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Qu(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(wl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Za(e,t)}catch(e){Qu(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:wl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:wl(e,n);break;case 31:wl(e,n),r&4&&gl(e,n);break;case 13:wl(e,n),r&4&&_l(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=nd.bind(null,n),ff(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||al,i=il;var a=al;il=r,(al=t)&&!a?El(e,n,(n.subtreeFlags&8772)!=0):wl(e,n),il=i,al=a}break;case 30:break;default:wl(e,n)}}function dl(e){var t=e.alternate;t!==null&&(e.alternate=null,dl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_t(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fl=null,pl=!1;function ml(e,t,n){for(n=n.child;n!==null;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:al||Xc(n,t),ml(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:al||Xc(n,t);var r=fl,i=pl;nf(n.type)&&(fl=n.stateNode,pl=!1),ml(e,t,n),vf(n.stateNode),fl=r,pl=i;break;case 5:al||Xc(n,t);case 6:if(r=fl,i=pl,fl=null,ml(e,t,n),fl=r,pl=i,fl!==null)if(pl)try{(fl.nodeType===9?fl.body:fl.nodeName===`HTML`?fl.ownerDocument.body:fl).removeChild(n.stateNode)}catch(e){Qu(n,t,e)}else try{fl.removeChild(n.stateNode)}catch(e){Qu(n,t,e)}break;case 18:fl!==null&&(pl?(e=fl,rf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Fp(e)):rf(fl,n.stateNode));break;case 4:r=fl,i=pl,fl=n.stateNode.containerInfo,pl=!0,ml(e,t,n),fl=r,pl=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),al||Kc(4,n,t),ml(e,t,n);break;case 1:al||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),ml(e,t,n);break;case 21:ml(e,t,n);break;case 22:al=(r=al)||n.memoizedState!==null,ml(e,t,n),al=r;break;default:ml(e,t,n)}}function gl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fp(e)}catch(e){Qu(t,t.return,e)}}}function _l(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fp(e)}catch(e){Qu(t,t.return,e)}}function vl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sl),t;default:throw Error(i(435,e.tag))}}function yl(e,t){var n=vl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=rd.bind(null,e,t);t.then(r,r)}})}function bl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(nf(c.type)){fl=c.stateNode,pl=!1;break a}break;case 5:fl=c.stateNode,pl=!1;break a;case 3:case 4:fl=c.stateNode.containerInfo,pl=!0;break a}c=c.return}if(fl===null)throw Error(i(160));hl(o,s,a),fl=null,pl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sl(t,e),t=t.sibling}var xl=null;function Sl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bl(t,e),Cl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=xl;if(bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[gt]||o[lt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),zd(o,r,n),o[lt]=e,St(o),r=o;break a;case`link`:var s=Kf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),zd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Kf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),zd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[lt]=e,St(o),r=o}e.stateNode=r}else qf(a,e.type,e.stateNode);else e.stateNode=Vf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?qf(a,e.type,e.stateNode):Vf(a,r,e.memoizedProps))}break;case 27:bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bl(t,e),Cl(e),r&512&&(al||n===null||Xc(n,n.return)),e.flags&32){a=e.stateNode;try{Kt(a,``)}catch(t){Qu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(ol=!0);break;case 6:if(bl(t,e),Cl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Qu(e,e.return,t)}}break;case 3:if(Gf=null,a=xl,xl=xf(t.containerInfo),bl(t,e),xl=a,Cl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fp(t.containerInfo)}catch(t){Qu(e,e.return,t)}ol&&(ol=!1,V(e));break;case 4:r=xl,xl=xf(e.stateNode.containerInfo),bl(t,e),Cl(e),xl=r;break;case 12:bl(t,e),Cl(e);break;case 31:bl(t,e),Cl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 13:bl(t,e),Cl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ou=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=al;if(il=u||a,al=d||l,bl(t,e),al=d,il=u,Cl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||il||al||Tl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Qu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Qu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?af(m,!0):af(l.stateNode,!1)}catch(e){Qu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,yl(e,n))));break;case 19:bl(t,e),Cl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 30:break;case 21:break;default:bl(t,e),Cl(e)}}function Cl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;nl(e,el(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Kt(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(i(161))}}catch(t){Qu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function V(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;V(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ul(e,t.alternate,t),t=t.sibling}function Tl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Tl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Tl(t);break;case 27:vf(t.stateNode);case 26:case 5:Xc(t,t.return),Tl(t);break;case 22:t.memoizedState===null&&Tl(t);break;case 30:Tl(t);break;default:Tl(t)}e=e.sibling}}function El(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:El(i,a,n),Gc(4,a);break;case 1:if(El(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Qu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Xa(c[i],s)}catch(e){Qu(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:El(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:El(i,a,n);break;case 31:El(i,a,n),n&&o&4&&gl(i,a);break;case 13:El(i,a,n),n&&o&4&&_l(i,a);break;case 22:a.memoizedState===null&&El(i,a,n),Yc(a,a.return);break;case 30:break;default:El(i,a,n)}t=t.sibling}}function Dl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&la(n))}function Ol(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e))}function kl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Al(e,t,n,r),t=t.sibling}function Al(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:kl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:kl(e,t,n,r);break;case 3:kl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e)));break;case 12:if(i&2048){kl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Qu(t,t.return,e)}}else kl(e,t,n,r);break;case 31:kl(e,t,n,r);break;case 13:kl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?kl(e,t,n,r):(a._visibility|=2,jl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?kl(e,t,n,r):Ml(e,t),i&2048&&Dl(o,t);break;case 24:kl(e,t,n,r),i&2048&&Ol(t.alternate,t);break;default:kl(e,t,n,r)}}function jl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:jl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,jl(a,o,s,c,i)):u._visibility&2?jl(a,o,s,c,i):Ml(a,o),i&&l&2048&&Dl(o.alternate,o);break;case 24:jl(a,o,s,c,i),i&&l&2048&&Ol(o.alternate,o);break;default:jl(a,o,s,c,i)}t=t.sibling}}function Ml(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ml(n,r),i&2048&&Dl(r.alternate,r);break;case 24:Ml(n,r),i&2048&&Ol(r.alternate,r);break;default:Ml(n,r)}t=t.sibling}}var Nl=8192;function Pl(e,t,n){if(e.subtreeFlags&Nl)for(e=e.child;e!==null;)Fl(e,t,n),e=e.sibling}function Fl(e,t,n){switch(e.tag){case 26:Pl(e,t,n),e.flags&Nl&&e.memoizedState!==null&&Yf(n,xl,e.memoizedState,e.memoizedProps);break;case 5:Pl(e,t,n);break;case 3:case 4:var r=xl;xl=xf(e.stateNode.containerInfo),Pl(e,t,n),xl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Nl,Nl=16777216,Pl(e,t,n),Nl=r):Pl(e,t,n));break;default:Pl(e,t,n)}}function Il(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cl=r,Bl(r,e)}Il(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rl(e),e=e.sibling}function Rl(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zl(e)):Ll(e);break;default:Ll(e)}}function zl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cl=r,Bl(r,e)}Il(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),zl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zl(t));break;default:zl(t)}e=e.sibling}}function Bl(e,t){for(;cl!==null;){var n=cl;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:la(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,cl=r;else a:for(n=e;cl!==null;){r=cl;var i=r.sibling,a=r.return;if(dl(r),r===n){cl=null;break a}if(i!==null){i.return=a,cl=i;break a}cl=a}}}var Vl={getCacheForType:function(e){var t=ta(sa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ta(sa).controller.signal}},Hl=typeof WeakMap==`function`?WeakMap:Map,Ul=0,Wl=null,H=null,U=0,Gl=0,Kl=null,ql=!1,Jl=!1,Yl=!1,Xl=0,Zl=0,Ql=0,$l=0,eu=0,tu=0,nu=0,ru=null,iu=null,au=!1,ou=0,su=0,cu=1/0,lu=null,uu=null,du=0,fu=null,pu=null,mu=0,hu=0,gu=null,_u=null,vu=0,yu=null;function bu(){return Ul&2&&U!==0?U&-U:D.T===null?st():_d()}function xu(){if(tu===0)if(!(U&536870912)||z){var e=N;N<<=1,!(N&3932160)&&(N=262144),tu=e}else tu=536870912;return e=ro.current,e!==null&&(e.flags|=32),tu}function Su(e,t,n){(e===Wl&&(Gl===2||Gl===9)||e.cancelPendingCommit!==null)&&(ku(e,0),Eu(e,U,tu,!1)),et(e,n),(!(Ul&2)||e!==Wl)&&(e===Wl&&(!(Ul&2)&&($l|=n),Zl===4&&Eu(e,U,tu,!1)),dd(e))}function Cu(e,t,n){if(Ul&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||P(e,t),a=r?Lu(e,t):Fu(e,t,!0),o=r;do{if(a===0){Jl&&!r&&Eu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Tu(n)){a=Fu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ru;var l=c.current.memoizedState.isDehydrated;if(l&&(ku(c,s).flags|=256),s=Fu(c,s,!1),s!==2){if(Yl&&!l){c.errorRecoveryDisabledLanes|=o,$l|=o,a=4;break a}o=iu,iu=a,o!==null&&(iu===null?iu=o:iu.push.apply(iu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){ku(e,0),Eu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Eu(r,t,tu,!ql);break a;case 2:iu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=ou+300-Ne(),10<a)){if(Eu(r,t,tu,!ql),Xe(r,0,!0)!==0)break a;mu=t,r.timeoutHandle=Zd(wu.bind(null,r,n,iu,lu,au,t,tu,$l,nu,ql,o,`Throttled`,-0,0),a);break a}wu(r,n,iu,lu,au,t,tu,$l,nu,ql,o,null,-0,0)}}break}while(1);dd(e)}function wu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:en},Fl(t,a,d);var m=(a&62914560)===a?ou-Ne():(a&4194048)===a?su-Ne():0;if(m=Zf(d,m),m!==null){mu=a,e.cancelPendingCommit=m(Wu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Eu(e,a,o,!l);return}}Wu(e,t,a,n,r,i,o,s,c)}function Tu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Eu(e,t,n,r){t&=~eu,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&nt(e,n,t)}function Du(){return Ul&6?!0:(fd(0,!1),!1)}function Ou(){if(H!==null){if(Gl===0)var e=H.return;else e=H,qi=Ki=null,jo(e),Ma=null,Na=0,e=H;for(;e!==null;)Wc(e.alternate,e),e=e.return;H=null}}function ku(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),mu=0,Ou(),Wl=e,H=n=ui(e.current,null),U=t,Gl=0,Kl=null,ql=!1,Jl=P(e,t),Yl=!1,nu=tu=eu=$l=Ql=Zl=0,iu=ru=null,au=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Xl=t,ei(),n}function Au(e,t){B=null,D.H=Vs,t===Sa||t===wa?(t=Aa(),Gl=3):t===Ca?(t=Aa(),Gl=4):Gl=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Kl=t,H===null&&(Zl=1,$s(e,vi(t,e.current)))}function ju(){var e=ro.current;return e===null?!0:(U&4194048)===U?io===null:(U&62914560)===U||U&536870912?e===io:!1}function Mu(){var e=D.H;return D.H=Vs,e===null?Vs:e}function Nu(){var e=D.A;return D.A=Vl,e}function Pu(){Zl=4,ql||(U&4194048)!==U&&ro.current!==null||(Jl=!0),!(Ql&134217727)&&!($l&134217727)||Wl===null||Eu(Wl,U,tu,!1)}function Fu(e,t,n){var r=Ul;Ul|=2;var i=Mu(),a=Nu();(Wl!==e||U!==t)&&(lu=null,ku(e,t)),t=!1;var o=Zl;a:do try{if(Gl!==0&&H!==null){var s=H,c=Kl;switch(Gl){case 8:Ou(),o=6;break a;case 3:case 2:case 9:case 6:ro.current===null&&(t=!0);var l=Gl;if(Gl=0,Kl=null,Vu(e,s,c,l),n&&Jl){o=0;break a}break;default:l=Gl,Gl=0,Kl=null,Vu(e,s,c,l)}}Iu(),o=Zl;break}catch(t){Au(e,t)}while(1);return t&&e.shellSuspendCounter++,qi=Ki=null,Ul=r,D.H=i,D.A=a,H===null&&(Wl=null,U=0,ei()),o}function Iu(){for(;H!==null;)zu(H)}function Lu(e,t){var n=Ul;Ul|=2;var r=Mu(),a=Nu();Wl!==e||U!==t?(lu=null,cu=Ne()+500,ku(e,t)):Jl=P(e,t);a:do try{if(Gl!==0&&H!==null){t=H;var o=Kl;b:switch(Gl){case 1:Gl=0,Kl=null,Vu(e,t,o,1);break;case 2:case 9:if(Ea(o)){Gl=0,Kl=null,Bu(t);break}t=function(){Gl!==2&&Gl!==9||Wl!==e||(Gl=7),dd(e)},o.then(t,t);break a;case 3:Gl=7;break a;case 4:Gl=5;break a;case 7:Ea(o)?(Gl=0,Kl=null,Bu(t)):(Gl=0,Kl=null,Vu(e,t,o,7));break;case 5:var s=null;switch(H.tag){case 26:s=H.memoizedState;case 5:case 27:var c=H;if(s?Jf(s):c.stateNode.complete){Gl=0,Kl=null;var l=c.sibling;if(l!==null)H=l;else{var u=c.return;u===null?H=null:(H=u,Hu(u))}break b}}Gl=0,Kl=null,Vu(e,t,o,5);break;case 6:Gl=0,Kl=null,Vu(e,t,o,6);break;case 8:Ou(),Zl=6;break a;default:throw Error(i(462))}}Ru();break}catch(t){Au(e,t)}while(1);return qi=Ki=null,D.H=r,D.A=a,Ul=n,H===null?(Wl=null,U=0,ei(),Zl):0}function Ru(){for(;H!==null&&!je();)zu(H)}function zu(e){var t=Fc(e.alternate,e,Xl);e.memoizedProps=e.pendingProps,t===null?Hu(e):H=t}function Bu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,U);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,U);break;case 5:jo(t);default:Wc(n,t),t=H=di(t,Xl),t=Fc(n,t,Xl)}e.memoizedProps=e.pendingProps,t===null?Hu(e):H=t}function Vu(e,t,n,r){qi=Ki=null,jo(t),Ma=null,Na=0;var i=t.return;try{if(ic(e,i,t,n,U)){Zl=1,$s(e,vi(n,e.current)),H=null;return}}catch(t){if(i!==null)throw H=i,t;Zl=1,$s(e,vi(n,e.current)),H=null;return}t.flags&32768?(z||r===1?e=!0:Jl||U&536870912?e=!1:(ql=e=!0,(r===2||r===9||r===3||r===6)&&(r=ro.current,r!==null&&r.tag===13&&(r.flags|=16384))),Uu(t,e)):Hu(t)}function Hu(e){var t=e;do{if(t.flags&32768){Uu(t,ql);return}e=t.return;var n=Hc(t.alternate,t,Xl);if(n!==null){H=n;return}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);Zl===0&&(Zl=5)}function Uu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,H=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){H=e;return}H=e=n}while(e!==null);Zl=6,H=null}function Wu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Yu();while(du!==0);if(Ul&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=$r,tt(e,n,o,s,c,l),e===Wl&&(H=Wl=null,U=0),pu=t,fu=e,mu=n,hu=o,gu=a,_u=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,id(Ie,function(){return Xu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=Ul,Ul|=4;try{ll(e,t,n)}finally{Ul=s,O.p=a,D.T=r}}du=1,Gu(),Ku(),qu()}}function Gu(){if(du===1){du=0;var e=fu,t=pu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=Ul;Ul|=4;try{Sl(t,e);var a=Wd,o=Dr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Er(s.ownerDocument.documentElement,s)){if(c!==null&&Or(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Tr(s,h),v=Tr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}lp=!!Ud,Wd=Ud=null}finally{Ul=i,O.p=r,D.T=n}}e.current=t,du=2}}function Ku(){if(du===2){du=0;var e=fu,t=pu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=Ul;Ul|=4;try{ul(e,t.alternate,t)}finally{Ul=i,O.p=r,D.T=n}}du=3}}function qu(){if(du===4||du===3){du=0,Me();var e=fu,t=pu,n=mu,r=_u;t.subtreeFlags&10256||t.flags&10256?du=5:(du=0,pu=fu=null,Ju(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(uu=null),ot(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}mu&3&&Yu(),dd(e),i=e.pendingLanes,n&261930&&i&42?e===yu?vu++:(vu=0,yu=e):vu=0,fd(0,!1)}}function Ju(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,la(t)))}function Yu(){return Gu(),Ku(),qu(),Xu()}function Xu(){if(du!==5)return!1;var e=fu,t=hu;hu=0;var n=ot(mu),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=gu,gu=null;var o=fu,s=mu;if(du=0,pu=fu=null,mu=0,Ul&6)throw Error(i(331));var c=Ul;if(Ul|=4,Rl(o.current),Al(o,o.current,s,n),Ul=c,fd(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{O.p=a,D.T=r,Ju(e,t)}}function Zu(e,t,n){t=vi(n,t),t=tc(e.stateNode,t,2),e=Wa(e,t,2),e!==null&&(et(e,2),dd(e))}function Qu(e,t,n){if(e.tag===3)Zu(e,e,n);else for(;t!==null;){if(t.tag===3){Zu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(uu===null||!uu.has(r))){e=vi(n,e),n=nc(2),r=Wa(t,n,2),r!==null&&(rc(n,r,t,e),et(r,2),dd(r));break}}t=t.return}}function $u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Yl=!0,i.add(n),e=ed.bind(null,e,t,n),t.then(e,e))}function ed(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Wl===e&&(U&n)===n&&(Zl===4||Zl===3&&(U&62914560)===U&&300>Ne()-ou?!(Ul&2)&&ku(e,0):eu|=n,nu===U&&(nu=0)),dd(e)}function td(e,t){t===0&&(t=Qe()),e=ri(e,t),e!==null&&(et(e,t),dd(e))}function nd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),td(e,n)}function rd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),td(e,n)}function id(e,t){return ke(e,t)}var ad=null,od=null,sd=!1,cd=!1,ld=!1,ud=0;function dd(e){e!==od&&e.next===null&&(od===null?ad=od=e:od=od.next=e),cd=!0,sd||(sd=!0,gd())}function fd(e,t){if(!ld&&cd){ld=!0;do for(var n=!1,r=ad;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,G(r,a))}else a=U,a=Xe(r,r===Wl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||P(r,a)||(n=!0,G(r,a));r=r.next}while(n);ld=!1}}function pd(){md()}function md(){cd=sd=!1;var e=0;ud!==0&&Xd()&&(e=ud);for(var t=Ne(),n=null,r=ad;r!==null;){var i=r.next,a=hd(r,t);a===0?(r.next=null,n===null?ad=i:n.next=i,i===null&&(od=n)):(n=r,(e!==0||a&3)&&(cd=!0)),r=i}du!==0&&du!==5||fd(e,!1),ud!==0&&(ud=0)}function hd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ze(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Wl,n=U,n=Xe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Gl===2||Gl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||P(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ot(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=W.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function W(e,t){if(du!==0&&du!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Yu()&&e.callbackNode!==n)return null;var r=U;return r=Xe(e,e===Wl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Cu(e,r,t),hd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?W.bind(null,e):null)}function G(e,t){if(Yu())return null;Cu(e,t,!0)}function gd(){ef(function(){Ul&6?ke(Pe,pd):md()})}function _d(){if(ud===0){var e=fa;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),ud=e}return ud}function vd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:$t(``+e)}function yd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function bd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=vd((i[ut]||null).action),o=r.submitter;o&&(t=(t=o[ut]||null)?vd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Sn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ud!==0){var e=o?yd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?yd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var xd=0;xd<Jr.length;xd++){var Sd=Jr[xd];Yr(Sd.toLowerCase(),`on`+(Sd[0].toUpperCase()+Sd.slice(1)))}Yr(Br,`onAnimationEnd`),Yr(Vr,`onAnimationIteration`),Yr(Hr,`onAnimationStart`),Yr(`dblclick`,`onDoubleClick`),Yr(`focusin`,`onFocus`),Yr(`focusout`,`onBlur`),Yr(Ur,`onTransitionRun`),Yr(Wr,`onTransitionStart`),Yr(Gr,`onTransitionCancel`),Yr(Kr,`onTransitionEnd`),Tt(`onMouseEnter`,[`mouseout`,`mouseover`]),Tt(`onMouseLeave`,[`mouseout`,`mouseover`]),Tt(`onPointerEnter`,[`pointerout`,`pointerover`]),Tt(`onPointerLeave`,[`pointerout`,`pointerover`]),I(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),I(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),I(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),I(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),I(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),I(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Cd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),wd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Cd));function Td(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}}}}function K(e,t){var n=t[ft];n===void 0&&(n=t[ft]=new Set);var r=e+`__bubble`;n.has(r)||(Od(t,e,2,!1),n.add(r))}function Ed(e,t,n){var r=0;t&&(r|=4),Od(n,e,r,t)}var q=`_reactListening`+Math.random().toString(36).slice(2);function Dd(e){if(!e[q]){e[q]=!0,Ct.forEach(function(t){t!==`selectionchange`&&(wd.has(t)||Ed(t,!1,e),Ed(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[q]||(t[q]=!0,Ed(`selectionchange`,!1,t))}}function Od(e,t,n,r){switch(gp(t)){case 2:var i=up;break;case 8:i=dp;break;default:i=fp}n=i.bind(null,t,n,e),i=void 0,!dn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function J(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}cn(function(){var r=a,i=nn(n),s=[];a:{var c=qr.get(e);if(c!==void 0){var l=Sn,u=e;switch(e){case`keypress`:if(_n(n)===0)break a;case`keydown`:case`keyup`:l=zn;break;case`focusin`:u=`focus`,l=jn;break;case`focusout`:u=`blur`,l=jn;break;case`beforeblur`:case`afterblur`:l=jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=An;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Vn;break;case Br:case Vr:case Hr:l=R;break;case Kr:l=Hn;break;case`scroll`:case`scrollend`:l=wn;break;case`wheel`:l=Un;break;case`copy`:case`cut`:case`paste`:l=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Bn;break;case`toggle`:case`beforetoggle`:l=Wn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=ln(m,p),g!=null&&d.push(kd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==tn&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[dt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?vt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=kn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Bn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:bt(l),h=u==null?c:bt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=jd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Md(s,c,l,d,!1),u!==null&&f!==null&&Md(s,f,u,d,!0)}}a:{if(c=r?bt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ur;else if(ir(c))if(dr)v=br;else{v=vr;var y=_r}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Xt(r.elementType)&&(v=ur):v=yr;if(v&&=v(e,r)){ar(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ut(c,`number`,c.value)}switch(y=r?bt(r):window,e){case`focusin`:(ir(y)||y.contentEditable===`true`)&&(Ar=y,jr=r,Mr=null);break;case`focusout`:Mr=jr=Ar=null;break;case`mousedown`:Nr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Nr=!1,Pr(s,n,i);break;case`selectionchange`:if(kr)break;case`keydown`:case`keyup`:Pr(s,n,i)}var b;if(Kn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else er?Qn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Yn&&n.locale!==`ko`&&(er||x!==`onCompositionStart`?x===`onCompositionEnd`&&er&&(b=gn()):(pn=i,mn=`value`in pn?pn.value:pn.textContent,er=!0)),y=Ad(r,x),0<y.length&&(x=new Nn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=$n(n),b!==null&&(x.data=b)))),(b=Jn?tr(e,n):nr(e,n))&&(x=Ad(r,`onBeforeInput`),0<x.length&&(y=new Nn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),bd(s,e,r,n,i)}Td(s,t)})}function kd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ad(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=ln(e,n),i!=null&&r.unshift(kd(e,i,a)),i=ln(e,t),i!=null&&r.push(kd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function jd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Md(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=ln(n,a),l!=null&&o.unshift(kd(n,l,c))):i||(l=ln(n,a),l!=null&&o.push(kd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Nd=/\r\n?/g,Pd=/\u0000|\uFFFD/g;function Fd(e){return(typeof e==`string`?e:``+e).replace(Nd,`
`).replace(Pd,``)}function Id(e,t){return t=Fd(t),Fd(e)===t}function Ld(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Kt(e,``+r);break;case`className`:jt(e,`class`,r);break;case`tabIndex`:jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:jt(e,n,r);break;case`style`:Yt(e,r,o);break;case`data`:if(t!==`object`){jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Ld(e,t,`name`,a.name,a,null),Ld(e,t,`formEncType`,a.formEncType,a,null),Ld(e,t,`formMethod`,a.formMethod,a,null),Ld(e,t,`formTarget`,a.formTarget,a,null)):(Ld(e,t,`encType`,a.encType,a,null),Ld(e,t,`method`,a.method,a,null),Ld(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=en);break;case`onScroll`:r!=null&&K(`scroll`,e);break;case`onScrollEnd`:r!=null&&K(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=$t(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:K(`beforetoggle`,e),K(`toggle`,e),At(e,`popover`,r);break;case`xlinkActuate`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:At(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Zt.get(n)||n,At(e,n,r))}}function Rd(e,t,n,r,a,o){switch(n){case`style`:Yt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Kt(e,``+r);break;case`onScroll`:r!=null&&K(`scroll`,e);break;case`onScrollEnd`:r!=null&&K(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=en);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!wt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ut]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):At(e,n,r)}}}function zd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:K(`error`,e),K(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Ld(e,t,o,s,n,null)}}a&&Ld(e,t,`srcSet`,n.srcSet,n,null),r&&Ld(e,t,`src`,n.src,n,null);return;case`input`:K(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Ld(e,t,r,d,n,null)}}Ht(e,o,c,l,u,s,a,!1);return;case`select`:for(a in K(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Ld(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Wt(e,!!r,n,!0):Wt(e,!!r,t,!1);return;case`textarea`:for(s in K(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Ld(e,t,s,c,n,null)}L(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Ld(e,t,l,r,n,null)}return;case`dialog`:K(`beforetoggle`,e),K(`toggle`,e),K(`cancel`,e),K(`close`,e);break;case`iframe`:case`object`:K(`load`,e);break;case`video`:case`audio`:for(r=0;r<Cd.length;r++)K(Cd[r],e);break;case`image`:K(`error`,e),K(`load`,e);break;case`details`:K(`toggle`,e);break;case`embed`:case`source`:case`link`:K(`error`,e),K(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Ld(e,t,u,r,n,null)}return;default:if(Xt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Rd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Ld(e,t,c,r,n,null))}function Bd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Ld(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Ld(e,t,p,m,r,f)}}Vt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Ld(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Ld(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Wt(e,!!n,n?[]:``,!1):Wt(e,!!n,t,!0)):Wt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Ld(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Ld(e,t,s,a,r,o)}Gt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Ld(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Ld(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Ld(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Ld(e,t,u,p,r,m)}return;default:if(Xt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Rd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Rd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Ld(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Ld(e,t,f,p,r,m)}function Vd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Hd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Vd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Vd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Ud=null,Wd=null;function Gd(e){return e.nodeType===9?e:e.ownerDocument}function Kd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function qd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Jd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yd=null;function Xd(){var e=window.event;return e&&e.type===`popstate`?e===Yd?!1:(Yd=e,!0):(Yd=null,!1)}var Zd=typeof setTimeout==`function`?setTimeout:void 0,Qd=typeof clearTimeout==`function`?clearTimeout:void 0,$d=typeof Promise==`function`?Promise:void 0,ef=typeof queueMicrotask==`function`?queueMicrotask:$d===void 0?Zd:function(e){return $d.resolve(null).then(e).catch(tf)};function tf(e){setTimeout(function(){throw e})}function nf(e){return e===`head`}function rf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Fp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)vf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,vf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[gt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&vf(e.ownerDocument.body);n=i}while(n);Fp(t)}function af(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function of(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:of(n),_t(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function sf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[gt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=pf(e.nextSibling),e===null)break}return null}function cf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=pf(e.nextSibling),e===null))return null;return e}function lf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=pf(e.nextSibling),e===null))return null;return e}function uf(e){return e.data===`$?`||e.data===`$~`}function df(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function ff(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function pf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var mf=null;function hf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return pf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function gf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function _f(e,t,n){switch(t=Gd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function vf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_t(e)}var yf=new Map,bf=new Set;function xf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sf=O.d;O.d={f:Cf,r:wf,D:Df,C:Of,L:kf,m:Af,X:Mf,S:jf,M:Nf};function Cf(){var e=Sf.f(),t=Du();return e||t}function wf(e){var t=yt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):Sf.r(e)}var Tf=typeof document>`u`?null:document;function Ef(e,t,n){var r=Tf;if(r&&typeof t==`string`&&t){var i=Bt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),bf.has(i)||(bf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),zd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Df(e){Sf.D(e),Ef(`dns-prefetch`,e,null)}function Of(e,t){Sf.C(e,t),Ef(`preconnect`,e,t)}function kf(e,t,n){Sf.L(e,t,n);var r=Tf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Bt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Bt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Bt(n.imageSizes)+`"]`)):i+=`[href="`+Bt(e)+`"]`;var a=i;switch(t){case`style`:a=Ff(e);break;case`script`:a=zf(e)}yf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),yf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(If(a))||t===`script`&&r.querySelector(Bf(a))||(t=r.createElement(`link`),zd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Af(e,t){Sf.m(e,t);var n=Tf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Bt(r)+`"][href="`+Bt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=zf(e)}if(!yf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),yf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Bf(a)))return}r=n.createElement(`link`),zd(r,`link`,e),St(r),n.head.appendChild(r)}}}function jf(e,t,n){Sf.S(e,t,n);var r=Tf;if(r&&e){var i=xt(r).hoistableStyles,a=Ff(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(If(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=yf.get(a))&&Uf(e,n);var c=o=r.createElement(`link`);St(c),zd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Hf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Mf(e,t){Sf.X(e,t);var n=Tf;if(n&&e){var r=xt(n).hoistableScripts,i=zf(e),a=r.get(i);a||(a=n.querySelector(Bf(i)),a||(e=f({src:e,async:!0},t),(t=yf.get(i))&&Wf(e,t),a=n.createElement(`script`),St(a),zd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nf(e,t){Sf.M(e,t);var n=Tf;if(n&&e){var r=xt(n).hoistableScripts,i=zf(e),a=r.get(i);a||(a=n.querySelector(Bf(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=yf.get(i))&&Wf(e,t),a=n.createElement(`script`),St(a),zd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pf(e,t,n,r){var a=(a=ge.current)?xf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Ff(n.href),n=xt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Ff(n.href);var o=xt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(If(e)))&&!o._p&&(s.instance=o,s.state.loading=5),yf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},yf.set(e,n),o||Rf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=zf(n),n=xt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Ff(e){return`href="`+Bt(e)+`"`}function If(e){return`link[rel="stylesheet"][`+e+`]`}function Lf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Rf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),zd(t,`link`,n),St(t),e.head.appendChild(t))}function zf(e){return`[src="`+Bt(e)+`"]`}function Bf(e){return`script[async]`+e}function Vf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Bt(n.href)+`"]`);if(r)return t.instance=r,St(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),St(r),zd(r,`style`,a),Hf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Ff(n.href);var o=e.querySelector(If(a));if(o)return t.state.loading|=4,t.instance=o,St(o),o;r=Lf(n),(a=yf.get(a))&&Uf(r,a),o=(e.ownerDocument||e).createElement(`link`),St(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),zd(o,`link`,r),t.state.loading|=4,Hf(o,n.precedence,e),t.instance=o;case`script`:return o=zf(n.src),(a=e.querySelector(Bf(o)))?(t.instance=a,St(a),a):(r=n,(a=yf.get(o))&&(r=f({},n),Wf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),St(a),zd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Hf(r,n.precedence,e));return t.instance}function Hf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Uf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Wf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Gf=null;function Kf(e,t,n){if(Gf===null){var r=new Map,i=Gf=new Map;i.set(n,r)}else i=Gf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[gt]||a[lt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function qf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Y(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Yf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Ff(r.href),a=t.querySelector(If(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Qf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,St(a);return}a=t.ownerDocument||t,r=Lf(r),(i=yf.get(i))&&Uf(r,i),a=a.createElement(`link`),St(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),zd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Qf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Xf=0;function Zf(e,t){return e.stylesheets&&e.count===0&&X(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&X(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Xf===0&&(Xf=62500*Hd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&X(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Xf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Qf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)X(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $f=null;function X(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$f=new Map,t.forEach(Z,e),$f=null,Qf.call(e))}function Z(e,t){if(!(t.state.loading&4)){var n=$f.get(e);if(n)var r=n.get(null);else{n=new Map,$f.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Qf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ep={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function tp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function np(e,t,n,r,i,a,o,s,c,l,u,d){return e=new tp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ci(3,null,null,t),e.current=a,a.stateNode=e,t=ca(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Va(a),e}function rp(e){return e?(e=oi,e):oi}function ip(e,t,n,r,i,a){i=rp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ua(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Wa(e,r,t),n!==null&&(Su(n,e,t),Ga(n,e,t))}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function op(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function sp(e){if(e.tag===13||e.tag===31){var t=ri(e,67108864);t!==null&&Su(t,e,67108864),op(e,67108864)}}function cp(e){if(e.tag===13||e.tag===31){var t=bu();t=at(t);var n=ri(e,t);n!==null&&Su(n,e,t),op(e,t)}}var lp=!0;function up(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,fp(e,t,n,r)}finally{O.p=a,D.T=i}}function dp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,fp(e,t,n,r)}finally{O.p=a,D.T=i}}function fp(e,t,n,r){if(lp){var i=pp(r);if(i===null)J(e,t,r,mp,n),Tp(e,r);else if(Dp(i,e,t,n,r))r.stopPropagation();else if(Tp(e,r),t&4&&-1<wp.indexOf(e)){for(;i!==null;){var a=yt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ye(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}dd(a),!(Ul&6)&&(cu=Ne()+500,fd(0,!1))}}break;case 31:case 13:s=ri(a,2),s!==null&&Su(s,a,2),Du(),op(a,2)}if(a=pp(r),a===null&&J(e,t,r,mp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else J(e,t,r,null,n)}}function pp(e){return e=nn(e),hp(e)}var mp=null;function hp(e){if(mp=null,e=vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mp=e,null}function gp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(j()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var _p=!1,vp=null,yp=null,bp=null,xp=new Map,Sp=new Map,Cp=[],wp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Tp(e,t){switch(e){case`focusin`:case`focusout`:vp=null;break;case`dragenter`:case`dragleave`:yp=null;break;case`mouseover`:case`mouseout`:bp=null;break;case`pointerover`:case`pointerout`:xp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Sp.delete(t.pointerId)}}function Ep(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yt(t),t!==null&&sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dp(e,t,n,r,i){switch(t){case`focusin`:return vp=Ep(vp,e,t,n,r,i),!0;case`dragenter`:return yp=Ep(yp,e,t,n,r,i),!0;case`mouseover`:return bp=Ep(bp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return xp.set(a,Ep(xp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Sp.set(a,Ep(Sp.get(a)||null,e,t,n,r,i)),!0}return!1}function Op(e){var t=vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ct(e.priority,function(){cp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ct(e.priority,function(){cp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tn=r,n.target.dispatchEvent(r),tn=null}else return t=yt(n),t!==null&&sp(t),e.blockedOn=n,!1;t.shift()}return!0}function Ap(e,t,n){kp(e)&&n.delete(t)}function jp(){_p=!1,vp!==null&&kp(vp)&&(vp=null),yp!==null&&kp(yp)&&(yp=null),bp!==null&&kp(bp)&&(bp=null),xp.forEach(Ap),Sp.forEach(Ap)}function Mp(e,n){e.blockedOn===n&&(e.blockedOn=null,_p||(_p=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jp)))}var Np=null;function Pp(e){Np!==e&&(Np=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Np===e&&(Np=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(hp(r||n)===null)continue;break}var a=yt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Fp(e){function t(t){return Mp(t,e)}vp!==null&&Mp(vp,e),yp!==null&&Mp(yp,e),bp!==null&&Mp(bp,e),xp.forEach(t),Sp.forEach(t);for(var n=0;n<Cp.length;n++){var r=Cp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Cp.length&&(n=Cp[0],n.blockedOn===null);)Op(n),n.blockedOn===null&&Cp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ut]||null;if(typeof a==`function`)o||Pp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ut]||null)s=o.formAction;else if(hp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Pp(n)}}}function Ip(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Lp(e){this._internalRoot=e}Rp.prototype.render=Lp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ip(n,bu(),e,t,null,null)},Rp.prototype.unmount=Lp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),Du(),t[dt]=null}};function Rp(e){this._internalRoot=e}Rp.prototype.unstable_scheduleHydration=function(e){if(e){var t=st();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cp.length&&t!==0&&t<Cp[n].priority;n++);Cp.splice(n,0,e),n===0&&Op(e)}};var zp=n.version;if(zp!==`19.2.7`)throw Error(i(527,zp,`19.2.7`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Bp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Vp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vp.isDisabled&&Vp.supportsFiber)try{Ve=Vp.inject(Bp),He=Vp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=np(e,1,!1,null,null,n,r,null,o,s,c,Ip),e[dt]=t.current,Dd(e),new Lp(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=u(p(),1),x=y(),S=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),C=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),w=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),ee=e=>{let t=w(e);return t.charAt(0).toUpperCase()+t.slice(1)},te={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},ne=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},re=(0,b.createContext)({}),ie=()=>(0,b.useContext)(re),ae=(0,b.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=ie()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,b.createElement)(`svg`,{ref:c,...te,width:t??l??te.width,height:t??l??te.height,stroke:e??f,strokeWidth:m,className:S(`lucide`,p,i),...!a&&!ne(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,b.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),T=(e,t)=>{let n=(0,b.forwardRef)(({className:n,...r},i)=>(0,b.createElement)(ae,{ref:i,iconNode:t,className:S(`lucide-${C(ee(e))}`,`lucide-${e}`,n),...r}));return n.displayName=ee(e),n},oe=T(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),se=T(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ce=T(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),E=T(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),D=T(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),O=T(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),le=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),ue=s(((e,t)=>{t.exports=le()})),de=(0,b.createContext)({});function fe(e){let t=(0,b.useRef)(null);return t.current===null&&(t.current=e()),t.current}var pe=typeof window<`u`?b.useLayoutEffect:b.useEffect,k=(0,b.createContext)(null);function me(e,t){e.indexOf(t)===-1&&e.push(t)}function he(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var ge=(e,t,n)=>n>t?t:n<e?e:n,_e={},ve=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ye=e=>typeof e==`object`&&!!e,be=e=>/^0[^.\s]+$/u.test(e);function xe(e){let t;return()=>(t===void 0&&(t=e()),t)}var Se=e=>e,Ce=(...e)=>e.reduce((e,t)=>n=>t(e(n))),we=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},A=class{constructor(){this.subscriptions=[]}add(e){return me(this.subscriptions,e),()=>he(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},Te=e=>e*1e3,Ee=e=>e/1e3,De=(e,t)=>t?1e3/t*e:0,Oe=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ke=1e-7,Ae=12;function je(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Oe(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>ke&&++s<Ae);return o}function Me(e,t,n,r){if(e===t&&n===r)return Se;let i=t=>je(t,0,1,e,n);return e=>e===0||e===1?e:Oe(i(e),t,r)}var Ne=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,j=e=>t=>1-e(1-t),Pe=Me(.33,1.53,.69,.99),Fe=j(Pe),Ie=Ne(Fe),Le=e=>e>=1?1:(e*=2)<1?.5*Fe(e):.5*(2-2**(-10*(e-1))),Re=e=>1-Math.sin(Math.acos(e)),ze=j(Re),Be=Ne(Re),Ve=Me(.42,0,1,1),He=Me(0,0,.58,1),Ue=Me(.42,0,.58,1),We=e=>Array.isArray(e)&&typeof e[0]!=`number`,M=e=>Array.isArray(e)&&typeof e[0]==`number`,Ge={linear:Se,easeIn:Ve,easeInOut:Ue,easeOut:He,circIn:Re,circInOut:Be,circOut:ze,backIn:Fe,backInOut:Ie,backOut:Pe,anticipate:Le},Ke=e=>typeof e==`string`,qe=e=>{if(M(e)){e.length;let[t,n,r,i]=e;return Me(t,n,r,i)}else if(Ke(e))return Ge[e],`${e}`,Ge[e];return e},N=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function Je(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var Ye=40;function Xe(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=N.reduce((e,t)=>(e[t]=Je(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=_e.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Ye),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:N.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<N.length;t++)o[N[t]].cancel(e)},state:i,steps:o}}var{schedule:P,cancel:Ze,state:Qe,steps:$e}=Xe(typeof requestAnimationFrame<`u`?requestAnimationFrame:Se,!0),et;function tt(){et=void 0}var nt={now:()=>(et===void 0&&nt.set(Qe.isProcessing||_e.useManualTiming?Qe.timestamp:performance.now()),et),set:e=>{et=e,queueMicrotask(tt)}},rt=e=>t=>typeof t==`string`&&t.startsWith(e),it=rt(`--`),at=rt(`var(--`),ot=e=>at(e)?st.test(e.split(`/*`)[0].trim()):!1,st=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ct(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var F={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},lt={...F,transform:e=>ge(0,1,e)},ut={...F,default:1},dt=e=>Math.round(e*1e5)/1e5,ft=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function pt(e){return e==null}var mt=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ht=(e,t)=>n=>!!(typeof n==`string`&&mt.test(n)&&n.startsWith(e)||t&&!pt(n)&&Object.prototype.hasOwnProperty.call(n,t)),gt=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(ft);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},_t=e=>ge(0,255,e),vt={...F,transform:e=>Math.round(_t(e))},yt={test:ht(`rgb`,`red`),parse:gt(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+vt.transform(e)+`, `+vt.transform(t)+`, `+vt.transform(n)+`, `+dt(lt.transform(r))+`)`};function bt(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var xt={test:ht(`#`),parse:bt,transform:yt.transform},St=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ct=St(`deg`),wt=St(`%`),I=St(`px`),Tt=St(`vh`),Et=St(`vw`),Dt={...wt,parse:e=>wt.parse(e)/100,transform:e=>wt.transform(e*100)},Ot={test:ht(`hsl`,`hue`),parse:gt(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+wt.transform(dt(t))+`, `+wt.transform(dt(n))+`, `+dt(lt.transform(r))+`)`},kt={test:e=>yt.test(e)||xt.test(e)||Ot.test(e),parse:e=>yt.test(e)?yt.parse(e):Ot.test(e)?Ot.parse(e):xt.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?yt.transform(e):Ot.transform(e),getAnimatableNone:e=>{let t=kt.parse(e);return t.alpha=0,kt.transform(t)}},At=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function jt(e){return isNaN(e)&&typeof e==`string`&&(e.match(ft)?.length||0)+(e.match(At)?.length||0)>0}var Mt=`number`,Nt=`color`,Pt=`var`,Ft=`var(`,It="${}",Lt=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Rt(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Lt,e=>(kt.test(e)?(r.color.push(a),i.push(Nt),n.push(kt.parse(e))):e.startsWith(Ft)?(r.var.push(a),i.push(Pt),n.push(e)):(r.number.push(a),i.push(Mt),n.push(parseFloat(e))),++a,It)).split(It),indexes:r,types:i}}function zt(e){return Rt(e).values}function Bt({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===Mt?i+=dt(r[a]):e===Nt?i+=kt.transform(r[a]):i+=r[a]}return i}}function Vt(e){return Bt(Rt(e))}var Ht=e=>typeof e==`number`?0:kt.test(e)?kt.getAnimatableNone(e):e,Ut=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Ht(e);function Wt(e){let t=Rt(e);return Bt(t)(t.values.map((e,n)=>Ut(e,t.split[n])))}var Gt={test:jt,parse:zt,createTransformer:Vt,getAnimatableNone:Wt};function L(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Kt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=L(s,r,e+1/3),a=L(s,r,e),o=L(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function qt(e,t){return n=>n>0?t:e}var Jt=(e,t,n)=>e+(t-e)*n,Yt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Xt=[xt,yt,Ot],Zt=e=>Xt.find(t=>t.test(e));function Qt(e){let t=Zt(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===Ot&&(n=Kt(n)),n}var $t=(e,t)=>{let n=Qt(e),r=Qt(t);if(!n||!r)return qt(e,t);let i={...n};return e=>(i.red=Yt(n.red,r.red,e),i.green=Yt(n.green,r.green,e),i.blue=Yt(n.blue,r.blue,e),i.alpha=Jt(n.alpha,r.alpha,e),yt.transform(i))},en=new Set([`none`,`hidden`]);function tn(e,t){return en.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function nn(e,t){return n=>Jt(e,t,n)}function rn(e){return typeof e==`number`?nn:typeof e==`string`?ot(e)?qt:kt.test(e)?$t:cn:Array.isArray(e)?an:typeof e==`object`?kt.test(e)?$t:on:qt}function an(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>rn(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function on(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=rn(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function sn(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var cn=(e,t)=>{let n=Gt.createTransformer(t),r=Rt(e),i=Rt(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?en.has(e)&&!i.values.length||en.has(t)&&!r.values.length?tn(e,t):Ce(an(sn(r,i),i.values),n):(`${e}${t}`,qt(e,t))};function ln(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?Jt(e,t,n):rn(e)(e,t)}var un=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>P.update(t,e),stop:()=>Ze(t),now:()=>Qe.isProcessing?Qe.timestamp:nt.now()}},dn=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},fn=2e4;function pn(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function mn(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(pn(r),fn);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Ee(i)}}var hn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function gn(e,t){return e*Math.sqrt(1-t*t)}var _n=12;function vn(e,t,n){let r=n;for(let n=1;n<_n;n++)r-=e(r)/t(r);return r}var yn=.001;function bn({duration:e=hn.duration,bounce:t=hn.bounce,velocity:n=hn.velocity,mass:r=hn.mass}){let i,a;hn.maxDuration;let o=1-t;o=ge(hn.minDamping,hn.maxDamping,o),e=ge(hn.minDuration,hn.maxDuration,Ee(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=gn(t,o),c=Math.exp(-i);return yn-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=gn(t**2,o);return(-i(t)+yn>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=vn(i,a,s);if(e=Te(e),isNaN(c))return{stiffness:hn.stiffness,damping:hn.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var xn=[`duration`,`bounce`],Sn=[`stiffness`,`damping`,`mass`];function Cn(e,t){return t.some(t=>e[t]!==void 0)}function wn(e){let t={velocity:hn.velocity,stiffness:hn.stiffness,damping:hn.damping,mass:hn.mass,isResolvedFromDuration:!1,...e};if(!Cn(e,Sn)&&Cn(e,xn))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*ge(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:hn.mass,stiffness:i,damping:a}}else{let n=bn({...e,velocity:0});t={...t,...n,mass:hn.mass},t.isResolvedFromDuration=!0}return t}function Tn(e=hn.visualDuration,t=hn.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=wn({...n,velocity:-Ee(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Ee(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?hn.restSpeed.granular:hn.restSpeed.default,i||=v?hn.restDelta.granular:hn.restDelta.default;let y,b,x,S,C,w;if(h<1)x=gn(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let ee={calculatedDuration:p&&d||null,velocity:e=>Te(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=Te(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=Te(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(pn(ee),fn),t=dn(t=>ee.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return ee}Tn.applyToOptions=e=>{let t=mn(e,100,Tn);return e.ease=t.ease,e.duration=Te(t.duration),e.type=`keyframes`,e};var En=5;function Dn(e,t,n){let r=Math.max(t-En,0);return De(n-e(r),t-r)}function On({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=Tn({keyframes:[f.value,m(f.value)],velocity:Dn(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function kn(e,t,n){let r=[],i=n||_e.mix||ln,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Ce(Array.isArray(t)?t[n]||Se:t,a)),r.push(a)}return r}function An(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=kn(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=we(e[r],e[r+1],n);return s[r](i)};return n?t=>l(ge(e[0],e[a-1],t)):l}function jn(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=we(0,t,r);e.push(Jt(n,1,i))}}function R(e){let t=[0];return jn(t,e.length-1),t}function Mn(e,t){return e.map(e=>e*t)}function Nn(e,t){return e.map(()=>t||Ue).splice(0,e.length-1)}function Pn({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=We(r)?r.map(qe):qe(r),a={done:!1,value:t[0]},o=An(Mn(n&&n.length===t.length?n:R(t),e),t,{ease:Array.isArray(i)?i:Nn(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Fn=e=>e!==null;function In(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Fn),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Ln={decay:On,inertia:On,tween:Pn,keyframes:Pn,spring:Tn};function Rn(e){typeof e.type==`string`&&(e.type=Ln[e.type])}var zn=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Bn=e=>e/100,Vn=class extends zn{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==nt.now()&&this.tick(nt.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Rn(e);let{type:t=Pn,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||Pn;s!==Pn&&typeof o[0]!=`number`&&(this.mixKeyframes=Ce(Bn,ln(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=pn(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=ge(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==On&&(b.value=In(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Ee(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Ee(e)}get time(){return Ee(this.currentTime)}set time(e){e=Te(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Dn(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(nt.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Ee(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=un,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(nt.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Hn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Un=e=>e*180/Math.PI,Wn=e=>Kn(Un(Math.atan2(e[1],e[0]))),Gn={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Wn,rotateZ:Wn,skewX:e=>Un(Math.atan(e[1])),skewY:e=>Un(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Kn=e=>(e%=360,e<0&&(e+=360),e),qn=Wn,Jn=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Yn=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Xn={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Jn,scaleY:Yn,scale:e=>(Jn(e)+Yn(e))/2,rotateX:e=>Kn(Un(Math.atan2(e[6],e[5]))),rotateY:e=>Kn(Un(Math.atan2(-e[2],e[0]))),rotateZ:qn,rotate:qn,skewX:e=>Un(Math.atan(e[4])),skewY:e=>Un(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Zn(e){return+!!e.includes(`scale`)}function Qn(e,t){if(!e||e===`none`)return Zn(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Xn,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Gn,i=t}if(!i)return Zn(t);let a=r[t],o=i[1].split(`,`).map(er);return typeof a==`function`?a(o):o[a]}var $n=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Qn(n,t)};function er(e){return parseFloat(e.trim())}var tr=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],nr=new Set([...tr,`pathRotation`]),rr=e=>e===F||e===I,ir=new Set([`x`,`y`,`z`]),ar=tr.filter(e=>!ir.has(e));function or(e){let t=[];return ar.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var sr={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Qn(t,`x`),y:(e,{transform:t})=>Qn(t,`y`)};sr.translateX=sr.x,sr.translateY=sr.y;var cr=new Set,lr=!1,ur=!1,dr=!1;function fr(){if(ur){let e=Array.from(cr).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=or(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}ur=!1,lr=!1,cr.forEach(e=>e.complete(dr)),cr.clear()}function pr(){cr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ur=!0)})}function mr(){dr=!0,pr(),fr(),dr=!1}var hr=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(cr.add(this),lr||(lr=!0,P.read(pr),P.resolveKeyframes(fr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Hn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),cr.delete(this)}cancel(){this.state===`scheduled`&&(cr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},gr=e=>e.startsWith(`--`);function _r(e,t,n){gr(t)?e.style.setProperty(t,n):e.style[t]=n}var vr={};function yr(e,t){let n=xe(e);return()=>vr[t]??n()}var br=yr(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),xr=yr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Sr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Cr={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Sr([0,.65,.55,1]),circOut:Sr([.55,0,1,.45]),backIn:Sr([.31,.01,.66,-.59]),backOut:Sr([.33,1.53,.69,.99])};function wr(e,t){if(e)return typeof e==`function`?xr()?dn(e,t):`ease-out`:M(e)?Sr(e):Array.isArray(e)?e.map(e=>wr(e,t)||Cr.easeOut):Cr[e]}function Tr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=wr(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function Er(e){return typeof e==`function`&&`applyToOptions`in e}function Dr({type:e,...t}){return Er(e)&&xr()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var Or=class extends zn{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Dr(e);this.animation=Tr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=In(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),_r(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Ee(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Ee(e)}get time(){return Ee(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Te(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&br()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Se):r(this)}},kr={anticipate:Le,backInOut:Ie,circInOut:Be};function Ar(e){return e in kr}function jr(e){typeof e.ease==`string`&&Ar(e.ease)&&(e.ease=kr[e.ease])}var Mr=10,Nr=class extends Or{constructor(e){jr(e),Rn(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Vn({...a,autoplay:!1}),s=Math.max(Mr,nt.now()-this.startTime),c=ge(0,Mr,s-Mr),l=o.sample(s).value,{name:u}=this.options;i&&u&&_r(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Pr=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Gt.test(e)||e===`0`)&&!e.startsWith(`url(`));function Fr(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Ir(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Pr(i,t),s=Pr(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:Fr(e)||(n===`spring`||Er(n))&&r}function Lr(e){e.duration=0,e.type=`keyframes`}var Rr=new Set([`opacity`,`clipPath`,`filter`,`transform`]),zr=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Br(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&zr.test(e[t]))return!0;return!1}var Vr=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Hr=xe(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Ur(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return Hr()&&n&&(Rr.has(n)||Vr.has(n)&&Br(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Wr=40,Gr=class extends zn{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=nt.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||hr;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=nt.now();let u=!0;Ir(e,i,a,o)||(u=!1,(_e.instantAnimations||!s)&&l?.(In(e,n,t)),e[0]=e[e.length-1],Lr(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Wr?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&Ur(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new Nr({...d,element:p})}catch{m=new Vn(d)}else m=new Vn(d);m.finished.then(()=>{this.notifyFinished()}).catch(Se),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),mr()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Kr(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var qr=30,Jr=e=>!isNaN(parseFloat(e)),Yr={current:void 0},Xr=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=nt.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=nt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Jr(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new A);let n=this.events[e].add(t);return e===`change`?()=>{n(),P.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Yr.current&&Yr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=nt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>qr)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,qr);return De(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Zr(e,t){return new Xr(e,t)}function Qr(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function $r(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Qr(n,e)}var ei={type:`spring`,stiffness:500,damping:25,restSpeed:10},ti=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),ni={type:`keyframes`,duration:.8},ri={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},ii=(e,{keyframes:t})=>t.length>2?ni:nr.has(e)?e.startsWith(`scale`)?ti(t[1]):ei:ri,ai=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function oi(e){for(let t in e)if(!ai.has(t))return!0;return!1}var si=(e,t,n,r={},i,a)=>o=>{let s=$r(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=Te(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};oi(s)||Object.assign(u,ii(e,u)),u.duration&&=Te(u.duration),u.repeatDelay&&=Te(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Lr(u),u.delay===0&&(d=!0)),(_e.instantAnimations||_e.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,Lr(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=In(u.keyframes,s);if(e!==void 0){P.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Vn(u):new Gr(u)},ci=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function li(e){let t=ci.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function ui(e,t,n=1){`${e}`;let[r,i]=li(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return ve(e)?parseFloat(e):e}return ot(i)?ui(i,t,n+1):i}function di(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function fi(e,t,n,r){if(typeof t==`function`){let[i,a]=di(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=di(r);t=t(n===void 0?e.custom:n,i,a)}return t}function pi(e,t,n){let r=e.getProps();return fi(r,t,n===void 0?r.custom:n,e)}var mi=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...tr]),hi=e=>Array.isArray(e);function gi(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Zr(n))}function _i(e){return hi(e)?e[e.length-1]||0:e}function vi(e,t){let{transitionEnd:n={},transition:r={},...i}=pi(e,t)||{};i={...i,...n};for(let t in i)gi(e,t,_i(i[t]))}var yi=e=>!!(e&&e.getVelocity);function bi(e){return!!(yi(e)&&e.add)}function xi(e,t){let n=e.getValue(`willChange`);if(bi(n))return n.add(t);if(!n&&_e.WillChange){let n=new _e.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Si(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Ci=`data-`+Si(`framerAppearId`);function wi(e){return e.props[Ci]}function Ti({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Ei(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Qr(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&Ti(f,t))continue;let o={delay:n,...$r(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){P.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=wi(e);if(n){let e=window.MotionHandoffAnimation(n,t,P);e!==null&&(o.startTime=e,p=!0)}}xi(e,t);let m=l??e.shouldReduceMotion;r.start(si(t,r,i,m&&mi.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>P.update(()=>{o&&vi(e,o)});d.length?Promise.all(d).then(t):t()}return d}function Di(e,t,n={}){let r=pi(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Ei(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Oi(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function Oi(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Di(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Kr(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function ki(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Di(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Di(e,t,n);else{let i=typeof t==`function`?pi(e,t,n.custom):t;r=Promise.all(Ei(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Ai={test:e=>e===`auto`,parse:e=>e},ji=e=>t=>t.test(e),Mi=[F,I,wt,Ct,Et,Tt,Ai],Ni=e=>Mi.find(ji(e));function Pi(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||be(e)}var z=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Fi(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(ft)||[];if(!r)return e;let i=n.replace(r,``),a=+!!z.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Ii=/\b([a-z-]*)\(.*?\)/gu,Li={...Gt,getAnimatableNone:e=>{let t=e.match(Ii);return t?t.map(Fi).join(` `):e}},Ri={...Gt,getAnimatableNone:e=>{let t=Gt.parse(e);return Gt.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},zi={...F,transform:Math.round},Bi={borderWidth:I,borderTopWidth:I,borderRightWidth:I,borderBottomWidth:I,borderLeftWidth:I,borderRadius:I,borderTopLeftRadius:I,borderTopRightRadius:I,borderBottomRightRadius:I,borderBottomLeftRadius:I,width:I,maxWidth:I,height:I,maxHeight:I,top:I,right:I,bottom:I,left:I,inset:I,insetBlock:I,insetBlockStart:I,insetBlockEnd:I,insetInline:I,insetInlineStart:I,insetInlineEnd:I,padding:I,paddingTop:I,paddingRight:I,paddingBottom:I,paddingLeft:I,paddingBlock:I,paddingBlockStart:I,paddingBlockEnd:I,paddingInline:I,paddingInlineStart:I,paddingInlineEnd:I,margin:I,marginTop:I,marginRight:I,marginBottom:I,marginLeft:I,marginBlock:I,marginBlockStart:I,marginBlockEnd:I,marginInline:I,marginInlineStart:I,marginInlineEnd:I,fontSize:I,backgroundPositionX:I,backgroundPositionY:I,rotate:Ct,pathRotation:Ct,rotateX:Ct,rotateY:Ct,rotateZ:Ct,scale:ut,scaleX:ut,scaleY:ut,scaleZ:ut,skew:Ct,skewX:Ct,skewY:Ct,distance:I,translateX:I,translateY:I,translateZ:I,x:I,y:I,z:I,perspective:I,transformPerspective:I,opacity:lt,originX:Dt,originY:Dt,originZ:I,zIndex:zi,fillOpacity:lt,strokeOpacity:lt,numOctaves:zi},Vi={...Bi,color:kt,backgroundColor:kt,outlineColor:kt,fill:kt,stroke:kt,borderColor:kt,borderTopColor:kt,borderRightColor:kt,borderBottomColor:kt,borderLeftColor:kt,filter:Li,WebkitFilter:Li,mask:Ri,WebkitMask:Ri},Hi=e=>Vi[e],Ui=new Set([Li,Ri]);function Wi(e,t){let n=Hi(e);return Ui.has(n)||(n=Gt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Gi=new Set([`auto`,`none`,`0`]);function Ki(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Gi.has(t)&&Rt(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Wi(n,i)}var qi=class extends hr{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),ot(r))){let i=ui(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!mi.has(n)||e.length!==2)return;let[r,i]=e,a=Ni(r),o=Ni(i);if(ct(r)!==ct(i)&&sr[n]){this.needsMeasurement=!0;return}if(a!==o)if(rr(a)&&rr(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else sr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Pi(e[t]))&&n.push(t);n.length&&Ki(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=sr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=sr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},Ji=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function Yi(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Xi=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Zi(e){return ye(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Qi,cancel:$i}=Xe(queueMicrotask,!1),ea={x:!1,y:!1};function ta(){return ea.x||ea.y}function na(e){return e===`x`||e===`y`?ea[e]?null:(ea[e]=!0,()=>{ea[e]=!1}):ea.x||ea.y?null:(ea.x=ea.y=!0,()=>{ea.x=ea.y=!1})}function ra(e,t){let n=Yi(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function ia(e){return!(e.pointerType===`touch`||ta())}function aa(e,t,n={}){let[r,i,a]=ra(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!ia(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var oa=(e,t)=>t?e===t?!0:oa(e,t.parentElement):!1,sa=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,ca=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function la(e){return ca.has(e.tagName)||e.isContentEditable===!0}var ua=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function da(e){return ua.has(e.tagName)||e.isContentEditable===!0}var fa=new WeakSet;function pa(e){return t=>{t.key===`Enter`&&e(t)}}function ma(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var ha=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=pa(()=>{if(fa.has(n))return;ma(n,`down`);let e=pa(()=>{ma(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>ma(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function ga(e){return sa(e)&&!ta()}var _a=new WeakSet;function va(e,t,n={}){let[r,i,a]=ra(e,n),o=e=>{let r=e.currentTarget;if(!ga(e)||_a.has(e))return;fa.add(r),n.stopPropagation&&_a.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),fa.has(r)&&fa.delete(r),ga(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||oa(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Zi(e)&&(e.addEventListener(`focus`,e=>ha(e,i)),!la(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function ya(e){return ye(e)&&`ownerSVGElement`in e}var ba=new WeakMap,xa,Sa=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:ya(r)&&`getBBox`in r?r.getBBox()[t]:r[n],Ca=Sa(`inline`,`width`,`offsetWidth`),wa=Sa(`block`,`height`,`offsetHeight`);function Ta({target:e,borderBoxSize:t}){ba.get(e)?.forEach(n=>{n(e,{get width(){return Ca(e,t)},get height(){return wa(e,t)}})})}function Ea(e){e.forEach(Ta)}function Da(){typeof ResizeObserver>`u`||(xa=new ResizeObserver(Ea))}function Oa(e,t){xa||Da();let n=Yi(e);return n.forEach(e=>{let n=ba.get(e);n||(n=new Set,ba.set(e,n)),n.add(t),xa?.observe(e)}),()=>{n.forEach(e=>{let n=ba.get(e);n?.delete(t),n?.size||xa?.unobserve(e)})}}var ka=new Set,Aa;function ja(){Aa=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};ka.forEach(t=>t(e))},window.addEventListener(`resize`,Aa)}function Ma(e){return ka.add(e),Aa||ja(),()=>{ka.delete(e),!ka.size&&typeof Aa==`function`&&(window.removeEventListener(`resize`,Aa),Aa=void 0)}}function Na(e,t){return typeof e==`function`?Ma(e):Oa(e,t)}var Pa={value:null,addProjectionMetrics:null};function Fa(e){return ya(e)&&e.tagName===`svg`}var Ia=[...Mi,kt,Gt],La=e=>Ia.find(ji(e)),Ra=()=>({translate:0,scale:1,origin:0,originPoint:0}),za=()=>({x:Ra(),y:Ra()}),Ba=()=>({min:0,max:0}),Va=()=>({x:Ba(),y:Ba()}),Ha=new WeakMap;function Ua(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Wa(e){return typeof e==`string`||Array.isArray(e)}var Ga=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Ka=[`initial`,...Ga];function qa(e){return Ua(e.animate)||Ka.some(t=>Wa(e[t]))}function Ja(e){return!!(qa(e)||e.variants)}function Ya(e,t,n){for(let r in t){let i=t[r],a=n[r];if(yi(i))e.addValue(r,i);else if(yi(a))e.addValue(r,Zr(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Zr(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Xa={current:null},Za={current:!1},Qa=typeof window<`u`;function $a(){if(Za.current=!0,Qa)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Xa.current=e.matches;e.addEventListener(`change`,t),t()}else Xa.current=!1}var eo=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],to={};function no(e){to=e}function ro(){return to}var io=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=hr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=nt.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,P.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=qa(t),this.isVariantNode=Ja(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&yi(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Ha.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Za.current||$a(),this.shouldReduceMotion=Xa.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Ze(this.notifyUpdate),Ze(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Rr.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new Or({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:Te(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=nr.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&P.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in to){let t=to[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Va()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<eo.length;t++){let n=eo[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Ya(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Zr(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(ve(n)||be(n))?n=parseFloat(n):!La(n)&&Gt.test(t)&&(n=Wi(e,t)),this.setBaseTarget(e,yi(n)?n.get():n)),yi(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=fi(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!yi(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new A),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Qi.render(this.render)}},ao=class extends io{constructor(){super(...arguments),this.KeyframeResolver=qi}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;yi(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},oo=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function so({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function co({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function lo(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function uo(e){return e===void 0||e===1}function fo({scale:e,scaleX:t,scaleY:n}){return!uo(e)||!uo(t)||!uo(n)}function po(e){return fo(e)||B(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function B(e){return mo(e.x)||mo(e.y)}function mo(e){return e&&e!==`0%`}function ho(e,t,n){return n+t*(e-n)}function go(e,t,n,r,i){return i!==void 0&&(e=ho(e,i,r)),ho(e,n,r)+t}function _o(e,t=0,n=1,r,i){e.min=go(e.min,t,n,r,i),e.max=go(e.max,t,n,r,i)}function vo(e,{x:t,y:n}){_o(e.x,t.translate,t.scale,t.originPoint),_o(e.y,n.translate,n.scale,n.originPoint)}var yo=.999999999999,bo=1.0000000000001;function xo(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(So(e.x,-a.scroll.offset.x),So(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,vo(e,o)),r&&po(a.latestValues)&&To(e,a.latestValues,a.layout?.layoutBox))}t.x<bo&&t.x>yo&&(t.x=1),t.y<bo&&t.y>yo&&(t.y=1)}function So(e,t){e.min+=t,e.max+=t}function Co(e,t,n,r,i=.5){_o(e,t,n,Jt(e.min,e.max,i),r)}function wo(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function To(e,t,n){let r=n??e;Co(e.x,wo(t.x,r.x),t.scaleX,t.scale,t.originX),Co(e.y,wo(t.y,r.y),t.scaleY,t.scale,t.originY)}function Eo(e,t){return so(lo(e.getBoundingClientRect(),t))}function Do(e,t,n){let r=Eo(e,n),{scroll:i}=t;return i&&(So(r.x,i.offset.x),So(r.y,i.offset.y)),r}var Oo={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},ko=tr.length;function Ao(e,t,n){let r=``,i=!0;for(let a=0;a<ko;a++){let o=tr[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Xi(s,Bi[o]);if(!c){i=!1;let t=Oo[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${Xi(a,Bi.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function jo(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(nr.has(e)){o=!0;continue}else if(it(e)){i[e]=n;continue}else{let t=Xi(n,Bi[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Ao(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Mo(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function No(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Po={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(I.test(e))e=parseFloat(e);else return e;return`${No(e,t.target.x)}% ${No(e,t.target.y)}%`}},Fo={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Gt.parse(e);if(i.length>5)return r;let a=Gt.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=Jt(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Io={borderRadius:{...Po,applyTo:[...Ji]},borderTopLeftRadius:Po,borderTopRightRadius:Po,borderBottomLeftRadius:Po,borderBottomRightRadius:Po,boxShadow:Fo};function Lo(e,{layout:t,layoutId:n}){return nr.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Io[e]||e===`opacity`)}function Ro(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(yi(r[t])||i&&yi(i[t])||Lo(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function zo(e){return window.getComputedStyle(e)}var Bo=class extends ao{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Mo}readValueFromInstance(e,t){if(nr.has(t))return this.projection?.isProjecting?Zn(t):$n(e,t);{let n=zo(e),r=(it(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Eo(e,t)}build(e,t,n){jo(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Ro(e,t,n)}},Vo={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Ho={offset:`strokeDashoffset`,array:`strokeDasharray`};function Uo(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Vo:Ho;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Wo=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Go(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(jo(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Wo)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Uo(d,i,a,o,!1)}var Ko=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),qo=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Jo(e,t,n,r){Mo(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Ko.has(n)?n:Si(n),t.attrs[n])}function Yo(e,t,n){let r=Ro(e,t,n);for(let n in e)if(yi(e[n])||yi(t[n])){let t=tr.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Xo=class extends ao{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Va}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(nr.has(t)){let e=Hi(t);return e&&e.default||0}return t=Ko.has(t)?t:Si(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Yo(e,t,n)}build(e,t,n){Go(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Jo(e,t,n,r)}mount(e){this.isSVGTag=qo(e.tagName),super.mount(e)}},Zo=Ka.length;function Qo(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Qo(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Zo;n++){let r=Ka[n],i=e.props[r];(Wa(i)||i===!1)&&(t[r]=i)}return t}function $o(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var es=[...Ga].reverse(),ts=Ga.length;function ns(e){return t=>Promise.all(t.map(({animation:t,options:n})=>ki(e,t,n)))}function rs(e){let t=ns(e),n=os(),r=!0,i=!1,a=t=>(n,r)=>{let i=pi(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=Qo(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<ts;t++){let p=es[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Wa(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Ua(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=is(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,ee={...w,...C},te=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in ee){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=hi(t)&&hi(n)?!$o(t,n)||y:t!==n,r?t==null?u.add(e):te(e):t!==void 0&&u.has(e)?te(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let ne=v&&y;b&&(!ne||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!ne&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=pi(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Kr(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=pi(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=os(),i=!0}}}function is(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!$o(t,e):!1}function as(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function os(){return{animate:as(!0),whileInView:as(),whileHover:as(),whileTap:as(),whileDrag:as(),whileFocus:as(),exit:as()}}function ss(e,t){e.min=t.min,e.max=t.max}function cs(e,t){ss(e.x,t.x),ss(e.y,t.y)}function ls(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var us=.9999,ds=1.0001,fs=-.01,ps=.01;function ms(e){return e.max-e.min}function hs(e,t,n){return Math.abs(e-t)<=n}function gs(e,t,n,r=.5){e.origin=r,e.originPoint=Jt(t.min,t.max,e.origin),e.scale=ms(n)/ms(t),e.translate=Jt(n.min,n.max,e.origin)-e.originPoint,(e.scale>=us&&e.scale<=ds||isNaN(e.scale))&&(e.scale=1),(e.translate>=fs&&e.translate<=ps||isNaN(e.translate))&&(e.translate=0)}function _s(e,t,n,r){gs(e.x,t.x,n.x,r?r.originX:void 0),gs(e.y,t.y,n.y,r?r.originY:void 0)}function vs(e,t,n,r=0){e.min=(r?Jt(n.min,n.max,r):n.min)+t.min,e.max=e.min+ms(t)}function ys(e,t,n,r){vs(e.x,t.x,n.x,r?.x),vs(e.y,t.y,n.y,r?.y)}function bs(e,t,n,r=0){let i=r?Jt(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+ms(t)}function xs(e,t,n,r){bs(e.x,t.x,n.x,r?.x),bs(e.y,t.y,n.y,r?.y)}function Ss(e,t,n,r,i){return e-=t,e=ho(e,1/n,r),i!==void 0&&(e=ho(e,1/i,r)),e}function Cs(e,t=0,n=1,r=.5,i,a=e,o=e){if(wt.test(t)&&(t=parseFloat(t),t=Jt(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=Jt(a.min,a.max,r);e===a&&(s-=t),e.min=Ss(e.min,t,n,s,i),e.max=Ss(e.max,t,n,s,i)}function ws(e,t,[n,r,i],a,o){Cs(e,t[n],t[r],t[i],t.scale,a,o)}var Ts=[`x`,`scaleX`,`originX`],Es=[`y`,`scaleY`,`originY`];function Ds(e,t,n,r){ws(e.x,t,Ts,n?n.x:void 0,r?r.x:void 0),ws(e.y,t,Es,n?n.y:void 0,r?r.y:void 0)}function Os(e){return e.translate===0&&e.scale===1}function ks(e){return Os(e.x)&&Os(e.y)}function As(e,t){return e.min===t.min&&e.max===t.max}function js(e,t){return As(e.x,t.x)&&As(e.y,t.y)}function Ms(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ns(e,t){return Ms(e.x,t.x)&&Ms(e.y,t.y)}function Ps(e){return ms(e.x)/ms(e.y)}function Fs(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Is(e){return[e(`x`),e(`y`)]}function Ls(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Rs=Ji.length,zs=e=>typeof e==`string`?parseFloat(e):e,Bs=e=>typeof e==`number`||I.test(e);function Vs(e,t,n,r,i,a){i?(e.opacity=Jt(0,n.opacity??1,Us(r)),e.opacityExit=Jt(t.opacity??1,0,Ws(r))):a&&(e.opacity=Jt(t.opacity??1,n.opacity??1,r));for(let i=0;i<Rs;i++){let a=Ji[i],o=Hs(t,a),s=Hs(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Bs(o)===Bs(s)?(e[a]=Math.max(Jt(zs(o),zs(s),r),0),(wt.test(s)||wt.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=Jt(t.rotate||0,n.rotate||0,r))}function Hs(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Us=Gs(0,.5,ze),Ws=Gs(.5,.95,Se);function Gs(e,t,n){return r=>r<e?0:r>t?1:n(we(e,t,r))}function Ks(e,t,n){let r=yi(e)?e:Zr(e);return r.start(si(``,r,t,n)),r.animation}function qs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var Js=(e,t)=>e.depth-t.depth,Ys=class{constructor(){this.children=[],this.isDirty=!1}add(e){me(this.children,e),this.isDirty=!0}remove(e){he(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Js),this.isDirty=!1,this.children.forEach(e)}};function Xs(e,t){let n=nt.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Ze(r),e(a-t))};return P.setup(r,!0),()=>Ze(r)}function Zs(e){return yi(e)?e.get():e}var Qs=class{constructor(){this.members=[]}add(e){me(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(he(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(he(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},$s={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ec={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},tc=[``,`X`,`Y`,`Z`],nc=1e3,rc=0;function ic(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function ac(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=wi(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,P,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&ac(r)}function oc({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=rc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Pa.value&&(ec.nodes=ec.calculatedTargetDeltas=ec.calculatedProjections=0),this.nodes.forEach(lc),this.nodes.forEach(vc),this.nodes.forEach(yc),this.nodes.forEach(uc),Pa.addProjectionMetrics&&Pa.addProjectionMetrics(ec)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ys)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new A),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=ya(t)&&!Fa(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;P.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Xs(i,250),$s.hasAnimatedSinceResize&&($s.hasAnimatedSinceResize=!1,this.nodes.forEach(_c)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Ec,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Ns(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...$r(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||_c(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ze(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ac(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(pc),this.nodes.forEach(fc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(mc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(hc),this.nodes.forEach(gc),this.nodes.forEach(sc),this.nodes.forEach(cc)):this.nodes.forEach(mc),this.clearAllSnapshots();let e=nt.now();Qe.delta=ge(0,1e3/60,e-Qe.timestamp),Qe.timestamp=e,Qe.isProcessing=!0,$e.update.process(Qe),$e.preRender.process(Qe),$e.render.process(Qe),Qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Qi.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(dc),this.sharedNodes.forEach(xc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,P.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){P.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ms(this.snapshot.measuredBox.x)&&!ms(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=Va(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!ks(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||po(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Ac(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Va();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Mc))){let{scroll:e}=this.root;e&&(So(t.x,e.offset.x),So(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Va();if(cs(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&cs(t,e),So(t.x,i.offset.x),So(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||Va();cs(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(So(r.x,-n.scroll.offset.x),So(r.y,-n.scroll.offset.y)),po(n.latestValues)&&To(r,n.latestValues,n.layout?.layoutBox)}return po(this.latestValues)&&To(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=Va();cs(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!po(n.latestValues))continue;let r;n.instance&&(fo(n.latestValues)&&n.updateSnapshot(),r=Va(),cs(r,n.measurePageBox())),Ds(t,n.latestValues,n.snapshot?.layoutBox,r)}return po(this.latestValues)&&Ds(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Qe.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Va(),this.targetWithTransforms=Va()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ys(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):cs(this.target,this.layout.layoutBox),vo(this.target,this.targetDelta)):cs(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Pa.value&&ec.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||fo(this.parent.latestValues)||B(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Va(),this.relativeTargetOrigin=Va(),xs(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),cs(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Qe.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;cs(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;xo(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Va());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ls(this.prevProjectionDelta.x,this.projectionDelta.x),ls(this.prevProjectionDelta.y,this.projectionDelta.y)),_s(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Fs(this.projectionDelta.x,this.prevProjectionDelta.x)||!Fs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Pa.value&&ec.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=za(),this.projectionDelta=za(),this.projectionDeltaWithTransform=za()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=za();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=Va(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(Tc));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=Jt(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=Jt(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(Sc(o.x,e.x,n),Sc(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xs(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),wc(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&js(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=Va(),cs(f,this.relativeTarget)),c&&(this.animationValues=a,Vs(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Ze(this.pendingAnimation),void 0),this.pendingAnimation=P.update(()=>{$s.hasAnimatedSinceResize=!0,this.motionValue||=Zr(0),this.motionValue.jump(0,!1),this.currentAnimation=Ks(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(nc),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&jc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Va();let t=ms(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=ms(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}cs(t,n),To(t,i),_s(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Qs),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&ic(`z`,e,r,this.animationValues);for(let t=0;t<tc.length;t++)ic(`rotate${tc[t]}`,e,r,this.animationValues),ic(`skew${tc[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Zs(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Zs(t?.pointerEvents)||``),this.hasProjected&&!po(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Ls(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in Io){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Io[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Zs(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(fc),this.root.sharedNodes.clear()}}}function sc(e){e.updateLayout()}function cc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Is(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=ms(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;ss(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else jc(i,t.layoutBox,n)&&Is(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=ms(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=za();_s(o,n,t.layoutBox);let s=za();a?_s(s,e.applyTransform(r,!0),t.measuredBox):_s(s,n,t.layoutBox);let c=!ks(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=Va();xs(s,t.layoutBox,i.layoutBox,o);let c=Va();xs(c,n,a.layoutBox,o),Ns(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function lc(e){Pa.value&&ec.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function uc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function dc(e){e.clearSnapshot()}function fc(e){e.clearMeasurements()}function pc(e){e.isLayoutDirty=!0,e.updateLayout()}function mc(e){e.isLayoutDirty=!1}function hc(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function gc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function _c(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function vc(e){e.resolveTargetDelta()}function yc(e){e.calcProjection()}function bc(e){e.resetSkewAndRotation()}function xc(e){e.removeLeadSnapshot()}function Sc(e,t,n){e.translate=Jt(t.translate,0,n),e.scale=Jt(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Cc(e,t,n,r){e.min=Jt(t.min,n.min,r),e.max=Jt(t.max,n.max,r)}function wc(e,t,n,r){Cc(e.x,t.x,n.x,r),Cc(e.y,t.y,n.y,r)}function Tc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Ec={duration:.45,ease:[.4,0,.1,1]},Dc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Oc=Dc(`applewebkit/`)&&!Dc(`chrome/`)?Math.round:Se;function kc(e){e.min=Oc(e.min),e.max=Oc(e.max)}function Ac(e){kc(e.x),kc(e.y)}function jc(e,t,n){return e===`position`||e===`preserve-aspect`&&!hs(Ps(t),Ps(n),.2)}function Mc(e){return e!==e.root&&e.scroll?.wasRoot}var Nc=oc({attachResizeListener:(e,t)=>qs(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Pc={current:void 0},Fc=oc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Pc.current){let e=new Nc({});e.mount(window),e.setOptions({layoutScroll:!0}),Pc.current=e}return Pc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Ic=(0,b.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Lc(e=!0){let t=(0,b.useContext)(k);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,b.useId)();(0,b.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,b.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Rc=(0,b.createContext)({strict:!1}),zc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Bc=!1;function Vc(){if(Bc)return;let e={};for(let t in zc)e[t]={isEnabled:e=>zc[t].some(t=>!!e[t])};no(e),Bc=!0}function Hc(){return Vc(),ro()}function Uc(e){let t=Hc();for(let n in e)t[n]={...t[n],...e[n]};no(t)}var Wc=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Gc(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Wc.has(e)}var Kc=c({default:()=>qc}),qc,Jc=o((()=>{throw qc={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),Yc=e=>!Gc(e);function Xc(e){typeof e==`function`&&(Yc=t=>t.startsWith(`on`)?!Gc(t):e(t))}try{Xc((Jc(),d(Kc)).default)}catch{}function Zc(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||yi(e[i])||(Yc(i)||n===!0&&Gc(i)||!t&&!Gc(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var Qc=(0,b.createContext)({});function $c(e,t){if(qa(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Wa(t)?t:void 0,animate:Wa(n)?n:void 0}}return e.inherit===!1?{}:t}function el(e){let{initial:t,animate:n}=$c(e,(0,b.useContext)(Qc));return(0,b.useMemo)(()=>({initial:t,animate:n}),[tl(t),tl(n)])}function tl(e){return Array.isArray(e)?e.join(` `):e}var nl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rl(e,t,n){for(let r in t)!yi(t[r])&&!Lo(r,n)&&(e[r]=t[r])}function il({transformTemplate:e},t){return(0,b.useMemo)(()=>{let n=nl();return jo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function al(e,t){let n=e.style||{},r={};return rl(r,n,e),Object.assign(r,il(e,t)),r}function ol(e,t){let n={},r=al(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var sl=()=>({...nl(),attrs:{}});function cl(e,t,n,r){let i=(0,b.useMemo)(()=>{let n=sl();return Go(n,t,qo(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};rl(t,e.style,e),i.style={...t,...i.style}}return i}var ll=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function ul(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(ll.indexOf(e)>-1||/[A-Z]/u.test(e))}function dl(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??ul(e)?cl:ol)(t,r,i,e),c=Zc(t,typeof e==`string`,a),l=e===b.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,b.useMemo)(()=>yi(u)?u.get():u,[u]);return(0,b.createElement)(e,{...l,children:d})}function fl({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:pl(n,r,i,e),renderState:t()}}function pl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Zs(a[e]);let{initial:o,animate:s}=e,c=qa(e),l=Ja(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Ua(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=fi(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var ml=e=>(t,n)=>{let r=(0,b.useContext)(Qc),i=(0,b.useContext)(k),a=()=>fl(e,t,r,i);return n?a():fe(a)},hl=ml({scrapeMotionValuesFromProps:Ro,createRenderState:nl}),gl=ml({scrapeMotionValuesFromProps:Yo,createRenderState:sl}),_l=Symbol.for(`motionComponentSymbol`);function vl(e,t,n){let r=(0,b.useRef)(n);(0,b.useInsertionEffect)(()=>{r.current=n});let i=(0,b.useRef)(null);return(0,b.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var yl=(0,b.createContext)({});function bl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function xl(e,t,n,r,i,a){let{visualElement:o}=(0,b.useContext)(Qc),s=(0,b.useContext)(Rc),c=(0,b.useContext)(k),l=(0,b.useContext)(Ic),u=l.reducedMotion,d=l.skipAnimations,f=(0,b.useRef)(null),p=(0,b.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,b.useContext)(yl);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Sl(f.current,n,i,h);let g=(0,b.useRef)(!1);(0,b.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[Ci],v=(0,b.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return pe(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,b.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function Sl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Cl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&bl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Cl(e){if(e)return e.options.allowProjection===!1?Cl(e.parent):e.projection}var V=ue();function wl(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Uc(r);let a=n?n===`svg`:ul(e),o=a?gl:hl;function s(n,s){let c,l={...(0,b.useContext)(Ic),...n,layoutId:Tl(n)},{isStatic:u}=l,d=el(n),f=o(n,u);if(!u&&typeof window<`u`){El(l,r);let t=Dl(l);c=t.MeasureLayout,d.visualElement=xl(e,f,l,i,t.ProjectionNode,a)}return(0,V.jsxs)(Qc.Provider,{value:d,children:[c&&d.visualElement?(0,V.jsx)(c,{visualElement:d.visualElement,...l}):null,dl(e,n,vl(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,b.forwardRef)(s);return c[_l]=e,c}function Tl({layoutId:e}){let t=(0,b.useContext)(de).id;return t&&e!==void 0?t+`-`+e:e}function El(e,t){(0,b.useContext)(Rc).strict}function Dl(e){let{drag:t,layout:n}=Hc();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Ol(e,t){if(typeof Proxy>`u`)return wl;let n=new Map,r=(n,r)=>wl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,wl(a,void 0,e,t)),n.get(a))})}var kl=(e,t)=>t.isSVG??ul(e)?new Xo(t):new Bo(t,{allowProjection:e!==b.Fragment}),Al=class extends oo{constructor(e){super(e),e.animationState||=rs(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Ua(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},jl=0,Ml={animation:{Feature:Al},exit:{Feature:class extends oo{constructor(){super(...arguments),this.id=jl++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=pi(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Nl(e){return{point:{x:e.pageX,y:e.pageY}}}var Pl=e=>t=>sa(t)&&e(t,Nl(t));function Fl(e,t,n,r){return qs(e,t,Pl(n),r)}var Il=({current:e})=>e?e.ownerDocument.defaultView:null,Ll=(e,t)=>Math.abs(e-t);function Rl(e,t){let n=Ll(e.x,t.x),r=Ll(e.y,t.y);return Math.sqrt(n**2+r**2)}var zl=new Set([`auto`,`scroll`]),Bl=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Vl(this.lastRawMoveEventInfo,this.transformPagePoint));let e=Ul(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Rl(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Qe;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Vl(t,this.transformPagePoint),P.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Ul(e.type===`pointercancel`?this.lastMoveEventInfo:Vl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!sa(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Vl(Nl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Qe;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Ul(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=Ce(Fl(this.contextWindow,`pointermove`,this.handlePointerMove,d),Fl(this.contextWindow,`pointerup`,this.handlePointerUp,d),Fl(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(zl.has(e.overflowX)||zl.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),P.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ze(this.updatePoint)}};function Vl(e,t){return t?{point:t(e.point)}:e}function Hl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ul({point:e},t){return{point:e,delta:Hl(e,H(t)),offset:Hl(e,Wl(t)),velocity:U(t,.1)}}function Wl(e){return e[0]}function H(e){return e[e.length-1]}function U(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=H(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Te(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Te(t)*2&&(r=e[1]);let a=Ee(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Gl(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Jt(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Jt(n,e,r.max):Math.min(e,n)),e}function Kl(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function ql(e,{top:t,left:n,bottom:r,right:i}){return{x:Kl(e.x,n,i),y:Kl(e.y,t,r)}}function Jl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Yl(e,t){return{x:Jl(e.x,t.x),y:Jl(e.y,t.y)}}function Xl(e,t){let n=.5,r=ms(e),i=ms(t);return i>r?n=we(t.min,t.max-r,e.min):r>i&&(n=we(e.min,e.max-i,t.min)),ge(0,1,n)}function Zl(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var Ql=.35;function $l(e=Ql){return e===!1?e=0:e===!0&&(e=Ql),{x:eu(e,`left`,`right`),y:eu(e,`top`,`bottom`)}}function eu(e,t,n){return{min:tu(e,t),max:tu(e,n)}}function tu(e,t){return typeof e==`number`?e:e[t]||0}var nu=new WeakMap,ru=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Va(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Nl(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=na(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Is(e=>{let t=this.getAxisMotionValue(e).get()||0;if(wt.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=ms(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&P.update(()=>i(e,t),!1,!0),xi(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=su(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&P.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Bl(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Il(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&P.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!ou(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Gl(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&bl(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=ql(n.layoutBox,e):this.constraints=!1,this.elastic=$l(t),r!==this.constraints&&!bl(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Is(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Zl(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!bl(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=Do(n,r.root,this.visualElement.getTransformPagePoint()),a=Yl(r.layout.layoutBox,i);if(t){let e=t(co(a));this.hasMutatedConstraints=!!e,e&&(a=so(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Is(o=>{if(!ou(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return xi(this.visualElement,e),n.start(si(e,n,0,t,this.visualElement,!1))}stopAnimation(){Is(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Is(t=>{let{drag:n}=this.getProps();if(!ou(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-Jt(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!bl(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Is(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Xl({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Is(t=>{if(!ou(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(Jt(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;nu.set(this.visualElement,this);let e=this.visualElement.current,t=Fl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&da(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();bl(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=au(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),P.read(r);let o=qs(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Is(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Ql,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function iu(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function au(e,t,n){let r=Na(e,iu(n)),i=Na(t,iu(n));return()=>{r(),i()}}function ou(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function su(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var cu=class extends oo{constructor(e){super(e),this.removeGroupControls=Se,this.removeListeners=Se,this.controls=new ru(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Se}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},lu=e=>(t,n)=>{e&&P.update(()=>e(t,n),!1,!0)},uu=class extends oo{constructor(){super(...arguments),this.removePointerDownListener=Se}onPointerDown(e){this.session=new Bl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Il(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:lu(e),onStart:lu(t),onMove:lu(n),onEnd:(e,t)=>{delete this.session,r&&P.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Fl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},du=!1,fu=class extends b.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),du&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),$s.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),du=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||P.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Qi.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;du=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function pu(e){let[t,n]=Lc(),r=(0,b.useContext)(de);return(0,V.jsx)(fu,{...e,layoutGroup:r,switchLayoutGroup:(0,b.useContext)(yl),isPresent:t,safeToRemove:n})}var mu={pan:{Feature:uu},drag:{Feature:cu,ProjectionNode:Fc,MeasureLayout:pu}};function hu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&P.postRender(()=>i(t,Nl(t)))}var gu=class extends oo{mount(){let{current:e}=this.node;e&&(this.unmount=aa(e,(e,t)=>(hu(this.node,t,`Start`),e=>hu(this.node,e,`End`))))}unmount(){}},_u=class extends oo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Ce(qs(this.node.current,`focus`,()=>this.onFocus()),qs(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function vu(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&P.postRender(()=>i(t,Nl(t)))}var yu=class extends oo{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=va(e,(e,t)=>(vu(this.node,t,`Start`),(e,{success:t})=>vu(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},bu=new WeakMap,xu=new WeakMap,Su=e=>{let t=bu.get(e.target);t&&t(e)},Cu=e=>{e.forEach(Su)};function wu({root:e,...t}){let n=e||document;xu.has(n)||xu.set(n,{});let r=xu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Cu,{root:e,...t})),r[i]}function Tu(e,t,n){let r=wu(t);return bu.set(e,n),r.observe(e),()=>{bu.delete(e),r.unobserve(e)}}var Eu={some:0,all:1},Du=class extends oo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Eu[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Tu(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Ou(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Ou({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var ku={inView:{Feature:Du},tap:{Feature:yu},focus:{Feature:_u},hover:{Feature:gu}},Au={layout:{ProjectionNode:Fc,MeasureLayout:pu}},ju=Ol({...Ml,...ku,...mu,...Au},kl),Mu=({text:e})=>(0,V.jsx)(ju.div,{className:`inline-block relative`,initial:{backgroundPosition:`200% center`},animate:{backgroundPosition:`-200% center`},transition:{repeat:1/0,duration:3,ease:`linear`},style:{backgroundImage:`linear-gradient(100deg, #64CEFB 20%, #ffffff 50%, #64CEFB 80%)`,backgroundSize:`200% auto`,WebkitBackgroundClip:`text`,backgroundClip:`text`,color:`transparent`,WebkitTextFillColor:`transparent`},children:e}),Nu=()=>{let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(`/Deepak_Manglani_Resume.pdf`),[i,a]=(0,b.useState)(`Deepak_Manglani_Resume.pdf`),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(!1),u=(0,b.useRef)(null);return(0,V.jsxs)(`section`,{className:`relative w-full h-screen overflow-hidden bg-black text-white`,children:[(0,V.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:`absolute inset-0 w-full h-full object-cover opacity-60 z-0`,src:`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4`}),(0,V.jsxs)(`div`,{className:`relative z-10 w-full h-full flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,V.jsxs)(`nav`,{className:`w-full pt-6 pb-4 flex justify-between items-center`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,V.jsxs)(`a`,{href:n,download:i,className:`flex items-center gap-3 hover:opacity-80 transition-all group`,title:`Download ${i}`,children:[(0,V.jsx)(`div`,{className:`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-all`,children:(0,V.jsx)(ce,{className:`w-4 h-4 text-white`})}),(0,V.jsx)(`span`,{className:`font-semibold text-lg tracking-wide hidden sm:inline`,children:`D.M (Resume)`})]}),(0,V.jsx)(`input`,{type:`file`,ref:u,onChange:e=>{let t=e.target.files?.[0];if(t){let e=URL.createObjectURL(t);r(e),a(t.name),l(!0),setTimeout(()=>{l(!1),s(!0)},1500)}},accept:`.pdf,.doc,.docx`,className:`hidden`}),!o&&(0,V.jsx)(`button`,{onClick:()=>u.current?.click(),className:`flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full transition-all backdrop-blur-sm`,title:`Upload Updated Resume PDF`,children:c?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(se,{className:`w-3.5 h-3.5 text-green-400`}),(0,V.jsx)(`span`,{className:`text-green-400 font-medium`,children:`Updated!`})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(D,{className:`w-3.5 h-3.5 text-white/80`}),(0,V.jsx)(`span`,{className:`font-medium`,children:`Upload Resume`})]})})]}),(0,V.jsxs)(`div`,{className:`hidden lg:flex items-center gap-8 bg-white/5 border border-gray-700 rounded-full px-6 py-2 backdrop-blur-sm`,children:[(0,V.jsx)(`a`,{href:`#`,className:`text-sm text-white/80 hover:text-white transition-colors`,children:`Home`}),(0,V.jsx)(`a`,{href:`#about`,className:`text-sm text-white/80 hover:text-white transition-colors`,children:`About`}),(0,V.jsx)(`a`,{href:`#experience`,className:`text-sm text-white/80 hover:text-white transition-colors`,children:`Experience`}),(0,V.jsx)(`a`,{href:`#projects`,className:`text-sm text-white/80 hover:text-white transition-colors`,children:`Projects`}),(0,V.jsx)(`a`,{href:`#skills`,className:`text-sm text-white/80 hover:text-white transition-colors`,children:`Skills`}),(0,V.jsxs)(`a`,{href:`mailto:Dmanglani@hotmail.com`,className:`text-sm text-white/80 hover:text-white transition-colors flex items-center gap-1`,children:[`Contact us `,(0,V.jsx)(oe,{className:`w-4 h-4`})]})]}),(0,V.jsx)(`button`,{className:`lg:hidden p-2 text-white/80 hover:text-white transition-colors`,onClick:()=>t(!e),children:e?(0,V.jsx)(O,{className:`w-6 h-6`}):(0,V.jsx)(E,{className:`w-6 h-6`})})]}),e&&(0,V.jsxs)(`div`,{className:`lg:hidden absolute top-20 left-4 right-4 bg-black/90 border border-gray-700 rounded-2xl p-4 flex flex-col gap-4 backdrop-blur-md z-50`,children:[(0,V.jsx)(`a`,{href:`#`,className:`text-white/80 hover:text-white transition-colors px-4 py-2`,children:`Home`}),(0,V.jsx)(`a`,{href:`#about`,className:`text-white/80 hover:text-white transition-colors px-4 py-2`,children:`About`}),(0,V.jsx)(`a`,{href:`#experience`,className:`text-white/80 hover:text-white transition-colors px-4 py-2`,children:`Experience`}),(0,V.jsx)(`a`,{href:`#projects`,className:`text-white/80 hover:text-white transition-colors px-4 py-2`,children:`Projects`}),(0,V.jsx)(`a`,{href:`#skills`,className:`text-white/80 hover:text-white transition-colors px-4 py-2`,children:`Skills`}),(0,V.jsxs)(`a`,{href:`mailto:Dmanglani@hotmail.com`,className:`text-white/80 hover:text-white transition-colors px-4 py-2 flex items-center gap-1`,children:[`Contact us `,(0,V.jsx)(oe,{className:`w-4 h-4`})]})]}),(0,V.jsxs)(`div`,{className:`w-full flex flex-col lg:flex-row justify-between items-start lg:items-center mt-12 gap-6 lg:gap-0`,children:[(0,V.jsx)(`p`,{className:`text-white/80 text-sm lg:text-base max-w-md leading-relaxed`,children:`Delivering transformative commercial strategies that empower B2B operations and streamline supply chain logistics globally.`}),(0,V.jsx)(`p`,{className:`text-white/80 text-sm lg:text-base lg:text-right font-medium`,children:`14+ Years of Regional Success in UAE !`})]}),(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col justify-center items-start lg:items-center mt-[-40px]`,children:[(0,V.jsx)(`span`,{className:`uppercase text-white/80 text-xs lg:text-sm tracking-tighter mb-4 font-semibold`,children:`Available for New Leadership Opportunities`}),(0,V.jsxs)(`h1`,{className:`flex flex-row flex-wrap justify-center items-center gap-3 lg:gap-6 text-center font-medium leading-[0.85] tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`,children:[(0,V.jsx)(`span`,{className:`text-white uppercase`,children:`Deepak`}),(0,V.jsx)(`span`,{className:`uppercase`,children:(0,V.jsx)(Mu,{text:`Manglani`})})]}),(0,V.jsx)(`div`,{className:`mt-12`,children:(0,V.jsxs)(`a`,{href:`mailto:Dmanglani@hotmail.com`,className:`inline-flex items-center gap-3 bg-black hover:bg-gray-900 border border-white/20 transition-all rounded-full px-6 py-3 md:px-8 md:py-4 text-white font-medium group`,children:[`Contact Me`,(0,V.jsx)(oe,{className:`w-5 h-5 group-hover:translate-x-1 transition-transform`})]})})]})]})]})},Pu=()=>(0,V.jsx)(`section`,{id:`about`,className:`w-full min-h-screen flex items-center justify-center bg-black text-white px-4 py-20 border-t border-gray-900`,children:(0,V.jsxs)(`div`,{className:`max-w-4xl mx-auto flex flex-col items-center text-center`,children:[(0,V.jsx)(`h2`,{className:`text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-8`,children:`About Me`}),(0,V.jsxs)(`p`,{className:`text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/90`,children:[`I am a `,(0,V.jsx)(`strong`,{className:`font-semibold text-white`,children:`Commercial Operations & Sales Manager`}),` with over 14 years of regional success driving procurement governance, supply chain optimization, and margin protection within the UAE B2B electronics and industrial markets.`]}),(0,V.jsx)(`p`,{className:`mt-8 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed`,children:`Highly adept at aligning cross-functional teams, orchestrating complex import/export logistics, and leading large-scale trade events. I combine deep operational expertise with a digital edge, leveraging modern AI tools and workflow automation to prototype custom CRM solutions and streamline inventory audits.`})]})}),Fu=[{role:`Commercial Operations & Sales Manager`,company:`Tultop International FZC LLC`,location:`Sharjah, UAE`,period:`Jan 2024 - Present`,bullets:[`Spearhead sales pipeline execution and purchasing workflows for high-value B2B electronics and LED industrial lines.`,`Direct contract reviews, tariff positioning, and quote auditing to protect gross margins.`,`Prototyped custom internal CRM tools using open-source LLMs, reducing software licensing overhead.`]},{role:`Logistics & Procurement Manager`,company:`Tultop International FZC LLC`,location:`Sharjah, UAE`,period:`Dec 2015 - Dec 2023`,bullets:[`Directed end-to-end import, export, and re-export logistics corridors across critical Middle Eastern channels.`,`Standardized customs declaration clearings and compliance protocols, ensuring zero regulatory clearance delays.`,`Administered ledger accounts and financial reconciliation workflows using Tally ERP.`]},{role:`B2B Event Coordinator`,company:`India Trade and Exhibitions Centre M.E`,location:`Dubai/Sharjah, UAE`,period:`Sep 2018 - Jan 2019`,bullets:[`Partnered with the Dubai Business Leader's Forum to coordinate physical logistics for the high-profile India-UAE Partnership Summit 2018.`,`Supervised layout assembly and stand shell scheme assignments for international trade exhibitors.`,`Coordinated spacing and institutional setups for The Great India Education Fair 2018.`,`Compiled institutional engagement metrics and precise Minutes of Meetings (MoM) with senior academic directors.`]},{role:`Sales, Purchase & Operations Manager`,company:`SPARK COMMUNICATIONS L.L.C`,location:`Dubai, UAE`,period:`Mar 2012 - Jul 2015`,bullets:[`Managed import/export contract sourcing with electronics manufacturers across China, the UK, and the USA.`,`Engineered B2B distribution networks across the UAE, aligning stock levels with tech trends.`,`Audited freight quotes and container manifests, optimizing multi-modal logistics lanes.`]},{role:`Trainee Network & Systems Operations Administrator`,company:`Rajhans Industries Pvt LTD`,location:`Rajasthan, India`,period:`Sep 2010 - Jul 2011`,bullets:[`Managed network switch configurations, printer servers, and local area network (LAN) node connectivity.`,`Configured updates and system patches for active tender tracking applications.`]}],Iu=()=>(0,V.jsx)(`section`,{id:`experience`,className:`w-full bg-black text-white px-4 py-24 border-t border-gray-900`,children:(0,V.jsxs)(`div`,{className:`max-w-5xl mx-auto`,children:[(0,V.jsx)(`h2`,{className:`text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-16 text-center`,children:`Professional Experience`}),(0,V.jsx)(`div`,{className:`flex flex-col gap-12`,children:Fu.map((e,t)=>(0,V.jsxs)(`div`,{className:`flex flex-col md:flex-row gap-6 md:gap-12 group`,children:[(0,V.jsxs)(`div`,{className:`w-full md:w-1/3 flex flex-col md:text-right border-l md:border-l-0 md:border-r border-gray-800 pl-4 md:pl-0 md:pr-8 py-2`,children:[(0,V.jsx)(`span`,{className:`text-white/60 text-sm font-medium tracking-wide mb-1`,children:e.period}),(0,V.jsx)(`span`,{className:`text-white/90 font-semibold`,children:e.company}),(0,V.jsx)(`span`,{className:`text-white/50 text-sm`,children:e.location})]}),(0,V.jsxs)(`div`,{className:`w-full md:w-2/3 flex flex-col pl-4 md:pl-0`,children:[(0,V.jsx)(`h3`,{className:`text-xl md:text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors`,children:e.role}),(0,V.jsx)(`ul`,{className:`flex flex-col gap-3`,children:e.bullets.map((e,t)=>(0,V.jsxs)(`li`,{className:`text-white/70 leading-relaxed text-sm md:text-base flex items-start`,children:[(0,V.jsx)(`span`,{className:`text-blue-500 mr-3 mt-1.5 opacity-50 text-xs`,children:`◆`}),(0,V.jsx)(`span`,{children:e})]},t))})]})]},t))})]})}),Lu=[{title:`Vincitore Benessere Luxury Landmark`,location:`Dubai, UAE`,impact:`15% - 18% Cost Reduction`,desc:`Secured and directed end-to-end commercial luminaire integration for a massive premium residential development. Aligned pre-sales technical specifications with complex architectural requirements.`},{title:`Al Jaddaf Commercial Tower`,location:`Dubai, UAE`,impact:`15% Margin Optimization`,desc:`Spearheaded procurement execution for a comprehensive high-rise structural exterior illumination array. Deployed tactical on-site teams to beat target lead times.`},{title:`Private Luxury Villa (Al Khawaneej)`,location:`Dubai, UAE`,impact:`20% Maintenance Savings`,desc:`Controlled procurement pipelines for high-end residential facade and perimeter illumination systems, executing layouts with high-density LED Neon Flex.`},{title:`Fillit Commercial Office`,location:`Dubai, UAE`,impact:`Seamless Handover`,desc:`Handled total interior commercial procurement and fit-out layout installations for a modern corporate office. Coordinated staggered nighttime installation schedules.`},{title:`High-End Private Club & Luxury Villa Venue`,location:`Abu Dhabi, UAE`,impact:`15% - 20% Cost Efficiency`,desc:`Directed the end-to-end commercial supply and installation pipeline for premium ambient architectural lounge layouts. Supervised on-site technicians during complex low-voltage installations.`}],Ru=()=>(0,V.jsx)(`section`,{id:`projects`,className:`w-full bg-black text-white px-4 py-24 border-t border-gray-900`,children:(0,V.jsxs)(`div`,{className:`max-w-6xl mx-auto`,children:[(0,V.jsx)(`h2`,{className:`text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-16 text-center`,children:`Key Projects & Highlights`}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-6`,children:Lu.map((e,t)=>(0,V.jsxs)(`div`,{className:`p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group cursor-default`,children:[(0,V.jsxs)(`div`,{className:`flex justify-between items-start mb-4`,children:[(0,V.jsx)(`span`,{className:`text-xs font-semibold px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full`,children:e.impact}),(0,V.jsx)(`span`,{className:`text-white/40 text-sm`,children:e.location})]}),(0,V.jsx)(`h3`,{className:`text-xl font-semibold mb-3 group-hover:text-white text-white/90 transition-colors`,children:e.title}),(0,V.jsx)(`p`,{className:`text-white/60 text-sm leading-relaxed`,children:e.desc})]},t))})]})}),zu=[`B2B Sales Pipeline Governance`,`Commercial Operations`,`Gross Margin Optimization`,`Global Sourcing`,`Contract Negotiation`,`Logistics & Customs Clearings`,`Business Automation`,`CRM Prototyping`,`Tally ERP`,`Supply Chain Infrastructure`],Bu=()=>(0,V.jsx)(`section`,{id:`skills`,className:`w-full bg-black text-white px-4 py-24 border-t border-gray-900`,children:(0,V.jsxs)(`div`,{className:`max-w-4xl mx-auto flex flex-col items-center`,children:[(0,V.jsx)(`h2`,{className:`text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-16 text-center`,children:`Core Competencies`}),(0,V.jsx)(`div`,{className:`flex flex-wrap justify-center gap-4`,children:zu.map((e,t)=>(0,V.jsx)(`div`,{className:`px-6 py-3 rounded-full border border-gray-700 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all cursor-default text-sm md:text-base font-medium text-white/80`,children:e},t))})]})}),Vu=_(),Hu=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,Uu={popup:`styles-module__popup___IhzrD`,enter:`styles-module__enter___L7U7N`,popupEnter:`styles-module__popupEnter___AuQDN`,entered:`styles-module__entered___COX-w`,exit:`styles-module__exit___5eGjE`,popupExit:`styles-module__popupExit___JJKQX`,shake:`styles-module__shake___jdbWe`,header:`styles-module__header___wWsSi`,element:`styles-module__element___fTV2z`,headerToggle:`styles-module__headerToggle___WpW0b`,chevron:`styles-module__chevron___ZZJlR`,expanded:`styles-module__expanded___2Hxgv`,stylesWrapper:`styles-module__stylesWrapper___pnHgy`,stylesInner:`styles-module__stylesInner___YYZe2`,stylesBlock:`styles-module__stylesBlock___VfQKn`,styleLine:`styles-module__styleLine___1YQiD`,styleProperty:`styles-module__styleProperty___84L1i`,styleValue:`styles-module__styleValue___q51-h`,timestamp:`styles-module__timestamp___Dtpsv`,quote:`styles-module__quote___mcMmQ`,textarea:`styles-module__textarea___jrSae`,green:`styles-module__green___99l3h`,actions:`styles-module__actions___D6x3f`,cancel:`styles-module__cancel___hRjnL`,submit:`styles-module__submit___K-mIR`,deleteWrapper:`styles-module__deleteWrapper___oSjdo`,deleteButton:`styles-module__deleteButton___4VuAE`,light:`styles-module__light___6AaSQ`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-popup-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-popup-css-styles`,document.head.appendChild(e)),e.textContent=Hu}var Wu=Uu,Gu=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Ku={iconState:`icon-transitions-module__iconState___uqK9J`,iconStateFast:`icon-transitions-module__iconStateFast___HxlMm`,iconFade:`icon-transitions-module__iconFade___nPwXg`,iconFadeFast:`icon-transitions-module__iconFadeFast___Ofb2t`,visible:`icon-transitions-module__visible___PlHsU`,visibleScaled:`icon-transitions-module__visibleScaled___8Qog-`,hidden:`icon-transitions-module__hidden___ETykt`,hiddenScaled:`icon-transitions-module__hiddenScaled___JXn-m`,sending:`icon-transitions-module__sending___uaLN-`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-components-icon-transitions`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-components-icon-transitions`,document.head.appendChild(e)),e.textContent=Gu}var qu=Ku,Ju=({size:e=16})=>(0,V.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M8 3v10M3 8h10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),Yu=({size:e=24,style:t={}})=>(0,V.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:t,children:[(0,V.jsxs)(`g`,{clipPath:`url(#clip0_list_sparkle)`,children:[(0,V.jsx)(`path`,{d:`M11.5 12L5.5 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M18.5 6.75L5.5 6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M9.25 17.25L5.5 17.25`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`})]}),(0,V.jsx)(`defs`,{children:(0,V.jsx)(`clipPath`,{id:`clip0_list_sparkle`,children:(0,V.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),Xu=({size:e=20,...t})=>(0,V.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...t,children:[(0,V.jsx)(`circle`,{cx:`10`,cy:`10`,r:`5.375`,stroke:`currentColor`,strokeWidth:`1.25`}),(0,V.jsx)(`path`,{d:`M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`circle`,{cx:`10`,cy:`12.625`,r:`0.625`,fill:`currentColor`})]}),Zu=({size:e=24,copied:t=!1,tint:n})=>(0,V.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:n?{color:n,transition:`color 0.3s ease`}:void 0,children:[(0,V.jsxs)(`g`,{className:`${qu.iconState} ${t?qu.hiddenScaled:qu.visibleScaled}`,children:[(0,V.jsx)(`path`,{d:`M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,V.jsx)(`path`,{d:`M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,V.jsxs)(`g`,{className:`${qu.iconState} ${t?qu.visibleScaled:qu.hiddenScaled}`,children:[(0,V.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),Qu=({size:e=24,state:t=`idle`})=>{let n=t===`idle`,r=t===`sent`,i=t===`failed`,a=t===`sending`;return(0,V.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,V.jsx)(`g`,{className:`${qu.iconStateFast} ${n?qu.visibleScaled:a?qu.sending:qu.hiddenScaled}`,children:(0,V.jsx)(`path`,{d:`M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,V.jsxs)(`g`,{className:`${qu.iconStateFast} ${r?qu.visibleScaled:qu.hiddenScaled}`,children:[(0,V.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,V.jsxs)(`g`,{className:`${qu.iconStateFast} ${i?qu.visibleScaled:qu.hiddenScaled}`,children:[(0,V.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M12 8V12`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,V.jsx)(`circle`,{cx:`12`,cy:`15`,r:`0.5`,fill:`var(--agentation-color-red)`,stroke:`var(--agentation-color-red)`,strokeWidth:`1`})]})]})},$u=({size:e=24,isOpen:t=!0})=>(0,V.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,V.jsxs)(`g`,{className:`${qu.iconFade} ${t?qu.visible:qu.hidden}`,children:[(0,V.jsx)(`path`,{d:`M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,V.jsxs)(`g`,{className:`${qu.iconFade} ${t?qu.hidden:qu.visible}`,children:[(0,V.jsx)(`path`,{d:`M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z`,fill:`currentColor`}),(0,V.jsx)(`path`,{d:`M5 19L19 5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})]}),ed=({size:e=24,isPaused:t=!1})=>(0,V.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,V.jsxs)(`g`,{className:`${qu.iconFadeFast} ${t?qu.hidden:qu.visible}`,children:[(0,V.jsx)(`path`,{d:`M8 6L8 18`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,V.jsx)(`path`,{d:`M16 18L16 6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,V.jsx)(`path`,{className:`${qu.iconFadeFast} ${t?qu.visible:qu.hidden}`,d:`M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z`,stroke:`currentColor`,strokeWidth:`1.5`})]}),td=({size:e=16})=>(0,V.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,V.jsx)(`path`,{d:`M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`})]}),nd=({size:e=16})=>(0,V.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),rd=({size:e=16})=>(0,V.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,V.jsxs)(`g`,{clipPath:`url(#clip0_2_53)`,children:[(0,V.jsx)(`path`,{d:`M16.25 16.25L7.75 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M7.75 16.25L16.25 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,V.jsx)(`defs`,{children:(0,V.jsx)(`clipPath`,{id:`clip0_2_53`,children:(0,V.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),id=({size:e=24})=>(0,V.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z`,fill:`currentColor`})}),ad=({size:e=16})=>(0,V.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:[(0,V.jsx)(`path`,{d:`M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M10 3.9585V5.05698`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M10 14.9429V16.0414`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M5.7269 5.72656L6.50682 6.50649`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M13.4932 13.4932L14.2731 14.2731`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M3.95834 10H5.05683`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M14.9432 10H16.0417`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M5.7269 14.2731L6.50682 13.4932`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M13.4932 6.50649L14.2731 5.72656`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),od=({size:e=16})=>(0,V.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z`,stroke:`currentColor`,strokeWidth:`1.13793`,strokeLinecap:`round`,strokeLinejoin:`round`})}),sd=({size:e=16})=>(0,V.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,V.jsx)(`path`,{d:`M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375`,stroke:`currentColor`,strokeWidth:`0.9`,strokeLinecap:`round`,strokeLinejoin:`round`})}),cd=({size:e=24})=>(0,V.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,V.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),ld=({size:e=16})=>(0,V.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,V.jsx)(`path`,{d:`M8.5 3.5L4 8L8.5 12.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),ud=({size:e=24})=>(0,V.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,V.jsx)(`line`,{x1:`3`,y1:`9`,x2:`21`,y2:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,V.jsx)(`line`,{x1:`9`,y1:`9`,x2:`9`,y2:`21`,stroke:`currentColor`,strokeWidth:`1.5`})]}),dd=[`data-feedback-toolbar`,`data-annotation-popup`,`data-annotation-marker`],fd=dd.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(``),pd=`feedback-freeze-styles`,md=`__agentation_freeze`;function hd(){if(typeof window>`u`)return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let e=window;return e[md]||(e[md]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[md]}var W=hd();typeof window<`u`&&!W.installed&&(W.origSetTimeout=window.setTimeout.bind(window),W.origSetInterval=window.setInterval.bind(window),W.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>typeof e==`string`?W.origSetTimeout(e,t):W.origSetTimeout((...t)=>{W.frozen?W.frozenTimeoutQueue.push(()=>e(...t)):e(...t)},t,...n),window.setInterval=(e,t,...n)=>typeof e==`string`?W.origSetInterval(e,t):W.origSetInterval((...t)=>{W.frozen||e(...t)},t,...n),window.requestAnimationFrame=e=>W.origRAF(t=>{W.frozen?W.frozenRAFQueue.push(e):e(t)}),W.installed=!0);var G=W.origSetTimeout,gd=W.origSetInterval,_d=W.origRAF;function vd(e){return e?dd.some(t=>!!e.closest?.(`[${t}]`)):!1}function yd(){if(typeof document>`u`||W.frozen)return;W.frozen=!0,W.frozenTimeoutQueue=[],W.frozenRAFQueue=[];let e=document.getElementById(pd);e||(e=document.createElement(`style`),e.id=pd),e.textContent=`
    *${fd},
    *${fd}::before,
    *${fd}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),W.pausedAnimations=[];try{document.getAnimations().forEach(e=>{if(e.playState!==`running`)return;let t=e.effect?.target;vd(t)||(e.pause(),W.pausedAnimations.push(e))})}catch{}document.querySelectorAll(`video`).forEach(e=>{e.paused||(e.dataset.wasPaused=`false`,e.pause())})}function bd(){if(typeof document>`u`||!W.frozen)return;W.frozen=!1;let e=W.frozenTimeoutQueue;W.frozenTimeoutQueue=[];for(let t of e)W.origSetTimeout(()=>{if(W.frozen){W.frozenTimeoutQueue.push(t);return}try{t()}catch(e){console.warn(`[agentation] Error replaying queued timeout:`,e)}},0);let t=W.frozenRAFQueue;W.frozenRAFQueue=[];for(let e of t)W.origRAF(t=>{if(W.frozen){W.frozenRAFQueue.push(e);return}e(t)});for(let e of W.pausedAnimations)try{e.play()}catch(e){console.warn(`[agentation] Error resuming animation:`,e)}W.pausedAnimations=[],document.getElementById(pd)?.remove(),document.querySelectorAll(`video`).forEach(e=>{e.dataset.wasPaused===`false`&&(e.play().catch(()=>{}),delete e.dataset.wasPaused)})}function xd(e){if(!e)return;let t=e=>e.stopImmediatePropagation();document.addEventListener(`focusin`,t,!0),document.addEventListener(`focusout`,t,!0);try{e.focus()}finally{document.removeEventListener(`focusin`,t,!0),document.removeEventListener(`focusout`,t,!0)}}var Sd=(0,b.forwardRef)(function({element:e,timestamp:t,selectedText:n,placeholder:r=`What should change?`,initialValue:i=``,submitLabel:a=`Add`,onSubmit:o,onCancel:s,onDelete:c,style:l,accentColor:u=`#3c82f7`,isExiting:d=!1,lightMode:f=!1,computedStyles:p},m){let[h,g]=(0,b.useState)(i),[_,v]=(0,b.useState)(!1),[y,x]=(0,b.useState)(`initial`),[S,C]=(0,b.useState)(!1),[w,ee]=(0,b.useState)(!1),te=(0,b.useRef)(null),ne=(0,b.useRef)(null),re=(0,b.useRef)(null),ie=(0,b.useRef)(null);(0,b.useEffect)(()=>{d&&y!==`exit`&&x(`exit`)},[d,y]),(0,b.useEffect)(()=>{G(()=>{x(`enter`)},0);let e=G(()=>{x(`entered`)},200),t=G(()=>{let e=te.current;e&&(xd(e),e.selectionStart=e.selectionEnd=e.value.length,e.scrollTop=e.scrollHeight)},50);return()=>{clearTimeout(e),clearTimeout(t),re.current&&clearTimeout(re.current),ie.current&&clearTimeout(ie.current)}},[]);let ae=(0,b.useCallback)(()=>{ie.current&&clearTimeout(ie.current),v(!0),ie.current=G(()=>{v(!1),xd(te.current)},250)},[]);(0,b.useImperativeHandle)(m,()=>({shake:ae}),[ae]);let T=(0,b.useCallback)(()=>{x(`exit`),re.current=G(()=>{s()},150)},[s]),oe=(0,b.useCallback)(()=>{h.trim()&&o(h.trim())},[h,o]),se=(0,b.useCallback)(e=>{e.stopPropagation(),!e.nativeEvent.isComposing&&(e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),oe()),e.key===`Escape`&&T())},[oe,T]);return(0,V.jsxs)(`div`,{ref:ne,className:[Wu.popup,f?Wu.light:``,y===`enter`?Wu.enter:``,y===`entered`?Wu.entered:``,y===`exit`?Wu.exit:``,_?Wu.shake:``].filter(Boolean).join(` `),"data-annotation-popup":!0,style:l,onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(`div`,{className:Wu.header,children:[p&&Object.keys(p).length>0?(0,V.jsxs)(`button`,{className:Wu.headerToggle,onClick:()=>{let e=w;ee(!w),e&&G(()=>xd(te.current),0)},type:`button`,children:[(0,V.jsx)(`svg`,{className:`${Wu.chevron} ${w?Wu.expanded:``}`,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,V.jsx)(`path`,{d:`M5.5 10.25L9 7.25L5.75 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,V.jsx)(`span`,{className:Wu.element,children:e})]}):(0,V.jsx)(`span`,{className:Wu.element,children:e}),t&&(0,V.jsx)(`span`,{className:Wu.timestamp,children:t})]}),p&&Object.keys(p).length>0&&(0,V.jsx)(`div`,{className:`${Wu.stylesWrapper} ${w?Wu.expanded:``}`,children:(0,V.jsx)(`div`,{className:Wu.stylesInner,children:(0,V.jsx)(`div`,{className:Wu.stylesBlock,children:Object.entries(p).map(([e,t])=>(0,V.jsxs)(`div`,{className:Wu.styleLine,children:[(0,V.jsx)(`span`,{className:Wu.styleProperty,children:e.replace(/([A-Z])/g,`-$1`).toLowerCase()}),`: `,(0,V.jsx)(`span`,{className:Wu.styleValue,children:t}),`;`]},e))})})}),n&&(0,V.jsxs)(`div`,{className:Wu.quote,children:[`“`,n.slice(0,80),n.length>80?`...`:``,`”`]}),(0,V.jsx)(`textarea`,{ref:te,className:Wu.textarea,style:{borderColor:S?u:void 0},placeholder:r,value:h,onChange:e=>g(e.target.value),onFocus:()=>C(!0),onBlur:()=>C(!1),rows:2,onKeyDown:se}),(0,V.jsxs)(`div`,{className:Wu.actions,children:[c&&(0,V.jsx)(`div`,{className:Wu.deleteWrapper,children:(0,V.jsx)(`button`,{className:Wu.deleteButton,onClick:c,type:`button`,children:(0,V.jsx)(cd,{size:22})})}),(0,V.jsx)(`button`,{className:Wu.cancel,onClick:T,children:`Cancel`}),(0,V.jsx)(`button`,{className:Wu.submit,style:{backgroundColor:u,opacity:h.trim()?1:.4},onClick:oe,disabled:!h.trim(),children:a})]})]})}),Cd=({content:e,children:t,...n})=>{let[r,i]=(0,b.useState)(!1),[a,o]=(0,b.useState)(!1),[s,c]=(0,b.useState)({top:0,right:0}),l=(0,b.useRef)(null),u=(0,b.useRef)(null),d=(0,b.useRef)(null),f=()=>{if(l.current){let e=l.current.getBoundingClientRect();c({top:e.top+e.height/2,right:window.innerWidth-e.left+8})}};return(0,b.useEffect)(()=>()=>{u.current&&clearTimeout(u.current),d.current&&clearTimeout(d.current)},[]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`span`,{ref:l,onMouseEnter:()=>{o(!0),d.current&&=(clearTimeout(d.current),null),f(),u.current=G(()=>{i(!0)},500)},onMouseLeave:()=>{u.current&&=(clearTimeout(u.current),null),i(!1),d.current=G(()=>{o(!1)},150)},...n,children:t}),a&&(0,Vu.createPortal)((0,V.jsx)(`div`,{"data-feedback-toolbar":!0,style:{position:`fixed`,top:s.top,right:s.right,transform:`translateY(-50%)`,padding:`6px 10px`,background:`#383838`,color:`rgba(255, 255, 255, 0.7)`,fontSize:`11px`,fontWeight:400,lineHeight:`14px`,borderRadius:`10px`,width:`180px`,textAlign:`left`,zIndex:100020,pointerEvents:`none`,boxShadow:`0px 1px 8px rgba(0, 0, 0, 0.28)`,opacity:+!!r,transition:`opacity 0.15s ease`},children:e}),document.body)]})},wd=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,Td={tooltip:`styles-module__tooltip___mcXL2`,tooltipIcon:`styles-module__tooltipIcon___Nq2nD`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-help-tooltip-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-help-tooltip-styles`,document.head.appendChild(e)),e.textContent=wd}var K=Td,Ed=({content:e})=>(0,V.jsx)(Cd,{className:K.tooltip,content:e,children:(0,V.jsx)(Xu,{className:K.tooltipIcon})}),q={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Dd=[{section:`Layout`,items:[{type:`navigation`,label:`Navigation`,...q.navigation},{type:`header`,label:`Header`,...q.header},{type:`hero`,label:`Hero`,...q.hero},{type:`section`,label:`Section`,...q.section},{type:`sidebar`,label:`Sidebar`,...q.sidebar},{type:`footer`,label:`Footer`,...q.footer},{type:`modal`,label:`Modal`,...q.modal},{type:`banner`,label:`Banner`,...q.banner},{type:`drawer`,label:`Drawer`,...q.drawer},{type:`popover`,label:`Popover`,...q.popover},{type:`divider`,label:`Divider`,...q.divider}]},{section:`Content`,items:[{type:`card`,label:`Card`,...q.card},{type:`text`,label:`Text`,...q.text},{type:`image`,label:`Image`,...q.image},{type:`video`,label:`Video`,...q.video},{type:`table`,label:`Table`,...q.table},{type:`grid`,label:`Grid`,...q.grid},{type:`list`,label:`List`,...q.list},{type:`chart`,label:`Chart`,...q.chart},{type:`codeBlock`,label:`Code Block`,...q.codeBlock},{type:`map`,label:`Map`,...q.map},{type:`timeline`,label:`Timeline`,...q.timeline},{type:`calendar`,label:`Calendar`,...q.calendar},{type:`accordion`,label:`Accordion`,...q.accordion},{type:`carousel`,label:`Carousel`,...q.carousel},{type:`logo`,label:`Logo`,...q.logo},{type:`faq`,label:`FAQ`,...q.faq},{type:`gallery`,label:`Gallery`,...q.gallery}]},{section:`Controls`,items:[{type:`button`,label:`Button`,...q.button},{type:`input`,label:`Input`,...q.input},{type:`search`,label:`Search`,...q.search},{type:`form`,label:`Form`,...q.form},{type:`tabs`,label:`Tabs`,...q.tabs},{type:`dropdown`,label:`Dropdown`,...q.dropdown},{type:`toggle`,label:`Toggle`,...q.toggle},{type:`stepper`,label:`Stepper`,...q.stepper},{type:`rating`,label:`Rating`,...q.rating},{type:`fileUpload`,label:`File Upload`,...q.fileUpload},{type:`checkbox`,label:`Checkbox`,...q.checkbox},{type:`radio`,label:`Radio`,...q.radio},{type:`slider`,label:`Slider`,...q.slider},{type:`datePicker`,label:`Date Picker`,...q.datePicker}]},{section:`Elements`,items:[{type:`avatar`,label:`Avatar`,...q.avatar},{type:`badge`,label:`Badge`,...q.badge},{type:`tag`,label:`Tag`,...q.tag},{type:`breadcrumb`,label:`Breadcrumb`,...q.breadcrumb},{type:`pagination`,label:`Pagination`,...q.pagination},{type:`progress`,label:`Progress`,...q.progress},{type:`alert`,label:`Alert`,...q.alert},{type:`toast`,label:`Toast`,...q.toast},{type:`notification`,label:`Notification`,...q.notification},{type:`tooltip`,label:`Tooltip`,...q.tooltip},{type:`stat`,label:`Stat`,...q.stat},{type:`skeleton`,label:`Skeleton`,...q.skeleton},{type:`chip`,label:`Chip`,...q.chip},{type:`icon`,label:`Icon`,...q.icon},{type:`spinner`,label:`Spinner`,...q.spinner}]},{section:`Blocks`,items:[{type:`pricing`,label:`Pricing`,...q.pricing},{type:`testimonial`,label:`Testimonial`,...q.testimonial},{type:`cta`,label:`CTA`,...q.cta},{type:`productCard`,label:`Product Card`,...q.productCard},{type:`profile`,label:`Profile`,...q.profile},{type:`feature`,label:`Feature`,...q.feature},{type:`team`,label:`Team`,...q.team},{type:`login`,label:`Login`,...q.login},{type:`contact`,label:`Contact`,...q.contact}]}],Od={};for(let e of Dd)for(let t of e.items)Od[t.type]=t;function J({w:e,h:t=3,strong:n}){return(0,V.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:t,borderRadius:2,background:n?`var(--agd-bar-strong)`:`var(--agd-bar)`,flexShrink:0}})}function kd({w:e,h:t,radius:n=3,style:r}){return(0,V.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:typeof t==`number`?`${t}px`:t,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0,...r}})}function Ad({size:e}){return(0,V.jsx)(`div`,{style:{width:e,height:e,borderRadius:`50%`,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0}})}function jd({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,padding:`0 ${Math.max(8,t*.2)}px`,gap:e*.02},children:[(0,V.jsx)(kd,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,V.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginLeft:e*.04},children:[(0,V.jsx)(J,{w:e*.06}),(0,V.jsx)(J,{w:e*.07}),(0,V.jsx)(J,{w:e*.05}),(0,V.jsx)(J,{w:e*.06})]}),(0,V.jsx)(kd,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function Md({width:e,height:t,text:n}){return(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.05},children:[n?(0,V.jsx)(`span`,{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:`var(--agd-text-3)`,textAlign:`center`,maxWidth:`80%`},children:n}):(0,V.jsx)(J,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,V.jsx)(J,{w:e*.6}),(0,V.jsx)(J,{w:e*.4}),(0,V.jsx)(kd,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function Nd({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,V.jsxs)(`div`,{style:{padding:e*.08,display:`flex`,flexDirection:`column`,gap:t*.03},children:[(0,V.jsx)(J,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(t,n)=>(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,V.jsx)(kd,{w:10,h:10,radius:2}),(0,V.jsx)(J,{w:e*(.4+n*17%30/100)})]},n))]})}function Pd({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,V.jsx)(`div`,{style:{display:`flex`,padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(e,t)=>(0,V.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,V.jsx)(J,{w:`60%`,h:3,strong:!0}),(0,V.jsx)(J,{w:`80%`,h:2}),(0,V.jsx)(J,{w:`70%`,h:2}),(0,V.jsx)(J,{w:`60%`,h:2})]},t))})}function Fd({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,V.jsxs)(`div`,{style:{padding:`10px 12px`,borderBottom:`1px solid var(--agd-stroke)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,V.jsx)(J,{w:e*.3,h:4,strong:!0}),(0,V.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),(0,V.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,V.jsx)(J,{w:`90%`}),(0,V.jsx)(J,{w:`70%`}),(0,V.jsx)(J,{w:`80%`})]}),(0,V.jsxs)(`div`,{style:{padding:`10px 12px`,borderTop:`1px solid var(--agd-stroke)`,display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,V.jsx)(kd,{w:70,h:26,radius:4}),(0,V.jsx)(kd,{w:70,h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})}function Id({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`div`,{style:{height:`40%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,V.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,V.jsx)(J,{w:`70%`,h:4,strong:!0}),(0,V.jsx)(J,{w:`95%`,h:2}),(0,V.jsx)(J,{w:`85%`,h:2}),(0,V.jsx)(J,{w:`50%`,h:2})]})]})}function Ld({width:e,height:t,text:n}){if(n)return(0,V.jsx)(`div`,{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:`var(--agd-text-3)`,wordBreak:`break-word`,overflow:`hidden`},children:n});let r=Math.max(2,Math.floor(t/18));return(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6,padding:4},children:[(0,V.jsx)(J,{w:e*.6,h:5,strong:!0}),Array.from({length:r},(e,t)=>(0,V.jsx)(J,{w:`${70+t*13%25}%`,h:2},t))]})}function Rd({width:e,height:t}){return(0,V.jsx)(`div`,{style:{height:`100%`,position:`relative`},children:(0,V.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:`none`,fill:`none`,children:[(0,V.jsx)(`line`,{x1:`0`,y1:`0`,x2:e,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,V.jsx)(`line`,{x1:e,y1:`0`,x2:`0`,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,V.jsx)(`circle`,{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:`var(--agd-fill)`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`})]})})}function zd({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),r=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid var(--agd-stroke)`,padding:`6px 0`},children:Array.from({length:n},(e,t)=>(0,V.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,V.jsx)(J,{w:`70%`,h:3,strong:!0})},t))}),Array.from({length:r},(e,t)=>(0,V.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid rgba(255,255,255,0.03)`,padding:`6px 0`},children:Array.from({length:n},(e,n)=>(0,V.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,V.jsx)(J,{w:`${50+(t*7+n*13)%40}%`,h:2})},n))},t))]})}function Bd({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,V.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,padding:4},children:Array.from({length:n},(e,t)=>(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,padding:`4px 0`},children:[(0,V.jsx)(Ad,{size:8}),(0,V.jsx)(J,{w:`${55+t*17%35}%`,h:2})]},t))})}function Vd({width:e,height:t,text:n}){return(0,V.jsx)(`div`,{style:{height:`100%`,borderRadius:Math.min(8,t/3),border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:n?(0,V.jsx)(`span`,{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:`var(--agd-text-3)`,letterSpacing:`-0.01em`},children:n}):(0,V.jsx)(J,{w:Math.max(20,e*.5),h:3,strong:!0})})}function Hd({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,height:`100%`,justifyContent:`center`},children:[(0,V.jsx)(J,{w:Math.min(80,e*.3),h:2}),(0,V.jsx)(`div`,{style:{height:Math.min(36,t*.6),borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,paddingLeft:8},children:(0,V.jsx)(J,{w:`40%`,h:2})})]})}function Ud({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:t*.04,padding:8},children:[Array.from({length:n},(e,t)=>(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,V.jsx)(J,{w:60+t*17%30,h:2}),(0,V.jsx)(kd,{w:`100%`,h:28,radius:4})]},t)),(0,V.jsx)(kd,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}function Wd({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`div`,{style:{display:`flex`,gap:2,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>(0,V.jsx)(`div`,{style:{padding:`8px 12px`,borderBottom:t===0?`2px solid var(--agd-bar-strong)`:`none`},children:(0,V.jsx)(J,{w:60,h:3,strong:t===0})},t))}),(0,V.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,V.jsx)(J,{w:`80%`,h:2}),(0,V.jsx)(J,{w:`65%`,h:2}),(0,V.jsx)(J,{w:`75%`,h:2})]})]})}function Gd({width:e,height:t}){let n=Math.min(e,t)/2;return(0,V.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,V.jsx)(`circle`,{cx:e/2,cy:t/2,r:n-1,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`1.5`,strokeDasharray:`3 2`}),(0,V.jsx)(`circle`,{cx:e/2,cy:t*.38,r:n*.28,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`}),(0,V.jsx)(`path`,{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`})]})}function Kd({width:e,height:t}){return(0,V.jsx)(`div`,{style:{height:`100%`,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,V.jsx)(J,{w:Math.max(16,e*.5),h:2,strong:!0})})}function qd({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,V.jsx)(J,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,V.jsx)(J,{w:e*.35})]})}function Jd({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:t*.04,padding:e*.04},children:[(0,V.jsx)(J,{w:e*.3,h:4,strong:!0}),(0,V.jsx)(J,{w:e*.7}),(0,V.jsx)(J,{w:e*.5}),(0,V.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginTop:t*.06},children:[(0,V.jsx)(kd,{w:`33%`,h:`100%`,radius:4}),(0,V.jsx)(kd,{w:`33%`,h:`100%`,radius:4}),(0,V.jsx)(kd,{w:`33%`,h:`100%`,radius:4})]})]})}function Yd({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,V.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:6,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,V.jsx)(kd,{w:`100%`,h:`100%`,radius:4},t))})}function Xd({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`div`,{style:{padding:`6px 8px`,borderBottom:`1px solid var(--agd-stroke)`},children:(0,V.jsx)(J,{w:e*.5,h:3,strong:!0})}),(0,V.jsx)(`div`,{style:{flex:1,padding:4,display:`flex`,flexDirection:`column`,gap:2},children:Array.from({length:n},(e,t)=>(0,V.jsx)(`div`,{style:{padding:`4px 6px`,borderRadius:3,background:t===0?`var(--agd-fill)`:`transparent`},children:(0,V.jsx)(J,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))})]})}function Zd({width:e,height:t}){let n=Math.min(e,t)/2;return(0,V.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`1`,width:e-2,height:t-2,rx:n,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,V.jsx)(`circle`,{cx:e-n,cy:t/2,r:n*.7,fill:`var(--agd-bar)`})]})}function Qd({width:e,height:t}){let n=Math.min(t/2,20);return(0,V.jsxs)(`div`,{style:{height:`100%`,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${n*.6}px`,gap:6},children:[(0,V.jsx)(Ad,{size:Math.min(14,t*.4)}),(0,V.jsx)(J,{w:`50%`,h:2})]})}function $d({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,V.jsx)(Ad,{size:Math.min(20,t*.5)}),(0,V.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,V.jsx)(J,{w:`60%`,h:3,strong:!0}),(0,V.jsx)(J,{w:`80%`,h:2})]}),(0,V.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3,flexShrink:0}})]})}function ef({width:e,height:t}){return(0,V.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`0`,y:`0`,width:e,height:t,rx:t/2,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`}),(0,V.jsx)(`rect`,{x:`1`,y:`1`,width:e*.65,height:t-2,rx:(t-2)/2,fill:`var(--agd-bar)`})]})}function tf({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),r=e/(n*2);return(0,V.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`flex-end`,justifyContent:`space-around`,padding:`0 4px`,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>{let n=30+(t*37+17)%55;return(0,V.jsx)(kd,{w:r,h:`${n}%`,radius:2},t)})})}function nf({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,V.jsxs)(`div`,{style:{height:`100%`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[(0,V.jsx)(kd,{w:`100%`,h:`100%`,radius:4}),(0,V.jsx)(`div`,{style:{position:`absolute`,width:n*2,height:n*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,V.jsx)(`div`,{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function rf({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,V.jsx)(`div`,{style:{flex:1,width:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,V.jsx)(J,{w:`60%`,h:2})}),(0,V.jsx)(`div`,{style:{width:8,height:8,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-5}})]})}function af({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[t>0&&(0,V.jsx)(`span`,{style:{color:`var(--agd-stroke)`,fontSize:10},children:`/`}),(0,V.jsx)(J,{w:40+t*13%20,h:2,strong:t===n-1})]},t))})}function of({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),r=Math.min(28,t*.8);return(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,V.jsx)(kd,{w:r,h:r,radius:4,style:t===1?{background:`var(--agd-bar)`}:void 0},t))})}function sf({width:e}){return(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`},children:(0,V.jsx)(`div`,{style:{width:`100%`,height:1,background:`var(--agd-stroke)`}})})}function cf({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,V.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(e,t)=>(0,V.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:t===0?2:1},children:[(0,V.jsx)(J,{w:`${40+t*17%25}%`,h:3,strong:!0}),(0,V.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:t===0?`▼`:`▶`})]},t))})}function lf({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:6},children:[(0,V.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:6,alignItems:`center`},children:[(0,V.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`‹`}),(0,V.jsx)(kd,{w:`100%`,h:`100%`,radius:4}),(0,V.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`›`})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:4},children:[(0,V.jsx)(Ad,{size:5}),(0,V.jsx)(Ad,{size:5}),(0,V.jsx)(Ad,{size:5})]})]})}function uf({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:10,gap:t*.04},children:[(0,V.jsx)(J,{w:e*.4,h:3,strong:!0}),(0,V.jsx)(J,{w:e*.3,h:6,strong:!0}),(0,V.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4,width:`100%`,padding:`8px 0`},children:Array.from({length:4},(e,t)=>(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,V.jsx)(Ad,{size:5}),(0,V.jsx)(J,{w:`${50+t*17%35}%`,h:2})]},t))}),(0,V.jsx)(kd,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:`var(--agd-bar)`}})]})}function df({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:10,gap:8},children:[(0,V.jsx)(`span`,{style:{fontSize:18,lineHeight:1,color:`var(--agd-stroke)`,fontFamily:`serif`},children:`“`}),(0,V.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,V.jsx)(J,{w:`90%`,h:2}),(0,V.jsx)(J,{w:`75%`,h:2}),(0,V.jsx)(J,{w:`60%`,h:2})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,V.jsx)(Ad,{size:20}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,V.jsx)(J,{w:60,h:3,strong:!0}),(0,V.jsx)(J,{w:40,h:2})]})]})]})}function ff({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,V.jsx)(J,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,V.jsx)(J,{w:e*.35}),(0,V.jsx)(kd,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:`var(--agd-bar)`}})]})}function pf({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,V.jsx)(`div`,{style:{width:16,height:16,borderRadius:`50%`,border:`1.5px solid var(--agd-bar-strong)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,V.jsx)(`div`,{style:{width:2,height:6,background:`var(--agd-bar-strong)`,borderRadius:1}})}),(0,V.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,V.jsx)(J,{w:`40%`,h:3,strong:!0}),(0,V.jsx)(J,{w:`70%`,h:2})]})]})}function mf({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8,padding:`0 12px`},children:[(0,V.jsx)(J,{w:e*.4,h:3,strong:!0}),(0,V.jsx)(kd,{w:60,h:Math.min(24,t*.6),radius:4})]})}function hf({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,V.jsx)(J,{w:e*.5,h:2}),(0,V.jsx)(J,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,V.jsx)(J,{w:e*.3,h:2})]})}function gf({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),r=Math.min(12,t*.35);return(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,height:`100%`,padding:`0 8px`},children:Array.from({length:n},(e,t)=>(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:0,flex:1},children:[(0,V.jsx)(`div`,{style:{width:r,height:r,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:t===0?`var(--agd-bar)`:`transparent`,flexShrink:0}}),t<n-1&&(0,V.jsx)(`div`,{style:{flex:1,height:1,background:`var(--agd-stroke)`,margin:`0 4px`}})]},t))})}function _f({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,borderRadius:4,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,padding:`0 6px`},children:[(0,V.jsx)(J,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,V.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0}})]})}function vf({width:e,height:t}){let n=Math.min(t*.7,e/(5*1.5));return(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:n*.2},children:Array.from({length:5},(e,t)=>(0,V.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 16 16`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`,fill:t<3?`var(--agd-bar)`:`none`})},t))})}function yf({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,position:`relative`,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,overflow:`hidden`},children:[(0,V.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,style:{position:`absolute`,inset:0},children:[(0,V.jsx)(`line`,{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.2`}),(0,V.jsx)(`line`,{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`}),(0,V.jsx)(`line`,{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`})]}),(0,V.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`40%`,transform:`translate(-50%, -100%)`},children:(0,V.jsxs)(`svg`,{width:`16`,height:`22`,viewBox:`0 0 16 22`,fill:`none`,children:[(0,V.jsx)(`path`,{d:`M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z`,fill:`var(--agd-bar)`,opacity:`.4`}),(0,V.jsx)(`circle`,{cx:`8`,cy:`8`,r:`3`,fill:`var(--agd-fill)`})]})})]})}function bf({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,V.jsxs)(`div`,{style:{display:`flex`,height:`100%`,padding:`8px 0`},children:[(0,V.jsx)(`div`,{style:{width:16,display:`flex`,flexDirection:`column`,alignItems:`center`},children:Array.from({length:n},(e,t)=>(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,flex:1},children:[(0,V.jsx)(Ad,{size:8}),t<n-1&&(0,V.jsx)(`div`,{style:{flex:1,width:1,background:`var(--agd-stroke)`}})]},t))}),(0,V.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,justifyContent:`space-around`,paddingLeft:8},children:Array.from({length:n},(e,t)=>(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,V.jsx)(J,{w:`${35+t*13%25}%`,h:3,strong:!0}),(0,V.jsx)(J,{w:`${50+t*17%30}%`,h:2})]},t))})]})}function xf({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`2px dashed var(--agd-stroke)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,V.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,V.jsx)(`path`,{d:`M12 16V4m0 0l-4 4m4-4l4 4`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,V.jsx)(`path`,{d:`M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`})]}),(0,V.jsx)(J,{w:e*.4,h:2}),(0,V.jsx)(J,{w:e*.25,h:2})]})}function Sf({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,V.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,padding:8,display:`flex`,flexDirection:`column`,gap:4},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,gap:3,marginBottom:4},children:[(0,V.jsx)(Ad,{size:6}),(0,V.jsx)(Ad,{size:6}),(0,V.jsx)(Ad,{size:6})]}),Array.from({length:n},(e,t)=>(0,V.jsx)(`div`,{style:{display:`flex`,gap:6,paddingLeft:t>0&&t<n-1?12:0},children:(0,V.jsx)(J,{w:`${25+t*23%50}%`,h:2,strong:t===0})},t))]})}function Cf({width:e,height:t}){let n=Math.min((e-16)/7,(t-40)/6);return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`6px 8px`},children:[(0,V.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`‹`}),(0,V.jsx)(J,{w:e*.3,h:3,strong:!0}),(0,V.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`›`})]}),(0,V.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:2,padding:`0 4px`,flex:1},children:[Array.from({length:7},(e,t)=>(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n*.6},children:(0,V.jsx)(J,{w:n*.5,h:2})},`h${t}`)),Array.from({length:35},(e,t)=>(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n},children:(0,V.jsx)(`div`,{style:{width:n*.6,height:n*.6,borderRadius:`50%`,background:t===12?`var(--agd-bar)`:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,V.jsx)(`div`,{style:{width:2,height:2,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===12?1:.3}})})},t))]})]})}function wf({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,V.jsx)(Ad,{size:Math.min(32,t*.55)}),(0,V.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,V.jsx)(J,{w:`50%`,h:3,strong:!0}),(0,V.jsx)(J,{w:`75%`,h:2})]}),(0,V.jsx)(J,{w:30,h:2})]})}function Tf({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(`div`,{style:{height:`50%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,V.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,V.jsx)(J,{w:`65%`,h:4,strong:!0}),(0,V.jsx)(J,{w:`40%`,h:3}),(0,V.jsx)(`div`,{style:{flex:1}}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,V.jsx)(J,{w:`30%`,h:5,strong:!0}),(0,V.jsx)(kd,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})]})}function Ef({width:e,height:t}){let n=Math.min(48,t*.3);return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,V.jsx)(Ad,{size:n}),(0,V.jsx)(J,{w:e*.45,h:4,strong:!0}),(0,V.jsx)(J,{w:e*.3,h:2}),(0,V.jsxs)(`div`,{style:{display:`flex`,gap:e*.08,marginTop:t*.04},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,V.jsx)(J,{w:20,h:3,strong:!0}),(0,V.jsx)(J,{w:28,h:2})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,V.jsx)(J,{w:20,h:3,strong:!0}),(0,V.jsx)(J,{w:28,h:2})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,V.jsx)(J,{w:20,h:3,strong:!0}),(0,V.jsx)(J,{w:28,h:2})]})]})]})}function Df({width:e,height:t}){let n=Math.max(e*.6,80),r=Math.max(3,Math.floor(t/40));return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`},children:[(0,V.jsx)(`div`,{style:{width:e-n,background:`var(--agd-fill)`,opacity:.3}}),(0,V.jsxs)(`div`,{style:{flex:1,borderLeft:`1px solid var(--agd-stroke)`,display:`flex`,flexDirection:`column`,padding:e*.04},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:t*.06},children:[(0,V.jsx)(J,{w:n*.4,h:4,strong:!0}),(0,V.jsx)(`div`,{style:{width:12,height:12,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),Array.from({length:r},(e,t)=>(0,V.jsx)(`div`,{style:{padding:`6px 0`},children:(0,V.jsx)(J,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))]})]})}function Of({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,V.jsxs)(`div`,{style:{flex:1,width:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,V.jsx)(J,{w:`70%`,h:3,strong:!0}),(0,V.jsx)(J,{w:`90%`,h:2}),(0,V.jsx)(J,{w:`60%`,h:2})]}),(0,V.jsx)(`div`,{style:{width:10,height:10,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-6}})]})}function kf({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:e*.08},children:[(0,V.jsx)(kd,{w:n,h:n,radius:n*.25}),(0,V.jsx)(J,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function Af({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,V.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(t,n)=>(0,V.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:n===0?2:1},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,V.jsx)(`span`,{style:{fontSize:9,fontWeight:700,color:`var(--agd-stroke)`},children:`Q`}),(0,V.jsx)(J,{w:e*(.3+n*13%25/100),h:3,strong:!0})]}),(0,V.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:n===0?`▼`:`▶`})]},n))})}function jf({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,V.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:4,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,V.jsx)(`div`,{style:{borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,position:`relative`,overflow:`hidden`},children:(0,V.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,fill:`none`,children:[(0,V.jsx)(`line`,{x1:`0`,y1:`0`,x2:`100`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`}),(0,V.jsx)(`line`,{x1:`100`,y1:`0`,x2:`0`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})},t))})}function Mf({width:e,height:t}){let n=Math.min(e,t);return(0,V.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,V.jsx)(`path`,{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:`var(--agd-bar)`,strokeWidth:`1.5`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function Nf({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,V.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,V.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,V.jsx)(`circle`,{cx:e/2,cy:t/2,r:n*.45,fill:`var(--agd-bar)`})]})}function Pf({width:e,height:t}){let n=Math.max(2,t*.12),r=Math.min(t*.35,10),i=e*.55;return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,position:`relative`},children:[(0,V.jsx)(`div`,{style:{width:`100%`,height:n,borderRadius:n/2,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,position:`relative`},children:(0,V.jsx)(`div`,{style:{width:i,height:`100%`,borderRadius:n/2,background:`var(--agd-bar)`}})}),(0,V.jsx)(`div`,{style:{position:`absolute`,left:i-r,width:r*2,height:r*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`}})]})}function Ff({width:e,height:t}){let n=Math.min(36,t*.15),r=Math.min((e-16)/7,(t-n-40)/5);return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:4},children:[(0,V.jsxs)(`div`,{style:{height:n,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 8px`,justifyContent:`space-between`},children:[(0,V.jsx)(J,{w:`40%`,h:2}),(0,V.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`3`,width:`12`,height:`11`,rx:`1`,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,V.jsx)(`line`,{x1:`2`,y1:`6`,x2:`14`,y2:`6`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})]}),(0,V.jsxs)(`div`,{style:{flex:1,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,flexDirection:`column`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`4px 6px`},children:[(0,V.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`‹`}),(0,V.jsx)(J,{w:e*.25,h:2,strong:!0}),(0,V.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`›`})]}),(0,V.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:1,padding:`0 4px`,flex:1},children:Array.from({length:28},(e,t)=>(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:r},children:(0,V.jsx)(`div`,{style:{width:r*.5,height:r*.5,borderRadius:`50%`,background:t===10?`var(--agd-bar)`:`transparent`},children:(0,V.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,V.jsx)(`div`,{style:{width:1.5,height:1.5,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===10?1:.25}})})})},t))})]})]})}function If({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:t*.08,padding:4},children:[(0,V.jsx)(`div`,{style:{width:`100%`,height:t*.2,borderRadius:4,background:`var(--agd-fill)`}}),(0,V.jsx)(`div`,{style:{width:`70%`,height:Math.max(6,t*.1),borderRadius:3,background:`var(--agd-fill)`}}),(0,V.jsx)(`div`,{style:{width:`90%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}}),(0,V.jsx)(`div`,{style:{width:`50%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}})]})}function Lf({width:e,height:t}){return(0,V.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:6},children:(0,V.jsxs)(`div`,{style:{height:`100%`,flex:1,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${t*.3}px`,gap:4},children:[(0,V.jsx)(J,{w:`60%`,h:2,strong:!0}),(0,V.jsx)(`div`,{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0,marginLeft:`auto`}})]})})}function Rf({width:e,height:t}){let n=Math.min(e,t);return(0,V.jsx)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:`var(--agd-stroke)`,strokeWidth:`1`,fill:`var(--agd-fill)`})})}function zf({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,V.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,V.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`,opacity:`.2`}),(0,V.jsx)(`path`,{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:`var(--agd-bar-strong)`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function Bf({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),r=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,V.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,justifyContent:`space-around`,padding:8},children:Array.from({length:r},(t,r)=>(0,V.jsxs)(`div`,{style:{display:`flex`,gap:e*.04,alignItems:`flex-start`},children:[(0,V.jsx)(kd,{w:n,h:n,radius:n*.25}),(0,V.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,V.jsx)(J,{w:`${40+r*13%20}%`,h:3,strong:!0}),(0,V.jsx)(J,{w:`${60+r*17%25}%`,h:2})]})]},r))})}function Vf({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.min(36,t*.25);return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:t*.06,padding:t*.06},children:[(0,V.jsx)(J,{w:e*.3,h:4,strong:!0}),(0,V.jsx)(`div`,{style:{display:`flex`,gap:e*.06,justifyContent:`center`,flex:1,alignItems:`center`},children:Array.from({length:n},(t,n)=>(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,V.jsx)(Ad,{size:r}),(0,V.jsx)(J,{w:e*.12,h:3,strong:!0}),(0,V.jsx)(J,{w:e*.08,h:2})]},n))})]})}function Hf({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:e*.06,gap:t*.04},children:[(0,V.jsx)(J,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,V.jsx)(J,{w:e*.35,h:2}),(0,V.jsx)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(n,r)=>(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,V.jsx)(J,{w:Math.min(60,e*.2),h:2}),(0,V.jsx)(kd,{w:`100%`,h:Math.min(32,t*.1),radius:4})]},r))}),(0,V.jsx)(kd,{w:`100%`,h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:`var(--agd-bar)`}}),(0,V.jsx)(J,{w:e*.4,h:2})]})}function Uf({width:e,height:t}){return(0,V.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:e*.04,gap:t*.03},children:[(0,V.jsx)(J,{w:e*.4,h:4,strong:!0}),(0,V.jsx)(J,{w:e*.6,h:2}),(0,V.jsxs)(`div`,{style:{display:`flex`,gap:6,marginTop:t*.03},children:[(0,V.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,V.jsx)(J,{w:50,h:2}),(0,V.jsx)(kd,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,V.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,V.jsx)(J,{w:40,h:2}),(0,V.jsx)(kd,{w:`100%`,h:Math.min(28,t*.1),radius:4})]})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,V.jsx)(J,{w:50,h:2}),(0,V.jsx)(kd,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3,flex:1},children:[(0,V.jsx)(J,{w:60,h:2}),(0,V.jsx)(kd,{w:`100%`,h:`100%`,radius:4})]}),(0,V.jsx)(kd,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}var Wf={navigation:jd,hero:Md,sidebar:Nd,footer:Pd,modal:Fd,card:Id,text:Ld,image:Rd,table:zd,list:Bd,button:Vd,input:Hd,form:Ud,tabs:Wd,avatar:Gd,badge:Kd,header:qd,section:Jd,grid:Yd,dropdown:Xd,toggle:Zd,search:Qd,toast:$d,progress:ef,chart:tf,video:nf,tooltip:rf,breadcrumb:af,pagination:of,divider:sf,accordion:cf,carousel:lf,pricing:uf,testimonial:df,cta:ff,alert:pf,banner:mf,stat:hf,stepper:gf,tag:_f,rating:vf,map:yf,timeline:bf,fileUpload:xf,codeBlock:Sf,calendar:Cf,notification:wf,productCard:Tf,profile:Ef,drawer:Df,popover:Of,logo:kf,faq:Af,gallery:jf,checkbox:Mf,radio:Nf,slider:Pf,datePicker:Ff,skeleton:If,chip:Lf,icon:Rf,spinner:zf,feature:Bf,team:Vf,login:Hf,contact:Uf};function Gf({type:e,width:t,height:n,text:r}){let i=Wf[e];return i?(0,V.jsx)(`div`,{style:{width:`100%`,height:`100%`,padding:8,position:`relative`,pointerEvents:`none`},children:(0,V.jsx)(i,{width:t,height:n,text:r})}):(0,V.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,V.jsx)(`span`,{style:{fontSize:10,fontWeight:600,color:`var(--agd-text-3)`,textTransform:`uppercase`,letterSpacing:`0.06em`,opacity:.5},children:e})})}var Kf=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,qf={overlayExiting:`styles-module__overlayExiting___iEmYr`,overlay:`styles-module__overlay___aWh-q`,overlayFadeIn:`styles-module__overlayFadeIn___aECVy`,light:`styles-module__light___ORIft`,wireframe:`styles-module__wireframe___itvQU`,placing:`styles-module__placing___45yD8`,passthrough:`styles-module__passthrough___xaFeE`,blankCanvas:`styles-module__blankCanvas___t2Eue`,visible:`styles-module__visible___OKKqX`,gridActive:`styles-module__gridActive___OZ-cf`,paletteHeader:`styles-module__paletteHeader___-Q5gQ`,paletteHeaderTitle:`styles-module__paletteHeaderTitle___oHqZC`,paletteHeaderDesc:`styles-module__paletteHeaderDesc___6i74T`,wireframePurposeWrap:`styles-module__wireframePurposeWrap___To-tS`,collapsed:`styles-module__collapsed___Ms9vS`,wireframePurposeInner:`styles-module__wireframePurposeInner___Lrahs`,wireframePurposeInput:`styles-module__wireframePurposeInput___7EtBN`,canvasToggle:`styles-module__canvasToggle___-QqSy`,active:`styles-module__active___hosp7`,canvasToggleIcon:`styles-module__canvasToggleIcon___7pJ82`,canvasToggleLabel:`styles-module__canvasToggleLabel___OanpY`,canvasPurposeWrap:`styles-module__canvasPurposeWrap___hj6zk`,canvasPurposeInner:`styles-module__canvasPurposeInner___VWiyu`,canvasPurposeToggle:`styles-module__canvasPurposeToggle___byDH2`,canvasPurposeCheck:`styles-module__canvasPurposeCheck___xqd7l`,checked:`styles-module__checked___-1JGH`,canvasPurposeLabel:`styles-module__canvasPurposeLabel___Zu-tD`,canvasPurposeHelp:`styles-module__canvasPurposeHelp___jijwR`,placement:`styles-module__placement___zcxv8`,placementEnter:`styles-module__placementEnter___TdRhf`,selected:`styles-module__selected___6yrp6`,dragging:`styles-module__dragging___le6KZ`,exiting:`styles-module__exiting___YrM8F`,placementContent:`styles-module__placementContent___f64A4`,placementLabel:`styles-module__placementLabel___0KvWl`,placementAnnotation:`styles-module__placementAnnotation___78pTr`,annotationVisible:`styles-module__annotationVisible___mrUyA`,sectionAnnotation:`styles-module__sectionAnnotation___aUIs0`,handle:`styles-module__handle___Ikbxm`,sectionOutline:`styles-module__sectionOutline___s0hy-`,ghostOutline:`styles-module__ghostOutline___po-kO`,handleNw:`styles-module__handleNw___4TMIj`,handleNe:`styles-module__handleNe___mnsTh`,handleSe:`styles-module__handleSe___oSFnk`,handleSw:`styles-module__handleSw___pi--Z`,handleN:`styles-module__handleN___aBA-Q`,handleE:`styles-module__handleE___0hM5u`,handleS:`styles-module__handleS___JjDRv`,handleW:`styles-module__handleW___ERWGQ`,edgeHandle:`styles-module__edgeHandle___XxXdT`,edgeN:`styles-module__edgeN___-JJDj`,edgeS:`styles-module__edgeS___66lMX`,edgeE:`styles-module__edgeE___1bGDa`,edgeW:`styles-module__edgeW___lHQNo`,deleteButton:`styles-module__deleteButton___LkGCb`,rearrangeOverlay:`styles-module__rearrangeOverlay___-3R3t`,drawBox:`styles-module__drawBox___BrVAa`,selectBox:`styles-module__selectBox___Iu8kB`,sizeIndicator:`styles-module__sizeIndicator___7zJ4y`,guideLine:`styles-module__guideLine___DUQY2`,dragPreview:`styles-module__dragPreview___onPbU`,dragPreviewWireframe:`styles-module__dragPreviewWireframe___jsg0G`,palette:`styles-module__palette___C7iSH`,paletteItem:`styles-module__paletteItem___6TlnA`,paletteItemLabel:`styles-module__paletteItemLabel___6ncO4`,paletteSectionTitle:`styles-module__paletteSectionTitle___PqnjX`,paletteFooter:`styles-module__paletteFooter___QYnAG`,enter:`styles-module__enter___6LYk5`,exit:`styles-module__exit___iSGRw`,paletteSection:`styles-module__paletteSection___V8DEA`,paletteItemIcon:`styles-module__paletteItemIcon___0NPQK`,placeScroll:`styles-module__placeScroll___7sClM`,fadeTop:`styles-module__fadeTop___KT9tF`,fadeBottom:`styles-module__fadeBottom___x3ShT`,paletteFooterWrap:`styles-module__paletteFooterWrap___71-fI`,footerHidden:`styles-module__footerHidden___fJUik`,paletteFooterInnerContent:`styles-module__paletteFooterInnerContent___VC26h`,paletteFooterInner:`styles-module__paletteFooterInner___dfylY`,paletteFooterCount:`styles-module__paletteFooterCount___D3Fia`,paletteFooterClear:`styles-module__paletteFooterClear___ybBoa`,paletteFooterActions:`styles-module__paletteFooterActions___fLzv8`,rollingWrap:`styles-module__rollingWrap___S75jM`,rollingNum:`styles-module__rollingNum___1RKDx`,exitUp:`styles-module__exitUp___AFDRW`,numExitUp:`styles-module__numExitUp___FRQqx`,enterUp:`styles-module__enterUp___CPlXb`,numEnterUp:`styles-module__numEnterUp___2Yd-w`,exitDown:`styles-module__exitDown___-1yAy`,numExitDown:`styles-module__numExitDown___xm5by`,enterDown:`styles-module__enterDown___DDuFR`,numEnterDown:`styles-module__numEnterDown___hpxBk`,hoverHighlight:`styles-module__hoverHighlight___8eT-v`,highlightFadeIn:`styles-module__highlightFadeIn___Lg7KY`,sectionEnter:`styles-module__sectionEnter___-8BXT`,settled:`styles-module__settled___b5U5o`,sectionLabel:`styles-module__sectionLabel___F80HQ`,movedBadge:`styles-module__movedBadge___s8z-q`,sectionDimensions:`styles-module__sectionDimensions___RcJSL`,badgeVisible:`styles-module__badgeVisible___npbdS`,resizedBadge:`styles-module__resizedBadge___u51V8`,wireframeNotice:`styles-module__wireframeNotice___4GJyB`,wireframeOpacityRow:`styles-module__wireframeOpacityRow___CJXzi`,wireframeOpacityLabel:`styles-module__wireframeOpacityLabel___afkfT`,wireframeOpacitySlider:`styles-module__wireframeOpacitySlider___YcoEs`,wireframeNoticeTitleRow:`styles-module__wireframeNoticeTitleRow___PJqyG`,wireframeNoticeTitle:`styles-module__wireframeNoticeTitle___okr08`,wireframeNoticeDivider:`styles-module__wireframeNoticeDivider___PNKQ6`,wireframeStartOver:`styles-module__wireframeStartOver___YFk-I`,ghostEnter:`styles-module__ghostEnter___EC3Mb`,ghostBadge:`styles-module__ghostBadge___tsQUK`,badgeSlideIn:`styles-module__badgeSlideIn___typJ7`,ghostBadgeExtra:`styles-module__ghostBadgeExtra___6CVoD`,badgeExtraIn:`styles-module__badgeExtraIn___i4W8F`,originalOutline:`styles-module__originalOutline___Y6DD1`,originalLabel:`styles-module__originalLabel___HqI9g`,connectorSvg:`styles-module__connectorSvg___Lovld`,connectorLine:`styles-module__connectorLine___XeWh-`,connectorDraw:`styles-module__connectorDraw___8sK5I`,connectorDot:`styles-module__connectorDot___yvf7C`,connectorDotIn:`styles-module__connectorDotIn___NwTUq`,connectorExiting:`styles-module__connectorExiting___2lLOs`,connectorOut:`styles-module__connectorOut___5QoPl`,connectorDotOut:`styles-module__connectorDotOut___FEq7e`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-design-mode-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-design-mode-styles`,document.head.appendChild(e)),e.textContent=Kf}var Y=qf,Jf=24,Yf=5;function Xf(e,t,n,r,i){let a=1/0,o=1/0,s=e.x,c=e.x+e.width,l=e.x+e.width/2,u=e.y,d=e.y+e.height,f=e.y+e.height/2,p=!r,m=p?[s,c,l]:[...r.left?[s]:[],...r.right?[c]:[]],h=p?[u,d,f]:[...r.top?[u]:[],...r.bottom?[d]:[]],g=[];for(let e of t)n.has(e.id)||g.push(e);i&&g.push(...i);for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,s=e.y+e.height,c=e.y+e.height/2;for(let e of m)for(let i of[t,n,r]){let t=i-e;Math.abs(t)<Yf&&Math.abs(t)<Math.abs(a)&&(a=t)}for(let e of h)for(let t of[i,s,c]){let n=t-e;Math.abs(n)<Yf&&Math.abs(n)<Math.abs(o)&&(o=n)}}let _=Math.abs(a)<Yf?a:0,v=Math.abs(o)<Yf?o:0,y=[],b=new Set,x=s+_,S=c+_,C=l+_,w=u+v,ee=d+v,te=f+v;for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[x,C,S])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[w,te,ee])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`y`,pos:e}))}}return{dx:_,dy:v,guides:y}}function Zf(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Qf({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:r,isDarkMode:i,exiting:a,onInteractionChange:o,className:s,passthrough:c,extraSnapRects:l,onSelectionChange:u,deselectSignal:d,onDragMove:f,onDragEnd:p,clearSignal:m,wireframe:h}){let[g,_]=(0,b.useState)(new Set),[v,y]=(0,b.useState)(null),[x,S]=(0,b.useState)(null),[C,w]=(0,b.useState)(null),[ee,te]=(0,b.useState)([]),[ne,re]=(0,b.useState)(null),[ie,ae]=(0,b.useState)(!1),T=(0,b.useRef)(!1),[oe,se]=(0,b.useState)(new Set),ce=(0,b.useRef)(new Map),E=(0,b.useRef)(null),D=(0,b.useRef)(null),O=(0,b.useRef)(e);O.current=e;let le=(0,b.useRef)(u);le.current=u;let ue=(0,b.useRef)(f);ue.current=f;let de=(0,b.useRef)(p);de.current=p;let fe=(0,b.useRef)(d);(0,b.useEffect)(()=>{d!==fe.current&&(fe.current=d,_(new Set))},[d]);let pe=(0,b.useRef)(m);(0,b.useEffect)(()=>{if(m!==void 0&&m!==pe.current){pe.current=m;let e=new Set(O.current.map(e=>e.id));e.size>0&&(se(e),_(new Set),D.current=null,G(()=>{t([]),se(new Set)},180))}},[m,t]),(0,b.useEffect)(()=>{let i=i=>{let a=i.target;if(!(a.tagName===`INPUT`||a.tagName===`TEXTAREA`||a.isContentEditable)){if((i.key===`Backspace`||i.key===`Delete`)&&g.size>0){i.preventDefault();let e=new Set(g);se(e),_(new Set),G(()=>{t(O.current.filter(t=>!e.has(t.id))),se(new Set)},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(i.key)&&g.size>0){i.preventDefault();let n=i.shiftKey?20:1,r=i.key===`ArrowLeft`?-n:i.key===`ArrowRight`?n:0,a=i.key===`ArrowUp`?-n:i.key===`ArrowDown`?n:0;t(e.map(e=>g.has(e.id)?{...e,x:Math.max(0,e.x+r),y:Math.max(0,e.y+a)}:e));return}if(i.key===`Escape`){n?r(null):g.size>0&&_(new Set);return}}};return document.addEventListener(`keydown`,i),()=>document.removeEventListener(`keydown`,i)},[g,n,e,t,r]);let k=(0,b.useCallback)(i=>{if(i.button!==0||c||i.target.closest(`.${Y.placement}`))return;i.preventDefault(),i.stopPropagation();let a=window.scrollY,s=i.clientX,l=i.clientY;if(n){D.current=`place`,o?.(!0);let i=!1,c=s,u=l,d=e=>{c=e.clientX,u=e.clientY;let t=Math.abs(c-s),n=Math.abs(u-l);if((t>5||n>5)&&(i=!0),i){let t=Math.min(s,c),n=Math.min(l,u),r=Math.abs(c-s),i=Math.abs(u-l);y({x:t,y:n,w:r,h:i}),w({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(r)} \xD7 ${Math.round(i)}`})}},f=p=>{window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f),y(null),w(null),D.current=null,o?.(!1);let m=q[n],h,g,v,b;i?(h=Math.min(s,c),g=Math.min(l,u)+a,v=Math.max(Jf,Math.abs(c-s)),b=Math.max(Jf,Math.abs(u-l))):(v=m.width,b=m.height,h=s-v/2,g=l+a-b/2),h=Math.max(0,h),g=Math.max(0,g);let x={id:Zf(),type:n,x:h,y:g,width:v,height:b,scrollY:a,timestamp:Date.now()};t([...e,x]),_(new Set([x.id])),r(null)};window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)}else{i.shiftKey||_(new Set),D.current=`select`;let t=!1,n=e=>{let n=Math.abs(e.clientX-s),r=Math.abs(e.clientY-l);if((n>4||r>4)&&(t=!0),t){let t=Math.min(s,e.clientX),n=Math.min(l,e.clientY);S({x:t,y:n,w:Math.abs(e.clientX-s),h:Math.abs(e.clientY-l)})}},r=o=>{if(window.removeEventListener(`mousemove`,n),window.removeEventListener(`mouseup`,r),D.current=null,t){let t=Math.min(s,o.clientX),n=Math.min(l,o.clientY)+a,r=Math.abs(o.clientX-s),c=Math.abs(o.clientY-l),u=new Set(i.shiftKey?g:new Set);for(let i of e)i.y-a,i.x+i.width>t&&i.x<t+r&&i.y+i.height>n&&i.y<n+c&&u.add(i.id);_(u)}S(null)};window.addEventListener(`mousemove`,n),window.addEventListener(`mouseup`,r)}},[n,c,e,t,g]),me=(0,b.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${Y.handle}`)||i.closest(`.${Y.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey?(a=new Set(g),a.has(r)?a.delete(r):a.add(r)):a=g.has(r)?new Set(g):new Set([r]),_(a),(a.size!==g.size||[...a].some(e=>!g.has(e)))&&le.current?.(a,n.shiftKey),window.scrollY;let s=n.clientX,c=n.clientY,u=new Map;for(let t of e)a.has(t.id)&&u.set(t.id,{x:t.x,y:t.y});D.current=`move`,o?.(!0);let d=!1,f=!1,p=e,m=0,h=0,v=new Map;for(let t of e)u.has(t.id)&&v.set(t.id,{w:t.width,h:t.height});let y=n=>{let r=n.clientX-s,i=n.clientY-c;if((Math.abs(r)>2||Math.abs(i)>2)&&(d=!0),!d)return;if(n.altKey&&!f){f=!0;let t=[];for(let n of e)u.has(n.id)&&t.push({...n,id:Zf(),timestamp:Date.now()});p=[...e,...t]}let a=1/0,o=1/0,g=-1/0,_=-1/0;for(let[e,t]of u){let n=v.get(e);n&&(a=Math.min(a,t.x+r),o=Math.min(o,t.y+i),g=Math.max(g,t.x+r+n.w),_=Math.max(_,t.y+i+n.h))}let{dx:y,dy:b,guides:x}=Xf({x:a,y:o,width:g-a,height:_-o},p,new Set(u.keys()),void 0,l);te(x);let S=r+y,C=i+b;m=S,h=C,t(p.map(e=>{let t=u.get(e.id);return t?{...e,x:Math.max(0,t.x+S),y:Math.max(0,t.y+C)}:e})),ue.current?.(S,C)},b=()=>{window.removeEventListener(`mousemove`,y),window.removeEventListener(`mouseup`,b),D.current=null,o?.(!1),te([]),de.current?.(m,h,d)};window.addEventListener(`mousemove`,y),window.addEventListener(`mouseup`,b)},[g,e,t,o]),he=(0,b.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=e.find(e=>e.id===r);if(!a)return;_(new Set([r])),D.current=`resize`,o?.(!0);let s=n.clientX,c=n.clientY,u=a.width,d=a.height,f=a.x,p=a.y,m={left:i.includes(`w`),right:i.includes(`e`),top:i.includes(`n`),bottom:i.includes(`s`)},h=e=>{let n=e.clientX-s,a=e.clientY-c,o=u,h=d,g=f,_=p;i.includes(`e`)&&(o=Math.max(Jf,u+n)),i.includes(`w`)&&(o=Math.max(Jf,u-n),g=f+u-o),i.includes(`s`)&&(h=Math.max(Jf,d+a)),i.includes(`n`)&&(h=Math.max(Jf,d-a),_=p+d-h);let{dx:v,dy:y,guides:b}=Xf({x:g,y:_,width:o,height:h},O.current,new Set([r]),m,l);te(b),v!==0&&(m.right?o+=v:m.left&&(g+=v,o-=v)),y!==0&&(m.bottom?h+=y:m.top&&(_+=y,h-=y)),t(O.current.map(e=>e.id===r?{...e,x:g,y:_,width:o,height:h}:e)),w({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(o)} \xD7 ${Math.round(h)}`})},g=()=>{window.removeEventListener(`mousemove`,h),window.removeEventListener(`mouseup`,g),w(null),D.current=null,o?.(!1),te([])};window.addEventListener(`mousemove`,h),window.addEventListener(`mouseup`,g)},[e,t,o]),ge=(0,b.useCallback)(e=>{D.current=null,se(t=>{let n=new Set(t);return n.add(e),n}),_(t=>{let n=new Set(t);return n.delete(e),n}),G(()=>{t(O.current.filter(t=>t.id!==e)),se(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),_e={hero:`Headline text`,button:`Button label`,badge:`Badge label`,cta:`Call to action text`,toast:`Notification message`,modal:`Dialog title`,card:`Card title`,navigation:`Brand / nav items`,tabs:`Tab labels`,input:`Placeholder text`,search:`Search placeholder`,pricing:`Plan name or price`,testimonial:`Quote text`,alert:`Alert message`,banner:`Banner text`,tag:`Tag label`,notification:`Notification message`,stat:`Metric value`,productCard:`Product name`},ve=(0,b.useCallback)(t=>{let n=e.find(e=>e.id===t);n&&(T.current=!!n.text,re(t),ae(!1))},[e]),ye=(0,b.useCallback)(()=>{ne&&(ae(!0),G(()=>{re(null),ae(!1)},150))},[ne]);(0,b.useEffect)(()=>{a&&ne&&ye()},[a]);let be=(0,b.useCallback)(n=>{ne&&(t(e.map(e=>e.id===ne?{...e,text:n.trim()||void 0}:e)),ye())},[ne,e,t,ye]),xe=typeof window<`u`?window.scrollY:0,Se=[`nw`,`ne`,`se`,`sw`],Ce=h?`#f97316`:`#3c82f7`,we=[{dir:`n`,cls:Y.edgeN,arrow:(0,V.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M4 0.5L1 4.5h6z`,fill:Ce})})},{dir:`e`,cls:Y.edgeE,arrow:(0,V.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M5.5 4L1.5 1v6z`,fill:Ce})})},{dir:`s`,cls:Y.edgeS,arrow:(0,V.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M4 5.5L1 1.5h6z`,fill:Ce})})},{dir:`w`,cls:Y.edgeW,arrow:(0,V.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M0.5 4L4.5 1v6z`,fill:Ce})})}];return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{ref:E,className:`${Y.overlay} ${i?``:Y.light} ${n?Y.placing:``} ${c?Y.passthrough:``} ${a?Y.overlayExiting:``} ${h?Y.wireframe:``}${s?` ${s}`:``}`,"data-feedback-toolbar":!0,onMouseDown:k,children:e.map(e=>{let t=g.has(e.id),n=Od[e.type]?.label||e.type,r=e.y-xe;return(0,V.jsxs)(`div`,{"data-design-placement":e.id,className:`${Y.placement} ${t?Y.selected:``} ${oe.has(e.id)?Y.exiting:``}`,style:{left:e.x,top:r,width:e.width,height:e.height,position:`fixed`},onMouseDown:t=>me(t,e.id),onDoubleClick:()=>ve(e.id),children:[(0,V.jsx)(`span`,{className:Y.placementLabel,children:n}),(0,V.jsx)(`span`,{className:`${Y.placementAnnotation} ${e.text?Y.annotationVisible:``}`,children:(e.text&&ce.current.set(e.id,e.text),e.text||ce.current.get(e.id)||``)}),(0,V.jsx)(`div`,{className:Y.placementContent,children:(0,V.jsx)(Gf,{type:e.type,width:e.width,height:e.height,text:e.text})}),(0,V.jsx)(`div`,{className:Y.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>ge(e.id),children:`✕`}),Se.map(t=>(0,V.jsx)(`div`,{className:`${Y.handle} ${Y[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>he(n,e.id,t)},t)),we.map(({dir:t,cls:n,arrow:r})=>(0,V.jsx)(`div`,{className:`${Y.edgeHandle} ${n}`,onMouseDown:n=>he(n,e.id,t),children:r},t))]},e.id)})}),ne&&(()=>{let t=e.find(e=>e.id===ne);if(!t)return null;let n=t.y-xe,r=t.x+t.width/2,a=n-8,o=n+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,r)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,V.jsx)(Sd,{element:Od[t.type]?.label||t.type,placeholder:_e[t.type]||`Label or content text`,initialValue:t.text??``,submitLabel:T.current?`Save`:`Set`,onSubmit:be,onCancel:ye,onDelete:T.current?()=>{be(``)}:void 0,isExiting:ie,lightMode:!i,style:u})})(),v&&(0,V.jsx)(`div`,{className:Y.drawBox,style:{left:v.x,top:v.y,width:v.w,height:v.h},"data-feedback-toolbar":!0}),x&&(0,V.jsx)(`div`,{className:Y.selectBox,style:{left:x.x,top:x.y,width:x.w,height:x.h},"data-feedback-toolbar":!0}),C&&(0,V.jsx)(`div`,{className:Y.sizeIndicator,style:{left:C.x,top:C.y},"data-feedback-toolbar":!0,children:C.text}),ee.map((e,t)=>(0,V.jsx)(`div`,{className:Y.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,bottom:0}:{position:`fixed`,left:0,top:e.pos-xe,right:0,height:1},"data-feedback-toolbar":!0},`${e.axis}-${e.pos}-${t}`))]})}function $f(e){if(!e)return``;let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?Y.fadeTop:``} ${n?Y.fadeBottom:``}`}var X=`currentColor`,Z=`0.5`;function ep({type:e}){switch(e){case`navigation`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`4`,width:`18`,height:`8`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`2.5`,y:`7`,width:`3`,height:`1.5`,rx:`.5`,fill:X,opacity:`.4`}),(0,V.jsx)(`rect`,{x:`7`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`11`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`})]});case`header`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`3`,y:`5.5`,width:`8`,height:`2`,rx:`.5`,fill:X,opacity:`.35`}),(0,V.jsx)(`rect`,{x:`3`,y:`9`,width:`12`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`hero`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`5`,y:`5`,width:`10`,height:`1.5`,rx:`.5`,fill:X,opacity:`.35`}),(0,V.jsx)(`rect`,{x:`7`,y:`8`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`7.5`,y:`10.5`,width:`5`,height:`2.5`,rx:`1`,stroke:X,strokeWidth:Z})]});case`section`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`3`,y:`4`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`3`,y:`6.5`,width:`14`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`3`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`sidebar`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`2.5`,y:`4`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`2.5`,y:`6.5`,width:`3.5`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`2.5`,y:`9`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`footer`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`7`,width:`18`,height:`8`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`3`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`9`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`15`,y:`9.5`,width:`3`,height:`1`,rx:`.5`,fill:X,opacity:`.2`})]});case`modal`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`5`,y:`4.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`11`,y:`11`,width:`5`,height:`2`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`divider`:return(0,V.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,V.jsx)(`line`,{x1:`2`,y1:`8`,x2:`18`,y2:`8`,stroke:X,strokeWidth:`0.5`,opacity:`.3`})});case`card`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5.5`,rx:`1`,fill:X,opacity:`.04`}),(0,V.jsx)(`rect`,{x:`4`,y:`8.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`4`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`text`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`4`,width:`14`,height:`1.5`,rx:`.5`,fill:X,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`2`,y:`7`,width:`11`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`2`,y:`9.5`,width:`13`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`2`,y:`12`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`image`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`line`,{x1:`2`,y1:`2`,x2:`18`,y2:`14`,stroke:X,strokeWidth:`.3`,opacity:`.25`}),(0,V.jsx)(`line`,{x1:`18`,y1:`2`,x2:`2`,y2:`14`,stroke:X,strokeWidth:`.3`,opacity:`.25`})]});case`video`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`path`,{d:`M8.5 5.5v5l4.5-2.5z`,stroke:X,strokeWidth:Z,fill:X,opacity:`.15`})]});case`table`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`line`,{x1:`1`,y1:`5.5`,x2:`19`,y2:`5.5`,stroke:X,strokeWidth:`.3`,opacity:`.25`}),(0,V.jsx)(`line`,{x1:`1`,y1:`9`,x2:`19`,y2:`9`,stroke:X,strokeWidth:`.3`,opacity:`.25`}),(0,V.jsx)(`line`,{x1:`7`,y1:`2`,x2:`7`,y2:`14`,stroke:X,strokeWidth:`.3`,opacity:`.25`}),(0,V.jsx)(`line`,{x1:`13`,y1:`2`,x2:`13`,y2:`14`,stroke:X,strokeWidth:`.3`,opacity:`.25`})]});case`grid`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`11.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`11.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:X,strokeWidth:Z})]});case`list`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`circle`,{cx:`3.5`,cy:`4.5`,r:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`6.5`,y:`4`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,V.jsx)(`circle`,{cx:`3.5`,cy:`8`,r:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,V.jsx)(`circle`,{cx:`3.5`,cy:`11.5`,r:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`6.5`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:X,opacity:`.2`})]});case`chart`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`9`,width:`2.5`,height:`4`,rx:`.5`,fill:X,opacity:`.2`}),(0,V.jsx)(`rect`,{x:`7`,y:`6`,width:`2.5`,height:`7`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`11`,y:`3`,width:`2.5`,height:`10`,rx:`.5`,fill:X,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`15`,y:`5`,width:`2.5`,height:`8`,rx:`.5`,fill:X,opacity:`.2`})]});case`accordion`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1.5`,y:`2`,width:`17`,height:`4`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`3`,y:`3.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`1.5`,y:`7.5`,width:`17`,height:`3`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`1.5`,y:`12`,width:`17`,height:`3`,rx:`1`,stroke:X,strokeWidth:Z})]});case`carousel`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`10`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`path`,{d:`M1.5 7L3 8.5 1.5 10`,stroke:X,strokeWidth:Z,opacity:`.35`}),(0,V.jsx)(`path`,{d:`M18.5 7L17 8.5 18.5 10`,stroke:X,strokeWidth:Z,opacity:`.35`}),(0,V.jsx)(`circle`,{cx:`8.5`,cy:`14`,r:`.6`,fill:X,opacity:`.35`}),(0,V.jsx)(`circle`,{cx:`10`,cy:`14`,r:`.6`,fill:X,opacity:`.15`}),(0,V.jsx)(`circle`,{cx:`11.5`,cy:`14`,r:`.6`,fill:X,opacity:`.15`})]});case`button`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`2`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.25`})]});case`input`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`4`,width:`5.5`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`2`,y:`6.5`,width:`16`,height:`5.5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`3.5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`search`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`4.5`,width:`16`,height:`7`,rx:`3.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,V.jsx)(`line`,{x1:`7.5`,y1:`9.5`,x2:`9`,y2:`11`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`9.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`form`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`1.5`,width:`5.5`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`2`,y:`3.5`,width:`16`,height:`3`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`2`,y:`8`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`2`,y:`10`,width:`16`,height:`3`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`12`,y:`14`,width:`6`,height:`2`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`tabs`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`10`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`1`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`2.5`,y:`3.25`,width:`3`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`7`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`dropdown`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`4`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`3.5`,y:`3.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,V.jsx)(`path`,{d:`M15 3.5l1.5 1.5L18 3.5`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`7`,rx:`1`,stroke:X,strokeWidth:Z,strokeDasharray:`2 1`,opacity:`.3`})]});case`toggle`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`6`,rx:`3`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`circle`,{cx:`13`,cy:`8`,r:`2`,fill:X,opacity:`.3`})]});case`avatar`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`circle`,{cx:`10`,cy:`8`,r:`6`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`circle`,{cx:`10`,cy:`6.5`,r:`2`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`path`,{d:`M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5`,stroke:X,strokeWidth:Z})]});case`badge`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`3`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.25`})]});case`breadcrumb`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1.5`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:X,opacity:`.3`}),(0,V.jsx)(`path`,{d:`M6.5 7l1 1-1 1`,stroke:X,strokeWidth:Z,opacity:`.2`}),(0,V.jsx)(`rect`,{x:`9`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,V.jsx)(`path`,{d:`M14 7l1 1-1 1`,stroke:X,strokeWidth:Z,opacity:`.2`}),(0,V.jsx)(`rect`,{x:`16.5`,y:`7`,width:`2`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`pagination`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`6.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`11`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,fill:X,opacity:`.15`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`15.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:X,strokeWidth:Z})]});case`progress`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`2`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`1`,fill:X,opacity:`.2`})]});case`toast`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`circle`,{cx:`5`,cy:`8`,r:`1.5`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`8`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`8`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`tooltip`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`3`,width:`14`,height:`7`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`5.5`,y:`5.5`,width:`9`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`path`,{d:`M9 10l1 2.5 1-2.5`,stroke:X,strokeWidth:Z})]});case`pricing`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`7`,y:`5.5`,width:`6`,height:`2`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`5`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.1`}),(0,V.jsx)(`rect`,{x:`5`,y:`11`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.1`}),(0,V.jsx)(`rect`,{x:`6`,y:`13`,width:`8`,height:`1.5`,rx:`.5`,fill:X,opacity:`.2`})]});case`testimonial`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`text`,{x:`4`,y:`5.5`,fontSize:`4`,fill:X,opacity:`.2`,fontFamily:`serif`,children:`“`}),(0,V.jsx)(`rect`,{x:`4`,y:`7`,width:`12`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`4`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:X,opacity:`.12`}),(0,V.jsx)(`circle`,{cx:`5.5`,cy:`12.5`,r:`1.5`,stroke:X,strokeWidth:Z,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`8`,y:`12`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`cta`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`5`,y:`4.5`,width:`10`,height:`1.5`,rx:`.5`,fill:X,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`7`,y:`10`,width:`6`,height:`2.5`,rx:`1`,stroke:X,strokeWidth:Z})]});case`alert`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,V.jsx)(`line`,{x1:`6`,y1:`7`,x2:`6`,y2:`8.5`,stroke:X,strokeWidth:`0.6`,opacity:`.5`}),(0,V.jsx)(`circle`,{cx:`6`,cy:`9.3`,r:`.3`,fill:X,opacity:`.5`}),(0,V.jsx)(`rect`,{x:`9.5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.2`})]});case`banner`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`6`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`4`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`14`,y:`7`,width:`3.5`,height:`2`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`stat`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`6`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`2.5`,rx:`.5`,fill:X,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`7`,y:`11`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`stepper`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`circle`,{cx:`4`,cy:`8`,r:`2`,fill:X,opacity:`.2`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`line`,{x1:`6`,y1:`8`,x2:`8`,y2:`8`,stroke:X,strokeWidth:`.4`,opacity:`.3`}),(0,V.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`line`,{x1:`12`,y1:`8`,x2:`14`,y2:`8`,stroke:X,strokeWidth:`.4`,opacity:`.3`}),(0,V.jsx)(`circle`,{cx:`16`,cy:`8`,r:`2`,stroke:X,strokeWidth:Z})]});case`tag`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`5.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`line`,{x1:`14`,y1:`6.5`,x2:`15.5`,y2:`9.5`,stroke:X,strokeWidth:Z,opacity:`.2`}),(0,V.jsx)(`line`,{x1:`15.5`,y1:`6.5`,x2:`14`,y2:`9.5`,stroke:X,strokeWidth:Z,opacity:`.2`})]});case`rating`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`path`,{d:`M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z`,fill:X,opacity:`.25`}),(0,V.jsx)(`path`,{d:`M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z`,fill:X,opacity:`.25`}),(0,V.jsx)(`path`,{d:`M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z`,stroke:X,strokeWidth:Z,opacity:`.25`})]});case`map`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`line`,{x1:`2`,y1:`6`,x2:`18`,y2:`10`,stroke:X,strokeWidth:`.3`,opacity:`.15`}),(0,V.jsx)(`line`,{x1:`7`,y1:`2`,x2:`11`,y2:`14`,stroke:X,strokeWidth:`.3`,opacity:`.15`}),(0,V.jsx)(`path`,{d:`M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z`,fill:X,opacity:`.15`,stroke:X,strokeWidth:Z})]});case`timeline`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`line`,{x1:`5`,y1:`2`,x2:`5`,y2:`14`,stroke:X,strokeWidth:`.4`,opacity:`.25`}),(0,V.jsx)(`circle`,{cx:`5`,cy:`4`,r:`1.5`,fill:X,opacity:`.2`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`8`,y:`3`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`circle`,{cx:`5`,cy:`8.5`,r:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`8`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`circle`,{cx:`5`,cy:`13`,r:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`8`,y:`12`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`fileUpload`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:X,strokeWidth:Z,strokeDasharray:`2 1`}),(0,V.jsx)(`path`,{d:`M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`7`,y:`11.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.15`})]});case`codeBlock`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`circle`,{cx:`4`,cy:`4`,r:`.6`,fill:X,opacity:`.3`}),(0,V.jsx)(`circle`,{cx:`5.5`,cy:`4`,r:`.6`,fill:X,opacity:`.3`}),(0,V.jsx)(`circle`,{cx:`7`,cy:`4`,r:`.6`,fill:X,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`4`,y:`7`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,V.jsx)(`rect`,{x:`6`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`4`,y:`11`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`calendar`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`12`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`line`,{x1:`2`,y1:`6.5`,x2:`18`,y2:`6.5`,stroke:X,strokeWidth:`.4`,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`5`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:X,opacity:`.2`}),(0,V.jsx)(`rect`,{x:`14`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:X,opacity:`.2`}),(0,V.jsx)(`circle`,{cx:`7`,cy:`9`,r:`.6`,fill:X,opacity:`.2`}),(0,V.jsx)(`circle`,{cx:`10`,cy:`9`,r:`.6`,fill:X,opacity:`.2`}),(0,V.jsx)(`circle`,{cx:`13`,cy:`9`,r:`.6`,fill:X,opacity:`.3`}),(0,V.jsx)(`circle`,{cx:`7`,cy:`12`,r:`.6`,fill:X,opacity:`.2`}),(0,V.jsx)(`circle`,{cx:`10`,cy:`12`,r:`.6`,fill:X,opacity:`.2`})]});case`notification`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`10`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`circle`,{cx:`5.5`,cy:`8`,r:`2`,stroke:X,strokeWidth:Z,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`9`,y:`6`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`9`,y:`8.5`,width:`4.5`,height:`1`,rx:`.5`,fill:X,opacity:`.12`}),(0,V.jsx)(`circle`,{cx:`16.5`,cy:`4.5`,r:`1.5`,fill:X,opacity:`.25`})]});case`productCard`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`6`,rx:`1`,fill:X,opacity:`.04`}),(0,V.jsx)(`rect`,{x:`5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`5`,y:`10.5`,width:`4`,height:`1.5`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`12`,y:`12`,width:`4`,height:`2`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`profile`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`circle`,{cx:`10`,cy:`5`,r:`3`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`5`,y:`10`,width:`10`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`7`,y:`12.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`drawer`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`9`,y:`1`,width:`10`,height:`14`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`10.5`,y:`4`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`10.5`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`10.5`,y:`9`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:X,strokeWidth:Z,opacity:`.15`})]});case`popover`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`9`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`5`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`path`,{d:`M9 11l1 2.5 1-2.5`,stroke:X,strokeWidth:Z})]});case`logo`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`3`,width:`10`,height:`10`,rx:`2`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`path`,{d:`M5 9.5l2-4 2 4`,stroke:X,strokeWidth:Z,opacity:`.3`}),(0,V.jsx)(`rect`,{x:`14`,y:`6`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,V.jsx)(`rect`,{x:`14`,y:`8.5`,width:`3`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`faq`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`text`,{x:`2.5`,y:`5.5`,fontSize:`4`,fill:X,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,V.jsx)(`rect`,{x:`7`,y:`3`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`7`,y:`5.5`,width:`8`,height:`1`,rx:`.5`,fill:X,opacity:`.12`}),(0,V.jsx)(`text`,{x:`2.5`,y:`11.5`,fontSize:`4`,fill:X,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,V.jsx)(`rect`,{x:`7`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`7`,y:`11.5`,width:`7`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`gallery`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`7.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`13.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`7.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`13.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:X,strokeWidth:Z})]});case`checkbox`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`5`,y:`4`,width:`8`,height:`8`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`path`,{d:`M7.5 8l1.5 1.5 3-3`,stroke:X,strokeWidth:Z,opacity:`.35`})]});case`radio`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`circle`,{cx:`10`,cy:`8`,r:`4`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,fill:X,opacity:`.3`})]});case`slider`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`7.5`,width:`16`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`2`,y:`7.5`,width:`10`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`circle`,{cx:`12`,cy:`8`,r:`2.5`,stroke:X,strokeWidth:Z})]});case`datePicker`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5`,rx:`1`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`3.5`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,V.jsx)(`rect`,{x:`14`,y:`2.5`,width:`2.5`,height:`2`,rx:`.5`,fill:X,opacity:`.12`}),(0,V.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`8`,rx:`1`,stroke:X,strokeWidth:Z,strokeDasharray:`2 1`,opacity:`.3`}),(0,V.jsx)(`circle`,{cx:`6`,cy:`10`,r:`.6`,fill:X,opacity:`.2`}),(0,V.jsx)(`circle`,{cx:`10`,cy:`10`,r:`.6`,fill:X,opacity:`.3`}),(0,V.jsx)(`circle`,{cx:`14`,cy:`10`,r:`.6`,fill:X,opacity:`.2`}),(0,V.jsx)(`circle`,{cx:`6`,cy:`13`,r:`.6`,fill:X,opacity:`.2`}),(0,V.jsx)(`circle`,{cx:`10`,cy:`13`,r:`.6`,fill:X,opacity:`.2`})]});case`skeleton`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`3`,rx:`1`,fill:X,opacity:`.08`}),(0,V.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`.75`,fill:X,opacity:`.08`}),(0,V.jsx)(`rect`,{x:`2`,y:`11`,width:`13`,height:`2`,rx:`.75`,fill:X,opacity:`.08`})]});case`chip`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1.5`,y:`5`,width:`10`,height:`6`,rx:`3`,fill:X,opacity:`.08`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`4`,y:`7.5`,width:`4`,height:`1`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`line`,{x1:`9.5`,y1:`6.5`,x2:`10.5`,y2:`9.5`,stroke:X,strokeWidth:Z,opacity:`.2`}),(0,V.jsx)(`line`,{x1:`10.5`,y1:`6.5`,x2:`9.5`,y2:`9.5`,stroke:X,strokeWidth:Z,opacity:`.2`}),(0,V.jsx)(`rect`,{x:`13`,y:`5`,width:`5.5`,height:`6`,rx:`3`,stroke:X,strokeWidth:Z,opacity:`.25`})]});case`icon`:return(0,V.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z`,stroke:X,strokeWidth:Z,opacity:`.3`})});case`spinner`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`circle`,{cx:`10`,cy:`8`,r:`5`,stroke:X,strokeWidth:Z,opacity:`.12`}),(0,V.jsx)(`path`,{d:`M10 3a5 5 0 0 1 5 5`,stroke:X,strokeWidth:Z,opacity:`.35`,strokeLinecap:`round`})]});case`feature`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`2`,width:`5`,height:`5`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`path`,{d:`M4.5 3.5v3m-1.5-1.5h3`,stroke:X,strokeWidth:Z,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`9`,y:`2.5`,width:`8`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`9`,y:`5.5`,width:`6`,height:`1`,rx:`.5`,fill:X,opacity:`.12`}),(0,V.jsx)(`rect`,{x:`2`,y:`10`,width:`5`,height:`5`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`9`,y:`10.5`,width:`7`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`9`,y:`13.5`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.12`})]});case`team`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`circle`,{cx:`5`,cy:`5`,r:`2.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`2.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,V.jsx)(`circle`,{cx:`15`,cy:`5`,r:`2.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`12.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,V.jsx)(`circle`,{cx:`10`,cy:`5`,r:`2.5`,stroke:X,strokeWidth:Z,opacity:`.5`}),(0,V.jsx)(`rect`,{x:`7.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.15`}),(0,V.jsx)(`rect`,{x:`4`,y:`12`,width:`12`,height:`1`,rx:`.5`,fill:X,opacity:`.1`})]});case`login`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:X,opacity:`.25`}),(0,V.jsx)(`rect`,{x:`5`,y:`5.5`,width:`10`,height:`3`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`5`,y:`9.5`,width:`10`,height:`3`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`6.5`,y:`13.5`,width:`7`,height:`2`,rx:`.75`,fill:X,opacity:`.2`})]});case`contact`:return(0,V.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`4`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:X,opacity:`.2`}),(0,V.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`2.5`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`4`,y:`8.5`,width:`12`,height:`4`,rx:`.75`,stroke:X,strokeWidth:Z}),(0,V.jsx)(`rect`,{x:`11`,y:`13.5`,width:`5`,height:`1.5`,rx:`.5`,fill:X,opacity:`.2`})]});default:return null}}function tp({activeType:e,onSelect:t,onDragStart:n,scrollRef:r,fadeClass:i,blankCanvas:a}){return(0,V.jsx)(`div`,{ref:r,className:`${Y.placeScroll} ${i||``}`,children:Dd.map(r=>(0,V.jsxs)(`div`,{className:Y.paletteSection,children:[(0,V.jsx)(`div`,{className:Y.paletteSectionTitle,children:r.section}),r.items.map(r=>(0,V.jsxs)(`div`,{className:`${Y.paletteItem} ${e===r.type?Y.active:``} ${a?Y.wireframe:``}`,onClick:()=>t(r.type),onMouseDown:e=>{e.button===0&&n(r.type,e)},children:[(0,V.jsx)(`div`,{className:Y.paletteItemIcon,children:(0,V.jsx)(ep,{type:r.type})}),(0,V.jsx)(`span`,{className:Y.paletteItemLabel,children:r.label})]},r.type))]},r.section))})}function np({value:e,suffix:t}){let[n,r]=(0,b.useState)(null),[i,a]=(0,b.useState)(t),[o,s]=(0,b.useState)(`up`),c=(0,b.useRef)(e),l=(0,b.useRef)(t),u=(0,b.useRef)(),d=n!==null&&i!==t;return(0,b.useEffect)(()=>{if(e!==c.current){if(e===0){c.current=e,l.current=t,r(null);return}s(e>c.current?`up`:`down`),r(c.current),a(l.current),c.current=e,l.current=t,clearTimeout(u.current),u.current=G(()=>r(null),250)}else l.current=t},[e,t]),n===null?(0,V.jsxs)(V.Fragment,{children:[e,t?` ${t}`:``]}):d?(0,V.jsxs)(`span`,{className:Y.rollingWrap,children:[(0,V.jsxs)(`span`,{style:{visibility:`hidden`},children:[e,` `,t]}),(0,V.jsxs)(`span`,{className:`${Y.rollingNum} ${o===`up`?Y.exitUp:Y.exitDown}`,children:[n,` `,i]},`o${n}-${e}`),(0,V.jsxs)(`span`,{className:`${Y.rollingNum} ${o===`up`?Y.enterUp:Y.enterDown}`,children:[e,` `,t]},`n${e}`)]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`span`,{className:Y.rollingWrap,children:[(0,V.jsx)(`span`,{style:{visibility:`hidden`},children:e}),(0,V.jsx)(`span`,{className:`${Y.rollingNum} ${o===`up`?Y.exitUp:Y.exitDown}`,children:n},`o${n}-${e}`),(0,V.jsx)(`span`,{className:`${Y.rollingNum} ${o===`up`?Y.enterUp:Y.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:``]})}function rp({activeType:e,onSelect:t,isDarkMode:n,sectionCount:r,onDetectSections:i,visible:a,onExited:o,placementCount:s,onClearPlacements:c,onDragStart:l,blankCanvas:u,onBlankCanvasChange:d,wireframePurpose:f,onWireframePurposeChange:p,Tooltip:m}){let[h,g]=(0,b.useState)(!1),[_,v]=(0,b.useState)(`exit`),[y,x]=(0,b.useState)(!1),[S,C]=(0,b.useState)(!0),w=(0,b.useRef)(0),ee=(0,b.useRef)(``),te=(0,b.useRef)(0),ne=(0,b.useRef)(),re=(0,b.useRef)(null),[ie,ae]=(0,b.useState)(``);(0,b.useEffect)(()=>(a?(g(!0),clearTimeout(ne.current),cancelAnimationFrame(te.current),te.current=_d(()=>{te.current=_d(()=>{v(`enter`)})})):(cancelAnimationFrame(te.current),v(`exit`),clearTimeout(ne.current),ne.current=G(()=>{g(!1),o?.()},200)),()=>cancelAnimationFrame(te.current)),[a]);let T=s>0||r>0,oe=s+r;if(oe>0&&(w.current=oe,ee.current=u?oe===1?`Component`:`Components`:oe===1?`Change`:`Changes`),(0,b.useEffect)(()=>{if(T)y?C(!1):(C(!0),x(!0),_d(()=>{_d(()=>{C(!1)})}));else{C(!0);let e=G(()=>x(!1),300);return()=>clearTimeout(e)}},[T]),(0,b.useEffect)(()=>{if(!h)return;let e=re.current;if(!e)return;let t=()=>ae($f(e));t(),e.addEventListener(`scroll`,t,{passive:!0});let n=new ResizeObserver(t);return n.observe(e),()=>{e.removeEventListener(`scroll`,t),n.disconnect()}},[h]),!h)return null;let se=[];return s>0&&se.push(`placed`),r>0&&se.push(`captured`),(0,V.jsxs)(`div`,{className:`${Y.palette} ${Y[_]} ${n?``:Y.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onTransitionEnd:e=>{e.target===e.currentTarget&&(a||(clearTimeout(ne.current),g(!1),v(`exit`),o?.()))},children:[(0,V.jsxs)(`div`,{className:Y.paletteHeader,children:[(0,V.jsx)(`div`,{className:Y.paletteHeaderTitle,children:`Layout Mode`}),(0,V.jsxs)(`div`,{className:Y.paletteHeaderDesc,children:[`Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary.`,` `,(0,V.jsx)(`a`,{href:`https://agentation.dev/features#layout-mode`,target:`_blank`,rel:`noopener noreferrer`,children:`Learn more.`})]})]}),(0,V.jsxs)(`div`,{className:`${Y.canvasToggle} ${u?Y.active:``}`,onClick:()=>d(!u),children:[(0,V.jsx)(`span`,{className:Y.canvasToggleIcon,children:(0,V.jsxs)(`svg`,{viewBox:`0 0 14 14`,width:`14`,height:`14`,fill:`none`,children:[(0,V.jsx)(`rect`,{x:`1`,y:`1`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,strokeWidth:`1`}),(0,V.jsx)(`circle`,{cx:`4.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,V.jsx)(`circle`,{cx:`7`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,V.jsx)(`circle`,{cx:`9.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,V.jsx)(`circle`,{cx:`4.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,V.jsx)(`circle`,{cx:`7`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,V.jsx)(`circle`,{cx:`9.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,V.jsx)(`circle`,{cx:`4.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,V.jsx)(`circle`,{cx:`7`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,V.jsx)(`circle`,{cx:`9.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`})]})}),(0,V.jsx)(`span`,{className:Y.canvasToggleLabel,children:`Wireframe New Page`})]}),(0,V.jsx)(`div`,{className:`${Y.wireframePurposeWrap} ${u?``:Y.collapsed}`,children:(0,V.jsx)(`div`,{className:Y.wireframePurposeInner,children:(0,V.jsx)(`textarea`,{className:Y.wireframePurposeInput,placeholder:`Describe this page to provide additional context for your agent.`,value:f,onChange:e=>p(e.target.value),rows:2})})}),(0,V.jsx)(tp,{activeType:e,onSelect:t,onDragStart:l,scrollRef:re,fadeClass:ie,blankCanvas:u}),y&&(0,V.jsx)(`div`,{className:`${Y.paletteFooterWrap} ${S?Y.footerHidden:``}`,children:(0,V.jsx)(`div`,{className:Y.paletteFooterInner,children:(0,V.jsx)(`div`,{className:Y.paletteFooterInnerContent,children:(0,V.jsxs)(`div`,{className:Y.paletteFooter,children:[(0,V.jsx)(`span`,{className:Y.paletteFooterCount,children:(0,V.jsx)(np,{value:w.current,suffix:ee.current})}),(0,V.jsx)(`button`,{className:Y.paletteFooterClear,onClick:c,children:`Clear`})]})})})})]})}function ip(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function ap(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=ip(n)}return null}function op(e,t=4){let n=[],r=e,i=0;for(;r&&i<t;){let e=r.tagName.toLowerCase();if(e===`html`||e===`body`)break;let t=e;if(r.id)t=`#${r.id}`;else if(r.className&&typeof r.className==`string`){let e=r.className.split(/\s+/).find(e=>e.length>2&&!e.match(/^[a-z]{1,2}$/)&&!e.match(/[A-Z0-9]{5,}/));e&&(t=`.${e.split(`_`)[0]}`)}let a=ip(r);!r.parentElement&&a&&(t=`\u27E8shadow\u27E9 ${t}`),n.unshift(t),r=a,i++}return n.join(` > `)}function sp(e){let t=op(e);if(e.dataset.element)return{name:e.dataset.element,path:t};let n=e.tagName.toLowerCase();if([`path`,`circle`,`rect`,`line`,`g`].includes(n)){let n=ap(e,`svg`);if(n){let e=ip(n);if(e instanceof HTMLElement)return{name:`graphic in ${sp(e).name}`,path:t}}return{name:`graphic element`,path:t}}if(n===`svg`){let n=ip(e);if(n?.tagName.toLowerCase()===`button`){let e=n.textContent?.trim();return{name:e?`icon in "${e}" button`:`button icon`,path:t}}return{name:`icon`,path:t}}if(n===`button`){let n=e.textContent?.trim(),r=e.getAttribute(`aria-label`);return r?{name:`button [${r}]`,path:t}:{name:n?`button "${n.slice(0,25)}"`:`button`,path:t}}if(n===`a`){let n=e.textContent?.trim(),r=e.getAttribute(`href`);return n?{name:`link "${n.slice(0,25)}"`,path:t}:r?{name:`link to ${r.slice(0,30)}`,path:t}:{name:`link`,path:t}}if(n===`input`){let n=e.getAttribute(`type`)||`text`,r=e.getAttribute(`placeholder`),i=e.getAttribute(`name`);return r?{name:`input "${r}"`,path:t}:i?{name:`input [${i}]`,path:t}:{name:`${n} input`,path:t}}if([`h1`,`h2`,`h3`,`h4`,`h5`,`h6`].includes(n)){let r=e.textContent?.trim();return{name:r?`${n} "${r.slice(0,35)}"`:n,path:t}}if(n===`p`){let n=e.textContent?.trim();return n?{name:`paragraph: "${n.slice(0,40)}${n.length>40?`...`:``}"`,path:t}:{name:`paragraph`,path:t}}if(n===`span`||n===`label`){let r=e.textContent?.trim();return r&&r.length<40?{name:`"${r}"`,path:t}:{name:n,path:t}}if(n===`li`){let n=e.textContent?.trim();return n&&n.length<40?{name:`list item: "${n.slice(0,35)}"`,path:t}:{name:`list item`,path:t}}if(n===`blockquote`)return{name:`blockquote`,path:t};if(n===`code`){let n=e.textContent?.trim();return n&&n.length<30?{name:`code: \`${n}\``,path:t}:{name:`code`,path:t}}if(n===`pre`)return{name:`code block`,path:t};if(n===`img`){let n=e.getAttribute(`alt`);return{name:n?`image "${n.slice(0,30)}"`:`image`,path:t}}if(n===`video`)return{name:`video`,path:t};if([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`].includes(n)){let r=e.className,i=e.getAttribute(`role`),a=e.getAttribute(`aria-label`);if(a)return{name:`${n} [${a}]`,path:t};if(i)return{name:`${i}`,path:t};if(typeof r==`string`&&r){let e=r.split(/[\s_-]+/).map(e=>e.replace(/[A-Z0-9]{5,}.*$/,``)).filter(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e)).slice(0,2);if(e.length>0)return{name:e.join(` `),path:t}}return{name:n===`div`?`container`:n,path:t}}return{name:n,path:t}}function cp(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let r=e.previousElementSibling;if(r){let e=r.textContent?.trim();e&&e.length<50&&t.unshift(`[before: "${e.slice(0,40)}"]`)}let i=e.nextElementSibling;if(i){let e=i.textContent?.trim();e&&e.length<50&&t.push(`[after: "${e.slice(0,40)}"]`)}return t.join(` `)}function lp(e){let t=ip(e);if(!t)return``;let n=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(t=>t!==e&&t instanceof HTMLElement);if(n.length===0)return``;let r=n.slice(0,4).map(e=>{let t=e.tagName.toLowerCase(),n=e.className,r=``;if(typeof n==`string`&&n){let e=n.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(r=`.${e}`)}if(t===`button`||t===`a`){let n=e.textContent?.trim().slice(0,15);if(n)return`${t}${r} "${n}"`}return`${t}${r}`}),i=t.tagName.toLowerCase();if(typeof t.className==`string`&&t.className){let e=t.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(i=`.${e}`)}let a=t.children.length,o=a>r.length+1?` (${a} total in ${i})`:``;return r.join(`, `)+o}function up(e){let t=e.className;return typeof t!=`string`||!t?``:t.split(/\s+/).filter(e=>e.length>0).map(e=>{let t=e.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return t?t[1]:e}).filter((e,t,n)=>n.indexOf(e)===t).join(`, `)}var dp=new Set([`none`,`normal`,`auto`,`0px`,`rgba(0, 0, 0, 0)`,`transparent`,`static`,`visible`]),fp=new Set(`p.span.h1.h2.h3.h4.h5.h6.label.li.td.th.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.a.time.cite.q`.split(`.`)),pp=new Set([`input`,`textarea`,`select`]),mp=new Set([`img`,`video`,`canvas`,`svg`]),hp=new Set([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`,`ul`,`ol`,`form`,`fieldset`]);function gp(e){if(typeof window>`u`)return{};let t=window.getComputedStyle(e),n={},r=e.tagName.toLowerCase(),i;i=fp.has(r)?[`color`,`fontSize`,`fontWeight`,`fontFamily`,`lineHeight`]:r===`button`||r===`a`&&e.getAttribute(`role`)===`button`||pp.has(r)?[`backgroundColor`,`color`,`padding`,`borderRadius`,`fontSize`]:mp.has(r)?[`width`,`height`,`objectFit`,`borderRadius`]:hp.has(r)?[`display`,`padding`,`margin`,`gap`,`backgroundColor`]:[`color`,`fontSize`,`margin`,`padding`,`backgroundColor`];for(let e of i){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!dp.has(i)&&(n[e]=i)}return n}var _p=`color.backgroundColor.borderColor.fontSize.fontWeight.fontFamily.lineHeight.letterSpacing.textAlign.width.height.padding.margin.border.borderRadius.display.position.top.right.bottom.left.zIndex.flexDirection.justifyContent.alignItems.gap.opacity.visibility.overflow.boxShadow.transform`.split(`.`);function vp(e){if(typeof window>`u`)return``;let t=window.getComputedStyle(e),n=[];for(let e of _p){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!dp.has(i)&&n.push(`${r}: ${i}`)}return n.join(`; `)}function yp(e){if(!e)return;let t={},n=e.split(`;`).map(e=>e.trim()).filter(Boolean);for(let e of n){let n=e.indexOf(`:`);if(n>0){let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();r&&i&&(t[r]=i)}}return Object.keys(t).length>0?t:void 0}function bp(e){let t=[],n=e.getAttribute(`role`),r=e.getAttribute(`aria-label`),i=e.getAttribute(`aria-describedby`),a=e.getAttribute(`tabindex`),o=e.getAttribute(`aria-hidden`);return n&&t.push(`role="${n}"`),r&&t.push(`aria-label="${r}"`),i&&t.push(`aria-describedby="${i}"`),a&&t.push(`tabindex=${a}`),o===`true`&&t.push(`aria-hidden`),e.matches(`a, button, input, select, textarea, [tabindex]`)&&t.push(`focusable`),t.join(`, `)}function xp(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!==`html`;){let e=n.tagName.toLowerCase(),r=e;if(n.id)r=`${e}#${n.id}`;else if(n.className&&typeof n.className==`string`){let t=n.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2);t&&(r=`${e}.${t}`)}let i=ip(n);!n.parentElement&&i&&(r=`\u27E8shadow\u27E9 ${r}`),t.unshift(r),n=i}return t.join(` > `)}var Sp=new Set([`nav`,`header`,`main`,`section`,`article`,`footer`,`aside`]),Cp={banner:`Header`,navigation:`Navigation`,main:`Main Content`,contentinfo:`Footer`,complementary:`Sidebar`,region:`Section`},wp={nav:`Navigation`,header:`Header`,main:`Main Content`,section:`Section`,article:`Article`,footer:`Footer`,aside:`Sidebar`},Tp=new Set([`script`,`style`,`noscript`,`link`,`meta`]),Ep=40;function Dp(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function Op(e){let t=e.tagName.toLowerCase();if([`nav`,`header`,`footer`,`main`].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className==`string`){let n=e.className.split(/\s+/).filter(e=>e.length>0).find(e=>e.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(e)&&!/^[a-z]{1,2}$/.test(e));if(n){let e=`${t}.${CSS.escape(n)}`;if(document.querySelectorAll(e).length===1)return e}}let n=e.parentElement;if(n){let r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?`body`:Op(n)} > ${t}:nth-child(${r})`}return t}function kp(e){let t=e.tagName.toLowerCase(),n=e.getAttribute(`aria-label`);if(n)return n;let r=e.getAttribute(`role`);if(r&&Cp[r])return Cp[r];if(wp[t])return wp[t];let i=e.querySelector(`h1, h2, h3, h4, h5, h6`);if(i){let e=i.textContent?.trim();if(e&&e.length<=50)return e;if(e)return e.slice(0,47)+`...`}let{name:a}=sp(e);return a.charAt(0).toUpperCase()+a.slice(1)}function Ap(e){let t=e.className;return typeof t!=`string`||!t?null:t.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e))||null}function jp(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g,` `);return n.length<=30?n:n.slice(0,30)+`…`}function Mp(){let e=document.querySelector(`main`)||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let r=[];return n.forEach((e,t)=>{if(!(e instanceof HTMLElement))return;let n=e.tagName.toLowerCase();if(Tp.has(n)||e.hasAttribute(`data-feedback-toolbar`)||e.closest(`[data-feedback-toolbar]`))return;let i=window.getComputedStyle(e);if(i.display===`none`||i.visibility===`hidden`)return;let a=e.getBoundingClientRect();if(a.height<Ep)return;let o=Sp.has(n),s=e.getAttribute(`role`)&&Cp[e.getAttribute(`role`)],c=n===`div`&&a.height>=60;if(!o&&!s&&!c)return;let l=window.scrollY,u=Dp(e),d={x:a.x,y:u?a.y:a.y+l,width:a.width,height:a.height};r.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:kp(e),tagName:n,selector:Op(e),role:e.getAttribute(`role`),className:Ap(e),textSnippet:jp(e),originalRect:d,currentRect:{...d},originalIndex:t,isFixed:u})}),r}function Np(e){let t=window.scrollY,n=e.getBoundingClientRect(),r=Dp(e),i={x:n.x,y:r?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,o=0;return a&&(o=Array.from(a.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:kp(e),tagName:e.tagName.toLowerCase(),selector:Op(e),role:e.getAttribute(`role`),className:Ap(e),textSnippet:jp(e),originalRect:i,currentRect:{...i},originalIndex:o,isFixed:r}}var Pp={bg:`rgba(59, 130, 246, 0.08)`,border:`rgba(59, 130, 246, 0.5)`,pill:`#3b82f6`},Fp=[`nw`,`n`,`ne`,`e`,`se`,`s`,`sw`,`w`],Ip=24,Lp=16,Rp=5;function zp(e,t,n,r){let i=1/0,a=1/0,o=e.x,s=e.x+e.width,c=e.x+e.width/2,l=e.y,u=e.y+e.height,d=e.y+e.height/2,f=[];for(let e of t)n.has(e.id)||f.push(e.currentRect);r&&f.push(...r);for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,f=e.y,p=e.y+e.height,m=e.y+e.height/2;for(let e of[o,s,c])for(let a of[t,n,r]){let t=a-e;Math.abs(t)<Rp&&Math.abs(t)<Math.abs(i)&&(i=t)}for(let e of[l,u,d])for(let t of[f,p,m]){let n=t-e;Math.abs(n)<Rp&&Math.abs(n)<Math.abs(a)&&(a=n)}}let p=Math.abs(i)<Rp?i:0,m=Math.abs(a)<Rp?a:0,h=[],g=new Set,_=o+p,v=s+p,y=c+p,b=l+m,x=u+m,S=d+m;for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[_,y,v])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[b,S,x])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`y`,pos:e}))}}return{dx:p,dy:m,guides:h}}var Bp=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function Vp(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest(`[data-feedback-toolbar]`))return null;if(Bp.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let e=t.getBoundingClientRect();if(e.width>=Lp&&e.height>=Lp)return t;t=t.parentElement}return null}function Hp({rearrangeState:e,onChange:t,isDarkMode:n,exiting:r,className:i,blankCanvas:a,extraSnapRects:o,onSelectionChange:s,deselectSignal:c,onDragMove:l,onDragEnd:u,clearSignal:d}){let{sections:f}=e,p=(0,b.useRef)(e);p.current=e;let[m,h]=(0,b.useState)(new Set),[g,_]=(0,b.useState)(!1),v=(0,b.useRef)(d);(0,b.useEffect)(()=>{d!==void 0&&d!==v.current&&(v.current=d,f.length>0&&_(!0))},[d,f.length]);let y=(0,b.useRef)(c);(0,b.useEffect)(()=>{c!==y.current&&(y.current=c,h(new Set))},[c]);let[x,S]=(0,b.useState)(null),[C,w]=(0,b.useState)(!1),ee=(0,b.useRef)(!1),te=(0,b.useCallback)(e=>{let t=f.find(t=>t.id===e);t&&(ee.current=!!t.note,S(e),w(!1))},[f]),ne=(0,b.useCallback)(()=>{x&&(w(!0),G(()=>{S(null),w(!1)},150))},[x]),re=(0,b.useCallback)(n=>{x&&(t({...e,sections:f.map(e=>e.id===x?{...e,note:n.trim()||void 0}:e)}),ne())},[x,f,e,t,ne]);(0,b.useEffect)(()=>{r&&x&&ne()},[r]);let[ie,ae]=(0,b.useState)(new Set),T=(0,b.useRef)(new Map),[oe,se]=(0,b.useState)(null),[ce,E]=(0,b.useState)(null),[D,O]=(0,b.useState)([]),[le,ue]=(0,b.useState)(0),de=(0,b.useRef)(null),fe=(0,b.useRef)(new Set),pe=(0,b.useRef)(new Map),[k,me]=(0,b.useState)(new Map),[he,ge]=(0,b.useState)(new Map),_e=(0,b.useRef)(new Set),ve=(0,b.useRef)(new Map),ye=(0,b.useRef)(s);ye.current=s;let be=(0,b.useRef)(l);be.current=l;let xe=(0,b.useRef)(u);xe.current=u,(0,b.useEffect)(()=>{a&&h(new Set)},[a]);let[Se,Ce]=(0,b.useState)(()=>!e.sections.some(e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1}));(0,b.useEffect)(()=>{if(!Se){let e=G(()=>Ce(!0),380);return()=>clearTimeout(e)}},[]);let we=(0,b.useRef)(new Set);(0,b.useEffect)(()=>{we.current=new Set(f.map(e=>e.selector))},[f]),(0,b.useEffect)(()=>{let e=()=>ue(window.scrollY);return e(),window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[]),(0,b.useEffect)(()=>{let e=e=>{if(de.current){se(null);return}let t=document.elementFromPoint(e.clientX,e.clientY);if(!t){se(null);return}if(t.closest(`[data-feedback-toolbar]`)){se(null);return}if(t.closest(`[data-design-placement]`)){se(null);return}if(t.closest(`[data-annotation-popup]`)){se(null);return}let n=Vp(t);if(!n){se(null);return}for(let e of we.current)try{let t=document.querySelector(e);if(t&&(t===n||n.contains(t))){se(null);return}}catch{}let r=n.getBoundingClientRect();se({x:r.x,y:r.y,w:r.width,h:r.height})};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[f]),(0,b.useEffect)(()=>{let e=document.body.style.userSelect;return document.body.style.userSelect=`none`,()=>{document.body.style.userSelect=e}},[]),(0,b.useEffect)(()=>{let n=n=>{if(de.current||n.button!==0)return;let r=n.target;if(!r||r.closest(`[data-feedback-toolbar]`)||r.closest(`[data-design-placement]`)||r.closest(`[data-annotation-popup]`))return;let i=Vp(r),a=!1;if(i)for(let e of we.current)try{let t=document.querySelector(e);if(t&&(t===i||i.contains(t))){a=!0;break}}catch{}let s=!!(n.shiftKey||n.metaKey||n.ctrlKey);if(i&&!a){n.preventDefault(),n.stopPropagation();let r=Np(i),a=[...f,r],c=[...e.originalOrder,r.id];t({...e,sections:a,originalOrder:c});let l=new Set([r.id]);h(l),ye.current?.(l,s),se(null);let u=n.clientX,d=n.clientY,p={x:r.currentRect.x,y:r.currentRect.y};r.originalRect;let m=!1,g=0,_=0;de.current=`move`;let v=e=>{let t=e.clientX-u,n=e.clientY-d;if(!m&&(Math.abs(t)>2||Math.abs(n)>2)&&(m=!0),!m)return;let i=zp({x:p.x+t,y:p.y+n,width:r.currentRect.width,height:r.currentRect.height},a,new Set([r.id]),o);O(i.guides);let s=t+i.dx,c=n+i.dy;g=s,_=c;let l=document.querySelector(`[data-rearrange-section="${r.id}"]`);l&&(l.style.transform=`translate(${s}px, ${c}px)`),me(new Map([[r.id,{x:p.x+s,y:p.y+c,width:r.currentRect.width,height:r.currentRect.height}]])),be.current?.(s,c)},y=()=>{window.removeEventListener(`mousemove`,v),window.removeEventListener(`mouseup`,y),de.current=null,O([]),me(new Map);let n=document.querySelector(`[data-rearrange-section="${r.id}"]`);n&&(n.style.transform=``),m&&t({...e,sections:a.map(e=>e.id===r.id?{...e,currentRect:{...e.currentRect,x:Math.max(0,p.x+g),y:Math.max(0,p.y+_)}}:e),originalOrder:c}),xe.current?.(g,_,m)};window.addEventListener(`mousemove`,v),window.addEventListener(`mouseup`,y)}else if(a&&i){n.preventDefault();for(let e of f)try{let t=document.querySelector(e.selector);if(t&&t===i){let t=new Set([e.id]);h(t),ye.current?.(t,s);return}}catch{}s||(h(new Set),ye.current?.(new Set,!1))}else s||(h(new Set),ye.current?.(new Set,!1))};return document.addEventListener(`mousedown`,n,!0),()=>document.removeEventListener(`mousedown`,n,!0)},[f,e,t]),(0,b.useEffect)(()=>{let n=n=>{let r=n.target;if(!(r.tagName===`INPUT`||r.tagName===`TEXTAREA`||r.isContentEditable)){if((n.key===`Backspace`||n.key===`Delete`)&&m.size>0){n.preventDefault();let e=new Set(m);ae(t=>{let n=new Set(t);for(let t of e)n.add(t);return n}),h(new Set),G(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>!e.has(t.id)),originalOrder:n.originalOrder.filter(t=>!e.has(t))}),ae(t=>{let n=new Set(t);for(let t of e)n.delete(t);return n})},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(n.key)&&m.size>0){n.preventDefault();let r=n.shiftKey?20:1,i=n.key===`ArrowLeft`?-r:n.key===`ArrowRight`?r:0,a=n.key===`ArrowUp`?-r:n.key===`ArrowDown`?r:0;t({...e,sections:f.map(e=>m.has(e.id)?{...e,currentRect:{...e.currentRect,x:Math.max(0,e.currentRect.x+i),y:Math.max(0,e.currentRect.y+a)}}:e)});return}n.key===`Escape`&&m.size>0&&h(new Set)}};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[m,f,e,t]);let A=(0,b.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${Y.handle}`)||i.closest(`.${Y.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey||n.metaKey||n.ctrlKey?(a=new Set(m),a.has(r)?a.delete(r):a.add(r)):a=m.has(r)?new Set(m):new Set([r]),h(a),(a.size!==m.size||[...a].some(e=>!m.has(e)))&&ye.current?.(a,!!(n.shiftKey||n.metaKey||n.ctrlKey));let s=n.clientX,c=n.clientY,l=new Map;for(let e of f)a.has(e.id)&&l.set(e.id,{x:e.currentRect.x,y:e.currentRect.y});de.current=`move`;let u=!1,d=0,p=0,g=new Map;for(let e of f)if(a.has(e.id)){let t=document.querySelector(`[data-rearrange-section="${e.id}"]`);g.set(e.id,{outlineEl:t,curW:e.currentRect.width,curH:e.currentRect.height})}let _=e=>{let t=e.clientX-s,n=e.clientY-c;if(t===0&&n===0)return;u=!0;let r=1/0,i=1/0,m=-1/0,h=-1/0;for(let[e,{curW:a,curH:o}]of g){let s=l.get(e);if(!s)continue;let c=s.x+t,u=s.y+n;r=Math.min(r,c),i=Math.min(i,u),m=Math.max(m,c+a),h=Math.max(h,u+o)}let _=zp({x:r,y:i,width:m-r,height:h-i},f,a,o),v=t+_.dx,y=n+_.dy;d=v,p=y,O(_.guides);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=`translate(${v}px, ${y}px)`);let b=new Map;for(let[e,{curW:t,curH:n}]of g){let r=l.get(e);if(r){let i={x:Math.max(0,r.x+v),y:Math.max(0,r.y+y),width:t,height:n};b.set(e,i)}}me(b),be.current?.(v,y)},v=n=>{window.removeEventListener(`mousemove`,_),window.removeEventListener(`mouseup`,v),de.current=null,O([]),me(new Map);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=``);if(u){let r=n.clientX-s,i=n.clientY-c;if(Math.abs(r)<5&&Math.abs(i)<5)t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:t.x,y:t.y}}:e})});else{t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:Math.max(0,t.x+d),y:Math.max(0,t.y+p)}}:e})}),xe.current?.(d,p,!0);return}}xe.current?.(0,0,!1)};window.addEventListener(`mousemove`,_),window.addEventListener(`mouseup`,v)},[m,f,e,t]),Te=(0,b.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=f.find(e=>e.id===r);if(!a)return;h(new Set([r])),de.current=`resize`;let o=n.clientX,s=n.clientY,c={...a.currentRect};a.originalRect;let l=c.width/c.height,u={...c},d=document.querySelector(`[data-rearrange-section="${r}"]`),p=e=>{let t=e.clientX-o,n=e.clientY-s,a=c.x,f=c.y,p=c.width,m=c.height;i.includes(`e`)&&(p=Math.max(Ip,c.width+t)),i.includes(`w`)&&(p=Math.max(Ip,c.width-t),a=c.x+c.width-p),i.includes(`s`)&&(m=Math.max(Ip,c.height+n)),i.includes(`n`)&&(m=Math.max(Ip,c.height-n),f=c.y+c.height-m),e.shiftKey&&(i.length===2?(Math.abs(p-c.width)>Math.abs(m-c.height)?m=p/l:p=m*l,i.includes(`w`)&&(a=c.x+c.width-p),i.includes(`n`)&&(f=c.y+c.height-m)):(i===`e`||i===`w`?m=p/l:p=m*l,i===`w`&&(a=c.x+c.width-p),i===`n`&&(f=c.y+c.height-m))),u={x:a,y:f,width:p,height:m},d&&(d.style.left=`${a}px`,d.style.top=`${f-le}px`,d.style.width=`${p}px`,d.style.height=`${m}px`),E({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(p)} \xD7 ${Math.round(m)}`}),me(new Map([[r,u]]))},m=()=>{window.removeEventListener(`mousemove`,p),window.removeEventListener(`mouseup`,m),E(null),de.current=null,me(new Map),t({...e,sections:f.map(e=>e.id===r?{...e,currentRect:u}:e)})};window.addEventListener(`mousemove`,p),window.addEventListener(`mouseup`,m)},[f,e,t,le]),Ee=(0,b.useCallback)(e=>{ae(t=>{let n=new Set(t);return n.add(e),n}),h(t=>{let n=new Set(t);return n.delete(e),n}),G(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>t.id!==e),originalOrder:n.originalOrder.filter(t=>t!==e)}),ae(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),De=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1},Oe=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1},ke=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1};for(let e of f)pe.current.has(e.id)||(Oe(e)?pe.current.set(e.id,`move`):ke(e)&&pe.current.set(e.id,`resize`));for(let e of pe.current.keys())f.some(t=>t.id===e)||pe.current.delete(e);let Ae=f.filter(e=>{try{if(ie.has(e.id)||m.has(e.id))return!0;let t=document.querySelector(e.selector);if(!t)return!1;let n=t.getBoundingClientRect(),r=e.originalRect;return Math.abs(n.width-r.width)+Math.abs(n.height-r.height)<200}catch{return!1}}),je=Ae.filter(e=>De(e)),Me=Ae.filter(e=>!De(e)),Ne=new Set(je.map(e=>e.id));for(let e of fe.current)Ne.has(e)||fe.current.delete(e);let j=[...Ne].sort().join(`,`);for(let e of je)ve.current.set(e.id,{currentRect:e.currentRect,originalRect:e.originalRect,isFixed:e.isFixed});return(0,b.useEffect)(()=>{let e=_e.current;_e.current=Ne;let t=new Map;for(let n of e)if(!Ne.has(n)){if(!f.some(e=>e.id===n))continue;let e=ve.current.get(n);e&&(t.set(n,{orig:e.originalRect,target:e.currentRect,isFixed:e.isFixed}),ve.current.delete(n))}if(t.size>0){ge(e=>{let n=new Map(e);for(let[e,r]of t)n.set(e,r);return n});let e=G(()=>{ge(e=>{let n=new Map(e);for(let e of t.keys())n.delete(e);return n})},250);return()=>clearTimeout(e)}},[j,f]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`${Y.rearrangeOverlay} ${n?``:Y.light} ${r?Y.overlayExiting:``}${i?` ${i}`:``}`,"data-feedback-toolbar":!0,children:[oe&&(0,V.jsx)(`div`,{className:Y.hoverHighlight,style:{left:oe.x,top:oe.y,width:oe.w,height:oe.h}}),Me.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-le,i=Pp,a=m.has(e.id);return(0,V.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${Y.sectionOutline} ${a?Y.selected:``} ${g||r||ie.has(e.id)?Y.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,borderColor:i.border,backgroundColor:i.bg,...Se?{}:{opacity:0,animation:`none`,transition:`none`}},onMouseDown:t=>A(t,e.id),onDoubleClick:()=>te(e.id),children:[(0,V.jsx)(`span`,{className:Y.sectionLabel,style:{backgroundColor:i.pill},children:e.label}),(0,V.jsx)(`span`,{className:`${Y.sectionAnnotation} ${e.note?Y.annotationVisible:``}`,children:(e.note&&T.current.set(e.id,e.note),e.note||T.current.get(e.id)||``)}),(0,V.jsxs)(`span`,{className:Y.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,V.jsx)(`div`,{className:Y.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>Ee(e.id),children:`✕`}),Fp.map(t=>(0,V.jsx)(`div`,{className:`${Y.handle} ${Y[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>Te(n,e.id,t)},t))]},e.id)}),je.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-le,i=m.has(e.id),o=Oe(e),s=ke(e);if(a&&!i)return null;let c=!fe.current.has(e.id);return c&&fe.current.add(e.id),(0,V.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${Y.ghostOutline} ${i?Y.selected:``} ${g||r||ie.has(e.id)?Y.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,...Se?{}:{opacity:0,animation:`none`,transition:`none`},...c?{}:{animation:`none`}},onMouseDown:t=>A(t,e.id),onDoubleClick:()=>te(e.id),children:[(0,V.jsx)(`span`,{className:Y.sectionLabel,style:{backgroundColor:Pp.pill},children:e.label}),(0,V.jsx)(`span`,{className:`${Y.sectionAnnotation} ${e.note?Y.annotationVisible:``}`,children:(e.note&&T.current.set(e.id,e.note),e.note||T.current.get(e.id)||``)}),(0,V.jsxs)(`span`,{className:Y.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,V.jsx)(`div`,{className:Y.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>Ee(e.id),children:`✕`}),Fp.map(t=>(0,V.jsx)(`div`,{className:`${Y.handle} ${Y[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>Te(n,e.id,t)},t)),(0,V.jsx)(`span`,{className:Y.ghostBadge,children:(()=>{let t=pe.current.get(e.id);if(o&&s){let[e,n]=t===`resize`?[`Resize`,`Move`]:[`Move`,`Resize`];return(0,V.jsxs)(V.Fragment,{children:[`Suggested `,e,` `,(0,V.jsxs)(`span`,{className:Y.ghostBadgeExtra,children:[`& `,n]})]})}return`Suggested ${s?`Resize`:`Move`}`})()})]},e.id)})]}),!a&&(()=>{let e=[];for(let t of je){let n=k.get(t.id);e.push({id:t.id,orig:t.originalRect,target:n||t.currentRect,isFixed:t.isFixed,isSelected:m.has(t.id),isExiting:ie.has(t.id)})}for(let[t,n]of k)if(!e.some(e=>e.id===t)){let r=f.find(e=>e.id===t);r&&e.push({id:t,orig:r.originalRect,target:n,isFixed:r.isFixed,isSelected:m.has(t)})}for(let[t,n]of he)e.some(e=>e.id===t)||e.push({id:t,orig:n.orig,target:n.target,isFixed:n.isFixed,isSelected:!1,isExiting:!0});return e.length===0?null:(0,V.jsxs)(`svg`,{className:`${Y.connectorSvg} ${g||r?Y.connectorExiting:``}`,children:[e.map(({id:e,orig:t,target:n,isFixed:r,isSelected:i,isExiting:a})=>{let o=t.x+t.width/2,s=(r?t.y:t.y-le)+t.height/2,c=n.x+n.width/2,l=(r?n.y:n.y-le)+n.height/2,u=c-o,d=l-s,f=Math.sqrt(u*u+d*d);if(f<2)return null;let p=Math.min(1,f/40),m=Math.min(f*.3,60),h=f>0?-d/f:0,g=f>0?u/f:0,_=(o+c)/2+h*m,v=(s+l)/2+g*m,y=k.has(e),b=y||i?1:.4,x=y||i?1:.5;return(0,V.jsxs)(`g`,{className:a?Y.connectorExiting:``,children:[(0,V.jsx)(`path`,{className:Y.connectorLine,d:`M ${o} ${s} Q ${_} ${v} ${c} ${l}`,fill:`none`,stroke:`rgba(59, 130, 246, 0.45)`,strokeWidth:`1.5`,opacity:b*p}),(0,V.jsx)(`circle`,{className:Y.connectorDot,cx:o,cy:s,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:x*p,filter:`url(#connDotShadow)`}),(0,V.jsx)(`circle`,{className:Y.connectorDot,cx:c,cy:l,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:x*p,filter:`url(#connDotShadow)`})]},`conn-${e}`)}),(0,V.jsx)(`defs`,{children:(0,V.jsx)(`filter`,{id:`connDotShadow`,x:`-50%`,y:`-50%`,width:`200%`,height:`200%`,children:(0,V.jsx)(`feDropShadow`,{dx:`0`,dy:`0.5`,stdDeviation:`1`,floodOpacity:`0.15`})})})]})})(),x&&(()=>{let e=f.find(e=>e.id===x);if(!e)return null;let t=e.currentRect,r=e.isFixed?t.y:t.y-le,i=t.x+t.width/2,a=r-8,o=r+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,i)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,V.jsx)(Sd,{element:e.label,placeholder:`Add a note about this section`,initialValue:e.note??``,submitLabel:ee.current?`Save`:`Set`,onSubmit:re,onCancel:ne,onDelete:ee.current?()=>{re(``)}:void 0,isExiting:C,lightMode:!n,style:u})})(),ce&&(0,V.jsx)(`div`,{className:Y.sizeIndicator,style:{left:ce.x,top:ce.y},"data-feedback-toolbar":!0,children:ce.text}),D.map((e,t)=>(0,V.jsx)(`div`,{className:Y.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,height:`100vh`}:{position:`fixed`,left:0,top:e.pos-le,width:`100vw`,height:1}},`${e.axis}-${e.pos}-${t}`))]})}var Up=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function Wp(){let e=document.querySelector(`main`)||document.body,t=[],n=Array.from(e.children),r=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let e of r){if(!(e instanceof HTMLElement)||Up.has(e.tagName.toLowerCase())||e.hasAttribute(`data-feedback-toolbar`))continue;let n=window.getComputedStyle(e);if(n.display===`none`||n.visibility===`hidden`)continue;let r=e.getBoundingClientRect();if(!(r.height<10||r.width<10)){t.push({label:kp(e),selector:Op(e),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height});for(let n of Array.from(e.children)){if(!(n instanceof HTMLElement)||Up.has(n.tagName.toLowerCase())||n.hasAttribute(`data-feedback-toolbar`))continue;let e=window.getComputedStyle(n);if(e.display===`none`||e.visibility===`hidden`)continue;let r=n.getBoundingClientRect();r.height<10||r.width<10||t.push({label:kp(n),selector:Op(n),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height})}}}return t}function Gp(e){let t=window.scrollY;return e.map(({label:e,selector:n,rect:r})=>{let i=r.y-t;return{label:e,selector:n,top:i,bottom:i+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function Kp(e){let t=window.scrollY,n=e.y-t,r=e.x;return{top:n,bottom:n+e.height,left:r,right:r+e.width,area:e.width*e.height}}function qp(e,t){let n=t?Gp(t):Wp(),r=Kp(e),i=null,a=null,o=null,s=null,c=null;for(let t of n){if(Math.abs(t.left-r.left)<2&&Math.abs(t.top-r.top)<2&&Math.abs(t.right-t.left-e.width)<2&&Math.abs(t.bottom-t.top-e.height)<2)continue;t.left<=r.left+2&&t.right>=r.right-2&&t.top<=r.top+2&&t.bottom>=r.bottom-2&&t.area>r.area*1.5&&(!c||t.area<c._area)&&(c={label:t.label,selector:t.selector,_area:t.area});let n=r.right>t.left+5&&r.left<t.right-5,l=r.bottom>t.top+5&&r.top<t.bottom-5;if(n&&t.bottom<=r.top+5){let e=Math.round(r.top-t.bottom);(!i||e<i._dist)&&(i={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(n&&t.top>=r.bottom-5){let e=Math.round(t.top-r.bottom);(!a||e<a._dist)&&(a={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.right<=r.left+5){let e=Math.round(r.left-t.right);(!o||e<o._dist)&&(o={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.left>=r.right-5){let e=Math.round(t.left-r.right);(!s||e<s._dist)&&(s={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}}let l=window.innerWidth,u=window.innerHeight,d=Yp(e,l),f=e=>e?{label:e.label,selector:e.selector,gap:e.gap}:null,p=Jp(r,e,l,u,c?{label:c.label,selector:c.selector,_area:c._area}:null,n);return{above:f(i),below:f(a),left:f(o),right:f(s),alignment:d,containedIn:c?{label:c.label,selector:c.selector}:null,outOfBounds:p}}function Jp(e,t,n,r,i,a){let o={},s=!1,c=[];if(e.left<-2&&c.push(`left`),e.right>n+2&&c.push(`right`),e.top<-2&&c.push(`top`),e.bottom>r+2&&c.push(`bottom`),c.length>0&&(o.viewport=c,s=!0),i){let t=a.find(e=>e.label===i.label&&e.selector===i.selector&&Math.abs(e.area-i._area)<10);if(t){let n=[];e.left<t.left-2&&n.push(`left`),e.right>t.right+2&&n.push(`right`),e.top<t.top-2&&n.push(`top`),e.bottom>t.bottom+2&&n.push(`bottom`),n.length>0&&(o.container={label:i.label,edges:n},s=!0)}}return s?o:null}function Yp(e,t){if(e.width/t>.85)return`full-width`;let n=e.x+e.width/2-t/2,r=t*.08;return Math.abs(n)<r?`center`:n<0?`left`:`right`}function Xp(e){switch(e){case`full-width`:return`full-width`;case`center`:return`centered`;case`left`:return`left-aligned`;case`right`:return`right-aligned`}}function Zp(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:``}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:``}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:``}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:``}`));let r=Xp(e.alignment);return e.containedIn?n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in \`${e.containedIn.label}\``):n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(`, `)} edge${e.outOfBounds.viewport.length>1?`s`:``})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)} edge${e.outOfBounds.container.edges.length>1?`s`:``})`)),n}function Qp(e,t,n){let r=[];e.above&&r.push(`below \`${e.above.label}\``),e.below&&r.push(`above \`${e.below.label}\``),e.left&&r.push(`right of \`${e.left.label}\``),e.right&&r.push(`left of \`${e.right.label}\``),e.containedIn&&r.push(`inside \`${e.containedIn.label}\``),r.push(Xp(e.alignment)),e.outOfBounds?.viewport&&r.push(`**outside viewport** (${e.outOfBounds.viewport.join(`, `)})`),e.outOfBounds?.container&&r.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)})`);let i=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:``;return`at (${Math.round(t.x)}, ${Math.round(t.y)})${i}: ${r.join(`, `)}`}var $p=15;function em(e){if(e.length<2)return[];let t=[],n=new Set;for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.y-e[t].rect.y)<$p&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.x-t.rect.x);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.x-(r[e].rect.x+r[e].rect.width)));let o=Math.round(r.reduce((e,t)=>e+t.rect.y,0)/r.length);t.push({labels:r.map(e=>e.label),type:`row`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.x-e[t].rect.x)<$p&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.y-t.rect.y);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.y-(r[e].rect.y+r[e].rect.height)));let o=Math.round(r.reduce((e,t)=>e+t.rect.x,0)/r.length);t.push({labels:r.map(e=>e.label),type:`column`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}return t}function tm(e){if(e.length<2)return[];let t=em(e.map(e=>({label:e.label,rect:e.originalRect}))),n=em(e.map(e=>({label:e.label,rect:e.currentRect}))),r=[],i=new Set;for(let e of t){let t=new Set(e.labels),a=null,o=0;for(let e of n){let n=e.labels.filter(e=>t.has(e)).length;n>=2&&n>o&&(a=e,o=n)}if(a){let n=a.labels.filter(e=>t.has(e)),o=n.join(`, `);if(a.type!==e.type){let t=e.type===`row`?`y`:`x`,n=a.type===`row`?`y`:`x`;r.push(`**${o}**: ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps) \u2192 ${a.type} (${n}\u2248${a.sharedEdge}, ${a.avgGap}px gaps)`)}else if(Math.abs(e.sharedEdge-a.sharedEdge)>20||Math.abs(e.avgGap-a.avgGap)>5){let t=e.type===`row`?`y`:`x`,n=Math.abs(e.sharedEdge-a.sharedEdge)>20?` ${t}: ${e.sharedEdge} \u2192 ${a.sharedEdge}`:``,i=Math.abs(e.avgGap-a.avgGap)>5?` gaps: ${e.avgGap}px \u2192 ${a.avgGap}px`:``;r.push(`**${o}**: ${e.type} shifted \u2014${n}${i}`)}n.forEach(e=>i.add(e))}else{let t=e.labels.join(`, `),n=e.type===`row`?`y`:`x`;r.push(`**${t}**: ${e.type} (${n}\u2248${e.sharedEdge}) dissolved`),e.labels.forEach(e=>i.add(e))}}for(let e of n)if(!e.labels.every(e=>i.has(e))&&!(e.labels.filter(e=>!i.has(e)).length<2)&&!t.some(t=>t.labels.filter(t=>e.labels.includes(t)).length>=2)){let t=e.type===`row`?`y`:`x`;r.push(`**${e.labels.join(`, `)}**: new ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps)`),e.labels.forEach(e=>i.add(e))}let a=e.filter(e=>!i.has(e.label));if(a.length>=2){let e={};for(let t of a){let n=Math.round(t.currentRect.x/5)*5;(e[n]??(e[n]=[])).push(t.label)}for(let[t,n]of Object.entries(e))n.length>=2&&r.push(`**${n.join(`, `)}**: shared left edge at x\u2248${t}`)}return r}function nm(e){if(typeof document>`u`)return{viewport:e,contentArea:null};let t=[],n=new Set,r=e=>{n.has(e)||e instanceof HTMLElement&&(e.hasAttribute(`data-feedback-toolbar`)||Up.has(e.tagName.toLowerCase())||(n.add(e),t.push(e)))},i=document.querySelector(`main`);i&&r(i);let a=document.querySelector(`[role='main']`);a&&r(a);for(let e of Array.from(document.body.children))if(r(e),e.children){for(let t of Array.from(e.children))if(r(t),t.children)for(let e of Array.from(t.children))r(e)}let o=null;for(let n of t){let t=n.getBoundingClientRect();if(t.height<50)continue;let r=getComputedStyle(n);if(r.maxWidth&&r.maxWidth!==`none`&&r.maxWidth!==`0px`){(!o||t.width<o.rect.width)&&(o={el:n,rect:t});continue}!o&&t.width<e.width-20&&t.width>100&&(o={el:n,rect:t})}if(o){let{el:t,rect:n}=o;return{viewport:e,contentArea:{width:Math.round(n.width),left:Math.round(n.left),right:Math.round(n.right),centerX:Math.round(n.left+n.width/2),selector:Op(t)}}}return{viewport:e,contentArea:null}}function rm(e){if(typeof document>`u`)return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),r={parentDisplay:n.display,parentSelector:Op(t.parentElement)};return n.display.includes(`flex`)&&(r.flexDirection=n.flexDirection),n.display.includes(`grid`)&&n.gridTemplateColumns!==`none`&&(r.gridCols=n.gridTemplateColumns),n.gap&&n.gap!==`normal`&&n.gap!==`0px`&&(r.gap=n.gap),r}function im(e,t){let n=t.contentArea,r=n?n.width:t.viewport.width,i=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),o=Math.round(e.x-i),s=Math.round(i+r-(e.x+e.width)),c=(e.width/r*100).toFixed(1),l=e.x+e.width/2,u=Math.abs(l-a)<20,d=e.width/r>.95,f=[];return d?f.push("`width: 100%` of container"):f.push(`left \`${o}px\` in container, right \`${s}px\`, width \`${c}%\` (\`${Math.round(e.width)}px\`)`),u&&!d&&f.push("centered — `margin-inline: auto`"),f.join(` — `)}function am(e){let{viewport:t,contentArea:n}=e,r=`### Reference Frame
`;if(r+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let e=n;r+=`- Content area: \`${e.width}px\` wide, left edge at \`x=${e.left}\`, right at \`x=${e.right}\` (\`${e.selector}\`)
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Horizontal position in container**: \`element.x - ${e.left}\` \u2192 use as \`margin-left\` or \`left\`
`,r+=`  - **Width as % of container**: \`element.width / ${e.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",r+=`  - **Centered**: if \`|element.centerX - ${e.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else r+=`- No distinct content container — elements positioned relative to full viewport
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return r+=`
`,r}function om(e){let t=rm(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function sm(e,t,n,r=`standard`){if(e.length===0)return``;let i=[...e].sort((e,t)=>Math.abs(e.y-t.y)<20?e.x-t.x:e.y-t.y),a=``;if(n?.blankCanvas?(a+=`## Wireframe: New Page

`,n.wireframePurpose&&(a+=`> **Purpose:** ${n.wireframePurpose}
>
`),a+=`> ${e.length} component${e.length===1?``:`s`} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):a+=`## Design Layout

> ${e.length} component${e.length===1?``:`s`} placed

`,r===`compact`)return a+=`### Components
`,i.forEach((e,t)=>{let n=Od[e.type]?.label||e.type;a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}),a;let o=nm(t);a+=am(o),a+=`### Components
`,i.forEach((e,t)=>{let n=Od[e.type]?.label||e.type,i={x:e.x,y:e.y,width:e.width,height:e.height};a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`;let s=Zp(qp(i),{includeLeftRight:r===`detailed`||r===`forensic`});for(let e of s)a+=`   - ${e}
`;let c=im(i,o);c&&(a+=`   - CSS: ${c}
`)}),a+=`
### Layout Analysis
`;let s=[];for(let e of i){let t=s.find(t=>Math.abs(t.y-e.y)<30);t?t.items.push(e):s.push({y:e.y,items:[e]})}if(s.sort((e,t)=>e.y-t.y),s.forEach((e,n)=>{e.items.sort((e,t)=>e.x-t.x);let r=e.items.map(e=>Od[e.type]?.label||e.type);if(e.items.length===1){let i=e.items[0].width>t.width*.8;a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r[0]}${i?` — full width`:``}
`}else a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r.join(` | `)} \u2014 ${e.items.length} items side by side
`}),r===`detailed`||r===`forensic`){a+=`
### Spacing & Gaps
`;for(let e=0;e<i.length-1;e++){let t=i[e],n=i[e+1],r=Od[t.type]?.label||t.type,o=Od[n.type]?.label||n.type,s=Math.round(n.y-(t.y+t.height)),c=Math.round(n.x-(t.x+t.width));Math.abs(t.y-n.y)<30?a+=`- ${r} \u2192 ${o}: \`${c}px\` horizontal gap
`:a+=`- ${r} \u2192 ${o}: \`${s}px\` vertical gap
`}if(r===`forensic`&&i.length>2){a+=`
### All Pairwise Gaps
`;for(let e=0;e<i.length;e++)for(let t=e+1;t<i.length;t++){let n=i[e],r=i[t],o=Od[n.type]?.label||n.type,s=Od[r.type]?.label||r.type,c=Math.round(r.y-(n.y+n.height)),l=Math.round(r.x-(n.x+n.width));a+=`- ${o} \u2194 ${s}: h=\`${l}px\` v=\`${c}px\`
`}}r===`forensic`&&(a+=`
### Z-Order (placement order)
`,e.forEach((e,t)=>{let n=Od[e.type]?.label||e.type;a+=`${t}. ${n} at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}))}a+=`
### Suggested Implementation
`;let c=i.some(e=>e.type===`navigation`),l=i.some(e=>e.type===`hero`),u=i.some(e=>e.type===`sidebar`),d=i.some(e=>e.type===`footer`),f=i.filter(e=>e.type===`card`),p=i.filter(e=>e.type===`form`),m=i.filter(e=>e.type===`table`),h=i.filter(e=>e.type===`modal`);if(c&&(a+=`- Top navigation bar with logo + nav links + CTA
`),l&&(a+=`- Hero section with heading, subtext, and call-to-action
`),u&&(a+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),f.length>1?a+=`- ${f.length}-column card grid \u2014 use CSS Grid or Flexbox
`:f.length===1&&(a+=`- Card component with image + content area
`),p.length>0&&(a+=`- ${p.length} form${p.length>1?`s`:``} \u2014 add proper labels, validation, and submit handling
`),m.length>0&&(a+=`- Data table — consider sortable columns and pagination
`),h.length>0&&(a+=`- Modal dialog — add overlay backdrop and focus trapping
`),d&&(a+=`- Multi-column footer with links
`),r===`detailed`||r===`forensic`){if(a+=`
### CSS Suggestions
`,u){let e=i.find(e=>e.type===`sidebar`);a+=`- \`display: grid; grid-template-columns: ${Math.round(e.width)}px 1fr;\`
`}if(f.length>1){let e=Math.round(f[0].width);a+=`- \`display: grid; grid-template-columns: repeat(${f.length}, ${e}px); gap: 16px;\`
`}c&&(a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return a}function cm(e,t=`standard`,n){let{sections:r}=e,i=[];for(let e of r){let n=e.originalRect,r=e.currentRect,a=Math.abs(n.x-r.x)>1||Math.abs(n.y-r.y)>1,o=Math.abs(n.width-r.width)>1||Math.abs(n.height-r.height)>1;if(!a&&!o){t===`forensic`&&i.push({section:e,posMoved:!1,sizeChanged:!1});continue}i.push({section:e,posMoved:a,sizeChanged:o})}if(i.length===0||t!==`forensic`&&i.every(e=>!e.posMoved&&!e.sizeChanged))return``;let a=`## Suggested Layout Changes

`,o=nm({width:n?n.width:typeof window<`u`?window.innerWidth:0,height:n?n.height:typeof window<`u`?window.innerHeight:0});t!==`compact`&&(a+=am(o)),t===`forensic`&&(a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${r.length}

`);let s=e=>r.map(t=>({label:t.label,selector:t.selector,rect:e===`original`?t.originalRect:t.currentRect}));a+=`**Changes:**
`;for(let{section:e,posMoved:n,sizeChanged:r}of i){let i=e.originalRect,c=e.currentRect;if(!n&&!r){a+=`- ${e.label} \u2014 unchanged at (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(t===`compact`){n&&r?a+=`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`:n?a+=`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)})
`:a+=`- Suggested: resize **${e.label}** to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(n&&r?a+=`- Suggested: move and resize **${e.label}**
`:n?a+=`- Suggested: move **${e.label}**
`:a+=`- Suggested: resize **${e.label}** from ${Math.round(i.width)}\xD7${Math.round(i.height)}px to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`,n){let e=qp(i,s(`original`)),n=qp(c,s(`current`)),l=r?{width:i.width,height:i.height}:void 0;a+=`  - Currently ${Qp(e,{x:i.x,y:i.y},l)}
`;let u=r?{width:c.width,height:c.height}:void 0,d=`at (${Math.round(c.x)}, ${Math.round(c.y)})`,f=u?`, ${Math.round(u.width)}\xD7${Math.round(u.height)}px`:``,p=Zp(n,{includeLeftRight:t===`detailed`||t===`forensic`});if(p.length>0){a+=`  - Suggested position ${d}${f}: ${p[0]}
`;for(let e=1;e<p.length;e++)a+=`    ${p[e]}
`}else a+=`  - Suggested position ${d}${f}
`;let m=im(c,o);m&&(a+=`  - CSS: ${m}
`)}let l=om(e.selector);if(l&&(a+=`  - ${l}
`),a+=`  - Selector: \`${e.selector}\`
`,t===`detailed`||t===`forensic`){let n=e.className?`${e.tagName}.${e.className.split(` `)[0]}`:e.tagName;n!==e.selector&&(a+=`  - Element: \`${n}\`
`),e.role&&(a+=`  - Role: \`${e.role}\`
`),t===`forensic`&&e.textSnippet&&(a+=`  - Text: "${e.textSnippet}"
`)}t===`forensic`&&(a+=`  - Original rect: \`{ x: ${Math.round(i.x)}, y: ${Math.round(i.y)}, w: ${Math.round(i.width)}, h: ${Math.round(i.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(c.x)}, y: ${Math.round(c.y)}, w: ${Math.round(c.width)}, h: ${Math.round(c.height)} }\`
`)}if(t!==`compact`){let e=tm(i.filter(e=>e.posMoved).map(e=>({label:e.section.label,originalRect:e.section.originalRect,currentRect:e.section.currentRect})));if(e.length>0){a+=`
### Layout Summary
`;for(let t of e)a+=`- ${t}
`}}if(t!==`compact`&&r.length>1){a+=`
### All Sections (current positions)
`;let e=[...r].sort((e,t)=>Math.abs(e.currentRect.y-t.currentRect.y)<20?e.currentRect.x-t.currentRect.x:e.currentRect.y-t.currentRect.y);for(let t of e){let e=t.currentRect,n=Math.abs(e.x-t.originalRect.x)>1||Math.abs(e.y-t.originalRect.y)>1||Math.abs(e.width-t.originalRect.width)>1||Math.abs(e.height-t.originalRect.height)>1;a+=`- ${t.label}: \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`${n?` ← suggested`:``}
`}}return a}var lm=`feedback-annotations-`,um=7;function dm(e){return`${lm}${e}`}function fm(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(dm(e));if(!t)return[];let n=JSON.parse(t),r=Date.now()-um*24*60*60*1e3;return n.filter(e=>!e.timestamp||e.timestamp>r)}catch{return[]}}function pm(e,t){if(!(typeof window>`u`))try{localStorage.setItem(dm(e),JSON.stringify(t))}catch{}}function mm(){let e=new Map;if(typeof window>`u`)return e;try{let t=Date.now()-um*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let r=localStorage.key(n);if(r?.startsWith(lm)){let n=r.slice(lm.length),i=localStorage.getItem(r);if(i){let r=JSON.parse(i).filter(e=>!e.timestamp||e.timestamp>t);r.length>0&&e.set(n,r)}}}}catch{}return e}function hm(e,t,n){pm(e,t.map(e=>({...e,_syncedTo:n})))}var gm=`agentation-design-`;function _m(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(`${gm}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function vm(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${gm}${e}`,JSON.stringify(t))}catch{}}function ym(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${gm}${e}`)}catch{}}var bm=`agentation-rearrange-`;function xm(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${bm}${e}`);return t?JSON.parse(t):null}catch{return null}}function Sm(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${bm}${e}`,JSON.stringify(t))}catch{}}function Cm(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${bm}${e}`)}catch{}}var wm=`agentation-wireframe-`;function Tm(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${wm}${e}`);return t?JSON.parse(t):null}catch{return null}}function Em(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${wm}${e}`,JSON.stringify(t))}catch{}}function Dm(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${wm}${e}`)}catch{}}var Om=`agentation-session-`;function km(e){return`${Om}${e}`}function Am(e){if(typeof window>`u`)return null;try{return localStorage.getItem(km(e))}catch{return null}}function jm(e,t){if(!(typeof window>`u`))try{localStorage.setItem(km(e),t)}catch{}}function Mm(e){if(!(typeof window>`u`))try{localStorage.removeItem(km(e))}catch{}}var Nm=`${Om}toolbar-hidden`;function Pm(){if(typeof window>`u`)return!1;try{return sessionStorage.getItem(Nm)===`1`}catch{return!1}}function Fm(e){if(!(typeof window>`u`))try{e?sessionStorage.setItem(Nm,`1`):sessionStorage.removeItem(Nm)}catch{}}async function Im(e,t){let n=await fetch(`${e}/sessions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:t})});if(!n.ok)throw Error(`Failed to create session: ${n.status}`);return n.json()}async function Lm(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw Error(`Failed to get session: ${n.status}`);return n.json()}async function Rm(e,t,n){let r=await fetch(`${e}/sessions/${t}/annotations`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to sync annotation: ${r.status}`);return r.json()}async function zm(e,t,n){let r=await fetch(`${e}/annotations/${t}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to update annotation: ${r.status}`);return r.json()}async function Bm(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:`DELETE`});if(!n.ok)throw Error(`Failed to delete annotation: ${n.status}`)}var Vm={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Hm=new Set([`Component`,`PureComponent`,`Fragment`,`Suspense`,`Profiler`,`StrictMode`,`Routes`,`Route`,`Outlet`,`Root`,`ErrorBoundaryHandler`,`HotReload`,`Hot`]),Um=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Wm=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Gm(e){let t=e?.mode??`filtered`,n=Hm;if(e?.skipExact){let t=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...Hm,...t])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...Um,...e.skipPatterns]:Um,userPatterns:e?.userPatterns??Wm,filter:e?.filter}}function Km(e){return e.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/([A-Z])([A-Z][a-z])/g,`$1-$2`).toLowerCase()}function qm(e,t=10){let n=new Set,r=e,i=0;for(;r&&i<t;)r.className&&typeof r.className==`string`&&r.className.split(/\s+/).forEach(e=>{if(e.length>1){let t=e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``).toLowerCase();t.length>1&&n.add(t)}}),r=r.parentElement,i++;return n}function Jm(e,t){let n=Km(e);for(let e of t){if(e===n)return!0;let t=n.split(`-`).filter(e=>e.length>2),r=e.split(`-`).filter(e=>e.length>2);for(let e of t)for(let t of r)if(e===t||e.includes(t)||t.includes(e))return!0}return!1}function Ym(e,t,n,r){if(n.filter)return n.filter(e,t);switch(n.mode){case`all`:return!0;case`filtered`:return!(n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e)));case`smart`:return n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e))?!1:!!(r&&Jm(e,r)||n.userPatterns.some(t=>t.test(e)));default:return!0}}var Xm=null,Zm=new WeakMap;function Qm(e){return Object.keys(e).some(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`)||e.startsWith(`__reactProps$`))}function $m(){if(Xm!==null)return Xm;if(typeof document>`u`)return!1;if(document.body&&Qm(document.body))return Xm=!0,!0;for(let e of[`#root`,`#app`,`#__next`,`[data-reactroot]`]){let t=document.querySelector(e);if(t&&Qm(t))return Xm=!0,!0}if(document.body){for(let e of document.body.children)if(Qm(e))return Xm=!0,!0}return Xm=!1,!1}var eh={map:Zm};function th(e){return Object.keys(e).find(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`))||null}function nh(e){let t=th(e);return t?e[t]:null}function rh(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function ih(e){let{tag:t,type:n,elementType:r}=e;if(t===Vm.HostComponent||t===Vm.HostText||t===Vm.HostHoistable||t===Vm.HostSingleton||t===Vm.Fragment||t===Vm.Mode||t===Vm.Profiler||t===Vm.DehydratedFragment||t===Vm.HostRoot||t===Vm.HostPortal||t===Vm.ScopeComponent||t===Vm.OffscreenComponent||t===Vm.LegacyHiddenComponent||t===Vm.CacheComponent||t===Vm.TracingMarkerComponent||t===Vm.Throw||t===Vm.ViewTransitionComponent||t===Vm.ActivityComponent)return null;if(t===Vm.ForwardRef){let e=r;if(e?.render){let t=rh(e.render);if(t)return t}return e?.displayName?e.displayName:rh(n)}if(t===Vm.MemoComponent||t===Vm.SimpleMemoComponent){let e=r;if(e?.type){let t=rh(e.type);if(t)return t}return e?.displayName?e.displayName:rh(n)}if(t===Vm.ContextProvider){let e=n;return e?._context?.displayName?`${e._context.displayName}.Provider`:null}if(t===Vm.ContextConsumer){let e=n;return e?.displayName?`${e.displayName}.Consumer`:null}if(t===Vm.LazyComponent){let e=r;return e?._status===1&&e._result?rh(e._result):null}return t===Vm.SuspenseComponent||t===Vm.SuspenseListComponent?null:t===Vm.IncompleteClassComponent||t===Vm.IncompleteFunctionComponent||t===Vm.FunctionComponent||t===Vm.ClassComponent||t===Vm.IndeterminateComponent?rh(n):null}function ah(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function oh(e,t){let n=Gm(t),r=n.mode===`all`;if(r){let t=eh.map.get(e);if(t!==void 0)return t}if(!$m()){let t={path:null,components:[]};return r&&eh.map.set(e,t),t}let i=n.mode===`smart`?qm(e):void 0,a=[];try{let t=nh(e),r=0;for(;t&&r<n.maxDepth&&a.length<n.maxComponents;){let e=ih(t);e&&!ah(e)&&Ym(e,r,n,i)&&a.push(e),t=t.return,r++}}catch{let t={path:null,components:[]};return r&&eh.map.set(e,t),t}if(a.length===0){let t={path:null,components:[]};return r&&eh.map.set(e,t),t}let o={path:a.slice().reverse().map(e=>`<${e}>`).join(` `),components:a};return r&&eh.map.set(e,o),o}var sh={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function ch(e){if(!e||typeof e!=`object`)return null;let t=Object.keys(e),n=t.find(e=>e.startsWith(`__reactFiber$`));if(n)return e[n]||null;let r=t.find(e=>e.startsWith(`__reactInternalInstance$`));if(r)return e[r]||null;let i=t.find(t=>{if(!t.startsWith(`__react`))return!1;let n=e[t];return n&&typeof n==`object`&&`_debugSource`in n});return i&&e[i]||null}function lh(e){if(!e.type||typeof e.type==`string`)return null;if(typeof e.type==`object`||typeof e.type==`function`){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function uh(e,t=50){let n=e,r=0;for(;n&&r<t;){if(n._debugSource)return{source:n._debugSource,componentName:lh(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:lh(n._debugOwner)};n=n.return,r++}return null}function dh(e){let t=e,n=0;for(;t&&n<50;){let e=t;for(let n of[`_debugSource`,`__source`,`_source`,`debugSource`]){let r=e[n];if(r&&typeof r==`object`&&`fileName`in r)return{source:r,componentName:lh(t)}}if(t.memoizedProps){let e=t.memoizedProps;if(e.__source&&typeof e.__source==`object`){let n=e.__source;if(n.fileName&&n.lineNumber)return{source:{fileName:n.fileName,lineNumber:n.lineNumber,columnNumber:n.columnNumber},componentName:lh(t)}}}t=t.return,n++}return null}var fh=new Map;function ph(e){let t=e.tag,n=e.type,r=e.elementType;if(typeof n==`string`||n==null||typeof n==`function`&&n.prototype?.isReactComponent)return null;if((t===sh.FunctionComponent||t===sh.IndeterminateComponent)&&typeof n==`function`)return n;if(t===sh.ForwardRef&&r){let e=r.render;if(typeof e==`function`)return e}if((t===sh.MemoComponent||t===sh.SimpleMemoComponent)&&r){let e=r.type;if(typeof e==`function`)return e}return typeof n==`function`?n:null}function mh(){let e=b.default,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&`H`in t)return{get:()=>t.H,set:e=>{t.H=e}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let e=n.ReactCurrentDispatcher;if(e&&`current`in e)return{get:()=>e.current,set:t=>{e.current=t}}}return null}function hh(e){let t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],r=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,i=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let e of t){let t=e.trim();if(!t||n.some(e=>e.test(t)))continue;let a=r.exec(t)||i.exec(t);if(a)return{fileName:a[1],line:parseInt(a[2],10),column:parseInt(a[3],10)}}return null}function gh(e){let t=e;return t=t.replace(/[?#].*$/,``),t=t.replace(/^turbopack:\/\/\/\[project\]\//,``),t=t.replace(/^webpack-internal:\/\/\/\.\//,``),t=t.replace(/^webpack-internal:\/\/\//,``),t=t.replace(/^webpack:\/\/\/\.\//,``),t=t.replace(/^webpack:\/\/\//,``),t=t.replace(/^turbopack:\/\/\//,``),t=t.replace(/^https?:\/\/[^/]+\//,``),t=t.replace(/^file:\/\/\//,`/`),t=t.replace(/^\([^)]+\)\/\.\//,``),t=t.replace(/^\.\//,``),t}function _h(e){let t=ph(e);if(!t)return null;if(fh.has(t))return fh.get(t);let n=mh();if(!n)return fh.set(t,null),null;let r=n.get(),i=null;try{let r=new Proxy({},{get(){throw Error(`probe`)}});n.set(r);try{t({})}catch(t){if(t instanceof Error&&t.message===`probe`&&t.stack){let n=hh(t.stack);n&&(i={fileName:gh(n.fileName),lineNumber:n.line,columnNumber:n.column,componentName:lh(e)||void 0})}}}finally{n.set(r)}return fh.set(t,i),i}function vh(e,t=15){let n=e,r=0;for(;n&&r<t;){let e=_h(n);if(e)return e;n=n.return,r++}return null}function yh(e){let t=ch(e);if(!t)return{found:!1,reason:`no-fiber`,isReactApp:!1,isProduction:!1};let n=uh(t);if(n||=dh(t),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let r=vh(t);return r?{found:!0,source:r,isReactApp:!0,isProduction:!1}:{found:!1,reason:`no-debug-source`,isReactApp:!0,isProduction:!1}}function bh(e,t=`path`){let{fileName:n,lineNumber:r,columnNumber:i}=e,a=`${n}:${r}`;return i!==void 0&&(a+=`:${i}`),t===`vscode`?`vscode://file${n.startsWith(`/`)?``:`/`}${a}`:a}function xh(e,t=10){let n=e,r=0;for(;n&&r<t;){let e=yh(n);if(e.found)return e;n=n.parentElement,r++}return yh(e)}var Sh=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,Ch={toolbar:`styles-module__toolbar___wNsdK`,markersLayer:`styles-module__markersLayer___-25j1`,fixedMarkersLayer:`styles-module__fixedMarkersLayer___ffyX6`,controlsContent:`styles-module__controlsContent___9GJWU`,disableTransitions:`styles-module__disableTransitions___EopxO`,toolbarContainer:`styles-module__toolbarContainer___dIhma`,entrance:`styles-module__entrance___sgHd8`,toolbarEnter:`styles-module__toolbarEnter___u8RRu`,hiding:`styles-module__hiding___1td44`,toolbarHide:`styles-module__toolbarHide___y8kaT`,collapsed:`styles-module__collapsed___Rydsn`,expanded:`styles-module__expanded___ofKPx`,serverConnected:`styles-module__serverConnected___Gfbou`,toggleContent:`styles-module__toggleContent___0yfyP`,visible:`styles-module__visible___KHwEW`,hidden:`styles-module__hidden___Ae8H4`,badge:`styles-module__badge___2XsgF`,fadeOut:`styles-module__fadeOut___6Ut6-`,badgeEnter:`styles-module__badgeEnter___mVQLj`,controlButton:`styles-module__controlButton___8Q0jc`,statusShowing:`styles-module__statusShowing___te6iu`,buttonBadge:`styles-module__buttonBadge___NeFWb`,mcpIndicator:`styles-module__mcpIndicator___zGJeL`,connected:`styles-module__connected___7c28g`,mcpIndicatorPulseConnected:`styles-module__mcpIndicatorPulseConnected___EDodZ`,connecting:`styles-module__connecting___uo-CW`,mcpIndicatorPulseConnecting:`styles-module__mcpIndicatorPulseConnecting___cCYte`,connectionIndicatorWrapper:`styles-module__connectionIndicatorWrapper___L-e-3`,connectionIndicator:`styles-module__connectionIndicator___afk9p`,connectionIndicatorVisible:`styles-module__connectionIndicatorVisible___C-i5B`,connectionIndicatorConnected:`styles-module__connectionIndicatorConnected___IY8pR`,connectionPulse:`styles-module__connectionPulse___-Zycw`,connectionIndicatorDisconnected:`styles-module__connectionIndicatorDisconnected___kmpaZ`,connectionIndicatorConnecting:`styles-module__connectionIndicatorConnecting___QmSLH`,buttonWrapper:`styles-module__buttonWrapper___rBcdv`,buttonTooltip:`styles-module__buttonTooltip___Burd9`,tooltipsInSession:`styles-module__tooltipsInSession___-0lHH`,sendButtonWrapper:`styles-module__sendButtonWrapper___UUxG6`,sendButtonVisible:`styles-module__sendButtonVisible___WPSQU`,shortcut:`styles-module__shortcut___lEAQk`,tooltipBelow:`styles-module__tooltipBelow___m6ats`,tooltipsHidden:`styles-module__tooltipsHidden___VtLJG`,tooltipVisible:`styles-module__tooltipVisible___0jcCv`,buttonWrapperAlignLeft:`styles-module__buttonWrapperAlignLeft___myzIp`,buttonWrapperAlignRight:`styles-module__buttonWrapperAlignRight___HCQFR`,divider:`styles-module__divider___c--s1`,overlay:`styles-module__overlay___Q1O9y`,hoverHighlight:`styles-module__hoverHighlight___ogakW`,enter:`styles-module__enter___WFIki`,hoverHighlightIn:`styles-module__hoverHighlightIn___6WYHY`,multiSelectOutline:`styles-module__multiSelectOutline___cSJ-m`,fadeIn:`styles-module__fadeIn___b9qmf`,exit:`styles-module__exit___fyOJ0`,singleSelectOutline:`styles-module__singleSelectOutline___QhX-O`,hoverTooltip:`styles-module__hoverTooltip___bvLk7`,hoverTooltipIn:`styles-module__hoverTooltipIn___FYGQx`,hoverReactPath:`styles-module__hoverReactPath___gx1IJ`,hoverElementName:`styles-module__hoverElementName___QMLMl`,marker:`styles-module__marker___6sQrs`,clearing:`styles-module__clearing___FQ--7`,markerIn:`styles-module__markerIn___5FaAP`,markerOut:`styles-module__markerOut___GU5jX`,pending:`styles-module__pending___2IHLC`,fixed:`styles-module__fixed___dBMHC`,multiSelect:`styles-module__multiSelect___YWiuz`,hovered:`styles-module__hovered___ZgXIy`,renumber:`styles-module__renumber___nCTxD`,renumberRoll:`styles-module__renumberRoll___Wgbq3`,markerTooltip:`styles-module__markerTooltip___aLJID`,tooltipIn:`styles-module__tooltipIn___0N31w`,markerQuote:`styles-module__markerQuote___FHmrz`,markerNote:`styles-module__markerNote___QkrrS`,markerHint:`styles-module__markerHint___2iF-6`,settingsPanel:`styles-module__settingsPanel___OxX3Y`,settingsHeader:`styles-module__settingsHeader___pwDY9`,settingsBrand:`styles-module__settingsBrand___0gJeM`,settingsBrandSlash:`styles-module__settingsBrandSlash___uTG18`,settingsVersion:`styles-module__settingsVersion___TUcFq`,settingsSection:`styles-module__settingsSection___m-YM2`,settingsLabel:`styles-module__settingsLabel___8UjfX`,cycleButton:`styles-module__cycleButton___FMKfw`,cycleDot:`styles-module__cycleDot___nPgLY`,dropdownButton:`styles-module__dropdownButton___16NPz`,toggleLabel:`styles-module__toggleLabel___Xm8Aa`,customCheckbox:`styles-module__customCheckbox___U39ax`,sliderLabel:`styles-module__sliderLabel___U8sPr`,slider:`styles-module__slider___GLdxp`,themeToggle:`styles-module__themeToggle___2rUjA`,settingsOption:`styles-module__settingsOption___UNa12`,selected:`styles-module__selected___OwRqP`,settingsPanelContainer:`styles-module__settingsPanelContainer___Xksv8`,settingsPage:`styles-module__settingsPage___6YfHH`,slideLeft:`styles-module__slideLeft___Ps01J`,automationsPage:`styles-module__automationsPage___uvCq6`,slideIn:`styles-module__slideIn___4-qXe`,settingsNavLink:`styles-module__settingsNavLink___wCzJt`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___ZWwhj`,mcpNavIndicator:`styles-module__mcpNavIndicator___cl9pO`,mcpPulse:`styles-module__mcpPulse___uNggr`,settingsBackButton:`styles-module__settingsBackButton___bIe2j`,automationHeader:`styles-module__automationHeader___InP0r`,automationDescription:`styles-module__automationDescription___NKlmo`,learnMoreLink:`styles-module__learnMoreLink___8xv-x`,autoSendRow:`styles-module__autoSendRow___UblX5`,autoSendLabel:`styles-module__autoSendLabel___icDc2`,active:`styles-module__active___-zoN6`,webhookUrlInput:`styles-module__webhookUrlInput___2375C`,settingsSectionExtraPadding:`styles-module__settingsSectionExtraPadding___jdhFV`,settingsSectionGrow:`styles-module__settingsSectionGrow___h-5HZ`,settingsRow:`styles-module__settingsRow___3sdhc`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___zA0Sp`,dropdownContainer:`styles-module__dropdownContainer___BVnxe`,settingsRowDisabled:`styles-module__settingsRowDisabled___EgS0V`,toggleSwitch:`styles-module__toggleSwitch___l4Ygm`,cycleButtonText:`styles-module__cycleButtonText___fD1LR`,cycleTextIn:`styles-module__cycleTextIn___Q6zJf`,cycleDots:`styles-module__cycleDots___LWuoQ`,dropdownMenu:`styles-module__dropdownMenu___k73ER`,scaleIn:`styles-module__scaleIn___c-r1K`,dropdownItem:`styles-module__dropdownItem___ylsLj`,settingsLabelMarker:`styles-module__settingsLabelMarker___ewdtV`,settingsOptions:`styles-module__settingsOptions___LyrBA`,sliderContainer:`styles-module__sliderContainer___ducXj`,sliderLabels:`styles-module__sliderLabels___FhLDB`,colorOptions:`styles-module__colorOptions___iHCNX`,colorOption:`styles-module__colorOption___IodiY`,colorOptionRing:`styles-module__colorOptionRing___U2xpo`,settingsToggle:`styles-module__settingsToggle___fBrFn`,settingsToggleMarginBottom:`styles-module__settingsToggleMarginBottom___MZUyF`,checked:`styles-module__checked___mnZLo`,toggleSlider:`styles-module__toggleSlider___wprIn`,disabled:`styles-module__disabled___332Jw`,mcpStatusDot:`styles-module__mcpStatusDot___ibgkc`,disconnected:`styles-module__disconnected___cHPxR`,mcpPulseError:`styles-module__mcpPulseError___fov9B`,drawCanvas:`styles-module__drawCanvas___7cG9U`,dragSelection:`styles-module__dragSelection___kZLq2`,dragCount:`styles-module__dragCount___KM90j`,highlightsContainer:`styles-module__highlightsContainer___-0xzG`,selectedElementHighlight:`styles-module__selectedElementHighlight___fyVlI`,scaleOut:`styles-module__scaleOut___Wctwz`,slideUp:`styles-module__slideUp___kgD36`,slideDown:`styles-module__slideDown___zcdje`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-page-toolbar-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-page-toolbar-css-styles`,document.head.appendChild(e)),e.textContent=Sh}var Q=Ch,wh=[{value:`compact`,label:`Compact`},{value:`standard`,label:`Standard`},{value:`detailed`,label:`Detailed`},{value:`forensic`,label:`Forensic`}];function Th(e,t,n=`standard`){if(e.length===0)return``;let r=typeof window<`u`?`${window.innerWidth}\xD7${window.innerHeight}`:`unknown`,i=`## Page Feedback: ${t}
`;return n===`forensic`?(i+=`
**Environment:**
`,i+=`- Viewport: ${r}
`,typeof window<`u`&&(i+=`- URL: ${window.location.href}
`,i+=`- User Agent: ${navigator.userAgent}
`,i+=`- Timestamp: ${new Date().toISOString()}
`,i+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),i+=`
---
`):n!==`compact`&&(i+=`**Viewport:** ${r}
`),i+=`
`,e.forEach((e,t)=>{n===`compact`?(i+=`${t+1}. **${e.element}**${e.sourceFile?` (${e.sourceFile})`:``}: ${e.comment}`,e.selectedText&&(i+=` (re: "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}")`),i+=`
`):n===`forensic`?(i+=`### ${t+1}. ${e.element}
`,e.isMultiSelect&&e.fullPath&&(i+=`*Forensic data shown for first element of selection*
`),e.fullPath&&(i+=`**Full DOM Path:** ${e.fullPath}
`),e.cssClasses&&(i+=`**CSS Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** x:${Math.round(e.boundingBox.x)}, y:${Math.round(e.boundingBox.y)} (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`),i+=`**Annotation at:** ${e.x.toFixed(1)}% from left, ${Math.round(e.y)}px from top
`,e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),e.computedStyles&&(i+=`**Computed Styles:** ${e.computedStyles}
`),e.accessibility&&(i+=`**Accessibility:** ${e.accessibility}
`),e.nearbyElements&&(i+=`**Nearby Elements:** ${e.nearbyElements}
`),e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),i+=`**Feedback:** ${e.comment}

`):(i+=`### ${t+1}. ${e.element}
`,i+=`**Location:** ${e.elementPath}
`,e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),n===`detailed`&&(e.cssClasses&&(i+=`**Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** ${Math.round(e.boundingBox.x)}px, ${Math.round(e.boundingBox.y)}px (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`)),e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),n===`detailed`&&e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),i+=`**Feedback:** ${e.comment}

`)}),i.trim()}var Eh=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,Dh={marker:`styles-module__marker___9CKF7`,enter:`styles-module__enter___8kI3q`,exit:`styles-module__exit___KBdR3`,clearing:`styles-module__clearing___8rM7K`,markerIn:`styles-module__markerIn___x4G8D`,markerOut:`styles-module__markerOut___6VhQN`,pending:`styles-module__pending___BiY-U`,fixed:`styles-module__fixed___aKrQO`,multiSelect:`styles-module__multiSelect___CPfTC`,hovered:`styles-module__hovered___-mg2N`,renumber:`styles-module__renumber___16lvD`,renumberRoll:`styles-module__renumberRoll___akV9B`,markerTooltip:`styles-module__markerTooltip___-VUm-`,tooltipIn:`styles-module__tooltipIn___aJslQ`,markerQuote:`styles-module__markerQuote___tQake`,markerNote:`styles-module__markerNote___Rh4eI`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-marker-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-marker-styles`,document.head.appendChild(e)),e.textContent=Eh}var Oh=Dh;function kh({annotation:e,globalIndex:t,layerIndex:n,layerSize:r,isExiting:i,isClearing:a,isAnimated:o,isHovered:s,isDeleting:c,isEditingAny:l,renumberFrom:u,markerClickBehavior:d,tooltipStyle:f,onHoverEnter:p,onHoverLeave:m,onClick:h,onContextMenu:g}){let _=(s||c)&&!l,v=_&&d===`delete`,y=e.isMultiSelect,b=y?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,x=i?Oh.exit:a?Oh.clearing:o?``:Oh.enter,S=i?`${(r-1-n)*20}ms`:`${n*20}ms`;return(0,V.jsxs)(`div`,{className:`${Oh.marker} ${y?Oh.multiSelect:``} ${x} ${v?Oh.hovered:``}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:v?void 0:b,animationDelay:S},onMouseEnter:()=>p(e),onMouseLeave:m,onClick:t=>{t.stopPropagation(),i||h(e)},onContextMenu:g?t=>{d===`delete`&&(t.preventDefault(),t.stopPropagation(),i||g(e))}:void 0,children:[_?v?(0,V.jsx)(rd,{size:y?18:16}):(0,V.jsx)(sd,{size:16}):(0,V.jsx)(`span`,{className:u!==null&&t>=u?Oh.renumber:void 0,children:t+1}),s&&!l&&(0,V.jsxs)(`div`,{className:`${Oh.markerTooltip} ${Oh.enter}`,style:f,children:[(0,V.jsxs)(`span`,{className:Oh.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}"`]}),(0,V.jsx)(`span`,{className:Oh.markerNote,children:e.comment})]})]})}function Ah({x:e,y:t,isMultiSelect:n,isExiting:r}){return(0,V.jsx)(`div`,{className:`${Oh.marker} ${Oh.pending} ${n?Oh.multiSelect:``} ${r?Oh.exit:Oh.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?`var(--agentation-color-green)`:`var(--agentation-color-accent)`},children:(0,V.jsx)(Ju,{size:12})})}function jh({annotation:e,fixed:t}){let n=e.isMultiSelect;return(0,V.jsx)(`div`,{className:`${Oh.marker} ${t?Oh.fixed:``} ${Oh.hovered} ${n?Oh.multiSelect:``} ${Oh.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:(0,V.jsx)(rd,{size:n?12:10})})}var Mh=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,Nh={switchContainer:`styles-module__switchContainer___Ka-AB`,switchInput:`styles-module__switchInput___kYDSD`,switchThumb:`styles-module__switchThumb___4sCPH`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-switch-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-switch-styles`,document.head.appendChild(e)),e.textContent=Mh}var Ph=Nh,Fh=({className:e=``,...t})=>(0,V.jsxs)(`div`,{className:`${Ph.switchContainer} ${e}`,children:[(0,V.jsx)(`input`,{className:Ph.switchInput,type:`checkbox`,...t}),(0,V.jsx)(`div`,{className:Ph.switchThumb})]}),Ih=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Lh={checkboxContainer:`styles-module__checkboxContainer___joqZk`,checkboxInput:`styles-module__checkboxInput___ECzzO`,checkboxCheck:`styles-module__checkboxCheck___fUXpr`,checkboxCheckPath:`styles-module__checkboxCheckPath___cDyh8`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-styles`,document.head.appendChild(e)),e.textContent=Ih}var Rh=Lh,zh=({className:e=``,...t})=>(0,V.jsxs)(`div`,{className:`${Rh.checkboxContainer} ${e}`,children:[(0,V.jsx)(`input`,{className:Rh.checkboxInput,type:`checkbox`,...t}),(0,V.jsx)(`svg`,{className:Rh.checkboxCheck,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,V.jsx)(`path`,{className:Rh.checkboxCheckPath,d:`M3.94 7L6.13 9.19L10.5 4.81`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),Bh=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,Vh={container:`styles-module__container___w8eAF`,label:`styles-module__label___J5mxE`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-field-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-field-styles`,document.head.appendChild(e)),e.textContent=Bh}var Hh=Vh,Uh=({className:e=``,label:t,tooltip:n,checked:r,onChange:i,...a})=>{let o=(0,b.useId)();return(0,V.jsxs)(`div`,{className:`${Hh.container} ${e}`,...a,children:[(0,V.jsx)(zh,{id:o,onChange:i,checked:r}),(0,V.jsx)(`label`,{className:Hh.label,htmlFor:o,children:t}),n&&(0,V.jsx)(Ed,{content:n})]})},Wh=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,Gh={settingsPanel:`styles-module__settingsPanel___qNkn-`,settingsHeader:`styles-module__settingsHeader___Fn1DP`,settingsBrand:`styles-module__settingsBrand___OoKlM`,settingsBrandSlash:`styles-module__settingsBrandSlash___Q-AU9`,settingsVersion:`styles-module__settingsVersion___rXmL9`,settingsSection:`styles-module__settingsSection___n5V-4`,settingsLabel:`styles-module__settingsLabel___VCVOQ`,cycleButton:`styles-module__cycleButton___XMBx3`,cycleDot:`styles-module__cycleDot___zgSXY`,dropdownButton:`styles-module__dropdownButton___mKHe8`,sliderLabel:`styles-module__sliderLabel___6K5v1`,slider:`styles-module__slider___v5z-c`,themeToggle:`styles-module__themeToggle___3imlT`,enter:`styles-module__enter___wginS`,exit:`styles-module__exit___A4iJc`,settingsOption:`styles-module__settingsOption___JoyH-`,selected:`styles-module__selected___k1-Vq`,settingsPanelContainer:`styles-module__settingsPanelContainer___5it-H`,settingsPage:`styles-module__settingsPage___BMn-3`,slideLeft:`styles-module__slideLeft___qUvW4`,automationsPage:`styles-module__automationsPage___N7By0`,slideIn:`styles-module__slideIn___uXDSu`,themeIconWrapper:`styles-module__themeIconWrapper___pyaYa`,themeIcon:`styles-module__themeIcon___w7lAm`,themeIconIn:`styles-module__themeIconIn___qUWMV`,settingsSectionGrow:`styles-module__settingsSectionGrow___eZTRw`,settingsRow:`styles-module__settingsRow___y-tDE`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___uLpGb`,settingsRowDisabled:`styles-module__settingsRowDisabled___ydl3Q`,cycleButtonText:`styles-module__cycleButtonText___mbbnD`,cycleTextIn:`styles-module__cycleTextIn___VBNTi`,cycleDots:`styles-module__cycleDots___ehp6i`,active:`styles-module__active___dpAhM`,colorOptions:`styles-module__colorOptions___pbxZx`,colorOption:`styles-module__colorOption___Co955`,settingsNavLink:`styles-module__settingsNavLink___uYIwM`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___XBUzC`,settingsBackButton:`styles-module__settingsBackButton___fflll`,automationHeader:`styles-module__automationHeader___Avra9`,automationDescription:`styles-module__automationDescription___vFTmJ`,learnMoreLink:`styles-module__learnMoreLink___cG7OI`,autoSendContainer:`styles-module__autoSendContainer___VpkXk`,autoSendLabel:`styles-module__autoSendLabel___ngNdC`,disabled:`styles-module__disabled___9AZYS`,mcpStatusDot:`styles-module__mcpStatusDot___8AMxP`,connecting:`styles-module__connecting___QEO1r`,mcpPulse:`styles-module__mcpPulse___5Q3Jj`,connected:`styles-module__connected___WyFkx`,disconnected:`styles-module__disconnected___mvmvQ`,mcpPulseError:`styles-module__mcpPulseError___VHxhx`,mcpNavIndicator:`styles-module__mcpNavIndicator___auBHI`,webhookUrlInput:`styles-module__webhookUrlInput___WDDDC`,checkboxField:`styles-module__checkboxField___ZrSqv`,divider:`styles-module__divider___h6Yux`,scaleIn:`styles-module__scaleIn___QpQ8E`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-settings-panel-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-settings-panel-styles`,document.head.appendChild(e)),e.textContent=Wh}var $=Gh;function Kh({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:r,isDevMode:i,connectionStatus:a,endpoint:o,isVisible:s,toolbarNearBottom:c,settingsPage:l,onSettingsPageChange:u,onHideToolbar:d}){return(0,V.jsx)(`div`,{className:`${$.settingsPanel} ${s?$.enter:$.exit}`,style:c?{bottom:`auto`,top:`calc(100% + 0.5rem)`}:void 0,"data-agentation-settings-panel":!0,children:(0,V.jsxs)(`div`,{className:$.settingsPanelContainer,children:[(0,V.jsxs)(`div`,{className:`${$.settingsPage} ${l===`automations`?$.slideLeft:``}`,children:[(0,V.jsxs)(`div`,{className:$.settingsHeader,children:[(0,V.jsx)(`a`,{className:$.settingsBrand,href:`https://agentation.com`,target:`_blank`,rel:`noopener noreferrer`,children:(0,V.jsx)(`svg`,{width:`72`,height:`16`,viewBox:`0 0 676 151`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,V.jsx)(`path`,{d:`M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z`,fill:`currentColor`})})}),(0,V.jsxs)(`p`,{className:$.settingsVersion,children:[`v`,`3.0.2`]}),(0,V.jsx)(`button`,{className:$.themeToggle,onClick:r,title:n?`Switch to light mode`:`Switch to dark mode`,children:(0,V.jsx)(`span`,{className:$.themeIconWrapper,children:(0,V.jsx)(`span`,{className:$.themeIcon,children:n?(0,V.jsx)(ad,{size:20}):(0,V.jsx)(od,{size:20})},n?`sun`:`moon`)})})]}),(0,V.jsx)(`div`,{className:$.divider}),(0,V.jsxs)(`div`,{className:$.settingsSection,children:[(0,V.jsxs)(`div`,{className:$.settingsRow,children:[(0,V.jsxs)(`div`,{className:$.settingsLabel,children:[`Output Detail`,(0,V.jsx)(Ed,{content:`Controls how much detail is included in the copied output`})]}),(0,V.jsxs)(`button`,{className:$.cycleButton,onClick:()=>{t({outputDetail:wh[(wh.findIndex(t=>t.value===e.outputDetail)+1)%wh.length].value})},children:[(0,V.jsx)(`span`,{className:$.cycleButtonText,children:wh.find(t=>t.value===e.outputDetail)?.label},e.outputDetail),(0,V.jsx)(`span`,{className:$.cycleDots,children:wh.map(t=>(0,V.jsx)(`span`,{className:`${$.cycleDot} ${e.outputDetail===t.value?$.active:``}`},t.value))})]})]}),(0,V.jsxs)(`div`,{className:`${$.settingsRow} ${$.settingsRowMarginTop} ${i?``:$.settingsRowDisabled}`,children:[(0,V.jsxs)(`div`,{className:$.settingsLabel,children:[`React Components`,(0,V.jsx)(Ed,{content:i?`Include React component names in annotations`:`Disabled — production builds minify component names, making detection unreliable. Use in development mode.`})]}),(0,V.jsx)(Fh,{checked:i&&e.reactEnabled,onChange:e=>t({reactEnabled:e.target.checked}),disabled:!i})]}),(0,V.jsxs)(`div`,{className:`${$.settingsRow} ${$.settingsRowMarginTop}`,children:[(0,V.jsxs)(`div`,{className:$.settingsLabel,children:[`Hide Until Restart`,(0,V.jsx)(Ed,{content:`Hides the toolbar until you open a new tab`})]}),(0,V.jsx)(Fh,{checked:!1,onChange:e=>{e.target.checked&&d()}})]})]}),(0,V.jsx)(`div`,{className:$.divider}),(0,V.jsxs)(`div`,{className:$.settingsSection,children:[(0,V.jsx)(`div`,{className:`${$.settingsLabel} ${$.settingsLabelMarker}`,children:`Marker Color`}),(0,V.jsx)(`div`,{className:$.colorOptions,children:Zh.map(n=>(0,V.jsx)(`button`,{className:`${$.colorOption} ${e.annotationColorId===n.id?$.selected:``}`,style:{"--swatch":n.srgb,"--swatch-p3":n.p3},onClick:()=>t({annotationColorId:n.id}),title:n.label,type:`button`},n.id))})]}),(0,V.jsx)(`div`,{className:$.divider}),(0,V.jsxs)(`div`,{className:$.settingsSection,children:[(0,V.jsx)(Uh,{className:`checkbox-field`,label:`Clear on copy/send`,checked:e.autoClearAfterCopy,onChange:e=>t({autoClearAfterCopy:e.target.checked}),tooltip:`Automatically clear annotations after copying`}),(0,V.jsx)(Uh,{className:$.checkboxField,label:`Block page interactions`,checked:e.blockInteractions,onChange:e=>t({blockInteractions:e.target.checked})})]}),(0,V.jsx)(`div`,{className:$.divider}),(0,V.jsxs)(`button`,{className:$.settingsNavLink,onClick:()=>u(`automations`),children:[(0,V.jsx)(`span`,{children:`Manage MCP & Webhooks`}),(0,V.jsxs)(`span`,{className:$.settingsNavLinkRight,children:[o&&a!==`disconnected`&&(0,V.jsx)(`span`,{className:`${$.mcpNavIndicator} ${$[a]}`}),(0,V.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,V.jsx)(`path`,{d:`M7.5 12.5L12 8L7.5 3.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]}),(0,V.jsxs)(`div`,{className:`${$.settingsPage} ${$.automationsPage} ${l===`automations`?$.slideIn:``}`,children:[(0,V.jsxs)(`button`,{className:$.settingsBackButton,onClick:()=>u(`main`),children:[(0,V.jsx)(ld,{size:16}),(0,V.jsx)(`span`,{children:`Manage MCP & Webhooks`})]}),(0,V.jsx)(`div`,{className:$.divider}),(0,V.jsxs)(`div`,{className:$.settingsSection,children:[(0,V.jsxs)(`div`,{className:$.settingsRow,children:[(0,V.jsxs)(`span`,{className:$.automationHeader,children:[`MCP Connection`,(0,V.jsx)(Ed,{content:`Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time.`})]}),o&&(0,V.jsx)(`div`,{className:`${$.mcpStatusDot} ${$[a]}`,title:a===`connected`?`Connected`:a===`connecting`?`Connecting...`:`Disconnected`})]}),(0,V.jsxs)(`p`,{className:$.automationDescription,style:{paddingBottom:6},children:[`MCP connection allows agents to receive and act on annotations.`,` `,(0,V.jsx)(`a`,{href:`https://agentation.dev/mcp`,target:`_blank`,rel:`noopener noreferrer`,className:$.learnMoreLink,children:`Learn more`})]})]}),(0,V.jsx)(`div`,{className:$.divider}),(0,V.jsxs)(`div`,{className:`${$.settingsSection} ${$.settingsSectionGrow}`,children:[(0,V.jsxs)(`div`,{className:$.settingsRow,children:[(0,V.jsxs)(`span`,{className:$.automationHeader,children:[`Webhooks`,(0,V.jsx)(Ed,{content:`Send annotation data to any URL endpoint when annotations change. Useful for custom integrations.`})]}),(0,V.jsxs)(`div`,{className:$.autoSendContainer,children:[(0,V.jsx)(`label`,{htmlFor:`agentation-auto-send`,className:`${$.autoSendLabel} ${e.webhooksEnabled?$.active:``} ${e.webhookUrl?``:$.disabled}`,children:`Auto-Send`}),(0,V.jsx)(Fh,{id:`agentation-auto-send`,checked:e.webhooksEnabled,onChange:e=>t({webhooksEnabled:e.target.checked}),disabled:!e.webhookUrl})]})]}),(0,V.jsx)(`p`,{className:$.automationDescription,children:`The webhook URL will receive live annotation changes and annotation data.`}),(0,V.jsx)(`textarea`,{className:$.webhookUrlInput,placeholder:`Webhook URL`,value:e.webhookUrl,onKeyDown:e=>e.stopPropagation(),onChange:e=>t({webhookUrl:e.target.value})})]})]})]})})}function qh(e,t=`filtered`){let{name:n,path:r}=sp(e);if(t===`off`)return{name:n,elementName:n,path:r,reactComponents:null};let i=oh(e,{mode:t});return{name:i.path?`${i.path} ${n}`:n,elementName:n,path:r,reactComponents:i.path}}var Jh=!1,Yh={outputDetail:`standard`,autoClearAfterCopy:!1,annotationColorId:`blue`,blockInteractions:!0,reactEnabled:!0,markerClickBehavior:`edit`,webhookUrl:``,webhooksEnabled:!0},Xh=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}},Zh=[{id:`indigo`,label:`Indigo`,srgb:`#6155F5`,p3:`color(display-p3 0.38 0.33 0.96)`},{id:`blue`,label:`Blue`,srgb:`#0088FF`,p3:`color(display-p3 0.00 0.53 1.00)`},{id:`cyan`,label:`Cyan`,srgb:`#00C3D0`,p3:`color(display-p3 0.00 0.76 0.82)`},{id:`green`,label:`Green`,srgb:`#34C759`,p3:`color(display-p3 0.20 0.78 0.35)`},{id:`yellow`,label:`Yellow`,srgb:`#FFCC00`,p3:`color(display-p3 1.00 0.80 0.00)`},{id:`orange`,label:`Orange`,srgb:`#FF8D28`,p3:`color(display-p3 1.00 0.55 0.16)`},{id:`red`,label:`Red`,srgb:`#FF383C`,p3:`color(display-p3 1.00 0.22 0.24)`}];(()=>{if(typeof document>`u`||document.getElementById(`agentation-color-tokens`))return;let e=document.createElement(`style`);e.id=`agentation-color-tokens`,e.textContent=[...Zh.map(e=>`
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${e.id}"] {
          --agentation-color-accent: ${e.p3};
        }
      }
    `),`:root {
      ${Zh.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Zh.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
      }
    }`].join(``),document.head.appendChild(e)})();function Qh(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;for(;n?.shadowRoot;){let r=n.shadowRoot.elementFromPoint(e,t);if(!r||r===n)break;n=r}return n}function $h(e){let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function eg(e){return e.status!==`resolved`&&e.status!==`dismissed`}function tg(e){let t=yh(e),n=t.found?t:xh(e);if(n.found&&n.source)return bh(n.source,`path`)}function ng({demoAnnotations:e,demoDelay:t=1e3,enableDemoMode:n=!1,onAnnotationAdd:r,onAnnotationDelete:i,onAnnotationUpdate:a,onAnnotationsClear:o,onCopy:s,onSubmit:c,copyToClipboard:l=!0,endpoint:u,sessionId:d,onSessionCreated:f,webhookUrl:p,className:m}={}){let[h,g]=(0,b.useState)(!1),[_,v]=(0,b.useState)([]),[y,x]=(0,b.useState)(!0),[S,C]=(0,b.useState)(()=>Pm()),[w,ee]=(0,b.useState)(!1),te=(0,b.useRef)(null);(0,b.useEffect)(()=>{let e=e=>{let t=te.current;t&&t.contains(e.target)&&e.stopPropagation()},t=[`mousedown`,`click`,`pointerdown`];return t.forEach(t=>document.body.addEventListener(t,e)),()=>{t.forEach(t=>document.body.removeEventListener(t,e))}},[]);let[ne,re]=(0,b.useState)(!1),[ie,ae]=(0,b.useState)(!1),[T,oe]=(0,b.useState)(null),[se,ce]=(0,b.useState)({x:0,y:0}),[E,D]=(0,b.useState)(null),[O,le]=(0,b.useState)(!1),[ue,de]=(0,b.useState)(`idle`),[fe,pe]=(0,b.useState)(!1),[k,me]=(0,b.useState)(!1),[he,ge]=(0,b.useState)(null),[_e,ve]=(0,b.useState)(null),[ye,be]=(0,b.useState)([]),[xe,Se]=(0,b.useState)(null),[Ce,we]=(0,b.useState)(null),[A,Te]=(0,b.useState)(null),[Ee,De]=(0,b.useState)(null),[Oe,ke]=(0,b.useState)([]),[Ae,je]=(0,b.useState)(0),[Me,Ne]=(0,b.useState)(!1),[j,Pe]=(0,b.useState)(!1),[Fe,Ie]=(0,b.useState)(!1),[Le,Re]=(0,b.useState)(!1),[ze,Be]=(0,b.useState)(!1),[Ve,He]=(0,b.useState)(`main`),[Ue,We]=(0,b.useState)(!1),[M,Ge]=(0,b.useState)(!1),[Ke,qe]=(0,b.useState)(!1),[N,Je]=(0,b.useState)([]),[Ye,Xe]=(0,b.useState)(null),P=(0,b.useRef)(!1),[Ze,Qe]=(0,b.useState)(!1),[$e,et]=(0,b.useState)(!1),[tt,nt]=(0,b.useState)(1),[rt,it]=(0,b.useState)(`new-page`),[at,ot]=(0,b.useState)(``),[st,ct]=(0,b.useState)(!1),[F,lt]=(0,b.useState)(null),ut=(0,b.useRef)(!1),dt=(0,b.useRef)({rearrange:null,placements:[]}),ft=(0,b.useRef)({rearrange:null,placements:[]}),[pt,mt]=(0,b.useState)(0),[ht,gt]=(0,b.useState)(0),[_t,vt]=(0,b.useState)(0),[yt,bt]=(0,b.useState)(0),xt=(0,b.useRef)(new Set),St=(0,b.useRef)(new Set),Ct=(0,b.useRef)(null),wt=(0,b.useRef)(),I=M&&h&&!Ke&&Ze;(0,b.useEffect)(()=>{if(I){et(!1);let e=_d(()=>{et(!0)});return()=>cancelAnimationFrame(e)}else et(!1)},[I]);let Tt=(0,b.useRef)(new Map),Et=(0,b.useRef)(new Map),Dt=(0,b.useRef)(),[Ot,kt]=(0,b.useState)(!1),[At,jt]=(0,b.useState)([]),Mt=(0,b.useRef)(At);Mt.current=At;let[Nt,Pt]=(0,b.useState)(null),Ft=(0,b.useRef)(null);(0,b.useRef)(!1),(0,b.useRef)([]),(0,b.useRef)(0),(0,b.useRef)(null),(0,b.useRef)(null),(0,b.useRef)(1);let[It,Lt]=(0,b.useState)(!1),Rt=(0,b.useRef)(null),[zt,Bt]=(0,b.useState)([]),Vt=(0,b.useRef)({cmd:!1,shift:!1}),Ht=()=>{We(!0)},Ut=()=>{We(!1)},Wt=()=>{It||(Rt.current=G(()=>Lt(!0),850))},Gt=()=>{Rt.current&&=(clearTimeout(Rt.current),null),Lt(!1),Ut()};(0,b.useEffect)(()=>()=>{Rt.current&&clearTimeout(Rt.current)},[]);let[L,Kt]=(0,b.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`feedback-toolbar-settings`)??``);return{...Yh,...e,annotationColorId:Zh.find(t=>t.id===e.annotationColorId)?e.annotationColorId:Yh.annotationColorId}}catch{return Yh}}),[qt,Jt]=(0,b.useState)(!0),[Yt,Xt]=(0,b.useState)(!1),Zt=()=>{te.current?.classList.add(Q.disableTransitions),Jt(e=>!e),_d(()=>{te.current?.classList.remove(Q.disableTransitions)})},[Qt,$t]=(0,b.useState)(d??null),en=(0,b.useRef)(!1),[tn,nn]=(0,b.useState)(u?`connecting`:`disconnected`),[rn,an]=(0,b.useState)(null),[on,sn]=(0,b.useState)(!1),[cn,ln]=(0,b.useState)(null),un=(0,b.useRef)(!1),[dn,fn]=(0,b.useState)(new Set),[pn,mn]=(0,b.useState)(new Set),[hn,gn]=(0,b.useState)(!1),[_n,vn]=(0,b.useState)(!1),[yn,bn]=(0,b.useState)(!1),xn=(0,b.useRef)(null),Sn=(0,b.useRef)(null),Cn=(0,b.useRef)(null),wn=(0,b.useRef)(null),Tn=(0,b.useRef)(!1),En=(0,b.useRef)(0),Dn=(0,b.useRef)(null),On=(0,b.useRef)(null),kn=(0,b.useRef)(null),An=(0,b.useRef)(null),jn=(0,b.useRef)(null),R=typeof window<`u`?window.location.pathname:`/`;(0,b.useEffect)(()=>{if(Le)Be(!0);else{We(!1),He(`main`);let e=G(()=>Be(!1),0);return()=>clearTimeout(e)}},[Le]);let Mn=h&&y&&!M;(0,b.useEffect)(()=>{if(Mn){ae(!1),re(!0),fn(new Set);let e=G(()=>{fn(e=>{let t=new Set(e);return _.forEach(e=>t.add(e.id)),t})},350);return()=>clearTimeout(e)}else if(ne){ae(!0);let e=G(()=>{re(!1),ae(!1)},250);return()=>clearTimeout(e)}},[Mn]),(0,b.useEffect)(()=>{Pe(!0),je(window.scrollY);let e=fm(R);v(e.filter(eg)),Jh||(Xt(!0),Jh=!0,G(()=>Xt(!1),750));try{let e=localStorage.getItem(`feedback-toolbar-theme`);e!==null&&Jt(e===`dark`)}catch{}try{let e=localStorage.getItem(`feedback-toolbar-position`);if(e){let t=JSON.parse(e);typeof t.x==`number`&&typeof t.y==`number`&&an(t)}}catch{}},[R]),(0,b.useEffect)(()=>{j&&localStorage.setItem(`feedback-toolbar-settings`,JSON.stringify(L))},[L,j]),(0,b.useEffect)(()=>{j&&localStorage.setItem(`feedback-toolbar-theme`,qt?`dark`:`light`)},[qt,j]);let Nn=(0,b.useRef)(!1);(0,b.useEffect)(()=>{let e=Nn.current;Nn.current=on,e&&!on&&rn&&j&&localStorage.setItem(`feedback-toolbar-position`,JSON.stringify(rn))},[on,rn,j]),(0,b.useEffect)(()=>{!u||!j||en.current||(en.current=!0,nn(`connecting`),(async()=>{try{let e=Am(R),t=d||e,n=!1;if(t)try{let e=await Lm(u,t);$t(e.id),nn(`connected`),jm(R,e.id),n=!0;let r=fm(R),i=new Set(e.annotations.map(e=>e.id)),a=r.filter(e=>!i.has(e.id));if(a.length>0){let t=`${typeof window<`u`?window.location.origin:``}${R}`,n=(await Promise.allSettled(a.map(n=>Rm(u,e.id,{...n,sessionId:e.id,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),a[t])),r=[...e.annotations,...n];v(r.filter(eg)),hm(R,r.filter(eg),e.id)}else v(e.annotations.filter(eg)),hm(R,e.annotations.filter(eg),e.id)}catch(e){console.warn(`[Agentation] Could not join session, creating new:`,e),Mm(R)}if(!n){let e=await Im(u,typeof window<`u`?window.location.href:`/`);$t(e.id),nn(`connected`),jm(R,e.id),f?.(e.id);let t=mm(),n=typeof window<`u`?window.location.origin:``,r=[];for(let[i,a]of t){let t=a.filter(e=>!e._syncedTo);if(t.length===0)continue;let o=`${n}${i}`,s=i===R;r.push((async()=>{try{let n=s?e:await Im(u,o),r=(await Promise.allSettled(t.map(e=>Rm(u,n.id,{...e,sessionId:n.id,url:o})))).map((e,n)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),t[n])).filter(eg);if(hm(i,r,n.id),s){let e=new Set(t.map(e=>e.id));v(t=>{let n=t.filter(t=>!e.has(t.id));return[...r,...n]})}}catch(e){console.warn(`[Agentation] Failed to sync annotations for ${i}:`,e)}})())}await Promise.allSettled(r)}}catch(e){nn(`disconnected`),console.warn(`[Agentation] Failed to initialize session, using local storage:`,e)}})())},[u,d,j,f,R]),(0,b.useEffect)(()=>{if(!u||!j)return;let e=async()=>{try{(await fetch(`${u}/health`)).ok?nn(`connected`):nn(`disconnected`)}catch{nn(`disconnected`)}};e();let t=gd(e,1e4);return()=>clearInterval(t)},[u,j]),(0,b.useEffect)(()=>{if(!u||!j||!Qt)return;let e=new EventSource(`${u}/sessions/${Qt}/events`),t=[`resolved`,`dismissed`],n=e=>{try{let n=JSON.parse(e.data);if(t.includes(n.payload?.status)){let e=n.payload.id,t=n.payload.kind;if(t===`placement`){for(let[t,n]of Tt.current)if(n===e){Tt.current.delete(t),Je(e=>e.filter(e=>e.id!==t));break}}else if(t===`rearrange`){for(let[t,n]of Et.current)if(n===e){Et.current.delete(t),lt(e=>{if(!e)return null;let n=e.sections.filter(e=>e.id!==t);return n.length===0?null:{...e,sections:n}});break}}else mn(t=>new Set(t).add(e)),G(()=>{v(t=>t.filter(t=>t.id!==e)),mn(t=>{let n=new Set(t);return n.delete(e),n})},150)}}catch{}};return e.addEventListener(`annotation.updated`,n),()=>{e.removeEventListener(`annotation.updated`,n),e.close()}},[u,j,Qt]),(0,b.useEffect)(()=>{if(!u||!j)return;let e=On.current===`disconnected`,t=tn===`connected`;On.current=tn,e&&t&&(async()=>{try{let e=fm(R);if(e.length===0)return;let t=`${typeof window<`u`?window.location.origin:``}${R}`,n=Qt,r=[];if(n)try{r=(await Lm(u,n)).annotations}catch{n=null}n||(n=(await Im(u,t)).id,$t(n),jm(R,n));let i=new Set(r.map(e=>e.id)),a=e.filter(e=>!i.has(e.id));if(a.length>0){let e=(await Promise.allSettled(a.map(e=>Rm(u,n,{...e,sessionId:n,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation on reconnect:`,e.reason),a[t])),i=[...r,...e].filter(eg);v(i),hm(R,i,n)}}catch(e){console.warn(`[Agentation] Failed to sync on reconnect:`,e)}})()},[tn,u,j,Qt,R]);let Pn=(0,b.useCallback)(()=>{w||(ee(!0),Re(!1),g(!1),G(()=>{Fm(!0),C(!0),ee(!1)},400))},[w]);(0,b.useEffect)(()=>{if(!n||!j||!e||e.length===0||_.length>0)return;let r=[];return r.push(G(()=>{g(!0)},t-200)),e.forEach((e,n)=>{let i=t+n*300;r.push(G(()=>{let t=document.querySelector(e.selector);if(!t)return;let r=t.getBoundingClientRect(),{name:i,path:a}=sp(t),o={id:`demo-${Date.now()}-${n}`,x:(r.left+r.width/2)/window.innerWidth*100,y:r.top+r.height/2+window.scrollY,comment:e.comment,element:i,elementPath:a,timestamp:Date.now(),selectedText:e.selectedText,boundingBox:{x:r.left,y:r.top+window.scrollY,width:r.width,height:r.height},nearbyText:cp(t),cssClasses:up(t)};v(e=>[...e,o])},i))}),()=>{r.forEach(clearTimeout)}},[n,j,e,t]),(0,b.useEffect)(()=>{let e=()=>{je(window.scrollY),Ne(!0),jn.current&&clearTimeout(jn.current),jn.current=G(()=>{Ne(!1)},150)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),jn.current&&clearTimeout(jn.current)}},[]),(0,b.useEffect)(()=>{j&&_.length>0?Qt?hm(R,_,Qt):pm(R,_):j&&_.length===0&&localStorage.removeItem(dm(R))},[_,R,j,Qt]),(0,b.useEffect)(()=>{if(j&&!P.current){P.current=!0;let e=_m(R);e.length>0&&Je(e)}},[j,R]),(0,b.useEffect)(()=>{j&&P.current&&!Ze&&(N.length>0?vm(R,N):ym(R))},[N,R,j,Ze]),(0,b.useEffect)(()=>{if(j&&!ut.current){ut.current=!0;let e=xm(R);if(e){let t={...e,sections:e.sections.map(e=>({...e,currentRect:e.currentRect??{...e.originalRect}}))};lt(t)}}},[j,R]),(0,b.useEffect)(()=>{j&&ut.current&&!Ze&&(F?Sm(R,F):Cm(R))},[F,R,j,Ze]);let Fn=(0,b.useRef)(!1);(0,b.useEffect)(()=>{if(j&&!Fn.current){Fn.current=!0;let e=Tm(R);e&&(ft.current={rearrange:e.rearrange,placements:e.placements||[]},e.purpose&&ot(e.purpose))}},[j,R]),(0,b.useEffect)(()=>{if(!j||!Fn.current)return;let e=ft.current;Ze?(F?.sections?.length??0)>0||N.length>0||at?Em(R,{rearrange:F,placements:N,purpose:at}):Dm(R):(e.rearrange?.sections?.length??0)>0||e.placements.length>0||at?Em(R,{rearrange:e.rearrange,placements:e.placements,purpose:at}):Dm(R)},[F,N,at,Ze,R,j]),(0,b.useEffect)(()=>{M&&!F&&lt({sections:[],originalOrder:[],detectedAt:Date.now()})},[M,F]),(0,b.useEffect)(()=>{if(!u||!Qt)return;let e=Tt.current,t=new Set(N.map(e=>e.id));for(let t of N){if(e.has(t.id))continue;e.set(t.id,``);let n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:R;Rm(u,Qt,{id:t.id,x:t.x/window.innerWidth*100,y:t.y,comment:`Place ${t.type} at (${Math.round(t.x)}, ${Math.round(t.y)}), ${t.width}\xD7${t.height}px${t.text?` \u2014 "${t.text}"`:``}`,element:`[design:${t.type}]`,elementPath:`[placement]`,timestamp:t.timestamp,url:n,intent:`change`,severity:`important`,kind:`placement`,placement:{componentType:t.type,width:t.width,height:t.height,scrollY:t.scrollY,text:t.text}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync placement annotation:`,n),e.delete(t.id)})}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&Bm(u,r).catch(()=>{}))},[N,u,Qt,R]),(0,b.useEffect)(()=>{if(!(!u||!Qt))return Dt.current&&clearTimeout(Dt.current),Dt.current=G(()=>{let e=Et.current;if(!F||F.sections.length===0){for(let[,t]of e)t&&Bm(u,t).catch(()=>{});e.clear();return}let t=new Set(F.sections.map(e=>e.id)),n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:R;for(let t of F.sections){let r=t.originalRect,i=t.currentRect;if(!(Math.abs(r.x-i.x)>1||Math.abs(r.y-i.y)>1||Math.abs(r.width-i.width)>1||Math.abs(r.height-i.height)>1)){let n=e.get(t.id);n&&(e.delete(t.id),Bm(u,n).catch(()=>{}));continue}let a=e.get(t.id);a?zm(u,a,{comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`}).catch(e=>{console.warn(`[Agentation] Failed to update rearrange annotation:`,e)}):(e.set(t.id,``),Rm(u,Qt,{id:t.id,x:i.x/window.innerWidth*100,y:i.y,comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`,element:t.selector,elementPath:`[rearrange]`,timestamp:Date.now(),url:n,intent:`change`,severity:`important`,kind:`rearrange`,rearrange:{selector:t.selector,label:t.label,tagName:t.tagName,originalRect:r,currentRect:i}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync rearrange annotation:`,n),e.delete(t.id)}))}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&Bm(u,r).catch(()=>{}))},300),()=>{Dt.current&&clearTimeout(Dt.current)}},[F,u,Qt,R]);let In=(0,b.useRef)(new Map);(0,b.useLayoutEffect)(()=>{let e=F?.sections??[],t=new Set;if((M||Ke)&&h)for(let n of e){t.add(n.id);try{let e=document.querySelector(n.selector);if(!e)continue;if(!In.current.has(n.id)){let t={transform:e.style.transform,transformOrigin:e.style.transformOrigin,opacity:e.style.opacity,position:e.style.position,zIndex:e.style.zIndex,display:e.style.display},r=[],i=e.parentElement;for(;i&&i!==document.body;){let e=getComputedStyle(i);(e.overflow!==`visible`||e.overflowX!==`visible`||e.overflowY!==`visible`)&&(r.push({el:i,overflow:i.style.overflow}),i.style.overflow=`visible`),i=i.parentElement}getComputedStyle(e).display===`inline`&&(e.style.display=`inline-block`),In.current.set(n.id,{el:e,origStyles:t,ancestors:r}),e.style.transformOrigin=`top left`,e.style.zIndex=`9999`}}catch{}}for(let[e,n]of In.current)if(!t.has(e)){let{el:t,origStyles:r,ancestors:i}=n;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=r.transform,t.style.transformOrigin=r.transformOrigin,t.style.opacity=r.opacity,t.style.position=r.position,t.style.zIndex=r.zIndex,In.current.delete(e),G(()=>{t.style.transition=``,t.style.display=r.display;for(let e of i)e.el.style.overflow=e.overflow},450)}},[F,M,Ke,h]),(0,b.useEffect)(()=>()=>{for(let[,e]of In.current){let{el:t,origStyles:n,ancestors:r}=e;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=n.transform,t.style.transformOrigin=n.transformOrigin,t.style.opacity=n.opacity,t.style.position=n.position,t.style.zIndex=n.zIndex,G(()=>{t.style.transition=``,t.style.display=n.display;for(let e of r)e.el.style.overflow=e.overflow},450)}In.current.clear()},[]);let Ln=(0,b.useCallback)(()=>{qe(!0),Ge(!1),Xe(null),clearTimeout(wt.current),wt.current=G(()=>{qe(!1)},300)},[]),Rn=(0,b.useCallback)(()=>{M&&(qe(!0),Ge(!1),Xe(null),clearTimeout(wt.current),wt.current=G(()=>{qe(!1)},300)),g(!1)},[M]),zn=(0,b.useCallback)(()=>{Fe||(yd(),Ie(!0))},[Fe]),Bn=(0,b.useCallback)(()=>{Fe&&(bd(),Ie(!1))},[Fe]),Vn=(0,b.useCallback)(()=>{Fe?Bn():zn()},[Fe,zn,Bn]),Hn=(0,b.useCallback)(()=>{if(zt.length===0)return;let e=zt[0],t=e.element,n=zt.length>1,r=zt.map(e=>e.element.getBoundingClientRect());if(n){let e={left:Math.min(...r.map(e=>e.left)),top:Math.min(...r.map(e=>e.top)),right:Math.max(...r.map(e=>e.right)),bottom:Math.max(...r.map(e=>e.bottom))},n=zt.slice(0,5).map(e=>e.name).join(`, `),i=zt.length>5?` +${zt.length-5} more`:``,a=r.map(e=>({x:e.left,y:e.top+window.scrollY,width:e.width,height:e.height})),o=zt[zt.length-1].element,s=r[r.length-1],c=s.left+s.width/2,l=s.top+s.height/2,u=$h(o);D({x:c/window.innerWidth*100,y:u?l:l+window.scrollY,clientY:l,element:`${zt.length} elements: ${n}${i}`,elementPath:`multi-select`,boundingBox:{x:e.left,y:e.top+window.scrollY,width:e.right-e.left,height:e.bottom-e.top},isMultiSelect:!0,isFixed:u,elementBoundingBoxes:a,multiSelectElements:zt.map(e=>e.element),targetElement:o,fullPath:xp(t),accessibility:bp(t),computedStyles:vp(t),computedStylesObj:gp(t),nearbyElements:lp(t),cssClasses:up(t),nearbyText:cp(t),sourceFile:tg(t)})}else{let n=r[0],i=$h(t);D({x:n.left/window.innerWidth*100,y:i?n.top:n.top+window.scrollY,clientY:n.top,element:e.name,elementPath:e.path,boundingBox:{x:n.left,y:i?n.top:n.top+window.scrollY,width:n.width,height:n.height},isFixed:i,fullPath:xp(t),accessibility:bp(t),computedStyles:vp(t),computedStylesObj:gp(t),nearbyElements:lp(t),cssClasses:up(t),nearbyText:cp(t),reactComponents:e.reactComponents,sourceFile:tg(t)})}Bt([]),oe(null)},[zt]);(0,b.useEffect)(()=>{h||(D(null),Te(null),De(null),ke([]),oe(null),Re(!1),Bt([]),Vt.current={cmd:!1,shift:!1},Fe&&Bn())},[h,Fe,Bn]),(0,b.useEffect)(()=>()=>{bd()},[]),(0,b.useEffect)(()=>{if(!h)return;let e=`p.span.h1.h2.h3.h4.h5.h6.li.td.th.label.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.u.s.a.time.address.cite.q.abbr.dfn.mark.small.sub.sup.[contenteditable]`.split(`.`).join(`, `),t=`:not([data-agentation-root]):not([data-agentation-root] *)`,n=document.createElement(`style`);return n.id=`feedback-cursor-styles`,n.textContent=`
      body ${t} {
        cursor: crosshair !important;
      }

      body :is(${e})${t} {
        cursor: text !important;
      }
    `,document.head.appendChild(n),()=>{let e=document.getElementById(`feedback-cursor-styles`);e&&e.remove()}},[h]),(0,b.useEffect)(()=>{if(Nt!==null&&h)return document.documentElement.setAttribute(`data-drawing-hover`,``),()=>document.documentElement.removeAttribute(`data-drawing-hover`)},[Nt,h]),(0,b.useEffect)(()=>{if(!h||E||Ot||M)return;let e=e=>{if(ap(e.composedPath()[0]||e.target,`[data-feedback-toolbar]`)){oe(null);return}let t=Qh(e.clientX,e.clientY);if(!t||ap(t,`[data-feedback-toolbar]`)){oe(null);return}let{name:n,elementName:r,path:i,reactComponents:a}=qh(t,`off`),o=t.getBoundingClientRect();oe({element:n,elementName:r,elementPath:i,rect:o,reactComponents:a}),ce({x:e.clientX,y:e.clientY})};return document.addEventListener(`mousemove`,e),()=>document.removeEventListener(`mousemove`,e)},[h,E,Ot,M,`off`,At]);let Un=(0,b.useCallback)(e=>{if(Te(e),ge(null),ve(null),be([]),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=Qh(n.x+n.width/2,n.y+n.height/2-window.scrollY);e&&t.push(e)}ke(t),De(null)}else if(e.boundingBox){let t=e.boundingBox,n=Qh(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;De(r<.5||i<.5?null:n)}else De(null);ke([])}else De(null),ke([])},[]);(0,b.useEffect)(()=>{if(!h||Ot||M)return;let e=e=>{if(Tn.current){Tn.current=!1;return}let t=e.composedPath()[0]||e.target;if(ap(t,`[data-feedback-toolbar]`)||ap(t,`[data-annotation-popup]`)||ap(t,`[data-annotation-marker]`))return;if(e.metaKey&&e.shiftKey&&!E&&!A){e.preventDefault(),e.stopPropagation();let t=Qh(e.clientX,e.clientY);if(!t)return;let n=t.getBoundingClientRect(),{name:r,path:i,reactComponents:a}=qh(t,`off`),o=zt.findIndex(e=>e.element===t);Bt(o>=0?e=>e.filter((e,t)=>t!==o):e=>[...e,{element:t,rect:n,name:r,path:i,reactComponents:a??void 0}]);return}let n=ap(t,`button, a, input, select, textarea, [role='button'], [onclick]`);if(L.blockInteractions&&n&&(e.preventDefault(),e.stopPropagation()),E){if(n&&!L.blockInteractions)return;e.preventDefault(),kn.current?.shake();return}if(A){if(n&&!L.blockInteractions)return;e.preventDefault(),An.current?.shake();return}e.preventDefault();let r=Qh(e.clientX,e.clientY);if(!r)return;let{name:i,path:a,reactComponents:o}=qh(r,`off`),s=r.getBoundingClientRect(),c=e.clientX/window.innerWidth*100,l=$h(r),u=l?e.clientY:e.clientY+window.scrollY,d=window.getSelection(),f;d&&d.toString().trim().length>0&&(f=d.toString().trim().slice(0,500));let p=gp(r),m=vp(r);D({x:c,y:u,clientY:e.clientY,element:i,elementPath:a,selectedText:f,boundingBox:{x:s.left,y:l?s.top:s.top+window.scrollY,width:s.width,height:s.height},nearbyText:cp(r),cssClasses:up(r),isFixed:l,fullPath:xp(r),accessibility:bp(r),computedStyles:m,computedStylesObj:p,nearbyElements:lp(r),reactComponents:o??void 0,sourceFile:tg(r),targetElement:r}),oe(null)};return document.addEventListener(`click`,e,!0),()=>document.removeEventListener(`click`,e,!0)},[h,Ot,M,E,A,L.blockInteractions,`off`,zt]),(0,b.useEffect)(()=>{if(!h)return;let e=e=>{e.key===`Meta`&&(Vt.current.cmd=!0),e.key===`Shift`&&(Vt.current.shift=!0)},t=e=>{let t=Vt.current.cmd&&Vt.current.shift;e.key===`Meta`&&(Vt.current.cmd=!1),e.key===`Shift`&&(Vt.current.shift=!1);let n=Vt.current.cmd&&Vt.current.shift;t&&!n&&zt.length>0&&Hn()},n=()=>{Vt.current={cmd:!1,shift:!1},Bt([])};return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),window.addEventListener(`blur`,n),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t),window.removeEventListener(`blur`,n)}},[h,zt,Hn]),(0,b.useEffect)(()=>{if(!h||E||Ot||M)return;let e=e=>{let t=e.composedPath()[0]||e.target;ap(t,`[data-feedback-toolbar]`)||ap(t,`[data-annotation-marker]`)||ap(t,`[data-annotation-popup]`)||new Set(`P.SPAN.H1.H2.H3.H4.H5.H6.LI.TD.TH.LABEL.BLOCKQUOTE.FIGCAPTION.CAPTION.LEGEND.DT.DD.PRE.CODE.EM.STRONG.B.I.U.S.A.TIME.ADDRESS.CITE.Q.ABBR.DFN.MARK.SMALL.SUB.SUP`.split(`.`)).has(t.tagName)||t.isContentEditable||(e.preventDefault(),xn.current={x:e.clientX,y:e.clientY})};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[h,E,Ot,M]),(0,b.useEffect)(()=>{if(!h||E)return;let e=e=>{if(!xn.current)return;let t=e.clientX-xn.current.x,n=e.clientY-xn.current.y,r=t*t+n*n;if(!yn&&r>=64&&(Sn.current=xn.current,bn(!0),e.preventDefault()),(yn||r>=64)&&Sn.current){if(Cn.current){let t=Math.min(Sn.current.x,e.clientX),n=Math.min(Sn.current.y,e.clientY),r=Math.abs(e.clientX-Sn.current.x),i=Math.abs(e.clientY-Sn.current.y);Cn.current.style.transform=`translate(${t}px, ${n}px)`,Cn.current.style.width=`${r}px`,Cn.current.style.height=`${i}px`}let t=Date.now();if(t-En.current<50)return;En.current=t;let n=Sn.current.x,r=Sn.current.y,i=Math.min(n,e.clientX),a=Math.min(r,e.clientY),o=Math.max(n,e.clientX),s=Math.max(r,e.clientY),c=(i+o)/2,l=(a+s)/2,u=new Set,d=[[i,a],[o,a],[i,s],[o,s],[c,l],[c,a],[c,s],[i,l],[o,l]];for(let[e,t]of d){let n=document.elementsFromPoint(e,t);for(let e of n)e instanceof HTMLElement&&u.add(e)}let f=document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav`);for(let e of f)if(e instanceof HTMLElement){let t=e.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,c=n>=i&&n<=o&&r>=a&&r<=s,l=Math.min(t.right,o)-Math.max(t.left,i),d=Math.min(t.bottom,s)-Math.max(t.top,a),f=l>0&&d>0?l*d:0,p=t.width*t.height,m=p>0?f/p:0;(c||m>.5)&&u.add(e)}let p=[],m=new Set([`BUTTON`,`A`,`INPUT`,`IMG`,`P`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`LI`,`LABEL`,`TD`,`TH`,`SECTION`,`ARTICLE`,`ASIDE`,`NAV`]);for(let e of u){if(ap(e,`[data-feedback-toolbar]`)||ap(e,`[data-annotation-marker]`))continue;let t=e.getBoundingClientRect();if(!(t.width>window.innerWidth*.8&&t.height>window.innerHeight*.5)&&!(t.width<10||t.height<10)&&t.left<o&&t.right>i&&t.top<s&&t.bottom>a){let n=e.tagName,r=m.has(n);if(!r&&(n===`DIV`||n===`SPAN`)){let t=e.textContent&&e.textContent.trim().length>0,n=e.onclick!==null||e.getAttribute(`role`)===`button`||e.getAttribute(`role`)===`link`||e.classList.contains(`clickable`)||e.hasAttribute(`data-clickable`);(t||n)&&!e.querySelector(`p, h1, h2, h3, h4, h5, h6, button, a`)&&(r=!0)}if(r){let e=!1;for(let n of p)if(n.left<=t.left&&n.right>=t.right&&n.top<=t.top&&n.bottom>=t.bottom){e=!0;break}e||p.push(t)}}}if(wn.current){let e=wn.current;for(;e.children.length>p.length;)e.removeChild(e.lastChild);p.forEach((t,n)=>{let r=e.children[n];r||(r=document.createElement(`div`),r.className=Q.selectedElementHighlight,e.appendChild(r)),r.style.transform=`translate(${t.left}px, ${t.top}px)`,r.style.width=`${t.width}px`,r.style.height=`${t.height}px`})}}};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[h,E,yn,8]),(0,b.useEffect)(()=>{if(!h)return;let e=e=>{let t=yn,n=Sn.current;if(yn&&n){Tn.current=!0;let t=Math.min(n.x,e.clientX),r=Math.min(n.y,e.clientY),i=Math.max(n.x,e.clientX),a=Math.max(n.y,e.clientY),o=[];document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th`).forEach(e=>{if(!(e instanceof HTMLElement)||ap(e,`[data-feedback-toolbar]`)||ap(e,`[data-annotation-marker]`))return;let n=e.getBoundingClientRect();n.width>window.innerWidth*.8&&n.height>window.innerHeight*.5||n.width<10||n.height<10||n.left<i&&n.right>t&&n.top<a&&n.bottom>r&&o.push({element:e,rect:n})});let s=o.filter(({element:e})=>!o.some(({element:t})=>t!==e&&e.contains(t))),c=e.clientX/window.innerWidth*100,l=e.clientY+window.scrollY;if(s.length>0){let t=s.reduce((e,{rect:t})=>({left:Math.min(e.left,t.left),top:Math.min(e.top,t.top),right:Math.max(e.right,t.right),bottom:Math.max(e.bottom,t.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),n=s.slice(0,5).map(({element:e})=>sp(e).name).join(`, `),r=s.length>5?` +${s.length-5} more`:``,i=s[0].element,a=gp(i),o=vp(i);D({x:c,y:l,clientY:e.clientY,element:`${s.length} elements: ${n}${r}`,elementPath:`multi-select`,boundingBox:{x:t.left,y:t.top+window.scrollY,width:t.right-t.left,height:t.bottom-t.top},isMultiSelect:!0,fullPath:xp(i),accessibility:bp(i),computedStyles:o,computedStylesObj:a,nearbyElements:lp(i),cssClasses:up(i),nearbyText:cp(i),sourceFile:tg(i)})}else{let n=Math.abs(i-t),o=Math.abs(a-r);n>20&&o>20&&D({x:c,y:l,clientY:e.clientY,element:`Area selection`,elementPath:`region at (${Math.round(t)}, ${Math.round(r)})`,boundingBox:{x:t,y:r+window.scrollY,width:n,height:o},isMultiSelect:!0})}oe(null)}else t&&(Tn.current=!0);xn.current=null,Sn.current=null,bn(!1),wn.current&&(wn.current.innerHTML=``)};return document.addEventListener(`mouseup`,e),()=>document.removeEventListener(`mouseup`,e)},[h,yn]);let Wn=(0,b.useCallback)(async(e,t,n)=>{let r=L.webhookUrl||p;if(!r||!L.webhooksEnabled&&!n)return!1;try{return(await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({event:e,timestamp:Date.now(),url:typeof window<`u`?window.location.href:void 0,...t})})).ok}catch(e){return console.warn(`[Agentation] Webhook failed:`,e),!1}},[p,L.webhookUrl,L.webhooksEnabled]),Gn=(0,b.useCallback)(e=>{if(!E)return;let t={id:Date.now().toString(),x:E.x,y:E.y,comment:e,element:E.element,elementPath:E.elementPath,timestamp:Date.now(),selectedText:E.selectedText,boundingBox:E.boundingBox,nearbyText:E.nearbyText,cssClasses:E.cssClasses,isMultiSelect:E.isMultiSelect,isFixed:E.isFixed,fullPath:E.fullPath,accessibility:E.accessibility,computedStyles:E.computedStyles,nearbyElements:E.nearbyElements,reactComponents:E.reactComponents,sourceFile:E.sourceFile,elementBoundingBoxes:E.elementBoundingBoxes,...u&&Qt?{sessionId:Qt,url:typeof window<`u`?window.location.href:void 0,status:`pending`}:{}};v(e=>[...e,t]),Dn.current=t.id,G(()=>{Dn.current=null},300),G(()=>{fn(e=>new Set(e).add(t.id))},250),r?.(t),Wn(`annotation.add`,{annotation:t}),gn(!0),G(()=>{D(null),gn(!1)},150),window.getSelection()?.removeAllRanges(),u&&Qt&&Rm(u,Qt,t).then(e=>{e.id!==t.id&&(v(n=>n.map(n=>n.id===t.id?{...n,id:e.id}:n)),fn(n=>{let r=new Set(n);return r.delete(t.id),r.add(e.id),r}))}).catch(e=>{console.warn(`[Agentation] Failed to sync annotation:`,e)})},[E,r,Wn,u,Qt]),Kn=(0,b.useCallback)(()=>{gn(!0),G(()=>{D(null),gn(!1)},150)},[]),qn=(0,b.useCallback)(e=>{let t=_.findIndex(t=>t.id===e),n=_[t];A?.id===e&&(vn(!0),G(()=>{Te(null),De(null),ke([]),vn(!1)},150)),Se(e),mn(t=>new Set(t).add(e)),n&&(i?.(n),Wn(`annotation.delete`,{annotation:n})),u&&Bm(u,e).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)}),G(()=>{v(t=>t.filter(t=>t.id!==e)),mn(t=>{let n=new Set(t);return n.delete(e),n}),Se(null),t<_.length-1&&(we(t),G(()=>we(null),200))},150)},[_,A,i,Wn,u]),Jn=(0,b.useCallback)(e=>{if(!e){ge(null),ve(null),be([]);return}if(ge(e.id),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=n.x+n.width/2,r=n.y+n.height/2-window.scrollY,i=document.elementsFromPoint(e,r).find(e=>!e.closest(`[data-annotation-marker]`)&&!e.closest(`[data-agentation-root]`));i&&t.push(i)}be(t),ve(null)}else if(e.boundingBox){let t=e.boundingBox,n=Qh(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;ve(r<.5||i<.5?null:n)}else ve(null);be([])}else ve(null),be([])},[]),Yn=(0,b.useCallback)(e=>{if(!A)return;let t={...A,comment:e};v(e=>e.map(e=>e.id===A.id?t:e)),a?.(t),Wn(`annotation.update`,{annotation:t}),u&&zm(u,A.id,{comment:e}).catch(e=>{console.warn(`[Agentation] Failed to update annotation on server:`,e)}),vn(!0),G(()=>{Te(null),De(null),ke([]),vn(!1)},150)},[A,a,Wn,u]),Xn=(0,b.useCallback)(()=>{vn(!0),G(()=>{Te(null),De(null),ke([]),vn(!1)},150)},[]),Zn=(0,b.useCallback)(()=>{let e=_.length,t=N.length>0||!!F;if(e===0&&At.length===0&&!t)return;if(o?.(_),Wn(`annotations.clear`,{annotations:_}),u){Promise.all(_.map(e=>Bm(u,e.id).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)})));for(let[,e]of Tt.current)e&&Bm(u,e).catch(()=>{});Tt.current.clear();for(let[,e]of Et.current)e&&Bm(u,e).catch(()=>{});Et.current.clear()}me(!0),pe(!0),jt([]);let n=Ft.current;if(n){let e=n.getContext(`2d`);e&&e.clearRect(0,0,n.width,n.height)}(N.length>0||F)&&(vt(e=>e+1),bt(e=>e+1),G(()=>{Je([]),lt(null)},200)),Ze&&Qe(!1),at&&ot(``),ft.current={rearrange:null,placements:[]},Dm(R),G(()=>{v([]),fn(new Set),localStorage.removeItem(dm(R)),me(!1)},e*30+200),G(()=>pe(!1),1500)},[R,_,At,N,F,Ze,at,o,Wn,u]),Qn=(0,b.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:R,t=M&&Ze,n;if(t){if(N.length===0&&!F&&!at)return;n=``}else{if(n=Th(_,e,L.outputDetail),!n&&At.length===0&&N.length===0&&!F)return;n||=`## Page Feedback: ${e}
`}if(!t&&At.length>0){let e=new Set;for(let t of _)t.drawingIndex!=null&&e.add(t.drawingIndex);let t=Ft.current;t&&(t.style.visibility=`hidden`);let r=[],i=window.scrollY;for(let t=0;t<At.length;t++){if(e.has(t))continue;let n=At[t];if(n.points.length<2)continue;let a=n.fixed?n.points:n.points.map(e=>({x:e.x,y:e.y-i})),o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e of a)o=Math.min(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.x),l=Math.max(l,e.y);let u=c-o,d=l-s,f=Math.hypot(u,d),p=a[0],m=a[a.length-1],h=Math.hypot(m.x-p.x,m.y-p.y),g,_=h<f*.35,v=u/Math.max(d,1);if(_&&f>20){let e=Math.max(u,d)*.15,t=0;for(let n of a){let r=n.x-o<e,i=c-n.x<e,a=n.y-s<e,u=l-n.y<e;(r||i)&&(a||u)&&t++}g=t>a.length*.15?`box`:`circle`}else g=v>3&&d<40?`underline`:h>f*.5?`arrow`:`drawing`;let y=Math.min(10,a.length),b=Math.max(1,Math.floor(a.length/y)),x=new Set,S=[],C=[p];for(let e=b;e<a.length-1;e+=b)C.push(a[e]);C.push(m);for(let e of C){let t=Qh(e.x,e.y);if(!t||x.has(t)||ap(t,`[data-feedback-toolbar]`))continue;x.add(t);let{name:n}=sp(t);S.includes(n)||S.push(n)}let w=`${Math.round(o)},${Math.round(s)} \u2192 ${Math.round(c)},${Math.round(l)}`,ee;ee=(g===`circle`||g===`box`)&&S.length>0?`${g===`box`?`Boxed`:`Circled`} **${S[0]}**${S.length>1?` (and ${S.slice(1).join(`, `)})`:``} (region: ${w})`:g===`underline`&&S.length>0?`Underlined **${S[0]}** (${w})`:g===`arrow`&&S.length>=2?`Arrow from **${S[0]}** to **${S[S.length-1]}** (${Math.round(p.x)},${Math.round(p.y)} \u2192 ${Math.round(m.x)},${Math.round(m.y)})`:S.length>0?`${g===`arrow`?`Arrow`:`Drawing`} near **${S.join(`**, **`)}** (region: ${w})`:`Drawing at ${w}`,r.push(ee)}t&&(t.style.visibility=``),r.length>0&&(n+=`
**Drawings:**
`,r.forEach((e,t)=>{n+=`${t+1}. ${e}
`}))}if((N.length>0||t&&at)&&(n+=`
`+sm(N,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ze,wireframePurpose:at||void 0},L.outputDetail)),F){let e=cm(F,L.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(n+=`
`+e)}if(l)try{await navigator.clipboard.writeText(n)}catch{}s?.(n),le(!0),G(()=>le(!1),2e3),L.autoClearAfterCopy&&G(()=>Zn(),500)},[_,At,N,F,Ze,M,rt,at,R,L.outputDetail,`off`,L.autoClearAfterCopy,Zn,l,s]),$n=(0,b.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:R,t=Th(_,e,L.outputDetail);if(!t&&N.length===0&&!F)return;if(t||=`## Page Feedback: ${e}
`,N.length>0&&(t+=`
`+sm(N,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ze,wireframePurpose:at||void 0},L.outputDetail)),F){let e=cm(F,L.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(t+=`
`+e)}c&&c(t,_),de(`sending`),await new Promise(e=>G(e,150));let n=await Wn(`submit`,{output:t,annotations:_},!0);de(n?`sent`:`failed`),G(()=>de(`idle`),2500),n&&L.autoClearAfterCopy&&G(()=>Zn(),500)},[c,Wn,_,N,F,Ze,rt,R,L.outputDetail,`off`,L.autoClearAfterCopy,Zn]);(0,b.useEffect)(()=>{if(!cn)return;let e=e=>{let t=e.clientX-cn.x,n=e.clientY-cn.y,r=Math.sqrt(t*t+n*n);if(!on&&r>10&&sn(!0),on||r>10){let e=cn.toolbarX+t,r=cn.toolbarY+n,i=20-(337-(h?tn===`connected`?297:257:44)),a=window.innerWidth-20-337;e=Math.max(i,Math.min(a,e)),r=Math.max(20,Math.min(window.innerHeight-44-20,r)),an({x:e,y:r})}},t=()=>{on&&(un.current=!0),sn(!1),ln(null)};return document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)}},[cn,on,h,tn]);let er=(0,b.useCallback)(e=>{if(e.target.closest(`button`)||e.target.closest(`[data-agentation-settings-panel]`))return;let t=e.currentTarget.parentElement;if(!t)return;let n=t.getBoundingClientRect(),r=rn?.x??n.left,i=rn?.y??n.top;ln({x:e.clientX,y:e.clientY,toolbarX:r,toolbarY:i})},[rn]);if((0,b.useEffect)(()=>{if(!rn)return;let e=()=>{let e=rn.x,t=rn.y,n=20-(337-(h?tn===`connected`?297:257:44)),r=window.innerWidth-20-337;e=Math.max(n,Math.min(r,e)),t=Math.max(20,Math.min(window.innerHeight-44-20,t)),(e!==rn.x||t!==rn.y)&&an({x:e,y:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[rn,h,tn]),(0,b.useEffect)(()=>{let e=e=>{let t=e.target,n=t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable;if(e.key===`Escape`){if(M){Ye?Xe(null):Ln();return}if(Ot){kt(!1);return}if(zt.length>0){Bt([]);return}E||h&&(Ht(),g(!1))}if((e.metaKey||e.ctrlKey)&&e.shiftKey&&(e.key===`f`||e.key===`F`)){e.preventDefault(),Ht(),h?Rn():g(!0);return}if(!(n||e.metaKey||e.ctrlKey)&&((e.key===`p`||e.key===`P`)&&(e.preventDefault(),Ht(),Vn()),(e.key===`l`||e.key===`L`)&&(e.preventDefault(),Ht(),Ot&&kt(!1),Le&&Re(!1),E&&Kn(),M?Ln():Ge(!0)),(e.key===`h`||e.key===`H`)&&_.length>0&&(e.preventDefault(),Ht(),x(e=>!e)),(e.key===`c`||e.key===`C`)&&(_.length>0||N.length>0||F)&&(e.preventDefault(),Ht(),Qn()),(e.key===`x`||e.key===`X`)&&(_.length>0||N.length>0||F)&&(e.preventDefault(),Ht(),Zn(),N.length>0&&Je([]),F&&lt(null)),e.key===`s`||e.key===`S`)){let t=Xh(L.webhookUrl)||Xh(p||``);_.length>0&&t&&ue===`idle`&&(e.preventDefault(),Ht(),$n())}};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[h,Ot,M,Ye,N,F,E,_.length,L.webhookUrl,p,ue,$n,Vn,Qn,Zn,zt]),!j||S)return null;let tr=_.length>0,nr=_.filter(e=>!pn.has(e.id)&&e.kind!==`placement`&&e.kind!==`rearrange`),rr=nr.length>0,ir=_.filter(e=>pn.has(e.id)),ar=e=>{let t=e.x/100*window.innerWidth,n=typeof e.y==`string`?parseFloat(e.y):e.y,r={};window.innerHeight-n-22-10<80&&(r.top=`auto`,r.bottom=`calc(100% + 10px)`);let i=t-200/2;return i<10?r.left=`calc(50% + ${10-i}px)`:i+200>window.innerWidth-10&&(r.left=`calc(50% - ${i+200-(window.innerWidth-10)}px)`),r};return(0,Vu.createPortal)((0,V.jsxs)(`div`,{ref:te,style:{display:`contents`},"data-agentation-theme":qt?`dark`:`light`,"data-agentation-accent":L.annotationColorId,"data-agentation-root":``,children:[(0,V.jsx)(`div`,{className:`${Q.toolbar}${m?` ${m}`:``}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:rn?{left:rn.x,top:rn.y,right:`auto`,bottom:`auto`}:void 0,children:(0,V.jsxs)(`div`,{className:`${Q.toolbarContainer} ${h?Q.expanded:Q.collapsed} ${Yt?Q.entrance:``} ${w?Q.hiding:``} ${!L.webhooksEnabled&&(Xh(L.webhookUrl)||Xh(p||``))?Q.serverConnected:``}`,onClick:h?void 0:e=>{if(un.current){un.current=!1,e.preventDefault();return}g(!0)},onMouseDown:er,role:h?void 0:`button`,tabIndex:h?-1:0,title:h?void 0:`Start feedback mode`,children:[(0,V.jsxs)(`div`,{className:`${Q.toggleContent} ${h?Q.hidden:Q.visible}`,children:[(0,V.jsx)(Yu,{size:24}),rr&&(0,V.jsx)(`span`,{className:`${Q.badge} ${h?Q.fadeOut:``} ${Yt?Q.entrance:``}`,children:nr.length})]}),(0,V.jsxs)(`div`,{className:`${Q.controlsContent} ${h?Q.visible:Q.hidden} ${rn&&rn.y<100?Q.tooltipBelow:``} ${Ue||Le?Q.tooltipsHidden:``} ${It?Q.tooltipsInSession:``}`,onMouseEnter:Wt,onMouseLeave:Gt,children:[(0,V.jsxs)(`div`,{className:`${Q.buttonWrapper} ${rn&&rn.x<120?Q.buttonWrapperAlignLeft:``}`,children:[(0,V.jsx)(`button`,{className:Q.controlButton,onClick:e=>{e.stopPropagation(),Ht(),Vn()},"data-active":Fe,children:(0,V.jsx)(ed,{size:24,isPaused:Fe})}),(0,V.jsxs)(`span`,{className:Q.buttonTooltip,children:[Fe?`Resume animations`:`Pause animations`,(0,V.jsx)(`span`,{className:Q.shortcut,children:`P`})]})]}),(0,V.jsxs)(`div`,{className:Q.buttonWrapper,children:[(0,V.jsx)(`button`,{className:`${Q.controlButton} ${qt?``:Q.light}`,onClick:e=>{e.stopPropagation(),Ht(),Ot&&kt(!1),Le&&Re(!1),E&&Kn(),M?Ln():Ge(!0)},"data-active":M,style:M&&Ze?{color:`#f97316`,background:`rgba(249, 115, 22, 0.25)`}:void 0,children:(0,V.jsx)(ud,{size:21})}),(0,V.jsxs)(`span`,{className:Q.buttonTooltip,children:[M?`Exit layout mode`:`Layout mode`,(0,V.jsx)(`span`,{className:Q.shortcut,children:`L`})]})]}),(0,V.jsxs)(`div`,{className:Q.buttonWrapper,children:[(0,V.jsx)(`button`,{className:Q.controlButton,onClick:e=>{e.stopPropagation(),Ht(),x(!y)},disabled:!tr||M,children:(0,V.jsx)($u,{size:24,isOpen:y})}),(0,V.jsxs)(`span`,{className:Q.buttonTooltip,children:[y?`Hide markers`:`Show markers`,(0,V.jsx)(`span`,{className:Q.shortcut,children:`H`})]})]}),(0,V.jsxs)(`div`,{className:Q.buttonWrapper,children:[(0,V.jsx)(`button`,{className:`${Q.controlButton} ${O?Q.statusShowing:``}`,onClick:e=>{e.stopPropagation(),Ht(),Qn()},disabled:M&&Ze?N.length===0&&!F?.sections?.length:!tr&&At.length===0&&N.length===0&&!F?.sections?.length,"data-active":O,children:(0,V.jsx)(Zu,{size:24,copied:O,tint:M&&Ze&&(N.length>0||F?.sections?.length)?`#f97316`:void 0})}),(0,V.jsxs)(`span`,{className:Q.buttonTooltip,children:[M&&Ze?`Copy layout`:`Copy feedback`,(0,V.jsx)(`span`,{className:Q.shortcut,children:`C`})]})]}),(0,V.jsxs)(`div`,{className:`${Q.buttonWrapper} ${Q.sendButtonWrapper} ${h&&!L.webhooksEnabled&&(Xh(L.webhookUrl)||Xh(p||``))?Q.sendButtonVisible:``}`,children:[(0,V.jsxs)(`button`,{className:`${Q.controlButton} ${ue===`sent`||ue===`failed`?Q.statusShowing:``}`,onClick:e=>{e.stopPropagation(),Ht(),$n()},disabled:!tr||!Xh(L.webhookUrl)&&!Xh(p||``)||ue===`sending`,"data-no-hover":ue===`sent`||ue===`failed`,tabIndex:Xh(L.webhookUrl)||Xh(p||``)?0:-1,children:[(0,V.jsx)(Qu,{size:24,state:ue}),tr&&ue===`idle`&&(0,V.jsx)(`span`,{className:Q.buttonBadge,children:_.length})]}),(0,V.jsxs)(`span`,{className:Q.buttonTooltip,children:[`Send Annotations`,(0,V.jsx)(`span`,{className:Q.shortcut,children:`S`})]})]}),(0,V.jsxs)(`div`,{className:Q.buttonWrapper,children:[(0,V.jsx)(`button`,{className:Q.controlButton,onClick:e=>{e.stopPropagation(),Ht(),Zn()},disabled:!tr&&At.length===0&&N.length===0&&!F?.sections?.length,"data-danger":!0,children:(0,V.jsx)(nd,{size:24})}),(0,V.jsxs)(`span`,{className:Q.buttonTooltip,children:[`Clear all`,(0,V.jsx)(`span`,{className:Q.shortcut,children:`X`})]})]}),(0,V.jsxs)(`div`,{className:Q.buttonWrapper,children:[(0,V.jsx)(`button`,{className:Q.controlButton,onClick:e=>{e.stopPropagation(),Ht(),M&&Ln(),Re(!Le)},children:(0,V.jsx)(td,{size:24})}),u&&tn!==`disconnected`&&(0,V.jsx)(`span`,{className:`${Q.mcpIndicator} ${Q[tn]} ${Le?Q.hidden:``}`,title:tn===`connected`?`MCP Connected`:`MCP Connecting...`}),(0,V.jsx)(`span`,{className:Q.buttonTooltip,children:`Settings`})]}),(0,V.jsx)(`div`,{className:Q.divider}),(0,V.jsxs)(`div`,{className:`${Q.buttonWrapper} ${rn&&typeof window<`u`&&rn.x>window.innerWidth-120?Q.buttonWrapperAlignRight:``}`,children:[(0,V.jsx)(`button`,{className:Q.controlButton,onClick:e=>{e.stopPropagation(),Ht(),Rn()},children:(0,V.jsx)(id,{size:24})}),(0,V.jsxs)(`span`,{className:Q.buttonTooltip,children:[`Exit`,(0,V.jsx)(`span`,{className:Q.shortcut,children:`Esc`})]})]})]}),(0,V.jsx)(rp,{visible:M&&h,activeType:Ye,onSelect:e=>{Xe(Ye===e?null:e)},isDarkMode:qt,sectionCount:F?.sections.length??0,onDetectSections:()=>{let e=Mp(),t=F?.sections??[],n=new Set(t.map(e=>e.selector)),r=e.filter(e=>!n.has(e.selector)),i=[...t,...r],a=[...F?.originalOrder??[],...r.map(e=>e.id)];lt({sections:i,originalOrder:a,detectedAt:Date.now()})},placementCount:N.length,onClearPlacements:()=>{vt(e=>e+1),bt(e=>e+1),G(()=>{lt({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Ze,onBlankCanvasChange:e=>{let t={sections:[],originalOrder:[],detectedAt:Date.now()};e?(dt.current={rearrange:F,placements:N},lt(ft.current.rearrange||t),Je(ft.current.placements),Xe(null)):(ft.current={rearrange:F,placements:N},lt(dt.current.rearrange||t),Je(dt.current.placements)),Qe(e)},wireframePurpose:at,onWireframePurposeChange:ot,Tooltip:Ed,onDragStart:(e,t)=>{t.preventDefault();let n=q[e],r=null,i=!1,a=t.clientX,o=t.clientY,s=t.target.closest(`[data-feedback-toolbar]`)?.getBoundingClientRect().top??window.innerHeight,c=t=>{let c=t.clientX-a,l=t.clientY-o;if(!i&&(Math.abs(c)>4||Math.abs(l)>4)&&(i=!0,r=document.createElement(`div`),r.className=`${Y.dragPreview}${Ze?` ${Y.dragPreviewWireframe}`:``}`,document.body.appendChild(r)),!r)return;let u=Math.max(0,s-t.clientY),d=1-(1-Math.min(1,u/180))**2,f=Math.min(140,n.width*.18),p=Math.min(90,n.height*.18),m=28+(f-28)*d,h=20+(p-20)*d;r.style.width=`${m}px`,r.style.height=`${h}px`,r.style.left=`${t.clientX-m/2}px`,r.style.top=`${t.clientY-h/2}px`,r.style.opacity=`${.5+.5*d}`,r.textContent=d>.25?e:``},l=t=>{if(window.removeEventListener(`mousemove`,c),window.removeEventListener(`mouseup`,l),r&&document.body.removeChild(r),i){let r=n.width,i=n.height,a=window.scrollY,o=Math.max(0,t.clientX-r/2),s=Math.max(0,t.clientY+a-i/2),c={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:e,x:o,y:s,width:r,height:i,scrollY:a,timestamp:Date.now()};Je(e=>[...e,c]),Xe(null),xt.current=new Set,mt(e=>e+1)}};window.addEventListener(`mousemove`,c),window.addEventListener(`mouseup`,l)}}),(0,V.jsx)(Kh,{settings:L,onSettingsChange:e=>Kt(t=>({...t,...e})),isDarkMode:qt,onToggleTheme:Zt,isDevMode:!1,connectionStatus:tn,endpoint:u,isVisible:ze,toolbarNearBottom:!!rn&&rn.y<230,settingsPage:Ve,onSettingsPageChange:He,onHideToolbar:Pn})]})}),(M||Ke)&&(0,V.jsx)(`div`,{className:`${Y.blankCanvas} ${$e?Y.visible:``} ${st?Y.gridActive:``}`,style:{"--canvas-opacity":tt},"data-feedback-toolbar":!0}),M&&Ze&&$e&&(0,V.jsxs)(`div`,{className:Y.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,V.jsxs)(`div`,{className:Y.wireframeOpacityRow,children:[(0,V.jsx)(`span`,{className:Y.wireframeOpacityLabel,children:`Toggle Opacity`}),(0,V.jsx)(`input`,{type:`range`,className:Y.wireframeOpacitySlider,min:0,max:1,step:.01,value:tt,onChange:e=>nt(Number(e.target.value))})]}),(0,V.jsxs)(`div`,{className:Y.wireframeNoticeTitleRow,children:[(0,V.jsx)(`span`,{className:Y.wireframeNoticeTitle,children:`Wireframe Mode`}),(0,V.jsx)(`span`,{className:Y.wireframeNoticeDivider}),(0,V.jsx)(`button`,{className:Y.wireframeStartOver,onClick:()=>{vt(e=>e+1),lt({sections:[],originalOrder:[],detectedAt:Date.now()}),ft.current={rearrange:null,placements:[]},ot(``),Dm(R)},children:`Start Over`})]}),`Drag components onto the canvas.`,(0,V.jsx)(`br`,{}),`Copied output will only include the wireframed layout.`]}),(M||Ke)&&(0,V.jsx)(Qf,{placements:N,onChange:Je,activeComponent:Ke?null:Ye,onActiveComponentChange:Xe,isDarkMode:qt,exiting:Ke,onInteractionChange:ct,passthrough:!Ye,extraSnapRects:F?.sections.map(e=>e.currentRect),deselectSignal:pt,clearSignal:_t,wireframe:Ze,onSelectionChange:(e,t)=>{xt.current=e,t||(St.current=new Set,gt(e=>e+1))},onDragMove:(e,t)=>{let n=St.current;if(!(!n.size||!F)){if(!Ct.current){Ct.current=new Map;for(let e of F.sections)n.has(e.id)&&Ct.current.set(e.id,{x:e.currentRect.x,y:e.currentRect.y})}for(let r of F.sections){if(!n.has(r.id)||!Ct.current.get(r.id))continue;let i=document.querySelector(`[data-rearrange-section="${r.id}"]`);i&&(i.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=St.current,i=Ct.current;if(Ct.current=null,!(!r.size||!F||!i)){for(let e of r){let t=document.querySelector(`[data-rearrange-section="${e}"]`);t&&(t.style.transform=``)}n&&lt(n=>n&&{...n,sections:n.sections.map(n=>{let r=i.get(n.id);return r?{...n,currentRect:{...n.currentRect,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}}:n})})}}}),(M||Ke)&&F&&(0,V.jsx)(Hp,{rearrangeState:F,onChange:lt,isDarkMode:qt,exiting:Ke,blankCanvas:Ze,extraSnapRects:N.map(e=>({x:e.x,y:e.y,width:e.width,height:e.height})),clearSignal:yt,deselectSignal:ht,onSelectionChange:(e,t)=>{St.current=e,t||(xt.current=new Set,mt(e=>e+1))},onDragMove:(e,t)=>{let n=xt.current;if(n.size){if(!Ct.current){Ct.current=new Map;for(let e of N)n.has(e.id)&&Ct.current.set(e.id,{x:e.x,y:e.y})}for(let r of n){let n=document.querySelector(`[data-design-placement="${r}"]`);n&&(n.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=xt.current,i=Ct.current;if(Ct.current=null,!(!r.size||!i)){for(let e of r){let t=document.querySelector(`[data-design-placement="${e}"]`);t&&(t.style.transform=``)}n&&Je(n=>n.map(n=>{let r=i.get(n.id);return r?{...n,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}:n}))}}}),(0,V.jsx)(`canvas`,{ref:Ft,className:`${Q.drawCanvas} ${Ot?Q.active:``}`,style:{opacity:+!!Mn,transition:`opacity 0.15s ease`},"data-feedback-toolbar":!0}),(0,V.jsxs)(`div`,{className:Q.markersLayer,"data-feedback-toolbar":!0,children:[ne&&nr.filter(e=>!e.isFixed).map((e,t,n)=>(0,V.jsx)(kh,{annotation:e,globalIndex:nr.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:ie,isClearing:k,isAnimated:dn.has(e.id),isHovered:!ie&&he===e.id,isDeleting:xe===e.id,isEditingAny:!!A,renumberFrom:Ce,markerClickBehavior:L.markerClickBehavior,tooltipStyle:ar(e),onHoverEnter:e=>!ie&&e.id!==Dn.current&&Jn(e),onHoverLeave:()=>Jn(null),onClick:e=>L.markerClickBehavior===`delete`?qn(e.id):Un(e),onContextMenu:Un},e.id)),ne&&!ie&&ir.filter(e=>!e.isFixed).map(e=>(0,V.jsx)(jh,{annotation:e},e.id))]}),(0,V.jsxs)(`div`,{className:Q.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ne&&nr.filter(e=>e.isFixed).map((e,t,n)=>(0,V.jsx)(kh,{annotation:e,globalIndex:nr.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:ie,isClearing:k,isAnimated:dn.has(e.id),isHovered:!ie&&he===e.id,isDeleting:xe===e.id,isEditingAny:!!A,renumberFrom:Ce,markerClickBehavior:L.markerClickBehavior,tooltipStyle:ar(e),onHoverEnter:e=>!ie&&e.id!==Dn.current&&Jn(e),onHoverLeave:()=>Jn(null),onClick:e=>L.markerClickBehavior===`delete`?qn(e.id):Un(e),onContextMenu:Un},e.id)),ne&&!ie&&ir.filter(e=>e.isFixed).map(e=>(0,V.jsx)(jh,{annotation:e,fixed:!0},e.id))]}),h&&(0,V.jsxs)(`div`,{className:Q.overlay,"data-feedback-toolbar":!0,style:E||A?{zIndex:99999}:void 0,children:[T?.rect&&!E&&!Me&&!yn&&(0,V.jsx)(`div`,{className:`${Q.hoverHighlight} ${Q.enter}`,style:{left:T.rect.left,top:T.rect.top,width:T.rect.width,height:T.rect.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)`}}),zt.filter(e=>document.contains(e.element)).map((e,t)=>{let n=e.element.getBoundingClientRect(),r=zt.length>1;return(0,V.jsx)(`div`,{className:r?Q.multiSelectOutline:Q.singleSelectOutline,style:{position:`fixed`,left:n.left,top:n.top,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}},t)}),he&&!E&&(()=>{let e=_.find(e=>e.id===he);if(!e?.boundingBox)return null;if(e.elementBoundingBoxes?.length)return ye.length>0?ye.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,V.jsx)(`div`,{className:`${Q.multiSelectOutline} ${Q.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`hover-outline-live-${t}`)}):e.elementBoundingBoxes.map((e,t)=>(0,V.jsx)(`div`,{className:`${Q.multiSelectOutline} ${Q.enter}`,style:{left:e.x,top:e.y-Ae,width:e.width,height:e.height}},`hover-outline-${t}`));let t=_e&&document.contains(_e)?_e.getBoundingClientRect():null,n=t?{x:t.left,y:t.top,width:t.width,height:t.height}:{x:e.boundingBox.x,y:e.isFixed?e.boundingBox.y:e.boundingBox.y-Ae,width:e.boundingBox.width,height:e.boundingBox.height},r=e.isMultiSelect;return(0,V.jsx)(`div`,{className:`${r?Q.multiSelectOutline:Q.singleSelectOutline} ${Q.enter}`,style:{left:n.x,top:n.y,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}})})(),T&&!E&&!Me&&!yn&&(0,V.jsxs)(`div`,{className:`${Q.hoverTooltip} ${Q.enter}`,style:{left:Math.max(8,Math.min(se.x,window.innerWidth-100)),top:Math.max(se.y-(T.reactComponents?48:32),8)},children:[T.reactComponents&&(0,V.jsx)(`div`,{className:Q.hoverReactPath,children:T.reactComponents}),(0,V.jsx)(`div`,{className:Q.hoverElementName,children:T.elementName})]}),E&&(0,V.jsxs)(V.Fragment,{children:[E.multiSelectElements?.length?E.multiSelectElements.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,V.jsx)(`div`,{className:`${Q.multiSelectOutline} ${hn?Q.exit:Q.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`pending-multi-${t}`)}):E.targetElement&&document.contains(E.targetElement)?(()=>{let e=E.targetElement.getBoundingClientRect();return(0,V.jsx)(`div`,{className:`${Q.singleSelectOutline} ${hn?Q.exit:Q.enter}`,style:{left:e.left,top:e.top,width:e.width,height:e.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}})})():E.boundingBox&&(0,V.jsx)(`div`,{className:`${E.isMultiSelect?Q.multiSelectOutline:Q.singleSelectOutline} ${hn?Q.exit:Q.enter}`,style:{left:E.boundingBox.x,top:E.boundingBox.y-Ae,width:E.boundingBox.width,height:E.boundingBox.height,...E.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}),(()=>{let e=E.x,t=E.isFixed?E.y:E.y-Ae;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Ah,{x:e,y:t,isMultiSelect:E.isMultiSelect,isExiting:hn}),(0,V.jsx)(Sd,{ref:kn,element:E.element,selectedText:E.selectedText,computedStyles:E.computedStylesObj,placeholder:E.element===`Area selection`?`What should change in this area?`:E.isMultiSelect?`Feedback for this group of elements...`:`What should change?`,onSubmit:Gn,onCancel:Kn,isExiting:hn,lightMode:!qt,accentColor:E.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:{left:Math.max(160,Math.min(window.innerWidth-160,e/100*window.innerWidth)),...t>window.innerHeight-290?{bottom:window.innerHeight-t+20}:{top:t+20}}})]})})()]}),A&&(0,V.jsxs)(V.Fragment,{children:[A.elementBoundingBoxes?.length?Oe.length>0?Oe.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,V.jsx)(`div`,{className:`${Q.multiSelectOutline} ${Q.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`edit-multi-live-${t}`)}):A.elementBoundingBoxes.map((e,t)=>(0,V.jsx)(`div`,{className:`${Q.multiSelectOutline} ${Q.enter}`,style:{left:e.x,top:e.y-Ae,width:e.width,height:e.height}},`edit-multi-${t}`)):(()=>{let e=Ee&&document.contains(Ee)?Ee.getBoundingClientRect():null,t=e?{x:e.left,y:e.top,width:e.width,height:e.height}:A.boundingBox?{x:A.boundingBox.x,y:A.isFixed?A.boundingBox.y:A.boundingBox.y-Ae,width:A.boundingBox.width,height:A.boundingBox.height}:null;return t?(0,V.jsx)(`div`,{className:`${A.isMultiSelect?Q.multiSelectOutline:Q.singleSelectOutline} ${Q.enter}`,style:{left:t.x,top:t.y,width:t.width,height:t.height,...A.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}):null})(),(0,V.jsx)(Sd,{ref:An,element:A.element,selectedText:A.selectedText,computedStyles:yp(A.computedStyles),placeholder:`Edit your feedback...`,initialValue:A.comment,submitLabel:`Save`,onSubmit:Yn,onCancel:Xn,onDelete:()=>qn(A.id),isExiting:_n,lightMode:!qt,accentColor:A.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:(()=>{let e=A.isFixed?A.y:A.y-Ae;return{left:Math.max(160,Math.min(window.innerWidth-160,A.x/100*window.innerWidth)),...e>window.innerHeight-290?{bottom:window.innerHeight-e+20}:{top:e+20}}})()})]}),yn&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{ref:Cn,className:Q.dragSelection}),(0,V.jsx)(`div`,{ref:wn,className:Q.highlightsContainer})]})]})]}),document.body)}function rg(){return(0,V.jsxs)(`div`,{className:`min-h-screen bg-black`,children:[(0,V.jsx)(Nu,{}),(0,V.jsx)(Pu,{}),(0,V.jsx)(Iu,{}),(0,V.jsx)(Ru,{}),(0,V.jsx)(Bu,{}),(0,V.jsx)(ng,{})]})}(0,x.createRoot)(document.getElementById(`root`)).render((0,V.jsx)(b.StrictMode,{children:(0,V.jsx)(rg,{})}));