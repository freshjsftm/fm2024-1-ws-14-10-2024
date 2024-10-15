import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { authUser } from '../../store/userSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  //eslint-disable-next-line
  const onSubmit = (values, formikBag) => {
    dispatch(authUser(values));
  };
  return (
    <Formik initialValues={{ login: '', email: '' }} onSubmit={onSubmit}>
      <Form>
        <label>
          <span>Login</span>
          <Field name="login" />
          <ErrorMessage name="login" />
        </label>
        <label>
          <span>Email</span>
          <Field name="email" />
          <ErrorMessage name="email" />
        </label>
        <button type="submit">Auth me</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
