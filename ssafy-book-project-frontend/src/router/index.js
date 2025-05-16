import { createRouter, createWebHistory } from 'vue-router'

import ThreadsListView from '@/views/ThreadsListView.vue'
import ThreadWriteView from '@/views/ThreadWriteView.vue'
import ThreadDetailView from '@/views/ThreadDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
})

export default router
