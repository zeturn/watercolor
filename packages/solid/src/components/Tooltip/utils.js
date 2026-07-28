// Tooltip 位置类名映射
export const placementClasses = {
  top: 'wc-tooltip--top',
  bottom: 'wc-tooltip--bottom',
  left: 'wc-tooltip--left',
  right: 'wc-tooltip--right'
}

// 有效的位置选项
export const validPlacements = ['top', 'bottom', 'left', 'right']

// 验证位置参数
export function validatePlacement(placement) {
  return validPlacements.includes(placement)
}

// 获取位置类名
export function getPlacementClass(placement) {
  return placementClasses[placement] || placementClasses.top
}