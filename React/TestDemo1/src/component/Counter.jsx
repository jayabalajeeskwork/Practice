// ```jsx
import { useState } from "react";
import "../App.css";
import { Student } from "./Student";
export default function Counter() {
  // STATE
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>React Basics</h1>

        {/* PROPS EXAMPLE */}
        <Student name="jb" age={23} />

        {/* STATE EXAMPLE */}
        <div className="counter">
          <h2>Counter: {count}</h2>

          <button onClick={() => setCount(count + 1)}>Increase</button>

          <button onClick={() => setCount(count - 1)}>Decrease</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>

      <div className="container">
        <h1>React Basics</h1>

        {/* PROPS EXAMPLE */}
        <Student name="jb" age={23} />

        {/* STATE EXAMPLE */}
        <div className="counter">
          <h2>Counter: {count}</h2>

          <button onClick={() => setCount(count + 1)}>Increase</button>

          <button onClick={() => setCount(count - 1)}>Decrease</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  );
}

// CHILD COMPONENT
