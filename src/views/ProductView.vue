!
<template>
  <main>
    <div class="container">
      <div class="left">
        <h1 v-if="data.length == 0">Không tìm thấy kết quả</h1>
        <div class="grid-product">
          <div class="card" v-for="item in data" :key="item.id">
            <router-link
              class="col"
              :to="{ name: 'detail', params: { id: item.id } }"
            >
              <div class="heading-card">
                <img :src="require('@/assets/image/' + item.image[0])" />
              </div>
              <div class="bottom-card">
                <div class="price-sale">
                  {{ $filters.formatCurrent(item.price_sale) }}
                </div>
                <div class="price-card">
                  <strike>{{ $filters.formatCurrent(item.price) }}</strike>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="search">
          <label for="search">Tìm kiếm sản phẩm:</label>
          <input
            id="search"
            type="search"
            v-model="valueSearch"
            placeholder="Nhập tên sản phẩm"
            required
          />
        </div>
        <div class="sort">
          <label>Sắp xếp:</label>
          <button @click="sort()">{{ innerButtonSort }}</button>
        </div>
        <div class="category">
          <label for="">Danh mục:</label>
          <div class="list">
            <button @click="category()">{{ innerCategory }}</button>
          </div>
        </div>
        <div class="filter-range">
          <label>Lọc theo giá</label>
          <div class="range">
            <span>{{ $filters.formatCurrent(min) }}</span>
            <input
              class="min"
              type="range"
              step="1"
              min="100000"
              max="200000"
              v-model="min"
            />
            <input
              class="max"
              type="range"
              step="1"
              min="250000"
              max="500000"
              v-model="max"
            />
            <span>{{ $filters.formatCurrent(max) }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const valueSearch = ref("");
    const sortAs = ref(1);
    const innerButtonSort = ref("Tăng dần theo giá");
    const innerCategory = ref("Tất cả");
    const categoryValue = ref("");
    const min = ref(1000);
    const max = ref(500000);

    const data = computed(() =>
      store.getters.getProducts(
        valueSearch.value,
        sortAs.value,
        categoryValue.value,
        min.value,
        max.value
      )
    );

    function sort() {
      this.sortAs = this.sortAs == 1 ? -1 : 1;
      this.innerButtonSort =
        this.innerButtonSort == "Tăng dần theo giá"
          ? "Giảm dần theo giá"
          : "Tăng dần theo giá";
    }
    function category() {
      this.categoryValue =
        this.categoryValue == ""
          ? "Nam"
          : this.categoryValue == "Nam"
          ? "Nữ"
          : this.categoryValue == "Nữ"
          ? "Unisex"
          : "";
      this.innerCategory =
        this.innerCategory == "Tất cả"
          ? "Nam"
          : this.innerCategory == "Nam"
          ? "Nữ"
          : this.innerCategory == "Nữ"
          ? "Unisex"
          : "Tất cả";
    }


    return {
      data,
      valueSearch,
      innerButtonSort,
      sort,
      sortAs,
      innerCategory,
      category,
      categoryValue,
      min,
      max,
    };
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 80% 20%;
}
.left {
  position: relative;
}
.left .grid-product {
  display: grid;
  grid-template-columns: 306.6666666666667px 306.6666666666667px 306.6666666666667px;
  column-gap: 20px;
}
.left h1 {
  width: 100%;
  margin: 200px auto;
  text-align: center;
}
.left .card {
  height: 350px;
  margin-bottom: 20px;
}
.left .navigation {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.left .navigation button {
  width: 70px;
  margin: 5px;
  text-align: center;
}
.left .page {
  position: absolute;
  right: 20px;
}
.col {
  text-decoration: none;
  color: #000;
}
.right {
  width: 100%;
  text-align: center;
}
.right .search {
  width: 80%;
  margin: auto;
}
.right .search input {
  width: 100%;
  padding: 10px 24px;
  margin-top: 5px;
}
.right .sort {
  width: 80%;
  margin: 10px auto;
}
.right .sort button {
  display: block;
  width: 100%;
  margin-top: 5px;
}
.right .category {
  width: 80%;
  margin: 10px auto;
}
.right .category button {
  width: 100%;
  margin-top: 5px;
}
.right .filter-range {
  width: 80%;
  margin: 10px auto;
}
.right .filter-range .range {
  position: relative;
  width: 100%;
  height: 10px;
  background: #000;
  border-radius: 20px;
  margin-top: 5px;
}
.right .filter-range .range input {
  padding: 0px;
  box-shadow: unset;
  -webkit-appearance: none;
  position: absolute;
  height: 20px;
  width: 45%;
  background: unset;
  top: -7px;
}
.right .filter-range .range input:nth-child(2) {
  left: 0;
}
.right .filter-range .range .max {
  right: 0;
}
.right .filter-range .range input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, #ff60ff 0px 0px 0px 3px;
}
.right .filter-range .range span {
  position: absolute;
}
.right .filter-range .range span:nth-child(1) {
  left: 0;
  bottom: -30px;
}
.right .filter-range .range span:nth-child(4) {
  right: 0;
  bottom: -30px;
}
</style>
