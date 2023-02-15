System.register(["./_commonjsHelpers-legacy-16634a03.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.g}],execute:function(){function t(e,t){for(var r=0;r<t.length;r++){const n=t[r];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n=e("r",{}),o={get exports(){return n},set exports(t){e("r",n=t)}},u={},c=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),b=Symbol.iterator,h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,S={};function g(e,t,r){this.props=e,this.context=t,this.refs=S,this.updater=r||h}function E(){}function w(e,t,r){this.props=e,this.context=t,this.refs=S,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=g.prototype;var R=w.prototype=new E;R.constructor=w,v(R,g.prototype),R.isPureReactComponent=!0;var $=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,o={},u=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)j.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var f=Array(i),s=0;s<i;s++)f[s]=arguments[s+2];o.children=f}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:c,type:e,key:u,ref:a,props:o,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var P=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,r,n,o){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case a:i=!0}}if(i)return o=o(i=e),e=""===n?"."+I(i,0):n,$(o)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),A(o,t,r,"",(function(e){return e}))):null!=o&&(x(o)&&(o=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(i=0,n=""===n?".":n+":",$(e))for(var f=0;f<e.length;f++){var s=n+I(u=e[f],f);i+=A(u,t,r,s,o)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=b&&e[b]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),f=0;!(u=e.next()).done;)i+=A(u=u.value,t,r,s=n+I(u,f++),o);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function T(e,t,r){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var V={current:null},U={transition:null},q={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:U,ReactCurrentOwner:k};u.Children={map:T,forEach:function(e,t,r){T(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},u.Component=g,u.Fragment=i,u.Profiler=s,u.PureComponent=w,u.StrictMode=f,u.Suspense=d,u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,u.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=v({},e.props),o=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in t)j.call(t,f)&&!C.hasOwnProperty(f)&&(n[f]=void 0===t[f]&&void 0!==i?i[f]:t[f])}var f=arguments.length-2;if(1===f)n.children=r;else if(1<f){i=Array(f);for(var s=0;s<f;s++)i[s]=arguments[s+2];n.children=i}return{$$typeof:c,type:e.type,key:o,ref:u,props:n,_owner:a}},u.createContext=function(e){return(e={$$typeof:p,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},u.createElement=O,u.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},u.createRef=function(){return{current:null}},u.forwardRef=function(e){return{$$typeof:y,render:e}},u.isValidElement=x,u.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:D}},u.memo=function(e,t){return{$$typeof:_,type:e,compare:void 0===t?null:t}},u.startTransition=function(e){var t=U.transition;U.transition={};try{e()}finally{U.transition=t}},u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},u.useCallback=function(e,t){return V.current.useCallback(e,t)},u.useContext=function(e){return V.current.useContext(e)},u.useDebugValue=function(){},u.useDeferredValue=function(e){return V.current.useDeferredValue(e)},u.useEffect=function(e,t){return V.current.useEffect(e,t)},u.useId=function(){return V.current.useId()},u.useImperativeHandle=function(e,t,r){return V.current.useImperativeHandle(e,t,r)},u.useInsertionEffect=function(e,t){return V.current.useInsertionEffect(e,t)},u.useLayoutEffect=function(e,t){return V.current.useLayoutEffect(e,t)},u.useMemo=function(e,t){return V.current.useMemo(e,t)},u.useReducer=function(e,t,r){return V.current.useReducer(e,t,r)},u.useRef=function(e){return V.current.useRef(e)},u.useState=function(e){return V.current.useState(e)},u.useSyncExternalStore=function(e,t,r){return V.current.useSyncExternalStore(e,t,r)},u.useTransition=function(){return V.current.useTransition()},u.version="18.2.0",function(e){e.exports=u}(o);const F=e("R",r(n));e("a",t({__proto__:null,default:F},[n]))}}}));
//# sourceMappingURL=index-legacy-c8d78ece.js.map