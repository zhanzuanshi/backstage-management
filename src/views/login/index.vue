<template>
    <div>
        <el-card class="login-box">
            <!-- 具名插槽 -->
            <template #header>
                书墨中文网后台管理
            </template>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="账号" prop="username">
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="operate">
                    <el-button type="primary" @click="login">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    components: {},
    data() {

        return {
            ruleForm: {
                username: '',
                password: '',
            },
            rules: {
                // 校验类型包括type，pattern，range等  element采用的是async-validator
                username: [
                    { required: true, message: '用户名不能为空', trigger: ['blur', 'change'] },
                    { min: 5, max: 11, message: '用户名在5-11个字符之间', trigger: ['blur', 'change'] },
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 5, max: 10, message: '密码在6-10个字符之间', trigger: 'blur' },
                ],
            }
        };
    },
    methods:{
            login(){
                this.$refs.ruleForm.validate(async valid=>{
                    if(valid){
                    await this.$store.dispatch('user/loginAction',this.ruleForm)
                     this.$router.push('/layout').catch(()=>{})
                     this.$message.success('登录成功')
                    //     try{
                    //  await this.$store.dispatch('user/loginAction',this.ruleForm)
                    //  this.$router.push('/layout')
                    //  this.$message.success('登录成功')
                    //     } catch(e){
                    //         this.$message.error(e.response.data.message)
                    //     }
                   
                    }
                })
            },
            resetForm(){
                this.$refs.ruleForm.resetFields()
            }
    }
};
</script>

<style lang="scss" scoped>
.login-box {
    width: 400px;

    // 深度选择器
    // less: /deep/
    // scss: ::v-deep
    ::v-deep .el-card__header {
        text-align: center;
        color: white;
        background-color: purple;
    }

    .demo-ruleform {
        .operate {
            ::v-deep .el-form-item__content {
                background-color: black;
                text-align: center;
            }
        }
    }
}
</style>
