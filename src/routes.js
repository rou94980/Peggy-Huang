import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/HomeView.vue"),
      meta: {
        title: "黃珮菁",
      },
    },
    {
        path: "/portfolio",
        name: "pportfolio",
        component: () => import(/* webpackChunkName: "portfolio" */ "./views/PortfolioView.vue"),
        meta: {
          title: "作品集",  
        },
      },
  //若網址列亂輸入,就會跳到404頁面,此區塊請固定放最下方
//   {
//     path: "/:pathMatch(.*)*",
//     name: "NotFound",
//     component: () =>
//       import(/* webpackChunkName: "NotFound" */ "../views/NotFoundView.vue"),
//     meta: {
//       title: "404 NotFound",
//     },
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach(async (to, from) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} ｜ 黃珮菁`;
  } else {
    document.title = `黃珮菁`;
  }
});

export default router;
