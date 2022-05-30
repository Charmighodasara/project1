
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
  // const person = [
  //   {
  //     name: "Amit",
  //     age: 25,
  //   },
  //   {
  //     name: "Piyush",
  //     age: 40,
  //   },
  // ];
  // person.map((p) => console.log(p.name, p.age));

  // task-3 
  // const person = {
  //   name: "Amit",
  //   age: 25,
  //   course: [
  //     "C",
  //     "HTML"
  //   ]
  // }

  // for (let k in person) {
  //   if (k === 'course') {
  //     person[k].map((p) => console.log(p));
  //   } else {
  //     console.log(person[k]);
  //   }
  // }

  // task-4 
  // const person = [
  //   {
  //     name: "Amit",
  //     age: 25,
  //     course: [
  //       "C",
  //       "HTML"
  //     ]
  //   },
  //   {
  //     name: "Ajay",
  //     age: 40,
  //     course: [
  //       "Java",
  //       "JavaScript"
  //     ]
  //   }
  // ]
  // person.map((p)=> {
  //   console.log(p.name , p.age);
  //   p.course .map((c)=> console.log(c));
  // })

  // task-5
  // const myObj = {
  //   name: "John",
  //   age: 30,
  //   cars: {
  //     car1: "Ford",
  //     car2: "BMW",
  //     car3: "Fiat"
  //   }
  // }
  // for (let k in myObj) {
  //   if (k === 'cars') {
  //     for (let j in myObj[k]) {
  //       console.log(myObj[k][j]);
  //     }
  //   } else {
  //     console.log(myObj[k]);
  //   }
  // }
}

export default App;
