import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Main from "./components/Main";
import Work from "./components/Work";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Work></Work>
    </>
  );
}

export default App;
