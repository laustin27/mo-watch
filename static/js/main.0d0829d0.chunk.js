(this["webpackJsonpmo-watch"]=this["webpackJsonpmo-watch"]||[]).push([[0],{23:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var i=t(4),c=t.n(i),s=t(16),a=t.n(s),o=(t(23),t(18)),r=t(6),d=(t(28),t(29),t(7)),l=t(2);var j=function(e){return Object(l.jsxs)("div",{className:"noise-event-container",style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginRight:"3rem",fontSize:"1.5rem"},children:[Object(l.jsx)(r.a,{icon:d.f,style:{marginRight:"1rem;"}}),Object(l.jsx)("span",{className:"noise-event-text",children:"Bark!"})]}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(l.jsx)("span",{children:"Range: "+(null===e||void 0===e?void 0:e.startTime)+" - "+e.endTime}),Object(l.jsx)("span",{children:"Duration: "+(null===e||void 0===e?void 0:e.duration)})]},e.key)]})},b=t(17);var m=function(e){var n,t=Object(b.a)(e.firebase.database().ref("/NoiseEvents")),i=Object(o.a)(t,3),c=i[0],s=i[1];return n=i[2]?Object(l.jsxs)("div",{className:"message-container",children:[Object(l.jsx)(r.a,{icon:d.a,className:"big-icon"}),Object(l.jsx)("h1",{children:"Something went wrong"})]}):s?Object(l.jsxs)("div",{className:"message-container",children:[Object(l.jsx)(r.a,{icon:d.b,className:"big-icon"}),Object(l.jsx)("h1",{children:"Loading"})]}):c&&c.length>0?null===c||void 0===c?void 0:c.map((function(e,n){return Object(l.jsx)(j,{startTime:e.StartTimestampMinute+":"+e.StartTimestampSecond,endTime:e.EndTimestampMinute+":"+e.EndTimestampSecond,duration:e.DurationMinutes+":"+e.DurationSeconds},n)})):0==c.length?Object(l.jsxs)("div",{className:"message-container",children:[Object(l.jsx)(r.a,{icon:d.d,className:"big-icon"}),Object(l.jsx)("h1",{children:"Hooray!!"}),Object(l.jsx)("span",{children:"No barks have happened yet"})]}):Object(l.jsxs)("div",{className:"message-container",children:[Object(l.jsx)(r.a,{icon:d.c,className:"big-icon"}),Object(l.jsx)("h1",{children:"Not Sure"}),Object(l.jsx)("span",{children:"This is embarassing... I don't know what to display"})]}),Object(l.jsx)("div",{class:"noise-event-list-container",children:n})},h=t(13);t(31),t(34),t(35);h.a.initializeApp({apiKey:"AIzaSyBLYuScmM2f7tn458Ue9TiWVS5FnuCExfQ",authDomain:"mo-watch.firebaseapp.com",databaseURL:"https://mo-watch-default-rtdb.firebaseio.com",projectId:"mo-watch",storageBucket:"mo-watch.appspot.com",messagingSenderId:"86065285680",appId:"1:86065285680:web:eb770abf0d22044715bbf5",measurementId:"G-TFCK2JPGGG"});var u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsx)("span",{style:{marginTop:"0.5rem"},children:"Mo Watch"})}),Object(l.jsx)("div",{className:"body",children:Object(l.jsx)(m,{firebase:h.a})}),Object(l.jsx)("footer",{children:Object(l.jsxs)("button",{onClick:function(){alert("clear coming soon")},className:"primary",children:[Object(l.jsx)(r.a,{icon:d.e,style:{paddingRight:"8px"}}),"Clear"]})})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,s=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),x()}},[[36,1,2]]]);
//# sourceMappingURL=main.0d0829d0.chunk.js.map