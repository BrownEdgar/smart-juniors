import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import ROUTES from "./routes/routes";
import Layouts from "./components/Layouts/Layouts";
import {
  Home,
  Shop,
  Blog,
  Media,
  Features,
  Admin
} from "./pages/index";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProducts } from "./features/products/productsSlice";

export default function App() {
  axios.defaults.baseURL = "http://localhost:3000/"
  const dispatch = useDispatch()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.SHOP} element={<Shop />} loader={() => dispatch(getProducts())} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.MEDIA} element={<Media />} />
        <Route path={ROUTES.FEATURES} element={<Features />} />
        <Route path={ROUTES.ADMIN} element={<Admin />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
