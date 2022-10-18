import React, { useContext } from 'react';
import { StoreContext } from './store/useStore';
import { observer } from 'mobx-react';

const App = observer(() => {
  const { counter: { value, increment, decrement } } = useContext(StoreContext)

  return (
    <div className="App">
      {value}
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  )
});

export default App;
