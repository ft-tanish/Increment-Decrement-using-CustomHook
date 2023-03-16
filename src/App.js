import "./styles.css";
import useCount from "./useCount";

export default function App() {
  const [count, handleIncrement, handleDecrement, handleReset] = useCount();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
