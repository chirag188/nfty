import React from 'react';

export const guestRoutes = [
  {
    path: '/',
    name: 'NFTY Protocol',
    exact: true,
    component: React.lazy(() => import('../../views/user/NFTYProtocol/NFTYProtocol')),
  },
  {
    path: '/about-us',
    name: 'About Us',
    exact: true,
    component: React.lazy(() => import('../../views/user/AboutUs/AboutUs')),
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    exact: true,
    component: React.lazy(() => import('../../views/user/ContactUs/ContactUs')),
  },
  {
    path: '/governance',
    name: 'Governance',
    exact: true,
    component: React.lazy(() => import('../../views/user/Governance/Governance')),
  },
  {
    path: '/family',
    name: 'Family',
    exact: true,
    component: React.lazy(() => import('../../views/user/Aide/Aide')),
  },
  {
    path: '/family/artist-apply',
    name: 'Artist-Apply',
    exact: true,
    component: React.lazy(() => import('../../views/user/Application/Artists')),
  },
  {
    path: '/family/partnerships-apply',
    name: 'Partnerships-Apply',
    exact: true,
    component: React.lazy(() => import('../../views/user/Application/Partnership')),
  },
  {
    path: '/family/ambassadors-apply',
    name: 'Ambassadors-Apply',
    exact: true,
    component: React.lazy(() => import('../../views/user/Application/Ambassdors')),
  },
  {
    path: '/family/artist-overview',
    name: 'Artist-Overview',
    exact: true,
    component: React.lazy(() => import('../../views/user/Overview/Overview')),
  },
  // {
  //   path: '/family/partnerships-overview',
  //   name: 'Partnerships-Overview',
  //   exact: true,
  //   component: React.lazy(() => import('../../views/user/Overview/Overview')),
  // },
  // {
  //   path: '/family/ambassadors-overview',
  //   name: 'Ambassadors-Overview',
  //   exact: true,
  //   component: React.lazy(() => import('../../views/user/Overview/Overview')),
  // },
  {
    path: '/family/artist-overview/:userId',
    name: 'User-Details',
    exact: true,
    component: React.lazy(() => import('../../views/user/UserDetails/UserDetails')),
  },
  {
    path: '/terms-and-condition',
    name: 'Terms and Condition',
    exact: true,
    component: React.lazy(() => import('../../views/user/TermsAndCondition/TermsAndCondition')),
  },
  {
    path: '/team-individuals',
    name: 'Team Individuals',
    exact: true,
    component: React.lazy(() => import('../../views/user/TeamIndividuals/TeamIndividuals')),
  },
  {
    path: '/road-map',
    name: 'Road Map',
    exact: true,
    component: React.lazy(() => import('../../views/user/RoadMap/RoadMap')),
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    exact: true,
    component: React.lazy(() => import('../../views/user/PrivacyPolicy/PrivacyPolicy')),
  },
  {
    path: '/news',
    name: 'News',
    exact: true,
    component: React.lazy(() => import('../../views/user/NewsPage/NewsPage')),
  },
];

export const otherRoutes = [
  {
    path: 'https://app.nftytoken.io/',
    name: 'Coming Soon',
    exact: true,
    component: React.lazy(() => import('../../views/user/comingSoon/index')),
  },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   exact: true,
  //   component: React.lazy(() => import('../../views/user/Dashboard/Dashboard')),
  // },
];
