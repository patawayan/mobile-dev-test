<script setup lang="ts">
import {ref} from 'vue';
import axios from 'axios';
import DataListItem from './DataListItem.vue';

const listData = ref([]);
const loadingData = ref(false);

async function loadData() {
  loadingData.value = true;
  try {
    const result = await axios.get('https://api.publicapis.org/entries');
    listData.value = result.data.entries.slice(0, 10).map((item:any) =>item.API);
  } finally {
    loadingData.value = false;
  }
}

loadData();

function doDelete(ind:number) {
  const toDelete = [...listData.value];
  toDelete.splice(ind, 1);
  listData.value = [...toDelete];
}

</script>

<template>
  <div id="button-row">
    <button class="rounded short" @click="loadData" :disabled="loadingData">
      {{loadingData ? 'Loading': 'Reload' }}
    </button>
  </div>
  <DataListItem
    v-for="(item, ind) in listData"
    :key="ind" :label="item"
    :disable="loadingData"
    @doDelete="doDelete(ind)" />
</template>

<style scoped>
  #button-row {
    display: flex;
    flex-direction: row-reverse;
    margin: 20px 0px;
  }
</style>
