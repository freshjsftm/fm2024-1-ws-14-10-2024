import PropTypes from 'prop-types';

const Message = ({ msg:{ content, userId:{ login }}}) => {
  return (
    <article>
      <h3>{content}</h3>
      <p>message from {login}</p>
    </article>
  );
};

Message.propTypes = {
  msg: PropTypes.shape({
    _id: PropTypes.string,
    content: PropTypes.string,
    userId: PropTypes.shape({
      login: PropTypes.string,
    }),
  }),
};

export default Message;
