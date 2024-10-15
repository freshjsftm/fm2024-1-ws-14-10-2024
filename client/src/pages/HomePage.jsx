import { useSelector } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import MessageForm from '../components/MessageForm';

const HomePage = () => {
  const { user, error, isPending } = useSelector((store) => store.user);
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error!!! {error}</p>;
  }
  if (user) {
    return (
      <div>
        Hi, {user.login}
        {/* <MessagesList /> */}
        <MessageForm />
      </div>
    );
  }
  return (
    <div>
      <h1>Registration</h1>
      <RegisterForm />
    </div>
  );
};

export default HomePage;
