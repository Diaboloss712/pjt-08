<template>
  <div class="thread-list">
    <ul>
      <li v-for="thread in threads" :key="thread.id" @click="goToThread(thread.id)">
        <h4>{{ thread.title }}</h4>
        <p>작성자: {{ thread.author }}</p>
        <p>댓글 수: {{ thread.commentCount }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const threads = ref([]);

onMounted(() => {
  // 임시 데이터, 나중에 API 연동으로 변경
  threads.value = [
    { id: 101, title: '베스트 스레드 1', author: '사용자A', commentCount: 12 },
    { id: 102, title: '유용한 팁 공유', author: '사용자B', commentCount: 8 },
    { id: 103, title: '도서 추천 요청', author: '사용자C', commentCount: 15 },
  ];
});

const goToThread = (id) => {
  // 스레드 상세 페이지로 이동하는 라우팅, 팀원과 협의 필요
  router.push({ name: 'ThreadDetail', params: { threadId: id } });
};
</script>

<style scoped>
.thread-list ul {
  list-style: none;
  padding: 0;
}

.thread-list li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.thread-list li:hover {
  background-color: #f9f9f9;
}
</style>
