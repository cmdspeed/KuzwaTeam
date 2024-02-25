import{o as se,r as Ie,j as a,L as Ze,N as er}from"./index-oltjzBK-.js";const W="/KuzwaTeam/assets/icon-BnwdXYIT.svg";var P=function(){return P=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},P.apply(this,arguments)};function je(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var b="-ms-",ae="-moz-",f="-webkit-",St="comm",$e="rule",Je="decl",tr="@import",jt="@keyframes",rr="@layer",kt=Math.abs,Qe=String.fromCharCode,We=Object.assign;function nr(e,t){return E(e,0)^45?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}function Ct(e){return e.trim()}function D(e,t){return(e=t.exec(e))?e[0]:e}function d(e,t,r){return e.replace(t,r)}function ye(e,t,r){return e.indexOf(t,r)}function E(e,t){return e.charCodeAt(t)|0}function X(e,t,r){return e.slice(t,r)}function R(e){return e.length}function It(e){return e.length}function oe(e,t){return t.push(e),e}function ir(e,t){return e.map(t).join("")}function ot(e,t){return e.filter(function(r){return!D(r,t)})}var Ae=1,Z=1,$t=0,z=0,$=0,ee="";function Ee(e,t,r,n,i,o,s,c){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:Ae,column:Z,length:s,return:"",siblings:c}}function M(e,t){return We(Ee("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Y(e){for(;e.root;)e=M(e.root,{children:[e]});oe(e,e.siblings)}function or(){return $}function ar(){return $=z>0?E(ee,--z):0,Z--,$===10&&(Z=1,Ae--),$}function O(){return $=z<$t?E(ee,z++):0,Z++,$===10&&(Z=1,Ae++),$}function K(){return E(ee,z)}function ve(){return z}function Pe(e,t){return X(ee,e,t)}function Ke(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sr(e){return Ae=Z=1,$t=R(ee=e),z=0,[]}function cr(e){return ee="",e}function Te(e){return Ct(Pe(z-1,He(e===91?e+2:e===40?e+1:e)))}function lr(e){for(;($=K())&&$<33;)O();return Ke(e)>2||Ke($)>3?"":" "}function ur(e,t){for(;--t&&O()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return Pe(e,ve()+(t<6&&K()==32&&O()==32))}function He(e){for(;O();)switch($){case e:return z;case 34:case 39:e!==34&&e!==39&&He($);break;case 40:e===41&&He(e);break;case 92:O();break}return z}function dr(e,t){for(;O()&&e+$!==57;)if(e+$===84&&K()===47)break;return"/*"+Pe(t,z-1)+"*"+Qe(e===47?e:O())}function pr(e){for(;!Ke(K());)O();return Pe(e,z)}function hr(e){return cr(be("",null,null,null,[""],e=sr(e),0,[0],e))}function be(e,t,r,n,i,o,s,c,l){for(var h=0,m=0,x=s,y=0,g=0,S=0,C=1,_=1,I=1,j=0,w="",k=i,A=o,v=n,p=w;_;)switch(S=j,j=O()){case 40:if(S!=108&&E(p,x-1)==58){ye(p+=d(Te(j),"&","&\f"),"&\f",kt(h?c[h-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:p+=Te(j);break;case 9:case 10:case 13:case 32:p+=lr(S);break;case 92:p+=ur(ve()-1,7);continue;case 47:switch(K()){case 42:case 47:oe(fr(dr(O(),ve()),t,r,l),l);break;default:p+="/"}break;case 123*C:c[h++]=R(p)*I;case 125*C:case 59:case 0:switch(j){case 0:case 125:_=0;case 59+m:I==-1&&(p=d(p,/\f/g,"")),g>0&&R(p)-x&&oe(g>32?st(p+";",n,r,x-1,l):st(d(p," ","")+";",n,r,x-2,l),l);break;case 59:p+=";";default:if(oe(v=at(p,t,r,h,m,i,c,w,k=[],A=[],x,o),o),j===123)if(m===0)be(p,t,v,v,k,o,x,c,A);else switch(y===99&&E(p,3)===110?100:y){case 100:case 108:case 109:case 115:be(e,v,v,n&&oe(at(e,v,v,0,0,i,c,w,i,k=[],x,A),A),i,A,x,c,n?k:A);break;default:be(p,v,v,v,[""],A,0,c,A)}}h=m=g=0,C=I=1,w=p="",x=s;break;case 58:x=1+R(p),g=S;default:if(C<1){if(j==123)--C;else if(j==125&&C++==0&&ar()==125)continue}switch(p+=Qe(j),j*C){case 38:I=m>0?1:(p+="\f",-1);break;case 44:c[h++]=(R(p)-1)*I,I=1;break;case 64:K()===45&&(p+=Te(O())),y=K(),m=x=R(w=p+=pr(ve())),j++;break;case 45:S===45&&R(p)==2&&(C=0)}}return o}function at(e,t,r,n,i,o,s,c,l,h,m,x){for(var y=i-1,g=i===0?o:[""],S=It(g),C=0,_=0,I=0;C<n;++C)for(var j=0,w=X(e,y+1,y=kt(_=s[C])),k=e;j<S;++j)(k=Ct(_>0?g[j]+" "+w:d(w,/&\f/g,g[j])))&&(l[I++]=k);return Ee(e,t,r,i===0?$e:c,l,h,m,x)}function fr(e,t,r,n){return Ee(e,t,r,St,Qe(or()),X(e,2,-2),0,n)}function st(e,t,r,n,i){return Ee(e,t,r,Je,X(e,0,n),X(e,n+1,-1),n,i)}function At(e,t,r){switch(nr(e,t)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 4789:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+ae+e+b+e+e;case 5936:switch(E(e,t+11)){case 114:return f+e+b+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+b+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+b+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return f+e+b+e+e;case 6165:return f+e+b+"flex-"+e+e;case 5187:return f+e+d(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+b+"flex-$1$2")+e;case 5443:return f+e+b+"flex-item-"+d(e,/flex-|-self/g,"")+(D(e,/flex-|baseline/)?"":b+"grid-row-"+d(e,/flex-|-self/g,""))+e;case 4675:return f+e+b+"flex-line-pack"+d(e,/align-content|flex-|-self/g,"")+e;case 5548:return f+e+b+d(e,"shrink","negative")+e;case 5292:return f+e+b+d(e,"basis","preferred-size")+e;case 6060:return f+"box-"+d(e,"-grow","")+f+e+b+d(e,"grow","positive")+e;case 4554:return f+d(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4200:if(!D(e,/flex-|baseline/))return b+"grid-column-align"+X(e,t)+e;break;case 2592:case 3360:return b+d(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,D(n.props,/grid-\w+-end/)})?~ye(e+(r=r[t].value),"span",0)?e:b+d(e,"-start","")+e+b+"grid-row-span:"+(~ye(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(e,/\d+/))+";":b+d(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?e:b+d(d(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-t>6)switch(E(e,t+1)){case 109:if(E(e,t+4)!==45)break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+ae+(E(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ye(e,"stretch",0)?At(d(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return d(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,s,c,l,h){return b+i+":"+o+h+(s?b+i+"-span:"+(c?l:+l-+o)+h:"")+e});case 4949:if(E(e,t+6)===121)return d(e,":",":"+f)+e;break;case 6444:switch(E(e,E(e,14)===45?18:11)){case 120:return d(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+f+(E(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+b+"$2box$3")+e;case 100:return d(e,":",":"+b)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return d(e,"scroll-","scroll-snap-")+e}return e}function ke(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function mr(e,t,r,n){switch(e.type){case rr:if(e.children.length)break;case tr:case Je:return e.return=e.return||e.value;case St:return"";case jt:return e.return=e.value+"{"+ke(e.children,n)+"}";case $e:if(!R(e.value=e.props.join(",")))return""}return R(r=ke(e.children,n))?e.return=e.value+"{"+r+"}":""}function gr(e){var t=It(e);return function(r,n,i,o){for(var s="",c=0;c<t;c++)s+=e[c](r,n,i,o)||"";return s}}function xr(e){return function(t){t.root||(t=t.return)&&e(t)}}function yr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Je:e.return=At(e.value,e.length,r);return;case jt:return ke([M(e,{value:d(e.value,"@","@"+f)})],n);case $e:if(e.length)return ir(r=e.props,function(i){switch(D(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Y(M(e,{props:[d(i,/:(read-\w+)/,":"+ae+"$1")]})),Y(M(e,{props:[i]})),We(e,{props:ot(r,n)});break;case"::placeholder":Y(M(e,{props:[d(i,/:(plac\w+)/,":"+f+"input-$1")]})),Y(M(e,{props:[d(i,/:(plac\w+)/,":"+ae+"$1")]})),Y(M(e,{props:[d(i,/:(plac\w+)/,b+"input-$1")]})),Y(M(e,{props:[i]})),We(e,{props:ot(r,n)});break}return""})}}var vr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},N={},J=typeof process<"u"&&N!==void 0&&(N.REACT_APP_SC_ATTR||N.SC_ATTR)||"data-styled",Et="active",Pt="data-styled-version",_e="6.1.8",Ve=`/*!sc*/
`,et=typeof window<"u"&&"HTMLElement"in window,br=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&N!==void 0&&N.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&N.REACT_APP_SC_DISABLE_SPEEDY!==""?N.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&N.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&N!==void 0&&N.SC_DISABLE_SPEEDY!==void 0&&N.SC_DISABLE_SPEEDY!==""&&N.SC_DISABLE_SPEEDY!=="false"&&N.SC_DISABLE_SPEEDY),Ne=Object.freeze([]),Q=Object.freeze({});function wr(e,t,r){return r===void 0&&(r=Q),e.theme!==r.theme&&e.theme||t||r.theme}var _t=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Sr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jr=/(^-|-$)/g;function ct(e){return e.replace(Sr,"-").replace(jr,"")}var kr=/(a)(d)/gi,me=52,lt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ye(e){var t,r="";for(t=Math.abs(e);t>me;t=t/me|0)r=lt(t%me)+r;return(lt(t%me)+r).replace(kr,"$1-$2")}var De,Nt=5381,U=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},zt=function(e){return U(Nt,e)};function Cr(e){return Ye(zt(e)>>>0)}function Ir(e){return e.displayName||e.name||"Component"}function Le(e){return typeof e=="string"&&!0}var Ot=typeof Symbol=="function"&&Symbol.for,Rt=Ot?Symbol.for("react.memo"):60115,$r=Ot?Symbol.for("react.forward_ref"):60112,Ar={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Er={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pr=((De={})[$r]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},De[Rt]=Tt,De);function ut(e){return("type"in(t=e)&&t.type.$$typeof)===Rt?Tt:"$$typeof"in e?Pr[e.$$typeof]:Ar;var t}var _r=Object.defineProperty,Nr=Object.getOwnPropertyNames,dt=Object.getOwnPropertySymbols,zr=Object.getOwnPropertyDescriptor,Or=Object.getPrototypeOf,pt=Object.prototype;function Dt(e,t,r){if(typeof t!="string"){if(pt){var n=Or(t);n&&n!==pt&&Dt(e,n,r)}var i=Nr(t);dt&&(i=i.concat(dt(t)));for(var o=ut(e),s=ut(t),c=0;c<i.length;++c){var l=i[c];if(!(l in Er||r&&r[l]||s&&l in s||o&&l in o)){var h=zr(t,l);try{_r(e,l,h)}catch{}}}}return e}function V(e){return typeof e=="function"}function tt(e){return typeof e=="object"&&"styledComponentId"in e}function G(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ht(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function ce(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ue(e,t,r){if(r===void 0&&(r=!1),!r&&!ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ue(e[n],t[n]);else if(ce(t))for(var n in t)e[n]=Ue(e[n],t[n]);return e}function rt(e,t){Object.defineProperty(e,"toString",{value:t})}function le(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Rr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,o=i;t>=o;)if((o<<=1)<0)throw le(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(c,r[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n,s=i;s<o;s++)r+="".concat(this.tag.getRule(s)).concat(Ve);return r},e}(),we=new Map,Ce=new Map,Se=1,ge=function(e){if(we.has(e))return we.get(e);for(;Ce.has(Se);)Se++;var t=Se++;return we.set(e,t),Ce.set(t,e),t},Tr=function(e,t){Se=t+1,we.set(e,t),Ce.set(t,e)},Dr="style[".concat(J,"][").concat(Pt,'="').concat(_e,'"]'),Lr=new RegExp("^".concat(J,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Br=function(e,t,r){for(var n,i=r.split(","),o=0,s=i.length;o<s;o++)(n=i[o])&&e.registerName(t,n)},Mr=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Ve),i=[],o=0,s=n.length;o<s;o++){var c=n[o].trim();if(c){var l=c.match(Lr);if(l){var h=0|parseInt(l[1],10),m=l[2];h!==0&&(Tr(m,h),Br(e,m,l[3]),e.getTag().insertRules(h,i)),i.length=0}else i.push(c)}}};function Fr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Lt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(c){var l=Array.from(c.querySelectorAll("style[".concat(J,"]")));return l[l.length-1]}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(J,Et),n.setAttribute(Pt,_e);var s=Fr();return s&&n.setAttribute("nonce",s),r.insertBefore(n,o),n},Gr=function(){function e(t){this.element=Lt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var s=n[i];if(s.ownerNode===r)return s}throw le(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Wr=function(){function e(t){this.element=Lt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Kr=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ft=et,Hr={isServer:!et,useCSSOMInjection:!br},Bt=function(){function e(t,r,n){t===void 0&&(t=Q),r===void 0&&(r={});var i=this;this.options=P(P({},Hr),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&et&&ft&&(ft=!1,function(o){for(var s=document.querySelectorAll(Dr),c=0,l=s.length;c<l;c++){var h=s[c];h&&h.getAttribute(J)!==Et&&(Mr(o,h),h.parentNode&&h.parentNode.removeChild(h))}}(this)),rt(this,function(){return function(o){for(var s=o.getTag(),c=s.length,l="",h=function(x){var y=function(I){return Ce.get(I)}(x);if(y===void 0)return"continue";var g=o.names.get(y),S=s.getGroup(x);if(g===void 0||S.length===0)return"continue";var C="".concat(J,".g").concat(x,'[id="').concat(y,'"]'),_="";g!==void 0&&g.forEach(function(I){I.length>0&&(_+="".concat(I,","))}),l+="".concat(S).concat(C,'{content:"').concat(_,'"}').concat(Ve)},m=0;m<c;m++)h(m);return l}(i)})}return e.registerId=function(t){return ge(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(P(P({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new Kr(i):n?new Gr(i):new Wr(i)}(this.options),new Rr(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ge(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ge(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ge(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Yr=/&/g,Ur=/^\s*\/\/.*$/gm;function Mt(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Mt(r.children,t)),r})}function qr(e){var t,r,n,i=e===void 0?Q:e,o=i.options,s=o===void 0?Q:o,c=i.plugins,l=c===void 0?Ne:c,h=function(y,g,S){return S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(t):y},m=l.slice();m.push(function(y){y.type===$e&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Yr,r).replace(n,h))}),s.prefix&&m.push(yr),m.push(mr);var x=function(y,g,S,C){g===void 0&&(g=""),S===void 0&&(S=""),C===void 0&&(C="&"),t=C,r=g,n=new RegExp("\\".concat(r,"\\b"),"g");var _=y.replace(Ur,""),I=hr(S||g?"".concat(S," ").concat(g," { ").concat(_," }"):_);s.namespace&&(I=Mt(I,s.namespace));var j=[];return ke(I,gr(m.concat(xr(function(w){return j.push(w)})))),j};return x.hash=l.length?l.reduce(function(y,g){return g.name||le(15),U(y,g.name)},Nt).toString():"",x}var Xr=new Bt,qe=qr(),Ft=se.createContext({shouldForwardProp:void 0,styleSheet:Xr,stylis:qe});Ft.Consumer;se.createContext(void 0);function mt(){return Ie.useContext(Ft)}var Zr=function(){function e(t,r){var n=this;this.inject=function(i,o){o===void 0&&(o=qe);var s=n.name+o.hash;i.hasNameForId(n.id,s)||i.insertRules(n.id,s,o(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,rt(this,function(){throw le(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=qe),this.name+t.hash},e}(),Jr=function(e){return e>="A"&&e<="Z"};function gt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Jr(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Gt=function(e){return e==null||e===!1||e===""},Wt=function(e){var t,r,n=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Gt(o)&&(Array.isArray(o)&&o.isCss||V(o)?n.push("".concat(gt(i),":"),o,";"):ce(o)?n.push.apply(n,je(je(["".concat(i," {")],Wt(o),!1),["}"],!1)):n.push("".concat(gt(i),": ").concat((t=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in vr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function H(e,t,r,n){if(Gt(e))return[];if(tt(e))return[".".concat(e.styledComponentId)];if(V(e)){if(!V(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return H(i,t,r,n)}var o;return e instanceof Zr?r?(e.inject(r,n),[e.getName(n)]):[e]:ce(e)?Wt(e):Array.isArray(e)?Array.prototype.concat.apply(Ne,e.map(function(s){return H(s,t,r,n)})):[e.toString()]}function Qr(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(V(r)&&!tt(r))return!1}return!0}var Vr=zt(_e),en=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Qr(t),this.componentId=r,this.baseHash=U(Vr,r),this.baseStyle=n,Bt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=G(i,this.staticRulesId);else{var o=ht(H(this.rules,t,r,n)),s=Ye(U(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,s)){var c=n(o,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,c)}i=G(i,s),this.staticRulesId=s}else{for(var l=U(this.baseHash,n.hash),h="",m=0;m<this.rules.length;m++){var x=this.rules[m];if(typeof x=="string")h+=x;else if(x){var y=ht(H(x,t,r,n));l=U(l,y+m),h+=y}}if(h){var g=Ye(l>>>0);r.hasNameForId(this.componentId,g)||r.insertRules(this.componentId,g,n(h,".".concat(g),void 0,this.componentId)),i=G(i,g)}}return i},e}(),Kt=se.createContext(void 0);Kt.Consumer;var Be={};function tn(e,t,r){var n=tt(e),i=e,o=!Le(e),s=t.attrs,c=s===void 0?Ne:s,l=t.componentId,h=l===void 0?function(k,A){var v=typeof k!="string"?"sc":ct(k);Be[v]=(Be[v]||0)+1;var p="".concat(v,"-").concat(Cr(_e+v+Be[v]));return A?"".concat(A,"-").concat(p):p}(t.displayName,t.parentComponentId):l,m=t.displayName,x=m===void 0?function(k){return Le(k)?"styled.".concat(k):"Styled(".concat(Ir(k),")")}(e):m,y=t.displayName&&t.componentId?"".concat(ct(t.displayName),"-").concat(t.componentId):t.componentId||h,g=n&&i.attrs?i.attrs.concat(c).filter(Boolean):c,S=t.shouldForwardProp;if(n&&i.shouldForwardProp){var C=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;S=function(k,A){return C(k,A)&&_(k,A)}}else S=C}var I=new en(r,y,n?i.componentStyle:void 0);function j(k,A){return function(v,p,te){var ue=v.attrs,Ut=v.componentStyle,qt=v.defaultProps,Xt=v.foldedComponentIds,Zt=v.styledComponentId,Jt=v.target,Qt=se.useContext(Kt),Vt=mt(),ze=v.shouldForwardProp||Vt.shouldForwardProp,nt=wr(p,Qt,qt)||Q,T=function(pe,ne,he){for(var ie,F=P(P({},ne),{className:void 0,theme:he}),Re=0;Re<pe.length;Re+=1){var fe=V(ie=pe[Re])?ie(F):ie;for(var B in fe)F[B]=B==="className"?G(F[B],fe[B]):B==="style"?P(P({},F[B]),fe[B]):fe[B]}return ne.className&&(F.className=G(F.className,ne.className)),F}(ue,p,nt),de=T.as||Jt,re={};for(var L in T)T[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&T.theme===nt||(L==="forwardedAs"?re.as=T.forwardedAs:ze&&!ze(L,de)||(re[L]=T[L]));var it=function(pe,ne){var he=mt(),ie=pe.generateAndInjectStyles(ne,he.styleSheet,he.stylis);return ie}(Ut,T),Oe=G(Xt,Zt);return it&&(Oe+=" "+it),T.className&&(Oe+=" "+T.className),re[Le(de)&&!_t.has(de)?"class":"className"]=Oe,re.ref=te,Ie.createElement(de,re)}(w,k,A)}j.displayName=x;var w=se.forwardRef(j);return w.attrs=g,w.componentStyle=I,w.displayName=x,w.shouldForwardProp=S,w.foldedComponentIds=n?G(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=y,w.target=n?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(A){for(var v=[],p=1;p<arguments.length;p++)v[p-1]=arguments[p];for(var te=0,ue=v;te<ue.length;te++)Ue(A,ue[te],!0);return A}({},i.defaultProps,k):k}}),rt(w,function(){return".".concat(w.styledComponentId)}),o&&Dt(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function xt(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var yt=function(e){return Object.assign(e,{isCss:!0})};function rn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(V(e)||ce(e))return yt(H(xt(Ne,je([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?H(n):yt(H(xt(n,t)))}function Xe(e,t,r){if(r===void 0&&(r=Q),!t)throw le(1,t);var n=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,r,rn.apply(void 0,je([i],o,!1)))};return n.attrs=function(i){return Xe(e,t,P(P({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return Xe(e,t,P(P({},r),i))},n}var Ht=function(e){return Xe(tn,e)},u=Ht;_t.forEach(function(e){u[e]=Ht(e)});const nn=u.svg`
  fill: black;
  &:hover {
    fill: var(--logo-color);
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
`,on=({width:e,height:t})=>a.jsx(nn,{width:e,height:t,children:a.jsx("use",{href:`${W}#burger`})}),an=u.ul`
  display: none;
  visibility: hidden;
  opacity: 0;

  @media (min-width: 768px) {
    display: block;
    visibility: visible;
    opacity: 1;
    align-items: center;
  }

  @media (min-width: 1200px) {
    display: flex;
  }
`,sn=u.li`
  margin-bottom: 0.625rem;

  @media (min-width: 1200px) {
    margin: 0;
  }
`,vt=u(Ze)`
  color: var(--contacts-color);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.14;
  letter-spacing: 0.02em;
  align-items: center;
  display: flex;

  margin-right: 1rem;

  &:hover {
    color: var(--logo-color);
    svg {
      fill: var(--logo-color);
    }
  }
`,bt=u.svg`
  fill: var(--contacts-color);
  margin-right: 0.5rem;
  &:hover {
    fill: var(--logo-color);
  }
`,cn=()=>a.jsxs(an,{children:[a.jsx(sn,{children:a.jsxs(vt,{to:"mailto:cmdspeed@gmail.com",children:[a.jsx(bt,{width:"16px",height:"12px",children:a.jsx("use",{href:`${W}#message`})}),"cmdspeed@gmail.com"]})}),a.jsx("li",{children:a.jsxs(vt,{to:"tel:+48518824787",children:[a.jsx(bt,{width:"10px",height:"16px",children:a.jsx("use",{href:`${W}#phone`})}),"+48 518 824 787"]})})]}),ln=u.span`
  color: var(--logo-color);
`,un=u(Ze)`
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  color: var(--main-text-color);
  line-height: 1.16;
  font-family: var(---font-second);
  font-weight: 700;
`,dn=()=>a.jsxs(un,{to:"/",children:[a.jsx(ln,{children:"Kuźwa"}),"Team"]}),pn=u.nav`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.14;
  letter-spacing: 0.02em;
  margin: auto 3rem auto 5.1875rem;

  display: none;
  visibility: hidden;
  opacity: 0;

  @media (min-width: 768px) {
    display: block;
    visibility: visible;
    opacity: 1;
  }
`,hn=u.ul`
  display: flex;
  gap: 2.875rem;
  align-items: center;
`,Me=u(er)`
  &:active {
    color: var(--logo-color);
  }
  &.${e=>e.activeClassName} {
    color: var(--logo-color);

    &::after {
      content: "";
      position: relative;
      display: block;
      top: 1.8rem;
      height: 0.25rem;
      width: 100%;
      border-radius: 0.125rem;
      background-color: var(--logo-color);
    }
    @media (min-width: 1200px) {
      &::after {
        top: 1.3rem;
      }
    }
  }
  &:hover {
    color: var(--logo-color);
  }
`,fn=()=>a.jsx(pn,{children:a.jsxs(hn,{children:[a.jsx("li",{children:a.jsx(Me,{activeClassName:"active",to:"/",children:"About Us"})}),a.jsx("li",{children:a.jsx(Me,{activeClassName:"active",to:"/shop",children:"Shop"})}),a.jsx("li",{children:a.jsx(Me,{activeClassName:"active",to:"/contacts",children:"Contacts"})})]})}),mn=u.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;

  padding: 1rem;
`,gn=u.div`
  display: flex;
  flex-wrap: wrap;
`,xn=u.div`
  border-bottom: var(--nav-border);
`,yn=()=>a.jsx("header",{children:a.jsx(xn,{children:a.jsxs(mn,{children:[a.jsxs(gn,{children:[a.jsx(dn,{}),a.jsx(fn,{})]}),a.jsx(cn,{}),a.jsx(on,{width:"24px",height:"16px"})]})})}),vn=u.button`
  font-family: inherit;
  width: 100%;
  height: 100%;
  background-color: var(--filters-bg-color);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.87;
  text-align: center;
  letter-spacing: 0.06em;
  color: var(--main-text-color);
  text-transform: capitalize;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`,Yt=({children:e,onClick:t,txtColor:r,bgColor:n,type:i="button"})=>{const o={color:r,backgroundColor:n};return a.jsx(vn,{type:i,onClick:t,style:o,children:e})},bn="/KuzwaTeam/assets/dangerBG@x1-BO1ksDDa.jpg",wn="/KuzwaTeam/assets/dangerBG@x2-C5eG2U8M.jpg",Sn=u.section`
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    image-set(url(${bn}) 1x, url(${wn}) 2x);
  background-size: cover;
  margin: 0 auto;
  max-width: 1200px;

  background-position: center;
  padding: 1rem 0;

  @media (min-width: 768px) {
    padding: 3rem 0;
  }
  @media (min-width: 1200px) {
    padding: 8rem 0;
  }
`,jn=u.h1`
  font-weight: 900;
  font-size: 1.625rem;
  line-height: 1.61;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--second-color);
  max-width: 365px;
  margin: 2rem auto 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`,kn=u.div`
  max-width: 12.5rem;
  height: 3.125rem;
  margin: 2.5rem auto;
`,Cn=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,In=u.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  margin: 0 1rem;
  @media (min-width: 1200px) {
    max-width: 33rem;
  }
`,$n=u.button`
  background-color: white;
  border: none;
`,An=u.div`
  text-align: right;
`,En=({children:e,onClose:t})=>{const r=()=>{t()},n=i=>{i.target===i.currentTarget&&t()};return Ie.useEffect(()=>{const i=o=>{o.key==="Escape"&&t()};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[t]),a.jsx(Cn,{onClick:n,children:a.jsxs(In,{children:[a.jsx(An,{children:a.jsx($n,{onClick:r,children:"X"})}),e]})})},Pn=u.h2`
  font-size: 1.25rem;
  line-height: 1.15;
  text-align: center;
  color: var(--main-text-color);
  margin: 2.5rem 1.875rem 0.75rem;
`,Fe=u.input`
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  height: 2.5rem;
  width: 100%;
  margin-bottom: 10px;
  padding: 12px 35px;
  box-sizing: border-box;
  &:hover,
  &:focus {
    border: 1px solid var(--logo-color);
    outline: none;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`,q=u.div`
  &:hover,
  &:focus,
  &:focus-within {
    fill: var(--logo-color);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`,Ge=u.svg`
  display: flex;
  position: relative;
  bottom: 40px;
  left: 12px;
  padding-top: 3px;

  ${q}:hover &,
  ${q}:focus &,
  ${q}:focus-within & {
    fill: var(--logo-color);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`,xe=u.label`
  font-size: 0.75rem;
  line-height: 1.16;
  color: var(--contacts-color);
  position: relative;
`,_n=u.textarea`
  resize: none;
  height: 7.5rem;
  width: 100%;
  padding: 0.75rem 0.625rem;
  box-sizing: border-box;
`,Nn=u.label`
  color: var(--contacts-color);
  font-size: 14px;
  line-height: 1.71;
  margin: 20px 15px 0 0;
`,wt=u(Ze)`
  color: var(--logo-color);
`,zn=u.input`
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    opacity: 0.6;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`,On=u.div`
  width: 12.5rem;
  height: 3.125rem;
  margin: 1rem auto;
`,Rn=()=>a.jsxs("form",{name:"order",children:[a.jsx(Pn,{children:"Leave your details in the form below"}),a.jsxs(q,{children:[a.jsx(xe,{htmlFor:"id-name",children:"Name"}),a.jsx(Fe,{name:"name",id:"id-name",type:"text"}),a.jsx(Ge,{width:"18",height:"18",children:a.jsx("use",{href:`${W}#name`})})]}),a.jsxs(q,{children:[a.jsx(xe,{htmlFor:"id-tel",children:"Phone"}),a.jsx(Fe,{name:"tel",type:"tel",id:"id-tel"}),a.jsx(Ge,{width:"18",height:"18",children:a.jsx("use",{href:`${W}#phone`})})]}),a.jsxs(q,{children:[a.jsx(xe,{htmlFor:"id-email",children:"Email"}),a.jsx(Fe,{name:"email",type:"email",id:"id-email"}),a.jsx(Ge,{width:"18",height:"18",children:a.jsx("use",{href:`${W}#email`})})]}),a.jsx(xe,{htmlFor:"id-comment",children:"Comment"}),a.jsx(_n,{name:"comment",id:"id-comment",placeholder:"Enter text"}),a.jsxs(Nn,{htmlFor:"id-label-policy",children:[a.jsx(zn,{type:"checkbox",name:"policy",id:"id-label-policy",value:"statute"}),"I declare that I accept ",a.jsx(wt,{to:"#",children:"Statute"})," and",a.jsx(wt,{to:"#",children:" Privacy Policy"})]}),a.jsx(On,{children:a.jsx(Yt,{type:"submit",bgColor:"var(--logo-color)",txtColor:"var(--second-color)",children:"Send"})})]}),Tn=()=>{const[e,t]=Ie.useState(!1),r=()=>{t(!0)},n=()=>{t(!1)};return a.jsxs(Sn,{children:[a.jsxs("div",{children:[a.jsx(jn,{children:"We are kuźwa team"}),a.jsx(kn,{children:a.jsx(Yt,{txtColor:"var(--second-color)",bgColor:"var(--logo-color)",onClick:r,children:"contact us"})})]}),e&&a.jsx(En,{onClose:n,children:a.jsx(Rn,{})})]})},Dn=u.section`
  background: var(--filters-bg-color);
  padding: 3.75rem 0;
  @media (min-width: 1200px) {
    padding: 5.875rem 0;
  }
`,Ln=u.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;
  padding-left: 0;
  max-width: 16.875rem;
  margin: 0 auto;
  @media (min-width: 480px) {
    max-width: 28.125rem;
  }

  @media (min-width: 768px) {
    max-width: 46.125rem;
  }

  @media (min-width: 1200px) {
    max-width: 73.125rem;
  }
`,Bn=u.h2`
  font-size: 1.75rem;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 1.875rem;
  @media (min-width: 1200px) {
    font-size: 2.25rem;
    line-height: 1.16;
  }
`,Mn="/KuzwaTeam/assets/kamiliada-CQEOCd9T.png",Fn="/KuzwaTeam/assets/danger-DH-segl8.png",Gn="/KuzwaTeam/assets/lums-DbSPkUkm.png",Wn="/KuzwaTeam/assets/mruczek-BODn1yoB.png",Kn=[{src:Mn,nickname:"Kamiliada",role:"Sniper",socialMedia:[{url:"#",icon:"instagram"},{url:"#",icon:"twitter"},{url:"#",icon:"facebook"},{url:"#",icon:"linkedin"}]},{src:Fn,nickname:"Danger",role:"Ninja defuser",socialMedia:[{url:"#",icon:"instagram"},{url:"#",icon:"twitter"},{url:"#",icon:"facebook"},{url:"#",icon:"linkedin"}]},{src:Gn,nickname:"Lums1000",role:"Support",socialMedia:[{url:"#",icon:"instagram"},{url:"#",icon:"twitter"},{url:"#",icon:"facebook"},{url:"#",icon:"linkedin"}]},{src:Wn,nickname:"Mruczek",role:"Negev player",socialMedia:[{url:"#",icon:"instagram"},{url:"#",icon:"twitter"},{url:"#",icon:"facebook"},{url:"#",icon:"linkedin"}]}],Hn=u.h3`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
`,Yn=u.p`
  font-size: 1rem;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--contacts-color);
`,Un=u.li`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: calc((100% - 1.875rem) / 2);
  }

  @media (min-width: 1200px) {
    flex-basis: calc((100% - 3 * 40px) / 4);
  }
`,qn=u.figure`
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  display: flex;
  margin: 0;
  background-color: var(--second-color);
`,Xn=u.figcaption`
  margin: auto;
`,Zn=u.img`
  display: block;
  width: 16.875rem;
  @media (min-width: 480px) {
    width: 28.125rem;
  }

  @media (min-width: 768px) {
    width: 22.125rem;
  }

  @media (min-width: 1200px) {
    width: 16.875rem;
  }
`,Jn=u.div`
  display: flex;
  margin: 1rem auto 1.125rem;
  width: 12.875rem;
`,Qn=u.div`
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-right: 0.625rem;
  background-color: var(--social-icon__container);
  &:hover {
    background-color: var(--logo-color);
    fill: var(--second-color);
    cursor: pointer;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
  &:hover {
    svg {
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 250ms;
      fill: var(--second-color);
    }
  }
  &:last-child {
    margin-right: 0;
  }
`,Vn=u.svg`
  margin-right: 0;
  fill: var(--border-partner-logo);
`,ei=({src:e,nickname:t,role:r,socialMedia:n})=>a.jsx(Un,{children:a.jsx(qn,{children:a.jsxs(Xn,{children:[a.jsx(Zn,{src:e,alt:t,srcSet:`${e} 1x, ${e.replace(".png","@2x.png")} 2x`}),a.jsx(Hn,{children:t}),a.jsx(Yn,{children:r}),a.jsx(Jn,{children:n.map(({url:i,icon:o})=>a.jsx(Qn,{children:a.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:a.jsx(Vn,{width:"20",height:"20",children:a.jsx("use",{href:`${W}#${o}`})})})},i))})]})})}),ti=()=>a.jsx(Dn,{children:a.jsxs("div",{children:[a.jsx(Bn,{children:"Our team"}),a.jsx(Ln,{children:Kn.map(e=>a.jsx(ei,{...e},e.nickname))})]})}),ri=()=>a.jsx(ti,{}),ii=()=>a.jsxs(a.Fragment,{children:[a.jsx(yn,{}),a.jsx(Tn,{}),a.jsx(ri,{})]});export{ii as default};
