<template>
  <div class="filter-card">
    <h3 class="filter-title">Цена</h3>

    <div class="price-inputs">
      <PriceInput
          v-model="from"
          placeholder="от"
          class="price-input"
      />
      <span class="dash">–</span>
      <PriceInput
          v-model="to"
          placeholder="до"
          class="price-input"
      />
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import PriceInput from '@/components/ui/PriceInput.vue'

const props = defineProps({
  priceRange: {
    type: Array,
    default: () => [0, 0]
  }
})

const emit = defineEmits(['update:priceRange'])

const from = ref(props.priceRange[0])
const to = ref(props.priceRange[1])

watch([from, to], () => {
  emit('update:priceRange', [from.value, to.value])
})
</script>

<style scoped lang="scss">

.filter-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter-title {
  @include font-pt($fw-700,$fs-lg);
  margin-bottom: 16px;
}

.price-inputs {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;

  .price-input {
    flex: 1;
  }

  .dash {
    color: #D5D5D5;
    font-size: 16px;
    line-height: 1;
    user-select: none;
    width: 16px;
    text-align: center;
    flex-shrink: 0;
  }
}
</style>
