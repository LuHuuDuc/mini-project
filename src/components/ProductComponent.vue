!
<template>
  <main>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Giá sale</th>
            <th>Màu sắc</th>
            <th>Kích thước</th>
            <th>Hình ảnh</th>
            <th>Tồn kho</th>
            <th>Đã bán</th>
            <th>Đánh giá</th>
            <th>
              <router-link class="col" :to="{ name: 'manager_product' }"
                >Thêm sản phẩm</router-link
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ $filters.formatCurrent(item.price) }}</td>
            <td>{{ $filters.formatCurrent(item.price_sale) }}</td>
            <td>
              <select>
                <option
                  v-for="(x, index) in item.color"
                  :key="index"
                  :value="x"
                >
                  {{ x }}
                </option>
              </select>
            </td>
            <td>
              <select>
                <option v-for="(x, index) in item.size" :key="index" :value="x">
                  {{ x }}
                </option>
              </select>
            </td>
            <td>
              <select>
                <option
                  v-for="(x, index) in item.image"
                  :key="index"
                  :value="x"
                >
                  {{ x }}
                </option>
              </select>
            </td>
            <td>{{ item.inventory }}</td>
            <td>{{ item.sell_number }}</td>
            <td>{{ item.rate }}</td>
            <td>
              <router-link class="btnUpdate" :to="{ name : 'updateProduct', params : {id : item.id} }">Sửa</router-link>
              <button @click="removeProduct(item.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { deleteProduct } from "../configs/firebase";
export default {
  setup() {
    const store = useStore();

    const data = computed(() => store.state.products);

    function removeProduct(id) {
      if (confirm("Bạn có chắc muốn xóa sản phẩm này")) {
        deleteProduct(id);
        alert("Xóa sản phẩm thành công thành công")
        window.location.reload();
      }
    }

    return {
      data,
      removeProduct,
    };
  },
};
</script>

<style scoped>
.container {
  height: 350px;
  overflow: auto;
  margin: 50px;
  position: relative;
}
.container::-webkit-scrollbar {
  overflow: hidden;
}
table {
  width: 100%;
  margin: auto;
  border-collapse: collapse;
  text-align: center;
}
table th:nth-child(1) {
  width: 30px;
}
table th:nth-child(2) {
  width: 100px;
  padding: 10px;
}
table th:last-child {
  width: 100px;
  padding-right: 15px;
}
table thead {
  position: sticky;
  top: 0;
  height: 50px;
  line-height: 50px;
  background: #e0e0e0;
}
table td {
  font-family: "Montagu Slab", serif;
  height: 150px;
}
table td:last-child {
  padding-right: 15px;
}
select {
  height: 40px;
}
td button {
  margin: 5px;
  margin-top: 20px;
}
th .col {
  color: #000;
  text-decoration: none;
  width: max-content;
  padding: 10px 5px;
  border-radius: 10px;
  font-weight: 400;
  transition: 0.3s;
  box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
}
th .col:hover {
  color: #ff60ff;
  background: #000;
}
.btnUpdate{
  padding: 10px 40px;
  background: #e0e0e0;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
  text-decoration: none;
  font-family: "Lobster", cursive;
  transition: 0.3s;
  color: #000;
}
.btnUpdate:hover{
  background: #000;
  color: #ff60ff;
}
</style>
