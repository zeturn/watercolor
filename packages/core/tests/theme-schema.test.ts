import Ajv2020 from 'ajv/dist/2020.js'
import { describe, expect, it } from 'vitest'
import schema from '../theme-v2.schema.json'
import { validateThemeConfig } from '../src/theme/config.ts'

const validateSchema = new Ajv2020({ strict: true }).compile(schema)

describe('Theme v2 JSON schema', () => {
  it('accepts the same representative strict theme as the runtime validator', () => {
    const theme = {
      version: 2,
      tokens: {
        colors: { primary: { 600: '#8b5cf6' } },
        motion: { easing: 'cubic-bezier(.2, 0, 0, 1)' },
      },
      modes: { light: { canvas: '#ffffff', textPrimary: '#222222', shadowSm: '0 1px 2px rgb(0 0 0 / 0.1)' } },
    }
    expect(validateSchema(theme)).toBe(true)
    expect(validateThemeConfig(theme).ok).toBe(true)
  })

  it('rejects unknown tokens and invalid color values', () => {
    expect(validateSchema({ version: 2, modes: { light: { componentCss: '.button{}' } } })).toBe(false)
    expect(validateSchema({ version: 2, tokens: { colors: { primary: { 600: 'banana' } } } })).toBe(false)
  })
})
