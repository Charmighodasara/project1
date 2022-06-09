
import './App.css';
import { useEffect, useState } from 'react';
import Loader from './containers/Loader';
import Home from './containers/Home';


const HomewithLoader = Loader(Home)


function App() {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState([])


  const orgData = [
    { id: 101, name: 'charmi' },
    { id: 102, name: 'ghodasara' }
  ]

  useEffect(() => {
    setLoader(true);
    setTimeout(() => { setLoader(false); setData(orgData) }, 2000)

  }, [])

  return (
    <div>
      <HomewithLoader isLoading={loader} data={data} />
    </div>
  );
}

export default App;
