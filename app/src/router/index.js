import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Watch from "../views/Watch.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/search/:main",
        name: "Search",
        component: Search

    },
    {
        path: "/item/:id",
        name: "item",
        component: Watch
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
