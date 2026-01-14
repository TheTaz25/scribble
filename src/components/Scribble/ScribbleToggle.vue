<template>
  <div class="checkbox">
    <input hidden :checked="checked" type="checkbox" :id="uid" :name="name || uid" :value="value || uid" />
    <span class="ui" @click="checked = !checked" />
    <label :for="uid">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type ToggleProps = {
  name?: string;
  value?: string;
  label?: string;
}

defineProps<ToggleProps>();



const uid = crypto.randomUUID();
const checked = ref(false);
</script>

<style scoped lang="scss">
.checkbox {
  display: inline-flex;
  gap: 0.5rem;
  user-select: none;
  cursor: pointer;

  input[type="checkbox"] {
    border: 2px solid black;
    outline: none;

    &:checked + .ui::before {
      right: 2px;
      left: 30px;
      transition: right 50ms linear, left 50ms linear 25ms;
    }
  }

  .ui {
    position: relative;
    display: inline-block;
    border: 2px solid black;
    width: 66px;
    height: 24px;
    border-radius: 0 .75rem;
    transform: translate(0px, 0px);
    box-shadow: 2px 2px 0px black;
    transition: transform 50ms linear, box-shadow 50ms linear;

    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 5px 5px 0px black;
    }

    &::before {
      content: '';
      position: absolute;
      display: block;
      background: black;
      right: 30px;
      height: 20px;
      top: 2px;
      left: 2px;
      border-radius: 0 calc(.75rem - 2px);
      transition: left 50ms linear, right 50ms linear 25ms;
    }
  }
}
</style>