"use strict";(self["webpackChunkprojectcuoiky"]=self["webpackChunkprojectcuoiky"]||[]).push([[57],{4057:function(e,l,i){i.r(l),i.d(l,{default:function(){return Y}});var t=i(6252),n=i(9963),s=i(3577);const h=e=>((0,t.dD)("data-v-3307ec94"),e=e(),(0,t.Cn)(),e),r=h((()=>(0,t._)("div",{class:"heading"},[(0,t._)("h1",null,"Thêm sản phẩm")],-1))),o=h((()=>(0,t._)("label",null,"Tên sản phẩm:",-1))),a=h((()=>(0,t._)("label",null,"Giá:",-1))),u=h((()=>(0,t._)("label",null,"Giá giảm:",-1))),p=h((()=>(0,t._)("label",null,"Màu sắc:",-1))),m=["onUpdate:modelValue"],c=h((()=>(0,t._)("i",{class:"fa-solid fa-plus"},null,-1))),g=[c],d=h((()=>(0,t._)("i",{class:"fa-solid fa-minus"},null,-1))),f=[d],y=h((()=>(0,t._)("label",null,"Kích thước:",-1))),_=["onUpdate:modelValue"],k=h((()=>(0,t._)("label",null,"Hình ảnh:",-1))),w=["for"],b=["for"],v=["for"],C=["id","onChange"],V=h((()=>(0,t._)("label",null,"Tồn kho:",-1))),D=h((()=>(0,t._)("label",null,"Giới tính:",-1))),z=h((()=>(0,t._)("option",{value:"Nam"},"Nam",-1))),I=h((()=>(0,t._)("option",{value:"Nữ"},"Nữ",-1))),U=h((()=>(0,t._)("option",{value:"Unisex"},"Unisex",-1))),N=[z,I,U],S={class:"error"},q=h((()=>(0,t._)("button",null,"Thêm",-1)));function x(e,l,i,h,c,d){return(0,t.wg)(),(0,t.iD)("main",null,[r,(0,t._)("form",{onSubmit:l[7]||(l[7]=(0,n.iM)((e=>h.submit()),["prevent"]))},[o,(0,t.wy)((0,t._)("input",{type:"text",placeholder:"Nhập tên sản phẩm","onUpdate:modelValue":l[0]||(l[0]=e=>h.item.name=e)},null,512),[[n.nr,h.item.name]]),a,(0,t.wy)((0,t._)("input",{type:"number",placeholder:"Nhập giá sản phẩm","onUpdate:modelValue":l[1]||(l[1]=e=>h.item.price=e)},null,512),[[n.nr,h.item.price]]),u,(0,t.wy)((0,t._)("input",{type:"number",placeholder:"Nhập giá giảm","onUpdate:modelValue":l[2]||(l[2]=e=>h.item.price_sale=e)},null,512),[[n.nr,h.item.price_sale]]),p,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(h.listColor,((e,l)=>(0,t.wy)(((0,t.wg)(),(0,t.iD)("input",{key:l,type:"text",placeholder:"Nhập màu sắc","onUpdate:modelValue":e=>h.listColor[l]=e},null,8,m)),[[n.nr,h.listColor[l]]]))),128)),(0,t._)("span",{onClick:l[3]||(l[3]=e=>h.addList()),class:"btnAdd"},g),h.listColor.length>=2?((0,t.wg)(),(0,t.iD)("span",{key:0,onClick:l[4]||(l[4]=e=>h.removeList()),class:"btnRemove"},f)):(0,t.kq)("",!0),y,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(h.listSize,((e,l)=>(0,t.wy)(((0,t.wg)(),(0,t.iD)("input",{key:l,type:"text",placeholder:"Nhập kích thước","onUpdate:modelValue":e=>h.listSize[l]=e},null,8,_)),[[n.nr,h.listSize[l]]]))),128)),k,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(h.listImage,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"form-fil",key:l},[l>0&&""==e?((0,t.wg)(),(0,t.iD)("label",{key:0,for:l,class:"file"},"Chọn hình ảnh sản phẩm",8,w)):(0,t.kq)("",!0),0==l&&""==e?((0,t.wg)(),(0,t.iD)("label",{key:1,for:l,class:"file"},"Chọn hình ảnh đại diện",8,b)):(0,t.kq)("",!0),""!=e?((0,t.wg)(),(0,t.iD)("label",{key:2,for:l,class:"file"},(0,s.zw)(e),9,v)):(0,t.kq)("",!0),(0,t.wy)((0,t._)("input",{id:l,onChange:e=>h.changImg(e,l),type:"file"},null,40,C),[[n.F8,!1]])])))),128)),V,(0,t.wy)((0,t._)("input",{type:"number",placeholder:"Nhập số lượng tồn kho","onUpdate:modelValue":l[5]||(l[5]=e=>h.item.inventory=e)},null,512),[[n.nr,h.item.inventory]]),D,(0,t.wy)((0,t._)("select",{"onUpdate:modelValue":l[6]||(l[6]=e=>h.item.sex=e)},N,512),[[n.bM,h.item.sex]]),(0,t._)("div",S,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(h.error,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"item",key:l},(0,s.zw)(e),1)))),128))]),q],32)])}i(7658);var j=i(2262),K=i(3699),H={setup(){const e=(0,j.qj)([""]),l=(0,j.qj)([""]),i=(0,j.qj)(["",""]),t=(0,j.qj)({name:"",price:null,price_sale:null,color:e,size:l,image:i,inventory:null,sell_number:0,rate:0,sex:""}),n=(0,j.qj)([]);async function s(){if(this.error.splice(0,this.error.length),""==this.item.name||null==this.item.price||null==this.item.price_sale||null==this.item.inventory||""==this.item.sex)this.error.push("Vui lòng nhập đầy đủ thông tin");else{for(let e=0;e<this.listColor.length;e++)if(""==this.listColor[e]){this.error.push("Vui lòng nhập đầy đủ màu sắc");break}for(let e=0;e<this.listImage.length;e++)if(""==this.listImage[e]){this.error.push("Vui lòng chọn đầy đủ hình ảnh");break}for(let e=0;e<this.listSize.length;e++)if(""==this.listSize[e]){this.error.push("Vui lòng nhập đầy đủ kích thước");break}(this.item.price<=0||this.price<this.price_sale)&&this.error.push("Vui lòng nhập lại giá"),this.price_sale<=0&&this.error.push("Vui lòng nhập lại giá giảm"),this.item.inventory<=0&&this.error.push("Vui lòng nhập giá số lượng tồn kho")}0==this.error.length&&(await(0,K.gK)(this.item),alert("Thêm sản phẩm thành công"),window.location.reload())}function h(){this.listColor.push(""),this.listImage.push(""),this.listSize.push("")}function r(){this.listColor.splice(this.listColor.length-1,1),this.listImage.splice(this.listImage.length-1,1),this.listSize.splice(this.listSize.length-1,1)}function o(e,l){this.listImage[l]=e.target.files[0].name}return{listColor:e,listSize:l,listImage:i,item:t,submit:s,addList:h,changImg:o,error:n,removeList:r}}},T=i(3744);const L=(0,T.Z)(H,[["render",x],["__scopeId","data-v-3307ec94"]]);var Y=L}}]);
//# sourceMappingURL=57.f6bf3566.js.map