import Table from '../src/components/Table/Table.vue'
import TableHead from '../src/components/Table/TableHead.vue'
import TableBody from '../src/components/Table/TableBody.vue'
import TableRow from '../src/components/Table/TableRow.vue'
import TableCell from '../src/components/Table/TableCell.vue'

export default {
  title: 'Components/Table (vue)',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '完整的表格系统，包含表头、表体、行和单元格组件，用于数据展示。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '表格大小',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" }
      }
    },
    stickyHeader: {
      control: 'boolean',
      description: '是否固定表头',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    dense: {
      control: 'boolean',
      description: '是否使用紧凑模式',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    hover: {
      control: 'boolean',
      description: '是否启用行悬停效果',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    striped: {
      control: 'boolean',
      description: '是否显示斑马纹',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
  },
}

// 基础表格
export const Primary = {
  args: {
    size: 'md',
    stickyHeader: false,
    dense: false,
    hover: true,
    striped: false,
  },
  render: (args) => ({
    components: { Table, TableHead, TableBody, TableRow, TableCell },
    setup() {
      return { args }
    },
    template: `
      <Table 
        :size="args.size"
        :stickyHeader="args.stickyHeader"
        :dense="args.dense"
        :hover="args.hover"
        :striped="args.striped"
      >
        <TableHead>
          <TableRow>
            <TableCell component="th">姓名</TableCell>
            <TableCell component="th">职位</TableCell>
            <TableCell component="th">部门</TableCell>
            <TableCell component="th" align="right">薪资</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>张三</TableCell>
            <TableCell>前端工程师</TableCell>
            <TableCell>技术部</TableCell>
            <TableCell align="right">¥15,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>李四</TableCell>
            <TableCell>产品经理</TableCell>
            <TableCell>产品部</TableCell>
            <TableCell align="right">¥18,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>王五</TableCell>
            <TableCell>设计师</TableCell>
            <TableCell>设计部</TableCell>
            <TableCell align="right">¥14,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
}

// 紧凑表格
export const Dense = {
  args: {
    size: 'sm',
    dense: true,
    hover: true,
    striped: true,
  },
  render: (args) => ({
    components: { Table, TableHead, TableBody, TableRow, TableCell },
    setup() {
      return { args }
    },
    template: `
      <Table 
        :size="args.size"
        :dense="args.dense"
        :hover="args.hover"
        :striped="args.striped"
      >
        <TableHead>
          <TableRow>
            <TableCell component="th" size="small">ID</TableCell>
            <TableCell component="th" size="small">名称</TableCell>
            <TableCell component="th" size="small">状态</TableCell>
            <TableCell component="th" size="small" align="center">操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow v-for="i in 3" :key="i">
            <TableCell size="small">#{{ i.toString().padStart(3, '0') }}</TableCell>
            <TableCell size="small">项目 {{ i }}</TableCell>
            <TableCell size="small">活跃</TableCell>
            <TableCell size="small" align="center">编辑</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
}

// 可排序表格
export const Sortable = {
  args: {
    size: 'md',
    hover: true,
  },
  render: (args) => ({
    components: { Table, TableHead, TableBody, TableRow, TableCell },
    setup() {
      return { args }
    },
    template: `
      <Table 
        :size="args.size"
        :hover="args.hover"
      >
        <TableHead>
          <TableRow>
            <TableCell component="th" sortDirection="asc">名称 ↑</TableCell>
            <TableCell component="th">年龄</TableCell>
            <TableCell component="th" sortDirection="desc">评分 ↓</TableCell>
            <TableCell component="th">城市</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Alice</TableCell>
            <TableCell>28</TableCell>
            <TableCell>95</TableCell>
            <TableCell>北京</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob</TableCell>
            <TableCell>32</TableCell>
            <TableCell>87</TableCell>
            <TableCell>上海</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Charlie</TableCell>
            <TableCell>25</TableCell>
            <TableCell>92</TableCell>
            <TableCell>深圳</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
}

// 保留原有的演示故事
export const BasicTable = {
  render: () => ({
    components: { Table, TableHead, TableBody, TableRow, TableCell },
    template: `
      <div class="p-6">
        <h3 class="text-lg font-semibold mb-4">基础表格</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th">姓名</TableCell>
              <TableCell component="th">职位</TableCell>
              <TableCell component="th">部门</TableCell>
              <TableCell component="th" align="right">薪资</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>张三</TableCell>
              <TableCell>前端工程师</TableCell>
              <TableCell>技术部</TableCell>
              <TableCell align="right">¥15,000</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>李四</TableCell>
              <TableCell>产品经理</TableCell>
              <TableCell>产品部</TableCell>
              <TableCell align="right">¥18,000</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>王五</TableCell>
              <TableCell>设计师</TableCell>
              <TableCell>设计部</TableCell>
              <TableCell align="right">¥14,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `
  })
}

export const ClickableRows = {
  render: () => ({
    components: { Table, TableHead, TableBody, TableRow, TableCell },
    template: `
      <div class="p-6">
        <h3 class="text-lg font-semibold mb-4">可点击行</h3>
        <Table hover>
          <TableHead>
            <TableRow>
              <TableCell component="th">商品</TableCell>
              <TableCell component="th">类别</TableCell>
              <TableCell component="th" align="right">价格</TableCell>
              <TableCell component="th" align="center">状态</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow clickable @click="handleRowClick('产品1')">
              <TableCell>iPhone 15</TableCell>
              <TableCell>手机</TableCell>
              <TableCell align="right">¥5,999</TableCell>
              <TableCell align="center">有货</TableCell>
            </TableRow>
            <TableRow clickable @click="handleRowClick('产品2')">
              <TableCell>MacBook Pro</TableCell>
              <TableCell>笔记本</TableCell>
              <TableCell align="right">¥15,999</TableCell>
              <TableCell align="center">缺货</TableCell>
            </TableRow>
            <TableRow clickable @click="handleRowClick('产品3')">
              <TableCell>iPad Air</TableCell>
              <TableCell>平板</TableCell>
              <TableCell align="right">¥4,399</TableCell>
              <TableCell align="center">预售</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `,
    methods: {
      handleRowClick(product) {
        alert(`点击了 ${product}`)
      }
    }
  })
}

export const DenseTable = {
  render: () => ({
    components: { Table, TableHead, TableBody, TableRow, TableCell },
    template: `
      <div class="p-6">
        <h3 class="text-lg font-semibold mb-4">紧凑表格</h3>
        <Table dense striped>
          <TableHead>
            <TableRow>
              <TableCell component="th" size="small">ID</TableCell>
              <TableCell component="th" size="small">名称</TableCell>
              <TableCell component="th" size="small">描述</TableCell>
              <TableCell component="th" size="small" align="center">操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow v-for="i in 5" :key="i">
              <TableCell size="small">#{{ i.toString().padStart(3, '0') }}</TableCell>
              <TableCell size="small">项目 {{ i }}</TableCell>
              <TableCell size="small">这是项目 {{ i }} 的描述信息</TableCell>
              <TableCell size="small" align="center">
                <button style="margin-right: 8px;">编辑</button>
                <button>删除</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `
  })
}

export const SortableTable = {
  render: () => ({
    components: { Table, TableHead, TableBody, TableRow, TableCell },
    template: `
      <div class="p-6">
        <h3 class="text-lg font-semibold mb-4">可排序表格</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th" sortDirection="asc">名称 ↑</TableCell>
              <TableCell component="th">年龄</TableCell>
              <TableCell component="th" sortDirection="desc">评分 ↓</TableCell>
              <TableCell component="th">城市</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Alice</TableCell>
              <TableCell>28</TableCell>
              <TableCell>95</TableCell>
              <TableCell>北京</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob</TableCell>
              <TableCell>32</TableCell>
              <TableCell>87</TableCell>
              <TableCell>上海</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Charlie</TableCell>
              <TableCell>25</TableCell>
              <TableCell>92</TableCell>
              <TableCell>深圳</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `
  })
} 