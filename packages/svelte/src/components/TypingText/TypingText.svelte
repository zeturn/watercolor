<script lang="ts">
  import { onDestroy } from 'svelte'

  let {
    text = 'Hello, Watercolor UI!',
    speed = 100,
    pause = 1500,
    loop = false,
    erase = false,
    showCursor = true,
  }: {
    text?: string
    speed?: number
    pause?: number
    loop?: boolean
    erase?: boolean
    showCursor?: boolean
  } = $props()

  let displayText = $state('')
  let timer: ReturnType<typeof setTimeout> | null = null

  function stop() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  function run(currentText: string) {
    stop()
    displayText = ''
    let index = 0
    let deleting = false

    const step = () => {
      if (!deleting) {
        index += 1
        displayText = currentText.slice(0, index)
        if (index >= currentText.length) {
          if (erase && loop) {
            deleting = true
            timer = setTimeout(step, pause)
          } else if (loop) {
            timer = setTimeout(() => {
              index = 0
              displayText = ''
              timer = setTimeout(step, speed)
            }, pause)
          }
          return
        }
        timer = setTimeout(step, speed)
      } else {
        index -= 1
        displayText = currentText.slice(0, index)
        if (index <= 0) {
          deleting = false
          timer = setTimeout(step, speed)
          return
        }
        timer = setTimeout(step, speed / 2)
      }
    }

    timer = setTimeout(step, speed)
  }

  $effect(() => {
    // re-run when any option changes
    void speed
    void pause
    void loop
    void erase
    run(text)
    return stop
  })

  onDestroy(stop)
</script>

<span class="typing-wrapper">
  <span class="typing-text">{displayText}</span>
  {#if showCursor}<span class="typing-cursor"></span>{/if}
</span>

<style>
  .typing-wrapper {
    display: inline-flex;
    align-items: center;
  }
  .typing-cursor {
    display: inline-block;
    width: 1px;
    height: 1em;
    background: currentColor;
    margin-left: 2px;
    animation: blink 1s steps(1) infinite;
  }
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
</style>
