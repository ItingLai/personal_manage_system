import{d as f,r as m,a as g,c as h,b as n,g as s,e as t,m as o,E as a,M as x,j as v}from"./index-2d2b0b3d.js";const b=t("h3",null,"上傳行事曆檔案",-1),y=t("p",null,[o(" 請前往"),t("a",{href:"https://data.gov.tw/dataset/14718",target:"_blank"},"公開資料網站"),o("下載隔年度檔案並上傳伺服器以獲取行事曆資料 ")],-1),C=t("p",{style:{color:"red"}},"*請下載非Google行事曆專用",-1),E=t("div",{class:"el-upload__tip"},[o("僅限上傳 "),t("strong",null,"csv"),o(" 檔案，請勿上傳其他檔案")],-1),U=f({__name:"uploadCalendar",setup(k){const l=m(),d=()=>{l.value.submit()},p=e=>{const c=e.type==="text/csv";return c||a.error("上傳檔案格式錯誤!"),c},u=()=>{a.warning("只能上傳一個檔案")},i=e=>{l.value.clearFiles(),e.code==200?a.success("匯入資料成功!"):e.code==500&&e.msg=="Date Data exist!"?a.error("資料已存在!"):a.error("上傳失敗!")};return(e,c)=>{const r=v,_=x;return g(),h("div",null,[b,y,C,n(_,{ref_key:"uploadRef",ref:l,class:"upload",accept:"text/csv",action:"/api/uploadCalendar","auto-upload":!1,"before-upload":p,limit:1,"on-exceed":u,"on-success":i},{trigger:s(()=>[n(r,{type:"primary"},{default:s(()=>[o("選擇檔案")]),_:1})]),tip:s(()=>[E]),default:s(()=>[n(r,{type:"success",style:{"margin-left":"10px"},onClick:d},{default:s(()=>[o(" 上傳檔案 ")]),_:1})]),_:1},512)])}}});export{U as default};
