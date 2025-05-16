<!--책의 상세 정보-->

<!--URL의 bookId 파라미터를 받아 도서 리스트에서 해당 책을 찾음

책이 로드되지 않았으면 스토어에서 불러오기

간단한 뒤로가기 버튼 추가

책 이미지, 제목, 저자, 출판년도, 설명 출력

도전과제인 구글맵 위치 표시 구현함. 

구글맵은 도서관 위치 표시용 별도 컴포넌트로 분리

AI 창작 지원 기능은 텍스트 입력 후 API 호출하는 기본 UI 구현 (실제 API 연동은 추가 작업 필요)

두 컴포넌트 모두 BookDetailView.vue에서 사용-->

<template>
  <div class="book-detail-view" v-if="book">
    <button @click="goBack">← 뒤로가기</button>

    <div class="book-header">
      <img :src="book.image" alt="book cover" class="book-image" />
      <div class="book-info">
        <h1>{{ book.title }}</h1>
        <h3>저자: {{ book.author }}</h3>
        <p>출판년도: {{ book.publishedYear || "정보 없음" }}</p>
      </div>
    </div>

    <section class="book-description">
      <h2>책 소개</h2>
      <p>{{ book.description }}</p>
    </section>

    <!-- 도서관 위치 표시 (구글맵) -->
    <LibraryMap v-if="book" :lat="libraryLat" :lng="libraryLng" />

    <!-- AI 창작 지원 기능 -->
    <AIRecommendation v-if="book" />
  </div>

  <div v-else>
    <p>책 정보를 불러오는 중입니다...</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBookStore } from "@/stores/book";

import LibraryMap from "@/components/LibraryMap.vue";
import AIRecommendation from "@/components/AIRecommendation.vue";

const route = useRoute();
const router = useRouter();
const bookStore = useBookStore();

const book = ref(null);

const loadBook = async () => {
  if (bookStore.books.length === 0) {
    // 책 데이터가 없으면 불러오기
    await bookStore.loadBooks();
  }
  // URL 파라미터로 받은 bookId에 맞는 책 찾기
  book.value = bookStore.books.find(
    (b) => String(b.id) === route.params.bookId
  );
};

// 예시 도서관 좌표 (실제 데이터 있으면 교체)
const libraryLat = 37.5665;
const libraryLng = 126.978;

const goBack = () => {
  router.back();
};

onMounted(async () => {
  await loadBook();
});
</script>

<style scoped>
.book-detail-view {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.book-header {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.book-image {
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 6px;
}

.book-info h1 {
  margin: 0;
}

.book-info h3 {
  margin-top: 10px;
  color: #555;
}

.book-description {
  margin-top: 30px;
  line-height: 1.6;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  color: #007acc;
  margin-bottom: 20px;
  font-size: 1rem;
}

button:hover {
  text-decoration: underline;
}
</style>
