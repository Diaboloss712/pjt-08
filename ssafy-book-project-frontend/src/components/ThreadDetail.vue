<template>
  <div class="thread-detail" v-if="thread">
    <!-- 배경 커버 이미지 -->
    <div class="cover" :style="{ backgroundImage: `url(${thread.cover_image})` }" />

    <div class="content">
      <h1 class="title">{{ thread.title }}</h1>
      <p class="author">작성자: {{ thread.author }}</p>

      <!-- 책 정보 -->
      <BookCard v-if="thread.book" :book="thread.book" />

      <!-- 본문 내용 -->
      <div class="body" v-html="formattedContent"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import BookCard from '@/components/books/BookCard.vue';

defineProps({
  thread: Object
});

const formattedContent = computed(() =>
  thread.content?.replace(/\n/g, '<br>')
);
</script>

<style scoped>
.thread-detail {
  padding: 2rem;
  color: #fff;
  background-color: #111;
}
.cover {
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 2rem;
}
.content {
  max-width: 800px;
  margin: auto;
}
.title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.author {
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 1.5rem;
}
.body {
  line-height: 1.7;
  font-size: 1rem;
  white-space: pre-wrap;
}
</style>
