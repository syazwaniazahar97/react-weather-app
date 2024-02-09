import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project is coded by Nur Syazwani and is open sourced on{" "}
        <a
          href="https://github.com/syazwaniazahar97/react-weather-app"
          target="blank"
        >
          Github
        </a>
        {" "}and hosted on{" "}
        <a
          href="https://exquisite-blancmange-cb87f5.netlify.app/"
          target="blank"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
