import "./App.css";
import Navbar_main from "./Components/Navbar/Navbar_main";
import { useEffect } from "react";
import Allroutes from "./Routes/Allroutes";

function App() {
  useEffect(() => {
    document.title = "Fashion Square";
  }, []);

  return (
    <div className="App">
      <Navbar_main />
      <Allroutes />
    </div>
  );
}

export default App;
