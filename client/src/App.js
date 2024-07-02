import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Formco from "./components/formco";
import Homepage from "./components/homepage";
import background from "./assets/background.jpg"
import DataFetcher from "./components/DataFetcher";


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
    <main>
    <Navbar/>   
    <Homepage/>
    <DataFetcher/>
    <Footer/>
    </main>
    </>
  );
}

export default App;
