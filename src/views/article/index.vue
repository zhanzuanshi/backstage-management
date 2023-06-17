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
                            <i class="el-icon-view" @click="openDrawer('详情',scope.row.id)"></i>
                            <i class="el-icon-edit-outline" @click="openDrawer('修改',scope.row.id)"></i>
                            <i class="el-icon-delete" @click="del(scope)"></i>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="pageSize" @current-change="currentChange" :current-page="current"
                :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="totalData">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
import { getArticleList } from '@/api/article';
export default {
    components: {
    },
    data() {
        return {
            current: 1,
            pagesize: 10,
            tableData: [],
            totalData: 0
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
            console.log(data);
            this.tableData = data.rows
            this.totalData = data.total
        },
        check() {
            console.log(scope);
        },
        edit() {
            console.log(scope);
        },
        del(scope) {
            console.log(scope);
        },
        currentChange(val){
            this.current=val
            this.initDate()
        },
        pageSize(val){
            this.pagesize=val
            this.initDate()
        },
        openDrawer(type,id){
            console.log(type,id);
        }
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
}
</style>