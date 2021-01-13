import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import About from "../views/About.vue"
import Register from "@/views/Register.vue"
import Reprot from "@/views/Report.vue"
import Stock from "@/views/Stock.vue"
import StockCreate from "@/views/StockCreate.vue"
import StockEdit from "@/views/StockEdit.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "*",
    redirect: "/login"
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/report",
    name: "register",
    component: Reprot
  },
  {
    path: "/stock",
    name: "stock",
    component: Stock
  },
  {
    path: "/stock-create",
    name: "stock-create",
    component: StockCreate
  },
  {
    path: "/stock-edit",
    name: "stock-edit",
    component: StockEdit
  },
  {
    path: "/stock-edit/:id"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
