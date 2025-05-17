<template>
  <div class="thread-detail" v-if="thread">
    <!-- 배경 이미지 -->
    <div class="cover" :style="{ backgroundImage: `url(${thread.cover_image})` }" />

    <!-- 내용 영역 -->
    <div class="content">
      <div class="main-content">
        <!-- 왼쪽: BookCard -->
        <div class="left">
          <BookCard v-if="thread.book" :book="thread.book" />
        </div>

        <!-- 오른쪽: 스레드 텍스트 -->
        <div class="right">
          <h1 class="title">{{ thread.title }}</h1>
          <p class="author">작성자: {{ thread.author }}</p>
          <div class="body" v-html="formattedContent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useThreadStore } from '@/stores/thread';
import BookCard from '@/components/books/BookCard.vue';

const threadStore = useThreadStore();
const thread = computed(() => threadStore.currentThread);

const formattedContent = computed(() =>
  thread.value?.content?.replace(/\n/g, '<br>')
);
</script>

<style scoped>
.thread-detail {
  padding: 2rem;
  color: #000;
  background-color: #fff;
}
.cover {
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 2rem;
}
.content {
  max-width: 1000px;
  margin: auto;
}
.main-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}
.left {
  flex: 0 0 200px;
}
.right {
  flex: 1;
}
.title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}
.author {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}
.body {
  line-height: 1.7;
  font-size: 1rem;
}
</style>
