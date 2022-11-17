import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "",
    props: true,
    component: () => import("./../components/Posts/PostList.vue"),
  },
  {
    path: "/post/:id",
    name: "",
    props: true,
    component: () => import("./../components/Comment/CommentList.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
