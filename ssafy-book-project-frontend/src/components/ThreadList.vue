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
import ThreadItem from './ThreadItem.vue';
defineProps({
  threads: Array
});
</script>

<style scoped>
.thread-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.thread-link {
  text-decoration: none;
  color: inherit;
}
</style>
