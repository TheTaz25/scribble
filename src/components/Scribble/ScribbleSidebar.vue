<template>
  <aside class="side-bar sticky">
    <slot></slot>
  </aside>
</template>

<style lang="scss">
.side-bar {
  height: auto;
  min-width: var(--side-bar-width);
  border-right: 2px solid black;
  padding: var(--unit-space);

  &.sticky {
    position: static;
    top: var(--unit-space);
  }
}
</style>
