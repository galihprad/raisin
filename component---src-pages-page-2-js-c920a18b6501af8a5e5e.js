(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151),l=a(188),o=a(180);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2 hohoho"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},151:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(163);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},163:function(e,t,a){var n;e.exports=(n=a(177))&&n.default||n},176:function(e){e.exports={data:{site:{siteMetadata:{title:"Raisin"}}}}},177:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(57),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},180:function(e,t,a){"use strict";var n=a(181),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(204),s=a.n(c),m=a(151);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(m.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},i.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}))},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var d="1025518380"},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Raisin",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},188:function(e,t,a){"use strict";var n=a(176),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(151),s=function(){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),i.a.createElement("label",{className:"menu-icon",htmlFor:"menu-btn"},i.a.createElement("span",{className:"navicon"})),i.a.createElement("ol",{className:"raisin-nav"},i.a.createElement("li",{style:{margin:"auto 12px"}},i.a.createElement(c.a,{to:"#"},"ABOUT US")),i.a.createElement("li",{style:{margin:"auto 12px"}},i.a.createElement(c.a,{to:"/"},"PORTOFOLIO")),i.a.createElement("li",{style:{margin:"auto 12px"}},i.a.createElement(c.a,{to:"/"},"CONTACT US"))))},m=function(e){e.siteTitle;return i.a.createElement("div",{style:{background:"#fff",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("span",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},i.a.createElement("img",{style:{width:"180px"},src:"./images/raisin_logo.png"}))),i.a.createElement(s,null)))};m.propTypes={siteTitle:o.a.string},m.defaultProps={siteTitle:""};var u=a(7),d=a.n(u),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navCollapsed:!0},t}return d()(t,e),t.prototype.render=function(){this.state.navCollapsed;return i.a.createElement("nav",{className:"md-container navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between",style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:10}},i.a.createElement("a",{className:"navbar-brand",href:"#"},"Raisin"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse d-md-flex justify-content-end",id:"navbarNavAltMarkup"},i.a.createElement("div",{className:"navbar-nav raisin-nav"},i.a.createElement("a",{className:"nav-item nav-link active raisin-active",href:"#"},"ABOUT US ",i.a.createElement("span",{className:"sr-only"},"(current)")),i.a.createElement("a",{className:"nav-item nav-link",href:"#"},"PORTOFOLIO"),i.a.createElement("a",{className:"nav-item nav-link",href:"#"},"CONTACT US"))))},t}(r.Component),g=(a(159),a(160),a(161)),y=a.n(g),f=a(232),h=(a(178),function(){return i.a.createElement("div",{style:{background:"linear-gradient(180deg, #D44575 0%, #E96479 48.85%)",marginTop:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",height:"auto"}},i.a.createElement("h1",{style:{margin:0,color:"white"}},i.a.createElement(y.a,{type:"flex",justify:"center"},i.a.createElement("h4",{style:{color:"white",marginTop:"40px",marginBottom:"10px",fontFamily:"Montserrat",fontWeight:"700"}},"Find Us On")),i.a.createElement(y.a,{type:"flex",justify:"center"},i.a.createElement("span",{style:{margin:"20px"}},i.a.createElement(f.c,null)),i.a.createElement("span",{style:{margin:"20px"}},i.a.createElement(f.a,null)),i.a.createElement("span",{style:{margin:"20px"}},i.a.createElement(f.b,null))),i.a.createElement("hr",{style:{backgroundImage:"linear-gradient(90deg, rgba(255, 255, 255, 0.24), #FFFFFF 100%)",marginTop:"0.5em",marginBottom:"0.5em",marginLeft:"auto",marginRight:"auto",height:"1px",border:0}}),i.a.createElement(y.a,{type:"flex",justify:"center"},i.a.createElement("h6",{style:{color:"white",marginTop:"20px",marginBottom:"0",fontFamily:"Quicksand"}},"2018. Made with love in Yogyakarta. @raisin")))))}),E=function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement(h,null))},data:n})};E.propTypes={children:o.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-page-2-js-c920a18b6501af8a5e5e.js.map