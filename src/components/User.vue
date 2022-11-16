<script setup lang="ts">
import { ref } from "vue";
import { IUser } from "../common/interfaces/IUser";
import http from "./../common/http";

/**
 * It's just the PoC component
 */

const users = ref<IUser[]>([]);

const response: IUser[] = await (await fetch(`${http.BASE_URL}/users`)).json();

// Lower case the username
users.value = response.map((user) => {
  user.name = user.name.toLowerCase();
  return user;
});
</script>

<template>
  <div v-for="user in users" :key="user.id">{{ user.name }}</div>
</template>

<style scoped></style>
