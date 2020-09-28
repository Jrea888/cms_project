import Vue from 'vue';
import App from './App.vue';
import Axios from 'axios';

// 导入 Mint-UI
import MintUi from 'mint-ui';
// 安装Mint
Vue.use(MintUi);
// 导入路由
import VueRouter from 'vue-router';
// 安装路由
Vue.use(VueRouter);
//VuePreview:引入vue-preview
import VuePreview from 'vue-preview';
// 安装 vue-preview 缩略图
Vue.use(VuePreview);

// 配置拦截器
Axios.defaults.baseURL = 'http://152.136.185.210:8000/api/z8/';
// 挂载到原型
Vue.prototype.$axios = Axios;
// 拦截器应用配置 预加载 请求
Axios.interceptors.request.use(function(config){ 
    MintUi.Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
    });
    return config;
});
// 响应
Axios.interceptors.response.use(function(config){ 
    MintUi.Indicator.close();
    return config;
});


// Mint-UI样式引入
import 'mint-ui/lib/style.css';
// 引入MUI 样式
import './static/vendor/mui/dist/css/mui.css';
// 引入全局样式  和自定义样式 引入
import './static/css/global.css';
import './static/css/previewCommon.css';
// 注册全局组件
import NavBar from './components/common/NavBar.vue';
Vue.component("NavBar",NavBar);

// 引入自定义组件   按需加载
// const Home = resolve => require(['./compenonts/Home.vue'],resolve);
const Home = r => require(['./components/home/Home.vue'],r);
const Member = r => require(['./components/member/Member.vue'],r);
const Cart = r => require(['./components/cart/Cart.vue'],r);
const Search = r => require(['./components/search/Search.vue'],r);
const News = r => require(['./components/content/news/News.vue'],r);
const NewsDetail = r => require(['./components/content/news/NewsDetail.vue'],r);
const GoodsList = r => require(['./components/content/goods/GoodsList.vue'],r);
const GoodsDetail = r => require(['./components/content/goods/GoodsDetail.vue'],r);

// import Home from './components/home/Home.vue';
// import Member from './components/member/Member.vue';
// import Cart from './components/cart/Cart.vue';
// import Search from './components/search/Search.vue';
// import News from './components/content/news/News.vue';
// import NewsDetail from './components/content/news/NewsDetail.vue';
// import GoodsList from './components/content/goods/GoodsList.vue';
// import GoodsDetail from './components/content/goods/GoodsDetail.vue';

// 创建路由对象
const router = new VueRouter({
    // 设置激活链接
    linkActiveClass:'mui-active',
    routes:[
        { 
            path:'/', 
            redirect:'/home'
        },
        { 
            name:'home',
            path:'/home',
            component:Home
        },
        {
            name:'member',
            path:'/member',
            component:Member,
        },
        {
            name:'cart',
            path:'/cart',
            component:Cart
        },
        {
            name:'search',
            path:'/search',
            component:Search
        },
        {
            name:'newslist',
            path:'/newslist',
            component:News
        },
        {
            name:'newsdetail',
            path:'/newsdetail/:id',
            component:NewsDetail
        },
        {
            name:'goodslist',
            path:'/goodslist/',
            component:GoodsList
        },
        {
            name:'goods.detail',
            path:'/detail/:id',
            component:GoodsDetail
        }
    ],
    mode:'history'
});

console.log("更改了第三方包？");
console.log("又更改了第三方包？");
console.log("加入名称减缩版？打包");
new Vue({
    el:'#app',
    router,
    render: c => c(App),
});
