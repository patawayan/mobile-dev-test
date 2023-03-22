<script setup lang="ts">
import {ref} from 'vue';
import axios from 'axios';

const hideButt = ref(null);
const startTouch = ref();
const hideButtTransform = ref(100);

defineProps<{ label:string, disable?: boolean}>();
const emit = defineEmits(['doDelete']);

function touchStart(e:any) {
  startTouch.value = e.targetTouches[0].clientX
}

function touchMove(e:any) {
  const transVal = 100 - (startTouch.value - e.targetTouches[0].clientX);
  hideButtTransform.value = transVal > 0 ? transVal: 0;
}

function touchEnd(e: any) {
  if (hideButtTransform.value === 0) {
    console.log('hide!')
    emit('doDelete')
    hideButtTransform.value = 100;
  } else {
    const intervalId = setInterval(() => {
      hideButtTransform.value++;
      if (hideButtTransform.value == 100) {
        clearInterval(intervalId);
      }
    }, 5)
  }
}

</script>

<template>
  <div class="container align-center" :class="{disabled: disable}"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd">
    <span id="item-label">{{label}}</span>
    <span style="flex-grow: 1;"></span>
    <span ref="hideButt" :style="{transform: `translateX(${hideButtTransform}%)`}" id="hide-butt">Hide</span>
  </div>
</template>

<style scoped>
  div {
    background-color: var(--mobile-dev-white);
    color: var(--color-text-dark);
    border: 1px solid var(--color-border);
    margin-bottom: 10px;
    overflow:hidden;
  }

  #item-label{
    padding:10px;
  }

  #hide-butt {
    padding:10px;
    background-color: var(--mobile-dev-grey);
    position:absolute;
    right: 0;
  }
  .disabled {
    opacity: 0.5;
  }



</style>
