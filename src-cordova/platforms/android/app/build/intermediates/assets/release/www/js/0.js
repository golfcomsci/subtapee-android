(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{GirD:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHr LpR lFf"}},[a("q-layout-header",[a("q-toolbar",[a("q-icon",{attrs:{size:"2rem",name:"fas fa-broadcast-tower"}}),a("q-toolbar-title",[t._v("\n        "+t._s(t.$route.meta.title)+"\n        "),a("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s(this.fullName))])]),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"error_outline"},on:{click:this.clearLocalStorage}},[a("q-tooltip",{attrs:{anchor:"top left",self:"bottom left",offset:[10,10]}},[a("strong",[t._v("คลิก")]),t._v(" หากทำอะไรไม่ได้\n        ")])],1),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"exit_to_app"},on:{click:t.logout}},[a("q-tooltip",{attrs:{anchor:"top left",self:"bottom left",offset:[10,10]}},[t._v("\n          ออกจากระบบ\n        ")])],1)],1)],1),a("q-layout-drawer",{attrs:{side:"left"}},[a("q-list",{attrs:{"no-border":"",link:"","inset-separator":""}},[a("q-list-header",[t._v("Essential Links")]),a("q-item",{attrs:{to:"/docs"}},[a("q-item-side",{attrs:{icon:"school"}}),a("q-item-main",{attrs:{label:"Docs",sublabel:"quasar-framework.org"}})],1),a("q-item",{attrs:{to:"/forum"}},[a("q-item-side",{attrs:{icon:"record_voice_over"}}),a("q-item-main",{attrs:{label:"Forum",sublabel:"forum.quasar-framework.org"}})],1),a("q-item",{attrs:{to:"/chat"}},[a("q-item-side",{attrs:{icon:"chat"}}),a("q-item-main",{attrs:{label:"Discord Chat Channel",sublabel:"https://discord.gg/5TDhbDg"}})],1),a("q-item",{attrs:{to:"/twitter"}},[a("q-item-side",{attrs:{icon:"rss feed"}}),a("q-item-main",{attrs:{label:"Twitter",sublabel:"@quasarframework"}})],1)],1)],1),a("q-layout-drawer",{attrs:{side:"right"}},[t._v("\n    Right Side of Layout\n  ")]),a("q-page-container",[a("router-view")],1),a("q-layout-footer",[a("q-tabs",[a("q-route-tab",{attrs:{slot:"title",icon:"home",to:"/",replace:"",label:"หน้าหลัก"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"done_all",to:"/task",replace:"",label:"งานติดตั้ง"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"done_all",to:"/revoke",replace:"",label:"งานถอน"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"input",to:"/equipment",alert:t.hasPending.equipment.alert,count:t.hasPending.equipment.count,replace:"",label:"อุปกรณ์"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"input",to:"/material",alert:t.hasPending.material.alert,count:t.hasPending.material.count,replace:"",label:"วัสดุ"},slot:"title"})],1)],1)],1)},r=[];o._withStripped=!0;var l=a("MVZn"),i=a.n(l),s=a("ZFgu"),n=a("L2JU"),c={name:"Layout",data:function(){return{title:"aa",leftDrawer:!0}},components:{QLayout:s["j"],QToolbar:s["m"],QBtn:s["b"],QIcon:s["d"],QToolbarTitle:s["n"],QList:s["k"],QItemSide:s["h"],QItemMain:s["g"],QItem:s["f"],QItemTile:s["i"],QListHeader:s["l"]},mounted:function(){this.fetchPending()},methods:i()({},Object(n["b"])(["fetchPending"]),{logout:function(){var t=this;this.$q.dialog({title:"ยืนยัน",message:"ออกจากระบบ.",ok:"Agree",cancel:"Disagree"}).then(function(){t.$store.dispatch("auth/logout",t.form).then(function(e){t.$router.push("/login")})}).catch(function(){t.$q.notify("Disagreed...")})},clearLocalStorage:function(){localStorage.clear(),this.logout()}}),computed:i()({},Object(n["e"])("auth",["fullName","userName"]),Object(n["c"])(["hasPending"])),currentPath:function(){return this.$route.path}},u=c,m=(a("Wk2R"),a("KHd+")),d=Object(m["a"])(u,o,r,!1,null,null,null);e["default"]=d.exports},OWYs:function(t,e,a){var o=a("ZRJ/");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("SZ7m").default;r("6ab088cd",o,!1,{sourceMap:!1})},Wk2R:function(t,e,a){"use strict";var o=a("OWYs"),r=a.n(o);r.a},"ZRJ/":function(t,e,a){e=t.exports=a("I1BE")(!1),e.push([t.i,"",""])}}]);