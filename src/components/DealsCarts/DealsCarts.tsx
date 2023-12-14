import { IDealsCartProp } from "../../interfaces/interfaces"

import "./DealsCarts.scss"

export default function DealsCarts({deals}: IDealsCartProp) {
  return (
    <div className="DealsCarts">
      {
        deals.map(deal => {
          return (
            <div key={deal.id} className="item">
              <div className="imgBox">
                <img src={deal.image} alt={deal.title} />
              </div>
              <div className="contentBox">
                <h2 className="_title">{deal.title}</h2>
                <hr />
                <div className="_params">
                  <span>{deal.bads} Bads</span>
                  <hr />
                  <span>{deal.baths} Baths</span>
                  <hr />
                  <span>{deal.sqFoot} Sq.Ft</span>
                </div>
                <div className="priceBox">
                  <span className="_price">{deal.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
