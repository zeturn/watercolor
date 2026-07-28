import { useI18n } from '../i18n'
import LangLink from './LangLink'

// 全站共享页脚：每个语言前缀页面都会渲染（由 LangLayout 挂载）。
export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="py-12 bg-base-200/50 border-t border-base-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">
                Water<span className="text-primary">color</span> UI
              </span>
            </div>
            <p className="text-base-content/60 max-w-sm">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">{t('footer.docs')}</h4>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li><LangLink to="/docs" className="hover:text-primary transition-colors">{t('footer.quickStart')}</LangLink></li>
              <li><LangLink to="/docs" className="hover:text-primary transition-colors">{t('footer.install')}</LangLink></li>
              <li><LangLink to="/docs" className="hover:text-primary transition-colors">{t('footer.theming')}</LangLink></li>
              <li><LangLink to="/docs" className="hover:text-primary transition-colors">{t('footer.api')}</LangLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">{t('footer.community')}</h4>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li><a href="https://github.com/zeturn/watercolor" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="https://github.com/zeturn/watercolor/issues" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('footer.feedback')}</a></li>
              <li><a href="https://github.com/zeturn/watercolor/discussions" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('footer.discussions')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-base-300 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-base-content/50">
          <p>{t('footer.copyright')}</p>
          <p>{t('footer.builtWith')}</p>
          <a
            href="https://hollowdata.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            A HollowData Project
          </a>
        </div>
      </div>
    </footer>
  )
}
