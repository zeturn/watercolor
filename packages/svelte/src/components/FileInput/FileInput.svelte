<script lang="ts">
  let {
    accept = '',
    multiple = false,
    disabled = false,
    label = 'Choose file',
    class: className = '',
    onchange,
    ...rest
  }: { accept?: string; multiple?: boolean; disabled?: boolean; label?: string; class?: string; onchange?: (e: Event) => void; [key: string]: any } = $props()

  let fileNames = $state('')

  function handleChange(e: Event) {
    const input = e.currentTarget as HTMLInputElement
    const files = input.files
    fileNames = files && files.length ? Array.from(files).map((f) => f.name).join(', ') : ''
    onchange?.(e)
  }
</script>

<label class="wc-file-input {disabled ? 'wc-file-input--disabled' : ''} {className}">
  <span class="wc-file-input__button">{label}</span>
  {#if fileNames}<span class="wc-file-input__names">{fileNames}</span>{/if}
  <input type="file" class="wc-file-input__input" {accept} {multiple} {disabled} onchange={handleChange} {...rest} />
</label>

<style>
  .wc-file-input {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  .wc-file-input--disabled { cursor: not-allowed; opacity: 0.6; }
  .wc-file-input__button {
    display: inline-flex;
    align-items: center;
    padding: 8px 14px;
    border-radius: 8px;
    background: var(--wc-accent, #3b82f6);
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .wc-file-input__input { position: absolute; width: 0; height: 0; opacity: 0; }
  .wc-file-input__names { font-size: 0.8125rem; color: var(--wc-text-secondary, #6b7280); }
</style>
