import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addClientAction, removeClientAction } from './store/clientReducer';
import { fetchClients } from './asyncActinos/clientsActions';
// make actionCreator fn

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

  const addClient = (value) => {
    const client = {
      name: value,
      id: Date.now()
    };
    // const action = {
    //   type: "ADD_CLIENT",
    //   payload: client
    // };
    dispatch(addClientAction(client))
  };

  const removeClient = (value) => {
    // const action = {
    //   type: "REMOVE_CLIENT",
    //   payload: value
    // };
    dispatch(removeClientAction(value))
  };


  const clientStyle = {
    border: "1px solid black",
    borderRadius: "5px",
    cursor: "pointer",
    maxWidth: "150px",
    textAlign: "center",
    marginTop: "10px"
  };

  return (
      <div className="app-wrapper">
        <div className="app-container">
          <div className="App">
            <h1>{cash}</h1>
            <button onClick={e => upCash(Number(prompt()))} className="button">up cash</button>
            <button onClick={e => dropCash(Number(prompt()))} className="button">drop cash</button>
          </div>
          <button onClick={e => addClient(prompt())}>add client</button>
          <button onClick={e => dispatch(fetchClients())}>add many</button>
          <div>
              {clients.length > 0 ?
                  clients.map(client => <div style={clientStyle} key={client.id} onClick={e => removeClient(client.id)}>{client.name}</div>)
            :
              <h3>no clients</h3>
            }
          </div>
        </div>
      </div>
  );
}

export default App;
