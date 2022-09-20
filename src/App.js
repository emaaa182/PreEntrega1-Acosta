import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './components/nav/NavBar'
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <NavBar/>
        </Router>
      </header>
      <main>
        <ItemListContainer persona="persona 1"/> 
        <ItemListContainer persona="persona 2"/>
      </main>
    </div>
  );
}

export default App;
