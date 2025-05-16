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
const emit = defineEmits(['submit']);

const title = ref('');
const content = ref('');
const readingDate = ref('');

async function handleSubmit() {
  const newThread = {
    title: title.value,
    content: content.value,
    reading_date: readingDate.value
  };

  // async function submit() {
  //   try {
  //     const res = await axios.post('/env와 경로', {
  //       title: title.value,
  //       content: content.value,
  //       reading_date: readingDate.value
  //     })
  //     emit('submit', res.data);
  //   } catch (err){
  //     console.log(err)
  //   }
  // }
  emit('submit', newThread);
}
</script>

<style>

</style>