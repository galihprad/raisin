(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),o=a(187),c=a(179);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2 hohoho"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(32),l=a.n(c);a.d(t,"a",function(){return l.a});a(161);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,a){var n;e.exports=(n=a(176))&&n.default||n},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Raisin"}}}}},176:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(56),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},179:function(e,t,a){"use strict";var n=a(180),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(202),s=a.n(l),m=a(154);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(m.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var d="1025518380"},180:function(e){e.exports={data:{site:{siteMetadata:{title:"Raisin",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},187:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(154),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"grey",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("span",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement(l.a,{to:"/page-2/"},"Go to page 2")))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var m=s,u=(a(158),a(162),a(159)),d=a.n(u),p=a(227),g=(a(177),function(){return i.a.createElement("div",{style:{background:"linear-gradient(180deg, #D44575 0%, #E96479 48.85%)",marginTop:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",height:"300px"}},i.a.createElement("h1",{style:{margin:0,color:"white"}},i.a.createElement(d.a,{type:"flex",justify:"center"},i.a.createElement("h4",{style:{color:"white",marginTop:"40px",marginBottom:"10px",fontFamily:"Montserrat",fontWeight:"700"}},"Find Us On")),i.a.createElement(d.a,{type:"flex",justify:"center"},i.a.createElement("span",{style:{margin:"20px"}},i.a.createElement(p.c,null)),i.a.createElement("span",{style:{margin:"20px"}},i.a.createElement(p.a,null)),i.a.createElement("span",{style:{margin:"20px"}},i.a.createElement(p.b,null))),i.a.createElement("hr",{style:{backgroundImage:"linear-gradient(90deg, rgba(255, 255, 255, 0.24), #FFFFFF 100%)",marginTop:"0.5em",marginBottom:"0.5em",marginLeft:"auto",marginRight:"auto",height:"1px",border:0}}),i.a.createElement(d.a,{type:"flex",justify:"center"},i.a.createElement("h5",{style:{color:"white",marginTop:"20px",marginBottom:"30px",fontFamily:"Quicksand"}},"2018. Made with love in Yogyakarta. @raisin")))))}),y=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:"raisin"}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement(g,null))},data:n})};y.propTypes={children:c.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-pages-page-2-js-08d422a530d744bd9e33.js.map