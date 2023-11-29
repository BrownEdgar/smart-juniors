import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountrySelector, updateFilter } from '../../features/books/booksSlice'

import './Select.css'

export default function Select() {
  console.log("select render")
  const uniqueCountries = useSelector(getAllCountrySelector);

  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(updateFilter(e.target.value))
  }


  return (
    <select name="country" id="country" onChange={handleChange} defaultValue='all'>
      <option value={"all"}>all</option>
      {uniqueCountries.map(country => {
        return <option value={country} key={country}>{country}</option>
      })}
    </select>
  )
}
