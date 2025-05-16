<!--장르별 도서 목록을 카테고리별로 분류해서 보여줌

사용자가 장르 탭을 클릭하면 해당 장르 도서 리스트 노출

기본적으로 메인 페이지에 넣어서 ‘장르별 추천 도서’ 섹션 완성-->

<template>
  <div class="genre-book-list">
    <div class="genre-tabs">
      <button
        v-for="genre in genres"
        :key="genre.id"
        :class="{ active: selectedGenre === genre.id }"
        @click="selectGenre(genre.id)"
      >
        {{ genre.name }}
      </button>
    </div>

    <div class="books">
      <BookCard
        v-for="book in filteredBooksByGenre"
        :key="book.id"
        :book="book"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useBookStore } from '@/stores/book';
import BookCard from '@/components/books/BookCard.vue';

const bookStore = useBookStore();
const selectedGenre = ref('all');

// 장르 목록 초기화 후 '전체' 장르 추가
const genres = ref([{ id: 'all', name: '전체' }]);

// 컴포넌트 마운트 시 장르 목록 불러오기
onMounted(async () => {
  if (bookStore.categories.length === 0) {
    await bookStore.loadCategories();
  }
  genres.value = [{ id: 'all', name: '전체' }, ...bookStore.categories];
});

// 장르별 도서 필터링 계산값
const filteredBooksByGenre = computed(() => {
  if (selectedGenre.value === 'all') {
    return bookStore.books;
  }
  return bookStore.books.filter(book => book.category === selectedGenre.value);
});

const selectGenre = (genreId) => {
  selectedGenre.value = genreId;
};
</script>

<style scoped>
.genre-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.genre-tabs button {
  padding: 8px 16px;
  border: 1px solid #007acc;
  background: white;
  cursor: pointer;
  border-radius: 4px;
}

.genre-tabs button.active {
  background: #007acc;
  color: white;
  font-weight: bold;
}

.books {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}
</style>

