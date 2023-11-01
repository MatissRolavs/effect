import ToDo from "./ToDo.js"
import {useEffect, useState} from "react";

function App() {
  
  const [todo, setTodo] = useState();
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  
  useEffect(()=>{
    async function getTodo(){
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/90");
      const data = await response.json();
      setTodo(data);
      setIsLoading(false); // Set loading to false once data is fetched
    }
    getTodo();
  }, []);

  // Only render ToDo once data is fetched
  return (
    <>
      {isLoading ? 'Loading...' : <ToDo {...todo}/>}
    </>
  );
}

export default App;
