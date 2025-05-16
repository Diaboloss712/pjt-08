<template>
  <section class="ai-recommendation">
    <h2>AI 창작 지원</h2>
    <textarea v-model="userInput" placeholder="이 책에 대해 AI에게 질문해 보세요." />
    <button @click="sendRequest" :disabled="loading">
      {{ loading ? '전송 중...' : '질문하기' }}
    </button>

    <div v-if="response" class="response">
      <h3>AI 응답:</h3>
      <p>{{ response }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const userInput = ref('');
const response = ref('');
const loading = ref(false);

const sendRequest = async () => {
  if (!userInput.value.trim()) return;

  loading.value = true;

  try {
    // TODO: 실제 AI API 호출 구현
    // 예시로 2초 대기 후 임시 응답 출력
    await new Promise(resolve => setTimeout(resolve, 2000));
    response.value = `AI 답변: "${userInput.value}"에 대한 창작 아이디어입니다.`;
  } catch (e) {
    response.value = 'AI 응답 중 오류가 발생했습니다.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.ai-recommendation {
  margin-top: 30px;
}
textarea {
  width: 100%;
  height: 100px;
  resize: vertical;
  margin-bottom: 10px;
}
button {
  padding: 8px 16px;
  cursor: pointer;
}
.response {
  margin-top: 20px;
  background: #f1f1f1;
  padding: 10px;
  border-radius: 4px;
}
</style>
