<template>
  <div class="input-wrapper">
    <span class="label-wrapper">
      <label for="">{{ label }}<span class="extra"></span></label>
    </span>
    <input type="text" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
  .input-wrapper {
    margin-block-start: .5rem;
    display: flex;
    flex-direction: column;

    &:has(input:focus-visible) label {
      transform: translate(-5px, -3px);
    }

    .label-wrapper {
      display: flex;
    }

    .extra {
      width: var(--unit-space);
      height: var(--unit-space);
      background-color: white;
      position: absolute;
      right: calc(var(--unit-space) * -1);
      bottom: -2px;
      z-index: 1;
    }

    label {
      transition: all 50ms linear;
      background: white;
      z-index: 2;
      border: 2px solid black;
      border-block-end: 2px solid white;
      padding: .25rem 0.5rem;
      transform: translate(-2px, 0px);
      border-start-end-radius: var(--unit-space);

      position: relative;
      &::before {
        z-index: 5;
        position: absolute;
        height: 100%;
        content: '';
        border: 1px solid black;
        left: -2px;
      }

      &::after {
        content: '';
        z-index: 5;

        background-color: white;
        width: var(--unit-space);
        height: var(--unit-space);
        position: absolute;
        bottom: -2px;
        right: calc(var(--unit-space) * -1 - 2px);
        border-block-start: 2px solid black;
        border-inline-end: 2px solid black;
        transform: rotate(180deg);
        border-start-end-radius: var(--unit-space);
      }
    }

    input {
      transition: all 50ms linear;
      border: 2px solid black;
      padding: 0.5rem;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 1.25rem;
      border-radius: 0 var(--unit-space) 0;
      box-shadow: 2px 2px 0px black;
      transform: translate(-2px, -2px);
      outline: none;

      &:focus-visible {
        box-shadow: 5px 5px 0px black;
        transform: translate(-5px, -5px);
      }

      &:disabled {
        cursor: not-allowed;
        background-color: darkgray;
      }
    }
  }
</style>