<template>
  <div class="price-input">
    <input
        type="number"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.valueAsNumber)"
    />
    <span class="placeholder">{{ placeholder }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: [String, Number],
  placeholder: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
.price-input {
  position: relative;
  width: 100%;

  input {
    width: 100%;
    height: 36px;
    border: 1px solid #D5D5D5;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    color: #1e293b;
    background-color: #fff;
    padding-left: 32px;
    box-sizing: border-box;
  }

  .placeholder {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    color: #AAAAAA;
    font-size: 14px;
    pointer-events: none;
    user-select: none;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
