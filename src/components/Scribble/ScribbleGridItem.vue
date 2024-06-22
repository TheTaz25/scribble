<template>
  <div class="flex-item">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

type FluentValues = {
  mobile?: number,
  tablet?: number,
  desktop?: number,
  large?: number,
}

type Props = {
  span: number | FluentValues,
  offset?: number | FluentValues,
}

const props = withDefaults(defineProps<Props>(), { offset: 0 });

const gridSize = inject<number>('grid-size', 12);

const mobileSpan = computed(() => typeof props.span === 'number' ? props.span : props.span.mobile);
const mobileOffset = computed(() => typeof props.offset === 'number' ? props.offset : props.offset?.mobile);

const tabletSpan = computed(() => typeof props.span === 'number' ? props.span : (props.span.tablet || mobileSpan.value));
const tabletOffset = computed(() => typeof props.offset === 'number' ? props.offset : (props.offset?.tablet || mobileOffset.value));

const desktopSpan = computed(() => typeof props.span === 'number' ? props.span : (props.span.desktop || tabletSpan.value));
const desktopOffset = computed(() => typeof props.offset === 'number' ? props.offset : (props.offset?.desktop || tabletOffset.value));

const largeSpan = computed(() => typeof props.span === 'number' ? props.span : (props.span.large || desktopSpan.value));
const largeOffset = computed(() => typeof props.offset === 'number' ? props.offset : (props.offset?.large || desktopOffset.value));
</script>

<style lang="scss">
@import "@/assets/vars.scss";

.flex-grid {
  .flex-item {
    width: calc(v-bind(mobileSpan) / v-bind(gridSize) * 100%);
    margin-left: calc(v-bind(mobileOffset) / v-bind(gridSize) * 100%);
  }

  @media screen and ($break-up-tablet <=width <=$break-up-desktop) {
    .flex-item {
      width: calc(v-bind(tabletSpan) / v-bind(gridSize) * 100%);
      margin-left: calc(v-bind(tabletOffset) / v-bind(gridSize) * 100%);
    }
  }

  @media screen and ($break-up-desktop <=width <=$break-up-large) {
    .flex-item {
      width: calc(v-bind(desktopSpan) / v-bind(gridSize) * 100%);
      margin-left: calc(v-bind(desktopOffset) / v-bind(gridSize) * 100%);
    }
  }

  @media screen and ($break-up-large <=width) {
    .flex-item {
      width: calc(v-bind(largeSpan) / v-bind(gridSize) * 100%);
      margin-left: calc(v-bind(largeOffset) / v-bind(gridSize) * 100%);
    }
  }
}
</style>
