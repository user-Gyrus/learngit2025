"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </div>
  );
}
