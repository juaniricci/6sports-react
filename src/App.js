import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { CardProducts } from './components/CardComponent/CardProduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardProducts />
    </div>
  );
}

export default App;
