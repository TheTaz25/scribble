<template>
  <img v-if="src" :src="src" />
  <div v-else class="dummy-image"></div>
</template>

<script setup lang="ts">
type Props = {
  src?: string;
};

defineProps<Props>();
</script>

<style lang="scss">
.dummy-image {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('placeholder.svg');
}
</style>
