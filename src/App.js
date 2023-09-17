// import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer";
import { Main } from "./components/Main";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";

function App() {
  const local = useLocation();
  const isLocal = local.pathname.includes("/login");
  return (
    <div className="flex flex-col">
      {!isLocal && <Header />}
      <Main />
      {!isLocal && <Footer />}
    </div>
  );
}

export default App;
