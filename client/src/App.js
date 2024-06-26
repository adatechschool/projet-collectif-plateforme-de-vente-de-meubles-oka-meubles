import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Formco from "./components/formco";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">

      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Chargement..." : data}</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
