<template>
  <div class="spinner"></div>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 48 },
  color: { type: String, default: '#7397F5' }
})
</script>

<style scoped>
.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid transparent;
  border-top-color: #7397F5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 50px auto;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}
</style>
