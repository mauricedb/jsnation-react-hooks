import React, { useState } from 'react';
import { LanguageContext } from './language-context';

const greetings = {
  de: 'Guten Morgen',
  en: 'Good morning',
  es: 'Buenos días',
  lt: 'Geras rytas',
  nl: 'Goedemorgen',
  ru: 'Доброе утро',
  cn: '早上好'
};

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  return (
    <div>
      <LanguageContext.Provider value={greetings[locale]}>
        <select onChange={e => setLocale(e.target.value)} autoFocus>
          <option value="en" selected={locale === 'en'}>
            English
          </option>
          <option value="nl" selected={locale === 'nl'}>
            Nederlands
          </option>
          <option value="de" selected={locale === 'de'}>
            Deutsche
          </option>
          <option value="es" selected={locale === 'es'}>
            Español
          </option>
          <option value="lt" selected={locale === 'lt'}>
            Lietuvių
          </option>
          <option value="ru" selected={locale === 'ru'}>
            русский
          </option>
          <option value="cn" selected={locale === 'cn'}>
            中文
          </option>
        </select>
        {children}
      </LanguageContext.Provider>
    </div>
  );
};
