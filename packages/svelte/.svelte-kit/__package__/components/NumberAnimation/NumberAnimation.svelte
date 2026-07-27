<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  let {
    value = undefined,
    from = 0,
    duration = 2000,
    decimals = 0,
    separator = '',
    prefix = '',
    suffix = '',
    formatter = null,
    easing = 'linear',
    autoPlay = true,
    active = undefined,
    to = undefined,
    precision = undefined,
    showSeparator = false,
    oncomplete,
  }: {
    value?: number
    from?: number
    duration?: number
    decimals?: number
    separator?: string
    prefix?: string
    suffix?: string
    formatter?: ((value: number) => string) | null
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
    autoPlay?: boolean
    active?: boolean
    to?: number
    precision?: number
    showSeparator?: boolean
    oncomplete?: () => void
  } = $props()

  // `from` defines the initial animation frame; later runs update through the animation loop.
  // svelte-ignore state_referenced_locally
  let currentValue = $state(from)
  let isAnimating = $state(false)
  let animationFrame: number | null = null

  const isAutoPlay = $derived(active !== undefined ? active : autoPlay)
  const finalValue = $derived(to !== undefined ? to : (value ?? 0))
  const decimalsComputed = $derived(precision !== undefined ? precision : decimals)
  const separatorComputed = $derived(showSeparator ? separator || ',' : separator)

  const numberAnimationClasses = $derived(
    [
      'wc-number-animation',
      easing ? `wc-number-animation--${easing}` : '',
      isAnimating || isAutoPlay ? 'wc-number-animation--playing' : '',
    ]
      .filter(Boolean)
      .join(' ')
  )

  const displayValue = $derived.by(() => {
    const raw = currentValue
    if (formatter) return formatter(raw)
    let formatted = decimalsComputed > 0 ? raw.toFixed(decimalsComputed) : Math.round(raw).toString()
    if (separatorComputed) {
      const parts = formatted.split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separatorComputed)
      formatted = parts.join('.')
    }
    return `${prefix}${formatted}${suffix}`
  })

  function easeProgress(progress: number): number {
    switch (easing) {
      case 'ease-in':
        return progress * progress
      case 'ease-out':
        return 1 - (1 - progress) * (1 - progress)
      case 'ease-in-out':
        return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2
      default:
        return progress
    }
  }

  function stopAnimation() {
    if (animationFrame !== null) {
      if (typeof window !== 'undefined') {
        cancelAnimationFrame(animationFrame)
      } else {
        clearTimeout(animationFrame as unknown as ReturnType<typeof setTimeout>)
      }
      animationFrame = null
    }
    isAnimating = false
  }

  export function start() {
    animate()
  }

  export function stop() {
    stopAnimation()
  }

  function animate() {
    const startTime = Date.now()
    const startValue = currentValue
    const target = finalValue
    const valueChange = target - startValue
    isAnimating = true

    const step = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      currentValue = startValue + valueChange * easeProgress(progress)
      if (progress < 1) {
        if (typeof window !== 'undefined') {
          animationFrame = requestAnimationFrame(step)
        } else {
          animationFrame = setTimeout(step, 16) as unknown as number
        }
      } else {
        currentValue = target
        isAnimating = false
        oncomplete?.()
      }
    }

    step()
  }

  let mounted = false

  onMount(() => {
    mounted = true
    if (isAutoPlay) {
      animate()
    } else {
      currentValue = finalValue
    }
  })

  $effect(() => {
    const target = finalValue
    if (!mounted) return
    stopAnimation()
    if (isAutoPlay) {
      animate()
    } else {
      currentValue = target
    }
  })

  onDestroy(stopAnimation)
</script>

<span class={numberAnimationClasses}>{displayValue}</span>

<style>
  .wc-number-animation {
    display: inline-block;
    font-variant-numeric: tabular-nums;
  }
</style>
