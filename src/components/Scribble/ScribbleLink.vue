<template>
  <component :is="component || 'a'" class="scribble-link">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import type { VueElement } from 'vue';

type Props = {
  component?: VueElement;
};

defineProps<Props>();
</script>

<style lang="scss">
.scribble-link {
  cursor: pointer;
  text-decoration: underline;
  margin: 0 1rem;
}
</style>
