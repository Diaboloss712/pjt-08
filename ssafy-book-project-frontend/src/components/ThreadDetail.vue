<template>
  <div class="thread-detail">
    <div class="cover-image" :style="{ backgroundImage: `url(${thread.cover_image})` }"></div>

    <div class="content-wrapper">
      <h1 class="title">{{ thread.title }}</h1>

      <div class="main-content">
        <!-- 왼쪽: 책 카드 -->
        <BookCard :book="thread.book" />

        <!-- 오른쪽: 게시글 내용 -->
        <div class="text-content">
          <p v-html="formattedContent"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BookCard from '@/components/book/BookCard.vue';

defineProps({
  thread: Object
});

const formattedContent = computed(() =>
  thread.content?.replace(/\n/g, '<br>')
);
</script>

<style scoped>
.thread-detail {
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #111;
}

.cover-image {
  height: 300px;
  background-size: cover;
  background-position: center;
}

.content-wrapper {
  padding: 30px 40px;
}

.title {
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: bold;
}

.main-content {
  display: flex;
  gap: 40px;
}

.text-content {
  flex: 1;
  white-space: pre-wrap;
  line-height: 1.7;
  font-size: 1rem;
  color: #eee;
}
</style>
