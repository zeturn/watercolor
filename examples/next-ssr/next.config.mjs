/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The Watercolor packages ship modern ESM; transpile them so Next can bundle
  // the client boundary correctly.
  transpilePackages: ['@zeturn/watercolor-next', '@zeturn/watercolor-react', '@zeturn/watercolor-core'],
}

export default nextConfig
