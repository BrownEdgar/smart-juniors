import { LOCALES } from "../locale";

const en = {
  [LOCALES.ENGLISH]: {
    title: "React Architecture: How to Structure and Organize a React Application",
    body: "There is no consensus on the right way to organize a React application. React gives you a lot of freedom, but with that freedom comes the responsibility of deciding on your own architecture. Often the case is that whoever sets up the application in the beginning throws almost everything in a components folder, or maybe components and containers if they used Redux, but I propose there's a better way. I like to be deliberate about how I organize my applications so they're easy to use, understand, and extend.",
    body2: "I'm going to show you what I consider to be an intuitive and scalable system for large-scale production React applications. The main concept I think is important is to make the architecture focused on feature as opposed to type, organizing only shared components on a global level and modularized all the other related entities together in the localized view."
  }
}

export default en