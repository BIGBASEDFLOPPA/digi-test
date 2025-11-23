<template>
  <div :class="['search-input', styleTypeClass]">
    <input
        :value="modelValue"
        @input="updateValue"
        type="text"
        class="search-input__field"
        :placeholder="placeholder"
        @focus="isFocused = true"
        @blur="isFocused = false"
    />

    <img
        class="search-input__icon"
        src="@/assets/icons/iconSearch.svg"
        alt="search"
    />
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'

const props = defineProps({
  modelValue: String,
  placeholder: { type: String, default: 'Поиск' },
  styleType: { type: String, default: 'default' }
})
const emit = defineEmits(['update:modelValue'])

const isFocused = ref(false)

function updateValue(e) {
  emit('update:modelValue', e.target.value)
}

const styleTypeClass = computed(() => {
  return props.styleType === 'header' ? 'search-input--header' : 'search-input--default'
})
</script>

<style scoped lang="scss">
.search-input {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 6px;
  background: #fff;

  &__field {
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    color: #1e293b;
    padding-left: 38px;

    &::placeholder {
      color: #94a3b8;
    }
  }

  &__icon {
    position: absolute;
    left: 8px;
    width: 18px;
    height: 18px;
    pointer-events: none;
  }

  &--header {
    border: 1px solid #73AFF4;
  }

  &--default {
    border: 1px solid #D5D5D5;

    .search-input__field:focus + &,
    &.search-input--default:focus-within {
      border-color: #73AFF4;
    }
  }
}
</style>
