<template>
  <component :is="level" :class="styleLevel">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

type Props = {
  hLevel: HeadingLevels;
  appear?: HeadingLevels;
};

const props = defineProps<Props>();

const level = computed<`h${HeadingLevels}`>(() => `h${props.hLevel}`);
const styleLevel = computed(() => `heading-${props.appear ?? props.hLevel}`);
</script>

<style lang="scss">
h1,
.heading-1 {
  font-size: 3.75rem;
  margin: 1rem 0;
  padding-bottom: 1.5rem;
  line-height: 3.5rem;
}

h2,
.heading-2 {
  font-size: 3rem;
  margin: 0.75rem 0;
  padding-bottom: 1.5rem;
  line-height: 3.5rem;
}

h3,
.heading-3 {
  font-size: 2.5rem;
  margin: 0.5rem 0;
}

h4,
.heading-4 {
  font-size: 2rem;
  margin: 0.25rem 0;
}

h5,
.heading-5 {
  font-size: 1.5rem;
  text-decoration: underline;
  margin: 0.15rem 0;
}

h6,
.heading-6 {
  font-size: 1.25rem;
  font-weight: normal;
  text-decoration: underline;
  margin: 0.15rem 0;
}
</style>
