import{o as ae,r as Ee,L as Ve,j as i,N as or}from"./index-Bd3P8BmA.js";var _=function(){return _=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},_.apply(this,arguments)};function $e(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,s;n<o;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}var b="-ms-",se="-moz-",f="-webkit-",It="comm",_e="rule",et="decl",sr="@import",At="@keyframes",ar="@layer",Et=Math.abs,tt=String.fromCharCode,Ye=Object.assign;function cr(e,t){return E(e,0)^45?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}function _t(e){return e.trim()}function D(e,t){return(e=t.exec(e))?e[0]:e}function u(e,t,r){return e.replace(t,r)}function we(e,t,r){return e.indexOf(t,r)}function E(e,t){return e.charCodeAt(t)|0}function J(e,t,r){return e.slice(t,r)}function O(e){return e.length}function zt(e){return e.length}function oe(e,t){return t.push(e),e}function lr(e,t){return e.map(t).join("")}function lt(e,t){return e.filter(function(r){return!D(r,t)})}var ze=1,Z=1,Pt=0,R=0,I=0,ee="";function Pe(e,t,r,n,o,s,a,l){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:ze,column:Z,length:a,return:"",siblings:l}}function F(e,t){return Ye(Pe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Y(e){for(;e.root;)e=F(e.root,{children:[e]});oe(e,e.siblings)}function dr(){return I}function ur(){return I=R>0?E(ee,--R):0,Z--,I===10&&(Z=1,ze--),I}function T(){return I=R<Pt?E(ee,R++):0,Z++,I===10&&(Z=1,ze++),I}function K(){return E(ee,R)}function je(){return R}function Ne(e,t){return J(ee,e,t)}function Ue(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hr(e){return ze=Z=1,Pt=O(ee=e),R=0,[]}function pr(e){return ee="",e}function Be(e){return _t(Ne(R-1,qe(e===91?e+2:e===40?e+1:e)))}function fr(e){for(;(I=K())&&I<33;)T();return Ue(e)>2||Ue(I)>3?"":" "}function mr(e,t){for(;--t&&T()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return Ne(e,je()+(t<6&&K()==32&&T()==32))}function qe(e){for(;T();)switch(I){case e:return R;case 34:case 39:e!==34&&e!==39&&qe(I);break;case 40:e===41&&qe(e);break;case 92:T();break}return R}function gr(e,t){for(;T()&&e+I!==57;)if(e+I===84&&K()===47)break;return"/*"+Ne(t,R-1)+"*"+tt(e===47?e:T())}function xr(e){for(;!Ue(K());)T();return Ne(e,R)}function yr(e){return pr(Se("",null,null,null,[""],e=hr(e),0,[0],e))}function Se(e,t,r,n,o,s,a,l,d){for(var p=0,m=0,x=a,y=0,g=0,j=0,C=1,z=1,$=1,S=0,w="",k=o,A=s,v=n,h=w;z;)switch(j=S,S=T()){case 40:if(j!=108&&E(h,x-1)==58){we(h+=u(Be(S),"&","&\f"),"&\f",Et(p?l[p-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:h+=Be(S);break;case 9:case 10:case 13:case 32:h+=fr(j);break;case 92:h+=mr(je()-1,7);continue;case 47:switch(K()){case 42:case 47:oe(vr(gr(T(),je()),t,r,d),d);break;default:h+="/"}break;case 123*C:l[p++]=O(h)*$;case 125*C:case 59:case 0:switch(S){case 0:case 125:z=0;case 59+m:$==-1&&(h=u(h,/\f/g,"")),g>0&&O(h)-x&&oe(g>32?ut(h+";",n,r,x-1,d):ut(u(h," ","")+";",n,r,x-2,d),d);break;case 59:h+=";";default:if(oe(v=dt(h,t,r,p,m,o,l,w,k=[],A=[],x,s),s),S===123)if(m===0)Se(h,t,v,v,k,s,x,l,A);else switch(y===99&&E(h,3)===110?100:y){case 100:case 108:case 109:case 115:Se(e,v,v,n&&oe(dt(e,v,v,0,0,o,l,w,o,k=[],x,A),A),o,A,x,l,n?k:A);break;default:Se(h,v,v,v,[""],A,0,l,A)}}p=m=g=0,C=$=1,w=h="",x=a;break;case 58:x=1+O(h),g=j;default:if(C<1){if(S==123)--C;else if(S==125&&C++==0&&ur()==125)continue}switch(h+=tt(S),S*C){case 38:$=m>0?1:(h+="\f",-1);break;case 44:l[p++]=(O(h)-1)*$,$=1;break;case 64:K()===45&&(h+=Be(T())),y=K(),m=x=O(w=h+=xr(je())),S++;break;case 45:j===45&&O(h)==2&&(C=0)}}return s}function dt(e,t,r,n,o,s,a,l,d,p,m,x){for(var y=o-1,g=o===0?s:[""],j=zt(g),C=0,z=0,$=0;C<n;++C)for(var S=0,w=J(e,y+1,y=Et(z=a[C])),k=e;S<j;++S)(k=_t(z>0?g[S]+" "+w:u(w,/&\f/g,g[S])))&&(d[$++]=k);return Pe(e,t,r,o===0?_e:l,d,p,m,x)}function vr(e,t,r,n){return Pe(e,t,r,It,tt(dr()),J(e,2,-2),0,n)}function ut(e,t,r,n,o){return Pe(e,t,r,et,J(e,0,n),J(e,n+1,-1),n,o)}function Nt(e,t,r){switch(cr(e,t)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 4789:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+se+e+b+e+e;case 5936:switch(E(e,t+11)){case 114:return f+e+b+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+b+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+b+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return f+e+b+e+e;case 6165:return f+e+b+"flex-"+e+e;case 5187:return f+e+u(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+b+"flex-$1$2")+e;case 5443:return f+e+b+"flex-item-"+u(e,/flex-|-self/g,"")+(D(e,/flex-|baseline/)?"":b+"grid-row-"+u(e,/flex-|-self/g,""))+e;case 4675:return f+e+b+"flex-line-pack"+u(e,/align-content|flex-|-self/g,"")+e;case 5548:return f+e+b+u(e,"shrink","negative")+e;case 5292:return f+e+b+u(e,"basis","preferred-size")+e;case 6060:return f+"box-"+u(e,"-grow","")+f+e+b+u(e,"grow","positive")+e;case 4554:return f+u(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4200:if(!D(e,/flex-|baseline/))return b+"grid-column-align"+J(e,t)+e;break;case 2592:case 3360:return b+u(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,D(n.props,/grid-\w+-end/)})?~we(e+(r=r[t].value),"span",0)?e:b+u(e,"-start","")+e+b+"grid-row-span:"+(~we(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(e,/\d+/))+";":b+u(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?e:b+u(u(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-t>6)switch(E(e,t+1)){case 109:if(E(e,t+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+se+(E(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~we(e,"stretch",0)?Nt(u(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return u(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,s,a,l,d,p){return b+o+":"+s+p+(a?b+o+"-span:"+(l?d:+d-+s)+p:"")+e});case 4949:if(E(e,t+6)===121)return u(e,":",":"+f)+e;break;case 6444:switch(E(e,E(e,14)===45?18:11)){case 120:return u(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+f+(E(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+b+"$2box$3")+e;case 100:return u(e,":",":"+b)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(e,"scroll-","scroll-snap-")+e}return e}function Ie(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function br(e,t,r,n){switch(e.type){case ar:if(e.children.length)break;case sr:case et:return e.return=e.return||e.value;case It:return"";case At:return e.return=e.value+"{"+Ie(e.children,n)+"}";case _e:if(!O(e.value=e.props.join(",")))return""}return O(r=Ie(e.children,n))?e.return=e.value+"{"+r+"}":""}function wr(e){var t=zt(e);return function(r,n,o,s){for(var a="",l=0;l<t;l++)a+=e[l](r,n,o,s)||"";return a}}function jr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Sr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case et:e.return=Nt(e.value,e.length,r);return;case At:return Ie([F(e,{value:u(e.value,"@","@"+f)})],n);case _e:if(e.length)return lr(r=e.props,function(o){switch(D(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Y(F(e,{props:[u(o,/:(read-\w+)/,":"+se+"$1")]})),Y(F(e,{props:[o]})),Ye(e,{props:lt(r,n)});break;case"::placeholder":Y(F(e,{props:[u(o,/:(plac\w+)/,":"+f+"input-$1")]})),Y(F(e,{props:[u(o,/:(plac\w+)/,":"+se+"$1")]})),Y(F(e,{props:[u(o,/:(plac\w+)/,b+"input-$1")]})),Y(F(e,{props:[o]})),Ye(e,{props:lt(r,n)});break}return""})}}var kr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P={},X=typeof process<"u"&&P!==void 0&&(P.REACT_APP_SC_ATTR||P.SC_ATTR)||"data-styled",Rt="active",Tt="data-styled-version",Re="6.1.8",rt=`/*!sc*/
`,nt=typeof window<"u"&&"HTMLElement"in window,Cr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==""?P.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&P.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.SC_DISABLE_SPEEDY!==void 0&&P.SC_DISABLE_SPEEDY!==""&&P.SC_DISABLE_SPEEDY!=="false"&&P.SC_DISABLE_SPEEDY),Te=Object.freeze([]),Q=Object.freeze({});function $r(e,t,r){return r===void 0&&(r=Q),e.theme!==r.theme&&e.theme||t||r.theme}var Ot=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ir=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ar=/(^-|-$)/g;function ht(e){return e.replace(Ir,"-").replace(Ar,"")}var Er=/(a)(d)/gi,me=52,pt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Je(e){var t,r="";for(t=Math.abs(e);t>me;t=t/me|0)r=pt(t%me)+r;return(pt(t%me)+r).replace(Er,"$1-$2")}var Me,Lt=5381,U=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Dt=function(e){return U(Lt,e)};function _r(e){return Je(Dt(e)>>>0)}function zr(e){return e.displayName||e.name||"Component"}function Fe(e){return typeof e=="string"&&!0}var Bt=typeof Symbol=="function"&&Symbol.for,Mt=Bt?Symbol.for("react.memo"):60115,Pr=Bt?Symbol.for("react.forward_ref"):60112,Nr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ft={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tr=((Me={})[Pr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Me[Mt]=Ft,Me);function ft(e){return("type"in(t=e)&&t.type.$$typeof)===Mt?Ft:"$$typeof"in e?Tr[e.$$typeof]:Nr;var t}var Or=Object.defineProperty,Lr=Object.getOwnPropertyNames,mt=Object.getOwnPropertySymbols,Dr=Object.getOwnPropertyDescriptor,Br=Object.getPrototypeOf,gt=Object.prototype;function Gt(e,t,r){if(typeof t!="string"){if(gt){var n=Br(t);n&&n!==gt&&Gt(e,n,r)}var o=Lr(t);mt&&(o=o.concat(mt(t)));for(var s=ft(e),a=ft(t),l=0;l<o.length;++l){var d=o[l];if(!(d in Rr||r&&r[d]||a&&d in a||s&&d in s)){var p=Dr(t,d);try{Or(e,d,p)}catch{}}}}return e}function V(e){return typeof e=="function"}function it(e){return typeof e=="object"&&"styledComponentId"in e}function W(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xt(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function ce(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ze(e,t,r){if(r===void 0&&(r=!1),!r&&!ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ze(e[n],t[n]);else if(ce(t))for(var n in t)e[n]=Ze(e[n],t[n]);return e}function ot(e,t){Object.defineProperty(e,"toString",{value:t})}function le(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Mr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;t>=s;)if((s<<=1)<0)throw le(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),d=(a=0,r.length);a<d;a++)this.tag.insertRule(l,r[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n,a=o;a<s;a++)r+="".concat(this.tag.getRule(a)).concat(rt);return r},e}(),ke=new Map,Ae=new Map,Ce=1,ge=function(e){if(ke.has(e))return ke.get(e);for(;Ae.has(Ce);)Ce++;var t=Ce++;return ke.set(e,t),Ae.set(t,e),t},Fr=function(e,t){Ce=t+1,ke.set(e,t),Ae.set(t,e)},Gr="style[".concat(X,"][").concat(Tt,'="').concat(Re,'"]'),Wr=new RegExp("^".concat(X,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Kr=function(e,t,r){for(var n,o=r.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(t,n)},Hr=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(rt),o=[],s=0,a=n.length;s<a;s++){var l=n[s].trim();if(l){var d=l.match(Wr);if(d){var p=0|parseInt(d[1],10),m=d[2];p!==0&&(Fr(m,p),Kr(e,m,d[3]),e.getTag().insertRules(p,o)),o.length=0}else o.push(l)}}};function Yr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(l){var d=Array.from(l.querySelectorAll("style[".concat(X,"]")));return d[d.length-1]}(r),s=o!==void 0?o.nextSibling:null;n.setAttribute(X,Rt),n.setAttribute(Tt,Re);var a=Yr();return a&&n.setAttribute("nonce",a),r.insertBefore(n,s),n},Ur=function(){function e(t){this.element=Wt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,s=n.length;o<s;o++){var a=n[o];if(a.ownerNode===r)return a}throw le(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),qr=function(){function e(t){this.element=Wt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Jr=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),yt=nt,Zr={isServer:!nt,useCSSOMInjection:!Cr},Kt=function(){function e(t,r,n){t===void 0&&(t=Q),r===void 0&&(r={});var o=this;this.options=_(_({},Zr),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&nt&&yt&&(yt=!1,function(s){for(var a=document.querySelectorAll(Gr),l=0,d=a.length;l<d;l++){var p=a[l];p&&p.getAttribute(X)!==Rt&&(Hr(s,p),p.parentNode&&p.parentNode.removeChild(p))}}(this)),ot(this,function(){return function(s){for(var a=s.getTag(),l=a.length,d="",p=function(x){var y=function($){return Ae.get($)}(x);if(y===void 0)return"continue";var g=s.names.get(y),j=a.getGroup(x);if(g===void 0||j.length===0)return"continue";var C="".concat(X,".g").concat(x,'[id="').concat(y,'"]'),z="";g!==void 0&&g.forEach(function($){$.length>0&&(z+="".concat($,","))}),d+="".concat(j).concat(C,'{content:"').concat(z,'"}').concat(rt)},m=0;m<l;m++)p(m);return d}(o)})}return e.registerId=function(t){return ge(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(_(_({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Jr(o):n?new Ur(o):new qr(o)}(this.options),new Mr(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ge(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ge(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ge(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Xr=/&/g,Qr=/^\s*\/\/.*$/gm;function Ht(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ht(r.children,t)),r})}function Vr(e){var t,r,n,o=e===void 0?Q:e,s=o.options,a=s===void 0?Q:s,l=o.plugins,d=l===void 0?Te:l,p=function(y,g,j){return j.startsWith(r)&&j.endsWith(r)&&j.replaceAll(r,"").length>0?".".concat(t):y},m=d.slice();m.push(function(y){y.type===_e&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Xr,r).replace(n,p))}),a.prefix&&m.push(Sr),m.push(br);var x=function(y,g,j,C){g===void 0&&(g=""),j===void 0&&(j=""),C===void 0&&(C="&"),t=C,r=g,n=new RegExp("\\".concat(r,"\\b"),"g");var z=y.replace(Qr,""),$=yr(j||g?"".concat(j," ").concat(g," { ").concat(z," }"):z);a.namespace&&($=Ht($,a.namespace));var S=[];return Ie($,wr(m.concat(jr(function(w){return S.push(w)})))),S};return x.hash=d.length?d.reduce(function(y,g){return g.name||le(15),U(y,g.name)},Lt).toString():"",x}var en=new Kt,Xe=Vr(),Yt=ae.createContext({shouldForwardProp:void 0,styleSheet:en,stylis:Xe});Yt.Consumer;ae.createContext(void 0);function vt(){return Ee.useContext(Yt)}var tn=function(){function e(t,r){var n=this;this.inject=function(o,s){s===void 0&&(s=Xe);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,ot(this,function(){throw le(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Xe),this.name+t.hash},e}(),rn=function(e){return e>="A"&&e<="Z"};function bt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;rn(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Ut=function(e){return e==null||e===!1||e===""},qt=function(e){var t,r,n=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!Ut(s)&&(Array.isArray(s)&&s.isCss||V(s)?n.push("".concat(bt(o),":"),s,";"):ce(s)?n.push.apply(n,$e($e(["".concat(o," {")],qt(s),!1),["}"],!1)):n.push("".concat(bt(o),": ").concat((t=o,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in kr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function H(e,t,r,n){if(Ut(e))return[];if(it(e))return[".".concat(e.styledComponentId)];if(V(e)){if(!V(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return H(o,t,r,n)}var s;return e instanceof tn?r?(e.inject(r,n),[e.getName(n)]):[e]:ce(e)?qt(e):Array.isArray(e)?Array.prototype.concat.apply(Te,e.map(function(a){return H(a,t,r,n)})):[e.toString()]}function nn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(V(r)&&!it(r))return!1}return!0}var on=Dt(Re),sn=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&nn(t),this.componentId=r,this.baseHash=U(on,r),this.baseStyle=n,Kt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=W(o,this.staticRulesId);else{var s=xt(H(this.rules,t,r,n)),a=Je(U(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,a)){var l=n(s,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,l)}o=W(o,a),this.staticRulesId=a}else{for(var d=U(this.baseHash,n.hash),p="",m=0;m<this.rules.length;m++){var x=this.rules[m];if(typeof x=="string")p+=x;else if(x){var y=xt(H(x,t,r,n));d=U(d,y+m),p+=y}}if(p){var g=Je(d>>>0);r.hasNameForId(this.componentId,g)||r.insertRules(this.componentId,g,n(p,".".concat(g),void 0,this.componentId)),o=W(o,g)}}return o},e}(),Jt=ae.createContext(void 0);Jt.Consumer;var Ge={};function an(e,t,r){var n=it(e),o=e,s=!Fe(e),a=t.attrs,l=a===void 0?Te:a,d=t.componentId,p=d===void 0?function(k,A){var v=typeof k!="string"?"sc":ht(k);Ge[v]=(Ge[v]||0)+1;var h="".concat(v,"-").concat(_r(Re+v+Ge[v]));return A?"".concat(A,"-").concat(h):h}(t.displayName,t.parentComponentId):d,m=t.displayName,x=m===void 0?function(k){return Fe(k)?"styled.".concat(k):"Styled(".concat(zr(k),")")}(e):m,y=t.displayName&&t.componentId?"".concat(ht(t.displayName),"-").concat(t.componentId):t.componentId||p,g=n&&o.attrs?o.attrs.concat(l).filter(Boolean):l,j=t.shouldForwardProp;if(n&&o.shouldForwardProp){var C=o.shouldForwardProp;if(t.shouldForwardProp){var z=t.shouldForwardProp;j=function(k,A){return C(k,A)&&z(k,A)}}else j=C}var $=new sn(r,y,n?o.componentStyle:void 0);function S(k,A){return function(v,h,te){var de=v.attrs,Qt=v.componentStyle,Vt=v.defaultProps,er=v.foldedComponentIds,tr=v.styledComponentId,rr=v.target,nr=ae.useContext(Jt),ir=vt(),Oe=v.shouldForwardProp||ir.shouldForwardProp,at=$r(h,nr,Vt)||Q,L=function(he,ne,pe){for(var ie,G=_(_({},ne),{className:void 0,theme:pe}),De=0;De<he.length;De+=1){var fe=V(ie=he[De])?ie(G):ie;for(var M in fe)G[M]=M==="className"?W(G[M],fe[M]):M==="style"?_(_({},G[M]),fe[M]):fe[M]}return ne.className&&(G.className=W(G.className,ne.className)),G}(de,h,at),ue=L.as||rr,re={};for(var B in L)L[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&L.theme===at||(B==="forwardedAs"?re.as=L.forwardedAs:Oe&&!Oe(B,ue)||(re[B]=L[B]));var ct=function(he,ne){var pe=vt(),ie=he.generateAndInjectStyles(ne,pe.styleSheet,pe.stylis);return ie}(Qt,L),Le=W(er,tr);return ct&&(Le+=" "+ct),L.className&&(Le+=" "+L.className),re[Fe(ue)&&!Ot.has(ue)?"class":"className"]=Le,re.ref=te,Ee.createElement(ue,re)}(w,k,A)}S.displayName=x;var w=ae.forwardRef(S);return w.attrs=g,w.componentStyle=$,w.displayName=x,w.shouldForwardProp=j,w.foldedComponentIds=n?W(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=y,w.target=n?o.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(A){for(var v=[],h=1;h<arguments.length;h++)v[h-1]=arguments[h];for(var te=0,de=v;te<de.length;te++)Ze(A,de[te],!0);return A}({},o.defaultProps,k):k}}),ot(w,function(){return".".concat(w.styledComponentId)}),s&&Gt(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function wt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var jt=function(e){return Object.assign(e,{isCss:!0})};function cn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(V(e)||ce(e))return jt(H(wt(Te,$e([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?H(n):jt(H(wt(n,t)))}function Qe(e,t,r){if(r===void 0&&(r=Q),!t)throw le(1,t);var n=function(o){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return e(t,r,cn.apply(void 0,$e([o],s,!1)))};return n.attrs=function(o){return Qe(e,t,_(_({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Qe(e,t,_(_({},r),o))},n}var Zt=function(e){return Qe(an,e)},c=Zt;Ot.forEach(function(e){c[e]=Zt(e)});const ln=c.span`
  color: var(--logo-color);
`,dn=c(Ve)`
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  color: var(--main-text-color);
  line-height: 1.16;
  font-family: "Raleway";
  font-weight: 700;
`,Xt=({txtColor:e})=>{const t={color:e};return i.jsxs(dn,{to:"/",style:t,children:[i.jsx(ln,{children:"Kuźwa"}),"Team"]})},un=c.ul`
  padding: 0;
  font-style: normal;
  margin: 1.25rem auto 3.75rem;
`,hn=c.a`
  font-size: 0.875rem;
  line-height: 1.7;
  letter-spacing: 0.03em;
  color: var(--second-color);
`,St=c.a`
  font-size: 0.875rem;
  line-height: 1.7;
  letter-spacing: 0.03em;
  color: var(--contacts-footer-color);
`,pn=()=>i.jsx("address",{children:i.jsxs(un,{children:[i.jsx("li",{children:i.jsx(hn,{href:"https://www.google.com/maps/@35.7040744,139.5577317,3a,90y,287.65h,68.26t/data=!3m7!1e1!3m5!1sgT28ssf0BB2LxZ63JNcL1w!2e0!3e5!7i13312!8i6656?entry=ttu",target:"_blank",rel:"noopener nofollow noreferrer",children:"Rydułtowy, Dangerowska 69"})}),i.jsx("li",{children:i.jsx(St,{href:"mailto:kuźwateam@lelenie.com",children:"kuźwateam@lelenie.com"})}),i.jsx("li",{children:i.jsx(St,{href:"tel:+48696666999",children:"+48 696 666 999"})})]})}),fn=c.footer`
  background-color: var(--footer-section);
  color: var(--second-color);
  padding-top: 3.75rem;
  font-style: normal;
  text-align: center;
`,mn=c.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  align-content: space-around;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 3rem;
  }
`,N="/KuzwaTeam/assets/icon-DrOl-MKT.svg",gn=c.h3`
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.14;
  color: var(--second-color);

  margin-top: 0.3125rem;
`,xn=c.div`
  display: flex;
  margin: 1.25rem auto 3.75rem;
  justify-content: center;
`,xe=c.div`
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--social-icon-container);
  &:hover {
    background-color: var(--logo-color);
    cursor: pointer;
  }
`,ye=c.svg`
  fill: var(--second-color);
  width: 20px;
  height: 20px;
`,ve=c.a`
  margin-right: 0.625rem;

  &:last-child {
    margin-right: 0;
  }
`,yn=()=>i.jsxs("div",{children:[i.jsx(gn,{children:"Join Us"}),i.jsxs(xn,{children:[i.jsx(ve,{href:"http://intagram.com",target:"_blank",rel:"noopener noreferrer",children:i.jsx(xe,{children:i.jsx(ye,{children:i.jsx("use",{href:`${N}#instagram`})})})}),i.jsx(ve,{href:"http://twitter.com",target:"_blank",rel:"noopener noreferrer",children:i.jsx(xe,{children:i.jsx(ye,{children:i.jsx("use",{href:`${N}#twitter`})})})}),i.jsx(ve,{href:"http://facebook.com",target:"_blank",rel:"noopener noreferrer",children:i.jsx(xe,{children:i.jsx(ye,{children:i.jsx("use",{href:`${N}#facebook`})})})}),i.jsx(ve,{href:"http://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:i.jsx(xe,{children:i.jsx(ye,{children:i.jsx("use",{href:`${N}#linkedin`})})})})]})]}),vn=c.button`
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
`,st=({children:e,onClick:t,txtColor:r,bgColor:n,type:o="button"})=>{const s={color:r,backgroundColor:n};return i.jsx(vn,{type:o,onClick:t,style:s,children:e})},bn=c.div`
  margin: 0 auto;
  text-align: center;
`,wn=c.h3`
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.14;
  color: var(--second-color);
  margin: 0.3125rem auto 0;
  text-align: center;
  letter-spacing: 0.03em;
`,jn=c.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`,Sn=c.div`
  width: 100%;
  margin: 1rem 1rem 0;
  height: 3.125rem;

  @media (min-width: 480px) {
    max-width: 22rem;
  }
  @media (min-width: 1200px) {
    min-width: 28rem;
  }
`,kn=c.input`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));

  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background-color: var(--footer-section);
  margin: 0 auto;
  height: 3.125rem;
  box-sizing: border-box;
  width: 100%;
  &::placeholder {
    padding: 0 1rem;
    font-size: 1rem;
    font-family: "Roboto";
    line-height: 1.25;
    letter-spacing: 0.03em;
  }
`,Cn=c.div`
  width: 12.5rem;
  height: 3.125rem;
  margin: 1.25rem auto 0;
`,$n=c.svg`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1.5rem;
`,In=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,An=()=>i.jsxs(bn,{children:[i.jsx(wn,{children:"Subscribe to the newsletter"}),i.jsxs(jn,{children:[i.jsx(Sn,{children:i.jsx(kn,{type:"email",name:"email",placeholder:"E-mail"})}),i.jsx(Cn,{children:i.jsx(st,{txtColor:"var(--second-color)",bgColor:"var(--logo-color)",children:i.jsxs(In,{children:["Sign up",i.jsx($n,{children:i.jsx("use",{href:`${N}#send`})})]})})})]})]}),En=()=>i.jsx(fn,{children:i.jsxs(mn,{children:[i.jsxs("div",{children:[i.jsx(Xt,{txtColor:"var(--second-color)"}),i.jsx(pn,{})]}),i.jsx(yn,{}),i.jsx(An,{})]})}),_n=c.svg`
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
`,zn=({width:e,height:t})=>i.jsx(_n,{width:e,height:t,children:i.jsx("use",{href:`${N}#burger`})}),Pn=c.ul`
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
`,Nn=c.li`
  margin-bottom: 0.625rem;

  @media (min-width: 1200px) {
    margin: 0;
  }
`,kt=c(Ve)`
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
`,Ct=c.svg`
  fill: var(--contacts-color);
  margin-right: 0.5rem;
  &:hover {
    fill: var(--logo-color);
  }
`,Rn=()=>i.jsxs(Pn,{children:[i.jsx(Nn,{children:i.jsxs(kt,{to:"mailto:cmdspeed@gmail.com",children:[i.jsx(Ct,{width:"16px",height:"12px",children:i.jsx("use",{href:`${N}#message`})}),"cmdspeed@gmail.com"]})}),i.jsx("li",{children:i.jsxs(kt,{to:"tel:+48518824787",children:[i.jsx(Ct,{width:"10px",height:"16px",children:i.jsx("use",{href:`${N}#phone`})}),"+48 518 824 787"]})})]}),Tn=c.nav`
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
`,On=c.ul`
  display: flex;
  gap: 2.875rem;
  align-items: center;
`,We=c(or)`
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
`,Ln=()=>i.jsx(Tn,{children:i.jsxs(On,{children:[i.jsx("li",{children:i.jsx(We,{activeClassName:"active",to:"/",children:"About Us"})}),i.jsx("li",{children:i.jsx(We,{activeClassName:"active",to:"/shop",children:"Shop"})}),i.jsx("li",{children:i.jsx(We,{activeClassName:"active",to:"/contacts",children:"Contacts"})})]})}),Dn=c.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;

  padding: 1rem;
`,Bn=c.div`
  display: flex;
  flex-wrap: wrap;
`,Mn=c.div`
  border-bottom: var(--nav-border);
`,Fn=()=>i.jsx("header",{children:i.jsx(Mn,{children:i.jsxs(Dn,{children:[i.jsxs(Bn,{children:[i.jsx(Xt,{}),i.jsx(Ln,{})]}),i.jsx(Rn,{}),i.jsx(zn,{width:"24px",height:"16px"})]})})}),Gn="/KuzwaTeam/assets/dangerBG@x1-BO1ksDDa.jpg",Wn="/KuzwaTeam/assets/dangerBG@x2-C5eG2U8M.jpg",Kn=c.section`
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    image-set(url(${Gn}) 1x, url(${Wn}) 2x);
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
`,Hn=c.h1`
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
`,Yn=c.div`
  max-width: 12.5rem;
  height: 3.125rem;
  margin: 2.5rem auto;
`,Un=c.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,qn=c.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  margin: 0 1rem;
  @media (min-width: 1200px) {
    max-width: 33rem;
  }
`,Jn=c.button`
  background-color: white;
  border: none;
`,Zn=c.div`
  text-align: right;
`,Xn=({children:e,onClose:t})=>{const r=()=>{t()},n=o=>{o.target===o.currentTarget&&t()};return Ee.useEffect(()=>{const o=s=>{s.key==="Escape"&&t()};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t]),i.jsx(Un,{onClick:n,children:i.jsxs(qn,{children:[i.jsx(Zn,{children:i.jsx(Jn,{onClick:r,children:"X"})}),e]})})},Qn=c.h2`
  font-size: 1.25rem;
  line-height: 1.15;
  text-align: center;
  color: var(--main-text-color);
  margin: 2.5rem 1.875rem 0.75rem;
`,Ke=c.input`
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
`,q=c.div`
  &:hover,
  &:focus,
  &:focus-within {
    fill: var(--logo-color);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`,He=c.svg`
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
`,be=c.label`
  font-size: 0.75rem;
  line-height: 1.16;
  color: var(--contacts-color);
  position: relative;
`,Vn=c.textarea`
  resize: none;
  height: 7.5rem;
  width: 100%;
  padding: 0.75rem 0.625rem;
  box-sizing: border-box;
`,ei=c.label`
  color: var(--contacts-color);
  font-size: 14px;
  line-height: 1.71;
  margin: 20px 15px 0 0;
`,$t=c(Ve)`
  color: var(--logo-color);
`,ti=c.input`
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    opacity: 0.6;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`,ri=c.div`
  width: 12.5rem;
  height: 3.125rem;
  margin: 1rem auto;
`,ni=()=>i.jsxs("form",{name:"order",children:[i.jsx(Qn,{children:"Leave your details in the form below"}),i.jsxs(q,{children:[i.jsx(be,{htmlFor:"id-name",children:"Name"}),i.jsx(Ke,{name:"name",id:"id-name",type:"text"}),i.jsx(He,{width:"18",height:"18",children:i.jsx("use",{href:`${N}#name`})})]}),i.jsxs(q,{children:[i.jsx(be,{htmlFor:"id-tel",children:"Phone"}),i.jsx(Ke,{name:"tel",type:"tel",id:"id-tel"}),i.jsx(He,{width:"18",height:"18",children:i.jsx("use",{href:`${N}#phone`})})]}),i.jsxs(q,{children:[i.jsx(be,{htmlFor:"id-email",children:"Email"}),i.jsx(Ke,{name:"email",type:"email",id:"id-email"}),i.jsx(He,{width:"18",height:"18",children:i.jsx("use",{href:`${N}#email`})})]}),i.jsx(be,{htmlFor:"id-comment",children:"Comment"}),i.jsx(Vn,{name:"comment",id:"id-comment",placeholder:"Enter text"}),i.jsxs(ei,{htmlFor:"id-label-policy",children:[i.jsx(ti,{type:"checkbox",name:"policy",id:"id-label-policy",value:"statute"}),"I declare that I accept ",i.jsx($t,{to:"#",children:"Statute"})," and",i.jsx($t,{to:"#",children:" Privacy Policy"})]}),i.jsx(ri,{children:i.jsx(st,{type:"submit",bgColor:"var(--logo-color)",txtColor:"var(--second-color)",children:"Send"})})]}),ii=()=>{const[e,t]=Ee.useState(!1),r=()=>{t(!0)},n=()=>{t(!1)};return i.jsxs(Kn,{children:[i.jsxs("div",{children:[i.jsx(Hn,{children:"We are kuźwa team"}),i.jsx(Yn,{children:i.jsx(st,{txtColor:"var(--second-color)",bgColor:"var(--logo-color)",onClick:r,children:"contact us"})})]}),e&&i.jsx(Xn,{onClose:n,children:i.jsx(ni,{})})]})},oi=c.section`
  background: var(--filters-bg-color);
  padding: 3.75rem 0;
  @media (min-width: 1200px) {
    padding: 5.875rem 0;
  }
`,si=c.ul`
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
`,ai=c.h2`
  font-size: 1.75rem;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 1.875rem;
  @media (min-width: 1200px) {
    font-size: 2.25rem;
    line-height: 1.16;
  }
`,ci="/KuzwaTeam/assets/kamiliada-CQEOCd9T.png",li="/KuzwaTeam/assets/danger-DH-segl8.png",di="/KuzwaTeam/assets/lums-DbSPkUkm.png",ui="/KuzwaTeam/assets/mruczek-BODn1yoB.png",hi=[{src:ci,nickname:"Kamiliada",role:"Sniper",socialMedia:[{url:"#",icon:"instagram"},{url:"#",icon:"twitter"},{url:"#",icon:"facebook"},{url:"#",icon:"linkedin"}]},{src:li,nickname:"Danger",role:"Ninja defuser",socialMedia:[{url:"#",icon:"instagram"},{url:"#",icon:"twitter"},{url:"#",icon:"facebook"},{url:"#",icon:"linkedin"}]},{src:di,nickname:"Lums1000",role:"Support",socialMedia:[{url:"#",icon:"instagram"},{url:"#",icon:"twitter"},{url:"#",icon:"facebook"},{url:"#",icon:"linkedin"}]},{src:ui,nickname:"Mruczek",role:"Negev player",socialMedia:[{url:"#",icon:"instagram"},{url:"#",icon:"twitter"},{url:"#",icon:"facebook"},{url:"#",icon:"linkedin"}]}],pi=c.h3`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
`,fi=c.p`
  font-size: 1rem;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--contacts-color);
`,mi=c.li`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: calc((100% - 1.875rem) / 2);
  }

  @media (min-width: 1200px) {
    flex-basis: calc((100% - 3 * 40px) / 4);
  }
`,gi=c.figure`
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  display: flex;
  margin: 0;
  background-color: var(--second-color);
`,xi=c.figcaption`
  margin: auto;
`,yi=c.img`
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
`,vi=c.div`
  display: flex;
  margin: 1rem auto 1.125rem;
  width: 12.875rem;
`,bi=c.div`
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
`,wi=c.svg`
  margin-right: 0;
  fill: var(--border-partner-logo);
`,ji=({src:e,nickname:t,role:r,socialMedia:n})=>i.jsx(mi,{children:i.jsx(gi,{children:i.jsxs(xi,{children:[i.jsx(yi,{src:e,alt:t,srcSet:`${e} 1x, ${e.replace(".png","@2x.png")} 2x`}),i.jsx(pi,{children:t}),i.jsx(fi,{children:r}),i.jsx(vi,{children:n.map(({url:o,icon:s})=>i.jsx(bi,{children:i.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:i.jsx(wi,{width:"20",height:"20",children:i.jsx("use",{href:`${N}#${s}`})})})},o))})]})})}),Si=()=>i.jsx(oi,{children:i.jsxs("div",{children:[i.jsx(ai,{children:"Kuźwa Team"}),i.jsx(si,{children:hi.map(e=>i.jsx(ji,{...e},e.nickname))})]})}),ki=()=>i.jsx(Si,{}),$i=()=>i.jsxs(i.Fragment,{children:[i.jsx(Fn,{}),i.jsx(ii,{}),i.jsx(ki,{}),i.jsx(En,{})]});export{$i as default};
