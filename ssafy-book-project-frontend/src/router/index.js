import { createRouter, createWebHistory } from "vue-router";

import BookDetailView from "@/views/BookDetailView.vue";
import BooksListView from "@/views/BooksListView.vue";
import LandingView from "@/views/LandingView.vue";

import ThreadsListView from '@/views/ThreadsListView.vue'
import ThreadWriteView from '@/views/ThreadWriteView.vue'
import ThreadDetailView from '@/views/ThreadDetailView.vue'

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
    name: 'threadsList',
    component: ThreadsListView,
  },
  {
    path: '/threads/:bookId/write',
    name: 'threadWrite',
    component: ThreadWriteView,
  },
  {
    path: '/threads/:threadId',
    name: 'threadDetail',
    component: ThreadDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
