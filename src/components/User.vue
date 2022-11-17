<script setup lang="ts">
import { ref } from "vue";
import { IUser } from "../common/interfaces";
import http from "./../common/http";

const props = defineProps<{ postId: string }>();

const user = ref<IUser>();

const response: IUser[] = await (
  await fetch(`${http.BASE_URL}/post/${props.postId}/user`)
).json();

// Lower case the username
user.value = response[0];
</script>

<template>
  <div class="user_details flex items-center px-3 pt-3">
    <div class="image mr-4 border border-blue-500 rounded-full">
      <img :src="user?.avatar" class="rounded-full w-10" alt="" />
    </div>
    <div class="name font-medium text-gray-700">
      <div>{{ user?.name }}</div>
      <div class="text-xs text-gray-400 font-light">
        {{ user?.job_title }} at {{ user?.company_name }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
