<template>
  <div class="container">
    <h1 class="list-title">Cart Page</h1>
      <CartList/>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/CartList'
export default {
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>