<script setup lang="ts">
import { ref } from "vue";
import http from "../../common/http";
import { IPost } from "../../common/interfaces";
import PostDetails from "./PostDetails.vue";

const posts = ref<IPost[]>([]);

try {
  await new Promise((resolve) => {
    setTimeout(async () => {
      const response = await (await fetch(`${http.BASE_URL}/post`)).json();
      posts.value = response;
      resolve(true);
    }, 100);
  });
} catch (e) {
  console.error({ e });
}
</script>

<template>
  <PostDetails v-for="post in posts" :key="post.id" :post="post" />
</template>

<style scoped></style>
