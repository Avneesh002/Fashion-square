import "./App.css";
// import Products from "./Pages/Product Page/Products";
import Navbar_main from "./Components/Navbar/Navbar_main";
import AdminHome from "./Pages/AdminBlock/AdminHome";
import Login from "./Pages/Signup_Login/Login";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <AdminHome />
    </div>
  );
}

export default App;
