<template>
 <div>
   <el-aside width="200px">
          <el-menu :default-openeds="['1', '3']">
            <!-- 导航的数据 -->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i> 
                用户管理
              </template>
                <el-menu-item-group>
                  <el-menu-item @click="add" index="1-1">添加用户</el-menu-item>
                  <el-menu-item @click="see" index="1-2">查看用户</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            <el-submenu index="2">




              <template slot="title">
                <i class="el-icon-menu"></i>
                商品管理  
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">添加商品</el-menu-item>
                <el-menu-item index="2-2">
                  <router-link :to="{path:'/list'}">商品列表
                  </router-link>
                  </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
   </el-aside>

 </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
  	return {
  		tableData: []
  	}
  },
  created(){
  	this.$axios.get('/api/user').then(data=>{
  		console.log(data.data.data)
  		this.tableData=  data.data.data
  	})
  },
  methods:{
  	revise(){
  		this.$router.push('/revise')
  	},
  	add(){
  		this.$router.push('/add')
  	},
  	del(num){
  		this.$axios.get('/api/user/del',{
  			params:{
  				id:num
  			}
  		}).then(data=>{
  			this.tableData = this.tableData.filter(item=>{
  				return item.id != num
  			})
  		})
  	},
    see(){
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
 .el-aside {
    color: #333;
    text-align: center;
    height:600px;
    min-height:600px;
    color:#333;
    background:#fff;
  }
  a{
    color:black;
  }
</style>
