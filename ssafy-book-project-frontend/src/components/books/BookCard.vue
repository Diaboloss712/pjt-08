<!--도서 개별 카드 컴포넌트-->

<!--카드 클릭 시 해당 도서 상세 페이지로 라우팅-->

<!--도서 제목, 저자, 이미지, 짧은 설명 표시-->

<!--description 길이 60자 이상이면 말줄임 처리-->



<template>
  <div class="book-card" @click="goToDetail">
    <img :src="book.image" alt="book cover" class="book-image" />
    <div class="book-info">
      <h3 class="title">{{ book.title }}</h3>
      <p class="author">{{ book.author }}</p>
      <p class="description">{{ shortDescription }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const shortDescription = computed(() => {
  if (!props.book.description) return '';
  return props.book.description.length > 60
    ? props.book.description.slice(0, 60) + '...'
    : props.book.description;
});

const goToDetail = () => {
  router.push({ name: 'BookDetail', params: { bookId: props.book.id } });
};
</script>

<style scoped>
.book-card {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.book-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.book-info {
  margin-top: 8px;
  text-align: center;
}

.title {
  font-size: 1.1rem;
  margin: 0;
}

.author {
  font-size: 0.9rem;
  color: #555;
  margin: 4px 0;
}

.description {
  font-size: 0.8rem;
  color: #777;
}
</style>
