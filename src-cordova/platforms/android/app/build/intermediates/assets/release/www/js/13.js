(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"19fX":function(t,e,i){var n=i("IyQt");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("SZ7m").default;a("16f7b0b8",n,!1,{sourceMap:!1})},"2ga1":function(t,e,i){"use strict";var n=i("19fX"),a=i.n(n);a.a},F0vO:function(t,e,i){"use strict";var n=i("WZuu"),a=i.n(n);a.a},GWsV:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-inner-loading",{attrs:{visible:t.loading}},[i("q-spinner-gears",{attrs:{size:"50px",color:"teal-4"}})],1)},a=[];n._withStripped=!0;var o={props:["loading"],data:function(){return{}}},s=o,l=(i("2ga1"),i("KHd+")),r=Object(l["a"])(s,n,a,!1,null,null,null);e["a"]=r.exports},IyQt:function(t,e,i){e=t.exports=i("I1BE")(!1),e.push([t.i,"",""])},NpPU:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-modal",{attrs:{maximized:""},on:{hide:t.close},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[i("q-carousel",{staticClass:"text-white full-height",attrs:{color:"white",arrows:"","quick-nav":""},scopedSlots:t._u([{key:"control-full",fn:function(e){return i("q-carousel-control",{attrs:{position:"bottom-right",offset:[18,22]}},[i("q-btn",{attrs:{rounded:"",push:"",color:"primary",icon:"close",label:"ปิด"},on:{click:t.close}})],1)}}])},[i("q-carousel-slide",{attrs:{"img-src":"https://picsum.photos/g/1024/768"}}),i("q-carousel-slide",{attrs:{"img-src":"https://picsum.photos/g/1024/768"}}),i("q-carousel-slide",{attrs:{"img-src":"https://picsum.photos/g/1024/768"}})],1)],1)},a=[];n._withStripped=!0;var o=i("ZFgu"),s={name:"Carousel",data:function(){return{colors:["primary","secondary","yellow","red","orange","grey-2"]}},methods:{close:function(){this.$emit("close")}},components:{colors:o["o"]},props:{modal:{default:!1}}},l=s,r=i("KHd+"),c=Object(r["a"])(l,n,a,!1,null,null,null);e["a"]=c.exports},Th1w:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",[i("div",{staticStyle:{width:"100vw"}},[i("q-list",[i("q-list-header",[t._v("รายละเอียด")]),i("q-item",[i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[t._v("ประเภท")]),i("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.Equip.Equipment.category.name))])],1)],1),i("q-item",[i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[t._v("ยี่ห้อ")]),i("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.Equip.Equipment.brand))])],1)],1),i("q-item",[i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[t._v("รุ่น")]),i("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.Equip.Equipment.model))])],1)],1),i("q-item-separator"),i("q-item",[i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[t._v("หมายเลขซีเรียล")]),i("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.Equip.serial))])],1)],1),t.Equip.serial?i("div"):t._e(),i("q-item",[i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[t._v("วันที่ได้รับคำขอ")]),i("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.Equip.created_at))])],1)],1),i("q-item",[i("q-btn",{staticClass:"full-width",attrs:{glossy:"",color:"positive",label:"ตรวจรับอุปกรณ์"},nativeOn:{click:function(e){t.dialog=!0}}})],1)],1)],1),i("q-action-sheet",{attrs:{title:"ตรวจสอบความถูกต้อง",actions:[{label:"ข้อมูลถูกต้อง",icon:"check_circle",color:"green",is_accept:!0},{label:"ปฏิเสธการรับ",icon:"cancel_presentation",color:"red",is_accept:!1}]},on:{ok:t.onOk,cancel:t.onCancel,show:t.onShow,hide:t.onHide},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}}),i("inner-loading",{attrs:{loading:t.isLoading}})],1)},a=[];n._withStripped=!0;i("ls82");var o=i("yXPU"),s=i.n(o),l=i("MVZn"),r=i.n(l),c=i("L2JU"),u=i("GWsV"),p=i("NpPU"),d={name:"detail_pending",data:function(){return{id:this.$route.params.id,dialog:!1,modal:!1}},created:function(){},mounted:function(){},components:{InnerLoading:u["a"],Carousel:p["a"]},computed:r()({},Object(c["c"])(["isLoading"]),Object(c["c"])("equipment",["equipments","getPendingById"]),{Equip:function(){return this.getPendingById(this.id)}}),methods:r()({},Object(c["b"])(["isLoading"]),Object(c["b"])("equipment",["refresh","acceptance"]),{onOk:function(){var t=s()(regeneratorRuntime.mark(function t(e){var i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.$axiosInstance.post("/equipment/pending/"+this.id,{is_accept:e.is_accept}).then(function(t){i.isLoading=!1,i.$q.notify({type:"positive",message:t.data.message}),i.router.push("/task")}).catch(function(t){i.isLoading=!1,i.$q.notify(t)});case 3:this.refresh();case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),onCancel:function(){console.log("aa")},onShow:function(){console.log("aa")},onHide:function(){console.log("aa")}})},m=d,f=(i("F0vO"),i("KHd+")),q=Object(f["a"])(m,n,a,!1,null,null,null);e["default"]=q.exports},WZuu:function(t,e,i){var n=i("yCC6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("SZ7m").default;a("a3f6582e",n,!1,{sourceMap:!1})},yCC6:function(t,e,i){e=t.exports=i("I1BE")(!1),e.push([t.i,"",""])}}]);