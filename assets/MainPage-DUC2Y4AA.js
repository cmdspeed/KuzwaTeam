import{L as C,j as e,r as m}from"./index-dOdSBEBh.js";import{u as i,i as a,B as f,M as T,h as b,a as p}from"./icon-CgXhofhq.js";const M="/KuzwaTeam/assets/dangerBG@x1-BO1ksDDa.jpg",H="/KuzwaTeam/assets/dangerBG@x2-C5eG2U8M.jpg",S=i.section`
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    image-set(url(${M}) 1x, url(${H}) 2x);
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
`,$=i.h1`
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
`,D=i.div`
  max-width: 12.5rem;
  height: 3.125rem;
  margin: 2.5rem auto;
`,L=i.h2`
  font-size: 1.25rem;
  line-height: 1.15;
  text-align: center;
  color: var(--main-text-color);
  margin: 2.5rem 1.875rem 0.75rem;
`,c=i.input`
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
`,n=i.div`
  &:hover,
  &:focus,
  &:focus-within {
    fill: var(--logo-color);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`,d=i.svg`
  display: flex;
  position: relative;
  bottom: 40px;
  left: 12px;
  padding-top: 3px;

  ${n}:hover &,
  ${n}:focus &,
  ${n}:focus-within & {
    fill: var(--logo-color);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`,o=i.label`
  font-size: 0.75rem;
  line-height: 1.16;
  color: var(--contacts-color);
  position: relative;
`,B=i.textarea`
  resize: none;
  height: 7.5rem;
  width: 100%;
  padding: 0.75rem 0.625rem;
  box-sizing: border-box;
`,F=i.label`
  color: var(--contacts-color);
  font-size: 14px;
  line-height: 1.71;
  margin: 20px 15px 0 0;
`,x=i(C)`
  color: var(--logo-color);
`,I=i.input`
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    opacity: 0.6;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`,K=i.div`
  width: 12.5rem;
  height: 3.125rem;
  margin: 1rem auto;
`,P=()=>e.jsxs("form",{name:"order",children:[e.jsx(L,{children:"Leave your details in the form below"}),e.jsxs(n,{children:[e.jsx(o,{htmlFor:"id-name",children:"Name"}),e.jsx(c,{name:"name",id:"id-name",type:"text"}),e.jsx(d,{width:"18",height:"18",children:e.jsx("use",{href:`${a}#name`})})]}),e.jsxs(n,{children:[e.jsx(o,{htmlFor:"id-tel",children:"Phone"}),e.jsx(c,{name:"tel",type:"tel",id:"id-tel"}),e.jsx(d,{width:"18",height:"18",children:e.jsx("use",{href:`${a}#phone`})})]}),e.jsxs(n,{children:[e.jsx(o,{htmlFor:"id-email",children:"Email"}),e.jsx(c,{name:"email",type:"email",id:"id-email"}),e.jsx(d,{width:"18",height:"18",children:e.jsx("use",{href:`${a}#email`})})]}),e.jsx(o,{htmlFor:"id-comment",children:"Comment"}),e.jsx(B,{name:"comment",id:"id-comment",placeholder:"Enter text"}),e.jsxs(F,{htmlFor:"id-label-policy",children:[e.jsx(I,{type:"checkbox",name:"policy",id:"id-label-policy",value:"statute"}),"I declare that I accept ",e.jsx(x,{to:"#",children:"Statute"})," and",e.jsx(x,{to:"#",children:" Privacy Policy"})]}),e.jsx(K,{children:e.jsx(f,{type:"submit",bgColor:"var(--logo-color)",txtColor:"var(--second-color)",children:"Send"})})]}),O=()=>{const[t,r]=m.useState(!1),s=()=>{r(!0)},l=()=>{r(!1)};return e.jsxs(S,{children:[e.jsxs("div",{children:[e.jsx($,{children:"We are kuźwa team"}),e.jsx(D,{children:e.jsx(f,{txtColor:"var(--second-color)",bgColor:"var(--logo-color)",onClick:s,children:"contact us"})})]}),t&&e.jsx(T,{onClose:l,children:e.jsx(P,{})})]})},E=i.section`
  background: var(--filters-bg-color);
  padding: 3.75rem 0;
  @media (min-width: 1200px) {
    padding: 5.875rem 0;
  }
`,N=i.ul`
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
`,W=i.h2`
  font-size: 1.75rem;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 1.875rem;
  @media (min-width: 1200px) {
    font-size: 2.25rem;
    line-height: 1.16;
  }
`,Y="/KuzwaTeam/assets/kamiliada-CQEOCd9T.png",G="/KuzwaTeam/assets/danger-DH-segl8.png",_="/KuzwaTeam/assets/lums-DbSPkUkm.png",A="/KuzwaTeam/assets/mruczek-BODn1yoB.png",U=[{src:Y,nickname:"Kamiliada",role:"Deagle player",socialMedia:[{url:"#kamiliada1",icon:"instagram"},{url:"#kamiliada2",icon:"twitter"},{url:"#kamiliada3",icon:"facebook"},{url:"#kamiliada4",icon:"linkedin"}],describe:"Kamiliada is a masterful shooter with the legendary Deagle pistol. His precise shots can outclass any opponent with the speed of lightning. He enters the battlefield with confidence and skill that few can match."},{src:G,nickname:"Danger",role:"Ninja defuser",socialMedia:[{url:"#danger1",icon:"instagram"},{url:"#danger2",icon:"twitter"},{url:"#danger3",icon:"facebook"},{url:"#danger4",icon:"linkedin"}],describe:"Imagine silent death that comes out of nowhere. That's Danger-ninja. Agile, precise, and incredibly effective in outmaneuvering opponents. When the bomb goes off, he's already there, unfolding his distinctive bandana. His defusing skills are legendary, and opponents often fail to react before he neutralizes the threat."},{src:_,nickname:"Lums1000",role:"Support",socialMedia:[{url:"#lums1",icon:"instagram"},{url:"#lums2",icon:"twitter"},{url:"#lums3",icon:"facebook"},{url:"#lums4",icon:"linkedin"}],describe:"When you need support, Lums1000 stands guard. His role as a support in the team is invaluable. Not only does he provide ammunition and equipment, but he also directs the strategy, ensuring that his team operates like clockwork. His valuable tips and ability to read situations make him an indispensable member of any team."},{src:A,nickname:"Mruczek",role:"Negev player",socialMedia:[{url:"#mruczek1",icon:"instagram"},{url:"#mruczek2",icon:"twitter"},{url:"#mruczek3",icon:"facebook"},{url:"#mruczek4",icon:"linkedin"}],describe:"The sound of a powerful buzz reliably signals mruczek's presence on the battlefield. His weapon of choice is the Negev, which turns every battle into a hell of fire and lead rain. Mruczek is a force that knows no bounds, and his relentlessness in keeping the fire on the enemy makes him a dangerous opponent for anyone who crosses his path."}],q=b`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`,Q=b`
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0deg);
  }
`,R=i.h3`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
`,J=i.p`
  font-size: 1rem;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--contacts-color);
`,V=i.li`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: calc((100% - 1.875rem) / 2);
  }

  @media (min-width: 1200px) {
    flex-basis: calc((100% - 3 * 40px) / 4);
  }

  animation: ${({isHovered:t})=>t?p`
          ${q} 1s forwards;
        `:p`
          ${Q} 1s forwards;
        `};
`,X=i.figure`
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  display: flex;
  margin: 0;
  background-color: var(--second-color);
`,Z=i.figcaption`
  margin: auto;
`,ee=i.img`
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
`,ie=i.div`
  display: flex;
  margin: 1rem auto 1.125rem;
  width: 12.875rem;
`,te=i.div`
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
`,ne=i.svg`
  margin-right: 0;
  fill: var(--border-partner-logo);
`,re=i.div`
  transform: rotateY(180deg);
  height: 461.34px;
  padding: 1rem;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  @media (min-width: 480px) {
    height: 700.41px;
  }
  @media (min-width: 768px) {
    height: 572.91px;
  }
  @media (min-width: 1200px) {
    height: 461.34px;
  }
`,oe=({src:t,nickname:r,role:s,socialMedia:l,describe:w})=>{const[j,h]=m.useState(!1),[v,g]=m.useState(!1),k=()=>{h(!0),setTimeout(()=>{g(!0)},300)},y=()=>{setTimeout(()=>{g(!1)},1300),setTimeout(()=>{h(!1)},1e3)};return e.jsx(V,{onMouseEnter:k,onMouseLeave:y,isHovered:j,children:e.jsx(X,{children:e.jsx(Z,{children:v?e.jsx(re,{children:w}):e.jsxs(e.Fragment,{children:[e.jsx(ee,{src:t,alt:r,srcSet:`${t} 1x, ${t.replace(".png","@2x.png")} 2x`}),e.jsx(R,{children:r}),e.jsx(J,{children:s}),e.jsx(ie,{children:l.map(({url:u,icon:z})=>e.jsx(te,{children:e.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:e.jsx(ne,{width:"20",height:"20",children:e.jsx("use",{href:`${a}#${z}`})})})},u))})]})})})})},ae=()=>e.jsx(E,{children:e.jsxs("div",{children:[e.jsx(W,{children:"Kuźwa Team"}),e.jsx(N,{children:U.map(t=>e.jsx(oe,{...t},t.nickname))})]})}),se=()=>e.jsx("main",{children:e.jsx(ae,{})}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(O,{}),e.jsx(se,{})]});export{de as default};
