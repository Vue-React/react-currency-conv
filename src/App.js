import { useEffect, useState } from 'react';
import PBService from './API/PBService';
import Header from "./components/Header";
import Converters from "./components/Converters";
import './styles/App.css';

function App() {
  const [rates, setRates] = useState([]);
  const currencies = ['USD', 'EUR']

  async function fetchRates() {
    // получение данных
    const data = await PBService.getRates()

    // фильтрация
    const filterSet = new Set(currencies);
    const filtered = data.filter(e => filterSet.has(e.ccy));

    // округление значений
    filtered.forEach(obj => {
          obj.buy = Number(obj.buy).toFixed(2)
          obj.sale = Number(obj.sale).toFixed(2)
        }
    )

    setRates(filtered)
  }

  useEffect(() => {
    fetchRates()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Header rates={rates}/>
      <Converters rates={rates}/>
    </div>
  );
}

export default App;