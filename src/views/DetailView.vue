!
<template>
  <main>
    <div class="container" v-if="data">
      <div class="info-product">
        <div class="left">
          <div class="img">
            <img :src="require('@/assets/image/' + data.image[selectImg])" />
          </div>
        </div>
        <div class="right">
          <div class="name">{{ data.name }}</div>
          <div class="rate">
            <label>Đánh giá: </label> <span v-if="data.rate == 0">Chưa có đánh giá</span>
            <i v-for="x, index in data.rate" :key="index" class="fa-solid fa-star"></i>({{ data.rate }})
          </div>
          <div class="price">
            {{ $filters.formatCurrent(data.price_sale) }}
            <strike>{{ $filters.formatCurrent(data.price) }}</strike>
          </div>
          <div class="sell_number">
            <label>Đã bán: </label>
            <span>{{ data.sell_number }} sản phẩm</span>
          </div>
          <div class="color">
            <label>Màu sắc:</label>
            <div class="list">
              <div
                class="item"
                v-for="(item, index) in data.color"
                :key="index"
              >
                <button
                  :class="{ active: index == selectImg - 1 }"
                  @click="selectColor(index)"
                >
                  {{ item }}
                </button>
              </div>
            </div>
          </div>
          <div class="size">
            <label>Kích cỡ:</label>
            <div class="list">
              <div class="item" v-for="(item, index) in data.size" :key="index">
                <button
                  @click="chooseSize(index)"
                  :class="{ active: index == isChooseSize }"
                >
                  {{ item }}
                </button>
              </div>
            </div>
          </div>
          <div class="quantity">
            <label>Số lượng:</label>
            <input
              type="number"
              required
              min="1"
              :max="data.inventory"
              v-model="quantity"
            />
          </div>
          <div class="inventory">
            <label>Kho: </label>
            <span>{{ data.inventory }} sản phẩm</span>
          </div>
          <div class="button">
            <button :disabled="data.inventory == 0" @click="addToCart()">
              {{ innerButtonAddCart }}
            </button>
          </div>
          <div class="error">
            <div class="list" v-for="(item, index) in error" :key="index">
              <div class="item">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <div class="heading">Bình luận</div>
        <div class="body">
          <form>
            <label>Đánh giá:</label>
            <div class="rating">
              <div class="emotion">
                <i
                  v-if="comment.rating == 1"
                  style="color: #f33"
                  class="fa-regular fa-face-angry"
                ></i>
                <i
                  v-if="comment.rating == 2"
                  style="color: #000"
                  class="fa-regular fa-face-meh-blank"
                ></i>
                <i
                  v-if="comment.rating == 3"
                  style="color: orange"
                  class="fa-regular fa-face-meh"
                ></i>
                <i
                  v-if="comment.rating == 4"
                  style="color: #03f"
                  class="fa-regular fa-face-kiss"
                ></i>
                <i
                  v-if="comment.rating == 5"
                  style="color: green"
                  class="fa-regular fa-face-kiss-wink-heart"
                ></i>
              </div>
              <h1>{{ innerRating[comment.rating-1] }}</h1>
              <div class="list-star">
                <i
                  v-for="(x, index) in 5"
                  :key="index"
                  class="fa-solid fa-star"
                  :class="{ active: x <= comment.rating }"
                  @click="rating(x)"
                ></i>
              </div>
            </div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Nhập email"
              v-model="comment.email"
            />
            <label>Nội dung:</label>
            <input
              type="text"
              placeholder="Nhập nội dung"
              v-model="comment.content"
              @keyup.enter="addComment()"
            />
          </form>
          <div class="list">
            <div class="item" v-for="item in listComment" :key="item.id">
              <div class="email">
                <img src="../assets/image/logo-cmt.png" /> {{ item.email }} <i v-for="x, index in item.rating" :key="index" class="fa-solid fa-star"></i>
              </div>
              <div class="content">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const selectImg = ref(0);
    const isChooseSize = ref(0);
    const isChooseColor = ref(null);
    const quantity = ref(1);
    const error = reactive([]);
    const comment = reactive({
      id: route.params.id,
      email: "",
      content: "",
      rating: 5
    });
    const innerRating = reactive([
      "Rất tệ",
      "Tệ",
      "Bình thường",
      "Khá tốt",
      "Rất tốt",
    ]);
    const data = computed(() => store.getters.getProductID(route.params.id));
    const listComment = computed(() =>
      store.getters.getComment(route.params.id)
    );
    const innerButtonAddCart = computed(() => {
      if (data.value.inventory == 0) {
        return "Sản phẩm hết hàng";
      } else {
        return "Thêm vào giỏ hàng";
      }
    });

    function selectColor(e) {
      this.selectImg = e + 1;
      this.isChooseColor = e;
    }
    function chooseSize(e) {
      this.isChooseSize = e;
    }

    function addToCart() {
      this.error.splice(0, this.error.length);
      if (this.isChooseColor == null) {
        this.error.push("Vui lòng chọn màu sắc");
      }
      if (
        this.quantity < 1 ||
        this.quantity > this.data.inventory ||
        this.quantity == ""
      ) {
        this.error.push(
          "Vui lòng chọn số lượng từ 1 đến ".concat(this.data.inventory)
        );
      }
      if (this.error.length == 0) {
        store.commit("addToCart", {
          id: route.params.id,
          quantity: quantity.value,
          size: this.data.size[isChooseSize.value],
          color: this.data.color[isChooseColor.value],
          image: this.data.image[selectImg.value],
        });

        this.quantity = 1;
      }
    }

    function addComment() {
      if (this.comment.email == "" || this.comment.content == "") {
        alert("Vui lòng nhập đầy đủ thông tin");
      } else {
        const regex = () =>
          /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(this.comment.email);
        if (regex()) {
          store.commit("addComment", this.comment);
          this.comment.email = "";
          this.comment.content = "";
          alert("Bình luận thành công");
        } else {
          alert("Email không đúng định dạng");
        }
      }
    }

    function rating(e) {
      console.log(this.innerRating);
      this.comment.rating = e;
    }

    return {
      data,
      selectImg,
      selectColor,
      isChooseSize,
      chooseSize,
      error,
      addToCart,
      isChooseColor,
      quantity,
      innerButtonAddCart,
      comment,
      addComment,
      listComment,
      rating,
      innerRating,
    };
  },
};
</script>

<style scoped>
main {
  width: 1200px;
  margin: auto;
}
.container {
  font-family: "Montagu Slab", serif;
}
.info-product {
  width: 100%;
  display: grid;
  grid-template-columns: 34% 64%;
  column-gap: 2%;
}
.info-product .left {
  width: 100%;
  overflow: hidden;
  height: 550px;
  border-radius: 50px;
  background: #e6e6e6;
  box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
}
.info-product .left .img {
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
}
.info-product .left .img img {
  width: 100%;
  transition: 0.3s;
  cursor: pointer;
}
.info-product .left .img img:hover {
  transform: scale(1.2);
}
.info-product .right {
  width: 100%;
}
.info-product .right .name {
  font-size: 40px;
  margin-left: 50px;
  margin-bottom: 10px;
  font-weight: bold;
}
.info-product .right .price {
  margin: 10px 50px;
  font-size: 30px;
  font-weight: bold;
  width: max-content;
  background: #000;
  color: #ff60ff;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
}
.info-product .right .rate{
  margin: 15px 50px;
  margin-bottom: 10px;
}
.info-product .right .rate i{
  color: #fc0;
  font-size: 20px;
}
.info-product .right .sell_number{
  margin: 15px 50px;
  margin-bottom: 10px;
}
.info-product .right .price strike {
  color: #999;
  font-size: 20px;
  font-weight: 400;
}
.info-product .right .color {
  width: 100%;
  margin-left: 50px;
  margin-bottom: 10px;
}
.info-product .right .color .list {
  display: flex;
  margin-top: 5px;
}
.info-product .right .color .list button {
  box-shadow: unset;
  border: 1px solid #000;
  margin-right: 5px;
  transition: 0.3s;
}
.info-product .right .color .list button.active,
.info-product .right .color .list button:hover {
  background: #000;
  color: #ff60ff;
  box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
}
.info-product .right .size {
  margin-left: 50px;
}
.info-product .right .size .list {
  margin-top: 5px;
  display: flex;
}
.info-product .right .size .list button {
  margin-right: 5px;
  transition: 0.3s;
  box-shadow: unset;
  border: 1px solid #000;
}
.info-product .right .size .list button.active,
.info-product .right .size .list button:hover {
  background: #000;
  color: #ff60ff;
  box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
}
.info-product .right .quantity {
  margin: 10px 50px;
}
.info-product .right .quantity input {
  width: 100px;
  margin-top: 5px;
  padding: 10px 24px;
  background: #000;
  color: #ff60ff;
}
.info-product .right .inventory {
  margin: 10px 50px;
}
.info-product .right .button {
  margin: 30px 0px 10px 50px;
  text-align: center;
}
.info-product .right .button button {
  width: 100%;
  background: #000;
  color: #ff60ff;
}
.info-product .right .error {
  text-align: center;
  border-radius: 10px;
  width: calc(100% -50px);
  margin-left: 50px;
}
.info-product .right .error .item {
  height: 30px;
  line-height: 30px;
  color: #f33;
  font-family: "Lobster", cursive;
}
.comment {
  width: 100%;
  margin: 50px auto;
  box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
  border-radius: 20px;
  overflow: hidden;
}
.comment .heading {
  width: 100%;
  background: #000;
  color: #ff60ff;
  text-align: center;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  font-family: "Lobster", cursive;
  font-size: 20px;
}
.comment .body {
  width: 100%;
  min-height: 400px;
}
.comment .body form {
  width: 90%;
  margin: 30px auto;
}
.comment .body form .rating {
  width: 100%;
  height: 400px;
  background: #e0e0e0;
  margin: 10px auto;
  box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
  border-radius: 20px;
}
.comment .body form .rating h1 {
  text-align: center;
}
.comment .body form .rating .emotion {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.comment .body form .rating .emotion i {
  font-size: 100px;
  margin-top: 50px;
}
.comment .body form .list-star {
  display: flex;
  justify-content: center;
  font-size: 50px;
}
.comment .body form .list-star i {
  margin: 50px 5px;
  cursor: pointer;
}
.comment .body form .list-star i.active {
  color: #fc0;
}
.comment .body form label {
  font-family: "Lobster", cursive;
  font-size: 20px;
}
.comment .body form input {
  width: 100%;
  height: 40px;
  padding: 0;
  background: #e0e0e0;
  margin: 10px auto;
  font-size: 16px;
}
.comment .body form input:valid {
  color: #000;
}
.comment .body .list {
  width: 90%;
  height: 300px;
  overflow: auto;
  margin: 30px auto;
}
.comment .body .list::-webkit-scrollbar {
  overflow: hidden;
}
.comment .body .list .item {
  margin: 30px auto;
  margin-left: 30px;
}
.comment .body .list .item .email {
  display: flex;
  align-items: center;
}
.comment .body .list .item .email i {
  color: #fc0;
}
.comment .body .list .item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
}
.comment .body .list .item .content {
  margin-left: 65px;
}
</style>
