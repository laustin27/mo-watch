(this["webpackJsonpmo-watch"]=this["webpackJsonpmo-watch"]||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),i=n(17),s=n.n(i),o=(n(23),n(18)),r=n(8),d=(n(16),n(2));var b=function(e){var t=c.a.useState(),n=Object(o.a)(t,2),a=n[0],i=n[1];e.firebase.database().ref("/NoiseEvents").get().then((function(e){return i(e.val())}));var s=null===a||void 0===a?void 0:a.map((function(e){e.startTime,e.endTime}));return Object(d.jsx)("div",{class:"noise-event-list-container",children:s&&s.length>0?s:Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(d.jsx)(r.a,{icon:"faSmileBeam"}),Object(d.jsx)("h1",{children:"Hooray!!"}),Object(d.jsx)("span",{children:"No barks have happened yet"})]})})},l=n(13),j=(n(29),n(32),n(33),n(11));l.a.initializeApp({apiKey:"AIzaSyBLYuScmM2f7tn458Ue9TiWVS5FnuCExfQ",authDomain:"mo-watch.firebaseapp.com",databaseURL:"https://mo-watch-default-rtdb.firebaseio.com",projectId:"mo-watch",storageBucket:"mo-watch.appspot.com",messagingSenderId:"86065285680",appId:"1:86065285680:web:eb770abf0d22044715bbf5",measurementId:"G-TFCK2JPGGG"});var h=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{children:Object(d.jsx)("span",{style:{marginTop:"0.5rem"},children:"Mo Watch"})}),Object(d.jsx)("div",{className:"body",children:Object(d.jsx)(b,{firebase:l.a})}),Object(d.jsx)("footer",{children:Object(d.jsxs)("button",{onClick:function(){alert("clear coming soon")},className:"primary",children:[Object(d.jsx)(r.a,{icon:j.a,style:{paddingRight:"8px"}}),"Clear"]})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),u()}},[[34,1,2]]]);
//# sourceMappingURL=main.ba525ac3.chunk.js.map