<template>
  <span class="badge" :class="type">
    <slot>
      {{ label }}
    </slot>
  </span>
</template>

<script setup>
defineProps({
  label: String,
  type: { type: String, default: 'default' }
})
</script>

<style scoped lang="scss">
.badge {
  position: absolute;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 6px;
  line-height: 1;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 4px;
}

.badge.hit {
  font-size: 14px;
  background: #ffffff;
  color: #000000;
}

.badge.discount {
  @include font-pt($fw-700, $fs-md);
  background: #7397f5;
  color: #ffffff;
}

.badge__icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
</style>
