<template>
  <div
    class="float"
    :class="{
    'inline-end': inline === 'end',
    'inline-start': inline === 'start',
    'block-start': block === 'start',
    'block-end': block === 'end',
  }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface FloatProps {
  inline: 'start' | 'end';
  block: 'start' | 'end';
  offset?: string;
}

const props = defineProps < FloatProps > ();
const offset = computed(() => {
  if (props.offset) return props.offset;
  return `var(--input-space)`
})
</script>

<style scoped lang="scss">
.float {
  position: absolute;
  --offset: v-bind(offset);

  &.inline-start {
    left: var(--offset);
  }

  &.inline-end {
    right: var(--offset);
  }

  &.block-start {
    top: var(--offset);
  }

  &.block-end {
    bottom: var(--offset);
  }
}
</style>