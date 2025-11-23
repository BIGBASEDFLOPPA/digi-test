<template>
  <div class="catalog">
    <HeaderDesktop v-if="!isMobile" v-model="search" />
    <HeaderMobile v-if="isMobile" v-model="search" @back="handleBack"/>
    <p v-if="isMobile" class="mobile__title">Название категории</p>

    <div class="catalog__body">
      <FiltersBlock
          v-if="!isMobile"
          :products="products"
          v-model:selectedSizes="selectedSizes"
          v-model:selectedBrands="selectedBrands"
          v-model:priceRange="selectedPriceRange"
          v-model:selectedCategory="selectedCategory"
      />
      <ProductsList
          :products="filteredProducts"
          :loading="loading"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ProductsList from '@/components/products/ProductsList.vue'
import FiltersBlock from "@/components/layout/FiltersBlock.vue"
import HeaderDesktop from "@/components/layout/HeaderDesktop.vue"
import HeaderMobile from "@/components/layout/HeaderMobile.vue"
import { useProductFilters } from '@/composables/useProductFilters'

const search = ref('')
const selectedSizes = ref([])
const selectedBrands = ref([])
const selectedPriceRange = ref([0, 0])
const selectedCategory = ref('')

const products = ref([])
const loading = ref(true)

const isMobile = ref(window.innerWidth < 1000)
function handleResize() {
  isMobile.value = window.innerWidth < 1000
}
window.addEventListener('resize', handleResize)
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

const fetchProducts = async () => {
  try {
    const res = await fetch('https://mock.apidog.com/m1/1134295-1126375-default/products')
    products.value = await res.json()
  } catch (err) {
    console.error('Ошибка загрузки продуктов:', err)
  } finally {
    loading.value = false
  }
}
onMounted(fetchProducts)

const { filteredProducts } = useProductFilters(
    products,
    search,
    selectedSizes,
    selectedBrands,
    selectedPriceRange,
    selectedCategory
)

function handleBack() {
  console.log('Нажата кнопка назад')
}
</script>

<style scoped lang="scss">
.catalog__body {
  display: flex;
  flex-direction: row;
}

@media (max-width: 768px) {
  .catalog__body {
    flex-direction: column;
  }
}

.mobile__title {
  @include font-pt($fw-400, $fs-xxl);
}
</style>
