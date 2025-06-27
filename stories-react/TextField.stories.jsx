import React, { useState } from 'react'
import TextField from '@/components/TextField/TextField.jsx'

export default {
  title: 'Components/TextField (React)',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的文本字段组件，完全兼容Material-UI的TextField API。支持多种变体、尺寸和验证状态。'
      }
    }
  },
  argTypes: {
    value: {
      description: '输入框的值',
      control: { type: 'text' }
    },
    label: {
      description: '标签文本',
      control: { type: 'text' }
    },
    type: {
      description: '输入框类型',
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel', 'url']
    },
    placeholder: {
      description: '占位符文本',
      control: { type: 'text' }
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' }
    },
    readonly: {
      description: '是否只读',
      control: { type: 'boolean' }
    },
    required: {
      description: '是否必填',
      control: { type: 'boolean' }
    },
    error: {
      description: '错误信息',
      control: { type: 'text' }
    },
    helperText: {
      description: '帮助文本',
      control: { type: 'text' }
    },
    size: {
      description: '尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    variant: {
      description: '变体',
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard']
    },
    fullWidth: {
      description: '是否全宽',
      control: { type: 'boolean' }
    },
    multiline: {
      description: '是否多行',
      control: { type: 'boolean' }
    },
    rows: {
      description: '多行时的行数',
      control: { type: 'number' }
    },
    startAdornment: {
      description: '前置装饰',
      control: { type: 'text' }
    },
    endAdornment: {
      description: '后置装饰',
      control: { type: 'text' }
    }
  },
  tags: ['autodocs']
}

export const Default = {
  args: {
    label: '用户名',
    placeholder: '请输入用户名'
  }
}

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <TextField 
        label="Outlined (默认)" 
        variant="outlined" 
        placeholder="Outlined variant"
        helperText="这是outlined变体"
      />
      <TextField 
        label="Filled" 
        variant="filled" 
        placeholder="Filled variant"
        helperText="这是filled变体"
      />
      <TextField 
        label="Standard" 
        variant="standard" 
        placeholder="Standard variant"
        helperText="这是standard变体"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示TextField的三种变体：outlined（默认）、filled和standard。'
      }
    }
  }
}

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextField 
        label="小尺寸" 
        size="sm" 
        placeholder="小尺寸输入框"
      />
      <TextField 
        label="中等尺寸" 
        size="md" 
        placeholder="中等尺寸输入框"
      />
      <TextField 
        label="大尺寸" 
        size="lg" 
        placeholder="大尺寸输入框"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示TextField的三种尺寸：sm、md（默认）和lg。'
      }
    }
  }
}

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextField 
        label="正常状态" 
        placeholder="正常状态"
        helperText="这是帮助文本"
      />
      <TextField 
        label="必填字段" 
        placeholder="必填字段"
        required
        helperText="这是必填字段"
      />
      <TextField 
        label="错误状态" 
        placeholder="错误状态"
        error="这是错误信息"
      />
      <TextField 
        label="禁用状态" 
        placeholder="禁用状态"
        disabled
        value="禁用的值"
      />
      <TextField 
        label="只读状态" 
        placeholder="只读状态"
        readonly
        value="只读的值"
        helperText="这是只读字段"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示TextField的各种状态：正常、必填、错误、禁用和只读。'
      }
    }
  }
}

export const InputTypes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextField 
        label="文本" 
        type="text"
        placeholder="文本输入"
      />
      <TextField 
        label="密码" 
        type="password"
        placeholder="密码输入"
      />
      <TextField 
        label="邮箱" 
        type="email"
        placeholder="邮箱输入"
      />
      <TextField 
        label="数字" 
        type="number"
        placeholder="数字输入"
      />
      <TextField 
        label="电话" 
        type="tel"
        placeholder="电话输入"
      />
      <TextField 
        label="网址" 
        type="url"
        placeholder="网址输入"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示TextField支持的各种输入类型。'
      }
    }
  }
}

export const Multiline = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <TextField 
        label="多行文本" 
        multiline
        rows={4}
        placeholder="请输入多行文本..."
        helperText="这是多行文本输入框"
      />
      <TextField 
        label="自动高度多行文本" 
        multiline
        placeholder="自动调整高度的多行文本..."
        variant="filled"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示多行文本输入功能，支持指定行数或自动调整高度。'
      }
    }
  }
}

export const WithAdornments = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextField 
        label="价格" 
        startAdornment="¥"
        placeholder="0.00"
        type="number"
      />
      <TextField 
        label="重量" 
        endAdornment="kg"
        placeholder="0"
        type="number"
      />
      <TextField 
        label="网站" 
        startAdornment="https://"
        endAdornment=".com"
        placeholder="example"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示带有前置和后置装饰的文本框，常用于单位、前缀等场景。'
      }
    }
  }
}

export const FullWidth = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <TextField 
        label="全宽文本框" 
        placeholder="这是一个全宽的文本框"
        fullWidth
        helperText="fullWidth属性使文本框占满容器宽度"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示全宽文本框，会占满父容器的宽度。'
      }
    }
  }
}
