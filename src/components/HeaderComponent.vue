!
<template>
  <header>
    <nav>
      <router-link
        :class="{ active: $route.name == 'home' }"
        class="item"
        :to="{ name: 'home' }"
        ><i class="fa-solid fa-house"></i> Home</router-link
      >
      <router-link
        :class="{ active: $route.name == 'product' }"
        class="item"
        :to="{ name: 'product' }"
        ><i class="fa-solid fa-shop"></i> Product</router-link
      >
      <router-link
        :class="{ active: $route.name == 'manager' }"
        class="item"
        :to="{ name: 'manager' }"
        ><i class="fa-solid fa-toolbox"></i> Manager</router-link
      >
      <div class="button-cart">
        <button @click="openCart()" :class="{ active: isCart }">
          <i class="fa-solid fa-cart-shopping"></i> Cart
        </button>
      </div>
    </nav>
  </header>
  <div
    class="modal"
    :class="{ active: isCart && data.length > 0 }"
    @click.self="closeCart()"
  >
    <div class="container" :class="{ active: isCart }">
      <table border="0px">
        <thead>
          <tr>
            <th>Stt</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Màu sắc</th>
            <th>Kích thước</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>
              <img :src="require('@/assets/image/' + item.image)" />
            </td>
            <td>{{ $filters.formatCurrent(item.price) }}</td>
            <td>
              <select @change="changeColor($event, item)">
                <option
                  v-for="(x, index) in item.list_color"
                  :key="index"
                  :selected="x == item.color"
                  :value="index"
                >
                  {{ x }}
                </option>
              </select>
            </td>
            <td>
              <select @change="changeSize($event, item)" >
                <option
                  v-for="(x, index) in item.list_size"
                  :key="index"
                  :selected="x == item.size"
                  :value="x"
                >
                  {{ x }}
                </option>
              </select>
            </td>
            <td>
              <div class="col-quantity">
                <button @click="minusQuantity(item)">
                  <i class="fa-solid fa-minus"></i></button
                ><input type="number" v-model="item.quantity" disabled /><button
                  @click="plusQuantity(item)"
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </td>
            <td>{{ $filters.formatCurrent(item.total) }}</td>
            <td><button @click="removeItem(item)">Xóa</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="footer-modal" :class="{ active: isCart }">
      <div class="info">
        Số lượng: {{ inCart }} - Tổng tiền: {{ $filters.formatCurrent(total) }}
      </div>
      <div class="button">
        <button @click="removeAll()">Xóa tất cả</button>
        <button @click="pay()">Thanh toán</button>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const isCart = ref(false);
    const store = useStore();
    const data = computed(() => store.state.cart);
    const inCart = computed(() => store.state.inCart);
    const total = computed(() => store.state.total);

    function openCart() {
      if (data.value.length > 0) {
        this.isCart = !this.isCart;
      } else {
        alert("Giỏ hàng đang rỗng. Vui lòng mua hàng!");
      }
    }

    function closeCart() {
      this.isCart = !this.isCart;
    }

    function changeColor(e, item) {
      store.commit("updateColor", { item: item, index: e.target.value });
    }

    function changeSize(e, item) {
      store.commit("updateSize", { item: item, value: e.target.value });
    }

    async function minusQuantity(item) {
      if (item.quantity == 1) {
        if (confirm("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng không?")) {
          await store.commit("minusQuantity", item);
          if (data.value.length == 0) {
            this.isCart = false;
          }
        }
      } else {
        store.commit("minusQuantity", item);
      }
    }

    function plusQuantity(item) {
      store.commit("plusQuantity", item);
    }

    async function removeItem(item) {
      if (confirm("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng không?")) {
        await store.commit("removeItem", item);
        if (data.value.length == 0) {
          this.isCart = false;
        }
      }
    }

    function removeAll() {
      if (confirm("Bạn có chắc muốn xóa giỏ hàng không?")) {
        store.commit("removeAll");
        this.isCart = false;
      }
    }

    function pay() {
      store.commit("pay");
      this.isCart = false;
    }

    return {
      data,
      isCart,
      openCart,
      closeCart,
      changeColor,
      changeSize,
      minusQuantity,
      plusQuantity,
      removeItem,
      total,
      inCart,
      removeAll,
      pay,
    };
  },
};
</script>
<style scoped>
header {
  width: 100%;
  text-align: center;
  height: 100px;
  background: #000;
  line-height: 100px;
  background: #000;
  box-shadow: 10px 10px 20px #868686, -10px -10px 20px #ffffff;
  position: relative;
}
.item {
  width: 100px;
  margin: 20px;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
}
.item:hover {
  color: #ff60ff;
}
.item.active {
  color: #ff60ff;
}
.button-cart {
  position: absolute;
  top: 0;
  right: 50px;
}
.button-cart button {
  box-shadow: unset;
  background: transparent;
  color: #fff;
  font-size: 20px;
  width: 150px;
  transition: 0.3s;
}
.button-cart button:hover {
  color: #ff60ff;
}
.button-cart button.active {
  color: #ff60ff;
}
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 10;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transform: scale(0);
  transition: 0.3s;
}
.modal.active {
  transform: scale(1);
}
.modal .container {
  width: 90%;
  height: 80%;
  position: absolute;
  top: 8%;
  left: 5%;
  background: #fff;
  border-radius: 20px;
  transform: scale(0);
  transition: 0.3s;
  transition-delay: 0.2s;
  overflow: auto;
}
.modal .container::-webkit-scrollbar {
  overflow: hidden;
}
.modal .container.active {
  transform: scale(1);
}
.modal table {
  width: 95%;
  margin: auto;
  text-align: center;
}
.modal table img {
  width: 100px;
}
.modal table th {
  font-size: 20px;
  min-width: 120px;
}
.modal table thead {
  position: sticky;
  background: #fff;
  margin-top: 10px;
  top: 0;
  height: 50px;
  overflow: hidden;
}
.modal table th:nth-child(2) {
  width: 200px;
}
.modal table th:nth-child(1) {
  width: 10px;
}
.modal table td {
  font-family: "Montagu Slab", serif;
  text-align: center;
}
.modal table select {
  padding-bottom: 10px;
  padding-top: 10px;
}
.modal table input {
  padding-bottom: 10px;
  padding-top: 10px;
  margin: auto;
  width: 50px;
  background: #000;
  color: #ff60ff;
}
.modal table button {
  width: 100px;
  margin: 5px;
  background: #000;
  color: #ff60ff;
}
.modal table .col-quantity {
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
  border-radius: 20px;
  height: 36.53px;
}
.modal table .col-quantity button {
  width: 20px;
  padding: 0;
  display: inline-block;
  box-shadow: none;
  margin: 0;
  padding: 0;
  background: transparent;
}
.modal table .col-quantity input {
  box-shadow: unset;
  margin: 5px;
}
table {
  border-collapse: collapse;
}
.modal .footer-modal {
  position: absolute;
  height: 10%;
  bottom: 1%;
  right: 5%;
  width: 40%;
  border-radius: 20px;
  background: #ffff;
  transform: scale(0);
  transition: 0.3s;
  transition-delay: 0.2s;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.modal .footer-modal.active {
  transform: scale(1);
}
.modal .footer-modal button {
  width: 150px;
  margin: 10px;
  background: #000;
  color: #ff60ff;
}
</style>
