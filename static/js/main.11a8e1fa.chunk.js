(this["webpackJsonpmo-watch"]=this["webpackJsonpmo-watch"]||[]).push([[0],{24:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},37:function(e,t,i){"use strict";i.r(t);var n=i(3),s=i.n(n),a=i(18),c=i.n(a),r=(i(24),i(12)),o=i(14),d=(i(25),i(28),i(29),i(10)),l=i(19),m=i.n(l),u=i(7),j=i(6),b=(i(34),i(35),i(2));var p=function(e){var t="loud"==e.volume,i="medium"==e.volume,n="quiet"==e.volume,s=t?"red":i?"yellow":n?"green":"",a=t?"BIG BARK!":i?"Bark":n?"baby bark":"",c=6e3*e.timestampMinutes+1e3*e.timestampSeconds,r=new Date(e.startTime.getTime()+c);return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"noise-event-container",style:{display:"flex",flexDirection:"row",marginRight:"2rem",marginLeft:"2rem",fontSize:"0.75rem",alignItems:"center"},children:[Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"33%"},children:[Object(b.jsx)(u.a,{icon:j.c,style:{marginRight:"1rem",color:s,fontSize:"1rem"},fixedWidth:!0}),Object(b.jsx)("span",{className:"noise-event-text",children:a})]}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"67%"},children:[Object(b.jsx)("div",{children:"Occurred at "+r.toLocaleTimeString("en-US")}),Object(b.jsx)("div",{children:"after "+((null===e||void 0===e?void 0:e.timestampMinutes)>1?(null===e||void 0===e?void 0:e.timestampMinutes)+(1==(null===e||void 0===e?void 0:e.timestampMinutes)?" minute":" minutes")+" and ":"")+(null===e||void 0===e?void 0:e.timestampSeconds)+" seconds"})]},e.key)]})})},h=i.p+"static/media/moBounce2.b228a1dc.gif";function x(e){var t=e.toString();return null!==t&&void 0!==t?t:null}function f(e){var t;if(e.error)t=Object(b.jsxs)("div",{className:"message-container",children:[Object(b.jsx)(u.a,{icon:j.d,className:"big-icon"}),Object(b.jsx)("h1",{children:"Something went wrong"})]});else if(e.loading)t=Object(b.jsxs)("div",{className:"message-container",children:[Object(b.jsx)("img",{src:h,style:{height:"70px",width:"70px"}}),Object(b.jsx)("h2",{style:{marginTop:"0"},children:"Loading..."})]});else if(e.values&&e.values.length>0){var i;t=null===(i=e.values)||void 0===i?void 0:i.map((function(t,i){var n=1==t.LoudNoiseHappened?"loud":1==t.MediumNoiseHappened?"medium":1==t.QuietNoiseHappened?"quiet":"";return Object(b.jsx)(p,{volume:n,timestampMinutes:x(t.NoiseTimestampMinute),timestampSeconds:x(t.NoiseTimestampSecond),startTime:e.startTime},i)}))}else t=0==e.values.length?Object(b.jsxs)("div",{className:"message-container",children:[Object(b.jsx)(u.a,{icon:j.f,className:"big-icon"}),Object(b.jsx)("h1",{children:"Hooray!!"}),Object(b.jsx)("span",{children:"No barks have happened yet"})]}):Object(b.jsxs)("div",{className:"message-container",children:[Object(b.jsx)(u.a,{icon:j.e,className:"big-icon"}),Object(b.jsx)("h1",{children:"Not Sure"}),Object(b.jsx)("span",{children:"This is embarassing... I don't know what to display"})]});return Object(b.jsx)("div",{children:t})}o.a.initializeApp({apiKey:"AIzaSyBLYuScmM2f7tn458Ue9TiWVS5FnuCExfQ",authDomain:"mo-watch.firebaseapp.com",databaseURL:"https://mo-watch-default-rtdb.firebaseio.com",projectId:"mo-watch",storageBucket:"mo-watch.appspot.com",messagingSenderId:"86065285680",appId:"1:86065285680:web:eb770abf0d22044715bbf5",measurementId:"G-TFCK2JPGGG"});var v={year:"numeric",month:"long",day:"numeric"};function g(e){return Object(b.jsxs)("span",{style:{paddingLeft:"1rem",alignItems:"center",height:"8vh",display:"flex",cursor:"pointer",justifyContent:"space-between",boxShadow:"0px 0px 6px 0 #000"},children:["Stats",Object(b.jsx)(u.a,{icon:e.dropdownOpen?j.b:j.a,style:{paddingRight:"1rem"}})]})}var O=function(){var e=Object(d.b)(o.a.database().ref("/StartTime"),{transform:function(e){return new Date(e)}}),t=Object(r.a)(e,1)[0],i=Object(d.a)(o.a.database().ref("/NoiseEvents")),n=Object(r.a)(i,3),a=n[0],c=n[1],l=n[2],u=s.a.useState(),j=Object(r.a)(u,2),p=j[0],h=j[1],O=s.a.useState(!1),y=Object(r.a)(O,2),S=y[0],w=y[1];return s.a.useEffect((function(){var e=0,t=0,i=0,n=null;(null===a||void 0===a?void 0:a.length)>0&&(null===a||void 0===a||a.map((function(s,a){1==s.LoudNoiseHappened?i++:1==s.MediumNoiseHappened?t++:1==s.QuietNoiseHappened&&e++,0==a&&(n=x(s.NoiseTimestampMinute)+":"+x(s.NoiseTimestampSecond))})),h({quietBarks:e,mediumBarks:t,loudBarks:i,firstBarkTime:n}))}),[a]),Object(b.jsxs)("body",{children:[Object(b.jsx)("header",{children:t&&Object(b.jsx)("span",{children:"Device last started on ".concat(t.toLocaleDateString("en-US",v)," at ").concat(t.toLocaleTimeString("en-US"))})}),p&&Object(b.jsxs)(m.a,{trigger:Object(b.jsx)(g,{dropdownOpen:S}),open:S,handleTriggerClick:function(){return w(!S)},children:[Object(b.jsxs)("p",{children:["Baby Barks: ",p.quietBarks]}),Object(b.jsxs)("p",{children:["Barks: ",p.mediumBarks]}),Object(b.jsxs)("p",{children:["Big Boy Barks: ",p.loudBarks]}),Object(b.jsxs)("p",{children:["First noise detected after ",p.firstBarkTime]})]}),Object(b.jsx)("div",{className:"body",children:Object(b.jsx)(f,{values:a,loading:c,error:l,startTime:t})})]})},y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,38)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),y()}},[[37,1,2]]]);
//# sourceMappingURL=main.11a8e1fa.chunk.js.map