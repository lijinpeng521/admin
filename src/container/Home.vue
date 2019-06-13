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
					  <el-table
					    :data="tableData"
					    style="width: 100%">
					    <el-table-column
					      prop="id"
					      label="标识"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="username"
					      label="执行人"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      fixed="right"
					      label="操作"
					      width="500">
					      <template slot-scope="scope">
					        <el-button type="text" size="small">
					        	<router-link :to="{name:'look',params:{
					        		id:scope.row.id
					        	}}">
					        	详细信息
					        	</router-link>
					        </el-button>
					        <el-button @click="del(scope.row.id)" type="text" size="small">
					        	删除信息	
					 		</el-button>
					    	<el-button @click="revise" type="text" size="small">
					    		<router-link :to="{name:'revise',params:{
					    			id:scope.row.id
					    		}}">
					    		修改信息
					    	</router-link>
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
import Back from '../components/common/Back.vue'
export default {
  name: 'Home',
  components:{
  	'safevue':Safe,
  	'back':Back
  },
  data(){
  	return {
  		tableData: []
  	}
  },
  created(){
  	this.$axios.get('/api/user',{
  		params:{
  			page:1,
  			pageSize:4
  		}
  	}).then(data=>{
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
  	jump(val){
  		this.$axios.get('/api/user',{
  		params:{
  			page:val,
  			pageSize:4
  		}
  	}).then(data=>{
  		console.log(data.data.data)
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
