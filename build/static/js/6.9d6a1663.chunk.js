(this["webpackJsonpnextepdex-web"]=this["webpackJsonpnextepdex-web"]||[]).push([[6],{1137:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return K}));var i=t(45),a=t(3),c=t.n(a),r=t(17),o=t(12),l=t(11),s=t(10),d=t(0),u=t(6),b=t(5),j=t(4),v=t(2),O=t(53),x=t(14),p=t(31),m=t(159),h=t(182),C=t(328),f=t(167),y=t(20),R=t(105),I=t(100),E=t(55),g=t(37),T=t(28),U=t(56),w=t(41),Y=t(236),N=t(108),k=t(730),_=t(36),S=t(146);var A=t(57),P=t(60),D=t(195),L=t(27),B=t(39),q=t(121),Q=t(202),H=t(111),V=t(92),z=t(299);function M(){return Object(L.c)((function(e){return e.burn}))}var F,W=t(61),X=t(218),G=t(1),J=u.e.div(F||(F=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function K(e){var n,t,a,s,u,F,K,Z,$,ee,ne,te,ie,ae,ce,re,oe,le,se,de=e.history,ue=e.match.params,be=ue.currencyIdA,je=ue.currencyIdB,ve=null!==(n=Object(U.c)(be))&&void 0!==n?n:void 0,Oe=null!==(t=Object(U.c)(je))&&void 0!==t?t:void 0,xe=Object(T.a)(),pe=xe.account,me=xe.chainId,he=xe.library,Ce=Object(d.useMemo)((function(){return[Object(A.b)(ve,me),Object(A.b)(Oe,me)]}),[ve,Oe,me]),fe=Object(l.a)(Ce,2),ye=fe[0],Re=fe[1],Ie=Object(x.b)().t,Ee=M(),ge=Ee.independentField,Te=Ee.typedValue,Ue=function(e,n){var t,i,a,c,r,s=Object(B.c)(),d=s.account,u=s.chainId,b=M(),v=b.independentField,O=b.typedValue,x=Object(q.b)(e,n),p=Object(l.a)(x,2)[1],m=Object(V.e)(null!==d&&void 0!==d?d:void 0,[null===p||void 0===p?void 0:p.liquidityToken]),h=null===m||void 0===m?void 0:m[null!==(t=null===p||void 0===p||null===(i=p.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==t?t:""],C=[Object(A.b)(e,u),Object(A.b)(n,u)],f=C[0],y=C[1],R=(a={},Object(o.a)(a,z.a.CURRENCY_A,f),Object(o.a)(a,z.a.CURRENCY_B,y),Object(o.a)(a,z.a.LIQUIDITY,null===p||void 0===p?void 0:p.liquidityToken),a),I=Object(Q.a)(null===p||void 0===p?void 0:p.liquidityToken),E=p&&I&&h&&f&&j.e.greaterThanOrEqual(I.raw,h.raw)?new j.k(f,p.getLiquidityValue(f,I,h,!1).raw):void 0,g=p&&I&&h&&y&&j.e.greaterThanOrEqual(I.raw,h.raw)?new j.k(y,p.getLiquidityValue(y,I,h,!1).raw):void 0,T=(c={},Object(o.a)(c,z.a.CURRENCY_A,E),Object(o.a)(c,z.a.CURRENCY_B,g),c),U=new j.g("0","100");if(v===z.a.LIQUIDITY_PERCENT)U=new j.g(O,"100");else if(v===z.a.LIQUIDITY){if(null===p||void 0===p?void 0:p.liquidityToken){var w=Object(H.a)(O,p.liquidityToken);w&&h&&!w.greaterThan(h)&&(U=new j.g(w.raw,h.raw))}}else if(R[v]){var Y=Object(H.a)(O,R[v]),N=T[v];Y&&N&&!Y.greaterThan(N)&&(U=new j.g(Y.raw,N.raw))}var k,_,S=(r={},Object(o.a)(r,z.a.LIQUIDITY_PERCENT,U),Object(o.a)(r,z.a.LIQUIDITY,h&&U&&U.greaterThan("0")?new j.k(h.token,U.multiply(h.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_A,f&&U&&U.greaterThan("0")&&E?new j.k(f,U.multiply(E.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_B,y&&U&&U.greaterThan("0")&&g?new j.k(y,U.multiply(g.raw).quotient):void 0),r);return d||(k="Connect Wallet"),S[z.a.LIQUIDITY]&&S[z.a.CURRENCY_A]&&S[z.a.CURRENCY_B]||(k=null!==(_=k)&&void 0!==_?_:"Enter an amount"),{pair:p,parsedAmounts:S,error:k}}(null!==ve&&void 0!==ve?ve:void 0,null!==Oe&&void 0!==Oe?Oe:void 0),we=Ue.pair,Ye=Ue.parsedAmounts,Ne=Ue.error,ke=function(){var e=Object(L.b)();return{onUserInput:Object(d.useCallback)((function(n,t){e(Object(z.b)({field:n,typedValue:t}))}),[e])}}().onUserInput,_e=!Ne,Se=Object(d.useState)(!1),Ae=Object(l.a)(Se,2),Pe=Ae[0],De=Ae[1],Le=Object(d.useState)(!1),Be=Object(l.a)(Le,2),qe=Be[0],Qe=Be[1],He=Object(d.useState)(""),Ve=Object(l.a)(He,2),ze=Ve[0],Me=Ve[1],Fe=Object(Y.a)(),We=Object(W.j)(),Xe=Object(l.a)(We,1)[0],Ge=($={},Object(o.a)($,z.a.LIQUIDITY_PERCENT,Ye[z.a.LIQUIDITY_PERCENT].equalTo("0")?"0":Ye[z.a.LIQUIDITY_PERCENT].lessThan(new j.g("1","100"))?"<1":Ye[z.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)($,z.a.LIQUIDITY,ge===z.a.LIQUIDITY?Te:null!==(a=null===(s=Ye[z.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==a?a:""),Object(o.a)($,z.a.CURRENCY_A,ge===z.a.CURRENCY_A?Te:null!==(u=null===(F=Ye[z.a.CURRENCY_A])||void 0===F?void 0:F.toSignificant(6))&&void 0!==u?u:""),Object(o.a)($,z.a.CURRENCY_B,ge===z.a.CURRENCY_B?Te:null!==(K=null===(Z=Ye[z.a.CURRENCY_B])||void 0===Z?void 0:Z.toSignificant(6))&&void 0!==K?K:""),$),Je=null===(ee=Ye[z.a.LIQUIDITY_PERCENT])||void 0===ee?void 0:ee.equalTo(new j.g("1")),Ke=Object(w.i)(null===we||void 0===we||null===(ne=we.liquidityToken)||void 0===ne?void 0:ne.address),Ze=Object(d.useState)(null),$e=Object(l.a)(Ze,2),en=$e[0],nn=$e[1],tn=Object(P.b)(Ye[z.a.LIQUIDITY],g.t),an=Object(l.a)(tn,2),cn=an[0],rn=an[1];function on(){return(on=Object(r.a)(c.a.mark((function e(){var n,t,i,a,r,o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ke&&we&&he&&Fe){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=Ye[z.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,Ke.nonces(pe);case 7:t=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],a={name:"Pancake LPs",version:"1",chainId:me,verifyingContract:we.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:pe,spender:g.t,value:n.raw.toString(),nonce:t.toHexString(),deadline:Fe.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:a,primaryType:"Permit",message:o}),he.send("eth_signTypedData_v4",[pe,l]).then(b.splitSignature).then((function(e){nn({v:e.v,r:e.r,s:e.s,deadline:Fe.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&rn()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ln=Object(d.useCallback)((function(e,n){return nn(null),ke(e,n)}),[ke]),sn=Object(d.useCallback)((function(e){return ln(z.a.LIQUIDITY,e)}),[ln]),dn=Object(d.useCallback)((function(e){return ln(z.a.CURRENCY_A,e)}),[ln]),un=Object(d.useCallback)((function(e){return ln(z.a.CURRENCY_B,e)}),[ln]),bn=Object(N.d)();function jn(){return vn.apply(this,arguments)}function vn(){return(vn=Object(r.a)(c.a.mark((function e(){var n,t,a,r,l,s,d,u,b,v,x,p,m,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(me&&he&&pe&&Fe){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=Ye[z.a.CURRENCY_A],a=Ye[z.a.CURRENCY_B],t&&a){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(_.g)(me,he,pe),n={},Object(o.a)(n,z.a.CURRENCY_A,Object(_.c)(t,Xe)[0]),Object(o.a)(n,z.a.CURRENCY_B,Object(_.c)(a,Xe)[0]),l=n,ve&&Oe){e.next=9;break}throw new Error("missing tokens");case 9:if(s=Ye[z.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=Oe===j.d,u=ve===j.d||d,ye&&Re){e.next=16;break}throw new Error("could not wrap");case 16:if(cn!==P.a.APPROVED){e.next=20;break}u?(b=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],v=[d?ye.address:Re.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),pe,Fe.toHexString()]):(b=["removeLiquidity"],v=[ye.address,Re.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),pe,Fe.toHexString()]),e.next=25;break;case 20:if(null===en){e.next=24;break}u?(b=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],v=[d?ye.address:Re.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),pe,en.deadline,!1,en.v,en.r,en.s]):(b=["removeLiquidityWithPermit"],v=[ye.address,Re.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),pe,en.deadline,!1,en.v,en.r,en.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(b.map((function(e){var n;return(n=r.estimateGas)[e].apply(n,Object(i.a)(v)).then(_.b).catch((function(n){console.error("estimateGas failed",e,v,n)}))})));case 27:if(x=e.sent,-1!==(p=x.findIndex((function(e){return O.a.isBigNumber(e)})))){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return m=b[p],h=x[p],Qe(!0),e.next=38,r[m].apply(r,Object(i.a)(v).concat([{gasLimit:h}])).then((function(e){var n,t;Qe(!1),bn(e,{summary:"Remove ".concat(null===(n=Ye[z.a.CURRENCY_A])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===ve||void 0===ve?void 0:ve.symbol," and ").concat(null===(t=Ye[z.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol)}),Me(e.hash)})).catch((function(e){Qe(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function On(){var e,n;return Object(G.jsxs)(p.a,{gap:"md",children:[Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(v.nb,{fontSize:"24px",children:null===(e=Ye[z.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:ve,size:"24px"}),Object(G.jsx)(v.nb,{fontSize:"24px",ml:"10px",children:null===ve||void 0===ve?void 0:ve.symbol})]})]}),Object(G.jsx)(y.c,{children:Object(G.jsx)(v.a,{width:"16px"})}),Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(v.nb,{fontSize:"24px",children:null===(n=Ye[z.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:Oe,size:"24px"}),Object(G.jsx)(v.nb,{fontSize:"24px",ml:"10px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]})]}),Object(G.jsx)(v.nb,{small:!0,textAlign:"left",pt:"12px",children:Ie("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:Xe/100})})]})}function xn(){var e,n,t;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Ie("%assetA%/%assetB% Burned",{assetA:null!==(e=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==e?e:"",assetB:null!==(n=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==n?n:""}),Object(G.jsxs)(y.c,{children:[Object(G.jsx)(E.b,{currency0:ve,currency1:Oe,margin:!0}),Object(G.jsx)(v.nb,{children:null===(t=Ye[z.a.LIQUIDITY])||void 0===t?void 0:t.toSignificant(6)})]})]}),we&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(v.nb,{children:Ie("Price")}),Object(G.jsxs)(v.nb,{children:["1 ",null===ve||void 0===ve?void 0:ve.symbol," = ",ye?we.priceOf(ye).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(y.b,{children:[Object(G.jsx)("div",{}),Object(G.jsxs)(v.nb,{children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," = ",Re?we.priceOf(Re).toSignificant(6):"-"," ",null===ve||void 0===ve?void 0:ve.symbol]})]})]}),Object(G.jsx)(v.k,{disabled:!(cn===P.a.APPROVED||null!==en),onClick:jn,children:Ie("Confirm")})]})}var pn=Ie("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(te=null===(ie=Ye[z.a.CURRENCY_A])||void 0===ie?void 0:ie.toSignificant(6))&&void 0!==te?te:"",symbolA:null!==(ae=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==ae?ae:"",amountB:null!==(ce=null===(re=Ye[z.a.CURRENCY_B])||void 0===re?void 0:re.toSignificant(6))&&void 0!==ce?ce:"",symbolB:null!==(oe=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==oe?oe:""}),mn=Object(d.useCallback)((function(e){ln(z.a.LIQUIDITY_PERCENT,e.toString())}),[ln]),hn=ve===j.d||Oe===j.d,Cn=Boolean(me&&(ve&&Object(j.o)(j.n[me],ve)||Oe&&Object(j.o)(j.n[me],Oe))),fn=Object(d.useCallback)((function(e){je&&Object(S.a)(e)===je?de.push("/remove/".concat(Object(S.a)(e),"/").concat(be)):de.push("/remove/".concat(Object(S.a)(e),"/").concat(je))}),[be,je,de]),yn=Object(d.useCallback)((function(e){be&&Object(S.a)(e)===be?de.push("/remove/".concat(je,"/").concat(Object(S.a)(e))):de.push("/remove/".concat(be,"/").concat(Object(S.a)(e)))}),[be,je,de]),Rn=Object(d.useCallback)((function(){nn(null),ze&&ln(z.a.LIQUIDITY_PERCENT,"0"),Me("")}),[ln,ze]),In=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),a=Object(l.a)(i,2),c=a[0],r=a[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){n(e),o.current=void 0}),t)}),[t,n]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[c,s]}(Number.parseInt(Ye[z.a.LIQUIDITY_PERCENT].toFixed(0)),mn),En=Object(l.a)(In,2),gn=En[0],Tn=En[1],Un=Object(v.Cb)(Object(G.jsx)(m.c,{title:Ie("You will receive"),customOnDismiss:Rn,attemptingTxn:qe,hash:ze||"",content:function(){return Object(G.jsx)(m.a,{topContent:On,bottomContent:xn})},pendingText:pn}),!0,!0,"removeLiquidityModal"),wn=Object(l.a)(Un,1)[0];return Object(G.jsxs)(X.a,{children:[Object(G.jsxs)(f.a,{children:[Object(G.jsx)(f.b,{backTo:"/pool",title:Ie("Remove %assetA%-%assetB% liquidity",{assetA:null!==(le=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==le?le:"",assetB:null!==(se=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==se?se:""}),subtitle:"To receive ".concat(null===ve||void 0===ve?void 0:ve.symbol," and ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol),noConfig:!0}),Object(G.jsxs)(v.p,{children:[Object(G.jsxs)(p.a,{gap:"20px",children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(v.nb,{children:Ie("Amount")}),Object(G.jsx)(v.k,{variant:"text",scale:"sm",onClick:function(){return De(!Pe)},children:Ie(Pe?"Simple":"Detailed")})]}),!Pe&&Object(G.jsxs)(J,{children:[Object(G.jsxs)(v.nb,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Ge[z.a.LIQUIDITY_PERCENT],"%"]}),Object(G.jsx)(v.kb,{name:"lp-amount",min:0,max:100,value:gn,onValueChanged:function(e){return Tn(Math.ceil(e))},mb:"16px"}),Object(G.jsxs)(v.H,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(G.jsx)(v.k,{variant:"tertiary",scale:"sm",onClick:function(){return ln(z.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(G.jsx)(v.k,{variant:"tertiary",scale:"sm",onClick:function(){return ln(z.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(G.jsx)(v.k,{variant:"tertiary",scale:"sm",onClick:function(){return ln(z.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(G.jsx)(v.k,{variant:"tertiary",scale:"sm",onClick:function(){return ln(z.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!Pe&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(p.b,{children:Object(G.jsx)(v.b,{color:"textSubtle",width:"24px",my:"16px"})}),Object(G.jsxs)(p.a,{gap:"10px",children:[Object(G.jsx)(v.nb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ie("You will receive")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(v.H,{justifyContent:"space-between",mb:"8px",children:[Object(G.jsxs)(v.H,{children:[Object(G.jsx)(E.a,{currency:ve}),Object(G.jsx)(v.nb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===ve||void 0===ve?void 0:ve.symbol})]}),Object(G.jsx)(v.nb,{small:!0,children:Ge[z.a.CURRENCY_A]||"-"})]}),Object(G.jsxs)(v.H,{justifyContent:"space-between",children:[Object(G.jsxs)(v.H,{children:[Object(G.jsx)(E.a,{currency:Oe}),Object(G.jsx)(v.nb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]}),Object(G.jsx)(v.nb,{small:!0,children:Ge[z.a.CURRENCY_B]||"-"})]}),me&&(Cn||hn)?Object(G.jsx)(y.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:hn?Object(G.jsx)(k.a,{to:"/remove/".concat(ve===j.d?j.n[me].address:be,"/").concat(Oe===j.d?j.n[me].address:je),children:Ie("Receive WCXS")}):Cn?Object(G.jsx)(k.a,{to:"/remove/".concat(ve&&Object(j.o)(ve,j.n[me])?"CXS":be,"/").concat(Oe&&Object(j.o)(Oe,j.n[me])?"CXS":je),children:Ie("Receive CXS")}):null}):null]})]})]}),Pe&&Object(G.jsxs)(v.j,{my:"16px",children:[Object(G.jsx)(h.a,{value:Ge[z.a.LIQUIDITY],onUserInput:sn,onMax:function(){ln(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,disableCurrencySelect:!0,currency:null===we||void 0===we?void 0:we.liquidityToken,pair:we,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(G.jsx)(p.b,{children:Object(G.jsx)(v.b,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Ge[z.a.CURRENCY_A],onUserInput:dn,onMax:function(){return ln(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,currency:ve,label:Ie("Output"),onCurrencySelect:fn,id:"remove-liquidity-tokena"}),Object(G.jsx)(p.b,{children:Object(G.jsx)(v.a,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Ge[z.a.CURRENCY_B],onUserInput:un,onMax:function(){return ln(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,currency:Oe,label:Ie("Output"),onCurrencySelect:yn,id:"remove-liquidity-tokenb"})]}),we&&Object(G.jsxs)(p.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(G.jsx)(v.nb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ie("Prices")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(v.H,{justifyContent:"space-between",children:[Object(G.jsxs)(v.nb,{small:!0,color:"textSubtle",children:["1 ",null===ve||void 0===ve?void 0:ve.symbol," ="]}),Object(G.jsxs)(v.nb,{small:!0,children:[ye?we.priceOf(ye).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(v.H,{justifyContent:"space-between",children:[Object(G.jsxs)(v.nb,{small:!0,color:"textSubtle",children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," ="]}),Object(G.jsxs)(v.nb,{small:!0,children:[Re?we.priceOf(Re).toSignificant(6):"-"," ",null===ve||void 0===ve?void 0:ve.symbol]})]})]})]}),Object(G.jsx)(v.j,{position:"relative",mt:"16px",children:pe?Object(G.jsxs)(y.b,{children:[Object(G.jsx)(v.k,{variant:cn===P.a.APPROVED||null!==en?"success":"primary",onClick:function(){return on.apply(this,arguments)},disabled:cn!==P.a.NOT_APPROVED||null!==en,width:"100%",mr:"0.5rem",children:cn===P.a.PENDING?Object(G.jsx)(D.a,{children:Ie("Approving")}):cn===P.a.APPROVED||null!==en?Ie("Approved"):Ie("Approve")}),Object(G.jsx)(v.k,{variant:!_e&&Ye[z.a.CURRENCY_A]&&Ye[z.a.CURRENCY_B]?"danger":"primary",onClick:function(){wn()},width:"100%",disabled:!_e||null===en&&cn!==P.a.APPROVED,children:Ne||Ie("Remove")})]}):Object(G.jsx)(R.a,{})})]})]}),we?Object(G.jsx)(p.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(G.jsx)(C.a,{showUnwrapped:Cn,pair:we})}):null]})}},730:function(e,n,t){"use strict";var i,a=t(10),c=t(78),r=t(6),o=Object(r.e)(c.a)(i||(i=Object(a.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));n.a=o}}]);
//# sourceMappingURL=6.9d6a1663.chunk.js.map