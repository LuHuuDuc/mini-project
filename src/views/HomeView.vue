!
<template>
  <main>
    <div class="transport">
      <div class="heading">Transport</div>
      <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        reprehenderit pariatur exercitationem sunt veritatis quod mollitia iusto
        dolorum aliquam magnam?
      </div>
      <div class="list">
        <div class="item"><i class="fa-solid fa-motorcycle"></i></div>
        <div class="item"><i class="fa-solid fa-car"></i></div>
        <div class="item"><i class="fa-solid fa-truck-fast"></i></div>
        <div class="item"><i class="fa-solid fa-plane"></i></div>
        <div class="item"><i class="fa-solid fa-ferry"></i></div>
      </div>
    </div>

    <div class="product">
      <div class="heading">Product</div>
      <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        reprehenderit pariatur exercitationem sunt veritatis quod mollitia iusto
        dolorum aliquam magnam?
      </div>
      <product-home-component></product-home-component>
    </div>
  </main>
</template>

<script>
import ProductHomeComponent from "@/components/ProductHomeComponent";
export default {
  components: {
    ProductHomeComponent,
  },
};
</script>

<style scoped>
main {
  text-align: center;
}
.heading {
  font-size: 25px;
}
.content {
  font-size: 14px;
  color: #555;
  width: 500px;
  margin: 13px auto;
}
.transport {
  margin: 50px auto;
}
.transport .list {
  display: flex;
  justify-content: center;
}
.transport .list .item {
  font-size: 25px;
  text-align: center;
  width: 70px;
}
.product {
  margin: 50px auto;
}
</style>
