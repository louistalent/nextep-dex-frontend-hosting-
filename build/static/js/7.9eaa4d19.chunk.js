(this["webpackJsonpnextepdex-web"]=this["webpackJsonpnextepdex-web"]||[]).push([[7],{1136:function(e,n,t){"use strict";t.r(n);var c,i,o,r,a,l,s,d,b,j,u,x,h,p,O,m,g,f,v,k,w=t(10),y=t(0),C=t(6),S=t(2),B=t(14),D=t(331),F=t(8),P=t(51),A=t(233),H=t(1),L="\nsvg {\n    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);\n  }\n",E=function(e){return Object(H.jsxs)(S.lb,Object(F.a)(Object(F.a)({viewBox:"0 0 1200 66"},e),{},{children:[Object(H.jsx)("g",{filter:"url(#intersect_filter0_d)",children:Object(H.jsx)("path",{d:"M1200 23.9232C1050.53 39.6633 837.034 49.5127 600 49.5127C362.965 49.5127 149.466 39.6633 0 23.9232V0.512695H1200V23.9232Z"})}),Object(H.jsx)("defs",{children:Object(H.jsxs)("filter",{id:"intersect_filter0_d",x:"-12",y:"-7.4873",width:"1224",height:"73",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[Object(H.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object(H.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),Object(H.jsx)("feOffset",{dy:"4"}),Object(H.jsx)("feGaussianBlur",{stdDeviation:"6"}),Object(H.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),Object(H.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object(H.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]})})]}))},I=Object(C.e)(E)(c||(c=Object(w.a)(["\n  ","\n  transform: rotate(180deg);\n  margin-bottom: -2px;\n  fill: ",";\n"])),L,(function(e){var n=e.svgFill,t=e.theme;return n||t.colors.background})),J=Object(C.e)(E)(i||(i=Object(w.a)(["\n  ","\n  margin-top: -2px;\n  fill: ",";\n"])),L,(function(e){var n=e.svgFill,t=e.theme;return n||t.colors.background})),z=Object(C.e)(S.j)(o||(o=Object(w.a)(["\n  width: 100%;\n  height: 20px;\n  background-color: ",";\n  clip-path: ",";\n  transform: ",";\n\n  & svg {\n    display: block;\n  }\n"])),(function(e){var n=e.theme,t=e.concaveBackgroundLight,c=e.concaveBackgroundDark;return n.isDark?c||t||"#66578D":t||c||"#9A9FD0"}),(function(e){var n=e.clipPath;return"url(".concat(n,")")}),(function(e){return"#bottomConcaveCurve"===e.clipPath?"translate(0, -13px)":"translate(0, 1px)"})),K=function(e){var n=e.concaveBackgroundLight,t=e.concaveBackgroundDark;return Object(H.jsx)(z,{concaveBackgroundLight:n,concaveBackgroundDark:t,clipPath:"#topConcaveCurve",children:Object(H.jsx)("svg",{width:"0",height:"0",children:Object(H.jsx)("defs",{children:Object(H.jsx)("clipPath",{id:"topConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(H.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},Q=function(e){var n=e.concaveBackgroundLight,t=e.concaveBackgroundDark;return Object(H.jsx)(z,{concaveBackgroundLight:n,concaveBackgroundDark:t,clipPath:"#bottomConcaveCurve",children:Object(H.jsx)("svg",{width:"0",height:"0",children:Object(H.jsx)("defs",{children:Object(H.jsx)("clipPath",{id:"bottomConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(H.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"})})})})})},M=C.e.div(r||(r=Object(w.a)(["\n  z-index: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])),(function(e){return e.index})),T=C.e.div(a||(a=Object(w.a)(["\n  z-index: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])),(function(e){return e.index+1})),_=function(e){var n=e.svgFill,t=e.index,c=e.curvePosition,i=e.dividerComponent,o=e.concave,r=e.concaveBackgroundDark,a=e.concaveBackgroundLight,l="top"===c&&!o,s="bottom"===c&&!o,d="top"===c&&o,b="bottom"===c&&o;return Object(H.jsxs)(M,{index:t,children:[i&&Object(H.jsx)(T,{index:t,children:i}),d&&Object(H.jsx)(K,{concaveBackgroundDark:r,concaveBackgroundLight:a}),b&&Object(H.jsx)(Q,{concaveBackgroundDark:r,concaveBackgroundLight:a}),l&&Object(H.jsx)(I,{svgFill:n,width:"100%"}),s&&Object(H.jsx)(J,{svgFill:n,width:"100%"})]})},U=["children","background","svgFill","index","dividerComponent","curvePosition","hasCurvedDivider","concaveDivider","concaveBackgroundDark","concaveBackgroundLight","containerProps","innerProps"],q=Object(C.e)(S.H)(l||(l=Object(w.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ",";\n  background: ",";\n"])),(function(e){return e.index-1}),(function(e){var n=e.background,t=e.theme;return n||t.colors.background})),G=Object(C.e)(A.a)(s||(s=Object(w.a)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  "," {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),R=function(e){var n=e.children,t=e.background,c=e.svgFill,i=e.index,o=void 0===i?1:i,r=e.dividerComponent,a=e.curvePosition,l=void 0===a?"bottom":a,s=e.hasCurvedDivider,d=void 0===s||s,b=e.concaveDivider,j=void 0!==b&&b,u=e.concaveBackgroundDark,x=e.concaveBackgroundLight,h=e.containerProps,p=e.innerProps,O=Object(P.a)(e,U);return Object(H.jsxs)(S.j,Object(F.a)(Object(F.a)({},h),{},{children:[d&&"top"===l&&Object(H.jsx)(_,{svgFill:c,index:o,concave:j,curvePosition:l,dividerComponent:r,concaveBackgroundDark:u,concaveBackgroundLight:x}),Object(H.jsx)(q,Object(F.a)(Object(F.a)({background:t,index:o,p:d?"bottom"===l?"48px 0 14px":"top"===l?"14px 0 48px":"48px 0":"48px 0"},O),{},{children:Object(H.jsx)(G,Object(F.a)(Object(F.a)({},p),{},{children:n}))})),d&&"bottom"===l&&Object(H.jsx)(_,{svgFill:c,index:o,concave:j,curvePosition:l,dividerComponent:r,concaveBackgroundDark:u,concaveBackgroundLight:x})]}))},V=t(97),Z=t(11),N=["title","children"],W=Object(C.e)(S.H)(d||(d=Object(w.a)(["\n  cursor: pointer;\n"]))),Y=Object(C.e)(S.H)(b||(b=Object(w.a)(["\n  button {\n    align-items: center;\n    justify-content: flex-start;\n  }\n"]))),X=Object(C.e)(S.H)(j||(j=Object(w.a)(["\n  overflow: hidden;\n  height: ",";\n  padding-bottom: ",";\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.isExpanded?"100%":"0px"}),(function(e){return e.isExpanded?"16px":"0px"}),(function(e){return e.theme.colors.inputSecondary})),$=function(e){var n=e.title,t=e.children,c=Object(P.a)(e,N),i=Object(B.b)().t,o=Object(y.useState)(!1),r=Object(Z.a)(o,2),a=r[0],l=r[1];return Object(H.jsxs)(W,Object(F.a)(Object(F.a)({},c),{},{flexDirection:"column",onClick:function(){return l(!a)},children:[Object(H.jsxs)(S.H,{justifyContent:"space-between",alignItems:"center",pb:"16px",children:[Object(H.jsx)(S.nb,{fontWeight:"bold",children:n}),Object(H.jsx)(Y,{children:Object(H.jsx)(S.F,{expanded:a,onClick:function(){return l(!a)},children:i(a?"Hide":"Details")})})]}),Object(H.jsx)(X,{isExpanded:a,flexDirection:"column",children:t})]}))},ee="https://docs.google.com/forms/d/e/1FAIpQLScUkwbsMWwg7L5jjGjEcmv6RsoCNhFDkV3xEpRu2KcJrr47Sw/viewform",ne=Object(C.e)(S.o)(u||(u=Object(w.a)(["\n  flex: 1;\n  height: fit-content;\n"]))),te=Object(C.e)(S.P)(x||(x=Object(w.a)(["\n  display: inline;\n"]))),ce=C.e.ul(h||(h=Object(w.a)(["\n  list-style-position: outside;\n  padding: 0 24px;\n\n  li {\n    line-height: 1.5;\n    margin-bottom: 4px;\n  }\n\n  li::marker {\n    font-size: 12px;\n  }\n"]))),ie=C.e.li(p||(p=Object(w.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.textSubtle})),oe=function(){var e=Object(B.b)().t;return Object(H.jsxs)(S.H,{flexDirection:"column",children:[Object(H.jsx)(S.J,{color:"#280D5F",as:"h1",scale:"xxl",mb:"40px",children:e("FAQs")}),Object(H.jsxs)(S.H,{flexDirection:["column",null,null,null,"row"],children:[Object(H.jsxs)(ne,{mr:[null,null,null,null,"24px"],mb:["24px",null,null,null,"0"],children:[Object(H.jsx)(S.r,{children:Object(H.jsx)(S.J,{children:e("How does it work?")})}),Object(H.jsxs)(S.p,{p:"0 24px 24px",children:[Object(H.jsx)($,{title:e("Step 1: Submit application"),mt:"24px",children:Object(H.jsxs)(S.j,{display:"inline",children:[Object(H.jsx)(S.nb,{display:"inline",color:"textSubtle",children:e("Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the ")}),Object(H.jsx)(te,{href:ee,external:!0,children:e("Application Form")})]})}),Object(H.jsx)($,{title:e("Step 2: Await whitelisting"),mt:"24px",children:Object(H.jsxs)(S.j,{color:"textSubtle",children:[Object(H.jsx)(S.nb,{color:"textSubtle",mb:"4px",children:e("The PancakeSwap team will try to respond within a week.")}),Object(H.jsxs)(ce,{children:[Object(H.jsx)(ie,{children:e("Community Farm qualifiers will be asked to provide the address of the wallet which you\u2019ll use for bidding CAKE in the auction.")}),Object(H.jsx)(ie,{children:e("Core Farm/Pool qualifiers will receive further directions separately.")})]})]})}),Object(H.jsxs)($,{title:e("Step 3: During the auction"),mt:"24px",children:[Object(H.jsx)(S.nb,{color:"textSubtle",children:e("During the auction period, if you connect your project\u2019s whitelisted wallet to the Auction page, you\u2019ll see a \u201cPlace Bid\u201d button during when the auction is live.")}),Object(H.jsx)(S.nb,{color:"textSubtle",children:e("You can then commit CAKE to bid during the auction, competing against other project for one of the available farms.")})]}),Object(H.jsxs)($,{title:e("Step 4: After the auction"),mt:"24px",children:[Object(H.jsx)(S.nb,{color:"textSubtle",children:e("If your bid was not successful, you can reclaim your CAKE on this page.")}),Object(H.jsx)(S.nb,{color:"textSubtle",children:e("If your bid was successful, your farm will begin at the specified time. The CAKE you bid will not be returned to you and will be added to our weekly CAKE burn.")}),Object(H.jsx)(S.nb,{color:"textSubtle",children:e("So long as you are whitelisted, you\u2019ll be able to participate in each new auction.")}),Object(H.jsx)(S.nb,{color:"textSubtle",children:e("If two or more projects bid the exact same CAKE amount and are contending for a spot in the winning bidders, their bids may be invalidated.")})]})]})]}),Object(H.jsxs)(ne,{children:[Object(H.jsx)(S.r,{children:Object(H.jsx)(S.J,{children:e("Terms & Conditions")})}),Object(H.jsx)(S.p,{children:Object(H.jsxs)(S.H,{flexDirection:"column",children:[Object(H.jsx)(S.nb,{mb:"4px",children:e("By participating in an Community Farm Auction, you agree to the following terms.")}),Object(H.jsxs)(ce,{children:[Object(H.jsx)("li",{children:e("A project being whitelisted for participation in an auction by PancakeSwap is in no way an endorsement or recommendation about said project.")}),Object(H.jsx)("li",{children:e("PancakeSwap strongly advise against sending funds to any projects which request donations.")}),Object(H.jsx)("li",{children:e("PancakeSwap reserves all rights to remove any project it deems to have acted with malicious or dangerous intent from auctions at any time.")})]})]})})]})]})]})},re=Object(C.e)(S.o)(O||(O=Object(w.a)(["\n  flex: 1;\n"]))),ae=Object(C.e)(S.o)(m||(m=Object(w.a)(["\n  flex: 2;\n"]))),le=Object(C.e)(S.H)(g||(g=Object(w.a)(["\n  flex-direction: column;\n  padding: 16px;\n  border-radius: ",";\n  background-color: ",";\n  border: 1px "," solid;\n"])),(function(e){return e.theme.radii.default}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),se=function(){var e=Object(B.b)().t;return Object(H.jsxs)(S.H,{width:"100%",flexDirection:["column",null,null,"row"],children:[Object(H.jsxs)(re,{mr:[null,null,null,"24px"],mb:["24px",null,null,"0"],children:[Object(H.jsx)(S.r,{children:Object(H.jsx)(S.J,{children:e("Next Auction")})}),Object(H.jsxs)(S.p,{children:[Object(H.jsx)(S.nb,{fontSize:"12px",bold:!0,color:"secondary",textTransform:"uppercase",mb:"8px",children:e("Auction Schedule")}),Object(H.jsxs)(le,{children:[Object(H.jsxs)(S.H,{justifyContent:"space-between",mb:"8px",children:[Object(H.jsx)(S.nb,{color:"textSubtle",children:e("Auction duration")}),Object(H.jsxs)(S.nb,{children:[" ",e("%numHours% hours",{numHours:"~24"})]})]}),Object(H.jsxs)(S.H,{justifyContent:"space-between",mb:"8px",children:[Object(H.jsx)(S.nb,{color:"textSubtle",children:e("Start")}),Object(H.jsxs)(S.nb,{children:[" ",e("To be announced")]})]}),Object(H.jsxs)(S.H,{justifyContent:"space-between",children:[Object(H.jsx)(S.nb,{color:"textSubtle",children:e("End")}),Object(H.jsxs)(S.nb,{children:[" ",e("To be announced")]})]})]})]})]}),Object(H.jsxs)(ae,{children:[Object(H.jsx)(S.r,{variant:"bubblegum",children:Object(H.jsx)(S.J,{color:"#280D5F",children:e("Auction Leaderboard")})}),Object(H.jsx)(S.p,{children:Object(H.jsx)(S.H,{minHeight:"152px",flexDirection:"column",alignItems:"center",justifyContent:"center",children:Object(H.jsx)(S.nb,{bold:!0,fontSize:"16px",color:"primary",textAlign:"center",children:e("Coming soon!")})})})]})]})},de=Object(C.e)(D.a)(f||(f=Object(w.a)(["\n  max-height: max-content;\n  margin-bottom: -40px;\n  padding-bottom: 20px;\n  overflow: hidden;\n  "," {\n    max-height: 392px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),be=Object(C.e)(S.H)(v||(v=Object(w.a)(["\n  flex-direction: column;\n  flex: 1;\n"]))),je=Object(C.e)(S.H)(k||(k=Object(w.a)(["\n  align-items: center;\n  justify-content: center;\n  padding-left: 24px;\n  flex: 0.5;\n  & img {\n    height: 50%;\n    width: 50%;\n  }\n\n  "," {\n    & img {\n      height: auto;\n      width: auto;\n    }\n  }\n\n  "," {\n    & img {\n      height: 90%;\n      margin-top: -15%;\n    }\n  }\n\n  "," {\n    & img {\n      margin-top: -25%;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.lg}),(function(e){return e.theme.mediaQueries.xl}));n.default=function(){var e=Object(B.b)().t,n=Object(V.a)().theme;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(de,{children:Object(H.jsxs)(S.H,{flexDirection:["column-reverse","row"],children:[Object(H.jsxs)(be,{children:[Object(H.jsx)(S.J,{as:"h1",scale:"xxl",mb:"24px",children:e("Community Farm Auction")}),Object(H.jsx)(S.nb,{bold:!0,fontSize:"16px",color:"textSubtle",mb:"24px",children:e("Each week, qualifying projects can bid CAKE for the right to host a 7-day Farm on PancakeSwap.")}),Object(H.jsx)(S.P,{external:!0,href:ee,children:Object(H.jsx)(S.k,{children:Object(H.jsx)(S.nb,{color:"white",bold:!0,fontSize:"16px",mr:"4px",children:e("Apply for a Farm/Pool")})})})]}),Object(H.jsx)(je,{children:Object(H.jsx)("img",{src:"/images/decorations/auction-bunny.png",alt:"auction bunny"})})]})}),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(R,{innerProps:{style:{margin:"0",width:"100%"}},background:n.colors.background,p:"24px 0",index:2,concaveDivider:!0,concaveBackgroundLight:n.colors.background,curvePosition:"top",children:Object(H.jsx)(se,{})}),Object(H.jsx)(R,{p:"24px 0",background:"linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",index:3,hasCurvedDivider:!1,children:Object(H.jsx)(oe,{})})]})]})}}}]);
//# sourceMappingURL=7.9eaa4d19.chunk.js.map