(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"19fX":function(t,e,a){var i=a("IyQt");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("SZ7m").default;s("16f7b0b8",i,!1,{sourceMap:!1})},"2ga1":function(t,e,a){"use strict";var i=a("19fX"),s=a.n(i);s.a},"56Yd":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticStyle:{width:"100vw"}},[a("q-list",[a("q-list-header",[t._v("รายละเอียด")]),a("q-item",[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("เลขวงจร")]),a("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.task["circuit_id"]))])],1)],1),a("q-item",[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("ชื่อลูกค้า")]),a("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.task["customer_name"]))])],1)],1),t.task["service_fees"]?a("q-item",[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("เก็บค่าบริการ")]),a("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.task["service_fees"]))])],1)],1):t._e(),a("q-item",[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("ระยะสาย")]),a("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.task["dropwire_begin"])+" - "+t._s(t.task["dropwire_end"])+" ("+t._s(t.dropWireLength)+")")])],1)],1),t.task["remarks"]?a("q-item",[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("หมายเหตุ")]),a("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.task["remarks"]))])],1)],1):t._e(),t.task["created_at"]?a("q-item",[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("บันทึกเมื่อ")]),a("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.task["created_at"])+"\n          ("),a("timeago",{attrs:{datetime:t.task["created_at"]}}),t._v(")\n          ")],1)],1)],1):t._e(),a("q-item-separator"),t.task["equipments"].length?a("div",[a("q-list-header",[t._v("อุปกรณ์")]),t._l(t.task["equipments"],function(e,i){return a("q-item",{attrs:{id:i}},[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v(t._s(e.equipment.brand)+" "+t._s(e.equipment.model)+" ("+t._s(e.equipment.category.name)+")")]),a("q-item-tile",{attrs:{sublabel:""}},[t._v("\n              S/N . :"+t._s(e.serial.toUpperCase())+"\n            ")])],1)],1)}),a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple.mat",modifiers:{mat:!0}}],attrs:{link:""},nativeOn:{click:function(e){t.modal=!0}}},[a("q-item-side",{attrs:{icon:"photo_library"}}),a("q-item-main",{attrs:{label:"ไฟล์รูปภาพ"}}),a("q-item-side",{attrs:{right:"",icon:"keyboard_arrow_right"}})],1)],1)],2):t._e(),a("q-item-separator")],1)],1),a("Carousel",{attrs:{modal:t.modal},on:{close:function(e){t.modal=!1}}}),a("inner-loading",{attrs:{loading:t.isLoading}})],1)},s=[];i._withStripped=!0;var r=a("MVZn"),l=a.n(r),n=a("L2JU"),o=a("GWsV"),c=a("NpPU"),m={name:"detail",data:function(){return{id:this.$route.params.id,modal:!1}},created:function(){console.log(this.task_detail)},mounted:function(){},components:{InnerLoading:o["a"],Carousel:c["a"]},computed:l()({},Object(n["c"])(["isLoading"]),Object(n["c"])("task",["tasks","getTaskById"]),{dropWireLength:function(){return this.task["dropwire_end"]-this.task["dropwire_begin"]},task:function(){return this.getTaskById(2)}})},u=m,d=(a("xu9T"),a("KHd+")),p=Object(d["a"])(u,i,s,!1,null,null,null);e["default"]=p.exports},GWsV:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-inner-loading",{attrs:{visible:t.loading}},[a("q-spinner-gears",{attrs:{size:"50px",color:"teal-4"}})],1)},s=[];i._withStripped=!0;var r={props:["loading"],data:function(){return{}}},l=r,n=(a("2ga1"),a("KHd+")),o=Object(n["a"])(l,i,s,!1,null,null,null);e["a"]=o.exports},IyQt:function(t,e,a){e=t.exports=a("I1BE")(!1),e.push([t.i,"",""])},NpPU:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-modal",{attrs:{maximized:""},on:{hide:t.close},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("q-carousel",{staticClass:"text-white full-height",attrs:{color:"white",arrows:"","quick-nav":""},scopedSlots:t._u([{key:"control-full",fn:function(e){return a("q-carousel-control",{attrs:{position:"bottom-right",offset:[18,22]}},[a("q-btn",{attrs:{rounded:"",push:"",color:"primary",icon:"close",label:"ปิด"},on:{click:t.close}})],1)}}])},[a("q-carousel-slide",{attrs:{"img-src":"https://picsum.photos/g/1024/768"}}),a("q-carousel-slide",{attrs:{"img-src":"https://picsum.photos/g/1024/768"}}),a("q-carousel-slide",{attrs:{"img-src":"https://picsum.photos/g/1024/768"}})],1)],1)},s=[];i._withStripped=!0;var r=a("ZFgu"),l={name:"Carousel",data:function(){return{colors:["primary","secondary","yellow","red","orange","grey-2"]}},methods:{close:function(){this.$emit("close")}},components:{colors:r["o"]},props:{modal:{default:!1}}},n=l,o=a("KHd+"),c=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=c.exports},hzdN:function(t,e,a){var i=a("y7wE");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("SZ7m").default;s("af36a8c0",i,!1,{sourceMap:!1})},xu9T:function(t,e,a){"use strict";var i=a("hzdN"),s=a.n(i);s.a},y7wE:function(t,e,a){e=t.exports=a("I1BE")(!1),e.push([t.i,"",""])}}]);