import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Payment Pages',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Manage all products',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Invoice',
        link: '/pages/forms/layouts',
      },
      {
        title: 'E-reservation',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Products',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Subscription',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Quick Cash',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'Promo Codes',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Add',
        link: '',
      },
      {
        title: 'Manage',
        link: '',
      },
    ],
  },
  {
    title: 'Reports',
    icon: 'browser-outline',
    children: [
      {
        title: 'Sales',
        link: '',
      },
      {
        title: 'Event Sales',
        link: '',
      },
      {
        title: 'Statement',
        link: '',
      },
      {
        title: 'Buyer Info',
        link: '',
      },
    ],
  },
  {
    title: 'My Account',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Personal',
        link: '',
      },
      {
        title: 'Business',
        link: '',
      },
      {
        title: 'Payme Integration',
        link: '',
      },
    ],
  },
  {
    title: 'Team',
    icon: 'map-outline',
    children: [
      {
        title: 'Add Team Member',
        link: '',
      },
      {
        title: 'Team Mangament',
        link: '',
      },
    ],
  },
  {
    title: 'Finicials',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Bank Accounts',
        link: '',
      },
      {
        title: 'Withdrawals',
        link: '',
      },
    ],
  },
];
