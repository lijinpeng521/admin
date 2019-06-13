<template>
  <div>
    <heads></heads>
   	<el-container>
  		<el-main>
  			<el-container>
  				<!--左边的数据 -->
			  <safevue></safevue>
			  <!-- 右边的数据 -->
			   <el-container>
			    <el-main>
			      <div class="oll">
			      	用户名称：<input v-model="username" type="text" placeholder="用户名"><br>
			      	用户密码：<input v-model="password"  type="password" placeholder="用户密码"><br>
			      	<el-button @click="addBtnFn" type="success" plain>添加用户</el-button>
			      </div>	
			      
			    </el-main>
			  </el-container>

			</el-container>
		</el-main>
		<el-footer>Footer</el-footer>
	</el-container>
  </div>
</template>

<script>
import Safe from '../components/common/Safe.vue'
import Heads from '../components/common/Heads.vue'
export default {
  name: 'Add',
  data(){
  	return {
  		username:'',
  		password:''
  	}
  },
  components:{
  	'safevue':Safe,
    'heads':Heads
  },
  methods:{
  	addBtnFn(){
  		this.$axios.get('/api/user/add',{
  			params:{
  				username:this.username,
  				password:this.password
  			}
  			
  		}).then(data=>{
  			if(data.data.code==1){
  				this.$router.push('/')
  			}
  		})
  	}
  }
}
</script>
<style scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
 .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
    height:600px;
    min-height:600px;
    color:#333;
    background:#fff;
  }
.el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0;
}
.el-main .oll{
	width:600px;
	height:500px;
	font-size:28px;
	margin: 200px auto;
	position: relative;
}
.el-main div input{
	width:300px;
	height:30px;
	font-size:20px;
	margin-left:20px;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  button{
    margin-top:100px; 
    margin-left:180px;
  }
</style>
