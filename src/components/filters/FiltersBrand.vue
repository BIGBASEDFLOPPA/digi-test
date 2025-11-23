<template>
  <div class="filter-card">
    <div class="filter-header">
      <h3 class="filter-title">Бренд</h3>
      <button class="filter-clear" @click="filterName = ''">Очистить</button>
    </div>

    <SearchInput v-model="filterName" placeholder="Поиск бренда..." class="filter-brand__search"/>

    <div class="filter-list">
      <div
          v-for="b in filtered"
          :key="b"
          class="brand-item"
      >
        <CheckboxItem :value="b" v-model:modelValue="selected"/>
        <span class="brand-count">{{ countByBrand(b) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, watch} from 'vue'
import SearchInput from "@/components/ui/SearchInput.vue"
import CheckboxItem from "@/components/ui/CheckboxItem.vue"

const props = defineProps({
  products: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:selectedBrands'])

const brands = ['Бренд1', 'Бренд2', 'Бренд3', 'Бренд4', 'Бренд5', 'Бренд6', 'Бренд7', 'Бренд8', 'Бренд9', 'Бренд10']
const filterName = ref('')
const selected = ref([])

watch(selected, val => emit('update:selectedBrands', val))

const filtered = computed(() =>
    brands.filter(b =>
        b.toLowerCase().includes(filterName.value.toLowerCase())
    )
)

const countByBrand = (brand) => {
  return props.products.filter(p => p.brand === brand).length
}
</script>

<style scoped lang="scss">
.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.filter-title {
  @include font-pt($fw-700, $fs-lg);
}

.filter-clear {
  font-size: 12px;
  text-decoration: underline;
  color: #AAAAAA;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.filter-brand__search {
  height: 36px;
}

.filter-list {
  display: flex;
  flex-direction: column;
  height: 180px;
  overflow-y: auto;
  margin-top: 16px;
  gap: 12px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-button {
    display: none;
    height: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #CBCBCB;
    border-radius: 4px;
  }
}

.brand-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-count {
  padding-right: 8px;
  font-size: 12px;
  color: #999;
}
</style>
