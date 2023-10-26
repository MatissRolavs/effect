import ToDo from "./ToDo.js"
function App() {
  const todo = {
    userId: 1,
    id: 1,
    title: "title",
    completed: false,
  };
  
  

  return (
    <>
      <ToDo id={todo.id} checked={todo.completed} title={todo.title} userId={todo.userId}/>
    </>
  );
}

export default App;
