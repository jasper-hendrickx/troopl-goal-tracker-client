import './App.css';
import GoalsList from './components/GoalsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CS Skills Tracker</h1>
        <hr />
      </header>
      <p>Courses</p>
      <GoalsList />
    </div>
  );
}

export default App;
