import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Main from "./components/Main";
import Projects from "./components/ProjectsDisplay";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Projects></Projects>
    </>
  );
}

export default App;
