<!--검색어(searchTerm) 입력 시 책 제목과 저자 필터링

카테고리 필터는 bookStore.filteredBooks에서 처리됨

**현재 페이지(currentPage)**와 **한 페이지당 아이템 수(itemsPerPage)**로 페이지네이션 구현

검색어 변경 시 페이지를 1페이지로 리셋해서 UX 향상

페이지 버튼으로 이전/다음 및 특정 페이지 이동 가능-->



<template>
  <div class="books-list-view">
    <aside class="categories">
      <ul>
        <!-- 카테고리 목록 출력 -->
        <li
          v-for="category in bookStore.categories"
          :key="category.id"
          :class="{ active: bookStore.selectedCategory === category.id }"
          @click="bookStore.selectCategory(category.id)"
        >
          {{ category.name }}
        </li>
        <!-- 전체 카테고리 선택 -->
        <li
          :class="{ active: bookStore.selectedCategory === 'all' }"
          @click="bookStore.selectCategory('all')"
        >
          전체
        </li>
      </ul>
    </aside>

    <section class="books">
      <!-- 검색창: 책 제목 또는 저자 검색 -->
      <input
        type="text"
        v-model="searchTerm"
        placeholder="책 제목 또는 저자 검색"
        class="search-input"
      />

      <!-- 도서 카드 출력 (현재 페이지에 해당하는 도서만) -->
      <BookCard
        v-for="book in paginatedBooks"
        :key="book.id"
        :book="book"
      />

      <!-- 페이지네이션 UI -->
      <div class="pagination" v-if="totalPages > 1">
        <button
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          이전
        </button>

        <!-- 각 페이지 번호 버튼 -->
        <button
          v-for="page in totalPages"
          :key="page"
          :class="{ active: currentPage === page }"
          @click="currentPage = page"
        >
          {{ page }}
        </button>

        <button
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          다음
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useBookStore } from '@/stores/book';
import BookCard from '@/components/books/BookCard.vue';

// 도서 스토어 불러오기
const bookStore = useBookStore();

// 검색어 상태 (책 제목, 저자 검색용)
const searchTerm = ref('');

// 현재 페이지 상태 (페이지네이션용)
const currentPage = ref(1);

// 한 페이지당 보여줄 도서 개수
const itemsPerPage = 20;

// 컴포넌트가 마운트되면 카테고리와 도서 데이터를 로드
onMounted(async () => {
  await bookStore.loadCategories();
  await bookStore.loadBooks();
});

// 카테고리 필터가 적용된 도서 목록
const filteredBooks = computed(() => {
  return bookStore.filteredBooks;
});

// 검색어가 적용된 도서 목록 (카테고리 필터 이후)
const filteredAndSearchedBooks = computed(() => {
  let books = filteredBooks.value;

  if (searchTerm.value.trim()) {
    const term = searchTerm.value.trim().toLowerCase();
    books = books.filter(
      (book) =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
    );
  }

  // 현재 페이지 초기화: 검색어 변경 시 페이지 1로 리셋
  currentPage.value = 1;

  return books;
});

// 전체 페이지 수 계산
const totalPages = computed(() => {
  return Math.ceil(filteredAndSearchedBooks.value.length / itemsPerPage);
});

// 현재 페이지에 보여줄 도서 목록 슬라이싱
const paginatedBooks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredAndSearchedBooks.value.slice(start, start + itemsPerPage);
});
</script>

<style scoped>
.books-list-view {
  display: flex;
}
.categories {
  width: 200px;
  border-right: 1px solid #ccc;
}
.categories ul {
  list-style: none;
  padding: 0;
}
.categories li {
  padding: 10px;
  cursor: pointer;
}
.categories li.active {
  font-weight: bold;
  background-color: #eee;
}
.books {
  flex: 1;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.search-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  box-sizing: border-box;
  font-size: 1rem;
}

/* 페이지네이션 스타일 */
.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination button {
  margin: 0 5px;
  padding: 6px 12px;
  cursor: pointer;
  border: 1px solid #007acc;
  background-color: white;
  color: #007acc;
  border-radius: 4px;
}

.pagination button.active {
  font-weight: bold;
  background-color: #007acc;
  color: white;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
