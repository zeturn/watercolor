import Table from '../src/components/Table/Table.vue'
import TableHead from '../src/components/Table/TableHead.vue'
import TableBody from '../src/components/Table/TableBody.vue'
import TableRow from '../src/components/Table/TableRow.vue'
import TableCell from '../src/components/Table/TableCell.vue'
import Button from '../src/components/Button/Button.vue'
import './Table.stories.css'

const people = [
  { name: '张三', role: '前端工程师', team: '技术部', salary: '¥15,000' },
  { name: '李四', role: '产品经理', team: '产品部', salary: '¥18,000' },
  { name: '王五', role: '设计师', team: '设计部', salary: '¥14,000' }
]

const projects = [
  { id: 1, name: '项目 Alpha', progress: 75, deadline: '2024-02-15', team: 5, priority: 'high' },
  { id: 2, name: '项目 Beta', progress: 45, deadline: '2024-03-01', team: 3, priority: 'medium' },
  { id: 3, name: '项目 Gamma', progress: 90, deadline: '2024-01-30', team: 8, priority: 'high' },
  { id: 4, name: '项目 Delta', progress: 20, deadline: '2024-04-15', team: 4, priority: 'low' }
]

const products = [
  { id: 1, name: 'MacBook Pro', price: 12999, category: '电脑', stock: 15 },
  { id: 2, name: 'iPhone 15', price: 5999, category: '手机', stock: 32 },
  { id: 3, name: 'iPad Air', price: 4399, category: '平板', stock: 8 },
  { id: 4, name: 'Apple Watch', price: 2799, category: '穿戴', stock: 25 },
  { id: 5, name: 'AirPods Pro', price: 1999, category: '音频', stock: 41 }
]

const baseComponents = { Table, TableHead, TableBody, TableRow, TableCell, Button }

export default {
  title: 'Components/Table (Vue)',
  component: Table,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A quiet, borderless data display surface. Rows reveal affordance on hover; selected and error states use semantic state tokens.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'], description: '表格大小' },
    stickyHeader: { control: 'boolean', description: '是否固定表头' },
    dense: { control: 'boolean', description: '是否使用紧凑模式' },
    hover: { control: 'boolean', description: '是否启用行悬停效果' },
    striped: { control: 'boolean', description: '是否显示弱分组背景' }
  }
}

export const Primary = {
  args: {
    size: 'md',
    stickyHeader: false,
    dense: false,
    hover: true,
    striped: false
  },
  render: (args) => ({
    components: baseComponents,
    setup() {
      return { args, people }
    },
    template: `
      <main class="wc-table-story-page">
        <section class="wc-table-story-shell">
          <div class="wc-table-story-header">
            <p class="wc-table-story-eyebrow">Table</p>
            <h1>Quiet data, clear rhythm.</h1>
            <p>默认没有网格线和阴影；行距、表头、数字对齐负责建立可读性。</p>
          </div>
          <Table v-bind="args">
            <TableHead>
              <TableRow>
                <TableCell component="th">姓名</TableCell>
                <TableCell component="th">职位</TableCell>
                <TableCell component="th">部门</TableCell>
                <TableCell component="th" align="right">薪资</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow v-for="person in people" :key="person.name">
                <TableCell>{{ person.name }}</TableCell>
                <TableCell>{{ person.role }}</TableCell>
                <TableCell>{{ person.team }}</TableCell>
                <TableCell align="right">{{ person.salary }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </main>
    `
  })
}

export const Dense = {
  args: {
    size: 'sm',
    dense: true,
    hover: true,
    striped: false
  },
  render: (args) => ({
    components: baseComponents,
    setup() {
      return { args }
    },
    template: `
      <main class="wc-table-story-page">
        <section class="wc-table-story-shell wc-table-story-shell--compact">
          <div class="wc-table-story-header">
            <p class="wc-table-story-eyebrow">Density</p>
            <h1>Compact without grid noise.</h1>
            <p>紧凑表格减少 padding，但不增加边线。适合管理后台和短字段。</p>
          </div>
          <Table v-bind="args">
            <TableHead>
              <TableRow>
                <TableCell component="th" size="small">ID</TableCell>
                <TableCell component="th" size="small">名称</TableCell>
                <TableCell component="th" size="small">状态</TableCell>
                <TableCell component="th" size="small" align="right">操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow v-for="item in [1,2,3,4]" :key="item">
                <TableCell size="small">#{{ String(item).padStart(3, '0') }}</TableCell>
                <TableCell size="small">项目 {{ item }}</TableCell>
                <TableCell size="small"><span class="wc-table-story-pill wc-table-story-pill--success">活跃</span></TableCell>
                <TableCell size="small" align="right">
                  <Button size="xs" button-style="default">编辑</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </main>
    `
  })
}

export const Sortable = {
  args: { size: 'md', hover: true },
  render: (args) => ({
    components: baseComponents,
    setup() {
      return {
        args,
        rows: [
          { name: 'Alice', age: 28, score: 95, city: '北京' },
          { name: 'Bob', age: 32, score: 87, city: '上海' },
          { name: 'Charlie', age: 25, score: 92, city: '深圳' }
        ]
      }
    },
    template: `
      <main class="wc-table-story-page">
        <section class="wc-table-story-shell">
          <Table v-bind="args">
            <TableHead>
              <TableRow>
                <TableCell component="th" sort-direction="asc">名称</TableCell>
                <TableCell component="th">年龄</TableCell>
                <TableCell component="th" sort-direction="desc">评分</TableCell>
                <TableCell component="th">城市</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow v-for="row in rows" :key="row.name">
                <TableCell>{{ row.name }}</TableCell>
                <TableCell>{{ row.age }}</TableCell>
                <TableCell>{{ row.score }}</TableCell>
                <TableCell>{{ row.city }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </main>
    `
  })
}

export const StickyHeader = {
  args: { stickyHeader: true, hover: true, striped: false },
  render: (args) => ({
    components: baseComponents,
    setup() {
      return { args, rows: Array.from({ length: 16 }, (_, index) => index + 1) }
    },
    template: `
      <main class="wc-table-story-page">
        <section class="wc-table-story-shell">
          <div class="wc-table-story-scroll">
            <Table v-bind="args">
              <TableHead>
                <TableRow>
                  <TableCell component="th">序号</TableCell>
                  <TableCell component="th">姓名</TableCell>
                  <TableCell component="th">职位</TableCell>
                  <TableCell component="th">电话</TableCell>
                  <TableCell component="th">邮箱</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow v-for="item in rows" :key="item">
                  <TableCell>{{ item }}</TableCell>
                  <TableCell>员工 {{ item }}</TableCell>
                  <TableCell>{{ item % 3 === 0 ? '开发工程师' : item % 3 === 1 ? '产品经理' : '设计师' }}</TableCell>
                  <TableCell>138-0000-{{ String(item).padStart(4, '0') }}</TableCell>
                  <TableCell>user{{ item }}@example.com</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    `
  })
}

export const Interactive = () => ({
  components: baseComponents,
  data() {
    return { products, selectedRows: [] }
  },
  methods: {
    handleRowClick(productId) {
      this.selectedRows = this.selectedRows.includes(productId)
        ? this.selectedRows.filter((id) => id !== productId)
        : [...this.selectedRows, productId]
    },
    handleSelectAll() {
      this.selectedRows = this.selectedRows.length === this.products.length
        ? []
        : this.products.map((product) => product.id)
    }
  },
  template: `
    <main class="wc-table-story-page">
      <section class="wc-table-story-shell">
        <div class="wc-table-story-toolbar">
          <Button size="sm" button-style="default" @click="handleSelectAll">
            {{ selectedRows.length === products.length ? '取消全选' : '全选' }}
          </Button>
          <span v-if="selectedRows.length > 0">已选择 {{ selectedRows.length }} 项</span>
        </div>

        <Table hover>
          <TableHead>
            <TableRow>
              <TableCell component="th" padding="checkbox">
                <input class="wc-table-story-checkbox" type="checkbox" :checked="selectedRows.length === products.length" aria-label="Select all products" @change="handleSelectAll" />
              </TableCell>
              <TableCell component="th">产品名称</TableCell>
              <TableCell component="th" align="right">价格</TableCell>
              <TableCell component="th">分类</TableCell>
              <TableCell component="th" align="right">库存</TableCell>
              <TableCell component="th" align="right">操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow v-for="product in products" :key="product.id" :selected="selectedRows.includes(product.id)" clickable @click="handleRowClick(product.id)">
              <TableCell padding="checkbox">
                <input class="wc-table-story-checkbox" type="checkbox" :checked="selectedRows.includes(product.id)" :aria-label="'Select ' + product.name" @change.stop="handleRowClick(product.id)" />
              </TableCell>
              <TableCell>{{ product.name }}</TableCell>
              <TableCell align="right">¥{{ product.price.toLocaleString() }}</TableCell>
              <TableCell>{{ product.category }}</TableCell>
              <TableCell align="right">{{ product.stock }}</TableCell>
              <TableCell align="right">
                <Button size="xs" button-style="default">编辑</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </main>
  `
})

export const CustomCells = () => ({
  components: baseComponents,
  setup() {
    return {
      rows: [
        { name: '张三', status: '活跃', tone: 'success', level: '★★★☆☆', tags: ['React', 'Vue'] },
        { name: '李四', status: '离线', tone: 'neutral', level: '★★★★★', tags: ['Product', 'UX'] },
        { name: '王五', status: '待审核', tone: 'warning', level: '★★☆☆☆', tags: ['Design'] }
      ]
    }
  },
  template: `
    <main class="wc-table-story-page">
      <section class="wc-table-story-shell">
        <Table hover>
          <TableHead>
            <TableRow>
              <TableCell component="th">用户</TableCell>
              <TableCell component="th">状态</TableCell>
              <TableCell component="th">等级</TableCell>
              <TableCell component="th">技能标签</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow v-for="row in rows" :key="row.name">
              <TableCell><strong>{{ row.name }}</strong></TableCell>
              <TableCell><span :class="'wc-table-story-pill wc-table-story-pill--' + row.tone">{{ row.status }}</span></TableCell>
              <TableCell><span class="wc-table-story-rating">{{ row.level }}</span></TableCell>
              <TableCell>
                <span class="wc-table-story-tags">
                  <span v-for="tag in row.tags" :key="tag" class="wc-table-story-pill">{{ tag }}</span>
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </main>
  `
})

export const DataTable = () => ({
  components: baseComponents,
  setup() {
    const priorityTone = (priority) => priority === 'high' ? 'danger' : priority === 'medium' ? 'warning' : 'success'
    return { projects, priorityTone, now: new Date() }
  },
  template: `
    <main class="wc-table-story-page">
      <section class="wc-table-story-shell wc-table-story-shell--wide">
        <div class="wc-table-story-header">
          <p class="wc-table-story-eyebrow">Data table</p>
          <h1>项目管理看板</h1>
          <p>跟踪项目进度和团队分配。复杂内容也保持扁平、克制、可读。</p>
        </div>

        <Table hover>
          <TableHead>
            <TableRow>
              <TableCell component="th">项目名称</TableCell>
              <TableCell component="th" align="center">进度</TableCell>
              <TableCell component="th">截止日期</TableCell>
              <TableCell component="th" align="center">团队人数</TableCell>
              <TableCell component="th" align="center">优先级</TableCell>
              <TableCell component="th" align="right">操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow v-for="project in projects" :key="project.id">
              <TableCell>
                <strong>{{ project.name }}</strong>
                <span class="wc-table-story-meta">ID: {{ project.id }}</span>
              </TableCell>
              <TableCell align="center">
                <div class="wc-table-story-progress" :aria-label="'Progress ' + project.progress + '%'">
                  <span :style="{ inlineSize: project.progress + '%' }"></span>
                </div>
                <span class="wc-table-story-meta">{{ project.progress }}%</span>
              </TableCell>
              <TableCell>
                <span>{{ project.deadline }}</span>
                <span class="wc-table-story-meta">{{ new Date(project.deadline) < now ? '已过期' : '进行中' }}</span>
              </TableCell>
              <TableCell align="center"><span class="wc-table-story-pill">👥 {{ project.team }}</span></TableCell>
              <TableCell align="center">
                <span :class="'wc-table-story-pill wc-table-story-pill--' + priorityTone(project.priority)">{{ project.priority.toUpperCase() }}</span>
              </TableCell>
              <TableCell align="right">
                <span class="wc-table-story-actions">
                  <Button size="xs" button-style="default">查看</Button>
                  <Button size="xs" button-style="default">编辑</Button>
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </main>
  `
})
