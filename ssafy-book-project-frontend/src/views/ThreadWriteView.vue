<template>
  <div class="modal" v-show="visible">
    <ThreadForm @submit="handleSubmit" />
    <button @click="$emit('close')">닫기</button>
  </div>
</template>

<script setup>
import ThreadForm from '@/components/ThreadForm.vue';
const emit = defineEmits(['close', 'submit']);
defineProps(['visible']);

function handleSubmit(data) {
  emit('submit', data);
}
</script>
