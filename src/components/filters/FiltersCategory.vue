<template>
  <div class="filter-card">
    <div class="category-label " @click="toggleMain">
      <span>{{ mainCategoryLabel }}</span>
      <span class="category-count">{{ products.length }}</span>
    </div>

    <transition name="slide-fade">
      <ul v-if="openMain" class="subcategory-list">
        <li
            v-for="cat in subcategories"
            :key="cat"
            class="subcategory-item"
            :class="{ selected: selectedCategory === cat }"
            @click.stop="selectCategory(cat)"
        >
          <span>{{ cat }}</span>
          <span class="subcategory-count">{{ getCategoryCount(cat) }}</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  products: Array,
  selectedCategory: String
})

const emit = defineEmits(['update:selectedCategory'])

const mainCategoryLabel = 'Все товары'
const openMain = ref(true)

const subcategories = computed(() => {
  const cats = props.products.map(p => p.category)
  return Array.from(new Set(cats))
})

function getCategoryCount(cat) {
  return props.products.filter(p => p.category === cat).length
}


function toggleMain() {
  openMain.value = !openMain.value
}

function selectCategory(cat) {
  if (props.selectedCategory === cat) {
    emit('update:selectedCategory', '')
  } else {
    emit('update:selectedCategory', cat)
  }
}
</script>


<style scoped>
.filter-card {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-list {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.filter-item {
  list-style: none;
}

.category-label {
  cursor: pointer;
  user-select: none;
  padding-bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  transition: color 0.2s;

  &:hover,
  &.active {
    color: #7397F5;
  }
}

.category-arrow {
  width: 16px;
  height: 16px;
}

.category-count {
  font-size: 12px;
  color: #999;
}

.subcategory-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.subcategory-item {
  list-style: none;
  cursor: pointer;
  padding: 7px 16px 7px 32px;
  border-radius: 4px;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subcategory-item:hover {
  background-color: #f0f4ff;
}

.subcategory-item.selected {
  background-color: #E2EFFF;
}

.subcategory-count {
  font-size: 12px;
  color: #999;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
