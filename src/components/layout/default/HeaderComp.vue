<template>
    <header class="header">
        <div class="itisit-container inner">
            <div class="logo">
                <NuxtLink to="/">BOSS Сұхбат</NuxtLink>
            </div>

            <ul class="inner__items">
                <NuxtLink v-for="item in headerItems" :key="item.key" class="item" :to="item.url">
                    {{ item.label }}
                </NuxtLink>
            </ul>

            <ClientOnly>
                <div class="actions">
                    <a-button>Жұмыс іздеймін</a-button>
                    <a-button>Жұмысшы іздеймін</a-button>
                </div>
            </ClientOnly>
        </div>
    </header>

    <div class="header-helper"></div>
</template>

<script setup lang="ts">
// Vue
import { defineComponent } from 'vue';
// Constants
import { headerItems } from '~/constants/layout/default-layout-header';

defineComponent({ name: 'HeaderComp' });
</script>

<style scoped lang="scss">
@import '~/assets/style/mixins.scss';

.header {
    width: 100%;
    background-color: #202329;
    box-shadow: 0 1px 8px rgba(0, 0, 0, .06);
    @include positioned($position: fixed, $top: 0, $left: 0);

    .inner {
        height: 50px;
        position: relative;
        @include flex($alignItems: center);

        &::before {
            content: "";
            width: 100%;
            height: 50px;
            background: url('~/assets/image/layout/default-layout-header-bg.png') 0 0 / auto 52px no-repeat;
            @include positioned($top: 0, $left: calc(4% + 24px), $zIndex: -1);
        }

        .logo {
            a {
                font-weight: 500;
                color: var(--c-primary);
                text-decoration: none;
                transition: text-shadow var(--transition);

                &:hover {
                    text-shadow: 0 0 2px var(--c-primary);
                }
            }
        }

        &__items {
            margin-left: 24px;
            @include flex($alignItems: center);

            .item {
                margin: 0 4px;
                padding: 0 6px;
                font-size: 14px;
                color: #fff;
                text-decoration: none;
                transition: color var(--transition);

                &:hover {
                    color: var(--c-primary);
                }
            }

            .router-link-exact-active {
                color: var(--c-primary);
            }
        }

        .actions {
            margin-left: auto;
            @include flex($alignItems: center, $gap: 8px);

            :deep(.ant-btn) {
                @include flexCenter;

                span {
                    font-size: 14px;
                }
            }
        }
    }
}

.header-helper {
    height: 50px;
}
</style>