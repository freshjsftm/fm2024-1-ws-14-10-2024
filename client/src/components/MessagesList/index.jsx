import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMessages } from '../../store/chatSlice';
import Message from '../Message';

const MessagesList = () => {
  const isMounted = useRef(false);
  const { messages, error, isPending } = useSelector((store) => store.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      dispatch(getAllMessages());
    }
    //eslint-disable-next-line
  }, []);
  const showMessage = (msg) => <Message key={msg._id} msg={msg} />;
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>MessagesList Error!!! {error}</p>;
  }
  return (
    <section>
      {messages.length === 0 ? <p>empty</p> : messages.map(showMessage)}
    </section>
  );
};

export default MessagesList;
