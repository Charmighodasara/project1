import React, { useEffect, useState } from 'react';
import Home from './containers/Home';
import Loader from './containers/Loader';
  
const HomeWithLoader = Loader(Home)
function App(props) {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState([])

  const employeeData = [
    {
      id: 101,
      name: 'Amit',
      joining_date: "01-06-2021",
      salary: 50000
    },
    {
      id: 102,
      name: 'Piyush',
      joining_date: "01-01-2019",
      salary: 60000
    },
    {
      id: 103,
      name: 'Meet',
      joining_date: "01-03-2020",
      salary: 25000
    },
    {
      id: 104,
      name: 'Lalit',
      joining_date: "01-12-2021",
      salary: 30000
    }
  ]
  const fData = employeeData.filter((e, i)=> e.salary > 25000 )
  useEffect(() => {
    setLoader(true);
    setTimeout(() => { setLoader(false); setData(employeeData) }, 1000)
  }, [])

  return (
    <div>
      < HomeWithLoader loader={loader} data={data} />
    </div>
  );
}

export default App;
