import { useState } from "react"
import "./FetchButton.scss"

export default function FetchButton() {
  const [data, setData] = useState([])
  const [timeOutId, setTimeOutId] = useState(null)
  
  const fetchData = ({target}) => {
    target.style.animation = "loadAnim 4s linear forwards, dataExist 1s 4s linear infinite"
    target.classList.add("load")
    target.setAttribute("disabled", "")
    const timeId = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/photos?_limit=25")
      .then(res => res.json())
      .then(res => setData(res))
      .finally(() => {
        target.style.animation = "none"
        target.removeAttribute("disabled")
      })
    }, 4000);
    setTimeOutId(timeId)
  }

  const cancelFetchData = ({target}) => {
    target.nextElementSibling.classList.remove("load")
    target.nextElementSibling.style.animation = "none";
    target.nextElementSibling.removeAttribute("disabled")
    clearTimeout(timeOutId)
  }

  return (
    <div className="FetchButton">
      <div className="FetchButton-btns">
        <button onClick={(e) => cancelFetchData(e)}>Cancel</button>
        <button onClick={(e) => fetchData(e)}>Fetch Data</button>
      </div>
      <div className="FetchButton-content">
        {
          data.length > 0
          ? data.map(photo => {
            return (
              <div className="FetchButton-content_item" key={photo.id}>
                <div className="_imgBox">
                  <img src={photo.url} alt="" />
                </div>
                <p>{photo.title}</p>
              </div>
            )
          })
          : null
        }
      </div>
    </div>
  )
}
