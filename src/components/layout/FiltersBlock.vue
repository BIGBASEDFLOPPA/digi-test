<template>
  <aside class="filters">
    <FiltersCategory :products="products" />
    <FiltersPrice
        :products="products"
        v-model:priceRange="selectedPriceRange"
    />
    <FiltersBrand
        :products="products"
        v-model:selectedBrands="selectedBrands"
    />
    <FiltersSize
        :products="products"
        v-model:selectedSizes="selectedSizes"
    />
  </aside>
</template>

<script setup>
import FiltersBrand from "@/components/filters/FiltersBrand.vue";
import FiltersPrice from "@/components/filters/FiltersPrice.vue";
import FiltersCategory from "@/components/filters/FiltersCategory.vue";
import FiltersSize from "@/components/filters/FiltersSize.vue";
import {ref, watch} from "vue";

const props = defineProps({
  products: Array
})

const emit = defineEmits([
  'update:selectedSizes',
  'update:selectedBrands',
  'update:priceRange'
])

const selectedSizes = ref([])
const selectedBrands = ref([])
const selectedPriceRange = ref([0, 0])

watch(selectedSizes, val => emit('update:selectedSizes', val))
watch(selectedBrands, val => emit('update:selectedBrands', val))
watch(selectedPriceRange, val => emit('update:priceRange', val))
</script>

<style lang="scss" scoped>
.filters {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  flex-shrink: 0;
  padding-right: 36px;
}
</style>
