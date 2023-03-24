import { createStore } from "vuex";
import { list, setProduct } from "@/configs/firebase";
const store = createStore({
  state() {
    return {
      products: [],
      cart: [],
      comment: [],
      inCart: 0,
      total: 0,
    };
  },
  getters: {
    getProductID: (state) => (id) => {
      return state.products.find((item) => item.id === id);
    },
    getProducts: (state) => (value, sort, category, min, max) => {
      return state.products
        .filter((item) =>
          item.name.toLowerCase().includes(category.toLowerCase())
        )
        .filter((item) => item.price_sale >= min && item.price_sale <= max)
        .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        .sort((a, b) => {
          if (sort == 1) {
            return a["price_sale"] - b["price_sale"];
          } else {
            return b["price_sale"] - a["price_sale"];
          }
        });
    },
    getComment: (state) => (id) =>{
      return state.comment.filter((doc) => doc.id_product === id)
    }
  },
  mutations: {
    setProducts(state, productsInput) {
      state.products = productsInput;
    },

    addToCart(state, item) {
      const product = state.products.find((doc) => doc.id === item.id);
      const cart = state.cart;

      state.inCart += item.quantity
      state.total += item.quantity * product.price_sale

      product.inventory -= item.quantity;
      product.sell_number += item.quantity

      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price_sale,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
        image: item.image,
        total: item.quantity * product.price_sale,
        list_color: product.color,
        list_image: product.image,
        list_size: product.size,
      });

      for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < cart.length; j++) {
          if (
            j > i &&
            cart[j].id == cart[i].id &&
            cart[j].color == cart[i].color &&
            cart[j].size == cart[i].size
          ) {
            cart[i].quantity += item.quantity;
            cart[i].total = cart[i].quantity * cart[i].price;
            cart.splice(j, 1);
            break;
          }
        }
      }
    },

    updateColor(state, item){
      const cart = state.cart.find(doc => doc === item.item);
      const carts = state.cart

      cart.color = item.item.list_color[item.index]
      cart.image = item.item.list_image[parseInt(item.index)+1]

      for (let i = 0; i < carts.length; i++) {
        for (let j = 0; j < carts.length; j++) {
          if (
            j > i &&
            carts[j].id == carts[i].id &&
            carts[j].color == carts[i].color &&
            carts[j].size == carts[i].size
          ) {
            carts[i].quantity += carts[j].quantity;
            carts[i].total = carts[i].quantity * carts[i].price;
            carts.splice(j, 1);
            break;
          }
        }
      }

    },

    updateSize(state, item){
      const cart = state.cart.find(doc => doc === item.item);
      const carts = state.cart
      cart.size = item.value

      for (let i = 0; i < carts.length; i++) {
        for (let j = 0; j < carts.length; j++) {
          if (
            j > i &&
            carts[j].id == carts[i].id &&
            carts[j].color == carts[i].color &&
            carts[j].size == carts[i].size
          ) {
            carts[i].quantity += carts[j].quantity;
            carts[i].total = carts[i].quantity * carts[i].price;
            carts.splice(j, 1);
            break;
          }
        }
      }
    },

    minusQuantity(state, item){
      const cart = state.cart.find(doc => doc === item);
      const product = state.products.find(doc => doc.id === cart.id && doc.color === cart.list_color && doc.size === cart.list_size)
      
      product.inventory += 1
      product.sell_number -= 1 

      cart.quantity -= 1
      cart.total = cart.quantity*cart.price

      state.inCart -= 1
      state.total -= product.price_sale

      if(cart.quantity == 0){
        const index = state.cart.indexOf(cart)
        state.cart.splice(index,1)
      }

    },

    plusQuantity(state, item){
      const cart = state.cart.find(doc => doc === item);
      const product = state.products.find(doc => doc.id === cart.id && doc.color === cart.list_color && doc.size === cart.list_size)
      
      if(product.inventory > 0){
        product.inventory -= 1
        product.sell_number += 1 
  
        cart.quantity += 1
        cart.total = cart.quantity*cart.price

        state.inCart += 1
        state.total += cart.price
      }
      else{
        alert("Sản phẩm đã hết hàng")
      }

    },

    removeItem(state, item){
      const cart = state.cart.find(doc => doc === item);
      const product = state.products.find(doc => doc.id === cart.id && doc.color === cart.list_color && doc.size === cart.list_size)

      product.inventory += cart.quantity
      product.sell_number -= cart.quantity 

      state.inCart -= cart.quantity
      state.total -= cart.total

      state.cart.splice(state.cart.indexOf(cart), 1)
    },

    removeAll(state){
      for(let i = 0; i < state.products.length; i++){
        for(let j = 0; j < state.cart.length; j++){
          if(state.products[i].id === state.cart[j].id){
            state.products[i].inventory += state.cart[j].quantity
            state.products[i].sell_number -= state.cart[j].quantity
          }
        }
      }

      state.cart.splice(0, state.cart.length)
      state.inCart = 0;
      state.total = 0
    },

    pay(state){
      for(let i = 0; i < state.products.length; i++){
        setProduct(state.products[i].id, state.products[i])
      }

      state.cart.splice(0, state.cart.length)
      state.inCart = 0;
      state.total = 0
    },

    addComment(state, item){
      state.comment.push({
        id: state.comment.length+1,
        id_product: item.id,
        email: item.email,
        content: item.content,
        rating: item.rating
      })

      console.log(state.comment)

      const product = state.products.find(doc => doc.id === item.id)
      const listRate = this.getters.getComment(item.id)
      let numberRating = 0
      for(let i = 0; i < listRate.length; i++){
        numberRating += listRate[i].rating
      }
      product.rate = Math.floor(numberRating/listRate.length)

      setProduct(product.id, product)
    },

    removeComment(state, id){
      const item = state.comment.find(doc => doc.id === id)
      state.comment.splice(state.comment.indexOf(item), 1)
    }

  },
  actions: {
    async getProducts({ commit }) {
      const db = await list;
      commit("setProducts", db);
    },
  },
});
export default store;
