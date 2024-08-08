import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
   
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Offices',
          links: [
            {
              text: 'Executive Council',
              href: getPermalink('/2024/excos'),
            },
            {
              text: 'The House',
              href: getPermalink('/2024/house'),
            },
            {
              text: 'Legislative Committee',
              href: getPermalink('/2024/jc'),
            },
            // {
            //   text: 'Personal',
            //   href: getPermalink('/homes/personal'),
            // },
          ],
        },
        // {
        //   text: 'Activities',
        //   href: getPermalink('#'),
        // },
    {
      text: 'Magazine',
      href: getPermalink('/magazine'),
    },
    {
      text: 'Advocacy Campaigns',
      links: [
        {
          text: 'Campaigns',
          href: getPermalink('/advocacy-campaigns'),
        },
        {
          text: 'Outreaches',
          href: getPermalink('/outreaches'),
        },
        {
          text: 'Zoom Conferences',
          href: getPermalink('/zoom-conferences'),
        },
        // {
        //   text: 'Personal',
        //   href: getPermalink('/homes/personal'),
        // },
      ],
    },
  ],
  actions: [{ text: 'Follow Us', href: 'https://www.instagram.com/nileunimsa', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'About Us',
      links: [
        { text: 'Our Students', href: '/about' },
        { text: 'Sports Week', href: '/about' },
        // { text: 'Team', href: '#' },
        // { text: 'Enterprise', href: '#' },
        { text: 'Our stories', href: '/magazine' },
        // { text: 'Pricing', href: '#' },
        // { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Offices',
      links: [
        { text: 'President', href: '/2024/excos/president' },
        { text: 'Speaker Of The House', href: '/2024/house/speaker' },
        { text: 'Secretary General', href: '/2024/excos/sec-gen' },
        { text: 'Vice President: Internal', href: '/2024/excos/vp-internal' },
        
        // { text: 'Electron', href: '#' },
        // { text: 'NUMSA  Desktop', href: '#' },
      ],
    },
    {
      title: 'Activities',
      links: [
        { text: 'NUMSA Inaugural Launch', href: '#' },
        { text: 'World Health Day', href: '#' },
        // { text: 'Professional Services', href: '#' },
        // { text: 'Skills', href: '#' },
        // { text: 'Status', href: '#' },
      ],
    },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('#') },
    { text: 'Privacy Policy', href: getPermalink('#') },
  ],
  socialLinks: [
    { ariaLabel: 'Our X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Our Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/nileunimsa' },
    { ariaLabel: 'Our Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://oneadisa.vercel.app">Adisa</a> · All rights reserved.
  `,
};
