import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Home from "../views/Home.vue";
import EditTodo from "../views/EditTodo.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    component: LandingPage,
    name: "landing-page"
  },
  {
    path: "/home",
    component: Home,
    name: "home"
  },
  {
    path: "/edit-todo/:id",
    component: EditTodo,
    name: "edit-todo"
  },
  {
    path: "/about",
    component: About,
    name: "about"
  }
];

const router = new VueRouter({ routes, mode: "history" });
export default router;
