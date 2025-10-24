import { useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Hello from react !!</h3>
      <MyButton count={count} onCount={handleCount} />
      <MyButton count={count} onCount={handleCount} />
    </div>
  );
}

export default App;
