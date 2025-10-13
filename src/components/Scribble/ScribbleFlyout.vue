<template>
  <section
    class="flyout"
    :class="{
      'from-inline-start': from === 'inline-start',
      'from-inline-end': from === 'inline-end',
      'from-block-start': from === 'block-start',
      'from-block-end': from === 'block-end',
      open: open,
    }"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
interface FlyoutProps {
  from?: 'inline-start' | 'inline-end' | 'block-start' | 'block-end';
  open?: boolean;
}

defineProps<FlyoutProps>();
</script>

<style scoped lang="scss">
.flyout {
  position: fixed;
  --width: 300px;
  border-radius: var(--unit-space);
  border: 2px solid black;
  background-color: white;
  
  &.from-inline-start {
    transition: left 333ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    left: calc(-1 * var(--width) - 5rem);
    width: var(--width);
    height: calc(100vh - 4rem);
    top: 2rem;

    &.open {
      left: 2rem;
    }
  }

  &.from-inline-end {
    transition: right 333ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    right: calc(-1 * var(--width) - 5rem);
    width: var(--width);
    height: calc(100vh - 4rem);
    top: 2rem;

    &.open {
      right: 2rem;
    }
  }

  &.from-block-start {
    transition: top 333ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    top: calc(-1 * var(--width) - 5rem);
    height: var(--width);
    width: calc(100vw - 4rem);
    left: 2rem;

    &.open {
      top: 2rem;
    }
  }

  &.from-block-end {
    transition: bottom 333ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    bottom: calc(-1 * var(--width) - 5rem);
    height: var(--width);
    width: calc(100vw - 4rem);
    left: 2rem;

    &.open {
      bottom: 2rem;
    }
  }
}
</style>