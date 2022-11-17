<template>
  <div v-for="i of 2" :key="i">
    <div class="card">
      <div class="user mt-12 flex">
        <div class="avatar w-12 h-12 rounded-full bg-gray-300 mb-3 mr-4"></div>
        <div class="details flex flex-col items-start justify-center">
          <div class="name h-2 w-10 bg-gray-300 mb-3 rounded-md"></div>
          <div class="company h-2 w-40 bg-gray-300 rounded-md"></div>
        </div>
      </div>
      <div class="img"></div>
      <div class="bg-gray-300 h-16 rounded-md animate-pulse"></div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 500px;
  margin: auto auto;
  margin-bottom: 16px;
}
.img {
  @apply rounded-lg  bg-gray-300 h-96 animate-pulse mb-4;
}
</style>
