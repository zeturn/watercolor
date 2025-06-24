import PaginationVue from '../src/components/Pagination/Pagination.vue'

export default {
  title: 'Components/Pagination',
  component: PaginationVue,
  tags: ['autodocs'],
  argTypes: {
    total: { control: 'number' },
    pageSize: { control: 'number' },
    modelValue: { control: 'number', name: 'currentPage' },
  },
}

export const Basic = {
  args: {
    total: 120,
    pageSize: 10,
    modelValue: 1,
  },
  render: (args) => ({
    components: { PaginationVue },
    setup() { return { args, page: args.modelValue } },
    template: `
      <div class="p-8">
        <PaginationVue v-model="page" :total="args.total" :page-size="args.pageSize" />
        <p class="mt-4 text-sm text-gray-500">当前页: {{ page }}</p>
      </div>
    `,
  }),
} 