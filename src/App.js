// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import { Main } from './components/Main';
import Header from './components/Header';

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
