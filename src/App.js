import { useDispatch, useSelector } from 'react-redux';
import './App.css';


function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const clients = useSelector(state => state.clients.clients);
 
  
  const upCash = (value) => {
    const action = {
      type: "UP_CASH",
      payload: value
    }; 
    dispatch(action)
  };
  const dropCash = (value) => {
    const action = {
      type: "DROP_CASH",
      payload: value
    }; 
    dispatch(action)
  };

  return (
      <div className="app-wrapper">
        <div className="app-container">
          <div className="App">
            <h1>{cash}</h1>
            <button onClick={(e) => upCash(Number(prompt()))} className="button">up cash</button>
            <button onClick={(e) => dropCash(Number(prompt()))} className="button">drop cash</button>
          </div>
        </div>
      </div>
  );
}

export default App;
