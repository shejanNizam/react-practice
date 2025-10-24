import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleCount}>Clieked {count} times</button>
    </>
  );
}
