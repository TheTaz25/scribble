<template>
  <div v-if="showModal" class="modal">
    <div class="modal-bg"></div>
    <div class="modal-fg">
      <ScribblePaper style="min-width: 450px; min-height: 250px" class="content">
        <ScribbleButton class="close-button" @click="$emit('close')">X</ScribbleButton>
        <slot></slot>
      </ScribblePaper>
    </div>
  </div>
</template>

<script setup lang="ts">
import ScribbleButton from './ScribbleButton.vue';
import ScribblePaper from './ScribblePaper.vue';

type Props = {
  showModal?: boolean;
};

withDefaults(defineProps<Props>(), {
  showModal: true,
});

defineEmits(['close']);
</script>

<style lang="scss">
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;

  & .modal-bg {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
  }

  & .modal-fg {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .content {
      position: relative;
    }

    .close-button {
      position: absolute;
      right: 16px;
    }
  }
}
</style>
