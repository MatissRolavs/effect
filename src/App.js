import ToDo from "./ToDo.js"
import {useEffect, useState} from "react";
function App() {
  
  const [todo, setTodo] = useState();
  
  useEffect(()=>{
    async function getTodo(){
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/69");
      const data = await response.json();
      setTodo(data);
      }
      getTodo();
    }, []);

  
  // const todo = {
  //   userId: 1,
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: false,
  // };
  
  

  return (
    <>
      <ToDo {...todo}/>
    </>
  );
}

export default App;
