<template>
  <aside class="filters">
    <FiltersCategory
        :products="products"
        :selectedCategory="selectedCategory"
        @update:selectedCategory="$emit('update:selectedCategory', $event)"
    />
    <FiltersPrice
        :products="products"
        :priceRange="priceRange"
        @update:priceRange="$emit('update:priceRange', $event)"
    />
    <FiltersBrand
        :products="products"
        :selectedBrands="selectedBrands"
        @update:selectedBrands="$emit('update:selectedBrands', $event)"
    />
    <FiltersSize
        :products="products"
        :selectedSizes="selectedSizes"
        @update:selectedSizes="$emit('update:selectedSizes', $event)"
    />
  </aside>
</template>

<script setup>
import FiltersBrand from "@/components/filters/FiltersBrand.vue";
import FiltersPrice from "@/components/filters/FiltersPrice.vue";
import FiltersCategory from "@/components/filters/FiltersCategory.vue";
import FiltersSize from "@/components/filters/FiltersSize.vue";

const props = defineProps({
  products: Array,
  selectedSizes: Array,
  selectedBrands: Array,
  priceRange: Array,
  selectedCategory: String
})

const emit = defineEmits([
  'update:selectedSizes',
  'update:selectedBrands',
  'update:priceRange',
  'update:selectedCategory'
])
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
