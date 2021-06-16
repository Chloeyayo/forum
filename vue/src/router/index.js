import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '@/components/Profile'
import Forum from '@/components/Forum'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: "Forum" },
    children: [
    {
      path: '/profile',
      name: "Profile",
      component: Profile,
      meta: {
        requireToken: true,
      }
    }, {
      path: '/home',
      name: "Forum",
      component: Forum,

    }, ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  //  {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('../views/Login.vue')
  // }
]

const router = new VueRouter({
  routes
})
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


router.beforeEach((to, from, next) => {



  const token = window.sessionStorage.getItem('authorization');
  // 有token
  if (to.meta.requireToken) {
    if (!token) {
      alert("请登录")
      return next('/home')
    }
    next();
  }
  next();
  // if (!token) {
  //   // 直接放行
  //   next();
  // } else { // 否则是没有
  //   // 如果去的是登录页
  //   if (!to.meta.requireToken) {
  //     // 直接放行
  //     next();
  //   } else {
  //     // 如果去的是其他页,跳转到登录页
  //     // 跳转到登录页
  //     return next('/');
  //   }
  // }
})

export default router