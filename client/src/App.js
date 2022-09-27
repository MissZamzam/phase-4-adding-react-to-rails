import { useEffect } from "react";

function App() {
  
useEffect(() => {
  fetch("/movies")
  .then((res) => res.json())
  .then((movies) => console.log(movies));
}, []);

  return <h1>Hello from react</h1>
}

export default App;
