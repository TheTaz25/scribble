<template>
  <div class="flex" :class="[alignClass, justifyClass, directionClass, wrapClass]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Align = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end';
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type Justify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right';
type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse';

type Props = {
  align?: Align,
  justify?: Justify,
  direction?: Direction,
  wrap?: Wrap,
}

const props = defineProps<Props>();

const alignToClass: Record<Align, string> = {
  'stretch': 'a-str',
  'flex-start': 'a-fs',
  'flex-end': 'a-fe',
  'center': 'a-c',
  'baseline': 'a-b',
  'first baseline': 'a-fb',
  'last baseline': 'a-lb',
  'start': 'a-s',
  'end': 'a-e',
  'self-start': 'a-ss',
  'self-end': 'a-se',
};

const justifyToClass: Record<Justify, string> = {
  'flex-start': 'j-fs',
  'flex-end': 'j-fe',
  'center': 'j-c',
  'space-between': 'j-sb',
  'space-around': 'j-sa',
  'space-evenly': 'j-se',
  'start': 'j-s',
  'end': 'j-e',
  'left': 'j-l',
  'right': 'j-r',
};

const directionToClass: Record<Direction, string> = {
  'row': 'd-r',
  'row-reverse': 'd-rr',
  'column': 'd-c',
  'column-reverse': 'd-cr',
};

const wrapToClass: Record<Wrap, string> = {
  'nowrap': 'w-nw',
  'wrap': 'w-w',
  'wrap-reverse': 'w-wr'
};

const alignClass = computed(() => props.align ? alignToClass[props.align] : undefined);
const justifyClass = computed(() => props.justify ? justifyToClass[props.justify] : undefined);
const directionClass = computed(() => props.direction ? directionToClass[props.direction] : undefined);
const wrapClass = computed(() => props.wrap ? wrapToClass[props.wrap] : undefined);
</script>

<style lang="scss">
.flex {
  display: flex;
  width: 100%;

  //#REGION align-items
  &.a-str {
    align-items: stretch;
  }

  &.a-fs {
    align-items: flex-start;
  }

  &.a-fe {
    align-items: flex-end;
  }

  &.a-c {
    align-items: center;
  }

  &.a-b {
    align-items: baseline;
  }

  &.a-fb {
    align-items: first baseline;
  }

  &.a-lb {
    align-items: last baseline;
  }

  &.a-s {
    align-items: start;
  }

  &.a-e {
    align-items: end;
  }

  &.a-ss {
    align-items: self-start;
  }

  &.a-se {
    align-items: self-end;
  }

  //#ENDREGION
  //#REGION justify-content
  &.j-fs {
    justify-content: flex-start;
  }

  &.j-fe {
    justify-content: flex-end;
  }

  &.j-c {
    justify-content: center;
  }

  &.j-sb {
    justify-content: space-between;
  }

  &.j-sa {
    justify-content: space-around;
  }

  &.j-se {
    justify-content: space-evenly;
  }

  &.j-s {
    justify-content: start;
  }

  &.j-e {
    justify-content: end;
  }

  &.j-l {
    justify-content: left;
  }

  &.j-r {
    justify-content: right;
  }

  //#ENDREGION
  //#REGION directions
  &.d-r {
    flex-direction: row;
  }

  &.d-rr {
    flex-direction: row-reverse;
  }

  &.d-c {
    flex-direction: column;
  }

  &.d-cr {
    flex-direction: column-reverse;
  }

  //#ENDREGION

  //#REGION wraps
  &.w-nw {
    flex-wrap: nowrap;
  }

  &.w-w {
    flex-wrap: wrap;
  }

  &.w-wr {
    flex-wrap: wrap-reverse;
  }

  //#ENDREGION
}
</style>