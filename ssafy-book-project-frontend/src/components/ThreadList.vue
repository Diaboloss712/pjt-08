<template>
  <div class="thread-list">
    <RouterLink
      v-for="thread in threads"
      :key="thread.id"
      :to="{ name: 'threadDetail', params: { threadId: thread.id } }"
      class="thread-link"
    >
      <ThreadItem :thread="thread" />
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useThreadStore } from '@/stores/thread';
import ThreadItem from './ThreadItem.vue';

const threadStore = useThreadStore();
const threads = computed(() => threadStore.threads);
</script>

<style scoped>
.thread-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.thread-link {
  text-decoration: none;
  color: inherit;
  width: 300px; /* 카드 고정 너비 */
}
</style>