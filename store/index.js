import { fetchCartItems } from "~/api"

export const state = () => ({
  cartItems : [],
})

export const mutations = {
  addCartItem(state, cartItem){
    state.cartItems.push({...cartItem, imageUrl : `${cartItem.imageUrl}?random=${Math.random()}`})
  },
  setCartItems(state, cartItems){
    state.cartItems = cartItems
  }
  
}

export const actions = {
  async FETCH_CART_ITEMS({commit}){
    const res = await fetchCartItems()
    commit('setCartItems', res.data.map((item) => ({
      ...item,
      imageUrl : `${item.imageUrl}?random=${Math.random()}`
    })))
  },

  // async nuxtServerInit(storeContext, nuxtContext){
  //   storeContext.dispatch('FETCH_CART_ITEMS')
  // },
}