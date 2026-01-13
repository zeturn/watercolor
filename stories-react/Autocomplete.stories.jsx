import React, { useState } from 'react'
import Autocomplete from '../src/components/Autocomplete/Autocomplete.jsx'

export default {
  title: 'Components/Autocomplete (React)',
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
  render: (args) => {
    const [value, setValue] = useState(null)
    return (
      <Autocomplete
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={countries}
        label="Select Country"
        placeholder="Type to search..."
      />
    )
  }
}

export const WithValue = () => {
  const [value, setValue] = useState({ value: 'us', label: 'United States' })
  return (
    <Autocomplete
      value={value}
      onChange={(e) => setValue(e.target.value)}
      options={countries}
      label="Country"
      placeholder="Search countries..."
    />
  )
}

export const FreeSolo = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={fruits}
        label="Favorite Fruit"
        placeholder="Type any fruit name..."
        freeSolo
        helperText="You can type a custom value"
      />
      <p style={{ marginTop: '1rem' }}>Current value: {JSON.stringify(value)}</p>
    </div>
  )
}

export const Multiple = () => {
  const [value, setValue] = useState([])
  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={fruits}
        label="Select Multiple Fruits"
        placeholder="Search fruits..."
        multiple
      />
      <p style={{ marginTop: '1rem' }}>
        Selected: {value.map(f => f.label).join(', ')}
      </p>
    </div>
  )
}

export const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Autocomplete
      options={countries}
      label="Outlined (Default)"
      variant="outlined"
      placeholder="Type to search..."
    />
    <Autocomplete
      options={countries}
      label="Filled"
      variant="filled"
      placeholder="Type to search..."
    />
    <Autocomplete
      options={countries}
      label="Standard"
      variant="standard"
      placeholder="Type to search..."
    />
  </div>
)

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Autocomplete
      options={countries}
      label="Small"
      size="sm"
      placeholder="Type to search..."
    />
    <Autocomplete
      options={countries}
      label="Medium (Default)"
      size="md"
      placeholder="Type to search..."
    />
    <Autocomplete
      options={countries}
      label="Large"
      size="lg"
      placeholder="Type to search..."
    />
  </div>
)

export const WithError = () => (
  <Autocomplete
    options={countries}
    label="Country"
    placeholder="Type to search..."
    error
    errorMessage="Please select a country"
    required
  />
)

export const CustomFilter = () => {
  const customFilter = (options, query) => {
    if (!query) return options
    // Custom filter: starts with query
    return options.filter(opt => 
      opt.label.toLowerCase().startsWith(query.toLowerCase())
    )
  }
  
  return (
    <Autocomplete
      options={countries}
      filterOptions={customFilter}
      label="Country (Starts With Filter)"
      placeholder="Type to search..."
      helperText="Only shows options that start with your input"
    />
  )
}

export const MinSearchLength = () => (
  <Autocomplete
    options={countries}
    minSearchLength={2}
    label="Country"
    placeholder="Type at least 2 characters..."
    helperText="Options will appear after typing 2+ characters"
  />
)

export const Disabled = () => {
  const [value] = useState({ value: 'us', label: 'United States' })
  return (
    <Autocomplete
      value={value}
      options={countries}
      label="Country (Disabled)"
      disabled
    />
  )
}

export const CustomRenderOption = () => {
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
  
  return (
    <Autocomplete
      options={countriesWithFlags}
      label="Country with Flag"
      placeholder="Type to search..."
      renderOption={(option) => (
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>{option.flag}</span>
          <span>{option.label}</span>
        </span>
      )}
    />
  )
}

export const ControlledWithClear = () => {
  const [value, setValue] = useState(null)
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Autocomplete
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={countries}
        label="Country"
        placeholder="Search countries..."
        clearable
      />
      <div>
        <button onClick={() => setValue(null)}>Clear Value</button>
        <button onClick={() => setValue(countries[0])} style={{ marginLeft: '0.5rem' }}>
          Set to {countries[0].label}
        </button>
      </div>
      <p>Current value: {value ? value.label : 'null'}</p>
    </div>
  )
}
