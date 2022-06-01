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

  let Employee =
    [
      {
        name: "amit",
        age: 35,
        salary: 40000,
        bonus: 1000,
        status: true
      },
      {
        name: "ajay",
        age: 25,
        salary: 38000,
        bonus: 2000,
        status: false
      },
      {
        name: "mayur",
        age: 23,
        salary: 50000,
        bonus: 500,
        status: true
      },
      {
        name: "jay",
        age: 29,
        salary: 35000,
        bonus: 600,
        status: true
      },
      {
        name: "raj",
        age: 33,
        salary: 22000,
        bonus: 2000,
        status: true
      },
    ];

  // madicine data 
  let fData = data.filter((d, i) => d.status === true && d.expiry >= 2022);
  let dSum = fData.reduce((acc, d, i) => acc + d.price, 0);

  // Employee 
  let fEmployee = Employee.filter((e, i) => e.status === true);
  // let total = fEmployee.reduce((acc , t , i) => acc + t.salary  ,0);
  let ebonus = fEmployee.reduce ((acc , f , i) => acc + f.salary + f.bonus , 0)
  // console.log(total);

  return (

    <div>
      <table border='1' cellspacing="0">
        <th>Id</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Expiry</th>
        <th>Status</th>
        <th>Total price</th>
        {
          fData.map((d, i) => {
            let { id, name, quantity, price, expiry, status } = d
            return (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{expiry}</td>
                <td>{status.toString()}</td>
                {i === 0 ? <td rowSpan={2}>{dSum}</td> : null}
              </tr>
            )
          })
        }
      </table>
{/* Employee table  */}
      <table border='1' cellspacing="0">
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Bonus</th>
        <th>Status</th>
        <th>total salary</th>
        <th>total</th>
        {
          fEmployee.map((e, i) => {
            // let total = fEmployee.reduce((acc , t , i) => acc + e.salary  ,0);
            let { name, age, salary, bonus, status} = e
            return (
              <tr key={i}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{salary}</td>
                <td>{bonus}</td>
                <td>{status.toString()}</td>
                {/* <td>{total}</td> */}
                {/* {i === 0 ? <td rowSpan={4}>{ebonus}</td> : null} */}
              </tr>
            )
          })
        }
      </table>
    </div>


  );

}



export default App;