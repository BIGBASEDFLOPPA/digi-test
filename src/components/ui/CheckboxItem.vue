<template>
  <label class="checkbox-item">
    <input type="checkbox" :value="value" v-model="modelValue" />
    <span class="checkbox-item__custom">
      <img v-if="modelValue" src="@/assets/icons/iconCheckbox.svg" alt="галочка" />
    </span>
    <span class="checkbox-item__label">{{ value }}</span>
  </label>
</template>

<script setup>
import { defineProps, defineModel } from 'vue'

const props = defineProps({
  value: String
})

const modelValue = defineModel()
</script>

<style scoped>
.checkbox-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  gap: 12px;
  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  input[type="checkbox"]:hover {
    border-color: #7397F5;
  }

  input[type="checkbox"]:checked {
    background-color: #7397F5;
    border-color: #7397F5;
  }

  .checkbox-item__custom {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .checkbox-item__custom img {
    width: 10px;
    height: 8px;
    object-fit: contain;
  }

  .checkbox-item__label {
    font-size: 14px;
    color: #1e293b;
    user-select: none;

  }
}
</style>

