(this["webpackJsonpmo-watch"]=this["webpackJsonpmo-watch"]||[]).push([[0],{23:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a=t(4),s=t.n(a),c=t(17),i=t.n(c),o=(t(23),t(15)),r=t(6),d=(t(28),t(29),t(2));var l=function(e){return Object(d.jsxs)("div",{className:"noise-event-container",children:[Object(d.jsx)("span",{className:"noise-event-text",children:"Bark!"}),Object(d.jsx)("span",{className:"noise-event-start",children:null===e||void 0===e?void 0:e.startTime}),Object(d.jsx)("span",{className:"noise-event-end",children:null===e||void 0===e?void 0:e.endTime}),Object(d.jsx)("span",{className:"noise-event-duration",children:null===e||void 0===e?void 0:e.duration})]})},j=t(7),b=t(18);var m=function(e){var n,t=s.a.useState([]),a=Object(o.a)(t,2),c=(a[0],a[1],Object(b.a)(e.firebase.database().ref("/NoiseEvents"))),i=Object(o.a)(c,3),m=i[0],h=i[1],u=i[2];return console.log("values",m),n=u?Object(d.jsxs)("div",{className:"message-container",children:[Object(d.jsx)(r.a,{icon:j.a,className:"big-icon"}),Object(d.jsx)("h1",{children:"Something went wrong"})]}):h?Object(d.jsxs)("div",{className:"message-container",children:[Object(d.jsx)(r.a,{icon:j.b,className:"big-icon"}),Object(d.jsx)("h1",{children:"Loading"})]}):m&&m.length>0?null===m||void 0===m?void 0:m.forEach((function(e){return Object(d.jsx)(l,{startTime:e.StartTimestampMinute+":"+e.StartTimestampSecond,endTime:e.EndTimestampMinute+":"+e.EndTimestampSecond,duration:e.DurationMinutes+":"+e.DurationSeconds})})):0==m.length?Object(d.jsxs)("div",{className:"message-container",children:[Object(d.jsx)(r.a,{icon:j.d,className:"big-icon"}),Object(d.jsx)("h1",{children:"Hooray!!"}),Object(d.jsx)("span",{children:"No barks have happened yet"})]}):Object(d.jsxs)("div",{className:"message-container",children:[Object(d.jsx)(r.a,{icon:j.c,className:"big-icon"}),Object(d.jsx)("h1",{children:"Not Sure"}),Object(d.jsx)("span",{children:"This is embarassing... I don't know what to display"})]}),console.log("content",n),Object(d.jsx)("div",{class:"noise-event-list-container",children:n})},h=t(13);t(31),t(34),t(35);h.a.initializeApp({apiKey:"AIzaSyBLYuScmM2f7tn458Ue9TiWVS5FnuCExfQ",authDomain:"mo-watch.firebaseapp.com",databaseURL:"https://mo-watch-default-rtdb.firebaseio.com",projectId:"mo-watch",storageBucket:"mo-watch.appspot.com",messagingSenderId:"86065285680",appId:"1:86065285680:web:eb770abf0d22044715bbf5",measurementId:"G-TFCK2JPGGG"});var u=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{children:Object(d.jsx)("span",{style:{marginTop:"0.5rem"},children:"Mo Watch"})}),Object(d.jsx)("div",{className:"body",children:Object(d.jsx)(m,{firebase:h.a})}),Object(d.jsx)("footer",{children:Object(d.jsxs)("button",{onClick:function(){alert("clear coming soon")},className:"primary",children:[Object(d.jsx)(r.a,{icon:j.e,style:{paddingRight:"8px"}}),"Clear"]})})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(n){var t=n.getCLS,a=n.getFID,s=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),p()}},[[36,1,2]]]);
//# sourceMappingURL=main.7dcabc41.chunk.js.map