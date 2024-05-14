import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-900">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
