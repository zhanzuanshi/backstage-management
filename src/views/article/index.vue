<template>
    <div class="article">
        <!-- 面包屑 -->
        <div class="breadcrumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="article-box">
            <!-- 具名插槽 -->
            <template #header>
                <div class="header">
                    <span>共{{ totalData }}条数据</span>
                    <el-button icon="el-icon-plus" size="small" type="primary" round @click="openDrawer('添加记录')">
                        添加记录
                    </el-button>
                </div>
            </template>
            <el-table :data="tableData" border style="width: 100%" max-height="500">
                <el-table-column fixed prop="stem" label="标题">
                </el-table-column>
                <el-table-column prop="creator" label="作者" width="120">
                </el-table-column>
                <el-table-column prop="likeCount" label="点赞" width="120">
                </el-table-column>
                <el-table-column prop="views" label="浏览数" width="120">
                </el-table-column>
                <el-table-column prop="createdAt" label="更新时间" width="300">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <div class="opera-icon">
                            <i class="el-icon-view" @click="openDrawer('详情', scope.row.id)"></i>
                            <i class="el-icon-edit-outline" @click="openDrawer('修改', scope.row.id)"></i>
                            <i class="el-icon-delete" @click="del(scope.row.id)"></i>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="pageSize" @current-change="currentChange" :current-page="current"
                :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="totalData">
            </el-pagination>
        </el-card>
        <el-drawer :title="type" :visible.sync="drawer" :direction="direction" size="60%" :before-close="handleClose">
            <div class="preview" v-if="type==='详情'">
                <h1 class="title">{{ form.stem }}</h1>
                <div class="content" v-html="form.content"></div>
            </div>
            <el-form v-else ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="标题：" prop="stem">
                    <el-input placeholder="请添加标题" v-model="form.stem"></el-input>
                </el-form-item>
                <el-form-item label="内容：" prop="content">
                    <quillEditor @blur="$refs.form.validateField('content')" v-model="form.content"></quillEditor>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">确认</el-button>
                    <el-button @click="handleClose">取消</el-button>
                </el-form-item>
            </el-form>
        </el-drawer>
    </div>
</template>

<script>
import { getArticleList,createArticle,removeArticle,getArticle,updateArticle } from '@/api/article';
import { quillEditor } from 'vue-quill-editor'
import "quill/dist/quill.core.css"; // import styles
import "quill/dist/quill.snow.css"; // for snow theme
import "quill/dist/quill.bubble.css"; // for bubble theme
export default {
    components: {
        quillEditor
    },
    data() {
        return {
            form: {
                stem: '',
                content: ''
            },
            drawer: false,
            type: '',
            direction: 'rtl',
            current: 1,
            pagesize: 10,
            tableData: [],
            totalData: 0,
            rules: {
                stem: [
                    {
                        required: true, message: '请输入标题', trigger: 'blur'
                    }
                ],
                content: [
                    {
                        required: true, message: '请输入内容', trigger: ['blur', 'change']
                    }
                ]
            }
        }
    },
    mounted() {
        this.initDate()
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
        async initDate() {
            const { data } = await getArticleList({
                current: this.current,
                pageSize: this.pagesize
            })
            // console.log(data);
            this.tableData = data.rows
            this.totalData = data.total
        },
        check() {
            console.log(scope);
        },
        edit() {
            console.log(scope);
        },
        async del(id) {
           await removeArticle(id)
        //    提示
            this.$message.success('删除成功')
            // 判断还剩几条数据？还剩一条之后页面后退
            if(this.tableData.length===1&&this.current>1){
                this.current--
            }
        //    重新渲染
           this.initDate()
        },
        currentChange(val) {
            this.current = val
            this.initDate()
        },
        pageSize(val) {
            this.pagesize = val
            this.initDate()
        },
        async openDrawer(type, id) {
            this.type = type
            this.drawer = true
            // 判断操作类型
            if(id){
            const {data}=await getArticle(id)
            // 展开运算符
            this.form={...data}
            }
        },
        handleClose() {
            this.$confirm('确认关闭？')
                .then(_ => {
                    this.clearValidate()
                })
                .catch(_ => { });
        },
        submit(){
        // 兜底校验
        this.$refs.form.validate(async valid=>{
            if(!valid) return
            if(this.type==='添加'){
                // 发起请求
                await createArticle(this.form)
                // 弹窗提示
                this.$message.success('添加成功')
                this.current=1
            }else if(this.type==='修改'){
                const {id,stem,content}=this.form 
                await updateArticle({id,stem,content})
                this.$message.success('修改成功')
            }


            this.initDate()
            this.clearValidate()
        })
        },
        clearValidate(){
            // 关闭抽屉
            this.drawer=false
            // 重置表单
            if(this.$refs.form){
                this.$refs.form.resetFields()
            }
            this.form={
                stem:'',
                content:''
            }
        },
        
    }
};
</script>

<style lang="scss" scoped>
.article {
    .article-box {
        margin-top: 15px;

        .header {
            padding: 10px;
            display: flex;
            justify-content: space-between;
        }

        .opera-icon {
            display: flex;
            justify-content: space-around;
        }
    }
    .preview{
        padding: 10px;
        .title{
            margin-bottom: 15px;
            color: gray;
            font-size: 40px;
            border-bottom: 1px solid gray;
        }
    }
}
</style>