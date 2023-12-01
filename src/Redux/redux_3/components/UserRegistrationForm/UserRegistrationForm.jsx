import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, mixed } from 'yup';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/users/usersSlice';
import './UserRegistrationForm.scss'

const UserRegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    userName: '',
    surname: '',
    email: '',
    photo: '',
  };

  const validationSchema = object({
    userName: string().required('Required'),
    surname: string().required('Required'),
    email: string().email('Invalid email').required('Required'),
    photo: mixed().required('Photo is required'),
  });

  const generateUserId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let userId = '';

    for (let i = 0; i < 3; i++) {
      userId += letters.charAt(Math.floor(Math.random() * letters.length));
      userId += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return userId;
  };

  const extractFileName = (filePath) => {
    console.log(filePath);
    return filePath.split('\\').pop().split('/').pop();
  };

  const onSubmit = (values, { resetForm }) => {
    console.log("Values:", values);
    const userId = generateUserId();
    values.photo = extractFileName(values.photo);
    console.log("Values:", values);
    dispatch(addUser({ ...values, userId }));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className='registration-form'>
        <div>
          <label htmlFor="userName">Name</label>
          <Field type="text" id="userName" name="userName" autoComplete="off" />
          <ErrorMessage className='error-message' name="userName" component="div" />
        </div>

        <div>
          <label htmlFor="surname">Surname</label>
          <Field type="text" id="surname" name="surname" autoComplete="off" />
          <ErrorMessage className='error-message' name="surname" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="text" id="email" name="email" autoComplete="off" />
          <ErrorMessage className='error-message' name="email" component="div" />
        </div>

        <div>
          <label htmlFor="photo">Photo</label>
          <Field type="file" id="photo" name="photo" autoComplete="off" />
          <ErrorMessage className='error-message' name="photo" component="div" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default UserRegistrationForm;
