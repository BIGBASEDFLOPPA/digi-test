<template>
  <article class="card">
    <div class="card__img-wrapper">
      <BadgeBase
          v-if="product.isHit && product.inStock"
          type="hit"
          class="badge badge-hit"
      >
        <span>Хит продаж</span>
        <img :src="fireIcon" alt="fire" class="badge__icon"/>
      </BadgeBase>

      <BadgeBase
          v-if="product.discount && product.inStock"
          :label="product.discount + '%'"
          type="discount"
          class="badge badge-discount"
      />

      <div class="card__img"></div>
    </div>

    <div class="card__body">
      <div class="card__brand">{{ product.brand }}</div>
      <div class="card__title">{{ product.title }}</div>

      <div class="card__price" v-if="product.inStock">
        <span class="new">{{ product.price }} ₽</span>
        <span class="old" v-if="product.oldPrice">{{ product.oldPrice }} ₽</span>
      </div>
    </div>

    <div class="card__footer">
      <BtnBase v-if="product.inStock">Купить</BtnBase>
      <BtnBase v-else color="gray">Сообщить о поступлении</BtnBase>
    </div>
  </article>
</template>

<script setup>
import BtnBase from "@/components/ui/BtnBase.vue"
import BadgeBase from "@/components/ui/BadgeBase.vue"
import fireIcon from '@/assets/icons/iconFire.svg'

defineProps({ product: Object })
</script>

<style scoped lang="scss">
.card {
  background: #fff;
  display: flex;
  flex-direction: column;

  &__img-wrapper {
    position: relative;
  }

  &__img {
    height: 200px;
    background: #f1f5f9;
    border-radius: 8px;
  }

  &__body {
    padding-top: 16px;
  }

  &__brand {
    color: #AAAAAA;
    font-size: 14px;
    padding-bottom: 8px;
  }

  &__title {
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__price {
    display: flex;
    padding-top: 16px;
    padding-bottom: 16px;
    @include font-pt($fw-700, $fs-lg);
    gap: 8px;

    .old {
      @include font-pt($fw-400, $fs-sm);
      text-decoration: line-through;
      color: #94a3b8;
    }
  }

  .badge {
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 4px;
    gap: 4px;
  }

  .badge-hit {
    font-size: 14px;
    height: 32px;
    top: 12px;
    left: 12px;
    padding: 0 8px;
    background: #fff;
    color: #000;
  }

  .badge-discount {
    height: 26px;
    bottom: 12px;
    left: 12px;
    padding: 6px 10px;
    background: #7397F5;
    color: #fff;
  }

  .badge__icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
  }

  &__footer {
    display: flex;
    gap: 8px;
    margin: 0;
    @media(max-width: 400px){
      margin: auto;
    }
  }
}
</style>
