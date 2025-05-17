<template>
  <ThreadDetail/>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {useThreadStore} from '@/stores/thread';
import ThreadDetail from '@/components/ThreadDetail.vue';

const route = useRoute();
const threadStore = useThreadStore();

onMounted(() => {
  threadStore.fetchThreadById(route.params.threadId);
});
</script>

<style scoped>
</style>
