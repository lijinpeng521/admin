<template>
  <div class="all">
    <div class="lg">
    	<div class="use">用户名：
    		<input v-model="username" type="text" placeholder="请输入用户名">
    	</div>
    	<div class="pass">密码：
    		<input v-model="password" type="password" placeholder="请输入密码">
    	</div>
    	<div class="code">验证码：
    		<input v-model="code" type="text" placeholder="请输入验证码">
    		<span @click="getcode">获取验证码</span>
    	</div>
    	<el-button @click="login" type="success" plain>登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
  	return {
  		code:'',
  		username:'',
  		password:''
  	}
  },
  methods:{
  	login(){
  		this.$axios.post('/api/user/login',{
  				username:this.username,
  				password:this.password,
  				code:this.code
  		}).then(data=>{
  			var data = data.data
  			if(data.code==1){
  				localStorage.setItem('setUser',JSON.stringify(data))
          this.$router.push('/')
  			}else{
          alert('请在想一下账号密码不正确')
        }
  		})
  		
  	},
  	getcode(){
  		this.$axios.get('/api/user/code').then(data=>{
  			this.code = data.data
  		})
  	}
  }
}
</script>
<style scoped>
.lg{
	background:url('../assets/image/1.jpg');
	border: 1px solid pink;
	width:500px;
	height:500px;
	margin:auto;
	position: fixed;
	top:0;
	bottom:0;
	left:0;
	right:0;
	border-radius:10px;
}
.use{
		color:pink;
		height:70px;
		margin-top:40PX;
		width:100%;
		font-size:20px;
  margin-left:80px;
}
.use input{
	height:30px;
	width:200px;
	border-radius:8px;
  border:0;
}
.pass{
		color:green;
		height:70px;
		margin-top:20PX;
		width:100%;
		font-size:20px;
  margin-left:80px;
}
.pass input{
	height:30px;
	width:200px;
	margin-left:20px;
	border-radius:8px;
  border:0;
}
.code{
	color:red;
	font-size:20px;
  margin-left:80px;
}
.code input{
  height:30px;
  width:200px;
	font-size:17px;
  border:0;
	border-radius:8px;
}
.code span{
	color:green;
	font-size:15px;
	margin-left:10px;
}
button{
	margin-left:200px;
	margin-top: 120px;
}
</style>
