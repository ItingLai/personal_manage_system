import{d as I,r as o,o as N,E as c,a as k,c as D,e as b,b as l,g as d,u as v,h,y as W,l as Y,F as G,H as z,m as S,x as H,C as P,v as R,j as J,A as q}from"./index-2d2b0b3d.js";/* empty css                  *//* empty css                   */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 *//* empty css               */import{F as K,i as Q}from"./index-710185f6.js";import{i as X}from"./index-b4cf4bd5.js";import{o as T,c as M}from"./loading-bf393b7e.js";const Z={style:{display:"flex","align-items":"center"}},ee=b("label",null,"請選擇要調整的使用者:",-1),te={class:"dialog-footer"},me=I({__name:"manualAttend",setup(le){const i=o(null),p=o(!1),f=o(""),s=o(""),y=o(""),r=o(null),C=o(null),u=o(""),m=o(null),F=o(null),E=o("90%"),O=e=>{let t=e.event;s.value=t.startStr,t.endStr==""?y.value=t.startStr:y.value=t.endStr,m.value.map(a=>{a.start===e.event.startStr&&(r.value=a.type)}),C.value=e.event,p.value=!0},j=()=>{s.value="",y.value="",r.value=null,C.value=null},B=()=>{fetch("api/manualAttend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:u.value,attendType:r.value,start:s.value,end:y.value})}).then(e=>e.json()).then(e=>{e.code===200?(m.value=m.value.map(t=>(t.start===s.value&&(t.type=r.value),t)),C.value.remove(),A({start:s.value,end:y.value,type:r.value,title:""}),c.success("資料儲存成功"),p.value=!1):c.error("資料儲存失敗")}).catch(()=>{c.error("資料儲存失敗")})},g=()=>{_(),!(!f.value||!u.value)&&(T(),fetch(`api/getAttendData?userId=${u.value}&month=${f.value}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{e.code===200?(m.value=e.data,e.data.forEach(t=>{A(t)})):c.error("資料取得失敗")}).catch(()=>{c.error("資料取得失敗")}).finally(()=>{M()}))},A=e=>{e.title=e.type==="attend"?"出席":e.type==="official"?"公假":e.type==="personal"?"事假":e.type==="sick"?"病假":e.type==="dayOff"&&e.title===""?"休假":e.type==="dayOff"&&e.title!==""?e.title:e.type==="annual"?"特休":e.type==="absent"?"曠職":"尚未入職",i.value.getApi().addEvent({title:e.title,start:e.start,end:e.end,allDay:!0,color:e.type==="attend"?"#67C23A":e.type==="official"?"#E6A23C":e.type==="personal"?"#F56C6C":e.type==="sick"?"#C26EFF	":e.type==="dayOff"?"#FF4FFF":e.type==="annual"?"#990DFF":(e.type==="absent","#909399")})},_=()=>{let e=i.value.getApi().getEvents();e&&e.length>0&&e.map(t=>{i.value.getApi().getEventById(t.id).remove()})},L={plugins:[Q,X],selectable:!0,initialView:"dayGridMonth",eventClick:O,locale:"zh-tw",buttonText:{today:"當月"},customButtons:{prev:{text:"上個月",click:()=>{let e=i.value.getApi();e.prev();let t=new Date(e.view.currentStart);f.value=t.getFullYear()+"-"+(t.getMonth()+1),u.value?g():_()}},next:{text:"下個月",click:()=>{let e=i.value.getApi();e.next();let t=new Date(e.view.currentStart);f.value=t.getFullYear()+"-"+(t.getMonth()+1),u.value?g():_()}},today:{text:"當月",click:()=>{let e=i.value.getApi();e.today();let t=new Date(e.view.currentStart);f.value=t.getFullYear()+"-"+(t.getMonth()+1),u.value?g():_()}}},events:[]};return N(()=>{T();let e=new Date;e.setHours(0,0,0,0),f.value=`${e.getFullYear()}-${e.getMonth()+1}`,fetch("api/getAllUser",{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{t.code===200?F.value=t.data:c.error("資料取得失敗")}).catch(()=>{c.error("資料取得失敗")}).finally(()=>{M()}),E.value=window.innerWidth<768?"90%":"50%",window.addEventListener("resize",()=>{E.value=window.innerWidth<768?"90%":"50%"})}),(e,t)=>{const a=H,w=W,U=P,x=R,V=J,$=Y;return k(),D("div",null,[b("div",Z,[ee,l(w,{modelValue:v(u),"onUpdate:modelValue":t[0]||(t[0]=n=>h(u)?u.value=n:null),onChange:g},{default:d(()=>[(k(!0),D(G,null,z(v(F),n=>(k(),q(a,{key:n.id,label:n.name,value:n.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),l(v(K),{ref_key:"fullCalendar",ref:i,options:L},null,512),l($,{modelValue:v(p),"onUpdate:modelValue":t[4]||(t[4]=n=>h(p)?p.value=n:null),title:"出席調整",width:v(E)},{footer:d(()=>[b("span",te,[l(V,{onClick:t[3]||(t[3]=n=>(p.value=!1,j()))},{default:d(()=>[S("取消")]),_:1}),l(V,{type:"primary",onClick:B},{default:d(()=>[S(" 完成調整 ")]),_:1})])]),default:d(()=>[l(x,{label:"出席日期"},{default:d(()=>[l(U,{modelValue:v(s),"onUpdate:modelValue":t[1]||(t[1]=n=>h(s)?s.value=n:null),disabled:!0},null,8,["modelValue"])]),_:1}),l(x,{label:"出席狀況"},{default:d(()=>[l(w,{modelValue:v(r),"onUpdate:modelValue":t[2]||(t[2]=n=>h(r)?r.value=n:null)},{default:d(()=>[l(a,{label:"出席",value:"attend"}),l(a,{label:"公假",value:"official"}),l(a,{label:"事假",value:"personal"}),l(a,{label:"病假",value:"sick"}),l(a,{label:"曠職",value:"absent"}),l(a,{label:"休假",value:"dayOff"}),l(a,{label:"特休",value:"annual"}),l(a,{label:"尚未入職",value:"notEntry"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue","width"])])}}});export{me as default};
