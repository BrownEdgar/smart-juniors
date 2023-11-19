
export const PRODUCTS_KEY = "_products"

export function setStorage(product = null, state = false) {
  if(!state) {
    const products = JSON.parse(localStorage.getItem(PRODUCTS_KEY) || '[]')
  
    localStorage
      .setItem(PRODUCTS_KEY,
        product
          ? JSON.stringify([...products, product])
          : JSON.stringify(products)
      )
  } else {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(product))
  }
}

export const getProducts = () => JSON.parse(localStorage.getItem(PRODUCTS_KEY) || '[]')


export const randomText = [
  "Zooming down the open highway, the sleek sports car hugged the curves, its engine purring with power as the wind tousled the driver's hair.",

  "In the heart of the city, the electric car silently glided through traffic, its eco-friendly design turning heads and sparking conversations about the future of transportation.",

  "With tires gripping the off-road terrain, the rugged 4x4 tackled the rocky trail, proving that adventure and exploration are synonymous with the spirit of the SUV.",

  "Under the hood of the vintage classic, the meticulous restoration work revealed the beauty of automotive craftsmanship from a bygone era, capturing the essence of nostalgia.",

  "At the auto show, enthusiasts marveled at the cutting-edge features of the autonomous vehicle, a glimpse into a world where cars navigate seamlessly without human intervention.",

  "The family minivan, loaded with safety features and entertainment options, transformed the mundane school run into a comfortable and enjoyable journey for parents and kids alike.",

  "On the racetrack, the high-performance supercar left competitors in the dust, its aerodynamic design and lightning-fast acceleration setting a new standard for speed.",

  "In the showroom, the luxury sedan showcased opulent interiors, combining advanced technology with plush materials to create a driving experience that redefined comfort and style.",

  "Cruising along the coastal highway, the convertible embraced the freedom of the open road, its top down, and the sun casting a warm glow on the driver and passenger.",

  "In the world of electric mobility, the compact city car zipped through traffic, proving that efficiency and sustainability can coexist in a stylish and compact package."
]

export const cars = ["audi", "bmw", "kia", "mersedes", "toyota"]