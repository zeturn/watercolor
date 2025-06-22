/**
 * Table Component Utilities
 * Provides utility functions for table functionality
 */

// ====== Constants ======
export const TABLE_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

export const CELL_VARIANTS = {
  head: 'head',
  body: 'body',
  footer: 'footer'
};

export const CELL_ALIGNMENTS = {
  inherit: 'inherit',
  left: 'left',
  center: 'center',
  right: 'right',
  justify: 'justify'
};

export const SORT_DIRECTIONS = {
  asc: 'asc',
  desc: 'desc',
  none: false
};

export const PADDING_VARIANTS = {
  normal: 'normal',
  checkbox: 'checkbox',
  none: 'none',
  dense: 'dense'
};

// ====== Sorting Utilities ======

/**
 * Sort data by column
 * @param {Array} data - Data array to sort
 * @param {string} column - Column key to sort by
 * @param {string} direction - Sort direction (asc/desc)
 * @param {Function} customComparator - Custom comparison function
 * @returns {Array} Sorted data
 */
export function sortData(data, column, direction, customComparator = null) {
  if (!data || !Array.isArray(data) || !column) return data;
  
  const sortedData = [...data];
  
  sortedData.sort((a, b) => {
    let aValue = getNestedValue(a, column);
    let bValue = getNestedValue(b, column);
    
    // Use custom comparator if provided
    if (customComparator && typeof customComparator === 'function') {
      const result = customComparator(aValue, bValue, a, b);
      return direction === SORT_DIRECTIONS.desc ? -result : result;
    }
    
    // Handle null/undefined values
    if (aValue == null && bValue == null) return 0;
    if (aValue == null) return 1;
    if (bValue == null) return -1;
    
    // Convert to strings for comparison if needed
    if (typeof aValue !== 'number' && typeof bValue !== 'number') {
      aValue = String(aValue).toLowerCase();
      bValue = String(bValue).toLowerCase();
    }
    
    let result = 0;
    if (aValue < bValue) result = -1;
    else if (aValue > bValue) result = 1;
    
    return direction === SORT_DIRECTIONS.desc ? -result : result;
  });
  
  return sortedData;
}

/**
 * Toggle sort direction
 * @param {string|boolean} currentDirection - Current sort direction
 * @returns {string} New sort direction
 */
export function toggleSortDirection(currentDirection) {
  switch (currentDirection) {
    case SORT_DIRECTIONS.asc:
      return SORT_DIRECTIONS.desc;
    case SORT_DIRECTIONS.desc:
      return SORT_DIRECTIONS.none;
    default:
      return SORT_DIRECTIONS.asc;
  }
}

/**
 * Get next sort direction
 * @param {string|boolean} currentDirection - Current sort direction
 * @param {boolean} allowUnsorted - Whether to allow unsorted state
 * @returns {string} Next sort direction
 */
export function getNextSortDirection(currentDirection, allowUnsorted = true) {
  if (!allowUnsorted) {
    return currentDirection === SORT_DIRECTIONS.asc 
      ? SORT_DIRECTIONS.desc 
      : SORT_DIRECTIONS.asc;
  }
  return toggleSortDirection(currentDirection);
}

// ====== Filtering Utilities ======

/**
 * Filter table data
 * @param {Array} data - Data to filter
 * @param {Object} filters - Filter configuration
 * @returns {Array} Filtered data
 */
export function filterData(data, filters = {}) {
  if (!data || !Array.isArray(data) || !filters) return data;
  
  return data.filter(row => {
    return Object.entries(filters).every(([column, filter]) => {
      if (!filter || (typeof filter === 'string' && filter.trim() === '')) {
        return true;
      }
      
      const value = getNestedValue(row, column);
      
      if (typeof filter === 'function') {
        return filter(value, row);
      }
      
      if (typeof filter === 'object' && filter.type) {
        return applyFilterType(value, filter);
      }
      
      // Default string filter
      return String(value || '').toLowerCase().includes(String(filter).toLowerCase());
    });
  });
}

/**
 * Apply specific filter type
 * @param {*} value - Value to filter
 * @param {Object} filter - Filter configuration
 * @returns {boolean} Whether value passes filter
 */
export function applyFilterType(value, filter) {
  const { type, value: filterValue, operator = 'equals' } = filter;
  
  switch (type) {
    case 'number':
      return applyNumberFilter(Number(value), Number(filterValue), operator);
    case 'date':
      return applyDateFilter(new Date(value), new Date(filterValue), operator);
    case 'boolean':
      return Boolean(value) === Boolean(filterValue);
    case 'array':
      return Array.isArray(filterValue) 
        ? filterValue.includes(value)
        : value === filterValue;
    default:
      return String(value || '').toLowerCase().includes(String(filterValue || '').toLowerCase());
  }
}

/**
 * Apply number filter
 * @param {number} value - Value to test
 * @param {number} filterValue - Filter value
 * @param {string} operator - Comparison operator
 * @returns {boolean} Filter result
 */
export function applyNumberFilter(value, filterValue, operator) {
  if (isNaN(value) || isNaN(filterValue)) return false;
  
  switch (operator) {
    case 'equals': return value === filterValue;
    case 'not_equals': return value !== filterValue;
    case 'greater_than': return value > filterValue;
    case 'greater_than_or_equal': return value >= filterValue;
    case 'less_than': return value < filterValue;
    case 'less_than_or_equal': return value <= filterValue;
    default: return value === filterValue;
  }
}

/**
 * Apply date filter
 * @param {Date} value - Date value to test
 * @param {Date} filterValue - Filter date
 * @param {string} operator - Comparison operator
 * @returns {boolean} Filter result
 */
export function applyDateFilter(value, filterValue, operator) {
  if (!(value instanceof Date) || !(filterValue instanceof Date)) return false;
  if (isNaN(value.getTime()) || isNaN(filterValue.getTime())) return false;
  
  const valueTime = value.getTime();
  const filterTime = filterValue.getTime();
  
  switch (operator) {
    case 'equals': return valueTime === filterTime;
    case 'not_equals': return valueTime !== filterTime;
    case 'after': return valueTime > filterTime;
    case 'after_or_equal': return valueTime >= filterTime;
    case 'before': return valueTime < filterTime;
    case 'before_or_equal': return valueTime <= filterTime;
    default: return valueTime === filterTime;
  }
}

// ====== Selection Utilities ======

/**
 * Handle row selection
 * @param {Array} selectedRows - Currently selected rows
 * @param {*} rowId - ID of row to toggle
 * @param {boolean} multiSelect - Whether multiple selection is allowed
 * @returns {Array} Updated selected rows
 */
export function handleRowSelection(selectedRows = [], rowId, multiSelect = true) {
  if (!multiSelect) {
    return selectedRows.includes(rowId) ? [] : [rowId];
  }
  
  if (selectedRows.includes(rowId)) {
    return selectedRows.filter(id => id !== rowId);
  }
  
  return [...selectedRows, rowId];
}

/**
 * Handle select all functionality
 * @param {Array} data - All data rows
 * @param {Array} selectedRows - Currently selected rows
 * @param {Function} getRowId - Function to get row ID
 * @returns {Array} Updated selected rows
 */
export function handleSelectAll(data, selectedRows = [], getRowId = (row, index) => index) {
  if (!data || !Array.isArray(data)) return selectedRows;
  
  const allIds = data.map(getRowId);
  const allSelected = allIds.every(id => selectedRows.includes(id));
  
  return allSelected ? [] : allIds;
}

/**
 * Check if all rows are selected
 * @param {Array} data - All data rows
 * @param {Array} selectedRows - Currently selected rows
 * @param {Function} getRowId - Function to get row ID
 * @returns {boolean} Whether all rows are selected
 */
export function isAllSelected(data, selectedRows = [], getRowId = (row, index) => index) {
  if (!data || !Array.isArray(data) || data.length === 0) return false;
  
  const allIds = data.map(getRowId);
  return allIds.every(id => selectedRows.includes(id));
}

/**
 * Check if some rows are selected
 * @param {Array} selectedRows - Currently selected rows
 * @returns {boolean} Whether some rows are selected
 */
export function isSomeSelected(selectedRows = []) {
  return selectedRows.length > 0;
}

// ====== Pagination Utilities ======

/**
 * Paginate data
 * @param {Array} data - Data to paginate
 * @param {number} page - Current page (0-based)
 * @param {number} pageSize - Items per page
 * @returns {Object} Pagination result
 */
export function paginateData(data, page = 0, pageSize = 10) {
  if (!data || !Array.isArray(data)) {
    return {
      data: [],
      totalItems: 0,
      totalPages: 0,
      currentPage: page,
      pageSize,
      hasNextPage: false,
      hasPreviousPage: false
    };
  }
  
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);
  
  return {
    data: paginatedData,
    totalItems,
    totalPages,
    currentPage: page,
    pageSize,
    hasNextPage: page < totalPages - 1,
    hasPreviousPage: page > 0,
    startIndex,
    endIndex: Math.min(endIndex, totalItems)
  };
}

/**
 * Calculate page info
 * @param {number} totalItems - Total number of items
 * @param {number} currentPage - Current page (0-based)
 * @param {number} pageSize - Items per page
 * @returns {Object} Page information
 */
export function getPageInfo(totalItems, currentPage, pageSize) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const startItem = currentPage * pageSize + 1;
  const endItem = Math.min((currentPage + 1) * pageSize, totalItems);
  
  return {
    totalPages,
    startItem,
    endItem,
    totalItems,
    hasNextPage: currentPage < totalPages - 1,
    hasPreviousPage: currentPage > 0
  };
}

// ====== Class Name Utilities ======

/**
 * Generate table container classes
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getTableContainerClasses(props = {}) {
  const {
    stickyHeader = false,
    noBorder = false,
    rounded = false,
    flat = false
  } = props;
  
  const classes = ['wc-table-container'];
  
  if (stickyHeader) classes.push('wc-table-container--sticky');
  if (noBorder) classes.push('wc-table-container--no-border');
  if (rounded) classes.push('wc-table-container--rounded');
  if (flat) classes.push('wc-table-container--flat');
  
  return classes.join(' ');
}

/**
 * Generate table classes
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getTableClasses(props = {}) {
  const {
    size = 'md',
    hover = false,
    striped = false,
    dense = false,
    loading = false,
    fixed = false,
    compact = false,
    spacious = false,
    noWrap = false,
    breakAll = false,
    breakWord = false
  } = props;
  
  const classes = ['wc-table'];
  
  classes.push(`wc-table--${size}`);
  
  if (hover) classes.push('wc-table--hover');
  if (striped) classes.push('wc-table--striped');
  if (dense) classes.push('wc-table--dense');
  if (loading) classes.push('wc-table--loading');
  if (fixed) classes.push('wc-table--fixed');
  if (compact) classes.push('wc-table--compact');
  if (spacious) classes.push('wc-table--spacious');
  if (noWrap) classes.push('wc-table--no-wrap');
  if (breakAll) classes.push('wc-table--break-all');
  if (breakWord) classes.push('wc-table--break-word');
  
  return classes.join(' ');
}

/**
 * Generate table head classes
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getTableHeadClasses(props = {}) {
  const { sticky = false } = props;
  
  const classes = ['wc-table-head'];
  
  if (sticky) classes.push('wc-table-head--sticky');
  
  return classes.join(' ');
}

/**
 * Generate table row classes
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getTableRowClasses(props = {}) {
  const {
    hover = false,
    selected = false,
    clickable = false
  } = props;
  
  const classes = ['wc-table-row'];
  
  if (hover || clickable) classes.push('wc-table-row--hover');
  if (selected) classes.push('wc-table-row--selected');
  if (clickable) classes.push('wc-table-row--clickable');
  
  return classes.join(' ');
}

/**
 * Generate table cell classes
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getTableCellClasses(props = {}) {
  const {
    variant = 'body',
    size = 'medium',
    align = 'inherit',
    valign = 'inherit',
    padding = 'normal',
    sortDirection = false,
    numeric = false,
    stickyLeft = false,
    stickyRight = false,
    selectable = false
  } = props;
  
  const classes = ['wc-table-cell'];
  
  classes.push(`wc-table-cell--${variant}`);
  classes.push(`wc-table-cell--${size}`);
  
  if (align !== 'inherit') {
    classes.push(`wc-table-cell--align-${align}`);
  }
  
  if (valign !== 'inherit') {
    classes.push(`wc-table-cell--valign-${valign}`);
  }
  
  classes.push(`wc-table-cell--padding-${padding}`);
  
  if (sortDirection) {
    classes.push('wc-table-cell--sortable');
    if (sortDirection !== true) {
      classes.push(`wc-table-cell--sort-${sortDirection}`);
    }
  }
  
  if (numeric) classes.push('wc-table-cell--numeric');
  if (stickyLeft) classes.push('wc-table-cell--sticky-left');
  if (stickyRight) classes.push('wc-table-cell--sticky-right');
  if (selectable) classes.push('wc-table-cell--selectable');
  
  return classes.join(' ');
}

// ====== Data Utilities ======

/**
 * Get nested value from object
 * @param {Object} obj - Object to get value from
 * @param {string} path - Dot notation path
 * @returns {*} Value at path
 */
export function getNestedValue(obj, path) {
  if (!obj || !path) return undefined;
  
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

/**
 * Set nested value in object
 * @param {Object} obj - Object to set value in
 * @param {string} path - Dot notation path
 * @param {*} value - Value to set
 * @returns {Object} Updated object
 */
export function setNestedValue(obj, path, value) {
  if (!obj || !path) return obj;
  
  const keys = path.split('.');
  const lastKey = keys.pop();
  
  const target = keys.reduce((current, key) => {
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {};
    }
    return current[key];
  }, obj);
  
  target[lastKey] = value;
  return obj;
}

/**
 * Format cell value for display
 * @param {*} value - Value to format
 * @param {Object} options - Formatting options
 * @returns {string} Formatted value
 */
export function formatCellValue(value, options = {}) {
  const {
    type = 'string',
    format,
    locale = 'en-US',
    currency = 'USD',
    decimals,
    dateFormat = 'short'
  } = options;
  
  if (value == null) return '';
  
  switch (type) {
    case 'number':
      return new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }).format(Number(value));
      
    case 'currency':
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency
      }).format(Number(value));
      
    case 'percentage':
      return new Intl.NumberFormat(locale, {
        style: 'percent',
        minimumFractionDigits: decimals || 1,
        maximumFractionDigits: decimals || 1
      }).format(Number(value) / 100);
      
    case 'date':
      const date = new Date(value);
      if (isNaN(date.getTime())) return String(value);
      
      if (format) {
        return date.toLocaleDateString(locale, format);
      }
      
      return date.toLocaleDateString(locale, {
        dateStyle: dateFormat
      });
      
    case 'boolean':
      return Boolean(value) ? 'Yes' : 'No';
      
    default:
      return String(value);
  }
}

// ====== Validation ======

/**
 * Validate table props
 * @param {Object} props - Component props
 * @returns {Object} Validation result
 */
export function validateTableProps(props = {}) {
  const errors = [];
  const warnings = [];
  
  // Size validation
  if (props.size && !Object.values(TABLE_SIZES).includes(props.size)) {
    errors.push(`Invalid size: ${props.size}`);
  }
  
  // Data validation
  if (props.data && !Array.isArray(props.data)) {
    errors.push('Data must be an array');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

// ====== Export All Utilities ======
export default {
  // Constants
  TABLE_SIZES,
  CELL_VARIANTS,
  CELL_ALIGNMENTS,
  SORT_DIRECTIONS,
  PADDING_VARIANTS,
  
  // Sorting
  sortData,
  toggleSortDirection,
  getNextSortDirection,
  
  // Filtering
  filterData,
  applyFilterType,
  applyNumberFilter,
  applyDateFilter,
  
  // Selection
  handleRowSelection,
  handleSelectAll,
  isAllSelected,
  isSomeSelected,
  
  // Pagination
  paginateData,
  getPageInfo,
  
  // Class utilities
  getTableContainerClasses,
  getTableClasses,
  getTableHeadClasses,
  getTableRowClasses,
  getTableCellClasses,
  
  // Data utilities
  getNestedValue,
  setNestedValue,
  formatCellValue,
  
  // Validation
  validateTableProps
};