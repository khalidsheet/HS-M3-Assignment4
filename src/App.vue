<script setup lang="ts">
import { ref } from "vue";
import PostList from "./components/Posts/PostList.vue";
import Loading from "./components/Shared/Loading.vue";
</script>

<template>
  <Suspense>
    <template #fallback>
      <Loading />
    </template>
    <PostList />
  </Suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
