"use strict";(self["webpackChunkprojectcuoiky"]=self["webpackChunkprojectcuoiky"]||[]).push([[820],{820:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var n=a(6252),r=a(3577),i=a(9963);const s=e=>((0,n.dD)("data-v-2f61eaa0"),e=e(),(0,n.Cn)(),e),l={class:"container"},o={class:"left"},c={key:0},u={class:"grid-product"},d={class:"heading-card"},m=["src"],g={class:"bottom-card"},h={class:"price-sale"},p={class:"price-card"},_={class:"right"},v={class:"search"},y=s((()=>(0,n._)("label",{for:"search"},"Tìm kiếm sản phẩm:",-1))),f={class:"sort"},w=s((()=>(0,n._)("label",null,"Sắp xếp:",-1))),k={class:"category"},C=s((()=>(0,n._)("label",{for:""},"Danh mục:",-1))),x={class:"list"},b={class:"filter-range"},N=s((()=>(0,n._)("label",null,"Lọc theo giá",-1))),H={class:"range"};function S(e,t,s,S,V,T){const z=(0,n.up)("strike"),D=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("main",null,[(0,n._)("div",l,[(0,n._)("div",o,[0==S.data.length?((0,n.wg)(),(0,n.iD)("h1",c,"Không tìm thấy kết quả")):(0,n.kq)("",!0),(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(S.data,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"card",key:t.id},[(0,n.Wm)(D,{class:"col",to:{name:"detail",params:{id:t.id}}},{default:(0,n.w5)((()=>[(0,n._)("div",d,[(0,n._)("img",{src:a(9300)("./"+t.image[0])},null,8,m)]),(0,n._)("div",g,[(0,n._)("div",h,(0,r.zw)(e.$filters.formatCurrent(t.price_sale)),1),(0,n._)("div",p,[(0,n.Wm)(z,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.$filters.formatCurrent(t.price)),1)])),_:2},1024)])])])),_:2},1032,["to"])])))),128))])]),(0,n._)("div",_,[(0,n._)("div",v,[y,(0,n.wy)((0,n._)("input",{id:"search",type:"search","onUpdate:modelValue":t[0]||(t[0]=e=>S.valueSearch=e),placeholder:"Nhập tên sản phẩm",required:""},null,512),[[i.nr,S.valueSearch]])]),(0,n._)("div",f,[w,(0,n._)("button",{onClick:t[1]||(t[1]=e=>S.sort())},(0,r.zw)(S.innerButtonSort),1)]),(0,n._)("div",k,[C,(0,n._)("div",x,[(0,n._)("button",{onClick:t[2]||(t[2]=e=>S.category())},(0,r.zw)(S.innerCategory),1)])]),(0,n._)("div",b,[N,(0,n._)("div",H,[(0,n._)("span",null,(0,r.zw)(e.$filters.formatCurrent(S.min)),1),(0,n.wy)((0,n._)("input",{class:"min",type:"range",step:"1",min:"100000",max:"200000","onUpdate:modelValue":t[3]||(t[3]=e=>S.min=e)},null,512),[[i.nr,S.min]]),(0,n.wy)((0,n._)("input",{class:"max",type:"range",step:"1",min:"250000",max:"500000","onUpdate:modelValue":t[4]||(t[4]=e=>S.max=e)},null,512),[[i.nr,S.max]]),(0,n._)("span",null,(0,r.zw)(e.$filters.formatCurrent(S.max)),1)])])])])])}var V=a(2262),T=a(3907),z={setup(){const e=(0,T.oR)(),t=(0,V.iH)(""),a=(0,V.iH)(1),r=(0,V.iH)("Tăng dần theo giá"),i=(0,V.iH)("Tất cả"),s=(0,V.iH)(""),l=(0,V.iH)(1e3),o=(0,V.iH)(5e5),c=(0,n.Fl)((()=>e.getters.getProducts(t.value,a.value,s.value,l.value,o.value)));function u(){this.sortAs=1==this.sortAs?-1:1,this.innerButtonSort="Tăng dần theo giá"==this.innerButtonSort?"Giảm dần theo giá":"Tăng dần theo giá"}function d(){this.categoryValue=""==this.categoryValue?"Nam":"Nam"==this.categoryValue?"Nữ":"Nữ"==this.categoryValue?"Unisex":"",this.innerCategory="Tất cả"==this.innerCategory?"Nam":"Nam"==this.innerCategory?"Nữ":"Nữ"==this.innerCategory?"Unisex":"Tất cả"}return{data:c,valueSearch:t,innerButtonSort:r,sort:u,sortAs:a,innerCategory:i,category:d,categoryValue:s,min:l,max:o}}},D=a(3744);const U=(0,D.Z)(z,[["render",S],["__scopeId","data-v-2f61eaa0"]]);var B=U}}]);
//# sourceMappingURL=820.b8676b83.js.map