import CompanyForm from "./components/CompanyForm/CompanyForm"

import "./App.scss"
import Companies from "./components/Companies/Companies"

export default function App() {
  return (
    <div className="App">
      <CompanyForm/>
      <Companies/>
    </div>
  )
}
