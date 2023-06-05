"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[503],{8939:function(n,e,r){r.d(e,{Mc:function(){return x},Qw:function(){return p},W2:function(){return u},h4:function(){return h},nf:function(){return f}});var t,i,o,c,a,s=r(168),d=r(1087),l=r(6444),u=l.ZP.div(t||(t=(0,s.Z)(["\n    max-width: 480px;\n    padding: 0 20px;\n    margin: 0 auto;\n    overflow: hidden;\n\n    @media screen and (min-width: 480px) {\n        padding: 0 32px;\n        max-width: 768px;\n    }\n\n    @media screen and (min-width: 769px) {\n        max-width: 1280px;\n    }\n"]))),h=l.ZP.header(i||(i=(0,s.Z)(["\nbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n"]))),x=l.ZP.ul(o||(o=(0,s.Z)(["\ndisplay: flex;\ngap: 20px;\nlist-style: none;\n"]))),f=l.ZP.li(c||(c=(0,s.Z)(["\n\n"]))),p=(0,l.ZP)(d.OL)(a||(a=(0,s.Z)(["\npadding: 4px 8px;\nborder-radius: 0.4rem;\ntext-transform: uppercase;\nfont-size: 20px;\ntext-decoration: none;\ncolor: black;\ntransition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\n&:hover, :focus{\n    color: orange;\n}\n&.active {\n    color: white;\n    background-color: orangered;\n    transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n"])))},9621:function(n,e,r){r.d(e,{Z:function(){return l}});var t,i=r(8402),o=r(4164),c=r(254),a=r(168),s=r(6444).ZP.div(t||(t=(0,a.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"]))),d=r(184),l=function(n){var e=n.isLoad,r=void 0!==e&&e,t=(0,c.Y)().isLoading;return(0,o.createPortal)((0,d.jsx)(s,{children:(0,d.jsx)(i.NB,{visible:r||t,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),document.getElementById("root-loading"))}},503:function(n,e,r){r.r(e);var t=r(9439),i=r(2791),o=r(7689),c=r(8057),a=r(9135),s=r(6273),d=r(8939),l=r(254),u=r(9621),h=r(184);e.default=function(){var n,e,r=(0,i.useState)(""),x=(0,t.Z)(r,2),f=x[0],p=x[1],b=(0,i.useState)(""),g=(0,t.Z)(b,2),Z=g[0],m=g[1],j=(0,i.useState)(""),v=(0,t.Z)(j,2),w=v[0],k=v[1],I=(0,i.useState)(""),z=(0,t.Z)(I,2),y=z[0],P=z[1],S=(0,i.useState)([]),M=(0,t.Z)(S,2),O=M[0],_=M[1],U=(0,i.useState)(""),C=(0,t.Z)(U,2),L=C[0],J=C[1],W=(0,l.Y)().setIsloading,Y=(0,o.UO)().filmId,B=(0,o.TH)(),D=(0,i.useRef)(null!==(n=null===(e=B.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/move");return(0,i.useEffect)((function(){W(!0),(0,c.Z)("movie/".concat(Y)).then((function(n){var e=n.original_title,r=n.genres,t=n.vote_average,i=n.poster_path,o=n.overview;m("".concat(e)),_(r.map((function(n){return n.name})).join(", ")),P("".concat(o)),p("https://image.tmdb.org/t/p/w500".concat(i)),k("".concat((10*t).toFixed(0),"%"))})).catch((function(n){return J(n.toString())})).finally((function(){return W(!1)}))}),[]),(0,h.jsxs)(h.Fragment,{children:[!L&&(0,h.jsx)(s.$0,{children:(0,h.jsxs)(d.W2,{children:[(0,h.jsxs)(s.Qj,{to:D.current,children:[(0,h.jsx)(a.BMs,{})," go back"]}),(0,h.jsxs)(s.r6,{children:[(0,h.jsx)(s.C6,{src:f,alt:Z}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:Z}),(0,h.jsxs)("p",{children:["User Score: ",w]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:y}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:O})]})]})]})}),!L&&(0,h.jsx)(s.$0,{children:(0,h.jsxs)(d.W2,{children:[(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{to:"reviews",children:"Reviews"})})]})]})}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(u.Z,{isLoad:!0}),children:(0,h.jsx)(o.j3,{})}),L&&(0,h.jsxs)("div",{children:[" ",L]})]})}},6273:function(n,e,r){r.d(e,{$0:function(){return h},C6:function(){return p},Qj:function(){return x},r6:function(){return f},rU:function(){return u}});var t,i,o,c,a,s=r(168),d=r(1087),l=r(6444),u=(0,l.ZP)(d.OL)(t||(t=(0,s.Z)(["\nfont-size: 12px;\ntext-transform: uppercase;\ncolor: black;\ntransition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\n&:hover, :focus{\n    color: orange;\n}\n"]))),h=l.ZP.section(i||(i=(0,s.Z)(["\nbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n"]))),x=(0,l.ZP)(d.OL)(o||(o=(0,s.Z)(["\nbackground-color: #fff;\ntext-decoration: none   ;\ndisplay: flex;\nalign-items: center;\nwidth: 200px;\npadding: 4px 8px;\nborder: 1px solid black;\nborder-radius: 0.2rem;\ngap: 3px;\nmargin: 10px 0;\n&:hover,\n&:focus{\n    border-color:transparent;\n    background-color: orangered;\n    color: white;\n}\n"]))),f=l.ZP.div(c||(c=(0,s.Z)(["\ndisplay: flex;\ngap: 20px;\n"]))),p=l.ZP.img(a||(a=(0,s.Z)(["\nflex-basis: 50%;\nwidth: 100%;\noverflow: hidden;\nheight: 100%;\nobject-fit: cover;\n"])))},8057:function(n,e,r){var t=r(4165),i=r(5861),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzZiODFhZDI1YjU4ZDM4MDVhMzIwMDMwNmFiOTI3OCIsInN1YiI6IjY0MzZlYjk0YWVkZTU5MDBiNmMxYTAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zIeaRszK30mloEyQVSdO5S4hPFf9bbWLE0idwZt7Z2g"}},c=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat("https://api.themoviedb.org/3/").concat(e).concat(e.includes("?")?"&language=en-US":"?language=en-US"),o).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();e.Z=c}}]);
//# sourceMappingURL=503.7b8b7977.chunk.js.map