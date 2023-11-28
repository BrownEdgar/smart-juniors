import Products from "../../components/Products/Products"
import ShopConfig from "../../components/ShopConfig/ShopConfig"
import "./Shop.scss"

export default function Shop() {
  return (
    <div className="Shop">
      <Products/>
      <ShopConfig/>
    </div>
  )
}
