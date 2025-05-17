<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <form @submit.prevent="handleSubmit">
        <h2>스레드 작성</h2>

        <label>제목</label>
        <input v-model="title" type="text" required />

        <label>내용</label>
        <textarea v-model="content" required></textarea>

        <label>읽은 날짜</label>
        <input type="date" v-model="readingDate" required />

        <div class="button-group">
          <button type="submit">작성</button>
          <button type="button" @click="$emit('close')">취소</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

defineProps({ visible: Boolean });
const emit = defineEmits(['submit', 'close']);

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
    const res = await axios.post(
      import.meta.env.VITE_API_BASE_URL + '/threads',
      newThread
    );

    emit('submit', res.data);
    emit('close');

    title.value = '';
    content.value = '';
    readingDate.value = '';
  } catch (err) {
    console.error('스레드 작성 실패:', err);
  }
}
</script>

<style scoped>
/* 배경 흐림 */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5); /* dim 처리 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 모달 내부 */
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* 입력 UI */
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: white;
  cursor: pointer;
}
</style>
