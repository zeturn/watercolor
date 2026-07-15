import React, { useState } from 'react'
import Alert from '@/components/Alert/Alert.jsx'
import Badge from '@/components/Badge/Badge.jsx'
import Banner from '@/components/Banner/Banner.jsx'
import Chip from '@/components/Chip/Chip.jsx'
import CircularProgress from '@/components/CircularProgress/CircularProgress.jsx'
import Copy from '@/components/Copy/Copy.jsx'
import Progress from '@/components/Progress/Progress.jsx'
import Skeleton from '@/components/Skeleton/Skeleton.jsx'
import Snackbar from '@/components/Snackbar/Snackbar.jsx'
import Status from '@/components/Status/Status.jsx'
import './Feedback.css'

export default {
  title: 'Foundations/Feedback',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Quiet, semantic feedback that preserves the hierarchy of the surrounding page.' } }
  }
}

export const QuietFeedback = {
  render: () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    return (
      <main className="wc-feedback-page">
        <div className="wc-feedback-shell">
          <header className="wc-feedback-intro">
            <p className="wc-feedback-eyebrow">Watercolor feedback</p>
            <h1 className="wc-feedback-title">Signal without noise.</h1>
            <p className="wc-feedback-description">Status is carried by a small icon, concise language, and semantic tone. Surfaces appear only when feedback needs its own temporary layer.</p>
          </header>

          <section className="wc-feedback-section" aria-labelledby="feedback-status">
            <h2 id="feedback-status" className="wc-feedback-section-title">STATUS & LABELS</h2>
            <div className="wc-feedback-status-row">
              <Status status="success" showText />
              <Status status="processing" showText animated />
              <Status status="warning" showText />
              <Status status="error" showText />
            </div>
            <div className="wc-feedback-actions">
              <Badge variant="primary">New</Badge>
              <Badge variant="success">Synced</Badge>
              <Badge variant="warning">Review</Badge>
              <Chip label="Design" clickable variant="text" />
              <Chip label="Active filter" clickable deletable color="primary" />
              <Chip label="Unavailable" disabled />
            </div>
          </section>

          <section className="wc-feedback-section" aria-labelledby="feedback-messages">
            <h2 id="feedback-messages" className="wc-feedback-section-title">MESSAGES</h2>
            <div className="wc-feedback-alert-grid">
              <Alert type="info" title="A calm update">Your workspace settings were refreshed.</Alert>
              <Alert type="success" title="Changes saved">Everything is ready for the next step.</Alert>
              <Alert type="warning" title="Review suggested">Two fields may need your attention.</Alert>
              <Alert type="error" title="Could not sync" closable>Try again when the connection returns.</Alert>
            </div>
            <div className="wc-feedback-banner">
              <Banner sticky={false} type="info" title="Workspace update" message="A new review flow is available for this project." showDefaultAction actionText="View changes" />
            </div>
          </section>

          <section className="wc-feedback-section" aria-labelledby="feedback-progress">
            <h2 id="feedback-progress" className="wc-feedback-section-title">PROGRESS & WAITING</h2>
            <div className="wc-feedback-signal-grid">
              <div className="wc-feedback-progress-stack">
                <Progress label="Uploading assets" value={68} showPercent />
                <Progress label="Quality review" value={42} color="success" size="sm" />
                <div>
                  <p className="wc-feedback-label">Indeterminate and determinate</p>
                  <div className="wc-feedback-loader-row">
                    <CircularProgress size={28} />
                    <CircularProgress variant="determinate" value={72} size={48} thickness={4} showValue />
                  </div>
                </div>
              </div>
              <div>
                <p className="wc-feedback-label">Loading placeholder</p>
                <div className="wc-feedback-skeleton-card">
                  <Skeleton variant="circular" width={44} height={44} animation="wave" />
                  <div className="wc-feedback-skeleton-copy">
                    <Skeleton width="62%" height={12} animation="wave" />
                    <Skeleton width="92%" height={10} animation="wave" />
                    <Skeleton width="74%" height={10} animation="wave" />
                  </div>
                </div>
              </div>
            </div>
            <div className="wc-feedback-actions">
              <Copy text="npm install @zeturn/watercolor-react" variant="minimal" />
              <button className="wc-feedback-action" onClick={() => setSnackbarOpen(true)}>Show snackbar</button>
            </div>
          </section>
        </div>
        <Snackbar modelValue={snackbarOpen} onUpdateModelValue={setSnackbarOpen} title="Ready to continue" message="The latest changes are now available." severity="success" action="View" autoHideDuration={0} />
      </main>
    )
  }
}
