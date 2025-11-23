<template>
  <button
      class="btn"
      :class="color"
      @click="$emit('click')"
      :style="{ color: textColor }"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  textColor: {
    type: String,
    default: null
  }
})
</script>

<style scoped lang="scss">
.btn {
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  background-color: #ffffff;
}

.btn.primary {
  @include font-pt($fw-700, $fs-md);
  color: #73AFF4;
  border:#73AFF4 1px solid;
}

.btn.gray {
  @include font-pt($fw-700, $fs-md);
  width: 100%;
  color:#AAAAAA;
  border:#AAAAAA 1px solid;
}
.btn.mobile-header{
  background: #7397f5;
  color: #ffffff;
}
</style>
