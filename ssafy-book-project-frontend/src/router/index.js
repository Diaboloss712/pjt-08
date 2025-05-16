import { createRouter, createWebHistory } from "vue-router";

import BookDetailView from "@/views/BookDetailView.vue";
import BooksListView from "@/views/BooksListView.vue";
import LandingView from "@/views/LandingView.vue";

import ThreadListView from '@/views/ThreadListView.vue'; // 병규 오빠가 작업한 threads 에 맞게 수정하면 됩니다

const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingView,
  },
  {
    path: "/books",
    name: "BooksList",
    component: BooksListView,
  },
  {
    path: "/books/:bookId",
    name: "BookDetail",
    component: BookDetailView,
    props: true, // URL 파라미터를 props로 받음
  },
  {
    path: '/threads',
    name: 'Threads',
    component: ThreadListView, // 병규 오빠가 작업한 컴포넌트로 교체 예정
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
