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
    name: "About",
    component: About
  },
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/report",
    name: "Report",
    component: Reprot
  },
  {
    path: "/stock",
    name: "Stock",
    component: Stock
  },
  {
    path: "/stockcreaste",
    name: "StockCreate",
    component: StockCreate
  },
  {
    path: "/stockedit",
    name: "StockEdit",
    component: StockEdit
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
