System.register(["./index-legacy-fa23f959.js","./_baseToString-legacy-fe854902.js","./_commonjsHelpers-legacy-16634a03.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.s},null,null],execute:function(){t&&t.hot&&t.hot.decline&&t.hot.decline();const{addons:r,makeDecorator:s}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:a,SELECT_STORY:i}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:c,HTMLElement:o}=n,l=e=>{let{target:t}=e;if(!(t instanceof o))return;let n=t,{sbKind:s,sbStory:a}=n.dataset;var c;(s||a)&&(e.preventDefault(),c={kind:s,story:a},r.getChannel().emit(i,c))},_=!1,E=()=>{_&&(_=!1,c.removeEventListener("click",l))},d=s({name:"withLinks",parameterName:"links",wrapper:(e,t)=>(_||(_=!0,c.addEventListener("click",l)),r.getChannel().once(a,E),e(t))});e("decorators",[d])}}}));
//# sourceMappingURL=preview-legacy-973234ea.js.map