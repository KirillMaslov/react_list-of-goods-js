(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),r=n(6),o=n(8),i=(n(13),n(1)),a=n(4),l=n.n(a),u=(n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="Sort alphabetically",h="Sort by length";var d=function(){var t=Object(i.useState)(""),e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(!1),a=Object(r.a)(s,2),d=a[0],g=a[1],p=function(t,e,n){var c=Object(o.a)(t);return e&&c.sort((function(t,n){switch(e){case j:return t.localeCompare(n);case h:return t.length-n.length;default:return 0}})),n&&(c=c.reverse()),c}(b,n,d);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==j}),onClick:function(){return c(j)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==h}),onClick:function(){return c(h)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!d}),onClick:function(){return g(!d)},children:"Reverse"}),(n||d)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){g(!1),c("")},children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t})}))})]})};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4a81267d.chunk.js.map