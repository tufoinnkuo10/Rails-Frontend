import { useSelector } from 'react-redux';
import getMessageData from '../redux/API';
import store from '../redux/configureStore';
import '../App.css';

store.dispatch(getMessageData);

function Message() {
  const messages = useSelector((state) => state.messageData);

  return (<h3>{messages}</h3>);
}

export default Message;
