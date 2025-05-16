<template>
  <div>
    <h1>This is ThreadsListView</h1>
    <button @click="threadWrite">
      누르기
    </button>
    <div>
      <ThreadItem v-for="thread in threads" :key="thread.id"/>
      <RouterLink :to="{name: 'threadDetail', params:{'threadId' : thread.id}}">
        <ThreadDetailView :thread="thread" />
      </RouterLink>
    </div>
    <ThreadWriteView @close="visible = false" @submit="addThread" :visible="visible" :book="thread.book"/>
  </div>
</template>

<script setup>
  import ThreadDetailView from './ThreadDetailView.vue';
  import ThreadWriteView from './ThreadWriteView.vue';
  import {ref} from 'value';

  const visible = ref(false)
  const threadWrite = () => {
    visible.value = !visible.value
  }
  const threads = ref([]);
  const addThread = (newThread) => {
    threads.value.unshift(newThread)
  }

  // onMounted(async () => {
  //   const res = await axios.get('env와 경로')
  //   threads.value = res.data;
  // })

</script>

<style scoped>

</style>