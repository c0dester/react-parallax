!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],e):"object"==typeof exports?exports["react-parallax"]=e(require("react"),require("react-dom")):t["react-parallax"]=e(t.React,t.ReactDOM)}(this,function(t,e){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Background=e.Parallax=void 0;var o=n(4),r=i(o),s=n(3),a=i(s);e["default"]=r["default"],e.Parallax=r["default"],e.Background=a["default"]},function(e,n){e.exports=t},function(t,e){"use strict";function n(t,e){if(!e)return!1;var n=t.getBoundingClientRect().top,i=t.getBoundingClientRect().bottom;return 0>=n&&i>=0||n>=0&&i<=window.innerHeight||n<=window.innerHeight&&i>=window.innerHeight}function i(t){if(!t)return 0;var e=window,n=document,i=n.documentElement,o=n.getElementsByTagName("body")[0];return e.innerHeight||i.clientHeight||o.clientHeight}function o(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}function r(t){for(var e=0;t;)e+=t.offsetTop-t.scrollTop+t.clientTop,t=t.offsetParent;return{y:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.isScrolledIntoView=n,e.getWindowHeight=i,e.canUseDOM=o,e.getPosition=r},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(1),u=i(l),c=function(t){function e(){return o(this,e),r(this,Object.getPrototypeOf(e).apply(this,arguments))}return s(e,t),a(e,[{key:"isParallaxBackground",value:function(){return!0}},{key:"render",value:function(){return u["default"].createElement("div",{className:"react-parallax-background"},this.props.children)}}]),e}(u["default"].Component);e["default"]=c},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(1),u=i(l),c=n(5),d=i(c),h=n(2),p=function(t){function e(t){o(this,e);var n=r(this,Object.getPrototypeOf(e).call(this,t));return n.canUseDOM=(0,h.canUseDOM)(),n.ReactDOM=d["default"].findDOMNode?d["default"]:u["default"],n.node=null,n.setState({splitChildren:n.getSplitChildren()}),n.windowHeight=(0,h.getWindowHeight)(n.canUseDOM),n.childStyle=n.getChildStyle(),n.timestamp=Date.now(),n.autobind(),n}return s(e,t),a(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({splitChildren:this.getSplitChildren()})}},{key:"autobind",value:function(){this.onScroll=this.onScroll.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.updatePosition=this.updatePosition.bind(this),this.onWindowLoad=this.onWindowLoad.bind(this)}},{key:"render",value:function(){var t=this;return u["default"].createElement("div",{className:"react-parallax "+(this.props.className?this.props.className:"")},this.props.bgImage?u["default"].createElement("img",{className:"react-parallax-bgimage",src:this.props.bgImage,ref:"bgImage",alt:""}):"",this.state.splitChildren.bgChildren.length>0?u["default"].createElement("div",{className:"react-parallax-background-children",ref:function(e){return t.bgMounted(e)}},this.state.splitChildren.bgChildren):"",u["default"].createElement("div",{className:"react-parallax-content",style:this.childStyle,ref:"content"},this.state.splitChildren.children))}},{key:"componentWillUnmount",value:function(){this.canUseDOM&&(document.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"componentDidMount",value:function(){this.canUseDOM&&(document.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1)),this.node=this.ReactDOM.findDOMNode(this),this.img=this.refs.bgImage?this.ReactDOM.findDOMNode(this.refs.bgImage):null,this.updatePosition(),this.setParallaxStyle(),this.setInitialBackgroundStyles(this.img),this.setInitialBackgroundStyles(this.bg)}},{key:"bgMounted",value:function(t){this.bg=this.ReactDOM.findDOMNode(t)}},{key:"onScroll",value:function(t){if(this.canUseDOM){var e=Date.now();e-this.timestamp>=10&&(0,h.isScrolledIntoView)(this.node,this.canUseDOM)&&(window.requestAnimationFrame(this.updatePosition),this.timestamp=e)}}},{key:"onWindowLoad",value:function(){this.updatePosition()}},{key:"getSplitChildren",value:function(){var t=[],e=u["default"].Children.toArray(this.props.children);return e.forEach(function(n,i){n.type&&n.type.prototype&&n.type.prototype.isParallaxBackground&&(t=t.concat(e.splice(i,1)))}),{bgChildren:t,children:e}}},{key:"updatePosition",value:function(){var t=!1,e=this.ReactDOM.findDOMNode(this.refs.content);this.contentHeight=e.getBoundingClientRect().height,this.contentWidth=this.node.getBoundingClientRect().width,this.img&&this.img.naturalWidth/this.img.naturalHeight<this.contentWidth/(this.contentHeight+this.props.strength)&&(t=!0);var n=this.node.getBoundingClientRect();n&&this.img&&this.setImagePosition(n.top,t),n&&this.bg&&this.state.splitChildren.bgChildren.length>0&&this.setBackgroundPosition(n.top)}},{key:"setImagePosition",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],n=this.props.bgHeight||(e?"auto":Math.floor(this.contentHeight+Math.abs(this.props.strength))+"px"),i=this.props.bgWidth||(e?this.contentWidth+"px":"auto");if(this.props.disabled!==!0){var o=o=-1*Math.floor((t+this.contentHeight-.25*this.props.strength)/this.windowHeight*this.props.strength);this.img.style.WebkitTransform="translate3d(-50%, "+o+"px, 0)",this.img.style.transform="translate3d(-50%, "+o+"px, 0)",this.img.style.height=n,this.img.style.width=i,this.props.blur&&(this.img.style.WebkitFilter="blur("+this.props.blur+"px)",this.img.style.filter="blur("+this.props.blur+"px)")}}},{key:"setBackgroundPosition",value:function(t){var e=e=-1*Math.floor((t+this.contentHeight-.25*this.props.strength)/this.windowHeight*this.props.strength);this.bg.style.WebkitTransform="translate3d(-50%, "+e+"px, 0)",this.bg.style.transform="translate3d(-50%, "+e+"px, 0)"}},{key:"setInitialBackgroundStyles",value:function(t){t&&(t.style.position="absolute",t.style.left="50%",t.style.WebkitTransformStyle="preserve-3d",t.style.WebkitBackfaceVisibility="hidden",t.style.MozBackfaceVisibility="hidden",t.style.MsBackfaceVisibility="hidden")}},{key:"onWindowResize",value:function(){this.windowHeight=(0,h.getWindowHeight)(this.canUseDOM),this.updatePosition()}},{key:"setParallaxStyle",value:function(){this.node&&(this.node.style.position="relative",this.node.style.overflow="hidden")}},{key:"getChildStyle",value:function(){return{position:"relative"}}},{key:"log",value:function(){this.props.log&&console.log(arguments)}}]),e}(u["default"].Component);p.propTypes={bgImage:u["default"].PropTypes.string,bgWidth:u["default"].PropTypes.string,bgHeight:u["default"].PropTypes.string,strength:u["default"].PropTypes.number,blur:u["default"].PropTypes.number},p.defaultProps={strength:100,blur:0,log:!1,disabled:!1},e["default"]=p},function(t,n){t.exports=e}])});