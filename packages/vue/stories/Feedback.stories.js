import Alert from '../src/components/Alert/Alert.vue'
import Badge from '../src/components/Badge/Badge.vue'
import Banner from '../src/components/Banner/Banner.vue'
import Chip from '../src/components/Chip/Chip.vue'
import CircularProgress from '../src/components/CircularProgress/CircularProgress.vue'
import Copy from '../src/components/Copy/Copy.vue'
import Progress from '../src/components/Progress/Progress.vue'
import Skeleton from '../src/components/Skeleton/Skeleton.vue'
import Snackbar from '../src/components/Snackbar/Snackbar.vue'
import Status from '../src/components/Status/Status.vue'
import './Feedback.css'

export default {
  title: 'Foundations/Feedback',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Quiet, semantic feedback that preserves the hierarchy of the surrounding page.' } }
  }
}

export const QuietFeedback = {
  render: () => ({
    components: { Alert, Badge, Banner, Chip, CircularProgress, Copy, Progress, Skeleton, Snackbar, Status },
    data: () => ({ snackbarOpen: false }),
    template: `
      <main class="wc-feedback-page">
        <div class="wc-feedback-shell">
          <header class="wc-feedback-intro">
            <p class="wc-feedback-eyebrow">Watercolor feedback</p>
            <h1 class="wc-feedback-title">Signal without noise.</h1>
            <p class="wc-feedback-description">Status is carried by a small icon, concise language, and semantic tone. Surfaces appear only when feedback needs its own temporary layer.</p>
          </header>

          <section class="wc-feedback-section" aria-labelledby="feedback-status">
            <h2 id="feedback-status" class="wc-feedback-section-title">STATUS & LABELS</h2>
            <div class="wc-feedback-status-row">
              <Status status="success" show-text />
              <Status status="processing" show-text animated />
              <Status status="warning" show-text />
              <Status status="error" show-text />
            </div>
            <div class="wc-feedback-actions">
              <Badge variant="primary">New</Badge>
              <Badge variant="success">Synced</Badge>
              <Badge variant="warning">Review</Badge>
              <Chip label="Design" clickable variant="text" />
              <Chip label="Active filter" clickable deletable color="primary" />
              <Chip label="Unavailable" disabled />
            </div>
          </section>

          <section class="wc-feedback-section" aria-labelledby="feedback-messages">
            <h2 id="feedback-messages" class="wc-feedback-section-title">MESSAGES</h2>
            <div class="wc-feedback-alert-grid">
              <Alert type="info" title="A calm update">Your workspace settings were refreshed.</Alert>
              <Alert type="success" title="Changes saved">Everything is ready for the next step.</Alert>
              <Alert type="warning" title="Review suggested">Two fields may need your attention.</Alert>
              <Alert type="error" title="Could not sync" closable>Try again when the connection returns.</Alert>
            </div>
            <div class="wc-feedback-banner">
              <Banner :sticky="false" type="info" title="Workspace update" message="A new review flow is available for this project." show-default-action action-text="View changes" />
            </div>
          </section>

          <section class="wc-feedback-section" aria-labelledby="feedback-progress">
            <h2 id="feedback-progress" class="wc-feedback-section-title">PROGRESS & WAITING</h2>
            <div class="wc-feedback-signal-grid">
              <div class="wc-feedback-progress-stack">
                <Progress label="Uploading assets" :value="68" show-percent />
                <Progress label="Quality review" :value="42" color="success" size="sm" />
                <div>
                  <p class="wc-feedback-label">Indeterminate and determinate</p>
                  <div class="wc-feedback-loader-row">
                    <CircularProgress :size="28" />
                    <CircularProgress variant="determinate" :value="72" :size="48" :thickness="4" show-value />
                  </div>
                </div>
              </div>
              <div>
                <p class="wc-feedback-label">Loading placeholder</p>
                <div class="wc-feedback-skeleton-card">
                  <Skeleton variant="circular" :width="44" :height="44" animation="wave" />
                  <div class="wc-feedback-skeleton-copy">
                    <Skeleton width="62%" :height="12" animation="wave" />
                    <Skeleton width="92%" :height="10" animation="wave" />
                    <Skeleton width="74%" :height="10" animation="wave" />
                  </div>
                </div>
              </div>
            </div>
            <div class="wc-feedback-actions">
              <Copy text="npm install @zeturn/watercolor-vue" variant="minimal" />
              <button class="wc-feedback-action" @click="snackbarOpen = true">Show snackbar</button>
            </div>
          </section>
        </div>
        <Snackbar v-model="snackbarOpen" title="Ready to continue" message="The latest changes are now available." severity="success" action="View" :auto-hide-duration="0" />
      </main>
    `
  })
}
