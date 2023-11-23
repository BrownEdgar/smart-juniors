import { useDispatch, useSelector } from "react-redux"

import dateParse from "../../date/dateParser"
import { removeCompany, sortCompanies } from "../../features/companies/companiesSlice"
import "./Companies.scss"

export default function Companies() {
  const companies = useSelector(state => state.companies)
  const dispatch = useDispatch()

  const deleteCompany = (id) => {
    dispatch(removeCompany(id))
  }

  const sortComanies = () => {
    dispatch(sortCompanies())
  }

  return (
    <div className="Companies">
      <div className="Companies-header">
        <button onClick={sortComanies}>sort by date</button>
      </div>
      <ul className="Companies-items">
        {
          companies.map(company => {
            return (
              <li key={company.id} className="Companies-items_item">
                <i className="fa-solid fa-circle-xmark" onClick={() => deleteCompany(company.id)}></i>
                <h1>{company.name}</h1>
                <p>{`Email: ${company.contact.email}`}</p>
                <p>{`Phone Number: ${company.contact.phone}`}</p>
                <p>{`Address: ${company.contact.address}`}</p>
                <p>{dateParse(company.date)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
