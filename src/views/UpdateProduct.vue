!
<template>
  <main>
    <div class="heading">
      <h1>Sửa sản phẩm</h1>
    </div>
    <form @submit.prevent="submit()" v-if="item">
      <label>Tên sản phẩm:</label>
      <input type="text" placeholder="Nhập tên sản phẩm" v-model="item.name" />

      <label>Giá:</label>
      <input
        type="number"
        placeholder="Nhập giá sản phẩm"
        v-model="item.price"
      />

      <label>Giá giảm:</label>
      <input
        type="number"
        placeholder="Nhập giá giảm"
        v-model="item.price_sale"
      />

      <label>Màu sắc:</label>
      <input
        v-for="(x, index) in listColor"
        :key="index"
        type="text"
        placeholder="Nhập màu sắc"
        v-model="listColor[index]"
      />
      <span @click="addList()" class="btnAdd"
        ><i class="fa-solid fa-plus"></i
      ></span>
      <span v-if="listColor.length >= 2" @click="removeList()" class="btnRemove"
        ><i class="fa-solid fa-minus"></i
      ></span>
      <label>Kích thước:</label>
      <input
        v-for="(x, index) in listSize"
        :key="index"
        type="text"
        placeholder="Nhập kích thước"
        v-model="listSize[index]"
      />

      <label>Hình ảnh:</label>
      <div class="form-fil" v-for="(x, index) in listImage" :key="index">
        <label :for="index" class="file">{{ x }}</label>
        <input
          :id="index"
          @change="changImg($event, index)"
          type="file"
          v-show="false"
        />
      </div>

      <label>Tồn kho:</label>
      <input
        type="number"
        placeholder="Nhập số lượng tồn kho"
        v-model="item.inventory"
      />

      <label>Giới tính:</label>
      <select v-model="item.sex">
        <option value="Nam">Nam</option>
        <option value="Nữ">Nữ</option>
        <option value="Unisex">Unisex</option>
      </select>

      <div class="error">
        <div class="item" v-for="(x, index) in error" :key="index">{{ x }}</div>
      </div>
      <button>Cập nhật</button>
    </form>
  </main>
</template>

<script>
import { computed, reactive } from "vue";
import { setProduct } from "../configs/firebase";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const error = reactive([]);

    const item = computed(() => store.getters.getProductID(route.params.id));
    const listColor = computed(() => item.value.color);
    const listSize = computed(() => item.value.size);
    const listImage = computed(() => item.value.image);

    async function submit() {
      this.error.splice(0, this.error.length);
      if (
        this.item.name == "" ||
        this.item.price == null ||
        this.item.price_sale == null ||
        this.item.inventory == null ||
        this.item.sex == ""
      ) {
        this.error.push("Vui lòng nhập đầy đủ thông tin");
      } else {
        for (let i = 0; i < this.listColor.length; i++) {
          if (this.listColor[i] == "") {
            this.error.push("Vui lòng nhập đầy đủ màu sắc");
            break;
          }
        }
        for (let i = 0; i < this.listImage.length; i++) {
          if (this.listImage[i] == "") {
            this.error.push("Vui lòng chọn đầy đủ hình ảnh");
            break;
          }
        }
        for (let i = 0; i < this.listSize.length; i++) {
          if (this.listSize[i] == "") {
            this.error.push("Vui lòng nhập đầy đủ kích thước");
            break;
          }
        }
        if (this.item.price <= 0 || this.price < this.price_sale) {
          this.error.push("Vui lòng nhập lại giá");
        }
        if (this.price_sale <= 0) {
          this.error.push("Vui lòng nhập lại giá giảm");
        }
        if (this.item.inventory <= 0) {
          this.error.push("Vui lòng nhập giá số lượng tồn kho");
        }
      }

      if (this.error.length == 0) {
        setProduct(route.params.id, this.item);
        alert("Cập nhật sản phẩm thành công");
        window.location.reload();
      }
    }

    function addList() {
      this.listColor.push("");
      this.listImage.push("");
      this.listSize.push("");
    }
    function changImg(e, index) {
      this.listImage[index] = e.target.files[0].name;
    }

    function removeList() {
      this.listColor.splice(this.listColor.length - 1, 1);
      this.listImage.splice(this.listImage.length - 1, 1);
      this.listSize.splice(this.listSize.length - 1, 1);
    }

    return {
      listColor,
      listSize,
      listImage,
      item,
      submit,
      addList,
      changImg,
      error,
      removeList,
    };
  },
};
</script>

<style scoped>
main {
  width: 1200px;
  margin: auto;
}
.heading {
  text-align: center;
  font-weight: 400;
  font-size: 20px;
}
form {
  width: 100%;
  margin: 30px auto;
  position: relative;
}
input,
select {
  width: 100%;
  height: 40px;
  background: #e0e0e0;
  color: #000;
  margin: 10px auto;
  line-height: 40px;
  text-align: center;
}
button {
  width: 100%;
  height: 40px;
  margin: 20px auto;
  background: #000;
  color: #ff60ff;
}
label {
  margin-left: 10px;
}
.file {
  margin: 10px auto;
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
  border-radius: 10px;
  cursor: pointer;
}
.btnAdd {
  position: absolute;
  right: 0;
  width: 30px;
  height: 30px;
  transform: translate(40px, -45px);
  text-align: center;
  line-height: 30px;
  color: #fff;
  border-radius: 50%;
  display: block;
  background: #000;
  cursor: pointer;
  margin-bottom: 10px;
}
.btnRemove {
  position: absolute;
  right: 0;
  width: 30px;
  height: 30px;
  transform: translate(80px, -45px);
  text-align: center;
  line-height: 30px;
  color: #fff;
  border-radius: 50%;
  display: block;
  background: #000;
  cursor: pointer;
  margin-bottom: 10px;
}
.error {
  color: #f33;
  text-align: center;
}
.error .item {
  height: 40px;
  line-height: 40px;
}
</style>
