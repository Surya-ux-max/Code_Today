import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <section id="center">
        <div className="hero">
          <h1>Suryaprakash S</h1>
        </div>
        <div>
          <h1>Connect with him via Linkedin</h1>
          <p>
            Stay Connected
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Send your love count for him! {count}
        </button>
      </section>

  );
}

export default App
