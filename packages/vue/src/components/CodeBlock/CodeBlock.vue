<template>
  <figure
    :class="codeBlockClasses"
    :style="style"
  >
    <figcaption class="wc-code-block__header">
      <span class="wc-code-block__title">{{ title || (showLanguage ? displayLanguage : 'Code') }}</span>
      <div class="wc-code-block__actions">
        <span
          v-if="showLanguage && title"
          class="wc-code-block__language"
        >{{ displayLanguage }}</span>
        <button
          v-if="showCopyButton"
          class="wc-code-block__copy"
          type="button"
          :aria-label="copied ? 'Copied code' : 'Copy code'"
          :title="copied ? '已复制' : '复制代码'"
          @click="handleCopy"
        >
          <svg
            v-if="copied"
            class="wc-code-block__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>
          <svg
            v-else
            class="wc-code-block__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 8h10v12H8z" />
            <path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </button>
      </div>
    </figcaption>

    <pre
      class="wc-code-block__pre"
      :style="maxHeight ? { maxHeight } : undefined"
    ><code :class="`language-${normalizedLanguage}`"><span
      v-for="line in renderedLines"
      :key="line.key"
      :class="['wc-code-block__line', `wc-code-block__line--${line.state}`]"
    ><span
      v-if="showLineNumbers"
      class="wc-code-block__number"
    >{{ line.number }}</span><span
      v-if="diff"
      class="wc-code-block__marker"
    >{{ line.marker }}</span><span class="wc-code-block__code"><span
      v-for="token in line.tokens"
      :key="token.key"
      :class="['wc-code-token', `wc-code-token--${token.type}`]"
    >{{ token.value }}</span>{{ line.empty ? '\n' : '' }}</span></span></code></pre>
  </figure>
</template>

<script setup>
import { computed, ref } from 'vue'
import './style.css'
import { copyCodeToClipboard, getDiffState, getDisplayLanguage, getVisibleLine, normalizeLanguage, tokenizeLine } from './utils.js'

const props = defineProps({
  code: { type: String, default: '' },
  language: { type: String, default: 'text' },
  title: { type: String, default: '' },
  showLanguage: { type: Boolean, default: true },
  showLineNumbers: { type: Boolean, default: true },
  showCopyButton: { type: Boolean, default: true },
  diff: { type: Boolean, default: false },
  wrap: { type: Boolean, default: false },
  maxHeight: { type: String, default: '' },
  className: { type: String, default: '' },
  style: { type: [String, Object, Array], default: undefined },
})

const emit = defineEmits(['copy'])
const copied = ref(false)

const normalizedLanguage = computed(() => normalizeLanguage(props.diff ? 'diff' : props.language))
const displayLanguage = computed(() => getDisplayLanguage(normalizedLanguage.value))
const codeBlockClasses = computed(() => [
  'wc-code-block',
  props.wrap && 'wc-code-block--wrap',
  props.diff && 'wc-code-block--diff',
  props.className,
].filter(Boolean))

const renderedLines = computed(() => {
  return String(props.code ?? '').replace(/\n$/, '').split('\n').map((line, index) => {
    const state = getDiffState(line, props.diff)
    const visibleLine = getVisibleLine(line, props.diff)
    return {
      key: `${index}-${line}`,
      number: index + 1,
      state,
      marker: state === 'added' ? '+' : state === 'removed' ? '−' : ' ',
      empty: visibleLine === '',
      tokens: tokenizeLine(visibleLine, normalizedLanguage.value).map((token, tokenIndex) => ({
        ...token,
        key: `${index}-${tokenIndex}-${token.value}`,
      })),
    }
  })
})

async function handleCopy() {
  const ok = await copyCodeToClipboard(String(props.code ?? ''))
  if (!ok) return
  copied.value = true
  emit('copy', String(props.code ?? ''))
  window.setTimeout(() => {
    copied.value = false
  }, 1400)
}
</script>
