"use strict";(self.webpackChunkreact_basics=self.webpackChunkreact_basics||[]).push([[3400],{"./src/stories/Icon.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},Library:function(){return Library},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Icon_stories}});var _circle,_path,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./src/index.ts"),utils=__webpack_require__("./src/stories/utils.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_Library$parameters,_Library$parameters2,_Library$parameters2$,logo=props=>react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 428 389.11"},props),_circle||(_circle=react.createElement("circle",{cx:214.15,cy:181,r:171,fill:"none",stroke:"currentColor",strokeMiterlimit:10,strokeWidth:20})),_path||(_path=react.createElement("path",{d:"M413 134.11H15.29a15 15 0 0 0-15 15v15.3C.12 168 0 171.52 0 175.11c0 118.19 95.81 214 214 214 116.4 0 211.1-92.94 213.93-208.67 0-.44.07-.88.07-1.33v-30a15 15 0 0 0-15-15Z"}))),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Icon_stories={title:"Common/Icon",component:src.JO,argTypes:{icon:{control:{type:"select"}}}};const sizes=["xl","lg","md","sm","xs"],Template=args=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:20},children:sizes.map(((size,i)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("label",{children:size}),(0,jsx_runtime.jsx)(src.JO,_objectSpread(_objectSpread({},args),{},{size:size}))]},"".concat(size).concat(i))))});Template.displayName="Template";const Template2=args=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:20},children:Object.values(src.PJ).map(((icon,index)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:icon.name.replace("Svg","")}),(0,jsx_runtime.jsx)("div",{style:{display:"flex",alignItems:"baseline",gap:20,paddingBottom:20,borderBottom:"1px solid #ccc"},children:sizes.map(((size,i)=>(0,jsx_runtime.jsx)(react.Fragment,{children:(0,jsx_runtime.jsx)(src.JO,_objectSpread(_objectSpread({},args),{},{size:size,children:(0,react.createElement)(icon)}))},"".concat(icon).concat(size).concat(i))))})]},index)))});Template2.displayName="Template2";const Basic=(0,utils.q)(Template,{args:{children:(0,jsx_runtime.jsx)(logo,{})},argTypes:{icon:{control:!1},size:{control:!1}}}),Library=(0,utils.q)(Template2,{args:{},argTypes:{icon:{control:!1},size:{control:!1}}});Basic.parameters=_objectSpread(_objectSpread({},Basic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:_objectSpread({originalSource:"makeStory(Template, {\n  args: {\n    children: <Logo />\n  },\n  argTypes: {\n    icon: {\n      control: false\n    },\n    size: {\n      control: false\n    }\n  }\n})"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source)})}),Library.parameters=_objectSpread(_objectSpread({},Library.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Library$parameters=Library.parameters)||void 0===_Library$parameters?void 0:_Library$parameters.docs),{},{source:_objectSpread({originalSource:"makeStory(Template2, {\n  args: {},\n  argTypes: {\n    icon: {\n      control: false\n    },\n    size: {\n      control: false\n    }\n  }\n})"},null===(_Library$parameters2=Library.parameters)||void 0===_Library$parameters2||null===(_Library$parameters2$=_Library$parameters2.docs)||void 0===_Library$parameters2$?void 0:_Library$parameters2$.source)})});const __namedExportsOrder=["Basic","Library"]}}]);