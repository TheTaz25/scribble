<template>
  <header>
    <slot></slot>
  </header>
</template>

<style lang="scss">
header {
  border-bottom: 2px solid black;
  min-height: 2.125rem;
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  background-color: rgb(230, 230, 230);
}
</style>