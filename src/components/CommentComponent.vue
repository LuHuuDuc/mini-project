!
<template>
  <main>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Mã sản phẩm</th>
            <th>Email</th>
            <th>Nội dung</th>
            <th>Đánh giá</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.id_product }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.content }}</td>
            <td>{{ item.rating }}</td>
            <td><button @click="removeComment(item.id)">Xóa</button></td>
          </tr>
          <tr>
            <td v-if="data.length == 0" colspan="7" style="font-family: 'Lobster', cursive;"><h3>Không có bình luận nào</h3></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const data = computed(() => store.state.comment);

    function removeComment(id){
        if(confirm("Bạn có chắc muốn bình luận này không?")){
            store.commit("removeComment", id)
        }
    }

    return {
      data,
      removeComment
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
  border-collapse: collapse;
  text-align: center;
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
  height: 50px;
}
</style>
