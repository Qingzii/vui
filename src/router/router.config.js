import App from '../App'

const home     = r => require.ensure([], () => r(require('pages/index')), 'home')
const dropdown = r => require.ensure([], () => r(require('pages/dropdown')), 'dropdown')
const scroller = r => require.ensure([], () => r(require('pages/scroller')), 'scroller')
const search   = r => require.ensure([], () => r(require('pages/search')), 'search')
const swiper   = r => require.ensure([], () => r(require('pages/swiper')), 'swiper')
const table    = r => require.ensure([], () => r(require('pages/table')), 'table')
const picker   = r => require.ensure([], () => r(require('pages/picker')), 'picker')
const select   = r => require.ensure([], () => r(require('pages/select')), 'select')
const dialog   = r => require.ensure([], () => r(require('pages/dialog')), 'dialog')
const Switch   = r => require.ensure([], () => r(require('pages/switch')), 'switch')

let routers = [];
routers = [
  {
    path: '/',
    component: App,
    children: [
      //地址为空时跳转home页面
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        name: 'home',
        component: home
      },
      {
        path: 'dropdown',
        name: 'dropdown',
        component: dropdown,
      },
      {
        path: 'scroller',
        name: 'scroller',
        component: scroller,
      },
      {
        path: 'search',
        name: 'search',
        component: search,
      },
      {
        path: 'swiper',
        name: 'swiper',
        component: swiper,
      },
      {
        path: 'table',
        name: 'table',
        component: table,
      },
      {
        path: 'picker',
        name: 'picker',
        component: picker,
      },
      {
        path: 'select',
        name: 'select',
        component: select,
      },
      {
        path: 'dialog',
        name: 'dialog',
        component: dialog,
      },
      {
        path: 'switch',
        name: 'switch',
        component: Switch,
      }
    ]
  }
]

export default routers;
