<template>
  <div class="list=wrapper">
    <ul>
      <li class="list-item" v-for="(cartItem, i) in $store.state.cartItems" :key="i">
        <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name"/>
        <div class="description">
          <p>{{cartItem.name}}</p>
          <span>{{cartItem.price}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async fetch(){
    await this.$store.dispatch('FETCH_CART_ITEMS')
  },
}
</script>

<style scoped>
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
</style>