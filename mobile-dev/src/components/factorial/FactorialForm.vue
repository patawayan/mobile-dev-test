<script setup lang="ts">
import {ref} from 'vue';

const facNum = ref();
const result = ref(0);

function doFactorial() {
  let res = 1;
  for(let oper = 1; oper <= facNum.value; oper++ ){
    res = res * oper;
  }
  console.log(res)
  result.value = res;
}
</script>

<template>
  <div class="container-col" id="factorial-form">
    <input v-model="facNum" placeholder="Number...." />
    <div id="button-row">
      <button class="dark short" @click="doFactorial">Submit</button>
    </div>
  </div>
  <div class="container-col" id="results-container">
    <h1>Result</h1>
    <h1 id="results">
      ({{ result }})
    </h1>
  </div>
</template>

<style scoped>
#factorial-form {
  padding: 50px 0px;
  row-gap: 20px;
  justify-content: flex-end;
}

h1{
  font-weight: 600;
}

#results {
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

#button-row {
  display: flex;
  flex-direction: row-reverse;
}
</style>
