import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createNewMessages } from '../../api';

const MessageForm = () => {
  const { user } = useSelector((store) => store.user);
  //eslint-disable-next-line
  const onSubmit = (values, formikBag) => {
    const message = { ...values, userId: user?._id };
    createNewMessages(message);
  };
  return (
    <Formik initialValues={{ content: '' }} onSubmit={onSubmit}>
      <Form>
        <label>
          <span>new message</span>
          <Field name="content" />
          <ErrorMessage name="content" />
        </label>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default MessageForm;
