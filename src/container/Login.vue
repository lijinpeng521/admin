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
    		<input v-model="code" ref="code" type="text" placeholder="请输入验证码">
    		<span @click="getcode">获取验证码</span>
    	</div>
    	<button @click="get">登录</button>
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
  	get(){
  		this.$axios.post('/api/user/login',{
  				username:this.username,
  				password:this.password,
  				code:this.code
  		}).then(data=>{
  			var data = data.data
  			this.$router.push('/')
  			if(data.code==1){
  				
  				localStorage.setItem('setUser',JSON.stringify(data))
          this.$router.push('/')
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
}
.code{
	color:red;
	font-size:20px;
  margin-left:80px;
}
.code input{
	width:120px;
  height:30px;
	font-size:17px;
	border-radius:8px;
}
.code span{
	color:green;
	font-size:15px;
	margin-left:10px;
}
button{
	width:100px;
	height:50px;
	margin-left:200px;
	margin-top: 120px;
	font-size:30px;
	color:yellow;
  background:blue;
}
</style>
