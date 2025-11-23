<template>
  <div class="filter-card">
    <ul class="filter-list">
      <li
          v-for="cat in categories"
          :key="cat.id"
          class="filter-item"
      >
        <div
            class="category-label"
            :class="{ active: openCategories.includes(cat.id) }"
            @click="toggleCategory(cat.id)"
        >
          <img
              v-if="openCategories.includes(cat.id)"
              src="@/assets/icons/iconArrowLeft.svg"
              alt="arrow"
              class="category-arrow"
          />
          <span>{{ cat.label }}</span>
          <span class="category-count">3</span>
        </div>

        <transition name="slide-fade">
          <ul
              v-if="openCategories.includes(cat.id)"
              class="subcategory-list"
          >
            <li
                v-for="sub in cat.subcategories"
                :key="sub.id"
                class="subcategory-item"
                :class="{ selected: selectedSub === sub.id }"
                @click.stop="toggleSubcategory(sub.id)"
            >
              <span>{{ sub.label }}</span>
              <span class="subcategory-count">3</span>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const categories = [
  {
    id: 1,
    label: 'Название категории 1',
    subcategories: [
      { id: 11, label: 'Подкатегория 1-1' },
      { id: 12, label: 'Подкатегория 1-2' },
      { id: 13, label: 'Подкатегория 1-3' },
      { id: 14, label: 'Подкатегория 1-4' }
    ]
  }
]

const openCategories = ref([1])
const selectedSub = ref(null)

function toggleCategory(id) {
  if (openCategories.value.includes(id)) {
    openCategories.value = openCategories.value.filter(c => c !== id)
  } else {
    openCategories.value.push(id)
  }
}

function toggleSubcategory(id) {
  if (selectedSub.value === id) {
    selectedSub.value = null
  } else {
    selectedSub.value = id
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
