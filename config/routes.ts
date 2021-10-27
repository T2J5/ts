export default [
  {
    path: '/login',
    exact: true,
    // component: '@/pages/login'
    component: '@/layouts/loginLayout',
    routes: [
      {
        path: '/login',
        exact: true,
        component: '@/pages/login',
      },
    ],
  },
  {
    path: '/',
    exact: true,
    component: '@/layouts/index',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: '@/pages/home' },
      { exact: true, path: '/home2', component: '@/pages/home' },
    ],
  },
];
