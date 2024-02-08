import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>This project is coded by Nur Syazwani and is {" "}
        < a href='https://github.com/syazwaniazahar97/react-weather-app' target='_blank'>open sourced on Github</a>
      </footer>
    </div>
  );
}

export default App;
