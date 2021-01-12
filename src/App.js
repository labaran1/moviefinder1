import './App.css';
import Home from './Component/Home';
import AppState from './context/appContext/AppState'

function App() {
  return (
    <AppState>
      <Home/>
    </AppState>
  );
}

export default App;
