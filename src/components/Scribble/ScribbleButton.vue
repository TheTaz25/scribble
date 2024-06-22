<template>
  <button class="scribble">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.scribble {
  transition: all 50ms linear;
  background-color: white;
  padding: .5rem 0.75rem;
  font-size: 1.25rem;
  box-shadow: 2px 2px 0px black;
  margin: var(--half-space) var(--fourth-space);
  cursor: pointer;
  border-radius: 0 var(--unit-space) 0;
  transform: translate(-2px, -2px);

  &:hover,
  &:focus-visible {
    background-color: rgb(230, 230, 230);
    box-shadow: 5px 5px 0px black;
    transform: translate(-5px, -5px);
  }

  &:active {
    box-shadow: 1px 1px 0px black;
    transform: translate(-1px, -1px);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: darkgrey;
  }
}
</style>