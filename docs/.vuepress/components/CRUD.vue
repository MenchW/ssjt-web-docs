<template>
  <div>
    <div>
      <TcInput v-model="searchParams.name" style="width: 30%"></TcInput>
      <el-button type="primary" icon="el-icon-search" @click="getList">搜索</el-button>
      <el-button icon="el-icon-refresh" @click="() => (searchParams.name = '')">重置</el-button>

      <el-button type="primary" plain icon="el-icon-plus" @click="openModal">新增</el-button>
      <el-button type="success" plain icon="el-icon-edit" @click="openModal">编辑</el-button>
      <el-button type="danger" plain icon="el-icon-delete" @click="handleDel('王小虎')">删除</el-button>
      <el-button type="info" plain icon="el-icon-upload2" @click="openModal">导入</el-button>
      <el-button type="warning" plain icon="el-icon-download">导出</el-button>
    </div>

    <TcTable ref="tableRef" :data="tableData" :query="searchParams" :total="total" :get-list="getList">
      <TcTableColumn type="selection"></TcTableColumn>
      <TcTableColumn type="index" label="序号"></TcTableColumn>
      <TcTableColumn prop="id" label="id"></TcTableColumn>
      <TcTableColumn label="姓名1"></TcTableColumn>
      <TcTableColumn prop="name" label="姓名2">
        <template #header="{ $index }"> 自定义头部-列为:{{ $index }}</template>
      </TcTableColumn>
      <TcTableColumn prop="name" label="姓名">
        <template slot-scope="{ row }">李家口-{{ row.name }}</template>
      </TcTableColumn>
      <TcTableColumn prop="address" label="地址">
        <template slot-scope="{ row }"> {{ row.address }} - 二房 </template>
      </TcTableColumn>
      <TcTableColumn prop="url" label="图片" type="image"> </TcTableColumn>
      <TcTableColumn prop="status" label="状态" type="switch"> </TcTableColumn>
      <TcTableColumn label="操作">
        <template slot-scope="{ row }">
          <el-link type="primary" :underline="false">编辑</el-link>
          <el-link type="primary" :underline="false">查看</el-link>
          <el-link type="danger" :underline="false" @click="handleDel(row.name)">删除</el-link>
        </template>
      </TcTableColumn>
    </TcTable>

    <TcDialog title="属性标题" :visible.sync="visible" :before-close="closeModal" width="30%" @submit="handleSubmit">
      <span slot="title">插槽标题优先于属性标题</span>
      <div>这是dialog内容</div>
    </TcDialog>
  </div>
</template>

<script>
let item = {
  date: "2016-05-02",
  name: "王小虎",
  address: "上海市普",
  url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg,https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"
};
const api = () => {
  return new Promise((r) => {
    setTimeout(() => {
      r(
        new Array(10 * 10).fill(item).map((m, i) => ({
          ...m,
          id: i,
          status: i % 2 === 0 ? 0 : 1,
          url: i % 2 === 0 ? m.url : ""
        }))
      );
    }, 100);
  });
};
export default {
  name: "CRUD",

  data() {
    return {
      searchParams: {
        // page:1,
        // pageSize:2
        name: "xxx"
      },
      tableData: [],
      total: 0,
      visible: false
    };
  },

  mounted() {},

  methods: {
    async getList() {
      let allData = await api();
      const start = (this.searchParams.pageNum - 1) * 10;
      const end = this.searchParams.pageNum * 10;
      // 模拟获取数据
      this.tableData = allData.slice(start, end);
      this.total = allData.length;
    },
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
      this.$message.success("关闭成功");
    },

    handleSubmit() {
      this.$message.success("提交成功");
    },

    switchChange(val, failCallback) {
      try {
        // 模拟报错并回退数据
        throw "模拟报错";
      } catch (error) {
        setTimeout(() => {
          failCallback();
        }, 1000);
      }
    },

    handleDel(name) {
      this.$modal
        .confirm("是否确认删除" + name + "的数据项？")
        .then(() => {
          this.handleMsg("error", "删除成功");
        })
        .catch(() => {
          this.handleMsg("info", "删除取消");
        });
    },

    handleMsg(type, msg = "这是一条信息") {
      this.$message({
        type: type,
        message: msg
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
