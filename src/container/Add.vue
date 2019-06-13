<template>
  <div>
    <back></back>
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
			      	<button @click="ok">添加</button>
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
import Back from '../components/common/Back.vue'
export default {
  name: 'Home',
  data(){
  	return {
  		username:'',
  		password:''
  	}
  },
  components:{
  	'safevue':Safe,
    'back':Back
  },
  methods:{
  	ok(){
  		this.$axios.get('/api/user/add',{
  			params:{
  				username:this.username,
  				password:this.password
  			}
  			
  		}).then(data=>{
  			if(data.data.code==1){
          alert('添加成功')
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
.el-main button{
	color:blue;
	width:100px;
	height:30px;
	font-size:25px;
	line-height:30px;
	position: absolute;
	top:200px;
	left:170px;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
