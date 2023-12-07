import { Fragment } from 'react'
import { LOCALES } from './locale'
import { IntlProvider } from 'react-intl'
import messages from './messages'

export default function Provider({children, locale = LOCALES.ENGLISH}) {
  return (
    <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  )
}
