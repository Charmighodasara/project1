
import './App.css';
import { useEffect, useState } from 'react';
import Loader from './containers/Loader';
import Home from './containers/Home';
import Pages from './containers/Pages';


const HomewithLoader = Loader(Home)
const PagewithLoader = Loader(Pages)


function App() {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState([])
  const [page , setPage] = useState([])


  const orgData = [
    { id: 101, name: 'charmi' },
    { id: 102, name: 'ghodasara' }
  ]

  const orgpage = [
    { id: 103, name: 'charmi' },
    { id: 104, name: 'ghodasara' }
  ]

  useEffect(() => {
    setLoader(true);
    setTimeout(() => { setLoader(false); setData(orgData); setPage(orgpage) }, 2000)

  }, [])

  return (
    <div>
      <HomewithLoader data={data}  />
      <PagewithLoader isLoading={loader} page={page} />
    </div>
  );
}

export default App;