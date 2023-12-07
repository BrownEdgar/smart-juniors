import {useState} from "react";
import Translate from "./Translate";
import {LOCALES} from "./locale";
import Provider from "./Provider";
import './App.scss'

export default function App() {
    const [language,setLanguage] = useState(LOCALES.ARMENIAN)

    const changeLanguage = (e) => {
        setLanguage(LOCALES[e.target.value])
    }

    return (
      <Provider locale={language}>
       <div className="App-Content">
        <select name="language" id="language" onChange={changeLanguage}>
          {
            Object.keys(LOCALES).map(elm => {
              return (
                <option value={elm} key={elm}>{LOCALES[elm]}</option>
                )
              })
            }
                </select>
                <div className="App-Img">
                <h3>{Translate('imgDesc')}</h3>
                <img src="./Tigranes_II_the_Great,.jpg" alt="" className="App-img"/>
                <p>{Translate('imgDescBottom')}</p>
                <hr />
                <p>{Translate('imgDescAboutKing')}</p>
                <hr />
                <p>{Translate('imgDescAboutKing2')}</p>
                <hr />
                <p>{Translate('imgDescAboutKing3')}</p>
                </div>
               <h2>{Translate('title')}</h2>
               <h4>{Translate('desc')}</h4>
               <h4>{Translate('desc')}</h4>
               <button>{Translate('btnText')}</button>
            
            </div>
        </Provider>

    )
}
