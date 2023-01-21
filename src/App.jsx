import "./App.css";

import Navbar_main from "./Components/Navbar/Navbar_main";
// import PaymentPage from "./Pages/PaymentPage/PaymentPage";
// import AdminHome from "./Pages/AdminBlock/AdminHome";
// import Products from "./Pages/Product Page/Products";
// import Homepage from "./Pages/Homepage/Homepage";
// import Products from "./Pages/Product Page/Products";
//import Allroutes from "./Routes/Allroutes";

function App() {
  return (
    <div className="App">
      <Navbar_main /> 
       <Allroutes />
      {/* <AdminHome /> */}
      {/* <Products /> */}
      {/* <PaymentPage/> */}
    </div>
  );
}

export default App;
