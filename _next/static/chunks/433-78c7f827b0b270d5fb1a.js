(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[433],{2676:function(e,t,n){"use strict";var o=n(5318);t.Z=void 0;var r=o(n(606)),a=(0,o(n(8372)).default)(r.default,"Link");t.Z=a},606:function(e,t,n){"use strict";var o=n(8);function r(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var s=i?Object.getOwnPropertyDescriptor(e,c):null;s&&(s.get||s.set)?Object.defineProperty(a,c,s):a[c]=e[c]}a.default=e,n&&n.set(e,a);return a}(n(7294)).createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.001 6.99902L17.001 7.00002C19.757 7.00002 22 9.24302 22 12C22 14.757 19.757 17 17 17L13.999 16.999C13.447 16.998 13 16.55 13 15.998C13 15.446 13.448 14.999 14 14.999H14.001L17.001 15C18.654 15 20 13.654 20 12C20 10.346 18.654 9.00002 17 9.00002L13.999 8.99902C13.447 8.99802 13 8.55002 13 7.99802C13 7.44602 13.448 6.99902 14 6.99902H14.001ZM10 14.9985H9.999L7 14.9995C5.346 14.9995 4 13.6545 4 11.9995C4 10.3455 5.346 8.99952 7 8.99952H10C10.553 8.99952 11 8.55252 11 7.99952C11 7.44752 10.553 6.99952 10 6.99952H7C4.243 6.99952 2 9.24352 2 11.9995C2 14.7565 4.243 16.9995 7.001 16.9995L10.001 16.9985C10.553 16.9985 11 16.5505 11 15.9985C11 15.4455 10.552 14.9985 10 14.9985ZM8 12C8 12.552 8.447 13 9 13H15C15.553 13 16 12.552 16 12C16 11.448 15.553 11 15 11H9C8.447 11 8 11.448 8 12Z"});t.default=a},7606:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var o=n(6156),r=n(4699),a=n(2949),i=n(2122),c=n(4184),s=n.n(c),u=n(5697),l=n.n(u),f=n(7294),d=n(1228),p=n(4425);var m=n(830),v=n(9193),g=n(4684),h=n(4957),b=n(8454),y=n(1424),w=n(4181),C=["children","className","text","defaultOpen","onOpen","onClose","onOutsideClick","open","style","tailed","placement","triggersOn"],R="Tooltip",M=["hover","click","mouseMove"],E=(0,p.Z)((function(e){var t=e.colors,n=e.darkMode,o=e.zIndexes,r=e.direction,a=e.typography,i=a.pxToRem,c=a.useText;return{root:{direction:r,fontFamily:a.fontFamily[r],opacity:0,maxWidth:i(192),minWidth:i(56),display:"inline-flex",justifyContent:"center",alignItems:"center",zIndex:o.popover,position:"absolute",MozBackfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",transform:"translate(0, 0) scale(0.8)",transition:"transform 360ms cubic-bezier(0, 0, 0.2, 1) 100ms, opacity 200ms ease 100ms"},container:{padding:[[i(8),i(12)]],borderRadius:i(4),position:"relative",zIndex:2,display:"flex",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:n?t.pallete.grey[700]:t.pallete.grey[900],"&:before":{content:'""',width:"100%",height:"100%",position:"absolute",top:"0",left:"0",borderRadius:i(4),boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.12)",zIndex:-1},"&:after":{position:"absolute",width:i(12),height:i(12),backgroundColor:n?t.pallete.grey[700]:t.pallete.grey[900],zIndex:-1}},text:c({fontSize:i(12),lineHeight:1.6666666667,color:t.white}),tail:{width:i(12),height:i(12),backgroundColor:t.transparent,position:"absolute",zIndex:1,opacity:0,visibility:"hidden",transition:"opacity 200ms ease 100ms, visibility 200ms ease 100ms","&:before":{width:"100%",height:"100%",position:"absolute",top:0,left:0,boxShadow:"2px 2px 8px 0 rgba(0, 0, 0, 0.16)",zIndex:-1}},open:{opacity:.96,"&$tailed":{"&$top":{transform:"translate(0, ".concat(i(-16),") scale(1)")},"&$bottom":{transform:"translate(0, ".concat(i(16),") scale(1)")},"&$right":{transform:"translate(".concat(i(16),", 0) scale(1)")},"&$left":{transform:"translate(".concat(i(-16),", 0) scale(1)")}}},tailed:{"& $container:after, & $container:before":{content:'""'},"& $tail":{opacity:1,visibility:"visible","&:before":{content:'""'}},"&$top":{"& $container:after":{borderRadius:"0",borderBottomRightRadius:i(2),transform:"translateY(50%) rotate(45deg)",bottom:"0"},"& $tail":{transform:"translateY(50%) rotate(45deg)",bottom:"0","&:before":{borderRadius:"0",borderBottomRightRadius:i(2)}}},"&$right":{"& $container:after":{borderRadius:"0",borderBottomLeftRadius:i(2),transform:"translateX(-50%) rotate(45deg)",left:"0"},"& $tail":{transform:"translateX(-50%) rotate(45deg)",left:"0","&:before":{borderRadius:"0",borderBottomLeftRadius:i(2)}}},"&$left":{"& $container:after":{borderRadius:"0",borderTopRightRadius:i(2),transform:"translateX(50%) rotate(45deg)",right:"0"},"& $tail":{transform:"translateX(50%) rotate(45deg)",right:"0","&:before":{borderRadius:"0",borderTopRightRadius:i(2)}}},"&$bottom":{"& $container:after":{borderRadius:"0",borderTopLeftRadius:i(2),transform:"translateY(-50%) rotate(45deg)",top:"0"},"& $tail":{transform:"translateY(-50%) rotate(45deg)",top:"0","&:before":{borderRadius:"0",borderTopLeftRadius:i(2)}}}},floated:{transform:"translate(0, ".concat(i(-8),") scale(1)")},top:{transform:"translate(0, ".concat(i(-8),") scale(1)")},left:{transform:"translate(".concat(i(-8),", 0) scale(1)")},right:{transform:"translate(".concat(i(8),", 0) scale(1)")},bottom:{transform:"translate(0, ".concat(i(8),") scale(1)")}}}),{name:"Sonnat".concat(R)}),x="undefined"===typeof window,k=function(e,t,n,o,r,a){var i=document.body.scrollWidth,c=document.body.scrollHeight,s={horizontal:!0,vertical:!0};return 0<=e&&e+n<=i?s.horizontal=!1:0>e?s.left=!0:s.right=!0,0<=t&&("mouseMove"!==a&&"bottom"===r?t+o<=c&&(s.vertical=!1):s.vertical=!1),s},Z=function(e,t,n){var o=(0,v.Z)(n),r=n.getBoundingClientRect(),a=t.getBoundingClientRect(),i=a.width,c=a.height;switch(e){case"left":return{top:o.top+r.height/2-c/2,left:o.left-i};case"right":return{top:o.top+r.height/2-c/2,left:o.left+r.width};case"bottom":return{top:o.top+r.height,left:o.left+r.width/2-i/2};case"top":default:return{top:o.top-c,left:o.left+r.width/2-i/2}}},L=function(e,t,n){var o=Z(e,t,n),r=t.getBoundingClientRect(),a=r.width,i=r.height,c=o.left-a/2,s=o.top-i;return function(e,t,n,o){var r=o.tooltip,a=o.anchor,i=e,c=t;return n.vertical?(c=function(e){switch(e){case"top":return"bottom";case"bottom":return"top";case"left":return"right";case"right":return"left";default:return""}}(t),i=Z(c,r,a)):n.horizontal&&(n.left?i=Z(c="right",r,a):n.right&&(i=Z(c="left",r,a))),{newPosition:i,newPlacement:c}}(o,e,k(c,s,a,i,e),{tooltip:t,anchor:n})},O=f.forwardRef((function(e,t){var n,c=e.children,u=e.className,l=e.text,p=e.defaultOpen,v=e.onOpen,Z=e.onClose,O=e.onOutsideClick,D=e.open,P=e.style,$=void 0===P?{}:P,T=e.tailed,S=void 0!==T&&T,z=e.placement,N=void 0===z?"top":z,I=e.triggersOn,j=void 0===I?"hover":I,B=(0,a.Z)(e,C),H=E(),_=f.useRef(!1),A=f.useRef("tooltip".concat((0,g.Z)())),X=f.useRef(),W=f.useRef(),Y=(0,h.Z)(X,t),U=(0,b.Z)(N),F=f.useState(N),V=(0,r.Z)(F,2),q=V[0],G=V[1],J=f.useState({top:0,left:0}),K=(0,r.Z)(J,2),Q=K[0],ee=K[1],te=(0,y.Z)(D,(null!=D||null!=p)&&p,R),ne=(0,r.Z)(te,2),oe=ne[0],re=ne[1];f.useEffect((function(){var e;!_.current&&X.current&&W.current&&(e=function(){_.current=!0;var e=L(N,X.current,W.current),t=e.newPlacement,n=e.newPosition;ee(n),G(t)},"undefined"!==typeof window&&setTimeout((function(){return requestAnimationFrame(e)})))}),[N]),f.useEffect((function(){if(_.current&&U!==N){var e=L(N,X.current,W.current),t=e.newPlacement,n=e.newPosition;ee(n),G(t)}}),[N,U]);var ae=f.useCallback((function(e){null==W.current||W.current===e.target||W.current.contains(e.target)||null==X.current||X.current===e.target||X.current.contains(e.target)||O&&O(e)}),[O]),ie=function(e,t){var n,o=t.triggersOn,r=void 0===o?"hover":o,a=t.reference,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s={};if(null==e||!f.isValidElement(e))throw new Error("[Sonnat] The `children` prop has to be a single valid element.");try{n=f.Children.only(e),s=e.props}catch(l){throw new Error("[Sonnat] The `children` prop has to be a single valid element.")}var u={ref:function(t){(0,m.Z)(a,t),(0,m.Z)(e.ref,t)}};if(M.includes(r))switch(r){case"click":u.onClick=function(e){c.onClick(e),s.onClick&&s.onClick(e)};break;case"hover":u.onMouseEnter=function(e){c.onMouseEnter(e),s.onMouseEnter&&s.onMouseEnter(e)},u.onMouseLeave=function(e){c.onMouseLeave(e),s.onMouseLeave&&s.onMouseLeave(e)};break;case"mouseMove":u.onMouseEnter=function(e){c.onMouseEnter(e),s.onMouseEnter&&s.onMouseEnter(e)},u.onMouseMove=function(e){c.onMouseMove(e),s.onMouseMove&&s.onMouseMove(e)},u.onMouseLeave=function(e){c.onMouseLeave(e),s.onMouseLeave&&s.onMouseLeave(e)};break;default:return}return f.cloneElement(n,(0,i.Z)({},u))}(c,{triggersOn:j,reference:W},{onClick:function(e){var t=L(N,X.current,W.current),n=t.newPlacement,o=t.newPosition;ee(o),G(n),oe?(Z&&Z(e),re(!1)):(v&&v(e),re(!0))},onMouseEnter:function(e){var t=L(N,X.current,W.current),n=t.newPlacement,o=t.newPosition;ee(o),G(n),v&&v(e),re(!0)},onMouseLeave:function(e){Z&&Z(e),re(!1)},onMouseMove:function(e){var t=X.current.getBoundingClientRect(),n=t.width,o=t.height,r=e.pageX-n/2,a=e.pageY-o;ee({left:r,top:a});var i=k(r,a,n,o,q,j);i.vertical?(a=e.pageY,G("bottom")):i.horizontal?(a=e.pageY-o/2,i.left?(r=e.pageX,G("right")):i.right&&(r=e.pageX-n,G("left"))):G("top")}});return x||(0,w.Z)({element:document,eventName:"mousedown",listener:ae,options:{useCapture:!0}},oe&&null!=O),f.createElement(f.Fragment,null,f.createElement(d.Z,{"aria-hidden":!oe},f.createElement("div",(0,i.Z)({tabIndex:-1,role:"tooltip",ref:Y,id:A.current,style:(0,i.Z)({left:Q.left,top:Q.top},$),className:s()(H.root,u,(n={},(0,o.Z)(n,H[q],"mouseMove"!==j),(0,o.Z)(n,H.tailed,"mouseMove"!==j&&S),(0,o.Z)(n,H.open,oe),(0,o.Z)(n,H.floated,"mouseMove"===j),n))},B),f.createElement("div",{className:H.container},f.createElement("span",{className:H.text},l)),f.createElement("div",{className:H.tail}))),ie)}));O.displayName=R,O.propTypes={text:l().string.isRequired,children:l().element.isRequired,className:l().string,open:l().bool,defaultOpen:l().bool,tailed:l().bool,style:l().object,onOpen:l().func,onClose:l().func,onOutsideClick:l().func,placement:l().oneOf(["left","right","top","bottom"]),triggersOn:l().oneOf(M)};var D=O},4684:function(e,t,n){"use strict";function o(){return"_"+Math.random().toString(36).substr(2,9)}n.d(t,{Z:function(){return o}})},9193:function(e,t,n){"use strict";function o(e){var t=0,n=0;do{t+=e.offsetTop,n+=e.offsetLeft,e=e.offsetParent}while(e);return{top:t<0?0:t,left:n<0?0:n}}n.d(t,{Z:function(){return o}})},4181:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(2122),r=n(2949),a=n(7294),i=["useCapture"],c=function(){var e=!1,t=function(){};try{var n=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",t,n),window.removeEventListener("test",t,n)}catch(o){return!1}return e};function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.element,s=void 0===n?null:n,u=e.eventName,l=void 0===u?"":u,f=e.listener,d=void 0===f?function(){}:f,p=e.options,m=void 0===p?{useCapture:!1}:p,v=(0,a.useRef)();(0,a.useEffect)((function(){v.current=d}),[d]),(0,a.useEffect)((function(){var e=function(e){return v.current(e)},n=m.useCapture,a=(0,r.Z)(m,i),u=c()?(0,o.Z)({capture:n||!1},a):n||!1;return s&&t&&s.addEventListener(l,e,u),function(){s&&s.removeEventListener(l,e,u)}}),[s,l,t,m])}},8454:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(7294);function r(e){var t=(0,o.useRef)();return(0,o.useEffect)((function(){t.current=e}),[e]),t.current}},640:function(e,t,n){"use strict";var o=n(1742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,s,u,l=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),c=document.createRange(),s=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(u),c.selectNodeContents(u),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),u&&document.body.removeChild(u),i()}return l}},6260:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(7294),r=n(640),a=n.n(r);function i(e,t){var n=(0,o.useState)(!1),r=n[0],i=n[1],c=t&&t.successDuration;return(0,o.useEffect)((function(){if(r&&c){var e=setTimeout((function(){i(!1)}),c);return function(){clearTimeout(e)}}}),[r,c]),[r,function(){var t=a()(e);i(t)}]}},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);