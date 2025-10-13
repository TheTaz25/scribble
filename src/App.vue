<script setup lang="ts">
import { ref } from 'vue';
import StyleInject from '@/components/StyleInject.vue';
import ScribbleButton from '@/components/Scribble/ScribbleButton.vue';
import ScribbleGrid from '@/components/Scribble/ScribbleGrid.vue';
import ScribbleGridItem from '@/components/Scribble/ScribbleGridItem.vue';
import ScribblePaper from '@/components/Scribble/ScribblePaper.vue';
import ScribbleHeadline from './components/Scribble/ScribbleHeadline.vue';
import ScribbleFlex from './components/Scribble/ScribbleFlex.vue';
import ScribbleHead from './components/Scribble/ScribbleHead.vue';
import ScribbleLink from './components/Scribble/ScribbleLink.vue';
import ScribbleImage from './components/Scribble/ScribbleImage.vue';
import ScribbleBlock from './components/Scribble/ScribbleBlock.vue';
import ScribbleSidebar from './components/Scribble/ScribbleSidebar.vue';
import ScribbleModal from './components/Scribble/ScribbleModal.vue';
import ScribbleInput from './components/Scribble/ScribbleInput.vue';

const showCustomStyles = ref(false);
const showModal = ref(false);
</script>

<!-- Wrapper!?
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto 1fr;
-->

<template>
  <ScribbleHead>
    <ScribbleFlex
      justify="space-between"
      align="center"
    >
      <div>
        <ScribbleLink>Subpage 1</ScribbleLink>
        <ScribbleLink>Subpage 2</ScribbleLink>
        <ScribbleLink>Subpage 3</ScribbleLink>
      </div>
      <div>
        <ScribbleBlock style="width: 150px; height: 32px" />
      </div>
    </ScribbleFlex>
  </ScribbleHead>
  <ScribbleFlex>
    <ScribbleSidebar> Hello from Sidebar! </ScribbleSidebar>
    <main>
      <ScribbleButton @click="showCustomStyles = !showCustomStyles">
        Show me Some styles
      </ScribbleButton>
      <StyleInject
        v-if="showCustomStyles"
        root-color="rgb(250,250,180)"
      >
        This is a test!
      </StyleInject>
      <br>
      <ScribbleGrid :grid-size="4">
        <ScribbleGridItem :span="1">
          Test
        </ScribbleGridItem>
        <ScribbleGridItem :span="2">
          Test - Span 2
        </ScribbleGridItem>
        <ScribbleGridItem :span="1">
          Test - 3
        </ScribbleGridItem>
        <ScribbleGridItem :span="1">
          Test
        </ScribbleGridItem>
        <ScribbleGridItem :span="1">
          Test
        </ScribbleGridItem>
        <ScribbleGridItem
          :span="1"
          :offset="1"
        >
          <ScribbleImage style="height: 150px" />
        </ScribbleGridItem>
      </ScribbleGrid>

      <ScribbleGrid :grid-size="8">
        <ScribbleGridItem
          :span="{ desktop: 4, tablet: 6 }"
          :offset="{ desktop: 2, tablet: 1 }"
        >
          <ScribblePaper>
            <ScribbleHeadline :h-level="2">
              A Paper inside a grid
            </ScribbleHeadline>
            Henlo Werld!
            <br>
            This is inside a 8-col grid with a span of 4 and an offset of 2 to appear centered. Papers have a simplistic style with a
            minimalist box shadow. Interactive Elements like the button above will appear with 2 rounded corners as well as some additional
            styles. Nevertheless, here's a button!
            <ScribbleFlex
              justify="space-evenly"
              style="row-gap: 8px; column-gap: 2rem"
            >
              <ScribbleButton>I won't do anything!</ScribbleButton>
              <ScribbleButton @click="showModal = true">
                I will open a modal!
              </ScribbleButton>
              <ScribbleButton>I won't do anything!</ScribbleButton>
            </ScribbleFlex>
          </ScribblePaper>
        </ScribbleGridItem>
      </ScribbleGrid>
      <ScribbleHeadline :h-level="1">
        Hello!
      </ScribbleHeadline>
      <ScribbleHeadline :h-level="2">
        Hello!
      </ScribbleHeadline>
      <ScribbleHeadline :h-level="3">
        Hello!
      </ScribbleHeadline>
      <ScribbleHeadline :h-level="4">
        Hello!
      </ScribbleHeadline>
      <ScribbleHeadline :h-level="5">
        Hello!
      </ScribbleHeadline>
      <ScribbleHeadline :h-level="6">
        Hello!
      </ScribbleHeadline>
    </main>
  </ScribbleFlex>
  <ScribbleModal
    :show-modal="showModal"
    @close="showModal = false"
  >
    Content?
    <ScribbleInput label="Example Input"/>
    <ScribbleInput label="Example Input 2"/>
  </ScribbleModal>
</template>

<style>
main {
  margin: 1rem 1rem;
}
</style>
