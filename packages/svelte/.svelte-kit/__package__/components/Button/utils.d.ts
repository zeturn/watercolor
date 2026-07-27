/**
 * 验证Button变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidVariant(variant: string): boolean;
/**
 * 验证Button尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size: string): boolean;
/**
 * 验证Button类型
 * @param {string} type - 要验证的类型
 * @returns {boolean} 是否为有效类型
 */
export function isValidType(type: string): boolean;
/**
 * 验证rounded值
 * @param {boolean|string} rounded - 要验证的rounded值
 * @returns {boolean} 是否为有效rounded值
 */
export function isValidRounded(rounded: boolean | string): boolean;
/**
 * 验证Button样式模式
 * @param {string} buttonStyle - 要验证的样式模式
 * @returns {boolean} 是否为有效样式模式
 */
export function isValidButtonStyle(buttonStyle: string): boolean;
/**
 * 获取安全的Button变体
 * @param {string} variant - 输入的变体
 * @returns {string} 安全的变体名称
 */
export function getSafeVariant(variant: string): string;
/**
 * 获取Button的CSS类名
 * @param {Object} props - Button的props
 * @returns {Array<string>} CSS类名数组
 */
export function getButtonClasses(props: Object): Array<string>;
/**
 * 获取Button的内联样式
 * @param {string} variant - Button变体
 * @returns {Object} 内联样式对象
 */
export function getVariantStyles(variant: string): Object;
/**
 * 获取rounded的CSS类名
 * @param {boolean|string} rounded - rounded值
 * @returns {string} CSS类名
 */
export function getRoundedClass(rounded: boolean | string): string;
/**
 * 处理Button点击事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 点击事件
 * @param {boolean} params.disabled - 是否禁用
 * @param {boolean} params.loading - 是否加载中
 * @param {string} params.href - 链接地址
 * @param {string} params.target - 链接目标
 * @param {Function} params.onClick - 点击回调
 */
export function handleButtonClick({ event, disabled, loading, href, target, onClick }: {
    event: Event;
    disabled: boolean;
    loading: boolean;
    href: string;
    target: string;
    onClick: Function;
}): void;
/**
 * 有效的Button变体类型
 */
export const validVariants: string[];
/**
 * 有效的Button样式模式
 */
export const validStyles: string[];
/**
 * 有效的Button尺寸
 */
export const validSizes: string[];
/**
 * 有效的Button类型
 */
export const validTypes: string[];
/**
 * 有效的rounded值
 */
export const validRounded: string[];
