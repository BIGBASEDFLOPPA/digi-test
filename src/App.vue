<script setup>
import CatalogPage from "@/components/pages/CatalogPage.vue";
</script>

<template>
  <div class="container">
    <CatalogPage/>
  </div>
</template>

<style>
.container {
  width: 100%;
  max-width: 1720px;
  margin: 0 auto;
  padding: 0 100px;
  box-sizing: border-box;
  @media(max-width: 1000px) {
    padding: 0 16px;
  }
}
</style>
