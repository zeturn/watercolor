// TypingText 动画状态管理
export class TypingAnimator {
  constructor(text, options = {}) {
    this.text = text
    this.speed = options.speed || 100
    this.pause = options.pause || 1500
    this.loop = options.loop || false
    this.erase = options.erase || false
    
    this.index = 0
    this.direction = 1 // 1: typing, -1: deleting
    this.timer = null
    this.onUpdate = options.onUpdate || (() => {})
  }

  step() {
    if (this.direction === 1) {
      // typing
      if (this.index < this.text.length) {
        this.index += 1
        this.onUpdate(this.text.slice(0, this.index))
      } else if (this.loop) {
        if (this.erase) {
          this.direction = -1
        } else {
          this.stop()
          setTimeout(() => {
            this.index = 0
            this.onUpdate('')
            this.start()
          }, this.pause)
        }
      } else {
        this.stop()
      }
    } else {
      // deleting
      if (this.index > 0) {
        this.index -= 1
        this.onUpdate(this.text.slice(0, this.index))
      } else {
        this.direction = 1
      }
    }
  }

  start() {
    this.stop()
    this.timer = setInterval(() => this.step(), this.speed)
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  reset() {
    this.stop()
    this.index = 0
    this.direction = 1
    this.onUpdate('')
  }

  updateText(newText) {
    this.text = newText
    this.reset()
    this.start()
  }
}