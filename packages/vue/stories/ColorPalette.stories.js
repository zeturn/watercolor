import { h, ref, onMounted } from 'vue';

const COLOR_GROUPS = [
  { name: 'Primary', prefix: 'primary', grades: [50,100,200,300,400,500,600,700,800,900] },
  { name: 'Secondary', prefix: 'secondary', grades: [50,100,200,300,400,500,600,700,800,900] },
  { name: 'Neutral', prefix: 'neutral', grades: [0,50,100,200,300,400,500,600,700,800,900,950] },
  { name: 'Success', prefix: 'success', grades: [50,100,200,300,400,500,600,700,800,900] },
  { name: 'Info', prefix: 'info', grades: [50,100,200,300,400,500,600,700,800,900] },
  { name: 'Warning', prefix: 'warning', grades: [50,100,200,300,400,500,600,700,800,900] },
  { name: 'Error', prefix: 'error', grades: [50,100,200,300,400,500,600,700,800,900] },
  { name: 'Purple', prefix: 'purple', grades: [50,100,200,300,400,500,600,700,800,900] },
  { name: 'Pink', prefix: 'pink', grades: [50,100,200,300,400,500,600,700,800,900] },
  { name: 'Teal', prefix: 'teal', grades: [50,100,200,300,400,500,600,700,800,900] },
  { name: 'Indigo', prefix: 'indigo', grades: [50,100,200,300,400,500,600,700,800,900] },
];

function getCssVarValue(varName) {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

const ColorBlock = {
  props: ['varName'],
  setup(props) {
    const color = ref('');
    const update = () => {
      color.value = getCssVarValue(props.varName);
    };
    onMounted(() => {
      update();
      window.addEventListener('themechange', update);
    });
    return () => h('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' } }, [
      h('div', { style: { width: '48px', height: '32px', background: `var(${props.varName})`, borderRadius: '6px', border: '1px solid #eee' } }),
      h('code', { style: { minWidth: '140px' } }, props.varName),
      h('span', { style: { fontFamily: 'monospace', color: '#888' } }, color.value)
    ]);
  }
};

export default {
  title: 'Design System/Tokens/Color Palette',
  component: ColorBlock,
};

export const AllColorPalette = () => ({
  setup() {
    return () => h('div', { style: { padding: '24px' } }, [
      h('h2', { style: { marginBottom: '24px' } }, 'Watercolor UI color palette'),
      ...COLOR_GROUPS.map(group =>
        h('div', { key: group.prefix, style: { marginBottom: '32px' } }, [
          h('h3', { style: { marginBottom: '12px' } }, group.name),
          ...group.grades.map(grade => {
            const varName = `--wc-${group.prefix}-${grade}`;
            return h(ColorBlock, { varName, key: varName });
          })
        ])
      )
    ]);
  }
}); 
