import { useState } from "react"
import "./Deals.scss"
import { IDeal } from "../../interfaces/interfaces"
import data from "../../data/data.json"
import DealsCarts from "../DealsCarts/DealsCarts";

export default function Deals() {
  const [deals, setDeals] = useState<IDeal[]>(data.deals);

  return (
    <div className="Deals">
      <h1>Best Property Deals</h1>
      <DealsCarts deals={deals}/>
    </div>
  )
}
