(this.webpackJsonpwomanshop=this.webpackJsonpwomanshop||[]).push([[0],{18:function(e,c,t){},25:function(e,c,t){"use strict";t.r(c);var i=t(2),r=t.n(i),n=t(13),s=t.n(n),a=(t(18),t(10)),o=t(3),j=t(4),d=t(0);function l(e){var c=e.cartItems,t=e.onAdd,i=e.onRemove,r=c.reduce((function(e,c){return e+c.precio*c.qty}),0),n=.14*r,s=r>2e3?0:50,a=r+n+s;return Object(d.jsx)("div",{className:"contenedorCarrito",children:Object(d.jsxs)("div",{className:"carrito1",children:[Object(d.jsx)("div",{children:0===c.length&&Object(d.jsx)("div",{children:"Cart Is Empty"})}),c.map((function(e){return Object(d.jsxs)("div",{className:"productos-carrito2",children:[Object(d.jsxs)("div",{className:"nombreCarrito",children:[" ",e.nombre," "]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return t(e)},className:"botonCarro",children:"+"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return i(e)},className:"botonCarro",children:"-"})}),Object(d.jsxs)("div",{children:[e.qty,"x$ ",e.precio.toFixed(0)]})]},e.id)})),0!==c.lengh&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"productos-carrito",children:[Object(d.jsx)("div",{children:"Item Price"}),Object(d.jsxs)("div",{children:[" $ ",r.toFixed(2)]})]}),Object(d.jsxs)("div",{className:"productos-carrito",children:[Object(d.jsx)("div",{children:"Tax Price"}),Object(d.jsxs)("div",{children:[" $ ",n.toFixed(2)]})]}),Object(d.jsxs)("div",{className:"productos-carrito",children:[Object(d.jsx)("div",{children:"Shipping"}),Object(d.jsxs)("div",{children:[" $ ",s.toFixed(2)]})]}),Object(d.jsxs)("div",{className:"productos-carrito",children:[Object(d.jsx)("div",{children:Object(d.jsx)("strong",{children:"Total Price"})}),Object(d.jsxs)("div",{children:[" $ ",Object(d.jsx)("strong",{children:a.toFixed(2)})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"productos-carrito",children:Object(d.jsx)("button",{className:"boton1",onClick:function(){return alert("Implement CheckOut")},children:"Check Out"})})]})]})})}var b=t(5),m=t(6),O=t.p+"static/media/logo.39de76f5.png";function u(e){var c=Object(i.useState)(!1),t=Object(j.a)(c,2),r=t[0],n=t[1],s=Object(i.useState)(!1),a=Object(j.a)(s,2),o=a[0],l=(a[1],Object(i.useState)(!1)),u=Object(j.a)(l,2),h=u[0],x=u[1],p=Object(i.useState)(!1),v=Object(j.a)(p,2),g=v[0],f=v[1],N=function(){x(!h)},C=function(){f(!g),x(!1),n(!1)};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{children:[Object(d.jsxs)("ul",{className:"linksRopa",children:[Object(d.jsx)("li",{className:"linkRopa",children:Object(d.jsx)("a",{href:"./WomanShop.js",children:"Woman"})}),Object(d.jsx)("li",{className:"linkRopa",children:Object(d.jsx)("a",{href:"https://nvillalon1994.github.io/ManShop/#carro",children:"Man"})})]}),Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("a",{className:"imgLogo",href:"https://nvillalon1994.github.io/aplicaicon/",children:Object(d.jsx)("img",{src:O,alt:""})})}),Object(d.jsxs)("ul",{className:"carritoUsuario",children:[Object(d.jsx)("li",{className:"carrito",children:Object(d.jsx)(b.a,{icon:m.a})}),g?Object(d.jsx)("li",{className:"carrito",onClick:function(){n(!r),x(!1)},children:"Natalio"}):Object(d.jsx)("li",{className:"carrito",desplegarUser:N,onClick:N,children:Object(d.jsx)(b.a,{icon:m.c})})]})]}),o?Object(d.jsxs)("div",{className:"menu-carrito",children:[Object(d.jsx)("h3",{children:"Carrito de compra"}),Object(d.jsx)("br",{}),o?[{id:1,nombre:"Remera",precio:1200},{id:2,nombre:"Remera",precio:1200},{id:2,nombre:"Remera",precio:1200},{id:2,nombre:"Remera",precio:1200}].map((function(e){return Object(d.jsxs)("div",{className:"articuloCarrito",articulo:e,children:[Object(d.jsx)("p",{children:e.nombre}),Object(d.jsx)("p",{children:e.precio})]},e.id)})):Object(d.jsx)(d.Fragment,{})]}):Object(d.jsx)(d.Fragment,{}),h?Object(d.jsx)("button",{className:"menu-user",onClick:C,children:" Ingresar "}):Object(d.jsx)(d.Fragment,{}),r?Object(d.jsx)("button",{className:"menu-user",onClick:C,children:"Salir"}):Object(d.jsx)(d.Fragment,{})]})}function h(e){var c=e.product,t=e.onAdd;return Object(d.jsxs)("div",{className:"cardArticulo",children:[Object(d.jsx)("img",{src:c.img,alt:c.nombre}),Object(d.jsx)("h3",{children:c.nombre}),Object(d.jsxs)("div",{children:["$ ",c.precio]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"boton1",onClick:function(){return t(c)},children:"Add to Car"})})]})}function x(e){var c=e.products,t=e.onAdd;return Object(d.jsx)("main",{className:"contenedorArticulos",children:Object(d.jsx)("div",{className:"menuCarrito",children:c.map((function(e){return Object(d.jsx)(h,{product:e,onAdd:t},e.id)}))})})}var p=t.p+"static/media/a (1).edd7bce2.jfif",v=t.p+"static/media/a (2).65811051.jpg";t.p,t.p;var g=t.p+"static/media/a1.0b1b840d.jpg",f=t.p+"static/media/a2.174efe65.jpg",N=t.p+"static/media/a3.e08c1713.jfif",C=(t.p,t.p,t.p+"static/media/a6.118f544b.jpg"),k={products:[{id:1,nombre:"T-shirt -Grey",precio:1200,img:g},{id:2,nombre:"Jacket - Orange",precio:2200,img:C},{id:3,nombre:"T-shirt - White",precio:1100,img:N},{id:4,nombre:"T-shirt - White",precio:1300,img:N},{id:5,nombre:"T-shirt - Grey",precio:1200,img:g},{id:6,nombre:"Jacket - Orange",precio:3200,img:C},{id:7,nombre:"T-shirt- Grey",precio:1200,img:g},{id:8,nombre:"Hoody - Purple",precio:2200,img:f},{id:9,nombre:"Hoody - Purple",precio:2200,img:f}]};function y(e){var c=Object(i.useState)(!0),t=Object(j.a)(c,2),r=(t[0],t[1],Object(i.useState)(!1)),n=(r.mostrarCarrito,r.setMostrarCarrito,k.products),s=Object(i.useState)([]),O=Object(j.a)(s,2),h=O[0],p=O[1],v=function(e){var c=h.find((function(c){return c.id===e.id}));p(c?h.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},c),{},{qty:c.qty+1}):t})):[].concat(Object(a.a)(h),[Object(o.a)(Object(o.a)({},e),{},{qty:1})]))},g=function(e){var c=h.find((function(c){return c.id===e.id}));1===c.qty?p(h.filter((function(c){return c.id!==e.id}))):p(h.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},c),{},{qty:c.qty-1}):t})))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{countCartItems:h.length}),Object(d.jsxs)("div",{className:"productos",children:[Object(d.jsx)(x,{onAdd:v,products:n,onRemove:g}),Object(d.jsx)("div",{id:"carro",children:Object(d.jsx)(l,{onAdd:v,onRemove:g,cartItems:h})}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"botoncarrito boton1",children:Object(d.jsx)("a",{href:"#carro",children:Object(d.jsx)(b.a,{icon:m.b})})})," "]})]})]})}t.p,t.p;var F=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(y,{})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(c){var t=c.getCLS,i=c.getFID,r=c.getFCP,n=c.getLCP,s=c.getTTFB;t(e),i(e),r(e),n(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.69aa8861.chunk.js.map