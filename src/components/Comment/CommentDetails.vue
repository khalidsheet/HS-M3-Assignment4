<script setup lang="ts">
import { IComment } from "../../common/interfaces";

defineProps<{ comment?: IComment }>();
</script>

<template>
  <div class="overflow-hidden border-b bg-white w-full">
    <div class="w-full">
      <dl class="w-full py-2">
        <dt class="text-md font-medium text-gray-400 w-full">
          {{ comment?.user }}
        </dt>
        <dt class="text-sm font-light text-gray-600 w-full">
          {{ comment?.text }}
        </dt>
      </dl>
    </div>
  </div>
</template>

<style scoped></style>
