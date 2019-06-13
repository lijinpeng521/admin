import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../container/Home.vue'
import Login from '../container/Login.vue'
import Revise from '../container/Revise.vue'
import Add from '../container/Add.vue'
import Look from '../container/Look.vue'
import List from '../container/List.vue'
Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		component:Home,
		meta:{
			isAuth:true
		}
	},
	{
		//登录页面
		path:'/login',
		component:Login
	},
	{
		//修改用户信息
		path:'/revise/:id',
		name:'revise',
		meta:{
			isAuth:true
		},
		component:Revise
	},
	{
		//添加用户
		path:'/add',
		meta:{
			isAuth:true
		},
		component:Add
	},
	{
		//查看用户
		path:'/look/:id',
		name:'look',
		meta:{
			isAuth:true
		},
		component:Look
	},
	{
		//商品列表
		path:'/list',
		name:'list',
		meta:{
			isAuth:true
		},
		component:List
	}
]
const router = new VueRouter({
	routes:routes
})
router.beforeEach((to, from, next)=>{
	if(to.meta.isAuth){
		if(localStorage.getItem('setUser')){
			next()
		}else{
			next({path:'/login'})
		}
	}else{
		next()
	}
  
})
export default router