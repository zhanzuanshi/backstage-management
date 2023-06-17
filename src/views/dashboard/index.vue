<template>
    <div class="dashboard">
        <!-- 面包屑 -->
        <div class="breadcrumbs">
            <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
</el-breadcrumb>
        </div>
        <el-row :gutter="20">
  <el-col :span="6"><div class="cards">
    <div class="card-box">
       <div class="left">
        <span class="title">活跃用户</span>
        <span class="data">801</span>
        <span class="des">hello,world</span>
       </div>
       <div class="right">
            <span>图片</span>
       </div>
    </div>
    <div class="card-box">
        <div class="left">
        <span class="title">活跃用户</span>
        <span class="data">801</span>
        <span class="des">hello,world</span>
       </div>
       <div class="right">
            <span>图片</span>
       </div>
    </div>
    <div class="card-box">
        <div class="left">
        <span class="title">活跃用户</span>
        <span class="data">801</span>
        <span class="des">hello,world</span>
       </div>
       <div class="right">
            <span>图片</span>
       </div>
    </div>
  </div></el-col>
  <el-col :span="18"><div class="echarts" id="echarts">echarts</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">3</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">4</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">5</div></el-col>
</el-row>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    components: {

    },
    data() {
        return {
            msg: '仪表盘'
        }
    },
    mounted(){
    var myChart = echarts.init(document.getElementById('echarts'));

      // 指定图表的配置项和数据
      var option = {
  title: {
    text: 'Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
}
</script>

<style lang="scss" scoped>
.dashboard{
    .breadcrumbs{
        height: 50px;
    }
    .el-col{
    .cards{
        .card-box{
           width: 100%;
           height: 33%;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            border-radius: 5px;
            justify-content: space-between;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            .left{
                display: flex;
                flex-direction: column;
            }
        }
    }
    .echarts{
            width:100%;
            height: 500px;
            // background-color: goldenrod;
    }
}
}

</style>