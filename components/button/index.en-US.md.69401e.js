(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{3049:function(t,e){t.exports={content:["section",["p","To trigger an operation."],["h2","When To Use"],["p","A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic."],["p","In Ant Design we provide 4 types of button."],["ul",["li",["p","Primary button: indicate the main action, one primary button at most in one section."]],["li",["p","Default button: indicate a series of actions without priority."]],["li",["p","Dashed button: used for adding action commonly."]],["li",["p","Link button: used for external links."]]],["p","And 4 other properties additionally."],["ul",["li",["p",["code","danger"],": used for actions of risk, like deletion or authorization."]],["li",["p",["code","ghost"],": used in situations with complex background, home pages usually."]],["li",["p",["code","disabled"],": when actions is not available."]],["li",["p",["code","loading"],": add loading spinner in button, avoiding multiple submits too."]]]],meta:{category:"Components",type:"General",title:"Button",filename:"components/button/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["p","To get a customized button, just set ",["code","type"],"/",["code","shape"],"/",["code","size"],"/",["code","loading"],"/",["code","disabled"],"."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","disabled"],["td","disabled state of button"],["td","boolean"],["td",["code","false"]],["td"]],["tr",["td","ghost"],["td","make background transparent and invert text and border colors"],["td","boolean"],["td",["code","false"]],["td"]],["tr",["td","href"],["td","redirect url of link button"],["td","string"],["td","-"],["td"]],["tr",["td","htmlType"],["td","set the original html ",["code","type"]," of ",["code","button"],", see: ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type"},"MDN"]],["td","string"],["td",["code","button"]],["td"]],["tr",["td","icon"],["td","set the icon component of button"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","loading"],["td","set the loading status of button"],["td","boolean ","|"," { delay: number }"],["td",["code","false"]],["td"]],["tr",["td","shape"],["td","can be set to ",["code","circle"],", ",["code","round"]," or omitted"],["td","string"],["td","-"],["td"]],["tr",["td","size"],["td","set the size of button"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td"],["td"]],["tr",["td","target"],["td","same as target attribute of a, works when href is specified"],["td","string"],["td","-"],["td"]],["tr",["td","type"],["td","can be set to ",["code","primary"]," ",["code","ghost"]," ",["code","dashed"]," ",["code","link"]," or omitted (meaning ",["code","default"],")"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","onClick"],["td","set the handler to handle ",["code","click"]," event"],["td","(event) => void"],["td","-"],["td"]],["tr",["td","block"],["td","option to fit button width to its parent width"],["td","boolean"],["td",["code","false"]],["td"]],["tr",["td","danger"],["td","set the danger status of button"],["td","boolean"],["td",["code","false"]],["td"]]]],["p","It accepts all props which native buttons support."],["h2","FAQ"],["h3","How to remove space between 2 chinese characters"],["p","Following the Ant Design specification, we will add one space between if Button contains two Chinese characters only. If you don't need that, you can use ",["a",{title:null,href:"/components/config-provider/#API"},"ConfigProvider"]," to set ",["code","autoInsertSpaceInButton"]," as ",["code","false"],"."],["p",["img",{src:"https://gw.alipayobjects.com/zos/antfincdn/MY%26THAPZrW/38f06cb9-293a-4b42-b183-9f443e79ffea.png",style:"box-shadow: none; margin: 0px; width: 100px;",alt:"Button with two Chinese characters"}]],["style",'\n[id^=components-button-demo-] .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n[id^=components-button-demo-] .ant-btn-group > .ant-btn,\n[id^=components-button-demo-] .ant-btn-group > span > .ant-btn {\n  margin-right: 0;\n}\n[data-theme="dark"] .site-button-ghost-wrapper {\n  background: rgba(255, 255, 255, 0.2);\n}\n']]}}}]);