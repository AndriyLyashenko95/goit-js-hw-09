import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},r=document.querySelector("form.feedback-form"),a=document.querySelector("input"),l=document.querySelector("textarea"),s=localStorage.getItem("feedback-form-state");if(s){const{email:t,message:o}=JSON.parse(s);e.email=t,e.message=o,a.value=t,l.value=o}const m=t=>{e.email=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))},n=t=>{e.message=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))},i=t=>{t.preventDefault(),e.email!==""&&e.message!==""?(console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.value="",l.value=""):alert("Fill please all fields")};a.addEventListener("input",m);l.addEventListener("input",n);r.addEventListener("submit",i);
//# sourceMappingURL=2-form.js.map