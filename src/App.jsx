import { useState } from "react"
import { LOCALES } from "./i18n/locale"
import translate from "./i18n/Translate"
import Provider from "./i18n/Provider"

import "./App.scss"

export default function App() {
  const [language, setLanguage] = useState(LOCALES.ENGLISH)

  const handleChange = (e) => {
    setLanguage(LOCALES[e.target.value])
  }

  return (
    <Provider locale={language}>
      <div className="App">
        <div className="App-langBox">
          <h2>Select Language: </h2>
          <select name="language" id="language" onChange={handleChange}>
            {
              Object.keys(LOCALES).map(elem => {
                return (
                  <option value={elem} key={elem}>{LOCALES[elem]}</option>
                )
              })
            }
          </select>
        </div>
        <div className="App-content">
          <h1>{translate("title")}</h1>
          <p>{translate("body")}</p>
          <p>{translate("body2")}</p>
        </div>
      </div>
    </Provider>
  )
}
