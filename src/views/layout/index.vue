<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <div class="logo">
                    <span>书墨中文网</span>
                </div>
                <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" router
                    active-text-color="#ffd04b">
                    <el-menu-item index="/dashboard">
                        <i class="el-icon-menu"></i>
                        <span slot="title">数据看板</span>
                    </el-menu-item>
                    <el-menu-item index="/article" >
                        <i class="el-icon-document"></i>
                        <span slot="title">面经管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header><el-row>
                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                hellol
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple-light">
                                <div class="userInfoArea">
                                    <img :src="avatar" alt="" class="user-avator">
                                    <span class="username">{{ name }}</span>
                                    <el-popconfirm confirm-button-text='退出' cancel-button-text='取消' icon="el-icon-info" @confirm="logout"
                                        icon-color="red" title="确定退出吗？">
                                       <i slot="reference" title="logout" class="el-icon-switch-button"></i>
                                    </el-popconfirm>
                                </div>
                            </div>
                        </el-col>
                    </el-row></el-header>
                <el-container>
                    <el-main><router-view /></el-main>
                </el-container>
            </el-container>
        </el-container>

    </div>
</template>

<script >
import { getuser } from '@/api/user'
export default {
    name: 'layout-page',
    data() {
        return {
            name: '',
            avatar: ''
        };
    },
    methods: {
        async getUserInfo() {
            const { data } = await getuser()
            // console.log(data.avatar);
            this.name = data.name
            this.avatar = data.avatar
        },
        logout() {
            this.$store.commit('user/logout')
            this.$router.push('/')
        }
    },
    created() {
        this.getUserInfo()
    },

}
</script>

<style lang="scss" scoped> .el-container {
     .el-aside {
         .logo {
             height: 60px;
             line-height: 60px;
             text-align: center;
             font-size: 25px;
             font-weight: bolder;
             color: white;
             background-color: #545c64;
         }

         .el-menu-vertical-demo {
             height: calc(100vh - 60px);
             border: none;
         }
     }

     .el-header {
         box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

         .userInfoArea {
             display: flex;
             justify-content: space-around;
             align-items: center;
             line-height: 60px;

             .user-avator {
                 border-radius: 50%;
                 vertical-align: middle;
                 width: 45px;
                 height: 45px;
             }

             .username {
                 font-size: 14px;
                 color: gray;
             }

             .el-icon-switch-button{
                color: gray;
             }
         }
     }
 }
</style>