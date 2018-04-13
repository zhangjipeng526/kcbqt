<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table>
      <tr>
        <th>
          第？节\星期？
        </th>
        <th>
          星期一
        </th>
        <th>
          星期二
        </th>
        <th>
          星期三
        </th>
        <th>
          星期四
        </th>
        <th>
          星期五
        </th>
      </tr>
      <tr v-for="i in arr">
        <th>
          {{i.djj}}
        </th>
        <td>{{i.xqy}}</td>
        <td>{{i.xqe}}</td>
        <td>{{i.xqs}}</td>
        <td>{{i.xqsf}}</td>
        <td>{{i.xqw}}</td>
      </tr>
    </table>
    <el-button type="text" @click="dialogFormVisible = true">更改课程</el-button>

    <el-dialog title="更改课程" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="星期一" :label-width="formLabelWidth">
          <el-input v-model="form.xqy" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="星期二" :label-width="formLabelWidth">
          <el-input v-model="form.xqe" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="星期三" :label-width="formLabelWidth">
          <el-input v-model="form.xqs" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="星期四" :label-width="formLabelWidth">
          <el-input v-model="form.xqsf" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="星期五" :label-width="formLabelWidth">
          <el-input v-model="form.xqw" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="第几节" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="一" value="1"></el-option>
            <el-option label="二" value="2"></el-option>
            <el-option label="三" value="3"></el-option>
            <el-option label="四" value="4"></el-option>
            <el-option label="五" value="5"></el-option>
            <el-option label="六" value="6"></el-option>
            <el-option label="七" value="7"></el-option>
            <el-option label="八" value="8"></el-option>
          </el-select>
        </el-form-item>
      </el-form>  
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      arr:[],
       dialogFormVisible: false,
        form: {
          xqy:'王丁男',
          xqe:'アホ',
          xqs:'アホ',
          xqsf:'アホ',
          xqw:'アホ',
          region:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    }
  },
  created(){
    this.lan()
  },
  methods:{
    lan(){
      this.$http.get('http://localhost:3000/',{},{emulateJSON:true}).then(e=>this.arr=e.body)
    },
    submit(){
      this.dialogFormVisible=false,
      this.$http.post('http://localhost:3000/updata',this.form,{emulateJSON:true}).then(()=>{
        this.lan()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
  width: 500px;
  margin: 0 auto;
  border-collapse: collapse;
  border: solid;
}
tr{
  height: 30px;
}
tr:nth-of-type(even){
  background: #ccc;
}
</style>
