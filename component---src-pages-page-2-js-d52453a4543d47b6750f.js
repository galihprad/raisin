(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150),l=a(187),o=a(179);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2 hohoho"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(32),s=a.n(o);a.d(t,"a",function(){return s.a});a(161);var c=r.a.createContext({}),m=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},161:function(e,t,a){var n;e.exports=(n=a(176))&&n.default||n},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Raisin"}}}}},176:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(56),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},179:function(e,t,a){"use strict";var n=a(180),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(203),c=a.n(s),m=a(150);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(m.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},i.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}))},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var d="1025518380"},180:function(e){e.exports={data:{site:{siteMetadata:{title:"Raisin",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},187:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(150),c=function(){return i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("ol",{className:"raisin-nav",style:{listStyle:"none",display:"flex"}},i.a.createElement("li",{style:{margin:"auto 12px"}},i.a.createElement(s.a,{to:"#"},"ABOUT US")),i.a.createElement("li",{style:{margin:"auto 12px"}},i.a.createElement(s.a,{to:"/"},"PORTOFOLIO")),i.a.createElement("li",{style:{margin:"auto 12px"}},i.a.createElement(s.a,{to:"/"},"CONTACT US"))))},m=function(e){e.siteTitle;return i.a.createElement("div",{style:{background:"#fff",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("span",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},i.a.createElement("img",{style:{width:"180px"},src:"./images/raisin_logo.png"}))),i.a.createElement(c,null)))};m.propTypes={siteTitle:o.a.string},m.defaultProps={siteTitle:""};var u=m,d=(a(158),a(162),a(159)),p=a.n(d),g=a(228),y=(a(177),function(){return i.a.createElement("div",{style:{background:"linear-gradient(180deg, #D44575 0%, #E96479 48.85%)",marginTop:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",height:"300px"}},i.a.createElement("h1",{style:{margin:0,color:"white"}},i.a.createElement(p.a,{type:"flex",justify:"center"},i.a.createElement("h4",{style:{color:"white",marginTop:"40px",marginBottom:"10px",fontFamily:"Montserrat",fontWeight:"700"}},"Find Us On")),i.a.createElement(p.a,{type:"flex",justify:"center"},i.a.createElement("span",{style:{margin:"20px"}},i.a.createElement(g.c,null)),i.a.createElement("span",{style:{margin:"20px"}},i.a.createElement(g.a,null)),i.a.createElement("span",{style:{margin:"20px"}},i.a.createElement(g.b,null))),i.a.createElement("hr",{style:{backgroundImage:"linear-gradient(90deg, rgba(255, 255, 255, 0.24), #FFFFFF 100%)",marginTop:"0.5em",marginBottom:"0.5em",marginLeft:"auto",marginRight:"auto",height:"1px",border:0}}),i.a.createElement(p.a,{type:"flex",justify:"center"},i.a.createElement("h5",{style:{color:"white",marginTop:"20px",marginBottom:"30px",fontFamily:"Quicksand"}},"2018. Made with love in Yogyakarta. @raisin")))))}),f=function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:"raisin"}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement(y,null))},data:n})};f.propTypes={children:o.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-page-2-js-d52453a4543d47b6750f.js.map