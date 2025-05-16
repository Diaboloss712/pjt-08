<template>
  <div>
    <button @click="threadWrite">스레드 생성</button>

    <ThreadList :threads="threads" />

    <ThreadWriteView
      :visible="visible"
      @close="visible = false"
      @submit="addThread"
    />
  </div>
</template>

<script setup>
  import ThreadList from '@/components/ThreadList.vue';
  import ThreadWriteView from './ThreadWriteView.vue';
  import {ref} from 'vue';

  const visible = ref(false)
  const threadWrite = () => {
    visible.value = !visible.value
  }
  const threads = ref([]);
  const addThread = (newThread) => {
    threads.value.unshift(newThread)
  }

  // onMounted(async () => {
  //   const res = await axios.get('env와 경로')
  //   threads.value = res.data;
  // })
  threads.value = [
    { id: 101, title: '베스트 스레드 1', author: '사용자A', commentCount: 12, book:
    {
      id: 2,
      title: '베스트셀러 2',
      author: '작가 B',
      image: 'https://via.placeholder.com/80x100',
    }

    },
    { id: 102, title: '유용한 팁 공유', author: '사용자B', commentCount: 8 },
    { id: 103, title: '도서 추천 요청', author: '사용자C', commentCount: 15 },
  ];

</script>

<style scoped>

</style>