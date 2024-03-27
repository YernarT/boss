<template>
  <div class="address" @click="addressBoxIsOpen = !addressBoxIsOpen">
    <Icon name="solar:map-point-wave-outline" />
    <span class="label">
      {{ globalVars.getCurrentAddress?.label ?? "Белгісіз" }}
    </span>
  </div>

  <div class="address-box" :class="{ 'address-box--open': addressBoxIsOpen }">
    <div class="header">
      <span class="label">Бүкіл ел бойынша</span>
      <Switch v-model:checked="globalVars.nationwide" />
    </div>

    <div class="body">
      <div class="city-section">
        <h3 class="title">Танымал қалалар</h3>
        <ul class="city-list">
          <li
            v-for="city in globalVars.getHotCities"
            :key="city.id"
            class="city"
            :class="{
              'city--selected': city.id === globalVars.getCurrentAddress.id,
            }"
          >
            {{ city.label }}
          </li>
        </ul>
      </div>

      <div class="city-section">
        <h3 class="title">Барлық қалалар</h3>
        <ul class="city-list">
          <li
            v-for="city in globalVars.cityList"
            :key="city.id"
            class="city"
            :class="{
              'city--selected': city.id === globalVars.getCurrentAddress.id,
            }"
          >
            {{ city.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { defineComponent, ref } from "vue";
// Store
import { useGlobalVarsStore } from "~/stores/globalVars";
// Antd
import { message, Switch } from "ant-design-vue";

defineComponent({ name: "Address" });

const globalVars = useGlobalVarsStore();
const addressBoxIsOpen = ref(false);
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";
.address {
  cursor: pointer;
  @include flex($alignItems: center, $gap: 8px);

  .label {
    font-size: 14px;
    color: #fff;
    transition: color var(--transition);

    &:hover {
      color: var(--c-primary);
    }
  }
}

.address-box {
  width: 880px;
  border-radius: var(--border-radius);
  background: #fff url("@/assets/image/address-box/background-image.png") 0 0/100%
    auto no-repeat;
  @include positionCenter($position: fixed, $zIndex: 40);

  &--open {
  }

  .header {
    padding: 24px;
    height: 80px;
    @include flex($alignItems: center, $gap: 8px);
    .label {
      color: #fff;
    }
  }

  .body {
    padding: 24px;
    max-height: calc(100vh - 220px);
    overflow: hidden auto;
    border-radius: var(--border-radius);
    background-color: #fff;

    .city-section {
      margin-bottom: 16px;

      .title {
        margin-bottom: 16px;
      }

      .city-list {
        list-style: none;
        @include flex($gap: 8px, $wrap: wrap);

        .city {
          font-size: 14px;
          padding: 8px 12px;
          border-radius: 4px;
          background-color: #f8f8f8;
          cursor: pointer;
          transition: color var(--transition),
            background-color var(--transition);

          &:hover {
            color: var(--c-primary);
            background-color: rgba(0, 190, 189, 0.1);
          }

          &--selected {
            color: var(--c-primary);
            background-color: rgba(0, 190, 189, 0.1);
          }
        }
      }
    }
  }
}
</style>
