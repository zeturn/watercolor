import Autocomplete from '../src/components/Autocomplete/Autocomplete.vue'

export default {
  title: 'Components/Autocomplete (Vue)',
  component: Autocomplete,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
}

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
  { value: 'in', label: 'India' },
  { value: 'br', label: 'Brazil' }
]

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
  { value: 'honeydew', label: 'Honeydew' }
]

export const Default = {
  render: (args) => ({
    components: { Autocomplete },
    setup() {
      return { args, options: countries }
    },
    template: `
      <Autocomplete
        v-bind="args"
        :options="options"
        label="Select Country"
        placeholder="Type to search..."
      />
    `
  })
}

export const WithValue = {
  render: () => ({
    components: { Autocomplete },
    setup() {
      const selected = { value: 'us', label: 'United States' }
      return { selected, countries }
    },
    template: `
      <Autocomplete
        v-model="selected"
        :options="countries"
        label="Country"
        placeholder="Search countries..."
      />
    `
  })
}

export const FreeSolo = {
  render: () => ({
    components: { Autocomplete },
    setup() {
      const value = ''
      return { value, fruits }
    },
    template: `
      <div>
        <Autocomplete
          v-model="value"
          :options="fruits"
          label="Favorite Fruit"
          placeholder="Type any fruit name..."
          freeSolo
          helperText="You can type a custom value"
        />
        <p style="margin-top: 1rem">Current value: {{ value }}</p>
      </div>
    `
  })
}

export const Multiple = {
  render: () => ({
    components: { Autocomplete },
    setup() {
      const selected = []
      return { selected, fruits }
    },
    template: `
      <div>
        <Autocomplete
          v-model="selected"
          :options="fruits"
          label="Select Multiple Fruits"
          placeholder="Search fruits..."
          multiple
        />
        <p style="margin-top: 1rem">Selected: {{ selected.map(f => f.label).join(', ') }}</p>
      </div>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { Autocomplete },
    setup() {
      return { countries }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <Autocomplete
          :options="countries"
          label="Outlined (Default)"
          variant="outlined"
          placeholder="Type to search..."
        />
        <Autocomplete
          :options="countries"
          label="Filled"
          variant="filled"
          placeholder="Type to search..."
        />
        <Autocomplete
          :options="countries"
          label="Standard"
          variant="standard"
          placeholder="Type to search..."
        />
      </div>
    `
  })
}

export const Sizes = {
  render: () => ({
    components: { Autocomplete },
    setup() {
      return { countries }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <Autocomplete
          :options="countries"
          label="Small"
          size="sm"
          placeholder="Type to search..."
        />
        <Autocomplete
          :options="countries"
          label="Medium (Default)"
          size="md"
          placeholder="Type to search..."
        />
        <Autocomplete
          :options="countries"
          label="Large"
          size="lg"
          placeholder="Type to search..."
        />
      </div>
    `
  })
}

export const WithError = {
  render: () => ({
    components: { Autocomplete },
    setup() {
      return { countries }
    },
    template: `
      <Autocomplete
        :options="countries"
        label="Country"
        placeholder="Type to search..."
        error="Please select a country"
        required
      />
    `
  })
}

export const CustomFilter = {
  render: () => ({
    components: { Autocomplete },
    setup() {
      const customFilter = (options, query) => {
        if (!query) return options
        // Custom filter: starts with query
        return options.filter(opt => 
          opt.label.toLowerCase().startsWith(query.toLowerCase())
        )
      }
      return { customFilter, countries }
    },
    template: `
      <Autocomplete
        :options="countries"
        :filter-options="customFilter"
        label="Country (Starts With Filter)"
        placeholder="Type to search..."
        helperText="Only shows options that start with your input"
      />
    `
  })
}

export const MinSearchLength = {
  render: () => ({
    components: { Autocomplete },
    setup() {
      return { countries }
    },
    template: `
      <Autocomplete
        :options="countries"
        :min-search-length="2"
        label="Country"
        placeholder="Type at least 2 characters..."
        helperText="Options will appear after typing 2+ characters"
      />
    `
  })
}

export const Disabled = {
  render: () => ({
    components: { Autocomplete },
    setup() {
      const selected = { value: 'us', label: 'United States' }
      return { selected, countries }
    },
    template: `
      <Autocomplete
        v-model="selected"
        :options="countries"
        label="Country (Disabled)"
        disabled
      />
    `
  })
}

export const CustomOptionSlot = {
  render: () => ({
    components: { Autocomplete },
    setup() {
      const countriesWithFlags = [
        { value: 'us', label: 'United States', flag: '🇺🇸' },
        { value: 'uk', label: 'United Kingdom', flag: '🇬🇧' },
        { value: 'ca', label: 'Canada', flag: '🇨🇦' },
        { value: 'au', label: 'Australia', flag: '🇦🇺' },
        { value: 'de', label: 'Germany', flag: '🇩🇪' },
        { value: 'fr', label: 'France', flag: '🇫🇷' },
        { value: 'jp', label: 'Japan', flag: '🇯🇵' },
        { value: 'cn', label: 'China', flag: '🇨🇳' }
      ]
      return { countriesWithFlags }
    },
    template: `
      <Autocomplete
        :options="countriesWithFlags"
        label="Country with Flag"
        placeholder="Type to search..."
      >
        <template #option="{ option }">
          <span style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.5rem;">{{ option.flag }}</span>
            <span>{{ option.label }}</span>
          </span>
        </template>
      </Autocomplete>
    `
  })
}
