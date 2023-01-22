import "./App.css";
import Navbar_main from "./Components/Navbar/Navbar_main";
// import PaymentPage from "./Pages/PaymentPage/PaymentPage";
// import AdminHome from "./Pages/AdminBlock/AdminHome";
// import Products from "./Pages/Product Page/Products";

// import Homepage from "./Pages/Homepage/Homepage";
// import Products from "./Pages/Product Page/Products";
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
