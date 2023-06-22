import { Constant } from './_utils'
const { ApiPrefix } = Constant

const database = [
  {
    id: '1',
    icon: 'dashboard',
    name: 'Main',
    zh: {
      name: '主要的'
    },
    'pt-br': {
      name: 'Principal'
    },
    'fr': {
      name: 'Principal'
    },
    'es': {
      name: 'Principal'
    },
    'ar': {
      name: 'رئيسي'
    },
    route: '/dashboard',
  },
  {
    id: '2',
    breadcrumbParentId: '1',
    name: 'Medicine',
    zh: {
      name: '医学'
    },
    'pt-br': {
      name: 'Medicina'
    },
    'fr': {
      name: 'Médecine'
    },
    'es': {
      name: 'Medicina'
    },
    'ar': {
      name: 'طبّ'
    },
    icon: 'user',
    route: '/user',
  },
  {
    id: '7',
    breadcrumbParentId: '1',
    name: 'Food',
    zh: {
      name: '食物'
    },
    'pt-br': {
      name: 'Comida'
    },
    'fr': {
      name: 'Nourriture'
    },
    'es': {
      name: 'Comida'
    },
    'ar': {
      name: 'طعام'
    },
    icon: 'shopping-cart',
    route: '/post',
  },
  {
    id: '21',
    menuParentId: '-1',
    breadcrumbParentId: '2',
    name: 'User Detail',
    zh: {
      name: '用户详情'
    },
    'pt-br': {
      name: 'Detalhes do usuário'
    },
    'fr': {
      name: 'Principal'
    },
    'es': {
      name: 'Principal'
    },
    'ar': {
      name: 'رئيسي'
    },
    route: '/user/:id',
  },
  {
    id: '3',
    breadcrumbParentId: '1',
    name: 'Indicators',
    zh: {
      name: '指标'
    },
    'pt-br': {
      name: 'Indicadores'
    },
    'fr': {
      name: 'Indicateurs'
    },
    'es': {
      name: 'Indicadores'
    },
    'ar': {
      name: 'مؤشرات'
    },
    icon: 'api',
    route: '/request',
  },
  {
    id: '4',
    breadcrumbParentId: '1',
    name: 'Statistics',
    zh: {
      name: '统计'
    },
    'pt-br': {
      name: 'Estatísticas'
    },
    'fr': {
      name: 'Statistiques'
    },
    'es': {
      name: 'Estadísticas'
    },
    'ar': {
      name: 'إحصائيات'
    },
    icon: 'camera-o',
  },
  {
    id: '45',
    breadcrumbParentId: '4',
    menuParentId: '4',
    name: 'Inside',
    zh: {
      name: '内部'
    },
    'pt-br': {
      name: 'Interior'
    },
    icon: 'edit',
    route: '/editor',
  },
  {
    id: '5',
    breadcrumbParentId: '1',
    name: 'Storage',
    zh: {
      name: '存储'
    },
    'pt-br': {
      name: 'Armazenamento'
    },
    'fr': {
      name: 'Stockage'
    },
    'es': {
      name: 'Almacenamiento'
    },
    'ar': {
      name: 'تخزين'
    },
    icon: 'code-o',
  },
  {
    id: '6',
    breadcrumbParentId: '1',
    name: 'Ventilation',
    zh: {
      name: '通风'
    },
    'pt-br': {
      name: 'Ventilação'
    },
    'fr': {
      name: 'Ventilation'
    },
    'es': {
      name: 'Ventilación'
    },
    'ar': {
      name: 'تهوية'
    },
    icon: 'code-o',
  },
  {
    id: '7',
    breadcrumbParentId: '1',
    name: 'Other',
    zh: {
      name: '其他'
    },
    'pt-br': {
      name: 'Outro'
    },
    'fr': {
      name: 'Autre'
    },
    'es': {
      name: 'Otros'
    },
    'ar': {
      name: 'آخر'
    },
    icon: 'code-o',
  },
  // {
  //   id: '51',
  //   breadcrumbParentId: '5',
  //   menuParentId: '5',
  //   name: 'ECharts',
  //   zh: {
  //     name: 'ECharts'
  //   },
  //   'pt-br': {
  //     name: 'ECharts'
  //   },
  //   icon: 'line-chart',
  //   route: '/chart/ECharts',
  // },
  // {
  //   id: '52',
  //   breadcrumbParentId: '5',
  //   menuParentId: '5',
  //   name: 'HighCharts',
  //   zh: {
  //     name: 'HighCharts'
  //   },
  //   'pt-br': {
  //     name: 'HighCharts'
  //   },
  //   icon: 'bar-chart',
  //   route: '/chart/highCharts',
  // },
  // {
  //   id: '53',
  //   breadcrumbParentId: '5',
  //   menuParentId: '5',
  //   name: 'Rechartst',
  //   zh: {
  //     name: 'Rechartst'
  //   },
  //   'pt-br': {
  //     name: 'Rechartst'
  //   },
  //   icon: 'area-chart',
  //   route: '/chart/Recharts',
  // },
]

module.exports = {
  [`GET ${ApiPrefix}/routes`](req, res) {
    res.status(200).json(database)
  },
}
