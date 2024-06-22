<template>
  <div :class="`flex-grid grid-${gridSize}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';

type Props = {
  gridSize: number,
}

const props = defineProps<Props>();

provide('grid-size', props.gridSize);
</script>

<style lang="scss">
.flex-grid {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>
