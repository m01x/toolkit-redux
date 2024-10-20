import { useDispatch, useSelector } from 'react-redux'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import { decrement, increment, incrementByAmount } from './store/slices/counter';
import { useState } from 'react';

function App() {
  const [ amount, setAmount] = useState(1);
  
  const { counter } = useSelector( state => state.counter ); //Para obtener valores del estado, desde el estado.
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setAmount( parseInt(value) );

  }
 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Redux Toolkit</h1>
      <div><small>Counter : <b>{ counter }</b></small></div>
      <div className="card">
        <button onClick={()=> dispatch( increment() )}>
          Incrementar
        </button>
        <button onClick={()=> dispatch( decrement() )}>
          Decrementar
        </button>
        <div>
          <input 
            type="number" 
            className='incrementInput' 
            onChange={onChangeHandler}
            value={amount}
          />
          <button onClick={()=> dispatch( incrementByAmount(amount) )}>
            Incrementar por {amount}
          </button>
        </div>
      </div>
      
    </>
  )
}

export default App
