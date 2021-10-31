import './App.css';
import CardList from './components/CardList'  
import CardForm from './components/CardForm';
import CardDelete from './components/CardDelete';

function App() {
  return (
    <div className="App">
      <CardDelete />
      <CardForm />
      <CardList />
    </div>
  );
}

export default App;
