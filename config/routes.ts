export default [
  { path: '/login', component: '@/pages/login' },
  {
    path: '/',
    // exact: true,
    component: '@/layouts/index',
    routes: [{ path: '/home', component: '@/pages/home' }],
  },
];
