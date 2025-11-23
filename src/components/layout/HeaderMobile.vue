<template>
  <header class="m-header">
    <button class="m-header__back" @click="$emit('back')">
      <img src="@/assets/icons/iconArrowLeft.svg" alt="">
    </button>

    <div class="m-header__input-wrapper">
      <input
          v-model="search"
          type="text"
          placeholder="Запрос"
          @focus="isFocused = true"
          @blur="isFocused = false"
          @keyup.enter="handleSearch"
          class="m-header__input"
      />
      <div
          class="m-header__underline"
          :class="{ 'm-header__underline--active': isFocused }"
      ></div>
    </div>

    <button
        v-if="search"
        class="m-header__clear"
        @click="search = ''"
    >
      <img src="@/assets/icons/iconCloseRound.svg" alt="">
    </button>

    <BtnBase color="mobile-header" class="m-header__find" @click="handleSearch">Найти</BtnBase>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import BtnBase from "@/components/ui/BtnBase.vue";

const emit = defineEmits(['update:modelValue', 'back'])

const search = ref('')
const isFocused = ref(false)

function handleSearch() {
  emit('update:modelValue', search.value)
  console.log('Ищем:', search.value)
}
</script>

<style scoped>
.m-header {
  width: 100%;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
}

.m-header__back img {
  width: 20px;
  height: 20px;
}

.m-header__back,
.m-header__clear {
  border: none;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
}

.m-header__clear img {
  width: 18px;
  height: 18px;
  opacity: 0.7;
}

.m-header__input-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.m-header__input {
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  border: none;
  outline: none;
  padding: 4px 0;
}

.m-header__underline {
  margin-top: 10px;
  height: 2px;
  background: #D5D5D5;
  transition: background 0.2s;
}

.m-header__underline--active {
  background: #7397F5;
}

.m-header__find {
  padding: 12px 16px;
  border-radius: 5px;
  border: none;

}
</style>
