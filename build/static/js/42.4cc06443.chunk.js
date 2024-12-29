"use strict";(self.webpackChunkreact_tailwindcss_portfolio=self.webpackChunkreact_tailwindcss_portfolio||[]).push([[42],{448:(e,t,a)=>{a.d(t,{A:()=>x});var r=a(5043),s=a(8254),i=a(1605),l=a(5475),o=a(579);const c=e=>{let{title:t,category:a,image:r}=e;return(0,o.jsx)(i.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,o.jsx)(l.N_,{to:"/projects/single-project","aria-label":"Single Project",children:(0,o.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),(0,o.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,o.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,o.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})};var d=a(3175);const n=["Web Application","Mobile Application","UI/UX Design","Branding"],m=e=>{let{setSelectProject:t}=e;return(0,o.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[(0,o.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),n.map((e=>(0,o.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})},x=()=>{const{projects:e,searchProject:t,setSearchProject:a,searchProjectsByTitle:i,selectProject:l,setSelectProject:n,selectProjectsByCategory:x}=(0,r.useContext)(d.Y);return(0,o.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,o.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,o.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),(0,o.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[(0,o.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,o.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:(0,o.jsx)(s.CKj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,o.jsx)("input",{onChange:e=>{a(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),(0,o.jsx)(m,{setSelectProject:n})]})]}),(0,o.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:l?x.map((e=>(0,o.jsx)(c,{title:e.title,category:e.category,image:e.img},e.id))):t?i.map((e=>(0,o.jsx)(c,{title:e.title,category:e.category,image:e.img},e.id))):e.map((e=>(0,o.jsx)(c,{title:e.title,category:e.category,image:e.img},e.id)))})]})}},3175:(e,t,a)=>{a.d(t,{Y:()=>d,S:()=>n});var r=a(5043),s=a(8135),i=a(3912),l=a(8451);const o=[{id:1,title:"Google Health Platform",category:"Web Application",img:i,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Phoenix Digital Agency",category:"Mobile Application",img:a(2388)},{id:3,title:"Project Management UI",category:"UI/UX Design",img:a(2915)},{id:4,title:"Cloud Storage Platform",category:"UI/UX Design",img:a(8756)},{id:5,title:"React Social App",category:"Mobile Application",img:l},{id:6,title:"Apple Design System",category:"Web Application",img:s}];var c=a(579);const d=(0,r.createContext)(),n=e=>{const[t,a]=(0,r.useState)(o),[s,i]=(0,r.useState)(""),[l,n]=(0,r.useState)(""),m=t.filter((e=>e.title.toLowerCase().includes(s.toLowerCase())||""===s?e:"")),x=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(l)));return(0,c.jsx)(d.Provider,{value:{projects:t,setProjects:a,searchProject:s,setSearchProject:i,searchProjectsByTitle:m,selectProject:l,setSelectProject:n,selectProjectsByCategory:x},children:e.children})}},8042:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(5475),s=a(3364),i=a(8254);a(5043);const l=a.p+"static/media/developer.ef097afbc427c634086d2f1c2ad6032e.svg";const o=a.p+"static/media/developer-dark.3f07bd13e2bd324f87466260088da040.svg";var c=a(1605),d=a(579);const n=()=>{const[e]=(0,s.A)();return(0,d.jsxs)(c.P.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[(0,d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[(0,d.jsxs)(c.P.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light",children:["Hi, I am ",(0,d.jsx)("br",{}),"Soubhagya Akkena"]}),(0,d.jsx)(c.P.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Software Engineer"}),(0,d.jsx)(c.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:(0,d.jsxs)("a",{download:"SoubhagyaAkkenaResume.pdf",href:"/files/SoubhagyaAkkena_DCV_ML_LLM_2.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[(0,d.jsx)(i.Z25,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),(0,d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),(0,d.jsx)(c.P.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:(0,d.jsx)("img",{src:"dark"===e?l:o,alt:"Developer"})})]})};var m=a(448),x=a(3175),g=a(6089);const p=()=>(0,d.jsxs)("div",{className:"container mx-auto",children:[(0,d.jsx)(n,{}),(0,d.jsx)(x.S,{children:(0,d.jsx)(m.A,{})}),(0,d.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:(0,d.jsx)(r.N_,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:(0,d.jsx)(g.A,{title:"More Projects"})})})]})},8451:(e,t,a)=>{e.exports=a.p+"static/media/mobile-project-1.0aa0cb76fed1b95c21d8.jpg"},2388:(e,t,a)=>{e.exports=a.p+"static/media/mobile-project-2.a5aae7867760d0c29dd2.jpg"},2915:(e,t,a)=>{e.exports=a.p+"static/media/ui-project-1.41def4d8652deca915b2.jpg"},8756:(e,t,a)=>{e.exports=a.p+"static/media/ui-project-2.d289191456efd2d47465.jpg"},8135:(e,t,a)=>{e.exports=a.p+"static/media/web-project-1.dbc2198e771ad7e1d3ea.jpg"},3912:(e,t,a)=>{e.exports=a.p+"static/media/web-project-2.f01087020cc02a54e124.jpg"}}]);
//# sourceMappingURL=42.4cc06443.chunk.js.map