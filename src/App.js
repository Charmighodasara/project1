
import './App.css';
import Demo from './components/Demo';

function App() {

  // // spreading - for array 
  // let arr1 = [10, 20, 30, 40, 50];

  // // copy
  // let arr2 = [...arr1];
  // console.log(arr2);


  // // merging
  // let arr3 = [70, ...arr1, 90];
  // console.log(arr3);

  // //destructruing
  // let [a, b, c, d, e] = arr1;
  // console.log(c);


  // // spreading - for object
  // let obj = {
  //   id: 101,
  //   name: 'charmi'
  // };

  // // copy 
  // let obj1 = { ...obj };
  // console.log(obj1);

  // // merging 
  // let obj2 = {
  //   id: 102,
  //   name: 'ghodasara',
  //   ...obj,
  //   location: 'surat'
  // };
  // console.log(obj2);

  // //destructuring 
  // let {id , name , location} = obj2;
  // console.log(id);


  let data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];
  // let {id , name, quantity ,price ,expiry ,status} = data;
  
  return (
    
    <div>
      <table border='1'>
        <th>Id</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Expiry</th>
        <th>Status</th>
        {
          data.map((d, i) => {
            return (  
              <tr>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.quantity}</td>
                <td>{d.price}</td>
                <td>{d.expiry}</td>
                <td>{d.status.toSring()}</td>
              </tr>
            )

          })

        }
      </table>
    </div>


  );
}



export default App;
