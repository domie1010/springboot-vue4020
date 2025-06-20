import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import cart from '@/views/modules/cart/list'
    import chongwu from '@/views/modules/chongwu/list'
    import chongwuCollection from '@/views/modules/chongwuCollection/list'
    import chongwuLiuyan from '@/views/modules/chongwuLiuyan/list'
    import chongwuYuyue from '@/views/modules/chongwuYuyue/list'
    import chongwuyongpin from '@/views/modules/chongwuyongpin/list'
    import chongwuyongpinCollection from '@/views/modules/chongwuyongpinCollection/list'
    import chongwuyongpinCommentback from '@/views/modules/chongwuyongpinCommentback/list'
    import chongwuyongpinOrder from '@/views/modules/chongwuyongpinOrder/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuangong from '@/views/modules/yuangong/list'
    import config from '@/views/modules/config/list'
    import dictionaryChongwu from '@/views/modules/dictionaryChongwu/list'
    import dictionaryChongwuCollection from '@/views/modules/dictionaryChongwuCollection/list'
    import dictionaryChongwuYuyueYesno from '@/views/modules/dictionaryChongwuYuyueYesno/list'
    import dictionaryChongwuyongpin from '@/views/modules/dictionaryChongwuyongpin/list'
    import dictionaryChongwuyongpinCollection from '@/views/modules/dictionaryChongwuyongpinCollection/list'
    import dictionaryChongwuyongpinOrder from '@/views/modules/dictionaryChongwuyongpinOrder/list'
    import dictionaryChongwuyongpinOrderPayment from '@/views/modules/dictionaryChongwuyongpinOrderPayment/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryYuangong from '@/views/modules/dictionaryYuangong/list'
    import dictionaryZhuangtia from '@/views/modules/dictionaryZhuangtia/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChongwu',
        name: '宠物类型',
        component: dictionaryChongwu
    }
    ,{
        path: '/dictionaryChongwuCollection',
        name: '收藏表类型',
        component: dictionaryChongwuCollection
    }
    ,{
        path: '/dictionaryChongwuYuyueYesno',
        name: '申请状态',
        component: dictionaryChongwuYuyueYesno
    }
    ,{
        path: '/dictionaryChongwuyongpin',
        name: '商品类型',
        component: dictionaryChongwuyongpin
    }
    ,{
        path: '/dictionaryChongwuyongpinCollection',
        name: '收藏表类型',
        component: dictionaryChongwuyongpinCollection
    }
    ,{
        path: '/dictionaryChongwuyongpinOrder',
        name: '订单类型',
        component: dictionaryChongwuyongpinOrder
    }
    ,{
        path: '/dictionaryChongwuyongpinOrderPayment',
        name: '订单支付类型',
        component: dictionaryChongwuyongpinOrderPayment
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryYuangong',
        name: '员工部门',
        component: dictionaryYuangong
    }
    ,{
        path: '/dictionaryZhuangtia',
        name: '领养状态',
        component: dictionaryZhuangtia
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/chongwu',
        name: '宠物信息',
        component: chongwu
      }
    ,{
        path: '/chongwuCollection',
        name: '宠物收藏',
        component: chongwuCollection
      }
    ,{
        path: '/chongwuLiuyan',
        name: '宠物留言',
        component: chongwuLiuyan
      }
    ,{
        path: '/chongwuYuyue',
        name: '宠物领养',
        component: chongwuYuyue
      }
    ,{
        path: '/chongwuyongpin',
        name: '商品',
        component: chongwuyongpin
      }
    ,{
        path: '/chongwuyongpinCollection',
        name: '商品收藏',
        component: chongwuyongpinCollection
      }
    ,{
        path: '/chongwuyongpinCommentback',
        name: '商品评价',
        component: chongwuyongpinCommentback
      }
    ,{
        path: '/chongwuyongpinOrder',
        name: '商品订单',
        component: chongwuyongpinOrder
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
