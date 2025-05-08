'use client';
import { useState } from 'react';

export default function Home() {
const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Click Me</button>
    </div>
  );
}