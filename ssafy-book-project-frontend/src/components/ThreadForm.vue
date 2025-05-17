<template>
  <form @submit.prevent="handleSubmit">
    <label>제목</label>
    <input v-model="title" type="text" required />

    <label>내용</label>
    <textarea v-model="content" required></textarea>

    <label>읽은 날짜</label>
    <input type="date" v-model="readingDate" required />

    <button type="submit">작성</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'; // 서버 요청을 위해 axios 사용

const emit = defineEmits(['submit']);

const title = ref('');
const content = ref('');
const readingDate = ref('');

async function handleSubmit() {
  const newThread = {
    title: title.value,
    content: content.value,
    reading_date: readingDate.value,
  };

  try {
    // 실제 서버에 post 요청
    const res = await axios.post(
      import.meta.env.VITE_API_BASE_URL + '/threads', // ✅ 경로는 .env에서 관리
      newThread
    );

    // 요청 성공 시 상위 컴포넌트로 전달
    emit('submit', res.data);

    // 폼 초기화
    title.value = '';
    content.value = '';
    readingDate.value = '';
  } catch (err) {
    console.error('스레드 작성 실패:', err);
    // TODO: 사용자에게 오류 메시지 표시
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

label {
  font-weight: bold;
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
