import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from './en';
import frenchMessages from './fr';

const i18nProvider = polyglotI18nProvider(
  (locale) => {
    if (locale === 'fr') {
      // Plan to include translation for local languages in Uganda

      return frenchMessages;
    }
    // Always fallback on english
    return englishMessages;
  },
  'en',
  { allowMissing: true }
);

export default i18nProvider;
