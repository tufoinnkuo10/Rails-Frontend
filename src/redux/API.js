import { loadMessageData } from './message';

const mainURL = 'http://127.0.0.1:5000/messages';

const getMessageData = async (dispatch) => {
  const response = await fetch(mainURL);
  const data = await response.json();
  dispatch(loadMessageData(data));
};

export default getMessageData;
