<template>
  <div class="filter-card">
    <h3 class="filter-title">Размер</h3>

    <div class="filter-list">
      <div
          v-for="size in sizes"
          :key="size"
          class="size-item"
      >
        <CheckboxItem
            :value="size"
            v-model:modelValue="selectedSizes"
        />
        <span class="size-count">{{ countBySize(size) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import CheckboxItem from "@/components/ui/CheckboxItem.vue"

const props = defineProps({
  products: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:selectedSizes'])

const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
const selectedSizes = ref([])

// Отправляем выбранные размеры родителю
watch(selectedSizes, val => emit('update:selectedSizes', val))

const countBySize = (size) => {
  return props.products.filter(p => p.sizes?.includes(size)).length
}
</script>

<style scoped lang="scss">
.filter-card {
  display: flex;
  flex-direction: column;
}

.filter-title {
  @include font-pt($fw-700, $fs-lg);
  margin-bottom: 16px;
  text-align: center;
}

.filter-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-right: 6px;
}

.size-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.size-count {
  font-size: 12px;
  color: #999;
  padding-right: 8px;
}
</style>
