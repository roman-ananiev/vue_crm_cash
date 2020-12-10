import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: { layout: "main-layout" },
    name: "home",
    component: () => import("../views/Home")
  },
  {
    path: "/login",
    meta: { layout: "empty-layout" },
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/categories",
    meta: { layout: "main-layout" },
    name: "categories",
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/detail-record",
    meta: { layout: "main-layout" },
    name: "detail-record",
    component: () => import("../views/DetailRecord")
  },
  {
    path: "/history",
    meta: { layout: "main-layout" },
    name: "history",
    component: () => import("../views/History")
  },
  {
    path: "/planning",
    meta: { layout: "main-layout" },
    name: "planning",
    component: () => import("../views/Planning")
  },
  {
    path: "/profile",
    meta: { layout: "main-layout" },
    name: "profile",
    component: () => import("../views/Profile")
  },
  {
    path: "/record",
    meta: { layout: "main-layout" },
    name: "record",
    component: () => import("../views/Record")
  },
  {
    path: "/register",
    meta: { layout: "empty-layout" },
    name: "register",
    component: () => import("../views/Register")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
