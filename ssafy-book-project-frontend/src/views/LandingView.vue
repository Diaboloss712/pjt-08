<!--메인 페이지-->

<template>
  <div class="landing-view">
    <header class="header">
      <h1>도서 프로젝트 메인 페이지</h1>
      <nav>
        <ul class="nav-list">
          <li><router-link to="/">메인</router-link></li>
          <li><router-link to="/books">도서 목록</router-link></li>
          <li><router-link to="/threads">스레드</router-link></li>
        </ul>
      </nav>
    </header>

    <section class="content"> 
        
      <h2>베스트셀러</h2>
      <BestSellerList />
      <!-- 베스트셀러 리스트 넣기 (나중에 동적 데이터 연결) -->
      <p>베스트셀러 콘텐츠 영역</p>

      <h2>인기 스레드</h2>
      <ThreadList />
      <!-- 인기 스레드 리스트 넣기 (스레드는 팀원이 작업중)) -->
      <p>인기 스레드 콘텐츠 영역</p>

      <h2>장르별 추천 도서</h2>
      <GenreBookList /> 
      <p>장르별 추천 도서 콘텐츠 영역</p>

    </section>
  </div>
</template>

<script setup>
import BestSellerList from '@/components/BestSellerList.vue';
import ThreadList from '@/components/ThreadList.vue';
import GenreBookList from '@/components/GenreBookList.vue';
</script>

<style scoped>
.landing-view {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.nav-list {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
}

.nav-list li {
  font-weight: bold;
}

.nav-list li a.router-link-active {
  color: #007acc;
  text-decoration: underline;
}

.content h2 {
  margin-top: 30px;
}
</style>

