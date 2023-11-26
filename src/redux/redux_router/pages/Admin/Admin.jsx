import { useDispatch } from "react-redux"

import { Formik, Form, Field, ErrorMessage } from "formik"
import { string, object, number } from "yup";

import { postProducts } from "../../features/products/productsSlice"
import "./Admin.scss"

const validationSchema = object({
  name: string().min(3).required(),
  description: string().min(3).required(),
  image: string().url().required(),
  price: number().min(1).required()
})

export default function Admin() {
  const dispatch = useDispatch()
  const initialValues = {
    name: "",
    description: "",
    image: "",
    price: ""
  }

  const handleSubmit = (values, { resetForm }) => {
    const { name, description, image, price } = values
    if (name.trim() && description.trim() && image.trim() && price.trim()) {
      dispatch(postProducts(values))
      resetForm()
    }
  }

  return (
    <div className="Admin">
      <Formik
        validateOnBlur={true}
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name">Product Name:</label>
          <Field type="text" name="name" placeholder="Product Name" required />
          <ErrorMessage name="name" component={"p"} />
          <label htmlFor="description">Product description:</label>
          <Field as="textarea" name="description" placeholder="description" required />
          <ErrorMessage name="description" component={"p"} />
          <label htmlFor="price">Product price:</label>
          <Field type="text" name="price" placeholder="Price" required />
          <ErrorMessage name="price" component={"p"} />
          <label htmlFor="image">Product Image:</label>
          <Field type="url" name="image" placeholder="image url..." required />
          <ErrorMessage name="image" component={"p"} />
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  )
}
