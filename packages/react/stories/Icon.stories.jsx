import React from 'react'
import Icon from '../src/components/Icon/Icon.jsx'
import Heart from '@zeturn/watercolor-icons-lucide-react/Heart'
import Star from '@zeturn/watercolor-icons-lucide-react/Star'
import Database from '@zeturn/watercolor-icons-lucide-react/Database'
import Loader from '@zeturn/watercolor-icons-lucide-react/Loader'
import TablerDatabase from '@zeturn/watercolor-icons-tabler-react/IconDatabase'
import PhosphorDatabase from '@zeturn/watercolor-icons-phosphor-react/Database'
import HeroHeart from '@zeturn/watercolor-icons-heroicons-react/24/outline/HeartIcon'
import featherDatabase from '@zeturn/watercolor-icons-feather/Database'

export default {
  title: 'Components/Icon (React)',
  component: Icon,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Import only the icons you use and pass component={YourIcon}. The Icon component loads no icon packages.' } } },
  argTypes: { component: { control: false }, size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] }, color: { control: 'color' } },
}

export const Default = { args: { component: Heart, size: 'md', label: 'Heart' } }
export const Sizes = () => <div className="size-showcase">{['xs', 'sm', 'md', 'lg', 'xl'].map(size => <Icon key={size} component={Heart} size={size} label={size} />)}</div>
export const Colors = () => <div className="color-showcase">{['#3b82f6', '#10b981', '#ef4444'].map(color => <Icon key={color} component={Heart} size="lg" color={color} label="Heart" />)}</div>
export const LucideIcons = () => <div className="icon-showcase">{[Heart, Star, Database].map((component, i) => <Icon key={i} component={component} size="lg" />)}</div>
export const TablerIcons = () => <Icon component={TablerDatabase} size="lg" label="Tabler database" />
export const PhosphorIcons = () => <Icon component={PhosphorDatabase} size="lg" weight="duotone" label="Phosphor database" />
export const Heroicons = () => <Icon component={HeroHeart} size="lg" label="Heroicons heart" />
export const FeatherIcons = () => <Icon html={featherDatabase} size="lg" label="Feather database" />
export const CustomHTML = () => <Icon label="Custom"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="currentColor" /></svg></Icon>
export const WithAnimations = () => <Icon component={Loader} size="xl" className="wc-icon--spinning" label="Loading" />
export const InButtons = () => <button type="button"><Icon component={Database} size="sm" /> Open database</button>
