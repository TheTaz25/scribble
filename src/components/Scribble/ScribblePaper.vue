<template>
  <div class="paper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.paper {
  border: 2px solid black;
  margin: 1rem 0;
  padding: var(--unit-space);
  box-shadow: 5px 5px 1px black;
  background-color: white;
}
</style>
