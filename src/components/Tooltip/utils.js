// Tooltip 位置类名映射
export const placementClasses = {
  top: 'mb-1 left-1/2 -translate-x-1/2 bottom-full',
  bottom: 'mt-1 left-1/2 -translate-x-1/2 top-full',
  left: 'mr-1 right-full top-1/2 -translate-y-1/2',
  right: 'ml-1 left-full top-1/2 -translate-y-1/2'
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