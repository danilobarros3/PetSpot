import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <Header />
      <Register />
      {/* <Login/> */}
      <Footer/>
    </div>
  );
}

export default App;
