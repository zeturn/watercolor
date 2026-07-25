import { useState, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { Button, Badge, Input, Card } from '@zeturn/watercolor-react'
import { componentCategories, allComponents } from '../data/components'
import { useI18n } from '../i18n'

/* ── 组件线框预览图标（灰色扁平轮廓，无阴影）── */
const S = '#e5e7eb' // stroke color
const SW = 1.5 // stroke width
const F = '#f9fafb' // light fill

function ComponentPreviewIcon({ id }) {
  const svgProps = { viewBox: '0 0 120 80', fill: 'none', className: 'w-full h-full' }
  const icons = {
    button: () => <svg {...svgProps}><rect x="30" y="28" width="60" height="24" rx="6" stroke={S} strokeWidth={SW}/></svg>,
    fab: () => <svg {...svgProps}><circle cx="60" cy="40" r="18" stroke={S} strokeWidth={SW}/><path d="M60 32v16M52 40h16" stroke={S} strokeWidth={SW} strokeLinecap="round"/></svg>,
    iconbutton: () => <svg {...svgProps}><rect x="42" y="22" width="36" height="36" rx="8" stroke={S} strokeWidth={SW}/><circle cx="60" cy="40" r="6" stroke={S} strokeWidth={SW}/></svg>,
    textfield: () => <svg {...svgProps}><text x="20" y="24" fontSize="7" fill={S}>Label</text><rect x="20" y="32" width="80" height="28" rx="4" stroke={S} strokeWidth={SW}/><line x1="30" y1="46" x2="70" y2="46" stroke={S} strokeWidth={SW} opacity=".5"/></svg>,
    select: () => <svg {...svgProps}><text x="20" y="24" fontSize="7" fill={S}>Select</text><rect x="20" y="32" width="80" height="28" rx="4" stroke={S} strokeWidth={SW}/><path d="M76 43l5 4 5-4" stroke={S} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/></svg>,
    checkbox: () => <svg {...svgProps}><rect x="50" y="30" width="20" height="20" rx="3" stroke={S} strokeWidth={SW}/><path d="M54 40l4 4 8-8" stroke={S} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/></svg>,
    radio: () => <svg {...svgProps}><circle cx="60" cy="40" r="10" stroke={S} strokeWidth={SW}/><circle cx="60" cy="40" r="4" fill={S}/></svg>,
    switch: () => <svg {...svgProps}><rect x="45" y="34" width="30" height="14" rx="7" stroke={S} strokeWidth={SW}/><circle cx="67" cy="41" r="5" fill={S}/></svg>,
    slider: () => <svg {...svgProps}><line x1="25" y1="40" x2="95" y2="40" stroke={S} strokeWidth={SW} strokeLinecap="round"/><line x1="25" y1="40" x2="65" y2="40" stroke={S} strokeWidth={SW*2} strokeLinecap="round"/><circle cx="65" cy="40" r="6" fill={F} stroke={S} strokeWidth={SW}/></svg>,
    datepicker: () => <svg {...svgProps}><rect x="28" y="18" width="64" height="48" rx="6" stroke={S} strokeWidth={SW}/><line x1="28" y1="32" x2="92" y2="32" stroke={S} strokeWidth={SW}/><text x="60" y="56" fontSize="12" fill={S} textAnchor="middle">2024</text><rect x="38" y="22" width="8" height="6" rx="1" fill={S}/><rect x="74" y="22" width="8" height="6" rx="1" fill={S}/></svg>,
    colorpicker: () => <svg {...svgProps}><rect x="30" y="24" width="60" height="32" rx="6" stroke={S} strokeWidth={SW}/><circle cx="50" cy="40" r="8" fill={S} opacity=".4"/><circle cx="70" cy="40" r="8" stroke={S} strokeWidth={SW}/></svg>,
    fileinput: () => <svg {...svgProps}><rect x="25" y="18" width="70" height="46" rx="6" stroke={S} strokeWidth={SW} strokeDasharray="4 3"/><path d="M52 30l8 8-8 8" stroke={S} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/><line x1="48" y1="38" x2="68" y2="38" stroke={S} strokeWidth={SW} strokeLinecap="round"/><text x="60" y="54" fontSize="6" fill={S} textAnchor="middle">Upload</text></svg>,
    autocomplete: () => <svg {...svgProps}><rect x="20" y="22" width="80" height="22" rx="4" stroke={S} strokeWidth={SW}/><line x1="30" y1="33" x2="55" y2="33" stroke={S} strokeWidth={SW} opacity=".5"/><rect x="20" y="48" width="80" height="18" rx="4" fill={F} stroke={S} strokeWidth={SW}/><line x1="30" y1="57" x2="65" y2="57" stroke={S} strokeWidth={SW} opacity=".4"/></svg>,
    rating: () => <svg {...svgProps}><polygon points="35,44 37,50 44,50 39,54 41,61 35,57 29,61 31,54 26,50 33,50" stroke={S} strokeWidth={SW}/><polygon points="53,44 55,50 62,50 57,54 59,61 53,57 47,61 49,54 44,50 51,50" stroke={S} strokeWidth={SW}/><polygon points="71,44 73,50 80,50 75,54 77,61 71,57 65,61 67,54 62,50 69,50" stroke={S} strokeWidth={SW}/><polygon points="89,44 91,50 98,50 93,54 95,61 89,57 83,61 85,54 80,50 87,50" stroke={S} strokeWidth={SW}/><polygon points="107,44 109,50 116,50 111,54 113,61 107,57 101,61 103,54 98,50 105,50" stroke={S} strokeWidth={SW} opacity=".3"/></svg>,
    formcontrol: () => <svg {...svgProps}><text x="20" y="24" fontSize="7" fill={S}>Form Field</text><rect x="20" y="32" width="80" height="28" rx="4" stroke={S} strokeWidth={SW}/><text x="28" y="58" fontSize="5" fill={S} opacity=".5">Helper text</text></svg>,
    formgroup: () => <svg {...svgProps}><rect x="20" y="20" width="80" height="42" rx="4" stroke={S} strokeWidth={SW}/><rect x="28" y="28" width="30" height="10" rx="2" stroke={S} strokeWidth={SW} opacity=".6"/><rect x="28" y="44" width="40" height="10" rx="2" stroke={S} strokeWidth={SW} opacity=".6"/></svg>,
    formhelpertext: () => <svg {...svgProps}><line x1="25" y1="42" x2="95" y2="42" stroke={S} strokeWidth={SW}/><text x="60" y="56" fontSize="6" fill={S} textAnchor="middle" opacity=".5">Helper message here</text></svg>,
    container: () => <svg {...svgProps}><rect x="15" y="14" width="90" height="54" rx="4" stroke={S} strokeWidth={SW} strokeDasharray="4 3"/><line x1="35" y1="14" x2="35" y2="68" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="85" y1="14" x2="85" y2="68" stroke={S} strokeWidth={SW} opacity=".3"/></svg>,
    box: () => <svg {...svgProps}><rect x="20" y="18" width="80" height="46" rx="4" stroke={S} strokeWidth={SW}/></svg>,
    grid: () => <svg {...svgProps}><rect x="18" y="18" width="38" height="26" rx="3" stroke={S} strokeWidth={SW}/><rect x="64" y="18" width="38" height="26" rx="3" stroke={S} strokeWidth={SW}/><rect x="18" y="50" width="38" height="16" rx="3" stroke={S} strokeWidth={SW}/><rect x="64" y="50" width="38" height="16" rx="3" stroke={S} strokeWidth={SW}/></svg>,
    paper: () => <svg {...svgProps}><rect x="22" y="16" width="76" height="50" rx="4" fill={F} stroke={S} strokeWidth={SW}/><line x1="32" y1="28" x2="88" y2="28" stroke={S} strokeWidth={SW} opacity=".4"/><line x1="32" y1="38" x2="78" y2="38" stroke={S} strokeWidth={SW} opacity=".4"/><line x1="32" y1="48" x2="68" y2="48" stroke={S} strokeWidth={SW} opacity=".4"/></svg>,
    appbar: () => <svg {...svgProps}><rect x="0" y="0" width="120" height="20" fill={F} stroke={S} strokeWidth={SW}/><text x="12" y="14" fontSize="7" fill={S} fontWeight="500">App Title</text><circle cx="104" cy="10" r="3" stroke={S} strokeWidth={SW}/><circle cx="112" cy="10" r="3" stroke={S} strokeWidth={SW}/></svg>,
    toolbar: () => <svg {...svgProps}><rect x="10" y="30" width="100" height="22" rx="4" stroke={S} strokeWidth={SW}/><circle cx="30" cy="41" r="4" stroke={S} strokeWidth={SW}/><rect x="44" y="37" width="24" height="8" rx="2" stroke={S} strokeWidth={SW}/><circle cx="82" cy="41" r="4" stroke={S} strokeWidth={SW}/><circle cx="96" cy="41" r="4" stroke={S} strokeWidth={SW}/></svg>,
    menu: () => <svg {...svgProps}><rect x="35" y="14" width="50" height="54" rx="6" fill="#fff" stroke={S} strokeWidth={SW}/><line x1="47" y1="30" x2="73" y2="30" stroke={S} strokeWidth={SW} opacity=".5"/><line x1="47" y1="42" x2="73" y2="42" stroke={S} strokeWidth={SW} opacity=".5"/><line x1="47" y1="54" x2="65" y2="54" stroke={S} strokeWidth={SW} opacity=".5"/></svg>,
    tabs: () => <svg {...svgProps}><line x1="10" y1="28" x2="110" y2="28" stroke={S} strokeWidth={SW}/><text x="28" y="22" fontSize="7" fill={S}>Tab A</text><text x="54" y="22" fontSize="7" fill={S} opacity=".5">Tab B</text><text x="82" y="22" fontSize="7" fill={S} opacity=".5">Tab C</text><line x1="22" y1="24" x2="38" y2="24" stroke={S} strokeWidth={SW}/></svg>,
    breadcrumb: () => <svg {...svgProps}><text x="14" y="42" fontSize="7" fill={S}>Home</text><text x="44" y="42" fontSize="7" fill={S} opacity=".5">›</text><text x="54" y="42" fontSize="7" fill={S}>Page</text><text x="84" y="42" fontSize="7" fill={S} opacity=".5">›</text><text x="94" y="42" fontSize="7" fill={S}>Detail</text></svg>,
    pagination: () => <svg {...svgProps}><rect x="30" y="34" width="12" height="12" rx="2" stroke={S} strokeWidth={SW}/><rect x="48" y="34" width="12" height="12" rx="2" fill={S}/><rect x="66" y="34" width="12" height="12" rx="2" stroke={S} strokeWidth={SW}/><rect x="84" y="34" width="12" height="12" rx="2" stroke={S} strokeWidth={SW}/><path d="M102 40h6M105 37l3 3-3 3" stroke={S} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/></svg>,
    alert: () => <svg {...svgProps}><rect x="18" y="26" width="84" height="30" rx="6" fill={F} stroke={S} strokeWidth={SW}/><circle cx="34" cy="41" r="5" stroke={S} strokeWidth={SW}/><line x1="46" y1="37" x2="86" y2="37" stroke={S} strokeWidth={SW} opacity=".4"/><line x1="46" y1="45" x2="78" y2="45" stroke={S} strokeWidth={SW} opacity=".4"/></svg>,
    snackbar: () => <svg {...svgProps}><rect x="14" y="34" width="92" height="16" rx="4" fill={F} stroke={S} strokeWidth={SW}/><text x="26" y="46" fontSize="6" fill={S}>Message here</text><path d="M92 40l4 4-4 4" stroke={S} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" transform="translate(0,-4)"/></svg>,
    modal: () => <svg {...svgProps}><rect x="22" y="14" width="76" height="54" rx="8" fill="#fff" stroke={S} strokeWidth={SW}/><line x1="88" y1="20" x2="96" y2="12" stroke={S} strokeWidth={SW} strokeLinecap="round"/><rect x="32" y="28" width="56" height="8" rx="2" stroke={S} strokeWidth={SW} opacity=".5"/><rect x="32" y="42" width="56" height="8" rx="2" stroke={S} strokeWidth={SW} opacity=".5"/><rect x="42" y="56" width="36" height="6" rx="3" stroke={S} strokeWidth={SW}/></svg>,
    tooltip: () => <svg {...svgProps}><rect x="34" y="20" width="52" height="24" rx="4" fill="#fff" stroke={S} strokeWidth={SW}/><line x1="44" y1="30" x2="76" y2="30" stroke={S} strokeWidth={SW} opacity=".4"/><line x1="44" y1="38" x2="68" y2="38" stroke={S} strokeWidth={SW} opacity=".4"/><path d="M52 44l6 8 6-8" stroke={S} strokeWidth={SW}/></svg>,
    spinner: () => <svg {...svgProps}><circle cx="60" cy="40" r="14" stroke={S} strokeWidth={SW} strokeDasharray="50 38" opacity=".4"/><circle cx="60" cy="40" r="14" stroke={S} strokeWidth={SW} strokeDasharray="22 66"/></svg>,
    circularprogress: () => <svg {...svgProps}><circle cx="60" cy="40" r="16" stroke={S} strokeWidth={SW} opacity=".2"/><circle cx="60" cy="40" r="16" stroke={S} strokeWidth={SW} strokeDasharray="60 40" strokeLinecap="round"/></svg>,
    progress: () => <svg {...svgProps}><rect x="20" y="38" width="80" height="6" rx="3" stroke={S} strokeWidth={SW} opacity=".2"/><rect x="20" y="38" width="52" height="6" rx="3" fill={S} opacity=".5"/></svg>,
    skeleton: () => <svg {...svgProps}><rect x="22" y="22" width="40" height="8" rx="3" fill={S} opacity=".15"/><rect x="22" y="36" width="76" height="6" rx="2" fill={S} opacity=".1"/><rect x="22" y="48" width="68" height="6" rx="2" fill={S} opacity=".1"/><rect x="22" y="60" width="50" height="6" rx="2" fill={S} opacity=".1"/></svg>,
    banner: () => <svg {...svgProps}><rect x="8" y="32" width="104" height="18" rx="3" fill={F} stroke={S} strokeWidth={SW}/><circle cx="24" cy="41" r="4" stroke={S} strokeWidth={SW}/><text x="36" y="44" fontSize="6" fill={S}>Banner message text</text></svg>,
    typography: () => <svg {...svgProps}><rect x="22" y="20" width="56" height="10" rx="2" fill={S} opacity=".2"/><rect x="22" y="36" width="76" height="6" rx="2" fill={S} opacity=".08"/><rect x="22" y="48" width="72" height="6" rx="2" fill={S} opacity=".08"/><rect x="22" y="60" width="60" height="6" rx="2" fill={S} opacity=".08"/></svg>,
    list: () => <svg {...svgProps}><rect x="20" y="16" width="80" height="50" rx="4" stroke={S} strokeWidth={SW}/><circle cx="34" cy="30" r="4" stroke={S} strokeWidth={SW} opacity=".5"/><line x1="46" y1="28" x2="84" y2="28" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="46" y1="33" x2="72" y2="33" stroke={S} strokeWidth={SW} opacity=".2"/><circle cx="34" cy="44" r="4" stroke={S} strokeWidth={SW} opacity=".5"/><line x1="46" y1="42" x2="84" y2="42" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="46" y1="47" x2="72" y2="47" stroke={S} strokeWidth={SW} opacity=".2"/><circle cx="34" cy="58" r="4" stroke={S} strokeWidth={SW} opacity=".5"/><line x1="46" y1="56" x2="84" y2="56" stroke={S} strokeWidth={SW} opacity=".3"/></svg>,
    listitem: () => <svg {...svgProps}><rect x="14" y="26" width="92" height="28" rx="4" stroke={S} strokeWidth={SW}/><circle cx="30" cy="40" r="5" stroke={S} strokeWidth={SW} opacity=".4"/><line x1="42" y1="36" x2="88" y2="36" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="42" y1="44" x2="76" y2="44" stroke={S} strokeWidth={SW} opacity=".2"/></svg>,
    listitemtext: () => <svg {...svgProps}><rect x="18" y="24" width="84" height="32" rx="4" stroke={S} strokeWidth={SW} opacity=".5"/><rect x="28" y="32" width="50" height="6" rx="2" fill={S} opacity=".2"/><rect x="28" y="44" width="64" height="5" rx="1.5" fill={S} opacity=".08"/></svg>,
    listitemicon: () => <svg {...svgProps}><rect x="30" y="28" width="24" height="24" rx="4" stroke={S} strokeWidth={SW} opacity=".4"/></svg>,
    table: () => <svg {...svgProps}><rect x="16" y="16" width="88" height="50" rx="4" stroke={S} strokeWidth={SW}/><line x1="16" y1="32" x2="104" y2="32" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="16" y1="48" x2="104" y2="48" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="48" y1="16" x2="48" y2="66" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="76" y1="16" x2="76" y2="66" stroke={S} strokeWidth={SW} opacity=".3"/></svg>,
    avatar: () => <svg {...svgProps}><circle cx="60" cy="36" r="16" stroke={S} strokeWidth={SW}/><path d="M42 60c0-10 8-16 18-16s18 6 18 16" stroke={S} strokeWidth={SW}/></svg>,
    chip: () => <svg {...svgProps}><rect x="34" y="34" width="52" height="14" rx="7" stroke={S} strokeWidth={SW}/><text x="60" y="44" fontSize="6" fill={S} textAnchor="middle">Chip</text></svg>,
    card: () => <svg {...svgProps}><rect x="18" y="14" width="84" height="54" rx="6" fill={F} stroke={S} strokeWidth={SW}/><rect x="28" y="24" width="40" height="6" rx="2" fill={S} opacity=".15"/><line x1="28" y1="38" x2="92" y2="38" stroke={S} strokeWidth={SW} opacity=".2"/><line x1="28" y1="48" x2="84" y2="48" stroke={S} strokeWidth={SW} opacity=".15"/><line x1="28" y1="58" x2="72" y2="58" stroke={S} strokeWidth={SW} opacity=".15"/></svg>,
    badge: () => <svg {...svgProps}><circle cx="60" cy="40" r="14" stroke={S} strokeWidth={SW}/><text x="60" y="44" fontSize="11" fill={S} textAnchor="middle" fontWeight="600">3</text></svg>,
    accordion: () => <svg {...svgProps}><rect x="20" y="14" width="80" height="54" rx="4" stroke={S} strokeWidth={SW}/><rect x="28" y="20" width="64" height="14" rx="2" fill={F} stroke={S} strokeWidth={SW}/><path d="M84 24l3 3-3 3" stroke={S} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/><line x1="28" y1="42" x2="92" y2="42" stroke={S} strokeWidth={SW} opacity=".2"/><line x1="28" y1="50" x2="92" y2="50" stroke={S} strokeWidth={SW} opacity=".2"/><line x1="28" y1="58" x2="92" y2="58" stroke={S} strokeWidth={SW} opacity=".2"/></svg>,
    divider: () => <svg {...svgProps}><line x1="14" y1="40" x2="106" y2="40" stroke={S} strokeWidth={SW}/><rect x="50" y="34" width="20" height="12" rx="2" fill="#fff" stroke={S} strokeWidth={SW} opacity=".5"/><text x="60" y="42" fontSize="5" fill={S} textAnchor="middle">or</text></svg>,
    blockquote: () => <svg {...svgProps}><rect x="20" y="20" width="80" height="42" rx="4" fill={F} stroke={S} strokeWidth={SW}/><rect x="24" y="22" width="3" height="38" rx="1.5" fill={S} opacity=".3"/><text x="36" y="36" fontSize="6" fill={S} opacity=".5">Quoted text</text><text x="36" y="48" fontSize="6" fill={S} opacity=".3">content goes here...</text></svg>,
    copy: () => <svg {...svgProps}><rect x="34" y="24" width="44" height="36" rx="4" stroke={S} strokeWidth={SW}/><rect x="44" y="32" width="24" height="3" rx="1" fill={S} opacity=".2"/><rect x="44" y="39" width="24" height="3" rx="1" fill={S} opacity=".2"/><rect x="44" y="46" width="16" height="3" rx="1" fill={S} opacity=".2"/><path d="M50 54l4 4 8-8" stroke={S} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/></svg>,
    status: () => <svg {...svgProps}><circle cx="60" cy="40" r="8" fill={S} opacity=".15"/><circle cx="60" cy="40" r="4" fill="#4ade80"/></svg>,
    pricingtable: () => <svg {...svgProps}><rect x="12" y="16" width="30" height="50" rx="4" stroke={S} strokeWidth={SW} opacity=".5"/><rect x="46" y="12" width="30" height="58" rx="4" stroke={S} strokeWidth={SW}/><rect x="80" y="16" width="30" height="50" rx="4" stroke={S} strokeWidth={SW} opacity=".5"/><text x="27" y="32" fontSize="5" fill={S} textAnchor="middle">$</text><text x="61" y="28" fontSize="6" fill={S} textAnchor="middle">$$</text><text x="95" y="32" fontSize="5" fill={S} textAnchor="middle">$$$</text><line x1="18" y1="42" x2="36" y2="42" stroke={S} strokeWidth={SW} opacity=".2"/><line x1="52" y1="42" x2="70" y2="42" stroke={S} strokeWidth={SW} opacity=".2"/><line x1="86" y1="42" x2="104" y2="42" stroke={S} strokeWidth={SW} opacity=".2"/></svg>,
    popover: () => <svg {...svgProps}><rect x="28" y="16" width="64" height="42" rx="6" fill="#fff" stroke={S} strokeWidth={SW}/><path d="M52 58l8 8 8-8" stroke={S} strokeWidth={SW}/><line x1="40" y1="30" x2="80" y2="30" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="40" y1="40" x2="72" y2="40" stroke={S} strokeWidth={SW} opacity=".3"/></svg>,
    hovercard: () => <svg {...svgProps}><rect x="22" y="18" width="76" height="38" rx="6" fill="#fff" stroke={S} strokeWidth={SW}/><line x1="60" y1="56" x2="60" y2="68" stroke={S} strokeWidth={SW} strokeDasharray="2 2"/><line x1="34" y1="30" x2="86" y2="30" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="34" y1="40" x2="78" y2="40" stroke={S} strokeWidth={SW} opacity=".3"/></svg>,
    slideover: () => <svg {...svgProps}><rect x="14" y="10" width="68" height="62" rx="6" fill="#fff" stroke={S} strokeWidth={SW}/><line x1="82" y1="10" x2="82" y2="72" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="26" y1="26" x2="70" y2="26" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="26" y1="38" x2="62" y2="38" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="26" y1="50" x2="66" y2="50" stroke={S} strokeWidth={SW} opacity=".3"/></svg>,
    imagegallery: () => <svg {...svgProps}><rect x="18" y="18" width="36" height="26" rx="3" stroke={S} strokeWidth={SW}/><rect x="60" y="18" width="36" height="26" rx="3" stroke={S} strokeWidth={SW}/><rect x="18" y="50" width="36" height="16" rx="3" stroke={S} strokeWidth={SW}/><rect x="60" y="50" width="36" height="16" rx="3" stroke={S} strokeWidth={SW}/><circle cx="82" cy="28" r="4" fill={S} opacity=".2"/></svg>,
    videoplayer: () => <svg {...svgProps}><rect x="14" y="16" width="92" height="50" rx="4" fill={F} stroke={S} strokeWidth={SW}/><polygon points="52,32 52,50 70,41" fill={S} opacity=".4"/><rect x1="22" y1="54" width="76" height="4" rx="1" fill={S} opacity=".15"/><rect x="22" y1="54" width="30" height="4" rx="1" fill={S} opacity=".4"/></svg>,
    watermark: () => <svg {...svgProps}><rect x="18" y="14" width="84" height="54" rx="4" stroke={S} strokeWidth={SW}/><text x="60" y="48" fontSize="14" fill={S} opacity=".12" textAnchor="middle" fontWeight="700" transform="rotate(-12 60 46)">WATERMARK</text></svg>,
    numberanimation: () => <svg {...svgProps}><text x="60" y="48" fontSize="22" fill={S} opacity=".3" textAnchor="middle" fontWeight="700" fontFamily="monospace">1,234</text></svg>,
    typingtext: () => <svg {...svgProps}><text x="24" y="44" fontSize="10" fill={S} opacity=".4" fontFamily="monospace">Hello World_</text></svg>,
    feature: () => <svg {...svgProps}><rect x="20" y="20" width="80" height="42" rx="6" fill={F} stroke={S} strokeWidth={SW}/><circle cx="38" cy="41" r="8" stroke={S} strokeWidth={SW} opacity=".4"/><line x1="54" y1="35" x2="88" y2="35" stroke={S} strokeWidth={SW} opacity=".3"/><line x1="54" y1="43" x2="82" y2="43" stroke={S} strokeWidth={SW} opacity=".2"/><line x1="54" y1="51" x2="76" y2="51" stroke={S} strokeWidth={SW} opacity=".15"/></svg>,
    feed: () => <svg {...svgProps}><rect x="18" y="14" width="84" height="18" rx="4" fill={F} stroke={S} strokeWidth={SW}/><circle cx="30" cy="23" r="4" stroke={S} strokeWidth={SW} opacity="4"/><line x1="40" y1="21" x2="88" y2="21" stroke={S} strokeWidth={SW} opacity=".2"/><line x1="40" y1="27" x2="78" y2="27" stroke={S} strokeWidth={SW} opacity=".15"/><rect x="18" y="38" width="84" height="18" rx="4" fill={F} stroke={S} strokeWidth={SW}/><circle cx="30" cy="47" r="4" stroke={S} strokeWidth={SW} opacity=".4"/><line x1="40" y1="45" x2="88" y2="45" stroke={S} strokeWidth={SW} opacity=".2"/><line x1="40" y1="51" x2="72" y2="51" stroke={S} strokeWidth={SW} opacity=".15"/><rect x="18" y="62" width="84" height="18" rx="4" fill={F} stroke={S} strokeWidth={SW}/><circle cx="30" cy="71" r="4" stroke={S} strokeWidth={SW} opacity=".4"/><line x1="40" y1="69" x2="82" y2="69" stroke={S} strokeWidth={SW} opacity=".2"/></svg>,
  }
  return icons[id] ? icons[id]() : (
    <svg {...svgProps}><rect x="25" y="18" width="70" height="46" rx="6" stroke={S} strokeWidth={SW}/><text x="60" y="46" fontSize="8" fill={S} textAnchor="middle" opacity=".3">{id}</text></svg>
  )
}

export default function Components() {
  const { t } = useI18n()
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // grid or list
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  // 从 URL query ?category=Layout 读取选中分类
  const validCategories = new Set(componentCategories.map(c => c.name))
  const urlCategory = searchParams.get('category')
  const selectedCategory = (urlCategory && validCategories.has(urlCategory)) ? urlCategory : 'all'

  // 点击分类 → 更新 URL query
  const selectCategory = (name) => {
    if (name === 'all') {
      searchParams.delete('category')
      setSearchParams(searchParams)
    } else {
      searchParams.set('category', name)
      setSearchParams(searchParams)
    }
  }

  const filteredComponents = useMemo(() => {
    let result = []
    componentCategories.forEach(cat => {
      if (selectedCategory !== 'all' && cat.name !== selectedCategory) return
      cat.components.forEach(comp => {
        if (!searchQuery ||
          (comp.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
          (comp.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
          (comp.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))) {
          result.push({ ...comp, category: cat.name })
        }
      })
    })
    return result
  }, [searchQuery, selectedCategory])

  const totalComponents = allComponents.length

  return (
    <main className="min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {t('comp.titleBefore')} <span className="gradient-text">Watercolor</span> {t('comp.titleAfter')}
            </h1>
            <p className="text-lg text-base-content/60 max-w-2xl mx-auto mb-2">
              {t('comp.subtitle', { count: totalComponents })}
            </p>

            {/* Search bar */}
            <div className="max-w-xl mx-auto mt-6">
              <Input
                fullWidth
                placeholder={t('comp.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                startAdornment={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                }
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Category filter + View toggle */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={selectedCategory === 'all' ? 'primary' : undefined}
                buttonStyle={selectedCategory === 'all' ? 'filled' : 'text'}
                onClick={() => selectCategory('all')}
              >
                {t('comp.all')} ({totalComponents})
              </Button>
              {componentCategories.map((cat) => (
                <Button
                  key={cat.name}
                  size="sm"
                  variant={selectedCategory === cat.name ? 'primary' : undefined}
                  buttonStyle={selectedCategory === cat.name ? 'filled' : 'text'}
                  onClick={() => selectCategory(cat.name)}
                  startIcon={cat.icon}
                  style={{ display: 'inline-flex', alignItems: 'center', flexDirection: 'row' }}
                >
                  {cat.name} ({cat.components.length})
                </Button>
              ))}
            </div>

            <span className="text-sm text-base-content/50 whitespace-nowrap">
              {t('comp.showing', { count: filteredComponents.length })}
              {searchQuery && ` · ${t('comp.searching', { query: searchQuery })}`}
            </span>
            <div className="flex gap-1 ml-auto">
              <Button
                size="sm"
                variant={viewMode === 'grid' ? 'primary' : undefined}
                buttonStyle={viewMode === 'grid' ? 'filled' : 'text'}
                onClick={() => setViewMode('grid')}
                startIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>}
                style={{ display: 'inline-flex', alignItems: 'center', flexDirection: 'row' }}
              />
              <Button
                size="sm"
                variant={viewMode === 'list' ? 'primary' : undefined}
                buttonStyle={viewMode === 'list' ? 'filled' : 'text'}
                onClick={() => setViewMode('list')}
                startIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>}
                style={{ display: 'inline-flex', alignItems: 'center', flexDirection: 'row' }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Component Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 stagger-children">
            {filteredComponents.map((comp, i) => (
              <ComponentCard key={comp.id} comp={comp} index={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-2 max-w-4xl mx-auto">
            {filteredComponents.map((comp, i) => (
              <ComponentRow key={comp.id} comp={comp} index={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredComponents.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">{t('comp.emptyTitle')}</h3>
            <p className="text-base-content/50">{t('comp.emptyDesc')}</p>
            <Button size="sm" buttonStyle="text" onClick={() => { setSearchQuery(''); selectCategory('all') }}>
              {t('comp.clearFilter')}
            </Button>
          </div>
        )}
      </div>
    </main>
  )

  function ComponentCard({ comp, index }) {
    return (
      <ScrollReveal delay={(index % 8) * 50}>
        <Card
          interactive
          variant="outlined"
          onClick={() => navigate(`/components/${comp.id}`)}
          className="component-card group h-full cursor-pointer"
        >
          <div className="bg-base-200/60 p-4 flex items-center justify-center min-h-[140px]">
            <div className="w-full aspect-video flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
              <ComponentPreviewIcon id={comp.id} />
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Badge size="sm">{t('comp.viewDetail')}</Badge>
            </div>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-base-content group-hover:text-primary transition-colors">{comp.name}</h3>
            <p className="text-sm text-base-content/50 line-clamp-2">{comp.desc}</p>
            {comp.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-1">
                {comp.tags.slice(0, 3).map(tag => (
                  <Badge key={tag} size="sm" className="opacity-60 text-[10px]">{tag}</Badge>
                ))}
                {comp.tags.length > 3 && (
                  <Badge size="sm" className="opacity-40 text-[10px]">+{comp.tags.length - 3}</Badge>
                )}
              </div>
            )}
          </div>
        </Card>
      </ScrollReveal>
    )
  }

  function ComponentRow({ comp, index }) {
    return (
      <ScrollReveal delay={index * 30}>
        <Card
          interactive
          variant="outlined"
          onClick={() => navigate(`/components/${comp.id}`)}
          className="group hover:border-primary/30 transition-colors p-4 flex items-center gap-4 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-base-200/60 flex items-center justify-center shrink-0 overflow-hidden">
            <ComponentPreviewIcon id={comp.id} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base-content group-hover:text-primary transition-colors">{comp.name}</h3>
            <p className="text-sm text-base-content/50 truncate">{comp.desc}</p>
          </div>
          <div className="hidden md:flex gap-1 shrink-0">
            {comp.tags.slice(0, 2).map(tag => (
              <Badge key={tag} size="sm" className="text-xs opacity-60">{tag}</Badge>
            ))}
          </div>
          <svg className="w-5 h-5 text-base-content/20 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </Card>
      </ScrollReveal>
    )
  }
}
