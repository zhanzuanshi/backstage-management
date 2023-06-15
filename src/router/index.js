import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "@/utils/storage";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: "登录",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: '/layout',
    name: "首页",
    redirect:'/dashboard',
    component: () => import("@/views/layout/index.vue"),
    children: [
      {
        path: '/dashboard',
        name: "仪表盘",
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: '/article',
        name: "文章",
        component: () => import("@/views/article/index.vue"),
      },
    ],
  },
];
const router = new VueRouter({
  routes,
});
const whiteList=['/']
const token=getToken()
router.beforeEach((to,from,next)=>{
if(token || whiteList.includes(to.path)) return next()
next('/')
})
export default router;
