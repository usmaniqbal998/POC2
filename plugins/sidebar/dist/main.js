System.register(["react","react-dom"],(function(e,t){var n={},o={};return{setters:[function(e){n.default=e.default},function(e){o.default=e.default}],execute:function(){e((()=>{"use strict";var e={954:e=>{e.exports=n},493:e=>{e.exports=o}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{r.r(a),r.d(a,{bootstrap:()=>v,mount:()=>g,unmount:()=>R});var e=r(954),t=r(493);function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n;if("function"!=typeof(n=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(c(n)));return function(){var e=n(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(c(e)));return e}}var p=null;try{p=require("react").createContext()}catch(n){}var s={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function m(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function d(e,t){return new Promise((function(n,o){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var r=h(e,t,(function(){n(this)})),a=l(e,t)(),u=function(e){var t=e.opts,n=e.elementToRender,o=e.domElement,r="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(r)>=0){var a=t.ReactDOM[r](o);return a.render(n),a}return"hydrate"===r?t.ReactDOM.hydrate(n,o):t.ReactDOM.render(n,o),null}({elementToRender:r,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=u}))}function f(e,t){return new Promise((function(n){e.unmountFinished=n;var o=e.renderResults[t.name];o&&o.unmount?o.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function y(e,t){return new Promise((function(n){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(n);var o=h(e,t,null),r=e.renderResults[t.name];if(r&&r.render)r.render(o);else{var a=l(e,t)();e.ReactDOM.render(o,a)}}))}function h(e,t,n){var r=e.React.createElement(e.rootComponent,t),a=p?e.React.createElement(p.Provider,{value:t},r):r;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function n(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},n.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},n.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},n}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),e.React.createElement(e.SingleSpaRoot,o(o({},t),{},{mountFinished:n,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}var b=function(e){if("object"!==u(e))throw new Error("single-spa-react requires a configuration object");var t=o(o({},s),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!p&&t.React.createContext&&(p=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var n={bootstrap:m.bind(null,t),mount:d.bind(null,t),unmount:f.bind(null,t)};return t.parcelCanUpdate&&(n.update=y.bind(null,t)),n}({React:e.default,ReactDOM:t.default,rootComponent:function(){return e.default.createElement(e.default.Fragment,null,e.default.createElement("h1",null,"Plugin B"),e.default.createElement("button",{onClick:function(){var e=new CustomEvent("eventFromMfe",{detail:{name:"Usman"}});window.dispatchEvent(e)}},"Fire Event"))},errorBoundary:function(e,t,n){return null}}),v=b.bootstrap,g=b.mount,R=b.unmount})(),a})())}}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlVLEVDS3BsSGdHLENBQWUsQ0FDakN4RCxNQUFBQSxFQUFBQSxRQUNBQyxTQUFBQSxFQUFBQSxRQUNBQyxjQ05ELFdBQ0MsT0FDQyxnREFDQyw4Q0FDQSxrQ0FDQ3VELFFBQVMsV0FDUixJQUFNQyxFQUFjLElBQUlDLFlBQVksZUFBZ0IsQ0FDbkRDLE9BQVEsQ0FBRTFFLEtBQU0sV0FFakIyRSxPQUFPQyxjQUFjSixLQUx2QixnQkRHRnJELGNBSmlDLFNBSW5CMEQsRUFBS0MsRUFBTXRCLEdBRXhCLE9BQU8sUUFJTVUsRUFBOEJILEVBQTlCRyxVQUFXRSxFQUFtQkwsRUFBbkJLLE1BQU90QixFQUFZaUIsRUFBWmpCLFMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcGFuZG9yYS9wbHVnaW4tc2lkZWJhci9leHRlcm5hbCBzeXN0ZW0gXCJyZWFjdFwiIiwid2VicGFjazovL0BwYW5kb3JhL3BsdWdpbi1zaWRlYmFyL2V4dGVybmFsIHN5c3RlbSBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL0BwYW5kb3JhL3BsdWdpbi1zaWRlYmFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BwYW5kb3JhL3BsdWdpbi1zaWRlYmFyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AcGFuZG9yYS9wbHVnaW4tc2lkZWJhci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BwYW5kb3JhL3BsdWdpbi1zaWRlYmFyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHBhbmRvcmEvcGx1Z2luLXNpZGViYXIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NpbmdsZS1zcGEtcmVhY3RANC42LjFfcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9zaW5nbGUtc3BhLXJlYWN0L2xpYi9lc20vc2luZ2xlLXNwYS1yZWFjdC5qcyIsIndlYnBhY2s6Ly9AcGFuZG9yYS9wbHVnaW4tc2lkZWJhci8uL2luZGV4LmpzIiwid2VicGFjazovL0BwYW5kb3JhL3BsdWdpbi1zaWRlYmFyLy4vc3JjL0FwcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX185NTRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzQ5M19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gZShlLHQpe3ZhciBuPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG89by5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksbi5wdXNoLmFwcGx5KG4sbyl9cmV0dXJuIG59ZnVuY3Rpb24gdCh0KXtmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbbl0/YXJndW1lbnRzW25dOnt9O24lMj9lKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7byh0LGUscltlXSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXModCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6ZShPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLGUpKX0pKX1yZXR1cm4gdH1mdW5jdGlvbiBuKGUpe3JldHVybihuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiBvKGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX1mdW5jdGlvbiByKGUpe3JldHVybihyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiBhKGUsdCl7dmFyIG47aWYoXCJmdW5jdGlvblwiIT10eXBlb2Yobj10LmRvbUVsZW1lbnQ/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kb21FbGVtZW50fTp0LmRvbUVsZW1lbnRHZXR0ZXI/dC5kb21FbGVtZW50R2V0dGVyOmUuZG9tRWxlbWVudEdldHRlcj9lLmRvbUVsZW1lbnRHZXR0ZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5hcHBOYW1lfHxlLm5hbWU7aWYoIXQpdGhyb3cgRXJyb3IoXCJzaW5nbGUtc3BhJ3MgZG9tLWVsZW1lbnQtZ2V0dGVyLWhlbHBlcnMgd2FzIG5vdCBnaXZlbiBhbiBhcHBsaWNhdGlvbiBuYW1lIGFzIGEgcHJvcCwgc28gaXQgY2FuJ3QgbWFrZSBhIHVuaXF1ZSBkb20gZWxlbWVudCBjb250YWluZXIgZm9yIHRoZSByZWFjdCBhcHBsaWNhdGlvblwiKTt2YXIgbj1cInNpbmdsZS1zcGEtYXBwbGljYXRpb246XCIuY29uY2F0KHQpO3JldHVybiBmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4pO3JldHVybiBlfHwoKGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuaWQ9bixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpKSxlfX0odCkpKXRocm93IEVycm9yKFwic2luZ2xlLXNwYSdzIGRvbS1lbGVtZW50LWdldHRlci1oZWxwZXJzIHdhcyBnaXZlbiBhbiBpbnZhbGlkIGRvbUVsZW1lbnRHZXR0ZXIgZm9yIGFwcGxpY2F0aW9uIG9yIHBhcmNlbCAnXCIuY29uY2F0KHQubmFtZSxcIicuIEV4cGVjdGVkIGEgZnVuY3Rpb24sIHJlY2VpdmVkIFwiKS5jb25jYXQocihuKSkpO3JldHVybiBmdW5jdGlvbigpe3ZhciBlPW4odCk7aWYoIShlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKXRocm93IEVycm9yKFwic2luZ2xlLXNwYSdzIGRvbS1lbGVtZW50LWdldHRlci1oZWxwZXJzOiBkb21FbGVtZW50R2V0dGVyIHJldHVybmVkIGFuIGludmFsaWQgZG9tIGVsZW1lbnQgZm9yIGFwcGxpY2F0aW9uIG9yIHBhcmNlbCAnXCIuY29uY2F0KHQubmFtZSxcIicuIEV4cGVjdGVkIEhUTUxFbGVtZW50LCByZWNlaXZlZCBcIikuY29uY2F0KHIoZSkpKTtyZXR1cm4gZX19dmFyIGk9bnVsbDt0cnl7aT1yZXF1aXJlKFwicmVhY3RcIikuY3JlYXRlQ29udGV4dCgpfWNhdGNoKGUpe312YXIgYz17UmVhY3Q6bnVsbCxSZWFjdERPTTpudWxsLHJvb3RDb21wb25lbnQ6bnVsbCxsb2FkUm9vdENvbXBvbmVudDpudWxsLHJlbmRlclR5cGU6bnVsbCxlcnJvckJvdW5kYXJ5Om51bGwsZXJyb3JCb3VuZGFyeUNsYXNzOm51bGwsZG9tRWxlbWVudEdldHRlcjpudWxsLHBhcmNlbENhblVwZGF0ZTohMCxzdXBwcmVzc0NvbXBvbmVudERpZENhdGNoV2FybmluZzohMSxkb21FbGVtZW50czp7fSxyZW5kZXJSZXN1bHRzOnt9LHVwZGF0ZVJlc29sdmVzOnt9fTtmdW5jdGlvbiB1KGUpe2lmKFwib2JqZWN0XCIhPT1uKGUpKXRocm93IG5ldyBFcnJvcihcInNpbmdsZS1zcGEtcmVhY3QgcmVxdWlyZXMgYSBjb25maWd1cmF0aW9uIG9iamVjdFwiKTt2YXIgbz10KHQoe30sYyksZSk7aWYoIW8uUmVhY3QpdGhyb3cgbmV3IEVycm9yKFwic2luZ2xlLXNwYS1yZWFjdCBtdXN0IGJlIHBhc3NlZCBvcHRzLlJlYWN0XCIpO2lmKCFvLlJlYWN0RE9NKXRocm93IG5ldyBFcnJvcihcInNpbmdsZS1zcGEtcmVhY3QgbXVzdCBiZSBwYXNzZWQgb3B0cy5SZWFjdERPTVwiKTtpZighby5yb290Q29tcG9uZW50JiYhby5sb2FkUm9vdENvbXBvbmVudCl0aHJvdyBuZXcgRXJyb3IoXCJzaW5nbGUtc3BhLXJlYWN0IG11c3QgYmUgcGFzc2VkIG9wdHMucm9vdENvbXBvbmVudCBvciBvcHRzLmxvYWRSb290Q29tcG9uZW50XCIpO2lmKG8uZXJyb3JCb3VuZGFyeSYmXCJmdW5jdGlvblwiIT10eXBlb2Ygby5lcnJvckJvdW5kYXJ5KXRocm93IEVycm9yKFwiVGhlIGVycm9yQm91bmRhcnkgb3B0IGZvciBzaW5nbGUtc3BhLXJlYWN0IG11c3QgZWl0aGVyIGJlIG9taXR0ZWQgb3IgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgUmVhY3QgZWxlbWVudHNcIik7IWkmJm8uUmVhY3QuY3JlYXRlQ29udGV4dCYmKGk9by5SZWFjdC5jcmVhdGVDb250ZXh0KCkpLG8uU2luZ2xlU3BhUm9vdD1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe3QuZGlzcGxheU5hbWU9XCJTaW5nbGVTcGFSb290KFwiLmNvbmNhdChlLm5hbWUsXCIpXCIpfXJldHVybiB0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUuUmVhY3QuQ29tcG9uZW50LnByb3RvdHlwZSksdC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KHRoaXMucHJvcHMubW91bnRGaW5pc2hlZCl9LHQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7c2V0VGltZW91dCh0aGlzLnByb3BzLnVubW91bnRGaW5pc2hlZCl9LHQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3JldHVybiBzZXRUaW1lb3V0KHRoaXMucHJvcHMudXBkYXRlRmluaXNoZWQpLHRoaXMucHJvcHMuY2hpbGRyZW59LHR9KG8pO3ZhciByPXtib290c3RyYXA6cC5iaW5kKG51bGwsbyksbW91bnQ6cy5iaW5kKG51bGwsbyksdW5tb3VudDpsLmJpbmQobnVsbCxvKX07cmV0dXJuIG8ucGFyY2VsQ2FuVXBkYXRlJiYoci51cGRhdGU9bS5iaW5kKG51bGwsbykpLHJ9ZnVuY3Rpb24gcChlLHQpe3JldHVybiBlLnJvb3RDb21wb25lbnQ/UHJvbWlzZS5yZXNvbHZlKCk6ZS5sb2FkUm9vdENvbXBvbmVudCh0KS50aGVuKChmdW5jdGlvbih0KXtlLnJvb3RDb21wb25lbnQ9dH0pKX1mdW5jdGlvbiBzKGUsdCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihuLG8pe2Uuc3VwcHJlc3NDb21wb25lbnREaWRDYXRjaFdhcm5pbmd8fCFmdW5jdGlvbihlKXtpZighKGUmJlwic3RyaW5nXCI9PXR5cGVvZiBlLnZlcnNpb24mJmUudmVyc2lvbi5pbmRleE9mKFwiLlwiKT49MCkpcmV0dXJuITE7dmFyIHQ9ZS52ZXJzaW9uLnNsaWNlKDAsZS52ZXJzaW9uLmluZGV4T2YoXCIuXCIpKTt0cnl7cmV0dXJuIE51bWJlcih0KT49MTZ9Y2F0Y2goZSl7cmV0dXJuITF9fShlLlJlYWN0KXx8ZS5lcnJvckJvdW5kYXJ5fHwoZS5yb290Q29tcG9uZW50LnByb3RvdHlwZT9lLnJvb3RDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZENhdGNofHxjb25zb2xlLndhcm4oXCJzaW5nbGUtc3BhLXJlYWN0OiBcIi5jb25jYXQodC5uYW1lfHx0LmFwcE5hbWV8fHQuY2hpbGRBcHBOYW1lLFwiJ3Mgcm9vdENvbXBvbmVudCBzaG91bGQgaW1wbGVtZW50IGNvbXBvbmVudERpZENhdGNoIHRvIGF2b2lkIGFjY2lkZW50YWxseSB1bm1vdW50aW5nIHRoZSBlbnRpcmUgc2luZ2xlLXNwYSBhcHBsaWNhdGlvbi5cIikpOmNvbnNvbGUud2FybihcInNpbmdsZS1zcGEtcmVhY3Q6IFwiLmNvbmNhdCh0Lm5hbWV8fHQuYXBwTmFtZXx8dC5jaGlsZEFwcE5hbWUsXCIncyByb290Q29tcG9uZW50IGRvZXMgbm90IGltcGxlbWVudCBhbiBlcnJvciBib3VuZGFyeS4gIElmIHVzaW5nIGEgZnVuY3Rpb25hbCBjb21wb25lbnQsIGNvbnNpZGVyIHByb3ZpZGluZyBhbiBvcHRzLmVycm9yQm91bmRhcnkgdG8gc2luZ2xlU3BhUmVhY3Qob3B0cykuXCIpKSk7dmFyIHI9ZChlLHQsKGZ1bmN0aW9uKCl7bih0aGlzKX0pKSxpPWEoZSx0KSgpLGM9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5vcHRzLG49ZS5lbGVtZW50VG9SZW5kZXIsbz1lLmRvbUVsZW1lbnQscj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnJlbmRlclR5cGU/dC5yZW5kZXJUeXBlKCk6dC5yZW5kZXJUeXBlO2lmKFtcImNyZWF0ZVJvb3RcIixcInVuc3RhYmxlX2NyZWF0ZVJvb3RcIixcImNyZWF0ZUJsb2NraW5nUm9vdFwiLFwidW5zdGFibGVfY3JlYXRlQmxvY2tpbmdSb290XCJdLmluZGV4T2Yocik+PTApe3ZhciBhPXQuUmVhY3RET01bcl0obyk7cmV0dXJuIGEucmVuZGVyKG4pLGF9XCJoeWRyYXRlXCI9PT1yP3QuUmVhY3RET00uaHlkcmF0ZShuLG8pOnQuUmVhY3RET00ucmVuZGVyKG4sbyk7cmV0dXJuIG51bGx9KHtlbGVtZW50VG9SZW5kZXI6cixkb21FbGVtZW50Omksb3B0czplfSk7ZS5kb21FbGVtZW50c1t0Lm5hbWVdPWksZS5yZW5kZXJSZXN1bHRzW3QubmFtZV09Y30pKX1mdW5jdGlvbiBsKGUsdCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihuKXtlLnVubW91bnRGaW5pc2hlZD1uO3ZhciBvPWUucmVuZGVyUmVzdWx0c1t0Lm5hbWVdO28mJm8udW5tb3VudD9vLnVubW91bnQoKTplLlJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZS5kb21FbGVtZW50c1t0Lm5hbWVdKSxkZWxldGUgZS5kb21FbGVtZW50c1t0Lm5hbWVdLGRlbGV0ZSBlLnJlbmRlclJlc3VsdHNbdC5uYW1lXX0pKX1mdW5jdGlvbiBtKGUsdCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihuKXtlLnVwZGF0ZVJlc29sdmVzW3QubmFtZV18fChlLnVwZGF0ZVJlc29sdmVzW3QubmFtZV09W10pLGUudXBkYXRlUmVzb2x2ZXNbdC5uYW1lXS5wdXNoKG4pO3ZhciBvPWQoZSx0LG51bGwpLHI9ZS5yZW5kZXJSZXN1bHRzW3QubmFtZV07aWYociYmci5yZW5kZXIpci5yZW5kZXIobyk7ZWxzZXt2YXIgaT1hKGUsdCkoKTtlLlJlYWN0RE9NLnJlbmRlcihvLGkpfX0pKX1mdW5jdGlvbiBkKGUsbixvKXt2YXIgcj1lLlJlYWN0LmNyZWF0ZUVsZW1lbnQoZS5yb290Q29tcG9uZW50LG4pLGE9aT9lLlJlYWN0LmNyZWF0ZUVsZW1lbnQoaS5Qcm92aWRlcix7dmFsdWU6bn0scik6cjtyZXR1cm4oZS5lcnJvckJvdW5kYXJ5fHxuLmVycm9yQm91bmRhcnl8fGUuZXJyb3JCb3VuZGFyeUNsYXNzfHxuLmVycm9yQm91bmRhcnlDbGFzcykmJihlLmVycm9yQm91bmRhcnlDbGFzcz1lLmVycm9yQm91bmRhcnlDbGFzc3x8bi5lcnJvckJvdW5kYXJ5Q2xhc3N8fGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbih0KXtlLlJlYWN0LkNvbXBvbmVudC5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5zdGF0ZT17Y2F1Z2h0RXJyb3I6bnVsbCxjYXVnaHRFcnJvckluZm86bnVsbH0sbi5kaXNwbGF5TmFtZT1cIlNpbmdsZVNwYVJlYWN0RXJyb3JCb3VuZGFyeShcIi5jb25jYXQodC5uYW1lLFwiKVwiKX1yZXR1cm4gbi5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlLlJlYWN0LkNvbXBvbmVudC5wcm90b3R5cGUpLG4ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlLmNhdWdodEVycm9yPyhlLmVycm9yQm91bmRhcnl8fHQuZXJyb3JCb3VuZGFyeSkodGhpcy5zdGF0ZS5jYXVnaHRFcnJvcix0aGlzLnN0YXRlLmNhdWdodEVycm9ySW5mbyx0aGlzLnByb3BzKTp0aGlzLnByb3BzLmNoaWxkcmVufSxuLnByb3RvdHlwZS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihlLHQpe3RoaXMuc2V0U3RhdGUoe2NhdWdodEVycm9yOmUsY2F1Z2h0RXJyb3JJbmZvOnR9KX0sbn0oZSxuKSxhPWUuUmVhY3QuY3JlYXRlRWxlbWVudChlLmVycm9yQm91bmRhcnlDbGFzcyxuLGEpKSxhPWUuUmVhY3QuY3JlYXRlRWxlbWVudChlLlNpbmdsZVNwYVJvb3QsdCh0KHt9LG4pLHt9LHttb3VudEZpbmlzaGVkOm8sdXBkYXRlRmluaXNoZWQ6ZnVuY3Rpb24oKXtlLnVwZGF0ZVJlc29sdmVzW24ubmFtZV0mJihlLnVwZGF0ZVJlc29sdmVzW24ubmFtZV0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUoKX0pKSxkZWxldGUgZS51cGRhdGVSZXNvbHZlc1tuLm5hbWVdKX0sdW5tb3VudEZpbmlzaGVkOmZ1bmN0aW9uKCl7c2V0VGltZW91dChlLnVubW91bnRGaW5pc2hlZCl9fSksYSl9ZXhwb3J0e2kgYXMgU2luZ2xlU3BhQ29udGV4dCx1IGFzIGRlZmF1bHR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2luZ2xlLXNwYS1yZWFjdC5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBzaW5nbGVTcGFSZWFjdCBmcm9tICdzaW5nbGUtc3BhLXJlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi9zcmMvQXBwJztcblxuY29uc3QgbGlmZWN5Y2xlcyA9IHNpbmdsZVNwYVJlYWN0KHtcblx0UmVhY3QsXG5cdFJlYWN0RE9NLFxuXHRyb290Q29tcG9uZW50OiBBcHAsXG5cdGVycm9yQm91bmRhcnkoZXJyLCBpbmZvLCBwcm9wcykge1xuXHRcdC8vIEN1c3RvbWl6ZSB0aGUgcm9vdCBlcnJvciBib3VuZGFyeSBmb3IgeW91ciBtaWNyb2Zyb250ZW5kIGhlcmUuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgYm9vdHN0cmFwLCBtb3VudCwgdW5tb3VudCB9ID0gbGlmZWN5Y2xlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGgxPlBsdWdpbiBCPC9oMT5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdldmVudEZyb21NZmUnLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHsgbmFtZTogJ1VzbWFuJyB9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0RmlyZSBFdmVudFxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fOTU0X18iLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX180OTNfXyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJlIiwidCIsIm4iLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHVzaCIsImFwcGx5IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYSIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50R2V0dGVyIiwiYXBwTmFtZSIsIm5hbWUiLCJFcnJvciIsImNvbmNhdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJIVE1MRWxlbWVudCIsImkiLCJyZXF1aXJlIiwiY3JlYXRlQ29udGV4dCIsImMiLCJSZWFjdCIsIlJlYWN0RE9NIiwicm9vdENvbXBvbmVudCIsImxvYWRSb290Q29tcG9uZW50IiwicmVuZGVyVHlwZSIsImVycm9yQm91bmRhcnkiLCJlcnJvckJvdW5kYXJ5Q2xhc3MiLCJwYXJjZWxDYW5VcGRhdGUiLCJzdXBwcmVzc0NvbXBvbmVudERpZENhdGNoV2FybmluZyIsImRvbUVsZW1lbnRzIiwicmVuZGVyUmVzdWx0cyIsInVwZGF0ZVJlc29sdmVzIiwicCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsInMiLCJ2ZXJzaW9uIiwiaW5kZXhPZiIsInNsaWNlIiwiTnVtYmVyIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJjb25zb2xlIiwid2FybiIsImNoaWxkQXBwTmFtZSIsInRoaXMiLCJvcHRzIiwiZWxlbWVudFRvUmVuZGVyIiwicmVuZGVyIiwiaHlkcmF0ZSIsImwiLCJ1bm1vdW50RmluaXNoZWQiLCJ1bm1vdW50IiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsIm0iLCJQcm92aWRlciIsIkNvbXBvbmVudCIsInN0YXRlIiwiY2F1Z2h0RXJyb3IiLCJjYXVnaHRFcnJvckluZm8iLCJkaXNwbGF5TmFtZSIsImNyZWF0ZSIsInByb3BzIiwiY2hpbGRyZW4iLCJzZXRTdGF0ZSIsIlNpbmdsZVNwYVJvb3QiLCJtb3VudEZpbmlzaGVkIiwidXBkYXRlRmluaXNoZWQiLCJzZXRUaW1lb3V0IiwibGlmZWN5Y2xlcyIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJib290c3RyYXAiLCJiaW5kIiwibW91bnQiLCJ1cGRhdGUiLCJzaW5nbGVTcGFSZWFjdCIsIm9uQ2xpY2siLCJjdXN0b21FdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsImVyciIsImluZm8iXSwic291cmNlUm9vdCI6IiJ9