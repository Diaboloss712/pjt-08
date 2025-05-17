// src/stores/thread.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useThreadStore = defineStore('thread', () => {
  const threads = ref([]);
  const currentThread = ref(null);

  const fetchThreads = () => {
    // 샘플 데이터를 미리 집어넣음
    threads.value = [
    {
        id: 201,
        title: '이번 주 책 후기 공유',
        author: '독서왕123',
        commentCount: 5,
        content: '이 책 정말 좋았어요!\n여러분도 읽어보셨나요?',
        cover_image: 'https://via.placeholder.com/600x200',
        book: {
        id: 10,
        title: '하루 10분 독서 습관',
        author: '이효진',
        image: 'https://via.placeholder.com/80x100',
        },
    },
    {
        id: 202,
        title: '이 책 어떻게 생각하세요?',
        author: '리뷰러',
        commentCount: 9,
        content: '다소 어려운 내용이지만 생각이 깊어졌어요.',
        cover_image: 'https://via.placeholder.com/600x200',
        book: {
        id: 11,
        title: '생각의 기술',
        author: '김정한',
        image: 'https://via.placeholder.com/80x100',
        },
      },
    ];

  };

  const addThread = (newThread) => {
    threads.value.unshift(newThread);
  };

  const fetchThreadById = (threadId) => {
    const found = threads.value.find(t => t.id === parseInt(threadId));
    if (found) {
        currentThread.value = found;
    } else {
        currentThread.value = null;
        console.warn('해당 ID의 쓰레드를 찾을 수 없습니다.');
    }
  };


  return {
    threads,
    currentThread,
    fetchThreads,
    fetchThreadById,
    addThread,
  };
});
