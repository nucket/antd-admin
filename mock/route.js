import { Constant } from './_utils'
const { ApiPrefix } = Constant

const database = [
  {
    id: '1',
    icon: 'dashboard',
    name: 'main',
    zh: {
      name: '主要的'
    },
    'pt-br': {
      name: 'principal'
    },
    route: '/dashboard',
  },
  {
    id: '2',
    breadcrumbParentId: '1',
    name: 'Medication',
    zh: {
      name: '药物'
    },
    'pt-br': {
      name: 'Medicamento'
    },
    icon: 'user',
    route: '/user',
  },
  {
    id: '7',
    breadcrumbParentId: '1',
    name: 'Statistics',
    zh: {
      name: '统计数据'
    },
    'pt-br': {
      name: 'Estatisticas'
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
    route: '/user/:id',
  },
  {
    id: '3',
    breadcrumbParentId: '1',
    name: 'Feeding',
    zh: {
      name: '喂食'
    },
    'pt-br': {
      name: 'Alimentação'
    },
    icon: 'api',
    route: '/request',
  },
  {
    id: '4',
    breadcrumbParentId: '1',
    name: 'Temperatures',
    zh: {
      name: '温度'
    },
    'pt-br': {
      name: 'Temperaturas'
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
    name: 'Chartes',
    zh: {
      name: 'Charters'
    },
    'pt-br': {
      name: 'Graficos'
    },
    icon: 'code-o',
  },
  {
    id: '51',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'ECharts',
    zh: {
      name: 'ECharts'
    },
    'pt-br': {
      name: 'ECharts'
    },
    icon: 'line-chart',
    route: '/chart/ECharts',
  },
  {
    id: '52',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'HighCharts',
    zh: {
      name: 'HighCharts'
    },
    'pt-br': {
      name: 'HighCharts'
    },
    icon: 'bar-chart',
    route: '/chart/highCharts',
  },
  {
    id: '53',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'Rechartst',
    zh: {
      name: 'Rechartst'
    },
    'pt-br': {
      name: 'Rechartst'
    },
    icon: 'area-chart',
    route: '/chart/Recharts',
  },
]

module.exports = {
  [`GET ${ApiPrefix}/routes`](req, res) {
    res.status(200).json(database)
  },
}
