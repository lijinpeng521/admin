<template>
  <div>
  	<heads></heads>
   	<el-container>
  		<el-main>
  			<el-container>
  				<!--左边的数据 -->
  				<safevue></safevue>
			  <!-- 右边的数据 <-->
			   <el-container>
			    <el-main>
			    	<template>
					  <el-table
					    :data="tableData"
					    style="width: 100%">
					    <el-table-column
					      prop="id"
					      label="标识"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="title"
					      label="商品"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      fixed="right"
					      label="操作"
					      width="500">
					      <template slot-scope="scope">
					        <el-button type="text" size="small">
					        </el-button>
					      </template>
					    </el-table-column>
					  </el-table>
					</template>
					<el-pagination
					  @current-change="jump"
					  background
					  layout="prev, pager, next"
					  :total="1000">
					</el-pagination>
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
  name: 'Home',
  components:{
  	'safevue':Safe,
  	'heads':Heads
  },
  data(){
  	return {
  		tableData: []
  	}
  },
  created(){
  	this.$axios.get('/api/shopListPage',{
  		params:{
  			page:1,
  			pageSize:4
  		}
  	}).then(data=>{
  		this.tableData = data.data.data
  	})
  },
  methods:{
  	jump(val){
  		this.$axios.get('/api/user',{
  		params:{
  			page:val,
  			pageSize:4
  		}
  	}).then(data=>{
  		this.tableData=  data.data.data
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
  a{
  	color:#409EFF;
  }
</style>
