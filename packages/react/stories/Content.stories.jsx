import React from 'react'
import Avatar from '@/components/Avatar/Avatar.jsx'
import Blockquote from '@/components/Blockquote/Blockquote.jsx'
import Feature from '@/components/Feature/Feature.jsx'
import Feed from '@/components/Feed/Feed.jsx'
import ImageGallery from '@/components/ImageGallery/ImageGallery.jsx'
import List from '@/components/List/List.jsx'
import ListItem from '@/components/List/ListItem.jsx'
import ListItemText from '@/components/List/ListItemText.jsx'
import NumberAnimation from '@/components/NumberAnimation/NumberAnimation.jsx'
import PricingTable from '@/components/PricingTable/PricingTable.jsx'
import Table, { TableBody, TableCell, TableHead, TableRow } from '@/components/Table/Table.jsx'
import './Content.css'

export default { title: 'Foundations/Content', parameters: { layout: 'fullscreen' } }

const feed = [
  { id: 1, author: 'Mina', time: '2 min', text: 'Updated the review notes.' },
  { id: 2, author: 'Noah', time: '18 min', text: 'Moved the launch checklist forward.' },
  { id: 3, author: 'Ari', time: '1 hr', text: 'Shared a new content draft.' }
]
const plans = [
  { name: 'Starter', price: '$0', features: ['One workspace', 'Community support'] },
  { name: 'Pro', price: '$18', features: ['Unlimited projects', 'Priority review'], popular: true },
  { name: 'Studio', price: '$42', features: ['Shared library', 'Team controls'] }
]
const images = [
  { id: 1, src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 520'%3E%3Crect width='800' height='520' fill='%23dbeafe'/%3E%3Ccircle cx='620' cy='120' r='170' fill='%2393c5fd'/%3E%3Cpath d='M0 390L220 210l170 140 130-95 280 265H0z' fill='%233b82f6' opacity='.62'/%3E%3C/svg%3E", title: 'Field notes', description: 'Research references and visual direction.' },
  { id: 2, src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 520'%3E%3Crect width='800' height='520' fill='%23dcfce7'/%3E%3Cpath d='M110 70h580v380H110z' fill='%2386efac'/%3E%3Cpath d='M190 150h420v46H190zm0 92h260v34H190zm0 70h340v34H190z' fill='%2316a34a' opacity='.55'/%3E%3C/svg%3E", title: 'Prototype', description: 'The latest interaction study.' },
  { id: 3, src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 520'%3E%3Crect width='800' height='520' fill='%23fef3c7'/%3E%3Ccircle cx='240' cy='245' r='130' fill='%23fbbf24'/%3E%3Ccircle cx='520' cy='245' r='130' fill='%23f59e0b' opacity='.65'/%3E%3C/svg%3E", title: 'Workshop', description: 'Decisions from the team session.' }
]

export const QuietContent = { render: () => (
  <main className="wc-content-page"><div className="wc-content-shell">
    <header className="wc-content-intro"><p className="wc-content-eyebrow">Watercolor content</p><h1 className="wc-content-title">Structure, without boxes.</h1><p className="wc-content-description">Typography and spacing carry the hierarchy. Backgrounds appear only for hover, selection, or a true overlay.</p></header>
    <section className="wc-content-section"><h2 className="wc-content-section-title">CONTENT & ACTIVITY</h2><div className="wc-content-grid">
      <div className="wc-content-stack"><Feature title="Shared review" description="Keep feedback and decisions in one calm workspace." icon="✦" ctaLabel="Open review" /><Feature title="Version history" description="Return to any previous decision without visual clutter." icon="↺" /></div>
      <Feed items={feed} variant="list" showAvatar={false} />
      <Blockquote cite="Design principle">Use a surface only when it explains interaction or elevation.</Blockquote>
      <List subheader="Recent documents"><ListItem button selected><ListItemText primary="Launch brief" secondary="Edited two minutes ago" /></ListItem><ListItem button><ListItemText primary="Research summary" secondary="Shared with the team" /></ListItem><ListItem button><ListItemText primary="Visual language" secondary="Draft" /></ListItem></List>
    </div></section>
    <section className="wc-content-section"><h2 className="wc-content-section-title">DATA</h2><div className="wc-content-metric"><Avatar color="primary">Q3</Avatar><NumberAnimation className="wc-content-metric-value" from={1270} to={1284} duration={600} active /><span className="wc-content-metric-copy">active collaborators<br />across 36 workspaces</span></div><div className="wc-content-table"><Table hover><TableHead><TableRow><TableCell component="th">Workspace</TableCell><TableCell component="th">Owner</TableCell><TableCell component="th" align="right">Activity</TableCell></TableRow></TableHead><TableBody><TableRow><TableCell>Product systems</TableCell><TableCell>Mina Chen</TableCell><TableCell align="right">Today</TableCell></TableRow><TableRow><TableCell>Research archive</TableCell><TableCell>Noah Lee</TableCell><TableCell align="right">Yesterday</TableCell></TableRow><TableRow><TableCell>Launch planning</TableCell><TableCell>Ari Patel</TableCell><TableCell align="right">Jul 12</TableCell></TableRow></TableBody></Table></div></section>
    <section className="wc-content-section"><h2 className="wc-content-section-title">PLANS & MEDIA</h2><div className="wc-content-stack"><PricingTable plans={plans} columns={3} /><ImageGallery images={images} columns={3} showCount={false} showDownload={false} /></div></section>
  </div></main>
) }
