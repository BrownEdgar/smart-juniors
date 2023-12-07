import React, { useState } from 'react'
import Translate from './i18n/Translate'
import { LOCALES } from './i18n/locale'
import Provider from './i18n/Provider'
import './App.scss'

export default function App() {
  const [language, setLanguage] = useState(LOCALES.ARMENIAN)

  const handleChange = (e)=>{
    setLanguage(LOCALES[e.target.value])
  }
  return (
    <Provider locale={language}>
      <div className='App'>
        <select name="langusge" id="language" onChange={handleChange}>
          {
            Object.keys(LOCALES).map(elem =>{
              return (
                <option value={elem} key={elem}>{LOCALES[elem]}</option>
              )
            })
          }
          </select>
        <h1>{Translate('title')}</h1>
        <h2>{Translate('desc')}</h2>
        <p>{Translate('paragraph')}</p>
        <button>{Translate('btntxt')}</button>
      </div>
    </Provider>
  )
}