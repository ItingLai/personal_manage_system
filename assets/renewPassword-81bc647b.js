import{d as b,N as v,O as V,r as p,f as x,a as y,c as E,b as s,g as l,u as t,e as h,z as B,m as f,n as T,E as u,P as C,s as F,v as N,j as k}from"./index-2d2b0b3d.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                       *//* empty css                   */const S=h("h3",null,"更改密碼",-1),M=b({__name:"renewPassword",setup(U){const g=v(),{isLogin:w}=V(g),m=p(null),r=p({originalPw:"",password:"",confirmPw:""}),c=n=>{n&&n.validate(e=>{if(e)T.confirm("是否確定更改密碼?","提示",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then(()=>{fetch("api/renewPassword",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({originalPw:r.value.originalPw,password:r.value.password,confirmPw:r.value.confirmPw})}).then(o=>o.json()).then(o=>{o.code===200?(u.success("密碼更改成功!請重新登入"),w.value=!1,C.push("/login")):u.error("密碼更改失敗")}).catch(()=>{u.error("密碼更改失敗")})}).catch(()=>{});else return u.error("表單資料不完整!"),!1})},_=x({originalPw:[{required:!0,message:"請輸入原始密碼",trigger:"blur"},{min:6,max:20,message:"長度在 6 到 20 個字元",trigger:"blur"}],password:[{required:!0,message:"請輸入密碼",trigger:"blur"},{min:6,max:20,message:"長度在 6 到 20 個字元",trigger:"blur"},{pattern:/^(?=.*\d)(?=.*[a-z]).{6,20}$/,message:"帳號須包含大小寫英文字母及數字，長度6-20字元",trigger:"blur"}],confirmPw:[{required:!0,message:"請再次輸入密碼",trigger:"blur"},{min:6,max:20,message:"長度在 6 到 20 個字元",trigger:"blur"},{pattern:/^(?=.*\d)(?=.*[a-z]).{6,20}$/,message:"帳號須包含大小寫英文字母及數字，長度6-20字元",trigger:"blur"},{validator:(n,e,o)=>{e!==r.value.password?o(new Error("兩次輸入密碼不一致!")):o()},trigger:"blur"}]});return(n,e)=>{const o=F,i=N,d=k,P=B;return y(),E("div",null,[S,s(P,{ref_key:"formRef",ref:m,model:t(r),"status-icon":"",rules:t(_),"label-width":"120px",class:"demo-ruleForm"},{default:l(()=>[s(i,{label:"原始密碼",prop:"originalPw"},{default:l(()=>[s(o,{modelValue:t(r).originalPw,"onUpdate:modelValue":e[0]||(e[0]=a=>t(r).originalPw=a),type:"password",autocomplete:"off","show-password":""},null,8,["modelValue"])]),_:1}),s(i,{label:"新密碼",prop:"password"},{default:l(()=>[s(o,{modelValue:t(r).password,"onUpdate:modelValue":e[1]||(e[1]=a=>t(r).password=a),type:"password",autocomplete:"off","show-password":""},null,8,["modelValue"])]),_:1}),s(i,{label:"確認新密碼",prop:"confirmPw"},{default:l(()=>[s(o,{modelValue:t(r).confirmPw,"onUpdate:modelValue":e[2]||(e[2]=a=>t(r).confirmPw=a),type:"password",autocomplete:"off","show-password":""},null,8,["modelValue"])]),_:1}),s(i,null,{default:l(()=>[s(d,{type:"primary",onClick:e[3]||(e[3]=a=>c(t(m)))},{default:l(()=>[f("更改")]),_:1}),s(d,{type:"warning",onClick:e[4]||(e[4]=a=>t(m).resetFields())},{default:l(()=>[f("重置表單")]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}});export{M as default};
