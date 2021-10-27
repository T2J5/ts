import { defineConfig } from 'umi';

export default defineConfig({
  title: 'tj',
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  mfsu: {},
  routes: [
    {
      path: '/login',
      exact: true,
      component: '@/pages/login',
    },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: '@/pages/home' },
        { exact: true, path: '/home2', component: '@/pages/home' },
      ],
    },
  ],
});
