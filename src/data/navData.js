const commonNavData = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/blog',
    title: 'Blog',
  },
  {
    path: '/products',
    title: 'Products',
  },
];

export const afterSigninNavData = [
  ...commonNavData,
  {
    path: '/dashboard',
    title: 'Dashboard',
  },
];

export const beforeSigninNavData = [
  ...commonNavData,
  {
    path: '/signup',
    title: 'Signup',
  },
  {
    path: '/signin',
    title: 'Signin',
  },
];
