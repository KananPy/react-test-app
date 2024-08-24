import './App.css';
import CardContainer from './components/CardContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const text = {
    name: 'Miri',
    age: 25,
    occupation: 'Motivator'
  }

  return (
    <div className="App">
      <CardContainer data={text}/>
    </div>
  );
}

export default App;
