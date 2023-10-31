import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store/store'

Vue.use(Router)

const router = new Router({
                            mode: 'history',
                            base: process.env.BASE_URL,
                            scrollBehavior() {
                              return {
                                x: 0,
                                y: 0
                              }
                            },
                            routes: [
                              {
                                path     : '/',
                                name     : 'home',
                                component: () => import('@/views/pages/index.vue')
                              },
                              {
                                path     : '/performances',
                                name     : 'performance',
                                component: () => import('@/views/pages/performance/index.vue'),
                                props    : true
                              },
                              {
                                path     : '/durabilities',
                                name     : 'durability',
                                component: () => import('@/views/pages/durability/index.vue'),
                                props    : true
                              },
                              {
                                path     : '/contact-us',
                                name     : 'contact',
                                component: () => import('@/views/pages/contact/index.vue'),
                                props    : true
                              },
                              {
                                path     : '/404',
                                name     : '404',
                                component: () => import('@/views/pages/error404.vue')
                              }
                            ]
                          })

router.afterEach((to, from) => {
})

export default router
