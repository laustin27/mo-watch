(this["webpackJsonpmo-watch"]=this["webpackJsonpmo-watch"]||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),i=n(17),r=n.n(i),o=(n(23),n(18)),s=n(8),l=(n(16),n(2));var d=n(9);var b=function(e){var t=c.a.useState([]),n=Object(o.a)(t,2),a=n[0],i=n[1];e.firebase.database().ref("/NoiseEvents").get().then((function(e){return i(Array.from(e.val()))}));var r=Array.isArray(a)?null===a||void 0===a?void 0:a.map((function(e){})):null;return console.log("noiseEvents1",a),Object(l.jsx)("div",{class:"noise-event-list-container",children:r&&r.length>0?r:Object(l.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:"5rem"},children:[Object(l.jsx)(s.a,{icon:d.a,style:{fontSize:"7rem"}}),Object(l.jsx)("h1",{children:"Hooray!!"}),Object(l.jsx)("span",{children:"No barks have happened yet"})]})})},h=n(13);n(29),n(32),n(33);h.a.initializeApp({apiKey:"AIzaSyBLYuScmM2f7tn458Ue9TiWVS5FnuCExfQ",authDomain:"mo-watch.firebaseapp.com",databaseURL:"https://mo-watch-default-rtdb.firebaseio.com",projectId:"mo-watch",storageBucket:"mo-watch.appspot.com",messagingSenderId:"86065285680",appId:"1:86065285680:web:eb770abf0d22044715bbf5",measurementId:"G-TFCK2JPGGG"});var j=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsx)("span",{style:{marginTop:"0.5rem"},children:"Mo Watch"})}),Object(l.jsx)("div",{className:"body",children:Object(l.jsx)(b,{firebase:h.a})}),Object(l.jsx)("footer",{children:Object(l.jsxs)("button",{onClick:function(){alert("clear coming soon")},className:"primary",children:[Object(l.jsx)(s.a,{icon:d.b,style:{paddingRight:"8px"}}),"Clear"]})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),u()}},[[34,1,2]]]);
//# sourceMappingURL=main.61f45eae.chunk.js.map