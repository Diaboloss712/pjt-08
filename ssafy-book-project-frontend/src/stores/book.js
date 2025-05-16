//도서 상태관리 스토어

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useBookStore = defineStore('book', () => {
  const books = ref([]);                // 도서 전체 목록
  const categories = ref([]);           // 카테고리 목록
  const selectedCategory = ref('all'); // 선택된 카테고리 (필터용)

  // 도서 목록 필터링 계산된 값
  const filteredBooks = computed(() => {
    if (selectedCategory.value === 'all') {
      return books.value;
    }
    return books.value.filter(book => book.category === selectedCategory.value);
  });

  // JSON 데이터 로드 함수 (fetch 사용 예시)
  async function loadBooks() {
    const res = await fetch('/data/books.json');
    books.value = await res.json();
  }

  async function loadCategories() {
    const res = await fetch('/data/categories.json');
    categories.value = await res.json();
  }

  function selectCategory(categoryId) {
    selectedCategory.value = categoryId;
  }

  return {
    books,
    categories,
    selectedCategory,
    filteredBooks,
    loadBooks,
    loadCategories,
    selectCategory,
  };
});
