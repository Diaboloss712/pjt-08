<template>
  <div>
    <ThreadList v-if="!visible" />
    <ThreadWriteView
      :visible="visible"
      @submit="addThread"
      @close="visible = false"
    />
    <button @click="visible = true">스레드 작성</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useThreadStore } from '@/stores/thread';
import ThreadList from '@/components/ThreadList.vue';
import ThreadWriteView from './ThreadWriteView.vue';

const visible = ref(false);
const threadStore = useThreadStore();

const threadWrite = () => {
  visible.value = !visible.value;
};

const submitThread = (newThread) => {
  threadStore.addThread(newThread);
};

onMounted(() => {
  threadStore.fetchThreads(); // 샘플 데이터 로딩
});
</script>

<style scoped>

</style>