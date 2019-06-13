<template>
  <div>
	<el-header style="text-align: right; font-size: 12px">
		<el-dropdown>	      	
		<i class="el-icon-setting" style="margin-right: 15px"></i>
		<el-dropdown-menu slot="dropdown">
			<el-dropdown-item>
				<span @click="fn">退出登陆</span>
			</el-dropdown-item>
		</el-dropdown-menu>
		</el-dropdown>
	</el-header>
  </div>
</template>

<script>
export default {
  methods:{
  	fn(){
  		localStorage.removeItem('setUser')
      window.location.reload()
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
    height:60px;
 }
</style>
