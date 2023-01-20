import "./App.css";

import Navbar_main from "./Components/Navbar/Navbar_main";
// import Homepage from "./Pages/Homepage/Homepage";
// import Products from "./Pages/Product Page/Products";
import Allroutes from "./Routes/Allroutes";

function App() {
  return (
    <div className="App">
      <Navbar_main />
      {/* <Homepage /> */}
      {/* <Products /> */}
      <Allroutes />
    </div>
  );
}

export default App;
