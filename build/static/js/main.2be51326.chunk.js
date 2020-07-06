(this["webpackJsonpreact-portofolio"]=this["webpackJsonpreact-portofolio"]||[]).push([[0],[,,,function(e,a,t){},,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),o=(t(10),t(1));var s=({label:e,symbol:a})=>l.a.createElement("span",{className:"emoji",role:"img","aria-label":e||"","aria-hidden":e?"false":"true"},a);t(11);function c(){const e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],r=l.a.useRef(null);return l.a.useEffect(()=>{const e=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(n(!0),null!==r.current&&e.unobserve(r.current))})});null!==r.current&&e.observe(r.current)},[]),l.a.createElement("header",{id:"header"},l.a.createElement("nav",null,l.a.createElement("a",{href:"#header",className:"navlink"},l.a.createElement(s,{symbol:"\ud83c\udfe0",label:"#title"}),l.a.createElement("span",{className:"navText"},"Home")),l.a.createElement("a",{href:"#about",className:"navlink"},l.a.createElement(s,{symbol:"\ud83d\udcdd",label:"About me"}),l.a.createElement("span",{className:"navText"},"About")),l.a.createElement("a",{href:"#projects",className:"navlink"},l.a.createElement(s,{symbol:"\ud83d\udee0\ufe0f",label:"Projects"}),l.a.createElement("span",{className:"navText"},"Projects")),l.a.createElement("a",{href:"#work",className:"navlink"},l.a.createElement(s,{symbol:"\ud83d\udcbc",label:"History"}),l.a.createElement("span",{className:"navText"},"History")),l.a.createElement("a",{href:"#footer",className:"navlink"},l.a.createElement(s,{symbol:"\ud83d\udce7",label:"Contact"}),l.a.createElement("span",{className:"navText"},"Contact"))),l.a.createElement("div",{className:"fade-in-hero ".concat(t?"is-visible":""),style:{height:"100%",display:"flex",flexDirection:"column"}},l.a.createElement("h4",{className:"signature"},"A personal website and portofolio ",l.a.createElement("br",null),"by Lassi K\xf6ykk\xe4"),l.a.createElement("div",{className:"titleAndSubtitle",ref:r},l.a.createElement("h1",{className:"title"},"Lassi K\xf6ykk\xe4"),l.a.createElement("h2",{className:"subtitle"},"Have fun and build things ",l.a.createElement(s,{symbol:"\ud83d\udd27",label:"wrench"})),l.a.createElement("a",{title:"GitHub",href:"https://www.github.com/lassi-koykka",className:"heroLink"},l.a.createElement("img",{src:"/img/GitHub-Mark-Light-64px.png",alt:"github",className:"heroLinkPic"})),l.a.createElement("a",{title:"Linked-in",href:"https://www.linkedin.com/in/lassi-koykka/",className:"heroLink"},l.a.createElement("img",{src:"/img/linkedin.png",alt:"LinkedIn",className:"heroLinkPic"})))))}t(12);function i(){const e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],r=l.a.useRef(null);return l.a.useEffect(()=>{const e=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(n(!0),null!==r.current&&e.unobserve(r.current))})});null!==r.current&&e.observe(r.current)},[]),l.a.createElement("div",{id:"about",className:"aboutContainer fade-in-about ".concat(t?"is-visible":"")},l.a.createElement("div",{ref:r},l.a.createElement("img",{src:"/img/lassi_koykka-min.jpg",alt:"Me",className:"picOfMe"}),l.a.createElement("h2",{className:"aboutHeader"},l.a.createElement(s,{symbol:"\ud83d\udcdd",label:"pen and paper"})," About me"),l.a.createElement("a",{href:"/documents/lassi-koykka-CV.pdf",download:!0},l.a.createElement("button",{className:"downloadButton"}," ",l.a.createElement(s,{symbol:"\ud83d\udcc4",label:"document"})," ",l.a.createElement("span",{style:{textDecoration:"underline"}},"Download CV"))),l.a.createElement("div",{className:"aboutText"},l.a.createElement("p",null,"I'm a dedicated and self-motivated developer hobbyist and ICT-student originally from Tampere Finland."),l.a.createElement("p",null,"My strengths lie in front-end web development (Vanilla JavaScript, React) and I'm currently taking courses and self studying back-end technologies such as Node.js and flask. I also have experience using MySql and SQLite databases."),l.a.createElement("p",null," ","I'm a quick learner and I wish to understand how things actually operate under the hood. I thoroughly enjoy the process of creative problem-solving and challenging myself by setting goals and restrictions. On my spare time, I often like to work on all kinds of personal projects, from websites to games and desktop applications. One of my favourite pastimes is trying out new technologies and seeing what I can come up with. All of these projects (including this website) can be found on my Github."),l.a.createElement("p",null,"I currently reside in Kuopio and study information technology at Savonia University of Applied Sciences."))))}t(13);function m({img:e,link:a,name:t,description:n,open:r}){const s=l.a.useState(r),c=Object(o.a)(s,2),i=c[0],m=c[1];function u(e){m(!i)}const p=l.a.useState(!1),d=Object(o.a)(p,2),b=d[0],E=d[1],g=l.a.useRef(null);return l.a.useEffect(()=>{const e=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(E(!0),null!==g.current&&e.unobserve(g.current))})});null!==g.current&&e.observe(g.current)},[]),l.a.createElement("div",{className:"outerProject ".concat(i?"open":""," fade-in-project ").concat(b?"is-visible":""," "),ref:g},l.a.createElement("div",{className:"innerProject"},l.a.createElement("div",{className:"projectFront",onClick:e=>e.preventDefault},l.a.createElement("img",{src:e,alt:"project thumbnail",className:"projectThumbnail"}),l.a.createElement("a",{className:"projectname",href:a,onClick:e=>e.preventDefault},t)),l.a.createElement("img",{className:"expandArrow {}",src:"/img/around-arrow.png",alt:"expand",onClick:e=>u()}),l.a.createElement("div",{className:"projectBack",onClick:e=>u()},l.a.createElement("p",{className:"description"},n))))}t(3);function u(){const e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],r=l.a.useRef(null);return l.a.useEffect(()=>{const e=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(n(!0),null!==r.current&&e.unobserve(r.current))})});null!==r.current&&e.observe(r.current)},[]),l.a.createElement("div",{className:"projects",id:"projects"},l.a.createElement("h3",{className:"projectsHeader fade-in-projects ".concat(t?"is-visible":""),ref:r},l.a.createElement(s,{symbol:"\ud83d\udee0\ufe0f",label:"hammer and wrench"})," Some of my favourite projects"),l.a.createElement("div",{className:"projectsGrid"},l.a.createElement(m,{name:"React portofolio",description:"This portofolio / personal website was created using React with hooks.",img:"/img/react.png",link:"https://github.com/Lassi-Koykka/react-portofolio",open:!1}),l.a.createElement(m,{name:"Cabin reservation",description:"A cabin reservation management system. \n          ".concat(" ","Made with C# and WinForms (SQLite database). Final group project for a software engineering course."),img:"/img/CSharp.png",link:"https://github.com/Lassi-Koykka/Mokkivaraus",open:!1}),l.a.createElement(m,{name:"R6 randomizer",description:"A Python script that web scrapes data about the game and randomizes loadouts for the player",img:"/img/python.png",link:"https://github.com/Lassi-Koykka/R6-Loadout-Randomizer",open:!1}),l.a.createElement(m,{name:"Dating app sim",description:"A simple parody game based on dating apps such as Tinder. Created with winforms and C#",img:"/img/CSharp.png",link:"https://github.com/Lassi-Koykka/Dating-App-Sim",open:!1}),l.a.createElement(m,{name:"R6 REST API",description:"A restful API that returns data about operators and their equipment. Made with Python and Flask",img:"/img/python.png",link:"https://github.com/Lassi-Koykka/R6-Loadout-API",open:!1}),l.a.createElement(m,{name:"HTML5 Snake",description:"Classic snake game made with HTML canvas and vanilla JavaScript.",img:"/img/html5.png",link:"https://github.com/Lassi-Koykka/HTML5-Snake",open:!1})))}t(14);function p(e){const a=l.a.useState(!1),t=Object(o.a)(a,2),n=t[0],r=t[1],s=l.a.useRef(null);return l.a.useEffect(()=>{const e=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(r(!0),null!==s.current&&e.unobserve(s.current))})});null!==s.current&&e.observe(s.current)},[]),l.a.createElement("div",{className:"job ".concat(e.education?"edu":""," fade-in-job ").concat(n?"is-visible":""),ref:s},l.a.createElement("h3",{className:"jobTitle"},e.jobTitle),l.a.createElement("h3",{className:"jobCompany"},e.jobCompany),l.a.createElement("h3",{className:"jobStartAndEnd"},l.a.createElement("span",null,e.jobStart)," ",l.a.createElement("span",null,"-")," ",l.a.createElement("span",null,e.jobEnd)),l.a.createElement("p",null,e.jobDescription))}t(15);function d(){const e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],r=l.a.useRef(null);return l.a.useEffect(()=>{const e=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(n(!0),null!==r.current&&e.unobserve(r.current))})});null!==r.current&&e.observe(r.current)},[]),l.a.createElement("div",{className:"workContainer",id:"work"},l.a.createElement("h2",{className:"workHeader fade-in-work ".concat(t?"is-visible":""),ref:r},l.a.createElement(s,{symbol:"\ud83d\udcbc",label:"Briefcase"})," Work experience"),l.a.createElement(p,{jobTitle:"Summer trainee in Communications Technology",jobCompany:"Istekki Oy",jobStart:"May 2020",jobEnd:"Present"}),l.a.createElement(p,{jobTitle:"Summer trainee in Communications Technology",jobCompany:"Istekki Oy",jobStart:"June 2019",jobEnd:"Sept. 2019"}),l.a.createElement(p,{jobTitle:"Machine operator",jobCompany:"Honpumet Oy",jobStart:"May 2018",jobEnd:"Dec. 2018"}))}t(16);function b(){const e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],r=l.a.useRef(null);return l.a.useEffect(()=>{const e=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(n(!0),null!==r.current&&e.unobserve(r.current))})});null!==r.current&&e.observe(r.current)},[]),l.a.createElement("div",{className:"eduContainer"},l.a.createElement("h2",{className:"workHeader fade-in-edu ".concat(t?"is-visible":""),ref:r},l.a.createElement(s,{symbol:"\ud83c\udf93",label:"Graduation cap"})," Education"),l.a.createElement(p,{education:!0,jobTitle:"Bachelor of Technology - Information Technology",jobCompany:"Savonia University of applied sciences",jobStart:"Jan 2019",jobEnd:"Spring 2022"}),l.a.createElement(p,{education:!0,jobTitle:"Finnish matriculation examination",jobCompany:"Tampereen klassillinen lukio",jobStart:"Aug 2015",jobEnd:"May 2018"}))}function E({img:e,alt:a,name:t}){return l.a.createElement("li",{className:"tech"},l.a.createElement("img",{className:"techLogo",src:e,alt:a}),l.a.createElement("span",{className:"techName"},t))}t(17);var g=function(){const e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],r=l.a.useRef(null);return l.a.useEffect(()=>{const e=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(n(!0),null!==r.current&&e.unobserve(r.current))})});null!==r.current&&e.observe(r.current)},[]),l.a.createElement("div",{className:"toolsContainer fade-in-projects ".concat(t?"is-visible":""),ref:r},l.a.createElement("h3",{className:"toolsHeader"},l.a.createElement(s,{symbol:"\ud83e\uddf0",label:"Toolbox"})," My toolbox"),l.a.createElement("div",{className:"toolLists"},l.a.createElement("div",{className:"toolSection"},l.a.createElement("h2",{className:"toolListHeader"},"Front-end"),l.a.createElement("ul",{className:"toolList"},l.a.createElement(E,{name:"HTML5",img:"/img/html5.png",alt:"HTML5"}),l.a.createElement(E,{name:"CSS3",img:"/img/css.png",alt:"CSS3"}),l.a.createElement(E,{name:"JavaScript",img:"/img/js-logo2.png",alt:"JS"}),l.a.createElement(E,{name:"React.js",img:"/img/react.png",alt:"React.js"}))),l.a.createElement("div",{className:"toolSection"},l.a.createElement("h2",{className:"toolListHeader"},"Back-end"),l.a.createElement("ul",{className:"toolList"},l.a.createElement(E,{name:"Flask",img:"/img/flask.png",alt:"Flask"}),l.a.createElement(E,{name:"MySQL",img:"/img/mysql-logo.png",alt:"MySql"}),l.a.createElement(E,{name:"SQLite",img:"/img/sqlite.png",alt:"SQLite"}),l.a.createElement(E,{name:"Node.js",img:"/img/node.png",alt:"Node.js"}))),l.a.createElement("div",{className:"toolSection"},l.a.createElement("h2",{className:"toolListHeader"},"Other"),l.a.createElement("ul",{className:"toolList"},l.a.createElement(E,{name:"C#",img:"/img/CSharp.png",alt:"C#"}),l.a.createElement(E,{name:"C",img:"/img/clang.png",alt:"C"}),l.a.createElement(E,{name:"Java",img:"/img/java.png",alt:"Java"}),l.a.createElement(E,{name:"Python",img:"/img/python.png",alt:"python"}),l.a.createElement(E,{name:"Linux",img:"/img/tux.png",alt:"Linux"})))))};t(18);function h(){return l.a.createElement("footer",{className:"footer",id:"footer"},l.a.createElement("div",{className:"footerUpper"},l.a.createElement("div",{className:"hiring"},l.a.createElement("h2",{className:"hiringHeader"},"Hiring?"),l.a.createElement("p",{className:"hiringText"},"Currently my full-time studies are taking up most of my time (except during summers), but I am open to remote or part-time job opportunities that would allow me to work on the side of school.")),l.a.createElement("p",{className:"emailText"},"If you would like to be in touch, you can"," ",l.a.createElement("a",{className:"email",href:"mailto:lassi_koykka@hotmail.com?subject=Hey!"},"email me")," "," or send a connection request on ",l.a.createElement("a",{className:"email",href:"https://www.linkedin.com/in/lassi-koykka"},"LinkedIn")," "," and I'll get back to you as soon as I can."," ")),l.a.createElement("small",{className:"copyright"},"\xa9 Lassi K\xf6ykk\xe4 2020"))}function f(){return n.createElement(n.Fragment,null,n.createElement(c,null),n.createElement("div",{className:"container"},n.createElement(i,null),n.createElement(g,null),n.createElement(u,null),n.createElement(d,null),n.createElement(b,null),n.createElement(h,null)))}const k=document.getElementById("root");Object(r.render)(n.createElement(f,null),k)}],[[5,1,2]]]);
//# sourceMappingURL=main.2be51326.chunk.js.map