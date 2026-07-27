<script lang="ts">
  let {
    length = 6,
    value = $bindable(''),
    disabled = false,
    error = false,
    size = 'md',
    type = 'number',
    class: className = '',
    oninput,
    oncomplete,
  }: {
    length?: number;
    value?: string;
    disabled?: boolean;
    error?: boolean;
    size?: 'sm' | 'md' | 'lg';
    type?: 'number' | 'text';
    class?: string;
    oninput?: (value: string) => void;
    oncomplete?: (value: string) => void;
  } = $props()

  // Initial digits are seeded once; subsequent edits are synchronized through sync().
  // svelte-ignore state_referenced_locally
  let digits = $state(Array.from({ length }, (_, i) => (value ? value[i] ?? '' : '')))

  function sync() {
    value = digits.join('')
    oninput?.(value)
    if (value.length === length && !digits.includes('')) oncomplete?.(value)
  }
  function handleInput(i: number, e: Event) {
    const input = e.currentTarget as HTMLInputElement
    digits[i] = input.value.slice(-1)
    sync()
    if (digits[i] && i < length - 1) document.getElementById(`wc-vc-${i + 1}`)?.focus()
  }
  function handleKeydown(i: number, e: KeyboardEvent) {
    if (e.key === 'Backspace' && !digits[i] && i > 0) {
      document.getElementById(`wc-vc-${i - 1}`)?.focus()
    }
  }
</script>

<div class="wc-verification wc-verification--{size} {error ? 'wc-verification--error' : ''} {className}">
  {#each digits as _, i (i)}
    <input
      id="wc-vc-{i}"
      class="wc-verification__cell"
      maxlength="1"
      inputmode={type === 'number' ? 'numeric' : 'text'}
      {disabled}
      bind:value={digits[i]}
      oninput={(e) => handleInput(i, e)}
      onkeydown={(e) => handleKeydown(i, e)}
    />
  {/each}
</div>

<style>
  .wc-verification { display: inline-flex; gap: 8px; }
  .wc-verification__cell {
    width: 44px;
    height: 52px;
    text-align: center;
    font-size: 1.25rem;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.15));
    border-radius: 8px;
    background: var(--wc-surface-canvas, #fff);
    color: var(--wc-text-primary, #1a1a1a);
    outline: none;
  }
  .wc-verification__cell:focus { border-color: var(--wc-accent, #3b82f6); box-shadow: 0 0 0 3px var(--wc-state-focus-ring, rgba(59, 130, 246, 0.25)); }
  .wc-verification--sm .wc-verification__cell { width: 36px; height: 42px; font-size: 1rem; }
  .wc-verification--lg .wc-verification__cell { width: 52px; height: 62px; font-size: 1.5rem; }
  .wc-verification--error .wc-verification__cell { border-color: var(--wc-danger, #ef4444); }
</style>
