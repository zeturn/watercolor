declare module 'feather-icons' {
  export interface FeatherIcon {
    toSvg: (options?: Record<string, unknown>) => string
  }

  export interface FeatherIcons {
    icons: Record<string, FeatherIcon>
  }

  const feather: FeatherIcons
  export default feather
}
