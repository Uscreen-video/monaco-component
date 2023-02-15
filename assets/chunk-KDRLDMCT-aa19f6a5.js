import{s as n}from"./index-d475d2ea.js";import{d as u}from"./index-356e4a49.js";import{Z as p}from"./lit-html-c12adefc.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=(e,r)=>r===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===r,L=e=>e.strings===void 0;var{window:c}=n;c.STORYBOOK_ENV="web-components";const{start:m}=__STORYBOOK_MODULE_PREVIEW_API__,{simulatePageLoad:_,simulateDOMContentLoaded:T}=__STORYBOOK_MODULE_PREVIEW_API__;var{Node:h}=n,C=(e,r)=>{let{id:a,component:i}=r;if(!i)throw new Error(`Unable to render story ${a} as the component annotation is missing from the default export`);let d=document.createElement(i);return Object.entries(e).forEach(([s,o])=>{d[s]=o}),d};function y({storyFn:e,kind:r,name:a,showMain:i,showError:d,forceRemount:s},o){let t=e();if(i(),O(t)){(s||!o.querySelector('[id="root-inner"]'))&&(o.innerHTML='<div id="root-inner"></div>');let l=o.querySelector('[id="root-inner"]');p(t,l),_(o)}else if(typeof t=="string")o.innerHTML=t,_(o);else if(t instanceof h){if(o.firstChild===t&&!s)return;o.innerHTML="",o.appendChild(t),T()}else d({title:`Expecting an HTML snippet or DOM node from the story: "${a}" of "${r}".`,description:u`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}var f=m(y);f.forceReRender;f.clientApi.raw;function b(e){if(!e)return!1;if(typeof e=="string")return!0;throw new Error('Provided component needs to be a string. e.g. component: "my-element"')}function v(e){if(!e)return!1;if(e.tags&&Array.isArray(e.tags)||e.modules&&Array.isArray(e.modules))return!0;throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`)}function A(e){n.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__=e}function R(){return n.__STORYBOOK_CUSTOM_ELEMENTS__||n.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__}var{window:M,EventSource:S}=n;module&&module.hot&&module.hot.decline&&(module.hot.decline(),new S("__webpack_hmr").addEventListener("message",function(e){try{let{action:r}=JSON.parse(e.data);r==="built"&&M.location.reload()}catch(r){}}));export{v as a,y as b,L as e,R as g,b as i,C as r,A as s};
//# sourceMappingURL=chunk-KDRLDMCT-aa19f6a5.js.map
