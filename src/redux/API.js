import { loadMessageData } from './message';

const mainURL = 'http://localhost:3000/messages';

const getMessageData = async (dispatch) => {
  const response = await fetch(mainURL);
  const data = await response.json();
  console.log('hello');
  dispatch(loadMessageData(data));
};

export default getMessageData;
