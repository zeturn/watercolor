import { mergeApplicationConfig, ApplicationConfig } from '@angular/core'
import { provideServerRendering } from '@angular/ssr'
import { appConfig as browserConfig } from './app.config'

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
}

export const appConfig = mergeApplicationConfig(browserConfig, serverConfig)
