!
<template>
  <header-component></header-component>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
export default {
  components: {
    HeaderComponent,
  },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("getProducts"));
  },
};
</script>

<style scoped>
main {
  width: 1200px;
  margin: 50px auto;
}
</style>
