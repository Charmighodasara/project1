
import './App.css';
import Demo from './components/Demo';

function App() {

  // spreading - for array 

  let arr1 = [10, 20, 30, 40, 50];

  // copy
  let arr2 = [...arr1];
  console.log(arr2);


  // merging
  let arr3 = [70, ...arr1, 90];
  console.log(arr3);

  //destructruing
  let [a, b, c, d, e] = arr1;
  console.log(c);


  // spreading - for object

  let obj = {
    id: 101,
    name: 'charmi'
  };

  // copy 
  let obj1 = { ...obj };
  console.log(obj1);

  // merging 
  let obj2 = {
    id: 102,
    name: 'ghodasara',
    ...obj,
    location: 'surat'
  };
  console.log(obj2);

  //destructuring 
  let {id , name , location} = obj2;
  console.log(id);


}


export default App;
