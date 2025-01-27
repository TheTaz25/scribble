<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

type Props = {
  rootColor: string;
};

const props = defineProps<Props>();
const styleRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (document.getElementById(`color-${props.rootColor}`)) {
    return;
  }
  const styleTag = document.createElement('style');

  styleTag.innerHTML = `
  body {
    background-color: ${props.rootColor};
  }
  `;
  styleTag.id = `color-${props.rootColor}`;

  document.head.append(styleTag);
  styleRef.value = styleTag;
});

onBeforeUnmount(() => {
  styleRef.value?.remove();
});
</script>
