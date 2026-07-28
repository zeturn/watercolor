import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node'
import { createThemeInitScript } from '@zeturn/watercolor-core'
import express from 'express'
import { join } from 'node:path'

const browserDistFolder = join(import.meta.dirname, '../browser')

const app = express()
const angularApp = new AngularNodeAppEngine()

// Resolve the color mode before hydration to avoid a flash of the wrong theme.
const themeInitScript = `<script>${createThemeInitScript({ defaultMode: 'system' })}</script>`

app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
)

app.use(async (req, res, next) => {
  try {
    const response = await angularApp.handle(req)
    if (!response) return next()
    const contentType = response.headers.get('content-type') ?? ''
    if (contentType.includes('text/html')) {
      const html = (await response.text()).replace('</head>', `${themeInitScript}</head>`)
      res.status(response.status)
      response.headers.forEach((value, key) => {
        if (key.toLowerCase() !== 'content-length') res.setHeader(key, value)
      })
      res.send(html)
      return
    }
    await writeResponseToNodeResponse(response, res)
  } catch (error) {
    next(error)
  }
})

if (isMainModule(import.meta.url)) {
  const port = Number(process.env['PORT'] ?? 4000)
  app.listen(port, () => {
    console.log(`Angular SSR example listening on http://localhost:${port}`)
  })
}

export const reqHandler = createNodeRequestHandler(app)
