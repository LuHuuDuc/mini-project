"use strict";(self["webpackChunkprojectcuoiky"]=self["webpackChunkprojectcuoiky"]||[]).push([[999],{4999:function(n,t,l){l.r(t),l.d(t,{default:function(){return $}});var e=l(6252),u=l(3577);const o={class:"heading"},c={class:"list"};function i(n,t,l,i,a,r){const d=(0,e.up)("comment-component"),s=(0,e.up)("product-component");return(0,e.wg)(),(0,e.iD)("main",null,[(0,e._)("div",o,[(0,e._)("div",c,[(0,e._)("button",{onClick:t[0]||(t[0]=n=>i.isActive=0),class:(0,u.C_)({active:0==i.isActive})},"Sản phẩm",2),(0,e._)("button",{onClick:t[1]||(t[1]=n=>i.isActive=1),class:(0,u.C_)({active:1==i.isActive})},"Bình luận",2)])]),1==i.isActive?((0,e.wg)(),(0,e.j4)(d,{key:0})):(0,e.kq)("",!0),0==i.isActive?((0,e.wg)(),(0,e.j4)(s,{key:1})):(0,e.kq)("",!0)])}var a=l(2262);const r=n=>((0,e.dD)("data-v-62878940"),n=n(),(0,e.Cn)(),n),d={class:"container"},s=r((()=>(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"Stt"),(0,e._)("th",null,"Mã sản phẩm"),(0,e._)("th",null,"Email"),(0,e._)("th",null,"Nội dung"),(0,e._)("th",null,"Đánh giá"),(0,e._)("th")])],-1))),_=["onClick"],m={key:0,colspan:"7",style:{"font-family":"'Lobster', cursive"}},h=r((()=>(0,e._)("h3",null,"Không có bình luận nào",-1))),p=[h];function v(n,t,l,o,c,i){return(0,e.wg)(),(0,e.iD)("main",null,[(0,e._)("div",d,[(0,e._)("table",null,[s,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.data,((n,t)=>((0,e.wg)(),(0,e.iD)("tr",{key:n.id},[(0,e._)("td",null,(0,u.zw)(t+1),1),(0,e._)("td",null,(0,u.zw)(n.id_product),1),(0,e._)("td",null,(0,u.zw)(n.email),1),(0,e._)("td",null,(0,u.zw)(n.content),1),(0,e._)("td",null,(0,u.zw)(n.rating),1),(0,e._)("td",null,[(0,e._)("button",{onClick:t=>o.removeComment(n.id)},"Xóa",8,_)])])))),128)),(0,e._)("tr",null,[0==o.data.length?((0,e.wg)(),(0,e.iD)("td",m,p)):(0,e.kq)("",!0)])])])])])}var w=l(3907),g={setup(){const n=(0,w.oR)(),t=(0,e.Fl)((()=>n.state.comment));function l(t){confirm("Bạn có chắc muốn bình luận này không?")&&n.commit("removeComment",t)}return{data:t,removeComment:l}}},k=l(3744);const f=(0,k.Z)(g,[["render",v],["__scopeId","data-v-62878940"]]);var C=f;const b=n=>((0,e.dD)("data-v-20ef0bdc"),n=n(),(0,e.Cn)(),n),y={class:"container"},z=b((()=>(0,e._)("th",null,"Stt",-1))),D=b((()=>(0,e._)("th",null,"Tên sản phẩm",-1))),A=b((()=>(0,e._)("th",null,"Giá",-1))),H=b((()=>(0,e._)("th",null,"Giá sale",-1))),K=b((()=>(0,e._)("th",null,"Màu sắc",-1))),Y=b((()=>(0,e._)("th",null,"Kích thước",-1))),j=b((()=>(0,e._)("th",null,"Hình ảnh",-1))),I=b((()=>(0,e._)("th",null,"Tồn kho",-1))),P=b((()=>(0,e._)("th",null,"Đã bán",-1))),S=b((()=>(0,e._)("th",null,"Đánh giá",-1))),q=["value"],B=["value"],T=["value"],U=["onClick"];function X(n,t,l,o,c,i){const a=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("main",null,[(0,e._)("div",y,[(0,e._)("table",null,[(0,e._)("thead",null,[(0,e._)("tr",null,[z,D,A,H,K,Y,j,I,P,S,(0,e._)("th",null,[(0,e.Wm)(a,{class:"col",to:{name:"manager_product"}},{default:(0,e.w5)((()=>[(0,e.Uk)("Thêm sản phẩm")])),_:1})])])]),(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.data,((t,l)=>((0,e.wg)(),(0,e.iD)("tr",{key:t.id},[(0,e._)("td",null,(0,u.zw)(l+1),1),(0,e._)("td",null,(0,u.zw)(t.name),1),(0,e._)("td",null,(0,u.zw)(n.$filters.formatCurrent(t.price)),1),(0,e._)("td",null,(0,u.zw)(n.$filters.formatCurrent(t.price_sale)),1),(0,e._)("td",null,[(0,e._)("select",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.color,((n,t)=>((0,e.wg)(),(0,e.iD)("option",{key:t,value:n},(0,u.zw)(n),9,q)))),128))])]),(0,e._)("td",null,[(0,e._)("select",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.size,((n,t)=>((0,e.wg)(),(0,e.iD)("option",{key:t,value:n},(0,u.zw)(n),9,B)))),128))])]),(0,e._)("td",null,[(0,e._)("select",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.image,((n,t)=>((0,e.wg)(),(0,e.iD)("option",{key:t,value:n},(0,u.zw)(n),9,T)))),128))])]),(0,e._)("td",null,(0,u.zw)(t.inventory),1),(0,e._)("td",null,(0,u.zw)(t.sell_number),1),(0,e._)("td",null,(0,u.zw)(t.rate),1),(0,e._)("td",null,[(0,e.Wm)(a,{class:"btnUpdate",to:{name:"updateProduct",params:{id:t.id}}},{default:(0,e.w5)((()=>[(0,e.Uk)("Sửa")])),_:2},1032,["to"]),(0,e._)("button",{onClick:n=>o.removeProduct(t.id)},"Xóa",8,U)])])))),128))])])])])}var Z=l(3699),F={setup(){const n=(0,w.oR)(),t=(0,e.Fl)((()=>n.state.products));function l(n){confirm("Bạn có chắc muốn xóa sản phẩm này")&&((0,Z.Ir)(n),alert("Xóa sản phẩm thành công thành công"),window.location.reload())}return{data:t,removeProduct:l}}};const G=(0,k.Z)(F,[["render",X],["__scopeId","data-v-20ef0bdc"]]);var M=G,R={components:{CommentComponent:C,ProductComponent:M},setup(){const n=(0,a.iH)(0);return{isActive:n}}};const W=(0,k.Z)(R,[["render",i],["__scopeId","data-v-fd6543be"]]);var $=W}}]);
//# sourceMappingURL=999.9f8ac5ba.js.map