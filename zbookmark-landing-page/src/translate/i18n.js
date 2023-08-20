import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { StringsComuns } from './languages'

i18n
    .use(LanguageDetector)
    .init({
        debug: false,
        defaultNS: ['components'],
        fallbackLng: 'pt',
        ns: ['components'],
        resources: StringsComuns
    })

export { i18n }
