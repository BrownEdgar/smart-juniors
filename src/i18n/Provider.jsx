import { IntlProvider } from "react-intl";
import { LOCALES } from "./locale";
import React from 'react'
import { Fragment } from "react";
import messages  from "./messages";

export default function Provider({children, locale = LOCALES.ARMENIAN}) {
  return (
    <IntlProvider
        textComponent ={Fragment}
        locale = {locale}
        messages = {messages[locale]}
        >
        {children}
    </IntlProvider>
  )
}
