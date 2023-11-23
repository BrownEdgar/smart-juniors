import { useDispatch, useSelector } from "react-redux"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { object, string } from "yup";

import { addCompany } from "../../features/companies/companiesSlice"
import "./CompanyForm.scss"

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: ""
}

const validationSchema = object({
  name: string()
    .matches(/^[A-Z]/, "First Letter must be a Upper Case")
    .min(3)
    .required(),
  email: string().email().required(),
  phone: string()
    .matches(/\d{9}/, "Only can be a digits minimum 9")
    .required(),
  address: string()
    .min(3)
    .required()
})

export default function CompanyForm() {
  const companies = useSelector(state => state.companies)
  const dispatch = useDispatch()

  const handleSubmit = (values, action) => {
    let { name, email, phone, address } = values;
    name = name.trim()
    address = address.trim()

    const existCompany = companies.some(company => company.name === name)
    if (existCompany) {
      action.setFieldError("name", `Company name: "${name}" is already exists!`)
      return
    } // return if company name is exists

    const randomId = Math.floor(Math.random() * 99999 + 10000).toString()

    dispatch(addCompany({
      id: randomId,
      name,
      contact: { address, phone, email }
    }))
    action.resetForm()
  }

  return (
    <div className="CompanyForm">
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={true}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* Name */}
          <label htmlFor="name">Company Name:</label>
          <Field type="text" name="name" id="name" placeholder="Enter Your Company Name" required autoComplete="off" />
          <ErrorMessage name="name" component={"p"} />
          {/* Email */}
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" id="email" placeholder="Email" required autoComplete="off" />
          <ErrorMessage name="email" component={"p"} />
          {/* Phone */}
          <label htmlFor="phone">Phone:</label>
          <Field type="text" name="phone" id="phone" placeholder="Enter a Phone number" required autoComplete="off" />
          <ErrorMessage name="phone" component={"p"} />
          {/* Address */}
          <label htmlFor="address">Address:</label>
          <Field type="text" name="address" id="address" placeholder="Enter your company address" required autoComplete="off" />
          <ErrorMessage name="address" component={"p"} />
          {/* submit button */}
          <input type="submit" value="Add new Company" />
        </Form>
      </Formik>
    </div>
  )
}
