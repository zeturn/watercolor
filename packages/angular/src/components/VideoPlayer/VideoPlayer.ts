import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
  effect,
  input,
  signal,
  viewChild,
} from '@angular/core'
import { useLocale } from '../../hooks.js'

@Component({
  selector: 'wc-video-player',
  standalone: true,
  template: `
    <div class="video-wrapper">
      <video
        #videoEl
        class="video-el"
        [src]="src()"
        (timeupdate)="updateProgress()"
        (ended)="playing.set(false)"
      ></video>
      <div class="controls">
        <button
          class="ctrl-btn"
          [attr.aria-label]="playing() ? locale.messages.pauseVideo : locale.messages.playVideo"
          (click)="togglePlay()"
        >
          @if (playing()) {
            <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6v12" /><path d="M16 6v12" /></svg>
          } @else {
            <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10-6.5-10-6.5Z" /></svg>
          }
        </button>
        <div
          class="progress"
          role="slider"
          tabindex="0"
          [attr.aria-label]="locale.messages.videoProgress"
          [attr.aria-valuenow]="roundedProgress()"
          aria-valuemin="0"
          aria-valuemax="100"
          (click)="seek($event)"
          (keydown)="handleProgressKeydown($event)"
        >
          <div class="progress-bar" [style.width.%]="progress()"></div>
        </div>
        <span class="time">{{ formattedCurrent() }} / {{ formattedDuration() }}</span>
        <button
          class="ctrl-btn"
          [attr.aria-label]="muted() ? locale.messages.unmuteVideo : locale.messages.muteVideo"
          (click)="toggleMute()"
        >
          @if (muted()) {
            <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6L8 10H4Z" /><path d="m17 10 4 4" /><path d="m21 10-4 4" /></svg>
          } @else {
            <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6L8 10H4Z" /><path d="M16 9.5a4 4 0 0 1 0 5" /><path d="M18.5 7a7.5 7.5 0 0 1 0 10" /></svg>
          }
        </button>
        <input
          class="volume"
          type="range"
          min="0"
          max="1"
          step="0.05"
          [value]="volume()"
          (input)="handleVolumeInput($event)"
          [attr.aria-label]="locale.messages.volume"
        />
        <button class="ctrl-btn" [attr.aria-label]="locale.messages.enterFullscreen" (click)="handleFullscreen()">
          <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4H4v4" /><path d="M16 4h4v4" /><path d="M20 16v4h-4" /><path d="M4 16v4h4" /></svg>
        </button>
      </div>
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.video-wrapper{position:relative;display:inline-block;max-width:100%;border-radius:12px;overflow:hidden;background:#000}
.video-el{display:block;width:100%;max-width:100%}
.controls{position:absolute;left:0;right:0;bottom:0;display:flex;align-items:center;gap:8px;padding:8px 12px;background:linear-gradient(transparent,rgba(0,0,0,0.7));color:#fff}
.ctrl-btn{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:4px;border:none;border-radius:6px;background:none;color:inherit;cursor:pointer}
.ctrl-btn:hover{background:rgba(255,255,255,0.15)}
.video-icon{width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.progress{flex:1;height:6px;border-radius:3px;background:rgba(255,255,255,0.3);cursor:pointer}
.progress-bar{height:100%;border-radius:3px;background:var(--wc-color-primary,#3b82f6)}
.time{font-size:0.75rem;white-space:nowrap;font-variant-numeric:tabular-nums}
.volume{width:64px;accent-color:var(--wc-color-primary,#3b82f6)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayer {
  readonly src = input.required<string>()
  readonly autoplay = input(false)
  readonly loop = input(false)

  readonly locale = useLocale()

  readonly playing = signal(false)
  readonly progress = signal(0)
  readonly volume = signal(0.7)
  readonly muted = signal(false)
  readonly duration = signal(0)
  readonly current = signal(0)

  private readonly videoEl = viewChild<ElementRef<HTMLVideoElement>>('videoEl')

  readonly formattedCurrent = computed(() => this.formatTime(this.current()))
  readonly formattedDuration = computed(() => this.formatTime(this.duration()))
  readonly roundedProgress = computed(() => Math.round(this.progress()))

  constructor() {
    effect(() => {
      const video = this.videoEl()?.nativeElement
      if (video) video.volume = this.volume()
    })

    afterNextRender(() => {
      const video = this.videoEl()?.nativeElement
      if (video) {
        video.volume = this.volume()
        video.muted = this.muted()
        video.loop = this.loop()
        if (this.autoplay()) video.play()
      }
    })
  }

  formatTime(seconds: number): string {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${String(secs).padStart(2, '0')}`
  }

  togglePlay(): void {
    const video = this.videoEl()?.nativeElement
    if (!video) return
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  updateProgress(): void {
    const video = this.videoEl()?.nativeElement
    if (!video) return
    this.duration.set(video.duration || 0)
    this.current.set(video.currentTime)
    this.progress.set(this.duration() ? (this.current() / this.duration()) * 100 : 0)
    this.playing.set(!video.paused)
  }

  seek(event: MouseEvent): void {
    const video = this.videoEl()?.nativeElement
    if (!video || !this.duration()) return
    const target = event.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const ratio = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1)
    video.currentTime = ratio * this.duration()
  }

  handleProgressKeydown(event: KeyboardEvent): void {
    const video = this.videoEl()?.nativeElement
    if (!video || !this.duration()) return
    if (event.key === 'ArrowRight') video.currentTime = Math.min(video.currentTime + 5, this.duration())
    if (event.key === 'ArrowLeft') video.currentTime = Math.max(video.currentTime - 5, 0)
  }

  toggleMute(): void {
    this.muted.set(!this.muted())
    const video = this.videoEl()?.nativeElement
    if (video) video.muted = this.muted()
  }

  handleVolumeInput(event: Event): void {
    this.volume.set(Number((event.target as HTMLInputElement).value))
  }

  handleFullscreen(): void {
    const wrapper = this.videoEl()?.nativeElement?.parentElement
    if (!wrapper) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      wrapper.requestFullscreen?.()
    }
  }
}
