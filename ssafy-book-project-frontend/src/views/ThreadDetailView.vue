<template>
  <ThreadDetail :thread="thread" />
</template>

<script setup>
import ThreadDetail from '@/components/ThreadDetail.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const thread = ref(null);

onMounted(async () => {
  const res = await axios.get(`/api/threads/${route.params.threadId}`);
  thread.value = res.data;
});
</script>
