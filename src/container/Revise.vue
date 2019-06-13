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
			      新名称：<el-input
					  placeholder="输入新账号"
					  v-model="username"
					  clearable>
					</el-input>
					新密码：<el-input
					  type="password"
					  placeholder="输入新密码"
					  v-model="password">
					</el-input>
					地区：<el-input
					  placeholder="添加住址"
					  v-model="rev">
					</el-input>
					<button @click="revise">确认修改</button>
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
  		tableData:[],
  		username:'',
  		password:'',
  		rev:'',
      num:0
  	}
  },
  components:{
  	'safevue':Safe,
    'back':Back
  },
  created(){
  	var num = this.$route.params.id
    this.num = num
  	this.getmodel(num)
  },
  methods:{
  	getmodel(id){
  		this.$axios.get('/api/user',{
        params:{
          id:id
        }
      }).then(data=>{
  			var data = data.data.data[0]
  			this.username  = data.username,
  			this.password  = data.password
        this.rev = data.rev
  		})
  	},
  	revise(){
  		this.$axios.post('api/user/update',{
  				username:this.username,
  				password:this.password,
  				id:this.num,
  				rev:this.rev
  		}).then(data=>{
  			this.$router.push('/')
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
    font-size: 50px;
}
.el-main div input{
	width:80%;
	height:30px;
	font-size:20px;
}
.el-main button{
	color:blue;
	width:100px;
	height:30px;
	font-size:20px;
	margin-left:550px;
	margin-top:50px;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
