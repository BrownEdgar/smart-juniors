import { useState } from 'react'
import './App.scss'
import Provider from './i18n/Provider'
import Translate from './i18n/Translate'
import { LOCALES } from './i18n/locale'

export default function App() {
  const [language, setLanguage] = useState(LOCALES.ENGLISH)

  const handleChange = (e) => {
    setLanguage(LOCALES[e.target.value])
  }
  return (
    <Provider locale={language}>
      <div className='App'>
        <select name="language" id="language" onChange={handleChange}>
          {
            Object.keys(LOCALES).map(elem => {
              return (
                <option value={elem} key={elem}>{LOCALES[elem]}</option>
              )
            })
          }
        </select>
        <h2>{Translate('title', { secretWord: "18.2.0" })}</h2>
        <p>{Translate('desc')}</p>
        <button>{Translate('btnText')}</button>
      </div>
    </Provider>
  )
}
