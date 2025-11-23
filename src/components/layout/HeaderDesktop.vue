<template>
  <header class="header">
    <div class="header__inner">
      <img class="header__logo-img" src="@/assets/icons/iconLogo.svg" alt="logo">
      <div class="header__logo-text">Логотип</div>
      <BtnBase class="header__btn" text-color="#000000">Каталог</BtnBase>
      <SearchInput v-model="search" placeholder="Поиск по 100 000 товаров " class="header__search" style-type="header"/>
      <nav class="header__nav">
        <a class="header__nav-link" href="#">Информация о компании</a>
        <a class="header__nav-link" href="#">Контакты</a>
        <a class="header__nav-link" href="#">Полезные ссылки</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { defineModel } from 'vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import BtnBase from "@/components/ui/BtnBase.vue";

const search = defineModel()
</script>

<style scoped lang="scss">
.header {
  padding-bottom: 24px;
  width: 100%;
}

.header__inner {
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.header__logo-img {
  display: block;
  width: 18px;
  height: 18px;
}

.header__logo-text {
  @include font-inter($fw-400, $fs-lg);
  font-size: 16px;
}

.header__btn {
  height: 48px;
  @include font-inter($fw-500, $fs-md);
}

.header__search {
  height: 48px;
  flex: 1;
  @include font-inter($fw-400, $fs-lg);
}

.header__nav {
  display: flex;
  gap: 16px;
  @include font-inter($fw-400, $fs-md);
}

.header__nav-link {
  text-decoration: none;
  color: #393939;
}
</style>
