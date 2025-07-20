import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { useEffect } from 'react';


function App() {


  const {tg} = useTelegram();
  

  useEffect( () => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
