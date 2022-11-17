<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import { defineAsyncComponent } from "vue";
import { IPost } from "../../common/interfaces";
import User from "../User.vue";

const props = defineProps<{ post: IPost }>();
const showComments = ref(false);

// just wanted to try it, yay
const CommentList = defineAsyncComponent({
  loader: () => import("./../Comment/CommentList.vue"),
  delay: 200,
});

const postDate = computed(() =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(props.post.createdAt))
);
</script>

<template>
  <div class="post-card">
    <div class="user-details">
      <User :postId="post.id" />
    </div>
    <div class="title py-4 px-3 font-normal">{{ post.title }}</div>
    <div class="created_at px-3 text-gray-400 text-sm font-light mb-1">
      Posted {{ postDate }}
    </div>
    <div class="img mt-4">
      <img :src="post.image" class="border-radius-3 rounded-md" />
    </div>
    <div
      class="bg-gray-200 h-12 mt-3 rounded-md flex items-center justify-around"
    >
      <div class="like">
        <button
          class="hover:bg-purple-400 px-16 py-1 rounded-md hover:text-white transition-all focus:bg-purple-600 focus:text-white"
        >
          Like
        </button>
      </div>
      <div
        class="comments px-16 hover:cursor-pointer"
        @click="showComments = true"
      >
        Comments
      </div>
      <CommentList
        :open="showComments"
        @close="showComments = false"
        :postId="post.id"
      />
    </div>
  </div>
</template>

<style scoped>
.post-card {
  @apply rounded-lg mt-24 border-gray-200;
  max-width: 40%;
  margin: auto auto;
  margin-top: 4rem;
  margin-bottom: 16px;
}

.post-card:first-child {
  margin-top: 16px;
}

@media screen and (max-width: 576px) {
  .post-card {
    max-width: 80%;
    margin: auto auto;
    margin-top: 24px;
  }
}
</style>
