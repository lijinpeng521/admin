<template>
  <div>
    <back></back>
   	<el-container>
  		<el-main>
  			<el-container>
  				<!--左边的数据 -->
			  <safevue></safevue>
			  <!-- 右边的数据 <-->
			   <el-container>
			    <el-main>
			    	<template>
					 <div class="main" v-for="item in tableData">
					 	<h2>用户名称</h2>
							<p>{{item.username}}</p>
						<h3>用户密码</h3>
							<p>{{item.password}}</p>
						<h3>用户id</h3>
							<p>{{item.id}}</p>
						<h3>用户地址</h3>
							<p>{{item.rev}}</p>	
					 </div>	
	
					</template>
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
  		tableData:[]
  	}
  },
  components:{
  	'safevue':Safe,
    'back':Back
  },
  created(){
  	var num = this.$route.params.id
  	this.getLook(num)
  },
  methods:{
  	revise(){
  		this.$router.push('/revise')
  	},
  	add(){
  		this.$router.push('/add')
  	},
  	getLook(id){
  		this.$axios.get('/api/user',{
        params:{
          id:id
        }
      }).then(data=>{
        console.log(data.data.data)
  			this.tableData = data.data.data
  		})
  	}
  }
}
</script>
<style scoped>
.main{
	width:500px;
	height:500px;
	margin: 50px auto;
}
.main h3,h2{
	color:green;
	text-align: center;
	font-weight:700;
	margin-top:30px;
}
.main p{
	line-height:50px;
	text-align: center;
	font-size:25px;	
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
 .el-aside {
    color: #333;
    text-align: center;
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
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
