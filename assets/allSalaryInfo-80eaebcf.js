import{d as I,r as p,o as v,a as u,c as C,e,b as l,u as d,h as D,g as i,E as w,C as E,q as x,k as M,m as s,t as o,A as g,p as V}from"./index-2d2b0b3d.js";/* empty css                        *//* empty css               *//* empty css                       *//* empty css                 */import{o as $,c as B}from"./loading-bf393b7e.js";const T=e("h3",null,"所有人員薪資表",-1),A=e("p",{style:{display:"inline-block","margin-right":"5px"}},"選擇查看月份:",-1),N={style:{margin:"1rem 0 0 2rem"}},S={class:"userInfo"},F=e("span",{class:"title"},"出席天數: ",-1),L={class:"userInfo"},Y=e("span",{class:"title"},"事假天數: ",-1),j={class:"userInfo"},q=e("span",{class:"title"},"病假天數: ",-1),H={class:"userInfo"},P=e("span",{class:"title"},"公假天數: ",-1),R={class:"userInfo"},U=e("span",{class:"title"},"曠職天數: ",-1),z={class:"userInfo"},G=e("span",{class:"title"},"底薪: ",-1),J={class:"userInfo"},K=e("span",{class:"title"},"全勤獎金: ",-1),O={class:"userInfo"},Q=e("span",{class:"title"},"病事扣薪: ",-1),W={class:"userInfo"},X=e("span",{class:"title"},"缺席扣薪: ",-1),Z={class:"userInfo"},ee=e("span",{class:"title"},"勞健保: ",-1),te={class:"userInfo"},se=e("span",{class:"title"},"總薪資: ",-1),de=I({__name:"allSalaryInfo",setup(ae){const f=p([]),c=p(""),r=p(!1),m=()=>{$(),fetch(`api/getAllSalary?month=${c.value}`).then(a=>a.json()).then(a=>{a.code===200?(f.value=a.data,r.value=a.isCheck):w.error("資料取得失敗")}).catch(()=>{w.error("資料取得失敗")}).finally(()=>{B()})},k=()=>{let a=new Date(c.value);c.value=`${a.getFullYear()}-${a.getMonth()+1}`,m()};return v(()=>{let a=new Date,_=a.getMonth()==0?12:a.getMonth();c.value=`${a.getFullYear()}-${_}`,m()}),(a,_)=>{const b=E,h=x,n=V,y=M;return u(),C("div",null,[T,e("div",null,[A,l(b,{modelValue:d(c),"onUpdate:modelValue":_[0]||(_[0]=t=>D(c)?c.value=t:null),type:"month",placeholder:"選擇查看月份",onChange:k},null,8,["modelValue"])]),l(h,{type:d(r)?"success":"danger",effect:"dark"},{default:i(()=>[s(o(d(r)?"薪資上傳完成":"尚未上傳薪資"),1)]),_:1},8,["type"]),l(y,{data:d(f),border:!0,style:{width:"100%"}},{default:i(()=>[l(n,{type:"expand"},{default:i(t=>[e("div",N,[e("p",S,[F,s(" "+o(t.row.attend),1)]),e("p",L,[Y,s(" "+o(t.row.personal),1)]),e("p",j,[q,s(" "+o(t.row.sick),1)]),e("p",H,[P,s(" "+o(t.row.official),1)]),e("p",R,[U,s(" "+o(t.row.absent),1)]),e("p",z,[G,s(" "+o(t.row.basic),1)]),e("p",J,[K,s(" "+o(t.row.perfectAttend),1)]),e("p",O,[Q,s(" "+o(t.row.sick_personal_deduction),1)]),e("p",W,[X,s(" "+o(t.row.dock),1)]),e("p",Z,[ee,s(" "+o(t.row.laborHealthInsurance),1)]),e("p",te,[se,s(" "+o(t.row.total),1)])])]),_:1}),l(n,{label:"姓名",prop:"name"}),l(n,{label:"出席天數",prop:"attend",width:"100"}),l(n,{label:"事假天數",prop:"personal",width:"100"}),l(n,{label:"病假天數",prop:"sick",width:"100"}),l(n,{label:"公假天數",prop:"official",width:"100"}),l(n,{label:"曠職天數",prop:"absent",width:"100"}),l(n,{label:"是否上傳",prop:"isCheck",width:"100"},{default:i(t=>[t.row.isCheck?(u(),g(h,{key:0,type:"success",effect:"dark"},{default:i(()=>[s("是")]),_:1})):(u(),g(h,{key:1,type:"danger",effect:"dark"},{default:i(()=>[s("否")]),_:1}))]),_:1})]),_:1},8,["data"])])}}});export{de as default};
