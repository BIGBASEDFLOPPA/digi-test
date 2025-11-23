<template>
  <div class="products">
    <template v-if="loading">
      <div class="spinner-wrapper">
        <Spinner />
      </div>
    </template>

    <div v-else-if="!products.length" class="empty">Ничего не найдено</div>

    <template v-else>
      <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </template>
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'
import { defineProps } from "vue";
import Spinner from "@/components/ui/Spinner.vue";

const props = defineProps({
  products: Array,
  loading: Boolean
})
</script>

<style scoped lang="scss">
.products {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .spinner-wrapper, .empty {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
}
</style>
