<template>
  <div class="book-card">
    <img :src="thread.book.cover" alt="book cover" />
    <div class="book-info">
      <p class="book-title">{{ thread.book.title }}</p>
      <p class="book-author">{{ thread.book.author }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  book: Object
});
</script>

<style scoped>
.book-card {
  width: 200px;
  background: #222;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
}

.book-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.book-info {
  margin-top: 10px;
}

.book-title {
  font-weight: bold;
  margin-bottom: 4px;
}

.book-author {
  font-size: 0.9rem;
  color: #aaa;
}
</style>