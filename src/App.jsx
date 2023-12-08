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
        <header className='header'>
          <nav>
            <ul className='menu'>
              <li>{Translate('about')}</li>
              <li>{Translate('blog')}</li>
              <li>{Translate('projects')}</li>
              <li>{Translate('illustration')}</li>
              <li>GitHub</li>
            </ul>
          </nav>
          <select name="language" id="language" onChange={handleChange}>
            {
              Object.keys(LOCALES).map(elem => {
                return (
                  <option value={elem} key={elem}>{LOCALES[elem]}</option>
                )
              })
            }
          </select>
        </header>

        <div className='container'>
          <h1>{Translate('mainTitle')}</h1>
          <p>{Translate('mainContent')}</p>
        </div>
        {/* <h2>{Translate('title', { secretWord: "18.2.0" })}</h2>
        <p>{Translate('desc')}</p>
        <button>{Translate('btnText')}</button> */}
      </div>
    </Provider>
  )
}
