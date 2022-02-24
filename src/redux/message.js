const LOAD_MESSAGE = 'LOAD_MESSAGE';

const initialState = [];

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MESSAGE:
      return [...state, payload.description];
    default:
      return state;
  }
};

export const loadMessageData = (apiState) => ({
  type: LOAD_MESSAGE,
  payload: apiState,
});

export default reducer;
