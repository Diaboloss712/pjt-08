<template>
  <div class="thread-card">
    <img :src="thread.cover_image" alt="cover image" class="cover" />
    <div class="content">
      <h3>{{ thread.title }}</h3>
      <p>{{ truncateContent(thread.content) }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  thread: Object
});

function truncateContent(text) {
  if (!text) return '';
  return text.length > 100 ? text.slice(0, 100) + '...' : text;
}
</script>

<style scoped>
.thread-card {
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}
.thread-card:hover {
  transform: scale(1.02);
}
.cover {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.content {
  padding: 16px;
}
.content h3 {
  font-size: 1.2em;
  margin-bottom: 8px;
}
.content p {
  font-size: 0.95em;
  color: #555;
}
</style>
