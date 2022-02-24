import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Message from './Message';
import store from '../redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Message />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
