import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './components/Introduction';
import MyProject from './components/projects';

function App() {
  return (
    <div className="App">
      <h1>My Hobby : Cooking</h1>
      <HobbyIntroduction />
      <MyProject />
    </div>
  );
}

export default App;
