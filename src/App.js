
import './App.css';
import Demo from './components/Demo';

function App() {
  // task-1 
  // const person = {
  //   name: "Amit",
  //   age: 25
  // }
  // console.log(person.name, person.age);

  // task-2 
  const person = [
    {
      name: "Amit",
      age: 25,
    },
    {
      name: "Piyush",
      age: 40,
    },
  ];

    person.map((p) => console.log(p.name, p.age));
}

export default App;
