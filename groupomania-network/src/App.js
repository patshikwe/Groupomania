
import logo from './assets/logo/icon-left-font-monochrome-black.svg';
import Routes from "./components/Routes"



function App() {
  return (
    <div >
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <p>
          Bienvenue dans votre espace d'échange entre collègues!
        </p>
      </header>

      <Routes />

    </div>
  );
}

export default App;
