(this["webpackJsonpmo-watch"]=this["webpackJsonpmo-watch"]||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),c=n(17),s=n.n(c),o=(n(23),n(18)),r=n(8),d=(n(16),n(2));var l=n(9);var m=function(e){var t=i.a.useState([]),n=Object(o.a)(t,2),a=n[0],c=n[1],s=e.firebase.database().ref("/NoiseEvents");s.get().then((function(e){return c(Array.from(e.val()))}));var m=Array.isArray(a)?null===a||void 0===a?void 0:a.map((function(e){})):null;return console.log("noiseEvents1",a),Object(d.jsxs)("div",{class:"noise-event-list-container",children:[m&&m.length>0?m:Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:"5rem"},children:[Object(d.jsx)(r.a,{icon:l.a,style:{fontSize:"7rem"}}),Object(d.jsx)("h1",{children:"Hooray!!"}),Object(d.jsx)("span",{children:"No barks have happened yet"})]}),Object(d.jsx)("button",{onClick:void s.push({DurationMinutes:1,DurationSeconds:6,EndTimestampMinute:3,EndTimestampSecond:56,StartTimestampMinute:2,StartTimestampSecond:50}),children:"Add Test Data"})]})},u=n(13);n(29),n(32),n(33);u.a.initializeApp({apiKey:"AIzaSyBLYuScmM2f7tn458Ue9TiWVS5FnuCExfQ",authDomain:"mo-watch.firebaseapp.com",databaseURL:"https://mo-watch-default-rtdb.firebaseio.com",projectId:"mo-watch",storageBucket:"mo-watch.appspot.com",messagingSenderId:"86065285680",appId:"1:86065285680:web:eb770abf0d22044715bbf5",measurementId:"G-TFCK2JPGGG"});var b=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{children:Object(d.jsx)("span",{style:{marginTop:"0.5rem"},children:"Mo Watch"})}),Object(d.jsx)("div",{className:"body",children:Object(d.jsx)(m,{firebase:u.a})}),Object(d.jsx)("footer",{children:Object(d.jsxs)("button",{onClick:function(){alert("clear coming soon")},className:"primary",children:[Object(d.jsx)(r.a,{icon:l.b,style:{paddingRight:"8px"}}),"Clear"]})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),h()}},[[34,1,2]]]);
//# sourceMappingURL=main.525c0f2a.chunk.js.map