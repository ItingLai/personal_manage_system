import{d as k,r as b,o as w,E as i,a as d,c as v,b as a,g as o,u as C,e as f,k as x,m as l,t as B,A as _,B as u,n as T,p as E,q as j,j as L}from"./index-2d2b0b3d.js";/* empty css                        *//* empty css               */import{o as N,c as V}from"./loading-bf393b7e.js";/* empty css                       *//* empty css                 *//* empty css                   */const M=f("h1",null,"請假審核",-1),S={style:{margin:"1rem 0 0 2rem"}},A={class:"userInfo"},D=f("span",{class:"title"},"請假原因: ",-1),F=k({__name:"managerLeave",setup(O){const p=b([]),y=(n,c,e,r="")=>{fetch("api/managerLeave",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({leave_id:c,user_id:e,type:n,reason:r})}).then(s=>s.json()).then(s=>{s.code===200?(i.success("操作成功"),p.value=p.value.filter(m=>m.leave_id!==c)):i.error("操作失敗")}).catch(()=>{i.error("操作失敗")})},h=(n,c,e)=>{T.prompt("請輸入拒絕原因","輸入視窗",{confirmButtonText:"送出",cancelButtonText:"取消"}).then(({value:r})=>{y(n,c,e,r)}).catch(()=>{})};return w(()=>{N(),fetch("api/getAllLeave",{headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(n=>{n.code===200?p.value=n.data:i.error("取得資料失敗")}).catch(()=>{i.error("取得資料失敗")}).finally(()=>{V()})}),(n,c)=>{const e=E,r=j,s=L,m=x;return d(),v("div",null,[M,a(m,{data:C(p),stripe:"",style:{width:"100%"},border:!0},{default:o(()=>[a(e,{type:"expand"},{default:o(t=>[f("div",S,[f("p",A,[D,l(" "+B(t.row.reason),1)])])]),_:1}),a(e,{prop:"date",label:"申請日期"}),a(e,{prop:"name",label:"姓名"}),a(e,{prop:"type",label:"假別"},{default:o(t=>[t.row.type==="sick"?(d(),_(r,{key:0,class:"ml-2",effect:"dark"},{default:o(()=>[l("病假")]),_:1})):u("",!0),t.row.type==="personal"?(d(),_(r,{key:1,class:"ml-2",type:"warning",effect:"dark"},{default:o(()=>[l("事假")]),_:1})):u("",!0),t.row.type==="official"?(d(),_(r,{key:2,class:"ml-2",type:"info",effect:"dark"},{default:o(()=>[l("公假")]),_:1})):u("",!0),t.row.type==="annual"?(d(),_(r,{key:3,class:"ml-2",type:"success",effect:"dark"},{default:o(()=>[l("特休")]),_:1})):u("",!0)]),_:1}),a(e,{prop:"start",label:"起始日期"}),a(e,{prop:"end",label:"結束日期"}),a(e,{label:"操作",width:"200",fixed:"right"},{default:o(t=>[a(s,{type:"primary",onClick:g=>y("agree",t.row.leave_id,t.row.user_id)},{default:o(()=>[l("准許")]),_:2},1032,["onClick"]),a(s,{type:"danger",onClick:g=>h("disagree",t.row.leave_id,t.row.user_id)},{default:o(()=>[l("拒絕")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}}});export{F as default};
