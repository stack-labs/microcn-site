(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{3201:function(e,t){e.exports={content:["section",["p","A hierarchical list structure component."],["h2","When To Use"],["p","Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The ",["code","Tree"]," component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a ",["code","Tree"],"."]],meta:{category:"Components",type:"Data Display",title:"Tree",filename:"components/tree/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Note",title:"Note"},"Note"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Tree props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","autoExpandParent"],["td","Whether to automatically expand a parent treeNode"],["td","boolean"],["td","true"],["td"]],["tr",["td","blockNode"],["td","Whether treeNode fill remaining horizontal space"],["td","boolean"],["td","false"],["td"]],["tr",["td","checkable"],["td","Adds a ",["code","Checkbox"]," before the treeNodes"],["td","boolean"],["td","false"],["td"]],["tr",["td","checkedKeys"],["td","(Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When ",["code","checkable"]," and ",["code","checkStrictly"]," is true, its object has ",["code","checked"]," and ",["code","halfChecked"]," property. Regardless of whether the child or parent treeNode is checked, they won't impact each other."],["td","string","[","] ","|"," {checked: string","[","], halfChecked: string","[","]}"],["td","[","]"],["td"]],["tr",["td","checkStrictly"],["td","Check treeNode precisely; parent treeNode and children treeNodes are not associated"],["td","boolean"],["td","false"],["td"]],["tr",["td","defaultCheckedKeys"],["td","Specifies the keys of the default checked treeNodes"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","defaultExpandAll"],["td","Whether to expand all treeNodes by default"],["td","boolean"],["td","false"],["td"]],["tr",["td","defaultExpandedKeys"],["td","Specify the keys of the default expanded treeNodes"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","defaultExpandParent"],["td","auto expand parent treeNodes when init"],["td","bool"],["td","true"],["td"]],["tr",["td","defaultSelectedKeys"],["td","Specifies the keys of the default selected treeNodes"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","disabled"],["td","whether disabled the tree"],["td","bool"],["td","false"],["td"]],["tr",["td","draggable"],["td","Specifies whether this Tree is draggable (IE > 8)"],["td","boolean"],["td","false"],["td"]],["tr",["td","expandedKeys"],["td","(Controlled) Specifies the keys of the expanded treeNodes"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","filterTreeNode"],["td","Defines a function to filter (highlight) treeNodes. When the function returns ",["code","true"],", the corresponding treeNode will be highlighted"],["td","function(node)"],["td","-"],["td"]],["tr",["td","loadData"],["td","Load data asynchronously"],["td","function(node)"],["td","-"],["td"]],["tr",["td","loadedKeys"],["td","(Controlled) Set loaded tree nodes. Need work with ",["code","loadData"]],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","multiple"],["td","Allows selecting multiple treeNodes"],["td","boolean"],["td","false"],["td"]],["tr",["td","selectable"],["td","whether can be selected"],["td","boolean"],["td","true"],["td"]],["tr",["td","selectedKeys"],["td","(Controlled) Specifies the keys of the selected treeNodes"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","showIcon"],["td","Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to ",["code","true"]],["td","boolean"],["td","false"],["td"]],["tr",["td","switcherIcon"],["td","customize collapse/expand icon of tree node"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","showLine"],["td","Shows a connecting line"],["td","boolean"],["td","false"],["td"]],["tr",["td","treeData"],["td","treeNodes data Array, if set it then you need not to construct children TreeNode. (key should be unique across the whole array)"],["td","array\\<{ key, title, children, ","[","disabled, selectable] }>"],["td","-"],["td"]],["tr",["td","virtual"],["td","Disable virtual scroll when set to ",["code","false"]],["td","boolean"],["td","true"],["td","4.1.0"]],["tr",["td","onCheck"],["td","Callback function for when the onCheck event occurs"],["td","function(checkedKeys, e:{checked: bool, checkedNodes, node, event, halfCheckedKeys})"],["td","-"],["td"]],["tr",["td","onDragEnd"],["td","Callback function for when the onDragEnd event occurs"],["td","function({event, node})"],["td","-"],["td"]],["tr",["td","onDragEnter"],["td","Callback function for when the onDragEnter event occurs"],["td","function({event, node, expandedKeys})"],["td","-"],["td"]],["tr",["td","onDragLeave"],["td","Callback function for when the onDragLeave event occurs"],["td","function({event, node})"],["td","-"],["td"]],["tr",["td","onDragOver"],["td","Callback function for when the onDragOver event occurs"],["td","function({event, node})"],["td","-"],["td"]],["tr",["td","onDragStart"],["td","Callback function for when the onDragStart event occurs"],["td","function({event, node})"],["td","-"],["td"]],["tr",["td","onDrop"],["td","Callback function for when the onDrop event occurs"],["td","function({event, node, dragNode, dragNodesKeys})"],["td","-"],["td"]],["tr",["td","onExpand"],["td","Callback function for when a treeNode is expanded or collapsed"],["td","function(expandedKeys, {expanded: bool, node})"],["td","-"],["td"]],["tr",["td","onLoad"],["td","Callback function for when a treeNode is loaded"],["td","function(loadedKeys, {event, node})"],["td","-"],["td"]],["tr",["td","onRightClick"],["td","Callback function for when the user right clicks a treeNode"],["td","function({event, node})"],["td","-"],["td"]],["tr",["td","onSelect"],["td","Callback function for when the user clicks a treeNode"],["td","function(selectedKeys, e:{selected: bool, selectedNodes, node, event})"],["td","-"],["td"]]]],["h3","TreeNode props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","checkable"],["td","When Tree is checkable, set TreeNode display Checkbox or not"],["td","boolean"],["td","-"]],["tr",["td","disableCheckbox"],["td","Disables the checkbox of the treeNode"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabled"],["td","Disables the treeNode"],["td","boolean"],["td","false"],["td"]],["tr",["td","icon"],["td","customize icon. When you pass component, whose render will receive full TreeNode props as component props"],["td","ReactNode/Function(props):ReactNode"],["td","-"],["td"]],["tr",["td","isLeaf"],["td","Determines if this is a leaf node(effective when ",["code","loadData"]," is specified)"],["td","boolean"],["td","false"],["td"]],["tr",["td","key"],["td","Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree!"],["td","string"],["td","internal calculated position of treeNode"],["td"]],["tr",["td","selectable"],["td","Set whether the treeNode can be selected"],["td","boolean"],["td","true"],["td"]],["tr",["td","title"],["td","Title"],["td","string","|","ReactNode"],["td","'---'"],["td"]]]],["h3","DirectoryTree props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","expandAction"],["td","Directory open logic, optional ",["code","false"]," ",["code","'click'"]," ",["code","'doubleClick'"]],["td","string"],["td","click"]]]],["h2","Note"],["p","Before ",["code","3.4.0"],": The number of treeNodes can be very large, but when ",["code","checkable=true"],", it will increase the compute time. So, we cache some calculations (e.g. ",["code","this.treeNodesStates"],") to avoid double computing. But, this brings some restrictions. ",["strong","When you load treeNodes asynchronously, you should render tree like this"],":"],["pre",{lang:"jsx",highlighted:'<span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>treeData<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>treeData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>data <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeNode</span> <span class="token punctuation">/></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tree</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>\n    <span class="token string">\'loading tree\'</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","{\n  this.state.treeData.length ? (\n    <Tree>\n      {this.state.treeData.map(data => (\n        <TreeNode />\n      ))}\n    </Tree>\n  ) : (\n    'loading tree'\n  );\n}"]],["h2","FAQ"],["h3","How to hide file icon when use showLine?"],["p","File icon realize by using switcherIcon. You can overwrite the style to hide it: ",["a",{title:null,href:"https://codesandbox.io/s/883vo47xp8"},"https://codesandbox.io/s/883vo47xp8"]],["h3","Why defaultExpandedAll not working on ajax data?"],["p",["code","default"]," prefix prop only works when inited. So ",["code","defaultExpandedAll"]," has already executed when ajax load data. You can control ",["code","expandedKeys"]," or render Tree when data loaded to realize expanded all."]]}}}]);