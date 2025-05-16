<template>
  <div class="best-seller-list">
    <ul>
      <li v-for="book in bestSellers" :key="book.id" @click="goToDetail(book.id)">
        <img :src="book.image" alt="book cover" />
        <div class="info">
          <h4>{{ book.title }}</h4>
          <p>{{ book.author }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const bestSellers = ref([]);

// 임시 데이터 또는 API 호출로 교체 가능
onMounted(() => {
  bestSellers.value = [
    {
      id: 1,
      title: '베스트셀러 1',
      author: '작가 A',
      image: 'https://via.placeholder.com/80x100',
    },
    {
      id: 2,
      title: '베스트셀러 2',
      author: '작가 B',
      image: 'https://via.placeholder.com/80x100',
    },
  ];
});

const goToDetail = (id) => {
  router.push({ name: 'BookDetail', params: { bookId: id } });
};
</script>

<style scoped>
.best-seller-list ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 16px;
}
.best-seller-list li {
  cursor: pointer;
  width: 120px;
  text-align: center;
}
.best-seller-list img {
  width: 80px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}
.info h4 {
  margin: 8px 0 4px;
  font-size: 1rem;
}
.info p {
  margin: 0;
  font-size: 0.85rem;
  color: #555;
}
</style>
