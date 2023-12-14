export interface IDeal {
  id: number;
  title: string;
  bads: number;
  baths: number;
  sqFoot: number;
  price: number;
  image: string;
}

export interface IDealsCartProp {
  deals: IDeal[]
}