!
<template>
  <main v-if="data.length > 0">
    <div class="list">
      <div class="card">
        <router-link
          class="col"
          :to="{ name: 'detail', params: { id: data[first].id } }"
        >
          <div class="heading-card">
            <img :src="require('@/assets/image/' + data[first].image[0])" />
          </div>
          <div class="bottom-card">
            <div class="price-sale">
              {{ $filters.formatCurrent(data[first].price_sale) }}
            </div>
            <div class="price-card">
              <strike>{{ $filters.formatCurrent(data[first].price) }}</strike>
            </div>
          </div>
        </router-link>
      </div>
      <div class="card">
        <router-link
          class="col"
          :to="{ name: 'detail', params: { id: data[second].id } }"
        >
          <div class="heading-card">
            <img :src="require('@/assets/image/' + data[second].image[0])" />
          </div>
          <div class="bottom-card">
            <div class="price-sale">
              {{ $filters.formatCurrent(data[second].price_sale) }}
            </div>
            <div class="price-card">
              <strike>{{ $filters.formatCurrent(data[second].price) }}</strike>
            </div>
          </div>
        </router-link>
      </div>
      <div class="card">
        <router-link
          class="col"
          :to="{ name: 'detail', params: { id: data[triple].id } }"
        >
          <div class="heading-card">
            <img :src="require('@/assets/image/' + data[triple].image[0])" />
          </div>
          <div class="bottom-card">
            <div class="price-sale">
              {{ $filters.formatCurrent(data[triple].price_sale) }}
            </div>
            <div class="price-card">
              <strike>{{ $filters.formatCurrent(data[triple].price) }}</strike>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="button-slide">
      <button id="one" v-if="first != 0" @click="start()">
        <i class="fa-solid fa-backward-fast"></i>
      </button>
      <button id="two" @click="pre()">
        <i class="fa-solid fa-backward"></i>
      </button>
      <button id="three" @click="next()">
        <i class="fa-solid fa-forward"></i>
      </button>
      <button id="four" v-if="triple != data.length - 1" @click="end()">
        <i class="fa-solid fa-forward-fast"></i>
      </button>
    </div>
  </main>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const first = ref(0);
    const second = ref(1);
    const triple = ref(2);
    const data = computed(() => store.state.products);

    function next() {
      if (this.triple < this.data.length - 1) {
        this.first += 1;
        this.second += 1;
        this.triple += 1;
      }
    }
    function pre() {
      if (this.first > 0) {
        this.first -= 1;
        this.second -= 1;
        this.triple -= 1;
      }
    }
    function start() {
      this.first = 0;
      this.second = 1;
      this.triple = 2;
    }
    function end() {
      this.first = this.data.length - 3;
      this.second = this.data.length - 2;
      this.triple = this.data.length - 1;
    }

    return {
      data,
      first,
      second,
      triple,
      next,
      pre,
      start,
      end,
    };
  },
};
</script>

<style scoped>
main {
  width: 1200px;
  margin: auto;
  margin-top: 30px;
}
.list {
  width: 100%;
  display: grid;
  grid-template-columns: 380px 380px 380px;
  column-gap: 30px;
  margin-bottom: 30px;
}
.col {
  text-decoration: none;
  color: #000;
}
.button-slide {
  height: 100px;
  width: 100%;
  position: relative;
}
.button-slide button {
  margin: 5px;
  position: absolute;
}
.button-slide #one {
  left: 380px;
}
.button-slide #two {
  left: 490px;
}
.button-slide #three {
  right: 490px;
}
.button-slide #four {
  right: 380px;
}
</style>
