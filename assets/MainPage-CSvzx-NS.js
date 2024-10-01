import{L as y,j as e,r as d}from"./index-4ULhhr4v.js";import{u as i,i as s,B as x,M as z,h as f,a as u}from"./icon-pALL168_.js";const M="/KuzwaTeam/assets/dangerBG@x1-BO1ksDDa.jpg",T="/KuzwaTeam/assets/dangerBG@x2-C5eG2U8M.jpg",C=i.section`
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    image-set(url(${M}) 1x, url(${T}) 2x);
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
`,H=i.h1`
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
`,S=i.div`
  max-width: 12.5rem;
  height: 3.125rem;
  margin: 2.5rem auto;
`,D=i.h2`
  font-size: 1.25rem;
  line-height: 1.15;
  text-align: center;
  color: var(--main-text-color);
  margin: 2.5rem 1.875rem 0.75rem;
`,l=i.input`
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
`,c=i.svg`
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
`,L=i.textarea`
  resize: none;
  height: 7.5rem;
  width: 100%;
  padding: 0.75rem 0.625rem;
  box-sizing: border-box;
`,$=i.label`
  color: var(--contacts-color);
  font-size: 14px;
  line-height: 1.71;
  margin: 20px 15px 0 0;
`,p=i(y)`
  color: var(--logo-color);
`,B=i.input`
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    opacity: 0.6;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`,F=i.div`
  width: 12.5rem;
  height: 3.125rem;
  margin: 1rem auto;
`,K=()=>e.jsxs("form",{name:"order",children:[e.jsx(D,{children:"Leave your details in the form below"}),e.jsxs(n,{children:[e.jsx(o,{htmlFor:"id-name",children:"Name"}),e.jsx(l,{name:"name",id:"id-name",type:"text"}),e.jsx(c,{width:"18",height:"18",children:e.jsx("use",{href:`${s}#name`})})]}),e.jsxs(n,{children:[e.jsx(o,{htmlFor:"id-tel",children:"Phone"}),e.jsx(l,{name:"tel",type:"tel",id:"id-tel"}),e.jsx(c,{width:"18",height:"18",children:e.jsx("use",{href:`${s}#phone`})})]}),e.jsxs(n,{children:[e.jsx(o,{htmlFor:"id-email",children:"Email"}),e.jsx(l,{name:"email",type:"email",id:"id-email"}),e.jsx(c,{width:"18",height:"18",children:e.jsx("use",{href:`${s}#email`})})]}),e.jsx(o,{htmlFor:"id-comment",children:"Comment"}),e.jsx(L,{name:"comment",id:"id-comment",placeholder:"Enter text"}),e.jsxs($,{htmlFor:"id-label-policy",children:[e.jsx(B,{type:"checkbox",name:"policy",id:"id-label-policy",value:"statute"}),"I declare that I accept ",e.jsx(p,{to:"#",children:"Statute"})," and",e.jsx(p,{to:"#",children:" Privacy Policy"})]}),e.jsx(F,{children:e.jsx(x,{type:"submit",bgColor:"var(--logo-color)",txtColor:"var(--second-color)",children:"Send"})})]}),P=()=>{const[t,r]=d.useState(!1),a=()=>{r(!0)},m=()=>{r(!1)};return e.jsxs(C,{children:[e.jsxs("div",{children:[e.jsx(H,{children:"We are kuźwa team"}),e.jsx(S,{children:e.jsx(x,{txtColor:"var(--second-color)",bgColor:"var(--logo-color)",onClick:a,children:"contact us"})})]}),t&&e.jsx(z,{onClose:m,children:e.jsx(K,{})})]})},I=i.section`
  background: var(--filters-bg-color);
  padding: 3.75rem 0;
  @media (min-width: 1200px) {
    padding: 5.875rem 0;
  }
`,O=i.ul`
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
`,E=i.h2`
  font-size: 1.75rem;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 1.875rem;
  @media (min-width: 1200px) {
    font-size: 2.25rem;
    line-height: 1.16;
  }
`,N="/KuzwaTeam/assets/kamiliada-CQEOCd9T.png",Y="/KuzwaTeam/assets/danger-DH-segl8.png",W="/KuzwaTeam/assets/lums-DbSPkUkm.png",G="/KuzwaTeam/assets/mruczek-BODn1yoB.png",A=[{src:N,nickname:"Kamiliada",role:"Deagle player",socialMedia:[{url:"#kamiliada1",icon:"instagram"},{url:"#kamiliada2",icon:"twitter"},{url:"#kamiliada3",icon:"facebook"},{url:"#kamiliada4",icon:"linkedin"}],describe:"Kamiliada is a masterful shooter with the legendary Deagle pistol. His precise shots can outclass any opponent with the speed of lightning. He enters the battlefield with confidence and skill that few can match."},{src:Y,nickname:"Danger",role:"Ninja defuser",socialMedia:[{url:"#danger1",icon:"instagram"},{url:"#danger2",icon:"twitter"},{url:"#danger3",icon:"facebook"},{url:"#danger4",icon:"linkedin"}],describe:"Imagine silent death that comes out of nowhere. That's Danger-ninja. Agile, precise, and incredibly effective in outmaneuvering opponents. When the bomb goes off, he's already there, unfolding his distinctive bandana. His defusing skills are legendary, and opponents often fail to react before he neutralizes the threat."},{src:W,nickname:"Lums1000",role:"Support",socialMedia:[{url:"#lums1",icon:"instagram"},{url:"#lums2",icon:"twitter"},{url:"#lums3",icon:"facebook"},{url:"#lums4",icon:"linkedin"}],describe:"When you need support, Lums1000 stands guard. His role as a support in the team is invaluable. Not only does he provide ammunition and equipment, but he also directs the strategy, ensuring that his team operates like clockwork. His valuable tips and ability to read situations make him an indispensable member of any team."},{src:G,nickname:"Mruczek",role:"Negev player",socialMedia:[{url:"#mruczek1",icon:"instagram"},{url:"#mruczek2",icon:"twitter"},{url:"#mruczek3",icon:"facebook"},{url:"#mruczek4",icon:"linkedin"}],describe:"The sound of a powerful buzz reliably signals mruczek's presence on the battlefield. His weapon of choice is the Negev, which turns every battle into a hell of fire and lead rain. Mruczek is a force that knows no bounds, and his relentlessness in keeping the fire on the enemy makes him a dangerous opponent for anyone who crosses his path."}],U=f`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`,_=f`
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0deg);
  }
`,q=i.h3`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
`,Q=i.p`
  font-size: 1rem;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--contacts-color);
  padding-bottom: 1rem;
`,R=i.li`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: calc((100% - 1.875rem) / 2);
  }

  @media (min-width: 1200px) {
    flex-basis: calc((100% - 3 * 40px) / 4);
  }

  animation: ${({ishovered:t})=>t?u`
          ${U} 1s forwards;
        `:u`
          ${_} 1s forwards;
        `};
`,J=i.figure`
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  display: flex;
  margin: 0;
  background-color: var(--second-color);
`,V=i.figcaption`
  margin: auto;
`,X=i.img`
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
`;i.div`
  display: flex;
  margin: 1rem auto 1.125rem;
  width: 12.875rem;
`;i.div`
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
`;i.svg`
  margin-right: 0;
  fill: var(--border-partner-logo);
`;const Z=i.div`
  transform: rotateY(180deg);
  height: 400.34px;
  padding: 1rem;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  @media (min-width: 480px) {
    height: 635.41px;
  }
  @media (min-width: 768px) {
    height: 502.91px;
  }
  @media (min-width: 1200px) {
    height: 399.34px;
  }
`,ee=({src:t,nickname:r,role:a,socialMedia:m,describe:b})=>{const[w,h]=d.useState(!1),[v,g]=d.useState(!1),j=()=>{h(!0),setTimeout(()=>{g(!0)},300)},k=()=>{setTimeout(()=>{g(!1)},1300),setTimeout(()=>{h(!1)},1e3)};return e.jsx(R,{onMouseEnter:j,onMouseLeave:k,ishovered:w,children:e.jsx(J,{children:e.jsx(V,{children:v?e.jsx(Z,{children:b}):e.jsxs(e.Fragment,{children:[e.jsx(X,{src:t,alt:r,srcSet:`${t} 1x, ${t.replace(".png","@2x.png")} 2x`}),e.jsx(q,{children:r}),e.jsx(Q,{children:a})]})})})})},ie=()=>e.jsx(I,{children:e.jsxs("div",{children:[e.jsx(E,{children:"Kuźwa Team"}),e.jsx(O,{children:A.map(t=>e.jsx(ee,{...t},t.nickname))})]})}),te=()=>e.jsx("main",{children:e.jsx(ie,{})}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(P,{}),e.jsx(te,{})]});export{oe as default};
